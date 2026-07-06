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
        description="Matching property records: full listing details including price, address, facts and features, photos, and price/tax history. Populated whenever the provider returns data."
    )


class ZillowPropertyItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    price: float
    title: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    url: str = Field(description="Populated whenever the provider returns data.")


class ZillowSearchData(BaseModel):
    items: list[ZillowSearchItem] = Field(
        description="Property listing records matching the search: address, price, beds, baths, living area, property type, status, Zestimate, and coordinates. Populated whenever the provider returns data."
    )


class ZillowSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    baths: float | None = Field(default=None, description="Number of bathrooms.")
    beds: float | None = Field(default=None, description="Number of bedrooms.")
    city: str | None = None
    currency: str | None = Field(
        default=None, description="ISO currency code of the price (e.g. usd)."
    )
    daysOnZillow: int | None = Field(
        default=None, description="Days the listing has been on Zillow."
    )
    image: str | None = Field(
        default=None,
        description="URL of the primary listing photo. Populated whenever the provider returns data.",
    )
    latitude: float | None = None
    livingArea: float | None = Field(
        default=None, description="Interior living area in square feet."
    )
    longitude: float | None = None
    lotSize: float | None = Field(default=None, description="Lot size in square feet.")
    price: float | None = Field(
        default=None, description="List price in the listing currency."
    )
    propertyType: str | None = Field(
        default=None, description="Property type (e.g. singleFamily, condo, townhouse)."
    )
    rentZestimate: float | None = Field(
        default=None, description="Zillow estimated monthly rent."
    )
    state: str | None = Field(default=None, description="Two-letter state code.")
    status: str | None = Field(
        default=None, description="Listing status (e.g. forSale, forRent, sold)."
    )
    streetAddress: str | None = Field(
        default=None,
        description="Street address of the property. Populated whenever the provider returns data.",
    )
    url: str = Field(
        description="Absolute Zillow listing URL. Populated whenever the provider returns data."
    )
    yearBuilt: int | None = None
    zestimate: float | None = Field(
        default=None, description="Zillow estimated market value."
    )
    zipcode: str | None = None
    zpid: str = Field(
        description="Zillow property id (zpid). Populated whenever the provider returns data."
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

        Fetch full details for a single Zillow property listing by URL - price,
        facts and features, photos, and price/tax history - with transparent
        per-request USD pricing.

        Price: $0.0024 per result.

        Example:
            res = client.zillow.property(url="https://www.zillow.com/homedetails/4510-Secure-Ln-Austin-TX-78725/83126034_zpid/")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "zillow.property", dict(input), options
        )
        return RunResult[ZillowPropertyData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZillowSearchInput],
    ) -> RunResult[ZillowSearchData]:
        """Zillow Search

        Search Zillow for-sale, rental, or sold listings by location (city, ZIP, or
        address) and get matching properties (price, address, beds, baths, living
        area, status, Zestimate) as normalized JSON with per-request USD pricing
        that scales with the number of results.

        Price: $0.003 per result.

        Example:
            res = client.zillow.search(limit=3, location="Austin, TX", operation="buy")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "zillow.search", dict(input), options
        )
        return RunResult[ZillowSearchData].model_validate(raw.model_dump(by_alias=True))


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

        Fetch full details for a single Zillow property listing by URL - price,
        facts and features, photos, and price/tax history - with transparent
        per-request USD pricing.

        Price: $0.0024 per result.

        Example:
            res = client.zillow.property(url="https://www.zillow.com/homedetails/4510-Secure-Ln-Austin-TX-78725/83126034_zpid/")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "zillow.property", dict(input), options
        )
        return RunResult[ZillowPropertyData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ZillowSearchInput],
    ) -> RunResult[ZillowSearchData]:
        """Zillow Search

        Search Zillow for-sale, rental, or sold listings by location (city, ZIP, or
        address) and get matching properties (price, address, beds, baths, living
        area, status, Zestimate) as normalized JSON with per-request USD pricing
        that scales with the number of results.

        Price: $0.003 per result.

        Example:
            res = client.zillow.search(limit=3, location="Austin, TX", operation="buy")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "zillow.search", dict(input), options
        )
        return RunResult[ZillowSearchData].model_validate(raw.model_dump(by_alias=True))
