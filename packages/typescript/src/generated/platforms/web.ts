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
   * Maximum number of pages to crawl and return (1-10, default 10). You are billed per page returned, so a lower limit costs less.
   * Range: minimum 1, maximum 10.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged. Name the output fields this request must be able to return, for example `language`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. Every source charges the same per page, so this never changes your price. A named field can still be empty on a page that genuinely lacks it.
   */
  requireFields?: (
    | "author"
    | "canonicalUrl"
    | "contentType"
    | "headings"
    | "jsonLd"
    | "language"
    | "modifiedUtc"
    | "publishedUtc"
    | "robots"
    | "siteName"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The website URL or domain to crawl. Pages linked from it on the same site are crawled too.
   */
  url: string;
}

export interface WebCrawlIssue {
  /**
   * failed: the page could not be fetched or answered with an HTTP error. robots_disallowed: the site's robots.txt does not allow crawling it. skipped: the crawl did not fetch it, for example because it is outside the crawled site.
   * One of: failed, robots_disallowed, skipped.
   */
  outcome: "failed" | "robots_disallowed" | "skipped";
  /**
   * The HTTP status code the page answered with, or null when unknown.
   */
  statusCode?: number | null;
  /**
   * The page's URL.
   */
  url: string;
  [extra: string]: unknown;
}

export interface WebCrawlItem {
  /**
   * The author the page declares, or null when unknown.
   */
  author?: string | null;
  /**
   * The canonical URL the page declares in its own markup, or null when it declares none or the source does not report it.
   */
  canonicalUrl?: string | null;
  /**
   * The content type the page was served with (for example text/html;charset=utf-8), or null when unknown.
   */
  contentType?: string | null;
  /**
   * The page's meta description, empty when the page has none.
   */
  description?: string;
  /**
   * The page's host name, without a leading www. Populated whenever the provider has data for the entity.
   */
  domain: string;
  /**
   * The page's headings in document order, each with its level (1 for an h1) and text, or null when the source does not report them.
   */
  headings?: WebCrawlHeading[] | null;
  /**
   * The JSON-LD structured data blocks the page publishes (schema.org Organization, LocalBusiness, BreadcrumbList and so on), as parsed JSON, or null when the source does not report them. They are the publisher's own claims, not verified facts.
   */
  jsonLd?: unknown[] | null;
  /**
   * The page's declared language code (for example en-US), or null when unknown.
   */
  language?: string | null;
  /**
   * When the page says it was last modified, as a UTC epoch timestamp in seconds (Unix time), or null when unknown. Multiply by 1000 for a JS Date in milliseconds.
   */
  modifiedUtc?: number | null;
  /**
   * When the page says it was published, as a UTC epoch timestamp in seconds (Unix time), or null when unknown. Multiply by 1000 for a JS Date in milliseconds.
   */
  publishedUtc?: number | null;
  /**
   * The page's robots meta directives (for example noindex, nofollow), or null when it declares none or the source does not report them.
   */
  robots?: string | null;
  /**
   * The site name the page declares (its og:site_name), or null when unknown.
   */
  siteName?: string | null;
  /**
   * The URL the crawler requested for this page, before any redirect, or null when unknown.
   */
  sourceUrl?: string | null;
  /**
   * The HTTP status code the page answered with, or null when unknown.
   */
  statusCode?: number | null;
  /**
   * The page content as Markdown. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * The page title, empty when the page has none (a PDF, for example).
   */
  title?: string;
  /**
   * The crawled page's URL, after any redirect. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

export interface WebCrawlHeading {
  /**
   * The heading level, 1 to 6.
   */
  level?: number;
  /**
   * The heading text.
   */
  text?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Website Crawl (web.crawl).
 */
export interface WebCrawlData {
  /**
   * Pages the crawl reported as failed or skipped. They are never in items and never billed. The list holds what the crawl reported, not every page of the site.
   */
  issues?: WebCrawlIssue[];
  /**
   * One record per crawled page: its URL and domain, page title, meta description, language, HTTP status, the page content as Markdown text, and the page metadata the source reports. You are billed for these pages only. Populated whenever the provider has data for the entity.
   */
  items: WebCrawlItem[];
  /**
   * Counts for this crawl. They describe the pages this crawl visited and reported, not the whole website, and are not added together into a total.
   */
  summary?: {
    /**
     * The number of pages in items, which is the number you are billed for.
     */
    pagesReturned: number;
    /**
     * The number of pages the crawl reported as failed, or null when the source does not report a complete count.
     */
    reportedFailed: number | null;
    /**
     * The number of pages the crawl reported as skipped, including those robots.txt disallows, or null when the source does not report a complete count.
     */
    reportedSkipped: number | null;
  };
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
   * The full web address of the page to scrape, including its domain, for example https://example.com. The https:// prefix is optional.
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
   * Crawl a website and get up to 10 of its pages as separate items, each with its URL, title, description, language, HTTP status, clean Markdown text and page metadata such as headings and structured data, ideal for feeding sites into LLMs and search indexes. Pages that failed or were skipped are listed separately and never billed.
   *
   * Price: $0 per request plus $0.00125 per result (maximum $0.0125).
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
   * Price: $0.0013 per request.
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
