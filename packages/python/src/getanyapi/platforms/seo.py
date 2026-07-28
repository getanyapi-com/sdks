# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the seo platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    orderBy: NotRequired[
        Literal[
            "intersections_desc",
            "organic_keywords_desc",
            "organic_etv_desc",
            "avg_position_asc",
        ]
    ]
    """Sort order for the returned competitors: by shared keyword count (intersections), organic keyword count, organic traffic value (etv), or average position. Omit for the default order."""
    target: Required[str]
    """Domain to analyze, without a protocol or leading www."""


class SeoDomainIntersectionInput(TypedDict, total=False):
    """Input for SEO Domain Intersection."""

    intersections: NotRequired[bool]
    """When true (the default), return keywords both domains rank for (overlap). When false, return keywords the first domain ranks for that the second domain does NOT (the content-gap query); in that mode secondRank and secondUrl are absent."""
    language: NotRequired[str]
    """Language code for SEO overlap metrics. Default: en."""
    limit: NotRequired[int]
    """Maximum number of keywords to return. You are billed per returned result, so a lower limit costs less. Range: 1 to 1000. Default: 10."""
    location: NotRequired[int]
    """Location code for SEO overlap metrics. The default is the United States. Default: 2840."""
    orderBy: NotRequired[
        Literal[
            "volume_desc", "volume_asc", "cpc_desc", "difficulty_asc", "difficulty_desc"
        ]
    ]
    """Sort order for the returned keywords: by search volume, cost per click, or keyword difficulty, ascending or descending. Omit for the default order."""
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

    closelyVariants: NotRequired[bool]
    """When true, generate only close variants of the seed keywords; when false (the default), generate a broader set of related ideas."""
    keywords: Required[list[str]]
    """Seed SEO keywords used to generate related keyword ideas."""
    language: NotRequired[str]
    """Language code for SEO metrics. Default: en."""
    limit: NotRequired[int]
    """Maximum number of keyword ideas to return. You are billed per returned result, so a lower limit costs less. Range: 1 to 1000. Default: 5."""
    location: NotRequired[int]
    """Location code for SEO metrics. The default is the United States. Default: 2840."""
    orderBy: NotRequired[
        Literal[
            "volume_desc", "volume_asc", "cpc_desc", "difficulty_asc", "difficulty_desc"
        ]
    ]
    """Sort order for the returned ideas: by search volume, cost per click, or keyword difficulty, ascending or descending. Omit for the default order."""


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

    exactMatch: NotRequired[bool]
    """When true, only return suggestions that contain the exact seed phrase; when false (the default), allow reordered and partial-match suggestions."""
    keyword: Required[str]
    """Seed SEO keyword used to generate keyword suggestions."""
    language: NotRequired[str]
    """Language code for SEO metrics. Default: en."""
    limit: NotRequired[int]
    """Maximum number of keyword suggestions to return. You are billed per returned result, so a lower limit costs less. Range: 1 to 1000. Default: 5."""
    location: NotRequired[int]
    """Location code for SEO metrics. The default is the United States. Default: 2840."""
    orderBy: NotRequired[
        Literal[
            "volume_desc", "volume_asc", "cpc_desc", "difficulty_asc", "difficulty_desc"
        ]
    ]
    """Sort order for the returned suggestions: by search volume, cost per click, or keyword difficulty, ascending or descending. Omit for the default order."""


class SeoLocalPackInput(TypedDict, total=False):
    """Input for SEO Local Pack."""

    keyword: Required[str]
    """SEO local pack search keyword."""
    language: NotRequired[str]
    """Language code for SEO local pack results. Default: en."""
    limit: NotRequired[int]
    """Maximum number of local pack places to return. Billing is flat per request. Range: 1 to 100. Default: 20."""
    location: NotRequired[str]
    """Local pack search location name, formatted like City,Region,Country; for example, New York,New York,United States. Supply either location or locationCoordinate, not both."""
    locationCoordinate: NotRequired[str]
    """Precise geo target as latitude,longitude or latitude,longitude,radius (radius in meters); for example, 40.7580,-73.9855 or 40.7580,-73.9855,1000. Supply either location or locationCoordinate, not both."""


