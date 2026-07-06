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
        description="Listing records: name, nightly price, rating, location, host info, and availability details. Populated whenever the provider returns data."
    )


class AirbnbSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    hostName: str | None = None
    id: str = Field(
        description="Airbnb listing identifier. Populated whenever the provider returns data."
    )
    image: str | None = Field(
        default=None,
        description="Primary listing image URL. Populated whenever the provider returns data.",
    )
    isAvailable: bool | None = None
    isSuperhost: bool | None = None
    latitude: float | None = None
    location: str | None = Field(default=None, description="Location subtitle.")
    longitude: float | None = None
    personCapacity: int | None = None
    price: str | None = Field(default=None, description="Nightly price label.")
    propertyType: str | None = None
    rating: float | None = Field(
        default=None, description="Guest satisfaction rating (0-5)."
    )
    reviewsCount: int | None = None
    roomType: str | None = None
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


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
        rating, host) as normalized JSON with flat per-request USD pricing.

        Price: $0.0015 per result.

        Example:
            res = client.airbnb.search(limit=3, location="San Diego")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "airbnb.search", dict(input), options
        )
        return RunResult[AirbnbSearchData].model_validate(raw.model_dump(by_alias=True))


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
        rating, host) as normalized JSON with flat per-request USD pricing.

        Price: $0.0015 per result.

        Example:
            res = client.airbnb.search(limit=3, location="San Diego")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "airbnb.search", dict(input), options
        )
        return RunResult[AirbnbSearchData].model_validate(raw.model_dump(by_alias=True))
