// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
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

/**
 * The `data` payload of Apollo Organization (apollo.organization).
 */
export interface ApolloOrganizationData {
  /**
   * Estimated annual revenue in USD.
   * Range: minimum 0.
   */
  annualRevenue?: number;
  /**
   * Human-readable estimated annual revenue.
   */
  annualRevenueDisplay?: string;
  /**
   * Headquarters city.
   */
  city?: string;
  /**
   * Headquarters country.
   */
  country?: string;
  /**
   * Organization summary.
   */
  description?: string;
  /**
   * Primary organization domain.
   */
  domain?: string;
  /**
   * Estimated employee count.
   * Range: minimum 0.
   */
  employeeCount?: number;
  /**
   * Canonical Facebook page URL.
   * Format: uri.
   */
  facebookUrl?: string;
  /**
   * Year the organization was founded.
   */
  foundedYear?: number;
  /**
   * Stable organization identifier.
   */
  id: string;
  /**
   * Organization logo URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Industries associated with the organization.
   */
  industries?: string[];
  /**
   * Primary industry.
   */
  industry?: string;
  /**
   * Keywords associated with the organization.
   */
  keywords?: string[];
  /**
   * Latest disclosed funding stage.
   */
  latestFundingStage?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  latestFundingUtc?: number;
  /**
   * Canonical LinkedIn company URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * NAICS industry codes.
   */
  naicsCodes?: string[];
  /**
   * Organization name.
   */
  name: string;
  /**
   * Headquarters postal code.
   */
  postalCode?: string;
  /**
   * SIC industry codes.
   */
  sicCodes?: string[];
  /**
   * Headquarters state or region.
   */
  state?: string;
  /**
   * Street address.
   */
  streetAddress?: string;
  /**
   * Technologies detected at the organization.
   */
  technologyNames?: string[];
  /**
   * Total disclosed funding in USD.
   * Range: minimum 0.
   */
  totalFunding?: number;
  /**
   * Human-readable total disclosed funding.
   */
  totalFundingDisplay?: string;
  /**
   * Canonical X or Twitter profile URL.
   * Format: uri.
   */
  twitterUrl?: string;
  /**
   * Canonical organization website URL.
   * Format: uri.
   */
  websiteUrl?: string;
  [extra: string]: unknown;
}

/**
 * Input for Apollo Organization Enrichment (apollo.organization_enrich).
 */
export interface ApolloOrganizationEnrichInput {
  /**
   * Organization domain without a path, such as apollo.io.
   */
  domain: string;
}

/**
 * The `data` payload of Apollo Organization Enrichment (apollo.organization_enrich).
 */
export interface ApolloOrganizationEnrichData {
  /**
   * Estimated annual revenue in USD.
   * Range: minimum 0.
   */
  annualRevenue?: number;
  /**
   * Human-readable estimated annual revenue.
   */
  annualRevenueDisplay?: string;
  /**
   * Headquarters city.
   */
  city?: string;
  /**
   * Headquarters country.
   */
  country?: string;
  /**
   * Organization summary.
   */
  description?: string;
  /**
   * Primary organization domain.
   */
  domain?: string;
  /**
   * Estimated employee count.
   * Range: minimum 0.
   */
  employeeCount?: number;
  /**
   * Canonical Facebook page URL.
   * Format: uri.
   */
  facebookUrl?: string;
  /**
   * Year the organization was founded.
   */
  foundedYear?: number;
  /**
   * Stable organization identifier.
   */
  id: string;
  /**
   * Organization logo URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Industries associated with the organization.
   */
  industries?: string[];
  /**
   * Primary industry.
   */
  industry?: string;
  /**
   * Keywords associated with the organization.
   */
  keywords?: string[];
  /**
   * Latest disclosed funding stage.
   */
  latestFundingStage?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  latestFundingUtc?: number;
  /**
   * Canonical LinkedIn company URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * NAICS industry codes.
   */
  naicsCodes?: string[];
  /**
   * Organization name.
   */
  name: string;
  /**
   * Headquarters postal code.
   */
  postalCode?: string;
  /**
   * SIC industry codes.
   */
  sicCodes?: string[];
  /**
   * Headquarters state or region.
   */
  state?: string;
  /**
   * Street address.
   */
  streetAddress?: string;
  /**
   * Technologies detected at the organization.
   */
  technologyNames?: string[];
  /**
   * Total disclosed funding in USD.
   * Range: minimum 0.
   */
  totalFunding?: number;
  /**
   * Human-readable total disclosed funding.
   */
  totalFundingDisplay?: string;
  /**
   * Canonical X or Twitter profile URL.
   * Format: uri.
   */
  twitterUrl?: string;
  /**
   * Canonical organization website URL.
   * Format: uri.
   */
  websiteUrl?: string;
  [extra: string]: unknown;
}

