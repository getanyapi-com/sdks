# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the seo platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class SeoCompetitorsDomainInput(TypedDict, total=False):
    """Input for SEO Competitor Domains."""

    language: NotRequired[str]
    """Language code for SEO competitor metrics. Default: en."""
    limit: NotRequired[int]
    """Maximum number of competitor domains to return. You are billed per returned result, so a lower limit costs less. Range: 1 to 1000. Default: 10."""
    location: NotRequired[int]
    """Location code for SEO competitor metrics. The default is the United States. Default: 2840."""
    target: Required[str]
    """Domain to analyze, without a protocol or leading www."""


class SeoDomainIntersectionInput(TypedDict, total=False):
    """Input for SEO Domain Intersection."""

    language: NotRequired[str]
    """Language code for SEO overlap metrics. Default: en."""
    limit: NotRequired[int]
    """Maximum number of overlapping keywords to return. You are billed per returned result, so a lower limit costs less. Range: 1 to 1000. Default: 10."""
    location: NotRequired[int]
    """Location code for SEO overlap metrics. The default is the United States. Default: 2840."""
    target1: Required[str]
    """First domain to compare, without a protocol or leading www."""
    target2: Required[str]
    """Second domain to compare, without a protocol or leading www."""


class SeoDomainRankOverviewInput(TypedDict, total=False):
    """Input for SEO Domain Rank Overview."""

    language: NotRequired[str]
    """Language code for SEO domain metrics. Default: en."""
    location: NotRequired[int]
    """Location code for SEO domain metrics. The default is the United States. Default: 2840."""
    target: Required[str]
    """Domain to analyze, without a protocol or leading www."""


class SeoKeywordDifficultyInput(TypedDict, total=False):
    """Input for SEO Keyword Difficulty."""

    keywords: Required[list[str]]
    """SEO keywords to score for organic ranking difficulty."""
    language: NotRequired[str]
    """Language code for SEO keyword difficulty metrics. Default: en."""
    location: NotRequired[int]
    """Location code for SEO keyword difficulty metrics. The default is the United States. Default: 2840."""


class SeoKeywordIdeasInput(TypedDict, total=False):
    """Input for SEO Keyword Ideas."""

    keywords: Required[list[str]]
    """Seed SEO keywords used to generate related keyword ideas."""
    language: NotRequired[str]
    """Language code for SEO metrics. Default: en."""
    limit: NotRequired[int]
    """Maximum number of keyword ideas to return. You are billed per returned result, so a lower limit costs less. Range: 1 to 1000. Default: 5."""
    location: NotRequired[int]
    """Location code for SEO metrics. The default is the United States. Default: 2840."""


class SeoKeywordOverviewInput(TypedDict, total=False):
    """Input for SEO Keyword Overview."""

    keywords: Required[list[str]]
    """SEO keywords to analyze."""
    language: NotRequired[str]
    """Language code for SEO metrics. Default: en."""
    location: NotRequired[int]
    """Location code for SEO metrics. The default is the United States. Default: 2840."""


class SeoKeywordSuggestionsInput(TypedDict, total=False):
    """Input for SEO Keyword Suggestions."""

    keyword: Required[str]
    """Seed SEO keyword used to generate keyword suggestions."""
    language: NotRequired[str]
    """Language code for SEO metrics. Default: en."""
    limit: NotRequired[int]
    """Maximum number of keyword suggestions to return. You are billed per returned result, so a lower limit costs less. Range: 1 to 1000. Default: 5."""
    location: NotRequired[int]
    """Location code for SEO metrics. The default is the United States. Default: 2840."""


class SeoLocalPackInput(TypedDict, total=False):
    """Input for SEO Local Pack."""

    keyword: Required[str]
    """SEO local pack search keyword."""
    language: NotRequired[str]
    """Language code for SEO local pack results. Default: en."""
    limit: NotRequired[int]
    """Maximum number of local pack places to return. Billing is flat per request. Range: 1 to 100. Default: 20."""
    location: Required[str]
    """Local pack search location name, formatted like City,Region,Country; for example, New York,New York,United States."""


