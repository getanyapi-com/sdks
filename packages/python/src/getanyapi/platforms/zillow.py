# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the zillow platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class ZillowPropertyInput(TypedDict, total=False):
    """Input for Zillow Property."""

    url: Required[str]
    """Zillow property details URL (e.g. https://www.zillow.com/homedetails/123-Main-St-Anytown-CA-90210/12345678_zpid/)."""


class ZillowSearchInput(TypedDict, total=False):
    """Input for Zillow Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    location: Required[str]
    """Location to search: city, ZIP code, neighborhood, or address (e.g. 'Austin, TX' or '78701')."""
    operation: NotRequired[Literal["buy", "rent", "sold"]]
    """Listing type: buy (for sale), rent, or sold. Default: buy."""


class ZillowPropertyData(BaseModel):
    items: list[ZillowPropertyItem] = Field(
        description="The matched property record (single element for a property lookup). Populated whenever the provider has data for the entity."
    )


class ZillowPropertyItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address_line: str | None = Field(
        default=None,
        alias="addressLine",
        description="Street address line of the property.",
    )
    baths: float | None = Field(default=None, description="Number of bathrooms.")
    beds: float | None = Field(default=None, description="Number of bedrooms.")
    city: str | None = Field(default=None, description="City the property is in.")
    county: str | None = Field(default=None, description="County the property is in.")
    currency: str | None = Field(
        default=None, description="Currency code for the price (e.g. USD)."
    )
    description: str | None = Field(
        default=None, description="Listing description text."
    )
    home_status: str | None = Field(
        default=None,
        alias="homeStatus",
        description="Listing status (e.g. FOR_SALE, RECENTLY_SOLD, OTHER).",
    )
    home_type: str | None = Field(
        default=None,
        alias="homeType",
        description="Home type (e.g. SINGLE_FAMILY, CONDO, TOWNHOUSE).",
    )
    image: str | None = Field(default=None, description="Primary listing photo URL.")
    latitude: float | None = Field(
        default=None, description="Latitude of the property in decimal degrees."
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the property in decimal degrees."
    )
    postal_code: str | None = Field(
        default=None,
        alias="postalCode",
        description="Postal (ZIP) code of the property.",
    )
    price: float | None = Field(
        default=None, description="Listed price in the listing currency."
    )
    property_tax_rate: float | None = Field(
        default=None,
        alias="propertyTaxRate",
        description="Annual property tax rate as a percentage.",
    )
    sqft: float | None = Field(
        default=None, description="Interior living area in square feet."
    )
    state: str | None = Field(
        default=None, description="Two-letter state code the property is in."
    )
    title: str | None = Field(
        default=None, description="Street address line used as the property title."
    )
    url: str = Field(
        description="Canonical Zillow property detail page URL. Populated whenever the provider has data for the entity."
    )
    zpid: str = Field(
        description="Zillow property id (zpid), the stable identifier for the property. Populated whenever the provider has data for the entity."
    )


class ZillowSearchData(BaseModel):
    items: list[ZillowSearchItem] = Field(
        description="Property listing records matching the search: address, price, beds, baths, living area, property type, status, Zestimate, and coordinates. Populated whenever the provider has data for the entity."
    )


class ZillowSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    baths: float | None = Field(default=None, description="Number of bathrooms.")
    beds: float | None = Field(default=None, description="Number of bedrooms.")
    city: str | None = None
    currency: str | None = Field(
        default=None, description="ISO currency code of the price (e.g. usd)."
    )
    days_on_zillow: int | None = Field(
        default=None,
        alias="daysOnZillow",
        description="Days the listing has been on Zillow.",
    )
    image: str | None = Field(
        default=None,
        description="URL of the primary listing photo. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    latitude: float | None = None
    living_area: float | None = Field(
        default=None,
        alias="livingArea",
        description="Interior living area in square feet.",
    )
    longitude: float | None = None
    lot_size: float | None = Field(
        default=None, alias="lotSize", description="Lot size in square feet."
    )
    price: float | None = Field(
        default=None, description="List price in the listing currency."
    )
    property_type: str | None = Field(
        default=None,
        alias="propertyType",
        description="Property type (e.g. singleFamily, condo, townhouse).",
    )
    rent_zestimate: float | None = Field(
        default=None,
        alias="rentZestimate",
        description="Zillow estimated monthly rent.",
    )
    state: str | None = Field(default=None, description="Two-letter state code.")
    status: str | None = Field(
        default=None, description="Listing status (e.g. forSale, forRent, sold)."
    )
    street_address: str | None = Field(
        default=None,
        alias="streetAddress",
        description="Street address of the property. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    url: str = Field(
        description="Absolute Zillow listing URL. Populated whenever the provider has data for the entity."
    )
    year_built: int | None = Field(default=None, alias="yearBuilt")
    zestimate: float | None = Field(
        default=None, description="Zillow estimated market value."
    )
    zipcode: str | None = None
    zpid: str = Field(
        description="Zillow property id (zpid). Populated whenever the provider has data for the entity."
    )


class ZillowNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def property(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZillowPropertyInput],
    ) -> RunResult[ZillowPropertyData]:
        """Zillow Property

        Fetch full details for a single Zillow property listing by URL (price, facts
        and features, photos, and price/tax history). **Price:** billed per result -
        \$2.40 per 1,000 results, capped at \$2.40 per 1,000 requests.

        Price: $0.0024 per result.

        Example:
            res = client.zillow.property(url="https://www.zillow.com/homedetails/4510-Secure-Ln-Austin-TX-78725/83126034_zpid/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "zillow.property", dict(input), options
        )
        return RunResult[ZillowPropertyData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZillowSearchInput],
    ) -> RunResult[ZillowSearchData]:
        """Zillow Search

        Search Zillow for-sale, rental, or sold listings by location (city, ZIP, or
        address) and get matching properties (price, address, beds, baths, living
        area, status, Zestimate) as normalized JSON. **Price:** billed per result -
        \$0.50 per 1,000 requests base + \$3.00 per 1,000 results, capped at \$75.50
        per 1,000 requests.

        Price: $0.0005 per request plus $0.003 per result.

        Example:
            res = client.zillow.search(limit=3, location="Austin, TX", operation="buy")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "zillow.search", dict(input), options
        )
        return RunResult[ZillowSearchData].model_validate(raw)


class AsyncZillowNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def property(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZillowPropertyInput],
    ) -> RunResult[ZillowPropertyData]:
        """Zillow Property

        Fetch full details for a single Zillow property listing by URL (price, facts
        and features, photos, and price/tax history). **Price:** billed per result -
        \$2.40 per 1,000 results, capped at \$2.40 per 1,000 requests.

        Price: $0.0024 per result.

        Example:
            res = client.zillow.property(url="https://www.zillow.com/homedetails/4510-Secure-Ln-Austin-TX-78725/83126034_zpid/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "zillow.property", dict(input), options
        )
        return RunResult[ZillowPropertyData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZillowSearchInput],
    ) -> RunResult[ZillowSearchData]:
        """Zillow Search

        Search Zillow for-sale, rental, or sold listings by location (city, ZIP, or
        address) and get matching properties (price, address, beds, baths, living
        area, status, Zestimate) as normalized JSON. **Price:** billed per result -
        \$0.50 per 1,000 requests base + \$3.00 per 1,000 results, capped at \$75.50
        per 1,000 requests.

        Price: $0.0005 per request plus $0.003 per result.

        Example:
            res = client.zillow.search(limit=3, location="Austin, TX", operation="buy")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "zillow.search", dict(input), options
        )
        return RunResult[ZillowSearchData].model_validate(raw)
