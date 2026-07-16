# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the web platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

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

    includeSubdomains: NotRequired[bool]
    """When true (upstream default), include URLs on subdomains of the target (for example docs.example.com when mapping example.com). Set false to return only URLs on the exact host."""
    limit: NotRequired[int]
    """Maximum number of links to return. Default: 100."""
    search: NotRequired[str]
    """Optional term that orders the returned links by relevance."""
    sitemap: NotRequired[Literal["include", "skip", "only"]]
    """How to use the site's sitemap.xml when discovering URLs. 'include' (upstream default) merges sitemap URLs with links found by crawling; 'only' returns just the URLs listed in the sitemap (fastest and most authoritative); 'skip' ignores the sitemap and discovers URLs by crawling links. Omit to use 'include'."""
    url: Required[str]
    """The base URL of the site to map into a list of links."""


class WebScrapeInput(TypedDict, total=False):
    """Input for Web Scrape."""

    blockAds: NotRequired[bool]
    """When true (upstream default), strip ad and cookie-consent elements before capture. Set false to keep them."""
    excludeTags: NotRequired[list[str]]
    """CSS selectors to drop before capture (for example ["nav", "footer", ".ads"]). Applied after includeTags."""
    formats: NotRequired[list[Literal["markdown", "html", "rawHtml"]]]
    """Which representations of the page to return. Any combination of: markdown (clean main content), html (cleaned HTML), rawHtml (verbatim page HTML). Each requested format is returned under the matching output field. Defaults to markdown only."""
    includeTags: NotRequired[list[str]]
    """CSS selectors to keep. When set, only content matching these selectors is captured (for example ["article", "main"] or ["#content"])."""
    mobile: NotRequired[bool]
    """When true, render the page with a mobile viewport and user agent instead of desktop. Some sites serve materially different content to mobile."""
    onlyMainContent: NotRequired[bool]
    """When true (default) return only the main article content, stripping navigation, headers, footers, and other boilerplate. Set false to capture the full page. Default: true."""
    url: Required[str]
    """The URL of the page to scrape."""
    waitFor: NotRequired[int]
    """Milliseconds to wait for the page to finish rendering before capture. Use this for JavaScript-heavy pages or single-page apps whose content loads after the initial paint. Capped at 15000 to stay within the request timeout. Range: 0 to 15000."""


class WebScreenshotInput(TypedDict, total=False):
    """Input for Website Screenshot."""

    url: Required[str]
    """The full URL of the page to capture."""
    viewportWidth: NotRequired[int]
    """Browser viewport width in pixels (e.g. 1280). Default: 1280."""


class WebCrawlData(BaseModel):
    items: list[WebCrawlItem] = Field(
        description="Crawled page records: URL, page title, and extracted text content for each page. Populated whenever the provider has data for the entity."
    )


class WebCrawlItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    domain: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    text: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class WebMapData(BaseModel):
    results: list[WebMapResult] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class WebMapResult(BaseModel):
    model_config = ConfigDict(extra="allow")

    description: str
    title: str
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class WebScrapeData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    description: str = Field(description="The page meta description.")
    html: str | None = Field(
        default=None,
        description="The cleaned page HTML. Present only when 'html' is among the requested formats.",
    )
    markdown: str = Field(
        description="The page content as clean Markdown. Present when 'markdown' is among the requested formats (the default). Populated whenever the provider has data for the entity."
    )
    raw_html: str | None = Field(
        default=None,
        alias="rawHtml",
        description="The verbatim page HTML before cleaning. Present only when 'rawHtml' is among the requested formats.",
    )
    title: str = Field(description="The page title from its metadata.")
    url: str = Field(
        description="The canonical source URL of the scraped page. Populated whenever the provider has data for the entity."
    )


class WebScreenshotData(BaseModel):
    items: list[WebScreenshotItem] = Field(
        description="Screenshot records: the requested page URL and a link to the captured image. Populated whenever the provider has data for the entity."
    )


class WebScreenshotItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    image: str | None = Field(
        default=None,
        description="Link to the captured screenshot image. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    url: str = Field(
        description="The final page URL that was captured. Populated whenever the provider has data for the entity."
    )


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

        Price: $0.0015 per request plus $0.003 per result (maximum $0.0315).

        Example:
            res = client.web.crawl(limit=3, url="https://example.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "web.crawl", dict(input), options
        )
        return RunResult[WebCrawlData].model_validate(raw)

    def map(
        self, *, options: RequestOptions | None = None, **input: Unpack[WebMapInput]
    ) -> RunResult[WebMapData]:
        """Web Map

        Map an entire website into a clean list of its URLs (with titles and
        descriptions) in a single call.

        Price: $0.0009 per request.

        Example:
            res = client.web.map(search="domain", url="https://www.iana.org")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "web.map", dict(input), options
        )
        return RunResult[WebMapData].model_validate(raw)

    def scrape(
        self, *, options: RequestOptions | None = None, **input: Unpack[WebScrapeInput]
    ) -> RunResult[WebScrapeData]:
        """Web Scrape

        Scrape any web page and get its content back as clean Markdown (or HTML, or
        raw HTML) plus title and metadata.

        Price: $0.0009 per request.

        Example:
            res = client.web.scrape(formats=["markdown", "html", "rawHtml"], onlyMainContent=True, url="https://example.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "web.scrape", dict(input), options
        )
        return RunResult[WebScrapeData].model_validate(raw)

    def screenshot(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WebScreenshotInput],
    ) -> RunResult[WebScreenshotData]:
        """Website Screenshot

        Capture a real-browser screenshot of any web page URL.

        Price: $0 per request plus $0.00158 per result (maximum $0.00158).

        Example:
            res = client.web.screenshot(url="https://example.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "web.screenshot", dict(input), options
        )
        return RunResult[WebScreenshotData].model_validate(raw)


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

        Price: $0.0015 per request plus $0.003 per result (maximum $0.0315).

        Example:
            res = client.web.crawl(limit=3, url="https://example.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "web.crawl", dict(input), options
        )
        return RunResult[WebCrawlData].model_validate(raw)

    async def map(
        self, *, options: RequestOptions | None = None, **input: Unpack[WebMapInput]
    ) -> RunResult[WebMapData]:
        """Web Map

        Map an entire website into a clean list of its URLs (with titles and
        descriptions) in a single call.

        Price: $0.0009 per request.

        Example:
            res = client.web.map(search="domain", url="https://www.iana.org")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "web.map", dict(input), options
        )
        return RunResult[WebMapData].model_validate(raw)

    async def scrape(
        self, *, options: RequestOptions | None = None, **input: Unpack[WebScrapeInput]
    ) -> RunResult[WebScrapeData]:
        """Web Scrape

        Scrape any web page and get its content back as clean Markdown (or HTML, or
        raw HTML) plus title and metadata.

        Price: $0.0009 per request.

        Example:
            res = client.web.scrape(formats=["markdown", "html", "rawHtml"], onlyMainContent=True, url="https://example.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "web.scrape", dict(input), options
        )
        return RunResult[WebScrapeData].model_validate(raw)

    async def screenshot(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WebScreenshotInput],
    ) -> RunResult[WebScreenshotData]:
        """Website Screenshot

        Capture a real-browser screenshot of any web page URL.

        Price: $0 per request plus $0.00158 per result (maximum $0.00158).

        Example:
            res = client.web.screenshot(url="https://example.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "web.screenshot", dict(input), options
        )
        return RunResult[WebScreenshotData].model_validate(raw)
