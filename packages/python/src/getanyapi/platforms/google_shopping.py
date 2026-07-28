# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the google_shopping platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class GoogleShoppingSearchInput(TypedDict, total=False):
    """Input for Google Shopping Search."""

    condition: NotRequired[Literal["ANY", "NEW", "USED", "REFURBISHED"]]
    """Only return products in this condition (e.g. "USED"); defaults to any condition."""
    country: NotRequired[str]
    """ISO 3166-1 alpha-2 country code for localized results (e.g. "us", "gb", "de"). Default: us."""
    language: NotRequired[str]
    """ISO 639-1 language code for results (e.g. "en", "es", "fr"). Default: en."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less. Range: 1 to 10."""
    query: Required[str]
    """Product name, brand, or keywords to search for (e.g. "Nike running shoes")."""
    sortBy: NotRequired[
        Literal["BEST_MATCH", "LOWEST_PRICE", "HIGHEST_PRICE", "TOP_RATED"]
    ]
    """Sort order for results (e.g. "LOWEST_PRICE"); defaults to relevance."""


class GoogleShoppingSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleShoppingNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleShoppingSearchInput],
    ) -> BareRunResult[GoogleShoppingSearchData]:
        """Google Shopping Search

        Search Google Shopping by keyword and get up to 10 product offers (title,
        price, store, rating, and link), localized by country and language.

        Price: $0.01625 per request.

        Example:
            res = client.google_shopping.search(limit=10, query="airpods")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google_shopping.search", dict(input), options
        )
        return BareRunResult[GoogleShoppingSearchData].model_validate(raw)


class AsyncGoogleShoppingNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleShoppingSearchInput],
    ) -> BareRunResult[GoogleShoppingSearchData]:
        """Google Shopping Search

        Search Google Shopping by keyword and get up to 10 product offers (title,
        price, store, rating, and link), localized by country and language.

        Price: $0.01625 per request.

        Example:
            res = client.google_shopping.search(limit=10, query="airpods")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google_shopping.search", dict(input), options
        )
        return BareRunResult[GoogleShoppingSearchData].model_validate(raw)
