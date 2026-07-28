// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type CoinmarketcapListingsData = unknown;

/**
 * Typed methods for the coinmarketcap platform. Attached to the AnyAPI client as
 * `client.coinmarketcap`.
 */
export class CoinmarketcapNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * CoinMarketCap Listings
   *
   * Get the current top cryptocurrencies from CoinMarketCap (rank, price, market cap, volume, and 24h change) as normalized JSON.
   *
   * Price: $0 per request plus $0.0018 per result (maximum $0.045).
   *
   * @example
   * const res = await client.coinmarketcap.listings({ limit: 5 });
   */
  listings(
    input: CoinmarketcapListingsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<CoinmarketcapListingsData>> {
    return this._core.run(
      "coinmarketcap.listings",
      input,
      options,
    ) as unknown as Promise<BareRunResult<CoinmarketcapListingsData>>;
  }
}
