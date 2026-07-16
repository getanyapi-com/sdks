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
        description="Disclosure records: member name and chamber, stock ticker, transaction type, amount range, and transaction/report dates. Populated whenever the provider has data for the entity."
    )


class CongressTradesItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    amount_range: str | None = Field(
        default=None,
        alias="amountRange",
        description="Disclosed dollar amount range for the transaction.",
    )
    asset_name: str | None = Field(
        default=None,
        alias="assetName",
        description="Full name of the traded asset. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    chamber: str | None = Field(
        default=None, description="Congressional chamber, e.g. House or Senate."
    )
    first_name: str | None = Field(
        default=None,
        alias="firstName",
        description="Member's first name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    id: str = Field(
        description="Stable disclosure record identifier. Populated whenever the provider has data for the entity."
    )
    last_name: str | None = Field(
        default=None,
        alias="lastName",
        description="Member's last name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    owner: str | None = Field(
        default=None,
        description="Trade owner code, e.g. SP (spouse), JT (joint), DC (dependent child).",
    )
    reported_utc: float | None = Field(
        default=None,
        alias="reportedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Date the transaction was reported/disclosed.",
    )
    state_district: str | None = Field(
        default=None,
        alias="stateDistrict",
        description="Member's state and district, e.g. PA11.",
    )
    symbol: str = Field(
        description="Stock ticker symbol of the traded asset. Populated whenever the provider has data for the entity."
    )
    traded_utc: float | None = Field(
        default=None,
        alias="tradedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Date the transaction occurred.",
    )
    transaction_type: str | None = Field(
        default=None,
        alias="transactionType",
        description="Transaction type code, e.g. P (purchase), S (sale).",
    )


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
        ticker, or date range.

        Price: $0.001 per request plus $0.0019 per result (maximum $0.0485).

        Example:
            res = client.congress.trades(limit=5)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "congress.trades", dict(input), options
        )
        return RunResult[CongressTradesData].model_validate(raw)


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
        ticker, or date range.

        Price: $0.001 per request plus $0.0019 per result (maximum $0.0485).

        Example:
            res = client.congress.trades(limit=5)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "congress.trades", dict(input), options
        )
        return RunResult[CongressTradesData].model_validate(raw)
