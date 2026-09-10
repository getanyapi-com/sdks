# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the upwork platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class UpworkJobsInput(TypedDict, total=False):
    """Input for Upwork Jobs."""

    experienceLevel: NotRequired[Literal["entry", "intermediate", "expert"]]
    """Filter by required experience level."""
    jobType: NotRequired[Literal["fixed", "hourly"]]
    """Filter by payment type: fixed-price or hourly jobs."""
    limit: NotRequired[int]
    """Maximum number of results to return (10-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 10 to 25."""
    location: NotRequired[str]
    """Filter by client location - a region, subregion, or country (e.g. United States, Europe)."""
    paymentVerified: NotRequired[bool]
    """When true, only return jobs from clients with a verified payment method."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """Keywords to search Upwork jobs for (e.g. react developer)."""
    sort: NotRequired[Literal["newest", "relevance"]]
    """Sort order for listings: newest or relevance (e.g. newest). Default: newest."""


class UpworkJobsData(BaseModel):
    items: list[UpworkJobsItem] = Field(
        description="Job records: title, description, budget or hourly rate, required skills, posted date, and client details. Populated whenever the provider has data for the entity."
    )


class UpworkJobsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    budget: str | None = Field(
        default=None,
        description="Fixed-price budget in USD (e.g. $4000). Absent on hourly jobs, which carry hourlyRateMin and hourlyRateMax.",
    )
    client_location: str | None = Field(
        default=None, alias="clientLocation", description="Client country or location."
    )
    client_rating: float | None = Field(
        default=None, alias="clientRating", description="Client average rating."
    )
    client_total_spent: float | None = Field(
        default=None,
        alias="clientTotalSpent",
        description="Client lifetime spend (USD).",
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    description: str | None = Field(
        default=None,
        description="Full job posting description text. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    experience_level: str | None = Field(
        default=None,
        alias="experienceLevel",
        description="Required experience level (e.g. Entry, Intermediate, Expert).",
    )
    hourly_rate_max: float | None = Field(
        default=None,
        alias="hourlyRateMax",
        description="Upper bound of the client's hourly rate range in USD. Absent on fixed-price jobs.",
    )
    hourly_rate_min: float | None = Field(
        default=None,
        alias="hourlyRateMin",
        description="Lower bound of the client's hourly rate range in USD. Absent on fixed-price jobs.",
    )
    job_id: str = Field(
        alias="jobId",
        description="Upwork job identifier. Populated whenever the provider has data for the entity.",
    )
    job_type: str | None = Field(
        default=None, alias="jobType", description="Fixed or Hourly."
    )
    payment_verified: bool | None = Field(
        default=None,
        alias="paymentVerified",
        description="Whether the client's payment method is verified; null when Upwork reports it as unknown.",
    )
    proposals: int | None = Field(
        default=None, description="Number of proposals submitted."
    )
    tags: list[str] | None = Field(default=None, description="Skill tags.")
    title: str = Field(
        description="Job posting title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Upwork job posting URL. Populated whenever the provider has data for the entity."
    )


class UpworkNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def jobs(
        self, *, options: RequestOptions | None = None, **input: Unpack[UpworkJobsInput]
    ) -> RunResult[UpworkJobsData]:
        """Upwork Jobs

        Search Upwork job postings by keyword, with up to 25 fresh listings per
        request.

        Price: $0.0011 per request plus $0.0011 per result (maximum $0.0286).

        Example:
            res = client.upwork.jobs(jobType="fixed", limit=10, query="web developer")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "upwork.jobs", dict(input), options
        )
        return RunResult[UpworkJobsData].model_validate(raw)


class AsyncUpworkNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def jobs(
        self, *, options: RequestOptions | None = None, **input: Unpack[UpworkJobsInput]
    ) -> RunResult[UpworkJobsData]:
        """Upwork Jobs

        Search Upwork job postings by keyword, with up to 25 fresh listings per
        request.

        Price: $0.0011 per request plus $0.0011 per result (maximum $0.0286).

        Example:
            res = client.upwork.jobs(jobType="fixed", limit=10, query="web developer")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "upwork.jobs", dict(input), options
        )
        return RunResult[UpworkJobsData].model_validate(raw)
