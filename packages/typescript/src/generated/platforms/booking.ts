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
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of hotels to return (1-20, default 20). Some sources bill per result returned, so a lower limit can cost less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Destination city to search for stays in (e.g. Paris).
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `discountBadge`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a hotel that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "discountBadge"[];
  /**
   * Number of rooms to book (e.g. 1).
   * Range: minimum 1.
   */
  rooms?: number;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Promotion label Booking.com shows on the offer (e.g. Getaway Deal). Not every source returns it; name it in requireFields to be served by one that does.
   */
  discountBadge?: string | null;
  /**
   * Distance from the city center as Booking.com phrases it.
   */
  distanceFromCenter?: string;
  /**
   * Whether the offer can be cancelled free of charge.
   */
  freeCancellation?: boolean;
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
  /**
   * Whether the property is closed.
   */
  isClosed?: boolean;
  /**
   * Whether the property is sold out for the requested dates.
   */
  isSoldOut?: boolean;
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
   * Whether the offer needs no payment up front.
   */
  noPrepayment?: boolean;
  /**
   * Pre-discount total stay price in the requested currency.
   */
  originalPrice?: number;
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
  /**
   * Word Booking.com uses for the review score (e.g. Fabulous).
   */
  reviewScoreLabel?: string;
  reviewsCount?: number;
  /**
   * Identifier of the room the quoted price is for.
   */
  roomId?: string;
  /**
   * Star rating class (1-5).
   */
  stars?: number;
  /**
   * Small hotel photo URL.
   */
  thumbnail?: string;
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
   * Price: $0.0008 per request.
   *
   * @example
   * const res = await client.booking.search({ query: "New York", adults: 2, checkIn: "2026-12-26", checkOut: "2026-12-28", limit: 3 });
   */
  search(
    input: BookingSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<BookingSearchData>> {
    return this._core.run("booking.search", input, options);
  }
}
