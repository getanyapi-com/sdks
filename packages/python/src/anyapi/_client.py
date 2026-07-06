"""Sync AnyAPI client (SPEC 3.1) and the module-level agent_signup helper.

Generated per-platform namespaces attach lazily. On first access,
``__getattr__(name)`` looks the name up in the generated registry
``anyapi.platforms.REGISTRY`` and imports the platform module, instantiating its
sync ``Namespace`` class bound to this client.

Namespace-attachment contract (target for the py-emitter):
    ``anyapi.platforms.__init__`` exposes a module-level dict named ``REGISTRY``
    mapping the client attribute name (the snake_case platform, e.g. "amazon")
    to a 3-tuple ``(module_suffix, sync_class_name, async_class_name)``:

        REGISTRY: dict[str, tuple[str, str, str]] = {
            "amazon": ("amazon", "AmazonNamespace", "AsyncAmazonNamespace"),
            ...
        }

    Each generated module ``anyapi.platforms.<module_suffix>`` defines both the
    sync class ``<sync_class_name>`` and the async class ``<async_class_name>``.
    Each namespace class has ``__init__(self, client)`` storing the client, and
    per-SKU methods that call ``client._run(slug, input, options)`` (sync) or
    ``client._arun(...)`` (async), plus ``iter_*`` methods returning a
    ``Paginator``/``AsyncPaginator`` via ``anyapi._pagination.paginate`` /
    ``apaginate``. The sync client instantiates the sync class; the async client
    instantiates the async class. Both look the attribute up by the SAME key in
    the SAME registry, so one generated table drives both clients.

    Namespace instances are cached on the client instance after first access.
"""

from __future__ import annotations

import importlib
import os
from typing import Any

import httpx

from . import _account
from ._errors import AnyAPIError, ConnectionError, TimeoutError
from ._transport import (
    RetryState,
    build_request,
    is_retryable_error,
    parse_response,
    sleep,
)
from .types import (
    AccountProfile,
    AgentSignupResult,
    Balance,
    CatalogEntry,
    RequestOptions,
    RunResult,
)

__all__ = ["AnyAPI", "agent_signup"]

_DEFAULT_BASE_URL = "https://api.getanyapi.com"


def lookup_namespace(name: str) -> tuple[str, str, str] | None:
    """Look ``name`` up in the generated platform registry (typed accessor)."""
    try:
        module = importlib.import_module("anyapi.platforms")
    except ImportError:
        return None
    registry: dict[str, tuple[str, str, str]] = getattr(module, "REGISTRY", {})
    return registry.get(name)


def _resolve_api_key(api_key: str | None) -> str:
    key = api_key if api_key is not None else os.environ.get("ANYAPI_API_KEY")
    if not key:
        raise AnyAPIError(
            "no API key: pass api_key= or set ANYAPI_API_KEY", status=0
        )
    return key


