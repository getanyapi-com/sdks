// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Google Autocomplete (google.autocomplete).
 */
export interface GoogleAutocompleteInput {
  /**
   * Two-letter country code for result localization (e.g. us, gb, de).
   * Default: us.
   */
  gl?: string;
  /**
   * Two-letter interface and results language code for the suggestions (e.g. en, es, de).
   * Default: en.
   */
  hl?: string;
  /**
   * The partial Google search query.
   */
  query: string;
}

export type GoogleAutocompleteData = unknown;

/**
 * Input for Google Images (google.images).
 */
export interface GoogleImagesInput {
  /**
   * Toggle Google spelling autocorrect (default true). Set false to search the exact query without correction.
   */
  autocorrect?: boolean;
  /**
   * Two-letter country code for result localization (e.g. us, gb, de).
   * Default: us.
   */
  gl?: string;
  /**
   * Two-letter interface and results language code (e.g. en, es, de).
   * Default: en.
   */
  hl?: string;
  /**
   * Maximum number of images to return (1-100, default 20). Requests for 10 results or fewer are billed at a lower rate than larger requests.
   * Range: minimum 1, maximum 100.
   * Default: 20.
   */
  limit?: number;
  /**
   * Fine-grained location for result localization, given as a canonical Google location string (e.g. 'New York, United States', 'London, United Kingdom'). More specific than the country-level gl.
   */
  location?: string;
  /**
   * Image search query (e.g. golden gate bridge at sunset).
   */
  query: string;
  /**
   * Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction).
   */
  timeframe?: string;
}

export type GoogleImagesData = unknown;

/**
 * Input for Google Lens (google.lens).
 */
export interface GoogleLensInput {
  /**
   * Public URL of the image to search with.
   * Format: uri.
   */
  url: string;
}

export type GoogleLensData = unknown;

/**
 * Input for Google News (google.news).
 */
export interface GoogleNewsInput {
  /**
   * Two-letter country code for result localization (e.g. us, gb, de).
   * Default: us.
   */
  gl?: string;
  /**
   * Two-letter interface and results language code (e.g. en, es, de).
   * Default: en.
   */
  hl?: string;
  /**
   * Requested article count (1-20, default 20). Google News returns its latest matching articles and may return more or fewer than requested. Price is flat per request.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Fine-grained location for result localization, given as a canonical Google location string (e.g. 'New York, United States', 'London, United Kingdom'). More specific than the country-level gl.
   */
  location?: string;
  /**
   * News search query; supports operators like '-', 'OR', and 'site:' (e.g. bitcoin site:cnn.com).
   */
  query: string;
  /**
   * Time window for results: 1h, 1d, 7d, 1y, or all (e.g. 1d).
   * Default: 7d.
   */
  timeframe?: string;
}

export type GoogleNewsData = unknown;

/**
 * Input for Google Patents (google.patents).
 */
export interface GooglePatentsInput {
  /**
   * The Google Patents search query.
   */
  query: string;
}

export type GooglePatentsData = unknown;

/**
 * Input for Google Scholar (google.scholar).
 */
export interface GoogleScholarInput {
  /**
   * The Google Scholar search query.
   */
  query: string;
}

export type GoogleScholarData = unknown;

/**
 * Input for Google Search (google.search).
 */
export interface GoogleSearchInput {
  /**
   * Toggle Google spelling autocorrect (default true). Set false to search the exact query without correction.
   */
  autocorrect?: boolean;
  /**
   * Two-letter country code for result localization (e.g. us, gb, de).
   * Default: us.
   */
  gl?: string;
  /**
   * Two-letter interface and results language code (e.g. en, es, de).
   * Default: en.
   */
  hl?: string;
  /**
   * Maximum number of organic results to return (1-100, default 10). Google may return fewer if the query is narrow. Price is flat per request.
   * Range: minimum 1, maximum 100.
   * Default: 10.
   */
  limit?: number;
  /**
   * Fine-grained location for result localization, given as a canonical Google location string (e.g. 'New York, United States', 'London, United Kingdom'). More specific than the country-level gl.
   */
  location?: string;
  /**
   * The Google search query.
   */
  query: string;
  /**
   * Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction).
   */
  timeframe?: string;
}

export type GoogleSearchData = unknown;

/**
 * Input for Google Videos (google.videos).
 */
