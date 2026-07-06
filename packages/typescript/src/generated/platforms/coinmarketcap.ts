// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for CoinMarketCap Listings (coinmarketcap.listings).
 */
export interface CoinmarketcapListingsInput {
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
}

export interface CoinmarketcapListingsItem {
  /**
   * All-time high.
   */
  ath?: number;
  /**
   * All-time low.
   */
  atl?: number;
  circulatingSupply?: number;
  high24h?: number;
  /**
   * CoinMarketCap identifier.
   */
  id: string;
  /**
   * Present whenever the upstream returns this record.
   */
  lastUpdated?: string;
  low24h?: number;
  marketCap?: number;
  name: string;
  /**
   * Latest price in the primary quote currency (USD).
   */
  price?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  slug?: string;
  symbol: string;
  totalSupply?: number;
  /**
   * 24h trading volume.
   */
  volume24h?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of CoinMarketCap Listings (coinmarketcap.listings).
 */
export interface CoinmarketcapListingsData {
  /**
   * Cryptocurrency listing records: rank, name, symbol, price, market cap, trading volume, and 24h price change.
   */
  items: CoinmarketcapListingsItem[];
}

/**
 * Typed methods for the coinmarketcap platform. Attached to the AnyAPI client as
 * `client.coinmarketcap`.
 */
export class CoinmarketcapNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * CoinMarketCap Listings
   *
   * Get the current top cryptocurrencies from CoinMarketCap - rank, price, market cap, volume, and 24h change - as normalized JSON with transparent per-request USD pricing.
   *
   * Price: $0.0018 per result.
   *
   * @example
   * const res = await client.coinmarketcap.listings({ limit: 5 });
   */
  listings(
    input: CoinmarketcapListingsInput,
    options?: RequestOptions,
  ): Promise<RunResult<CoinmarketcapListingsData>> {
    return this._core.run("coinmarketcap.listings", input, options);
  }
}
