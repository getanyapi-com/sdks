// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for eBay Search (ebay.search).
 */
export interface EbaySearchInput {
  /**
   * Maximum number of results to return (1 to 25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Optional maximum item price in USD.
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Optional minimum item price in USD.
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * Search keywords, e.g. "nintendo switch" or "vintage levis 501".
   */
  query: string;
}

export interface EbaySearchItem {
  condition?: string;
  /**
   * Primary listing image URL.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * eBay item identifier.
   */
  itemId: string;
  /**
   * Auction, FixedPrice, etc.
   */
  listingType?: string;
  /**
   * Listing price.
   */
  price?: number;
  /**
   * Seller positive-feedback percentage.
   */
  sellerFeedbackPercent?: number;
  sellerName?: string;
  /**
   * Shipping cost or free-delivery label.
   */
  shippingCost?: string;
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of eBay Search (ebay.search).
 */
export interface EbaySearchData {
  /**
   * Listing records: title, price, condition, shipping cost, seller info, image, and item URL.
   */
  items: EbaySearchItem[];
}

/**
 * Input for eBay Sold Listings (ebay.sold_listings).
 */
export interface EbaySoldListingsInput {
  /**
   * Item condition filter (e.g. used).
   * One of: any, new, used.
   * Default: any.
   */
  condition?: "any" | "new" | "used";
  /**
   * How many days back to include sold listings, 1-90 (e.g. 30).
   * Default: 30.
   */
  daysBack?: number;
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Search keyword for sold items (e.g. iphone 13 pro).
   */
  query: string;
  /**
   * eBay country site to search (e.g. ebay.co.uk).
   * One of: ebay.com, ebay.co.uk, ebay.de, ebay.fr, ebay.it, ebay.es, ebay.ca, ebay.com.au.
   * Default: ebay.com.
   */
  site?:
    | "ebay.com"
    | "ebay.co.uk"
    | "ebay.de"
    | "ebay.fr"
    | "ebay.it"
    | "ebay.es"
    | "ebay.ca"
    | "ebay.com.au";
}

export interface EbaySoldListingsItem {
  condition?: string;
  /**
   * Sale date (ISO 8601).
   */
  endedAt?: string;
  /**
   * Primary listing image URL.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * eBay item identifier.
   */
  itemId: string;
  listingType?: string;
  sellerUsername?: string;
  soldCurrency?: string;
  /**
   * Final sold price.
   */
  soldPrice?: number;
  title: string;
  /**
   * Sold price plus shipping.
   */
  totalPrice?: number;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of eBay Sold Listings (ebay.sold_listings).
 */
export interface EbaySoldListingsData {
  /**
   * Sold listing records: title, sold price, sale date, condition, shipping, and item URL.
   */
  items: EbaySoldListingsItem[];
}

/**
 * Typed methods for the ebay platform. Attached to the AnyAPI client as
 * `client.ebay`.
 */
export class EbayNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * eBay Search
   *
   * Search eBay active listings by keyword and get title, price, condition, shipping, seller, and sold count in one normalized response. You are billed per result returned.
   *
   * Price: $0.001 per request plus $0.00234 per result.
   *
   * @example
   * const res = await client.ebay.search({ query: "nintendo switch", limit: 3 });
   */
  search(
    input: EbaySearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<EbaySearchData>> {
    return this._core.run("ebay.search", input, options);
  }

  /**
   * eBay Sold Listings
   *
   * Retrieve recently sold eBay listings for any keyword - sold price, sale date, condition, and item details - ideal for pricing research, at a flat per-request USD price.
   *
   * Price: $0.00005 per request plus $0.004 per result.
   *
   * @example
   * const res = await client.ebay.soldListings({ query: "nintendo switch", limit: 3 });
   */
  soldListings(
    input: EbaySoldListingsInput,
    options?: RequestOptions,
  ): Promise<RunResult<EbaySoldListingsData>> {
    return this._core.run("ebay.sold_listings", input, options);
  }
}
