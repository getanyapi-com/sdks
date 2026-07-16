# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the glassdoor platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class GlassdoorJobsInput(TypedDict, total=False):
    """Input for Glassdoor Jobs."""

    easyApply: NotRequired[bool]
    """When true, only return jobs offering Easy Apply. Keyword mode only."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    location: NotRequired[str]
    """City, region, or country to search within (keyword mode; e.g. United States, New York)."""
    postedLimit: NotRequired[Literal["24h", "week", "month"]]
    """Only jobs posted within this window (past 24 hours, week, or month). Keyword mode only."""
    query: NotRequired[str]
    """Job title or keywords to search (keyword mode). Provide this or a url."""
    sortBy: NotRequired[Literal["date", "relevance"]]
    """Sort order: most recent (date) or best match (relevance). Keyword mode only."""
    url: NotRequired[str]
    """Alternatively, a Glassdoor company or job search page URL to scrape (e.g. https://www.glassdoor.com/Jobs/Google-Jobs-E9079.htm). The filters below apply in keyword (query) mode."""
    workplaceType: NotRequired[Literal["remote", "hybrid", "onsite"]]
    """Filter by workplace type (remote, hybrid, or onsite). Keyword mode only."""


class GlassdoorJobsData(BaseModel):
    items: list[GlassdoorJobsItem] = Field(
        description="Job listing records for the search or company page. Populated whenever the provider has data for the entity."
    )


class GlassdoorJobsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    age_in_days: int | None = Field(
        default=None,
        alias="ageInDays",
        description="Days since the listing was posted.",
    )
    company: str | None = Field(
        default=None,
        description="Hiring employer name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    description: str | None = Field(
        default=None, description="Full job description (may contain HTML)."
    )
    id: str = Field(
        description="Glassdoor job listing id. Populated whenever the provider has data for the entity."
    )
    location: str | None = Field(
        default=None, description="Job location (city, region)."
    )
    rating: float | None = Field(
        default=None, description="Employer Glassdoor star rating (0 when not rated)."
    )
    salary: GlassdoorJobsSalary | None = Field(
        default=None, description="Estimated salary range for the listing."
    )
    title: str = Field(
        description="Job title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Absolute Glassdoor job listing URL. Populated whenever the provider has data for the entity."
    )


class GlassdoorJobsSalary(BaseModel):
    model_config = ConfigDict(extra="allow")

    currency: str | None = Field(
        default=None, description="ISO currency code for the salary figures."
    )
    max: float | None = Field(
        default=None, description="High end of the estimated salary range."
    )
    median: float | None = Field(
        default=None, description="Median of the estimated salary range."
    )
    min: float | None = Field(
        default=None, description="Low end of the estimated salary range."
    )
    period: str | None = Field(
        default=None, description="Pay period the figures cover (e.g. ANNUAL, HOURLY)."
    )


class GlassdoorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GlassdoorJobsInput],
    ) -> RunResult[GlassdoorJobsData]:
        """Glassdoor Jobs

        Search Glassdoor job listings by keyword and location, or scrape any
        Glassdoor company or job search page URL - up to 20 normalized job records
        per request.

        Price: $0.005 per request plus $0.00475 per result (maximum $0.1).

        Example:
            res = client.glassdoor.jobs(limit=3, location="United States", postedLimit="month", query="software engineer")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "glassdoor.jobs", dict(input), options
        )
        return RunResult[GlassdoorJobsData].model_validate(raw)


class AsyncGlassdoorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GlassdoorJobsInput],
    ) -> RunResult[GlassdoorJobsData]:
        """Glassdoor Jobs

        Search Glassdoor job listings by keyword and location, or scrape any
        Glassdoor company or job search page URL - up to 20 normalized job records
        per request.

        Price: $0.005 per request plus $0.00475 per result (maximum $0.1).

        Example:
            res = client.glassdoor.jobs(limit=3, location="United States", postedLimit="month", query="software engineer")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "glassdoor.jobs", dict(input), options
        )
        return RunResult[GlassdoorJobsData].model_validate(raw)
