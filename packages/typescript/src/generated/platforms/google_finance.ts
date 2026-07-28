// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Google Finance Quote (google_finance.quote).
 */
export interface GoogleFinanceQuoteInput {
  /**
   * The symbol to quote. US stocks use a plain ticker (e.g. AAPL, TSLA); non-US stocks add a market suffix (e.g. VOW3.DE, BABA.HK, BARC.L); indices use a caret (e.g. ^GSPC, ^DJI); crypto and currencies use pair form (e.g. BTC-USD, EURUSD=X); mutual funds and futures use their symbol (e.g. VFIAX, ES=F). Common alternate forms are accepted and normalized (e.g. AAPL:NASDAQ, .DJI, BTC/USD). Exact symbols only, not a company-name search.
   */
  symbol: string;
}

export type GoogleFinanceQuoteData = unknown;

/**
 * Typed methods for the google_finance platform. Attached to the AnyAPI client as
 * `client.googleFinance`.
 */
export class GoogleFinanceNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Finance Quote
   *
   * Fetch a live quote for any stock, index, ETF, mutual fund, currency pair, or crypto symbol: name, current price, the absolute and percent change on the day, quote currency, exchange and market state, plus intraday and reference figures (open, day high/low, previous close, volume, market cap, and the 52-week range).
   *
   * Price: $0.0005 per request plus $0.0015 per result (maximum $0.002).
   *
   * @example
   * const res = await client.googleFinance.quote({ symbol: "AAPL:NASDAQ" });
   */
  quote(
    input: GoogleFinanceQuoteInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GoogleFinanceQuoteData>> {
    return this._core.run(
      "google_finance.quote",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GoogleFinanceQuoteData>>;
  }
}
