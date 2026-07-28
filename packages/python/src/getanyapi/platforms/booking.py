# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the booking platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class BookingSearchInput(TypedDict, total=False):
    """Input for Booking.com Search."""

    adults: NotRequired[int]
    """Number of adult guests (e.g. 2). Minimum: 1."""
    checkIn: NotRequired[str]
    """Check-in date in YYYY-MM-DD format (e.g. 2026-07-01). Defaults to tomorrow."""
    checkOut: NotRequired[str]
    """Check-out date in YYYY-MM-DD format (e.g. 2026-07-05). Defaults to the day after check-in."""
    children: NotRequired[int]
    """Number of child guests (e.g. 1). Minimum: 0."""
    currency: NotRequired[str]
    """Currency code for prices (e.g. EUR). Default: USD."""
    limit: NotRequired[int]
    """Maximum number of hotels to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    query: Required[str]
    """Destination city to search for stays in (e.g. Paris)."""
    rooms: NotRequired[int]
    """Number of rooms to book (e.g. 1). Minimum: 1."""


class BookingSearchData(BaseModel):
    items: list[BookingSearchItem] = Field(
        description="Hotel result records: name, price, review score, star rating, address, and location. Populated whenever the provider has data for the entity."
    )


class BookingSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address: str | None = None
    city: str | None = None
    country: str | None = Field(default=None, description="ISO country code.")
    currency: str | None = None
    id: str | None = Field(
        default=None,
        description="Booking.com hotel identifier. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    image: str | None = Field(
        default=None,
        description="Primary hotel photo URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    latitude: float | None = None
    location: str | None = Field(
        default=None, description="Neighborhood or area label."
    )
    longitude: float | None = None
    name: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    price: float | None = Field(
        default=None, description="Total stay price in the requested currency."
    )
    price_per_night: float | None = Field(default=None, alias="pricePerNight")
    rating: float | None = Field(default=None, description="Guest review score (0-10).")
    review_score: float | None = Field(
        default=None, alias="reviewScore", description="Guest review score (0-10)."
    )
    reviews_count: int | None = Field(default=None, alias="reviewsCount")
    stars: int | None = Field(default=None, description="Star rating class (1-5).")
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class BookingNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BookingSearchInput],
    ) -> RunResult[BookingSearchData]:
        """Booking.com Search

        Search Booking.com stays by destination and dates with optional guest and
        room occupancy and get hotel results (name, price, review score, location)
        as normalized JSON.

        Price: $0.002 per request plus $0.0045 per result (maximum $0.092).

        Example:
            res = client.booking.search(adults=2, checkIn="2026-09-01", checkOut="2026-09-03", limit=3, query="New York")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "booking.search", dict(input), options
        )
        return RunResult[BookingSearchData].model_validate(raw)


class AsyncBookingNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BookingSearchInput],
    ) -> RunResult[BookingSearchData]:
        """Booking.com Search

        Search Booking.com stays by destination and dates with optional guest and
        room occupancy and get hotel results (name, price, review score, location)
        as normalized JSON.

        Price: $0.002 per request plus $0.0045 per result (maximum $0.092).

        Example:
            res = client.booking.search(adults=2, checkIn="2026-09-01", checkOut="2026-09-03", limit=3, query="New York")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "booking.search", dict(input), options
        )
        return RunResult[BookingSearchData].model_validate(raw)