class SeoRankedKeywordsInput(TypedDict, total=False):
    """Input for SEO Ranked Keywords."""

    language: NotRequired[str]
    """Language code for SEO ranking metrics. Default: en."""
    limit: NotRequired[int]
    """Maximum number of ranked keywords to return. You are billed per returned result, so a lower limit costs less. Range: 1 to 1000. Default: 10."""
    location: NotRequired[int]
    """Location code for SEO ranking metrics. The default is the United States. Default: 2840."""
    orderBy: NotRequired[
        Literal["position_asc", "position_desc", "volume_desc", "etv_desc"]
    ]
    """Sort order for the returned ranked keywords: by SERP position (ascending for best rankings first), search volume, or estimated traffic value (etv). Omit for the default order."""
    target: Required[str]
    """Domain to analyze, without a protocol or leading www."""


class SeoRelatedKeywordsInput(TypedDict, total=False):
    """Input for SEO Related Keywords."""

    depth: NotRequired[int]
    """Depth of the related-keyword expansion (0-4). Higher depth explores a broader keyword tree; the number of returned results, and therefore the price, is still capped by limit. Range: 0 to 4."""
    keyword: Required[str]
    """Seed SEO keyword used to find related keywords."""
    language: NotRequired[str]
    """Language code for SEO metrics. Default: en."""
    limit: NotRequired[int]
    """Maximum number of related keywords to return. You are billed per returned result, so a lower limit costs less. Range: 1 to 1000. Default: 5."""
    location: NotRequired[int]
    """Location code for SEO metrics. The default is the United States. Default: 2840."""
    orderBy: NotRequired[
        Literal[
            "volume_desc", "volume_asc", "cpc_desc", "difficulty_asc", "difficulty_desc"
        ]
    ]
    """Sort order for the returned related keywords: by search volume, cost per click, or keyword difficulty, ascending or descending. Omit for the default order."""


class SeoSearchIntentInput(TypedDict, total=False):
    """Input for SEO Search Intent."""

    keywords: Required[list[str]]
    """SEO keywords to classify by search intent."""
    language: NotRequired[str]
    """Language code for search intent classification. Default: en."""


class SeoSearchVolumeInput(TypedDict, total=False):
    """Input for SEO Search Volume."""

    dateFrom: NotRequired[str]
    """Start of the historical monthly-searches window, formatted YYYY-MM-DD. Cannot be more than four years before today. Omit for the default trailing window."""
    dateTo: NotRequired[str]
    """End of the historical monthly-searches window, formatted YYYY-MM-DD. Omit for the default trailing window."""
    keywords: Required[list[str]]
    """SEO keyword phrases to retrieve search-volume metrics for."""
    language: NotRequired[str]
    """Language code for SEO search-volume metrics. Default: en."""
    location: NotRequired[int]
    """Location code for SEO search-volume metrics. The default is the United States. Default: 2840."""
    searchPartners: NotRequired[bool]
    """When true, include Google search-partner network volume in the reported numbers; when false (the default), count Google search only."""


