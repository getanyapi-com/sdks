# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the apollo platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

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
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    annual_revenue: float | None = Field(
        default=None,
        alias="annualRevenue",
        description="Estimated annual revenue in USD. Minimum: 0.",
    )
    annual_revenue_display: str | None = Field(
        default=None,
        alias="annualRevenueDisplay",
        description="Human-readable estimated annual revenue.",
    )
    city: str | None = Field(default=None, description="Headquarters city.")
    country: str | None = Field(default=None, description="Headquarters country.")
    description: str | None = Field(default=None, description="Organization summary.")
    domain: str | None = Field(default=None, description="Primary organization domain.")
    employee_count: int | None = Field(
        default=None,
        alias="employeeCount",
        description="Estimated employee count. Minimum: 0.",
    )
    facebook_url: str | None = Field(
        default=None, alias="facebookUrl", description="Canonical Facebook page URL."
    )
    founded_year: int | None = Field(
        default=None,
        alias="foundedYear",
        description="Year the organization was founded.",
    )
    id: str = Field(description="Stable organization identifier.")
    image: str | None = Field(default=None, description="Organization logo URL.")
    industries: list[str] | None = Field(
        default=None, description="Industries associated with the organization."
    )
    industry: str | None = Field(default=None, description="Primary industry.")
    keywords: list[str] | None = Field(
        default=None, description="Keywords associated with the organization."
    )
    latest_funding_stage: str | None = Field(
        default=None,
        alias="latestFundingStage",
        description="Latest disclosed funding stage.",
    )
    latest_funding_utc: float | None = Field(
        default=None,
        alias="latestFundingUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Canonical LinkedIn company URL."
    )
    naics_codes: list[str] | None = Field(
        default=None, alias="naicsCodes", description="NAICS industry codes."
    )
    name: str = Field(description="Organization name.")
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Headquarters postal code."
    )
    sic_codes: list[str] | None = Field(
        default=None, alias="sicCodes", description="SIC industry codes."
    )
    state: str | None = Field(default=None, description="Headquarters state or region.")
    street_address: str | None = Field(
        default=None, alias="streetAddress", description="Street address."
    )
    technology_names: list[str] | None = Field(
        default=None,
        alias="technologyNames",
        description="Technologies detected at the organization.",
    )
    total_funding: float | None = Field(
        default=None,
        alias="totalFunding",
        description="Total disclosed funding in USD. Minimum: 0.",
    )
    total_funding_display: str | None = Field(
        default=None,
        alias="totalFundingDisplay",
        description="Human-readable total disclosed funding.",
    )
    twitter_url: str | None = Field(
        default=None,
        alias="twitterUrl",
        description="Canonical X or Twitter profile URL.",
    )
    website_url: str | None = Field(
        default=None,
        alias="websiteUrl",
        description="Canonical organization website URL.",
    )


class ApolloOrganizationEnrichData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    annual_revenue: float | None = Field(
        default=None,
        alias="annualRevenue",
        description="Estimated annual revenue in USD. Minimum: 0.",
    )
    annual_revenue_display: str | None = Field(
        default=None,
        alias="annualRevenueDisplay",
        description="Human-readable estimated annual revenue.",
    )
    city: str | None = Field(default=None, description="Headquarters city.")
    country: str | None = Field(default=None, description="Headquarters country.")
    description: str | None = Field(default=None, description="Organization summary.")
    domain: str | None = Field(default=None, description="Primary organization domain.")
    employee_count: int | None = Field(
        default=None,
        alias="employeeCount",
        description="Estimated employee count. Minimum: 0.",
    )
    facebook_url: str | None = Field(
        default=None, alias="facebookUrl", description="Canonical Facebook page URL."
    )
    founded_year: int | None = Field(
        default=None,
        alias="foundedYear",
        description="Year the organization was founded.",
    )
    id: str = Field(description="Stable organization identifier.")
    image: str | None = Field(default=None, description="Organization logo URL.")
    industries: list[str] | None = Field(
        default=None, description="Industries associated with the organization."
    )
    industry: str | None = Field(default=None, description="Primary industry.")
    keywords: list[str] | None = Field(
        default=None, description="Keywords associated with the organization."
    )
    latest_funding_stage: str | None = Field(
        default=None,
        alias="latestFundingStage",
        description="Latest disclosed funding stage.",
    )
    latest_funding_utc: float | None = Field(
        default=None,
        alias="latestFundingUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Canonical LinkedIn company URL."
    )
    naics_codes: list[str] | None = Field(
        default=None, alias="naicsCodes", description="NAICS industry codes."
    )
    name: str = Field(description="Organization name.")
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Headquarters postal code."
    )
    sic_codes: list[str] | None = Field(
        default=None, alias="sicCodes", description="SIC industry codes."
    )
    state: str | None = Field(default=None, description="Headquarters state or region.")
    street_address: str | None = Field(
        default=None, alias="streetAddress", description="Street address."
    )
    technology_names: list[str] | None = Field(
        default=None,
        alias="technologyNames",
        description="Technologies detected at the organization.",
    )
    total_funding: float | None = Field(
        default=None,
        alias="totalFunding",
        description="Total disclosed funding in USD. Minimum: 0.",
    )
    total_funding_display: str | None = Field(
        default=None,
        alias="totalFundingDisplay",
        description="Human-readable total disclosed funding.",
    )
    twitter_url: str | None = Field(
        default=None,
        alias="twitterUrl",
        description="Canonical X or Twitter profile URL.",
    )
    website_url: str | None = Field(
        default=None,
        alias="websiteUrl",
        description="Canonical organization website URL.",
    )


class ApolloOrganizationJobsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    jobs: list[ApolloOrganizationJobsJob] = Field(description="Current job postings.")
    limit: int = Field(description="Page size returned. Minimum: 0.")
    page: int = Field(description="One-based page returned. Minimum: 1.")
    total: int = Field(description="Total current job postings. Minimum: 0.")
    total_pages: int = Field(
        alias="totalPages", description="Total available pages. Minimum: 0."
    )


class ApolloOrganizationJobsJob(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="Job city.")
    country: str | None = Field(default=None, description="Job country.")
    id: str = Field(description="Stable job posting identifier.")
    last_seen_utc: float | None = Field(
        default=None,
        alias="lastSeenUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    posted_utc: float | None = Field(
        default=None,
        alias="postedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    state: str | None = Field(default=None, description="Job state or region.")
    title: str = Field(description="Job title.")
    url: str = Field(description="Canonical job posting URL.")


class ApolloOrganizationNewsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    articles: list[ApolloOrganizationNewsArticle] = Field(
        description="Related news articles on this page."
    )
    limit: int = Field(description="Page size returned. Minimum: 0.")
    page: int = Field(description="One-based page returned. Minimum: 1.")
    total: int = Field(description="Total matching articles. Minimum: 0.")
    total_pages: int = Field(
        alias="totalPages", description="Total available pages. Minimum: 0."
    )


class ApolloOrganizationNewsArticle(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    domain: str | None = Field(default=None, description="Publishing domain.")
    event_categories: list[str] | None = Field(
        default=None,
        alias="eventCategories",
        description="Detected business event categories.",
    )
    id: str = Field(description="Stable article identifier.")
    organization_ids: list[str] | None = Field(
        default=None,
        alias="organizationIds",
        description="Organization identifiers associated with the article.",
    )
    published_utc: float | None = Field(
        default=None,
        alias="publishedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    snippet: str | None = Field(default=None, description="Article summary or excerpt.")
    title: str = Field(description="Article title.")
    url: str = Field(description="Canonical article URL.")


class ApolloOrganizationsBulkEnrichData(BaseModel):
    enriched: int = Field(
        description="Number of uniquely enriched organizations. Minimum: 0."
    )
    missing: int = Field(
        description="Number of requested domains without a match. Minimum: 0."
    )
    organizations: list[ApolloOrganizationsBulkEnrichOrganization] = Field(
        description="Enriched organizations."
    )
    requested: int = Field(description="Number of requested domains. Minimum: 0.")


class ApolloOrganizationsBulkEnrichOrganization(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    annual_revenue: float | None = Field(
        default=None,
        alias="annualRevenue",
        description="Estimated annual revenue in USD. Minimum: 0.",
    )
    annual_revenue_display: str | None = Field(
        default=None,
        alias="annualRevenueDisplay",
        description="Human-readable estimated annual revenue.",
    )
    city: str | None = Field(default=None, description="Headquarters city.")
    country: str | None = Field(default=None, description="Headquarters country.")
    description: str | None = Field(default=None, description="Organization summary.")
    domain: str | None = Field(default=None, description="Primary organization domain.")
    employee_count: int | None = Field(
        default=None,
        alias="employeeCount",
        description="Estimated employee count. Minimum: 0.",
    )
    facebook_url: str | None = Field(
        default=None, alias="facebookUrl", description="Canonical Facebook page URL."
    )
    founded_year: int | None = Field(
        default=None,
        alias="foundedYear",
        description="Year the organization was founded.",
    )
    id: str = Field(description="Stable organization identifier.")
    image: str | None = Field(default=None, description="Organization logo URL.")
    industries: list[str] | None = Field(
        default=None, description="Industries associated with the organization."
    )
    industry: str | None = Field(default=None, description="Primary industry.")
    keywords: list[str] | None = Field(
        default=None, description="Keywords associated with the organization."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Canonical LinkedIn company URL."
    )
    naics_codes: list[str] | None = Field(
        default=None, alias="naicsCodes", description="NAICS industry codes."
    )
    name: str = Field(description="Organization name.")
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Headquarters postal code."
    )
    sic_codes: list[str] | None = Field(
        default=None, alias="sicCodes", description="SIC industry codes."
    )
    state: str | None = Field(default=None, description="Headquarters state or region.")
    street_address: str | None = Field(
        default=None, alias="streetAddress", description="Street address."
    )
    twitter_url: str | None = Field(
        default=None,
        alias="twitterUrl",
        description="Canonical X or Twitter profile URL.",
    )
    website_url: str | None = Field(
        default=None,
        alias="websiteUrl",
        description="Canonical organization website URL.",
    )


class ApolloOrganizationsSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    limit: int = Field(
        description="Page size returned by the upstream database. Minimum: 0."
    )
    organizations: list[ApolloOrganizationsSearchOrganization] = Field(
        description="Organizations on this page."
    )
    page: int = Field(description="One-based page returned. Minimum: 1.")
    total: int = Field(description="Total matching organizations. Minimum: 0.")
    total_pages: int = Field(
        alias="totalPages", description="Total available pages. Minimum: 0."
    )


class ApolloOrganizationsSearchOrganization(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    annual_revenue: float | None = Field(
        default=None,
        alias="annualRevenue",
        description="Estimated annual revenue in USD. Minimum: 0.",
    )
    annual_revenue_display: str | None = Field(
        default=None,
        alias="annualRevenueDisplay",
        description="Human-readable estimated annual revenue.",
    )
    domain: str | None = Field(default=None, description="Primary organization domain.")
    facebook_url: str | None = Field(
        default=None, alias="facebookUrl", description="Canonical Facebook page URL."
    )
    founded_year: int | None = Field(
        default=None,
        alias="foundedYear",
        description="Year the organization was founded.",
    )
    id: str = Field(description="Stable organization identifier.")
    image: str | None = Field(default=None, description="Organization logo URL.")
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Canonical LinkedIn company URL."
    )
    naics_codes: list[str] | None = Field(
        default=None, alias="naicsCodes", description="NAICS industry codes."
    )
    name: str = Field(description="Organization name.")
    sic_codes: list[str] | None = Field(
        default=None, alias="sicCodes", description="SIC industry codes."
    )
    twitter_url: str | None = Field(
        default=None,
        alias="twitterUrl",
        description="Canonical X or Twitter profile URL.",
    )
    website_url: str | None = Field(
        default=None,
        alias="websiteUrl",
        description="Canonical organization website URL.",
    )


class ApolloPeopleSearchData(BaseModel):
    people: list[ApolloPeopleSearchPeople] = Field(
        description="People on this result page."
    )
    total: int = Field(description="Total matching people. Minimum: 0.")


class ApolloPeopleSearchPeople(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    first_name: str = Field(alias="firstName", description="Person first name.")
    has_city: bool | None = Field(
        default=None,
        alias="hasCity",
        description="Whether city data is available through enrichment.",
    )
    has_country: bool | None = Field(
        default=None,
        alias="hasCountry",
        description="Whether country data is available through enrichment.",
    )
    has_direct_phone: bool | None = Field(
        default=None,
        alias="hasDirectPhone",
        description="Whether direct phone data is available through asynchronous enrichment.",
    )
    has_email: bool | None = Field(
        default=None,
        alias="hasEmail",
        description="Whether an email is available through enrichment.",
    )
    has_state: bool | None = Field(
        default=None,
        alias="hasState",
        description="Whether state or region data is available through enrichment.",
    )
    id: str = Field(description="Stable person identifier.")
    last_name_initial: str | None = Field(
        default=None,
        alias="lastNameInitial",
        description="Obfuscated last-name initial.",
    )
    last_refreshed_utc: float | None = Field(
        default=None,
        alias="lastRefreshedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    organization: ApolloPeopleSearchOrganization | None = Field(
        default=None, description="Availability summary for the current organization."
    )
    title: str | None = Field(default=None, description="Current job title.")


class ApolloPeopleSearchOrganization(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    has_city: bool | None = Field(
        default=None,
        alias="hasCity",
        description="Whether organization city data is available.",
    )
    has_country: bool | None = Field(
        default=None,
        alias="hasCountry",
        description="Whether organization country data is available.",
    )
    has_employee_count: bool | None = Field(
        default=None,
        alias="hasEmployeeCount",
        description="Whether organization employee-count data is available.",
    )
    has_industry: bool | None = Field(
        default=None,
        alias="hasIndustry",
        description="Whether industry data is available.",
    )
    has_phone: bool | None = Field(
        default=None,
        alias="hasPhone",
        description="Whether an organization phone is available.",
    )
    has_postal_code: bool | None = Field(
        default=None,
        alias="hasPostalCode",
        description="Whether organization postal-code data is available.",
    )
    has_revenue: bool | None = Field(
        default=None,
        alias="hasRevenue",
        description="Whether organization revenue data is available.",
    )
    has_state: bool | None = Field(
        default=None,
        alias="hasState",
        description="Whether organization state data is available.",
    )
    name: str | None = Field(default=None, description="Current organization name.")


class ApolloPersonEnrichData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="City.")
    country: str | None = Field(default=None, description="Country.")
    departments: list[str] | None = Field(
        default=None, description="Current departments."
    )
    email: str | None = Field(default=None, description="Available work email.")
    email_status: str | None = Field(
        default=None,
        alias="emailStatus",
        description="Verification status of the work email.",
    )
    employment_history: list[ApolloPersonEnrichEmploymentHistory] | None = Field(
        default=None, alias="employmentHistory", description="Known employment history."
    )
    facebook_url: str | None = Field(
        default=None, alias="facebookUrl", description="Canonical Facebook profile URL."
    )
    first_name: str = Field(alias="firstName", description="Person first name.")
    functions: list[str] | None = Field(
        default=None, description="Current business functions."
    )
    github_url: str | None = Field(
        default=None, alias="githubUrl", description="Canonical GitHub profile URL."
    )
    headline: str | None = Field(default=None, description="Professional headline.")
    id: str = Field(description="Stable person identifier.")
    image: str | None = Field(default=None, description="Profile image URL.")
    last_name: str = Field(alias="lastName", description="Person last name.")
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Canonical LinkedIn profile URL."
    )
    name: str = Field(description="Full person name.")
    organization: ApolloPersonEnrichOrganization | None = Field(
        default=None, description="Current organization summary."
    )
    personal_emails: list[str] | None = Field(
        default=None,
        alias="personalEmails",
        description="Available personal email addresses, included automatically.",
    )
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Postal code."
    )
    seniority: str | None = Field(
        default=None, description="Current seniority classification."
    )
    state: str | None = Field(default=None, description="State or region.")
    street_address: str | None = Field(
        default=None, alias="streetAddress", description="Street address."
    )
    subdepartments: list[str] | None = Field(
        default=None, description="Current subdepartments."
    )
    time_zone: str | None = Field(
        default=None, alias="timeZone", description="IANA time-zone identifier."
    )
    title: str | None = Field(default=None, description="Current job title.")
    twitter_url: str | None = Field(
        default=None,
        alias="twitterUrl",
        description="Canonical X or Twitter profile URL.",
    )


class ApolloPersonEnrichEmploymentHistory(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    current: bool | None = Field(
        default=None, description="Whether this is a current role."
    )
    end_utc: float | None = Field(
        default=None,
        alias="endUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(description="Stable employment record identifier.")
    organization_id: str | None = Field(
        default=None, alias="organizationId", description="Organization identifier."
    )
    organization_name: str | None = Field(
        default=None, alias="organizationName", description="Organization name."
    )
    start_utc: float | None = Field(
        default=None,
        alias="startUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    title: str | None = Field(default=None, description="Role title.")


class ApolloPersonEnrichOrganization(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="Headquarters city.")
    country: str | None = Field(default=None, description="Headquarters country.")
    domain: str | None = Field(default=None, description="Primary organization domain.")
    employee_count: int | None = Field(
        default=None,
        alias="employeeCount",
        description="Estimated employee count. Minimum: 0.",
    )
    id: str = Field(description="Stable organization identifier.")
    image: str | None = Field(default=None, description="Organization logo URL.")
    industry: str | None = Field(default=None, description="Primary industry.")
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Canonical LinkedIn company URL."
    )
    name: str = Field(description="Organization name.")
    state: str | None = Field(default=None, description="Headquarters state or region.")
    website_url: str | None = Field(
        default=None,
        alias="websiteUrl",
        description="Canonical organization website URL.",
    )


class ApolloNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def organization(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationInput],
    ) -> RunResult[ApolloOrganizationData]:
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
        return RunResult[ApolloOrganizationData].model_validate(raw)

    def organization_enrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationEnrichInput],
    ) -> RunResult[ApolloOrganizationEnrichData]:
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
        return RunResult[ApolloOrganizationEnrichData].model_validate(raw)

    def organization_jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationJobsInput],
    ) -> RunResult[ApolloOrganizationJobsData]:
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
        return RunResult[ApolloOrganizationJobsData].model_validate(raw)

    def organization_news(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationNewsInput],
    ) -> RunResult[ApolloOrganizationNewsData]:
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
        return RunResult[ApolloOrganizationNewsData].model_validate(raw)

    def organizations_bulk_enrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationsBulkEnrichInput],
    ) -> RunResult[ApolloOrganizationsBulkEnrichData]:
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
        return RunResult[ApolloOrganizationsBulkEnrichData].model_validate(raw)

    def organizations_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationsSearchInput],
    ) -> RunResult[ApolloOrganizationsSearchData]:
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
        return RunResult[ApolloOrganizationsSearchData].model_validate(raw)

    def people_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloPeopleSearchInput],
    ) -> RunResult[ApolloPeopleSearchData]:
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
        return RunResult[ApolloPeopleSearchData].model_validate(raw)

    def person_enrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloPersonEnrichInput],
    ) -> RunResult[ApolloPersonEnrichData]:
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
        return RunResult[ApolloPersonEnrichData].model_validate(raw)


class AsyncApolloNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def organization(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationInput],
    ) -> RunResult[ApolloOrganizationData]:
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
        return RunResult[ApolloOrganizationData].model_validate(raw)

    async def organization_enrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationEnrichInput],
    ) -> RunResult[ApolloOrganizationEnrichData]:
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
        return RunResult[ApolloOrganizationEnrichData].model_validate(raw)

    async def organization_jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationJobsInput],
    ) -> RunResult[ApolloOrganizationJobsData]:
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
        return RunResult[ApolloOrganizationJobsData].model_validate(raw)

    async def organization_news(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationNewsInput],
    ) -> RunResult[ApolloOrganizationNewsData]:
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
        return RunResult[ApolloOrganizationNewsData].model_validate(raw)

    async def organizations_bulk_enrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationsBulkEnrichInput],
    ) -> RunResult[ApolloOrganizationsBulkEnrichData]:
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
        return RunResult[ApolloOrganizationsBulkEnrichData].model_validate(raw)

    async def organizations_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloOrganizationsSearchInput],
    ) -> RunResult[ApolloOrganizationsSearchData]:
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
        return RunResult[ApolloOrganizationsSearchData].model_validate(raw)

    async def people_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloPeopleSearchInput],
    ) -> RunResult[ApolloPeopleSearchData]:
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
        return RunResult[ApolloPeopleSearchData].model_validate(raw)

    async def person_enrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ApolloPersonEnrichInput],
    ) -> RunResult[ApolloPersonEnrichData]:
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
        return RunResult[ApolloPersonEnrichData].model_validate(raw)
