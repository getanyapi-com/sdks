# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the semrush platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class SemrushKeywordsInput(TypedDict, total=False):
    """Input for Semrush Keyword Research."""

    database: NotRequired[str]
    """Two-letter Semrush regional database that scopes the metrics (e.g. us, uk, de). Default: us."""
    keyword: Required[str]
    """The search term to research (e.g. "best running shoes")."""


class SemrushOverviewInput(TypedDict, total=False):
    """Input for Semrush Domain Overview."""

    database: NotRequired[str]
    """Two-letter Semrush regional database that scopes the metrics (e.g. us, uk, de). Default: us."""
    domain: Required[str]
    """The domain to analyze (e.g. ahrefs.com)."""
    includeMoz: NotRequired[bool]
    """Add Moz Domain Authority and Spam Score to the response. Default: false."""


class SemrushKeywordsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SemrushOverviewData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SemrushNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SemrushKeywordsInput],
    ) -> BareRunResult[SemrushKeywordsData]:
        """Semrush Keyword Research

        Semrush keyword research for any term: monthly search volume, CPC,
        competition, keyword difficulty, plus related keywords and question
        keywords.

        Price: $0 per request plus $0.015 per result (maximum $0.015).

        Example:
            res = client.semrush.keywords(database="us", keyword="best running shoes")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "semrush.keywords", dict(input), options
        )
        return BareRunResult[SemrushKeywordsData].model_validate(raw)

    def overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SemrushOverviewInput],
    ) -> BareRunResult[SemrushOverviewData]:
        """Semrush Domain Overview

        a Semrush SEO overview for any domain: Authority Score, organic and paid
        traffic, keyword and backlink counts, top country, and the domain's top
        organic keywords.

        Price: $0 per request plus $0.015 per result (maximum $0.015).

        Example:
            res = client.semrush.overview(database="us", domain="ahrefs.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "semrush.overview", dict(input), options
        )
        return BareRunResult[SemrushOverviewData].model_validate(raw)


class AsyncSemrushNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SemrushKeywordsInput],
    ) -> BareRunResult[SemrushKeywordsData]:
        """Semrush Keyword Research

        Semrush keyword research for any term: monthly search volume, CPC,
        competition, keyword difficulty, plus related keywords and question
        keywords.

        Price: $0 per request plus $0.015 per result (maximum $0.015).

        Example:
            res = client.semrush.keywords(database="us", keyword="best running shoes")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "semrush.keywords", dict(input), options
        )
        return BareRunResult[SemrushKeywordsData].model_validate(raw)

    async def overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SemrushOverviewInput],
    ) -> BareRunResult[SemrushOverviewData]:
        """Semrush Domain Overview

        a Semrush SEO overview for any domain: Authority Score, organic and paid
        traffic, keyword and backlink counts, top country, and the domain's top
        organic keywords.

        Price: $0 per request plus $0.015 per result (maximum $0.015).

        Example:
            res = client.semrush.overview(database="us", domain="ahrefs.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "semrush.overview", dict(input), options
        )
        return BareRunResult[SemrushOverviewData].model_validate(raw)
