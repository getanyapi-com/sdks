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
   * Headquarters address as published by the source.
   */
  address?: string;
  /**
   * Headquarters city.
   */
  city?: string;
  /**
   * The source's own record identifier for this company, exposed so you can trace a result back to the record it came from.
   */
  companyId?: string;
  /**
   * Headquarters continent.
   */
  continent?: string;
  /**
   * Headquarters country.
   */
  country?: string;
  /**
   * Company Crunchbase URL.
   * Format: uri.
   */
  crunchbaseUrl?: string;
  /**
   * Company description when available.
   */
  description?: string;
  /**
   * Number of diversity-flagged investments the source records for the company.
   * Range: minimum 0.
   */
  diversityInvestmentCount?: number;
  /**
   * Investments the source has flagged with a diversity spotlight.
   */
  diversityInvestments?: CompanySearchAiArkDiversityInvestment[];
  /**
   * Company website domain, or null when the upstream holds none for this company.
   */
  domain: string | null;
  /**
   * The source's second copy of the company domain. Usually identical to domain; it can differ when the source resolves a redirect or a country domain differently, so compare the two rather than assuming they match.
   */
  domainLtd?: string;
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
   * Upper bound of the published employee range.
   * Range: minimum 0.
   */
  employeeRangeMax?: number;
  /**
   * Lower bound of the published employee range.
   * Range: minimum 0.
   */
  employeeRangeMin?: number;
  /**
   * Canonical company Facebook URL.
   * Format: uri.
   */
  facebookUrl?: string;
  /**
   * Year the company was founded.
   */
  foundedYear?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  fundedUtc?: number;
  /**
   * Amount raised in the most recent round in USD.
   * Range: minimum 0.
   */
  fundingLastAmount?: number;
  /**
   * Type of the most recent funding round.
   */
  fundingLastType?: string;
  /**
   * Number of funding rounds raised.
   * Range: minimum 0.
   */
  fundingRoundCount?: number;
  /**
   * Funding rounds the company has raised.
   */
  fundingRounds?: CompanySearchAiArkFundingRound[];
  /**
   * Total capital raised across all rounds in USD.
   * Range: minimum 0.
   */
  fundingTotalAmount?: number;
  /**
   * Hashtags the company publishes under.
   */
  hashtags?: string[];
  /**
   * Company logo URL. This is a SIGNED, EXPIRING image-proxy URL - the path carries an exp: epoch roughly five days out - so fetch and store the image promptly rather than storing this URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Additional company industries.
   */
  industries?: string[];
  /**
   * Primary company industry.
   */
  industry?: string;
  /**
   * Number of distinct investors.
   * Range: minimum 0.
   */
  investorCount?: number;
  /**
   * Keywords describing the company.
   */
  keywords?: string[];
  /**
   * Languages the company publishes in.
   */
  languages?: string[];
  /**
   * Headquarters latitude in decimal degrees.
   */
  latitude?: number;
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
   * Every office location the source lists for the company.
   */
  locations?: CompanySearchAiArkLocation[];
  /**
   * Headquarters longitude in decimal degrees.
   */
  longitude?: number;
  /**
   * NAICS codes for the company.
   */
  naics?: string[];
  /**
   * Company name.
   */
  name: string;
  /**
   * Longer company overview written by the source. Overlaps description but is a separately maintained blurb and is often longer or more current.
   */
  overview?: string;
  /**
   * Sanitized public company phone number.
   */
  phone?: string;
  /**
   * The same phone number in the source's unsanitized spelling, keeping spaces, dashes and brackets. Use phone for dialing and this for display fidelity.
   */
  phoneRaw?: string;
  /**
   * Headquarters postal code.
   */
  postalCode?: string;
  /**
   * Upper bound of estimated annual revenue in USD.
   * Range: minimum 0.
   */
  revenueMax?: number;
  /**
   * Lower bound of estimated annual revenue in USD.
   * Range: minimum 0.
   */
  revenueMin?: number;
  /**
   * The same annual revenue estimate as a single hyphenated range string, for example 500000000-1000000000. It duplicates revenueMin and revenueMax; use those for arithmetic.
   */
  revenueRange?: string;
  /**
   * The meta description the source scraped from the company website. It is site copy, not the source's own writing, so it may be in another language or out of date.
   */
  seoDescription?: string;
  /**
   * SIC codes for the company.
   */
  sic?: string[];
  /**
   * Headquarters state or region.
   */
  state?: string;
  /**
   * Technologies detected on the company's web presence.
   */
  technologies?: CompanySearchAiArkTechnologie[];
  /**
   * Canonical company X (Twitter) URL.
   * Format: uri.
   */
  twitterUrl?: string;
  /**
   * Company organization type.
   */
  type?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  /**
   * Canonical company website URL.
   * Format: uri.
   */
  websiteUrl?: string;
  [extra: string]: unknown;
}

export interface CompanySearchAiArkDiversityInvestment {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  announcedUtc?: number;
  /**
   * The source's internal image key for the counterparty. It is a bare key, not a URL.
   */
  imageKey?: string;
  /**
   * Counterparty organization name.
   */
  name?: string;
  /**
   * The source's own slug for the counterparty organization.
   */
  recordId?: string;
  /**
   * The source's internal image key for the round. It is a bare key, not a URL.
   */
  roundImageKey?: string;
  /**
   * Funding round name as published by the source.
   */
  roundName?: string;
  /**
   * Amount raised in this round in USD.
   * Range: minimum 0.
   */
  roundRaisedAmount?: number;
  /**
   * The source's own slug for the funding round.
   */
  roundRecordId?: string;
  /**
   * Funding round type, for example GRANT.
   */
  roundType?: string;
  /**
   * Diversity spotlights the source attached to this investment.
   */
  spotlights?: CompanySearchAiArkSpotlight[];
  [extra: string]: unknown;
}

export interface CompanySearchAiArkSpotlight {
  /**
   * Human-readable spotlight label.
   */
  name?: string;
  /**
   * The source's own slug for the spotlight, for example women-founded.
   */
  recordId?: string;
  [extra: string]: unknown;
}

export interface CompanySearchAiArkFundingRound {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  announcedUtc?: number;
  /**
   * Investors named in this round.
   */
  investors?: string[];
  /**
   * Amount raised in this round in USD.
   * Range: minimum 0.
   */
  raisedAmount?: number;
  /**
   * Funding round type.
   */
  type?: string;
  [extra: string]: unknown;
}

export interface CompanySearchAiArkLocation {
  /**
   * Location address as published by the source.
   */
  address?: string;
  /**
   * Location city.
   */
  city?: string;
  /**
   * Location continent.
   */
  continent?: string;
  /**
   * Location country.
   */
  country?: string;
  /**
   * Location latitude in decimal degrees.
   */
  latitude?: number;
  /**
   * Location longitude in decimal degrees.
   */
  longitude?: number;
  /**
   * Location postal code.
   */
  postalCode?: string;
  /**
   * Location state or region.
   */
  state?: string;
  [extra: string]: unknown;
}

export interface CompanySearchAiArkTechnologie {
  /**
   * Technology category.
   */
  category?: string;
  /**
   * Technology name.
   */
  name?: string;
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
   * Crustdata company-database filter expression. A leaf condition is {"filter_type": <column>, "type": <operator>, "value": <match>}; a group is {"op": "and"|"or", "conditions": [<leaf>, ...]}. Pass a single leaf, an array of leaves, or a group. See the example for a domain lookup.
   */
  filters: unknown;
  /**
   * Maximum companies to return on this page. Every company returned is billed; the page is capped at 250 to bound the cost of a single call.
   * Range: minimum 1, maximum 250.
   * Default: 10.
   */
  limit?: number;
  sorts?: CompanySearchCrustdataV3Sort[];
}

