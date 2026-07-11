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
   * Filter by one or more item conditions; omit for all conditions (e.g. ["new", "open_box"]).
   */
  condition?: ("new" | "open_box" | "refurbished" | "used" | "for_parts")[];
  /**
   * Maximum number of results to return (1 to 25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Restrict to a listing format; omit or use all for both (e.g. buy_it_now for fixed-price only).
   * One of: all, auction, buy_it_now.
   */
  listingType?: "all" | "auction" | "buy_it_now";
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
  /**
   * Result sort order; omit for eBay's Best Match (e.g. price_low sorts by lowest price plus shipping first).
   * One of: best_match, ending_soonest, newly_listed, price_low, price_high.
   */
  sort?:
    | "best_match"
    | "ending_soonest"
    | "newly_listed"
    | "price_low"
    | "price_high";
}

export interface EbaySearchItem {
  condition?: string;
  /**
   * Primary listing image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * eBay item identifier. Populated whenever the provider has data for the entity.
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
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of eBay Search (ebay.search).
 */
export interface EbaySearchData {
  /**
   * Listing records: title, price, condition, shipping cost, seller info, image, and item URL. Populated whenever the provider has data for the entity.
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
   * Optional maximum sold price in the site currency (e.g. 500).
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Optional minimum sold price in the site currency (e.g. 200).
   * Range: minimum 0.
   */
  minPrice?: number;
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
  /**
   * Result sort order; omit for eBay's default ended-recently (e.g. price_high sorts by highest total price first).
   * One of: ended_recently, newly_listed, price_low, price_high, distance_nearest.
   */
  sort?:
    | "ended_recently"
    | "newly_listed"
    | "price_low"
    | "price_high"
    | "distance_nearest";
}

export interface EbaySoldListingsItem {
  condition?: string;
  /**
   * Sale date (ISO 8601).
   */
  endedAt?: string;
  /**
   * Primary listing image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * eBay item identifier. Populated whenever the provider has data for the entity.
   */
  itemId: string;
  listingType?: string;
  sellerUsername?: string;
  soldCurrency?: string;
  /**
   * Final sold price.
   */
  soldPrice?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Sold price plus shipping.
   */
  totalPrice?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of eBay Sold Listings (ebay.sold_listings).
 */
export interface EbaySoldListingsData {
  /**
   * Sold listing records: title, sold price, sale date, condition, shipping, and item URL. Populated whenever the provider has data for the entity.
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
   * Search eBay active listings by keyword with optional price-range, item-condition, listing-type, and sort filters and get title, price, condition, shipping, and seller in one normalized response.

**Price:** billed per result - \$1.00 per 1,000 requests base + \$2.34 per 1,000 results, capped at \$59.50 per 1,000 requests.
   *
   * Price: $0.001 per request plus $0.00234 per result.
   *
   * @example
   * const res = await client.ebay.search({ query: "nintendo switch", limit: 3, sort: "price_low" });
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
   * Retrieve recently sold eBay listings for any keyword with optional price-range and sort filters (sold price, sale date, condition, item details); ideal for pricing research.

**Price:** billed per result - \$0.05 per 1,000 requests base + \$4.00 per 1,000 results, capped at \$100.05 per 1,000 requests.
   *
   * Price: $0.00005 per request plus $0.004 per result.
   *
   * @example
   * const res = await client.ebay.soldListings({ query: "nintendo switch", limit: 3, sort: "price_high" });
   */
  soldListings(
    input: EbaySoldListingsInput,
    options?: RequestOptions,
  ): Promise<RunResult<EbaySoldListingsData>> {
    return this._core.run("ebay.sold_listings", input, options);
  }
}
