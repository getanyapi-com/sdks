// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Zillow Agent (zillow.agent).
 */
export interface ZillowAgentInput {
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
   * Zillow agent profile URL (e.g. https://www.zillow.com/profile/gregorycarlsonATX/).
   */
  url: string;
}

/**
 * The `data` payload of Zillow Agent (zillow.agent).
 */
export interface ZillowAgentData {
  /**
   * Agent's self-written biography, as HTML.
   */
  bio?: string;
  /**
   * Brokerage or business name the agent works under. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  company?: string;
  /**
   * Agent's email address as listed on the profile. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  email?: string;
  /**
   * Number of active for-sale listings.
   */
  forSaleCount?: number;
  /**
   * Profile photo URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * True when Zillow flags the agent as a top agent.
   */
  isTopAgent?: boolean;
  /**
   * Agent's full name. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Agent's phone number as listed on the profile (the cell number when one is listed). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  phone?: string;
  /**
   * Average review rating out of 5.
   */
  rating?: number;
  /**
   * Number of reviews on the profile.
   */
  reviewCount?: number;
  /**
   * Cities and areas the agent lists as served, e.g. "Austin, TX".
   */
  serviceAreas?: string[];
  /**
   * Total sales on record for the agent (for a team lead, the team's total).
   */
  totalSales?: number;
  /**
   * Canonical Zillow profile URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Zillow screen name, the last segment of the profile URL. Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * Input for Zillow Property (zillow.property).
 */
export interface ZillowPropertyInput {
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
   * Country the property is in.
   */
  country?: string;
  /**
   * County the property is in.
   */
  county?: string;
  /**
   * Currency code for the price (e.g. USD).
   */
  currency?: string;
  /**
   * Days the listing has been on Zillow.
   */
  daysOnZillow?: number;
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
   * Listing photos.
   */
  images?: ZillowPropertyImage[];
  /**
   * Latitude of the property in decimal degrees.
   */
  latitude?: number;
  /**
   * Longitude of the property in decimal degrees.
   */
  longitude?: number;
  /**
   * Name of the multiple listing service the listing came from.
   */
  mlsName?: string;
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
   * Zillow estimated monthly rent.
   */
  rentZestimate?: number;
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
   * Zillow estimated market value.
   */
  zestimate?: number;
  /**
   * Zillow property id (zpid), the stable identifier for the property. Populated whenever the provider has data for the entity.
   */
  zpid: string;
  [extra: string]: unknown;
}

export interface ZillowPropertyImage {
  /**
   * Photo URL.
   */
  url?: string;
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
   * Maximum number of results to return (1-25, default 25).
   * Range: minimum 1, maximum 25.
   * Default: 25.
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `yearBuilt`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a listing that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "baths"
    | "beds"
    | "brokerName"
    | "city"
    | "currency"
    | "daysOnZillow"
    | "images"
    | "isZillowOwned"
    | "latitude"
    | "livingArea"
    | "longitude"
    | "lotSize"
    | "price"
    | "propertyType"
    | "rentZestimate"
    | "state"
    | "status"
    | "taxAssessedValue"
    | "yearBuilt"
    | "zestimate"
    | "zipcode"
  )[];
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
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
  /**
   * Listing brokerage name.
   */
  brokerName?: string;
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
  /**
   * Listing photo URLs.
   */
  images?: string[];
  /**
   * True when Zillow itself owns the property.
   */
  isZillowOwned?: boolean;
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
   * Assessed value the county tax authority carries for the property.
   */
  taxAssessedValue?: number;
  /**
   * Absolute Zillow listing URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Year the home was built, or null when the serving source does not publish it.
   */
  yearBuilt?: number | null;
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
   * Zillow Agent
   *
   * Fetch one Zillow real estate agent's profile by URL: name, phone, email, brokerage, rating, review count, sales, and service areas.
   *
   * Price: $0.0005 per request.
   *
   * @example
   * const res = await client.zillow.agent({ url: "https://www.zillow.com/profile/gregorycarlsonATX/" });
   */
  agent(
    input: ZillowAgentInput,
    options?: RequestOptions,
  ): Promise<RunResult<ZillowAgentData>> {
    return this._core.run("zillow.agent", input, options);
  }

  /**
   * Zillow Property
   *
   * Fetch full details for a single Zillow property listing by URL (price, facts and features, photos, and price/tax history).
   *
   * Price: $0.0005 per request.
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
   *
   * Price: $0.0005 per request.
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
