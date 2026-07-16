"""Published-artifact smoke for the getanyapi PyPI package.

Installs are done by scripts/smoke.sh / the workflow into a fresh venv: this file
imports ``getanyapi`` as an INSTALLED package (never a path into the repo source)
and exercises the real packaging plus one live production call.

Flow: mint an ephemeral key via agent_signup() -> construct AnyAPI -> exercise
catalog/search/describe -> one live reddit.search call -> assert a well-formed envelope. Exit nonzero on
any failure with a readable report.
"""

from __future__ import annotations

import sys
import time
from typing import Any, Callable, TypeVar

T = TypeVar("T")


class _Flake(Exception):
    """Marks a transient transport error worth retrying."""


def _fail(message: str) -> None:
    print(f"FAIL pypi getanyapi: {message}", file=sys.stderr)
    sys.exit(1)


def _assert(cond: bool, message: str) -> None:
    if not cond:
        raise AssertionError(message)


def _with_retry(label: str, fn: Callable[[], T], attempts: int = 3) -> T:
    """Retry only genuine transport flakiness, never assertion failures."""
    last: Exception | None = None
    for i in range(1, attempts + 1):
        try:
            return fn()
        except _Flake as err:
            last = err
            if i == attempts:
                break
            backoff = 0.5 * i
            print(
                f"[retry] {label} attempt {i} failed ({err}); retrying in {backoff}s",
                file=sys.stderr,
            )
            time.sleep(backoff)
    assert last is not None
    raise last


def main() -> None:
    import getanyapi as sdk

    # Assert the packaged surface exports the symbols consumers rely on. A missing
    # export here is exactly the packaging bug this smoke exists to catch.
    for name in ("AnyAPI", "agent_signup", "unwrap", "AnyAPIError"):
        _assert(hasattr(sdk, name), f'export "{name}" is missing from getanyapi')

    def _is_transient(err: Exception) -> bool:
        if isinstance(
            err,
            (sdk.ConnectionError, sdk.TimeoutError, sdk.RateLimitedError),
        ):
            return True
        msg = str(err).lower()
        return any(
            s in msg for s in ("network", "timed out", "connection", "temporarily")
        )

    def _guard(fn: Callable[[], T]) -> Callable[[], T]:
        def inner() -> T:
            try:
                return fn()
            except Exception as err:  # noqa: BLE001 - classify then re-raise
                if _is_transient(err):
                    raise _Flake(str(err)) from err
                raise

        return inner

    # 1. Mint an ephemeral, capped key. No stored secret.
    signup = _with_retry(
        "agent_signup",
        _guard(lambda: sdk.agent_signup(label="sdk-published-smoke")),
    )
    _assert(
        isinstance(signup.secret, str) and len(signup.secret) > 0,
        "signup.secret is empty",
    )
    _assert(isinstance(signup.cap_usd, float), "signup.cap_usd is not a float")
    print(f"[ok] minted key (cap_usd=${signup.cap_usd})")

    # 2. Construct a client with the minted secret.
    client = sdk.AnyAPI(api_key=signup.secret)

    # 3. Exercise the published handwritten discovery surface first.
    catalog = _with_retry("catalog", _guard(lambda: client.catalog(category="search")))
    _assert(len(catalog) > 0, "catalog returned no search APIs")
    _assert(catalog[0].provider == "AnyAPI", "catalog provider is not AnyAPI")
    _assert(
        isinstance(catalog[0].pricing.from_offer.max_usd, float),
        "catalog nested pricing missing",
    )

    matches = _with_retry(
        "search",
        _guard(
            lambda: client.search(query="reddit search", platform="reddit", limit=1)
        ),
    )
    _assert(len(matches.results) == 1, "search returned no result")
    _assert(
        isinstance(matches.results[0].relevance, float),
        "search relevance missing",
    )
    described = _with_retry(
        "describe",
        _guard(lambda: client.describe(matches.results[0].slug)),
    )
    _assert(
        described.input_schema is not None and described.output_schema is not None,
        "describe schemas missing",
    )
    print(f"[ok] discovery catalog/search/describe -> {described.slug}")

    # 4. One real, cheap, live data call. reddit.search is non-mock.
    #    If the freshly minted cap blocks it (402), fall back to the cheapest
    #    known live SKU that returns a real 200.
    sku = "reddit.search"
    try:
        res: Any = _with_retry(
            "reddit.search",
            _guard(
                lambda: client.reddit.search(query="mechanical keyboard", sort="top")
            ),
        )
    except sdk.InsufficientBalanceError:
        sku = "reddit.subreddit_details"
        print(
            f"[fallback] reddit.search blocked by cap (402); trying {sku}",
            file=sys.stderr,
        )
        res = _with_retry(
            sku,
            _guard(lambda: client.reddit.subreddit_details(subreddit="programming")),
        )

    # 5. Assert the envelope is well-formed and the call was a real success.
    _assert(res is not None, "no response object")
    _assert(
        res.provider == "AnyAPI",
        f'provider must be "AnyAPI", got {res.provider!r}',
    )
    _assert(
        isinstance(res.cost_usd, float) and res.cost_usd >= 0,
        "cost_usd missing/invalid (not a real charged call)",
    )

    if sku == "reddit.search":
        _assert(res.output.found is True, "reddit.search returned not found")
        posts = res.output.data.posts
        _assert(isinstance(posts, list), "output.posts is not a list")
        _assert(len(posts) > 0, "output.posts is empty (no real data returned)")
        first = posts[0]
        _assert(
            isinstance(first.title, str) and len(first.title) > 0,
            "first post has no title",
        )
        _assert(isinstance(first.subreddit, str), "first post has no subreddit")
        print(
            f"[ok] {sku} -> {len(posts)} posts, cost_usd=${res.cost_usd}, "
            f'first="{first.title[:60]}"'
        )
    else:
        data = sdk.unwrap(res)
        _assert(
            isinstance(data.name, str) and len(data.name) > 0,
            "subreddit details missing name",
        )
        print(f"[ok] {sku} -> r/{data.name}, cost_usd=${res.cost_usd}")

    print(f"PASS pypi getanyapi: live {sku} call succeeded against production.")


if __name__ == "__main__":
    try:
        main()
    except AssertionError as err:
        _fail(f"assertion failed: {err}")
    except Exception as err:  # noqa: BLE001 - top-level reporter
        _fail(str(err))
