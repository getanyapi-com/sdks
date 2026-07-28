// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type YahooFinanceQuoteData = unknown;

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
   * Price: $0.00005 per request plus $0.0009 per result (maximum $0.00095).
   *
   * @example
   * const res = await client.yahooFinance.quote({ ticker: "AAPL" });
   */
  quote(
    input: YahooFinanceQuoteInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YahooFinanceQuoteData>> {
    return this._core.run(
      "yahoo_finance.quote",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YahooFinanceQuoteData>>;
  }
}
