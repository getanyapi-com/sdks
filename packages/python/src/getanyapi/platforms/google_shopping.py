# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the google_shopping platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class GoogleShoppingSearchInput(TypedDict, total=False):
    """Input for Google Shopping Search."""

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
    items: list[GoogleShoppingSearchItem] = Field(
        description="Matching Google Shopping product offers."
    )


class GoogleShoppingSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    brand: str | None = Field(
        default=None, description="Product brand; empty when not reported."
    )
    currency: str | None = Field(
        default=None,
        description='Price currency code, e.g. "USD"; empty when not reported.',
    )
    discount_percent: str | None = Field(
        default=None,
        alias="discountPercent",
        description='Discount label when on sale, e.g. "23% OFF"; empty otherwise.',
    )
    image: str | None = Field(
        default=None,
        description="Primary product image URL. Present whenever the upstream returns this record.",
    )
    list_price: float | None = Field(
        default=None,
        alias="listPrice",
        description="Pre-discount list price as a numeric amount; 0 when not on sale or reported only as text.",
    )
    list_price_text: str | None = Field(
        default=None,
        alias="listPriceText",
        description='Pre-discount list price as displayed, e.g. "$130"; empty when not applicable.',
    )
    price: float | None = Field(
        default=None,
        description="Current price as a numeric amount; 0 when the lane reports price only as text (see priceText).",
    )
    price_text: str | None = Field(
        default=None,
        alias="priceText",
        description='Current price as displayed, e.g. "$99.99"; empty when the lane reports a numeric price instead.',
    )
    product_id: str | None = Field(
        default=None, alias="productId", description="Provider product identifier."
    )
    rating: float | None = Field(
        default=None, description="Average product rating, 0-5; 0 when unrated."
    )
    reviews_count: int | None = Field(
        default=None,
        alias="reviewsCount",
        description="Number of ratings / reviews; 0 when none reported.",
    )
    seller: str | None = Field(
        default=None,
        description='Store / seller name offering the product, e.g. "Target".',
    )
    title: str = Field(description="Product title.")
    url: str = Field(
        description="Google Shopping product page URL (query retained; it encodes the product identity)."
    )


class GoogleShoppingNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleShoppingSearchInput],
    ) -> RunResult[GoogleShoppingSearchData]:
        """Google Shopping Search

        Search Google Shopping by keyword and get up to 10 product offers - title,
        price, store, rating, and link - localized by country and language, at a
        flat per-request USD price.

        Price: $0.01625 per request.

        Example:
            res = client.google_shopping.search(limit=10, query="airpods")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google_shopping.search", dict(input), options
        )
        return RunResult[GoogleShoppingSearchData].model_validate(raw)


class AsyncGoogleShoppingNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleShoppingSearchInput],
    ) -> RunResult[GoogleShoppingSearchData]:
        """Google Shopping Search

        Search Google Shopping by keyword and get up to 10 product offers - title,
        price, store, rating, and link - localized by country and language, at a
        flat per-request USD price.

        Price: $0.01625 per request.

        Example:
            res = client.google_shopping.search(limit=10, query="airpods")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google_shopping.search", dict(input), options
        )
        return RunResult[GoogleShoppingSearchData].model_validate(raw)
