# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the linkedin platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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

    includeQuotePosts: NotRequired[bool]
    """Include quote posts (posts shared with an added comment). Defaults to true; set false to exclude them."""
    includeReposts: NotRequired[bool]
    """Include reposts (posts shared without an added comment). Defaults to true; set false to exclude them."""
    limit: NotRequired[int]
    """Maximum number of posts to return. Range: 1 to 50. Default: 10."""
    postedLimit: NotRequired[
        Literal["any", "1h", "24h", "week", "month", "3months", "6months", "year"]
    ]
    """Only return posts published within this window (default any)."""
    url: Required[str]
    """Full LinkedIn company page URL."""


class LinkedinCompanyPostsThinInput(TypedDict, total=False):
    """Input for LinkedIn Company Posts (basic)."""

    page: NotRequired[int]
    """Page number for pagination. Minimum: 1."""
    url: Required[str]
    """Full LinkedIn company page URL."""


class LinkedinCompanyThinInput(TypedDict, total=False):
    """Input for LinkedIn Company (basic)."""

    url: Required[str]
    """Full LinkedIn company page URL."""


class LinkedinEmailInput(TypedDict, total=False):
    """Input for LinkedIn Email Finder."""

    profileUrl: Required[str]
    """LinkedIn profile URL or public identifier (the last part of the URL) to find the deliverability-validated work email for."""


class LinkedinJobsInput(TypedDict, total=False):
    """Input for LinkedIn Jobs."""

    company: NotRequired[str]
    """Filter to a specific company by name (e.g. Google)."""
    easyApply: NotRequired[bool]
    """When true, only return jobs offering LinkedIn Easy Apply."""
    employmentType: NotRequired[
        Literal["full-time", "part-time", "contract", "internship", "temporary"]
    ]
    """Filter by employment type."""
    experienceLevel: NotRequired[
        Literal[
            "internship", "entry", "associate", "mid-senior", "director", "executive"
        ]
    ]
    """Filter by required seniority/experience level."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    location: NotRequired[str]
    """City, region, or country to search within (e.g. United States, San Francisco)."""
    postedLimit: NotRequired[Literal["1h", "24h", "week", "month"]]
    """Only jobs posted within this window (past hour, 24 hours, week, or month)."""
    query: Required[str]
    """Job title or keywords to search. Supports LinkedIn boolean operators."""
    salary: NotRequired[
        Literal[
            "40k+", "60k+", "80k+", "100k+", "120k+", "140k+", "160k+", "180k+", "200k+"
        ]
    ]
    """Filter by minimum base salary band (US dollars)."""
    sortBy: NotRequired[Literal["date", "relevance"]]
    """Sort order: most recent (date) or best match (relevance)."""
    under10Applicants: NotRequired[bool]
    """When true, only return jobs with fewer than 10 applicants (lower competition)."""
    workplaceType: NotRequired[Literal["remote", "hybrid", "onsite"]]
    """Filter by workplace type (remote, hybrid, or onsite)."""


class LinkedinJobsThinInput(TypedDict, total=False):
    """Input for LinkedIn Jobs (index)."""

    companyId: NotRequired[str]
    """Filter to a specific company by its LinkedIn numeric company id."""
    employmentType: NotRequired[
        Literal["full-time", "part-time", "contract", "internship", "temporary"]
    ]
    """Filter by employment type."""
    experienceLevel: NotRequired[
        Literal[
            "internship", "entry", "associate", "mid-senior", "director", "executive"
        ]
    ]
    """Filter by required seniority/experience level."""
    geoId: NotRequired[str]
    """LinkedIn geo id to target a precise location (e.g. 103644278 for the United States); more exact than the free-text location."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). Range: 1 to 25."""
    location: NotRequired[str]
    """City, region, or country to search within."""
    postedLimit: NotRequired[Literal["24h", "week", "month"]]
    """Only jobs posted within this window (past 24 hours, week, or month)."""
    query: Required[str]
    """Job title or keywords to search."""
    workplaceType: NotRequired[Literal["remote", "hybrid", "onsite"]]
    """Filter by workplace type (remote, hybrid, or onsite)."""


class LinkedinPostInput(TypedDict, total=False):
    """Input for LinkedIn Post."""

    url: Required[str]
    """Full LinkedIn post or article URL."""


class LinkedinPostCommentsInput(TypedDict, total=False):
    """Input for LinkedIn Post Comments."""

    limit: NotRequired[int]
    """Maximum number of comments to return. You are billed per comment returned, so a lower limit costs less. Range: 1 to 100. Default: 100."""
    postedLimit: NotRequired[
        Literal["any", "24h", "week", "month", "3months", "6months", "year"]
    ]
    """Only return comments posted within this window (default any)."""
    url: Required[str]
    """Full URL of the LinkedIn post to list comments for."""


class LinkedinPostReactionsInput(TypedDict, total=False):
    """Input for LinkedIn Post Reactions."""

    limit: NotRequired[int]
    """Maximum number of reactions to return (1-100, default 100). You are billed per reaction returned, so a lower limit costs less. Range: 1 to 100."""
    url: Required[str]
    """URL of the LinkedIn post to list reactions for (a /posts/...-activity-... or /feed/update/urn:li:activity:... link)."""


class LinkedinPostTranscriptInput(TypedDict, total=False):
    """Input for LinkedIn Post Transcript."""

    url: Required[str]
    """The full URL of the LinkedIn post to get the video transcript from."""


