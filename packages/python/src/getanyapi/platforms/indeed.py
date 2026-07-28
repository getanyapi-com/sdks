# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the indeed platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    model_config = ConfigDict(extra="allow")


class IndeedNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def jobs(
        self, *, options: RequestOptions | None = None, **input: Unpack[IndeedJobsInput]
    ) -> BareRunResult[IndeedJobsData]:
        """Indeed Jobs

        Search Indeed job listings by keyword, location, and country, with up to 20
        normalized job records per request.

        Price: $0.0008 per request plus $0.00008 per result (maximum $0.0024).

        Example:
            res = client.indeed.jobs(limit=3, location="Austin, TX", query="data analyst")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "indeed.jobs", dict(input), options
        )
        return BareRunResult[IndeedJobsData].model_validate(raw)


class AsyncIndeedNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def jobs(
        self, *, options: RequestOptions | None = None, **input: Unpack[IndeedJobsInput]
    ) -> BareRunResult[IndeedJobsData]:
        """Indeed Jobs

        Search Indeed job listings by keyword, location, and country, with up to 20
        normalized job records per request.

        Price: $0.0008 per request plus $0.00008 per result (maximum $0.0024).

        Example:
            res = client.indeed.jobs(limit=3, location="Austin, TX", query="data analyst")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "indeed.jobs", dict(input), options
        )
        return BareRunResult[IndeedJobsData].model_validate(raw)