export interface GoogleVideosInput {
  /**
   * Toggle Google spelling autocorrect (default true). Set false to search the exact query without correction.
   */
  autocorrect?: boolean;
  /**
   * Two-letter country code for result localization (e.g. us, gb, de).
   * Default: us.
   */
  gl?: string;
  /**
   * Two-letter interface and results language code (e.g. en, es, de).
   * Default: en.
   */
  hl?: string;
  /**
   * Fine-grained location for result localization, given as a canonical Google location string (e.g. 'New York, United States', 'London, United Kingdom'). More specific than the country-level gl.
   */
  location?: string;
  /**
   * The video search query.
   */
  query: string;
  /**
   * Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction).
   */
  timeframe?: string;
}

export type GoogleVideosData = unknown;

/**
 * Typed methods for the google platform. Attached to the AnyAPI client as
 * `client.google`.
 */
export class GoogleNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Autocomplete
   *
   * Get Google search autocomplete suggestions for a partial query (keyword ideas).
   *
   * Price: $0.00099 per request.
   *
   * @example
   * const res = await client.google.autocomplete({ query: "best coff" });
   */
  autocomplete(
    input: GoogleAutocompleteInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GoogleAutocompleteData>> {
    return this._core.run(
      "google.autocomplete",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GoogleAutocompleteData>>;
  }

  /**
   * Google Images
   *
   * Run a Google Images search and get structured results: image URLs, dimensions, titles, and source pages.
   *
   * Price: $0.00099 per request plus $0.00009 per result (maximum $0.00198).
   *
   * @example
   * const res = await client.google.images({ query: "golden retriever", gl: "us", hl: "en", limit: 5 });
   */
  images(
    input: GoogleImagesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GoogleImagesData>> {
    return this._core.run(
      "google.images",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GoogleImagesData>>;
  }

  /**
   * Google Lens
   *
   * Reverse image search: find web pages and visual matches for an image URL.
   *
   * Price: $0.00297 per request.
   *
   * @example
   * const res = await client.google.lens({ url: "https://i.imgur.com/HBrB8p0.png" });
   */
  lens(
    input: GoogleLensInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GoogleLensData>> {
    return this._core.run("google.lens", input, options) as unknown as Promise<
      BareRunResult<GoogleLensData>
    >;
  }

  /**
   * Google News
   *
   * Search Google News by keyword and get fresh articles (headlines, sources, links, and publish times) as clean JSON.
   *
   * Price: $0.00099 per request.
   *
   * @example
   * const res = await client.google.news({ query: "openai", gl: "us", hl: "en" });
   */
  news(
    input: GoogleNewsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GoogleNewsData>> {
    return this._core.run("google.news", input, options) as unknown as Promise<
      BareRunResult<GoogleNewsData>
    >;
  }

  /**
   * Google Patents
   *
   * Search Google Patents with title, patent number, inventor, assignee, key dates, and PDF link.
   *
   * Price: $0.00099 per request.
   *
   * @example
   * const res = await client.google.patents({ query: "wireless charging" });
   */
  patents(
    input: GooglePatentsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GooglePatentsData>> {
    return this._core.run(
      "google.patents",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GooglePatentsData>>;
  }

  /**
   * Google Scholar
   *
   * Search Google Scholar for academic papers with title, authors, citation count, and PDF link.
   *
   * Price: $0.00099 per request.
   *
   * @example
   * const res = await client.google.scholar({ query: "attention is all you need" });
   */
  scholar(
    input: GoogleScholarInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GoogleScholarData>> {
    return this._core.run(
      "google.scholar",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GoogleScholarData>>;
  }

  /**
   * Google Search
   *
   * Run a Google web search and get the organic results (title, link, snippet, position) as clean JSON.
   *
   * Price: $0.00099 per request.
   *
   * @example
   * const res = await client.google.search({ query: "best coffee maker", gl: "us", hl: "en", limit: 10 });
   */
  search(
    input: GoogleSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GoogleSearchData>> {
    return this._core.run(
      "google.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GoogleSearchData>>;
  }

  /**
   * Google Videos
   *
   * Search Google for video results (YouTube and others) with title, link, thumbnail, and source.
   *
   * Price: $0.00099 per request.
   *
   * @example
   * const res = await client.google.videos({ query: "lofi hip hop", gl: "us", hl: "en" });
   */
  videos(
    input: GoogleVideosInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GoogleVideosData>> {
    return this._core.run(
      "google.videos",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GoogleVideosData>>;
  }
}
