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


class GoogleImagesInput(TypedDict, total=False):
    """Input for Google Images."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    query: Required[str]
    """Image search query (e.g. golden gate bridge at sunset)."""


class GoogleNewsInput(TypedDict, total=False):
    """Input for Google News."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    query: Required[str]
    """News search query; supports operators like '-', 'OR', and 'site:' (e.g. bitcoin site:cnn.com)."""
    region: NotRequired[str]
    """Region and language for the search as COUNTRY:lang (e.g. US:en). Default: US:en."""
    timeframe: NotRequired[str]
    """Time window for results: 1h, 1d, 7d, 1y, or all (e.g. 1d). Default: 7d."""


class GoogleSearchInput(TypedDict, total=False):
    """Input for Google Search."""

    gl: NotRequired[str]
    """Two-letter country code for result localization (e.g. us, gb, de). Default: us."""
    query: Required[str]
    """The Google search query."""


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


class GoogleNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def images(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleImagesInput],
    ) -> RunResult[GoogleImagesData]:
        """Google Images

        Run a Google Images search and get structured results - image URLs,
        dimensions, titles, and source pages. **Price:** billed per result - $0.05
        per 1,000 requests base + $2.40 per 1,000 results, capped at $48.05 per
        1,000 requests.

        Price: $0.00005 per request plus $0.0024 per result.

        Example:
            res = client.google.images(limit=5, query="golden retriever")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.images", dict(input), options
        )
        return RunResult[GoogleImagesData].model_validate(raw)

    def news(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleNewsInput]
    ) -> RunResult[GoogleNewsData]:
        """Google News

        Search Google News by keyword and get fresh articles - headlines, sources,
        links, and publish times - as clean JSON. **Price:** $3.25 per 1,000
        requests (flat per request - same cost regardless of results returned).

        Price: $0.00325 per request.

        Example:
            res = client.google.news(limit=5, query="openai")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.news", dict(input), options
        )
        return RunResult[GoogleNewsData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearchInput],
    ) -> RunResult[GoogleSearchData]:
        """Google Search

        Run a Google web search and get the organic results (title, link, snippet,
        position) as clean JSON. **Price:** $0.99 per 1,000 requests (flat per
        request - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.search(query="best coffee maker")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google.search", dict(input), options
        )
        return RunResult[GoogleSearchData].model_validate(raw)


class AsyncGoogleNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def images(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleImagesInput],
    ) -> RunResult[GoogleImagesData]:
        """Google Images

        Run a Google Images search and get structured results - image URLs,
        dimensions, titles, and source pages. **Price:** billed per result - $0.05
        per 1,000 requests base + $2.40 per 1,000 results, capped at $48.05 per
        1,000 requests.

        Price: $0.00005 per request plus $0.0024 per result.

        Example:
            res = client.google.images(limit=5, query="golden retriever")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.images", dict(input), options
        )
        return RunResult[GoogleImagesData].model_validate(raw)

    async def news(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleNewsInput]
    ) -> RunResult[GoogleNewsData]:
        """Google News

        Search Google News by keyword and get fresh articles - headlines, sources,
        links, and publish times - as clean JSON. **Price:** $3.25 per 1,000
        requests (flat per request - same cost regardless of results returned).

        Price: $0.00325 per request.

        Example:
            res = client.google.news(limit=5, query="openai")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.news", dict(input), options
        )
        return RunResult[GoogleNewsData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearchInput],
    ) -> RunResult[GoogleSearchData]:
        """Google Search

        Run a Google web search and get the organic results (title, link, snippet,
        position) as clean JSON. **Price:** $0.99 per 1,000 requests (flat per
        request - same cost regardless of results returned).

        Price: $0.00099 per request.

        Example:
            res = client.google.search(query="best coffee maker")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google.search", dict(input), options
        )
        return RunResult[GoogleSearchData].model_validate(raw)
