// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Congress Stock Trades (congress.trades).
 */
export interface CongressTradesInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Latest transaction date to include, inclusive, in YYYY-MM-DD format (e.g. 2026-06-01).
   */
  endDate?: string;
  /**
   * Filter by the congressional member's first name, case-insensitive partial match (e.g. Nancy).
   */
  firstName?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Filter by the congressional member's last name, case-insensitive partial match (e.g. Pelosi).
   */
  lastName?: string;
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
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Earliest transaction date to include, inclusive, in YYYY-MM-DD format (e.g. 2026-01-01).
   */
  startDate?: string;
  /**
   * Filter to transactions involving this stock ticker symbol (e.g. NVDA).
   */
  ticker?: string;
}

export interface CongressTradesItem {
  /**
   * Disclosed dollar amount range for the transaction.
   */
  amountRange?: string;
  /**
   * Full name of the traded asset. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  assetName?: string;
  /**
   * House disclosure asset class code, e.g. ST for stock or OP for option.
   */
  assetType?: string;
  /**
   * Congressional chamber, e.g. House or Senate.
   */
  chamber?: string;
  /**
   * Member's first name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  firstName?: string;
  /**
   * Stable disclosure record identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Member's last name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  lastName?: string;
  /**
   * Trade owner code, e.g. SP (spouse), JT (joint), DC (dependent child).
   */
  owner?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Date the transaction was reported/disclosed.
   */
  reportedUtc?: number;
  /**
   * Member's state and district, e.g. PA11.
   */
  stateDistrict?: string;
  /**
   * Stock ticker symbol of the traded asset. Populated whenever the provider has data for the entity.
   */
  symbol: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Date the transaction occurred.
   */
  tradedUtc?: number;
  /**
   * Transaction type code, e.g. P (purchase), S (sale).
   */
  transactionType?: string;
  /**
   * Calendar year of the disclosure filing.
   */
  year?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Congress Stock Trades (congress.trades).
 */
export interface CongressTradesData {
  /**
   * Disclosure records: member name and chamber, stock ticker, transaction type, amount range, and transaction/report dates. Populated whenever the provider has data for the entity.
   */
  items: CongressTradesItem[];
}

/**
 * Typed methods for the congress platform. Attached to the AnyAPI client as
 * `client.congress`.
 */
export class CongressNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Congress Stock Trades
   *
   * Get US Congress members' financial disclosures and stock trades (member, ticker, transaction type, amount range, and dates), filterable by member, ticker, or date range. Results come newest filing first (by reportedUtc, not tradedUtc), so a recent filing can list trades made years earlier.
   *
   * Price: $0.0011 per request plus $0.00181 per result (maximum $0.0462).
   *
   * @example
   * const res = await client.congress.trades({ limit: 5 });
   */
  trades(
    input: CongressTradesInput,
    options?: RequestOptions,
  ): Promise<RunResult<CongressTradesData>> {
    return this._core.run("congress.trades", input, options);
  }
}
