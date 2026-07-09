# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the upwork platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class UpworkJobsInput(TypedDict, total=False):
    """Input for Upwork Jobs."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    query: Required[str]
    """Keywords to search Upwork jobs for (e.g. react developer)."""
    sort: NotRequired[str]
    """Sort order for listings: newest or relevance (e.g. newest). Default: newest."""


class UpworkJobsData(BaseModel):
    items: list[UpworkJobsItem] = Field(
        description="Job records: title, description, budget or hourly rate, required skills, posted date, and client details. Populated whenever the provider has data for the entity."
    )


class UpworkJobsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    budget: str | None = Field(
        default=None, description="Fixed budget or hourly range."
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

        Search Upwork job postings by keyword - up to 25 fresh listings per request.
        **Price:** billed per result - \$3.30 per 1,000 results, capped at \$82.50
        per 1,000 requests.

        Price: $0.0033 per result.

        Example:
            res = client.upwork.jobs(limit=10, query="web developer")
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

        Search Upwork job postings by keyword - up to 25 fresh listings per request.
        **Price:** billed per result - \$3.30 per 1,000 results, capped at \$82.50
        per 1,000 requests.

        Price: $0.0033 per result.

        Example:
            res = client.upwork.jobs(limit=10, query="web developer")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "upwork.jobs", dict(input), options
        )
        return RunResult[UpworkJobsData].model_validate(raw)
