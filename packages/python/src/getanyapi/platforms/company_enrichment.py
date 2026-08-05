# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the company_enrichment platform."""

from __future__ import annotations

from typing import Any, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class CompanyEnrichmentCrustdataV3Input(TypedDict, total=False):
    """Input for Company Enrichment - Crustdata v3."""

    companyDomain: NotRequired[str]
    companyId: NotRequired[Any]
    companyLinkedinUrl: NotRequired[str]
    companyName: NotRequired[str]
    exactMatch: NotRequired[bool]
    fields: NotRequired[Any]


class CompanyEnrichmentCrustdataV3Data(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    description: str | None = None
    domain: str
    employee_count: int | None = Field(default=None, alias="employeeCount")
    founded_year: int | None = Field(default=None, alias="foundedYear")
    industry: str | None = None
    linkedin_url: str | None = Field(default=None, alias="linkedinUrl")
    location: str | None = None
    name: str


class CompanyEnrichmentNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def crustdata_v3(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CompanyEnrichmentCrustdataV3Input],
    ) -> RunResult[CompanyEnrichmentCrustdataV3Data]:
        """Company Enrichment - Crustdata v3

        Enrich a company by domain, name, LinkedIn URL, or Crustdata identifier.

        Price: $0.0972 per request.
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "company_enrichment.crustdata_v3", dict(input), options
        )
        return RunResult[CompanyEnrichmentCrustdataV3Data].model_validate(raw)


class AsyncCompanyEnrichmentNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def crustdata_v3(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[CompanyEnrichmentCrustdataV3Input],
    ) -> RunResult[CompanyEnrichmentCrustdataV3Data]:
        """Company Enrichment - Crustdata v3

        Enrich a company by domain, name, LinkedIn URL, or Crustdata identifier.

        Price: $0.0972 per request.
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "company_enrichment.crustdata_v3", dict(input), options
        )
        return RunResult[CompanyEnrichmentCrustdataV3Data].model_validate(raw)
