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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of results to return (1 to 20, default 20).
   * Range: minimum 1, maximum 20.
   * Default: 20.
   */
  limit?: number;
  /**
   * City and state defining the search area (e.g. San Francisco, CA).
   */
  location: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search term or category to look for (e.g. sushi).
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `is_closed` or `price`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a place that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "address1"
    | "address2"
    | "address3"
    | "avg_rating"
    | "categories"
    | "city"
    | "country"
    | "dialable_phone"
    | "is_closed"
    | "latitude"
    | "localized_phone"
    | "localized_price"
    | "longitude"
    | "neighborhoods"
    | "phone"
    | "photo_count"
    | "price"
    | "review_count"
    | "state"
    | "unrounded_avg_rating"
    | "url"
    | "zip"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface YelpSearchItem {
  /**
   * Primary street address line.
   */
  address1?: string | null;
  /**
   * Secondary address line.
   */
  address2?: string | null;
  /**
   * Tertiary address line.
   */
  address3?: string | null;
  /**
   * URL slug for the business. Populated whenever the provider has data for the entity.
   */
  alias: string;
  /**
   * Rounded average star rating.
   */
  avg_rating?: number | null;
  /**
   * Business category tags.
   */
  categories?: YelpSearchCategorie[] | null;
  /**
   * City name.
   */
  city?: string | null;
  /**
   * ISO country code.
   */
  country?: string | null;
  /**
   * Dialable phone number.
   */
  dialable_phone?: string | null;
  /**
   * Stable Yelp business identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Whether the business is permanently closed.
   */
  is_closed?: boolean | null;
  /**
   * Latitude of the business.
   */
  latitude?: number | null;
  /**
   * Formatted local phone number.
   */
  localized_phone?: string | null;
  /**
   * Localized price tier (e.g. $$).
   */
  localized_price?: string | null;
  /**
   * Longitude of the business.
   */
  longitude?: number | null;
  /**
   * Business display name. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Neighborhood labels for the location.
   */
  neighborhoods?: string[] | null;
  /**
   * Raw phone number.
   */
  phone?: string | null;
  /**
   * Total photo count.
   */
  photo_count?: number | null;
  /**
   * Primary photo URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  photo_url?: string | null;
  /**
   * Numeric price tier.
   */
  price?: number | null;
  /**
   * Number of reviews.
   */
  review_count?: number | null;
  /**
   * State or region code.
   */
  state?: string | null;
  /**
   * Unrounded average star rating.
   */
  unrounded_avg_rating?: number | null;
  /**
   * Public Yelp business page URL.
   */
  url?: string;
  /**
   * Postal code.
   */
  zip?: string | null;
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
   * Business listing records: name, categories, rating, review count, address, and core business info. Populated whenever the provider has data for the entity.
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
   * Search Yelp for businesses by keyword and location: up to 20 listings with ratings, categories, and core business info per request.
   *
   * Price: $0.0035 per request.
   *
   * @example
   * const res = await client.yelp.search({ location: "Chicago, IL", query: "pizza", limit: 5 });
   */
  search(
    input: YelpSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<YelpSearchData>> {
    return this._core.run("yelp.search", input, options);
  }
}
