// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Tripadvisor Reviews (tripadvisor.reviews).
 */
export interface TripadvisorReviewsInput {
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Only return reviews newer than this date, YYYY-MM-DD or a relative window like '3 months' (e.g. 2026-01-01).
   */
  since?: string;
  /**
   * Tripadvisor page URL of the hotel, restaurant, or attraction.
   */
  url: string;
}

export interface TripadvisorReviewsItem {
  /**
   * Publish date.
   * Populated whenever the provider returns data.
   */
  publishedAt?: string;
  /**
   * Star rating (typically 1-5).
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
  [extra: string]: unknown;
}

/**
 * The `data` payload of Tripadvisor Reviews (tripadvisor.reviews).
 */
export interface TripadvisorReviewsData {
  /**
   * Review records for the place: rating, title, review text, publish date, trip type, and reviewer details.
   * Populated whenever the provider returns data.
   */
  items: TripadvisorReviewsItem[];
}

/**
 * Input for Tripadvisor Search (tripadvisor.search).
 */
export interface TripadvisorSearchInput {
  /**
   * ISO currency code for prices (e.g. USD, EUR).
   * Default: USD.
   */
  currency?: string;
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Destination or keyword to search for (e.g. Barcelona).
   */
  query: string;
}

export interface TripadvisorSearchItem {
  rating: number;
  /**
   * Populated whenever the provider returns data.
   */
  title: string;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Tripadvisor Search (tripadvisor.search).
 */
export interface TripadvisorSearchData {
  /**
   * Matching place records: name, type (hotel/restaurant/attraction), rating, review count, address, contact details, and pricing.
   * Populated whenever the provider returns data.
   */
  items: TripadvisorSearchItem[];
}

/**
 * Typed methods for the tripadvisor platform. Attached to the AnyAPI client as
 * `client.tripadvisor`.
 */
export class TripadvisorNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Tripadvisor Reviews
   *
   * Fetch the latest reviews for any Tripadvisor hotel, restaurant, or attraction by its page URL - rating, text, date, and trip details as normalized JSON with transparent per-request USD pricing.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.tripadvisor.reviews({"limit":3,"url":"https://www.tripadvisor.com/Hotel_Review-g60763-d93450-Reviews-The_Plaza-New_York_City_New_York.html"});
   */
  reviews(
    input: TripadvisorReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TripadvisorReviewsData>> {
    return this._core.run("tripadvisor.reviews", input, options);
  }

  /**
   * Tripadvisor Search
   *
   * Search Tripadvisor for hotels, restaurants, and attractions in any destination and get rich place records (ratings, review counts, contact details, pricing) as normalized JSON with transparent per-request USD pricing.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.tripadvisor.search({"limit":3,"query":"Paris"});
   */
  search(
    input: TripadvisorSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<TripadvisorSearchData>> {
    return this._core.run("tripadvisor.search", input, options);
  }
}
