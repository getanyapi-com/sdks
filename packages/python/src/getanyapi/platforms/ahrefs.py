# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the ahrefs platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    model_config = ConfigDict(extra="allow")


class AhrefsKeywordIdeasData(BaseModel):
    model_config = ConfigDict(extra="allow")


class AhrefsKeywordsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class AhrefsOverviewData(BaseModel):
    model_config = ConfigDict(extra="allow")


class AhrefsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def backlinks(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsBacklinksInput],
    ) -> BareRunResult[AhrefsBacklinksData]:
        """Ahrefs Backlinks

        Get the referring pages linking to a domain or URL, each with the source
        page, anchor text, linking domain rating, and page title.

        Price: $0.0195 per request plus $0 per result (maximum $0.0195).

        Example:
            res = client.ahrefs.backlinks(mode="exact", url="ahrefs.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.backlinks", dict(input), options
        )
        return BareRunResult[AhrefsBacklinksData].model_validate(raw)

    def keyword_ideas(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsKeywordIdeasInput],
    ) -> BareRunResult[AhrefsKeywordIdeasData]:
        """Ahrefs Keyword Ideas

        Get related keyword suggestions for any seed term, each with an Ahrefs
        difficulty and search-volume bucket.

        Price: $0.0015 per request plus $0.018 per result (maximum $0.0195).

        Example:
            res = client.ahrefs.keyword_ideas(country="us", keyword="coffee")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.keyword_ideas", dict(input), options
        )
        return BareRunResult[AhrefsKeywordIdeasData].model_validate(raw)

    def keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsKeywordsInput],
    ) -> BareRunResult[AhrefsKeywordsData]:
        """Ahrefs Keyword Difficulty

        Get the Ahrefs keyword-difficulty metrics for any search term: the
        difficulty score (0-100) and the number of referring domains a page needs to
        rank in the top 10 - as normalized JSON.

        Price: $0.0015 per request plus $0.018 per result (maximum $0.0195).

        Example:
            res = client.ahrefs.keywords(country="us", keyword="seo tools")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.keywords", dict(input), options
        )
        return BareRunResult[AhrefsKeywordsData].model_validate(raw)

    def overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsOverviewInput],
    ) -> BareRunResult[AhrefsOverviewData]:
        """Ahrefs Domain Overview

        Get an SEO authority overview for any domain or URL: Domain Rating, total
        backlinks, and referring domains - as normalized JSON.

        Price: $0.0015 per request plus $0.018 per result (maximum $0.0195).

        Example:
            res = client.ahrefs.overview(mode="subdomains", url="ahrefs.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.overview", dict(input), options
        )
        return BareRunResult[AhrefsOverviewData].model_validate(raw)


class AsyncAhrefsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def backlinks(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsBacklinksInput],
    ) -> BareRunResult[AhrefsBacklinksData]:
        """Ahrefs Backlinks

        Get the referring pages linking to a domain or URL, each with the source
        page, anchor text, linking domain rating, and page title.

        Price: $0.0195 per request plus $0 per result (maximum $0.0195).

        Example:
            res = client.ahrefs.backlinks(mode="exact", url="ahrefs.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.backlinks", dict(input), options
        )
        return BareRunResult[AhrefsBacklinksData].model_validate(raw)

    async def keyword_ideas(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsKeywordIdeasInput],
    ) -> BareRunResult[AhrefsKeywordIdeasData]:
        """Ahrefs Keyword Ideas

        Get related keyword suggestions for any seed term, each with an Ahrefs
        difficulty and search-volume bucket.

        Price: $0.0015 per request plus $0.018 per result (maximum $0.0195).

        Example:
            res = client.ahrefs.keyword_ideas(country="us", keyword="coffee")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.keyword_ideas", dict(input), options
        )
        return BareRunResult[AhrefsKeywordIdeasData].model_validate(raw)

    async def keywords(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsKeywordsInput],
    ) -> BareRunResult[AhrefsKeywordsData]:
        """Ahrefs Keyword Difficulty

        Get the Ahrefs keyword-difficulty metrics for any search term: the
        difficulty score (0-100) and the number of referring domains a page needs to
        rank in the top 10 - as normalized JSON.

        Price: $0.0015 per request plus $0.018 per result (maximum $0.0195).

        Example:
            res = client.ahrefs.keywords(country="us", keyword="seo tools")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.keywords", dict(input), options
        )
        return BareRunResult[AhrefsKeywordsData].model_validate(raw)

    async def overview(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AhrefsOverviewInput],
    ) -> BareRunResult[AhrefsOverviewData]:
        """Ahrefs Domain Overview

        Get an SEO authority overview for any domain or URL: Domain Rating, total
        backlinks, and referring domains - as normalized JSON.

        Price: $0.0015 per request plus $0.018 per result (maximum $0.0195).

        Example:
            res = client.ahrefs.overview(mode="subdomains", url="ahrefs.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "ahrefs.overview", dict(input), options
        )
        return BareRunResult[AhrefsOverviewData].model_validate(raw)
