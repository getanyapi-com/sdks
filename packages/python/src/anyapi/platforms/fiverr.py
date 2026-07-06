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
        description="Gig records from the search or category URL. Operators may return additional fields beyond those documented here. Populated whenever the provider returns data."
    )


class FiverrSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    duration: int | None = Field(default=None, description="Delivery time in days.")
    gigId: str = Field(
        description="Stable Fiverr gig identifier. Populated whenever the provider returns data."
    )
    gigUrl: str = Field(
        description="Canonical Fiverr URL for the gig. Populated whenever the provider returns data."
    )
    image: str | None = Field(default=None, description="Primary gig thumbnail URL.")
    price: float | None = Field(default=None, description="Starting price in USD.")
    sellerCountry: str | None = Field(default=None, description="Seller country code.")
    sellerDisplayName: str | None = Field(
        default=None, description="Seller display name."
    )
    sellerLevel: str | None = Field(default=None, description="Fiverr seller level.")
    sellerName: str | None = Field(default=None, description="Seller username.")
    sellerRatingCount: int | None = Field(
        default=None, description="Number of seller ratings."
    )
    sellerRatingScore: float | None = Field(
        default=None, description="Average seller rating."
    )
    sellerUrl: str | None = Field(default=None, description="Seller profile URL.")
    title: str = Field(
        description="Gig headline. Populated whenever the provider returns data."
    )


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
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "fiverr.search", dict(input), options
        )
        return RunResult[FiverrSearchData].model_validate(raw.model_dump(by_alias=True))


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
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "fiverr.search", dict(input), options
        )
        return RunResult[FiverrSearchData].model_validate(raw.model_dump(by_alias=True))
