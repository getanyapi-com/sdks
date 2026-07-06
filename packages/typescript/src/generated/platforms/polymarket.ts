// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Polymarket Markets (polymarket.markets).
 */
export interface PolymarketMarketsInput {
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Search term for markets (e.g. election, bitcoin, super bowl).
   */
  query: string;
  /**
   * How discovered markets are ordered before results are returned (e.g. volume_24hr for recent momentum).
   * One of: volume_24hr, volume, liquidity, start_date, ending_soon, competitive.
   * Default: volume_24hr.
   */
  sortBy?:
    | "volume_24hr"
    | "volume"
    | "liquidity"
    | "start_date"
    | "ending_soon"
    | "competitive";
  /**
   * Return "active" markets for current prices and volume, or "resolved" markets for historical outcomes.
   * One of: active, resolved.
   * Default: active.
   */
  status?: "active" | "resolved";
}

export interface PolymarketMarketsItem {
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Populated whenever the provider returns data.
   */
  title: string;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Polymarket Markets (polymarket.markets).
 */
export interface PolymarketMarketsData {
  /**
   * Prediction-market records: market question, outcomes with current prices, volume, liquidity, and end date.
   * Populated whenever the provider returns data.
   */
  items: PolymarketMarketsItem[];
}

/**
 * Typed methods for the polymarket platform. Attached to the AnyAPI client as
 * `client.polymarket`.
 */
export class PolymarketNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Polymarket Markets
   *
   * Discover Polymarket prediction markets - question, outcome prices, volume, liquidity, and end dates - by keyword or sorted by activity, as normalized JSON billed per request in USD.
   *
   * Price: $0.105 per request plus $0.0006 per result.
   *
   * @example
   * const res = await client.polymarket.markets({"limit":10,"query":"election"});
   */
  markets(
    input: PolymarketMarketsInput,
    options?: RequestOptions,
  ): Promise<RunResult<PolymarketMarketsData>> {
    return this._core.run("polymarket.markets", input, options);
  }
}
