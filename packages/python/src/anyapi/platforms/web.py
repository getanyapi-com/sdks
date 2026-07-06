# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the web platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class WebCrawlInput(TypedDict, total=False):
    """Input for Website Crawl."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less. Range: 1 to 10."""
    url: Required[str]
    """The website URL or domain to crawl."""


class WebMapInput(TypedDict, total=False):
    """Input for Web Map."""

    limit: NotRequired[int]
    """Maximum number of links to return. Default: 100."""
    search: NotRequired[str]
    """Optional term that orders the returned links by relevance."""
    url: Required[str]
    """The base URL of the site to map into a list of links."""


class WebScrapeInput(TypedDict, total=False):
    """Input for Web Scrape."""

    url: Required[str]
    """The URL of the page to scrape."""


class WebScreenshotInput(TypedDict, total=False):
    """Input for Website Screenshot."""

    url: Required[str]
    """The full URL of the page to capture."""
    viewportWidth: NotRequired[int]
    """Browser viewport width in pixels (e.g. 1280). Default: 1280."""


class WebCrawlData(BaseModel):
    items: list[WebCrawlItem] = Field(
        description="Crawled page records: URL, page title, and extracted text content for each page. Populated whenever the provider returns data."
    )


class WebCrawlItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    domain: str = Field(description="Populated whenever the provider returns data.")
    text: str = Field(description="Populated whenever the provider returns data.")


class WebMapData(BaseModel):
    results: list[WebMapResult] = Field(
        description="Populated whenever the provider returns data."
    )


class WebMapResult(BaseModel):
    model_config = ConfigDict(extra="allow")

    description: str
    title: str
    url: str = Field(description="Populated whenever the provider returns data.")


class WebScrapeData(BaseModel):
    model_config = ConfigDict(extra="allow")

    description: str
    markdown: str = Field(description="Populated whenever the provider returns data.")
    title: str
    url: str = Field(description="Populated whenever the provider returns data.")


class WebScreenshotData(BaseModel):
    items: list[WebScreenshotItem] = Field(
        description="Screenshot records: the requested page URL and a link to the captured image. Populated whenever the provider returns data."
    )


class WebScreenshotItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    image: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    url: str = Field(description="Populated whenever the provider returns data.")


class WebNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def crawl(
        self, *, options: RequestOptions | None = None, **input: Unpack[WebCrawlInput]
    ) -> RunResult[WebCrawlData]:
        """Website Crawl

        Crawl a website and get clean text content from up to 10 pages in one
        normalized response - ideal for feeding sites into LLMs and search indexes.

        Price: $0.003 per result.

        Example:
            res = client.web.crawl(limit=3, url="https://example.com")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "web.crawl", dict(input), options
        )
        return RunResult[WebCrawlData].model_validate(raw.model_dump(by_alias=True))

    def map(
        self, *, options: RequestOptions | None = None, **input: Unpack[WebMapInput]
    ) -> RunResult[WebMapData]:
        """Web Map

        Map an entire website into a clean list of its URLs (with titles and
        descriptions) in a single call. Billed per request in real dollars.

        Price: $0.0009 per request.

        Example:
            res = client.web.map(url="https://example.com")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "web.map", dict(input), options
        )
        return RunResult[WebMapData].model_validate(raw.model_dump(by_alias=True))

    def scrape(
        self, *, options: RequestOptions | None = None, **input: Unpack[WebScrapeInput]
    ) -> RunResult[WebScrapeData]:
        """Web Scrape

        Scrape any web page and get its main content back as clean Markdown plus
        title and metadata. One call, billed per request in real dollars.

        Price: $0.0009 per request.

        Example:
            res = client.web.scrape(url="https://example.com")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "web.scrape", dict(input), options
        )
        return RunResult[WebScrapeData].model_validate(raw.model_dump(by_alias=True))

    def screenshot(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WebScreenshotInput],
    ) -> RunResult[WebScreenshotData]:
        """Website Screenshot

        Capture a real-browser screenshot of any web page URL, with transparent
        per-request USD pricing.

        Price: $0.00158 per result.

        Example:
            res = client.web.screenshot(url="https://example.com")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "web.screenshot", dict(input), options
        )
        return RunResult[WebScreenshotData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncWebNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def crawl(
        self, *, options: RequestOptions | None = None, **input: Unpack[WebCrawlInput]
    ) -> RunResult[WebCrawlData]:
        """Website Crawl

        Crawl a website and get clean text content from up to 10 pages in one
        normalized response - ideal for feeding sites into LLMs and search indexes.

        Price: $0.003 per result.

        Example:
            res = client.web.crawl(limit=3, url="https://example.com")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "web.crawl", dict(input), options
        )
        return RunResult[WebCrawlData].model_validate(raw.model_dump(by_alias=True))

    async def map(
        self, *, options: RequestOptions | None = None, **input: Unpack[WebMapInput]
    ) -> RunResult[WebMapData]:
        """Web Map

        Map an entire website into a clean list of its URLs (with titles and
        descriptions) in a single call. Billed per request in real dollars.

        Price: $0.0009 per request.

        Example:
            res = client.web.map(url="https://example.com")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "web.map", dict(input), options
        )
        return RunResult[WebMapData].model_validate(raw.model_dump(by_alias=True))

    async def scrape(
        self, *, options: RequestOptions | None = None, **input: Unpack[WebScrapeInput]
    ) -> RunResult[WebScrapeData]:
        """Web Scrape

        Scrape any web page and get its main content back as clean Markdown plus
        title and metadata. One call, billed per request in real dollars.

        Price: $0.0009 per request.

        Example:
            res = client.web.scrape(url="https://example.com")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "web.scrape", dict(input), options
        )
        return RunResult[WebScrapeData].model_validate(raw.model_dump(by_alias=True))

    async def screenshot(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WebScreenshotInput],
    ) -> RunResult[WebScreenshotData]:
        """Website Screenshot

        Capture a real-browser screenshot of any web page URL, with transparent
        per-request USD pricing.

        Price: $0.00158 per result.

        Example:
            res = client.web.screenshot(url="https://example.com")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "web.screenshot", dict(input), options
        )
        return RunResult[WebScreenshotData].model_validate(
            raw.model_dump(by_alias=True)
        )
