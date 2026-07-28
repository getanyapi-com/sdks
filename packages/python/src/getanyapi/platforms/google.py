# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the google platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class GoogleAutocompleteInput(TypedDict, total=False):
    """Input for Google Autocomplete."""

    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    hl: NotRequired[str]
    """Two-letter interface and results language code for the suggestions (e.g. en, es, de). Default: en."""
    query: Required[str]
    """The partial Google search query."""


class GoogleImagesInput(TypedDict, total=False):
    """Input for Google Images."""

    autocorrect: NotRequired[bool]
    """Toggle Google spelling autocorrect (default true). Set false to search the exact query without correction."""
    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    hl: NotRequired[str]
    """Two-letter interface and results language code (e.g. en, es, de). Default: en."""
    limit: NotRequired[int]
    """Maximum number of images to return (1-100, default 20). Requests for 10 results or fewer are billed at a lower rate than larger requests. Range: 1 to 100. Default: 20."""
    location: NotRequired[str]
    """Fine-grained location for result localization, given as a canonical Google location string (e.g. 'New York, United States', 'London, United Kingdom'). More specific than the country-level gl."""
    query: Required[str]
    """Image search query (e.g. golden gate bridge at sunset)."""
    timeframe: NotRequired[str]
    """Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction)."""


class GoogleLensInput(TypedDict, total=False):
    """Input for Google Lens."""

    url: Required[str]
    """Public URL of the image to search with."""


class GoogleNewsInput(TypedDict, total=False):
    """Input for Google News."""

    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    hl: NotRequired[str]
    """Two-letter interface and results language code (e.g. en, es, de). Default: en."""
    limit: NotRequired[int]
    """Requested article count (1-20, default 20). Google News returns its latest matching articles and may return more or fewer than requested. Price is flat per request. Range: 1 to 20."""
    location: NotRequired[str]
    """Fine-grained location for result localization, given as a canonical Google location string (e.g. 'New York, United States', 'London, United Kingdom'). More specific than the country-level gl."""
    query: Required[str]
    """News search query; supports operators like '-', 'OR', and 'site:' (e.g. bitcoin site:cnn.com)."""
    timeframe: NotRequired[str]
    """Time window for results: 1h, 1d, 7d, 1y, or all (e.g. 1d). Default: 7d."""


class GooglePatentsInput(TypedDict, total=False):
    """Input for Google Patents."""

    query: Required[str]
    """The Google Patents search query."""


class GoogleScholarInput(TypedDict, total=False):
    """Input for Google Scholar."""

    query: Required[str]
    """The Google Scholar search query."""


class GoogleSearchInput(TypedDict, total=False):
    """Input for Google Search."""

    autocorrect: NotRequired[bool]
    """Toggle Google spelling autocorrect (default true). Set false to search the exact query without correction."""
    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    hl: NotRequired[str]
    """Two-letter interface and results language code (e.g. en, es, de). Default: en."""
    limit: NotRequired[int]
    """Maximum number of organic results to return (1-100, default 10). Google may return fewer if the query is narrow. Price is flat per request. Range: 1 to 100. Default: 10."""
    location: NotRequired[str]
    """Fine-grained location for result localization, given as a canonical Google location string (e.g. 'New York, United States', 'London, United Kingdom'). More specific than the country-level gl."""
    query: Required[str]
    """The Google search query."""
    timeframe: NotRequired[str]
    """Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction)."""


class GoogleVideosInput(TypedDict, total=False):
    """Input for Google Videos."""

    autocorrect: NotRequired[bool]
    """Toggle Google spelling autocorrect (default true). Set false to search the exact query without correction."""
    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    hl: NotRequired[str]
    """Two-letter interface and results language code (e.g. en, es, de). Default: en."""
    location: NotRequired[str]
    """Fine-grained location for result localization, given as a canonical Google location string (e.g. 'New York, United States', 'London, United Kingdom'). More specific than the country-level gl."""
    query: Required[str]
    """The video search query."""
    timeframe: NotRequired[str]
    """Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction)."""


