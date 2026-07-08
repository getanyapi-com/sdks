# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the linkedin platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class LinkedinAdInput(TypedDict, total=False):
    """Input for LinkedIn Ad Details."""

    url: Required[str]
    """LinkedIn Ad Library ad URL (e.g. "https://www.linkedin.com/ad-library/detail/666281156")."""


class LinkedinAdsInput(TypedDict, total=False):
    """Input for LinkedIn Ads Library."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    url: Required[str]
    """LinkedIn Ad Library search URL or a LinkedIn company URL (e.g. https://www.linkedin.com/ad-library/search?companyIds=1035)."""


class LinkedinAdsSearchInput(TypedDict, total=False):
    """Input for LinkedIn Ad Search."""

    company: NotRequired[str]
    """Company name to search (e.g. "microsoft")."""
    companyId: NotRequired[str]
    """LinkedIn company identifier."""
    countries: NotRequired[str]
    """Comma-separated two-letter country codes (e.g. "US,CA,MX")."""
    endDate: NotRequired[str]
    """Search end date in YYYY-MM-DD format."""
    keyword: NotRequired[str]
    """Keyword term for the ad search."""
    paginationToken: NotRequired[str]
    """Opaque pagination token from a previous response's nextCursor."""
    startDate: NotRequired[str]
    """Search start date in YYYY-MM-DD format."""


class LinkedinCompanyInput(TypedDict, total=False):
    """Input for LinkedIn Company."""

    url: Required[str]
    """Full LinkedIn company page URL."""


class LinkedinCompanyEmployeesInput(TypedDict, total=False):
    """Input for LinkedIn Company Employees."""

    company: Required[str]
    """Company name or LinkedIn company URL (e.g. google or https://www.linkedin.com/company/google/)."""
    jobTitle: NotRequired[str]
    """Optional job-title filter supporting boolean operators (e.g. CEO OR CTO)."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less. Range: 1 to 10."""


class LinkedinCompanyPostsInput(TypedDict, total=False):
    """Input for LinkedIn Company Posts."""

    page: NotRequired[int]
    """Page number for pagination. Minimum: 1."""
    url: Required[str]
    """Full LinkedIn company page URL."""


class LinkedinEmailInput(TypedDict, total=False):
    """Input for LinkedIn Email Finder."""

    profileUrl: Required[str]
    """LinkedIn profile URL or public ID to find the work email for."""


class LinkedinJobsInput(TypedDict, total=False):
    """Input for LinkedIn Jobs."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    location: NotRequired[str]
    """City, region, or country to search within."""
    query: Required[str]
    """Job title or keywords to search."""


class LinkedinPostInput(TypedDict, total=False):
    """Input for LinkedIn Post."""

    url: Required[str]
    """Full LinkedIn post or article URL."""


class LinkedinPostTranscriptInput(TypedDict, total=False):
    """Input for LinkedIn Post Transcript."""

    url: Required[str]
    """The full URL of the LinkedIn post to get the video transcript from."""


class LinkedinProfileInput(TypedDict, total=False):
    """Input for LinkedIn Profile."""

    url: Required[str]
    """Full LinkedIn profile URL."""


class LinkedinSearchCompaniesInput(TypedDict, total=False):
    """Input for LinkedIn Company Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    location: NotRequired[str]
    """Optional location filter, written out in full (e.g. United Kingdom or San Francisco)."""
    query: Required[str]
    """Keyword to search LinkedIn companies for (e.g. marketing agency)."""


class LinkedinSearchPostsInput(TypedDict, total=False):
    """Input for LinkedIn Post Search."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    datePosted: NotRequired[
        Literal["last-hour", "last-day", "last-week", "last-month", "last-year"]
    ]
    """Filter by recency. One of last-hour, last-day, last-week, last-month, last-year."""
    query: Required[str]
    """The post search query."""


class LinkedinSearchProfilesInput(TypedDict, total=False):
    """Input for LinkedIn Profile Search."""

    jobTitle: NotRequired[str]
    """Optional current job title filter (e.g. 'Software Engineer')."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less. Range: 1 to 10."""
    location: NotRequired[str]
    """Optional location filter (e.g. 'San Francisco')."""
    query: Required[str]
    """Search query for LinkedIn profiles - a role, name, or keywords (e.g. 'Marketing Manager')."""


class LinkedinAdData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    ad_type: str = Field(
        alias="adType",
        description="Populated whenever the provider has data for the entity.",
    )
    advertiser: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    advertiser_linkedin_page: str = Field(
        alias="advertiserLinkedinPage",
        description="Populated whenever the provider has data for the entity.",
    )
    cta: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    description: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    destination_url: str = Field(alias="destinationUrl")
    end_date: str = Field(alias="endDate", description="ISO 8601 date.")
    headline: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    id: str
    image: str
    start_date: str = Field(alias="startDate", description="ISO 8601 date.")
    total_impressions: str = Field(alias="totalImpressions")


class LinkedinAdsData(BaseModel):
    items: list[LinkedinAdsItem] = Field(
        description="Ad records from the LinkedIn Ad Library. Populated whenever the provider has data for the entity."
    )


class LinkedinAdsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    advertiser: str | None = Field(
        default=None,
        description="Advertiser (company) name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    advertiser_logo: str | None = Field(
        default=None, alias="advertiserLogo", description="Advertiser logo image URL."
    )
    format: str | None = Field(
        default=None, description="Ad format (e.g. SINGLE_IMAGE, VIDEO)."
    )
    id: str = Field(
        description="LinkedIn ad id. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(default=None, description="Ad creative image URL.")
    text: str | None = Field(default=None, description="Ad creative body text.")
    url: str = Field(
        description="Canonical LinkedIn Ad Library detail URL. Populated whenever the provider has data for the entity."
    )


class LinkedinAdsSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    ads: list[LinkedinAdsSearchAd] = Field(
        description="Populated whenever the provider has data for the entity."
    )
    next_cursor: str = Field(alias="nextCursor")
    total_ads: int = Field(alias="totalAds")


class LinkedinAdsSearchAd(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    ad_type: str = Field(
        alias="adType",
        description="Populated whenever the provider has data for the entity.",
    )
    advertiser: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    advertiser_linkedin_page: str = Field(alias="advertiserLinkedinPage")
    cta: str
    description: str
    destination_url: str = Field(alias="destinationUrl")
    end_date: str = Field(alias="endDate")
    headline: str
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    start_date: str = Field(alias="startDate")
    total_impressions: str = Field(alias="totalImpressions")


class LinkedinCompanyData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    description: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    employee_count: int = Field(alias="employeeCount")
    industry: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    logo_url: str = Field(
        alias="logoUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    name: str
    tagline: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    website: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class LinkedinCompanyEmployeesData(BaseModel):
    items: list[LinkedinCompanyEmployeesItem] = Field(
        description="Employee records for the company. Populated whenever the provider has data for the entity."
    )


class LinkedinCompanyEmployeesItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    first_name: str | None = Field(
        default=None, alias="firstName", description="First name."
    )
    handle: str | None = Field(
        default=None,
        description="Public profile identifier (the vanity slug in the URL). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    image: str | None = Field(default=None, description="Profile picture URL.")
    job_title: str | None = Field(
        default=None,
        alias="jobTitle",
        description="The employee's current role or headline.",
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Last name."
    )
    location: str | None = Field(
        default=None,
        description="The employee's location as a single string (city, region, country).",
    )
    name: str | None = Field(
        default=None,
        description="Full name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    url: str = Field(
        description="Canonical LinkedIn profile URL. Populated whenever the provider has data for the entity."
    )


class LinkedinCompanyPostsData(BaseModel):
    posts: list[LinkedinCompanyPostsPost] = Field(
        description="The company's recent posts. Populated whenever the provider has data for the entity."
    )


class LinkedinCompanyPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Unique identifier of the post. Populated whenever the provider has data for the entity."
    )
    text: str = Field(
        description="Text content of the post. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical URL of the post. Populated whenever the provider has data for the entity."
    )


class LinkedinEmailData(BaseModel):
    items: list[LinkedinEmailItem] = Field(
        description="Email lookup records for the LinkedIn profile. Populated whenever the provider has data for the entity."
    )


class LinkedinEmailItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company: str | None = Field(default=None, description="Current company name.")
    email: str = Field(
        description="Discovered work email address. Populated whenever the provider has data for the entity."
    )
    first_name: str | None = Field(
        default=None, alias="firstName", description="First name."
    )
    headline: str | None = Field(default=None, description="Profile headline.")
    last_name: str | None = Field(
        default=None, alias="lastName", description="Last name."
    )
    linkedin_url: str | None = Field(
        default=None,
        alias="linkedinUrl",
        description="Canonical LinkedIn profile URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    location: str | None = Field(
        default=None, description="Current location (city, region, country)."
    )
    name: str = Field(
        description="Full name on the LinkedIn profile. Populated whenever the provider has data for the entity."
    )
    phone: str | None = Field(default=None, description="Phone number, when available.")
    seniority: str | None = Field(
        default=None, description="Seniority level (e.g. entry, senior)."
    )
    title: str | None = Field(default=None, description="Current job title.")


class LinkedinJobsData(BaseModel):
    items: list[LinkedinJobsItem] = Field(
        description="Job listing records for the search. Populated whenever the provider has data for the entity."
    )


class LinkedinJobsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company: str | None = Field(
        default=None,
        description="Hiring company name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    company_url: str | None = Field(
        default=None, alias="companyUrl", description="Canonical LinkedIn company URL."
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    description: str | None = Field(
        default=None, description="Full job description text."
    )
    id: str | None = Field(default=None, description="LinkedIn job listing id.")
    location: str | None = Field(
        default=None,
        description="Job location (city, region). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    seniority: str | None = Field(
        default=None,
        description="Seniority / experience level (e.g. Entry level, Mid-Senior, Not Applicable).",
    )
    title: str = Field(
        description="Job title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical LinkedIn job listing URL. Populated whenever the provider has data for the entity."
    )


class LinkedinPostData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Name of the post author. Populated whenever the provider has data for the entity."
    )
    comments: int = Field(description="Number of comments on the post.")
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    likes: int = Field(description="Number of likes on the post.")
    text: str = Field(
        description="Text content of the post. Populated whenever the provider has data for the entity."
    )
    title: str = Field(description="Title of the post.")
    url: str = Field(
        description="Canonical URL of the post. Populated whenever the provider has data for the entity."
    )


class LinkedinPostTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    transcript: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    transcript_not_available: bool = Field(alias="transcriptNotAvailable")
    url: str


class LinkedinProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    about: str = Field(description="About/summary text of the profile.")
    articles: list[LinkedinProfileArticle] = Field(
        description="The profile's published articles. Populated whenever the provider has data for the entity."
    )
    avatar_url: str = Field(
        alias="avatarUrl", description="URL of the profile avatar image."
    )
    education: list[LinkedinProfileEducation] = Field(
        description="Education entries. Populated whenever the provider has data for the entity."
    )
    experience: list[LinkedinProfileExperience] = Field(
        description="Work experience entries. Populated whenever the provider has data for the entity."
    )
    followers: int = Field(description="Number of followers.")
    location: str = Field(description="Location of the profile owner.")
    name: str = Field(description="Full name of the profile owner.")
    recent_posts: list[LinkedinProfileRecentPost] = Field(
        alias="recentPosts",
        description="The profile's recent posts. Populated whenever the provider has data for the entity.",
    )


class LinkedinProfileArticle(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    headline: str = Field(description="Headline of the article.")
    url: str | None = Field(default=None, description="Canonical URL of the article.")


class LinkedinProfileEducation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    end_date: str | None = Field(
        default=None, alias="endDate", description="End date of study."
    )
    school: str = Field(description="Name of the school.")
    school_url: str | None = Field(
        default=None, alias="schoolUrl", description="URL of the school page."
    )
    start_date: str | None = Field(
        default=None, alias="startDate", description="Start date of study."
    )


class LinkedinProfileExperience(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company: str = Field(description="Name of the company.")
    company_url: str | None = Field(
        default=None, alias="companyUrl", description="URL of the company page."
    )
    end_date: str | None = Field(
        default=None, alias="endDate", description="End date of the role."
    )
    start_date: str | None = Field(
        default=None, alias="startDate", description="Start date of the role."
    )


class LinkedinProfileRecentPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    activity_type: str | None = Field(
        default=None, alias="activityType", description="Type of activity for the post."
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(description="Unique identifier of the post.")
    text: str | None = Field(default=None, description="Text content of the post.")
    url: str | None = Field(default=None, description="Canonical URL of the post.")


class LinkedinSearchCompaniesData(BaseModel):
    items: list[LinkedinSearchCompaniesItem] = Field(
        description="Matching company records. Populated whenever the provider has data for the entity."
    )


class LinkedinSearchCompaniesItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    description: str | None = Field(
        default=None, description="Company summary / about text."
    )
    followers_text: str | None = Field(
        default=None,
        alias="followersText",
        description="Follower count as a display string (e.g. 105K followers).",
    )
    handle: str | None = Field(
        default=None, description="Company universal name (the vanity slug in the URL)."
    )
    id: str = Field(
        description="LinkedIn company id. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(default=None, description="Company logo image URL.")
    industry: str | None = Field(default=None, description="Company industry.")
    location: str | None = Field(
        default=None, description="Company location as a single string (city, region)."
    )
    name: str = Field(
        description="Company name. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical LinkedIn company URL. Populated whenever the provider has data for the entity."
    )


class LinkedinSearchPostsData(BaseModel):
    posts: list[LinkedinSearchPostsPost] = Field(
        description="Posts matching the search query. Populated whenever the provider has data for the entity."
    )


class LinkedinSearchPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    text: str = Field(
        description="Text content of the post. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical URL of the post. Populated whenever the provider has data for the entity."
    )


class LinkedinSearchProfilesData(BaseModel):
    items: list[LinkedinSearchProfilesItem] = Field(
        description="Matched profile records. Populated whenever the provider has data for the entity."
    )


class LinkedinSearchProfilesItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    about: str | None = Field(default=None, description="Profile about / summary text.")
    current_position: list[LinkedinSearchProfilesCurrentPosition] | None = Field(
        default=None,
        alias="currentPosition",
        description="Current role(s). Each entry is an open object with the position title, company, dates, and location; shape can vary by profile and lane.",
    )
    education: list[LinkedinSearchProfilesEducation] | None = Field(
        default=None,
        description="Education history. Each entry is an open object with school, degree, and field of study; shape can vary by profile and lane.",
    )
    experience: list[LinkedinSearchProfilesExperience] | None = Field(
        default=None,
        description="Full work history. Each entry is an open object with the position title, company, dates, and location; shape can vary by profile and lane.",
    )
    first_name: str | None = Field(
        default=None, alias="firstName", description="Member's first name."
    )
    handle: str | None = Field(
        default=None,
        description="Public profile identifier (the vanity slug in the URL). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    headline: str | None = Field(
        default=None,
        description="Profile headline (the tagline under the name). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    id: str = Field(description="LinkedIn member URN id for the profile.")
    image: str | None = Field(default=None, description="Profile picture URL.")
    last_name: str | None = Field(
        default=None, alias="lastName", description="Member's last name."
    )
    location: str | None = Field(
        default=None,
        description="Member's location as a single string (city, region, country).",
    )
    url: str = Field(
        description="Canonical LinkedIn profile URL. Populated whenever the provider has data for the entity."
    )


class LinkedinSearchProfilesCurrentPosition(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchProfilesEducation(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchProfilesExperience(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def ad(
        self, *, options: RequestOptions | None = None, **input: Unpack[LinkedinAdInput]
    ) -> RunResult[LinkedinAdData]:
        """LinkedIn Ad Details

        Look up a single LinkedIn Ad Library ad by URL and get the advertiser,
        headline, creative text, format, CTA, targeting, run dates, and impressions
        as clean JSON. **Price:** $2.00 per 1,000 requests (flat per request - same
        cost regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.ad(url="https://www.linkedin.com/ad-library/detail/1487405616")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.ad", dict(input), options
        )
        return RunResult[LinkedinAdData].model_validate(raw)

    def ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinAdsInput],
    ) -> RunResult[LinkedinAdsData]:
        """LinkedIn Ads Library

        Search the LinkedIn Ad Library by search URL and list the matching ads
        (advertiser, creative text, format). **Price:** billed per result - $0.05
        per 1,000 requests base + $1.50 per 1,000 results, capped at $30.05 per
        1,000 requests.

        Price: $0.00005 per request plus $0.0015 per result.

        Example:
            res = client.linkedin.ads(limit=3, url="https://www.linkedin.com/company/stripe")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.ads", dict(input), options
        )
        return RunResult[LinkedinAdsData].model_validate(raw)

    def ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinAdsSearchInput],
    ) -> RunResult[LinkedinAdsSearchData]:
        """LinkedIn Ad Search

        Search the LinkedIn Ad Library by company or keyword and list matching ads -
        advertiser, headline, creative text, format, CTA, and run dates - with
        pagination. **Price:** $2.00 per 1,000 requests (flat per request - same
        cost regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.ads_search(company="microsoft")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.ads_search", dict(input), options
        )
        return RunResult[LinkedinAdsSearchData].model_validate(raw)

    def company(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyInput],
    ) -> RunResult[LinkedinCompanyData]:
        """LinkedIn Company

        Fetch a LinkedIn company page (description, employee count, industry,
        website, logo) by company URL, normalized across providers with transparent
        failover. **Price:** $2.00 per 1,000 requests (flat per request - same cost
        regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.company(url="https://www.linkedin.com/company/stripe")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company", dict(input), options
        )
        return RunResult[LinkedinCompanyData].model_validate(raw)

    def company_employees(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyEmployeesInput],
    ) -> RunResult[LinkedinCompanyEmployeesData]:
        """LinkedIn Company Employees

        List the employees of a LinkedIn company by name or company URL, with
        optional job-title filtering. **Price:** billed per result - $0.00 per 1,000
        requests base + $10.00 per 1,000 results, capped at $100.00 per 1,000
        requests.

        Price: $0.01 per result.

        Example:
            res = client.linkedin.company_employees(company="stripe", limit=3)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company_employees", dict(input), options
        )
        return RunResult[LinkedinCompanyEmployeesData].model_validate(raw)

    def company_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyPostsInput],
    ) -> RunResult[LinkedinCompanyPostsData]:
        """LinkedIn Company Posts

        List a LinkedIn company page's recent posts by URL with page pagination
        (text, link, publish date), normalized across providers. **Price:** $2.00
        per 1,000 requests (flat per request - same cost regardless of results
        returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.company_posts(url="https://www.linkedin.com/company/stripe")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company_posts", dict(input), options
        )
        return RunResult[LinkedinCompanyPostsData].model_validate(raw)

    def email(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinEmailInput],
    ) -> RunResult[LinkedinEmailData]:
        """LinkedIn Email Finder

        Find the verified work email behind a LinkedIn profile URL or ID. **Price:**
        billed per result - $0.00 per 1,000 requests base + $0.70 per 1,000 results,
        capped at $0.70 per 1,000 requests.

        Price: $0.0007 per result.

        Example:
            res = client.linkedin.email(profileUrl="https://www.linkedin.com/in/satyanadella")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.email", dict(input), options
        )
        return RunResult[LinkedinEmailData].model_validate(raw)

    def jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinJobsInput],
    ) -> RunResult[LinkedinJobsData]:
        """LinkedIn Jobs

        Search LinkedIn job listings by title and location - up to 25 normalized job
        records per request. **Price:** $1.00 per 1,000 requests (flat per request -
        same cost regardless of results returned).

        Price: $0.001 per request.

        Example:
            res = client.linkedin.jobs(limit=3, location="San Francisco", query="software engineer")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.jobs", dict(input), options
        )
        return RunResult[LinkedinJobsData].model_validate(raw)

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostInput],
    ) -> RunResult[LinkedinPostData]:
        """LinkedIn Post

        Fetch a single LinkedIn post or article by URL (title, text, author, like
        and comment counts, publish date), normalized across providers. **Price:**
        $1.00 per 1,000 requests (flat per request - same cost regardless of results
        returned).

        Price: $0.001 per request.

        Example:
            res = client.linkedin.post(url="https://www.linkedin.com/posts/stripe_last-week-agent-traffic-surpassed-human-activity-7470882737390940160-2Nxs")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.post", dict(input), options
        )
        return RunResult[LinkedinPostData].model_validate(raw)

    def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostTranscriptInput],
    ) -> RunResult[LinkedinPostTranscriptData]:
        """LinkedIn Post Transcript

        Get the spoken transcript of a LinkedIn video post by URL. **Price:** $2.00
        per 1,000 requests (flat per request - same cost regardless of results
        returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.post_transcript(url="https://www.linkedin.com/posts/artificial-analysis_gemini-35-flash-is-a-step-forward-for-google-activity-7465082408409870337-4Pm-")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.post_transcript", dict(input), options
        )
        return RunResult[LinkedinPostTranscriptData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinProfileInput],
    ) -> RunResult[LinkedinProfileData]:
        """LinkedIn Profile

        Fetch a LinkedIn member's public profile by URL: name, location, followers,
        about, plus experience, education, recent posts, and published articles.
        **Price:** $2.00 per 1,000 requests (flat per request - same cost regardless
        of results returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.profile(url="https://www.linkedin.com/in/williamhgates")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.profile", dict(input), options
        )
        return RunResult[LinkedinProfileData].model_validate(raw)

    def search_companies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchCompaniesInput],
    ) -> RunResult[LinkedinSearchCompaniesData]:
        """LinkedIn Company Search

        Search LinkedIn companies by keyword with optional location filtering,
        returning normalized company records. **Price:** billed per result - $1.00
        per 1,000 requests base + $4.00 per 1,000 results, capped at $81.00 per
        1,000 requests.

        Price: $0.001 per request plus $0.004 per result.

        Example:
            res = client.linkedin.search_companies(limit=3, query="fintech")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_companies", dict(input), options
        )
        return RunResult[LinkedinSearchCompaniesData].model_validate(raw)

    def search_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchPostsInput],
    ) -> RunResult[LinkedinSearchPostsData]:
        """LinkedIn Post Search

        Search public LinkedIn posts by keyword (text, link, publish date),
        normalized across providers with transparent failover. **Price:** $2.00 per
        1,000 requests (flat per request - same cost regardless of results
        returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.search_posts(datePosted="last-week", query="hiring")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_posts", dict(input), options
        )
        return RunResult[LinkedinSearchPostsData].model_validate(raw)

    def search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchProfilesInput],
    ) -> RunResult[LinkedinSearchProfilesData]:
        """LinkedIn Profile Search

        Search LinkedIn profiles by keyword with optional location and job-title
        filters. Each match returns a full profile record: name, headline, location,
        current position, work experience, and education, plus the profile URL,
        handle, and id. **Price:** $32.50 per 1,000 requests (flat per request -
        same cost regardless of results returned).

        Price: $0.0325 per request.

        Example:
            res = client.linkedin.search_profiles(limit=3, query="recruiter")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_profiles", dict(input), options
        )
        return RunResult[LinkedinSearchProfilesData].model_validate(raw)


class AsyncLinkedinNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def ad(
        self, *, options: RequestOptions | None = None, **input: Unpack[LinkedinAdInput]
    ) -> RunResult[LinkedinAdData]:
        """LinkedIn Ad Details

        Look up a single LinkedIn Ad Library ad by URL and get the advertiser,
        headline, creative text, format, CTA, targeting, run dates, and impressions
        as clean JSON. **Price:** $2.00 per 1,000 requests (flat per request - same
        cost regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.ad(url="https://www.linkedin.com/ad-library/detail/1487405616")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.ad", dict(input), options
        )
        return RunResult[LinkedinAdData].model_validate(raw)

    async def ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinAdsInput],
    ) -> RunResult[LinkedinAdsData]:
        """LinkedIn Ads Library

        Search the LinkedIn Ad Library by search URL and list the matching ads
        (advertiser, creative text, format). **Price:** billed per result - $0.05
        per 1,000 requests base + $1.50 per 1,000 results, capped at $30.05 per
        1,000 requests.

        Price: $0.00005 per request plus $0.0015 per result.

        Example:
            res = client.linkedin.ads(limit=3, url="https://www.linkedin.com/company/stripe")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.ads", dict(input), options
        )
        return RunResult[LinkedinAdsData].model_validate(raw)

    async def ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinAdsSearchInput],
    ) -> RunResult[LinkedinAdsSearchData]:
        """LinkedIn Ad Search

        Search the LinkedIn Ad Library by company or keyword and list matching ads -
        advertiser, headline, creative text, format, CTA, and run dates - with
        pagination. **Price:** $2.00 per 1,000 requests (flat per request - same
        cost regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.ads_search(company="microsoft")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.ads_search", dict(input), options
        )
        return RunResult[LinkedinAdsSearchData].model_validate(raw)

    async def company(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyInput],
    ) -> RunResult[LinkedinCompanyData]:
        """LinkedIn Company

        Fetch a LinkedIn company page (description, employee count, industry,
        website, logo) by company URL, normalized across providers with transparent
        failover. **Price:** $2.00 per 1,000 requests (flat per request - same cost
        regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.company(url="https://www.linkedin.com/company/stripe")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company", dict(input), options
        )
        return RunResult[LinkedinCompanyData].model_validate(raw)

    async def company_employees(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyEmployeesInput],
    ) -> RunResult[LinkedinCompanyEmployeesData]:
        """LinkedIn Company Employees

        List the employees of a LinkedIn company by name or company URL, with
        optional job-title filtering. **Price:** billed per result - $0.00 per 1,000
        requests base + $10.00 per 1,000 results, capped at $100.00 per 1,000
        requests.

        Price: $0.01 per result.

        Example:
            res = client.linkedin.company_employees(company="stripe", limit=3)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company_employees", dict(input), options
        )
        return RunResult[LinkedinCompanyEmployeesData].model_validate(raw)

    async def company_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyPostsInput],
    ) -> RunResult[LinkedinCompanyPostsData]:
        """LinkedIn Company Posts

        List a LinkedIn company page's recent posts by URL with page pagination
        (text, link, publish date), normalized across providers. **Price:** $2.00
        per 1,000 requests (flat per request - same cost regardless of results
        returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.company_posts(url="https://www.linkedin.com/company/stripe")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company_posts", dict(input), options
        )
        return RunResult[LinkedinCompanyPostsData].model_validate(raw)

    async def email(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinEmailInput],
    ) -> RunResult[LinkedinEmailData]:
        """LinkedIn Email Finder

        Find the verified work email behind a LinkedIn profile URL or ID. **Price:**
        billed per result - $0.00 per 1,000 requests base + $0.70 per 1,000 results,
        capped at $0.70 per 1,000 requests.

        Price: $0.0007 per result.

        Example:
            res = client.linkedin.email(profileUrl="https://www.linkedin.com/in/satyanadella")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.email", dict(input), options
        )
        return RunResult[LinkedinEmailData].model_validate(raw)

    async def jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinJobsInput],
    ) -> RunResult[LinkedinJobsData]:
        """LinkedIn Jobs

        Search LinkedIn job listings by title and location - up to 25 normalized job
        records per request. **Price:** $1.00 per 1,000 requests (flat per request -
        same cost regardless of results returned).

        Price: $0.001 per request.

        Example:
            res = client.linkedin.jobs(limit=3, location="San Francisco", query="software engineer")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.jobs", dict(input), options
        )
        return RunResult[LinkedinJobsData].model_validate(raw)

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostInput],
    ) -> RunResult[LinkedinPostData]:
        """LinkedIn Post

        Fetch a single LinkedIn post or article by URL (title, text, author, like
        and comment counts, publish date), normalized across providers. **Price:**
        $1.00 per 1,000 requests (flat per request - same cost regardless of results
        returned).

        Price: $0.001 per request.

        Example:
            res = client.linkedin.post(url="https://www.linkedin.com/posts/stripe_last-week-agent-traffic-surpassed-human-activity-7470882737390940160-2Nxs")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.post", dict(input), options
        )
        return RunResult[LinkedinPostData].model_validate(raw)

    async def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostTranscriptInput],
    ) -> RunResult[LinkedinPostTranscriptData]:
        """LinkedIn Post Transcript

        Get the spoken transcript of a LinkedIn video post by URL. **Price:** $2.00
        per 1,000 requests (flat per request - same cost regardless of results
        returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.post_transcript(url="https://www.linkedin.com/posts/artificial-analysis_gemini-35-flash-is-a-step-forward-for-google-activity-7465082408409870337-4Pm-")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.post_transcript", dict(input), options
        )
        return RunResult[LinkedinPostTranscriptData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinProfileInput],
    ) -> RunResult[LinkedinProfileData]:
        """LinkedIn Profile

        Fetch a LinkedIn member's public profile by URL: name, location, followers,
        about, plus experience, education, recent posts, and published articles.
        **Price:** $2.00 per 1,000 requests (flat per request - same cost regardless
        of results returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.profile(url="https://www.linkedin.com/in/williamhgates")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.profile", dict(input), options
        )
        return RunResult[LinkedinProfileData].model_validate(raw)

    async def search_companies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchCompaniesInput],
    ) -> RunResult[LinkedinSearchCompaniesData]:
        """LinkedIn Company Search

        Search LinkedIn companies by keyword with optional location filtering,
        returning normalized company records. **Price:** billed per result - $1.00
        per 1,000 requests base + $4.00 per 1,000 results, capped at $81.00 per
        1,000 requests.

        Price: $0.001 per request plus $0.004 per result.

        Example:
            res = client.linkedin.search_companies(limit=3, query="fintech")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_companies", dict(input), options
        )
        return RunResult[LinkedinSearchCompaniesData].model_validate(raw)

    async def search_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchPostsInput],
    ) -> RunResult[LinkedinSearchPostsData]:
        """LinkedIn Post Search

        Search public LinkedIn posts by keyword (text, link, publish date),
        normalized across providers with transparent failover. **Price:** $2.00 per
        1,000 requests (flat per request - same cost regardless of results
        returned).

        Price: $0.002 per request.

        Example:
            res = client.linkedin.search_posts(datePosted="last-week", query="hiring")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_posts", dict(input), options
        )
        return RunResult[LinkedinSearchPostsData].model_validate(raw)

    async def search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchProfilesInput],
    ) -> RunResult[LinkedinSearchProfilesData]:
        """LinkedIn Profile Search

        Search LinkedIn profiles by keyword with optional location and job-title
        filters. Each match returns a full profile record: name, headline, location,
        current position, work experience, and education, plus the profile URL,
        handle, and id. **Price:** $32.50 per 1,000 requests (flat per request -
        same cost regardless of results returned).

        Price: $0.0325 per request.

        Example:
            res = client.linkedin.search_profiles(limit=3, query="recruiter")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_profiles", dict(input), options
        )
        return RunResult[LinkedinSearchProfilesData].model_validate(raw)
