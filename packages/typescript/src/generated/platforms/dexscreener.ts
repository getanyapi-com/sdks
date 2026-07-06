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
   * Present whenever the upstream returns this record.
   */
  name?: string;
  price: number;
  symbol: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of DEX Screener Tokens (dexscreener.tokens).
 */
export interface DexscreenerTokensData {
  /**
   * Token listing records: token name and symbol, pair, price, liquidity, volume, transaction counts, and price change.
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
