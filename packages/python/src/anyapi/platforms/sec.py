# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the sec platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class SecFilingsInput(TypedDict, total=False):
    """Input for SEC EDGAR Filings."""

    dateFrom: NotRequired[str]
    """Only return filings filed on or after this date, in YYYY-MM-DD format (e.g. 2025-01-01)."""
    dateTo: NotRequired[str]
    """Only return filings filed on or before this date, in YYYY-MM-DD format (e.g. 2026-06-01)."""
    form: NotRequired[str]
    """Filter filings by SEC form type (e.g. 10-K, 10-Q, 8-K, 4, DEF 14A, S-1, 13F-HR); omit for all forms."""
    limit: NotRequired[int]
    """Maximum number of filings to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    ticker: Required[str]
    """Company stock ticker symbol, e.g. AAPL, MSFT, or TSLA."""


class SecFilingsData(BaseModel):
    items: list[SecFilingsItem] = Field(
        description="Filing records: company and CIK, form type, filing date, accession number, and document links."
    )


class SecFilingsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    accession_number: str = Field(
        alias="accessionNumber",
        description="SEC accession number uniquely identifying the filing.",
    )
    cik: str | None = Field(
        default=None,
        description="SEC Central Index Key for the filer. Present whenever the upstream returns this record.",
    )
    company_name: str | None = Field(
        default=None,
        alias="companyName",
        description="Present whenever the upstream returns this record.",
    )
    filing_date: str | None = Field(
        default=None,
        alias="filingDate",
        description="Date the filing was filed, YYYY-MM-DD. Present whenever the upstream returns this record.",
    )
    form: str | None = Field(
        default=None,
        description="SEC form type, e.g. 10-K, 10-Q, 8-K. Present whenever the upstream returns this record.",
    )
    url: str = Field(
        description="Direct link to the primary filing document on sec.gov."
    )


class SecNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def filings(
        self, *, options: RequestOptions | None = None, **input: Unpack[SecFilingsInput]
    ) -> RunResult[SecFilingsData]:
        """SEC EDGAR Filings

        List a public company's SEC EDGAR filings - form type, filing date,
        accession number, and document links - by ticker, company name, or CIK, with
        optional form-type and date filters, billed per request in USD.

        Price: $0.002 per request plus $0.0004 per result.

        Example:
            res = client.sec.filings(limit=3, ticker="AAPL")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "sec.filings", dict(input), options
        )
        return RunResult[SecFilingsData].model_validate(raw)


class AsyncSecNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def filings(
        self, *, options: RequestOptions | None = None, **input: Unpack[SecFilingsInput]
    ) -> RunResult[SecFilingsData]:
        """SEC EDGAR Filings

        List a public company's SEC EDGAR filings - form type, filing date,
        accession number, and document links - by ticker, company name, or CIK, with
        optional form-type and date filters, billed per request in USD.

        Price: $0.002 per request plus $0.0004 per result.

        Example:
            res = client.sec.filings(limit=3, ticker="AAPL")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "sec.filings", dict(input), options
        )
        return RunResult[SecFilingsData].model_validate(raw)
