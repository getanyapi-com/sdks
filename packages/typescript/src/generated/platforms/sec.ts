// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for SEC EDGAR Filings (sec.filings).
 */
export interface SecFilingsInput {
  /**
   * Company name to search for (partial match supported, e.g. 'Tesla' or 'Berkshire'). Use this when you do not have the ticker symbol. If both ticker and companyName are given, ticker takes precedence.
   */
  companyName?: string;
  /**
   * Only return filings filed on or after this date, in YYYY-MM-DD format (e.g. 2025-01-01).
   */
  dateFrom?: string;
  /**
   * Only return filings filed on or before this date, in YYYY-MM-DD format (e.g. 2026-06-01).
   */
  dateTo?: string;
  /**
   * Filter filings by SEC form type (e.g. 10-K, 10-Q, 8-K, 4, DEF 14A, S-1, 13F-HR); omit for all forms.
   */
  form?: string;
  /**
   * Maximum number of filings to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Company stock ticker symbol, e.g. AAPL, MSFT, or TSLA. Provide either ticker or companyName; ticker is the more precise lookup.
   */
  ticker?: string;
}

export type SecFilingsData = unknown;

/**
 * Typed methods for the sec platform. Attached to the AnyAPI client as
 * `client.sec`.
 */
export class SecNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * SEC EDGAR Filings
   *
   * List a public company's SEC EDGAR filings - form type, filing date, accession number, and document links - by ticker, company name, or CIK, with optional form-type and date filters.
   *
   * Price: $0.002 per request plus $0.0004 per result (maximum $0.012).
   *
   * @example
   * const res = await client.sec.filings({ limit: 3, ticker: "AAPL" });
   */
  filings(
    input: SecFilingsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SecFilingsData>> {
    return this._core.run("sec.filings", input, options) as unknown as Promise<
      BareRunResult<SecFilingsData>
    >;
  }
}