class SeoRankedKeywordsInput(TypedDict, total=False):
    """Input for SEO Ranked Keywords."""

    language: NotRequired[str]
    """Language code for SEO ranking metrics. Default: en."""
    limit: NotRequired[int]
    """Maximum number of ranked keywords to return. You are billed per returned result, so a lower limit costs less. Range: 1 to 1000. Default: 10."""
    location: NotRequired[int]
    """Location code for SEO ranking metrics. The default is the United States. Default: 2840."""
    target: Required[str]
    """Domain to analyze, without a protocol or leading www."""


class SeoRelatedKeywordsInput(TypedDict, total=False):
    """Input for SEO Related Keywords."""

    keyword: Required[str]
    """Seed SEO keyword used to find related keywords."""
    language: NotRequired[str]
    """Language code for SEO metrics. Default: en."""
    limit: NotRequired[int]
    """Maximum number of related keywords to return. You are billed per returned result, so a lower limit costs less. Range: 1 to 1000. Default: 5."""
    location: NotRequired[int]
    """Location code for SEO metrics. The default is the United States. Default: 2840."""


class SeoSearchIntentInput(TypedDict, total=False):
    """Input for SEO Search Intent."""

    keywords: Required[list[str]]
    """SEO keywords to classify by search intent."""
    language: NotRequired[str]
    """Language code for search intent classification. Default: en."""


class SeoSearchVolumeInput(TypedDict, total=False):
    """Input for SEO Search Volume."""

    keywords: Required[list[str]]
    """SEO keyword phrases to retrieve search-volume metrics for."""
    language: NotRequired[str]
    """Language code for SEO search-volume metrics. Default: en."""
    location: NotRequired[int]
    """Location code for SEO search-volume metrics. The default is the United States. Default: 2840."""


class SeoCompetitorsDomainData(BaseModel):
    competitors: list[SeoCompetitorsDomainCompetitor] = Field(
        description="SEO competitor domain records."
    )


