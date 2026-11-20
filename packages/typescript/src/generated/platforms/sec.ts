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
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of filings to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Company stock ticker symbol, e.g. AAPL, MSFT, or TSLA. Provide either ticker or companyName; ticker is the more precise lookup.
   */
  ticker?: string;
}

export interface SecFilingsItem {
  /**
   * SEC accession number uniquely identifying the filing. Populated whenever the provider has data for the entity.
   */
  accessionNumber: string;
  /**
   * SEC Central Index Key for the filer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cik?: string;
  /**
   * Filer company name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  companyName?: string;
  /**
   * Primary document description, e.g. the form label.
   */
  description?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Date the filing was filed. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  filedUtc?: number;
  /**
   * Link to the filing index/folder on sec.gov.
   */
  filingUrl?: string;
  /**
   * Fiscal year end as MMDD, e.g. 0926.
   */
  fiscalYearEnd?: string;
  /**
   * SEC form type, e.g. 10-K, 10-Q, 8-K. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  form?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Period-of-report date for the filing.
   */
  reportedUtc?: number;
  /**
   * SIC industry code SEC files the company under.
   */
  sic?: string;
  /**
   * Stock ticker symbol of the filer, when known.
   */
  ticker?: string;
  /**
   * Direct link to the primary filing document on sec.gov. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEC EDGAR Filings (sec.filings).
 */
export interface SecFilingsData {
  /**
   * Filing records: company and CIK, form type, filing date, accession number, and document links. Populated whenever the provider has data for the entity.
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
   * List a public company's SEC EDGAR filings - form type, filing date, accession number, and document links - by ticker, company name, or CIK, with optional form-type and date filters.
   *
   * Price: $0.0024 per request plus $0.00048 per result (maximum $0.0144).
   *
   * @example
   * const res = await client.sec.filings({ limit: 3, ticker: "AAPL" });
   */
  filings(
    input: SecFilingsInput,
    options?: RequestOptions,
  ): Promise<RunResult<SecFilingsData>> {
    return this._core.run("sec.filings", input, options);
  }
}