class SeoCompetitorsDomainData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SeoDomainIntersectionData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SeoDomainRankOverviewData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SeoKeywordDifficultyData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SeoKeywordIdeasData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SeoKeywordOverviewData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SeoKeywordSuggestionsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SeoLocalPackData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SeoRankedKeywordsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SeoRelatedKeywordsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SeoSearchIntentData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SeoSearchVolumeData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SeoNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def competitors_domain(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoCompetitorsDomainInput],
    ) -> BareRunResult[SeoCompetitorsDomainData]:
        """SEO Competitor Domains

        Get AnyAPI SEO competitor domains for a target domain with shared keyword
        counts and organic metrics as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).

        Example:
            res = client.seo.competitors_domain(language="en", limit=10, location=2840, target="github.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.competitors_domain", dict(input), options
        )
        return BareRunResult[SeoCompetitorsDomainData].model_validate(raw)

    def domain_intersection(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoDomainIntersectionInput],
    ) -> BareRunResult[SeoDomainIntersectionData]:
        """SEO Domain Intersection

        Get AnyAPI SEO keyword overlap for two domains with each domain's rankings,
        URLs, volume, CPC, and difficulty as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).

        Example:
            res = client.seo.domain_intersection(language="en", limit=10, location=2840, target1="github.com", target2="gitlab.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.domain_intersection", dict(input), options
        )
        return BareRunResult[SeoDomainIntersectionData].model_validate(raw)

    def domain_rank_overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoDomainRankOverviewInput],
    ) -> BareRunResult[SeoDomainRankOverviewData]:
        """SEO Domain Rank Overview

        Get AnyAPI SEO domain ranking, organic traffic, and paid traffic metrics as
        normalized JSON.

        Price: $0.0156 per request plus $0 per result (maximum $0.0156).

        Example:
            res = client.seo.domain_rank_overview(language="en", location=2840, target="ahrefs.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.domain_rank_overview", dict(input), options
        )
        return BareRunResult[SeoDomainRankOverviewData].model_validate(raw)

    def keyword_difficulty(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordDifficultyInput],
    ) -> BareRunResult[SeoKeywordDifficultyData]:
        """SEO Keyword Difficulty

        Get AnyAPI SEO keyword difficulty scores for one or more keywords as
        normalized JSON.

        Price: $0.0156 per request plus $0.00016 per keyword (maximum $0.1756).

        Example:
            res = client.seo.keyword_difficulty(keywords=["seo tools"], language="en", location=2840)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_difficulty", dict(input), options
        )
        return BareRunResult[SeoKeywordDifficultyData].model_validate(raw)

    def keyword_ideas(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordIdeasInput],
    ) -> BareRunResult[SeoKeywordIdeasData]:
        """SEO Keyword Ideas

        Find AnyAPI SEO keyword ideas from seed terms with volume, CPC, competition,
        difficulty, and intent as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).

        Example:
            res = client.seo.keyword_ideas(keywords=["project management software"], language="en", limit=5, location=2840)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_ideas", dict(input), options
        )
        return BareRunResult[SeoKeywordIdeasData].model_validate(raw)

    def keyword_overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordOverviewInput],
    ) -> BareRunResult[SeoKeywordOverviewData]:
        """SEO Keyword Overview

        Get AnyAPI SEO keyword metrics including search volume, CPC, competition,
        difficulty, and search intent as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per keyword (maximum $0.1276).

        Example:
            res = client.seo.keyword_overview(keywords=["project management software"], language="en", location=2840)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_overview", dict(input), options
        )
        return BareRunResult[SeoKeywordOverviewData].model_validate(raw)

    def keyword_suggestions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordSuggestionsInput],
    ) -> BareRunResult[SeoKeywordSuggestionsData]:
        """SEO Keyword Suggestions

        Find AnyAPI SEO keyword suggestions from a seed term with volume, CPC,
        competition, difficulty, and intent as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).

        Example:
            res = client.seo.keyword_suggestions(keyword="project management software", language="en", limit=5, location=2840)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_suggestions", dict(input), options
        )
        return BareRunResult[SeoKeywordSuggestionsData].model_validate(raw)

    def local_pack(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoLocalPackInput],
    ) -> BareRunResult[SeoLocalPackData]:
        """SEO Local Pack

        Search AnyAPI SEO local pack results with rankings, ratings, addresses, and
        contact basics as normalized JSON.

        Price: $0.0026 per request plus $0 per result (maximum $0.0026).

        Example:
            res = client.seo.local_pack(keyword="coffee shop", language="en", limit=5, location="New York,New York,United States")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.local_pack", dict(input), options
        )
        return BareRunResult[SeoLocalPackData].model_validate(raw)

    def ranked_keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoRankedKeywordsInput],
    ) -> BareRunResult[SeoRankedKeywordsData]:
        """SEO Ranked Keywords

        Get AnyAPI SEO ranked keywords for a domain with rankings, traffic
        estimates, volume, CPC, difficulty, and intent as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).

        Example:
            res = client.seo.ranked_keywords(language="en", limit=10, location=2840, target="github.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.ranked_keywords", dict(input), options
        )
        return BareRunResult[SeoRankedKeywordsData].model_validate(raw)

    def related_keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoRelatedKeywordsInput],
    ) -> BareRunResult[SeoRelatedKeywordsData]:
        """SEO Related Keywords

        Find AnyAPI SEO related keywords from a seed term with volume, CPC,
        competition, difficulty, and intent as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).

        Example:
            res = client.seo.related_keywords(keyword="project management software", language="en", limit=5, location=2840)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.related_keywords", dict(input), options
        )
        return BareRunResult[SeoRelatedKeywordsData].model_validate(raw)

    def search_intent(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoSearchIntentInput],
    ) -> BareRunResult[SeoSearchIntentData]:
        """SEO Search Intent

        Classify AnyAPI SEO keyword search intent as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per keyword (maximum $0.1756).

        Example:
            res = client.seo.search_intent(keywords=["seo tools"], language="en")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.search_intent", dict(input), options
        )
        return BareRunResult[SeoSearchIntentData].model_validate(raw)

    def search_volume(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoSearchVolumeInput],
    ) -> BareRunResult[SeoSearchVolumeData]:
        """SEO Search Volume

        Get AnyAPI SEO keyword search volume, CPC, competition, bid estimates, and
        monthly history as normalized JSON.

        Price: $0.117 per request plus $0 per result (maximum $0.117).

        Example:
            res = client.seo.search_volume(keywords=["seo tools"], language="en", location=2840)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.search_volume", dict(input), options
        )
        return BareRunResult[SeoSearchVolumeData].model_validate(raw)


class AsyncSeoNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def competitors_domain(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoCompetitorsDomainInput],
    ) -> BareRunResult[SeoCompetitorsDomainData]:
        """SEO Competitor Domains

        Get AnyAPI SEO competitor domains for a target domain with shared keyword
        counts and organic metrics as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).

        Example:
            res = client.seo.competitors_domain(language="en", limit=10, location=2840, target="github.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.competitors_domain", dict(input), options
        )
        return BareRunResult[SeoCompetitorsDomainData].model_validate(raw)

    async def domain_intersection(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoDomainIntersectionInput],
    ) -> BareRunResult[SeoDomainIntersectionData]:
        """SEO Domain Intersection

        Get AnyAPI SEO keyword overlap for two domains with each domain's rankings,
        URLs, volume, CPC, and difficulty as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).

        Example:
            res = client.seo.domain_intersection(language="en", limit=10, location=2840, target1="github.com", target2="gitlab.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.domain_intersection", dict(input), options
        )
        return BareRunResult[SeoDomainIntersectionData].model_validate(raw)

    async def domain_rank_overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoDomainRankOverviewInput],
    ) -> BareRunResult[SeoDomainRankOverviewData]:
        """SEO Domain Rank Overview

        Get AnyAPI SEO domain ranking, organic traffic, and paid traffic metrics as
        normalized JSON.

        Price: $0.0156 per request plus $0 per result (maximum $0.0156).

        Example:
            res = client.seo.domain_rank_overview(language="en", location=2840, target="ahrefs.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.domain_rank_overview", dict(input), options
        )
        return BareRunResult[SeoDomainRankOverviewData].model_validate(raw)

    async def keyword_difficulty(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordDifficultyInput],
    ) -> BareRunResult[SeoKeywordDifficultyData]:
        """SEO Keyword Difficulty

        Get AnyAPI SEO keyword difficulty scores for one or more keywords as
        normalized JSON.

        Price: $0.0156 per request plus $0.00016 per keyword (maximum $0.1756).

        Example:
            res = client.seo.keyword_difficulty(keywords=["seo tools"], language="en", location=2840)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_difficulty", dict(input), options
        )
        return BareRunResult[SeoKeywordDifficultyData].model_validate(raw)

    async def keyword_ideas(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordIdeasInput],
    ) -> BareRunResult[SeoKeywordIdeasData]:
        """SEO Keyword Ideas

        Find AnyAPI SEO keyword ideas from seed terms with volume, CPC, competition,
        difficulty, and intent as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).

        Example:
            res = client.seo.keyword_ideas(keywords=["project management software"], language="en", limit=5, location=2840)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_ideas", dict(input), options
        )
        return BareRunResult[SeoKeywordIdeasData].model_validate(raw)

    async def keyword_overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordOverviewInput],
    ) -> BareRunResult[SeoKeywordOverviewData]:
        """SEO Keyword Overview

        Get AnyAPI SEO keyword metrics including search volume, CPC, competition,
        difficulty, and search intent as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per keyword (maximum $0.1276).

        Example:
            res = client.seo.keyword_overview(keywords=["project management software"], language="en", location=2840)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_overview", dict(input), options
        )
        return BareRunResult[SeoKeywordOverviewData].model_validate(raw)

    async def keyword_suggestions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoKeywordSuggestionsInput],
    ) -> BareRunResult[SeoKeywordSuggestionsData]:
        """SEO Keyword Suggestions

        Find AnyAPI SEO keyword suggestions from a seed term with volume, CPC,
        competition, difficulty, and intent as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).

        Example:
            res = client.seo.keyword_suggestions(keyword="project management software", language="en", limit=5, location=2840)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.keyword_suggestions", dict(input), options
        )
        return BareRunResult[SeoKeywordSuggestionsData].model_validate(raw)

    async def local_pack(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoLocalPackInput],
    ) -> BareRunResult[SeoLocalPackData]:
        """SEO Local Pack

        Search AnyAPI SEO local pack results with rankings, ratings, addresses, and
        contact basics as normalized JSON.

        Price: $0.0026 per request plus $0 per result (maximum $0.0026).

        Example:
            res = client.seo.local_pack(keyword="coffee shop", language="en", limit=5, location="New York,New York,United States")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.local_pack", dict(input), options
        )
        return BareRunResult[SeoLocalPackData].model_validate(raw)

    async def ranked_keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoRankedKeywordsInput],
    ) -> BareRunResult[SeoRankedKeywordsData]:
        """SEO Ranked Keywords

        Get AnyAPI SEO ranked keywords for a domain with rankings, traffic
        estimates, volume, CPC, difficulty, and intent as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).

        Example:
            res = client.seo.ranked_keywords(language="en", limit=10, location=2840, target="github.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.ranked_keywords", dict(input), options
        )
        return BareRunResult[SeoRankedKeywordsData].model_validate(raw)

    async def related_keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoRelatedKeywordsInput],
    ) -> BareRunResult[SeoRelatedKeywordsData]:
        """SEO Related Keywords

        Find AnyAPI SEO related keywords from a seed term with volume, CPC,
        competition, difficulty, and intent as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).

        Example:
            res = client.seo.related_keywords(keyword="project management software", language="en", limit=5, location=2840)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.related_keywords", dict(input), options
        )
        return BareRunResult[SeoRelatedKeywordsData].model_validate(raw)

    async def search_intent(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoSearchIntentInput],
    ) -> BareRunResult[SeoSearchIntentData]:
        """SEO Search Intent

        Classify AnyAPI SEO keyword search intent as normalized JSON.

        Price: $0.0156 per request plus $0.00016 per keyword (maximum $0.1756).

        Example:
            res = client.seo.search_intent(keywords=["seo tools"], language="en")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.search_intent", dict(input), options
        )
        return BareRunResult[SeoSearchIntentData].model_validate(raw)

    async def search_volume(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SeoSearchVolumeInput],
    ) -> BareRunResult[SeoSearchVolumeData]:
        """SEO Search Volume

        Get AnyAPI SEO keyword search volume, CPC, competition, bid estimates, and
        monthly history as normalized JSON.

        Price: $0.117 per request plus $0 per result (maximum $0.117).

        Example:
            res = client.seo.search_volume(keywords=["seo tools"], language="en", location=2840)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "seo.search_volume", dict(input), options
        )
        return BareRunResult[SeoSearchVolumeData].model_validate(raw)
