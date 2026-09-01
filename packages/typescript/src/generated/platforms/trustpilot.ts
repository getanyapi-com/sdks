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
   * Brand name or Trustpilot review-page URL to fetch reviews for (e.g. nike or https://www.trustpilot.com/review/nike.com).
   */
  company: string;
  /**
   * Only return reviews from reviewers in these ISO 3166-1 alpha-2 countries (e.g. ["US", "GB"]); omit for all countries.
   */
  countries?: string[];
  /**
   * Only return reviews in these ISO 639-1 languages (e.g. ["en", "de"]); omit for all languages.
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
   * Review ordering: auto, relevancy, or recent (e.g. recent).
   * Default: auto.
   */
  sortBy?: string;
  /**
   * Limit reviews to a single star rating from 1 to 5 (e.g. 5); omit for all ratings.
   */
  stars?: string;
  /**
   * Only return reviews on or after this date, inclusive, in YYYY-MM-DD format (e.g. 2026-01-01).
   */
  startDate?: string;
  /**
   * Set true to return only verified reviews (e.g. true).
   * Default: false.
   */
  verifiedOnly?: boolean;
}

export interface TrustpilotReviewsItem {
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
   * Star rating (1-5).
   */
  rating: number;
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
   * Price: $0.00225 per request.
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
