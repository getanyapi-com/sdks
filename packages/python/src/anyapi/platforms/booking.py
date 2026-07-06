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

    checkIn: NotRequired[str]
    """Check-in date in YYYY-MM-DD format (e.g. 2026-07-01). Defaults to tomorrow."""
    checkOut: NotRequired[str]
    """Check-out date in YYYY-MM-DD format (e.g. 2026-07-05). Defaults to the day after check-in."""
    currency: NotRequired[str]
    """Currency code for prices (e.g. EUR). Default: USD."""
    limit: NotRequired[int]
    """Maximum number of hotels to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    query: Required[str]
    """Destination city to search for stays in (e.g. Paris)."""


class BookingSearchData(BaseModel):
    items: list[BookingSearchItem] = Field(
        description="Hotel result records: name, price, review score, star rating, address, and location. Populated whenever the provider returns data."
    )


class BookingSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    address: str | None = None
    city: str | None = None
    country: str | None = Field(default=None, description="ISO country code.")
    currency: str | None = None
    id: str | None = Field(
        default=None,
        description="Booking.com hotel identifier. Populated whenever the provider returns data.",
    )
    image: str | None = Field(
        default=None,
        description="Primary hotel photo URL. Populated whenever the provider returns data.",
    )
    latitude: float | None = None
    location: str | None = Field(
        default=None, description="Neighborhood or area label."
    )
    longitude: float | None = None
    name: str = Field(description="Populated whenever the provider returns data.")
    price: float | None = Field(
        default=None, description="Total stay price in the requested currency."
    )
    pricePerNight: float | None = None
    rating: float | None = Field(default=None, description="Guest review score (0-10).")
    reviewScore: float | None = Field(
        default=None, description="Guest review score (0-10)."
    )
    reviewsCount: int | None = None
    stars: int | None = Field(default=None, description="Star rating class (1-5).")
    url: str = Field(description="Populated whenever the provider returns data.")


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

        Search Booking.com stays by destination and dates and get hotel results
        (name, price, review score, location) as normalized JSON with flat
        per-request USD pricing.

        Price: $0.0045 per result.

        Example:
            res = client.booking.search(checkIn="2026-09-01", checkOut="2026-09-03", limit=3, query="New York")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "booking.search", dict(input), options
        )
        return RunResult[BookingSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )


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

        Search Booking.com stays by destination and dates and get hotel results
        (name, price, review score, location) as normalized JSON with flat
        per-request USD pricing.

        Price: $0.0045 per result.

        Example:
            res = client.booking.search(checkIn="2026-09-01", checkOut="2026-09-03", limit=3, query="New York")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "booking.search", dict(input), options
        )
        return RunResult[BookingSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )
