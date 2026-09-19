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

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""
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
    agent_name: str | None = Field(
        default=None, alias="agentName", description="Name of the listing agent."
    )
    baths: float | None = Field(
        default=None, description="Number of bathrooms (fractional for half baths)."
    )
    beds: float | None = Field(default=None, description="Number of bedrooms.")
    city: str | None = Field(default=None, description="City the home is in.")
    country_code: str | None = Field(
        default=None,
        alias="countryCode",
        description="ISO country code the home is in.",
    )
    days_on_market: float | None = Field(
        default=None,
        alias="daysOnMarket",
        description="Days the listing has been on the market.",
    )
    description: str | None = Field(
        default=None, description="Listing remarks written by the agent."
    )
    garage_spaces: float | None = Field(
        default=None, alias="garageSpaces", description="Number of garage spaces."
    )
    hoa_fee: float | None = Field(
        default=None,
        alias="hoaFee",
        description="Homeowners association fee, in US dollars, at the frequency Redfin reports.",
    )
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
    parking_spaces: float | None = Field(
        default=None, alias="parkingSpaces", description="Number of parking spaces."
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
    stories: float | None = Field(
        default=None, description="Number of storeys in the home."
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
        address, beds, baths, status) as normalized JSON.

        Price: $0.00297 per request plus $0.00048 per result (maximum $0.0148).

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
        address, beds, baths, status) as normalized JSON.

        Price: $0.00297 per request plus $0.00048 per result (maximum $0.0148).

        Example:
            res = client.redfin.search(limit=3, url="https://www.redfin.com/city/30818/TX/Austin")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "redfin.search", dict(input), options
        )
        return RunResult[RedfinSearchData].model_validate(raw)
