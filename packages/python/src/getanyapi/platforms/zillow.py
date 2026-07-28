# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the zillow platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    model_config = ConfigDict(extra="allow")


class ZillowSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ZillowNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def property(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZillowPropertyInput],
    ) -> BareRunResult[ZillowPropertyData]:
        """Zillow Property

        Fetch full details for a single Zillow property listing by URL (price, facts
        and features, photos, and price/tax history).

        Price: $0 per request plus $0.0024 per result (maximum $0.0024).

        Example:
            res = client.zillow.property(url="https://www.zillow.com/homedetails/4510-Secure-Ln-Austin-TX-78725/83126034_zpid/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "zillow.property", dict(input), options
        )
        return BareRunResult[ZillowPropertyData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZillowSearchInput],
    ) -> BareRunResult[ZillowSearchData]:
        """Zillow Search

        Search Zillow for-sale, rental, or sold listings by region-level location
        (city, ZIP, county, or neighborhood) with optional price, bedroom,
        living-area, home-type, recency, and sort filters and get matching
        properties (price, address, beds, baths, living area, status, Zestimate) as
        normalized JSON.

        Price: $0.0005 per request plus $0.003 per result (maximum $0.0755).

        Example:
            res = client.zillow.search(limit=3, location="Austin, TX", maxPrice=900000, minBedrooms=3, operation="buy")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "zillow.search", dict(input), options
        )
        return BareRunResult[ZillowSearchData].model_validate(raw)


class AsyncZillowNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def property(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZillowPropertyInput],
    ) -> BareRunResult[ZillowPropertyData]:
        """Zillow Property

        Fetch full details for a single Zillow property listing by URL (price, facts
        and features, photos, and price/tax history).

        Price: $0 per request plus $0.0024 per result (maximum $0.0024).

        Example:
            res = client.zillow.property(url="https://www.zillow.com/homedetails/4510-Secure-Ln-Austin-TX-78725/83126034_zpid/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "zillow.property", dict(input), options
        )
        return BareRunResult[ZillowPropertyData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZillowSearchInput],
    ) -> BareRunResult[ZillowSearchData]:
        """Zillow Search

        Search Zillow for-sale, rental, or sold listings by region-level location
        (city, ZIP, county, or neighborhood) with optional price, bedroom,
        living-area, home-type, recency, and sort filters and get matching
        properties (price, address, beds, baths, living area, status, Zestimate) as
        normalized JSON.

        Price: $0.0005 per request plus $0.003 per result (maximum $0.0755).

        Example:
            res = client.zillow.search(limit=3, location="Austin, TX", maxPrice=900000, minBedrooms=3, operation="buy")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "zillow.search", dict(input), options
        )
        return BareRunResult[ZillowSearchData].model_validate(raw)