class AnyAPI:
    """Synchronous AnyAPI client (SPEC 3.1).

    Generated per-platform namespaces (``client.amazon``, ``client.facebook``,
    ...) attach lazily via ``__getattr__``; see the module docstring for the
    registry contract the emitter targets.
    """

    def __init__(
        self,
        *,
        api_key: str | None = None,
        base_url: str = _DEFAULT_BASE_URL,
        timeout: float = 60.0,
        max_retries: int = 2,
        http_client: httpx.Client | None = None,
    ) -> None:
        self._api_key = _resolve_api_key(api_key)
        self._base_url = base_url.rstrip("/")
        self._timeout = timeout
        self._max_retries = max_retries
        self._owns_client = http_client is None
        self._http = http_client or httpx.Client(timeout=timeout)
        self._namespaces: dict[str, Any] = {}

    # -- generated namespace attachment -----------------------------------

    def __getattr__(self, name: str) -> Any:
        # Only called for attributes not found normally.
        if name.startswith("_"):
            raise AttributeError(name)
        cache = self.__dict__.get("_namespaces")
        if cache is not None and name in cache:
            return cache[name]
        entry = lookup_namespace(name)
        if entry is None:
            raise AttributeError(name)
        module_suffix, sync_class, _async_class = entry
        module = importlib.import_module(f"anyapi.platforms.{module_suffix}")
        namespace = getattr(module, sync_class)(self)
        if cache is not None:
            cache[name] = namespace
        return namespace

    # -- transport seam ---------------------------------------------------

    def _run(
        self,
        slug: str,
        input: dict[str, Any],
        options: RequestOptions | None = None,
    ) -> RunResult[Any]:
        """Execute one SKU run with retries (the seam generated code calls)."""
        timeout = self._timeout
        max_retries = self._max_retries
        if options:
            opt_timeout = options.get("timeout")
            if opt_timeout is not None:
                timeout = float(opt_timeout)
            opt_retries = options.get("max_retries")
            if opt_retries is not None:
                max_retries = int(opt_retries)
        request = build_request(
            base_url=self._base_url,
            slug=slug,
            input=input,
            api_key=self._api_key,
            options=options,
            timeout=timeout,
        )
        retry = RetryState(max_retries)
        while True:
            response: httpx.Response | None = None
            try:
                response = self._http.send(request)
                return parse_response(response)
            except AnyAPIError as exc:
                if is_retryable_error(exc) and retry.can_retry:
                    sleep(retry.next_delay(response))
                    continue
                raise
            except httpx.TimeoutException as exc:
                raise TimeoutError(
                    str(exc) or "request timed out", status=0
                ) from exc
            except httpx.HTTPError as exc:
                if retry.can_retry:
                    sleep(retry.next_delay(None))
                    continue
                raise ConnectionError(
                    str(exc) or "connection failed", status=0
                ) from exc

    def run(
        self,
        slug: str,
        input: dict[str, Any],
        *,
        options: RequestOptions | None = None,
    ) -> RunResult[Any]:
        """Generic typed run for any SKU by slug (SPEC 3.1)."""
        return self._run(slug, input, options)

    # -- account + catalog ------------------------------------------------

    def _get(self, path: str, params: dict[str, str] | None = None) -> object:
        url = f"{self._base_url}{path}"
        headers = {
            "Authorization": f"Bearer {self._api_key}",
            "Accept": "application/json",
        }
        response = self._http.get(url, params=params or {}, headers=headers)
        return self._json_or_raise(response)

    def _json_or_raise(self, response: httpx.Response) -> object:
        request_id = response.headers.get("x-request-id")
        body: object = None
        try:
            body = response.json()
        except ValueError:
            body = None
        if response.status_code != 200:
            raise _account.map_error(response.status_code, body, request_id)
        return body

    def balance(self) -> Balance:
        return _account.parse_balance(self._get(_account.balance_path))

    def me(self) -> AccountProfile:
        return _account.parse_me(self._get(_account.me_path))

    def catalog(
        self, *, query: str | None = None, category: str | None = None
    ) -> list[CatalogEntry]:
        path, params = _account.catalog_request(query, category)
        return _account.parse_catalog(self._get(path, params))

    def describe(self, slug: str) -> CatalogEntry:
        return _account.parse_describe(self._get(_account.describe_path(slug)))

    # -- lifecycle --------------------------------------------------------

    def close(self) -> None:
        if self._owns_client:
            self._http.close()

    def __enter__(self) -> AnyAPI:
        return self

    def __exit__(self, *exc: object) -> None:
        self.close()


def agent_signup(
    *,
    base_url: str = _DEFAULT_BASE_URL,
    sponsor_email: str | None = None,
    label: str | None = None,
) -> AgentSignupResult:
    """Self-signup for an API key with no auth (SPEC 3.1, POST /agent/signup)."""
    body = _account.signup_request(sponsor_email, label)
    with httpx.Client(timeout=60.0) as http:
        response = http.post(
            f"{base_url.rstrip('/')}/agent/signup",
            json=body,
            headers={
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        )
    request_id = response.headers.get("x-request-id")
    parsed: object = None
    try:
        parsed = response.json()
    except ValueError:
        parsed = None
    if response.status_code not in (200, 201):
        raise _account.map_error(response.status_code, parsed, request_id)
    return _account.parse_signup(parsed)
