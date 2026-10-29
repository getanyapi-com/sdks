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
   * The question or prompt to answer with Google AI Mode.
   */
  prompt: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * The question or prompt to answer with a Google AI Overview.
   */
  prompt: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `scrapedAt`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "scrapedAt"[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Every source Google listed with a usable URL for this overview, in Google's own order. References without a URL are omitted. This is the full list behind the overview, not only the few sources Google renders inline before the list is expanded, so it is routinely longer than what a reader sees at a glance.
   */
  citations: GoogleAiOverviewCitation[];
  /**
   * Two-letter language code the overview was generated in.
   */
  language?: string;
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
 * Input for Google AI Overview Preview (google.ai_overview_preview).
 */
export interface GoogleAiOverviewPreviewInput {
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
   * The question or prompt to search Google for.
   */
  prompt: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface GoogleAiOverviewPreviewCitation {
  /**
   * The link's position in the visible overview, starting at 1.
   */
  index?: number;
  /**
   * The link text or source name Google showed. Empty when Google showed the link without text.
   */
  title: string;
  /**
   * The linked source URL.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google AI Overview Preview (google.ai_overview_preview).
 */
export interface GoogleAiOverviewPreviewData {
  /**
   * The overview text visible before Show more, as plain text. Google cuts the preview where the fold falls, so it often ends mid-sentence. When Google shows the whole overview with no Show more button, this is the whole overview. Populated whenever the provider has data for the entity.
   */
  answer: string;
  /**
   * The sources linked in the visible part of the overview, in page order. This is only what shows before Show more, so it is usually shorter than the full source list google.ai_overview returns. Populated whenever the provider has data for the entity.
   */
  citations: GoogleAiOverviewPreviewCitation[];
  /**
   * The prompt Google answered. Populated whenever the provider has data for the entity.
   */
  prompt: string;
}

/**
 * Input for Google Autocomplete (google.autocomplete).
 */
export interface GoogleAutocompleteInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The partial Google search query.
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction).
   * One of: 1h, 1d, 7d, 1y, all.
   */
  timeframe?: "1h" | "1d" | "7d" | "1y" | "all";
}

export interface GoogleImagesItem {
  /**
   * Full image height in pixels.
   */
  height?: number;
  /**
   * One-based position of this image in Google's result order.
   */
  position?: number;
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
 * Input for Google Job (google.job).
 */
export interface GoogleJobInput {
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
   * The listingToken of one listing in a google.jobs response.
   */
  listingToken: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface GoogleJobApplyOption {
  /**
   * Label, e.g. Apply on LinkedIn.
   */
  title?: string;
  /**
   * Apply link with Google's tracking parameters removed.
   */
  url?: string;
  [extra: string]: unknown;
}

export interface GoogleJobCompanyRating {
  /**
   * Employer star rating on that site.
   */
  rating?: number | null;
  /**
   * Number of reviews on that site. Rounded when Google shows an abbreviated count: 8.9K becomes 8900.
   */
  reviews?: number | null;
  /**
   * Review site, e.g. Glassdoor or Indeed.
   */
  source?: string;
  /**
   * The employer's page on that site, with Google's tracking parameters removed.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Job (google.job).
 */
export interface GoogleJobData {
  /**
   * Where the job can be applied for. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  applyOptions?: GoogleJobApplyOption[];
  /**
   * Hiring company. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  companyName?: string;
  /**
   * The employer's ratings on review sites, as Google shows them; empty when Google shows none.
   */
  companyRatings?: GoogleJobCompanyRating[];
  /**
   * The whole job description Google holds, as plain text. A few postings reach Google already shortened by the job board and end in [...]. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * The posting details Google shows, in its order and wording, e.g. ["7 days ago", "Full-time", "Health insurance"]: when it was posted, pay, job type and benefits, each only when Google shows it.
   */
  extensions?: string[];
  /**
   * Google's id for the listing.
   */
  jobId?: string;
  /**
   * Job location as Google shows it, e.g. Chicago, IL.
   */
  location?: string;
  /**
   * Job title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * The site Google found the listing on, e.g. LinkedIn or Indeed.
   */
  via?: string;
  [extra: string]: unknown;
}

/**
 * Input for Google Jobs (google.jobs).
 */
export interface GoogleJobsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Opaque cursor from a previous response's nextCursor. Send it with the same query, location, gl and hl to get the next page of about 10 listings; it expires about an hour after it was issued, after which you start again from page 1.
   */
  cursor?: string;
  /**
   * Two-letter country code to search in (e.g. us, gb, de).
   * Default: us.
   */
  gl?: string;
  /**
   * Language code for the listings and their details (e.g. en, de, es).
   * Default: en.
   */
  hl?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * City, region or country to search around, e.g. Chicago, IL or London. Google may include nearby places.
   */
  location?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Job title or keywords to search, e.g. registered nurse. A place written into the query ("barista in Austin, TX") also localizes the search.
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

/**
 * One Google Jobs listing.
 */
export interface GoogleJobsItem {
  /**
   * Where the job can be applied for. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  applyOptions?: GoogleJobsApplyOption[];
  /**
   * Hiring company. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  companyName?: string;
  /**
   * Job description as plain text. Usually the full text, but for some listings (seen on German searches) Google shows only an excerpt of about 400 characters that can stop mid-word; google.job with this listing's listingToken returns the whole description Google holds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * The posting details Google shows, in its order and wording, e.g. ["2 days ago", "36.50-58.40 an hour", "Full-time", "Health insurance"]: when it was posted, pay, job type and benefits, each only when Google shows it. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  extensions?: string[];
  /**
   * Google's id for the listing. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  jobId?: string;
  /**
   * Token for this listing; pass it to google.job as listingToken for the listing with employer ratings. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  listingToken?: string;
  /**
   * Job location as Google shows it, e.g. Chicago, IL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  location?: string;
  /**
   * 1-based rank of the listing across pages (page 2 starts at 11).
   */
  position?: number | null;
  /**
   * Job title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * The site Google found the listing on, e.g. LinkedIn or Indeed. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  via?: string;
  [extra: string]: unknown;
}

export interface GoogleJobsApplyOption {
  /**
   * Label, e.g. Apply on LinkedIn.
   */
  title?: string;
  /**
   * Apply link with Google's tracking parameters removed.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Jobs (google.jobs).
 */
export interface GoogleJobsData {
  /**
   * Job listings in Google's order. Populated whenever the provider has data for the entity.
   */
  items: GoogleJobsItem[];
  /**
   * Opaque cursor for the next page of listings, or null when there are no more. Pass it back as cursor with the same query, location, gl and hl.
   */
  nextCursor?: string | null;
}

/**
 * Input for Google Lens (google.lens).
 */
export interface GoogleLensInput {
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
 * Input for Google Local Services (google.local_services).
 */
export interface GoogleLocalServicesInput {
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
   * Maximum number of businesses to return (1-20, default 20). Google lists at most 20 businesses for one service in one city, so there are no further pages.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * The US city to search, with its state (e.g. Denver, CO or Austin, TX).
   */
  location: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The service to find businesses for, in everyday words (e.g. plumber, electrician, house cleaning, roofer).
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `yearsInBusiness` or `hours`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be null on a business that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "highlights"
    | "hours"
    | "image"
    | "isOpenNow"
    | "responseTime"
    | "yearsInBusiness"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface GoogleLocalServicesItem {
  /**
   * Google Local Services business id (bid). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  bid?: string | null;
  /**
   * Google's service category for the business (e.g. Plumbers, Electricians). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  category?: string | null;
  /**
   * Google customer id (cid) of the business. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cid?: string | null;
  /**
   * Selling points the business lists, such as Flat rate pricing or Free in-home estimate. Null when this source does not report them.
   */
  highlights?: string[] | null;
  /**
   * Opening status as Google shows it at request time (e.g. Open 24 hours). Null when this source does not report it.
   */
  hours?: string | null;
  /**
   * Business logo or photo URL. Null when the business has none or this source does not report it.
   * Format: uri.
   */
  image?: string | null;
  /**
   * Whether the business was open when the request ran, as Google shows it. Null when this source does not report it.
   */
  isOpenNow?: boolean | null;
  /**
   * Business name. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Business phone number in E.164 format (e.g. +17205550123). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  phone?: string | null;
  /**
   * Google Local Services provider id (pid). Null when Google assigns none, which is common.
   */
  pid?: string | null;
  /**
   * 1-based position of the business in Google's list. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  position?: number;
  /**
   * The business's Google Local Services profile page. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  profileUrl?: string | null;
  /**
   * Average Google star rating out of 5. Null for a business with no reviews yet. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number | null;
  /**
   * How quickly the business usually replies, as Google shows it (e.g. Typically replies in 15 min). Null when Google shows none or this source does not report it.
   */
  responseTime?: string | null;
  /**
   * Number of Google reviews behind the rating. Null for a business with no reviews yet. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  reviewCount?: number | null;
  /**
   * The area Google says the business serves (e.g. Denver). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  serviceArea?: string | null;
  /**
   * Years in business as Google shows it ("8+ years in business" reads 8). Null when Google shows none or this source does not report it.
   */
  yearsInBusiness?: number | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Local Services (google.local_services).
 */
export interface GoogleLocalServicesData {
  /**
   * Businesses Google lists in Local Services ads for the service and location, in Google's order. Populated whenever the provider has data for the entity.
   */
  items: GoogleLocalServicesItem[];
}

/**
 * Input for Google News (google.news).
 */
export interface GoogleNewsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Thumbnail image URL for the article. The query string carries the image identity, so it is kept.
   */
  image?: string;
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
   * The Google Patents search query.
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Two-letter language code of the patent document.
   */
  language?: string;
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
   * The Google Scholar search query.
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `year`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a record that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "year"[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Toggle Google spelling autocorrect (default true). Set false to search the exact query without correction.
   */
  autocorrect?: boolean;
  /**
   * Deprecated: send page instead. A continuation token from an earlier response's nextCursor is still accepted and still continues on the source that issued it; page is ignored when cursor is sent alongside it.
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Page size to ask for. Google returns about 10 organic results per page and stopped honoring larger counts in September 2025, so a limit above 10 still returns about 10. Some sources return their whole page of about 10 whatever limit says: a page is never trimmed after the call, so nextCursor always continues exactly where this response ended. To go deeper, send page (about 10 results per page, each billed as a request) or use google.search_100, which returns up to 100 ranked results in a single call for one flat charge and is cheaper past roughly 20 results. Price is flat per request.
   * Range: minimum 1, maximum 100.
   * Default: 10.
   */
  limit?: number;
  /**
   * Fine-grained location to localize results to, more specific than the country-level gl. Send it as an Active Canonical Name from Google's geo-target list: place, then each parent region, then country, with no space after each comma, e.g. 'New York,New York,United States', 'Austin,Texas,United States', 'London,England,United Kingdom'. Common variations are translated to that name when they point to exactly one place: spaces after commas, missing accents, a US state abbreviation ('Orlando, FL, United States'), or a skipped region ('Sydney, Australia'). A value that names no place, or more than one, is rejected rather than quietly searched from somewhere else.
   */
  location?: string;
  /**
   * Which page of about 10 organic results to return, starting at 1. Send page 2, 3, ... to walk deeper; each page is billed as one request and any source can serve any page. Replaces cursor.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
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
   * Deprecated. Every source for this search returns a nextCursor, so this changes nothing about the price or which source serves you; it stays accepted so callers that already send it keep working.
   */
  requireCursor?: boolean;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction).
   * One of: 1h, 1d, 7d, 1y, all.
   */
  timeframe?: "1h" | "1d" | "7d" | "1y" | "all";
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction).
   * One of: 1h, 1d, 7d, 1y, all.
   */
  timeframe?: "1h" | "1d" | "7d" | "1y" | "all";
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
   * Google's summary text for the result.
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
 * Input for Google Trends (google.trends).
 */
export interface GoogleTrendsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Where the searches came from: an uppercase ISO country code (US, GB, DE) or a country subdivision (US-CA, GB-ENG). Omit it, or send worldwide, for worldwide interest.
   * Default: worldwide.
   */
  geo?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Search terms to compare, 1 to 5, each 2 to 100 characters and without commas (e.g. ["coffee", "tea"]). Values are relative across the whole set, so the same term scores differently next to different terms.
   */
  keywords: string[];
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
   * The window to chart, ending now: 1h, 4h, 1d or 7d (hours and days), 1m or 3m (months), 12m, 5y, or all (back to January 2004). Buckets grow with the window: minutes up to 1d, hours for 7d, days for 1m and 3m, weeks for 12m and 5y, months for all.
   * One of: 1h, 4h, 1d, 7d, 1m, 3m, 12m, 5y, all.
   * Default: 12m.
   */
  timeframe?: "1h" | "4h" | "1d" | "7d" | "1m" | "3m" | "12m" | "5y" | "all";
}

export interface GoogleTrendsSerie {
  /**
   * The search term this series charts. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * One point per time bucket, oldest first. Populated whenever the provider has data for the entity.
   */
  points: GoogleTrendsPoint[];
  [extra: string]: unknown;
}

export interface GoogleTrendsPoint {
  /**
   * True when Google is still counting this bucket, normally the newest one, so it reads lower than it will end. Present only when the source reports it.
   */
  partial?: boolean;
  /**
   * Start of the time bucket. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  startUtc: number;
  /**
   * Search interest in this bucket on Google's 0-100 scale, where 100 is the peak of any term in the response and 0 means there was not enough data. Populated whenever the provider has data for the entity.
   * Range: minimum 0, maximum 100.
   */
  value: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Trends (google.trends).
 */
export interface GoogleTrendsData {
  /**
   * The place the series cover: the country or subdivision code you sent, or worldwide.
   */
  geo: string;
  /**
   * One series per search term, in the order you sent the terms. All series share one 0-100 scale. Populated whenever the provider has data for the entity.
   */
  series: GoogleTrendsSerie[];
  /**
   * The window the series cover: the timeframe you sent, or 12m when you sent none.
   */
  timeframe: string;
}

/**
 * Input for Google Videos (google.videos).
 */
export interface GoogleVideosInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `source`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a record that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "source"[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Restrict results to a recent time window: 1h, 1d, 7d, 1y, or all. Default all (no time restriction).
   * One of: 1h, 1d, 7d, 1y, all.
   */
  timeframe?: "1h" | "1d" | "7d" | "1y" | "all";
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
   * Price: $0.002 per request.
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
   * Price: $0.0015 per request.
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
   * Google AI Overview Preview
   *
   * Ask Google Search a prompt and receive the AI Overview as a searcher first sees it, before selecting Show more: the opening text and the sources linked inside it. When Google shows the whole overview without a Show more button, that is what you receive. For the complete expanded overview with every source Google listed, use google.ai_overview.
   *
   * Price: $0.0007 per request.
   *
   * @example
   * const res = await client.google.aiOverviewPreview({ prompt: "How does photosynthesis work?" });
   */
  aiOverviewPreview(
    input: GoogleAiOverviewPreviewInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleAiOverviewPreviewData>> {
    return this._core.run("google.ai_overview_preview", input, options);
  }

  /**
   * Google Autocomplete
   *
   * Get Google search autocomplete suggestions for a partial query (keyword ideas).
   *
   * Price: $0.00085 per request.
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
   * Price: $0.00085 per request.
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
   * Google Job
   *
   * Fetch one Google Jobs listing by the listingToken that google.jobs returns: title, company, location, the site it was found on, the full description, apply links on every board that carries it, the posting details Google shows (posted, pay, job type, benefits), and the employer's ratings on review sites such as Glassdoor and Indeed when Google shows them.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.google.job({ listingToken: "gcb1.eyJ2IjoxLCJvcCI6Imdvb2dsZV9qb2JzX2xpc3RpbmciLCJzY29wZSI6InctN2lTM2lzV09LSUhqZTMwaVR5NkEiLCJxIjoicmVnaXN0ZXJlZCBudXJzZSIsImZjIjoiRXN3QkNvd0JRVXBwVkRSMFRGVnBlamxoVFdaQ2FVZHpiMWh4Y0cxVE1TMDBlV2c1UWxWSFZpMWpjelpYVmtOaFpUSjBXbmRQT0ZCQ01VWXlURFl5TWs0NFgyOVFTM1pEVjFSaU5VRkZhR1JzYTBGTU1IUnRPR0Z2V1ZaemFGUk5XRlJRVTFSU2JETkZSaTFOVUV4eVkwcDJTbGd0YkZWUlZXTktjMHhMYjBWdWFHWjFPRFpZUldoUFFtVnlaRk5tYlhVU0YzbHNYMU5oZEdvM1FYRmhjbWt0WjFBME9UTlJMVkZ6R2lKQlJITnlPV1pVV2pGS05XbENSMnRyUTJkelNqbGhkelpIVnkxT1RscE1NbU5CIiwiZWkiOiJ5bF9TYXRqN0FxYXJpLWdQNDkzUS1RcyIsImlkIjoiMFRHZ0p6WW1XT0drWFZCR0FBQUFBQT09IiwidmVkIjoiMmFoVUtFd2pZaUlQeGlMLVhBeFdtMVFJSEhlTXVOTDhRcDR3Q2VnUUlKUkFCIn0" });
   */
  job(
    input: GoogleJobInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleJobData>> {
    return this._core.run("google.job", input, options);
  }

  /**
   * Google Jobs
   *
   * Search Google Jobs, the job listings Google gathers from LinkedIn, Indeed, ZipRecruiter, company career sites and other boards, and get about 10 listings per call: title, company, location, the site it was found on, the full description, apply links on every board that carries it, and the posting details Google shows (posted, pay, job type, benefits). Each listing carries a listingToken you can pass to google.job for employer ratings. Send nextCursor back as cursor to walk further pages.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.google.jobs({ query: "registered nurse", gl: "us", hl: "en", location: "Chicago, IL" });
   */
  jobs(
    input: GoogleJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleJobsData>> {
    return this._core.run("google.jobs", input, options);
  }

  /**
   * Iterate every result of Google Jobs across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterJobs(
    input: GoogleJobsInput,
    options?: RequestOptions,
  ): Paginator<GoogleJobsItem, RunResult<GoogleJobsData>> {
    return paginate<GoogleJobsItem, RunResult<GoogleJobsData>>(
      this._core,
      "google.jobs",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }

  /**
   * Google Lens
   *
   * Reverse image search: find web pages and visual matches for an image URL.
   *
   * Price: $0.00085 per request.
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
   * Google Local Services
   *
   * Find the businesses Google lists in Local Services ads for a service in a US city (plumbers, electricians, cleaners...): up to 20 per request, each with phone, star rating, review count, category, service area and Google profile link.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.google.localServices({ location: "Denver, CO", query: "plumber", limit: 5 });
   */
  localServices(
    input: GoogleLocalServicesInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleLocalServicesData>> {
    return this._core.run("google.local_services", input, options);
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
   * Price: $0.00085 per request.
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
   * Price: $0.00085 per request.
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
   * Run a Google web search and get the organic results (title, link, snippet, position) as clean JSON. Returns about 10 results per call - Google stopped honoring bulk result counts in September 2025, so a limit above 10 is accepted but returns no more than a page. Send page 2, 3, ... to walk further, or use google.search_100 for up to 100 ranked results in one call, which is normally cheaper past roughly 20 results.
   *
   * Price: $0.0005 per request.
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
   * Run a Google web search and get up to 100 ranked organic results in one call, with true absolute positions rather than per-page numbering. One charge per call whatever the depth, which normally makes it cheaper than paging google.search past roughly 20 results; when the backup source has to answer, the call costs more, up to $0.024. It reads ten pages of Google to build the list, so a call can take up to about five minutes - use google.search when you want the first page back in a second.
   *
   * Price: $0.024 per request.
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
   * Google Trends
   *
   * Google Trends interest over time for up to 5 search terms compared on one 0-100 scale, where 100 is the peak search interest of any term in the window. Returns one series per term, in the order you sent them, with a value for every time bucket. Choose the country or region with geo (worldwide when omitted) and the window with timeframe (the past 12 months when omitted); both are echoed in the response. Interest over time only, not related queries or regions.
   *
   * Price: $0.018 per request.
   *
   * @example
   * const res = await client.google.trends({ keywords: ["coffee", "tea"], geo: "US", timeframe: "12m" });
   */
  trends(
    input: GoogleTrendsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleTrendsData>> {
    return this._core.run("google.trends", input, options);
  }

  /**
   * Google Videos
   *
   * Search Google for video results (YouTube and others) with title, link, thumbnail, and source.
   *
   * Price: $0.00085 per request.
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
