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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Price: $0.0055 per request plus $0.00165 per result (maximum $0.0468).
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
