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

export interface MapsContactsItem {
  /**
   * Full formatted street address.
   */
  address?: string;
  /**
   * Primary business category.
   */
  category?: string;
  /**
   * Google customer/place id (cid).
   */
  cid?: string;
  /**
   * City the business is in.
   */
  city?: string;
  /**
   * Two-letter country code.
   */
  countryCode?: string;
  /**
   * Email addresses scraped from the business website.
   */
  emails?: string[];
  /**
   * Facebook profile URLs found on the business website.
   */
  facebooks?: string[];
  /**
   * Primary business photo URL.
   */
  image?: string;
  /**
   * Instagram profile URLs found on the business website.
   */
  instagrams?: string[];
  /**
   * Latitude of the business in decimal degrees.
   */
  latitude?: number;
  /**
   * LinkedIn profile URLs found on the business website.
   */
  linkedIns?: string[];
  /**
   * Longitude of the business in decimal degrees.
   */
  longitude?: number;
  /**
   * Business name. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Business phone number in E.164 format, when listed on Google Maps.
   */
  phone?: string;
  /**
   * Additional phone numbers scraped from the business website.
   */
  phones?: string[];
  /**
   * Google Maps place id (stable identifier for the business). Populated whenever the provider has data for the entity.
   */
  placeId: string;
  /**
   * Postal code of the business.
   */
  postalCode?: string;
  /**
   * Average star rating out of 5.
   */
  rating?: number;
  /**
   * Total number of reviews.
   */
  reviewCount?: number;
  /**
   * State or region the business is in.
   */
  state?: string;
  /**
   * TikTok profile URLs found on the business website.
   */
  tiktoks?: string[];
  /**
   * X/Twitter profile URLs found on the business website.
   */
  twitters?: string[];
  /**
   * Canonical Google Maps URL for the business. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * The business website URL, when listed.
   */
  website?: string;
  /**
   * YouTube channel URLs found on the business website.
   */
  youtubes?: string[];
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Maps Contacts (maps.contacts).
 */
export interface MapsContactsData {
  /**
   * Matching business records, each enriched with contact details scraped from the business website. Populated whenever the provider has data for the entity.
   */
  items: MapsContactsItem[];
}

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

export interface MapsPlaceItem {
  /**
   * Full formatted street address. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  address?: string;
  /**
   * Primary Google Maps category (e.g. Coffee shop). Populated whenever the provider has data for the entity.
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
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  latitude?: number;
  /**
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  longitude?: number;
  /**
   * Business or place name. Populated whenever the provider has data for the entity.
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
   * Google Maps place id. Populated whenever the provider has data for the entity.
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
   * Google Maps URL for the place. Populated whenever the provider has data for the entity.
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
   * The best-matching place for the query, with full details: name, address, contact info, category, rating, opening hours, and coordinates. Up to one element (empty when nothing matched). Populated whenever the provider has data for the entity.
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

export interface MapsReviewsItem {
  /**
   * Reviewer display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  author?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
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
   * Google Maps place id the review belongs to. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  placeId?: string;
  /**
   * Human-relative publish time (e.g. '7 hours ago').
   */
  publishedAgo?: string;
  /**
   * Star rating the reviewer gave (1-5).
   */
  rating?: number;
  /**
   * Stable Google review id. Populated whenever the provider has data for the entity.
   */
  reviewId: string;
  /**
   * Stable Google id of the reviewer.
   */
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
   * Direct URL to the review on Google Maps. Populated whenever the provider has data for the entity.
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
   * Review records: reviewer, star rating, review text (empty when the reviewer left only a rating), publish date, likes, and owner response where present. Populated whenever the provider has data for the entity.
   */
  items: MapsReviewsItem[];
}

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

export interface MapsSearchItem {
  /**
   * Full formatted street address.
   */
  address?: string;
  /**
   * Primary place category (e.g. Coffee shop).
   */
  category?: string;
  /**
   * Google customer/place id (cid).
   */
  cid?: string;
  /**
   * City the place is in.
   */
  city?: string;
  /**
   * Two-letter country code.
   */
  countryCode?: string;
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
   * Place name. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * True when the place is marked permanently closed.
   */
  permanentlyClosed?: boolean;
  /**
   * Business phone number in E.164 format, when listed.
   */
  phone?: string;
  /**
   * Google Maps place id (stable identifier for the place). Populated whenever the provider has data for the entity.
   */
  placeId: string;
  /**
   * Postal code of the place.
   */
  postalCode?: string;
  /**
   * Relative price level indicator (e.g. $, $10-20).
   */
  priceLevel?: string;
  /**
   * Average star rating out of 5.
   */
  rating?: number;
  /**
   * Total number of reviews.
   */
  reviewCount?: number;
  /**
   * State or region the place is in.
   */
  state?: string;
  /**
   * Street line of the address.
   */
  street?: string;
  /**
   * Canonical Google Maps URL for the place. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * The place's own website URL, when listed.
   */
  website?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Maps Search (maps.search).
 */
export interface MapsSearchData {
  /**
   * Matching Google Maps place records. Populated whenever the provider has data for the entity.
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
   * Search Google Maps for businesses and enrich each result with contact details (emails, phones, and social profiles from their websites), up to 20 records per request.

**Price:** billed per result - \$0.05 per 1,000 requests base + \$3.00 per 1,000 results, capped at \$60.05 per 1,000 requests.
   *
   * Price: $0.00005 per request plus $0.003 per result.
   *
   * @example
   * const res = await client.maps.contacts({ location: "Austin, TX", query: "coffee shop", limit: 3, placeMinimumStars: "four", website: "withWebsite" });
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
   * Look up a place on Google Maps by name or search query (optionally scoped to a location) and get the best-matching place with full details - address, phone, website, rating, hours, and coordinates - as normalized JSON.

**Price:** billed per result - \$3.00 per 1,000 requests base + \$5.00 per 1,000 results, capped at \$9.00 per 1,000 requests.
   *
   * Price: $0.003 per request plus $0.005 per result.
   *
   * @example
   * const res = await client.maps.place({ query: "Blue Bottle Coffee", location: "San Francisco, CA", website: "withWebsite" });
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
   * Fetch up to 100 Google Maps reviews for a place by place ID, sorted the way you need, in one normalized response.

**Price:** billed per result - \$0.05 per 1,000 requests base + \$0.40 per 1,000 results, capped at \$40.05 per 1,000 requests.
   *
   * Price: $0.00005 per request plus $0.0004 per result.
   *
   * @example
   * const res = await client.maps.reviews({ placeId: "ChIJN1t_tDeuEmsRUsoyG83frY4", limit: 3, postedLimit: "year" });
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
   * Search Google Maps for places matching a query and location: up to 20 normalized place records with ratings, addresses, and contact basics per request.

**Price:** billed per result - \$0.05 per 1,000 requests base + \$3.00 per 1,000 results, capped at \$60.05 per 1,000 requests.
   *
   * Price: $0.00005 per request plus $0.003 per result.
   *
   * @example
   * const res = await client.maps.search({ location: "Austin, TX", query: "coffee", limit: 3, placeMinimumStars: "four", website: "withWebsite" });
   */
  search(
    input: MapsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<MapsSearchData>> {
    return this._core.run("maps.search", input, options);
  }
}
