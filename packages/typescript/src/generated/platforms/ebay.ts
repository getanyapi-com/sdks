// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type EbaySearchData = unknown;

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

export type EbaySoldListingsData = unknown;

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
   *
   * Price: $0.001 per request plus $0.00234 per result (maximum $0.0595).
   *
   * @example
   * const res = await client.ebay.search({ query: "nintendo switch", limit: 3, sort: "price_low" });
   */
  search(
    input: EbaySearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<EbaySearchData>> {
    return this._core.run("ebay.search", input, options) as unknown as Promise<
      BareRunResult<EbaySearchData>
    >;
  }

  /**
   * eBay Sold Listings
   *
   * Retrieve recently sold eBay listings for any keyword with optional price-range and sort filters (sold price, sale date, condition, item details); ideal for pricing research.
   *
   * Price: $0.00005 per request plus $0.004 per result (maximum $0.10005).
   *
   * @example
   * const res = await client.ebay.soldListings({ query: "nintendo switch", limit: 3, sort: "price_high" });
   */
  soldListings(
    input: EbaySoldListingsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<EbaySoldListingsData>> {
    return this._core.run(
      "ebay.sold_listings",
      input,
      options,
    ) as unknown as Promise<BareRunResult<EbaySoldListingsData>>;
  }
}
