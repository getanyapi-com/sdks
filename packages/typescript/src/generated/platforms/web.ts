// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Website Crawl (web.crawl).
 */
export interface WebCrawlInput {
  /**
   * Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 10.
   */
  limit?: number;
  /**
   * The website URL or domain to crawl.
   */
  url: string;
}

export interface WebCrawlItem {
  domain: string;
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Website Crawl (web.crawl).
 */
export interface WebCrawlData {
  /**
   * Crawled page records: URL, page title, and extracted text content for each page.
   */
  items: WebCrawlItem[];
}

/**
 * Input for Web Map (web.map).
 */
export interface WebMapInput {
  /**
   * Maximum number of links to return.
   * Default: 100.
   */
  limit?: number;
  /**
   * Optional term that orders the returned links by relevance.
   */
  search?: string;
  /**
   * The base URL of the site to map into a list of links.
   * Format: uri.
   */
  url: string;
}

export interface WebMapResult {
  description: string;
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Web Map (web.map).
 */
export interface WebMapData {
  results: WebMapResult[];
}

/**
 * Input for Web Scrape (web.scrape).
 */
export interface WebScrapeInput {
  /**
   * The URL of the page to scrape.
   * Format: uri.
   */
  url: string;
}

/**
 * The `data` payload of Web Scrape (web.scrape).
 */
export interface WebScrapeData {
  description: string;
  markdown: string;
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * Input for Website Screenshot (web.screenshot).
 */
export interface WebScreenshotInput {
  /**
   * The full URL of the page to capture.
   */
  url: string;
  /**
   * Browser viewport width in pixels (e.g. 1280).
   * Default: 1280.
   */
  viewportWidth?: number;
}

export interface WebScreenshotItem {
  /**
   * Present whenever the upstream returns this record.
   */
  image?: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Website Screenshot (web.screenshot).
 */
export interface WebScreenshotData {
  /**
   * Screenshot records: the requested page URL and a link to the captured image.
   */
  items: WebScreenshotItem[];
}

/**
 * Typed methods for the web platform. Attached to the AnyAPI client as
 * `client.web`.
 */
export class WebNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Website Crawl
   *
   * Crawl a website and get clean text content from up to 10 pages in one normalized response - ideal for feeding sites into LLMs and search indexes.
   *
   * Price: $0.0015 per request plus $0.003 per result.
   *
   * @example
   * const res = await client.web.crawl({ url: "https://example.com", limit: 3 });
   */
  crawl(
    input: WebCrawlInput,
    options?: RequestOptions,
  ): Promise<RunResult<WebCrawlData>> {
    return this._core.run("web.crawl", input, options);
  }

  /**
   * Web Map
   *
   * Map an entire website into a clean list of its URLs (with titles and descriptions) in a single call. Billed per request in real dollars.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.web.map({ url: "https://example.com" });
   */
  map(
    input: WebMapInput,
    options?: RequestOptions,
  ): Promise<RunResult<WebMapData>> {
    return this._core.run("web.map", input, options);
  }

  /**
   * Web Scrape
   *
   * Scrape any web page and get its main content back as clean Markdown plus title and metadata. One call, billed per request in real dollars.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.web.scrape({ url: "https://example.com" });
   */
  scrape(
    input: WebScrapeInput,
    options?: RequestOptions,
  ): Promise<RunResult<WebScrapeData>> {
    return this._core.run("web.scrape", input, options);
  }

  /**
   * Website Screenshot
   *
   * Capture a real-browser screenshot of any web page URL, with transparent per-request USD pricing.
   *
   * Price: $0.00158 per result.
   *
   * @example
   * const res = await client.web.screenshot({ url: "https://example.com" });
   */
  screenshot(
    input: WebScreenshotInput,
    options?: RequestOptions,
  ): Promise<RunResult<WebScreenshotData>> {
    return this._core.run("web.screenshot", input, options);
  }
}
