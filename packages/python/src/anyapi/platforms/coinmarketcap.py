# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the coinmarketcap platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class CoinmarketcapListingsInput(TypedDict, total=False):
    """Input for CoinMarketCap Listings."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""


class CoinmarketcapListingsData(BaseModel):
    items: list[CoinmarketcapListingsItem] = Field(
        description="Cryptocurrency listing records: rank, name, symbol, price, market cap, trading volume, and 24h price change. Populated whenever the provider returns data."
    )


class CoinmarketcapListingsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    ath: float | None = Field(default=None, description="All-time high.")
    atl: float | None = Field(default=None, description="All-time low.")
    circulatingSupply: float | None = None
    high24h: float | None = None
    id: str = Field(
        description="CoinMarketCap identifier. Populated whenever the provider returns data."
    )
    lastUpdated: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    low24h: float | None = None
    marketCap: float | None = None
    name: str = Field(description="Populated whenever the provider returns data.")
    price: float | None = Field(
        default=None, description="Latest price in the primary quote currency (USD)."
    )
    slug: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    symbol: str = Field(description="Populated whenever the provider returns data.")
    totalSupply: float | None = None
    volume24h: float | None = Field(default=None, description="24h trading volume.")


class CoinmarketcapNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def listings(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CoinmarketcapListingsInput],
    ) -> RunResult[CoinmarketcapListingsData]:
        """CoinMarketCap Listings

        Get the current top cryptocurrencies from CoinMarketCap - rank, price,
        market cap, volume, and 24h change - as normalized JSON with transparent
        per-request USD pricing.

        Price: $0.0018 per result.

        Example:
            res = client.coinmarketcap.listings(limit=5)
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "coinmarketcap.listings", dict(input), options
        )
        return RunResult[CoinmarketcapListingsData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncCoinmarketcapNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def listings(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CoinmarketcapListingsInput],
    ) -> RunResult[CoinmarketcapListingsData]:
        """CoinMarketCap Listings

        Get the current top cryptocurrencies from CoinMarketCap - rank, price,
        market cap, volume, and 24h change - as normalized JSON with transparent
        per-request USD pricing.

        Price: $0.0018 per result.

        Example:
            res = client.coinmarketcap.listings(limit=5)
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "coinmarketcap.listings", dict(input), options
        )
        return RunResult[CoinmarketcapListingsData].model_validate(
            raw.model_dump(by_alias=True)
        )
