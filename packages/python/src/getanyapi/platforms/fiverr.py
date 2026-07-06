# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the fiverr platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class FiverrSearchInput(TypedDict, total=False):
    """Input for Fiverr Gig Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    url: Required[str]
    """Fiverr search or category page URL to extract gigs from."""


class FiverrSearchData(BaseModel):
    items: list[FiverrSearchItem] = Field(
        description="Gig records from the search or category URL. Operators may return additional fields beyond those documented here."
    )


class FiverrSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    duration: int | None = Field(default=None, description="Delivery time in days.")
    gig_id: str = Field(alias="gigId", description="Stable Fiverr gig identifier.")
    gig_url: str = Field(
        alias="gigUrl", description="Canonical Fiverr URL for the gig."
    )
    image: str | None = Field(default=None, description="Primary gig thumbnail URL.")
    price: float | None = Field(default=None, description="Starting price in USD.")
    seller_country: str | None = Field(
        default=None, alias="sellerCountry", description="Seller country code."
    )
    seller_display_name: str | None = Field(
        default=None, alias="sellerDisplayName", description="Seller display name."
    )
    seller_level: str | None = Field(
        default=None, alias="sellerLevel", description="Fiverr seller level."
    )
    seller_name: str | None = Field(
        default=None, alias="sellerName", description="Seller username."
    )
    seller_rating_count: int | None = Field(
        default=None, alias="sellerRatingCount", description="Number of seller ratings."
    )
    seller_rating_score: float | None = Field(
        default=None, alias="sellerRatingScore", description="Average seller rating."
    )
    seller_url: str | None = Field(
        default=None, alias="sellerUrl", description="Seller profile URL."
    )
    title: str = Field(description="Gig headline.")


class FiverrNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FiverrSearchInput],
    ) -> RunResult[FiverrSearchData]:
        """Fiverr Gig Search

        Extract Fiverr gig listings from any search or category URL - titles,
        sellers, ratings, and pricing as structured JSON with transparent
        per-request USD pricing.

        Price: $0.0015 per result.

        Example:
            res = client.fiverr.search(limit=3, url="https://www.fiverr.com/search/gigs?query=logo%20design")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "fiverr.search", dict(input), options
        )
        return RunResult[FiverrSearchData].model_validate(raw)


class AsyncFiverrNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FiverrSearchInput],
    ) -> RunResult[FiverrSearchData]:
        """Fiverr Gig Search

        Extract Fiverr gig listings from any search or category URL - titles,
        sellers, ratings, and pricing as structured JSON with transparent
        per-request USD pricing.

        Price: $0.0015 per result.

        Example:
            res = client.fiverr.search(limit=3, url="https://www.fiverr.com/search/gigs?query=logo%20design")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "fiverr.search", dict(input), options
        )
        return RunResult[FiverrSearchData].model_validate(raw)
