// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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
   * Destination city to search for stays in (e.g. Paris).
   */
  query: string;
  /**
   * Number of rooms to book (e.g. 1).
   * Range: minimum 1.
   */
  rooms?: number;
}

export type BookingSearchData = unknown;

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
   * Price: $0.002 per request plus $0.0045 per result (maximum $0.092).
   *
   * @example
   * const res = await client.booking.search({ query: "New York", adults: 2, checkIn: "2026-09-01", checkOut: "2026-09-03", limit: 3 });
   */
  search(
    input: BookingSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<BookingSearchData>> {
    return this._core.run(
      "booking.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<BookingSearchData>>;
  }
}
