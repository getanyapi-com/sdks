# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the polymarket platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

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
    items: list[PolymarketMarketsItem] = Field(
        description="Prediction-market records: market question, outcomes with current prices, volume, liquidity, and end date. Populated whenever the provider has data for the entity."
    )


class PolymarketMarketsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    ends_utc: float | None = Field(
        default=None,
        alias="endsUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the market resolves/ends.",
    )
    event_title: str | None = Field(
        default=None,
        alias="eventTitle",
        description="Title of the parent event grouping this market.",
    )
    id: str = Field(
        description="Polymarket market identifier. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(default=None, description="Event image URL.")
    liquidity_usd: float | None = Field(
        default=None, alias="liquidityUsd", description="Available liquidity in USD."
    )
    outcomes: list[PolymarketMarketsOutcome] | None = Field(
        default=None, description="Market outcomes with their current implied prices."
    )
    status: str | None = Field(
        default=None, description="Market status, e.g. active or closed."
    )
    title: str = Field(
        description="The market question. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Polymarket URL for the market event. Populated whenever the provider has data for the entity."
    )
    volume24h_usd: float | None = Field(
        default=None,
        alias="volume24hUsd",
        description="Traded volume in USD over the past 24 hours.",
    )
    volume_usd: float | None = Field(
        default=None, alias="volumeUsd", description="Total traded volume in USD."
    )


class PolymarketMarketsOutcome(BaseModel):
    model_config = ConfigDict(extra="allow")

    name: str | None = Field(default=None, description="Outcome label, e.g. Yes or No.")
    price: float | None = Field(
        default=None,
        description="Current implied probability price for the outcome (0 to 1).",
    )


class PolymarketNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def markets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PolymarketMarketsInput],
    ) -> RunResult[PolymarketMarketsData]:
        """Polymarket Markets

        Discover Polymarket prediction markets - question, outcome prices, volume,
        liquidity, and end dates - by keyword or sorted by activity, as normalized
        JSON. **Price:** billed per result - $105.00 per 1,000 requests base + $0.60
        per 1,000 results, capped at $120.00 per 1,000 requests.

        Price: $0.105 per request plus $0.0006 per result.

        Example:
            res = client.polymarket.markets(limit=10, query="election")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "polymarket.markets", dict(input), options
        )
        return RunResult[PolymarketMarketsData].model_validate(raw)


class AsyncPolymarketNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def markets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PolymarketMarketsInput],
    ) -> RunResult[PolymarketMarketsData]:
        """Polymarket Markets

        Discover Polymarket prediction markets - question, outcome prices, volume,
        liquidity, and end dates - by keyword or sorted by activity, as normalized
        JSON. **Price:** billed per result - $105.00 per 1,000 requests base + $0.60
        per 1,000 results, capped at $120.00 per 1,000 requests.

        Price: $0.105 per request plus $0.0006 per result.

        Example:
            res = client.polymarket.markets(limit=10, query="election")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "polymarket.markets", dict(input), options
        )
        return RunResult[PolymarketMarketsData].model_validate(raw)
