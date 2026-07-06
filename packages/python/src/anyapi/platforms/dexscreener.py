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
        description="Token listing records: token name and symbol, pair, price, liquidity, volume, transaction counts, and price change. Populated whenever the provider returns data."
    )


class DexscreenerTokensItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    name: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    price: float
    symbol: str = Field(description="Populated whenever the provider returns data.")


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
        JSON with transparent per-request USD pricing.

        Price: $0.0015 per result.

        Example:
            res = client.dexscreener.tokens(chain="solana", limit=5)
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "dexscreener.tokens", dict(input), options
        )
        return RunResult[DexscreenerTokensData].model_validate(
            raw.model_dump(by_alias=True)
        )


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
        JSON with transparent per-request USD pricing.

        Price: $0.0015 per result.

        Example:
            res = client.dexscreener.tokens(chain="solana", limit=5)
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "dexscreener.tokens", dict(input), options
        )
        return RunResult[DexscreenerTokensData].model_validate(
            raw.model_dump(by_alias=True)
        )
