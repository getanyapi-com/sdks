// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Google Maps Contacts (maps.contacts).
 */
export interface MapsContactsInput {
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
   * What you would type in the Google Maps search bar (e.g. dentist).
   */
  query: string;
}

export interface MapsContactsItem {
  name: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Maps Contacts (maps.contacts).
 */
export interface MapsContactsData {
  /**
   * Business records: name, address, rating, plus enriched contact details such as emails, phone numbers, and social profiles.
   */
  items: MapsContactsItem[];
}

/**
 * Input for Google Maps Place Lookup (maps.place).
 */
export interface MapsPlaceInput {
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
   * The business name or search text to look up, as you would type it into the Google Maps search bar (e.g. Blue Bottle Coffee).
   */
  query: string;
}

export interface MapsPlaceItem {
  /**
   * Full formatted street address.
   * Present whenever the upstream returns this record.
   */
  address?: string;
  /**
   * Primary Google Maps category (e.g. Coffee shop).
   * Present whenever the upstream returns this record.
   */
  category?: string;
  city?: string;
  /**
   * Two-letter country code.
   */
  countryCode?: string;
  /**
   * Opening hours by day: each element is an object with the day name and its hours.
   */
  hours?: MapsPlaceHour[];
  /**
   * URL of the primary place photo.
   */
  image?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  latitude?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  longitude?: number;
  /**
   * Business or place name.
   */
  name: string;
  neighborhood?: string;
  /**
   * Whether the place is permanently closed.
   */
  permanentlyClosed?: boolean;
  /**
   * Formatted phone number.
   */
  phone?: string;
  /**
   * Google Maps place id.
   * Present whenever the upstream returns this record.
   */
  placeId?: string;
  /**
   * Google Plus Code for the location.
   */
  plusCode?: string;
  postalCode?: string;
  /**
   * Price level indicator (e.g. a price range).
   */
  priceLevel?: string;
  /**
   * Average star rating.
   */
  rating?: number;
  /**
   * Total number of reviews.
   */
  reviewsCount?: number;
  /**
   * State or region name.
   */
  state?: string;
  /**
   * Street portion of the address.
   */
  street?: string;
  /**
   * Google Maps URL for the place.
   */
  url: string;
  /**
   * Business website URL.
   */
  website?: string;
  [extra: string]: unknown;
}

export interface MapsPlaceHour {
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Maps Place Lookup (maps.place).
 */
export interface MapsPlaceData {
  /**
   * The best-matching place for the query, with full details: name, address, contact info, category, rating, opening hours, and coordinates. Up to one element (empty when nothing matched).
   */
  items: MapsPlaceItem[];
}

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
   * Order in which reviews are returned (e.g. newest).
   * One of: newest, mostRelevant, highestRanking, lowestRanking.
   * Default: newest.
   */
  sort?: "newest" | "mostRelevant" | "highestRanking" | "lowestRanking";
}

export interface MapsReviewsItem {
  /**
   * Reviewer display name.
   * Present whenever the upstream returns this record.
   */
  author?: string;
  /**
   * Whether the reviewer is a Google Local Guide.
   */
  isLocalGuide?: boolean;
  /**
   * Number of likes on the review.
   */
  likes?: number;
  /**
   * Source of the review (e.g. Google).
   */
  origin?: string;
  /**
   * Owner's reply text; empty when there is none.
   */
  ownerResponse?: string;
  /**
   * ISO 8601 timestamp of the owner's reply; empty when there is none.
   */
  ownerResponseAt?: string;
  /**
   * Google Maps place id the review belongs to.
   * Present whenever the upstream returns this record.
   */
  placeId?: string;
  /**
   * Human-relative publish time (e.g. '7 hours ago').
   */
  publishedAgo?: string;
  /**
   * ISO 8601 timestamp the review was published.
   * Present whenever the upstream returns this record.
   */
  publishedAt?: string;
  /**
   * Star rating the reviewer gave (1-5).
   */
  rating?: number;
  /**
   * Stable Google review id.
   */
  reviewId: string;
  reviewerId?: string;
  /**
   * Total number of reviews the reviewer has written.
   */
  reviewerReviewsCount?: number;
  /**
   * Review text; empty string when the reviewer left only a star rating.
   */
  text?: string;
  /**
   * Direct URL to the review on Google Maps.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Maps Reviews (maps.reviews).
 */
export interface MapsReviewsData {
  /**
   * Review records: reviewer, star rating, review text (empty when the reviewer left only a rating), publish date, likes, and owner response where present.
   */
  items: MapsReviewsItem[];
}

/**
 * Input for Google Maps Search (maps.search).
 */
export interface MapsSearchInput {
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
   * What you would type in the Google Maps search bar (e.g. coffee shop).
   */
  query: string;
}

export interface MapsSearchItem {
  name: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Maps Search (maps.search).
 */
export interface MapsSearchData {
  /**
   * Place records: name, category, address, coordinates, rating, review count, and contact basics.
   */
  items: MapsSearchItem[];
}

/**
 * Typed methods for the maps platform. Attached to the AnyAPI client as
 * `client.maps`.
 */
export class MapsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Maps Contacts
   *
   * Search Google Maps for businesses and enrich each result with contact details - emails, phones, and social profiles from their websites - up to 20 records per request.
   *
   * Price: $0.00005 per request plus $0.003 per result.
   *
   * @example
   * const res = await client.maps.contacts({ location: "Austin, TX", query: "coffee shop", limit: 3 });
   */
  contacts(
    input: MapsContactsInput,
    options?: RequestOptions,
  ): Promise<RunResult<MapsContactsData>> {
    return this._core.run("maps.contacts", input, options);
  }

  /**
   * Google Maps Place Lookup
   *
   * Look up a place on Google Maps by name or search query (optionally scoped to a location) and get the best-matching place with full details - address, phone, website, rating, hours, and coordinates - as normalized JSON priced per request in USD.
   *
   * Price: $0.003 per request plus $0.005 per result.
   *
   * @example
   * const res = await client.maps.place({ query: "Blue Bottle Coffee", location: "San Francisco, CA" });
   */
  place(
    input: MapsPlaceInput,
    options?: RequestOptions,
  ): Promise<RunResult<MapsPlaceData>> {
    return this._core.run("maps.place", input, options);
  }

  /**
   * Google Maps Reviews
   *
   * Fetch up to 100 Google Maps reviews for a place by place ID, sorted the way you need, in one flat-priced normalized response.
   *
   * Price: $0.00005 per request plus $0.0004 per result.
   *
   * @example
   * const res = await client.maps.reviews({ placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4", limit: 3 });
   */
  reviews(
    input: MapsReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<MapsReviewsData>> {
    return this._core.run("maps.reviews", input, options);
  }

  /**
   * Google Maps Search
   *
   * Search Google Maps for places matching a query and location - up to 20 normalized place records with ratings, addresses, and contact basics per request.
   *
   * Price: $0.00005 per request plus $0.003 per result.
   *
   * @example
   * const res = await client.maps.search({ location: "Austin, TX", query: "coffee", limit: 3 });
   */
  search(
    input: MapsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<MapsSearchData>> {
    return this._core.run("maps.search", input, options);
  }
}
