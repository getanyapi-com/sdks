# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the semrush platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

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
    items: list[SemrushKeywordsItem] = Field(
        description="Keyword-research records: search volume, CPC, competition, keyword difficulty, plus related keywords and question keywords for the researched term. Populated whenever the provider returns data."
    )


class SemrushKeywordsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    competition: float | None = Field(
        default=None, description="Paid-search competition density, 0 to 1."
    )
    cpcUsd: float | None = Field(
        default=None, description="Average cost per click in USD."
    )
    database: str | None = Field(
        default=None,
        description="Two-letter Semrush regional database the metrics are scoped to.",
    )
    intents: list[str] | None = Field(
        default=None,
        description="Search-intent labels for the keyword (e.g. commercial, informational). Populated whenever the provider returns data.",
    )
    keyword: str = Field(
        description="The researched search term. Populated whenever the provider returns data."
    )
    keywordDifficulty: int | None = Field(
        default=None, description="Semrush Keyword Difficulty, 0 to 100."
    )
    organicResultsCount: int | None = Field(
        default=None,
        description="Number of organic results Google returns for the keyword.",
    )
    questions: list[SemrushKeywordsQuestion] | None = Field(
        default=None,
        description="Question-phrased keyword variations with their own volume and difficulty. Populated whenever the provider returns data.",
    )
    referringDomainsMedian: int | None = Field(
        default=None,
        description="Median number of referring domains across the ranking pages.",
    )
    relatedKeywords: list[SemrushKeywordsRelatedKeyword] | None = Field(
        default=None,
        description="Related keyword suggestions with their own volume and difficulty. Populated whenever the provider returns data.",
    )
    searchVolume: int | None = Field(
        default=None,
        description="Average monthly search volume in the selected database.",
    )


class SemrushKeywordsQuestion(BaseModel):
    model_config = ConfigDict(extra="allow")

    keyword: str = Field(description="The question keyword.")
    keywordDifficulty: int | None = Field(
        default=None,
        description="Semrush Keyword Difficulty for the question keyword, 0 to 100.",
    )
    searchVolume: int | None = Field(
        default=None,
        description="Average monthly search volume for the question keyword.",
    )


class SemrushKeywordsRelatedKeyword(BaseModel):
    model_config = ConfigDict(extra="allow")

    keyword: str = Field(description="The related keyword.")
    keywordDifficulty: int | None = Field(
        default=None,
        description="Semrush Keyword Difficulty for the related keyword, 0 to 100.",
    )
    searchVolume: int | None = Field(
        default=None,
        description="Average monthly search volume for the related keyword.",
    )


class SemrushOverviewData(BaseModel):
    items: list[SemrushOverviewItem] = Field(
        description="Domain overview records: Authority Score, organic and paid traffic, keyword and backlink counts, top country, and the domain's top organic keywords. Populated whenever the provider returns data."
    )


class SemrushOverviewItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    aiVisibility: int | None = Field(
        default=None, description="Semrush AI visibility metric for the domain."
    )
    authorityScore: int | None = Field(
        default=None, description="Semrush Authority Score, 0-100."
    )
    backlinks: int | None = Field(
        default=None, description="Total number of backlinks pointing at the domain."
    )
    database: str | None = Field(
        default=None,
        description="Two-letter Semrush regional database the metrics are scoped to.",
    )
    domain: str = Field(
        description="The analyzed domain. Populated whenever the provider returns data."
    )
    followBacklinks: int | None = Field(
        default=None, description="Number of dofollow backlinks."
    )
    mozDomainAuthority: int | None = Field(
        default=None,
        description="Moz Domain Authority, 0-100 (only when includeMoz is true).",
    )
    mozSpamScore: str | None = Field(
        default=None,
        description="Moz Spam Score as a percentage string (only when includeMoz is true).",
    )
    nofollowBacklinks: int | None = Field(
        default=None, description="Number of nofollow backlinks."
    )
    organicKeywords: int | None = Field(
        default=None, description="Number of keywords the domain ranks for organically."
    )
    organicTraffic: int | None = Field(
        default=None, description="Estimated monthly organic search traffic."
    )
    organicTrafficCostUsd: float | None = Field(
        default=None, description="Estimated USD value of the organic traffic."
    )
    paidKeywords: int | None = Field(
        default=None, description="Number of keywords the domain bids on."
    )
    paidTraffic: int | None = Field(
        default=None, description="Estimated monthly paid search traffic."
    )
    paidTrafficCostUsd: float | None = Field(
        default=None, description="Estimated USD value of the paid traffic."
    )
    referringDomains: int | None = Field(
        default=None, description="Number of unique domains linking to the domain."
    )
    topCountry: str | None = Field(
        default=None,
        description="Two-letter code of the country sending the most traffic.",
    )
    topCountryTraffic: int | None = Field(
        default=None, description="Estimated monthly traffic from the top country."
    )
    topKeywords: list[SemrushOverviewTopKeyword] | None = Field(
        default=None,
        description="The domain's top organic keywords with position, volume, and value. Populated whenever the provider returns data.",
    )
    totalTraffic: int | None = Field(
        default=None,
        description="Estimated total monthly traffic across organic and paid.",
    )


