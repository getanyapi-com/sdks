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
        description="Image result records: image URL, dimensions, title, and the source page it appears on. Populated whenever the provider returns data."
    )


class GoogleImagesItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class GoogleNewsData(BaseModel):
    items: list[GoogleNewsItem] = Field(
        description="Article records: headline, source name, article link, and publish time. Populated whenever the provider returns data."
    )


class GoogleNewsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    publishedAt: str | None = Field(
        default=None,
        description="Publish time. Populated whenever the provider returns data.",
    )
    snippet: str | None = Field(
        default=None, description="Article snippet when available."
    )
    source: str | None = Field(
        default=None,
        description="Publisher name. Populated whenever the provider returns data.",
    )
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(
        description="Article link. Populated whenever the provider returns data."
    )


class GoogleSearchData(BaseModel):
    query: str
    results: list[GoogleSearchResult] = Field(
        description="Populated whenever the provider returns data."
    )


class GoogleSearchResult(BaseModel):
    model_config = ConfigDict(extra="allow")

    link: str = Field(description="Populated whenever the provider returns data.")
    position: int
    snippet: str = Field(description="Populated whenever the provider returns data.")
    title: str = Field(description="Populated whenever the provider returns data.")


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
        dimensions, titles, and source pages - with flat per-request USD pricing.

        Price: $0.0024 per result.

        Example:
            res = client.google.images(limit=5, query="golden retriever")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "google.images", dict(input), options
        )
        return RunResult[GoogleImagesData].model_validate(raw.model_dump(by_alias=True))

    def news(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleNewsInput]
    ) -> RunResult[GoogleNewsData]:
        """Google News

        Search Google News by keyword and get fresh articles - headlines, sources,
        links, and publish times - as clean JSON, billed per request in USD.

        Price: $0.00325 per request.

        Example:
            res = client.google.news(limit=5, query="openai")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "google.news", dict(input), options
        )
        return RunResult[GoogleNewsData].model_validate(raw.model_dump(by_alias=True))

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearchInput],
    ) -> RunResult[GoogleSearchData]:
        """Google Search

        Run a Google web search and get the organic results (title, link, snippet,
        position) as clean JSON. One call, billed per request in real dollars.

        Price: $0.00099 per request.

        Example:
            res = client.google.search(query="best coffee maker")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "google.search", dict(input), options
        )
        return RunResult[GoogleSearchData].model_validate(raw.model_dump(by_alias=True))


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
        dimensions, titles, and source pages - with flat per-request USD pricing.

        Price: $0.0024 per result.

        Example:
            res = client.google.images(limit=5, query="golden retriever")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "google.images", dict(input), options
        )
        return RunResult[GoogleImagesData].model_validate(raw.model_dump(by_alias=True))

    async def news(
        self, *, options: RequestOptions | None = None, **input: Unpack[GoogleNewsInput]
    ) -> RunResult[GoogleNewsData]:
        """Google News

        Search Google News by keyword and get fresh articles - headlines, sources,
        links, and publish times - as clean JSON, billed per request in USD.

        Price: $0.00325 per request.

        Example:
            res = client.google.news(limit=5, query="openai")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "google.news", dict(input), options
        )
        return RunResult[GoogleNewsData].model_validate(raw.model_dump(by_alias=True))

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleSearchInput],
    ) -> RunResult[GoogleSearchData]:
        """Google Search

        Run a Google web search and get the organic results (title, link, snippet,
        position) as clean JSON. One call, billed per request in real dollars.

        Price: $0.00099 per request.

        Example:
            res = client.google.search(query="best coffee maker")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "google.search", dict(input), options
        )
        return RunResult[GoogleSearchData].model_validate(raw.model_dump(by_alias=True))
