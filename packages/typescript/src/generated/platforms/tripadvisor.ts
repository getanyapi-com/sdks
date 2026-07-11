// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Tripadvisor Reviews (tripadvisor.reviews).
 */
export interface TripadvisorReviewsInput {
  /**
   * Only return reviews in these ISO 639-1 languages (e.g. ["en", "es"]); omit for all languages.
   */
  languages?: string[];
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Only return reviews whose bubble rating is in this set (e.g. ["5", "4"] for 4 and 5 star reviews); omit for all ratings.
   */
  ratings?: ("1" | "2" | "3" | "4" | "5")[];
  /**
   * Only return reviews newer than this date, YYYY-MM-DD or a relative window like '3 months' (e.g. 2026-01-01).
   */
  since?: string;
  /**
   * Tripadvisor page URL of the hotel, restaurant, or attraction.
   */
  url: string;
}

export interface TripadvisorReviewsItem {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Star rating (typically 1-5).
   */
  rating: number;
  /**
   * Review body text. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Review title or headline. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  title?: string;
  /**
   * Canonical review URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Tripadvisor Reviews (tripadvisor.reviews).
 */
export interface TripadvisorReviewsData {
  /**
   * Review records for the place: rating, title, review text, publish date, trip type, and reviewer details. Populated whenever the provider has data for the entity.
   */
  items: TripadvisorReviewsItem[];
}

/**
 * Input for Tripadvisor Search (tripadvisor.search).
 */
export interface TripadvisorSearchInput {
  /**
   * ISO currency code for prices (e.g. USD, EUR).
   * Default: USD.
   */
  currency?: string;
  /**
   * Include attractions and things to do in the results; set false to exclude them (e.g. false). Defaults to true.
   * Default: true.
   */
  includeAttractions?: boolean;
  /**
   * Include hotels in the results; set false to exclude them (e.g. false). Defaults to true.
   * Default: true.
   */
  includeHotels?: boolean;
  /**
   * Include restaurants in the results; set false to exclude them (e.g. false). Defaults to true.
   * Default: true.
   */
  includeRestaurants?: boolean;
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Destination or keyword to search for (e.g. Barcelona).
   */
  query: string;
}

export interface TripadvisorSearchItem {
  /**
   * Full formatted street address.
   */
  address?: string;
  /**
   * High-level category (e.g. hotel, restaurant, attraction).
   */
  category?: string;
  /**
   * City the place is in.
   */
  city?: string;
  /**
   * Country the place is in.
   */
  country?: string;
  /**
   * Business contact email, when listed.
   */
  email?: string;
  /**
   * Star rating / hotel class, when applicable.
   */
  hotelClass?: string;
  /**
   * Tripadvisor location id (stable identifier for the place).
   */
  id?: string;
  /**
   * Primary place photo URL.
   */
  image?: string;
  /**
   * Latitude of the place in decimal degrees.
   */
  latitude?: number;
  /**
   * Longitude of the place in decimal degrees.
   */
  longitude?: number;
  /**
   * Business phone number, when listed.
   */
  phone?: string;
  /**
   * Postal code of the place.
   */
  postalCode?: string;
  /**
   * Relative price level indicator (e.g. $$, $$$$).
   */
  priceLevel?: string;
  /**
   * Nightly or per-visit price range in the requested currency.
   */
  priceRange?: string;
  /**
   * Ranking string within its location (e.g. "#2 of 1,885 hotels in Paris").
   */
  ranking?: string;
  /**
   * Average traveler rating out of 5. Populated whenever the provider has data for the entity.
   */
  rating: number;
  /**
   * Total number of traveler reviews.
   */
  reviewCount?: number;
  /**
   * Place name. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Tripadvisor place type (e.g. HOTEL, RESTAURANT, ATTRACTION).
   */
  type?: string;
  /**
   * Canonical Tripadvisor listing page URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * The place's own website URL, when listed.
   */
  website?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Tripadvisor Search (tripadvisor.search).
 */
export interface TripadvisorSearchData {
  /**
   * Matching Tripadvisor place records (hotels, restaurants, attractions). Populated whenever the provider has data for the entity.
   */
  items: TripadvisorSearchItem[];
}

/**
 * Typed methods for the tripadvisor platform. Attached to the AnyAPI client as
 * `client.tripadvisor`.
 */
export class TripadvisorNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Tripadvisor Reviews
   *
   * Fetch the latest reviews for any Tripadvisor hotel, restaurant, or attraction by its page URL - rating, text, date, and trip details as normalized JSON.

**Price:** \$3.25 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.tripadvisor.reviews({ url: "https://www.tripadvisor.com/Hotel_Review-g60763-d93450-Reviews-The_Plaza-New_York_City_New_York.html", limit: 3 });
   */
  reviews(
    input: TripadvisorReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TripadvisorReviewsData>> {
    return this._core.run("tripadvisor.reviews", input, options);
  }

  /**
   * Tripadvisor Search
   *
   * Search Tripadvisor for hotels, restaurants, and attractions in any destination and get rich place records (ratings, review counts, contact details, pricing) as normalized JSON.

**Price:** \$3.25 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.tripadvisor.search({ query: "Paris", limit: 3 });
   */
  search(
    input: TripadvisorSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<TripadvisorSearchData>> {
    return this._core.run("tripadvisor.search", input, options);
  }
}
