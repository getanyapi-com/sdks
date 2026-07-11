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

    daysOnZillow: NotRequired[
        Literal[
            "1_day",
            "1_week",
            "2_weeks",
            "1_month",
            "3_months",
            "6_months",
            "12_months",
            "24_months",
            "36_months",
        ]
    ]
    """Only include listings on Zillow at most this long (e.g. 1_week)."""
    homeTypes: NotRequired[
        list[
            Literal[
                "singleFamily",
                "multiFamily",
                "townhome",
                "condo",
                "apartment",
                "manufactured",
                "land",
            ]
        ]
    ]
    """Filter by property type; omit for any. Rentals support only singleFamily, multiFamily, townhome, and condo (e.g. ["singleFamily", "condo"])."""
    includeAcceptingBackupOffers: NotRequired[bool]
    """Include listings accepting backup offers, which Zillow excludes by default (e.g. true)."""
    includePendingAndUnderContract: NotRequired[bool]
    """Include pending and under-contract listings, which Zillow excludes by default (e.g. true)."""
    includeRoomForRent: NotRequired[bool]
    """Include room-for-rent listings in rent searches; when omitted or false only entire places are returned (e.g. true)."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    listingTypes: NotRequired[
        list[
            Literal[
                "fsba",
                "fsbo",
                "newConstruction",
                "comingSoon",
                "auction",
                "foreclosure",
                "foreclosed",
                "preforeclosure",
            ]
        ]
    ]
    """Listing types to include for buy searches; omit for all standard types. fsba = agent listed, fsbo = for sale by owner. Ignored for rent and sold (e.g. ["newConstruction"])."""
    location: Required[str]
    """Region-level location to search: ZIP code, city and state, county, or neighborhood (e.g. 'Austin, TX' or '78701'). Street addresses are not supported; use the property's ZIP code instead."""
    maxBedrooms: NotRequired[int]
    """Maximum number of bedrooms (e.g. 5). Minimum: 0."""
    maxLivingAreaSqft: NotRequired[int]
    """Maximum living area in square feet (e.g. 3000). Minimum: 0."""
    maxPrice: NotRequired[int]
    """Maximum price in USD: monthly rent for rentals, total price for buy/sold (e.g. 750000). Minimum: 0."""
    minBedrooms: NotRequired[int]
    """Minimum number of bedrooms (e.g. 3). Minimum: 0."""
    minLivingAreaSqft: NotRequired[int]
    """Minimum living area in square feet (e.g. 1500). Minimum: 0."""
    minPrice: NotRequired[int]
    """Minimum price in USD: monthly rent for rentals, total price for buy/sold (e.g. 250000). Minimum: 0."""
    operation: NotRequired[Literal["buy", "rent", "sold"]]
    """Listing type: buy (for sale), rent, or sold. Default: buy."""
    showOnlyPriceReductions: NotRequired[bool]
    """Only show listings with a price reduction. Buy searches only; ignored for rentals (e.g. true)."""
    sortBy: NotRequired[
        Literal[
            "newest",
            "recentlyChanged",
            "price_high",
            "price_low",
            "bedrooms",
            "bathrooms",
            "rentalPriorityScore",
        ]
    ]
    """Sort order for results; omit for Zillow's default relevance. rentalPriorityScore applies to rent searches only (e.g. newest)."""


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

        Search Zillow for-sale, rental, or sold listings by region-level location
        (city, ZIP, county, or neighborhood) with optional price, bedroom,
        living-area, home-type, recency, and sort filters and get matching
        properties (price, address, beds, baths, living area, status, Zestimate) as
        normalized JSON. **Price:** billed per result - \$0.50 per 1,000 requests
        base + \$3.00 per 1,000 results, capped at \$75.50 per 1,000 requests.

        Price: $0.0005 per request plus $0.003 per result.

        Example:
            res = client.zillow.search(limit=3, location="Austin, TX", maxPrice=900000, minBedrooms=3, operation="buy")
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

        Search Zillow for-sale, rental, or sold listings by region-level location
        (city, ZIP, county, or neighborhood) with optional price, bedroom,
        living-area, home-type, recency, and sort filters and get matching
        properties (price, address, beds, baths, living area, status, Zestimate) as
        normalized JSON. **Price:** billed per result - \$0.50 per 1,000 requests
        base + \$3.00 per 1,000 results, capped at \$75.50 per 1,000 requests.

        Price: $0.0005 per request plus $0.003 per result.

        Example:
            res = client.zillow.search(limit=3, location="Austin, TX", maxPrice=900000, minBedrooms=3, operation="buy")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "zillow.search", dict(input), options
        )
        return RunResult[ZillowSearchData].model_validate(raw)
