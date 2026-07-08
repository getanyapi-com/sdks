# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the airbnb platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class AirbnbSearchInput(TypedDict, total=False):
    """Input for Airbnb Search."""

    adults: NotRequired[int]
    """Number of adult guests (e.g. 2)."""
    checkIn: NotRequired[str]
    """Check-in date in YYYY-MM-DD format (e.g. 2026-07-01)."""
    checkOut: NotRequired[str]
    """Check-out date in YYYY-MM-DD format (e.g. 2026-07-05)."""
    currency: NotRequired[str]
    """Currency code for prices (e.g. EUR). Default: USD."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    location: Required[str]
    """Location to search listings in (e.g. London)."""


class AirbnbSearchData(BaseModel):
    items: list[AirbnbSearchItem] = Field(
        description="Listing records: name, nightly price, rating, location, host info, and availability details. Populated whenever the provider has data for the entity."
    )


class AirbnbSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    host_name: str | None = Field(default=None, alias="hostName")
    id: str = Field(
        description="Airbnb listing identifier. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="Primary listing image URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    is_available: bool | None = Field(default=None, alias="isAvailable")
    is_superhost: bool | None = Field(default=None, alias="isSuperhost")
    latitude: float | None = None
    location: str | None = Field(default=None, description="Location subtitle.")
    longitude: float | None = None
    person_capacity: int | None = Field(default=None, alias="personCapacity")
    price: str | None = Field(default=None, description="Nightly price label.")
    property_type: str | None = Field(default=None, alias="propertyType")
    rating: float | None = Field(
        default=None, description="Guest satisfaction rating (0-5)."
    )
    reviews_count: int | None = Field(default=None, alias="reviewsCount")
    room_type: str | None = Field(default=None, alias="roomType")
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class AirbnbNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AirbnbSearchInput],
    ) -> RunResult[AirbnbSearchData]:
        """Airbnb Search

        Search Airbnb listings by location and dates and get results (name, price,
        rating, host) as normalized JSON. **Price:** billed per result - $0.08 per
        1,000 requests base + $1.50 per 1,000 results, capped at $30.08 per 1,000
        requests.

        Price: $0.00008 per request plus $0.0015 per result.

        Example:
            res = client.airbnb.search(limit=3, location="San Diego")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "airbnb.search", dict(input), options
        )
        return RunResult[AirbnbSearchData].model_validate(raw)


class AsyncAirbnbNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AirbnbSearchInput],
    ) -> RunResult[AirbnbSearchData]:
        """Airbnb Search

        Search Airbnb listings by location and dates and get results (name, price,
        rating, host) as normalized JSON. **Price:** billed per result - $0.08 per
        1,000 requests base + $1.50 per 1,000 results, capped at $30.08 per 1,000
        requests.

        Price: $0.00008 per request plus $0.0015 per result.

        Example:
            res = client.airbnb.search(limit=3, location="San Diego")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "airbnb.search", dict(input), options
        )
        return RunResult[AirbnbSearchData].model_validate(raw)
