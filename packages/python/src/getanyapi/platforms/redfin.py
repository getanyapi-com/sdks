# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the redfin platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class RedfinSearchInput(TypedDict, total=False):
    """Input for Redfin Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    url: Required[str]
    """Redfin search results URL for a city, ZIP or map area (e.g. https://www.redfin.com/city/30772/CA/San-Francisco)."""


class RedfinSearchData(BaseModel):
    items: list[RedfinSearchItem] = Field(
        description="Matching Redfin home listing records. Populated whenever the provider has data for the entity."
    )


class RedfinSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address_line: str | None = Field(
        default=None,
        alias="addressLine",
        description="Street address line of the home.",
    )
    baths: float | None = Field(
        default=None, description="Number of bathrooms (fractional for half baths)."
    )
    beds: float | None = Field(default=None, description="Number of bedrooms.")
    city: str | None = Field(default=None, description="City the home is in.")
    latitude: float | None = Field(
        default=None, description="Latitude of the home in decimal degrees."
    )
    listing_id: str | None = Field(
        default=None,
        alias="listingId",
        description="Redfin listing id for this specific listing.",
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the home in decimal degrees."
    )
    lot_size: float | None = Field(
        default=None, alias="lotSize", description="Lot size in square feet."
    )
    mls_id: str | None = Field(
        default=None, alias="mlsId", description="MLS number for the listing."
    )
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Postal (ZIP) code of the home."
    )
    price: float | None = Field(
        default=None, description="List (or last sale) price in US dollars."
    )
    price_per_sqft: float | None = Field(
        default=None,
        alias="pricePerSqft",
        description="Price per square foot in US dollars.",
    )
    property_id: str = Field(
        alias="propertyId",
        description="Redfin property id (stable identifier for the home). Populated whenever the provider has data for the entity.",
    )
    sold_utc: float | None = Field(
        default=None,
        alias="soldUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    sqft: float | None = Field(
        default=None, description="Interior living area in square feet."
    )
    state: str | None = Field(
        default=None, description="Two-letter state code the home is in."
    )
    status: str | None = Field(
        default=None, description="MLS listing status (e.g. Active, Coming Soon, Sold)."
    )
    title: str | None = Field(
        default=None, description="Street address line used as the listing title."
    )
    url: str = Field(
        description="Canonical Redfin listing detail page URL. Populated whenever the provider has data for the entity."
    )
    year_built: float | None = Field(
        default=None, alias="yearBuilt", description="Year the home was built."
    )


class RedfinNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedfinSearchInput],
    ) -> RunResult[RedfinSearchData]:
        """Redfin Search

        Run a Redfin map search by URL and get matching home listings (price,
        address, beds, baths, status) as normalized JSON. **Price:** billed per
        result - \$2.70 per 1,000 requests base + \$0.43 per 1,000 results, capped
        at \$13.45 per 1,000 requests.

        Price: $0.0027 per request plus $0.00043 per result.

        Example:
            res = client.redfin.search(limit=3, url="https://www.redfin.com/city/30818/TX/Austin")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "redfin.search", dict(input), options
        )
        return RunResult[RedfinSearchData].model_validate(raw)


class AsyncRedfinNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedfinSearchInput],
    ) -> RunResult[RedfinSearchData]:
        """Redfin Search

        Run a Redfin map search by URL and get matching home listings (price,
        address, beds, baths, status) as normalized JSON. **Price:** billed per
        result - \$2.70 per 1,000 requests base + \$0.43 per 1,000 results, capped
        at \$13.45 per 1,000 requests.

        Price: $0.0027 per request plus $0.00043 per result.

        Example:
            res = client.redfin.search(limit=3, url="https://www.redfin.com/city/30818/TX/Austin")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "redfin.search", dict(input), options
        )
        return RunResult[RedfinSearchData].model_validate(raw)
