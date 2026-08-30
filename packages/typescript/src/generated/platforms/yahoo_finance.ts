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
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * The security's display name, e.g. "Apple Inc.". Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  name?: string;
  /**
   * The previous session's closing price.
   */
  previousClose?: number;
  /**
   * The latest trade price in the security's native currency. Populated whenever the provider has data for the entity.
   */
  price: number;
  /**
   * The resolved ticker symbol for the quote, e.g. "AAPL". Populated whenever the provider has data for the entity.
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
   * Quote records for the ticker: current price, day range, volume, and market cap. Populated whenever the provider has data for the entity.
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
   * Look up a stock or ETF by ticker symbol and get its Yahoo Finance quote (price, market cap, volume, and key stats) as normalized JSON.
   *
   * Price: $0.00006 per request plus $0.00099 per result (maximum $0.00105).
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