export interface CompanySearchCrustdataV3Companie {
  /**
   * Acquisition status, when the company has been acquired.
   */
  acquisitionStatus?: string;
  /**
   * Crustdata identifier for the company, accepted by the Company Enrichment endpoint.
   */
  companyId?: string;
  /**
   * Company type, e.g. Privately Held or Public Company.
   */
  companyType?: string;
  /**
   * Crustdata identifiers for the companies Crustdata lists as competitors. These are the same identifiers companyId reports, returned here as numbers, and line up positionally with competitorWebsites.
   */
  competitorIds?: number[];
  /**
   * Websites of companies Crustdata considers competitors.
   */
  competitorWebsites?: string[];
  /**
   * Publicly listed contact email address.
   */
  contactEmail?: string;
  /**
   * Crunchbase category tags.
   */
  crunchbaseCategories?: string[];
  /**
   * Crunchbase profile URL.
   * Format: uri.
   */
  crunchbaseUrl?: string;
  /**
   * Crunchbase organization UUID.
   */
  crunchbaseUuid?: string;
  /**
   * Company description from its LinkedIn page.
   */
  description?: string;
  /**
   * Primary website domain, or null when the upstream holds none for this company.
   */
  domain?: string | null;
  /**
   * All domains associated with the company.
   */
  domains?: string[];
  /**
   * Latest observed employee count.
   */
  employeeCount?: number;
  /**
   * Headcount change over trailing windows, absolute and percent.
   */
  employeeGrowth?: {
    /**
     * Net change over the last twelve months.
     */
    absolute12m?: number;
    /**
     * Net change over the last month.
     */
    absolute1m?: number;
    /**
     * Net change over the last three months.
     */
    absolute3m?: number;
    /**
     * Net change over the last six months.
     */
    absolute6m?: number;
    /**
     * Percent change over the last twelve months.
     */
    percent12m?: number;
    /**
     * Percent change over the last month.
     */
    percent1m?: number;
    /**
     * Percent change over the last three months.
     */
    percent3m?: number;
    /**
     * Percent change over the last six months.
     */
    percent6m?: number;
  };
  /**
   * Employee count band, e.g. 51-200.
   */
  employeeRange?: string;
  /**
   * Upper bound of estimated annual revenue in USD.
   */
  estimatedRevenueHigherUsd?: number;
  /**
   * Lower bound of estimated annual revenue in USD.
   */
  estimatedRevenueLowerUsd?: number;
  /**
   * Fiscal year end.
   */
  fiscalYearEnd?: string;
  /**
   * Latest LinkedIn follower count.
   */
  followerCount?: number;
  /**
   * LinkedIn follower change over trailing windows, absolute and percent.
   */
  followerGrowth?: {
    /**
     * Net change over the last twelve months.
     */
    absolute12m?: number;
    /**
     * Net change over the last month.
     */
    absolute1m?: number;
    /**
     * Net change over the last three months.
     */
    absolute3m?: number;
    /**
     * Net change over the last six months.
     */
    absolute6m?: number;
    /**
     * Percent change over the last twelve months.
     */
    percent12m?: number;
    /**
     * Percent change over the last month.
     */
    percent1m?: number;
    /**
     * Percent change over the last three months.
     */
    percent3m?: number;
    /**
     * Percent change over the last six months.
     */
    percent6m?: number;
  };
  /**
   * Year the company was founded.
   */
  foundedYear?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the growth metrics on this record were last calculated.
   */
  growthCalculatedUtc?: number;
  /**
   * Employee count per region, keyed by LinkedIn region name.
   */
  headcountByRegion?: {};
  /**
   * Employee count per job function, keyed by LinkedIn function name.
   */
  headcountByRole?: {};
  /**
   * Share of employees per job function as a percent, keyed by LinkedIn function name.
   */
  headcountByRolePercent?: {};
  /**
   * Employee count per listed skill, keyed by skill name.
   */
  headcountBySkill?: {};
  /**
   * Share of employees per listed skill as a percent, keyed by skill name.
   */
  headcountBySkillPercent?: {};
  /**
   * Headquarters location.
   */
  headquarters?: string;
  /**
   * Country of the headquarters.
   */
  hqCountry?: string;
  /**
   * The headquarters location split into address components (city, state, country). Restates headquarters in parts.
   */
  hqLocationAddressComponents?: string[];
  /**
   * Headquarters street address and city. Crustdata returns the same string as headquarters for most companies.
   */
  hqStreetAddressAndCity?: string;
  /**
   * Company logo URL.
   * Format: uri.
   */
  image?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When Crustdata last indexed the record for search, which is usually just after updatedUtc.
   */
  indexedUtc?: number;
  /**
   * All LinkedIn industries listed for the company.
   */
  industries?: string[];
  /**
   * Primary LinkedIn industry.
   */
  industry?: string;
  /**
   * Investors named on the Crunchbase profile.
   */
  investors?: string[];
  /**
   * True when the company itself invests in other companies.
   */
  isInvestor?: boolean;
  /**
   * Country holding the largest share of employees.
   */
  largestHeadcountCountry?: string;
  /**
   * Type of the most recent funding round, e.g. series_e.
   */
  lastFundingType?: string;
  /**
   * Amount raised in the most recent funding round, in USD.
   */
  lastFundingUsd?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Date of the most recent funding round.
   */
  lastFundingUtc?: number;
  /**
   * LinkedIn speciality tags listed by the company.
   */
  linkedinCategories?: string[];
  /**
   * LinkedIn's own numeric identifier for the company page.
   */
  linkedinCompanyId?: string;
  /**
   * Company name as it appears on the LinkedIn page. Usually the same value as name; Crustdata returns both.
   */
  linkedinProfileName?: string;
  /**
   * LinkedIn company page URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Markets the company trades in, e.g. PRIVATE or NASDAQ.
   */
  markets?: string[];
  /**
   * Company name.
   */
  name: string;
  /**
   * Office addresses exactly as Crustdata returns them. Untyped passthrough: the structure ships verbatim and is not validated, because it was empty for every company we captured.
   */
  officeAddresses?: unknown;
  /**
   * Publicly listed phone number.
   */
  phone?: string;
  /**
   * Six-month percent headcount change per job function, keyed by LinkedIn function name.
   */
  roleGrowth6mPercent?: {};
  /**
   * Year-over-year percent headcount change per job function, keyed by LinkedIn function name.
   */
  roleGrowthYoyPercent?: {};
  /**
   * Stock ticker symbols.
   */
  stockSymbols?: string[];
  /**
   * Total investment raised to date, in USD.
   */
  totalFundingUsd?: number;
  /**
   * Investors sourced from Tracxn, exactly as Crustdata returns them. Untyped passthrough: the structure ships verbatim and is not validated, because it was empty for every company we captured.
   */
  tracxnInvestors?: unknown;
  /**
   * X (Twitter) profile URL.
   * Format: uri.
   */
  twitterUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When this company record was last refreshed.
   */
  updatedUtc?: number;
  /**
   * Lower bound of the reported valuation in USD.
   */
  valuationLowerUsd?: number;
  /**
   * Reported valuation in USD.
   */
  valuationUsd?: number;
  /**
   * Company website URL.
   * Format: uri.
   */
  website?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Company Search - Crustdata v3 (company_search.crustdata_v3).
 */
export interface CompanySearchCrustdataV3Data {
  /**
   * Matching companies.
   */
  companies: CompanySearchCrustdataV3Companie[];
  /**
   * True when more companies exist beyond this page.
   */
  hasMore?: boolean;
  /**
   * Opaque continuation token; null when the walk is complete.
   */
  nextCursor?: string | null;
  /**
   * Total number of companies matching the filters.
   * Range: minimum 0.
   */
  totalCount?: number;
}

export interface CompanySearchFullenrichCompanyId {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface CompanySearchFullenrichDomain {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface CompanySearchFullenrichFoundedYear {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface CompanySearchFullenrichHeadcount {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface CompanySearchFullenrichHeadquartersLocation {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface CompanySearchFullenrichIndustrie {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface CompanySearchFullenrichKeyword {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface CompanySearchFullenrichLinkedinUrl {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface CompanySearchFullenrichName {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface CompanySearchFullenrichSpecialtie {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface CompanySearchFullenrichType {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

/**
 * Input for Company Search - FullEnrich (company_search.fullenrich).
 */
export interface CompanySearchFullenrichInput {
  /**
   * Filter by FullEnrich company id. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  companyIds?: CompanySearchFullenrichCompanyId[];
  /**
   * Cursor from a previous response's nextCursor. Works at any depth, including past the 10000 offset ceiling.
   */
  cursor?: string;
  /**
   * Filter by company domain, e.g. stripe.com. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  domains?: CompanySearchFullenrichDomain[];
  /**
   * Filter by founding year. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  foundedYears?: CompanySearchFullenrichFoundedYear[];
  /**
   * Filter by employee headcount band. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  headcounts?: CompanySearchFullenrichHeadcount[];
  /**
   * Filter by headquarters city, region or country. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  headquartersLocations?: CompanySearchFullenrichHeadquartersLocation[];
  /**
   * Filter by company industry, e.g. Software Development. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  industries?: CompanySearchFullenrichIndustrie[];
  /**
   * Filter by words in the company description. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  keywords?: CompanySearchFullenrichKeyword[];
  /**
   * Rows to return on this page, up to FullEnrich's maximum of 100. Every row returned is billed.
   * Range: minimum 1, maximum 100.
   * Default: 10.
   */
  limit?: number;
  /**
   * Filter by company LinkedIn URL. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  linkedinUrls?: CompanySearchFullenrichLinkedinUrl[];
  /**
   * Filter by company name. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  names?: CompanySearchFullenrichName[];
  /**
   * Rows to skip. FullEnrich caps offset at 10000; past that, page with cursor.
   * Range: minimum 0.
   * Default: 0.
   */
  offset?: number;
  /**
   * Filter by company specialty. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  specialties?: CompanySearchFullenrichSpecialtie[];
  /**
   * Filter by ownership type, e.g. Public Company, Privately Held, Nonprofit. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  types?: CompanySearchFullenrichType[];
}

export interface CompanySearchFullenrichCompanie {
  /**
   * FullEnrich's own company identifier.
   */
  companyId?: string;
  /**
   * Ownership type, e.g. Public Company, Privately Held.
   */
  companyType?: string;
  /**
   * Company description.
   */
  description?: string;
  /**
   * Primary company domain.
   */
  domain?: string;
  /**
   * Year the company was founded. Zero when FullEnrich holds none.
   */
  foundedYear?: number;
  /**
   * Employees FullEnrich currently counts.
   */
  headcount?: number;
  /**
   * Employee headcount band, e.g. 5001-10000.
   */
  headcountRange?: string;
  /**
   * Headquarters address.
   */
  headquarters?: {
    /**
     * City.
     */
    city?: string;
    /**
     * Country name.
     */
    country?: string;
    /**
     * ISO 3166-1 alpha-2 country code.
     */
    countryCode?: string;
    /**
     * First address line.
     */
    line1?: string;
    /**
     * Second address line, carrying city, region, postal code and country.
     */
    line2?: string;
    /**
     * State or region.
     */
    region?: string;
  };
  /**
   * Company logo URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Main industry.
   */
  industry?: string;
  /**
   * LinkedIn follower count.
   */
  linkedinFollowers?: number;
  /**
   * Company LinkedIn vanity handle.
   */
  linkedinHandle?: string;
  /**
   * Company LinkedIn numeric id.
   */
  linkedinId?: string;
  /**
   * Company LinkedIn page URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Company name.
   */
  name: string;
  /**
   * Every other office FullEnrich holds for the company.
   */
  offices?: CompanySearchFullenrichOffice[];
  /**
   * Specialties the company lists for itself.
   */
  specialties?: string[];
  /**
   * Company website URL.
   * Format: uri.
   */
  website?: string;
  [extra: string]: unknown;
}

export interface CompanySearchFullenrichOffice {
  /**
   * First address line.
   */
  line1?: string;
  /**
   * Second address line, carrying city, region, postal code and country.
   */
  line2?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Company Search - FullEnrich (company_search.fullenrich).
 */
export interface CompanySearchFullenrichData {
  /**
   * Matching companies with FullEnrich's firmographic record.
   */
  companies: CompanySearchFullenrichCompanie[];
  /**
   * Cursor for the next page, or null when this lane is complete. Send it back as cursor.
   */
  nextCursor?: string | null;
  /**
   * Rows skipped before this page.
   */
  offset?: number;
  /**
   * Rows matching the filters across all pages.
   */
  total?: number;
}

/**
 * Input for Company Search - People Data Labs (company_search.peopledatalabs).
 */
export interface CompanySearchPeopledatalabsInput {
  /**
   * Comma-separated People Data Labs fields to include, or a leading - list to exclude. Projection changes the payload only; billing still follows companies returned.
   */
  dataInclude?: string;
  /**
   * Maximum companies to return. Every company returned is billed, so start at 1 to check a query and read total before asking for more.
   * Range: minimum 1, maximum 83.
   * Default: 10.
   */
  limit?: number;
  /**
   * Elasticsearch-style query over the People Data Labs company dataset, e.g. {"bool": {"must": [{"term": {"website": "posthog.com"}}]}}. Send this or sql, never both.
   */
  query?: {};
  /**
   * People Data Labs SQL, in the form SELECT * FROM company WHERE ... . String literals take single quotes, only SELECT * is supported, and field names must be real People Data Labs company fields including nested subfields such as location.country. Do not include a LIMIT clause; People Data Labs rejects it. Use limit instead. Send this or query, never both.
   */
  sql?: string;
  /**
   * Return text in title case instead of People Data Labs' lowercase default.
   */
  titlecase?: boolean;
}

export interface CompanySearchPeopledatalabsCompanie {
  /**
   * People Data Labs company ids of affiliated entities.
   */
  affiliatedEntities?: string[];
  /**
   * People Data Labs company ids of affiliated profiles.
   */
  affiliatedProfiles?: string[];
  /**
   * People Data Labs company ids of every subsidiary, at any depth.
   */
  allSubsidiaries?: string[];
  /**
   * Other domains the company owns.
   */
  alternativeDomains?: string[];
  /**
   * Other names the company trades under.
   */
  alternativeNames?: string[];
  /**
   * Average employee tenure in years.
   */
  averageEmployeeTenure?: number;
  /**
   * Average tenure in years, keyed by seniority level.
   */
  averageTenureByLevel?: {};
  /**
   * Average tenure in years, keyed by role.
   */
  averageTenureByRole?: {};
  /**
   * People Data Labs company ids of direct subsidiaries.
   */
  directSubsidiaries?: string[];
  /**
   * Churn rate keyed by window, e.g. 12_month.
   */
  employeeChurnRate?: {};
  /**
   * Employees People Data Labs currently counts.
   */
  employeeCount?: number;
  /**
   * Headcount keyed by job class.
   */
  employeeCountByClass?: {};
  /**
   * Headcount keyed by country.
   */
  employeeCountByCountry?: {};
  /**
   * Headcount keyed by YYYY-MM month.
   */
  employeeCountByMonth?: {};
  /**
   * Headcount keyed by role.
   */
  employeeCountByRole?: {};
  /**
   * Headcount keyed by sub-role.
   */
  employeeCountBySubRole?: {};
  /**
   * Headcount growth rate keyed by window.
   */
  employeeGrowthRate?: {};
  /**
   * Twelve-month headcount growth rate keyed by job class.
   */
  employeeGrowthRate12MonthByClass?: {};
  /**
   * Twelve-month headcount growth keyed by country, each entry carrying current and prior headcount.
   */
  employeeGrowthRate12MonthByCountry?: {};
  /**
   * Twelve-month headcount growth rate keyed by role.
   */
  employeeGrowthRate12MonthByRole?: {};
  /**
   * Turnover rate keyed by window, e.g. 3_month, 12_month.
   */
  employeeTurnoverRate?: {};
  /**
   * Company Facebook page URL.
   * Format: uri.
   */
  facebookUrl?: string;
  /**
   * Year the company was founded.
   */
  founded?: number;
  /**
   * Number of funding rounds raised.
   */
  fundingRounds?: number;
  /**
   * Every funding stage the company has raised.
   */
  fundingStages?: string[];
  /**
   * Employees joined, keyed by YYYY-MM month.
   */
  grossAdditionsByMonth?: {};
  /**
   * Employees departed, keyed by YYYY-MM month.
   */
  grossDeparturesByMonth?: {};
  /**
   * One-line company tagline.
   */
  headline?: string;
  /**
   * People Data Labs company id of the immediate parent company.
   */
  immediateParent?: string;
  /**
   * Company industry.
   */
  industry?: string;
  /**
   * Company industry on People Data Labs' newer taxonomy.
   */
  industryV2?: string;
  /**
   * Inferred annual revenue band, e.g. $50M-$100M.
   */
  inferredRevenue?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) of the most recent funding round. Multiply by 1000 for a JS Date in milliseconds.
   */
  lastFundingUtc?: number;
  /**
   * Most recent funding stage, e.g. series_e.
   */
  latestFundingStage?: string;
  /**
   * LinkedIn follower count.
   */
  linkedinFollowers?: number;
  /**
   * Company LinkedIn numeric id.
   */
  linkedinId?: string;
  /**
   * Company LinkedIn vanity slug.
   */
  linkedinSlug?: string;
  /**
   * Company LinkedIn page URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Company headquarters.
   */
  location?: {
    /**
     * Second line of the address.
     */
    addressLine2?: string;
    /**
     * Continent.
     */
    continent?: string;
    /**
     * Country.
     */
    country?: string;
    /**
     * Coordinates as "lat,lon".
     */
    geo?: string;
    /**
     * City.
     */
    locality?: string;
    /**
     * Metro area.
     */
    metro?: string;
    /**
     * Location as one display string.
     */
    name?: string;
    /**
     * Postal code.
     */
    postalCode?: string;
    /**
     * State or region.
     */
    region?: string;
    /**
     * Street address.
     */
    streetAddress?: string;
  };
  /**
   * Median employee tenure in years.
   */
  medianEmployeeTenure?: number;
  /**
   * Median tenure in years, keyed by seniority level.
   */
  medianTenureByLevel?: {};
  /**
   * Median tenure in years, keyed by role.
   */
  medianTenureByRole?: {};
  /**
   * MIC code of the exchange the company lists on.
   */
  micExchange?: string;
  /**
   * NAICS classification for the company.
   */
  naicsCodes?: CompanySearchPeopledatalabsNaicsCode[];
  /**
   * Company name as People Data Labs displays it.
   */
  name: string;
  /**
   * Lowercase normalized company name, the form People Data Labs matches on.
   */
  nameNormalized?: string;
  /**
   * People Data Labs persistent company id.
   */
  pdlId?: string;
  /**
   * Every social profile People Data Labs links to the company.
   */
  profiles?: string[];
  /**
   * SIC classification for the company.
   */
  sicCodes?: CompanySearchPeopledatalabsSicCode[];
  /**
   * Employee headcount band, e.g. 11-50.
   */
  size?: string;
  /**
   * Long company description.
   */
  summary?: string;
  /**
   * Descriptive tags for the company.
   */
  tags?: string[];
  /**
   * Stock ticker, for listed companies.
   */
  ticker?: string;
  /**
   * Total capital raised, in USD.
   */
  totalFundingRaised?: number;
  /**
   * Company X (Twitter) profile URL.
   * Format: uri.
   */
  twitterUrl?: string;
  /**
   * Ownership type, e.g. private, public.
   */
  type?: string;
  /**
   * People Data Labs company id of the ultimate parent company.
   */
  ultimateParent?: string;
  /**
   * Company website domain.
   */
  website?: string;
  [extra: string]: unknown;
}

export interface CompanySearchPeopledatalabsNaicsCode {
  /**
   * NAICS code.
   */
  code: string;
  /**
   * NAICS industry group.
   */
  industryGroup?: string;
  /**
   * NAICS industry.
   */
  naicsIndustry?: string;
  /**
   * NAICS national industry.
   */
  nationalIndustry?: string;
  /**
   * NAICS sector.
   */
  sector?: string;
  /**
   * NAICS sub-sector.
   */
  subSector?: string;
  [extra: string]: unknown;
}

export interface CompanySearchPeopledatalabsSicCode {
  /**
   * SIC code.
   */
  code: string;
  /**
   * SIC industry group.
   */
  industryGroup?: string;
  /**
   * SIC industry sector.
   */
  industrySector?: string;
  /**
   * SIC major group.
   */
  majorGroup?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Company Search - People Data Labs (company_search.peopledatalabs).
 */
export interface CompanySearchPeopledatalabsData {
  /**
   * Matching company records, up to limit.
   */
  companies: CompanySearchPeopledatalabsCompanie[];
  /**
   * Version of the People Data Labs dataset these records came from.
   */
  datasetVersion?: string;
  /**
   * Companies matching the query across the whole dataset, not just this page.
   */
  total?: number;
}

/**
 * Input for Company Search - Prospeo (company_search.prospeo).
 */
export interface CompanySearchProspeoInput {
  /**
   * Filter by company names or websites, e.g. {"names": {"include": ["Stripe"]}, "websites": {"include": ["stripe.com"]}}.
   */
  company?: {};
  /**
   * Filter by company characteristics, e.g. B2B, has pricing, has a free trial.
   */
  companyAttributes?: {};
  /**
   * Filter by the company's email MX provider.
   */
  companyEmailProvider?: string[];
  /**
   * Filter by founding year range.
   */
  companyFounded?: {};
  /**
   * Filter by funding stage or amount raised.
   */
  companyFunding?: {};
  /**
   * Filter by headcount within a department.
   */
  companyHeadcountByDepartment?: string[];
  /**
   * Filter by a custom employee count range.
   */
  companyHeadcountCustom?: {};
  /**
   * Filter by headcount growth.
   */
  companyHeadcountGrowth?: {};
  /**
   * Filter by Prospeo's predefined employee count bands.
   */
  companyHeadcountRange?: string[];
  /**
   * Filter by company industry.
   */
  companyIndustry?: {};
  /**
   * Filter by the roles the company is currently hiring for.
   */
  companyJobPostingHiringFor?: string[];
  /**
   * Filter by how many roles the company has open.
   */
  companyJobPostingQuantity?: {};
  /**
   * Filter by keywords found in company data.
   */
  companyKeywords?: {};
  /**
   * Filter by company headquarters location.
   */
  companyLocationSearch?: {};
  /**
   * Filter by NAICS codes.
   */
  companyNaics?: {};
  /**
   * Filter by revenue range.
   */
  companyRevenue?: {};
  /**
   * Filter by SIC codes.
   */
  companySics?: {};
  /**
   * Filter by technologies the company uses.
   */
  companyTechnology?: {};
  /**
   * Filter by ownership type.
   * One of: Private, Public, Non Profit, Other.
   */
  companyType?: "Private" | "Public" | "Non Profit" | "Other";
  /**
   * Page number, one-based. Prospeo returns 25 results per page and charges one flat price per page.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
}

export interface CompanySearchProspeoCompanie {
  /**
   * What Prospeo detects about how the company sells.
   */
  attributes?: {
    /**
     * The website offers a demo.
     */
    hasDemo?: boolean;
    /**
     * The website offers a download.
     */
    hasDownloadable?: boolean;
    /**
     * The website offers a free trial.
     */
    hasFreeTrial?: boolean;
    /**
     * The company publishes mobile apps.
     */
    hasMobileApps?: boolean;
    /**
     * The company has online reviews.
     */
    hasOnlineReviews?: boolean;
    /**
     * The website publishes pricing.
     */
    hasPricing?: boolean;
    /**
     * The company sells to businesses.
     */
    isB2b?: boolean;
  };
  /**
   * Prospeo's own company identifier. Send it back as this SKU's companyId input.
   */
  companyId?: string;
  /**
   * Company Crunchbase profile URL.
   * Format: uri.
   */
  crunchbaseUrl?: string;
  /**
   * Company description as the company writes it.
   */
  description?: string;
  /**
   * Prospeo's own AI-written company summary.
   */
  descriptionAi?: string;
  /**
   * Meta description from the company's website.
   */
  descriptionSeo?: string;
  /**
   * Primary company domain.
   */
  domain?: string;
  /**
   * How the company's email is hosted.
   */
  emailTech?: {
    /**
     * Domain the company's email addresses use.
     */
    domain?: string;
    /**
     * Mail provider behind the domain's MX records.
     */
    mxProvider?: string;
  };
  /**
   * Employees Prospeo currently counts.
   */
  employeeCount?: number;
  /**
   * Employees of this company that Prospeo holds a profile for.
   */
  employeeCountOnProspeo?: number;
  /**
   * Employee headcount band, e.g. 10000+.
   */
  employeeRange?: string;
  /**
   * Company Facebook page URL.
   * Format: uri.
   */
  facebookUrl?: string;
  /**
   * Year the company was founded.
   */
  founded?: number;
  /**
   * Funding history.
   */
  funding?: {
    /**
     * One entry per funding round.
     */
    events?: CompanySearchProspeoEvent[];
    /**
     * Most recent funding stage.
     */
    latestStage?: string;
    /**
     * UTC epoch timestamp in seconds (Unix time) of the most recent round. Multiply by 1000 for a JS Date in milliseconds.
     */
    latestUtc?: number;
    /**
     * Number of funding rounds raised.
     */
    rounds?: number;
    /**
     * Total capital raised, in USD.
     */
    totalRaised?: number;
    /**
     * Total capital raised as a display string.
     */
    totalRaisedPrinted?: string;
  };
  /**
   * Company logo URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Company industry.
   */
  industry?: string;
  /**
   * Company Instagram profile URL.
   * Format: uri.
   */
  instagramUrl?: string;
  /**
   * Open roles Prospeo currently sees for the company.
   */
  jobPostings?: {
    /**
     * Open roles currently posted.
     */
    activeCount?: number;
    /**
     * Titles of the open roles.
     */
    activeTitles?: string[];
  };
  /**
   * Keywords Prospeo assigns the company.
   */
  keywords?: string[];
  /**
   * Company LinkedIn numeric id.
   */
  linkedinId?: string;
  /**
   * Company LinkedIn page URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Company headquarters.
   */
  location?: {
    /**
     * City.
     */
    city?: string;
    /**
     * Country name.
     */
    country?: string;
    /**
     * ISO 3166-1 alpha-2 country code.
     */
    countryCode?: string;
    /**
     * Headquarters address as one display string.
     */
    rawAddress?: string;
    /**
     * State or region.
     */
    state?: string;
  };
  /**
   * NAICS classification codes for the company.
   */
  naicsCodes?: string[];
  /**
   * Company name.
   */
  name: string;
  /**
   * Other domains the company owns.
   */
  otherWebsites?: string[];
  /**
   * Headquarters switchboard number.
   */
  phoneHq?: {
    /**
     * Country the number belongs to.
     */
    country?: string;
    /**
     * ISO 3166-1 alpha-2 code for that country.
     */
    countryCode?: string;
    /**
     * Number in international format.
     */
    international?: string;
    /**
     * Number in national format.
     */
    national?: string;
    /**
     * Phone number as Prospeo stores it.
     */
    phone?: string;
  };
  /**
   * Annual revenue band in USD.
   */
  revenueRange?: {
    /**
     * Upper bound in USD.
     */
    max?: number;
    /**
     * Lower bound in USD.
     */
    min?: number;
  };
  /**
   * Annual revenue band as a display string.
   */
  revenueRangePrinted?: string;
  /**
   * SIC classification codes for the company.
   */
  sicCodes?: string[];
  /**
   * Technologies Prospeo detects in the company's stack.
   */
  technologies?: string[];
  /**
   * Company X (Twitter) profile URL.
   * Format: uri.
   */
  twitterUrl?: string;
  /**
   * Ownership type, e.g. Private, Public, Non Profit.
   */
  type?: string;
  /**
   * Company website URL.
   * Format: uri.
   */
  website?: string;
  /**
   * Company YouTube channel URL.
   * Format: uri.
   */
  youtubeUrl?: string;
  [extra: string]: unknown;
}

export interface CompanySearchProspeoEvent {
  /**
   * Amount raised in USD.
   */
  amount?: number;
  /**
   * Amount raised as a display string.
   */
  amountPrinted?: string;
  /**
   * Source URL for the round.
   * Format: uri.
   */
  link?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the round closed. Multiply by 1000 for a JS Date in milliseconds.
   */
  raisedUtc?: number;
  /**
   * Round stage, e.g. Series E-J.
   */
  stage?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Company Search - Prospeo (company_search.prospeo).
 */
export interface CompanySearchProspeoData {
  /**
   * Matching companies with Prospeo's full firmographic record.
   */
  companies: CompanySearchProspeoCompanie[];
  /**
   * Page number this response holds, one-based.
   */
  currentPage?: number;
  /**
   * Results Prospeo returns per page. Prospeo fixes this at 25 and charges one flat price per page.
   */
  perPage?: number;
  /**
   * Results matching the filters across all pages.
   */
  totalCount?: number;
  /**
   * Pages of results behind these filters.
   */
  totalPages?: number;
}

/**
 * Input for Company Search - QuickEnrich (company_search.quickenrich).
 */
export interface CompanySearchQuickenrichInput {
  /**
   * Filter on city name.
   */
  city?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Filter on company website domain. Include only; exclude is rejected upstream.
   */
  companyDomain?: {
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Filter on company name.
   */
  companyName?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Filter on ISO 3166-1 alpha-2 country code, e.g. "US".
   */
  country?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Filter on headcount band. Note these bands differ from the employeeCount string returned on a result.
   */
  employeeCount?: {
    /**
     * Reject any of these values.
     */
    exclude?: (
      | "< 5"
      | "5 - 19"
      | "20 - 99"
      | "100 - 249"
      | "250 - 499"
      | "500 - 999"
      | "1000 - 4999"
      | "5000 - 9999"
      | ">10000"
      | "Not Available"
    )[];
    /**
     * Match any of these values.
     */
    include?: (
      | "< 5"
      | "5 - 19"
      | "20 - 99"
      | "100 - 249"
      | "250 - 499"
      | "500 - 999"
      | "1000 - 4999"
      | "5000 - 9999"
      | ">10000"
      | "Not Available"
    )[];
  };
  /**
   * Filter on words found in the company home page text.
   */
  homePageText?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Return the full home page text on each company instead of a snippet.
   */
  includeFullText?: boolean;
  /**
   * Filter on industry label. Values must match the QuickEnrich industry vocabulary exactly, e.g. "IT Services and IT Consulting".
   */
  industry?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Maximum companies to return on this page. Every company returned is billed.
   * Range: minimum 1, maximum 100.
   * Default: 10.
   */
  limit?: number;
  /**
   * Filter on words found in the company LinkedIn bio.
   */
  linkedinBio?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * One-based result page.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Filter on revenue band.
   */
  revenue?: {
    /**
     * Reject any of these values.
     */
    exclude?: (
      | "< 500k"
      | "500k - 1 Million"
      | "1 - 2.5 Million"
      | "2.5 - 5 Million"
      | "5 - 10 Million"
      | "10 - 20 Million"
      | "20 - 50 Million"
      | "50 - 100 Million"
      | "100 - 500 Million"
      | "500 Million - 1 Billion"
      | ">1 Billion"
      | "Not Available"
    )[];
    /**
     * Match any of these values.
     */
    include?: (
      | "< 500k"
      | "500k - 1 Million"
      | "1 - 2.5 Million"
      | "2.5 - 5 Million"
      | "5 - 10 Million"
      | "10 - 20 Million"
      | "20 - 50 Million"
      | "50 - 100 Million"
      | "100 - 500 Million"
      | "500 Million - 1 Billion"
      | ">1 Billion"
      | "Not Available"
    )[];
  };
  /**
   * Filter on the services a company lists.
   */
  services?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
}

export interface CompanySearchQuickenrichCompanie {
  /**
   * City on the employer record.
   */
  city?: string;
  /**
   * ISO 3166-1 alpha-2 country code on the employer record.
   */
  country?: string;
  /**
   * Company website domain.
   */
  domain?: string;
  /**
   * Work email address.
   */
  email?: string;
  /**
   * Domain the work email resolves to.
   */
  emailDomain?: string;
  /**
   * Headcount band, e.g. "20 - 99". Upstream band vocabulary; "Not Available" means the band is unknown.
   */
  employeeCount?: string;
  /**
   * Domain the company's email addresses finally resolve to after redirects.
   */
  finalEmailDomain?: string;
  /**
   * Home page text. A snippet unless includeFullText was set.
   */
  homePageText?: string;
  /**
   * Industry label.
   */
  industry?: string;
  /**
   * Company LinkedIn bio snippet.
   */
  linkedinBio?: string;
  /**
   * Person's LinkedIn profile URL.
   */
  linkedinUrl?: string;
  /**
   * Company name.
   */
  name: string;
  /**
   * Direct business phone line held for the person. Mostly desk lines; read phoneType before treating it as a mobile.
   */
  phone?: string;
  /**
   * State or region code on the employer record.
   */
  region?: string;
  /**
   * Revenue band, e.g. "1 - 2.5 Million". Upstream band vocabulary; "Not Available" means the band is unknown.
   */
  revenue?: string;
  /**
   * How many services the company lists.
   */
  serviceCount?: number;
  /**
   * Services the company lists. Passed through untyped: every captured response so far has this empty, so the element shape is unverified.
   */
  services?: unknown;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Company Search - QuickEnrich (company_search.quickenrich).
 */
export interface CompanySearchQuickenrichData {
  /**
   * Companies on this page.
   */
  companies: CompanySearchQuickenrichCompanie[];
  /**
   * Whether the upstream reports further pages beyond this one.
   */
  hasMore: boolean;
  /**
   * One-based page this response covers.
   */
  page: number;
  /**
   * Records per page upstream applied.
   */
  pageSize: number;
  /**
   * Total records matching the request.
   */
  total: number;
  /**
   * Total pages available.
   */
  totalPages: number;
}

/**
 * Input for Company Search - TheirStack (company_search.theirstack).
 */
export interface CompanySearchTheirstackInput {
  /**
   * Return companies whose HQ country code is not any of the ones passed here, case sensitive. Pass ISO2 country codes.
   */
  companyCountryCodeNot?: string[];
  /**
   * Return companies whose HQ country code is any of the ones passed here, case sensitive. Pass ISO2 country codes.
   */
  companyCountryCodeOr?: string[];
  /**
   * Set to True to make company description searches accent insensitive. For example, "á" will match "a" as well.
   */
  companyDescriptionPatternAccentInsensitive?: boolean;
  /**
   * Case-insensitive patterns to match in the company description. Will return companies that match any of the patterns.
   */
  companyDescriptionPatternNot?: string[];
  /**
   * Case-insensitive patterns to match in the company description. Will return companies that match any of the patterns.
   */
  companyDescriptionPatternOr?: string[];
  /**
   * Only return companies that don't match these domains exactly. It accepts full urls (https://www.google.com/) and emails (john.polo@gmail.com).
   */
  companyDomainNot?: string[];
  /**
   * Only return companies that match these domains exactly. It accepts full urls (https://www.google.com/) and emails (john.polo@gmail.com). This filter acts as an OR filter, so if you pass more than one company domain, it will return companies that match any of the domains.
   */
  companyDomainOr?: string[];
  /**
   * Only return companies that match these IDs exactly. This filter acts as an OR filter, so if you pass more than one company ID, it will return companies that match any of the IDs.
   */
  companyIdOr?: string[];
  /**
   * Investors of the company
   */
  companyInvestorsOr?: string[];
  /**
   * Investors of the company. Will return companies for which any of their investors contains any of the substrings passed here. For example, if you pass 'andree', all funds that match it (like 'Andreessen Horowitz', 'Andreessen Horowitz LLC', etc).
   */
  companyInvestorsPartialMatchOr?: string[];
  /**
   * Return results from companies that have mentioned all of these keywords in their jobs. Case sensitive. Pass slugs. Check out all the keywords we track at GET /v0/catalog/keywords
   */
  companyKeywordSlugAnd?: string[];
  /**
   * Return results from companies that haven't mentioned any of these keywords in their jobs. Case sensitive. Pass slugs. Check out all the keywords we track at GET /v0/catalog/keywords
   */
  companyKeywordSlugNot?: string[];
  /**
   * Return results from companies that have mentioned any of these keywords in their jobs. Case sensitive. Pass slugs. Check out all the keywords we track at GET /v0/catalog/keywords
   */
  companyKeywordSlugOr?: string[];
  /**
   * (Use `property_exists_or / property_exists_and` instead) Only return companies with a LinkedIn URL
   */
  companyLinkedinUrlExists?: boolean;
  /**
   * Return companies whose LinkedIn URL matches any of the slugs passed here. Can also pass full LinkedIn company URLs.
   */
  companyLinkedinUrlOr?: string[];
  /**
   * Return companies that don't belong to any of the company lists passed here
   */
  companyListIdNot?: string[];
  /**
   * Return companies that belong to any of the company lists passed here
   */
  companyListIdOr?: string[];
  /**
   * Return companies whose city matches any of the patterns passed here. Case insensitive. For example, if you pass 'san francisco', it will return companies whose city is 'San Francisco', 'San Francisco Bay Area', etc.
   */
  companyLocationPatternOr?: string[];
  /**
   * Only return companies that match these names exactly, case-insensitively.
   */
  companyNameCaseInsensitiveOr?: string[];
  /**
   * Only return companies that don't match these names exactly, case-sensitively.
   */
  companyNameNot?: string[];
  /**
   * Only return companies that match these names exactly, case-sensitively. This filter acts as an OR filter, so if you pass more than one company name, it will return companies that match any of the names.
   */
  companyNameOr?: string[];
  /**
   * Company names. Will return companies whose name doesn't contain any of the the substrings passed here, case-insensitively. For example, if you pass 'google', it will exclude 'Google', 'Google LLC', 'Google Inc', etc.
   */
  companyNamePartialMatchNot?: string[];
  /**
   * Company names. Will return companies whose name contain any of the the substrings passed here, case-insensitively. For example, if you pass "google", it will return "Google", "Google LLC", "Google Inc", etc.
   */
  companyNamePartialMatchOr?: string[];
  /**
   * Return companies that match any of these keywords
   */
  companyTagsOr?: string[];
  /**
   * Will return jobs from companies that that have mentioned all of these technologies in their jobs (not necessarily in the jobs returned). Case sensitive. Pass slugs. Check out all the technologies we track at GET /v0/catalog/technologies. Deprecated: use company_keyword_slug_and instead.
   */
  companyTechnologySlugAnd?: string[];
  /**
   * Will return jobs from companies that that haven't mentioned any of these technologies in their jobs. Case sensitive. Pass slugs. Check out all the technologies we track at GET /v0/catalog/technologies. Deprecated: use company_keyword_slug_not instead.
   */
  companyTechnologySlugNot?: string[];
  /**
   * Will return jobs from companies that that have mentioned any of these technologies in their jobs (not necessarily in the jobs returned). Case sensitive. Pass slugs. Check out all the technologies we track at GET /v0/catalog/technologies. Deprecated: use company_keyword_slug_or instead.
   */
  companyTechnologySlugOr?: string[];
  /**
   * Filter by company type.
   */
  companyType?: string;
  /**
   * Specify technology slugs to include detailed technology usage information for each company. The response will include a 'technologies_found' field containing metrics like confidence score, ranking, and job count for each specified technology. Note: If a technology is not listed for a company, it means that company does not use that technology. This feature is useful for enriching company data with their technology stack details.
   */
  expandTechnologySlugs?: string[];
  /**
   * Funding stages of companies returned. Possible values: ['angel', 'convertible_note', 'debt_financing', 'equity_crowdfunding', 'other', 'private_equity', 'seed', 'series_a', 'series_b', 'series_c', 'series_d', 'series_e', 'series_f', 'series_g', 'series_h', 'venture_round_not_specified', 'series_i', 'series_j', 'undisclosed', 'series_unknown', 'pre_seed', 'post_ipo_secondary', 'post_ipo_equity', 'post_ipo_debt', 'non_equity_assistance', 'late_vc', 'initial_coin_offering', 'growth_equity_vc', 'grant', 'early_vc', 'corporate_round', 'secondary_market', 'product_crowdfunding']
   */
  fundingStageOr?: string[];
  /**
   * When enabled, calculates and returns `total_results` and `total_companies` fields in the response. WARNING: This significantly slows down responses as it requires reading the entire dataset. Recommended usage: enable only for the initial request to get totals, then disable for subsequent pagination requests.
   */
  includeTotalResults?: boolean;
  /**
   * Industry ids to exclude.You can use any of LinkedIn's Industry Codes V2 or GET /v0/catalog/industries
   */
  industryIdNot?: string[];
  /**
   * Industry codes. You can use any of LinkedIn's Industry Codes V2 or GET /v0/catalog/industries
   */
  industryIdOr?: string[];
  /**
   * Names of industries, case-insensitive. Results will exclude companies that belong to any of the industries specified in this parameter. Available values: GET /v0/catalog/industries WARNING: Deprecated parameter. Use the industry_id_not field instead.
   */
  industryNot?: string[];
  /**
   * Names of industries, case-insensitive. Results will only include companies that belong to any of the industries specified in this parameter. Available values: GET /v0/catalog/industries WARNING: Deprecated parameter. Use the industry_id_or field instead.
   */
  industryOr?: string[];
  jobFilters?: {};
  /**
   * Return results from companies that have mentioned all of these keywords in their jobs. Case sensitive. Pass slugs. Check out all the keywords we track at GET /v0/catalog/keywords
   */
  keywordSlugAnd?: string[];
  /**
   * Return results from companies that haven't mentioned any of these keywords in their jobs. Case sensitive. Pass slugs. Check out all the keywords we track at GET /v0/catalog/keywords
   */
  keywordSlugNot?: string[];
  /**
   * Return results from companies that have mentioned any of these keywords in their jobs. Case sensitive. Pass slugs. Check out all the keywords we track at GET /v0/catalog/keywords
   */
  keywordSlugOr?: string[];
  /**
   * Only return companies whose last funding round date is after or on this date. Format: 'YYYY-MM-DD'
   */
  lastFundingRoundDateGte?: string;
  /**
   * Only return companies whose last funding round date is before or on this date. Format: 'YYYY-MM-DD'
   */
  lastFundingRoundDateLte?: string;
  /**
   * Rows to return on this page, up to TheirStack's maximum of 500. Every row returned is billed.
   * Range: minimum 1, maximum 50.
   * Default: 25.
   */
  limit?: number;
  /**
   * Maximum number of employees in a company
   */
  maxEmployeeCount?: number;
  /**
   * Maximum number of employees in a company. If we don't have company size information, we will return it as well.
   */
  maxEmployeeCountOrNull?: number;
  /**
   * Maximum company funding, in USD
   */
  maxFundingUsd?: number;
  /**
   * Maximum company revenue, in USD
   */
  maxRevenueUsd?: number;
  /**
   * Minimum number of employees in a company
   */
  minEmployeeCount?: number;
  /**
   * Minimum number of employees in a company. If we don't have company size information, we will return it as well.
   */
  minEmployeeCountOrNull?: number;
  /**
   * Minimum company funding, in USD
   */
  minFundingUsd?: number;
  /**
   * Minimum company revenue, in USD
   */
  minRevenueUsd?: number;
  /**
   * Number of results to skip. Required for offset-based pagination.
   */
  offset?: number;
  /**
   * Only return YC companies
   */
  onlyYcCompanies?: boolean;
  /**
   * List of column objects. You can pass several columns to order by, in order of priority. Only `field` is required, `desc` is True by default
   */
  orderBy?: string[];
  /**
   * Page number. Required when using page-based pagination.
   */
  page?: number;
  /**
   * Return companies that have all of these fields not null. For example, if you pass ['domain', 'linkedin_url'], it will return companies that have both domain AND linkedin_url set.
   */
  propertyExistsAnd?: string[];
  /**
   * Return companies that have any of these fields not null. For example, if you pass ['domain', 'linkedin_url'], it will return companies that have a domain OR a linkedin_url set.
   */
  propertyExistsOr?: string[];
  /**
   * Filter by technologies and buying intent topics detected for the company
   */
  techFilters?: {};
  /**
   * Return results from companies that have mentioned all of these keywords in their jobs. Case sensitive. Pass slugs. Check out all the keywords we track at GET /v0/catalog/keywords
   */
  technologySlugAnd?: string[];
  /**
   * Return results from companies that haven't mentioned any of these keywords in their jobs. Case sensitive. Pass slugs. Check out all the keywords we track at GET /v0/catalog/keywords
   */
  technologySlugNot?: string[];
  /**
   * Return results from companies that have mentioned any of these keywords in their jobs. Case sensitive. Pass slugs. Check out all the keywords we track at GET /v0/catalog/keywords
   */
  technologySlugOr?: string[];
}

export interface CompanySearchTheirstackCompanie {
  /**
   * Alexa traffic rank for the company website.
   */
  alexaRanking?: number;
  /**
   * Estimated annual revenue as a display string, e.g. 4.2M.
   */
  annualRevenueReadable?: string;
  /**
   * Estimated annual revenue in USD.
   */
  annualRevenueUsd?: number;
  /**
   * Apollo's identifier for the same company.
   */
  apolloId?: string;
  /**
   * Headquarters city.
   */
  city?: string;
  /**
   * TheirStack's own company identifier.
   */
  companyId?: string;
  /**
   * Keywords TheirStack assigns the company.
   */
  companyKeywords?: string[];
  /**
   * Tags TheirStack assigns the company.
   */
  companyTags?: string[];
  /**
   * Headquarters country.
   */
  country?: string;
  /**
   * ISO 3166-1 alpha-2 country code.
   */
  countryCode?: string;
  /**
   * Primary company domain.
   */
  domain?: string;
  /**
   * Employees TheirStack currently counts.
   */
  employeeCount?: number;
  /**
   * Employee headcount band, e.g. 201-500.
   */
  employeeCountRange?: string;
  /**
   * Year the company was founded.
   */
  foundedYear?: number;
  /**
   * Most recent funding stage, e.g. series_b.
   */
  fundingStage?: string;
  /**
   * True when TheirStack redacted part of the record on this plan.
   */
  hasBlurredData?: boolean;
  /**
   * Company logo URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Company industry.
   */
  industry?: string;
  /**
   * TheirStack's identifier for that industry.
   */
  industryId?: string;
  /**
   * Investors TheirStack records for the company.
   */
  investors?: string[];
  /**
   * True when TheirStack classifies the company as a recruiting agency rather than a direct employer.
   */
  isRecruitingAgency?: boolean;
  /**
   * Keyword slugs found in the company's job posts. These are the values the keyword filters take.
   */
  keywordSlugs?: string[];
  /**
   * Most recent round size as a display string, e.g. $15M.
   */
  lastFundingRoundReadable?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) of the most recent funding round. Multiply by 1000 for a JS Date in milliseconds.
   */
  lastFundingRoundUtc?: number;
  /**
   * Company LinkedIn numeric id.
   */
  linkedinId?: string;
  /**
   * Company LinkedIn page URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Company description as the company writes it.
   */
  longDescription?: string;
  /**
   * Company name.
   */
  name: string;
  /**
   * Distinct buying-intent topics detected in the company's job posts.
   */
  numBuyingIntentTopics?: number;
  /**
   * Job posts TheirStack holds for the company, all time.
   */
  numJobs?: number;
  /**
   * Job posts of this company that matched your job filters, when you sent any.
   */
  numJobsFound?: number;
  /**
   * Job posts published in the last 30 days.
   */
  numJobsLast30Days?: number;
  /**
   * Distinct keywords detected in the company's job posts.
   */
  numKeywords?: number;
  /**
   * Distinct technologies detected in the company's job posts.
   */
  numTechnologies?: number;
  /**
   * Every domain TheirStack associates with the company.
   */
  possibleDomains?: string[];
  /**
   * Headquarters postal code.
   */
  postalCode?: string;
  /**
   * Exchange the company lists on.
   */
  publiclyTradedExchange?: string;
  /**
   * Stock ticker, for listed companies.
   */
  publiclyTradedSymbol?: string;
  /**
   * Meta description from the company's website.
   */
  seoDescription?: string;
  /**
   * The technologies from your technology filters that this company was matched on. Empty unless you filtered by technology.
   */
  technologiesFound?: CompanySearchTheirstackTechnologiesFound[];
  /**
   * Human-readable names for those technologies.
   */
  technologyNames?: string[];
  /**
   * Technology slugs found in the company's job posts. These are the values the technology filters take.
   */
  technologySlugs?: string[];
  /**
   * Total capital raised, in USD.
   */
  totalFundingUsd?: number;
  /**
   * Company website URL.
   * Format: uri.
   */
  url?: string;
  /**
   * Where TheirStack sourced the company website URL.
   */
  urlSource?: string;
  /**
   * Y Combinator batch, e.g. W20, for companies that went through it.
   */
  ycBatch?: string;
  [extra: string]: unknown;
}

export interface CompanySearchTheirstackTechnologiesFound {
  /**
   * Category the technology sits in.
   */
  category?: string;
  /**
   * Slug for that category.
   */
  categorySlug?: string;
  /**
   * How sure TheirStack is that the company uses it: high, medium or low.
   */
  confidence?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the technology was first seen. Multiply by 1000 for a JS Date in milliseconds.
   */
  firstFoundUtc?: number;
  /**
   * Technology logo URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Job posts mentioning the technology, all time.
   */
  jobs?: number;
  /**
   * Job posts mentioning it in the last 180 days.
   */
  jobsLast180Days?: number;
  /**
   * Job posts mentioning it in the last 30 days.
   */
  jobsLast30Days?: number;
  /**
   * Job posts mentioning it in the last 7 days.
   */
  jobsLast7Days?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time) the technology was last seen. Multiply by 1000 for a JS Date in milliseconds.
   */
  lastFoundUtc?: number;
  /**
   * Technology name.
   */
  name: string;
  /**
   * Parent category.
   */
  parentCategory?: string;
  /**
   * Slug for that parent category.
   */
  parentCategorySlug?: string;
  /**
   * Rank among the company's technologies in the same category, 1 being the most used.
   */
  rankWithinCategory?: number;
  /**
   * Share of the company's mentions within this category that are of this technology, 0 to 1.
   */
  relativeOccurrenceWithinCategory?: number;
  /**
   * TheirStack's own relevance score for the match.
   */
  score?: number;
  /**
   * Technology slug. This is the value the technology filters take.
   */
  slug?: string;
  /**
   * Smaller technology logo URL.
   * Format: uri.
   */
  thumbnail?: string;
  /**
   * Whether the row is a technology or a buying-intent keyword.
   */
  type?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Company Search - TheirStack (company_search.theirstack).
 */
export interface CompanySearchTheirstackData {
  /**
   * Matching companies with TheirStack's firmographic record and the technology and keyword slugs found in their job posts.
   */
  companies: CompanySearchTheirstackCompanie[];
  /**
   * Distinct companies matching the filters. TheirStack computes it only when you send includeTotalResults.
   */
  totalCompanies?: number;
  /**
   * Rows matching the filters across all pages. TheirStack computes it only when you send includeTotalResults, and omits it otherwise.
   */
  totalResults?: number;
  /**
   * Companies TheirStack withheld because the plan's result ceiling was reached.
   */
  truncatedCompanies?: number;
  /**
   * Rows TheirStack withheld because the plan's result ceiling was reached.
   */
  truncatedResults?: number;
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
   * Price: $0 per request plus $0.048 per result (maximum $12).
   *
   * @example
   * const res = await client.companySearch.crustdataV3({ filters: [{ filter_type: "company_website_domain", type: "(.)", value: "posthog.com" }], limit: 1 });
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

