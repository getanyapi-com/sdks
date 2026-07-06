# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the google_finance platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class GoogleFinanceQuoteInput(TypedDict, total=False):
    """Input for Google Finance Quote."""

    symbol: Required[str]
    """The symbol to quote. US stocks use a plain ticker (e.g. AAPL, TSLA); non-US stocks add a market suffix (e.g. VOW3.DE, BABA.HK, BARC.L); indices use a caret (e.g. ^GSPC, ^DJI); crypto and currencies use pair form (e.g. BTC-USD, EURUSD=X); mutual funds and futures use their symbol (e.g. VFIAX, ES=F). Common alternate forms are accepted and normalized (e.g. AAPL:NASDAQ, .DJI, BTC/USD). Exact symbols only, not a company-name search."""


class GoogleFinanceQuoteData(BaseModel):
    items: list[GoogleFinanceQuoteItem] = Field(
        description="The quote for the requested symbol: name, current price, day change (absolute and percent), quote currency, exchange and market state, plus intraday and reference figures. Up to one element (empty when the symbol did not resolve). Populated whenever the provider returns data."
    )


class GoogleFinanceQuoteItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    ask: float | None = Field(default=None, description="Current ask price.")
    assetType: str | None = Field(
        default=None,
        description="Instrument class (e.g. EQUITY, ETF, CRYPTOCURRENCY, CURRENCY, INDEX, MUTUALFUND, FUTURE).",
    )
    averageVolume: float | None = Field(
        default=None, description="Average daily trading volume."
    )
    bid: float | None = Field(default=None, description="Current bid price.")
    change: float | None = Field(
        default=None,
        description="Absolute price change on the day, in the quote currency.",
    )
    changePercent: float | None = Field(
        default=None, description="Percent price change on the day."
    )
    currency: str | None = Field(
        default=None,
        description="ISO currency the quote is priced in (e.g. USD). Populated whenever the provider returns data.",
    )
    dayHigh: float | None = Field(
        default=None, description="Highest price so far in the current session."
    )
    dayLow: float | None = Field(
        default=None, description="Lowest price so far in the current session."
    )
    exchange: str | None = Field(
        default=None,
        description="Exchange the instrument trades on (e.g. NasdaqGS). Populated whenever the provider returns data.",
    )
    fiftyTwoWeekHigh: float | None = Field(
        default=None, description="Highest price over the trailing 52 weeks."
    )
    fiftyTwoWeekLow: float | None = Field(
        default=None, description="Lowest price over the trailing 52 weeks."
    )
    marketCap: float | None = Field(
        default=None, description="Market capitalization in the quote currency."
    )
    marketState: str | None = Field(
        default=None,
        description="Current market state (e.g. REGULAR, PRE, POST, CLOSED).",
    )
    name: str | None = Field(
        default=None,
        description="Instrument or company name. Populated whenever the provider returns data.",
    )
    open: float | None = Field(
        default=None, description="Opening price for the current session."
    )
    previousClose: float | None = Field(
        default=None, description="Previous session close price."
    )
    price: float = Field(description="Current price in the quote currency.")
    symbol: str = Field(
        description="Resolved ticker symbol for the quote. Populated whenever the provider returns data."
    )
    timestamp: str | None = Field(
        default=None, description="Timestamp of the quote (ISO 8601)."
    )
    volume: float | None = Field(
        default=None, description="Traded volume for the current session."
    )


class GoogleFinanceNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def quote(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleFinanceQuoteInput],
    ) -> RunResult[GoogleFinanceQuoteData]:
        """Google Finance Quote

        Fetch a live quote for any stock, index, ETF, mutual fund, currency pair, or
        crypto symbol: name, current price, the absolute and percent change on the
        day, quote currency, exchange and market state, plus intraday and reference
        figures (open, day high/low, previous close, volume, market cap, and the
        52-week range) with transparent per-request USD pricing.

        Price: $0.0015 per result.

        Example:
            res = client.google_finance.quote(symbol="AAPL:NASDAQ")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "google_finance.quote", dict(input), options
        )
        return RunResult[GoogleFinanceQuoteData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncGoogleFinanceNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def quote(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleFinanceQuoteInput],
    ) -> RunResult[GoogleFinanceQuoteData]:
        """Google Finance Quote

        Fetch a live quote for any stock, index, ETF, mutual fund, currency pair, or
        crypto symbol: name, current price, the absolute and percent change on the
        day, quote currency, exchange and market state, plus intraday and reference
        figures (open, day high/low, previous close, volume, market cap, and the
        52-week range) with transparent per-request USD pricing.

        Price: $0.0015 per result.

        Example:
            res = client.google_finance.quote(symbol="AAPL:NASDAQ")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "google_finance.quote", dict(input), options
        )
        return RunResult[GoogleFinanceQuoteData].model_validate(
            raw.model_dump(by_alias=True)
        )
