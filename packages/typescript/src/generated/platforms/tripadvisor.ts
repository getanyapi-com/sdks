// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Tripadvisor Reviews (tripadvisor.reviews).
 */
export interface TripadvisorReviewsInput {
  /**
   * Only return reviews in these ISO 639-1 languages (e.g. ["en", "es"]); omit for all languages.
   */
  languages?: string[];
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Only return reviews whose bubble rating is in this set (e.g. ["5", "4"] for 4 and 5 star reviews); omit for all ratings.
   */
  ratings?: ("1" | "2" | "3" | "4" | "5")[];
  /**
   * Only return reviews newer than this date, YYYY-MM-DD or a relative window like '3 months' (e.g. 2026-01-01).
   */
  since?: string;
  /**
   * Tripadvisor page URL of the hotel, restaurant, or attraction.
   */
  url: string;
}

export type TripadvisorReviewsData = unknown;

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
   * Include attractions and things to do in the results; set false to exclude them (e.g. false). Defaults to true.
   * Default: true.
   */
  includeAttractions?: boolean;
  /**
   * Include hotels in the results; set false to exclude them (e.g. false). Defaults to true.
   * Default: true.
   */
  includeHotels?: boolean;
  /**
   * Include restaurants in the results; set false to exclude them (e.g. false). Defaults to true.
   * Default: true.
   */
  includeRestaurants?: boolean;
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

export type TripadvisorSearchData = unknown;

/**
 * Typed methods for the tripadvisor platform. Attached to the AnyAPI client as
 * `client.tripadvisor`.
 */
export class TripadvisorNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Tripadvisor Reviews
   *
   * Fetch the latest reviews for any Tripadvisor hotel, restaurant, or attraction by its page URL: rating, text, date, and trip details as normalized JSON.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.tripadvisor.reviews({ url: "https://www.tripadvisor.com/Hotel_Review-g60763-d93450-Reviews-The_Plaza-New_York_City_New_York.html", limit: 3 });
   */
  reviews(
    input: TripadvisorReviewsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TripadvisorReviewsData>> {
    return this._core.run(
      "tripadvisor.reviews",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TripadvisorReviewsData>>;
  }

  /**
   * Tripadvisor Search
   *
   * Search Tripadvisor for hotels, restaurants, and attractions in any destination and get rich place records (ratings, review counts, contact details, pricing) as normalized JSON.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.tripadvisor.search({ query: "Paris", limit: 3 });
   */
  search(
    input: TripadvisorSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TripadvisorSearchData>> {
    return this._core.run(
      "tripadvisor.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TripadvisorSearchData>>;
  }
}
