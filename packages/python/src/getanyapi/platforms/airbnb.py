# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the airbnb platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class AirbnbSearchInput(TypedDict, total=False):
    """Input for Airbnb Search."""

    adults: NotRequired[int]
    """Number of adult guests (e.g. 2). Minimum: 1."""
    checkIn: NotRequired[str]
    """Check-in date in YYYY-MM-DD format (e.g. 2026-07-01)."""
    checkOut: NotRequired[str]
    """Check-out date in YYYY-MM-DD format (e.g. 2026-07-05)."""
    children: NotRequired[int]
    """Number of child guests (e.g. 1). Minimum: 0."""
    currency: NotRequired[
        Literal[
            "USD",
            "CZK",
            "AUD",
            "BRL",
            "BGN",
            "CAD",
            "CLP",
            "CNY",
            "COP",
            "CRC",
            "HRK",
            "DKK",
            "EGP",
            "AED",
            "EUR",
            "GHS",
            "HKD",
            "HUF",
            "INR",
            "IDR",
            "ILS",
            "JPY",
            "KZT",
            "KES",
            "MYR",
            "MXN",
            "MAD",
            "TWD",
            "NZD",
            "NOK",
            "PEN",
            "PHP",
            "PLN",
            "GBP",
            "QAR",
            "RON",
            "SAR",
            "SGD",
            "ZAR",
            "KRW",
            "SEK",
            "CHF",
            "THB",
            "TRY",
            "UGX",
            "UAH",
            "UYU",
            "VND",
        ]
    ]
    """Currency code for prices (e.g. EUR). Default: USD."""
    infants: NotRequired[int]
    """Number of infant guests (e.g. 1). Minimum: 0."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    location: Required[str]
    """Location to search listings in (e.g. London)."""
    minBathrooms: NotRequired[int]
    """Minimum number of bathrooms (e.g. 2). Minimum: 0."""
    minBedrooms: NotRequired[int]
    """Minimum number of bedrooms (e.g. 2). Minimum: 0."""
    minBeds: NotRequired[int]
    """Minimum number of beds (e.g. 2). Minimum: 0."""
    pets: NotRequired[int]
    """Number of pets; only pet-friendly listings are returned when set (e.g. 1). Minimum: 0."""
    priceMax: NotRequired[int]
    """Maximum search price in the selected currency (e.g. 300). Minimum: 0."""
    priceMin: NotRequired[int]
    """Minimum search price in the selected currency (e.g. 50). Minimum: 0."""


class AirbnbSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class AirbnbNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AirbnbSearchInput],
    ) -> BareRunResult[AirbnbSearchData]:
        """Airbnb Search

        Search Airbnb listings by location and dates with optional price,
        beds/bedrooms/bathrooms, and guest-party filters and get results (name,
        total-stay price label, rating, host) as normalized JSON.

        Price: $0.00008 per request plus $0.0015 per result (maximum $0.03008).

        Example:
            res = client.airbnb.search(adults=2, limit=3, location="San Diego", minBedrooms=3)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "airbnb.search", dict(input), options
        )
        return BareRunResult[AirbnbSearchData].model_validate(raw)


class AsyncAirbnbNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AirbnbSearchInput],
    ) -> BareRunResult[AirbnbSearchData]:
        """Airbnb Search

        Search Airbnb listings by location and dates with optional price,
        beds/bedrooms/bathrooms, and guest-party filters and get results (name,
        total-stay price label, rating, host) as normalized JSON.

        Price: $0.00008 per request plus $0.0015 per result (maximum $0.03008).

        Example:
            res = client.airbnb.search(adults=2, limit=3, location="San Diego", minBedrooms=3)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "airbnb.search", dict(input), options
        )
        return BareRunResult[AirbnbSearchData].model_validate(raw)
