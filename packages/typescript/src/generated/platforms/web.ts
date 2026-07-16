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
  /**
   * Populated whenever the provider has data for the entity.
   */
  domain: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Website Crawl (web.crawl).
 */
export interface WebCrawlData {
  /**
   * Crawled page records: URL, page title, and extracted text content for each page. Populated whenever the provider has data for the entity.
   */
  items: WebCrawlItem[];
}

/**
 * Input for Web Map (web.map).
 */
export interface WebMapInput {
  /**
   * When true (upstream default), include URLs on subdomains of the target (for example docs.example.com when mapping example.com). Set false to return only URLs on the exact host.
   */
  includeSubdomains?: boolean;
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
   * How to use the site's sitemap.xml when discovering URLs. 'include' (upstream default) merges sitemap URLs with links found by crawling; 'only' returns just the URLs listed in the sitemap (fastest and most authoritative); 'skip' ignores the sitemap and discovers URLs by crawling links. Omit to use 'include'.
   * One of: include, skip, only.
   */
  sitemap?: "include" | "skip" | "only";
  /**
   * The base URL of the site to map into a list of links.
   * Format: uri.
   */
  url: string;
}

export interface WebMapResult {
  description: string;
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Web Map (web.map).
 */
export interface WebMapData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  results: WebMapResult[];
}

/**
 * Input for Web Scrape (web.scrape).
 */
export interface WebScrapeInput {
  /**
   * When true (upstream default), strip ad and cookie-consent elements before capture. Set false to keep them.
   */
  blockAds?: boolean;
  /**
   * CSS selectors to drop before capture (for example ["nav", "footer", ".ads"]). Applied after includeTags.
   */
  excludeTags?: string[];
  /**
   * Which representations of the page to return. Any combination of: markdown (clean main content), html (cleaned HTML), rawHtml (verbatim page HTML). Each requested format is returned under the matching output field. Defaults to markdown only.
   */
  formats?: ("markdown" | "html" | "rawHtml")[];
  /**
   * CSS selectors to keep. When set, only content matching these selectors is captured (for example ["article", "main"] or ["#content"]).
   */
  includeTags?: string[];
  /**
   * When true, render the page with a mobile viewport and user agent instead of desktop. Some sites serve materially different content to mobile.
   */
  mobile?: boolean;
  /**
   * When true (default) return only the main article content, stripping navigation, headers, footers, and other boilerplate. Set false to capture the full page.
   * Default: true.
   */
  onlyMainContent?: boolean;
  /**
   * The URL of the page to scrape.
   * Format: uri.
   */
  url: string;
  /**
   * Milliseconds to wait for the page to finish rendering before capture. Use this for JavaScript-heavy pages or single-page apps whose content loads after the initial paint. Capped at 15000 to stay within the request timeout.
   * Range: minimum 0, maximum 15000.
   */
  waitFor?: number;
}

/**
 * The `data` payload of Web Scrape (web.scrape).
 */
export interface WebScrapeData {
  /**
   * The page meta description.
   */
  description: string;
  /**
   * The cleaned page HTML. Present only when 'html' is among the requested formats.
   */
  html?: string;
  /**
   * The page content as clean Markdown. Present when 'markdown' is among the requested formats (the default). Populated whenever the provider has data for the entity.
   */
  markdown: string;
  /**
   * The verbatim page HTML before cleaning. Present only when 'rawHtml' is among the requested formats.
   */
  rawHtml?: string;
  /**
   * The page title from its metadata.
   */
  title: string;
  /**
   * The canonical source URL of the scraped page. Populated whenever the provider has data for the entity.
   */
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
   * Link to the captured screenshot image. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * The final page URL that was captured. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Website Screenshot (web.screenshot).
 */
export interface WebScreenshotData {
  /**
   * Screenshot records: the requested page URL and a link to the captured image. Populated whenever the provider has data for the entity.
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
   * Price: $0.0015 per request plus $0.003 per result (maximum $0.0315).
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
   * Map an entire website into a clean list of its URLs (with titles and descriptions) in a single call.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.web.map({ url: "https://www.iana.org", search: "domain" });
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
   * Scrape any web page and get its content back as clean Markdown (or HTML, or raw HTML) plus title and metadata.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.web.scrape({ url: "https://example.com", formats: ["markdown", "html", "rawHtml"], onlyMainContent: true });
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
   * Capture a real-browser screenshot of any web page URL.
   *
   * Price: $0 per request plus $0.00158 per result (maximum $0.00158).
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
