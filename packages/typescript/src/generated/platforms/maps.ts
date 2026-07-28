// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Google Maps Contacts (maps.contacts).
 */
export interface MapsContactsInput {
  /**
   * Optional list of Google Maps place-category names to keep; results are limited to places whose category matches one of these. Use lowercase category names as shown on Google Maps (e.g. ["dentist", "orthodontist"]). Omit to include all categories.
   */
  categoryFilterWords?: string[];
  /**
   * Two-letter language code for the results (e.g. en).
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Free-text location to search in, ideally city plus country (e.g. Denver, USA).
   */
  location: string;
  /**
   * Only return places with at least this average rating: two (2+), twoAndHalf (2.5+), three (3+), threeAndHalf (3.5+), four (4+), or fourAndHalf (4.5+). Places with no reviews are excluded. Omit for no rating filter.
   * One of: two, twoAndHalf, three, threeAndHalf, four, fourAndHalf.
   */
  placeMinimumStars?:
    "two" | "twoAndHalf" | "three" | "threeAndHalf" | "four" | "fourAndHalf";
  /**
   * What you would type in the Google Maps search bar (e.g. dentist).
   */
  query: string;
  /**
   * Filter places by whether they list a website: allPlaces (default), withWebsite (only places that have a website), or withoutWebsite (only places without one). Contact enrichment pulls emails and social profiles from a place's website, so withWebsite targets leads that can be enriched.
   * One of: allPlaces, withWebsite, withoutWebsite.
   */
  website?: "allPlaces" | "withWebsite" | "withoutWebsite";
}

export type MapsContactsData = unknown;

/**
 * Input for Google Maps Place Lookup (maps.place).
 */
export interface MapsPlaceInput {
  /**
   * Optional list of Google Maps place-category names to keep; the match is limited to a place whose category is one of these. Use lowercase category names as shown on Google Maps (e.g. ["coffee shop"]). Omit to allow any category.
   */
  categoryFilterWords?: string[];
  /**
   * Two-letter language code for the result details (e.g. en).
   * Default: en.
   */
  language?: string;
  /**
   * Optional free-text location to scope the search, ideally city plus state or country (e.g. San Francisco, CA). Narrows the query to the best match in that area.
   */
  location?: string;
  /**
   * Only match a place with at least this average rating: two (2+), twoAndHalf (2.5+), three (3+), threeAndHalf (3.5+), four (4+), or fourAndHalf (4.5+). Places with no reviews are excluded. Omit for no rating filter.
   * One of: two, twoAndHalf, three, threeAndHalf, four, fourAndHalf.
   */
  placeMinimumStars?:
    "two" | "twoAndHalf" | "three" | "threeAndHalf" | "four" | "fourAndHalf";
  /**
   * The business name or search text to look up, as you would type it into the Google Maps search bar (e.g. Blue Bottle Coffee).
   */
  query: string;
  /**
   * Filter by whether the place lists a website: allPlaces (default), withWebsite (only if it has a website), or withoutWebsite (only if it has none).
   * One of: allPlaces, withWebsite, withoutWebsite.
   */
  website?: "allPlaces" | "withWebsite" | "withoutWebsite";
}

export type MapsPlaceData = unknown;

/**
 * Input for Google Maps Reviews (maps.reviews).
 */
export interface MapsReviewsInput {
  /**
   * Two-letter language code for the review details (e.g. en).
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of results to return (1-100, default 100). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 100.
   */
  limit?: number;
  /**
   * The Google Maps place ID to fetch reviews for (e.g. ChIJj61dQgK6j4AR4GeTYWZsKWw).
   */
  placeId: string;
  /**
   * Only return reviews posted within this window: 24h (past 24 hours), week (past 7 days), month (past month), or year (past year). Omit for no recency filter.
   * One of: 24h, week, month, year.
   */
  postedLimit?: "24h" | "week" | "month" | "year";
  /**
   * Only return reviews whose text contains this keyword or phrase (case-insensitive). Omit to return all reviews (e.g. parking).
   */
  reviewsFilterString?: string;
  /**
   * Order in which reviews are returned (e.g. newest).
   * One of: newest, mostRelevant, highestRanking, lowestRanking.
   * Default: newest.
   */
  sort?: "newest" | "mostRelevant" | "highestRanking" | "lowestRanking";
}

