# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the glassdoor platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class GlassdoorJobsInput(TypedDict, total=False):
    """Input for Glassdoor Jobs."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    url: Required[str]
    """A Glassdoor company or job search page URL (e.g. https://www.glassdoor.com/Jobs/Google-Jobs-E9079.htm)."""


class GlassdoorJobsData(BaseModel):
    items: list[GlassdoorJobsItem] = Field(
        description="Job listing records for the search or company page."
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
        description="Hiring employer name. Present whenever the upstream returns this record.",
    )
    description: str | None = Field(
        default=None, description="Full job description (may contain HTML)."
    )
    id: str = Field(description="Glassdoor job listing id.")
    location: str | None = Field(
        default=None, description="Job location (city, region)."
    )
    rating: float | None = Field(
        default=None, description="Employer Glassdoor star rating (0 when not rated)."
    )
    salary: GlassdoorJobsSalary | None = Field(
        default=None, description="Estimated salary range for the listing."
    )
    title: str = Field(description="Job title.")
    url: str = Field(description="Absolute Glassdoor job listing URL.")


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

        Fetch job listings from any Glassdoor company or job search page URL - up to
        20 normalized job records per request at a flat USD price.

        Price: $0.005 per request plus $0.00475 per result.

        Example:
            res = client.glassdoor.jobs(limit=3, url="https://www.glassdoor.com/Job/software-engineer-jobs-SRCH_KO0,17.htm")
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

        Fetch job listings from any Glassdoor company or job search page URL - up to
        20 normalized job records per request at a flat USD price.

        Price: $0.005 per request plus $0.00475 per result.

        Example:
            res = client.glassdoor.jobs(limit=3, url="https://www.glassdoor.com/Job/software-engineer-jobs-SRCH_KO0,17.htm")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "glassdoor.jobs", dict(input), options
        )
        return RunResult[GlassdoorJobsData].model_validate(raw)
