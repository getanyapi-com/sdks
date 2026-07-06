# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the congress platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class CongressTradesInput(TypedDict, total=False):
    """Input for Congress Stock Trades."""

    endDate: NotRequired[str]
    """Latest transaction date to include, inclusive, in YYYY-MM-DD format (e.g. 2026-06-01)."""
    firstName: NotRequired[str]
    """Filter by the congressional member's first name, case-insensitive partial match (e.g. Nancy)."""
    lastName: NotRequired[str]
    """Filter by the congressional member's last name, case-insensitive partial match (e.g. Pelosi)."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    startDate: NotRequired[str]
    """Earliest transaction date to include, inclusive, in YYYY-MM-DD format (e.g. 2026-01-01)."""
    ticker: NotRequired[str]
    """Filter to transactions involving this stock ticker symbol (e.g. NVDA)."""


class CongressTradesData(BaseModel):
    items: list[CongressTradesItem] = Field(
        description="Disclosure records: member name and chamber, stock ticker, transaction type, amount range, and transaction/report dates. Populated whenever the provider returns data."
    )


class CongressTradesItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str = Field(description="Populated whenever the provider returns data.")
    name: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    symbol: str = Field(description="Populated whenever the provider returns data.")


class CongressNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def trades(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CongressTradesInput],
    ) -> RunResult[CongressTradesData]:
        """Congress Stock Trades

        Get US Congress members' financial disclosures and stock trades - member,
        ticker, transaction type, amount range, and dates - filterable by member,
        ticker, or date range, billed per request in USD.

        Price: $0.0019 per result.

        Example:
            res = client.congress.trades(limit=5)
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "congress.trades", dict(input), options
        )
        return RunResult[CongressTradesData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncCongressNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def trades(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CongressTradesInput],
    ) -> RunResult[CongressTradesData]:
        """Congress Stock Trades

        Get US Congress members' financial disclosures and stock trades - member,
        ticker, transaction type, amount range, and dates - filterable by member,
        ticker, or date range, billed per request in USD.

        Price: $0.0019 per result.

        Example:
            res = client.congress.trades(limit=5)
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "congress.trades", dict(input), options
        )
        return RunResult[CongressTradesData].model_validate(
            raw.model_dump(by_alias=True)
        )
