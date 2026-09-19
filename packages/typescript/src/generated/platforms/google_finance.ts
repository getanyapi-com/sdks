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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The symbol to quote. US stocks use a plain ticker (e.g. AAPL, TSLA); non-US stocks add a market suffix (e.g. VOW3.DE, BABA.HK, BARC.L); indices use a caret (e.g. ^GSPC, ^DJI); crypto and currencies use pair form (e.g. BTC-USD, EURUSD=X); mutual funds and futures use their symbol (e.g. VFIAX, ES=F). Common alternate forms are accepted and normalized (e.g. AAPL:NASDAQ, .DJI, BTC/USD). Exact symbols only, not a company-name search.
   */
  symbol: string;
}

export interface GoogleFinanceQuoteItem {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  asOfUtc?: number;
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
   * ISO currency the quote is priced in (e.g. USD). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
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
   * Exchange the instrument trades on (e.g. NasdaqGS). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
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
   * Instrument or company name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
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
   * Resolved ticker symbol for the quote. Populated whenever the provider has data for the entity.
   */
  symbol: string;
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
   * The quote for the requested symbol: name, current price, day change (absolute and percent), quote currency, exchange and market state, plus intraday and reference figures. Up to one element (empty when the symbol did not resolve). Populated whenever the provider has data for the entity.
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
   * Fetch a live quote for any stock, index, ETF, mutual fund, currency pair, or crypto symbol: name, current price, the absolute and percent change on the day, quote currency, exchange and market state, plus intraday and reference figures (open, day high/low, previous close, volume, market cap, and the 52-week range).
   *
   * Price: $0.00055 per request plus $0.00165 per result (maximum $0.0022).
   *
   * @example
   * const res = await client.googleFinance.quote({ symbol: "AAPL:NASDAQ" });
   */
  quote(
    input: GoogleFinanceQuoteInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleFinanceQuoteData>> {
    return this._core.run("google_finance.quote", input, options);
  }
}
