"""Async AsyncAnyAPI client (SPEC 3.1).

Mirrors :class:`getanyapi.AnyAPI` with ``async def`` methods, ``aclose``, and an
async context manager. Generated async namespaces attach lazily via
``__getattr__`` using the same ``getanyapi.platforms.REGISTRY`` table as the sync
client (see ``_client`` module docstring for the full contract); the async
client instantiates the registry's async class.
"""

from __future__ import annotations

import asyncio
import importlib
import os
from typing import Any

import httpx

from . import _account
from . import _transport
from ._client import lookup_namespace
from ._errors import AnyAPIError, ConnectionError, TimeoutError
from ._transport import (
    RetryState,
    build_request,
    is_retryable_error,
    parse_raw,
)
from .types import (
    AccountProfile,
    Balance,
    CatalogEntry,
    CatalogSearchResults,
    RequestOptions,
    RunResult,
)

__all__ = ["AsyncAnyAPI"]

_DEFAULT_BASE_URL = "https://api.getanyapi.com"


def _resolve_api_key(api_key: str | None) -> str:
    key = api_key if api_key is not None else os.environ.get("ANYAPI_API_KEY")
    if not key:
        raise AnyAPIError("no API key: pass api_key= or set ANYAPI_API_KEY", status=0)
    return key


class AsyncAnyAPI:
    """Asynchronous AnyAPI client (SPEC 3.1)."""

    def __init__(
        self,
        *,
        api_key: str | None = None,
        base_url: str = _DEFAULT_BASE_URL,
        timeout: float = 60.0,
        max_retries: int = 2,
        http_client: httpx.AsyncClient | None = None,
    ) -> None:
        self._api_key = _resolve_api_key(api_key)
        self._base_url = base_url.rstrip("/")
        self._timeout = timeout
        self._max_retries = max_retries
        self._owns_client = http_client is None
        self._http = http_client or httpx.AsyncClient(timeout=timeout)
        self._namespaces: dict[str, Any] = {}

    # -- generated namespace attachment -----------------------------------

    def __getattr__(self, name: str) -> Any:
        if name.startswith("_"):
            raise AttributeError(name)
        cache = self.__dict__.get("_namespaces")
        if cache is not None and name in cache:
            return cache[name]
        entry = lookup_namespace(name)
        if entry is None:
            raise AttributeError(name)
        module_suffix, _sync_class, async_class = entry
        module = importlib.import_module(f"getanyapi.platforms.{module_suffix}")
        namespace = getattr(module, async_class)(self)
        if cache is not None:
            cache[name] = namespace
        return namespace

    # -- transport seam ---------------------------------------------------

    async def _arun_raw(
        self,
        slug: str,
        input: dict[str, Any],
        options: RequestOptions | None = None,
    ) -> dict[str, Any]:
        """Execute one SKU run with retries, returning the raw JSON dict.

        The raw seam generated methods call (SPEC N2): the generated code
        validates this dict into its concrete ``RunResult[XData]`` /
        ``BareRunResult[XData]`` model, so there is no double-parse.
        """
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
                response = await self._http.send(request)
                return parse_raw(response)
            except AnyAPIError as exc:
                if is_retryable_error(exc) and retry.can_retry:
                    await asyncio.sleep(retry.next_delay(response))
                    continue
                raise
            except httpx.TimeoutException as exc:
                raise TimeoutError(str(exc) or "request timed out", status=0) from exc
            except httpx.HTTPError as exc:
                if retry.can_retry:
                    await asyncio.sleep(retry.next_delay(None))
                    continue
                raise ConnectionError(
                    str(exc) or "connection failed", status=0
                ) from exc

    async def _arun(
        self,
        slug: str,
        input: dict[str, Any],
        options: RequestOptions | None = None,
    ) -> RunResult[Any]:
        """Execute one SKU run and parse the generic found-data envelope."""
        raw = await self._arun_raw(slug, input, options)
        return _transport.validate_run_result(raw)

    async def run(
        self,
        slug: str,
        input: dict[str, Any],
        *,
        options: RequestOptions | None = None,
    ) -> RunResult[Any]:
        """Generic typed run for any SKU by slug (SPEC 3.1)."""
        return await self._arun(slug, input, options)

    # -- account + catalog ------------------------------------------------

    async def _get(self, path: str, params: dict[str, str] | None = None) -> object:
        url = f"{self._base_url}{path}"
        headers = {
            "Authorization": f"Bearer {self._api_key}",
            "Accept": "application/json",
        }
        response = await self._http.get(url, params=params or {}, headers=headers)
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

    async def balance(self) -> Balance:
        return _account.parse_balance(await self._get(_account.balance_path))

    async def me(self) -> AccountProfile:
        return _account.parse_me(await self._get(_account.me_path))

    async def catalog(self, *, category: str | None = None) -> list[CatalogEntry]:
        path, params = _account.catalog_request(category)
        return _account.parse_catalog(await self._get(path, params))

    async def search(
        self,
        *,
        query: str,
        category: str | None = None,
        platform: str | None = None,
        limit: int | None = None,
    ) -> CatalogSearchResults:
        path, params = _account.search_request(query, category, platform, limit)
        return _account.parse_search(await self._get(path, params))

    async def describe(self, slug: str) -> CatalogEntry:
        body = await self._get(_account.describe_path(slug))
        return _account.parse_describe(body)

    # -- lifecycle --------------------------------------------------------

    async def aclose(self) -> None:
        if self._owns_client:
            await self._http.aclose()

    async def __aenter__(self) -> AsyncAnyAPI:
        return self

    async def __aexit__(self, *exc: object) -> None:
        await self.aclose()
