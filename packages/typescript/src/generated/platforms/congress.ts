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
  /**
   * Disclosed dollar amount range for the transaction.
   */
  amountRange?: string;
  /**
   * Full name of the traded asset.
   * Present whenever the upstream returns this record.
   */
  assetName?: string;
  /**
   * Congressional chamber, e.g. House or Senate.
   */
  chamber?: string;
  /**
   * Member's first name.
   * Present whenever the upstream returns this record.
   */
  firstName?: string;
  /**
   * Stable disclosure record identifier.
   */
  id: string;
  /**
   * Member's last name.
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
   * Stock ticker symbol of the traded asset.
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
