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

export interface RealtorSearchItem {
  /**
   * Street address line of the property.
   */
  addressLine?: string;
  /**
   * Consolidated bathroom count (e.g. "3.5" for three full and one half bath).
   */
  baths?: string;
  /**
   * Number of bedrooms.
   */
  beds?: number;
  /**
   * City the property is in.
   */
  city?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Number of days the listing has been on the market.
   */
  daysOnMarket?: number;
  /**
   * Primary listing photo URL.
   */
  image?: string;
  /**
   * Latitude of the property in decimal degrees.
   */
  latitude?: number;
  /**
   * Realtor.com listing id for this specific listing of the property.
   */
  listingId?: string;
  /**
   * Longitude of the property in decimal degrees.
   */
  longitude?: number;
  /**
   * Lot size in square feet.
   */
  lotSqft?: number;
  /**
   * Postal (ZIP) code of the property.
   */
  postalCode?: string;
  /**
   * Current list price in US dollars.
   */
  price?: number;
  /**
   * List price per square foot in US dollars.
   */
  pricePerSqft?: number;
  /**
   * Realtor.com property id (stable identifier for the listing). Populated whenever the provider has data for the entity.
   */
  propertyId: string;
  /**
   * Property type (e.g. single_family, condos, townhomes).
   */
  propertyType?: string;
  /**
   * Interior living area in square feet.
   */
  sqft?: number;
  /**
   * Two-letter state code the property is in.
   */
  state?: string;
  /**
   * Display listing status, including ready-to-build, pending, contingent, and coming-soon sub-statuses when present.
   * One of: for_sale, ready_to_build, sold, pending, contingent, coming_soon.
   */
  status?:
    | "for_sale"
    | "ready_to_build"
    | "sold"
    | "pending"
    | "contingent"
    | "coming_soon";
  /**
   * Human-readable street address line used as the listing title.
   */
  title?: string;
  /**
   * Canonical Realtor.com listing detail page URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Year the property was built.
   */
  yearBuilt?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Realtor.com Search (realtor.search).
 */
export interface RealtorSearchData {
  /**
   * Matching Realtor.com property listing records. Populated whenever the provider has data for the entity.
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
  ): Promise<RunResult<RealtorSearchData>> {
    return this._core.run("realtor.search", input, options);
  }
}
