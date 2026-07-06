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
   * Check-in date in YYYY-MM-DD format (e.g. 2026-07-01). Defaults to tomorrow.
   */
  checkIn?: string;
  /**
   * Check-out date in YYYY-MM-DD format (e.g. 2026-07-05). Defaults to the day after check-in.
   */
  checkOut?: string;
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
   * Destination city to search for stays in (e.g. Paris).
   */
  query: string;
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
   * Booking.com hotel identifier.
   * Populated whenever the provider returns data.
   */
  id?: string;
  /**
   * Primary hotel photo URL.
   * Populated whenever the provider returns data.
   */
  image?: string;
  latitude?: number;
  /**
   * Neighborhood or area label.
   */
  location?: string;
  longitude?: number;
  /**
   * Populated whenever the provider returns data.
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
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Booking.com Search (booking.search).
 */
export interface BookingSearchData {
  /**
   * Hotel result records: name, price, review score, star rating, address, and location.
   * Populated whenever the provider returns data.
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
   * Search Booking.com stays by destination and dates and get hotel results (name, price, review score, location) as normalized JSON with flat per-request USD pricing.
   *
   * Price: $0.002 per request plus $0.0045 per result.
   *
   * @example
   * const res = await client.booking.search({"checkIn":"2026-09-01","checkOut":"2026-09-03","limit":3,"query":"New York"});
   */
  search(
    input: BookingSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<BookingSearchData>> {
    return this._core.run("booking.search", input, options);
  }
}
