// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Vrbo Search (vrbo.search).
 */
export interface VrboSearchInput {
  /**
   * Number of adult guests (e.g. 2).
   * Range: minimum 1, maximum 20.
   */
  adults?: number;
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Check-in date in YYYY-MM-DD format (e.g. 2027-01-15). Today or later.
   * Format: date.
   */
  checkIn: string;
  /**
   * Check-out date in YYYY-MM-DD format (e.g. 2027-01-18). After the check-in date.
   * Format: date.
   */
  checkOut: string;
  /**
   * Age of each child guest, one entry per child (e.g. [5, 8] for two children aged 5 and 8). Omit it when no children are staying.
   */
  childrenAges?: number[];
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of listings to return (1-50, default 20). The price is the same whatever the limit.
   * Range: minimum 1, maximum 50.
   * Default: 20.
   */
  limit?: number;
  /**
   * Destination to search rentals in: a city, region or area (e.g. Lake Tahoe, Lisbon, Outer Banks, North Carolina).
   */
  location: string;
  /**
   * Minimum number of bathrooms (e.g. 2).
   * Range: minimum 1, maximum 50.
   */
  minBathrooms?: number;
  /**
   * Minimum number of bedrooms (e.g. 3).
   * Range: minimum 0, maximum 50.
   */
  minBedrooms?: number;
  /**
   * Minimum number of beds (e.g. 4).
   * Range: minimum 1, maximum 20.
   */
  minBeds?: number;
  /**
   * Number of listings to skip, for paging: send offset 20 with limit 20 for the second page.
   * Range: minimum 0, maximum 1000.
   * Default: 0.
   */
  offset?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Maximum price in the currency results are priced in (each listing's currency), per night or for the whole stay as priceType says (e.g. 400). With a price filter, only listings Vrbo prices for your dates are returned.
   * Range: minimum 1, maximum 1000000.
   */
  priceMax?: number;
  /**
   * Minimum price in the currency results are priced in (each listing's currency), per night or for the whole stay as priceType says (e.g. 100).
   * Range: minimum 0, maximum 1000000.
   */
  priceMin?: number;
  /**
   * Whether priceMin and priceMax are a nightly price (default) or the total for the stay.
   * One of: nightly, total.
   * Default: nightly.
   */
  priceType?: "nightly" | "total";
  /**
   * Result order: recommended (Vrbo's default), price_low_to_high, price_high_to_low, review (highest rated first) or review_count (most reviewed first).
   * One of: recommended, price_low_to_high, price_high_to_low, review, review_count.
   */
  sort?:
    | "recommended"
    | "price_low_to_high"
    | "price_high_to_low"
    | "review"
    | "review_count";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface VrboSearchItem {
  /**
   * Number of bedrooms. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  bedrooms?: number | null;
  /**
   * Number of beds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  beds?: number | null;
  /**
   * ISO 4217 currency code of the prices (e.g. USD). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * Vrbo's note on what the price includes (e.g. All fees included).
   */
  feesNote?: string | null;
  /**
   * Vrbo property ID.
   */
  id: string;
  /**
   * Listing photo URLs. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  images?: string[] | null;
  /**
   * Listing name. Vrbo often shows a generic name such as "Condo in Kings Beach".
   */
  name: string;
  /**
   * Number of nights the total price covers.
   */
  nights?: number | null;
  /**
   * Nightly price before Vrbo's discount, or null when the listing is not discounted.
   */
  originalPricePerNight?: number | null;
  /**
   * Vrbo's one-line summary of the listing (e.g. "3 bedrooms · 6 beds · Free cancellation until Dec 16"). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  overview?: string | null;
  /**
   * Nightly price for the requested dates and guests, in currency. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  pricePerNight?: number | null;
  /**
   * Property type (e.g. Condo, House), or null when Vrbo does not state it in search results.
   */
  propertyType?: string | null;
  /**
   * Average guest rating out of 10, or null when the listing has no rating. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number | null;
  /**
   * Vrbo's word for the rating (e.g. Exceptional, Wonderful).
   */
  ratingLabel?: string | null;
  /**
   * Number of guest reviews, or null when Vrbo does not show a count.
   */
  reviewsCount?: number | null;
  /**
   * Total price for the whole stay, in currency. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  totalPrice?: number | null;
  /**
   * Vrbo listing URL.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Vrbo Search (vrbo.search).
 */
export interface VrboSearchData {
  /**
   * Vrbo listings priced for the requested dates and guests, in Vrbo's order. A listing Vrbo shows without a price for the dates is left out. Populated whenever the provider has data for the entity.
   */
  items: VrboSearchItem[];
}

/**
 * Typed methods for the vrbo platform. Attached to the AnyAPI client as
 * `client.vrbo`.
 */
export class VrboNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Vrbo Search
   *
   * Search Vrbo vacation rentals by destination and dates, with guest, bedroom, bed, bathroom and price filters, and get up to 50 listings per call: Vrbo property ID and link, name, summary line, property type, bedrooms, beds, guest rating and review count, nightly and total stay price with the original nightly price before any discount, and photos as normalized JSON. Page with offset; the price is the same whatever the limit.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.vrbo.search({ checkIn: "2026-12-04", checkOut: "2026-12-07", location: "Lake Tahoe", adults: 2, limit: 5 });
   */
  search(
    input: VrboSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<VrboSearchData>> {
    return this._core.run("vrbo.search", input, options);
  }
}
