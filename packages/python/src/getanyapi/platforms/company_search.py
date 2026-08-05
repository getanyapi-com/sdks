# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the company_search platform."""

from __future__ import annotations

from typing import Any, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult
from .._pagination import (
    AsyncPaginator,
    Paginator,
    apaginate,
    paginate,
)

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class CompanySearchAiArkInput(TypedDict, total=False):
    """Input for Company Search - AI Ark."""

    account: NotRequired[dict[str, Any]]
    """AI Ark account filter expression. Nested generic any/all filter objects are accepted as documented by the source and are not further constrained."""
    lists: NotRequired[dict[str, Any]]
    """AI Ark saved-list filter expression."""
    lookalikeDomains: NotRequired[list[str]]
    """Domains whose company characteristics should guide the search."""
    name: NotRequired[str]
    """Company-name search text."""
    page: NotRequired[int]
    """Zero-based result page. Minimum: 0. Default: 0."""
    size: NotRequired[int]
    """Maximum companies to return on this page. Range: 1 to 100. Default: 10."""


class CompanySearchCrustdataV3Input(TypedDict, total=False):
    """Input for Company Search - Crustdata v3."""

    cursor: NotRequired[str]
    fields: NotRequired[Any]
    filters: Required[Any]
    """Crustdata company-database filter expression."""
    limit: NotRequired[int]
    """Range: 1 to 1000. Default: 10."""
    sorts: NotRequired[list[dict[str, Any]]]


class CompanySearchAiArkData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    companies: list[CompanySearchAiArkCompanie] = Field(
        description="Companies returned on this page."
    )
    page: int = Field(
        description="Zero-based page number returned by the source. Minimum: 0."
    )
    size: int = Field(description="Configured page size. Minimum: 0.")
    total: int = Field(description="Total matching companies. Minimum: 0.")
    total_pages: int = Field(
        alias="totalPages", description="Total result pages. Minimum: 0."
    )


class CompanySearchAiArkCompanie(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="Headquarters city.")
    country: str | None = Field(default=None, description="Headquarters country.")
    description: str | None = Field(
        default=None, description="Company description when available."
    )
    domain: str = Field(description="Company website domain.")
    email: str | None = Field(default=None, description="Public company contact email.")
    employee_count: int | None = Field(
        default=None,
        alias="employeeCount",
        description="Estimated total employees. Minimum: 0.",
    )
    founded_year: int | None = Field(
        default=None, alias="foundedYear", description="Year the company was founded."
    )
    industries: list[str] | None = Field(
        default=None, description="Additional company industries."
    )
    industry: str | None = Field(default=None, description="Primary company industry.")
    legal_name: str | None = Field(
        default=None,
        alias="legalName",
        description="Registered company name when available.",
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Canonical company LinkedIn URL."
    )
    name: str = Field(description="Company name.")
    phone: str | None = Field(
        default=None, description="Sanitized public company phone number."
    )
    state: str | None = Field(default=None, description="Headquarters state or region.")
    type_: str | None = Field(
        default=None, alias="type", description="Company organization type."
    )
    website_url: str | None = Field(
        default=None, alias="websiteUrl", description="Canonical company website URL."
    )


class CompanySearchCrustdataV3Data(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    companies: list[CompanySearchCrustdataV3Companie]
    has_more: bool | None = Field(default=None, alias="hasMore")
    next_cursor: str | None = Field(default=None, alias="nextCursor")
    total_count: int | None = Field(
        default=None, alias="totalCount", description="Minimum: 0."
    )


class CompanySearchCrustdataV3Companie(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    domain: str | None = None
    employee_count: int | None = Field(default=None, alias="employeeCount")
    headquarters: str | None = None
    industry: str | None = None
    linkedin_url: str | None = Field(default=None, alias="linkedinUrl")
    name: str


class CompanySearchNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def ai_ark(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CompanySearchAiArkInput],
    ) -> RunResult[CompanySearchAiArkData]:
        """Company Search - AI Ark

        Search companies by name, lookalike domains, account filters, and saved-list
        filters.

        Price: $0 per request plus $0.0024 per result (maximum $0.24).

        Example:
            res = client.company_search.ai_ark(name="OpenAI", page=0, size=1)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "company_search.ai_ark", dict(input), options
        )
        return RunResult[CompanySearchAiArkData].model_validate(raw)

    def crustdata_v3(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CompanySearchCrustdataV3Input],
    ) -> RunResult[CompanySearchCrustdataV3Data]:
        """Company Search - Crustdata v3

        Search companies by structured filters with cursor pagination.

        Price: $0 per request plus $0.048 per result (maximum $48).
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "company_search.crustdata_v3", dict(input), options
        )
        return RunResult[CompanySearchCrustdataV3Data].model_validate(raw)

    def iter_crustdata_v3(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CompanySearchCrustdataV3Input],
    ) -> Paginator[CompanySearchCrustdataV3Companie, CompanySearchCrustdataV3Data]:
        """Iterate Company Search - Crustdata v3 results, following pagination cursors.

        Yields validated `CompanySearchCrustdataV3Companie` items from the `companies` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "company_search.crustdata_v3",
            dict(input),
            "companies",
            item_model=CompanySearchCrustdataV3Companie,
            data_model=CompanySearchCrustdataV3Data,
            bare=False,
            options=options,
        )


class AsyncCompanySearchNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def ai_ark(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CompanySearchAiArkInput],
    ) -> RunResult[CompanySearchAiArkData]:
        """Company Search - AI Ark

        Search companies by name, lookalike domains, account filters, and saved-list
        filters.

        Price: $0 per request plus $0.0024 per result (maximum $0.24).

        Example:
            res = client.company_search.ai_ark(name="OpenAI", page=0, size=1)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "company_search.ai_ark", dict(input), options
        )
        return RunResult[CompanySearchAiArkData].model_validate(raw)

    async def crustdata_v3(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CompanySearchCrustdataV3Input],
    ) -> RunResult[CompanySearchCrustdataV3Data]:
        """Company Search - Crustdata v3

        Search companies by structured filters with cursor pagination.

        Price: $0 per request plus $0.048 per result (maximum $48).
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "company_search.crustdata_v3", dict(input), options
        )
        return RunResult[CompanySearchCrustdataV3Data].model_validate(raw)

    def iter_crustdata_v3(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CompanySearchCrustdataV3Input],
    ) -> AsyncPaginator[CompanySearchCrustdataV3Companie, CompanySearchCrustdataV3Data]:
        """Iterate Company Search - Crustdata v3 results, following pagination cursors.

        Yields validated `CompanySearchCrustdataV3Companie` items from the `companies` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "company_search.crustdata_v3",
            dict(input),
            "companies",
            item_model=CompanySearchCrustdataV3Companie,
            data_model=CompanySearchCrustdataV3Data,
            bare=False,
            options=options,
        )