  /**
   * Company Search - FullEnrich
   *
   * Build an account list from FullEnrich by name, domain, industry, specialty, ownership type, headcount, founding year and headquarters, with full firmographics and every office on each row. Billed per company returned.
   *
   * Price: $0 per request plus $0.0252 per result (maximum $2.52).
   *
   * @example
   * const res = await client.companySearch.fullenrich({ domains: [{ exact_match: true, value: "stripe.com" }], limit: 1 });
   */
  fullenrich(
    input: CompanySearchFullenrichInput,
    options?: RequestOptions,
  ): Promise<RunResult<CompanySearchFullenrichData>> {
    return this._core.run("company_search.fullenrich", input, options);
  }

  /**
   * Iterate every result of Company Search - FullEnrich across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterFullenrich(
    input: CompanySearchFullenrichInput,
    options?: RequestOptions,
  ): Paginator<
    CompanySearchFullenrichCompanie,
    RunResult<CompanySearchFullenrichData>
  > {
    return paginate<
      CompanySearchFullenrichCompanie,
      RunResult<CompanySearchFullenrichData>
    >(
      this._core,
      "company_search.fullenrich",
      input as unknown as Record<string, unknown>,
      "companies",
      false,
      options,
    );
  }

  /**
   * Company Search - People Data Labs
   *
   * Search People Data Labs' company dataset with SQL or an Elasticsearch query and get the full firmographic record back, including funding history and the headcount growth, tenure and churn series. Billed per company returned.
   *
   * Price: $0 per request plus $0.12 per result (maximum $9.96).
   *
   * @example
   * const res = await client.companySearch.peopledatalabs({ limit: 1, sql: "SELECT * FROM company WHERE website = 'posthog.com'" });
   */
  peopledatalabs(
    input: CompanySearchPeopledatalabsInput,
    options?: RequestOptions,
  ): Promise<RunResult<CompanySearchPeopledatalabsData>> {
    return this._core.run("company_search.peopledatalabs", input, options);
  }

