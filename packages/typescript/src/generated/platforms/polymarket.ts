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
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the market resolves/ends.
   */
  endsUtc?: number;
  /**
   * Title of the parent event grouping this market.
   */
  eventTitle?: string;
  /**
   * Polymarket market identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Event image URL.
   */
  image?: string;
  /**
   * Available liquidity in USD.
   */
  liquidityUsd?: number;
  /**
   * Market outcomes with their current implied prices.
   */
  outcomes?: PolymarketMarketsOutcome[];
  /**
   * Market status, e.g. active or closed.
   */
  status?: string;
  /**
   * The market question. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Polymarket URL for the market event. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Traded volume in USD over the past 24 hours.
   */
  volume24hUsd?: number;
  /**
   * Total traded volume in USD.
   */
  volumeUsd?: number;
  [extra: string]: unknown;
}

export interface PolymarketMarketsOutcome {
  /**
   * Outcome label, e.g. Yes or No.
   */
  name?: string;
  /**
   * Current implied probability price for the outcome (0 to 1).
   */
  price?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Polymarket Markets (polymarket.markets).
 */
export interface PolymarketMarketsData {
  /**
   * Prediction-market records: market question, outcomes with current prices, volume, liquidity, and end date. Populated whenever the provider has data for the entity.
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
   * Discover Polymarket prediction markets - question, outcome prices, volume, liquidity, and end dates - by keyword or sorted by activity, as normalized JSON.

**Price:** billed per result - \$105.00 per 1,000 requests base + \$0.60 per 1,000 results, capped at \$120.00 per 1,000 requests.
   *
   * Price: $0.105 per request plus $0.0006 per result.
   *
   * @example
   * const res = await client.polymarket.markets({ query: "election", limit: 10 });
   */
  markets(
    input: PolymarketMarketsInput,
    options?: RequestOptions,
  ): Promise<RunResult<PolymarketMarketsData>> {
    return this._core.run("polymarket.markets", input, options);
  }
}
