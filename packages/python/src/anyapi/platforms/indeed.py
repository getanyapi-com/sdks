# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the indeed platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

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
    query: Required[str]
    """Job search keywords (e.g. software engineer)."""


class IndeedJobsData(BaseModel):
    items: list[IndeedJobsItem] = Field(
        description="Job listing records: title, employer, location, salary when available, job type, posting date, and description. Populated whenever the provider returns data."
    )


class IndeedJobsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    city: str | None = None
    company: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    country: str | None = None
    datePublished: str | None = Field(
        default=None, description="ISO 8601 publish date."
    )
    description: str | None = Field(
        default=None, description="Plain-text job description."
    )
    expired: bool | None = None
    jobId: str = Field(
        description="Indeed job key. Populated whenever the provider returns data."
    )
    postalCode: str | None = None
    salaryCurrency: str | None = None
    salaryMax: float | None = None
    salaryMin: float | None = None
    salaryUnit: str | None = Field(
        default=None, description="Salary period, e.g. YEAR or HOUR."
    )
    state: str | None = None
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(
        description="Indeed job posting URL. Populated whenever the provider returns data."
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
        normalized job records per request at a flat USD price.

        Price: $0.00008 per result.

        Example:
            res = client.indeed.jobs(limit=3, location="Austin, TX", query="data analyst")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "indeed.jobs", dict(input), options
        )
        return RunResult[IndeedJobsData].model_validate(raw.model_dump(by_alias=True))


class AsyncIndeedNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def jobs(
        self, *, options: RequestOptions | None = None, **input: Unpack[IndeedJobsInput]
    ) -> RunResult[IndeedJobsData]:
        """Indeed Jobs

        Search Indeed job listings by keyword, location, and country - up to 20
        normalized job records per request at a flat USD price.

        Price: $0.00008 per result.

        Example:
            res = client.indeed.jobs(limit=3, location="Austin, TX", query="data analyst")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "indeed.jobs", dict(input), options
        )
        return RunResult[IndeedJobsData].model_validate(raw.model_dump(by_alias=True))
