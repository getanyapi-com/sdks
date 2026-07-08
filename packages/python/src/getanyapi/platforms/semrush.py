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
        description="Keyword-research records: search volume, CPC, competition, keyword difficulty, plus related keywords and question keywords for the researched term. Populated whenever the provider has data for the entity."
    )


class SemrushKeywordsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    competition: float | None = Field(
        default=None, description="Paid-search competition density, 0 to 1."
    )
    cpc_usd: float | None = Field(
        default=None, alias="cpcUsd", description="Average cost per click in USD."
    )
    database: str | None = Field(
        default=None,
        description="Two-letter Semrush regional database the metrics are scoped to.",
    )
    intents: list[str] | None = Field(
        default=None,
        description="Search-intent labels for the keyword (e.g. commercial, informational). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    keyword: str = Field(
        description="The researched search term. Populated whenever the provider has data for the entity."
    )
    keyword_difficulty: int | None = Field(
        default=None,
        alias="keywordDifficulty",
        description="Semrush Keyword Difficulty, 0 to 100.",
    )
    organic_results_count: int | None = Field(
        default=None,
        alias="organicResultsCount",
        description="Number of organic results Google returns for the keyword.",
    )
    questions: list[SemrushKeywordsQuestion] | None = Field(
        default=None,
        description="Question-phrased keyword variations with their own volume and difficulty. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    referring_domains_median: int | None = Field(
        default=None,
        alias="referringDomainsMedian",
        description="Median number of referring domains across the ranking pages.",
    )
    related_keywords: list[SemrushKeywordsRelatedKeyword] | None = Field(
        default=None,
        alias="relatedKeywords",
        description="Related keyword suggestions with their own volume and difficulty. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    search_volume: int | None = Field(
        default=None,
        alias="searchVolume",
        description="Average monthly search volume in the selected database.",
    )


