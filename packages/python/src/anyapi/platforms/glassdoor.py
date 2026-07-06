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
        description="Job listing records: title, employer, location, salary estimate, rating, and posting details. Populated whenever the provider returns data."
    )


class GlassdoorJobsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


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

        Price: $0.00475 per result.

        Example:
            res = client.glassdoor.jobs(limit=3, url="https://www.glassdoor.com/Job/software-engineer-jobs-SRCH_KO0,17.htm")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "glassdoor.jobs", dict(input), options
        )
        return RunResult[GlassdoorJobsData].model_validate(
            raw.model_dump(by_alias=True)
        )


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

        Price: $0.00475 per result.

        Example:
            res = client.glassdoor.jobs(limit=3, url="https://www.glassdoor.com/Job/software-engineer-jobs-SRCH_KO0,17.htm")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "glassdoor.jobs", dict(input), options
        )
        return RunResult[GlassdoorJobsData].model_validate(
            raw.model_dump(by_alias=True)
        )
