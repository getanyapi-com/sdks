// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Booking.com Search (booking.search).
 */
export interface BookingSearchInput {
  /**
   * Number of adult guests (e.g. 2).
   * Range: minimum 1.
   */
  adults?: number;
  /**
   * Check-in date in YYYY-MM-DD format (e.g. 2026-07-01). Defaults to tomorrow.
   */
  checkIn?: string;
  /**
   * Check-out date in YYYY-MM-DD format (e.g. 2026-07-05). Defaults to the day after check-in.
   */
  checkOut?: string;
  /**
   * Number of child guests (e.g. 1).
   * Range: minimum 0.
   */
  children?: number;
  /**
   * Currency code for prices (e.g. EUR).
   * Default: USD.
   */
  currency?: string;
  /**
   * Maximum number of hotels to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Destination city to search for stays in (e.g. Paris).
   */
  query: string;
  /**
   * Number of rooms to book (e.g. 1).
   * Range: minimum 1.
   */
  rooms?: number;
}

export interface BookingSearchItem {
  address?: string;
  city?: string;
  /**
   * ISO country code.
   */
  country?: string;
  currency?: string;
  /**
   * Booking.com hotel identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  id?: string;
  /**
   * Primary hotel photo URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  latitude?: number;
  /**
   * Neighborhood or area label.
   */
  location?: string;
  longitude?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Total stay price in the requested currency.
   */
  price?: number;
  pricePerNight?: number;
  /**
   * Guest review score (0-10).
   */
  rating?: number;
  /**
   * Guest review score (0-10).
   */
  reviewScore?: number;
  reviewsCount?: number;
  /**
   * Star rating class (1-5).
   */
  stars?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Booking.com Search (booking.search).
 */
export interface BookingSearchData {
  /**
   * Hotel result records: name, price, review score, star rating, address, and location. Populated whenever the provider has data for the entity.
   */
  items: BookingSearchItem[];
}

/**
 * Typed methods for the booking platform. Attached to the AnyAPI client as
 * `client.booking`.
 */
export class BookingNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Booking.com Search
   *
   * Search Booking.com stays by destination and dates with optional guest and room occupancy and get hotel results (name, price, review score, location) as normalized JSON.
   *
   * Price: $0.0022 per request plus $0.00495 per result (maximum $0.102).
   *
   * @example
   * const res = await client.booking.search({ query: "New York", adults: 2, checkIn: "2026-09-01", checkOut: "2026-09-03", limit: 3 });
   */
  search(
    input: BookingSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<BookingSearchData>> {
    return this._core.run("booking.search", input, options);
  }
}
