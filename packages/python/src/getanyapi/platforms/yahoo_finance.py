# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the yahoo_finance platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class YahooFinanceQuoteInput(TypedDict, total=False):
    """Input for Yahoo Finance Quote."""

    ticker: Required[str]
    """The ticker symbol to look up."""


class YahooFinanceQuoteData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YahooFinanceNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def quote(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YahooFinanceQuoteInput],
    ) -> BareRunResult[YahooFinanceQuoteData]:
        """Yahoo Finance Quote

        Look up a stock or ETF by ticker symbol and get its Yahoo Finance quote
        (price, market cap, volume, and key stats) as normalized JSON.

        Price: $0.00005 per request plus $0.0009 per result (maximum $0.00095).

        Example:
            res = client.yahoo_finance.quote(ticker="AAPL")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "yahoo_finance.quote", dict(input), options
        )
        return BareRunResult[YahooFinanceQuoteData].model_validate(raw)


class AsyncYahooFinanceNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def quote(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YahooFinanceQuoteInput],
    ) -> BareRunResult[YahooFinanceQuoteData]:
        """Yahoo Finance Quote

        Look up a stock or ETF by ticker symbol and get its Yahoo Finance quote
        (price, market cap, volume, and key stats) as normalized JSON.

        Price: $0.00005 per request plus $0.0009 per result (maximum $0.00095).

        Example:
            res = client.yahoo_finance.quote(ticker="AAPL")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "yahoo_finance.quote", dict(input), options
        )
        return BareRunResult[YahooFinanceQuoteData].model_validate(raw)
