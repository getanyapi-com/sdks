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
   * Latest transaction date to include, inclusive, in YYYY-MM-DD format (e.g. 2026-06-01).
   */
  endDate?: string;
  /**
   * Filter by the congressional member's first name, case-insensitive partial match (e.g. Nancy).
   */
  firstName?: string;
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
   * Earliest transaction date to include, inclusive, in YYYY-MM-DD format (e.g. 2026-01-01).
   */
  startDate?: string;
  /**
   * Filter to transactions involving this stock ticker symbol (e.g. NVDA).
   */
  ticker?: string;
}

export interface CongressTradesItem {
  id: string;
  /**
   * Present whenever the upstream returns this record.
   */
  name?: string;
  symbol: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Congress Stock Trades (congress.trades).
 */
export interface CongressTradesData {
  /**
   * Disclosure records: member name and chamber, stock ticker, transaction type, amount range, and transaction/report dates.
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
   * Get US Congress members' financial disclosures and stock trades - member, ticker, transaction type, amount range, and dates - filterable by member, ticker, or date range, billed per request in USD.
   *
   * Price: $0.001 per request plus $0.0019 per result.
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
