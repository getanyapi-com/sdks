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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 10.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * When true (upstream default), strip ad and cookie-consent elements before capture. Set false to keep them.
   */
  blockAds?: boolean;
  /**
   * CSS selectors to drop before capture (for example ["nav", "footer", ".ads"]). Applied after includeTags.
   */
  excludeTags?: string[];
  /**
   * Which representations of the page to return. Any combination of: markdown (page content as Markdown), html (the page HTML exactly as the browser received it, including head and script tags). Each requested format is returned under the matching output field. Defaults to both. rawHtml is a deprecated alias of html, returned under a rawHtml field for callers that predate the rename; send html instead.
   */
  formats?: ("markdown" | "html" | "rawHtml")[];
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * CSS selectors to keep. When set, only content matching these selectors is captured (for example ["article", "main"] or ["#content"]).
   */
  includeTags?: string[];
  /**
   * When true, render the page with a mobile viewport and user agent instead of desktop. Some sites serve materially different content to mobile.
   */
  mobile?: boolean;
  /**
   * When true, return only the main article content, stripping navigation, headers, footers, and other boilerplate. Defaults to false to capture the full page.
   * Default: false.
   */
  onlyMainContent?: boolean;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The URL of the page to scrape.
   * Format: uri.
   */
  url: string;
  /**
   * Milliseconds to wait for the page to finish rendering before capture. Use this for JavaScript-heavy pages or single-page apps whose content loads after the initial paint. Capped at 15000 to stay within the request timeout. This wait is time you asked us to spend, so your response takes this much longer, and it is excluded from the latency published for this endpoint.
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
   * The page HTML exactly as the browser received it, head and script tags included. Present when 'html' is among the requested formats (the default).
   */
  html?: string;
  /**
   * Two-letter language code the page declares (its html lang attribute or the equivalent metadata).
   */
  language?: string;
  /**
   * The page content as clean Markdown. Present when 'markdown' is among the requested formats (the default). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  markdown?: string;
  /**
   * The same bytes as 'html'. Deprecated alias returned only when 'rawHtml' is among the requested formats; use 'html'.
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Crawl a website and get clean text content from up to 10 pages in one normalized response, ideal for feeding sites into LLMs and search indexes.
   *
   * Price: $0.00165 per request plus $0.0033 per result (maximum $0.0347).
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
   * Price: $0.001 per request.
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
   * Price: $0.0007 per request.
   *
   * @example
   * const res = await client.web.scrape({ url: "https://example.com", formats: ["markdown", "html"], onlyMainContent: false });
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
   * Price: $0.00174 per request plus $0 per result (maximum $0.00174).
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
