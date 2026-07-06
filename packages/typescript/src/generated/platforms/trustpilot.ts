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
   * Set true to return only verified reviews (e.g. true).
   * Default: false.
   */
  verifiedOnly?: boolean;
}

export interface TrustpilotReviewsItem {
  /**
   * Publish date (ISO 8601).
   * Populated whenever the provider returns data.
   */
  publishedAt?: string;
  /**
   * Star rating (1-5).
   */
  rating: number;
  /**
   * Review body text.
   * Populated whenever the provider returns data.
   */
  text: string;
  /**
   * Populated whenever the provider returns data.
   */
  title?: string;
  /**
   * Canonical review URL.
   * Populated whenever the provider returns data.
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
   * Review records: star rating, review title and text, date, reviewer name and country, and company reply when present.
   * Populated whenever the provider returns data.
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
   * Pull Trustpilot reviews for any company by brand name - star ratings, review text, dates, and reviewer details as clean JSON, billed per request in USD.
   *
   * Price: $0.01625 per request.
   *
   * @example
   * const res = await client.trustpilot.reviews({"company":"stripe.com","limit":3});
   */
  reviews(
    input: TrustpilotReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TrustpilotReviewsData>> {
    return this._core.run("trustpilot.reviews", input, options);
  }
}
