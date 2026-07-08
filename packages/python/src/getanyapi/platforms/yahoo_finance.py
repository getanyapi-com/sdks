# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the yahoo_finance platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class YahooFinanceQuoteInput(TypedDict, total=False):
    """Input for Yahoo Finance Quote."""

    ticker: Required[str]
    """The ticker symbol to look up."""


class YahooFinanceQuoteData(BaseModel):
    items: list[YahooFinanceQuoteItem] = Field(
        description="Quote records for the ticker: current price, day range, volume, and market cap. Populated whenever the provider has data for the entity."
    )


class YahooFinanceQuoteItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    change: float | None = Field(
        default=None, description="Absolute price change from the previous close."
    )
    change_percent: float | None = Field(
        default=None,
        alias="changePercent",
        description="Percent price change from the previous close (e.g. 3.14 means +3.14%).",
    )
    day_high: float | None = Field(
        default=None,
        alias="dayHigh",
        description="Highest trade price during the current session.",
    )
    day_low: float | None = Field(
        default=None,
        alias="dayLow",
        description="Lowest trade price during the current session.",
    )
    market_cap: int | None = Field(
        default=None,
        alias="marketCap",
        description="Total market capitalization in the security's native currency.",
    )
    name: str | None = Field(
        default=None,
        description='The security\'s display name, e.g. "Apple Inc.". Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.',
    )
    previous_close: float | None = Field(
        default=None,
        alias="previousClose",
        description="The previous session's closing price.",
    )
    price: float = Field(
        description="The latest trade price in the security's native currency. Populated whenever the provider has data for the entity."
    )
    symbol: str | None = Field(
        default=None,
        description='The resolved ticker symbol for the quote, e.g. "AAPL". Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.',
    )
    volume: int | None = Field(
        default=None, description="Number of shares traded during the current session."
    )


class YahooFinanceNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def quote(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YahooFinanceQuoteInput],
    ) -> RunResult[YahooFinanceQuoteData]:
        """Yahoo Finance Quote

        Look up a stock or ETF by ticker symbol and get its Yahoo Finance quote
        (price, market cap, volume, and key stats) as normalized JSON. **Price:**
        billed per result - $0.05 per 1,000 requests base + $0.90 per 1,000 results,
        capped at $0.95 per 1,000 requests.

        Price: $0.00005 per request plus $0.0009 per result.

        Example:
            res = client.yahoo_finance.quote(ticker="AAPL")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "yahoo_finance.quote", dict(input), options
        )
        return RunResult[YahooFinanceQuoteData].model_validate(raw)


class AsyncYahooFinanceNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def quote(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YahooFinanceQuoteInput],
    ) -> RunResult[YahooFinanceQuoteData]:
        """Yahoo Finance Quote

        Look up a stock or ETF by ticker symbol and get its Yahoo Finance quote
        (price, market cap, volume, and key stats) as normalized JSON. **Price:**
        billed per result - $0.05 per 1,000 requests base + $0.90 per 1,000 results,
        capped at $0.95 per 1,000 requests.

        Price: $0.00005 per request plus $0.0009 per result.

        Example:
            res = client.yahoo_finance.quote(ticker="AAPL")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "yahoo_finance.quote", dict(input), options
        )
        return RunResult[YahooFinanceQuoteData].model_validate(raw)