class SemrushKeywordsQuestion(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    keyword: str = Field(description="The question keyword.")
    keyword_difficulty: int | None = Field(
        default=None,
        alias="keywordDifficulty",
        description="Semrush Keyword Difficulty for the question keyword, 0 to 100.",
    )
    search_volume: int | None = Field(
        default=None,
        alias="searchVolume",
        description="Average monthly search volume for the question keyword.",
    )


class SemrushKeywordsRelatedKeyword(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    keyword: str = Field(description="The related keyword.")
    keyword_difficulty: int | None = Field(
        default=None,
        alias="keywordDifficulty",
        description="Semrush Keyword Difficulty for the related keyword, 0 to 100.",
    )
    search_volume: int | None = Field(
        default=None,
        alias="searchVolume",
        description="Average monthly search volume for the related keyword.",
    )


class SemrushOverviewData(BaseModel):
    items: list[SemrushOverviewItem] = Field(
        description="Domain overview records: Authority Score, organic and paid traffic, keyword and backlink counts, top country, and the domain's top organic keywords. Populated whenever the provider has data for the entity."
    )


class SemrushOverviewItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    ai_visibility: int | None = Field(
        default=None,
        alias="aiVisibility",
        description="Semrush AI visibility metric for the domain.",
    )
    authority_score: int | None = Field(
        default=None,
        alias="authorityScore",
        description="Semrush Authority Score, 0-100.",
    )
    backlinks: int | None = Field(
        default=None, description="Total number of backlinks pointing at the domain."
    )
    database: str | None = Field(
        default=None,
        description="Two-letter Semrush regional database the metrics are scoped to.",
    )
    domain: str = Field(
        description="The analyzed domain. Populated whenever the provider has data for the entity."
    )
    follow_backlinks: int | None = Field(
        default=None,
        alias="followBacklinks",
        description="Number of dofollow backlinks.",
    )
    moz_domain_authority: int | None = Field(
        default=None,
        alias="mozDomainAuthority",
        description="Moz Domain Authority, 0-100 (only when includeMoz is true).",
    )
    moz_spam_score: str | None = Field(
        default=None,
        alias="mozSpamScore",
        description="Moz Spam Score as a percentage string (only when includeMoz is true).",
    )
    nofollow_backlinks: int | None = Field(
        default=None,
        alias="nofollowBacklinks",
        description="Number of nofollow backlinks.",
    )
    organic_keywords: int | None = Field(
        default=None,
        alias="organicKeywords",
        description="Number of keywords the domain ranks for organically.",
    )
    organic_traffic: int | None = Field(
        default=None,
        alias="organicTraffic",
        description="Estimated monthly organic search traffic.",
    )
    organic_traffic_cost_usd: float | None = Field(
        default=None,
        alias="organicTrafficCostUsd",
        description="Estimated USD value of the organic traffic.",
    )
    paid_keywords: int | None = Field(
        default=None,
        alias="paidKeywords",
        description="Number of keywords the domain bids on.",
    )
    paid_traffic: int | None = Field(
        default=None,
        alias="paidTraffic",
        description="Estimated monthly paid search traffic.",
    )
    paid_traffic_cost_usd: float | None = Field(
        default=None,
        alias="paidTrafficCostUsd",
        description="Estimated USD value of the paid traffic.",
    )
    referring_domains: int | None = Field(
        default=None,
        alias="referringDomains",
        description="Number of unique domains linking to the domain.",
    )
    top_country: str | None = Field(
        default=None,
        alias="topCountry",
        description="Two-letter code of the country sending the most traffic.",
    )
    top_country_traffic: int | None = Field(
        default=None,
        alias="topCountryTraffic",
        description="Estimated monthly traffic from the top country.",
    )
    top_keywords: list[SemrushOverviewTopKeyword] | None = Field(
        default=None,
        alias="topKeywords",
        description="The domain's top organic keywords with position, volume, and value. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    total_traffic: int | None = Field(
        default=None,
        alias="totalTraffic",
        description="Estimated total monthly traffic across organic and paid.",
    )


class SemrushOverviewTopKeyword(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    cpc_usd: float | None = Field(
        default=None, alias="cpcUsd", description="Average cost per click in USD."
    )
    intents: list[str] | None = Field(
        default=None, description="Search intents associated with the keyword."
    )
    keyword: str = Field(description="The organic keyword.")
    keyword_difficulty: int | None = Field(
        default=None,
        alias="keywordDifficulty",
        description="Semrush Keyword Difficulty, 0-100.",
    )
    position: int | None = Field(
        default=None, description="Current SERP position for this keyword."
    )
    search_volume: int | None = Field(
        default=None,
        alias="searchVolume",
        description="Monthly search volume for this keyword.",
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
        keywords. **Price:** billed per result - $0.00 per 1,000 requests base +
        $15.00 per 1,000 results, capped at $15.00 per 1,000 requests.

        Price: $0.015 per result.

        Example:
            res = client.semrush.keywords(database="us", keyword="best running shoes")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "semrush.keywords", dict(input), options
        )
        return RunResult[SemrushKeywordsData].model_validate(raw)

    def overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SemrushOverviewInput],
    ) -> RunResult[SemrushOverviewData]:
        """Semrush Domain Overview

        a Semrush SEO overview for any domain: Authority Score, organic and paid
        traffic, keyword and backlink counts, top country, and the domain's top
        organic keywords. **Price:** billed per result - $0.00 per 1,000 requests
        base + $15.00 per 1,000 results, capped at $15.00 per 1,000 requests.

        Price: $0.015 per result.

        Example:
            res = client.semrush.overview(database="us", domain="ahrefs.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "semrush.overview", dict(input), options
        )
        return RunResult[SemrushOverviewData].model_validate(raw)


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
        keywords. **Price:** billed per result - $0.00 per 1,000 requests base +
        $15.00 per 1,000 results, capped at $15.00 per 1,000 requests.

        Price: $0.015 per result.

        Example:
            res = client.semrush.keywords(database="us", keyword="best running shoes")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "semrush.keywords", dict(input), options
        )
        return RunResult[SemrushKeywordsData].model_validate(raw)

    async def overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SemrushOverviewInput],
    ) -> RunResult[SemrushOverviewData]:
        """Semrush Domain Overview

        a Semrush SEO overview for any domain: Authority Score, organic and paid
        traffic, keyword and backlink counts, top country, and the domain's top
        organic keywords. **Price:** billed per result - $0.00 per 1,000 requests
        base + $15.00 per 1,000 results, capped at $15.00 per 1,000 requests.

        Price: $0.015 per result.

        Example:
            res = client.semrush.overview(database="us", domain="ahrefs.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "semrush.overview", dict(input), options
        )
        return RunResult[SemrushOverviewData].model_validate(raw)
