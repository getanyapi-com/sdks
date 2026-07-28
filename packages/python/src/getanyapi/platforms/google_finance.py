# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the google_finance platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class GoogleFinanceQuoteInput(TypedDict, total=False):
    """Input for Google Finance Quote."""

    symbol: Required[str]
    """The symbol to quote. US stocks use a plain ticker (e.g. AAPL, TSLA); non-US stocks add a market suffix (e.g. VOW3.DE, BABA.HK, BARC.L); indices use a caret (e.g. ^GSPC, ^DJI); crypto and currencies use pair form (e.g. BTC-USD, EURUSD=X); mutual funds and futures use their symbol (e.g. VFIAX, ES=F). Common alternate forms are accepted and normalized (e.g. AAPL:NASDAQ, .DJI, BTC/USD). Exact symbols only, not a company-name search."""


class GoogleFinanceQuoteData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleFinanceNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def quote(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleFinanceQuoteInput],
    ) -> BareRunResult[GoogleFinanceQuoteData]:
        """Google Finance Quote

        Fetch a live quote for any stock, index, ETF, mutual fund, currency pair, or
        crypto symbol: name, current price, the absolute and percent change on the
        day, quote currency, exchange and market state, plus intraday and reference
        figures (open, day high/low, previous close, volume, market cap, and the
        52-week range).

        Price: $0.0005 per request plus $0.0015 per result (maximum $0.002).

        Example:
            res = client.google_finance.quote(symbol="AAPL:NASDAQ")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google_finance.quote", dict(input), options
        )
        return BareRunResult[GoogleFinanceQuoteData].model_validate(raw)


class AsyncGoogleFinanceNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def quote(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleFinanceQuoteInput],
    ) -> BareRunResult[GoogleFinanceQuoteData]:
        """Google Finance Quote

        Fetch a live quote for any stock, index, ETF, mutual fund, currency pair, or
        crypto symbol: name, current price, the absolute and percent change on the
        day, quote currency, exchange and market state, plus intraday and reference
        figures (open, day high/low, previous close, volume, market cap, and the
        52-week range).

        Price: $0.0005 per request plus $0.0015 per result (maximum $0.002).

        Example:
            res = client.google_finance.quote(symbol="AAPL:NASDAQ")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google_finance.quote", dict(input), options
        )
        return BareRunResult[GoogleFinanceQuoteData].model_validate(raw)
