# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the google platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class GoogleAutocompleteInput(TypedDict, total=False):
    """Input for Google Autocomplete."""

    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    query: Required[str]
    """The partial Google search query."""


class GoogleImagesInput(TypedDict, total=False):
    """Input for Google Images."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). Price is flat per request. Range: 1 to 20."""
    query: Required[str]
    """Image search query (e.g. golden gate bridge at sunset)."""


class GoogleLensInput(TypedDict, total=False):
    """Input for Google Lens."""

    url: Required[str]
    """Public URL of the image to search with."""


class GoogleNewsInput(TypedDict, total=False):
    """Input for Google News."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
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

    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    query: Required[str]
    """The Google search query."""


class GoogleVideosInput(TypedDict, total=False):
    """Input for Google Videos."""

    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    query: Required[str]
    """The video search query."""


class GoogleAutocompleteData(BaseModel):
    query: str = Field(description="The partial query that was searched.")
    suggestions: list[GoogleAutocompleteSuggestion] = Field(
        description="Autocomplete suggestion records. Populated whenever the provider has data for the entity."
    )


class GoogleAutocompleteSuggestion(BaseModel):
    model_config = ConfigDict(extra="allow")

    value: str = Field(
        description="Suggested query text. Populated whenever the provider has data for the entity."
    )


class GoogleImagesData(BaseModel):
    items: list[GoogleImagesItem] = Field(
        description="Image result records: image URL, dimensions, title, and the source page it appears on. Populated whenever the provider has data for the entity."
    )


class GoogleImagesItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    height: int | None = Field(default=None, description="Full image height in pixels.")
    source: str | None = Field(
        default=None,
        description="Host domain of the page the image appears on. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    source_url: str | None = Field(
        default=None,
        alias="sourceUrl",
        description="URL of the page the image appears on. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    thumbnail_url: str | None = Field(
        default=None,
        alias="thumbnailUrl",
        description="URL to a thumbnail of the image.",
    )
    title: str = Field(
        description="Image result title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Direct URL to the full-size image. Populated whenever the provider has data for the entity."
    )
    width: int | None = Field(default=None, description="Full image width in pixels.")


class GoogleLensData(BaseModel):
    results: list[GoogleLensResult] = Field(
        description="Visual match result records. Populated whenever the provider has data for the entity."
    )
    url: str = Field(description="The input image URL that was searched.")


class GoogleLensResult(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    image: str | None = Field(default=None, description="Matched image URL.")
    link: str = Field(
        description="URL to the matching web page. Populated whenever the provider has data for the entity."
    )
    source: str | None = Field(default=None, description="Source site name.")
    thumbnail_url: str | None = Field(
        default=None,
        alias="thumbnailUrl",
        description="Thumbnail image URL for the match.",
    )
    title: str = Field(
        description="Title of the matching web page. Populated whenever the provider has data for the entity."
    )


class GoogleNewsData(BaseModel):
    items: list[GoogleNewsItem] = Field(
        description="Article records: headline, source name, article link, and publish time. Populated whenever the provider has data for the entity."
    )


class GoogleNewsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    snippet: str | None = Field(
        default=None, description="Article snippet when available."
    )
    source: str | None = Field(
        default=None,
        description="Publisher name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    title: str = Field(
        description="Article headline. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Article link. Populated whenever the provider has data for the entity."
    )


class GooglePatentsData(BaseModel):
    query: str = Field(description="The query that was searched.")
    results: list[GooglePatentsResult] = Field(description="Patent result records.")


class GooglePatentsResult(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    assignee: str | None = Field(default=None, description="Patent assignee.")
    filed_utc: float | None = Field(
        default=None,
        alias="filedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    granted_utc: float | None = Field(
        default=None,
        alias="grantedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    image: str | None = Field(
        default=None, description="First patent figure thumbnail image URL."
    )
    inventor: str | None = Field(
        default=None, description="Named inventor or inventors."
    )
    link: str = Field(
        description="URL to the patent. Populated whenever the provider has data for the entity."
    )
    pdf_url: str | None = Field(
        default=None, alias="pdfUrl", description="URL to an available patent PDF."
    )
    priority_utc: float | None = Field(
        default=None,
        alias="priorityUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    publication_number: str = Field(
        alias="publicationNumber",
        description="Patent publication number (e.g. US11303135B2). Populated whenever the provider has data for the entity.",
    )
    published_utc: float | None = Field(
        default=None,
        alias="publishedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    snippet: str | None = Field(
        default=None, description="Short patent description snippet."
    )
    title: str = Field(
        description="Patent title. Populated whenever the provider has data for the entity."
    )


class GoogleScholarData(BaseModel):
    query: str = Field(description="The query that was searched.")
    results: list[GoogleScholarResult] = Field(
        description="Academic paper result records."
    )


class GoogleScholarResult(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    cited_by: int | None = Field(
        default=None,
        alias="citedBy",
        description="Number of citations reported by Google Scholar.",
    )
    id: str | None = Field(default=None, description="Serper result identifier.")
    link: str = Field(
        description="URL to the paper. Populated whenever the provider has data for the entity."
    )
    pdf_url: str | None = Field(
        default=None, alias="pdfUrl", description="URL to an available PDF."
    )
    publication_info: str | None = Field(
        default=None,
        alias="publicationInfo",
        description="Authors, venue, and publication year.",
    )
    snippet: str | None = Field(
        default=None, description="Short paper description snippet."
    )
    title: str = Field(
        description="Paper title. Populated whenever the provider has data for the entity."
    )
    year: int | None = Field(default=None, description="Publication year.")


class GoogleSearchData(BaseModel):
    query: str
    results: list[GoogleSearchResult] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class GoogleSearchResult(BaseModel):
    model_config = ConfigDict(extra="allow")

    link: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    position: int
    snippet: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class GoogleVideosData(BaseModel):
    query: str = Field(description="The query that was searched.")
    results: list[GoogleVideosResult] = Field(
        description="Video result records. Populated whenever the provider has data for the entity."
    )


class GoogleVideosResult(BaseModel):
    model_config = ConfigDict(extra="allow")

    image: str | None = Field(
        default=None, description="Thumbnail image URL for the video."
    )
    link: str = Field(
        description="URL to the video. Populated whenever the provider has data for the entity."
    )
    position: int | None = Field(
        default=None, description="1-based rank in the result list."
    )
    snippet: str | None = Field(default=None, description="Short description snippet.")
    source: str | None = Field(
        default=None, description="Host platform (e.g. YouTube, Vimeo)."
    )
    title: str = Field(
        description="Video title. Populated whenever the provider has data for the entity."
    )


class GoogleNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def autocomplete(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAutocompleteInput],
    ) -> RunResult[GoogleAutocompleteData]:
        """Google Autocomplete

        Get Google search autocomplete suggestions for a partial query (keyword
        ideas). **Price:** \$0.99 per 1,000 requests (flat per request - same cost
        regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.autocomplete(query="best coff")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.autocomplete", dict(input), options
        )
        return RunResult[GoogleAutocompleteData].model_validate(raw)

    def images(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleImagesInput],
    ) -> RunResult[GoogleImagesData]:
        """Google Images

        Run a Google Images search and get structured results - image URLs,
        dimensions, titles, and source pages. **Price:** \$0.99 per 1,000 requests
        (flat per request - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.images(limit=5, query="golden retriever")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.images", dict(input), options
        )
        return RunResult[GoogleImagesData].model_validate(raw)

    def lens(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleLensInput]
    ) -> RunResult[GoogleLensData]:
        """Google Lens

        Reverse image search: find web pages and visual matches for an image URL.
        **Price:** \$2.97 per 1,000 requests (flat per request - same cost
        regardless of results returned).

        Price: $0.00297 per request.

        Example:
            res = client.google.lens(url="https://i.imgur.com/HBrB8p0.png")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.lens", dict(input), options
        )
        return RunResult[GoogleLensData].model_validate(raw)

    def news(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleNewsInput]
    ) -> RunResult[GoogleNewsData]:
        """Google News

        Search Google News by keyword and get fresh articles - headlines, sources,
        links, and publish times - as clean JSON. **Price:** \$0.99 per 1,000
        requests (flat per request - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.news(limit=5, query="openai")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.news", dict(input), options
        )
        return RunResult[GoogleNewsData].model_validate(raw)

    def patents(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GooglePatentsInput],
    ) -> RunResult[GooglePatentsData]:
        """Google Patents

        Search Google Patents with title, patent number, inventor, assignee, key
        dates, and PDF link. **Price:** \$0.99 per 1,000 requests (flat per request
        - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.patents(query="wireless charging")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.patents", dict(input), options
        )
        return RunResult[GooglePatentsData].model_validate(raw)

    def scholar(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleScholarInput],
    ) -> RunResult[GoogleScholarData]:
        """Google Scholar

        Search Google Scholar for academic papers with title, authors, citation
        count, and PDF link. **Price:** \$0.99 per 1,000 requests (flat per request
        - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.scholar(query="attention is all you need")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.scholar", dict(input), options
        )
        return RunResult[GoogleScholarData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearchInput],
    ) -> RunResult[GoogleSearchData]:
        """Google Search

        Run a Google web search and get the organic results (title, link, snippet,
        position) as clean JSON. **Price:** \$0.99 per 1,000 requests (flat per
        request - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.search(query="best coffee maker")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.search", dict(input), options
        )
        return RunResult[GoogleSearchData].model_validate(raw)

    def videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleVideosInput],
    ) -> RunResult[GoogleVideosData]:
        """Google Videos

        Search Google for video results (YouTube and others) with title, link,
        thumbnail, and source. **Price:** \$0.99 per 1,000 requests (flat per
        request - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.videos(query="lofi hip hop")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.videos", dict(input), options
        )
        return RunResult[GoogleVideosData].model_validate(raw)


class AsyncGoogleNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def autocomplete(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAutocompleteInput],
    ) -> RunResult[GoogleAutocompleteData]:
        """Google Autocomplete

        Get Google search autocomplete suggestions for a partial query (keyword
        ideas). **Price:** \$0.99 per 1,000 requests (flat per request - same cost
        regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.autocomplete(query="best coff")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.autocomplete", dict(input), options
        )
        return RunResult[GoogleAutocompleteData].model_validate(raw)

    async def images(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleImagesInput],
    ) -> RunResult[GoogleImagesData]:
        """Google Images

        Run a Google Images search and get structured results - image URLs,
        dimensions, titles, and source pages. **Price:** \$0.99 per 1,000 requests
        (flat per request - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.images(limit=5, query="golden retriever")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.images", dict(input), options
        )
        return RunResult[GoogleImagesData].model_validate(raw)

    async def lens(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleLensInput]
    ) -> RunResult[GoogleLensData]:
        """Google Lens

        Reverse image search: find web pages and visual matches for an image URL.
        **Price:** \$2.97 per 1,000 requests (flat per request - same cost
        regardless of results returned).

        Price: $0.00297 per request.

        Example:
            res = client.google.lens(url="https://i.imgur.com/HBrB8p0.png")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.lens", dict(input), options
        )
        return RunResult[GoogleLensData].model_validate(raw)

    async def news(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleNewsInput]
    ) -> RunResult[GoogleNewsData]:
        """Google News

        Search Google News by keyword and get fresh articles - headlines, sources,
        links, and publish times - as clean JSON. **Price:** \$0.99 per 1,000
        requests (flat per request - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.news(limit=5, query="openai")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.news", dict(input), options
        )
        return RunResult[GoogleNewsData].model_validate(raw)

    async def patents(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GooglePatentsInput],
    ) -> RunResult[GooglePatentsData]:
        """Google Patents

        Search Google Patents with title, patent number, inventor, assignee, key
        dates, and PDF link. **Price:** \$0.99 per 1,000 requests (flat per request
        - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.patents(query="wireless charging")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.patents", dict(input), options
        )
        return RunResult[GooglePatentsData].model_validate(raw)

    async def scholar(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleScholarInput],
    ) -> RunResult[GoogleScholarData]:
        """Google Scholar

        Search Google Scholar for academic papers with title, authors, citation
        count, and PDF link. **Price:** \$0.99 per 1,000 requests (flat per request
        - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.scholar(query="attention is all you need")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.scholar", dict(input), options
        )
        return RunResult[GoogleScholarData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearchInput],
    ) -> RunResult[GoogleSearchData]:
        """Google Search

        Run a Google web search and get the organic results (title, link, snippet,
        position) as clean JSON. **Price:** \$0.99 per 1,000 requests (flat per
        request - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.search(query="best coffee maker")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.search", dict(input), options
        )
        return RunResult[GoogleSearchData].model_validate(raw)

    async def videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleVideosInput],
    ) -> RunResult[GoogleVideosData]:
        """Google Videos

        Search Google for video results (YouTube and others) with title, link,
        thumbnail, and source. **Price:** \$0.99 per 1,000 requests (flat per
        request - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.videos(query="lofi hip hop")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.videos", dict(input), options
        )
        return RunResult[GoogleVideosData].model_validate(raw)
