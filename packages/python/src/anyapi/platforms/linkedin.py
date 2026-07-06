# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the linkedin platform."""

from __future__ import annotations

from typing import Any, Literal, TYPE_CHECKING

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

    ad_type: str = Field(alias="adType")
    advertiser: str
    advertiser_linkedin_page: str = Field(alias="advertiserLinkedinPage")
    cta: str
    description: str
    destination_url: str = Field(alias="destinationUrl")
    end_date: str = Field(alias="endDate", description="ISO 8601 date.")
    headline: str
    id: str
    image: str
    start_date: str = Field(alias="startDate", description="ISO 8601 date.")
    total_impressions: str = Field(alias="totalImpressions")


class LinkedinAdsData(BaseModel):
    items: list[LinkedinAdsItem] = Field(
        description="Ad records: advertiser name, ad creative text, format, and ad library URL."
    )


class LinkedinAdsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    text: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    url: str


class LinkedinAdsSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    ads: list[LinkedinAdsSearchAd]
    next_cursor: str = Field(alias="nextCursor")
    total_ads: int = Field(alias="totalAds")


class LinkedinAdsSearchAd(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    ad_type: str = Field(alias="adType")
    advertiser: str
    advertiser_linkedin_page: str = Field(alias="advertiserLinkedinPage")
    cta: str
    description: str
    destination_url: str = Field(alias="destinationUrl")
    end_date: str = Field(alias="endDate")
    headline: str
    id: str
    start_date: str = Field(alias="startDate")
    total_impressions: str = Field(alias="totalImpressions")


class LinkedinCompanyData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    description: str
    employee_count: int = Field(alias="employeeCount")
    industry: str
    logo_url: str = Field(alias="logoUrl")
    name: str
    tagline: str
    website: str


class LinkedinCompanyEmployeesData(BaseModel):
    items: list[LinkedinCompanyEmployeesItem] = Field(
        description="Employee records: name, job title, location text, and LinkedIn profile URL."
    )


class LinkedinCompanyEmployeesItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    handle: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    job_title: str | None = Field(
        default=None,
        alias="jobTitle",
        description="The employee's current role or headline at the company.",
    )
    location_text: str | None = Field(
        default=None,
        alias="locationText",
        description="The employee's location as a single string (city, region, country).",
    )
    name: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    url: str


class LinkedinCompanyPostsData(BaseModel):
    posts: list[LinkedinCompanyPostsPost]


class LinkedinCompanyPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str
    published_at: str = Field(alias="publishedAt")
    text: str
    url: str


class LinkedinEmailData(BaseModel):
    items: list[LinkedinEmailItem] = Field(
        description="Email lookup records: the discovered work email for a LinkedIn profile, with the person's name, profile URL, title, and company."
    )


class LinkedinEmailItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company: str | None = Field(default=None, description="Current company name.")
    email: str = Field(description="Discovered work email address.")
    linkedin_url: str | None = Field(
        default=None,
        alias="linkedinUrl",
        description="Canonical LinkedIn profile URL. Present whenever the upstream returns this record.",
    )
    name: str = Field(description="Full name on the LinkedIn profile.")
    title: str | None = Field(default=None, description="Current job title.")


class LinkedinJobsData(BaseModel):
    items: list[LinkedinJobsItem] = Field(
        description="Job records: title and listing URL, plus (when present) company, location, posting date, description, and seniority."
    )


class LinkedinJobsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company: str | None = Field(
        default=None,
        description="Hiring company name. Present whenever the upstream returns this record.",
    )
    description: str | None = Field(
        default=None, description="Full job description text."
    )
    location: str | None = Field(
        default=None,
        description="Job location (city, region). Present whenever the upstream returns this record.",
    )
    posted_at: str | None = Field(
        default=None,
        alias="postedAt",
        description="When the job was posted, as an ISO 8601 timestamp. Present whenever the upstream returns this record.",
    )
    seniority: str | None = Field(
        default=None,
        description="Seniority / experience level (e.g. Entry level, Mid-Senior, Not Applicable).",
    )
    title: str
    url: str = Field(description="Canonical LinkedIn job listing URL.")


class LinkedinPostData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str
    comments: int
    likes: int
    published_at: str = Field(alias="publishedAt")
    text: str
    title: str
    url: str


class LinkedinPostTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    transcript: str
    transcript_not_available: bool = Field(alias="transcriptNotAvailable")
    url: str


class LinkedinProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    about: str
    articles: list[LinkedinProfileArticle]
    avatar_url: str = Field(alias="avatarUrl")
    education: list[LinkedinProfileEducation]
    experience: list[LinkedinProfileExperience]
    followers: int
    location: str
    name: str
    recent_posts: list[LinkedinProfileRecentPost] = Field(alias="recentPosts")


class LinkedinProfileArticle(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    headline: str
    published_at: str | None = Field(default=None, alias="publishedAt")
    url: str | None = None


class LinkedinProfileEducation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    end_date: str | None = Field(default=None, alias="endDate")
    school: str
    school_url: str | None = Field(default=None, alias="schoolUrl")
    start_date: str | None = Field(default=None, alias="startDate")


class LinkedinProfileExperience(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company: str
    company_url: str | None = Field(default=None, alias="companyUrl")
    end_date: str | None = Field(default=None, alias="endDate")
    start_date: str | None = Field(default=None, alias="startDate")


class LinkedinProfileRecentPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    activity_type: str | None = Field(default=None, alias="activityType")
    id: str
    published_at: str | None = Field(default=None, alias="publishedAt")
    text: str | None = None
    url: str | None = None


class LinkedinSearchCompaniesData(BaseModel):
    items: list[LinkedinSearchCompaniesItem] = Field(
        description="Matching company records: name, LinkedIn URL, industry, location, headcount range, and description."
    )


class LinkedinSearchCompaniesItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    name: str
    url: str


class LinkedinSearchPostsData(BaseModel):
    posts: list[LinkedinSearchPostsPost]


class LinkedinSearchPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    published_at: str = Field(alias="publishedAt")
    text: str
    url: str


class LinkedinSearchProfilesData(BaseModel):
    items: list[LinkedinSearchProfilesItem] = Field(
        description="Matched profile records. Each carries the profile URL, handle, and id. Depending on the match, records may also include first/last name, headline, location, current position, work experience, and education, plus upstream extras (about, skills, languages, certifications, connections, profile picture, and more) that pass through."
    )


class LinkedinSearchProfilesItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    current_position: Any | None = Field(
        default=None,
        alias="currentPosition",
        description="Current role(s), passed through from the upstream. Typically a list of objects with job title, company, dates, and description; shape can vary by profile.",
    )
    education: Any | None = Field(
        default=None,
        description="Education history, passed through from the upstream. Typically a list of objects with school, degree, and field of study; shape can vary by profile.",
    )
    experience: Any | None = Field(
        default=None,
        description="Full work history, passed through from the upstream. Typically a list of objects with job title, company, dates, and description; shape can vary by profile.",
    )
    first_name: str | None = Field(
        default=None, alias="firstName", description="Member's first name."
    )
    handle: str | None = Field(
        default=None,
        description="Public profile identifier (the vanity slug in the URL). Present whenever the upstream returns this record.",
    )
    headline: str | None = Field(
        default=None,
        description="Profile headline (the tagline under the name). Present whenever the upstream returns this record.",
    )
    id: str = Field(description="LinkedIn member URN id for the profile.")
    last_name: str | None = Field(
        default=None, alias="lastName", description="Member's last name."
    )
    location: Any | None = Field(
        default=None,
        description="Member's location, passed through from the upstream. Typically an object with the displayed location text and country code; shape can vary by profile.",
    )
    url: str = Field(description="Canonical LinkedIn profile URL.")


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
        as clean JSON, billed per request in USD.

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
        (advertiser, creative text, format), priced per request in USD.

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
        pagination, billed per request in USD.

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
        failover.

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
        optional job-title filtering and transparent per-request USD pricing.

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
        (text, link, publish date), normalized across providers.

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

        Find the verified work email behind a LinkedIn profile URL or ID, with
        transparent per-request USD pricing.

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
        records per request at a flat USD price.

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
        and comment counts, publish date), normalized across providers.

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

        Get the spoken transcript of a LinkedIn video post by URL, with transparent
        per-request USD pricing.

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
        returning normalized company records with transparent per-request USD
        pricing.

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
        normalized across providers with transparent failover.

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
        handle, and id. Flat USD price per request.

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
        as clean JSON, billed per request in USD.

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
        (advertiser, creative text, format), priced per request in USD.

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
        pagination, billed per request in USD.

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
        failover.

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
        optional job-title filtering and transparent per-request USD pricing.

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
        (text, link, publish date), normalized across providers.

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

        Find the verified work email behind a LinkedIn profile URL or ID, with
        transparent per-request USD pricing.

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
        records per request at a flat USD price.

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
        and comment counts, publish date), normalized across providers.

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

        Get the spoken transcript of a LinkedIn video post by URL, with transparent
        per-request USD pricing.

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
        returning normalized company records with transparent per-request USD
        pricing.

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
        normalized across providers with transparent failover.

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
        handle, and id. Flat USD price per request.

        Price: $0.0325 per request.

        Example:
            res = client.linkedin.search_profiles(limit=3, query="recruiter")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_profiles", dict(input), options
        )
        return RunResult[LinkedinSearchProfilesData].model_validate(raw)
