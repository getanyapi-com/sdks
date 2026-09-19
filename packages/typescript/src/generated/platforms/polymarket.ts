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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Discover Polymarket prediction markets (question, outcome prices, volume, liquidity, and end dates) by keyword or sorted by activity, as normalized JSON.
   *
   * Price: $0.116 per request plus $0.00066 per result (maximum $0.132).
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
