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
   * Maximum number of results to return (1-50, default 50). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 50.
   */
  limit?: number;
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
   * Pull Trustpilot reviews for any company by brand name - star ratings, review text, dates, and reviewer details as clean JSON.
   *
   * Price: $0.01625 per request.
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
