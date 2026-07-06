# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the ahrefs platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class AhrefsBacklinksInput(TypedDict, total=False):
    """Input for Ahrefs Backlinks."""

    mode: NotRequired[Literal["exact", "subdomains"]]
    """Match scope: "exact" for the given URL only, or "subdomains" to include the domain and its subdomains. Default: subdomains."""
    url: Required[str]
    """The domain or page URL to find backlinks for (e.g. "ahrefs.com")."""


class AhrefsKeywordIdeasInput(TypedDict, total=False):
    """Input for Ahrefs Keyword Ideas."""

    country: NotRequired[str]
    """Two-letter country code that scopes the suggestions (e.g. us, gb, de). Default: us."""
    keyword: Required[str]
    """The seed keyword to expand into related suggestions (e.g. "coffee")."""


class AhrefsKeywordsInput(TypedDict, total=False):
    """Input for Ahrefs Keyword Difficulty."""

    country: NotRequired[str]
    """Two-letter country code that scopes volume and difficulty (e.g. us, gb, de). Default: us."""
    keyword: Required[str]
    """The search term to analyze (e.g. "seo tools")."""


class AhrefsOverviewInput(TypedDict, total=False):
    """Input for Ahrefs Domain Overview."""

    mode: NotRequired[Literal["exact", "subdomains"]]
    """Analysis scope: subdomains covers the whole domain, exact matches only the given URL. Default: subdomains."""
    url: Required[str]
    """The domain or page URL to analyze (e.g. ahrefs.com)."""


class AhrefsBacklinksData(BaseModel):
    items: list[AhrefsBacklinksItem] = Field(
        description="Referring pages that link to the domain or URL. Populated whenever the provider returns data."
    )


class AhrefsBacklinksItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    anchor: str | None = Field(default=None, description="Anchor text of the link.")
    contextAfter: str | None = Field(
        default=None,
        description="Text immediately after the anchor on the referring page.",
    )
    contextBefore: str | None = Field(
        default=None,
        description="Text immediately before the anchor on the referring page.",
    )
    domainRating: float | None = Field(
        default=None, description="Ahrefs Domain Rating (0-100) of the linking domain."
    )
    title: str | None = Field(default=None, description="Title of the referring page.")
    urlFrom: str = Field(
        description="URL of the referring page that contains the link. Populated whenever the provider returns data."
    )
    urlTo: str | None = Field(
        default=None, description="Target URL the link points to."
    )


class AhrefsKeywordIdeasData(BaseModel):
    items: list[AhrefsKeywordIdeasItem] = Field(
        description="Keyword-idea records: the seed keyword and its related keyword suggestions, each with an Ahrefs difficulty and search-volume bucket. Populated whenever the provider returns data."
    )


class AhrefsKeywordIdeasItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    country: str | None = Field(
        default=None,
        description="Two-letter country code the suggestions are scoped to.",
    )
    ideas: list[AhrefsKeywordIdeasIdea] | None = Field(
        default=None,
        description="Related keyword suggestions for the seed term. Populated whenever the provider returns data.",
    )
    searchEngine: str | None = Field(
        default=None,
        description="Search engine the suggestions are drawn from (e.g. Google).",
    )
    sourceKeyword: str = Field(
        description="The seed keyword the suggestions were expanded from. Populated whenever the provider returns data."
    )


class AhrefsKeywordIdeasIdea(BaseModel):
    model_config = ConfigDict(extra="allow")

    difficulty: str | None = Field(
        default=None,
        description="Relative Ahrefs difficulty bucket (a letter such as E, M, or H), not an exact number.",
    )
    keyword: str = Field(
        description="The suggested related keyword. Populated whenever the provider returns data."
    )
    updatedAt: str | None = Field(
        default=None, description="Timestamp the suggestion metrics were last updated."
    )
    volume: str | None = Field(
        default=None,
        description="Relative search-volume bucket (a letter grade), not an exact number.",
    )


class AhrefsKeywordsData(BaseModel):
    items: list[AhrefsKeywordsItem] = Field(
        description="Keyword-difficulty records: the difficulty score and the referring-domain gap needed to rank in the top 10. Populated whenever the provider returns data."
    )


class AhrefsKeywordsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    country: str | None = Field(
        default=None, description="Two-letter country code the metrics are scoped to."
    )
    difficulty: int | None = Field(
        default=None, description="Ahrefs Keyword Difficulty, 0-100."
    )
    keyword: str = Field(description="Populated whenever the provider returns data.")
    referringDomainsToRank: int | None = Field(
        default=None,
        description="Estimated number of referring domains a page needs to rank in the top 10 for this keyword.",
    )


class AhrefsOverviewData(BaseModel):
    items: list[AhrefsOverviewItem] = Field(
        description="Domain authority records: the requested domain plus its Domain Rating, total backlinks, and referring-domain counts. Populated whenever the provider returns data."
    )


class AhrefsOverviewItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    backlinks: int | None = Field(
        default=None, description="Total number of backlinks pointing to the domain."
    )
    dofollowBacklinksPct: int | None = Field(
        default=None, description="Percentage (0-100) of backlinks that are dofollow."
    )
    dofollowReferringDomainsPct: int | None = Field(
        default=None,
        description="Percentage (0-100) of referring domains that provide a dofollow link.",
    )
    domain: str = Field(
        description="The domain or URL the metrics are scoped to. Populated whenever the provider returns data."
    )
    domainRating: float | None = Field(
        default=None,
        description="Ahrefs Domain Rating, 0-100, measuring backlink-profile strength.",
    )
    mode: str | None = Field(
        default=None,
        description="Analysis scope used: subdomains (whole domain) or exact (the given URL only).",
    )
    referringDomains: int | None = Field(
        default=None,
        description="Number of unique referring domains linking to the domain.",
    )


class AhrefsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def backlinks(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsBacklinksInput],
    ) -> RunResult[AhrefsBacklinksData]:
        """Ahrefs Backlinks

        Get the referring pages linking to a domain or URL, each with the source
        page, anchor text, linking domain rating, and page title. Transparent
        per-request USD pricing.

        Price: $0.0195 per request.

        Example:
            res = client.ahrefs.backlinks(mode="exact", url="ahrefs.com")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.backlinks", dict(input), options
        )
        return RunResult[AhrefsBacklinksData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def keyword_ideas(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsKeywordIdeasInput],
    ) -> RunResult[AhrefsKeywordIdeasData]:
        """Ahrefs Keyword Ideas

        Get related keyword suggestions for any seed term, each with an Ahrefs
        difficulty and search-volume bucket. Transparent per-request USD pricing.

        Price: $0.018 per result.

        Example:
            res = client.ahrefs.keyword_ideas(country="us", keyword="coffee")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.keyword_ideas", dict(input), options
        )
        return RunResult[AhrefsKeywordIdeasData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsKeywordsInput],
    ) -> RunResult[AhrefsKeywordsData]:
        """Ahrefs Keyword Difficulty

        Get the Ahrefs keyword-difficulty metrics for any search term: the
        difficulty score (0-100) and the number of referring domains a page needs to
        rank in the top 10 - as normalized JSON with transparent per-request USD
        pricing.

        Price: $0.018 per result.

        Example:
            res = client.ahrefs.keywords(country="us", keyword="seo tools")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.keywords", dict(input), options
        )
        return RunResult[AhrefsKeywordsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsOverviewInput],
    ) -> RunResult[AhrefsOverviewData]:
        """Ahrefs Domain Overview

        Get an SEO authority overview for any domain or URL: Domain Rating, total
        backlinks, and referring domains - as normalized JSON with transparent
        per-request USD pricing.

        Price: $0.018 per result.

        Example:
            res = client.ahrefs.overview(mode="subdomains", url="ahrefs.com")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.overview", dict(input), options
        )
        return RunResult[AhrefsOverviewData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncAhrefsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def backlinks(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsBacklinksInput],
    ) -> RunResult[AhrefsBacklinksData]:
        """Ahrefs Backlinks

        Get the referring pages linking to a domain or URL, each with the source
        page, anchor text, linking domain rating, and page title. Transparent
        per-request USD pricing.

        Price: $0.0195 per request.

        Example:
            res = client.ahrefs.backlinks(mode="exact", url="ahrefs.com")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.backlinks", dict(input), options
        )
        return RunResult[AhrefsBacklinksData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def keyword_ideas(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsKeywordIdeasInput],
    ) -> RunResult[AhrefsKeywordIdeasData]:
        """Ahrefs Keyword Ideas

        Get related keyword suggestions for any seed term, each with an Ahrefs
        difficulty and search-volume bucket. Transparent per-request USD pricing.

        Price: $0.018 per result.

        Example:
            res = client.ahrefs.keyword_ideas(country="us", keyword="coffee")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.keyword_ideas", dict(input), options
        )
        return RunResult[AhrefsKeywordIdeasData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsKeywordsInput],
    ) -> RunResult[AhrefsKeywordsData]:
        """Ahrefs Keyword Difficulty

        Get the Ahrefs keyword-difficulty metrics for any search term: the
        difficulty score (0-100) and the number of referring domains a page needs to
        rank in the top 10 - as normalized JSON with transparent per-request USD
        pricing.

        Price: $0.018 per result.

        Example:
            res = client.ahrefs.keywords(country="us", keyword="seo tools")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.keywords", dict(input), options
        )
        return RunResult[AhrefsKeywordsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsOverviewInput],
    ) -> RunResult[AhrefsOverviewData]:
        """Ahrefs Domain Overview

        Get an SEO authority overview for any domain or URL: Domain Rating, total
        backlinks, and referring domains - as normalized JSON with transparent
        per-request USD pricing.

        Price: $0.018 per result.

        Example:
            res = client.ahrefs.overview(mode="subdomains", url="ahrefs.com")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.overview", dict(input), options
        )
        return RunResult[AhrefsOverviewData].model_validate(
            raw.model_dump(by_alias=True)
        )