/**
 * Input for Apollo Organization Jobs (apollo.organization_jobs).
 */
export interface ApolloOrganizationJobsInput {
  /**
   * Organization identifier returned by an Apollo organization endpoint.
   */
  organizationId: string;
}

export interface ApolloOrganizationJobsJob {
  /**
   * Job city.
   */
  city?: string;
  /**
   * Job country.
   */
  country?: string;
  /**
   * Stable job posting identifier.
   */
  id: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  lastSeenUtc?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  postedUtc?: number;
  /**
   * Job state or region.
   */
  state?: string;
  /**
   * Job title.
   */
  title: string;
  /**
   * Canonical job posting URL.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Apollo Organization Jobs (apollo.organization_jobs).
 */
export interface ApolloOrganizationJobsData {
  /**
   * Current job postings.
   */
  jobs: ApolloOrganizationJobsJob[];
  /**
   * Page size returned.
   * Range: minimum 0.
   */
  limit: number;
  /**
   * One-based page returned.
   * Range: minimum 1.
   */
  page: number;
  /**
   * Total current job postings.
   * Range: minimum 0.
   */
  total: number;
  /**
   * Total available pages.
   * Range: minimum 0.
   */
  totalPages: number;
}

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

export interface ApolloOrganizationNewsArticle {
  /**
   * Publishing domain.
   */
  domain?: string;
  /**
   * Detected business event categories.
   */
  eventCategories?: string[];
  /**
   * Stable article identifier.
   */
  id: string;
  /**
   * Organization identifiers associated with the article.
   */
  organizationIds?: string[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  publishedUtc?: number;
  /**
   * Article summary or excerpt.
   */
  snippet?: string;
  /**
   * Article title.
   */
  title: string;
  /**
   * Canonical article URL.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Apollo Organization News (apollo.organization_news).
 */
export interface ApolloOrganizationNewsData {
  /**
   * Related news articles on this page.
   */
  articles: ApolloOrganizationNewsArticle[];
  /**
   * Page size returned.
   * Range: minimum 0.
   */
  limit: number;
  /**
   * One-based page returned.
   * Range: minimum 1.
   */
  page: number;
  /**
   * Total matching articles.
   * Range: minimum 0.
   */
  total: number;
  /**
   * Total available pages.
   * Range: minimum 0.
   */
  totalPages: number;
}

/**
 * Input for Apollo Bulk Organization Enrichment (apollo.organizations_bulk_enrich).
 */
export interface ApolloOrganizationsBulkEnrichInput {
  /**
   * Organization domains to enrich, with at most 10 domains per request.
   */
  domains: string[];
}

export interface ApolloOrganizationsBulkEnrichOrganization {
  /**
   * Estimated annual revenue in USD.
   * Range: minimum 0.
   */
  annualRevenue?: number;
  /**
   * Human-readable estimated annual revenue.
   */
  annualRevenueDisplay?: string;
  /**
   * Headquarters city.
   */
  city?: string;
  /**
   * Headquarters country.
   */
  country?: string;
  /**
   * Organization summary.
   */
  description?: string;
  /**
   * Primary organization domain.
   */
  domain?: string;
  /**
   * Estimated employee count.
   * Range: minimum 0.
   */
  employeeCount?: number;
  /**
   * Canonical Facebook page URL.
   * Format: uri.
   */
  facebookUrl?: string;
  /**
   * Year the organization was founded.
   */
  foundedYear?: number;
  /**
   * Stable organization identifier.
   */
  id: string;
  /**
   * Organization logo URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Industries associated with the organization.
   */
  industries?: string[];
  /**
   * Primary industry.
   */
  industry?: string;
  /**
   * Keywords associated with the organization.
   */
  keywords?: string[];
  /**
   * Canonical LinkedIn company URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * NAICS industry codes.
   */
  naicsCodes?: string[];
  /**
   * Organization name.
   */
  name: string;
  /**
   * Headquarters postal code.
   */
  postalCode?: string;
  /**
   * SIC industry codes.
   */
  sicCodes?: string[];
  /**
   * Headquarters state or region.
   */
  state?: string;
  /**
   * Street address.
   */
  streetAddress?: string;
  /**
   * Canonical X or Twitter profile URL.
   * Format: uri.
   */
  twitterUrl?: string;
  /**
   * Canonical organization website URL.
   * Format: uri.
   */
  websiteUrl?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Apollo Bulk Organization Enrichment (apollo.organizations_bulk_enrich).
 */
export interface ApolloOrganizationsBulkEnrichData {
  /**
   * Number of uniquely enriched organizations.
   * Range: minimum 0.
   */
  enriched: number;
  /**
   * Number of requested domains without a match.
   * Range: minimum 0.
   */
  missing: number;
  /**
   * Enriched organizations.
   */
  organizations: ApolloOrganizationsBulkEnrichOrganization[];
  /**
   * Number of requested domains.
   * Range: minimum 0.
   */
  requested: number;
}

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

export interface ApolloOrganizationsSearchOrganization {
  /**
   * Estimated annual revenue in USD.
   * Range: minimum 0.
   */
  annualRevenue?: number;
  /**
   * Human-readable estimated annual revenue.
   */
  annualRevenueDisplay?: string;
  /**
   * Primary organization domain.
   */
  domain?: string;
  /**
   * Canonical Facebook page URL.
   * Format: uri.
   */
  facebookUrl?: string;
  /**
   * Year the organization was founded.
   */
  foundedYear?: number;
  /**
   * Stable organization identifier.
   */
  id: string;
  /**
   * Organization logo URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Canonical LinkedIn company URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * NAICS industry codes.
   */
  naicsCodes?: string[];
  /**
   * Organization name.
   */
  name: string;
  /**
   * SIC industry codes.
   */
  sicCodes?: string[];
  /**
   * Canonical X or Twitter profile URL.
   * Format: uri.
   */
  twitterUrl?: string;
  /**
   * Canonical organization website URL.
   * Format: uri.
   */
  websiteUrl?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Apollo Organization Search (apollo.organizations_search).
 */
export interface ApolloOrganizationsSearchData {
  /**
   * Page size returned by the upstream database.
   * Range: minimum 0.
   */
  limit: number;
  /**
   * Organizations on this page.
   */
  organizations: ApolloOrganizationsSearchOrganization[];
  /**
   * One-based page returned.
   * Range: minimum 1.
   */
  page: number;
  /**
   * Total matching organizations.
   * Range: minimum 0.
   */
  total: number;
  /**
   * Total available pages.
   * Range: minimum 0.
   */
  totalPages: number;
}

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

export interface ApolloPeopleSearchPeople {
  /**
   * Person first name.
   */
  firstName: string;
  /**
   * Whether city data is available through enrichment.
   */
  hasCity?: boolean;
  /**
   * Whether country data is available through enrichment.
   */
  hasCountry?: boolean;
  /**
   * Whether direct phone data is available through asynchronous enrichment.
   */
  hasDirectPhone?: boolean;
  /**
   * Whether an email is available through enrichment.
   */
  hasEmail?: boolean;
  /**
   * Whether state or region data is available through enrichment.
   */
  hasState?: boolean;
  /**
   * Stable person identifier.
   */
  id: string;
  /**
   * Obfuscated last-name initial.
   */
  lastNameInitial?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  lastRefreshedUtc?: number;
  /**
   * Availability summary for the current organization.
   */
  organization?: {
    /**
     * Whether organization city data is available.
     */
    hasCity?: boolean;
    /**
     * Whether organization country data is available.
     */
    hasCountry?: boolean;
    /**
     * Whether organization employee-count data is available.
     */
    hasEmployeeCount?: boolean;
    /**
     * Whether industry data is available.
     */
    hasIndustry?: boolean;
    /**
     * Whether an organization phone is available.
     */
    hasPhone?: boolean;
    /**
     * Whether organization postal-code data is available.
     */
    hasPostalCode?: boolean;
    /**
     * Whether organization revenue data is available.
     */
    hasRevenue?: boolean;
    /**
     * Whether organization state data is available.
     */
    hasState?: boolean;
    /**
     * Current organization name.
     */
    name?: string;
  };
  /**
   * Current job title.
   */
  title?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Apollo People Search (apollo.people_search).
 */
export interface ApolloPeopleSearchData {
  /**
   * People on this result page.
   */
  people: ApolloPeopleSearchPeople[];
  /**
   * Total matching people.
   * Range: minimum 0.
   */
  total: number;
}

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

export interface ApolloPersonEnrichEmploymentHistory {
  /**
   * Whether this is a current role.
   */
  current?: boolean;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  endUtc?: number;
  /**
   * Stable employment record identifier.
   */
  id: string;
  /**
   * Organization identifier.
   */
  organizationId?: string;
  /**
   * Organization name.
   */
  organizationName?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  startUtc?: number;
  /**
   * Role title.
   */
  title?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Apollo Person Enrichment (apollo.person_enrich).
 */
export interface ApolloPersonEnrichData {
  /**
   * City.
   */
  city?: string;
  /**
   * Country.
   */
  country?: string;
  /**
   * Current departments.
   */
  departments?: string[];
  /**
   * Available work email.
   * Format: email.
   */
  email?: string;
  /**
   * Verification status of the work email.
   */
  emailStatus?: string;
  /**
   * Known employment history.
   */
  employmentHistory?: ApolloPersonEnrichEmploymentHistory[];
  /**
   * Canonical Facebook profile URL.
   * Format: uri.
   */
  facebookUrl?: string;
  /**
   * Person first name.
   */
  firstName: string;
  /**
   * Current business functions.
   */
  functions?: string[];
  /**
   * Canonical GitHub profile URL.
   * Format: uri.
   */
  githubUrl?: string;
  /**
   * Professional headline.
   */
  headline?: string;
  /**
   * Stable person identifier.
   */
  id: string;
  /**
   * Profile image URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Person last name.
   */
  lastName: string;
  /**
   * Canonical LinkedIn profile URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Full person name.
   */
  name: string;
  /**
   * Current organization summary.
   */
  organization?: {
    /**
     * Headquarters city.
     */
    city?: string;
    /**
     * Headquarters country.
     */
    country?: string;
    /**
     * Primary organization domain.
     */
    domain?: string;
    /**
     * Estimated employee count.
     * Range: minimum 0.
     */
    employeeCount?: number;
    /**
     * Stable organization identifier.
     */
    id: string;
    /**
     * Organization logo URL.
     * Format: uri.
     */
    image?: string;
    /**
     * Primary industry.
     */
    industry?: string;
    /**
     * Canonical LinkedIn company URL.
     * Format: uri.
     */
    linkedinUrl?: string;
    /**
     * Organization name.
     */
    name: string;
    /**
     * Headquarters state or region.
     */
    state?: string;
    /**
     * Canonical organization website URL.
     * Format: uri.
     */
    websiteUrl?: string;
  };
  /**
   * Available personal email addresses, included automatically.
   */
  personalEmails?: string[];
  /**
   * Postal code.
   */
  postalCode?: string;
  /**
   * Current seniority classification.
   */
  seniority?: string;
  /**
   * State or region.
   */
  state?: string;
  /**
   * Street address.
   */
  streetAddress?: string;
  /**
   * Current subdepartments.
   */
  subdepartments?: string[];
  /**
   * IANA time-zone identifier.
   */
  timeZone?: string;
  /**
   * Current job title.
   */
  title?: string;
  /**
   * Canonical X or Twitter profile URL.
   * Format: uri.
   */
  twitterUrl?: string;
  [extra: string]: unknown;
}

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
  ): Promise<RunResult<ApolloOrganizationData>> {
    return this._core.run("apollo.organization", input, options);
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
  ): Promise<RunResult<ApolloOrganizationEnrichData>> {
    return this._core.run("apollo.organization_enrich", input, options);
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
  ): Promise<RunResult<ApolloOrganizationJobsData>> {
    return this._core.run("apollo.organization_jobs", input, options);
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
  ): Promise<RunResult<ApolloOrganizationNewsData>> {
    return this._core.run("apollo.organization_news", input, options);
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
  ): Promise<RunResult<ApolloOrganizationsBulkEnrichData>> {
    return this._core.run("apollo.organizations_bulk_enrich", input, options);
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
  ): Promise<RunResult<ApolloOrganizationsSearchData>> {
    return this._core.run("apollo.organizations_search", input, options);
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
  ): Promise<RunResult<ApolloPeopleSearchData>> {
    return this._core.run("apollo.people_search", input, options);
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
  ): Promise<RunResult<ApolloPersonEnrichData>> {
    return this._core.run("apollo.person_enrich", input, options);
  }
}
