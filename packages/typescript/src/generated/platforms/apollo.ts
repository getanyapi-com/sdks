// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Apollo Organization (apollo.organization).
 */
export interface ApolloOrganizationInput {
  /**
   * Organization identifier returned by an Apollo organization endpoint.
   */
  organizationId: string;
}

export type ApolloOrganizationData = unknown;

/**
 * Input for Apollo Organization Enrichment (apollo.organization_enrich).
 */
export interface ApolloOrganizationEnrichInput {
  /**
   * Organization domain without a path, such as apollo.io.
   */
  domain: string;
}

export type ApolloOrganizationEnrichData = unknown;

/**
 * Input for Apollo Organization Jobs (apollo.organization_jobs).
 */
export interface ApolloOrganizationJobsInput {
  /**
   * Organization identifier returned by an Apollo organization endpoint.
   */
  organizationId: string;
}

export type ApolloOrganizationJobsData = unknown;

/**
 * Input for Apollo Organization News (apollo.organization_news).
 */
export interface ApolloOrganizationNewsInput {
  /**
   * Optional keywords to match in related articles.
   */
  keywords?: string;
  /**
   * Maximum articles returned on this page.
   * Range: minimum 1, maximum 100.
   * Default: 25.
   */
  limit?: number;
  /**
   * Organization identifiers whose related news should be returned.
   */
  organizationIds: string[];
  /**
   * One-based result page.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
}

export type ApolloOrganizationNewsData = unknown;

/**
 * Input for Apollo Bulk Organization Enrichment (apollo.organizations_bulk_enrich).
 */
export interface ApolloOrganizationsBulkEnrichInput {
  /**
   * Organization domains to enrich, with at most 10 domains per request.
   */
  domains: string[];
}

export type ApolloOrganizationsBulkEnrichData = unknown;

/**
 * Input for Apollo Organization Search (apollo.organizations_search).
 */
export interface ApolloOrganizationsSearchInput {
  /**
   * Employee-count ranges in Apollo notation, such as 51,200.
   */
  employeeRanges?: string[];
  /**
   * Apollo industry tag identifiers to match.
   */
  industryIds?: string[];
  /**
   * Keywords to match across organization records.
   */
  keywords?: string;
  /**
   * Maximum organizations returned on this page.
   * Range: minimum 1, maximum 100.
   * Default: 25.
   */
  limit?: number;
  /**
   * Headquarters locations to match.
   */
  locations?: string[];
  /**
   * One-based result page.
   * Range: minimum 1, maximum 500.
   * Default: 1.
   */
  page?: number;
}

export type ApolloOrganizationsSearchData = unknown;

/**
 * Input for Apollo People Search (apollo.people_search).
 */
export interface ApolloPeopleSearchInput {
  /**
   * Organization employee-count ranges in Apollo notation, such as 51,200.
   */
  employeeRanges?: string[];
  /**
   * Keywords to match across people records.
   */
  keywords?: string;
  /**
   * Maximum people returned on this page.
   * Range: minimum 1, maximum 100.
   * Default: 25.
   */
  limit?: number;
  /**
   * Organization headquarters locations to match.
   */
  organizationLocations?: string[];
  /**
   * One-based result page.
   * Range: minimum 1, maximum 500.
   * Default: 1.
   */
  page?: number;
  /**
   * Person locations to match.
   */
  personLocations?: string[];
  /**
   * Seniority levels to match.
   */
  seniorities?: (
    | "owner"
    | "founder"
    | "c_suite"
    | "partner"
    | "vp"
    | "head"
    | "director"
    | "manager"
    | "senior"
    | "entry"
  )[];
  /**
   * Job titles to match.
   */
  titles?: string[];
}

export type ApolloPeopleSearchData = unknown;

/**
 * Input for Apollo Person Enrichment (apollo.person_enrich).
 */
export interface ApolloPersonEnrichInput {
  /**
   * Organization domain used with the person's name.
   */
  domain?: string;
  /**
   * Work or personal email used to identify the person.
   * Format: email.
   */
  email?: string;
  /**
   * Person first name, used with lastName and an organization identifier.
   */
  firstName?: string;
  /**
   * Person last name, used with firstName and an organization identifier.
   */
  lastName?: string;
  /**
   * LinkedIn profile URL used to identify the person.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Organization name used with the person's name.
   */
  organizationName?: string;
}

export type ApolloPersonEnrichData = unknown;

/**
 * Typed methods for the apollo platform. Attached to the AnyAPI client as
 * `client.apollo`.
 */
export class ApolloNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Apollo Organization
   *
   * Get a complete organization profile by ID including company, industry, employee, revenue, funding, location, and technology data.
   *
   * Price: $0.012 per request.
   *
   * @example
   * const res = await client.apollo.organization({ organizationId: "5e66b6381e05b4008c8331b8" });
   */
  organization(
    input: ApolloOrganizationInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ApolloOrganizationData>> {
    return this._core.run(
      "apollo.organization",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ApolloOrganizationData>>;
  }

  /**
   * Apollo Organization Enrichment
   *
   * Enrich an organization by domain with company profile, industry, employee, revenue, funding, location, and technology data.
   *
   * Price: $0.012 per request.
   *
   * @example
   * const res = await client.apollo.organizationEnrich({ domain: "apollo.io" });
   */
  organizationEnrich(
    input: ApolloOrganizationEnrichInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ApolloOrganizationEnrichData>> {
    return this._core.run(
      "apollo.organization_enrich",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ApolloOrganizationEnrichData>>;
  }

  /**
   * Apollo Organization Jobs
   *
   * Get current job postings for an organization by ID with title, location, source URL, and timestamps.
   *
   * Price: $0.012 per request.
   *
   * @example
   * const res = await client.apollo.organizationJobs({ organizationId: "5e66b6381e05b4008c8331b8" });
   */
  organizationJobs(
    input: ApolloOrganizationJobsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ApolloOrganizationJobsData>> {
    return this._core.run(
      "apollo.organization_jobs",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ApolloOrganizationJobsData>>;
  }

  /**
   * Apollo Organization News
   *
   * Search news related to one or more organizations with article details, categories, and pagination totals.
   *
   * Price: $0.012 per request.
   *
   * @example
   * const res = await client.apollo.organizationNews({ organizationIds: ["5e66b6381e05b4008c8331b8"], limit: 3, page: 1 });
   */
  organizationNews(
    input: ApolloOrganizationNewsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ApolloOrganizationNewsData>> {
    return this._core.run(
      "apollo.organization_news",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ApolloOrganizationNewsData>>;
  }

  /**
   * Apollo Bulk Organization Enrichment
   *
   * Enrich up to 10 organization domains in one request with normalized company profile, industry, employee, revenue, funding, and location data.
   *
   * Price: $0.06 per request.
   *
   * @example
   * const res = await client.apollo.organizationsBulkEnrich({ domains: ["apollo.io", "openai.com"] });
   */
  organizationsBulkEnrich(
    input: ApolloOrganizationsBulkEnrichInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ApolloOrganizationsBulkEnrichData>> {
    return this._core.run(
      "apollo.organizations_bulk_enrich",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ApolloOrganizationsBulkEnrichData>>;
  }

  /**
   * Apollo Organization Search
   *
   * Search organizations by location, employee range, industry, and keywords with normalized company records and pagination totals.
   *
   * Price: $0.012 per request.
   *
   * @example
   * const res = await client.apollo.organizationsSearch({ keywords: "Apollo", limit: 3, page: 1 });
   */
  organizationsSearch(
    input: ApolloOrganizationsSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ApolloOrganizationsSearchData>> {
    return this._core.run(
      "apollo.organizations_search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ApolloOrganizationsSearchData>>;
  }

  /**
   * Apollo People Search
   *
   * Search people by title, seniority, person or organization location, employee range, and keywords with normalized profile summaries.
   *
   * Price: $0.01 per request.
   *
   * @example
   * const res = await client.apollo.peopleSearch({ limit: 3, page: 1, titles: ["CEO"] });
   */
  peopleSearch(
    input: ApolloPeopleSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ApolloPeopleSearchData>> {
    return this._core.run(
      "apollo.people_search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ApolloPeopleSearchData>>;
  }

  /**
   * Apollo Person Enrichment
   *
   * Enrich a person by email, LinkedIn URL, or name and organization with contact, role, location, and company data.
   *
   * Price: $0.012 per request.
   *
   * @example
   * const res = await client.apollo.personEnrich({ domain: "apollo.io", firstName: "Tim", lastName: "Zheng" });
   */
  personEnrich(
    input: ApolloPersonEnrichInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ApolloPersonEnrichData>> {
    return this._core.run(
      "apollo.person_enrich",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ApolloPersonEnrichData>>;
  }
}