  /**
   * Company Search - Prospeo
   *
   * Build an account list from Prospeo by industry, headcount, revenue, location, technology, funding and hiring activity. One flat price per page of 25.
   *
   * Price: $0.066 per request.
   *
   * @example
   * const res = await client.companySearch.prospeo({ company: { websites: { include: ["stripe.com"] } }, page: 1 });
   */
  prospeo(
    input: CompanySearchProspeoInput,
    options?: RequestOptions,
  ): Promise<RunResult<CompanySearchProspeoData>> {
    return this._core.run("company_search.prospeo", input, options);
  }

  /**
   * Company Search - QuickEnrich
   *
   * Find companies by name, domain, industry, headcount, revenue, services, or location, and get back their site, LinkedIn, and contact details. Billed per company returned.
   *
   * Price: $0 per request plus $0.0072 per result (maximum $0.72).
   *
   * @example
   * const res = await client.companySearch.quickenrich({ country: { include: ["US"] }, employeeCount: { include: ["20 - 99"] }, limit: 2 });
   */
  quickenrich(
    input: CompanySearchQuickenrichInput,
    options?: RequestOptions,
  ): Promise<RunResult<CompanySearchQuickenrichData>> {
    return this._core.run("company_search.quickenrich", input, options);
  }

  /**
   * Company Search - TheirStack
   *
   * Build an account list from TheirStack by the technologies, keywords and buying-intent topics a company mentions in its job posts, plus headcount, revenue, funding, industry and location. Billed per company returned.
   *
   * Price: $0 per request plus $0.1992 per result (maximum $9.96).
   *
   * @example
   * const res = await client.companySearch.theirstack({ companyDomainOr: ["posthog.com"], limit: 1 });
   */
  theirstack(
    input: CompanySearchTheirstackInput,
    options?: RequestOptions,
  ): Promise<RunResult<CompanySearchTheirstackData>> {
    return this._core.run("company_search.theirstack", input, options);
  }
}
