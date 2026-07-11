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
   * Maximum search price in the selected currency (e.g. 300).
   * Range: minimum 0.
   */
  priceMax?: number;
  /**
   * Minimum search price in the selected currency (e.g. 50).
   * Range: minimum 0.
   */
  priceMin?: number;
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

**Price:** billed per result - \$0.08 per 1,000 requests base + \$1.50 per 1,000 results, capped at \$30.08 per 1,000 requests.
   *
   * Price: $0.00008 per request plus $0.0015 per result.
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
