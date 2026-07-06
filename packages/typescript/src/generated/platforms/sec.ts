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
   */
  accessionNumber: string;
  /**
   * SEC Central Index Key for the filer.
   * Present whenever the upstream returns this record.
   */
  cik?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  companyName?: string;
  /**
   * Date the filing was filed, YYYY-MM-DD.
   * Present whenever the upstream returns this record.
   */
  filingDate?: string;
  /**
   * SEC form type, e.g. 10-K, 10-Q, 8-K.
   * Present whenever the upstream returns this record.
   */
  form?: string;
  /**
   * Direct link to the primary filing document on sec.gov.
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
   * const res = await client.sec.filings({ ticker: "AAPL", limit: 3 });
   */
  filings(
    input: SecFilingsInput,
    options?: RequestOptions,
  ): Promise<RunResult<SecFilingsData>> {
    return this._core.run("sec.filings", input, options);
  }
}
