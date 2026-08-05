// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Company Search - AI Ark (company_search.ai_ark).
 */
export interface CompanySearchAiArkInput {
  /**
   * AI Ark account filter expression. Nested generic any/all filter objects are accepted as documented by the source and are not further constrained.
   */
  account?: {};
  /**
   * AI Ark saved-list filter expression.
   */
  lists?: {};
  /**
   * Domains whose company characteristics should guide the search.
   */
  lookalikeDomains?: string[];
  /**
   * Company-name search text.
   */
  name?: string;
  /**
   * Zero-based result page.
   * Range: minimum 0.
   * Default: 0.
   */
  page?: number;
  /**
   * Maximum companies to return on this page.
   * Range: minimum 1, maximum 100.
   * Default: 10.
   */
  size?: number;
}

export interface CompanySearchAiArkCompanie {
  /**
   * Headquarters city.
   */
  city?: string;
  /**
   * Headquarters country.
   */
  country?: string;
  /**
   * Company description when available.
   */
  description?: string;
  /**
   * Company website domain.
   */
  domain: string;
  /**
   * Public company contact email.
   * Format: email.
   */
  email?: string;
  /**
   * Estimated total employees.
   * Range: minimum 0.
   */
  employeeCount?: number;
  /**
   * Year the company was founded.
   */
  foundedYear?: number;
  /**
   * Additional company industries.
   */
  industries?: string[];
  /**
   * Primary company industry.
   */
  industry?: string;
  /**
   * Registered company name when available.
   */
  legalName?: string;
  /**
   * Canonical company LinkedIn URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Company name.
   */
  name: string;
  /**
   * Sanitized public company phone number.
   */
  phone?: string;
  /**
   * Headquarters state or region.
   */
  state?: string;
  /**
   * Company organization type.
   */
  type?: string;
  /**
   * Canonical company website URL.
   * Format: uri.
   */
  websiteUrl?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Company Search - AI Ark (company_search.ai_ark).
 */
export interface CompanySearchAiArkData {
  /**
   * Companies returned on this page.
   */
  companies: CompanySearchAiArkCompanie[];
  /**
   * Zero-based page number returned by the source.
   * Range: minimum 0.
   */
  page: number;
  /**
   * Configured page size.
   * Range: minimum 0.
   */
  size: number;
  /**
   * Total matching companies.
   * Range: minimum 0.
   */
  total: number;
  /**
   * Total result pages.
   * Range: minimum 0.
   */
  totalPages: number;
}

export interface CompanySearchCrustdataV3Sort {
  [extra: string]: unknown;
}

/**
 * Input for Company Search - Crustdata v3 (company_search.crustdata_v3).
 */
export interface CompanySearchCrustdataV3Input {
  cursor?: string;
  fields?: unknown;
  /**
   * Crustdata company-database filter expression.
   */
  filters: unknown;
  /**
   * Range: minimum 1, maximum 1000.
   * Default: 10.
   */
  limit?: number;
  sorts?: CompanySearchCrustdataV3Sort[];
}

export interface CompanySearchCrustdataV3Companie {
  domain?: string;
  employeeCount?: number;
  headquarters?: string;
  industry?: string;
  /**
   * Format: uri.
   */
  linkedinUrl?: string;
  name: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Company Search - Crustdata v3 (company_search.crustdata_v3).
 */
export interface CompanySearchCrustdataV3Data {
  companies: CompanySearchCrustdataV3Companie[];
  hasMore?: boolean;
  nextCursor?: string | null;
  /**
   * Range: minimum 0.
   */
  totalCount?: number;
}

/**
 * Typed methods for the company_search platform. Attached to the AnyAPI client as
 * `client.companySearch`.
 */
export class CompanySearchNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Company Search - AI Ark
   *
   * Search companies by name, lookalike domains, account filters, and saved-list filters.
   *
   * Price: $0 per request plus $0.0024 per result (maximum $0.24).
   *
   * @example
   * const res = await client.companySearch.aiArk({ name: "OpenAI", page: 0, size: 1 });
   */
  aiArk(
    input: CompanySearchAiArkInput,
    options?: RequestOptions,
  ): Promise<RunResult<CompanySearchAiArkData>> {
    return this._core.run("company_search.ai_ark", input, options);
  }

  /**
   * Company Search - Crustdata v3
   *
   * Search companies by structured filters with cursor pagination.
   *
   * Price: $0 per request plus $0.048 per result (maximum $48).
   */
  crustdataV3(
    input: CompanySearchCrustdataV3Input,
    options?: RequestOptions,
  ): Promise<RunResult<CompanySearchCrustdataV3Data>> {
    return this._core.run("company_search.crustdata_v3", input, options);
  }

  /**
   * Iterate every result of Company Search - Crustdata v3 across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterCrustdataV3(
    input: CompanySearchCrustdataV3Input,
    options?: RequestOptions,
  ): Paginator<
    CompanySearchCrustdataV3Companie,
    RunResult<CompanySearchCrustdataV3Data>
  > {
    return paginate<
      CompanySearchCrustdataV3Companie,
      RunResult<CompanySearchCrustdataV3Data>
    >(
      this._core,
      "company_search.crustdata_v3",
      input as unknown as Record<string, unknown>,
      "companies",
      false,
      options,
    );
  }
}
