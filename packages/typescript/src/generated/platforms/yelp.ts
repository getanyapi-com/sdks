// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Yelp Search (yelp.search).
 */
export interface YelpSearchInput {
  /**
   * Maximum number of results to return (1 to 20, default 20).
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * City and state defining the search area (e.g. San Francisco, CA).
   */
  location: string;
  /**
   * Search term or category to look for (e.g. sushi).
   */
  query: string;
}

export interface YelpSearchItem {
  /**
   * Primary street address line.
   */
  address1?: string;
  /**
   * Secondary address line.
   */
  address2?: string;
  /**
   * Tertiary address line.
   */
  address3?: string;
  /**
   * URL slug for the business.
   * Populated whenever the provider returns data.
   */
  alias: string;
  /**
   * Rounded average star rating.
   */
  avg_rating?: number;
  /**
   * Business category tags.
   */
  categories?: YelpSearchCategorie[];
  /**
   * City name.
   */
  city?: string;
  /**
   * ISO country code.
   */
  country?: string;
  /**
   * Dialable phone number.
   */
  dialable_phone?: string;
  /**
   * Stable Yelp business identifier.
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Whether the business is permanently closed.
   */
  is_closed?: boolean;
  /**
   * Latitude of the business.
   */
  latitude?: number;
  /**
   * Formatted local phone number.
   */
  localized_phone?: string;
  /**
   * Localized price tier (e.g. $$).
   */
  localized_price?: string;
  /**
   * Longitude of the business.
   */
  longitude?: number;
  /**
   * Business display name.
   * Populated whenever the provider returns data.
   */
  name: string;
  /**
   * Neighborhood labels for the location.
   */
  neighborhoods?: string[];
  /**
   * Raw phone number.
   */
  phone?: string;
  /**
   * Total photo count.
   */
  photo_count?: number;
  /**
   * Primary photo URL.
   * Populated whenever the provider returns data.
   */
  photo_url?: string;
  /**
   * Numeric price tier.
   */
  price?: number;
  /**
   * Number of reviews.
   */
  review_count?: number;
  /**
   * State or region code.
   */
  state?: string;
  /**
   * Unrounded average star rating.
   */
  unrounded_avg_rating?: number;
  /**
   * Postal code.
   */
  zip?: string;
  [extra: string]: unknown;
}

export interface YelpSearchCategorie {
  [extra: string]: unknown;
}

/**
 * The `data` payload of Yelp Search (yelp.search).
 */
export interface YelpSearchData {
  /**
   * Business listing records: name, categories, rating, review count, address, and core business info.
   * Populated whenever the provider returns data.
   */
  items: YelpSearchItem[];
}

/**
 * Typed methods for the yelp platform. Attached to the AnyAPI client as
 * `client.yelp`.
 */
export class YelpNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Yelp Search
   *
   * Search Yelp for businesses by keyword and location: up to 20 listings with ratings, categories, and core business info per flat-priced request.
   *
   * Price: $0.04 per request plus $0.00075 per result.
   *
   * @example
   * const res = await client.yelp.search({"limit":5,"location":"Chicago, IL","query":"pizza"});
   */
  search(
    input: YelpSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<YelpSearchData>> {
    return this._core.run("yelp.search", input, options);
  }
}
