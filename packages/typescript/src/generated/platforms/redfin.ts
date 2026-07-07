// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Redfin Search (redfin.search).
 */
export interface RedfinSearchInput {
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
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
  pricePerSqft?: number;
  /**
   * Redfin property id (stable identifier for the home).
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
   * MLS listing status (e.g. Active, Coming Soon, Sold).
   */
  status?: string;
  /**
   * Street address line used as the listing title.
   */
  title?: string;
  /**
   * Canonical Redfin listing detail page URL.
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
   * Matching Redfin home listing records.
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
   * Redfin Search
   *
   * Run a Redfin map search by URL and get matching home listings (price, address, beds, baths, status) as normalized JSON with flat per-request USD pricing.
   *
   * Price: $0.0027 per request plus $0.00043 per result.
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
