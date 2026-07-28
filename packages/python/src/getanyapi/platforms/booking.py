# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the booking platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    model_config = ConfigDict(extra="allow")


class BookingNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BookingSearchInput],
    ) -> BareRunResult[BookingSearchData]:
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
        return BareRunResult[BookingSearchData].model_validate(raw)


class AsyncBookingNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BookingSearchInput],
    ) -> BareRunResult[BookingSearchData]:
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
        return BareRunResult[BookingSearchData].model_validate(raw)