export type MapsReviewsData = unknown;

/**
 * Input for Google Maps Search (maps.search).
 */
export interface MapsSearchInput {
  /**
   * Optional list of Google Maps place-category names to keep; results are limited to places whose category matches one of these. Use lowercase category names as shown on Google Maps (e.g. ["coffee shop", "restaurant"]). Omit to include all categories.
   */
  categoryFilterWords?: string[];
  /**
   * Two-letter language code for the results (e.g. en).
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Free-text location to search in, ideally city plus country (e.g. Austin, USA).
   */
  location: string;
  /**
   * Only return places with at least this average rating: two (2+), twoAndHalf (2.5+), three (3+), threeAndHalf (3.5+), four (4+), or fourAndHalf (4.5+). Places with no reviews are excluded. Omit for no rating filter.
   * One of: two, twoAndHalf, three, threeAndHalf, four, fourAndHalf.
   */
  placeMinimumStars?:
    "two" | "twoAndHalf" | "three" | "threeAndHalf" | "four" | "fourAndHalf";
  /**
   * What you would type in the Google Maps search bar (e.g. coffee shop).
   */
  query: string;
  /**
   * Filter places by whether they list a website: allPlaces (default), withWebsite (only places that have a website), or withoutWebsite (only places without one).
   * One of: allPlaces, withWebsite, withoutWebsite.
   */
  website?: "allPlaces" | "withWebsite" | "withoutWebsite";
}

export type MapsSearchData = unknown;

/**
 * Typed methods for the maps platform. Attached to the AnyAPI client as
 * `client.maps`.
 */
export class MapsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Maps Contacts
   *
   * Search Google Maps for businesses and enrich each result with contact details (emails, phones, and social profiles from their websites), up to 20 records per request.
   *
   * Price: $0.00005 per request plus $0.003 per result (maximum $0.06005).
   *
   * @example
   * const res = await client.maps.contacts({ location: "Austin, TX", query: "coffee shop", limit: 3, placeMinimumStars: "four", website: "withWebsite" });
   */
  contacts(
    input: MapsContactsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<MapsContactsData>> {
    return this._core.run(
      "maps.contacts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<MapsContactsData>>;
  }

  /**
   * Google Maps Place Lookup
   *
   * Look up a place on Google Maps by name or search query (optionally scoped to a location) and get the best-matching place with full details - address, phone, website, rating, hours, and coordinates - as normalized JSON.
   *
   * Price: $0.003 per request plus $0.005 per result (maximum $0.009).
   *
   * @example
   * const res = await client.maps.place({ query: "Blue Bottle Coffee", location: "San Francisco, CA", website: "withWebsite" });
   */
  place(
    input: MapsPlaceInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<MapsPlaceData>> {
    return this._core.run("maps.place", input, options) as unknown as Promise<
      BareRunResult<MapsPlaceData>
    >;
  }

  /**
   * Google Maps Reviews
   *
   * Fetch up to 100 Google Maps reviews for a place by place ID, sorted the way you need, in one normalized response.
   *
   * Price: $0.00005 per request plus $0.0004 per result (maximum $0.04005).
   *
   * @example
   * const res = await client.maps.reviews({ placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4", limit: 3, postedLimit: "year" });
   */
  reviews(
    input: MapsReviewsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<MapsReviewsData>> {
    return this._core.run("maps.reviews", input, options) as unknown as Promise<
      BareRunResult<MapsReviewsData>
    >;
  }

  /**
   * Google Maps Search
   *
   * Search Google Maps for places matching a query and location: up to 20 normalized place records with ratings, addresses, and contact basics per request.
   *
   * Price: $0.00005 per request plus $0.003 per result (maximum $0.06005).
   *
   * @example
   * const res = await client.maps.search({ location: "Austin, TX", query: "coffee", limit: 3, placeMinimumStars: "four", website: "withWebsite" });
   */
  search(
    input: MapsSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<MapsSearchData>> {
    return this._core.run("maps.search", input, options) as unknown as Promise<
      BareRunResult<MapsSearchData>
    >;
  }
}