class LinkedinProfileInput(TypedDict, total=False):
    """Input for LinkedIn Profile."""

    url: Required[str]
    """Full LinkedIn profile URL."""


class LinkedinProfileThinInput(TypedDict, total=False):
    """Input for LinkedIn Profile (basic)."""

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

    companyHeadcount: NotRequired[
        list[Literal["A", "B", "C", "D", "E", "F", "G", "H", "I"]]
    ]
    """Filter by current company size (employee count). Codes: A=Self-Employed, B=1-10, C=11-50, D=51-200, E=201-500, F=501-1,000, G=1,001-5,000, H=5,001-10,000, I=10,001+."""
    companyHeadquarterLocations: NotRequired[list[str]]
    """Filter by the location of the person's current company headquarters, by place name (e.g. ['United States'])."""
    currentCompanies: NotRequired[list[str]]
    """Filter to people who currently work at any of these companies, by name (e.g. ['Google','Meta']). Multiple names widen the match (OR)."""
    excludeCompanyHeadquarterLocations: NotRequired[list[str]]
    """Exclude people whose current company is headquartered in any of these locations."""
    excludeCurrentCompanies: NotRequired[list[str]]
    """Exclude people who currently work at any of these companies, by name."""
    excludeCurrentJobTitles: NotRequired[list[str]]
    """Exclude people whose current job title matches any of these."""
    excludeFunctionIds: NotRequired[
        list[
            Literal[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
            ]
        ]
    ]
    """Exclude these job functions (same codes as functionIds)."""
    excludeLocations: NotRequired[list[str]]
    """Exclude people in any of these locations, by place name."""
    excludePastCompanies: NotRequired[list[str]]
    """Exclude people who previously worked at any of these companies, by name."""
    excludePastJobTitles: NotRequired[list[str]]
    """Exclude people who held any of these past job titles."""
    excludeSchools: NotRequired[list[str]]
    """Exclude people who attended any of these schools, by name."""
    excludeSeniorityLevelIds: NotRequired[
        list[
            Literal[
                "100", "110", "120", "130", "200", "210", "220", "300", "310", "320"
            ]
        ]
    ]
    """Exclude these seniority levels (same codes as seniorityLevelIds)."""
    firstNames: NotRequired[list[str]]
    """Filter to people whose first name matches any of these."""
    functionIds: NotRequired[
        list[
            Literal[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
            ]
        ]
    ]
    """Filter by job function. Codes: 1=Accounting, 2=Administrative, 3=Arts and Design, 4=Business Development, 5=Community and Social Services, 6=Consulting, 7=Education, 8=Engineering, 9=Entrepreneurship, 10=Finance, 11=Healthcare Services, 12=Human Resources, 13=Information Technology, 14=Legal, 15=Marketing, 16=Media and Communication, 17=Military and Protective Services, 18=Operations, 19=Product Management, 20=Program and Project Management, 21=Purchasing, 22=Quality Assurance, 23=Real Estate, 24=Research, 25=Sales, 26=Customer Success and Support."""
    jobTitle: NotRequired[str]
    """Optional current job title filter (e.g. 'Software Engineer')."""
    lastNames: NotRequired[list[str]]
    """Filter to people whose last name matches any of these."""
    limit: NotRequired[int]
    """Maximum number of full profiles to return (1-25, default 10). You are billed per profile returned, so a lower limit costs less. Range: 1 to 25."""
    location: NotRequired[str]
    """Optional location filter (e.g. 'San Francisco')."""
    pastCompanies: NotRequired[list[str]]
    """Filter to people who previously worked at any of these companies, by name."""
    pastJobTitles: NotRequired[list[str]]
    """Filter by a past job title the person held (e.g. ['Product Manager'])."""
    profileLanguages: NotRequired[
        list[
            Literal[
                "Arabic",
                "English",
                "Spanish",
                "Portuguese",
                "Chinese",
                "French",
                "Italian",
                "Russian",
                "German",
                "Dutch",
                "Turkish",
                "Tagalog",
                "Polish",
                "Korean",
                "Japanese",
                "Malay",
                "Norwegian",
                "Danish",
                "Romanian",
                "Swedish",
                "Bahasa Indonesia",
                "Czech",
            ]
        ]
    ]
    """Filter by the profile's primary language."""
    query: Required[str]
    """Search query for LinkedIn profiles: a role, name, or keywords (e.g. 'Marketing Manager')."""
    recentlyChangedJobs: NotRequired[bool]
    """When true, only return people who recently changed jobs (a strong sales/recruiting signal)."""
    recentlyPostedOnLinkedIn: NotRequired[bool]
    """When true, only return people who recently posted on LinkedIn (an activity signal)."""
    schools: NotRequired[list[str]]
    """Filter to people who attended any of these schools, by name."""
    seniorityLevelIds: NotRequired[
        list[
            Literal[
                "100", "110", "120", "130", "200", "210", "220", "300", "310", "320"
            ]
        ]
    ]
    """Filter by seniority level. Codes: 100=In Training, 110=Entry Level, 120=Senior, 130=Strategic, 200=Entry Level Manager, 210=Experienced Manager, 220=Director, 300=Vice President, 310=CXO, 320=Owner/Partner."""
    yearsAtCurrentCompanyIds: NotRequired[list[Literal["1", "2", "3", "4", "5"]]]
    """Filter by tenure at the current company. Codes: 1=Less than 1 year, 2=1 to 2 years, 3=3 to 5 years, 4=6 to 10 years, 5=More than 10 years."""
    yearsOfExperienceIds: NotRequired[list[Literal["1", "2", "3", "4", "5"]]]
    """Filter by total years of experience. Codes: 1=Less than 1 year, 2=1 to 2 years, 3=3 to 5 years, 4=6 to 10 years, 5=More than 10 years."""


