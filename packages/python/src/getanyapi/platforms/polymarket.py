# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the polymarket platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class PolymarketMarketsInput(TypedDict, total=False):
    """Input for Polymarket Markets."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    query: Required[str]
    """Search term for markets (e.g. election, bitcoin, super bowl)."""
    sortBy: NotRequired[
        Literal[
            "volume_24hr",
            "volume",
            "liquidity",
            "start_date",
            "ending_soon",
            "competitive",
        ]
    ]
    """How discovered markets are ordered before results are returned (e.g. volume_24hr for recent momentum). Default: volume_24hr."""
    status: NotRequired[Literal["active", "resolved"]]
    """Return "active" markets for current prices and volume, or "resolved" markets for historical outcomes. Default: active."""


class PolymarketMarketsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class PolymarketNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def markets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PolymarketMarketsInput],
    ) -> BareRunResult[PolymarketMarketsData]:
        """Polymarket Markets

        Discover Polymarket prediction markets (question, outcome prices, volume,
        liquidity, and end dates) by keyword or sorted by activity, as normalized
        JSON.

        Price: $0.105 per request plus $0.0006 per result (maximum $0.12).

        Example:
            res = client.polymarket.markets(limit=10, query="election")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "polymarket.markets", dict(input), options
        )
        return BareRunResult[PolymarketMarketsData].model_validate(raw)


class AsyncPolymarketNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def markets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PolymarketMarketsInput],
    ) -> BareRunResult[PolymarketMarketsData]:
        """Polymarket Markets

        Discover Polymarket prediction markets (question, outcome prices, volume,
        liquidity, and end dates) by keyword or sorted by activity, as normalized
        JSON.

        Price: $0.105 per request plus $0.0006 per result (maximum $0.12).

        Example:
            res = client.polymarket.markets(limit=10, query="election")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "polymarket.markets", dict(input), options
        )
        return BareRunResult[PolymarketMarketsData].model_validate(raw)
