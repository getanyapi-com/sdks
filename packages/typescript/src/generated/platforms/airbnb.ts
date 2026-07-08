// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Airbnb Search (airbnb.search).
 */
export interface AirbnbSearchInput {
  /**
   * Number of adult guests (e.g. 2).
   */
  adults?: number;
  /**
   * Check-in date in YYYY-MM-DD format (e.g. 2026-07-01).
   */
  checkIn?: string;
  /**
   * Check-out date in YYYY-MM-DD format (e.g. 2026-07-05).
   */
  checkOut?: string;
  /**
   * Currency code for prices (e.g. EUR).
   * Default: USD.
   */
  currency?: string;
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Location to search listings in (e.g. London).
   */
  location: string;
}

export interface AirbnbSearchItem {
  hostName?: string;
  /**
   * Airbnb listing identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Primary listing image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  isAvailable?: boolean;
  isSuperhost?: boolean;
  latitude?: number;
  /**
   * Location subtitle.
   */
  location?: string;
  longitude?: number;
  personCapacity?: number;
  /**
   * Nightly price label.
   */
  price?: string;
  propertyType?: string;
  /**
   * Guest satisfaction rating (0-5).
   */
  rating?: number;
  reviewsCount?: number;
  roomType?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Airbnb Search (airbnb.search).
 */
export interface AirbnbSearchData {
  /**
   * Listing records: name, nightly price, rating, location, host info, and availability details. Populated whenever the provider has data for the entity.
   */
  items: AirbnbSearchItem[];
}

/**
 * Typed methods for the airbnb platform. Attached to the AnyAPI client as
 * `client.airbnb`.
 */
export class AirbnbNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Airbnb Search
   *
   * Search Airbnb listings by location and dates and get results (name, price, rating, host) as normalized JSON.

**Price:** billed per result - $0.08 per 1,000 requests base + $1.50 per 1,000 results, capped at $30.08 per 1,000 requests.
   *
   * Price: $0.00008 per request plus $0.0015 per result.
   *
   * @example
   * const res = await client.airbnb.search({ location: "San Diego", limit: 3 });
   */
  search(
    input: AirbnbSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<AirbnbSearchData>> {
    return this._core.run("airbnb.search", input, options);
  }
}
