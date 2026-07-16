// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
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

export interface GoogleAutocompleteSuggestion {
  /**
   * Suggested query text. Populated whenever the provider has data for the entity.
   */
  value: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Autocomplete (google.autocomplete).
 */
export interface GoogleAutocompleteData {
  /**
   * The partial query that was searched.
   */
  query: string;
  /**
   * Autocomplete suggestion records. Populated whenever the provider has data for the entity.
   */
  suggestions: GoogleAutocompleteSuggestion[];
}

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
 * Input for Google Lens (google.lens).
 */
export interface GoogleLensInput {
  /**
   * Public URL of the image to search with.
   * Format: uri.
   */
  url: string;
}

export interface GoogleLensResult {
  /**
   * Matched image URL.
   * Format: uri.
   */
  image?: string;
  /**
   * URL to the matching web page. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  link: string;
  /**
   * Source site name.
   */
  source?: string;
  /**
   * Thumbnail image URL for the match.
   * Format: uri.
   */
  thumbnailUrl?: string;
  /**
   * Title of the matching web page. Populated whenever the provider has data for the entity.
   */
  title: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Lens (google.lens).
 */
export interface GoogleLensData {
  /**
   * Visual match result records. Populated whenever the provider has data for the entity.
   */
  results: GoogleLensResult[];
  /**
   * The input image URL that was searched.
   */
  url: string;
}

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
 * Input for Google Patents (google.patents).
 */
export interface GooglePatentsInput {
  /**
   * The Google Patents search query.
   */
  query: string;
}

export interface GooglePatentsResult {
  /**
   * Patent assignee.
   */
  assignee?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  filedUtc?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  grantedUtc?: number;
  /**
   * First patent figure thumbnail image URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Named inventor or inventors.
   */
  inventor?: string;
  /**
   * URL to the patent. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  link: string;
  /**
   * URL to an available patent PDF.
   * Format: uri.
   */
  pdfUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  priorityUtc?: number;
  /**
   * Patent publication number (e.g. US11303135B2). Populated whenever the provider has data for the entity.
   */
  publicationNumber: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  publishedUtc?: number;
  /**
   * Short patent description snippet.
   */
  snippet?: string;
  /**
   * Patent title. Populated whenever the provider has data for the entity.
   */
  title: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Patents (google.patents).
 */
export interface GooglePatentsData {
  /**
   * The query that was searched.
   */
  query: string;
  /**
   * Patent result records.
   */
  results: GooglePatentsResult[];
}

/**
 * Input for Google Scholar (google.scholar).
 */
export interface GoogleScholarInput {
  /**
   * The Google Scholar search query.
   */
  query: string;
}

export interface GoogleScholarResult {
  /**
   * Number of citations reported by Google Scholar.
   */
  citedBy?: number;
  /**
   * Result identifier.
   */
  id?: string;
  /**
   * URL to the paper. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  link: string;
  /**
   * URL to an available PDF.
   * Format: uri.
   */
  pdfUrl?: string;
  /**
   * Authors, venue, and publication year.
   */
  publicationInfo?: string;
  /**
   * Short paper description snippet.
   */
  snippet?: string;
  /**
   * Paper title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Publication year.
   */
  year?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Scholar (google.scholar).
 */
export interface GoogleScholarData {
  /**
   * The query that was searched.
   */
  query: string;
  /**
   * Academic paper result records.
   */
  results: GoogleScholarResult[];
}

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

export interface GoogleVideosResult {
  /**
   * Thumbnail image URL for the video.
   * Format: uri.
   */
  image?: string;
  /**
   * URL to the video. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  link: string;
  /**
   * 1-based rank in the result list.
   */
  position?: number;
  /**
   * Short description snippet.
   */
  snippet?: string;
  /**
   * Host platform (e.g. YouTube, Vimeo).
   */
  source?: string;
  /**
   * Video title. Populated whenever the provider has data for the entity.
   */
  title: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Videos (google.videos).
 */
export interface GoogleVideosData {
  /**
   * The query that was searched.
   */
  query: string;
  /**
   * Video result records. Populated whenever the provider has data for the entity.
   */
  results: GoogleVideosResult[];
}

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
  ): Promise<RunResult<GoogleAutocompleteData>> {
    return this._core.run("google.autocomplete", input, options);
  }

  /**
   * Google Images
   *
   * Run a Google Images search and get structured results - image URLs, dimensions, titles, and source pages.
   *
   * Price: $0.00099 per request plus $0.00009 per result (maximum $0.00198).
   *
   * @example
   * const res = await client.google.images({ query: "golden retriever", gl: "us", hl: "en", limit: 5 });
   */
  images(
    input: GoogleImagesInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleImagesData>> {
    return this._core.run("google.images", input, options);
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
  ): Promise<RunResult<GoogleLensData>> {
    return this._core.run("google.lens", input, options);
  }

  /**
   * Google News
   *
   * Search Google News by keyword and get fresh articles - headlines, sources, links, and publish times - as clean JSON.
   *
   * Price: $0.00099 per request.
   *
   * @example
   * const res = await client.google.news({ query: "openai", gl: "us", hl: "en" });
   */
  news(
    input: GoogleNewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleNewsData>> {
    return this._core.run("google.news", input, options);
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
  ): Promise<RunResult<GooglePatentsData>> {
    return this._core.run("google.patents", input, options);
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
  ): Promise<RunResult<GoogleScholarData>> {
    return this._core.run("google.scholar", input, options);
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
  ): Promise<RunResult<GoogleSearchData>> {
    return this._core.run("google.search", input, options);
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
  ): Promise<RunResult<GoogleVideosData>> {
    return this._core.run("google.videos", input, options);
  }
}
