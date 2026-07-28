// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Google Shopping Search (google_shopping.search).
 */
export interface GoogleShoppingSearchInput {
  /**
   * Only return products in this condition (e.g. "USED"); defaults to any condition.
   * One of: ANY, NEW, USED, REFURBISHED.
   */
  condition?: "ANY" | "NEW" | "USED" | "REFURBISHED";
  /**
   * ISO 3166-1 alpha-2 country code for localized results (e.g. "us", "gb", "de").
   * Default: us.
   */
  country?: string;
  /**
   * ISO 639-1 language code for results (e.g. "en", "es", "fr").
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 10.
   */
  limit?: number;
  /**
   * Product name, brand, or keywords to search for (e.g. "Nike running shoes").
   */
  query: string;
  /**
   * Sort order for results (e.g. "LOWEST_PRICE"); defaults to relevance.
   * One of: BEST_MATCH, LOWEST_PRICE, HIGHEST_PRICE, TOP_RATED.
   */
  sortBy?: "BEST_MATCH" | "LOWEST_PRICE" | "HIGHEST_PRICE" | "TOP_RATED";
}

export type GoogleShoppingSearchData = unknown;

/**
 * Typed methods for the google_shopping platform. Attached to the AnyAPI client as
 * `client.googleShopping`.
 */
export class GoogleShoppingNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Shopping Search
   *
   * Search Google Shopping by keyword and get up to 10 product offers (title, price, store, rating, and link), localized by country and language.
   *
   * Price: $0.01625 per request.
   *
   * @example
   * const res = await client.googleShopping.search({ query: "airpods", limit: 10 });
   */
  search(
    input: GoogleShoppingSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GoogleShoppingSearchData>> {
    return this._core.run(
      "google_shopping.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GoogleShoppingSearchData>>;
  }
}
