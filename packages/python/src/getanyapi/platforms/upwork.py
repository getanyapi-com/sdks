# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the upwork platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class UpworkJobsInput(TypedDict, total=False):
    """Input for Upwork Jobs."""

    experienceLevel: NotRequired[Literal["entry", "intermediate", "expert"]]
    """Filter by required experience level."""
    fixedPriceRange: NotRequired[list[float]]
    """Budget range [min, max] in USD for fixed-price jobs (e.g. [500, 5000])."""
    hourlyRateRange: NotRequired[list[float]]
    """Hourly rate range [min, max] in USD/hour for hourly jobs (e.g. [20, 50])."""
    jobType: NotRequired[Literal["fixed", "hourly"]]
    """Filter by payment type: fixed-price or hourly jobs."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    location: NotRequired[str]
    """Filter by client location - a region, subregion, or country (e.g. United States, Europe)."""
    paymentVerified: NotRequired[bool]
    """When true, only return jobs from clients with a verified payment method."""
    query: Required[str]
    """Keywords to search Upwork jobs for (e.g. react developer)."""
    sort: NotRequired[Literal["newest", "relevance"]]
    """Sort order for listings: newest or relevance (e.g. newest). Default: newest."""


class UpworkJobsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class UpworkNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def jobs(
        self, *, options: RequestOptions | None = None, **input: Unpack[UpworkJobsInput]
    ) -> BareRunResult[UpworkJobsData]:
        """Upwork Jobs

        Search Upwork job postings by keyword, with up to 25 fresh listings per
        request.

        Price: $0 per request plus $0.0033 per result (maximum $0.0825).

        Example:
            res = client.upwork.jobs(jobType="fixed", limit=10, query="web developer")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "upwork.jobs", dict(input), options
        )
        return BareRunResult[UpworkJobsData].model_validate(raw)


class AsyncUpworkNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def jobs(
        self, *, options: RequestOptions | None = None, **input: Unpack[UpworkJobsInput]
    ) -> BareRunResult[UpworkJobsData]:
        """Upwork Jobs

        Search Upwork job postings by keyword, with up to 25 fresh listings per
        request.

        Price: $0 per request plus $0.0033 per result (maximum $0.0825).

        Example:
            res = client.upwork.jobs(jobType="fixed", limit=10, query="web developer")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "upwork.jobs", dict(input), options
        )
        return BareRunResult[UpworkJobsData].model_validate(raw)
