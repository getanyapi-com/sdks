// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Google Images (google.images).
 */
export interface GoogleImagesInput {
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Image search query (e.g. golden gate bridge at sunset).
   */
  query: string;
}

export interface GoogleImagesItem {
  /**
   * Full image height in pixels.
   */
  height?: number;
  /**
   * Host domain of the page the image appears on. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  source?: string;
  /**
   * URL of the page the image appears on. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sourceUrl?: string;
  /**
   * URL to a thumbnail of the image.
   */
  thumbnailUrl?: string;
  /**
   * Image result title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Direct URL to the full-size image. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Full image width in pixels.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Images (google.images).
 */
export interface GoogleImagesData {
  /**
   * Image result records: image URL, dimensions, title, and the source page it appears on. Populated whenever the provider has data for the entity.
   */
  items: GoogleImagesItem[];
}

/**
 * Input for Google News (google.news).
 */
export interface GoogleNewsInput {
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * News search query; supports operators like '-', 'OR', and 'site:' (e.g. bitcoin site:cnn.com).
   */
  query: string;
  /**
   * Region and language for the search as COUNTRY:lang (e.g. US:en).
   * Default: US:en.
   */
  region?: string;
  /**
   * Time window for results: 1h, 1d, 7d, 1y, or all (e.g. 1d).
   * Default: 7d.
   */
  timeframe?: string;
}

export interface GoogleNewsItem {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Article snippet when available.
   */
  snippet?: string;
  /**
   * Publisher name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  source?: string;
  /**
   * Article headline. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Article link. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google News (google.news).
 */
export interface GoogleNewsData {
  /**
   * Article records: headline, source name, article link, and publish time. Populated whenever the provider has data for the entity.
   */
  items: GoogleNewsItem[];
}

/**
 * Input for Google Search (google.search).
 */
export interface GoogleSearchInput {
  /**
   * Two-letter country code for result localization (e.g. us, gb, de).
   * Default: us.
   */
  gl?: string;
  /**
   * The Google search query.
   */
  query: string;
}

export interface GoogleSearchResult {
  /**
   * Populated whenever the provider has data for the entity.
   */
  link: string;
  position: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  snippet: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Search (google.search).
 */
export interface GoogleSearchData {
  query: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  results: GoogleSearchResult[];
}

/**
 * Typed methods for the google platform. Attached to the AnyAPI client as
 * `client.google`.
 */
export class GoogleNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Images
   *
   * Run a Google Images search and get structured results - image URLs, dimensions, titles, and source pages.

**Price:** billed per result - $0.05 per 1,000 requests base + $2.40 per 1,000 results, capped at $48.05 per 1,000 requests.
   *
   * Price: $0.00005 per request plus $0.0024 per result.
   *
   * @example
   * const res = await client.google.images({ query: "golden retriever", limit: 5 });
   */
  images(
    input: GoogleImagesInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleImagesData>> {
    return this._core.run("google.images", input, options);
  }

  /**
   * Google News
   *
   * Search Google News by keyword and get fresh articles - headlines, sources, links, and publish times - as clean JSON.

**Price:** $3.25 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.google.news({ query: "openai", limit: 5 });
   */
  news(
    input: GoogleNewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleNewsData>> {
    return this._core.run("google.news", input, options);
  }

  /**
   * Google Search
   *
   * Run a Google web search and get the organic results (title, link, snippet, position) as clean JSON.

**Price:** $0.99 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.00099 per request.
   *
   * @example
   * const res = await client.google.search({ query: "best coffee maker" });
   */
  search(
    input: GoogleSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleSearchData>> {
    return this._core.run("google.search", input, options);
  }
}
