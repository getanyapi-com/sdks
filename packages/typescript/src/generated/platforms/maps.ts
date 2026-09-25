// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Google Maps Contacts (maps.contacts).
 */
export interface MapsContactsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional list of Google Maps place-category names to keep; results are limited to places whose category matches one of these. Use lowercase category names as shown on Google Maps (e.g. ["dentist", "orthodontist"]). Omit to include all categories.
   */
  categoryFilterWords?: string[];
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Two-letter language code for the results (e.g. en).
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of results to return (1-20, default 20).
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * What you would type in the Google Maps search bar (e.g. dentist).
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `city` or `reviewCount`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a business that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "address"
    | "categories"
    | "category"
    | "cid"
    | "city"
    | "countryCode"
    | "domain"
    | "emails"
    | "facebooks"
    | "image"
    | "instagrams"
    | "language"
    | "latitude"
    | "linkedIns"
    | "longitude"
    | "neighborhood"
    | "phone"
    | "phones"
    | "postalCode"
    | "rank"
    | "rating"
    | "reviewCount"
    | "state"
    | "street"
    | "tiktoks"
    | "twitters"
    | "website"
    | "youtubes"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Every Google Maps category listed for the business.
   */
  categories?: string[];
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
   * Registrable domain of the business website.
   */
  domain?: string;
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
   * Two-letter language code of the listing Google served.
   */
  language?: string;
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
   * Neighborhood the business is in.
   */
  neighborhood?: string;
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
   * One-based position of the business in the Google Maps result order.
   */
  rank?: number;
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
   * Street portion of the address.
   */
  street?: string;
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional list of Google Maps place-category names to keep; the match is limited to a place whose category is one of these. Use lowercase category names as shown on Google Maps (e.g. ["coffee shop"]). Omit to allow any category and stay on the cheapest price; a category filter routes to a dearer source.
   */
  categoryFilterWords?: string[];
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
   * Only match a place with at least this average rating: two (2+), twoAndHalf (2.5+), three (3+), threeAndHalf (3.5+), four (4+), or fourAndHalf (4.5+). Places with no reviews are excluded. Omit this field to stay on the cheapest price; a rating floor routes to a dearer source.
   * One of: two, twoAndHalf, three, threeAndHalf, four, fourAndHalf.
   */
  placeMinimumStars?:
    "two" | "twoAndHalf" | "three" | "threeAndHalf" | "four" | "fourAndHalf";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The business name or search text to look up, as you would type it into the Google Maps search bar (e.g. Blue Bottle Coffee).
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `hours` or `plusCode`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a place that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "categories"
    | "city"
    | "countryCode"
    | "hours"
    | "image"
    | "neighborhood"
    | "permanentlyClosed"
    | "phone"
    | "plusCode"
    | "postalCode"
    | "priceLevel"
    | "rating"
    | "reviewsCount"
    | "state"
    | "street"
    | "website"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Filter by whether the place lists a website: allPlaces (default), withWebsite (only if it has a website), or withoutWebsite (only if it has none). Omit this field, or send allPlaces, to stay on the cheapest price; withWebsite and withoutWebsite route to a dearer source.
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
   * Every Google Maps category listed for the place.
   */
  categories?: string[];
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
   * The best-matching place for the query, with available address, contact, category, rating, opening-hours, and coordinate details. Up to one element (empty when nothing matched). Populated whenever the provider has data for the entity.
   */
  items: MapsPlaceItem[];
}

/**
 * Input for Google Maps Reviews (maps.reviews).
 */
