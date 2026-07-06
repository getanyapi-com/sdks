// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
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

export interface GoogleFinanceQuoteItem {
  /**
   * Current ask price.
   */
  ask?: number;
  /**
   * Instrument class (e.g. EQUITY, ETF, CRYPTOCURRENCY, CURRENCY, INDEX, MUTUALFUND, FUTURE).
   */
  assetType?: string;
  /**
   * Average daily trading volume.
   */
  averageVolume?: number;
  /**
   * Current bid price.
   */
  bid?: number;
  /**
   * Absolute price change on the day, in the quote currency.
   */
  change?: number;
  /**
   * Percent price change on the day.
   */
  changePercent?: number;
  /**
   * ISO currency the quote is priced in (e.g. USD).
   * Populated whenever the provider returns data.
   */
  currency?: string;
  /**
   * Highest price so far in the current session.
   */
  dayHigh?: number;
  /**
   * Lowest price so far in the current session.
   */
  dayLow?: number;
  /**
   * Exchange the instrument trades on (e.g. NasdaqGS).
   * Populated whenever the provider returns data.
   */
  exchange?: string;
  /**
   * Highest price over the trailing 52 weeks.
   */
  fiftyTwoWeekHigh?: number;
  /**
   * Lowest price over the trailing 52 weeks.
   */
  fiftyTwoWeekLow?: number;
  /**
   * Market capitalization in the quote currency.
   */
  marketCap?: number;
  /**
   * Current market state (e.g. REGULAR, PRE, POST, CLOSED).
   */
  marketState?: string;
  /**
   * Instrument or company name.
   * Populated whenever the provider returns data.
   */
  name?: string;
  /**
   * Opening price for the current session.
   */
  open?: number;
  /**
   * Previous session close price.
   */
  previousClose?: number;
  /**
   * Current price in the quote currency.
   */
  price: number;
  /**
   * Resolved ticker symbol for the quote.
   * Populated whenever the provider returns data.
   */
  symbol: string;
  /**
   * Timestamp of the quote (ISO 8601).
   */
  timestamp?: string;
  /**
   * Traded volume for the current session.
   */
  volume?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Finance Quote (google_finance.quote).
 */
export interface GoogleFinanceQuoteData {
  /**
   * The quote for the requested symbol: name, current price, day change (absolute and percent), quote currency, exchange and market state, plus intraday and reference figures. Up to one element (empty when the symbol did not resolve).
   * Populated whenever the provider returns data.
   */
  items: GoogleFinanceQuoteItem[];
}

/**
 * Typed methods for the google_finance platform. Attached to the AnyAPI client as
 * `client.googleFinance`.
 */
export class GoogleFinanceNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Finance Quote
   *
   * Fetch a live quote for any stock, index, ETF, mutual fund, currency pair, or crypto symbol: name, current price, the absolute and percent change on the day, quote currency, exchange and market state, plus intraday and reference figures (open, day high/low, previous close, volume, market cap, and the 52-week range) with transparent per-request USD pricing.
   *
   * Price: $0.0005 per request plus $0.0015 per result.
   *
   * @example
   * const res = await client.googleFinance.quote({"symbol":"AAPL:NASDAQ"});
   */
  quote(
    input: GoogleFinanceQuoteInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleFinanceQuoteData>> {
    return this._core.run("google_finance.quote", input, options);
  }
}
