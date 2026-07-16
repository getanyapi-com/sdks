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

    company_type: str | None = Field(
        default=None,
        alias="companyType",
        description="Company type, e.g. Privately Held, Public Company.",
    )
    description: str = Field(
        description="Company about/description text. Populated whenever the provider has data for the entity."
    )
    employee_count: int = Field(
        alias="employeeCount",
        description="Reported total employee count. Populated whenever the provider has data for the entity.",
    )
    employee_count_range: LinkedinCompanyEmployeeCountRange | None = Field(
        default=None,
        alias="employeeCountRange",
        description="LinkedIn size bucket the company falls in.",
    )
    follower_count: int = Field(
        alias="followerCount",
        description="LinkedIn page follower count. Populated whenever the provider has data for the entity.",
    )
    founded_on: LinkedinCompanyFoundedOn | None = Field(
        default=None,
        alias="foundedOn",
        description="Founding date (year populated when known).",
    )
    funding_data: LinkedinCompanyFundingData | None = Field(
        default=None,
        alias="fundingData",
        description="Funding summary sourced from Crunchbase, when available.",
    )
    industry: str = Field(description="Primary industry.")
    locations: list[LinkedinCompanyLocation] | None = Field(
        default=None, description="Company office locations, including headquarters."
    )
    logo_url: str = Field(alias="logoUrl", description="Company logo image URL.")
    name: str = Field(description="Company name.")
    page_verified: bool | None = Field(
        default=None,
        alias="pageVerified",
        description="Whether LinkedIn has verified the company page.",
    )
    similar_organizations: list[Any] | None = Field(
        default=None,
        alias="similarOrganizations",
        description="Similar organizations surfaced by LinkedIn.",
    )
    specialities: list[Any] | None = Field(
        default=None, description="Company-declared specialities."
    )
    tagline: str = Field(description="Company tagline/slogan.")
    universal_name: str | None = Field(
        default=None,
        alias="universalName",
        description="LinkedIn universal (vanity) name for the company.",
    )
    website: str = Field(description="Company website URL.")


class LinkedinCompanyEmployeeCountRange(BaseModel):
    model_config = ConfigDict(extra="allow")

    end: int | None = Field(
        default=None, description="Upper bound of the employee-count bucket."
    )
    start: int | None = Field(
        default=None, description="Lower bound of the employee-count bucket."
    )


class LinkedinCompanyFoundedOn(BaseModel):
    model_config = ConfigDict(extra="allow")

    year: int | None = Field(default=None, description="Year the company was founded.")


class LinkedinCompanyFundingData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_crunchbase_url: str | None = Field(
        default=None,
        alias="companyCrunchbaseUrl",
        description="Crunchbase profile URL for the company.",
    )
    last_funding_type: str | None = Field(
        default=None,
        alias="lastFundingType",
        description="Type of the most recent funding round.",
    )
    num_funding_rounds: int | None = Field(
        default=None,
        alias="numFundingRounds",
        description="Total number of funding rounds.",
    )


class LinkedinCompanyLocation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="City.")
    country: str | None = Field(default=None, description="ISO country code.")
    headquarter: bool | None = Field(
        default=None, description="True when this location is the headquarters."
    )
    line1: str | None = Field(default=None, description="Street address line.")
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Postal code."
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
    items: list[LinkedinCompanyPostsItem] = Field(
        description="The company's recent posts. Populated whenever the provider has data for the entity."
    )


class LinkedinCompanyPostsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: LinkedinCompanyPostsAuthor | None = Field(
        default=None, description="The post author (a company or a profile)."
    )
    content_attributes: list[LinkedinCompanyPostsContentAttribute] | None = Field(
        default=None,
        alias="contentAttributes",
        description="Inline mentions and entity references in the post text.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    engagement: LinkedinCompanyPostsEngagement | None = Field(
        default=None, description="Engagement metrics for the post."
    )
    id: str = Field(
        description="Unique identifier of the post. Populated whenever the provider has data for the entity."
    )
    post_images: list[LinkedinCompanyPostsPostImage] | None = Field(
        default=None, alias="postImages", description="Images attached to the post."
    )
    post_video: LinkedinCompanyPostsPostVideo | None = Field(
        default=None,
        alias="postVideo",
        description="Video attached to the post, or null when absent.",
    )
    text: str = Field(description="Full text content of the post.")
    url: str = Field(
        description="Canonical URL of the post. Populated whenever the provider has data for the entity."
    )


class LinkedinCompanyPostsAuthor(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    followers: str | None = Field(
        default=None,
        description="Author follower count as displayed text (e.g. '1,543,793 followers').",
    )
    linkedin_url: str | None = Field(
        default=None,
        alias="linkedinUrl",
        description="Canonical LinkedIn URL of the author.",
    )
    name: str | None = Field(default=None, description="Display name of the author.")
    type_: str | None = Field(
        default=None,
        alias="type",
        description="Author kind, e.g. 'company' or 'profile'.",
    )
    universal_name: str | None = Field(
        default=None,
        alias="universalName",
        description="URL-safe company/profile handle, when present.",
    )


class LinkedinCompanyPostsContentAttribute(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinCompanyPostsEngagement(BaseModel):
    model_config = ConfigDict(extra="allow")

    comments: int | None = Field(
        default=None, description="Number of comments on the post."
    )
    likes: int | None = Field(
        default=None,
        description="Total reaction count on the post. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    reactions: list[LinkedinCompanyPostsReaction] | None = Field(
        default=None, description="Per-reaction-type breakdown of the reaction total."
    )
    shares: int | None = Field(
        default=None, description="Number of shares/reposts of the post."
    )


class LinkedinCompanyPostsReaction(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    count: int | None = Field(
        default=None, description="Number of reactions of this type."
    )
    type_: str | None = Field(
        default=None,
        alias="type",
        description="Reaction type, e.g. LIKE, PRAISE, EMPATHY, INTEREST, APPRECIATION.",
    )


class LinkedinCompanyPostsPostImage(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinCompanyPostsPostVideo(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinCompanyPostsThinData(BaseModel):
    items: list[LinkedinCompanyPostsThinItem] = Field(
        description="The company's recent posts. Populated whenever the provider has data for the entity."
    )


class LinkedinCompanyPostsThinItem(BaseModel):
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


class LinkedinCompanyThinData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    description: str = Field(
        description="Company about/description text. Populated whenever the provider has data for the entity."
    )
    employee_count: int = Field(
        alias="employeeCount", description="Reported employee count."
    )
    industry: str = Field(
        description="Primary industry. Populated whenever the provider has data for the entity."
    )
    logo_url: str = Field(
        alias="logoUrl",
        description="Company logo image URL. Populated whenever the provider has data for the entity.",
    )
    name: str = Field(description="Company name.")
    tagline: str = Field(
        description="Company tagline/slogan. Populated whenever the provider has data for the entity."
    )
    website: str = Field(
        description="Company website URL. Populated whenever the provider has data for the entity."
    )


class LinkedinEmailData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    emails: list[LinkedinEmailEmail] = Field(
        description="Deliverability-validated work emails discovered for the profile. Populated whenever the provider has data for the entity."
    )
    first_name: str | None = Field(
        default=None,
        alias="firstName",
        description="First name on the LinkedIn profile.",
    )
    headline: str | None = Field(default=None, description="Profile headline.")
    last_name: str | None = Field(
        default=None, alias="lastName", description="Last name on the LinkedIn profile."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Canonical LinkedIn profile URL."
    )


class LinkedinEmailEmail(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    deliverable: bool | None = Field(
        default=None,
        description="True when the email passed deliverability checks (including SMTP).",
    )
    email: str = Field(
        description="Discovered work email address. Populated whenever the provider has data for the entity."
    )
    quality_score: int | None = Field(
        default=None,
        alias="qualityScore",
        description="Confidence score for the email, 0-100.",
    )
    status: str | None = Field(
        default=None, description="Validation status of the email (e.g. valid)."
    )
    valid_email_server: bool | None = Field(
        default=None,
        alias="validEmailServer",
        description="True when the domain has a valid mail server.",
    )


class LinkedinJobsData(BaseModel):
    items: list[LinkedinJobsItem] = Field(
        description="Full job listing records for the search. Populated whenever the provider has data for the entity."
    )


class LinkedinJobsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    applicants: int | None = Field(
        default=None,
        description="Number of applicants reported by LinkedIn. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    apply_url: str | None = Field(
        default=None,
        alias="applyUrl",
        description="External company apply URL when the job applies off-site.",
    )
    benefits: list[str] | None = Field(default=None, description="Listed benefits.")
    company: LinkedinJobsCompany | None = Field(
        default=None, description="Hiring company details."
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time) the job was posted. Multiply by 1000 for a JS Date in milliseconds.",
    )
    description_text: str | None = Field(
        default=None,
        alias="descriptionText",
        description="Full job description as plain text. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    easy_apply_url: str | None = Field(
        default=None,
        alias="easyApplyUrl",
        description="LinkedIn Easy Apply URL when available.",
    )
    employment_type: str | None = Field(
        default=None,
        alias="employmentType",
        description="Employment type (e.g. full_time, contract, part_time).",
    )
    experience_level: str | None = Field(
        default=None,
        alias="experienceLevel",
        description="Seniority / experience level (e.g. Mid-Senior level, Entry level).",
    )
    id: str | None = Field(default=None, description="LinkedIn job listing id.")
    industries: list[str] | None = Field(
        default=None, description="Industries associated with the role."
    )
    location: str | None = Field(
        default=None, description="Job location (city, region, or country)."
    )
    salary: LinkedinJobsSalary | None = Field(
        default=None, description="Salary range when disclosed by the poster."
    )
    title: str = Field(description="Job title.")
    url: str = Field(description="Canonical LinkedIn job listing URL.")
    workplace_type: str | None = Field(
        default=None,
        alias="workplaceType",
        description="Workplace type (e.g. remote, on_site, hybrid).",
    )


class LinkedinJobsCompany(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Canonical LinkedIn company URL."
    )
    logo: str | None = Field(default=None, description="Company logo image URL.")
    name: str | None = Field(default=None, description="Company name.")
    universal_name: str | None = Field(
        default=None,
        alias="universalName",
        description="Company LinkedIn universal (vanity) name.",
    )


class LinkedinJobsSalary(BaseModel):
    model_config = ConfigDict(extra="allow")

    max: float | None = Field(default=None, description="Maximum salary.")
    min: float | None = Field(default=None, description="Minimum salary.")
    text: str | None = Field(
        default=None, description="Salary as displayed (e.g. '300,000 - 330,000 USD')."
    )


class LinkedinJobsThinData(BaseModel):
    items: list[LinkedinJobsThinItem] = Field(
        description="Job listing index records for the search. Populated whenever the provider has data for the entity."
    )


class LinkedinJobsThinItem(BaseModel):
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
    id: str | None = Field(default=None, description="LinkedIn job listing id.")
    location: str | None = Field(
        default=None,
        description="Job location (city, region). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
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


class LinkedinPostCommentsData(BaseModel):
    items: list[LinkedinPostCommentsItem] = Field(
        description="The post's comments. Populated whenever the provider has data for the entity."
    )


class LinkedinPostCommentsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    actor: LinkedinPostCommentsActor | None = Field(
        default=None, description="The commenter (a profile or a company)."
    )
    commentary: str = Field(
        description="Full text of the comment. Populated whenever the provider has data for the entity."
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    edited: bool | None = Field(
        default=None, description="Whether the comment has been edited."
    )
    engagement: LinkedinPostCommentsEngagement | None = Field(
        default=None, description="Engagement metrics for the comment."
    )
    id: str = Field(
        description="Unique identifier of the comment. Populated whenever the provider has data for the entity."
    )
    pinned: bool | None = Field(
        default=None, description="Whether the comment is pinned on the post."
    )
    url: str | None = Field(
        default=None, description="Canonical permalink URL of the comment."
    )


class LinkedinPostCommentsActor(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    image: str | None = Field(
        default=None, description="Profile picture URL of the commenter."
    )
    linkedin_url: str | None = Field(
        default=None,
        alias="linkedinUrl",
        description="Canonical LinkedIn URL of the commenter.",
    )
    name: str | None = Field(default=None, description="Display name of the commenter.")
    position: str | None = Field(
        default=None, description="Commenter's headline or job title as displayed."
    )
    type_: str | None = Field(
        default=None,
        alias="type",
        description="Commenter kind, e.g. 'profile' or 'company'.",
    )


class LinkedinPostCommentsEngagement(BaseModel):
    model_config = ConfigDict(extra="allow")

    comments: int | None = Field(
        default=None, description="Number of replies to the comment."
    )
    likes: int | None = Field(
        default=None, description="Number of likes on the comment."
    )


class LinkedinPostReactionsData(BaseModel):
    items: list[LinkedinPostReactionsItem] = Field(
        description="Reactions on the post, one record per reactor."
    )


class LinkedinPostReactionsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    actor: LinkedinPostReactionsActor = Field(
        description="The reactor - the person or company that reacted."
    )
    post_id: str | None = Field(
        default=None,
        alias="postId",
        description="LinkedIn URN of the post that was reacted to.",
    )
    reaction_type: str = Field(
        alias="reactionType",
        description="Reaction kind (e.g. LIKE, PRAISE, EMPATHY, INTEREST, APPRECIATION, ENTERTAINMENT).",
    )


class LinkedinPostReactionsActor(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str | None = Field(
        default=None, description="LinkedIn member or company id of the reactor."
    )
    linkedin_url: str | None = Field(
        default=None,
        alias="linkedinUrl",
        description="Canonical LinkedIn profile or company URL of the reactor.",
    )
    name: str = Field(
        description="Full name of the reactor (or company name). Populated whenever the provider has data for the entity."
    )
    picture_url: str | None = Field(
        default=None,
        alias="pictureUrl",
        description="Profile picture URL of the reactor.",
    )
    position: str | None = Field(
        default=None,
        description="Reactor's current job title / headline (or follower count for a company).",
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

    about: str | None = Field(
        default=None, description="About/summary text of the profile."
    )
    certifications: list[LinkedinProfileCertification] | None = Field(
        default=None, description="Licenses and certifications."
    )
    connections_count: int | None = Field(
        default=None, alias="connectionsCount", description="Number of connections."
    )
    current_position: list[LinkedinProfileCurrentPosition] | None = Field(
        default=None,
        alias="currentPosition",
        description="The member's current role(s).",
    )
    education: list[LinkedinProfileEducation] | None = Field(
        default=None, description="Education entries."
    )
    experience: list[LinkedinProfileExperience] | None = Field(
        default=None,
        description="Full work experience with titles, descriptions, dates, and per-role skills. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    first_name: str = Field(
        alias="firstName", description="First name of the profile owner."
    )
    follower_count: int | None = Field(
        default=None, alias="followerCount", description="Number of followers."
    )
    headline: str = Field(
        description="Professional headline shown under the name. Populated whenever the provider has data for the entity."
    )
    honors_and_awards: list[LinkedinProfileHonorsAndAward] | None = Field(
        default=None, alias="honorsAndAwards", description="Honors and awards."
    )
    languages: list[Any] | None = Field(
        default=None, description="Languages, as returned by LinkedIn when present."
    )
    last_name: str = Field(
        alias="lastName", description="Last name of the profile owner."
    )
    location: str | None = Field(
        default=None, description="Location of the profile owner."
    )
    open_to_work: bool | None = Field(
        default=None,
        alias="openToWork",
        description="Whether the member is open to work.",
    )
    photo: str | None = Field(default=None, description="URL of the profile photo.")
    premium: bool | None = Field(
        default=None, description="Whether the member has LinkedIn Premium."
    )
    projects: list[Any] | None = Field(
        default=None, description="Projects, as returned by LinkedIn when present."
    )
    public_identifier: str | None = Field(
        default=None,
        alias="publicIdentifier",
        description="LinkedIn public identifier (the /in/ handle).",
    )
    publications: list[LinkedinProfilePublication] | None = Field(
        default=None, description="Publications."
    )
    skills: list[LinkedinProfileSkill] | None = Field(
        default=None, description="Endorsed skills."
    )
    top_skills: list[Any] | None = Field(
        default=None,
        alias="topSkills",
        description="The member's top skills, as free-form strings when present.",
    )
    url: str = Field(description="Canonical LinkedIn profile URL.")
    verified: bool | None = Field(
        default=None, description="Whether the profile is identity-verified."
    )


class LinkedinProfileCertification(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    issued_at: str | None = Field(
        default=None, alias="issuedAt", description="Issue date text."
    )
    issued_by: str | None = Field(
        default=None, alias="issuedBy", description="Issuing organization."
    )
    title: str | None = Field(default=None, description="Certification title.")


class LinkedinProfileCurrentPosition(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_linkedin_url: str | None = Field(
        default=None, alias="companyLinkedinUrl", description="Company LinkedIn URL."
    )
    company_name: str | None = Field(
        default=None, alias="companyName", description="Company name."
    )
    duration: str | None = Field(
        default=None, description="Human-readable tenure, e.g. '12 yrs 6 mos'."
    )
    location: str | None = Field(default=None, description="Role location.")
    position: str | None = Field(default=None, description="Job title.")


class LinkedinProfileEducation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    degree: str | None = Field(default=None, description="Degree earned.")
    end_date: str | None = Field(
        default=None, alias="endDate", description="End date text."
    )
    field_of_study: str | None = Field(
        default=None, alias="fieldOfStudy", description="Field of study."
    )
    school: str = Field(description="School name.")
    school_url: str | None = Field(
        default=None, alias="schoolUrl", description="School LinkedIn URL."
    )
    start_date: str | None = Field(
        default=None, alias="startDate", description="Start date text."
    )


class LinkedinProfileExperience(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_linkedin_url: str | None = Field(
        default=None, alias="companyLinkedinUrl", description="Company LinkedIn URL."
    )
    company_name: str | None = Field(
        default=None, alias="companyName", description="Company name."
    )
    description: str | None = Field(default=None, description="Role description.")
    duration: str | None = Field(
        default=None, description="Human-readable tenure, e.g. '3 yrs 2 mos'."
    )
    employment_type: str | None = Field(
        default=None,
        alias="employmentType",
        description="Employment type, e.g. 'Full-time'.",
    )
    end_date: str | None = Field(
        default=None, alias="endDate", description="End date text, e.g. 'Present'."
    )
    location: str | None = Field(default=None, description="Role location.")
    position: str = Field(
        description="Job title. Populated whenever the provider has data for the entity."
    )
    skills: list[Any] | None = Field(
        default=None, description="Skills associated with this role."
    )
    start_date: str | None = Field(
        default=None, alias="startDate", description="Start date text, e.g. 'Feb 2014'."
    )
    workplace_type: str | None = Field(
        default=None,
        alias="workplaceType",
        description="Workplace type, e.g. 'Remote' or 'On-site'.",
    )


class LinkedinProfileHonorsAndAward(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    description: str | None = Field(default=None, description="Award description.")
    issued_at: str | None = Field(
        default=None, alias="issuedAt", description="Issue date text."
    )
    issued_by: str | None = Field(
        default=None, alias="issuedBy", description="Issuing organization."
    )
    title: str | None = Field(default=None, description="Award title.")


class LinkedinProfilePublication(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    description: str | None = Field(
        default=None, description="Publication description."
    )
    published_text: str | None = Field(
        default=None,
        alias="publishedText",
        description="Publisher and/or date text as shown on LinkedIn.",
    )
    title: str | None = Field(default=None, description="Publication title.")


class LinkedinProfileSkill(BaseModel):
    model_config = ConfigDict(extra="allow")

    endorsements: str | None = Field(
        default=None, description="Endorsement count text, e.g. '99+ endorsements'."
    )
    name: str | None = Field(default=None, description="Skill name.")


class LinkedinProfileThinData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    about: str = Field(description="About/summary text of the profile.")
    articles: list[LinkedinProfileThinArticle] = Field(
        description="The profile's published articles."
    )
    avatar_url: str = Field(
        alias="avatarUrl", description="URL of the profile avatar image."
    )
    education: list[LinkedinProfileThinEducation] = Field(
        description="Education entries."
    )
    experience: list[LinkedinProfileThinExperience] = Field(
        description="Work experience entries (company and dates only in this basic tier). Populated whenever the provider has data for the entity."
    )
    followers: int = Field(description="Number of followers.")
    location: str = Field(description="Location of the profile owner.")
    name: str = Field(description="Full name of the profile owner.")
    recent_posts: list[LinkedinProfileThinRecentPost] = Field(
        alias="recentPosts", description="The profile's recent posts."
    )


class LinkedinProfileThinArticle(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    headline: str = Field(description="Headline of the article.")
    url: str | None = Field(default=None, description="Canonical URL of the article.")


class LinkedinProfileThinEducation(BaseModel):
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


class LinkedinProfileThinExperience(BaseModel):
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


class LinkedinProfileThinRecentPost(BaseModel):
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
        description="Current role(s). Each entry is an open object with the position title, company, dates, and location; shape can vary by profile.",
    )
    education: list[LinkedinSearchProfilesEducation] | None = Field(
        default=None,
        description="Education history. Each entry is an open object with school, degree, and field of study; shape can vary by profile.",
    )
    experience: list[LinkedinSearchProfilesExperience] | None = Field(
        default=None,
        description="Full work history. Each entry is an open object with the position title, company, dates, and location; shape can vary by profile. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
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
    open_to_work: bool | None = Field(
        default=None,
        alias="openToWork",
        description="Whether the member has the Open to Work flag set.",
    )
    premium: bool | None = Field(
        default=None,
        description="Whether the member has a LinkedIn Premium subscription.",
    )
    skills: list[LinkedinSearchProfilesSkill] | None = Field(
        default=None,
        description="Listed skills. Each entry is an open object with the skill name and endorsement summary.",
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


class LinkedinSearchProfilesSkill(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchProfilesEmailData(BaseModel):
    items: list[LinkedinSearchProfilesEmailItem] = Field(
        description="Matched profile records, each with a discovered work email. Populated whenever the provider has data for the entity."
    )


class LinkedinSearchProfilesEmailItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    about: str | None = Field(default=None, description="Profile about / summary text.")
    current_position: list[LinkedinSearchProfilesEmailCurrentPosition] | None = Field(
        default=None,
        alias="currentPosition",
        description="Current role(s). Each entry is an open object with the position title, company, dates, and location; shape can vary by profile.",
    )
    education: list[LinkedinSearchProfilesEmailEducation] | None = Field(
        default=None,
        description="Education history. Each entry is an open object with school, degree, and field of study; shape can vary by profile.",
    )
    emails: list[LinkedinSearchProfilesEmailEmail] | None = Field(
        default=None,
        description="Discovered work email(s) for the member. Each entry is an open object with the email address plus deliverability signals (deliverable, disposable, catchAllDomain, validEmailServer, qualityScore, status); may be empty when no email could be verified. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    experience: list[LinkedinSearchProfilesEmailExperience] | None = Field(
        default=None,
        description="Full work history. Each entry is an open object with the position title, company, dates, and location; shape can vary by profile. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
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
    open_to_work: bool | None = Field(
        default=None,
        alias="openToWork",
        description="Whether the member has the Open to Work flag set.",
    )
    premium: bool | None = Field(
        default=None,
        description="Whether the member has a LinkedIn Premium subscription.",
    )
    skills: list[LinkedinSearchProfilesEmailSkill] | None = Field(
        default=None,
        description="Listed skills. Each entry is an open object with the skill name and endorsement summary.",
    )
    url: str = Field(
        description="Canonical LinkedIn profile URL. Populated whenever the provider has data for the entity."
    )


class LinkedinSearchProfilesEmailCurrentPosition(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchProfilesEmailEducation(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchProfilesEmailEmail(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchProfilesEmailExperience(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchProfilesEmailSkill(BaseModel):
    model_config = ConfigDict(extra="allow")


class LinkedinSearchProfilesThinData(BaseModel):
    items: list[LinkedinSearchProfilesThinItem] = Field(
        description="Matched profile records (basic fields only). Populated whenever the provider has data for the entity."
    )


class LinkedinSearchProfilesThinItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    handle: str | None = Field(
        default=None,
        description="Public profile identifier (the vanity slug in the URL). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    headline: str | None = Field(
        default=None,
        description="Profile headline (the tagline under the name). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    id: str | None = Field(
        default=None, description="LinkedIn member URN id for the profile."
    )
    image: str | None = Field(default=None, description="Profile picture URL.")
    location: str | None = Field(
        default=None,
        description="Member's location as a single string (city, region, country).",
    )
    name: str | None = Field(default=None, description="Member's display name.")
    url: str = Field(
        description="Canonical LinkedIn vanity profile URL. Populated whenever the provider has data for the entity."
    )


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
        as clean JSON.

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
        (advertiser, creative text, format).

        Price: $0.00005 per request plus $0.0015 per result (maximum $0.03005).

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
        pagination.

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
        return RunResult[LinkedinCompanyData].model_validate(raw)

    def company_employees(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyEmployeesInput],
    ) -> RunResult[LinkedinCompanyEmployeesData]:
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
        return RunResult[LinkedinCompanyEmployeesData].model_validate(raw)

    def company_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyPostsInput],
    ) -> RunResult[LinkedinCompanyPostsData]:
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
        return RunResult[LinkedinCompanyPostsData].model_validate(raw)

    def company_posts_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyPostsThinInput],
    ) -> RunResult[LinkedinCompanyPostsThinData]:
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
        return RunResult[LinkedinCompanyPostsThinData].model_validate(raw)

    def company_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyThinInput],
    ) -> RunResult[LinkedinCompanyThinData]:
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
        return RunResult[LinkedinCompanyThinData].model_validate(raw)

    def email(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinEmailInput],
    ) -> RunResult[LinkedinEmailData]:
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
        return RunResult[LinkedinEmailData].model_validate(raw)

    def jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinJobsInput],
    ) -> RunResult[LinkedinJobsData]:
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
        return RunResult[LinkedinJobsData].model_validate(raw)

    def jobs_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinJobsThinInput],
    ) -> RunResult[LinkedinJobsThinData]:
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
        return RunResult[LinkedinJobsThinData].model_validate(raw)

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

    def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostCommentsInput],
    ) -> RunResult[LinkedinPostCommentsData]:
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
        return RunResult[LinkedinPostCommentsData].model_validate(raw)

    def post_reactions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostReactionsInput],
    ) -> RunResult[LinkedinPostReactionsData]:
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
        return RunResult[LinkedinPostReactionsData].model_validate(raw)

    def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostTranscriptInput],
    ) -> RunResult[LinkedinPostTranscriptData]:
        """LinkedIn Post Transcript

        Get the spoken transcript of a LinkedIn video post by URL.

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
        return RunResult[LinkedinProfileData].model_validate(raw)

    def profile_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinProfileThinInput],
    ) -> RunResult[LinkedinProfileThinData]:
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
        return RunResult[LinkedinProfileThinData].model_validate(raw)

    def search_companies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchCompaniesInput],
    ) -> RunResult[LinkedinSearchCompaniesData]:
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
        return RunResult[LinkedinSearchProfilesData].model_validate(raw)

    def search_profiles_email(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchProfilesEmailInput],
    ) -> RunResult[LinkedinSearchProfilesEmailData]:
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
        return RunResult[LinkedinSearchProfilesEmailData].model_validate(raw)

    def search_profiles_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchProfilesThinInput],
    ) -> RunResult[LinkedinSearchProfilesThinData]:
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
        return RunResult[LinkedinSearchProfilesThinData].model_validate(raw)


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
        as clean JSON.

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
        (advertiser, creative text, format).

        Price: $0.00005 per request plus $0.0015 per result (maximum $0.03005).

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
        pagination.

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
        return RunResult[LinkedinCompanyData].model_validate(raw)

    async def company_employees(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyEmployeesInput],
    ) -> RunResult[LinkedinCompanyEmployeesData]:
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
        return RunResult[LinkedinCompanyEmployeesData].model_validate(raw)

    async def company_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyPostsInput],
    ) -> RunResult[LinkedinCompanyPostsData]:
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
        return RunResult[LinkedinCompanyPostsData].model_validate(raw)

    async def company_posts_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyPostsThinInput],
    ) -> RunResult[LinkedinCompanyPostsThinData]:
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
        return RunResult[LinkedinCompanyPostsThinData].model_validate(raw)

    async def company_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinCompanyThinInput],
    ) -> RunResult[LinkedinCompanyThinData]:
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
        return RunResult[LinkedinCompanyThinData].model_validate(raw)

    async def email(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinEmailInput],
    ) -> RunResult[LinkedinEmailData]:
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
        return RunResult[LinkedinEmailData].model_validate(raw)

    async def jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinJobsInput],
    ) -> RunResult[LinkedinJobsData]:
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
        return RunResult[LinkedinJobsData].model_validate(raw)

    async def jobs_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinJobsThinInput],
    ) -> RunResult[LinkedinJobsThinData]:
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
        return RunResult[LinkedinJobsThinData].model_validate(raw)

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

    async def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostCommentsInput],
    ) -> RunResult[LinkedinPostCommentsData]:
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
        return RunResult[LinkedinPostCommentsData].model_validate(raw)

    async def post_reactions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostReactionsInput],
    ) -> RunResult[LinkedinPostReactionsData]:
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
        return RunResult[LinkedinPostReactionsData].model_validate(raw)

    async def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinPostTranscriptInput],
    ) -> RunResult[LinkedinPostTranscriptData]:
        """LinkedIn Post Transcript

        Get the spoken transcript of a LinkedIn video post by URL.

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
        return RunResult[LinkedinProfileData].model_validate(raw)

    async def profile_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinProfileThinInput],
    ) -> RunResult[LinkedinProfileThinData]:
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
        return RunResult[LinkedinProfileThinData].model_validate(raw)

    async def search_companies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchCompaniesInput],
    ) -> RunResult[LinkedinSearchCompaniesData]:
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
        return RunResult[LinkedinSearchProfilesData].model_validate(raw)

    async def search_profiles_email(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchProfilesEmailInput],
    ) -> RunResult[LinkedinSearchProfilesEmailData]:
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
        return RunResult[LinkedinSearchProfilesEmailData].model_validate(raw)

    async def search_profiles_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[LinkedinSearchProfilesThinInput],
    ) -> RunResult[LinkedinSearchProfilesThinData]:
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
        return RunResult[LinkedinSearchProfilesThinData].model_validate(raw)