class LinkedinSearchProfilesEmailInput(TypedDict, total=False):
    """Input for LinkedIn Profile Search + Email."""

    companyHeadcount: NotRequired[
        list[Literal["A", "B", "C", "D", "E", "F", "G", "H", "I"]]
    ]
    """Filter by current company size (employee count). Codes: A=Self-Employed, B=1-10, C=11-50, D=51-200, E=201-500, F=501-1,000, G=1,001-5,000, H=5,001-10,000, I=10,001+."""
    companyHeadquarterLocations: NotRequired[list[str]]
    """Filter by the location of the person's current company headquarters, by place name (e.g. ['United States'])."""
    currentCompanies: NotRequired[list[str]]
    """Filter to people who currently work at any of these companies, by name (e.g. ['Google','Meta']). Multiple names widen the match (OR)."""
    excludeCompanyHeadquarterLocations: NotRequired[list[str]]
    """Exclude people whose current company is headquartered in any of these locations."""
    excludeCurrentCompanies: NotRequired[list[str]]
    """Exclude people who currently work at any of these companies, by name."""
    excludeCurrentJobTitles: NotRequired[list[str]]
    """Exclude people whose current job title matches any of these."""
    excludeFunctionIds: NotRequired[
        list[
            Literal[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
            ]
        ]
    ]
    """Exclude these job functions (same codes as functionIds)."""
    excludeLocations: NotRequired[list[str]]
    """Exclude people in any of these locations, by place name."""
    excludePastCompanies: NotRequired[list[str]]
    """Exclude people who previously worked at any of these companies, by name."""
    excludePastJobTitles: NotRequired[list[str]]
    """Exclude people who held any of these past job titles."""
    excludeSchools: NotRequired[list[str]]
    """Exclude people who attended any of these schools, by name."""
    excludeSeniorityLevelIds: NotRequired[
        list[
            Literal[
                "100", "110", "120", "130", "200", "210", "220", "300", "310", "320"
            ]
        ]
    ]
    """Exclude these seniority levels (same codes as seniorityLevelIds)."""
    firstNames: NotRequired[list[str]]
    """Filter to people whose first name matches any of these."""
    functionIds: NotRequired[
        list[
            Literal[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
                "17",
                "18",
                "19",
                "20",
                "21",
                "22",
                "23",
                "24",
                "25",
                "26",
            ]
        ]
    ]
    """Filter by job function. Codes: 1=Accounting, 2=Administrative, 3=Arts and Design, 4=Business Development, 5=Community and Social Services, 6=Consulting, 7=Education, 8=Engineering, 9=Entrepreneurship, 10=Finance, 11=Healthcare Services, 12=Human Resources, 13=Information Technology, 14=Legal, 15=Marketing, 16=Media and Communication, 17=Military and Protective Services, 18=Operations, 19=Product Management, 20=Program and Project Management, 21=Purchasing, 22=Quality Assurance, 23=Real Estate, 24=Research, 25=Sales, 26=Customer Success and Support."""
    jobTitle: NotRequired[str]
    """Optional current job title filter (e.g. 'Software Engineer')."""
    lastNames: NotRequired[list[str]]
    """Filter to people whose last name matches any of these."""
    limit: NotRequired[int]
    """Maximum number of full profiles (with email) to return (1-25, default 10). You are billed per profile returned, so a lower limit costs less. Range: 1 to 25."""
    location: NotRequired[str]
    """Optional location filter (e.g. 'San Francisco')."""
    pastCompanies: NotRequired[list[str]]
    """Filter to people who previously worked at any of these companies, by name."""
    pastJobTitles: NotRequired[list[str]]
    """Filter by a past job title the person held (e.g. ['Product Manager'])."""
    profileLanguages: NotRequired[
        list[
            Literal[
                "Arabic",
                "English",
                "Spanish",
                "Portuguese",
                "Chinese",
                "French",
                "Italian",
                "Russian",
                "German",
                "Dutch",
                "Turkish",
                "Tagalog",
                "Polish",
                "Korean",
                "Japanese",
                "Malay",
                "Norwegian",
                "Danish",
                "Romanian",
                "Swedish",
                "Bahasa Indonesia",
                "Czech",
            ]
        ]
    ]
    """Filter by the profile's primary language."""
    query: Required[str]
    """Search query for LinkedIn profiles: a role, name, or keywords (e.g. 'Marketing Manager')."""
    recentlyChangedJobs: NotRequired[bool]
    """When true, only return people who recently changed jobs (a strong sales/recruiting signal)."""
    recentlyPostedOnLinkedIn: NotRequired[bool]
    """When true, only return people who recently posted on LinkedIn (an activity signal)."""
    schools: NotRequired[list[str]]
    """Filter to people who attended any of these schools, by name."""
    seniorityLevelIds: NotRequired[
        list[
            Literal[
                "100", "110", "120", "130", "200", "210", "220", "300", "310", "320"
            ]
        ]
    ]
    """Filter by seniority level. Codes: 100=In Training, 110=Entry Level, 120=Senior, 130=Strategic, 200=Entry Level Manager, 210=Experienced Manager, 220=Director, 300=Vice President, 310=CXO, 320=Owner/Partner."""
    yearsAtCurrentCompanyIds: NotRequired[list[Literal["1", "2", "3", "4", "5"]]]
    """Filter by tenure at the current company. Codes: 1=Less than 1 year, 2=1 to 2 years, 3=3 to 5 years, 4=6 to 10 years, 5=More than 10 years."""
    yearsOfExperienceIds: NotRequired[list[Literal["1", "2", "3", "4", "5"]]]
    """Filter by total years of experience. Codes: 1=Less than 1 year, 2=1 to 2 years, 3=3 to 5 years, 4=6 to 10 years, 5=More than 10 years."""


