# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the dexscreener platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class DexscreenerTokensInput(TypedDict, total=False):
    """Input for DEX Screener Tokens."""

    chain: Required[str]
    """Blockchain network to list tokens for, optionally scoped to a DEX as chain/dex (e.g. solana or ethereum/uniswap)."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    order: NotRequired[str]
    """Sort direction: desc or asc (e.g. desc)."""
    rankBy: NotRequired[str]
    """Field to sort tokens by (e.g. volume, txns, liquidity, marketCap, trendingScoreH24)."""
    timeframe: NotRequired[str]
    """Stats timeframe: 24h, 6h, 1h, or 5m (e.g. 24h). Default: 24h."""


class DexscreenerTokensData(BaseModel):
    items: list[DexscreenerTokensItem] = Field(
        description="Token listing records: token name and symbol, price, liquidity, volume, transaction/maker counts, price change, market cap, and the DEX Screener pair URL. Populated whenever the provider has data for the entity."
    )


class DexscreenerTokensItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    age_hours: int | None = Field(
        default=None, alias="ageHours", description="Age of the token pair in hours."
    )
    image: str | None = Field(default=None, description="Token logo image URL.")
    liquidity_usd: float | None = Field(
        default=None, alias="liquidityUsd", description="Total pool liquidity in USD."
    )
    maker_count: int | None = Field(
        default=None,
        alias="makerCount",
        description="Number of distinct makers over the selected timeframe.",
    )
    market_cap_usd: float | None = Field(
        default=None,
        alias="marketCapUsd",
        description="Token market capitalization in USD.",
    )
    name: str | None = Field(
        default=None,
        description="Token full name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    pool_address: str | None = Field(
        default=None,
        alias="poolAddress",
        description="On-chain address of the liquidity pool.",
    )
    price: float = Field(
        description="Current token price in USD. Populated whenever the provider has data for the entity."
    )
    price_change1h: float | None = Field(
        default=None,
        alias="priceChange1h",
        description="Fractional price change over the past hour.",
    )
    price_change24h: float | None = Field(
        default=None,
        alias="priceChange24h",
        description="Fractional price change over the past 24 hours.",
    )
    symbol: str = Field(
        description="Token ticker symbol. Populated whenever the provider has data for the entity."
    )
    transaction_count: int | None = Field(
        default=None,
        alias="transactionCount",
        description="Number of transactions over the selected timeframe.",
    )
    url: str | None = Field(
        default=None,
        description="DEX Screener URL for the trading pair. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    volume_usd: float | None = Field(
        default=None,
        alias="volumeUsd",
        description="Trading volume in USD over the selected timeframe.",
    )


class DexscreenerNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def tokens(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DexscreenerTokensInput],
    ) -> RunResult[DexscreenerTokensData]:
        """DEX Screener Tokens

        List trending tokens on any blockchain from DEX Screener - price, liquidity,
        volume, transactions, and market cap - sorted how you want, as normalized
        JSON. **Price:** billed per result - $20.00 per 1,000 requests base + $1.50
        per 1,000 results, capped at $57.50 per 1,000 requests.

        Price: $0.02 per request plus $0.0015 per result.

        Example:
            res = client.dexscreener.tokens(chain="solana", limit=5)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "dexscreener.tokens", dict(input), options
        )
        return RunResult[DexscreenerTokensData].model_validate(raw)


class AsyncDexscreenerNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def tokens(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DexscreenerTokensInput],
    ) -> RunResult[DexscreenerTokensData]:
        """DEX Screener Tokens

        List trending tokens on any blockchain from DEX Screener - price, liquidity,
        volume, transactions, and market cap - sorted how you want, as normalized
        JSON. **Price:** billed per result - $20.00 per 1,000 requests base + $1.50
        per 1,000 results, capped at $57.50 per 1,000 requests.

        Price: $0.02 per request plus $0.0015 per result.

        Example:
            res = client.dexscreener.tokens(chain="solana", limit=5)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "dexscreener.tokens", dict(input), options
        )
        return RunResult[DexscreenerTokensData].model_validate(raw)
