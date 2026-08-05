// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Company Enrichment - Crustdata v3 (company_enrichment.crustdata_v3).
 */
export interface CompanyEnrichmentCrustdataV3Input {
  companyDomain?: string;
  companyId?: unknown;
  /**
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  companyName?: string;
  exactMatch?: boolean;
  fields?: unknown;
}

/**
 * The `data` payload of Company Enrichment - Crustdata v3 (company_enrichment.crustdata_v3).
 */
export interface CompanyEnrichmentCrustdataV3Data {
  description?: string;
  domain: string;
  employeeCount?: number;
  foundedYear?: number;
  industry?: string;
  /**
   * Format: uri.
   */
  linkedinUrl?: string;
  location?: string;
  name: string;
  [extra: string]: unknown;
}

/**
 * Typed methods for the company_enrichment platform. Attached to the AnyAPI client as
 * `client.companyEnrichment`.
 */
export class CompanyEnrichmentNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Company Enrichment - Crustdata v3
   *
   * Enrich a company by domain, name, LinkedIn URL, or Crustdata identifier.
   *
   * Price: $0.0972 per request.
   */
  crustdataV3(
    input: CompanyEnrichmentCrustdataV3Input,
    options?: RequestOptions,
  ): Promise<RunResult<CompanyEnrichmentCrustdataV3Data>> {
    return this._core.run("company_enrichment.crustdata_v3", input, options);
  }
}
