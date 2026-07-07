// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Alibaba Search (alibaba.search).
 */
export interface AlibabaSearchInput {
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Keywords to search for on Alibaba (e.g. "bluetooth speaker wholesale").
   */
  query: string;
}

export interface AlibabaSearchItem {
  /**
   * Supplier country ISO code, e.g. "CN".
   */
  countryCode?: string;
  /**
   * Primary product image URL.
   */
  image?: string;
  /**
   * Minimum order quantity text, e.g. "Min. order: 1 piece".
   */
  moq?: string;
  /**
   * Price or price range as displayed, e.g. "$40.80-45.80" (Alibaba lists ranges, not a single numeric value).
   */
  priceText?: string;
  /**
   * Discounted promotional price when the listing is on sale; empty otherwise.
   */
  promotionPrice?: string;
  /**
   * Average buyer review score, 0-5; 0 when the listing has no reviews.
   */
  rating?: number;
  /**
   * Number of buyer reviews; 0 when none.
   */
  reviewCount?: number;
  /**
   * Supplier / company name.
   */
  supplierName?: string;
  /**
   * Gold Supplier tenure text, e.g. "3 yrs"; empty when not a Gold Supplier.
   */
  supplierYears?: string;
  /**
   * Listing title as shown on Alibaba (may contain the supplier's inline markup).
   */
  title: string;
  /**
   * Canonical product detail page URL (tracking query params stripped).
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Alibaba Search (alibaba.search).
 */
export interface AlibabaSearchData {
  /**
   * Matching Alibaba wholesale listings.
   */
  items: AlibabaSearchItem[];
}

/**
 * Typed methods for the alibaba platform. Attached to the AnyAPI client as
 * `client.alibaba`.
 */
export class AlibabaNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Alibaba Search
   *
   * Search Alibaba by keyword and get up to 25 wholesale listings - title, price range, minimum order, and supplier - in one normalized, flat-priced response.
   *
   * Price: $0.0012 per result.
   *
   * @example
   * const res = await client.alibaba.search({ query: "bluetooth speaker", limit: 3 });
   */
  search(
    input: AlibabaSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<AlibabaSearchData>> {
    return this._core.run("alibaba.search", input, options);
  }
}
