# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the realtor platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class RealtorSearchInput(TypedDict, total=False):
    """Input for Realtor.com Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    location: Required[str]
    """City, ZIP code, neighborhood or state to search (e.g. Las Vegas, NV)."""
    priceMax: NotRequired[int]
    """Maximum listing price in USD (e.g. 750000)."""
    priceMin: NotRequired[int]
    """Minimum listing price in USD (e.g. 250000)."""
    searchMode: NotRequired[str]
    """Listing type to search: for_sale or sold (e.g. for_sale). Default: for_sale."""


class RealtorSearchData(BaseModel):
    items: list[RealtorSearchItem] = Field(
        description="Matching Realtor.com property listing records. Populated whenever the provider has data for the entity."
    )


class RealtorSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address_line: str | None = Field(
        default=None,
        alias="addressLine",
        description="Street address line of the property.",
    )
    baths: str | None = Field(
        default=None,
        description='Consolidated bathroom count (e.g. "3.5" for three full and one half bath).',
    )
    beds: float | None = Field(default=None, description="Number of bedrooms.")
    city: str | None = Field(default=None, description="City the property is in.")
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    days_on_market: float | None = Field(
        default=None,
        alias="daysOnMarket",
        description="Number of days the listing has been on the market.",
    )
    image: str | None = Field(default=None, description="Primary listing photo URL.")
    latitude: float | None = Field(
        default=None, description="Latitude of the property in decimal degrees."
    )
    listing_id: str | None = Field(
        default=None,
        alias="listingId",
        description="Realtor.com listing id for this specific listing of the property.",
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the property in decimal degrees."
    )
    lot_sqft: float | None = Field(
        default=None, alias="lotSqft", description="Lot size in square feet."
    )
    postal_code: str | None = Field(
        default=None,
        alias="postalCode",
        description="Postal (ZIP) code of the property.",
    )
    price: float | None = Field(
        default=None, description="Current list price in US dollars."
    )
    price_per_sqft: float | None = Field(
        default=None,
        alias="pricePerSqft",
        description="List price per square foot in US dollars.",
    )
    property_id: str = Field(
        alias="propertyId",
        description="Realtor.com property id (stable identifier for the listing). Populated whenever the provider has data for the entity.",
    )
    property_type: str | None = Field(
        default=None,
        alias="propertyType",
        description="Property type (e.g. single_family, condos, townhomes).",
    )
    sqft: float | None = Field(
        default=None, description="Interior living area in square feet."
    )
    state: str | None = Field(
        default=None, description="Two-letter state code the property is in."
    )
    status: str | None = Field(
        default=None, description="Listing status (e.g. for_sale, sold)."
    )
    title: str | None = Field(
        default=None,
        description="Human-readable street address line used as the listing title.",
    )
    url: str = Field(
        description="Canonical Realtor.com listing detail page URL. Populated whenever the provider has data for the entity."
    )
    year_built: float | None = Field(
        default=None, alias="yearBuilt", description="Year the property was built."
    )


class RealtorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RealtorSearchInput],
    ) -> RunResult[RealtorSearchData]:
        """Realtor.com Search

        Search Realtor.com listings by location with optional price filters and get
        property records (price, address, beds, baths) as normalized JSON.
        **Price:** billed per result - $5.00 per 1,000 requests base + $1.50 per
        1,000 results, capped at $42.50 per 1,000 requests.

        Price: $0.005 per request plus $0.0015 per result.

        Example:
            res = client.realtor.search(limit=3, location="Austin, TX")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "realtor.search", dict(input), options
        )
        return RunResult[RealtorSearchData].model_validate(raw)


class AsyncRealtorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RealtorSearchInput],
    ) -> RunResult[RealtorSearchData]:
        """Realtor.com Search

        Search Realtor.com listings by location with optional price filters and get
        property records (price, address, beds, baths) as normalized JSON.
        **Price:** billed per result - $5.00 per 1,000 requests base + $1.50 per
        1,000 results, capped at $42.50 per 1,000 requests.

        Price: $0.005 per request plus $0.0015 per result.

        Example:
            res = client.realtor.search(limit=3, location="Austin, TX")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "realtor.search", dict(input), options
        )
        return RunResult[RealtorSearchData].model_validate(raw)
