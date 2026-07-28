# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the glassdoor platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    model_config = ConfigDict(extra="allow")


class GlassdoorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GlassdoorJobsInput],
    ) -> BareRunResult[GlassdoorJobsData]:
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
        return BareRunResult[GlassdoorJobsData].model_validate(raw)


class AsyncGlassdoorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def jobs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GlassdoorJobsInput],
    ) -> BareRunResult[GlassdoorJobsData]:
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
        return BareRunResult[GlassdoorJobsData].model_validate(raw)
