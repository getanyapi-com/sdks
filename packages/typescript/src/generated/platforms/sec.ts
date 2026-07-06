// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for SEC EDGAR Filings (sec.filings).
 */
export interface SecFilingsInput {
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
   * Company stock ticker symbol, e.g. AAPL, MSFT, or TSLA.
   */
  ticker: string;
}

export interface SecFilingsItem {
  /**
   * SEC accession number uniquely identifying the filing.
   * Populated whenever the provider returns data.
   */
  accessionNumber: string;
  /**
   * SEC Central Index Key for the filer.
   * Populated whenever the provider returns data.
   */
  cik?: string;
  /**
   * Populated whenever the provider returns data.
   */
  companyName?: string;
  /**
   * Date the filing was filed, YYYY-MM-DD.
   * Populated whenever the provider returns data.
   */
  filingDate?: string;
  /**
   * SEC form type, e.g. 10-K, 10-Q, 8-K.
   * Populated whenever the provider returns data.
   */
  form?: string;
  /**
   * Direct link to the primary filing document on sec.gov.
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEC EDGAR Filings (sec.filings).
 */
export interface SecFilingsData {
  /**
   * Filing records: company and CIK, form type, filing date, accession number, and document links.
   * Populated whenever the provider returns data.
   */
  items: SecFilingsItem[];
}

/**
 * Typed methods for the sec platform. Attached to the AnyAPI client as
 * `client.sec`.
 */
export class SecNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * SEC EDGAR Filings
   *
   * List a public company's SEC EDGAR filings - form type, filing date, accession number, and document links - by ticker, company name, or CIK, with optional form-type and date filters, billed per request in USD.
   *
   * Price: $0.002 per request plus $0.0004 per result.
   *
   * @example
   * const res = await client.sec.filings({"limit":3,"ticker":"AAPL"});
   */
  filings(
    input: SecFilingsInput,
    options?: RequestOptions,
  ): Promise<RunResult<SecFilingsData>> {
    return this._core.run("sec.filings", input, options);
  }
}
