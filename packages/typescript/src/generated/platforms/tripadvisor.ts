// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Tripadvisor Reviews (tripadvisor.reviews).
 */
export interface TripadvisorReviewsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response's nextCursor. Omit for the first page.
   */
  cursor?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Only return reviews originally written in these ISO 639-1 languages (e.g. ["en", "es"]); omit for all languages. Reviews are never translated. Each page is filtered after it is fetched, so a page can hold fewer than `limit` reviews, or none, while nextCursor still leads to more.
   */
  languages?: string[];
  /**
   * Reviews per page (1-20, default 20). Sources that page return one page of up to `limit` reviews, newest first, with a nextCursor for the next page; sources that cannot page return up to `limit` reviews in one call with no nextCursor.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Only return reviews whose bubble rating is in this set (e.g. ["5", "4"] for 4 and 5 star reviews); omit for all ratings.
   */
  ratings?: ("1" | "2" | "3" | "4" | "5")[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `nextCursor`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. nextCursor is null on the last page. Naming a combination that no single source returns together is refused as invalid input, with no charge. On a paginated walk it applies to the first page only; later pages stay with the source that page chose, at the price it was quoted.
   */
  requireFields?: "nextCursor"[];
  /**
   * Only return reviews newer than this date, YYYY-MM-DD or a relative window like '3 months' (e.g. 2026-01-01).
   */
  since?: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Tripadvisor page URL of the hotel, restaurant, or attraction.
   */
  url: string;
}

export interface TripadvisorReviewsItem {
  /**
   * Reviewer display name.
   */
  author?: string;
  /**
   * Reviewer profile photo URL.
   */
  authorAvatarUrl?: string;
  /**
   * Tripadvisor member identifier of the reviewer.
   */
  authorId?: string;
  /**
   * Tripadvisor profile URL of the reviewer.
   */
  authorUrl?: string;
  /**
   * Whether Tripadvisor marks the reviewer as verified.
   */
  authorVerified?: boolean;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Number of helpful votes the review received.
   */
  helpfulVotes?: number;
  /**
   * Tripadvisor review identifier.
   */
  id?: string;
  /**
   * ISO 639-1 code of the language the review was originally written in (e.g. en, es). On some requests `title` and `text` are Tripadvisor's English machine translation of a review written in another language; this code still names the original language. A request with `languages` always returns the original text.
   */
  language?: string;
  /**
   * Reply the place owner posted to this review.
   */
  ownerResponseText?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the owner replied.
   */
  ownerResponseUtc?: number;
  /**
   * Tripadvisor location identifier of the reviewed place.
   */
  placeId?: string;
  /**
   * Name of the reviewed place.
   */
  placeName?: string;
  /**
   * Star rating (typically 1-5).
   */
  rating: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the reviewer stayed or visited.
   */
  stayUtc?: number;
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
   * Trip type the reviewer selected (e.g. FAMILY, BUSINESS, COUPLES, NONE).
   */
  tripType?: string;
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
  /**
   * Opaque cursor for the next page of reviews, or null when there are no more. Pass it back as cursor to continue. Absent on sources that cannot page.
   */
  nextCursor?: string | null;
}

/**
 * Input for Tripadvisor Search (tripadvisor.search).
 */
export interface TripadvisorSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * ISO currency code for prices (e.g. USD, EUR).
   * Default: USD.
   */
  currency?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
   * Maximum number of results to return (1-20, default 20).
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Destination or keyword to search for (e.g. Barcelona).
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `phone` or `website`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a place that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "address"
    | "city"
    | "country"
    | "email"
    | "hotelClass"
    | "latitude"
    | "longitude"
    | "phone"
    | "postalCode"
    | "priceLevel"
    | "priceRange"
    | "ranking"
    | "website"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface TripadvisorSearchItem {
  /**
   * Full formatted street address.
   */
  address?: string;
  /**
   * High-level category: hotel, restaurant, attraction, or geo for a destination such as a city.
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
   * Average traveler rating out of 5; null for a place Tripadvisor has not rated (such as a city). Populated whenever the provider has data for the entity.
   */
  rating: number | null;
  /**
   * Total number of traveler reviews; null when the source does not report it.
   */
  reviewCount?: number | null;
  /**
   * Place name. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Tripadvisor place type: HOTEL, RESTAURANT, ATTRACTION, or GEO for a destination such as a city.
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
   * Fetch the latest reviews for any Tripadvisor hotel, restaurant, or attraction by its page URL: rating, text, date, and trip details as normalized JSON.
   *
   * Price: $0.003 per request.
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
   * Iterate every result of Tripadvisor Reviews across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterReviews(
    input: TripadvisorReviewsInput,
    options?: RequestOptions,
  ): Paginator<TripadvisorReviewsItem, RunResult<TripadvisorReviewsData>> {
    return paginate<TripadvisorReviewsItem, RunResult<TripadvisorReviewsData>>(
      this._core,
      "tripadvisor.reviews",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }

  /**
   * Tripadvisor Search
   *
   * Search Tripadvisor for hotels, restaurants, and attractions in any destination and get rich place records (ratings, review counts, contact details, pricing) as normalized JSON.
   *
   * Price: $0.003 per request.
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
