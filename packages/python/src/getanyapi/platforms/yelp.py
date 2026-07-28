# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the yelp platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class YelpSearchInput(TypedDict, total=False):
    """Input for Yelp Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1 to 20, default 20). Range: 1 to 20."""
    location: Required[str]
    """City and state defining the search area (e.g. San Francisco, CA)."""
    query: Required[str]
    """Search term or category to look for (e.g. sushi)."""


class YelpSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YelpNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[YelpSearchInput]
    ) -> BareRunResult[YelpSearchData]:
        """Yelp Search

        Search Yelp for businesses by keyword and location: up to 20 listings with
        ratings, categories, and core business info per request.

        Price: $0.04 per request plus $0.00075 per result (maximum $0.055).

        Example:
            res = client.yelp.search(limit=5, location="Chicago, IL", query="pizza")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "yelp.search", dict(input), options
        )
        return BareRunResult[YelpSearchData].model_validate(raw)


class AsyncYelpNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[YelpSearchInput]
    ) -> BareRunResult[YelpSearchData]:
        """Yelp Search

        Search Yelp for businesses by keyword and location: up to 20 listings with
        ratings, categories, and core business info per request.

        Price: $0.04 per request plus $0.00075 per result (maximum $0.055).

        Example:
            res = client.yelp.search(limit=5, location="Chicago, IL", query="pizza")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "yelp.search", dict(input), options
        )
        return BareRunResult[YelpSearchData].model_validate(raw)
