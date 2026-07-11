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
   * Canonical Zillow property detail page URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Zillow property id (zpid), the stable identifier for the property. Populated whenever the provider has data for the entity.
   */
  zpid: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Zillow Property (zillow.property).
 */
export interface ZillowPropertyData {
  /**
   * The matched property record (single element for a property lookup). Populated whenever the provider has data for the entity.
   */
  items: ZillowPropertyItem[];
}

/**
 * Input for Zillow Search (zillow.search).
 */
export interface ZillowSearchInput {
  /**
   * Only include listings on Zillow at most this long (e.g. 1_week).
   * One of: 1_day, 1_week, 2_weeks, 1_month, 3_months, 6_months, 12_months, 24_months, 36_months.
   */
  daysOnZillow?:
    | "1_day"
    | "1_week"
    | "2_weeks"
    | "1_month"
    | "3_months"
    | "6_months"
    | "12_months"
    | "24_months"
    | "36_months";
  /**
   * Filter by property type; omit for any. Rentals support only singleFamily, multiFamily, townhome, and condo (e.g. ["singleFamily", "condo"]).
   */
  homeTypes?: (
    | "singleFamily"
    | "multiFamily"
    | "townhome"
    | "condo"
    | "apartment"
    | "manufactured"
    | "land"
  )[];
  /**
   * Include listings accepting backup offers, which Zillow excludes by default (e.g. true).
   */
  includeAcceptingBackupOffers?: boolean;
  /**
   * Include pending and under-contract listings, which Zillow excludes by default (e.g. true).
   */
  includePendingAndUnderContract?: boolean;
  /**
   * Include room-for-rent listings in rent searches; when omitted or false only entire places are returned (e.g. true).
   */
  includeRoomForRent?: boolean;
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Listing types to include for buy searches; omit for all standard types. fsba = agent listed, fsbo = for sale by owner. Ignored for rent and sold (e.g. ["newConstruction"]).
   */
  listingTypes?: (
    | "fsba"
    | "fsbo"
    | "newConstruction"
    | "comingSoon"
    | "auction"
    | "foreclosure"
    | "foreclosed"
    | "preforeclosure"
  )[];
  /**
   * Region-level location to search: ZIP code, city and state, county, or neighborhood (e.g. 'Austin, TX' or '78701'). Street addresses are not supported; use the property's ZIP code instead.
   */
  location: string;
  /**
   * Maximum number of bedrooms (e.g. 5).
   * Range: minimum 0.
   */
  maxBedrooms?: number;
  /**
   * Maximum living area in square feet (e.g. 3000).
   * Range: minimum 0.
   */
  maxLivingAreaSqft?: number;
  /**
   * Maximum price in USD: monthly rent for rentals, total price for buy/sold (e.g. 750000).
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Minimum number of bedrooms (e.g. 3).
   * Range: minimum 0.
   */
  minBedrooms?: number;
  /**
   * Minimum living area in square feet (e.g. 1500).
   * Range: minimum 0.
   */
  minLivingAreaSqft?: number;
  /**
   * Minimum price in USD: monthly rent for rentals, total price for buy/sold (e.g. 250000).
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * Listing type: buy (for sale), rent, or sold.
   * One of: buy, rent, sold.
   * Default: buy.
   */
  operation?: "buy" | "rent" | "sold";
  /**
   * Only show listings with a price reduction. Buy searches only; ignored for rentals (e.g. true).
   */
  showOnlyPriceReductions?: boolean;
  /**
   * Sort order for results; omit for Zillow's default relevance. rentalPriorityScore applies to rent searches only (e.g. newest).
   * One of: newest, recentlyChanged, price_high, price_low, bedrooms, bathrooms, rentalPriorityScore.
   */
  sortBy?:
    | "newest"
    | "recentlyChanged"
    | "price_high"
    | "price_low"
    | "bedrooms"
    | "bathrooms"
    | "rentalPriorityScore";
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
   * URL of the primary listing photo. Populated whenever the provider has data for the entity.
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
   * Street address of the property. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  streetAddress?: string;
  /**
   * Absolute Zillow listing URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  yearBuilt?: number;
  /**
   * Zillow estimated market value.
   */
  zestimate?: number;
  zipcode?: string;
  /**
   * Zillow property id (zpid). Populated whenever the provider has data for the entity.
   */
  zpid: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Zillow Search (zillow.search).
 */
export interface ZillowSearchData {
  /**
   * Property listing records matching the search: address, price, beds, baths, living area, property type, status, Zestimate, and coordinates. Populated whenever the provider has data for the entity.
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
   * Fetch full details for a single Zillow property listing by URL (price, facts and features, photos, and price/tax history).

**Price:** billed per result - \$2.40 per 1,000 results, capped at \$2.40 per 1,000 requests.
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
   * Search Zillow for-sale, rental, or sold listings by region-level location (city, ZIP, county, or neighborhood) with optional price, bedroom, living-area, home-type, recency, and sort filters and get matching properties (price, address, beds, baths, living area, status, Zestimate) as normalized JSON.

**Price:** billed per result - \$0.50 per 1,000 requests base + \$3.00 per 1,000 results, capped at \$75.50 per 1,000 requests.
   *
   * Price: $0.0005 per request plus $0.003 per result.
   *
   * @example
   * const res = await client.zillow.search({ location: "Austin, TX", limit: 3, maxPrice: 900000, minBedrooms: 3, operation: "buy" });
   */
  search(
    input: ZillowSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<ZillowSearchData>> {
    return this._core.run("zillow.search", input, options);
  }
}
