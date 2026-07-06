"""Cursor pagination for the sync and async clients (SPEC 2.5, 3.5).

A ``Paginator`` walks a paginated SKU one page at a time, yielding either the
flattened items (``__iter__``) or whole ``RunResult`` pages (``.pages()``).

Walk semantics (frozen):
    * Page 1 is ``run(slug, input, options)``.
    * If ``output.found`` is false (or data is None), stop.
    * Yield each item from ``items_field``. If ``nextCursor`` is a non-empty
      string, set ``input["cursor"] = nextCursor`` and repeat; a null/empty
      ``nextCursor`` ends the walk.
    * ``options["max_items"]`` caps the TOTAL items yielded across all pages.
      It is NOT sent as the wire ``max_items`` shaping param from the iterator;
      the iterator manages paging itself.

The emitter targets the module-level helpers :func:`paginate` (sync) and
:func:`apaginate` (async): each takes the bound client, slug, input dict, and
the items field name, and returns the matching paginator.
"""

from __future__ import annotations

import copy
from collections.abc import AsyncIterator, Callable, Coroutine, Iterator
from typing import (
    TYPE_CHECKING,
    Any,
    Generic,
    TypeVar,
    cast,
)

from ._transport import as_dict
from .types import OutputFound, RunResult

if TYPE_CHECKING:
    from ._async_client import AsyncAnyAPI
    from ._client import AnyAPI

__all__ = ["Paginator", "AsyncPaginator", "paginate", "apaginate"]

Item = TypeVar("Item")
Data = TypeVar("Data")

_NEXT_CURSOR = "nextCursor"
_CURSOR = "cursor"

# A run callable: (slug, input, options) -> RunResult (sync) or coroutine (async).
SyncRun = Callable[[str, "dict[str, Any]", "Any"], RunResult[Any]]
AsyncRun = Callable[
    [str, "dict[str, Any]", "Any"], Coroutine[Any, Any, RunResult[Any]]
]


def _field(data: object, key: str) -> object:
    """Read ``key`` from a dict page or a pydantic data model."""
    if not isinstance(data, dict):
        return getattr(data, key, None)
    return as_dict(cast("object", data)).get(key)


def _extract(
    result: RunResult[Any], items_field: str
) -> tuple[list[Any], str | None]:
    """Pull (items, next_cursor) from a page, or ([], None) when not found."""
    output = result.output
    if not isinstance(output, OutputFound) or output.data is None:
        return [], None
    data: object = output.data
    raw_items = _field(data, items_field)
    next_cursor = _field(data, _NEXT_CURSOR)
    items: list[Any] = (
        list(cast("list[Any]", raw_items))
        if isinstance(raw_items, (list, tuple))
        else []
    )
    cursor = (
        next_cursor
        if isinstance(next_cursor, str) and next_cursor
        else None
    )
    return items, cursor


def _max_items(options: object) -> int | None:
    cap = as_dict(options).get("max_items")
    return cap if isinstance(cap, int) else None


def _page_options(options: object) -> object:
    """Strip max_items before sending: the iterator paces itself (SPEC 2.5)."""
    if not isinstance(options, dict):
        return options
    source = as_dict(cast("object", options))
    if "max_items" not in source:
        return source or None
    stripped: dict[str, object] = dict(source)
    stripped.pop("max_items", None)
    return stripped or None


class Paginator(Generic[Item, Data]):
    """Sync cursor walk over a paginated SKU."""

    def __init__(
        self,
        run: SyncRun,
        slug: str,
        input: dict[str, Any],
        items_field: str,
        options: Any = None,
    ) -> None:
        self._run = run
        self._slug = slug
        self._input = copy.deepcopy(input)
        self._items_field = items_field
        self._options = options
        self._cap = _max_items(options)
        self._page_options = _page_options(options)

    def _walk(self) -> Iterator[RunResult[Any]]:
        cursor: str | None = None
        while True:
            page_input = dict(self._input)
            if cursor is not None:
                page_input[_CURSOR] = cursor
            result = self._run(self._slug, page_input, self._page_options)
            yield result
            _, cursor = _extract(result, self._items_field)
            if cursor is None:
                return

    def pages(self) -> Iterator[RunResult[Data]]:
        """Yield whole RunResult pages (read ``cost_usd`` per page)."""
        yield from self._walk()

    def __iter__(self) -> Iterator[Item]:
        count = 0
        for result in self._walk():
            items, _ = _extract(result, self._items_field)
            for item in items:
                if self._cap is not None and count >= self._cap:
                    return
                yield item
                count += 1
            if self._cap is not None and count >= self._cap:
                return


class AsyncPaginator(Generic[Item, Data]):
    """Async cursor walk over a paginated SKU."""

    def __init__(
        self,
        run: AsyncRun,
        slug: str,
        input: dict[str, Any],
        items_field: str,
        options: Any = None,
    ) -> None:
        self._run = run
        self._slug = slug
        self._input = copy.deepcopy(input)
        self._items_field = items_field
        self._options = options
        self._cap = _max_items(options)
        self._page_options = _page_options(options)

    async def _walk(self) -> AsyncIterator[RunResult[Any]]:
        cursor: str | None = None
        while True:
            page_input = dict(self._input)
            if cursor is not None:
                page_input[_CURSOR] = cursor
            result = await self._run(self._slug, page_input, self._page_options)
            yield result
            _, cursor = _extract(result, self._items_field)
            if cursor is None:
                return

    async def pages(self) -> AsyncIterator[RunResult[Data]]:
        """Yield whole RunResult pages (read ``cost_usd`` per page)."""
        async for result in self._walk():
            yield result

    async def __aiter__(self) -> AsyncIterator[Item]:
        count = 0
        async for result in self._walk():
            items, _ = _extract(result, self._items_field)
            for item in items:
                if self._cap is not None and count >= self._cap:
                    return
                yield item
                count += 1
            if self._cap is not None and count >= self._cap:
                return


def paginate(
    client: AnyAPI,
    slug: str,
    input: dict[str, Any],
    items_field: str,
    options: Any = None,
) -> Paginator[Any, Any]:
    """Build a sync Paginator bound to the client's run seam (emitter target)."""
    run: SyncRun = client._run  # pyright: ignore[reportPrivateUsage]
    return Paginator(run, slug, input, items_field, options)


def apaginate(
    client: AsyncAnyAPI,
    slug: str,
    input: dict[str, Any],
    items_field: str,
    options: Any = None,
) -> AsyncPaginator[Any, Any]:
    """Build an async Paginator bound to the client's run seam (emitter target)."""
    run: AsyncRun = client._arun  # pyright: ignore[reportPrivateUsage]
    return AsyncPaginator(run, slug, input, items_field, options)
