// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Trustpilot Reviews (trustpilot.reviews).
 */
export interface TrustpilotReviewsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Brand name or Trustpilot review-page URL to fetch reviews for (e.g. nike or https://www.trustpilot.com/review/nike.com).
   */
  company: string;
  /**
   * Only return reviews from reviewers in these ISO 3166-1 alpha-2 countries (e.g. ["US", "GB"]). Omit this field for all countries and to stay on the cheapest price; a country filter routes to the dearest source.
   */
  countries?: string[];
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Only return reviews in these ISO 639-1 languages (e.g. ["en", "de"]). Omit this field for all languages and to stay on the cheapest price; a language filter routes to the dearest source.
   */
  languages?: string[];
  /**
   * Maximum number of results to return (1-200, default 200). Trustpilot serves at most 200 reviews per company.
   * Range: minimum 1, maximum 200.
   * Default: 200.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `avatarUrl`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a review that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "author"
    | "authorCountry"
    | "avatarUrl"
    | "language"
    | "rating"
    | "reviewerReviewsCount"
    | "verified"
  )[];
  /**
   * Review ordering: auto, relevancy, or recent (e.g. recent).
   * One of: auto, relevancy, recent.
   * Default: auto.
   */
  sortBy?: "auto" | "relevancy" | "recent";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Limit reviews to a single star rating from 1 to 5 (e.g. 5).
   */
  stars?: string;
  /**
   * Only return reviews on or after this date, inclusive, in YYYY-MM-DD format (e.g. 2026-01-01). Omit this field to stay on the cheapest price; a date floor routes to the dearest source.
   */
  startDate?: string;
  /**
   * Set true to return only verified reviews (e.g. true). Omit this field, or send false, to stay on the cheapest price; true routes to a dearer source.
   * Default: false.
   */
  verifiedOnly?: boolean;
}

export interface TrustpilotReviewsItem {
  /**
   * Display name of the reviewer.
   */
  author?: string;
  /**
   * Two-letter country code of the reviewer.
   */
  authorCountry?: string;
  /**
   * URL of the reviewer's avatar image.
   */
  avatarUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Language code of the review text, e.g. en.
   */
  language?: string;
  /**
   * Star rating (1-5).
   */
  rating: number;
  /**
   * Number of reviews the reviewer has written on Trustpilot.
   */
  reviewerReviewsCount?: number;
  /**
   * Review body text. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Review title or headline. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  title?: string;
  /**
   * Canonical review URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  /**
   * Whether the reviewer is verified.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Trustpilot Reviews (trustpilot.reviews).
 */
export interface TrustpilotReviewsData {
  /**
   * Review records: star rating, review title and text, date, reviewer name and country, and company reply when present. Populated whenever the provider has data for the entity.
   */
  items: TrustpilotReviewsItem[];
}

/**
 * Typed methods for the trustpilot platform. Attached to the AnyAPI client as
 * `client.trustpilot`.
 */
export class TrustpilotNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Trustpilot Reviews
   *
   * Pull Trustpilot reviews for any company by brand name: star ratings, review text, dates, and reviewer details as clean JSON.
   *
   * Price: $0.0008 per request.
   *
   * @example
   * const res = await client.trustpilot.reviews({ company: "stripe.com", limit: 3 });
   */
  reviews(
    input: TrustpilotReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TrustpilotReviewsData>> {
    return this._core.run("trustpilot.reviews", input, options);
  }
}
