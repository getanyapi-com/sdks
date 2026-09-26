// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Redfin Property (redfin.property).
 */
export interface RedfinPropertyInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Redfin home details URL (e.g. https://www.redfin.com/TX/Austin/1819-Village-Oak-Ct-78704/home/30981993).
   */
  url: string;
}

export interface RedfinPropertyItem {
  /**
   * Street address line of the home.
   */
  addressLine?: string;
  /**
   * Name of the listing agent.
   */
  agentName?: string;
  /**
   * Number of bathrooms (fractional for half baths).
   */
  baths?: number;
  /**
   * Number of bedrooms.
   */
  beds?: number;
  /**
   * City the home is in.
   */
  city?: string;
  /**
   * ISO country code the home is in.
   */
  country?: string;
  /**
   * County the home is in.
   */
  county?: string;
  /**
   * Listing remarks written by the agent.
   */
  description?: string;
  /**
   * Redfin property type label (e.g. Single Family Residential, Condo/Co-op, Townhouse).
   */
  homeType?: string;
  /**
   * Primary listing photo URL.
   */
  image?: string;
  /**
   * Listing photos.
   */
  images?: RedfinPropertyImage[];
  /**
   * Latitude of the home in decimal degrees.
   */
  latitude?: number;
  /**
   * Redfin listing id of the home's current or most recent listing.
   */
  listingId?: string;
  /**
   * Longitude of the home in decimal degrees.
   */
  longitude?: number;
  /**
   * Lot size in square feet.
   */
  lotSize?: number;
  /**
   * MLS number of the listing.
   */
  mlsId?: string;
  /**
   * Postal (ZIP) code of the home.
   */
  postalCode?: string;
  /**
   * List price, or the last sale price for a sold home, in US dollars.
   */
  price?: number;
  /**
   * Price per square foot in US dollars.
   */
  pricePerSqft?: number;
  /**
   * Redfin property id, the stable identifier for the home. Populated whenever the provider has data for the entity.
   */
  propertyId: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  soldUtc?: number;
  /**
   * Interior living area in square feet.
   */
  sqft?: number;
  /**
   * Two-letter state code the home is in.
   */
  state?: string;
  /**
   * Number of storeys in the home.
   */
  stories?: number;
  /**
   * Street address line used as the home's title.
   */
  title?: string;
  /**
   * Canonical Redfin home details page URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Year the home was built.
   */
  yearBuilt?: number;
  [extra: string]: unknown;
}

export interface RedfinPropertyImage {
  /**
   * Photo URL.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Redfin Property (redfin.property).
 */
export interface RedfinPropertyData {
  /**
   * The matched home record (single element for a property lookup). Populated whenever the provider has data for the entity.
   */
  items: RedfinPropertyItem[];
}

/**
 * Input for Redfin Search (redfin.search).
 */
export interface RedfinSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of results to return (1-25, default 25).
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `description`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a listing that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "addressLine"
    | "agentName"
    | "baths"
    | "beds"
    | "city"
    | "countryCode"
    | "daysOnMarket"
    | "description"
    | "garageSpaces"
    | "hoaFee"
    | "latitude"
    | "listingId"
    | "longitude"
    | "lotSize"
    | "mlsId"
    | "parkingSpaces"
    | "postalCode"
    | "price"
    | "pricePerSqft"
    | "soldUtc"
    | "sqft"
    | "state"
    | "status"
    | "stories"
    | "title"
    | "yearBuilt"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Redfin search results URL for a city, ZIP or map area (e.g. https://www.redfin.com/city/30772/CA/San-Francisco).
   */
  url: string;
}

export interface RedfinSearchItem {
  /**
   * Street address line of the home.
   */
  addressLine?: string;
  /**
   * Name of the listing agent.
   */
  agentName?: string | null;
  /**
   * Number of bathrooms (fractional for half baths).
   */
  baths?: number;
  /**
   * Number of bedrooms.
   */
  beds?: number;
  /**
   * City the home is in.
   */
  city?: string;
  /**
   * ISO country code the home is in.
   */
  countryCode?: string | null;
  /**
   * Days the listing has been on the market.
   */
  daysOnMarket?: number | null;
  /**
   * Listing remarks written by the agent.
   */
  description?: string | null;
  /**
   * Number of garage spaces.
   */
  garageSpaces?: number | null;
  /**
   * Homeowners association fee, in US dollars, at the frequency Redfin reports.
   */
  hoaFee?: number | null;
  /**
   * Latitude of the home in decimal degrees.
   */
  latitude?: number;
  /**
   * Redfin listing id for this specific listing.
   */
  listingId?: string;
  /**
   * Longitude of the home in decimal degrees.
   */
  longitude?: number;
  /**
   * Lot size in square feet.
   */
  lotSize?: number;
  /**
   * MLS number for the listing.
   */
  mlsId?: string;
  /**
   * Number of parking spaces.
   */
  parkingSpaces?: number | null;
  /**
   * Postal (ZIP) code of the home.
   */
  postalCode?: string;
  /**
   * List (or last sale) price in US dollars.
   */
  price?: number;
  /**
   * Price per square foot in US dollars.
   */
  pricePerSqft?: number | null;
  /**
   * Redfin property id (stable identifier for the home). Populated whenever the provider has data for the entity.
   */
  propertyId: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  soldUtc?: number | null;
  /**
   * Interior living area in square feet.
   */
  sqft?: number;
  /**
   * Two-letter state code the home is in.
   */
  state?: string;
  /**
   * MLS listing status (e.g. Active, Coming Soon, Sold).
   */
  status?: string;
  /**
   * Number of storeys in the home.
   */
  stories?: number | null;
  /**
   * Street address line used as the listing title.
   */
  title?: string;
  /**
   * Canonical Redfin listing detail page URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Year the home was built.
   */
  yearBuilt?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Redfin Search (redfin.search).
 */
export interface RedfinSearchData {
  /**
   * Matching Redfin home listing records. Populated whenever the provider has data for the entity.
   */
  items: RedfinSearchItem[];
}

/**
 * Typed methods for the redfin platform. Attached to the AnyAPI client as
 * `client.redfin`.
 */
export class RedfinNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Redfin Property
   *
   * Fetch full details for a single Redfin home by its listing URL (price, beds, baths, square feet, address, listing agent, description and photos) as normalized JSON.
   *
   * Price: $0.0005 per request.
   *
   * @example
   * const res = await client.redfin.property({ url: "https://www.redfin.com/TX/Austin/1819-Village-Oak-Ct-78704/home/30981993" });
   */
  property(
    input: RedfinPropertyInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedfinPropertyData>> {
    return this._core.run("redfin.property", input, options);
  }

  /**
   * Redfin Search
   *
   * Run a Redfin map search by URL and get matching home listings (price, address, beds, baths, status) as normalized JSON.
   *
   * Price: $0.0008 per request.
   *
   * @example
   * const res = await client.redfin.search({ url: "https://www.redfin.com/city/30818/TX/Austin", limit: 3 });
   */
  search(
    input: RedfinSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedfinSearchData>> {
    return this._core.run("redfin.search", input, options);
  }
}
