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
        description="Job records: title, description, budget or hourly rate, required skills, posted date, and client details. Populated whenever the provider returns data."
    )


class UpworkJobsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    budget: str | None = Field(
        default=None, description="Fixed budget or hourly range."
    )
    clientLocation: str | None = None
    clientRating: float | None = None
    clientTotalSpent: float | None = Field(
        default=None, description="Client lifetime spend (USD)."
    )
    description: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    experienceLevel: str | None = None
    jobId: str = Field(
        description="Upwork job identifier. Populated whenever the provider returns data."
    )
    jobType: str | None = Field(default=None, description="Fixed or Hourly.")
    paymentVerified: bool | None = Field(
        default=None,
        description="Whether the client's payment method is verified; null when Upwork reports it as unknown.",
    )
    postedAt: str | None = Field(default=None, description="ISO 8601 posting date.")
    proposals: int | None = Field(
        default=None, description="Number of proposals submitted."
    )
    tags: list[str] | None = Field(default=None, description="Skill tags.")
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(
        description="Upwork job posting URL. Populated whenever the provider returns data."
    )


class UpworkNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def jobs(
        self, *, options: RequestOptions | None = None, **input: Unpack[UpworkJobsInput]
    ) -> RunResult[UpworkJobsData]:
        """Upwork Jobs

        Search Upwork job postings by keyword - up to 25 fresh listings per request
        with transparent per-request USD pricing.

        Price: $0.0033 per result.

        Example:
            res = client.upwork.jobs(limit=10, query="web developer")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "upwork.jobs", dict(input), options
        )
        return RunResult[UpworkJobsData].model_validate(raw.model_dump(by_alias=True))


class AsyncUpworkNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def jobs(
        self, *, options: RequestOptions | None = None, **input: Unpack[UpworkJobsInput]
    ) -> RunResult[UpworkJobsData]:
        """Upwork Jobs

        Search Upwork job postings by keyword - up to 25 fresh listings per request
        with transparent per-request USD pricing.

        Price: $0.0033 per result.

        Example:
            res = client.upwork.jobs(limit=10, query="web developer")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "upwork.jobs", dict(input), options
        )
        return RunResult[UpworkJobsData].model_validate(raw.model_dump(by_alias=True))
