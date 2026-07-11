# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the indeed platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class IndeedJobsInput(TypedDict, total=False):
    """Input for Indeed Jobs."""

    country: NotRequired[str]
    """Two-letter country site code (e.g. us, uk, de). Default: us."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    location: NotRequired[str]
    """City, state, zip, or 'remote'."""
    postedLimit: NotRequired[Literal["24h", "week"]]
    """Only return jobs posted within this window: 24h (past day) or week (past 7 days). Omit for all dates."""
    query: Required[str]
    """Job search keywords (e.g. software engineer)."""


class IndeedJobsData(BaseModel):
    items: list[IndeedJobsItem] = Field(
        description="Job listing records: title, employer, location, salary when available, job type, posting date, and description. Populated whenever the provider has data for the entity."
    )


class IndeedJobsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = None
    company: str | None = Field(
        default=None,
        description="Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    country: str | None = None
    date_published: str | None = Field(
        default=None, alias="datePublished", description="ISO 8601 publish date."
    )
    description: str | None = Field(
        default=None, description="Plain-text job description."
    )
    expired: bool | None = None
    job_id: str = Field(
        alias="jobId",
        description="Indeed job key. Populated whenever the provider has data for the entity.",
    )
    postal_code: str | None = Field(default=None, alias="postalCode")
    salary_currency: str | None = Field(default=None, alias="salaryCurrency")
    salary_max: float | None = Field(default=None, alias="salaryMax")
    salary_min: float | None = Field(default=None, alias="salaryMin")
    salary_unit: str | None = Field(
        default=None,
        alias="salaryUnit",
        description="Salary period, e.g. YEAR or HOUR.",
    )
    state: str | None = None
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Indeed job posting URL. Populated whenever the provider has data for the entity."
    )


class IndeedNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def jobs(
        self, *, options: RequestOptions | None = None, **input: Unpack[IndeedJobsInput]
    ) -> RunResult[IndeedJobsData]:
        """Indeed Jobs

        Search Indeed job listings by keyword, location, and country - up to 20
        normalized job records per request. **Price:** billed per result - \$0.80
        per 1,000 requests base + \$0.08 per 1,000 results, capped at \$2.40 per
        1,000 requests.

        Price: $0.0008 per request plus $0.00008 per result.

        Example:
            res = client.indeed.jobs(limit=3, location="Austin, TX", query="data analyst")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "indeed.jobs", dict(input), options
        )
        return RunResult[IndeedJobsData].model_validate(raw)


class AsyncIndeedNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def jobs(
        self, *, options: RequestOptions | None = None, **input: Unpack[IndeedJobsInput]
    ) -> RunResult[IndeedJobsData]:
        """Indeed Jobs

        Search Indeed job listings by keyword, location, and country - up to 20
        normalized job records per request. **Price:** billed per result - \$0.80
        per 1,000 requests base + \$0.08 per 1,000 results, capped at \$2.40 per
        1,000 requests.

        Price: $0.0008 per request plus $0.00008 per result.

        Example:
            res = client.indeed.jobs(limit=3, location="Austin, TX", query="data analyst")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "indeed.jobs", dict(input), options
        )
        return RunResult[IndeedJobsData].model_validate(raw)
