// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Google AI Mode (google.ai_mode).
 */
export interface GoogleAiModeInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The question or prompt to answer with Google AI Mode.
   */
  prompt: string;
}

export interface GoogleAiModeCitation {
  /**
   * The cited source title.
   */
  title: string;
  /**
   * The cited source URL.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google AI Mode (google.ai_mode).
 */
export interface GoogleAiModeData {
  /**
   * The answer as plain text, as Google generated it for this search. Length and coverage vary between searches on the same prompt. Populated whenever the provider has data for the entity.
   */
  answer: string;
  /**
   * The answer in Markdown when Google returns a Markdown rendering, otherwise the same text as answer. Populated whenever the provider has data for the entity.
   */
  answerMarkdown: string;
  /**
   * The sources Google cited for this search, in the order it returned them. Google recomputes the set per search, so counts and membership vary between calls on the same prompt.
   */
  citations: GoogleAiModeCitation[];
  /**
   * The prompt answered by the upstream search experience. Populated whenever the provider has data for the entity.
   */
  prompt: string;
}

/**
 * Input for Google AI Overview (google.ai_overview).
 */
export interface GoogleAiOverviewInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The question or prompt to answer with a Google AI Overview.
   */
  prompt: string;
}

export interface GoogleAiOverviewCitation {
  /**
   * Google's position for this source within the overview, starting at 1.
   */
  index?: number;
  /**
   * The cited source title as Google presented it, which may carry a trailing date and snippet.
   */
  title: string;
  /**
   * The cited source URL.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google AI Overview (google.ai_overview).
 */
export interface GoogleAiOverviewData {
  /**
   * The AI Overview answer as plain text, as generated for this scrape. Populated whenever the provider has data for the entity.
   */
  answer: string;
  /**
   * The same answer in Markdown, preserving the headings and lists Google rendered. Populated whenever the provider has data for the entity.
   */
  answerMarkdown: string;
  /**
   * Every source Google listed for this overview, in Google's own order. This is the full list behind the overview, not only the few sources Google renders inline before the list is expanded, so it is routinely longer than what a reader sees at a glance.
   */
  citations: GoogleAiOverviewCitation[];
  /**
   * The prompt Google answered. Populated whenever the provider has data for the entity.
   */
  prompt: string;
  /**
   * When this overview was captured, ISO 8601 UTC. Because Google regenerates the overview per search, this identifies which generation the other fields describe.
   */
  scrapedAt?: string;
}

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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * News search query; supports operators like '-', 'OR', and 'site:' (e.g. bitcoin site:cnn.com).
   */
  query: string;
  /**
   * How far back to search, written as a count plus a unit: h hours, d days, w weeks, m months, y years. So 2h is the last two hours, 30d the last thirty days, 6m the last six months. Omit this field, or send 'all', to search without a time limit.
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * Continuation token from a previous response's nextCursor. Pass it back to fetch the next page of results.
   */
  cursor?: string;
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
   * Maximum number of organic results to return in this response. Google stopped honoring bulk result counts in September 2025, so one page is about 10 results and a limit above 10 is accepted but will not return more than that. To go deeper, either page through with cursor (about 10 results per call, each billed as a request) or use google.search_100, which returns up to 100 ranked results in a single call for one flat charge and is cheaper past roughly 20 results. Price is flat per request.
   * Range: minimum 1, maximum 100.
   * Default: 10.
   */
  limit?: number;
  /**
   * Fine-grained location for result localization, given as a canonical Google location string (e.g. 'New York, United States', 'London, United Kingdom'). More specific than the country-level gl.
   */
  location?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The Google search query.
   */
  query: string;
  /**
   * Set true if you intend to page through results. Every source for this search returns a nextCursor, so this changes nothing about the price or which source serves you; it stays supported so callers that already send it keep working.
   */
  requireCursor?: boolean;
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
  /**
   * Opaque cursor for the next page of results, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
  query: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  results: GoogleSearchResult[];
}

/**
 * Input for Google Search Top 100 (google.search_100).
 */
export interface GoogleSearch100Input {
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The Google search query.
   */
  query: string;
  /**
   * Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction).
   */
  timeframe?: string;
}

export interface GoogleSearch100Result {
  /**
   * The destination URL. Populated whenever the provider has data for the entity.
   */
  link: string;
  /**
   * Absolute rank across the whole result set, counting from 1 - not restarted per page. Populated whenever the provider has data for the entity.
   */
  position: number;
  /**
   * Google's summary text for the result. Populated whenever the provider has data for the entity.
   */
  snippet: string;
  /**
   * The result's headline as Google renders it. Populated whenever the provider has data for the entity.
   */
  title: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Search Top 100 (google.search_100).
 */
export interface GoogleSearch100Data {
  /**
   * Google's AI Overview text for this query, when Google showed one. Absent when it did not.
   */
  aiOverview?: string;
  /**
   * The search query these results answer.
   */
  query: string;
  /**
   * Organic results in Google's own order, position 1 first. Populated whenever the provider has data for the entity.
   */
  results: GoogleSearch100Result[];
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * Google AI Mode
   *
   * Ask Google AI Mode a prompt and receive the cited answer it generates. AI Mode composes the answer at search time, so repeat calls on one prompt can differ in wording and in which sources are cited.
   *
   * Price: $0.0007 per request.
   *
   * @example
   * const res = await client.google.aiMode({ prompt: "What is AnyAPI at getanyapi.com, and what does it offer?" });
   */
  aiMode(
    input: GoogleAiModeInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleAiModeData>> {
    return this._core.run("google.ai_mode", input, options);
  }

  /**
   * Google AI Overview
   *
   * Ask Google Search a prompt and receive the AI Overview it generated for that scrape, with every source Google listed. Google regenerates the overview per search, so the same prompt can return different wording and a different source list.
   *
   * Price: $0.0018 per request.
   *
   * @example
   * const res = await client.google.aiOverview({ prompt: "How does photosynthesis work?" });
   */
  aiOverview(
    input: GoogleAiOverviewInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleAiOverviewData>> {
    return this._core.run("google.ai_overview", input, options);
  }

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
   * Run a Google web search and get the organic results (title, link, snippet, position) as clean JSON. Returns about 10 results per call - Google stopped honoring bulk result counts in September 2025, so a limit above 10 is accepted but returns no more than a page. Pass the returned nextCursor back as cursor to walk further, or use google.search_100 for up to 100 ranked results in one call, which is cheaper past roughly 20 results.
   *
   * Price: $0.0009 per request.
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
   * Iterate every result of Google Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearch(
    input: GoogleSearchInput,
    options?: RequestOptions,
  ): Paginator<GoogleSearchResult, RunResult<GoogleSearchData>> {
    return paginate<GoogleSearchResult, RunResult<GoogleSearchData>>(
      this._core,
      "google.search",
      input as unknown as Record<string, unknown>,
      "results",
      false,
      options,
    );
  }

  /**
   * Google Search Top 100
   *
   * Run a Google web search and get up to 100 ranked organic results in one call, with true absolute positions rather than per-page numbering. One flat charge whatever the depth, which makes it cheaper than paging google.search past roughly 20 results. It reads ten pages of Google to build the list, so a call takes around three to four minutes - use google.search when you want the first page back in a second.
   *
   * Price: $0.0018 per request.
   *
   * @example
   * const res = await client.google.search100({ query: "best crm software", gl: "us", hl: "en" });
   */
  search100(
    input: GoogleSearch100Input,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleSearch100Data>> {
    return this._core.run("google.search_100", input, options);
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
