// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Realtor.com Search (realtor.search).
 */
export interface RealtorSearchInput {
  /**
   * Minimum number of bathrooms (e.g. 2).
   * Range: minimum 0.
   */
  bathsMin?: number;
  /**
   * Minimum number of bedrooms (e.g. 3).
   * Range: minimum 0.
   */
  bedsMin?: number;
  /**
   * Free-text keyword that must appear in the listing description (e.g. 'pool').
   */
  keyword?: string;
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
   * Range: minimum 0.
   */
  priceMax?: number;
  /**
   * Minimum listing price in USD (e.g. 250000).
   * Range: minimum 0.
   */
  priceMin?: number;
  /**
   * Filter by one or more property types; omit for all types (e.g. ["single_family", "townhomes"]).
   */
  propertyTypes?: (
    | "single_family"
    | "townhomes"
    | "condo_townhome"
    | "multi_family"
    | "land"
    | "farm"
    | "manufactured"
    | "mobile"
    | "apartment"
    | "coop"
    | "duplex_triplex"
  )[];
  /**
   * Listing type to search: for_sale or sold (e.g. for_sale).
   * One of: for_sale, sold.
   * Default: for_sale.
   */
  searchMode?: "for_sale" | "sold";
  /**
   * Listing statuses to include in for_sale mode; omit for active For Sale + Ready to Build. Ignored in sold mode (e.g. ["for_sale", "pending"]).
   */
  searchStatuses?: (
    "for_sale" | "ready_to_build" | "pending" | "coming_soon" | "contingent"
  )[];
}

export type RealtorSearchData = unknown;

/**
 * Typed methods for the realtor platform. Attached to the AnyAPI client as
 * `client.realtor`.
 */
export class RealtorNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Realtor.com Search
   *
   * Search Realtor.com listings by location with optional price, property-type, beds/baths, listing-status, and keyword filters and get property records (price, address, beds, baths) as normalized JSON.
   *
   * Price: $0.005 per request plus $0.0015 per result (maximum $0.0425).
   *
   * @example
   * const res = await client.realtor.search({ location: "Austin, TX", bedsMin: 4, limit: 3, propertyTypes: ["single_family"], searchStatuses: ["pending"] });
   */
  search(
    input: RealtorSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<RealtorSearchData>> {
    return this._core.run(
      "realtor.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<RealtorSearchData>>;
  }
}
