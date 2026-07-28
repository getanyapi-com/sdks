# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the apollo platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class ApolloOrganizationInput(TypedDict, total=False):
    """Input for Apollo Organization."""

    organizationId: Required[str]
    """Organization identifier returned by an Apollo organization endpoint."""


class ApolloOrganizationEnrichInput(TypedDict, total=False):
    """Input for Apollo Organization Enrichment."""

    domain: Required[str]
    """Organization domain without a path, such as apollo.io."""


class ApolloOrganizationJobsInput(TypedDict, total=False):
    """Input for Apollo Organization Jobs."""

    organizationId: Required[str]
    """Organization identifier returned by an Apollo organization endpoint."""


class ApolloOrganizationNewsInput(TypedDict, total=False):
    """Input for Apollo Organization News."""

    keywords: NotRequired[str]
    """Optional keywords to match in related articles."""
    limit: NotRequired[int]
    """Maximum articles returned on this page. Range: 1 to 100. Default: 25."""
    organizationIds: Required[list[str]]
    """Organization identifiers whose related news should be returned."""
    page: NotRequired[int]
    """One-based result page. Minimum: 1. Default: 1."""


class ApolloOrganizationsBulkEnrichInput(TypedDict, total=False):
    """Input for Apollo Bulk Organization Enrichment."""

    domains: Required[list[str]]
    """Organization domains to enrich, with at most 10 domains per request."""


class ApolloOrganizationsSearchInput(TypedDict, total=False):
    """Input for Apollo Organization Search."""

    employeeRanges: NotRequired[list[str]]
    """Employee-count ranges in Apollo notation, such as 51,200."""
    industryIds: NotRequired[list[str]]
    """Apollo industry tag identifiers to match."""
    keywords: NotRequired[str]
    """Keywords to match across organization records."""
    limit: NotRequired[int]
    """Maximum organizations returned on this page. Range: 1 to 100. Default: 25."""
    locations: NotRequired[list[str]]
    """Headquarters locations to match."""
    page: NotRequired[int]
    """One-based result page. Range: 1 to 500. Default: 1."""


class ApolloPeopleSearchInput(TypedDict, total=False):
    """Input for Apollo People Search."""

    employeeRanges: NotRequired[list[str]]
    """Organization employee-count ranges in Apollo notation, such as 51,200."""
    keywords: NotRequired[str]
    """Keywords to match across people records."""
    limit: NotRequired[int]
    """Maximum people returned on this page. Range: 1 to 100. Default: 25."""
    organizationLocations: NotRequired[list[str]]
    """Organization headquarters locations to match."""
    page: NotRequired[int]
    """One-based result page. Range: 1 to 500. Default: 1."""
    personLocations: NotRequired[list[str]]
    """Person locations to match."""
    seniorities: NotRequired[
        list[
            Literal[
                "owner",
                "founder",
                "c_suite",
                "partner",
                "vp",
                "head",
                "director",
                "manager",
                "senior",
                "entry",
            ]
        ]
    ]
    """Seniority levels to match."""
    titles: NotRequired[list[str]]
    """Job titles to match."""


class ApolloPersonEnrichInput(TypedDict, total=False):
    """Input for Apollo Person Enrichment."""

    domain: NotRequired[str]
    """Organization domain used with the person's name."""
    email: NotRequired[str]
    """Work or personal email used to identify the person."""
    firstName: NotRequired[str]
    """Person first name, used with lastName and an organization identifier."""
    lastName: NotRequired[str]
    """Person last name, used with firstName and an organization identifier."""
    linkedinUrl: NotRequired[str]
    """LinkedIn profile URL used to identify the person."""
    organizationName: NotRequired[str]
    """Organization name used with the person's name."""


