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
   * All-time high price in USD.
   */
  ath?: number;
  /**
   * All-time low price in USD.
   */
  atl?: number;
  /**
   * Circulating supply (coin count).
   */
  circulatingSupply?: number;
  /**
   * 24h high price in USD.
   */
  high24h?: number;
  /**
   * CoinMarketCap identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  lastUpdated?: string;
  /**
   * 24h low price in USD.
   */
  low24h?: number;
  /**
   * Market capitalization in USD.
   */
  marketCap?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Latest price in USD.
   */
  price?: number;
  /**
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  slug?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  symbol: string;
  /**
   * Total supply (coin count).
   */
  totalSupply?: number;
  /**
   * 24h trading volume in USD.
   */
  volume24h?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of CoinMarketCap Listings (coinmarketcap.listings).
 */
export interface CoinmarketcapListingsData {
  /**
   * Cryptocurrency listing records: rank, name, symbol, price, market cap, trading volume, and 24h price change. Populated whenever the provider has data for the entity.
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
   * Get the current top cryptocurrencies from CoinMarketCap - rank, price, market cap, volume, and 24h change - as normalized JSON.

**Price:** billed per result - \$1.80 per 1,000 results, capped at \$45.00 per 1,000 requests.
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
