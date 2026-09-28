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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Organization identifier returned by an Apollo organization endpoint.
   */
  organizationId: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface ApolloOrganizationEmployeeMetric {
  /**
   * Headcount flow per department in the month.
   */
  departments?: ApolloOrganizationDepartment[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  startUtc?: number;
  [extra: string]: unknown;
}

export interface ApolloOrganizationDepartment {
  /**
   * People who left the department in the month.
   * Range: minimum 0.
   */
  churned?: number;
  /**
   * Apollo department name. Absent on the row Apollo does not attribute to a department.
   */
  department?: string;
  /**
   * People who joined the department in the month.
   * Range: minimum 0.
   */
  new?: number;
  /**
   * People who stayed in the department through the month.
   * Range: minimum 0.
   */
  retained?: number;
  [extra: string]: unknown;
}

export interface ApolloOrganizationFundingEvent {
  /**
   * Amount raised in this round as Apollo displays it, such as 100M.
   */
  amountDisplay?: string;
  /**
   * Currency symbol of the amount, such as $.
   */
  currency?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  detectedUtc?: number;
  /**
   * Funding round identifier.
   */
  id?: string;
  /**
   * Investors in this round as one comma-separated string, exactly as Apollo returns it. A single investor name can itself contain a comma.
   */
  investors?: string;
  /**
   * Article reporting the round.
   * Format: uri.
   */
  newsUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  raisedUtc?: number;
  /**
   * Funding round type, such as Series D.
   */
  type?: string;
  [extra: string]: unknown;
}

export interface ApolloOrganizationSuborganization {
  /**
   * Headquarters country.
   */
  country?: string;
  /**
   * Estimated employee count.
   * Range: minimum 0.
   */
  employeeCount?: number;
  /**
   * Organization identifier.
   */
  id?: string;
  /**
   * Industries associated with the organization.
   */
  industries?: string[];
  /**
   * Organization name.
   */
  name?: string;
  /**
   * Canonical organization website URL.
   * Format: uri.
   */
  websiteUrl?: string;
  [extra: string]: unknown;
}

export interface ApolloOrganizationTechnologie {
  /**
   * Technology category.
   */
  category?: string;
  /**
   * Technology identifier, accepted by the technologySlug filters of apollo.organizations_search and apollo.people_search.
   */
  id?: string;
  /**
   * Technology name.
   */
  name?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Apollo Organization (apollo.organization).
 */
export interface ApolloOrganizationData {
  /**
   * Alexa global traffic rank of the organization website.
   */
  alexaRanking?: number;
  /**
   * Canonical AngelList profile URL.
   * Format: uri.
   */
  angellistUrl?: string;
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
   * Canonical Crunchbase profile URL.
   * Format: uri.
   */
  crunchbaseUrl?: string;
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
   * Monthly headcount flow per department.
   */
  employeeMetrics?: ApolloOrganizationEmployeeMetric[];
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
   * Funding rounds Apollo records for the organization.
   */
  fundingEvents?: ApolloOrganizationFundingEvent[];
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
   * Apollo industry tag identifier of the primary industry, accepted by apollo.organizations_search industryIds.
   */
  industryTagId?: string;
  /**
   * Apollo industry tag identifier for each industry, keyed by industry name. The identifiers are accepted by apollo.organizations_search industryIds.
   */
  industryTagIds?: {};
  /**
   * Keywords associated with the organization.
   */
  keywords?: string[];
  /**
   * Languages the organization operates in.
   */
  languages?: string[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  latestFundingDetectedUtc?: number;
  /**
   * Latest disclosed funding stage.
   */
  latestFundingStage?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  latestFundingUtc?: number;
  /**
   * Organization LinkedIn numeric id.
   */
  linkedinId?: string;
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
   * Apollo person identifiers at the top of the organization's org chart, accepted by apollo.person_enrich personId.
   */
  orgChartRootPersonIds?: string[];
  /**
   * Identifier of the organization that owns this one.
   */
  parentOrganizationId?: string;
  /**
   * Name of the organization that owns this one.
   */
  parentOrganizationName?: string;
  /**
   * Website URL of the organization that owns this one.
   * Format: uri.
   */
  parentOrganizationWebsiteUrl?: string;
  /**
   * Organization phone number in international format.
   */
  phone?: string;
  /**
   * Headquarters postal code.
   */
  postalCode?: string;
  /**
   * Exchange the company lists on, such as nyse.
   */
  publiclyTradedExchange?: string;
  /**
   * Stock ticker, for listed companies.
   */
  publiclyTradedSymbol?: string;
  /**
   * Headquarters address as one display string.
   */
  rawAddress?: string;
  /**
   * Number of retail locations Apollo records for the organization.
   * Range: minimum 0.
   */
  retailLocationCount?: number;
  /**
   * Organization phone number in international E.164 form, such as +14152985539.
   */
  sanitizedPhone?: string;
  /**
   * Industries associated with the organization besides the primary industry.
   */
  secondaryIndustries?: string[];
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
   * Number of related organizations Apollo lists under this one.
   * Range: minimum 0.
   */
  suborganizationCount?: number;
  /**
   * Related organizations Apollo lists under this one, usually subsidiaries or acquisitions.
   */
  suborganizations?: ApolloOrganizationSuborganization[];
  /**
   * Technologies detected at the organization, with their category.
   */
  technologies?: ApolloOrganizationTechnologie[];
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Organization domain without a path, such as apollo.io.
   */
  domain: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * LinkedIn company page URL, which Apollo also matches on.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Organization name, which improves match accuracy.
   */
  name?: string;
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
   * Full website URL, which Apollo also matches on.
   */
  website?: string;
}

export interface ApolloOrganizationEnrichFundingEvent {
  /**
   * Amount raised in this round as Apollo displays it, such as 100M.
   */
  amountDisplay?: string;
  /**
   * Currency symbol of the amount, such as $.
   */
  currency?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  detectedUtc?: number;
  /**
   * Funding round identifier.
   */
  id?: string;
  /**
   * Investors in this round as one comma-separated string, exactly as Apollo returns it. A single investor name can itself contain a comma.
   */
  investors?: string;
  /**
   * Article reporting the round.
   * Format: uri.
   */
  newsUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  raisedUtc?: number;
  /**
   * Funding round type, such as Series D.
   */
  type?: string;
  [extra: string]: unknown;
}

export interface ApolloOrganizationEnrichSuborganization {
  /**
   * Headquarters country.
   */
  country?: string;
  /**
   * Estimated employee count.
   * Range: minimum 0.
   */
  employeeCount?: number;
  /**
   * Organization identifier.
   */
  id?: string;
  /**
   * Industries associated with the organization.
   */
  industries?: string[];
  /**
   * Organization name.
   */
  name?: string;
  /**
   * Canonical organization website URL.
   * Format: uri.
   */
  websiteUrl?: string;
  [extra: string]: unknown;
}

export interface ApolloOrganizationEnrichTechnologie {
  /**
   * Technology category.
   */
  category?: string;
  /**
   * Technology identifier, accepted by the technologySlug filters of apollo.organizations_search and apollo.people_search.
   */
  id?: string;
  /**
   * Technology name.
   */
  name?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Apollo Organization Enrichment (apollo.organization_enrich).
 */
export interface ApolloOrganizationEnrichData {
  /**
   * Alexa global traffic rank of the organization website.
   */
  alexaRanking?: number;
  /**
   * Canonical AngelList profile URL.
   * Format: uri.
   */
  angellistUrl?: string;
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
   * Canonical Crunchbase profile URL.
   * Format: uri.
   */
  crunchbaseUrl?: string;
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
   * Headcount change over trailing windows, in percent.
   */
  employeeGrowth?: {
    /**
     * Percent change over the last twelve months.
     */
    percent12m?: number;
    /**
     * Percent change over the last twenty-four months.
     */
    percent24m?: number;
    /**
     * Percent change over the last six months.
     */
    percent6m?: number;
  };
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
   * Funding rounds Apollo records for the organization.
   */
  fundingEvents?: ApolloOrganizationEnrichFundingEvent[];
  /**
   * Employee count per department, keyed by Apollo department name.
   */
  headcountByRole?: {};
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
   * Apollo industry tag identifier of the primary industry, accepted by apollo.organizations_search industryIds.
   */
  industryTagId?: string;
  /**
   * Apollo industry tag identifier for each industry, keyed by industry name. The identifiers are accepted by apollo.organizations_search industryIds.
   */
  industryTagIds?: {};
  /**
   * Keywords associated with the organization.
   */
  keywords?: string[];
  /**
   * Languages the organization operates in.
   */
  languages?: string[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  latestFundingDetectedUtc?: number;
  /**
   * Latest disclosed funding stage.
   */
  latestFundingStage?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  latestFundingUtc?: number;
  /**
   * Organization LinkedIn numeric id.
   */
  linkedinId?: string;
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
   * Apollo person identifiers at the top of the organization's org chart, accepted by apollo.person_enrich personId.
   */
  orgChartRootPersonIds?: string[];
  /**
   * Identifier of the organization that owns this one.
   */
  parentOrganizationId?: string;
  /**
   * Organization phone number in international format.
   */
  phone?: string;
  /**
   * Headquarters postal code.
   */
  postalCode?: string;
  /**
   * Exchange the company lists on, such as nyse.
   */
  publiclyTradedExchange?: string;
  /**
   * Stock ticker, for listed companies.
   */
  publiclyTradedSymbol?: string;
  /**
   * Headquarters address as one display string.
   */
  rawAddress?: string;
  /**
   * Number of retail locations Apollo records for the organization.
   * Range: minimum 0.
   */
  retailLocationCount?: number;
  /**
   * Organization phone number in international E.164 form, such as +14152985539.
   */
  sanitizedPhone?: string;
  /**
   * Industries associated with the organization besides the primary industry.
   */
  secondaryIndustries?: string[];
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
   * Number of related organizations Apollo lists under this one.
   * Range: minimum 0.
   */
  suborganizationCount?: number;
  /**
   * Related organizations Apollo lists under this one, usually subsidiaries or acquisitions.
   */
  suborganizations?: ApolloOrganizationEnrichSuborganization[];
  /**
   * Technologies detected at the organization, with their category.
   */
  technologies?: ApolloOrganizationEnrichTechnologie[];
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum job postings returned on this page.
   * Range: minimum 1.
   */
  limit?: number;
  /**
   * Organization identifier returned by an Apollo organization endpoint.
   */
  organizationId: string;
  /**
   * One-based result page.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * News categories or sub-categories to match, such as hires, investment or contract.
   */
  categories?: string[];
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Only articles published on or after this date. Format: YYYY-MM-DD.
   * Format: date.
   */
  publishedAtGte?: string;
  /**
   * Only articles published on or before this date. Format: YYYY-MM-DD.
   * Format: date.
   */
  publishedAtLte?: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Organization domains to enrich, with at most 10 domains per request.
   */
  domains: string[];
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
}

/**
 * The enriched organization for the domain at this index, or null when that domain had no match.
 */
export interface ApolloOrganizationsBulkEnrichOrganization {
  /**
   * Alexa global traffic rank of the organization website.
   */
  alexaRanking?: number;
  /**
   * Canonical AngelList profile URL.
   * Format: uri.
   */
  angellistUrl?: string;
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
   * Canonical Crunchbase profile URL.
   * Format: uri.
   */
  crunchbaseUrl?: string;
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
   * Headcount change over trailing windows, in percent.
   */
  employeeGrowth?: {
    /**
     * Percent change over the last twelve months.
     */
    percent12m?: number;
    /**
     * Percent change over the last twenty-four months.
     */
    percent24m?: number;
    /**
     * Percent change over the last six months.
     */
    percent6m?: number;
  };
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
   * Funding rounds Apollo records for the organization.
   */
  fundingEvents?: ApolloOrganizationsBulkEnrichFundingEvent[];
  /**
   * Employee count per department, keyed by Apollo department name.
   */
  headcountByRole?: {};
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
   * Apollo industry tag identifier of the primary industry, accepted by apollo.organizations_search industryIds.
   */
  industryTagId?: string;
  /**
   * Apollo industry tag identifier for each industry, keyed by industry name. The identifiers are accepted by apollo.organizations_search industryIds.
   */
  industryTagIds?: {};
  /**
   * Keywords associated with the organization.
   */
  keywords?: string[];
  /**
   * Languages the organization operates in.
   */
  languages?: string[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  latestFundingDetectedUtc?: number;
  /**
   * Latest disclosed funding stage.
   */
  latestFundingStage?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  latestFundingUtc?: number;
  /**
   * Organization LinkedIn numeric id.
   */
  linkedinId?: string;
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
   * Identifiers of the organizations in this organization's ownership chain.
   */
  ownershipChainIds?: string[];
  /**
   * Identifier of the organization that owns this one.
   */
  parentOrganizationId?: string;
  /**
   * Name of the organization that owns this one.
   */
  parentOrganizationName?: string;
  /**
   * Website URL of the organization that owns this one.
   * Format: uri.
   */
  parentOrganizationWebsiteUrl?: string;
  /**
   * Organization phone number in international format.
   */
  phone?: string;
  /**
   * Headquarters postal code.
   */
  postalCode?: string;
  /**
   * Exchange the company lists on, such as nyse.
   */
  publiclyTradedExchange?: string;
  /**
   * Stock ticker, for listed companies.
   */
  publiclyTradedSymbol?: string;
  /**
   * Headquarters address as one display string.
   */
  rawAddress?: string;
  /**
   * Number of retail locations Apollo records for the organization.
   * Range: minimum 0.
   */
  retailLocationCount?: number;
  /**
   * Organization phone number in international E.164 form, such as +14152985539.
   */
  sanitizedPhone?: string;
  /**
   * Industries associated with the organization besides the primary industry.
   */
  secondaryIndustries?: string[];
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
   * Number of related organizations Apollo lists under this one.
   * Range: minimum 0.
   */
  suborganizationCount?: number;
  /**
   * Countries Apollo rolls up across the organization's corporate family.
   */
  subsidiaryCountries?: string[];
  /**
   * Estimated employee count Apollo rolls up across the organization's corporate family.
   * Range: minimum 0.
   */
  subsidiaryEmployeeCount?: number;
  /**
   * Industries Apollo rolls up across the organization's corporate family.
   */
  subsidiaryIndustries?: string[];
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
   * Identifier of the top organization in this organization's ownership chain.
   */
  ultimateParentOrganizationId?: string;
  /**
   * Name of the top organization in this organization's ownership chain.
   */
  ultimateParentOrganizationName?: string;
  /**
   * Website URL of the top organization in this organization's ownership chain.
   * Format: uri.
   */
  ultimateParentOrganizationWebsiteUrl?: string;
  /**
   * Canonical organization website URL.
   * Format: uri.
   */
  websiteUrl?: string;
  [extra: string]: unknown;
}

export interface ApolloOrganizationsBulkEnrichFundingEvent {
  /**
   * Amount raised in this round as Apollo displays it, such as 100M.
   */
  amountDisplay?: string;
  /**
   * Currency symbol of the amount, such as $.
   */
  currency?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  detectedUtc?: number;
  /**
   * Funding round identifier.
   */
  id?: string;
  /**
   * Investors in this round as one comma-separated string, exactly as Apollo returns it. A single investor name can itself contain a comma.
   */
  investors?: string;
  /**
   * Article reporting the round.
   * Format: uri.
   */
  newsUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  raisedUtc?: number;
  /**
   * Funding round type, such as Series D.
   */
  type?: string;
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
   * Enriched organizations, positionally aligned with the requested domains: index i of this array is the result for index i of the domains input, and the array is always the same length as that input. An entry is null when the domain had no match, so a partial batch still returns every domain it did resolve.
   */
  organizations: (ApolloOrganizationsBulkEnrichOrganization | null)[];
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Organization domains to match, without www, at most 1000.
   */
  domains?: string[];
  /**
   * Employee-count ranges in Apollo notation, such as 51,200.
   */
  employeeRanges?: string[];
  /**
   * Exclude organizations matching any of these domains. Every domain Apollo holds for that organization is excluded.
   */
  excludeDomains?: string[];
  /**
   * Headquarters locations to exclude, such as ireland.
   */
  excludeLocations?: string[];
  /**
   * Trailing window in months for the headcount growth filter. Takes effect only together with minHeadcountGrowthPercent or maxHeadcountGrowthPercent.
   */
  headcountGrowthMonths?: number;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Apollo industry tag identifiers to match.
   */
  industryIds?: string[];
  /**
   * Only organizations with a job posted on or after this date. Format: YYYY-MM-DD.
   * Format: date.
   */
  jobPostedAtGte?: string;
  /**
   * Only organizations with a job posted on or before this date. Format: YYYY-MM-DD.
   * Format: date.
   */
  jobPostedAtLte?: string;
  /**
   * Locations of the organization's active job postings, such as japan.
   */
  jobPostingLocations?: string[];
  /**
   * Job titles listed in the organization's active job postings, such as sales manager.
   */
  jobPostingTitles?: string[];
  /**
   * Keywords associated with the organization, such as mining or consulting.
   */
  keywordTags?: string[];
  /**
   * Keywords to match across organization records.
   */
  keywords?: string;
  /**
   * Only organizations whose most recent funding round is on or after this date. Format: YYYY-MM-DD.
   * Format: date.
   */
  lastFundingRoundDateGte?: string;
  /**
   * Only organizations whose most recent funding round is on or before this date. Format: YYYY-MM-DD.
   * Format: date.
   */
  lastFundingRoundDateLte?: string;
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
   * Apollo organization identifiers to use as lookalike seeds, at most five. Results are narrowed to organizations similar to the seeds, and the seeds themselves are excluded. A seed Apollo holds no lookalike data for returns no results.
   */
  lookalikeOrganizationIds?: string[];
  /**
   * Maximum total funding across all rounds, in whole USD.
   */
  maxFundingUsd?: number;
  /**
   * Maximum organization headcount growth over headcountGrowthMonths, as a whole percentage such as 100 for 100%.
   */
  maxHeadcountGrowthPercent?: number;
  /**
   * Maximum number of active job postings at the organization.
   */
  maxJobs?: number;
  /**
   * Maximum amount raised in the most recent funding round, in whole USD.
   */
  maxLatestFundingUsd?: number;
  /**
   * Maximum organization annual revenue, in whole USD with no symbols.
   */
  maxRevenueUsd?: number;
  /**
   * Minimum total funding across all rounds, in whole USD.
   */
  minFundingUsd?: number;
  /**
   * Minimum organization headcount growth over headcountGrowthMonths, as a whole percentage such as 10 for 10%. Negative values are accepted.
   */
  minHeadcountGrowthPercent?: number;
  /**
   * Minimum number of active job postings at the organization.
   */
  minJobs?: number;
  /**
   * Minimum amount raised in the most recent funding round, in whole USD.
   */
  minLatestFundingUsd?: number;
  /**
   * Minimum organization annual revenue, in whole USD with no symbols.
   */
  minRevenueUsd?: number;
  /**
   * Organization name to match; partial matches count.
   */
  name?: string;
  /**
   * Apollo organization identifiers to match.
   */
  organizationIds?: string[];
  /**
   * One-based result page.
   * Range: minimum 1, maximum 500.
   * Default: 1.
   */
  page?: number;
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
   * Only organizations that use ANY of these technologies. Apollo technology identifiers, such as salesforce or google_analytics (spaces and periods become underscores). The technologies output of the Apollo organization SKUs returns them as id.
   */
  technologySlugOr?: string[];
}

export interface ApolloOrganizationsSearchOrganization {
  /**
   * Alexa global traffic rank of the organization website.
   */
  alexaRanking?: number;
  /**
   * Canonical AngelList profile URL.
   * Format: uri.
   */
  angellistUrl?: string;
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
   * Canonical Crunchbase profile URL.
   * Format: uri.
   */
  crunchbaseUrl?: string;
  /**
   * Primary organization domain.
   */
  domain?: string;
  /**
   * Headcount change over trailing windows, in percent.
   */
  employeeGrowth?: {
    /**
     * Percent change over the last twelve months.
     */
    percent12m?: number;
    /**
     * Percent change over the last twenty-four months.
     */
    percent24m?: number;
    /**
     * Percent change over the last six months.
     */
    percent6m?: number;
  };
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
   * Languages the organization operates in.
   */
  languages?: string[];
  /**
   * Organization LinkedIn numeric id.
   */
  linkedinId?: string;
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
   * Identifiers of the organizations in this organization's ownership chain.
   */
  ownershipChainIds?: string[];
  /**
   * Identifier of the organization that owns this one.
   */
  parentOrganizationId?: string;
  /**
   * Name of the organization that owns this one.
   */
  parentOrganizationName?: string;
  /**
   * Website URL of the organization that owns this one.
   * Format: uri.
   */
  parentOrganizationWebsiteUrl?: string;
  /**
   * Organization phone number in international format.
   */
  phone?: string;
  /**
   * Exchange the company lists on, such as nyse.
   */
  publiclyTradedExchange?: string;
  /**
   * Stock ticker, for listed companies.
   */
  publiclyTradedSymbol?: string;
  /**
   * Number of retail locations Apollo records for the organization.
   * Range: minimum 0.
   */
  retailLocationCount?: number;
  /**
   * Organization phone number in international E.164 form, such as +14152985539.
   */
  sanitizedPhone?: string;
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Email statuses to match.
   */
  emailStatuses?: (
    "verified" | "unverified" | "likely to engage" | "unavailable"
  )[];
  /**
   * Organization employee-count ranges in Apollo notation, such as 51,200.
   */
  employeeRanges?: string[];
  /**
   * Exclude people whose current employer matches any of these domains. Every domain Apollo holds for that employer is excluded.
   */
  excludeOrganizationDomains?: string[];
  /**
   * Trailing window in months for the headcount growth filter. Takes effect only together with minHeadcountGrowthPercent or maxHeadcountGrowthPercent.
   */
  headcountGrowthMonths?: number;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Whether titles similar to the ones in titles also match. Set false for strict title matches only.
   */
  includeSimilarTitles?: boolean;
  /**
   * Only organizations with a job posted on or after this date. Format: YYYY-MM-DD.
   * Format: date.
   */
  jobPostedAtGte?: string;
  /**
   * Only organizations with a job posted on or before this date. Format: YYYY-MM-DD.
   * Format: date.
   */
  jobPostedAtLte?: string;
  /**
   * Locations of the organization's active job postings, such as japan.
   */
  jobPostingLocations?: string[];
  /**
   * Job titles listed in the organization's active job postings, such as sales manager.
   */
  jobPostingTitles?: string[];
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
   * Apollo organization identifiers to use as lookalike seeds, at most five. Results are narrowed to organizations similar to the seeds, and the seeds themselves are excluded. A seed Apollo holds no lookalike data for returns no results.
   */
  lookalikeOrganizationIds?: string[];
  /**
   * Maximum organization headcount growth over headcountGrowthMonths, as a whole percentage such as 100 for 100%.
   */
  maxHeadcountGrowthPercent?: number;
  /**
   * Maximum number of active job postings at the organization.
   */
  maxJobs?: number;
  /**
   * Maximum organization annual revenue, in whole USD with no symbols.
   */
  maxRevenueUsd?: number;
  /**
   * Minimum organization headcount growth over headcountGrowthMonths, as a whole percentage such as 10 for 10%. Negative values are accepted.
   */
  minHeadcountGrowthPercent?: number;
  /**
   * Minimum number of active job postings at the organization.
   */
  minJobs?: number;
  /**
   * Minimum organization annual revenue, in whole USD with no symbols.
   */
  minRevenueUsd?: number;
  /**
   * Domains of the person's current or previous employer, without www, at most 1000.
   */
  organizationDomains?: string[];
  /**
   * Apollo identifiers of the person's current employer.
   */
  organizationIds?: string[];
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
   * Person name to match; results include people whose name contains every word.
   */
  personName?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
    | "intern"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Only people whose current employer uses ALL of these technologies. Apollo technology identifiers, such as salesforce or google_analytics (spaces and periods become underscores). The technologies output of the Apollo organization SKUs returns them as id.
   */
  technologySlugAnd?: string[];
  /**
   * Exclude people whose current employer uses any of these technologies. Apollo technology identifiers, such as salesforce or google_analytics (spaces and periods become underscores). The technologies output of the Apollo organization SKUs returns them as id.
   */
  technologySlugNot?: string[];
  /**
   * Only people whose current employer uses ANY of these technologies. Apollo technology identifiers, such as salesforce or google_analytics (spaces and periods become underscores). The technologies output of the Apollo organization SKUs returns them as id.
   */
  technologySlugOr?: string[];
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * MD5 or SHA-256 hash of the person's email, used to identify the person.
   */
  emailHash?: string;
  /**
   * Person first name, used with lastName and an organization identifier.
   */
  firstName?: string;
  /**
   * Person full name, used with an organization identifier instead of firstName and lastName.
   */
  fullName?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
  /**
   * Apollo person identifier, such as an id returned by apollo.people_search.
   */
  personId?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Whether to include personal emails. Apollo withholds them for people in GDPR regions.
   * Default: true.
   */
  revealPersonalEmails?: boolean;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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

export interface ApolloPersonEnrichFundingEvent {
  /**
   * Amount raised in this round as Apollo displays it, such as 100M.
   */
  amountDisplay?: string;
  /**
   * Currency symbol of the amount, such as $.
   */
  currency?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  detectedUtc?: number;
  /**
   * Funding round identifier.
   */
  id?: string;
  /**
   * Investors in this round as one comma-separated string, exactly as Apollo returns it. A single investor name can itself contain a comma.
   */
  investors?: string;
  /**
   * Article reporting the round.
   * Format: uri.
   */
  newsUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  raisedUtc?: number;
  /**
   * Funding round type, such as Series D.
   */
  type?: string;
  [extra: string]: unknown;
}

export interface ApolloPersonEnrichSuborganization {
  /**
   * Headquarters country.
   */
  country?: string;
  /**
   * Estimated employee count.
   * Range: minimum 0.
   */
  employeeCount?: number;
  /**
   * Organization identifier.
   */
  id?: string;
  /**
   * Industries associated with the organization.
   */
  industries?: string[];
  /**
   * Organization name.
   */
  name?: string;
  /**
   * Canonical organization website URL.
   * Format: uri.
   */
  websiteUrl?: string;
  [extra: string]: unknown;
}

export interface ApolloPersonEnrichTechnologie {
  /**
   * Technology category.
   */
  category?: string;
  /**
   * Technology identifier, accepted by the technologySlug filters of apollo.organizations_search and apollo.people_search.
   */
  id?: string;
  /**
   * Technology name.
   */
  name?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Apollo Person Enrichment (apollo.person_enrich).
 */
export interface ApolloPersonEnrichData {
  /**
   * Full address as one display string.
   */
  address?: string;
  /**
   * Domain accepts all addresses.
   */
  catchAll?: boolean;
  /**
   * Apollo's verdict on the catch-all email domain, such as allow.
   */
  catchAllVerdict?: string;
  /**
   * City.
   */
  city?: string;
  /**
   * Apollo match confidence for this person: high, medium or low.
   */
  confidence?: string;
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
     * Alexa global traffic rank of the organization website.
     */
    alexaRanking?: number;
    /**
     * Canonical AngelList profile URL.
     * Format: uri.
     */
    angellistUrl?: string;
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
     * Canonical Crunchbase profile URL.
     * Format: uri.
     */
    crunchbaseUrl?: string;
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
     * Headcount change over trailing windows, in percent.
     */
    employeeGrowth?: {
      /**
       * Percent change over the last twelve months.
       */
      percent12m?: number;
      /**
       * Percent change over the last twenty-four months.
       */
      percent24m?: number;
      /**
       * Percent change over the last six months.
       */
      percent6m?: number;
    };
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
     * Funding rounds Apollo records for the organization.
     */
    fundingEvents?: ApolloPersonEnrichFundingEvent[];
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
     * Apollo industry tag identifier of the primary industry, accepted by apollo.organizations_search industryIds.
     */
    industryTagId?: string;
    /**
     * Apollo industry tag identifier for each industry, keyed by industry name. The identifiers are accepted by apollo.organizations_search industryIds.
     */
    industryTagIds?: {};
    /**
     * Keywords associated with the organization.
     */
    keywords?: string[];
    /**
     * Languages the organization operates in.
     */
    languages?: string[];
    /**
     * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
     */
    latestFundingDetectedUtc?: number;
    /**
     * Latest disclosed funding stage.
     */
    latestFundingStage?: string;
    /**
     * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
     */
    latestFundingUtc?: number;
    /**
     * Organization LinkedIn numeric id.
     */
    linkedinId?: string;
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
     * Apollo person identifiers at the top of the organization's org chart, accepted by apollo.person_enrich personId.
     */
    orgChartRootPersonIds?: string[];
    /**
     * Identifier of the organization that owns this one.
     */
    parentOrganizationId?: string;
    /**
     * Organization phone number in international format.
     */
    phone?: string;
    /**
     * Headquarters postal code.
     */
    postalCode?: string;
    /**
     * Exchange the company lists on, such as nyse.
     */
    publiclyTradedExchange?: string;
    /**
     * Stock ticker, for listed companies.
     */
    publiclyTradedSymbol?: string;
    /**
     * Headquarters address as one display string.
     */
    rawAddress?: string;
    /**
     * Number of retail locations Apollo records for the organization.
     * Range: minimum 0.
     */
    retailLocationCount?: number;
    /**
     * Organization phone number in international E.164 form, such as +14152985539.
     */
    sanitizedPhone?: string;
    /**
     * Industries associated with the organization besides the primary industry.
     */
    secondaryIndustries?: string[];
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
     * Number of related organizations Apollo lists under this one.
     * Range: minimum 0.
     */
    suborganizationCount?: number;
    /**
     * Related organizations Apollo lists under this one, usually subsidiaries or acquisitions.
     */
    suborganizations?: ApolloPersonEnrichSuborganization[];
    /**
     * Technologies detected at the organization, with their category.
     */
    technologies?: ApolloPersonEnrichTechnologie[];
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
  };
  /**
   * Identifier of the person's current organization.
   */
  organizationId?: string;
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
   * Get a complete organization profile by ID including company, industry, employee, monthly headcount flow, revenue, funding rounds, ownership, location, and technology data.
   *
   * Price: $0.012 per request.
   *
   * @example
   * const res = await client.apollo.organization({ organizationId: "5fc8de5191bd9400bfc52051" });
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
   * Enrich an organization by domain, optionally with its LinkedIn URL, website, or name, with company profile, industry, headcount growth, department headcount, revenue, funding rounds, location, and technology data.
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
   * Get current job postings for an organization by ID with title, location, source URL, and timestamps, one page at a time.
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
   * Search news related to one or more organizations, optionally by category and publish date range, with article details, categories, and pagination totals.
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
   * Enrich up to 10 organization domains in one request with normalized company profile, industry, employee, revenue, and location data. Priced per request rather than per domain, so a full batch of 10 costs the same as a batch of 1. Results are positionally aligned with the domains you send, and a domain with no match returns null in its slot.
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
   * Search organizations by location, employee range, industry, keywords, domain, name, revenue, funding, technology, hiring activity, headcount growth, or lookalike seeds, with normalized company records and pagination totals.
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
   * Search people by title, seniority, name, location, employer domain or id, email status, and employer revenue, technology, hiring, and headcount growth, with normalized profile summaries.
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
   * Enrich a person by email, email hash, LinkedIn URL, Apollo person id, or name and organization with contact, role, location, and company data.
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
