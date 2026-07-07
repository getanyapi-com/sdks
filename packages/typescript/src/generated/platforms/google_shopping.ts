// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Google Shopping Search (google_shopping.search).
 */
export interface GoogleShoppingSearchInput {
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

export interface GoogleShoppingSearchItem {
  /**
   * Product brand; empty when not reported.
   */
  brand?: string;
  /**
   * Price currency code, e.g. "USD"; empty when not reported.
   */
  currency?: string;
  /**
   * Discount label when on sale, e.g. "23% OFF"; empty otherwise.
   */
  discountPercent?: string;
  /**
   * Primary product image URL.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Pre-discount list price as a numeric amount; 0 when not on sale or reported only as text.
   */
  listPrice?: number;
  /**
   * Pre-discount list price as displayed, e.g. "$130"; empty when not applicable.
   */
  listPriceText?: string;
  /**
   * Current price as a numeric amount; 0 when the lane reports price only as text (see priceText).
   */
  price?: number;
  /**
   * Current price as displayed, e.g. "$99.99"; empty when the lane reports a numeric price instead.
   */
  priceText?: string;
  /**
   * Provider product identifier.
   */
  productId?: string;
  /**
   * Average product rating, 0-5; 0 when unrated.
   */
  rating?: number;
  /**
   * Number of ratings / reviews; 0 when none reported.
   */
  reviewsCount?: number;
  /**
   * Store / seller name offering the product, e.g. "Target".
   */
  seller?: string;
  /**
   * Product title.
   */
  title: string;
  /**
   * Google Shopping product page URL (query retained; it encodes the product identity).
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Shopping Search (google_shopping.search).
 */
export interface GoogleShoppingSearchData {
  /**
   * Matching Google Shopping product offers.
   */
  items: GoogleShoppingSearchItem[];
}

/**
 * Typed methods for the google_shopping platform. Attached to the AnyAPI client as
 * `client.googleShopping`.
 */
export class GoogleShoppingNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Shopping Search
   *
   * Search Google Shopping by keyword and get up to 10 product offers - title, price, store, rating, and link - localized by country and language, at a flat per-request USD price.
   *
   * Price: $0.01625 per request.
   *
   * @example
   * const res = await client.googleShopping.search({ query: "airpods", limit: 10 });
   */
  search(
    input: GoogleShoppingSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleShoppingSearchData>> {
    return this._core.run("google_shopping.search", input, options);
  }
}
