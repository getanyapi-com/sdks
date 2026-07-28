# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the coinmarketcap platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class CoinmarketcapListingsInput(TypedDict, total=False):
    """Input for CoinMarketCap Listings."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""


class CoinmarketcapListingsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class CoinmarketcapNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def listings(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CoinmarketcapListingsInput],
    ) -> BareRunResult[CoinmarketcapListingsData]:
        """CoinMarketCap Listings

        Get the current top cryptocurrencies from CoinMarketCap (rank, price, market
        cap, volume, and 24h change) as normalized JSON.

        Price: $0 per request plus $0.0018 per result (maximum $0.045).

        Example:
            res = client.coinmarketcap.listings(limit=5)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "coinmarketcap.listings", dict(input), options
        )
        return BareRunResult[CoinmarketcapListingsData].model_validate(raw)


class AsyncCoinmarketcapNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def listings(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CoinmarketcapListingsInput],
    ) -> BareRunResult[CoinmarketcapListingsData]:
        """CoinMarketCap Listings

        Get the current top cryptocurrencies from CoinMarketCap (rank, price, market
        cap, volume, and 24h change) as normalized JSON.

        Price: $0 per request plus $0.0018 per result (maximum $0.045).

        Example:
            res = client.coinmarketcap.listings(limit=5)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "coinmarketcap.listings", dict(input), options
        )
        return BareRunResult[CoinmarketcapListingsData].model_validate(raw)