class GoogleAutocompleteData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleImagesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleLensData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleNewsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GooglePatentsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleScholarData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleVideosData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def autocomplete(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAutocompleteInput],
    ) -> BareRunResult[GoogleAutocompleteData]:
        """Google Autocomplete

        Get Google search autocomplete suggestions for a partial query (keyword
        ideas).

        Price: $0.00099 per request.

        Example:
            res = client.google.autocomplete(query="best coff")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.autocomplete", dict(input), options
        )
        return BareRunResult[GoogleAutocompleteData].model_validate(raw)

    def images(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleImagesInput],
    ) -> BareRunResult[GoogleImagesData]:
        """Google Images

        Run a Google Images search and get structured results: image URLs,
        dimensions, titles, and source pages.

        Price: $0.00099 per request plus $0.00009 per result (maximum $0.00198).

        Example:
            res = client.google.images(gl="us", hl="en", limit=5, query="golden retriever")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.images", dict(input), options
        )
        return BareRunResult[GoogleImagesData].model_validate(raw)

    def lens(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleLensInput]
    ) -> BareRunResult[GoogleLensData]:
        """Google Lens

        Reverse image search: find web pages and visual matches for an image URL.

        Price: $0.00297 per request.

        Example:
            res = client.google.lens(url="https://i.imgur.com/HBrB8p0.png")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.lens", dict(input), options
        )
        return BareRunResult[GoogleLensData].model_validate(raw)

    def news(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleNewsInput]
    ) -> BareRunResult[GoogleNewsData]:
        """Google News

        Search Google News by keyword and get fresh articles (headlines, sources,
        links, and publish times) as clean JSON.

        Price: $0.00099 per request.

        Example:
            res = client.google.news(gl="us", hl="en", query="openai")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.news", dict(input), options
        )
        return BareRunResult[GoogleNewsData].model_validate(raw)

    def patents(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GooglePatentsInput],
    ) -> BareRunResult[GooglePatentsData]:
        """Google Patents

        Search Google Patents with title, patent number, inventor, assignee, key
        dates, and PDF link.

        Price: $0.00099 per request.

        Example:
            res = client.google.patents(query="wireless charging")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.patents", dict(input), options
        )
        return BareRunResult[GooglePatentsData].model_validate(raw)

    def scholar(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleScholarInput],
    ) -> BareRunResult[GoogleScholarData]:
        """Google Scholar

        Search Google Scholar for academic papers with title, authors, citation
        count, and PDF link.

        Price: $0.00099 per request.

        Example:
            res = client.google.scholar(query="attention is all you need")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.scholar", dict(input), options
        )
        return BareRunResult[GoogleScholarData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearchInput],
    ) -> BareRunResult[GoogleSearchData]:
        """Google Search

        Run a Google web search and get the organic results (title, link, snippet,
        position) as clean JSON.

        Price: $0.00099 per request.

        Example:
            res = client.google.search(gl="us", hl="en", limit=10, query="best coffee maker")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.search", dict(input), options
        )
        return BareRunResult[GoogleSearchData].model_validate(raw)

    def videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleVideosInput],
    ) -> BareRunResult[GoogleVideosData]:
        """Google Videos

        Search Google for video results (YouTube and others) with title, link,
        thumbnail, and source.

        Price: $0.00099 per request.

        Example:
            res = client.google.videos(gl="us", hl="en", query="lofi hip hop")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.videos", dict(input), options
        )
        return BareRunResult[GoogleVideosData].model_validate(raw)


class AsyncGoogleNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def autocomplete(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAutocompleteInput],
    ) -> BareRunResult[GoogleAutocompleteData]:
        """Google Autocomplete

        Get Google search autocomplete suggestions for a partial query (keyword
        ideas).

        Price: $0.00099 per request.

        Example:
            res = client.google.autocomplete(query="best coff")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.autocomplete", dict(input), options
        )
        return BareRunResult[GoogleAutocompleteData].model_validate(raw)

    async def images(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleImagesInput],
    ) -> BareRunResult[GoogleImagesData]:
        """Google Images

        Run a Google Images search and get structured results: image URLs,
        dimensions, titles, and source pages.

        Price: $0.00099 per request plus $0.00009 per result (maximum $0.00198).

        Example:
            res = client.google.images(gl="us", hl="en", limit=5, query="golden retriever")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.images", dict(input), options
        )
        return BareRunResult[GoogleImagesData].model_validate(raw)

    async def lens(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleLensInput]
    ) -> BareRunResult[GoogleLensData]:
        """Google Lens

        Reverse image search: find web pages and visual matches for an image URL.

        Price: $0.00297 per request.

        Example:
            res = client.google.lens(url="https://i.imgur.com/HBrB8p0.png")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.lens", dict(input), options
        )
        return BareRunResult[GoogleLensData].model_validate(raw)

    async def news(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleNewsInput]
    ) -> BareRunResult[GoogleNewsData]:
        """Google News

        Search Google News by keyword and get fresh articles (headlines, sources,
        links, and publish times) as clean JSON.

        Price: $0.00099 per request.

        Example:
            res = client.google.news(gl="us", hl="en", query="openai")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.news", dict(input), options
        )
        return BareRunResult[GoogleNewsData].model_validate(raw)

    async def patents(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GooglePatentsInput],
    ) -> BareRunResult[GooglePatentsData]:
        """Google Patents

        Search Google Patents with title, patent number, inventor, assignee, key
        dates, and PDF link.

        Price: $0.00099 per request.

        Example:
            res = client.google.patents(query="wireless charging")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.patents", dict(input), options
        )
        return BareRunResult[GooglePatentsData].model_validate(raw)

    async def scholar(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleScholarInput],
    ) -> BareRunResult[GoogleScholarData]:
        """Google Scholar

        Search Google Scholar for academic papers with title, authors, citation
        count, and PDF link.

        Price: $0.00099 per request.

        Example:
            res = client.google.scholar(query="attention is all you need")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.scholar", dict(input), options
        )
        return BareRunResult[GoogleScholarData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearchInput],
    ) -> BareRunResult[GoogleSearchData]:
        """Google Search

        Run a Google web search and get the organic results (title, link, snippet,
        position) as clean JSON.

        Price: $0.00099 per request.

        Example:
            res = client.google.search(gl="us", hl="en", limit=10, query="best coffee maker")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.search", dict(input), options
        )
        return BareRunResult[GoogleSearchData].model_validate(raw)

    async def videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleVideosInput],
    ) -> BareRunResult[GoogleVideosData]:
        """Google Videos

        Search Google for video results (YouTube and others) with title, link,
        thumbnail, and source.

        Price: $0.00099 per request.

        Example:
            res = client.google.videos(gl="us", hl="en", query="lofi hip hop")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.videos", dict(input), options
        )
        return BareRunResult[GoogleVideosData].model_validate(raw)
