// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Zillow Property (zillow.property).
 */
export interface ZillowPropertyInput {
  /**
   * Zillow property details URL (e.g. https://www.zillow.com/homedetails/123-Main-St-Anytown-CA-90210/12345678_zpid/).
   */
  url: string;
}

export interface ZillowPropertyItem {
  /**
   * Street address line of the property.
   */
  addressLine?: string;
  /**
   * Number of bathrooms.
   */
  baths?: number;
  /**
   * Number of bedrooms.
   */
  beds?: number;
  /**
   * City the property is in.
   */
  city?: string;
  /**
   * County the property is in.
   */
  county?: string;
  /**
   * Currency code for the price (e.g. USD).
   */
  currency?: string;
  /**
   * Listing description text.
   */
  description?: string;
  /**
   * Listing status (e.g. FOR_SALE, RECENTLY_SOLD, OTHER).
   */
  homeStatus?: string;
  /**
   * Home type (e.g. SINGLE_FAMILY, CONDO, TOWNHOUSE).
   */
  homeType?: string;
  /**
   * Primary listing photo URL.
   */
  image?: string;
  /**
   * Latitude of the property in decimal degrees.
   */
  latitude?: number;
  /**
   * Longitude of the property in decimal degrees.
   */
  longitude?: number;
  /**
   * Postal (ZIP) code of the property.
   */
  postalCode?: string;
  /**
   * Listed price in the listing currency.
   */
  price?: number;
  /**
   * Annual property tax rate as a percentage.
   */
  propertyTaxRate?: number;
  /**
   * Interior living area in square feet.
   */
  sqft?: number;
  /**
   * Two-letter state code the property is in.
   */
  state?: string;
  /**
   * Street address line used as the property title.
   */
  title?: string;
  /**
   * Canonical Zillow property detail page URL.
   */
  url: string;
  /**
   * Zillow property id (zpid), the stable identifier for the property.
   */
  zpid: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Zillow Property (zillow.property).
 */
export interface ZillowPropertyData {
  /**
   * The matched property record (single element for a property lookup).
   */
  items: ZillowPropertyItem[];
}

/**
 * Input for Zillow Search (zillow.search).
 */
export interface ZillowSearchInput {
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Location to search: city, ZIP code, neighborhood, or address (e.g. 'Austin, TX' or '78701').
   */
  location: string;
  /**
   * Listing type: buy (for sale), rent, or sold.
   * One of: buy, rent, sold.
   * Default: buy.
   */
  operation?: "buy" | "rent" | "sold";
}

export interface ZillowSearchItem {
  /**
   * Number of bathrooms.
   */
  baths?: number;
  /**
   * Number of bedrooms.
   */
  beds?: number;
  city?: string;
  /**
   * ISO currency code of the price (e.g. usd).
   */
  currency?: string;
  /**
   * Days the listing has been on Zillow.
   */
  daysOnZillow?: number;
  /**
   * URL of the primary listing photo.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  latitude?: number;
  /**
   * Interior living area in square feet.
   */
  livingArea?: number;
  longitude?: number;
  /**
   * Lot size in square feet.
   */
  lotSize?: number;
  /**
   * List price in the listing currency.
   */
  price?: number;
  /**
   * Property type (e.g. singleFamily, condo, townhouse).
   */
  propertyType?: string;
  /**
   * Zillow estimated monthly rent.
   */
  rentZestimate?: number;
  /**
   * Two-letter state code.
   */
  state?: string;
  /**
   * Listing status (e.g. forSale, forRent, sold).
   */
  status?: string;
  /**
   * Street address of the property.
   * Present whenever the upstream returns this record.
   */
  streetAddress?: string;
  /**
   * Absolute Zillow listing URL.
   */
  url: string;
  yearBuilt?: number;
  /**
   * Zillow estimated market value.
   */
  zestimate?: number;
  zipcode?: string;
  /**
   * Zillow property id (zpid).
   */
  zpid: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Zillow Search (zillow.search).
 */
export interface ZillowSearchData {
  /**
   * Property listing records matching the search: address, price, beds, baths, living area, property type, status, Zestimate, and coordinates.
   */
  items: ZillowSearchItem[];
}

/**
 * Typed methods for the zillow platform. Attached to the AnyAPI client as
 * `client.zillow`.
 */
export class ZillowNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Zillow Property
   *
   * Fetch full details for a single Zillow property listing by URL (price, facts and features, photos, and price/tax history) with transparent per-request USD pricing.
   *
   * Price: $0.0024 per result.
   *
   * @example
   * const res = await client.zillow.property({ url: "https://www.zillow.com/homedetails/4510-Secure-Ln-Austin-TX-78725/83126034_zpid/" });
   */
  property(
    input: ZillowPropertyInput,
    options?: RequestOptions,
  ): Promise<RunResult<ZillowPropertyData>> {
    return this._core.run("zillow.property", input, options);
  }

  /**
   * Zillow Search
   *
   * Search Zillow for-sale, rental, or sold listings by location (city, ZIP, or address) and get matching properties (price, address, beds, baths, living area, status, Zestimate) as normalized JSON with per-request USD pricing that scales with the number of results.
   *
   * Price: $0.0005 per request plus $0.003 per result.
   *
   * @example
   * const res = await client.zillow.search({ location: "Austin, TX", limit: 3, operation: "buy" });
   */
  search(
    input: ZillowSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<ZillowSearchData>> {
    return this._core.run("zillow.search", input, options);
  }
}
