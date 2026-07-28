# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the dexscreener platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class DexscreenerTokensInput(TypedDict, total=False):
    """Input for DEX Screener Tokens."""

    chain: Required[str]
    """Blockchain network to list tokens for, optionally scoped to a DEX as chain/dex (e.g. solana or ethereum/uniswap)."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    max24HChg: NotRequired[int]
    """Only include tokens whose 24-hour price change is at most this many percent (e.g. -20 means -20%). Negative values allowed. Omit to skip this filter."""
    max24HTxns: NotRequired[int]
    """Only include tokens with at most this many 24-hour transactions (buys plus sells). Omit to skip this filter. Minimum: 0."""
    max24HVol: NotRequired[int]
    """Only include tokens with at most this much 24-hour trading volume, in USD. Omit to skip this filter. Minimum: 0."""
    maxAge: NotRequired[int]
    """Only include token pairs at most this old, in hours. Omit to skip this filter. Minimum: 0."""
    maxFdv: NotRequired[int]
    """Only include tokens with at most this fully diluted valuation (FDV), in USD. Omit to skip this filter. Minimum: 0."""
    maxLiq: NotRequired[int]
    """Only include tokens with at most this much pool liquidity, in USD. Omit to skip this filter. Minimum: 0."""
    maxMarketCap: NotRequired[int]
    """Only include tokens with at most this market capitalization, in USD. Omit to skip this filter. Minimum: 0."""
    min24HBuys: NotRequired[int]
    """Only include tokens with at least this many 24-hour buy transactions. Omit to skip this filter. Minimum: 0."""
    min24HChg: NotRequired[int]
    """Only include tokens whose 24-hour price change is at least this many percent (e.g. 10 means +10%). Negative values allowed. Omit to skip this filter."""
    min24HSells: NotRequired[int]
    """Only include tokens with at least this many 24-hour sell transactions. Omit to skip this filter. Minimum: 0."""
    min24HTxns: NotRequired[int]
    """Only include tokens with at least this many 24-hour transactions (buys plus sells). Omit to skip this filter. Minimum: 0."""
    min24HVol: NotRequired[int]
    """Only include tokens with at least this much 24-hour trading volume, in USD. Omit to skip this filter. Minimum: 0."""
    minAge: NotRequired[int]
    """Only include token pairs at least this old, in hours. Omit to skip this filter. Minimum: 0."""
    minFdv: NotRequired[int]
    """Only include tokens with at least this fully diluted valuation (FDV), in USD. Omit to skip this filter. Minimum: 0."""
    minLiq: NotRequired[int]
    """Only include tokens with at least this much pool liquidity, in USD. Omit to skip this filter. Minimum: 0."""
    minMarketCap: NotRequired[int]
    """Only include tokens with at least this market capitalization, in USD. Omit to skip this filter. Minimum: 0."""
    order: NotRequired[str]
    """Sort direction: desc or asc (e.g. desc)."""
    rankBy: NotRequired[str]
    """Field to sort tokens by (e.g. volume, txns, liquidity, marketCap, trendingScoreH24)."""
    timeframe: NotRequired[str]
    """Stats timeframe: 24h, 6h, 1h, or 5m (e.g. 24h). Default: 24h."""


class DexscreenerTokensData(BaseModel):
    model_config = ConfigDict(extra="allow")


class DexscreenerNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def tokens(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DexscreenerTokensInput],
    ) -> BareRunResult[DexscreenerTokensData]:
        """DEX Screener Tokens

        List trending tokens on any blockchain from DEX Screener (price, liquidity,
        volume, transactions, and market cap), sorted how you want, as normalized
        JSON.

        Price: $0.02 per request plus $0.0015 per result (maximum $0.0575).

        Example:
            res = client.dexscreener.tokens(chain="solana", limit=5, min24HVol=100000)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "dexscreener.tokens", dict(input), options
        )
        return BareRunResult[DexscreenerTokensData].model_validate(raw)


class AsyncDexscreenerNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def tokens(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DexscreenerTokensInput],
    ) -> BareRunResult[DexscreenerTokensData]:
        """DEX Screener Tokens

        List trending tokens on any blockchain from DEX Screener (price, liquidity,
        volume, transactions, and market cap), sorted how you want, as normalized
        JSON.

        Price: $0.02 per request plus $0.0015 per result (maximum $0.0575).

        Example:
            res = client.dexscreener.tokens(chain="solana", limit=5, min24HVol=100000)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "dexscreener.tokens", dict(input), options
        )
        return BareRunResult[DexscreenerTokensData].model_validate(raw)