class ApolloOrganizationData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ApolloOrganizationEnrichData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ApolloOrganizationJobsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ApolloOrganizationNewsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ApolloOrganizationsBulkEnrichData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ApolloOrganizationsSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ApolloPeopleSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ApolloPersonEnrichData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ApolloNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def organization(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationInput],
    ) -> BareRunResult[ApolloOrganizationData]:
        """Apollo Organization

        Get a complete organization profile by ID including company, industry,
        employee, revenue, funding, location, and technology data.

        Price: $0.012 per request.

        Example:
            res = client.apollo.organization(organizationId="5e66b6381e05b4008c8331b8")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.organization", dict(input), options
        )
        return BareRunResult[ApolloOrganizationData].model_validate(raw)

    def organization_enrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationEnrichInput],
    ) -> BareRunResult[ApolloOrganizationEnrichData]:
        """Apollo Organization Enrichment

        Enrich an organization by domain with company profile, industry, employee,
        revenue, funding, location, and technology data.

        Price: $0.012 per request.

        Example:
            res = client.apollo.organization_enrich(domain="apollo.io")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.organization_enrich", dict(input), options
        )
        return BareRunResult[ApolloOrganizationEnrichData].model_validate(raw)

    def organization_jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationJobsInput],
    ) -> BareRunResult[ApolloOrganizationJobsData]:
        """Apollo Organization Jobs

        Get current job postings for an organization by ID with title, location,
        source URL, and timestamps.

        Price: $0.012 per request.

        Example:
            res = client.apollo.organization_jobs(organizationId="5e66b6381e05b4008c8331b8")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.organization_jobs", dict(input), options
        )
        return BareRunResult[ApolloOrganizationJobsData].model_validate(raw)

    def organization_news(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationNewsInput],
    ) -> BareRunResult[ApolloOrganizationNewsData]:
        """Apollo Organization News

        Search news related to one or more organizations with article details,
        categories, and pagination totals.

        Price: $0.012 per request.

        Example:
            res = client.apollo.organization_news(limit=3, organizationIds=["5e66b6381e05b4008c8331b8"], page=1)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.organization_news", dict(input), options
        )
        return BareRunResult[ApolloOrganizationNewsData].model_validate(raw)

    def organizations_bulk_enrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationsBulkEnrichInput],
    ) -> BareRunResult[ApolloOrganizationsBulkEnrichData]:
        """Apollo Bulk Organization Enrichment

        Enrich up to 10 organization domains in one request with normalized company
        profile, industry, employee, revenue, funding, and location data.

        Price: $0.06 per request.

        Example:
            res = client.apollo.organizations_bulk_enrich(domains=["apollo.io", "openai.com"])
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.organizations_bulk_enrich", dict(input), options
        )
        return BareRunResult[ApolloOrganizationsBulkEnrichData].model_validate(raw)

    def organizations_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationsSearchInput],
    ) -> BareRunResult[ApolloOrganizationsSearchData]:
        """Apollo Organization Search

        Search organizations by location, employee range, industry, and keywords
        with normalized company records and pagination totals.

        Price: $0.012 per request.

        Example:
            res = client.apollo.organizations_search(keywords="Apollo", limit=3, page=1)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.organizations_search", dict(input), options
        )
        return BareRunResult[ApolloOrganizationsSearchData].model_validate(raw)

    def people_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloPeopleSearchInput],
    ) -> BareRunResult[ApolloPeopleSearchData]:
        """Apollo People Search

        Search people by title, seniority, person or organization location, employee
        range, and keywords with normalized profile summaries.

        Price: $0.01 per request.

        Example:
            res = client.apollo.people_search(limit=3, page=1, titles=["CEO"])
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.people_search", dict(input), options
        )
        return BareRunResult[ApolloPeopleSearchData].model_validate(raw)

    def person_enrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloPersonEnrichInput],
    ) -> BareRunResult[ApolloPersonEnrichData]:
        """Apollo Person Enrichment

        Enrich a person by email, LinkedIn URL, or name and organization with
        contact, role, location, and company data.

        Price: $0.012 per request.

        Example:
            res = client.apollo.person_enrich(domain="apollo.io", firstName="Tim", lastName="Zheng")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.person_enrich", dict(input), options
        )
        return BareRunResult[ApolloPersonEnrichData].model_validate(raw)


class AsyncApolloNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def organization(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationInput],
    ) -> BareRunResult[ApolloOrganizationData]:
        """Apollo Organization

        Get a complete organization profile by ID including company, industry,
        employee, revenue, funding, location, and technology data.

        Price: $0.012 per request.

        Example:
            res = client.apollo.organization(organizationId="5e66b6381e05b4008c8331b8")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.organization", dict(input), options
        )
        return BareRunResult[ApolloOrganizationData].model_validate(raw)

    async def organization_enrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationEnrichInput],
    ) -> BareRunResult[ApolloOrganizationEnrichData]:
        """Apollo Organization Enrichment

        Enrich an organization by domain with company profile, industry, employee,
        revenue, funding, location, and technology data.

        Price: $0.012 per request.

        Example:
            res = client.apollo.organization_enrich(domain="apollo.io")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.organization_enrich", dict(input), options
        )
        return BareRunResult[ApolloOrganizationEnrichData].model_validate(raw)

    async def organization_jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationJobsInput],
    ) -> BareRunResult[ApolloOrganizationJobsData]:
        """Apollo Organization Jobs

        Get current job postings for an organization by ID with title, location,
        source URL, and timestamps.

        Price: $0.012 per request.

        Example:
            res = client.apollo.organization_jobs(organizationId="5e66b6381e05b4008c8331b8")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.organization_jobs", dict(input), options
        )
        return BareRunResult[ApolloOrganizationJobsData].model_validate(raw)

    async def organization_news(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationNewsInput],
    ) -> BareRunResult[ApolloOrganizationNewsData]:
        """Apollo Organization News

        Search news related to one or more organizations with article details,
        categories, and pagination totals.

        Price: $0.012 per request.

        Example:
            res = client.apollo.organization_news(limit=3, organizationIds=["5e66b6381e05b4008c8331b8"], page=1)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.organization_news", dict(input), options
        )
        return BareRunResult[ApolloOrganizationNewsData].model_validate(raw)

    async def organizations_bulk_enrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationsBulkEnrichInput],
    ) -> BareRunResult[ApolloOrganizationsBulkEnrichData]:
        """Apollo Bulk Organization Enrichment

        Enrich up to 10 organization domains in one request with normalized company
        profile, industry, employee, revenue, funding, and location data.

        Price: $0.06 per request.

        Example:
            res = client.apollo.organizations_bulk_enrich(domains=["apollo.io", "openai.com"])
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.organizations_bulk_enrich", dict(input), options
        )
        return BareRunResult[ApolloOrganizationsBulkEnrichData].model_validate(raw)

    async def organizations_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationsSearchInput],
    ) -> BareRunResult[ApolloOrganizationsSearchData]:
        """Apollo Organization Search

        Search organizations by location, employee range, industry, and keywords
        with normalized company records and pagination totals.

        Price: $0.012 per request.

        Example:
            res = client.apollo.organizations_search(keywords="Apollo", limit=3, page=1)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.organizations_search", dict(input), options
        )
        return BareRunResult[ApolloOrganizationsSearchData].model_validate(raw)

    async def people_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloPeopleSearchInput],
    ) -> BareRunResult[ApolloPeopleSearchData]:
        """Apollo People Search

        Search people by title, seniority, person or organization location, employee
        range, and keywords with normalized profile summaries.

        Price: $0.01 per request.

        Example:
            res = client.apollo.people_search(limit=3, page=1, titles=["CEO"])
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.people_search", dict(input), options
        )
        return BareRunResult[ApolloPeopleSearchData].model_validate(raw)

    async def person_enrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloPersonEnrichInput],
    ) -> BareRunResult[ApolloPersonEnrichData]:
        """Apollo Person Enrichment

        Enrich a person by email, LinkedIn URL, or name and organization with
        contact, role, location, and company data.

        Price: $0.012 per request.

        Example:
            res = client.apollo.person_enrich(domain="apollo.io", firstName="Tim", lastName="Zheng")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "apollo.person_enrich", dict(input), options
        )
        return BareRunResult[ApolloPersonEnrichData].model_validate(raw)