class SeoCompetitorsDomainCompetitor(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avg_position: float | None = Field(
        default=None,
        alias="avgPosition",
        description="Average ranking position across shared keywords.",
    )
    domain: str = Field(description="Competing domain.")
    intersections: int = Field(
        description="Number of keywords shared with the target domain."
    )
    organic_etv: float | None = Field(
        default=None,
        alias="organicEtv",
        description="Estimated monthly organic search traffic for the competitor domain.",
    )
    organic_keywords: int | None = Field(
        default=None,
        alias="organicKeywords",
        description="Number of organic search results where the competitor domain appears.",
    )
    sum_position: int | None = Field(
        default=None,
        alias="sumPosition",
        description="Sum of ranking positions across shared keywords.",
    )


class SeoDomainIntersectionData(BaseModel):
    keywords: list[SeoDomainIntersectionKeyword] = Field(
        description="SEO keyword records both domains rank for."
    )


class SeoDomainIntersectionKeyword(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    cpc: float | None = Field(
        default=None, description="Average paid-search cost per click in USD."
    )
    first_rank: int = Field(
        alias="firstRank",
        description="Absolute organic ranking position for the first domain.",
    )
    first_url: str | None = Field(
        default=None, alias="firstUrl", description="Ranking URL for the first domain."
    )
    keyword: str = Field(description="Keyword phrase both domains rank for.")
    keyword_difficulty: int | None = Field(
        default=None,
        alias="keywordDifficulty",
        description="Estimated organic ranking difficulty on a 0-100 scale.",
    )
    search_volume: int | None = Field(
        default=None,
        alias="searchVolume",
        description="Average monthly search volume for the keyword.",
    )
    second_rank: int = Field(
        alias="secondRank",
        description="Absolute organic ranking position for the second domain.",
    )
    second_url: str | None = Field(
        default=None,
        alias="secondUrl",
        description="Ranking URL for the second domain.",
    )
    updated_utc: float | None = Field(
        default=None,
        alias="updatedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )


class SeoDomainRankOverviewData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    domain: str = Field(description="Analyzed domain.")
    language: str | None = Field(
        default=None, description="Language code the metrics are scoped to."
    )
    location: int | None = Field(
        default=None, description="Location code the metrics are scoped to."
    )
    organic_keywords: int | None = Field(
        default=None,
        alias="organicKeywords",
        description="Number of organic search results where the domain appears.",
    )
    organic_pos1: int | None = Field(
        default=None,
        alias="organicPos1",
        description="Number of organic search results where the domain ranks first.",
    )
    organic_pos2_to3: int | None = Field(
        default=None,
        alias="organicPos2To3",
        description="Number of organic search results where the domain ranks second or third.",
    )
    organic_pos4_to10: int | None = Field(
        default=None,
        alias="organicPos4To10",
        description="Number of organic search results where the domain ranks fourth through tenth.",
    )
    organic_traffic: float | None = Field(
        default=None,
        alias="organicTraffic",
        description="Estimated monthly organic search traffic.",
    )
    organic_traffic_cost_usd: float | None = Field(
        default=None,
        alias="organicTrafficCostUsd",
        description="Estimated USD value of the organic search traffic.",
    )
    paid_keywords: int | None = Field(
        default=None,
        alias="paidKeywords",
        description="Number of paid search results where the domain appears.",
    )
    paid_pos1: int | None = Field(
        default=None,
        alias="paidPos1",
        description="Number of paid search results where the domain ranks first.",
    )
    paid_pos2_to3: int | None = Field(
        default=None,
        alias="paidPos2To3",
        description="Number of paid search results where the domain ranks second or third.",
    )
    paid_pos4_to10: int | None = Field(
        default=None,
        alias="paidPos4To10",
        description="Number of paid search results where the domain ranks fourth through tenth.",
    )
    paid_traffic: float | None = Field(
        default=None,
        alias="paidTraffic",
        description="Estimated monthly paid search traffic.",
    )
    paid_traffic_cost_usd: float | None = Field(
        default=None,
        alias="paidTrafficCostUsd",
        description="Estimated USD value of the paid search traffic.",
    )


class SeoKeywordDifficultyData(BaseModel):
    difficulties: list[SeoKeywordDifficultyDifficultie] = Field(
        description="SEO keyword difficulty records."
    )


class SeoKeywordDifficultyDifficultie(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    keyword: str = Field(description="Keyword phrase.")
    keyword_difficulty: int | None = Field(
        default=None,
        alias="keywordDifficulty",
        description="Estimated organic ranking difficulty on a 0-100 scale. Unknown keywords may return 0.",
    )


class SeoKeywordIdeasData(BaseModel):
    ideas: list[SeoKeywordIdeasIdea] = Field(description="SEO keyword idea records.")


class SeoKeywordIdeasIdea(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    competition: str | None = Field(
        default=None, description="Paid-search competition level for the keyword idea."
    )
    cpc: float | None = Field(
        default=None, description="Average paid-search cost per click in USD."
    )
    keyword: str = Field(description="Keyword idea phrase.")
    keyword_difficulty: int | None = Field(
        default=None,
        alias="keywordDifficulty",
        description="Estimated organic ranking difficulty on a 0-100 scale.",
    )
    search_intent: str | None = Field(
        default=None,
        alias="searchIntent",
        description="Primary SEO search intent for the keyword idea.",
    )
    search_volume: int | None = Field(
        default=None,
        alias="searchVolume",
        description="Average monthly search volume for the keyword idea.",
    )
    updated_utc: float | None = Field(
        default=None,
        alias="updatedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )


class SeoKeywordOverviewData(BaseModel):
    keywords: list[SeoKeywordOverviewKeyword] = Field(
        description="SEO keyword metric records."
    )


class SeoKeywordOverviewKeyword(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    bid_high: float | None = Field(
        default=None,
        alias="bidHigh",
        description="Upper bound of the estimated paid-search top-of-page bid in USD.",
    )
    bid_low: float | None = Field(
        default=None,
        alias="bidLow",
        description="Lower bound of the estimated paid-search top-of-page bid in USD.",
    )
    competition: str | None = Field(
        default=None, description="Paid-search competition level for the keyword."
    )
    cpc: float | None = Field(
        default=None, description="Average paid-search cost per click in USD."
    )
    keyword: str = Field(description="Keyword phrase.")
    keyword_difficulty: int | None = Field(
        default=None,
        alias="keywordDifficulty",
        description="Estimated organic ranking difficulty on a 0-100 scale.",
    )
    monthly_searches: list[SeoKeywordOverviewMonthlySearche] | None = Field(
        default=None,
        alias="monthlySearches",
        description="Monthly search-volume history for the keyword.",
    )
    search_intent: str | None = Field(
        default=None,
        alias="searchIntent",
        description="Primary SEO search intent for the keyword.",
    )
    search_volume: int | None = Field(
        default=None,
        alias="searchVolume",
        description="Average monthly search volume for the keyword. Present whenever the upstream returns this record.",
    )
    updated_utc: float | None = Field(
        default=None,
        alias="updatedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )


class SeoKeywordOverviewMonthlySearche(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    month: int | None = Field(
        default=None,
        description="Calendar month number for the monthly search-volume record.",
    )
    search_volume: int | None = Field(
        default=None, alias="searchVolume", description="Search volume for the month."
    )
    year: int | None = Field(
        default=None, description="Calendar year for the monthly search-volume record."
    )


class SeoKeywordSuggestionsData(BaseModel):
    suggestions: list[SeoKeywordSuggestionsSuggestion] = Field(
        description="SEO keyword suggestion records."
    )


class SeoKeywordSuggestionsSuggestion(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    competition: str | None = Field(
        default=None,
        description="Paid-search competition level for the keyword suggestion.",
    )
    cpc: float | None = Field(
        default=None, description="Average paid-search cost per click in USD."
    )
    keyword: str = Field(description="Keyword suggestion phrase.")
    keyword_difficulty: int | None = Field(
        default=None,
        alias="keywordDifficulty",
        description="Estimated organic ranking difficulty on a 0-100 scale.",
    )
    search_intent: str | None = Field(
        default=None,
        alias="searchIntent",
        description="Primary SEO search intent for the keyword suggestion.",
    )
    search_volume: int | None = Field(
        default=None,
        alias="searchVolume",
        description="Average monthly search volume for the keyword suggestion.",
    )
    updated_utc: float | None = Field(
        default=None,
        alias="updatedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )


class SeoLocalPackData(BaseModel):
    places: list[SeoLocalPackPlace] = Field(description="SEO local pack place records.")


class SeoLocalPackPlace(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address: str | None = Field(
        default=None, description="Full formatted street address."
    )
    category: str | None = Field(default=None, description="Primary place category.")
    claimed: bool | None = Field(
        default=None, description="True when the place listing is claimed."
    )
    latitude: float | None = Field(
        default=None, description="Latitude of the place in decimal degrees."
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the place in decimal degrees."
    )
    name: str = Field(description="Place name.")
    phone: str | None = Field(
        default=None, description="Business phone number, when listed."
    )
    place_id: str | None = Field(
        default=None, alias="placeId", description="Place identifier."
    )
    rank_absolute: int = Field(
        alias="rankAbsolute",
        description="Absolute ranking position in the local pack results.",
    )
    rating: float | None = Field(
        default=None, description="Average star rating out of 5."
    )
    reviews_count: int | None = Field(
        default=None, alias="reviewsCount", description="Total number of reviews."
    )
    url: str | None = Field(default=None, description="Canonical place URL.")


class SeoRankedKeywordsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    ranked_keywords: list[SeoRankedKeywordsRankedKeyword] = Field(
        alias="rankedKeywords", description="SEO ranked keyword records for the domain."
    )


class SeoRankedKeywordsRankedKeyword(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    cpc: float | None = Field(
        default=None, description="Average paid-search cost per click in USD."
    )
    etv: float | None = Field(
        default=None,
        description="Estimated organic search traffic for the ranking URL.",
    )
    keyword: str = Field(description="Keyword phrase the domain ranks for.")
    keyword_difficulty: int | None = Field(
        default=None,
        alias="keywordDifficulty",
        description="Estimated organic ranking difficulty on a 0-100 scale.",
    )
    rank_absolute: int = Field(
        alias="rankAbsolute",
        description="Absolute organic ranking position for the keyword.",
    )
    rank_group: int | None = Field(
        default=None,
        alias="rankGroup",
        description="Grouped organic ranking position for the keyword.",
    )
    search_intent: str | None = Field(
        default=None,
        alias="searchIntent",
        description="Primary SEO search intent for the keyword.",
    )
    search_volume: int | None = Field(
        default=None,
        alias="searchVolume",
        description="Average monthly search volume for the keyword.",
    )
    updated_utc: float | None = Field(
        default=None,
        alias="updatedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    url: str | None = Field(default=None, description="Ranking URL for the domain.")


class SeoRelatedKeywordsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    related_keywords: list[SeoRelatedKeywordsRelatedKeyword] = Field(
        alias="relatedKeywords", description="SEO related keyword records."
    )


class SeoRelatedKeywordsRelatedKeyword(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    competition: str | None = Field(
        default=None,
        description="Paid-search competition level for the related keyword.",
    )
    cpc: float | None = Field(
        default=None, description="Average paid-search cost per click in USD."
    )
    depth: int | None = Field(
        default=None,
        description="Related-keyword graph depth from the seed keyword. Present whenever the upstream returns this record.",
    )
    keyword: str = Field(description="Related keyword phrase.")
    keyword_difficulty: int | None = Field(
        default=None,
        alias="keywordDifficulty",
        description="Estimated organic ranking difficulty on a 0-100 scale.",
    )
    search_intent: str | None = Field(
        default=None,
        alias="searchIntent",
        description="Primary SEO search intent for the related keyword.",
    )
    search_volume: int | None = Field(
        default=None,
        alias="searchVolume",
        description="Average monthly search volume for the related keyword.",
    )
    updated_utc: float | None = Field(
        default=None,
        alias="updatedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )


class SeoSearchIntentData(BaseModel):
    intents: list[SeoSearchIntentIntent] = Field(
        description="SEO keyword search intent records."
    )


class SeoSearchIntentIntent(BaseModel):
    model_config = ConfigDict(extra="allow")

    intent: str = Field(description="Primary SEO search intent for the keyword.")
    keyword: str = Field(description="Keyword phrase.")


class SeoSearchVolumeData(BaseModel):
    keywords: list[SeoSearchVolumeKeyword] = Field(
        description="SEO keyword search-volume records."
    )


class SeoSearchVolumeKeyword(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    bid_high: float | None = Field(
        default=None,
        alias="bidHigh",
        description="Upper bound of the estimated paid-search top-of-page bid in USD.",
    )
    bid_low: float | None = Field(
        default=None,
        alias="bidLow",
        description="Lower bound of the estimated paid-search top-of-page bid in USD.",
    )
    competition: str | None = Field(
        default=None, description="Paid-search competition level for the keyword."
    )
    competition_index: int | None = Field(
        default=None,
        alias="competitionIndex",
        description="Paid-search competition index for the keyword.",
    )
    cpc: float | None = Field(
        default=None, description="Average paid-search cost per click in USD."
    )
    keyword: str = Field(description="Keyword phrase.")
    monthly_searches: list[SeoSearchVolumeMonthlySearche] | None = Field(
        default=None,
        alias="monthlySearches",
        description="Monthly search-volume history for the keyword.",
    )
    search_volume: int | None = Field(
        default=None,
        alias="searchVolume",
        description="Average monthly search volume for the keyword. Present whenever the upstream returns this record.",
    )


class SeoSearchVolumeMonthlySearche(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    month: int | None = Field(
        default=None,
        description="Calendar month number for the monthly search-volume record.",
    )
    search_volume: int | None = Field(
        default=None, alias="searchVolume", description="Search volume for the month."
    )
    year: int | None = Field(
        default=None, description="Calendar year for the monthly search-volume record."
    )


class SeoNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def competitors_domain(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoCompetitorsDomainInput],
    ) -> RunResult[SeoCompetitorsDomainData]:
        """SEO Competitor Domains

        Get AnyAPI SEO competitor domains for a target domain with shared keyword
        counts and organic metrics as normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per result.

        Example:
            res = client.seo.competitors_domain(language="en", limit=10, location=2840, target="github.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.competitors_domain", dict(input), options
        )
        return RunResult[SeoCompetitorsDomainData].model_validate(raw)

    def domain_intersection(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoDomainIntersectionInput],
    ) -> RunResult[SeoDomainIntersectionData]:
        """SEO Domain Intersection

        Get AnyAPI SEO keyword overlap for two domains with each domain's rankings,
        URLs, volume, CPC, and difficulty as normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per result.

        Example:
            res = client.seo.domain_intersection(language="en", limit=10, location=2840, target1="github.com", target2="gitlab.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.domain_intersection", dict(input), options
        )
        return RunResult[SeoDomainIntersectionData].model_validate(raw)

    def domain_rank_overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoDomainRankOverviewInput],
    ) -> RunResult[SeoDomainRankOverviewData]:
        """SEO Domain Rank Overview

        Get AnyAPI SEO domain ranking, organic traffic, and paid traffic metrics as
        normalized JSON with USD pricing.

        Price: $0.0156 per request.

        Example:
            res = client.seo.domain_rank_overview(language="en", location=2840, target="ahrefs.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.domain_rank_overview", dict(input), options
        )
        return RunResult[SeoDomainRankOverviewData].model_validate(raw)

    def keyword_difficulty(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordDifficultyInput],
    ) -> RunResult[SeoKeywordDifficultyData]:
        """SEO Keyword Difficulty

        Get AnyAPI SEO keyword difficulty scores for one or more keywords as
        normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per keyword.

        Example:
            res = client.seo.keyword_difficulty(keywords=["seo tools"], language="en", location=2840)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_difficulty", dict(input), options
        )
        return RunResult[SeoKeywordDifficultyData].model_validate(raw)

    def keyword_ideas(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordIdeasInput],
    ) -> RunResult[SeoKeywordIdeasData]:
        """SEO Keyword Ideas

        Find AnyAPI SEO keyword ideas from seed terms with volume, CPC, competition,
        difficulty, and intent as normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per result.

        Example:
            res = client.seo.keyword_ideas(keywords=["seo tools"], language="en", limit=5, location=2840)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_ideas", dict(input), options
        )
        return RunResult[SeoKeywordIdeasData].model_validate(raw)

    def keyword_overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordOverviewInput],
    ) -> RunResult[SeoKeywordOverviewData]:
        """SEO Keyword Overview

        Get AnyAPI SEO keyword metrics including search volume, CPC, competition,
        difficulty, and search intent as normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per keyword.

        Example:
            res = client.seo.keyword_overview(keywords=["seo tools"], language="en", location=2840)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_overview", dict(input), options
        )
        return RunResult[SeoKeywordOverviewData].model_validate(raw)

    def keyword_suggestions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordSuggestionsInput],
    ) -> RunResult[SeoKeywordSuggestionsData]:
        """SEO Keyword Suggestions

        Find AnyAPI SEO keyword suggestions from a seed term with volume, CPC,
        competition, difficulty, and intent as normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per result.

        Example:
            res = client.seo.keyword_suggestions(keyword="seo tools", language="en", limit=5, location=2840)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_suggestions", dict(input), options
        )
        return RunResult[SeoKeywordSuggestionsData].model_validate(raw)

    def local_pack(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoLocalPackInput],
    ) -> RunResult[SeoLocalPackData]:
        """SEO Local Pack

        Search AnyAPI SEO local pack results with rankings, ratings, addresses, and
        contact basics as normalized JSON with USD pricing.

        Price: $0.0026 per request.

        Example:
            res = client.seo.local_pack(keyword="coffee shop", language="en", limit=5, location="New York,New York,United States")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.local_pack", dict(input), options
        )
        return RunResult[SeoLocalPackData].model_validate(raw)

    def ranked_keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoRankedKeywordsInput],
    ) -> RunResult[SeoRankedKeywordsData]:
        """SEO Ranked Keywords

        Get AnyAPI SEO ranked keywords for a domain with rankings, traffic
        estimates, volume, CPC, difficulty, and intent as normalized JSON with USD
        pricing.

        Price: $0.0156 per request plus $0.00016 per result.

        Example:
            res = client.seo.ranked_keywords(language="en", limit=10, location=2840, target="github.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.ranked_keywords", dict(input), options
        )
        return RunResult[SeoRankedKeywordsData].model_validate(raw)

    def related_keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoRelatedKeywordsInput],
    ) -> RunResult[SeoRelatedKeywordsData]:
        """SEO Related Keywords

        Find AnyAPI SEO related keywords from a seed term with volume, CPC,
        competition, difficulty, and intent as normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per result.

        Example:
            res = client.seo.related_keywords(keyword="seo tools", language="en", limit=5, location=2840)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.related_keywords", dict(input), options
        )
        return RunResult[SeoRelatedKeywordsData].model_validate(raw)

    def search_intent(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoSearchIntentInput],
    ) -> RunResult[SeoSearchIntentData]:
        """SEO Search Intent

        Classify AnyAPI SEO keyword search intent as normalized JSON with USD
        pricing.

        Price: $0.0156 per request plus $0.00016 per keyword.

        Example:
            res = client.seo.search_intent(keywords=["seo tools"], language="en")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.search_intent", dict(input), options
        )
        return RunResult[SeoSearchIntentData].model_validate(raw)

    def search_volume(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoSearchVolumeInput],
    ) -> RunResult[SeoSearchVolumeData]:
        """SEO Search Volume

        Get AnyAPI SEO keyword search volume, CPC, competition, bid estimates, and
        monthly history as normalized JSON with USD pricing.

        Price: $0.117 per request.

        Example:
            res = client.seo.search_volume(keywords=["seo tools"], language="en", location=2840)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.search_volume", dict(input), options
        )
        return RunResult[SeoSearchVolumeData].model_validate(raw)


class AsyncSeoNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def competitors_domain(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoCompetitorsDomainInput],
    ) -> RunResult[SeoCompetitorsDomainData]:
        """SEO Competitor Domains

        Get AnyAPI SEO competitor domains for a target domain with shared keyword
        counts and organic metrics as normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per result.

        Example:
            res = client.seo.competitors_domain(language="en", limit=10, location=2840, target="github.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.competitors_domain", dict(input), options
        )
        return RunResult[SeoCompetitorsDomainData].model_validate(raw)

    async def domain_intersection(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoDomainIntersectionInput],
    ) -> RunResult[SeoDomainIntersectionData]:
        """SEO Domain Intersection

        Get AnyAPI SEO keyword overlap for two domains with each domain's rankings,
        URLs, volume, CPC, and difficulty as normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per result.

        Example:
            res = client.seo.domain_intersection(language="en", limit=10, location=2840, target1="github.com", target2="gitlab.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.domain_intersection", dict(input), options
        )
        return RunResult[SeoDomainIntersectionData].model_validate(raw)

    async def domain_rank_overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoDomainRankOverviewInput],
    ) -> RunResult[SeoDomainRankOverviewData]:
        """SEO Domain Rank Overview

        Get AnyAPI SEO domain ranking, organic traffic, and paid traffic metrics as
        normalized JSON with USD pricing.

        Price: $0.0156 per request.

        Example:
            res = client.seo.domain_rank_overview(language="en", location=2840, target="ahrefs.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.domain_rank_overview", dict(input), options
        )
        return RunResult[SeoDomainRankOverviewData].model_validate(raw)

    async def keyword_difficulty(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordDifficultyInput],
    ) -> RunResult[SeoKeywordDifficultyData]:
        """SEO Keyword Difficulty

        Get AnyAPI SEO keyword difficulty scores for one or more keywords as
        normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per keyword.

        Example:
            res = client.seo.keyword_difficulty(keywords=["seo tools"], language="en", location=2840)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_difficulty", dict(input), options
        )
        return RunResult[SeoKeywordDifficultyData].model_validate(raw)

    async def keyword_ideas(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordIdeasInput],
    ) -> RunResult[SeoKeywordIdeasData]:
        """SEO Keyword Ideas

        Find AnyAPI SEO keyword ideas from seed terms with volume, CPC, competition,
        difficulty, and intent as normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per result.

        Example:
            res = client.seo.keyword_ideas(keywords=["seo tools"], language="en", limit=5, location=2840)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_ideas", dict(input), options
        )
        return RunResult[SeoKeywordIdeasData].model_validate(raw)

    async def keyword_overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordOverviewInput],
    ) -> RunResult[SeoKeywordOverviewData]:
        """SEO Keyword Overview

        Get AnyAPI SEO keyword metrics including search volume, CPC, competition,
        difficulty, and search intent as normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per keyword.

        Example:
            res = client.seo.keyword_overview(keywords=["seo tools"], language="en", location=2840)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_overview", dict(input), options
        )
        return RunResult[SeoKeywordOverviewData].model_validate(raw)

    async def keyword_suggestions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordSuggestionsInput],
    ) -> RunResult[SeoKeywordSuggestionsData]:
        """SEO Keyword Suggestions

        Find AnyAPI SEO keyword suggestions from a seed term with volume, CPC,
        competition, difficulty, and intent as normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per result.

        Example:
            res = client.seo.keyword_suggestions(keyword="seo tools", language="en", limit=5, location=2840)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_suggestions", dict(input), options
        )
        return RunResult[SeoKeywordSuggestionsData].model_validate(raw)

    async def local_pack(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoLocalPackInput],
    ) -> RunResult[SeoLocalPackData]:
        """SEO Local Pack

        Search AnyAPI SEO local pack results with rankings, ratings, addresses, and
        contact basics as normalized JSON with USD pricing.

        Price: $0.0026 per request.

        Example:
            res = client.seo.local_pack(keyword="coffee shop", language="en", limit=5, location="New York,New York,United States")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.local_pack", dict(input), options
        )
        return RunResult[SeoLocalPackData].model_validate(raw)

    async def ranked_keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoRankedKeywordsInput],
    ) -> RunResult[SeoRankedKeywordsData]:
        """SEO Ranked Keywords

        Get AnyAPI SEO ranked keywords for a domain with rankings, traffic
        estimates, volume, CPC, difficulty, and intent as normalized JSON with USD
        pricing.

        Price: $0.0156 per request plus $0.00016 per result.

        Example:
            res = client.seo.ranked_keywords(language="en", limit=10, location=2840, target="github.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.ranked_keywords", dict(input), options
        )
        return RunResult[SeoRankedKeywordsData].model_validate(raw)

    async def related_keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoRelatedKeywordsInput],
    ) -> RunResult[SeoRelatedKeywordsData]:
        """SEO Related Keywords

        Find AnyAPI SEO related keywords from a seed term with volume, CPC,
        competition, difficulty, and intent as normalized JSON with USD pricing.

        Price: $0.0156 per request plus $0.00016 per result.

        Example:
            res = client.seo.related_keywords(keyword="seo tools", language="en", limit=5, location=2840)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.related_keywords", dict(input), options
        )
        return RunResult[SeoRelatedKeywordsData].model_validate(raw)

    async def search_intent(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoSearchIntentInput],
    ) -> RunResult[SeoSearchIntentData]:
        """SEO Search Intent

        Classify AnyAPI SEO keyword search intent as normalized JSON with USD
        pricing.

        Price: $0.0156 per request plus $0.00016 per keyword.

        Example:
            res = client.seo.search_intent(keywords=["seo tools"], language="en")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.search_intent", dict(input), options
        )
        return RunResult[SeoSearchIntentData].model_validate(raw)

    async def search_volume(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoSearchVolumeInput],
    ) -> RunResult[SeoSearchVolumeData]:
        """SEO Search Volume

        Get AnyAPI SEO keyword search volume, CPC, competition, bid estimates, and
        monthly history as normalized JSON with USD pricing.

        Price: $0.117 per request.

        Example:
            res = client.seo.search_volume(keywords=["seo tools"], language="en", location=2840)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.search_volume", dict(input), options
        )
        return RunResult[SeoSearchVolumeData].model_validate(raw)
