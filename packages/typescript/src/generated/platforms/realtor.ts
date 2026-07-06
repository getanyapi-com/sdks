// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Realtor.com Search (realtor.search).
 */
export interface RealtorSearchInput {
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * City, ZIP code, neighborhood or state to search (e.g. Las Vegas, NV).
   */
  location: string;
  /**
   * Maximum listing price in USD (e.g. 750000).
   */
  priceMax?: number;
  /**
   * Minimum listing price in USD (e.g. 250000).
   */
  priceMin?: number;
  /**
   * Listing type to search: for_sale or sold (e.g. for_sale).
   * Default: for_sale.
   */
  searchMode?: string;
}

export interface RealtorSearchItem {
  price?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  title?: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Realtor.com Search (realtor.search).
 */
export interface RealtorSearchData {
  /**
   * Property listing records: address, price, beds, baths, square footage, status, and listing metadata.
   */
  items: RealtorSearchItem[];
}

/**
 * Typed methods for the realtor platform. Attached to the AnyAPI client as
 * `client.realtor`.
 */
export class RealtorNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Realtor.com Search
   *
   * Search Realtor.com listings by location with optional price filters and get property records (price, address, beds, baths) as normalized JSON, priced per request in USD.
   *
   * Price: $0.005 per request plus $0.0015 per result.
   *
   * @example
   * const res = await client.realtor.search({ location: "Austin, TX", limit: 3 });
   */
  search(
    input: RealtorSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<RealtorSearchData>> {
    return this._core.run("realtor.search", input, options);
  }
}