class SemrushOverviewTopKeyword(BaseModel):
    model_config = ConfigDict(extra="allow")

    cpcUsd: float | None = Field(
        default=None, description="Average cost per click in USD."
    )
    intents: list[str] | None = Field(
        default=None, description="Search intents associated with the keyword."
    )
    keyword: str = Field(description="The organic keyword.")
    keywordDifficulty: int | None = Field(
        default=None, description="Semrush Keyword Difficulty, 0-100."
    )
    position: int | None = Field(
        default=None, description="Current SERP position for this keyword."
    )
    searchVolume: int | None = Field(
        default=None, description="Monthly search volume for this keyword."
    )
    traffic: int | None = Field(
        default=None,
        description="Estimated monthly traffic this keyword drives to the domain.",
    )
    url: str | None = Field(default=None, description="The ranking URL on the domain.")


class SemrushNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SemrushKeywordsInput],
    ) -> RunResult[SemrushKeywordsData]:
        """Semrush Keyword Research

        Semrush keyword research for any term: monthly search volume, CPC,
        competition, keyword difficulty, plus related keywords and question
        keywords. Transparent per-request USD pricing.

        Price: $0.015 per result.

        Example:
            res = client.semrush.keywords(database="us", keyword="best running shoes")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "semrush.keywords", dict(input), options
        )
        return RunResult[SemrushKeywordsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SemrushOverviewInput],
    ) -> RunResult[SemrushOverviewData]:
        """Semrush Domain Overview

        a Semrush SEO overview for any domain: Authority Score, organic and paid
        traffic, keyword and backlink counts, top country, and the domain's top
        organic keywords. Transparent per-request USD pricing.

        Price: $0.015 per result.

        Example:
            res = client.semrush.overview(database="us", domain="ahrefs.com")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "semrush.overview", dict(input), options
        )
        return RunResult[SemrushOverviewData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncSemrushNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SemrushKeywordsInput],
    ) -> RunResult[SemrushKeywordsData]:
        """Semrush Keyword Research

        Semrush keyword research for any term: monthly search volume, CPC,
        competition, keyword difficulty, plus related keywords and question
        keywords. Transparent per-request USD pricing.

        Price: $0.015 per result.

        Example:
            res = client.semrush.keywords(database="us", keyword="best running shoes")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "semrush.keywords", dict(input), options
        )
        return RunResult[SemrushKeywordsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SemrushOverviewInput],
    ) -> RunResult[SemrushOverviewData]:
        """Semrush Domain Overview

        a Semrush SEO overview for any domain: Authority Score, organic and paid
        traffic, keyword and backlink counts, top country, and the domain's top
        organic keywords. Transparent per-request USD pricing.

        Price: $0.015 per result.

        Example:
            res = client.semrush.overview(database="us", domain="ahrefs.com")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "semrush.overview", dict(input), options
        )
        return RunResult[SemrushOverviewData].model_validate(
            raw.model_dump(by_alias=True)
        )