class LinkedinSearchProfilesThinInput(TypedDict, total=False):
    """Input for LinkedIn Profile Search (basic)."""

    query: Required[str]
    """Search query for LinkedIn profiles - a role, name, or keywords (e.g. 'Marketing Manager')."""


class LinkedinAdData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinAdsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinAdsSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinCompanyData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinCompanyEmployeesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinCompanyPostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinCompanyPostsThinData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinCompanyThinData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinEmailData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinJobsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinJobsThinData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinPostData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinPostCommentsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinPostReactionsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinPostTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinProfileThinData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchCompaniesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchPostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchProfilesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchProfilesEmailData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchProfilesThinData(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def ad(
        self, *, options: RequestOptions | None = None, **input: Unpack[LinkedinAdInput]
    ) -> BareRunResult[LinkedinAdData]:
        """LinkedIn Ad Details

        Look up a single LinkedIn Ad Library ad by URL and get the advertiser,
        headline, creative text, format, CTA, targeting, run dates, and impressions
        as clean JSON.

        Price: $0.002 per request.

        Example:
            res = client.linkedin.ad(url="https://www.linkedin.com/ad-library/detail/1487405616")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.ad", dict(input), options
        )
        return BareRunResult[LinkedinAdData].model_validate(raw)

    def ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinAdsInput],
    ) -> BareRunResult[LinkedinAdsData]:
        """LinkedIn Ads Library

        Search the LinkedIn Ad Library by search URL and list the matching ads
        (advertiser, creative text, format).

        Price: $0.00005 per request plus $0.0015 per result (maximum $0.03005).

        Example:
            res = client.linkedin.ads(limit=3, url="https://www.linkedin.com/company/stripe")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.ads", dict(input), options
        )
        return BareRunResult[LinkedinAdsData].model_validate(raw)

    def ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinAdsSearchInput],
    ) -> BareRunResult[LinkedinAdsSearchData]:
        """LinkedIn Ad Search

        Search the LinkedIn Ad Library by company or keyword and list matching ads
        (advertiser, headline, creative text, format, CTA, and run dates) with
        pagination.

        Price: $0.002 per request.

        Example:
            res = client.linkedin.ads_search(company="microsoft")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.ads_search", dict(input), options
        )
        return BareRunResult[LinkedinAdsSearchData].model_validate(raw)

    def company(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyInput],
    ) -> BareRunResult[LinkedinCompanyData]:
        """LinkedIn Company

        Fetch a full LinkedIn company page by URL: name, description, industry,
        employee count and range, follower count, founded year, headquarters and
        office locations, funding data, tagline, logo, website, and specialities.

        Price: $0.004 per request plus $0 per result (maximum $0.004).

        Example:
            res = client.linkedin.company(url="https://www.linkedin.com/company/stripe")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company", dict(input), options
        )
        return BareRunResult[LinkedinCompanyData].model_validate(raw)

    def company_employees(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyEmployeesInput],
    ) -> BareRunResult[LinkedinCompanyEmployeesData]:
        """LinkedIn Company Employees

        List the employees of a LinkedIn company by name or company URL, with
        optional job-title filtering.

        Price: $0 per request plus $0.01 per result (maximum $0.1).

        Example:
            res = client.linkedin.company_employees(company="stripe", limit=3)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company_employees", dict(input), options
        )
        return BareRunResult[LinkedinCompanyEmployeesData].model_validate(raw)

    def company_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyPostsInput],
    ) -> BareRunResult[LinkedinCompanyPostsData]:
        """LinkedIn Company Posts

        List a LinkedIn company page's recent posts by URL: full text, canonical
        link, publish date, author, engagement counts with a per-reaction breakdown,
        and attached media.

        Price: $0.00005 per request plus $0.00175 per result (maximum $0.08755).

        Example:
            res = client.linkedin.company_posts(limit=10, url="https://www.linkedin.com/company/stripe")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company_posts", dict(input), options
        )
        return BareRunResult[LinkedinCompanyPostsData].model_validate(raw)

    def company_posts_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyPostsThinInput],
    ) -> BareRunResult[LinkedinCompanyPostsThinData]:
        """LinkedIn Company Posts (basic)

        Post text and link only. No engagement counts, author details, media, or
        reaction breakdown - for those use linkedin.company_posts.

        Price: $0.002 per request.

        Example:
            res = client.linkedin.company_posts_thin(url="https://www.linkedin.com/company/stripe")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company_posts_thin", dict(input), options
        )
        return BareRunResult[LinkedinCompanyPostsThinData].model_validate(raw)

    def company_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyThinInput],
    ) -> BareRunResult[LinkedinCompanyThinData]:
        """LinkedIn Company (basic)

        Basic company: name, description, employee count, industry, logo, website,
        tagline. No follower count, founded year, office locations, or funding data
        - for those use linkedin.company.

        Price: $0.002 per request.

        Example:
            res = client.linkedin.company_thin(url="https://www.linkedin.com/company/stripe")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company_thin", dict(input), options
        )
        return BareRunResult[LinkedinCompanyThinData].model_validate(raw)

    def email(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinEmailInput],
    ) -> BareRunResult[LinkedinEmailData]:
        """LinkedIn Email Finder

        Find the deliverability-validated work email behind a LinkedIn profile URL
        or public ID. Returns each discovered email with its deliverability,
        validation status, and quality score, plus the person's name and headline.

        Price: $0.01 per request plus $0 per result (maximum $0.01).

        Example:
            res = client.linkedin.email(profileUrl="https://www.linkedin.com/in/satyanadella")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.email", dict(input), options
        )
        return BareRunResult[LinkedinEmailData].model_validate(raw)

    def jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinJobsInput],
    ) -> BareRunResult[LinkedinJobsData]:
        """LinkedIn Jobs

        Search LinkedIn job listings by title and location - full records with
        description, salary, applicant count, seniority, company details, and
        benefits. Up to 25 jobs per request.

        Price: $0.001 per request plus $0.001 per result (maximum $0.026).

        Example:
            res = client.linkedin.jobs(limit=3, location="United States", query="software engineer", workplaceType="remote")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.jobs", dict(input), options
        )
        return BareRunResult[LinkedinJobsData].model_validate(raw)

    def jobs_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinJobsThinInput],
    ) -> BareRunResult[LinkedinJobsThinData]:
        """LinkedIn Jobs (index)

        Cheap job index: title, company, location, posted date, URL. No description,
        salary, applicant counts, or seniority - for those use linkedin.jobs.

        Price: $0.001 per request.

        Example:
            res = client.linkedin.jobs_thin(limit=3, location="United States", query="software engineer", workplaceType="remote")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.jobs_thin", dict(input), options
        )
        return BareRunResult[LinkedinJobsThinData].model_validate(raw)

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostInput],
    ) -> BareRunResult[LinkedinPostData]:
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
        return BareRunResult[LinkedinPostData].model_validate(raw)

    def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostCommentsInput],
    ) -> BareRunResult[LinkedinPostCommentsData]:
        """LinkedIn Post Comments

        List comments on a LinkedIn post - full text, commenter name/URL/job title,
        timestamps, and engagement.

        Price: $0 per request plus $0.002 per result (maximum $0.2).

        Example:
            res = client.linkedin.post_comments(limit=10, url="https://www.linkedin.com/posts/stripe_philip-kl%C3%B6ckner-in-conversation-with-conor-activity-7477791740645564416-tIbZ")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.post_comments", dict(input), options
        )
        return BareRunResult[LinkedinPostCommentsData].model_validate(raw)

    def post_reactions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostReactionsInput],
    ) -> BareRunResult[LinkedinPostReactionsData]:
        """LinkedIn Post Reactions

        List who reacted to a LinkedIn post - reactor name, profile URL, job title,
        and reaction type. Lead-gen grade.

        Price: $0 per request plus $0.002 per result (maximum $0.2).

        Example:
            res = client.linkedin.post_reactions(limit=5, url="https://www.linkedin.com/posts/satyanadella_today-were-bringing-skills-to-copilot-for-activity-7475945433668694017--kvG")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.post_reactions", dict(input), options
        )
        return BareRunResult[LinkedinPostReactionsData].model_validate(raw)

    def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostTranscriptInput],
    ) -> BareRunResult[LinkedinPostTranscriptData]:
        """LinkedIn Post Transcript

        Get the spoken transcript of a LinkedIn video post by URL.

        Price: $0.002 per request.

        Example:
            res = client.linkedin.post_transcript(url="https://www.linkedin.com/posts/artificial-analysis_gemini-35-flash-is-a-step-forward-for-google-activity-7465082408409870337-4Pm-")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.post_transcript", dict(input), options
        )
        return BareRunResult[LinkedinPostTranscriptData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinProfileInput],
    ) -> BareRunResult[LinkedinProfileData]:
        """LinkedIn Profile

        Fetch a rich LinkedIn member profile by URL: name, headline, avatar,
        location, connections and followers, current position, and full work
        experience with job titles, descriptions, dates, employment/workplace type,
        and per-role skills, plus education, skills, certifications, honors and
        awards, languages, projects, publications, and verified/premium/open-to-work
        flags.

        Price: $0.004 per request plus $0 per result (maximum $0.004).

        Example:
            res = client.linkedin.profile(url="https://www.linkedin.com/in/williamhgates")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.profile", dict(input), options
        )
        return BareRunResult[LinkedinProfileData].model_validate(raw)

    def profile_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinProfileThinInput],
    ) -> BareRunResult[LinkedinProfileThinData]:
        """LinkedIn Profile (basic)

        Lightweight profile: name, avatar, location, followers, and a basic
        experience/education list (company + dates only, no job titles,
        descriptions, or skills; past companies may be redacted). For full
        experience detail, skills, certifications, connections, and verified flags
        use linkedin.profile.

        Price: $0.002 per request.

        Example:
            res = client.linkedin.profile_thin(url="https://www.linkedin.com/in/williamhgates")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.profile_thin", dict(input), options
        )
        return BareRunResult[LinkedinProfileThinData].model_validate(raw)

    def search_companies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchCompaniesInput],
    ) -> BareRunResult[LinkedinSearchCompaniesData]:
        """LinkedIn Company Search

        Search LinkedIn companies by keyword with optional location filtering,
        returning normalized company records.

        Price: $0.001 per request plus $0.004 per result (maximum $0.081).

        Example:
            res = client.linkedin.search_companies(limit=3, query="fintech")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_companies", dict(input), options
        )
        return BareRunResult[LinkedinSearchCompaniesData].model_validate(raw)

    def search_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchPostsInput],
    ) -> BareRunResult[LinkedinSearchPostsData]:
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
        return BareRunResult[LinkedinSearchPostsData].model_validate(raw)

    def search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchProfilesInput],
    ) -> BareRunResult[LinkedinSearchProfilesData]:
        """LinkedIn Profile Search

        Search LinkedIn profiles by keyword with optional location and job-title
        filters. Each match returns a full profile record: name, headline, location,
        current position, work experience, education, and skills, plus the profile
        URL, handle, and id. For a cheaper name/headline/URL-only search use
        linkedin.search_profiles_thin; add emails with
        linkedin.search_profiles_email.

        Price: $0.08 per request plus $0.004 per result (maximum $0.18).

        Example:
            res = client.linkedin.search_profiles(currentCompanies=["Google"], limit=3, query="engineer")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_profiles", dict(input), options
        )
        return BareRunResult[LinkedinSearchProfilesData].model_validate(raw)

    def search_profiles_email(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchProfilesEmailInput],
    ) -> BareRunResult[LinkedinSearchProfilesEmailData]:
        """LinkedIn Profile Search + Email

        People search returning a full profile AND a verified work email for each
        hit. Search LinkedIn profiles by keyword with optional location and
        job-title filters; each match returns the full profile record (name,
        headline, location, current position, work experience, education, and
        skills, plus the profile URL, handle, and id) together with an emails array
        carrying the discovered work email and its deliverability. For a full
        profile without email use linkedin.search_profiles; for a cheaper
        name/headline/URL-only search use linkedin.search_profiles_thin.

        Price: $0.08 per request plus $0.009 per result (maximum $0.305).

        Example:
            res = client.linkedin.search_profiles_email(companyHeadcount=["B"], limit=5, query="founder")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_profiles_email", dict(input), options
        )
        return BareRunResult[LinkedinSearchProfilesEmailData].model_validate(raw)

    def search_profiles_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchProfilesThinInput],
    ) -> BareRunResult[LinkedinSearchProfilesThinData]:
        """LinkedIn Profile Search (basic)

        Cheap people search: name/handle, headline, VANITY profile URL, location. No
        full profile or email - for full profiles per hit use
        linkedin.search_profiles, add emails with linkedin.search_profiles_email.

        Price: $0.0325 per request.

        Example:
            res = client.linkedin.search_profiles_thin(query="recruiter")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_profiles_thin", dict(input), options
        )
        return BareRunResult[LinkedinSearchProfilesThinData].model_validate(raw)


class AsyncLinkedinNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def ad(
        self, *, options: RequestOptions | None = None, **input: Unpack[LinkedinAdInput]
    ) -> BareRunResult[LinkedinAdData]:
        """LinkedIn Ad Details

        Look up a single LinkedIn Ad Library ad by URL and get the advertiser,
        headline, creative text, format, CTA, targeting, run dates, and impressions
        as clean JSON.

        Price: $0.002 per request.

        Example:
            res = client.linkedin.ad(url="https://www.linkedin.com/ad-library/detail/1487405616")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.ad", dict(input), options
        )
        return BareRunResult[LinkedinAdData].model_validate(raw)

    async def ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinAdsInput],
    ) -> BareRunResult[LinkedinAdsData]:
        """LinkedIn Ads Library

        Search the LinkedIn Ad Library by search URL and list the matching ads
        (advertiser, creative text, format).

        Price: $0.00005 per request plus $0.0015 per result (maximum $0.03005).

        Example:
            res = client.linkedin.ads(limit=3, url="https://www.linkedin.com/company/stripe")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.ads", dict(input), options
        )
        return BareRunResult[LinkedinAdsData].model_validate(raw)

    async def ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinAdsSearchInput],
    ) -> BareRunResult[LinkedinAdsSearchData]:
        """LinkedIn Ad Search

        Search the LinkedIn Ad Library by company or keyword and list matching ads
        (advertiser, headline, creative text, format, CTA, and run dates) with
        pagination.

        Price: $0.002 per request.

        Example:
            res = client.linkedin.ads_search(company="microsoft")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.ads_search", dict(input), options
        )
        return BareRunResult[LinkedinAdsSearchData].model_validate(raw)

    async def company(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyInput],
    ) -> BareRunResult[LinkedinCompanyData]:
        """LinkedIn Company

        Fetch a full LinkedIn company page by URL: name, description, industry,
        employee count and range, follower count, founded year, headquarters and
        office locations, funding data, tagline, logo, website, and specialities.

        Price: $0.004 per request plus $0 per result (maximum $0.004).

        Example:
            res = client.linkedin.company(url="https://www.linkedin.com/company/stripe")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company", dict(input), options
        )
        return BareRunResult[LinkedinCompanyData].model_validate(raw)

    async def company_employees(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyEmployeesInput],
    ) -> BareRunResult[LinkedinCompanyEmployeesData]:
        """LinkedIn Company Employees

        List the employees of a LinkedIn company by name or company URL, with
        optional job-title filtering.

        Price: $0 per request plus $0.01 per result (maximum $0.1).

        Example:
            res = client.linkedin.company_employees(company="stripe", limit=3)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company_employees", dict(input), options
        )
        return BareRunResult[LinkedinCompanyEmployeesData].model_validate(raw)

    async def company_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyPostsInput],
    ) -> BareRunResult[LinkedinCompanyPostsData]:
        """LinkedIn Company Posts

        List a LinkedIn company page's recent posts by URL: full text, canonical
        link, publish date, author, engagement counts with a per-reaction breakdown,
        and attached media.

        Price: $0.00005 per request plus $0.00175 per result (maximum $0.08755).

        Example:
            res = client.linkedin.company_posts(limit=10, url="https://www.linkedin.com/company/stripe")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company_posts", dict(input), options
        )
        return BareRunResult[LinkedinCompanyPostsData].model_validate(raw)

    async def company_posts_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyPostsThinInput],
    ) -> BareRunResult[LinkedinCompanyPostsThinData]:
        """LinkedIn Company Posts (basic)

        Post text and link only. No engagement counts, author details, media, or
        reaction breakdown - for those use linkedin.company_posts.

        Price: $0.002 per request.

        Example:
            res = client.linkedin.company_posts_thin(url="https://www.linkedin.com/company/stripe")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company_posts_thin", dict(input), options
        )
        return BareRunResult[LinkedinCompanyPostsThinData].model_validate(raw)

    async def company_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyThinInput],
    ) -> BareRunResult[LinkedinCompanyThinData]:
        """LinkedIn Company (basic)

        Basic company: name, description, employee count, industry, logo, website,
        tagline. No follower count, founded year, office locations, or funding data
        - for those use linkedin.company.

        Price: $0.002 per request.

        Example:
            res = client.linkedin.company_thin(url="https://www.linkedin.com/company/stripe")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.company_thin", dict(input), options
        )
        return BareRunResult[LinkedinCompanyThinData].model_validate(raw)

    async def email(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinEmailInput],
    ) -> BareRunResult[LinkedinEmailData]:
        """LinkedIn Email Finder

        Find the deliverability-validated work email behind a LinkedIn profile URL
        or public ID. Returns each discovered email with its deliverability,
        validation status, and quality score, plus the person's name and headline.

        Price: $0.01 per request plus $0 per result (maximum $0.01).

        Example:
            res = client.linkedin.email(profileUrl="https://www.linkedin.com/in/satyanadella")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.email", dict(input), options
        )
        return BareRunResult[LinkedinEmailData].model_validate(raw)

    async def jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinJobsInput],
    ) -> BareRunResult[LinkedinJobsData]:
        """LinkedIn Jobs

        Search LinkedIn job listings by title and location - full records with
        description, salary, applicant count, seniority, company details, and
        benefits. Up to 25 jobs per request.

        Price: $0.001 per request plus $0.001 per result (maximum $0.026).

        Example:
            res = client.linkedin.jobs(limit=3, location="United States", query="software engineer", workplaceType="remote")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.jobs", dict(input), options
        )
        return BareRunResult[LinkedinJobsData].model_validate(raw)

    async def jobs_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinJobsThinInput],
    ) -> BareRunResult[LinkedinJobsThinData]:
        """LinkedIn Jobs (index)

        Cheap job index: title, company, location, posted date, URL. No description,
        salary, applicant counts, or seniority - for those use linkedin.jobs.

        Price: $0.001 per request.

        Example:
            res = client.linkedin.jobs_thin(limit=3, location="United States", query="software engineer", workplaceType="remote")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.jobs_thin", dict(input), options
        )
        return BareRunResult[LinkedinJobsThinData].model_validate(raw)

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostInput],
    ) -> BareRunResult[LinkedinPostData]:
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
        return BareRunResult[LinkedinPostData].model_validate(raw)

    async def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostCommentsInput],
    ) -> BareRunResult[LinkedinPostCommentsData]:
        """LinkedIn Post Comments

        List comments on a LinkedIn post - full text, commenter name/URL/job title,
        timestamps, and engagement.

        Price: $0 per request plus $0.002 per result (maximum $0.2).

        Example:
            res = client.linkedin.post_comments(limit=10, url="https://www.linkedin.com/posts/stripe_philip-kl%C3%B6ckner-in-conversation-with-conor-activity-7477791740645564416-tIbZ")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.post_comments", dict(input), options
        )
        return BareRunResult[LinkedinPostCommentsData].model_validate(raw)

    async def post_reactions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostReactionsInput],
    ) -> BareRunResult[LinkedinPostReactionsData]:
        """LinkedIn Post Reactions

        List who reacted to a LinkedIn post - reactor name, profile URL, job title,
        and reaction type. Lead-gen grade.

        Price: $0 per request plus $0.002 per result (maximum $0.2).

        Example:
            res = client.linkedin.post_reactions(limit=5, url="https://www.linkedin.com/posts/satyanadella_today-were-bringing-skills-to-copilot-for-activity-7475945433668694017--kvG")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.post_reactions", dict(input), options
        )
        return BareRunResult[LinkedinPostReactionsData].model_validate(raw)

    async def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostTranscriptInput],
    ) -> BareRunResult[LinkedinPostTranscriptData]:
        """LinkedIn Post Transcript

        Get the spoken transcript of a LinkedIn video post by URL.

        Price: $0.002 per request.

        Example:
            res = client.linkedin.post_transcript(url="https://www.linkedin.com/posts/artificial-analysis_gemini-35-flash-is-a-step-forward-for-google-activity-7465082408409870337-4Pm-")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.post_transcript", dict(input), options
        )
        return BareRunResult[LinkedinPostTranscriptData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinProfileInput],
    ) -> BareRunResult[LinkedinProfileData]:
        """LinkedIn Profile

        Fetch a rich LinkedIn member profile by URL: name, headline, avatar,
        location, connections and followers, current position, and full work
        experience with job titles, descriptions, dates, employment/workplace type,
        and per-role skills, plus education, skills, certifications, honors and
        awards, languages, projects, publications, and verified/premium/open-to-work
        flags.

        Price: $0.004 per request plus $0 per result (maximum $0.004).

        Example:
            res = client.linkedin.profile(url="https://www.linkedin.com/in/williamhgates")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.profile", dict(input), options
        )
        return BareRunResult[LinkedinProfileData].model_validate(raw)

    async def profile_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinProfileThinInput],
    ) -> BareRunResult[LinkedinProfileThinData]:
        """LinkedIn Profile (basic)

        Lightweight profile: name, avatar, location, followers, and a basic
        experience/education list (company + dates only, no job titles,
        descriptions, or skills; past companies may be redacted). For full
        experience detail, skills, certifications, connections, and verified flags
        use linkedin.profile.

        Price: $0.002 per request.

        Example:
            res = client.linkedin.profile_thin(url="https://www.linkedin.com/in/williamhgates")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.profile_thin", dict(input), options
        )
        return BareRunResult[LinkedinProfileThinData].model_validate(raw)

    async def search_companies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchCompaniesInput],
    ) -> BareRunResult[LinkedinSearchCompaniesData]:
        """LinkedIn Company Search

        Search LinkedIn companies by keyword with optional location filtering,
        returning normalized company records.

        Price: $0.001 per request plus $0.004 per result (maximum $0.081).

        Example:
            res = client.linkedin.search_companies(limit=3, query="fintech")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_companies", dict(input), options
        )
        return BareRunResult[LinkedinSearchCompaniesData].model_validate(raw)

    async def search_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchPostsInput],
    ) -> BareRunResult[LinkedinSearchPostsData]:
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
        return BareRunResult[LinkedinSearchPostsData].model_validate(raw)

    async def search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchProfilesInput],
    ) -> BareRunResult[LinkedinSearchProfilesData]:
        """LinkedIn Profile Search

        Search LinkedIn profiles by keyword with optional location and job-title
        filters. Each match returns a full profile record: name, headline, location,
        current position, work experience, education, and skills, plus the profile
        URL, handle, and id. For a cheaper name/headline/URL-only search use
        linkedin.search_profiles_thin; add emails with
        linkedin.search_profiles_email.

        Price: $0.08 per request plus $0.004 per result (maximum $0.18).

        Example:
            res = client.linkedin.search_profiles(currentCompanies=["Google"], limit=3, query="engineer")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_profiles", dict(input), options
        )
        return BareRunResult[LinkedinSearchProfilesData].model_validate(raw)

    async def search_profiles_email(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchProfilesEmailInput],
    ) -> BareRunResult[LinkedinSearchProfilesEmailData]:
        """LinkedIn Profile Search + Email

        People search returning a full profile AND a verified work email for each
        hit. Search LinkedIn profiles by keyword with optional location and
        job-title filters; each match returns the full profile record (name,
        headline, location, current position, work experience, education, and
        skills, plus the profile URL, handle, and id) together with an emails array
        carrying the discovered work email and its deliverability. For a full
        profile without email use linkedin.search_profiles; for a cheaper
        name/headline/URL-only search use linkedin.search_profiles_thin.

        Price: $0.08 per request plus $0.009 per result (maximum $0.305).

        Example:
            res = client.linkedin.search_profiles_email(companyHeadcount=["B"], limit=5, query="founder")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_profiles_email", dict(input), options
        )
        return BareRunResult[LinkedinSearchProfilesEmailData].model_validate(raw)

    async def search_profiles_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchProfilesThinInput],
    ) -> BareRunResult[LinkedinSearchProfilesThinData]:
        """LinkedIn Profile Search (basic)

        Cheap people search: name/handle, headline, VANITY profile URL, location. No
        full profile or email - for full profiles per hit use
        linkedin.search_profiles, add emails with linkedin.search_profiles_email.

        Price: $0.0325 per request.

        Example:
            res = client.linkedin.search_profiles_thin(query="recruiter")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "linkedin.search_profiles_thin", dict(input), options
        )
        return BareRunResult[LinkedinSearchProfilesThinData].model_validate(raw)
