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
   * Absolute price change from the previous close.
   */
  change?: number;
  /**
   * Percent price change from the previous close (e.g. 3.14 means +3.14%).
   */
  changePercent?: number;
  /**
   * Highest trade price during the current session.
   */
  dayHigh?: number;
  /**
   * Lowest trade price during the current session.
   */
  dayLow?: number;
  /**
   * Total market capitalization in the security's native currency.
   */
  marketCap?: number;
  /**
   * The security's display name, e.g. "Apple Inc.".
   * Present whenever the upstream returns this record.
   */
  name?: string;
  /**
   * The previous session's closing price.
   */
  previousClose?: number;
  /**
   * The latest trade price in the security's native currency.
   */
  price: number;
  /**
   * The resolved ticker symbol for the quote, e.g. "AAPL".
   * Present whenever the upstream returns this record.
   */
  symbol?: string;
  /**
   * Number of shares traded during the current session.
   */
  volume?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Yahoo Finance Quote (yahoo_finance.quote).
 */
export interface YahooFinanceQuoteData {
  /**
   * Quote records for the ticker: current price, day range, volume, and market cap.
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
   * Look up a stock or ETF by ticker symbol and get its Yahoo Finance quote (price, market cap, volume, and key stats) as normalized JSON with transparent per-request USD pricing.
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
