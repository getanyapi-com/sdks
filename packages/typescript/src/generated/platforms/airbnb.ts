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
   * Range: minimum 1.
   */
  adults?: number;
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Check-in date in YYYY-MM-DD format (e.g. 2026-07-01).
   * Format: date.
   */
  checkIn?: string;
  /**
   * Check-out date in YYYY-MM-DD format (e.g. 2026-07-05).
   * Format: date.
   */
  checkOut?: string;
  /**
   * Number of child guests (e.g. 1).
   * Range: minimum 0.
   */
  children?: number;
  /**
   * Currency code for prices (e.g. EUR).
   * One of: USD, CZK, AUD, BRL, BGN, CAD, CLP, CNY, COP, CRC, HRK, DKK, EGP, AED, EUR, GHS, HKD, HUF, INR, IDR, ILS, JPY, KZT, KES, MYR, MXN, MAD, TWD, NZD, NOK, PEN, PHP, PLN, GBP, QAR, RON, SAR, SGD, ZAR, KRW, SEK, CHF, THB, TRY, UGX, UAH, UYU, VND.
   * Default: USD.
   */
  currency?:
    | "USD"
    | "CZK"
    | "AUD"
    | "BRL"
    | "BGN"
    | "CAD"
    | "CLP"
    | "CNY"
    | "COP"
    | "CRC"
    | "HRK"
    | "DKK"
    | "EGP"
    | "AED"
    | "EUR"
    | "GHS"
    | "HKD"
    | "HUF"
    | "INR"
    | "IDR"
    | "ILS"
    | "JPY"
    | "KZT"
    | "KES"
    | "MYR"
    | "MXN"
    | "MAD"
    | "TWD"
    | "NZD"
    | "NOK"
    | "PEN"
    | "PHP"
    | "PLN"
    | "GBP"
    | "QAR"
    | "RON"
    | "SAR"
    | "SGD"
    | "ZAR"
    | "KRW"
    | "SEK"
    | "CHF"
    | "THB"
    | "TRY"
    | "UGX"
    | "UAH"
    | "UYU"
    | "VND";
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Number of infant guests (e.g. 1).
   * Range: minimum 0.
   */
  infants?: number;
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Location to search listings in (e.g. London).
   */
  location: string;
  /**
   * Minimum number of bathrooms (e.g. 2).
   * Range: minimum 0.
   */
  minBathrooms?: number;
  /**
   * Minimum number of bedrooms (e.g. 2).
   * Range: minimum 0.
   */
  minBedrooms?: number;
  /**
   * Minimum number of beds (e.g. 2).
   * Range: minimum 0.
   */
  minBeds?: number;
  /**
   * Number of pets; only pet-friendly listings are returned when set (e.g. 1).
   * Range: minimum 0.
   */
  pets?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Maximum search price in the selected currency (e.g. 300).
   * Range: minimum 0.
   */
  priceMax?: number;
  /**
   * Minimum search price in the selected currency (e.g. 50).
   * Range: minimum 0.
   */
  priceMin?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Total-stay price label returned by Airbnb (e.g. $3,149 total).
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
   * Listing records: name, total-stay price label, rating, location, host info, and availability details. Populated whenever the provider has data for the entity.
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
   * Search Airbnb listings by location and dates with optional price, beds/bedrooms/bathrooms, and guest-party filters and get results (name, total-stay price label, rating, host) as normalized JSON.
   *
   * Price: $0.00009 per request plus $0.00165 per result (maximum $0.0331).
   *
   * @example
   * const res = await client.airbnb.search({ location: "San Diego", adults: 2, limit: 3, minBedrooms: 3 });
   */
  search(
    input: AirbnbSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<AirbnbSearchData>> {
    return this._core.run("airbnb.search", input, options);
  }
}
