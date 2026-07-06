// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Yahoo Finance Quote (yahoo_finance.quote).
 */
export interface YahooFinanceQuoteInput {
  /**
   * The ticker symbol to look up.
   */
  ticker: string;
}

export interface YahooFinanceQuoteItem {
  /**
   * Present whenever the upstream returns this record.
   */
  name?: string;
  price: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Yahoo Finance Quote (yahoo_finance.quote).
 */
export interface YahooFinanceQuoteData {
  /**
   * Quote records for the ticker: current price, market cap, volume, day range, and key financial stats.
   */
  items: YahooFinanceQuoteItem[];
}

/**
 * Typed methods for the yahoo_finance platform. Attached to the AnyAPI client as
 * `client.yahooFinance`.
 */
export class YahooFinanceNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Yahoo Finance Quote
   *
   * Look up a stock or ETF by ticker symbol and get its Yahoo Finance quote - price, market cap, volume, and key stats - as normalized JSON with transparent per-request USD pricing.
   *
   * Price: $0.00005 per request plus $0.0009 per result.
   *
   * @example
   * const res = await client.yahooFinance.quote({ ticker: "AAPL" });
   */
  quote(
    input: YahooFinanceQuoteInput,
    options?: RequestOptions,
  ): Promise<RunResult<YahooFinanceQuoteData>> {
    return this._core.run("yahoo_finance.quote", input, options);
  }
}