export interface MapsReviewsInput {
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
   * Two-letter language code for the review details (e.g. en).
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of results to return (1-100, default 100).
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `isLocalGuide` or `placeId`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a review that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "authorUrl"
    | "avatarUrl"
    | "isLocalGuide"
    | "likes"
    | "origin"
    | "ownerResponse"
    | "ownerResponseAt"
    | "placeId"
    | "publishedAgo"
    | "rating"
    | "reviewerId"
    | "reviewerReviewsCount"
    | "text"
  )[];
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
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface MapsReviewsItem {
  /**
   * Reviewer display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  author?: string;
  /**
   * Google Maps contributor page URL for the reviewer.
   */
  authorUrl?: string;
  /**
   * Reviewer profile photo URL.
   */
  avatarUrl?: string;
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
   * Google Maps place id the review belongs to. Echoes the requested placeId; a lane that does not repeat it per review omits it.
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional list of Google Maps place-category names to keep; results are limited to places whose category matches one of these. Use lowercase category names as shown on Google Maps (e.g. ["coffee shop", "restaurant"]). Omit to include all categories and stay on the cheapest price; a category filter routes to a dearer source.
   */
  categoryFilterWords?: string[];
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Two-letter language code for the results (e.g. en).
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of results to return (1-20, default 20). Pricing depends on the selected provider and may be flat per request.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Free-text location to search in, ideally city plus country (e.g. Austin, USA).
   */
  location: string;
  /**
   * Only return places with at least this average rating: two (2+), twoAndHalf (2.5+), three (3+), threeAndHalf (3.5+), four (4+), or fourAndHalf (4.5+). Places with no reviews are excluded. Omit this field to stay on the cheapest price; a rating floor routes to a dearer source.
   * One of: two, twoAndHalf, three, threeAndHalf, four, fourAndHalf.
   */
  placeMinimumStars?:
    "two" | "twoAndHalf" | "three" | "threeAndHalf" | "four" | "fourAndHalf";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * What you would type in the Google Maps search bar (e.g. coffee shop).
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `cid` or `street`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a place that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "address"
    | "categories"
    | "category"
    | "cid"
    | "city"
    | "countryCode"
    | "image"
    | "latitude"
    | "longitude"
    | "permanentlyClosed"
    | "phone"
    | "postalCode"
    | "priceLevel"
    | "rating"
    | "reviewCount"
    | "state"
    | "street"
    | "website"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Filter places by whether they list a website: allPlaces (default), withWebsite (only places that have a website), or withoutWebsite (only places without one). Omit this field, or send allPlaces, to stay on the cheapest price; withWebsite and withoutWebsite route to a dearer source.
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
   * Every Google Maps category listed for the place.
   */
  categories?: string[];
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
 * Input for Google Maps Nearby Search (maps.search_nearby).
 */
export interface MapsSearchNearbyInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * The exact map centre to search around. Use maps.search instead if you only have a place name.
   */
  coordinates: {
    /**
     * Latitude of the map centre in decimal degrees.
     * Range: minimum -90, maximum 90.
     */
    latitude: number;
    /**
     * Longitude of the map centre in decimal degrees.
     * Range: minimum -180, maximum 180.
     */
    longitude: number;
  };
  /**
   * Opaque cursor from a previous response's nextCursor. Pass it back to get the next page of places.
   */
  cursor?: string | null;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Two-letter language code for the results (e.g. en).
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of places to return in this response (1-20). Google Maps returns one viewport of about 20 places per call; page with cursor for more. Price is flat per request.
   * Range: minimum 1, maximum 20.
   * Default: 20.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * What you would type in the Google Maps search bar (e.g. coffee shop).
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Google Maps viewport zoom. Lower covers a wider area, higher focuses more tightly around the coordinates.
   * Range: minimum 3, maximum 21.
   * Default: 13.1.
   */
  zoom?: number;
}

export interface MapsSearchNearbyItem {
  /**
   * Full formatted street address.
   */
  address?: string;
  /**
   * Every Google Maps category listed for the place.
   */
  categories?: string[];
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
   * Google's one-line description of the place.
   */
  description?: string;
  /**
   * Registrable domain of the place website.
   */
  domain?: string;
  /**
   * Thumbnail photo URL for the place.
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
   * Neighborhood the place is in.
   */
  neighborhood?: string;
  /**
   * Business phone number, when listed.
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
   * One-based position of the place in the Google Maps result order.
   */
  rank?: number;
  /**
   * Average Google rating out of 5.
   */
  rating?: number;
  /**
   * Number of Google reviews the place has.
   */
  reviewCount?: number;
  /**
   * State or region the place is in, spelled in full (e.g. Texas).
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
 * The `data` payload of Google Maps Nearby Search (maps.search_nearby).
 */
export interface MapsSearchNearbyData {
  /**
   * Matching Google Maps place records, nearest the requested coordinates first. Populated whenever the provider has data for the entity.
   */
  items: MapsSearchNearbyItem[];
  /**
   * Opaque cursor for the next page of places, or null when this search is complete. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
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
   *
   * Price: $0.00325 per request.
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
   * Look up a place on Google Maps by name or search query (optionally scoped to a location) and get the best-matching place with available address, contact, rating, and coordinate details as normalized JSON.
   *
   * Price: $0.00175 per request.
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
   * Fetch up to 100 Google Maps reviews for a place by place ID, sorted the way you need, in one normalized response.
   *
   * Price: $0.00605 per request plus $0.00005 per result (maximum $0.0105).
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
   * Search Google Maps for places matching a query and location: up to 20 normalized place records with ratings, addresses, and contact basics per request.
   *
   * Price: $0.00175 per request.
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

  /**
   * Google Maps Nearby Search
   *
   * Search Google Maps around an exact latitude and longitude and get up to 20 normalized places per call, each with the address broken into street, city, state, postal code and country. Use this when you have coordinates and want the map viewport centred on them; use maps.search when you only have a place name. Pass the returned nextCursor back as cursor for the next 20 places.
   *
   * Price: $0.0013 per request.
   *
   * @example
   * const res = await client.maps.searchNearby({ coordinates: { latitude: 30.2672, longitude: -97.7431 }, query: "coffee shop", limit: 20 });
   */
  searchNearby(
    input: MapsSearchNearbyInput,
    options?: RequestOptions,
  ): Promise<RunResult<MapsSearchNearbyData>> {
    return this._core.run("maps.search_nearby", input, options);
  }

  /**
   * Iterate every result of Google Maps Nearby Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearchNearby(
    input: MapsSearchNearbyInput,
    options?: RequestOptions,
  ): Paginator<MapsSearchNearbyItem, RunResult<MapsSearchNearbyData>> {
    return paginate<MapsSearchNearbyItem, RunResult<MapsSearchNearbyData>>(
      this._core,
      "maps.search_nearby",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }
}
