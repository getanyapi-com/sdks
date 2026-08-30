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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * Token full name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  name?: string;
  /**
   * On-chain address of the liquidity pool.
   */
  poolAddress?: string;
  /**
   * Current token price in USD. Populated whenever the provider has data for the entity.
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
   * Token ticker symbol. Populated whenever the provider has data for the entity.
   */
  symbol: string;
  /**
   * Number of transactions over the selected timeframe.
   */
  transactionCount?: number;
  /**
   * DEX Screener URL for the trading pair. Populated whenever the provider has data for the entity.
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
   * Token listing records: token name and symbol, price, liquidity, volume, transaction/maker counts, price change, market cap, and the DEX Screener pair URL. Populated whenever the provider has data for the entity.
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
   * List trending tokens on any blockchain from DEX Screener (price, liquidity, volume, transactions, and market cap), sorted how you want, as normalized JSON.
   *
   * Price: $0.022 per request plus $0.00165 per result (maximum $0.0633).
   *
   * @example
   * const res = await client.dexscreener.tokens({ chain: "solana", limit: 5, min24HVol: 100000 });
   */
  tokens(
    input: DexscreenerTokensInput,
    options?: RequestOptions,
  ): Promise<RunResult<DexscreenerTokensData>> {
    return this._core.run("dexscreener.tokens", input, options);
  }
}
