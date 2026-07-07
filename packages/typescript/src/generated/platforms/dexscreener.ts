// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for DEX Screener Tokens (dexscreener.tokens).
 */
export interface DexscreenerTokensInput {
  /**
   * Blockchain network to list tokens for, optionally scoped to a DEX as chain/dex (e.g. solana or ethereum/uniswap).
   */
  chain: string;
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Sort direction: desc or asc (e.g. desc).
   */
  order?: string;
  /**
   * Field to sort tokens by (e.g. volume, txns, liquidity, marketCap, trendingScoreH24).
   */
  rankBy?: string;
  /**
   * Stats timeframe: 24h, 6h, 1h, or 5m (e.g. 24h).
   * Default: 24h.
   */
  timeframe?: string;
}

export interface DexscreenerTokensItem {
  /**
   * Age of the token pair in hours.
   */
  ageHours?: number;
  /**
   * Token logo image URL.
   */
  image?: string;
  /**
   * Total pool liquidity in USD.
   */
  liquidityUsd?: number;
  /**
   * Number of distinct makers over the selected timeframe.
   */
  makerCount?: number;
  /**
   * Token market capitalization in USD.
   */
  marketCapUsd?: number;
  /**
   * Token full name.
   * Present whenever the upstream returns this record.
   */
  name?: string;
  /**
   * On-chain address of the liquidity pool.
   */
  poolAddress?: string;
  /**
   * Current token price in USD.
   */
  price: number;
  /**
   * Fractional price change over the past hour.
   */
  priceChange1h?: number;
  /**
   * Fractional price change over the past 24 hours.
   */
  priceChange24h?: number;
  /**
   * Token ticker symbol.
   */
  symbol: string;
  /**
   * Number of transactions over the selected timeframe.
   */
  transactionCount?: number;
  /**
   * DEX Screener URL for the trading pair.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  /**
   * Trading volume in USD over the selected timeframe.
   */
  volumeUsd?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of DEX Screener Tokens (dexscreener.tokens).
 */
export interface DexscreenerTokensData {
  /**
   * Token listing records: token name and symbol, price, liquidity, volume, transaction/maker counts, price change, market cap, and the DEX Screener pair URL.
   */
  items: DexscreenerTokensItem[];
}

/**
 * Typed methods for the dexscreener platform. Attached to the AnyAPI client as
 * `client.dexscreener`.
 */
export class DexscreenerNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * DEX Screener Tokens
   *
   * List trending tokens on any blockchain from DEX Screener - price, liquidity, volume, transactions, and market cap - sorted how you want, as normalized JSON with transparent per-request USD pricing.
   *
   * Price: $0.02 per request plus $0.0015 per result.
   *
   * @example
   * const res = await client.dexscreener.tokens({ chain: "solana", limit: 5 });
   */
  tokens(
    input: DexscreenerTokensInput,
    options?: RequestOptions,
  ): Promise<RunResult<DexscreenerTokensData>> {
    return this._core.run("dexscreener.tokens", input, options);
  }
}
