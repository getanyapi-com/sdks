// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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
   * Only include tokens whose 24-hour price change is at most this many percent (e.g. -20 means -20%). Negative values allowed. Omit to skip this filter.
   */
  max24HChg?: number;
  /**
   * Only include tokens with at most this many 24-hour transactions (buys plus sells). Omit to skip this filter.
   * Range: minimum 0.
   */
  max24HTxns?: number;
  /**
   * Only include tokens with at most this much 24-hour trading volume, in USD. Omit to skip this filter.
   * Range: minimum 0.
   */
  max24HVol?: number;
  /**
   * Only include token pairs at most this old, in hours. Omit to skip this filter.
   * Range: minimum 0.
   */
  maxAge?: number;
  /**
   * Only include tokens with at most this fully diluted valuation (FDV), in USD. Omit to skip this filter.
   * Range: minimum 0.
   */
  maxFdv?: number;
  /**
   * Only include tokens with at most this much pool liquidity, in USD. Omit to skip this filter.
   * Range: minimum 0.
   */
  maxLiq?: number;
  /**
   * Only include tokens with at most this market capitalization, in USD. Omit to skip this filter.
   * Range: minimum 0.
   */
  maxMarketCap?: number;
  /**
   * Only include tokens with at least this many 24-hour buy transactions. Omit to skip this filter.
   * Range: minimum 0.
   */
  min24HBuys?: number;
  /**
   * Only include tokens whose 24-hour price change is at least this many percent (e.g. 10 means +10%). Negative values allowed. Omit to skip this filter.
   */
  min24HChg?: number;
  /**
   * Only include tokens with at least this many 24-hour sell transactions. Omit to skip this filter.
   * Range: minimum 0.
   */
  min24HSells?: number;
  /**
   * Only include tokens with at least this many 24-hour transactions (buys plus sells). Omit to skip this filter.
   * Range: minimum 0.
   */
  min24HTxns?: number;
  /**
   * Only include tokens with at least this much 24-hour trading volume, in USD. Omit to skip this filter.
   * Range: minimum 0.
   */
  min24HVol?: number;
  /**
   * Only include token pairs at least this old, in hours. Omit to skip this filter.
   * Range: minimum 0.
   */
  minAge?: number;
  /**
   * Only include tokens with at least this fully diluted valuation (FDV), in USD. Omit to skip this filter.
   * Range: minimum 0.
   */
  minFdv?: number;
  /**
   * Only include tokens with at least this much pool liquidity, in USD. Omit to skip this filter.
   * Range: minimum 0.
   */
  minLiq?: number;
  /**
   * Only include tokens with at least this market capitalization, in USD. Omit to skip this filter.
   * Range: minimum 0.
   */
  minMarketCap?: number;
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

export type DexscreenerTokensData = unknown;

/**
 * Typed methods for the dexscreener platform. Attached to the AnyAPI client as
 * `client.dexscreener`.
 */
export class DexscreenerNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * DEX Screener Tokens
   *
   * List trending tokens on any blockchain from DEX Screener (price, liquidity, volume, transactions, and market cap), sorted how you want, as normalized JSON.
   *
   * Price: $0.02 per request plus $0.0015 per result (maximum $0.0575).
   *
   * @example
   * const res = await client.dexscreener.tokens({ chain: "solana", limit: 5, min24HVol: 100000 });
   */
  tokens(
    input: DexscreenerTokensInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<DexscreenerTokensData>> {
    return this._core.run(
      "dexscreener.tokens",
      input,
      options,
    ) as unknown as Promise<BareRunResult<DexscreenerTokensData>>;
  }
}
