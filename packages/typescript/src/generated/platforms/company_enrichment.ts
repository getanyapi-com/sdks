// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Company Enrichment - Crustdata (company_enrichment.crustdata).
 */
export interface CompanyEnrichmentCrustdataInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  companyDomain?: string;
  companyId?: unknown;
  /**
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  companyName?: string;
  exactMatch?: boolean;
  fields?: unknown;
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

export interface CompanyEnrichmentCrustdataHeadcountTimeserie {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Observation date.
   */
  dateUtc?: number;
  /**
   * Employee count observed on that date.
   */
  employeeCount?: number;
  [extra: string]: unknown;
}

export interface CompanyEnrichmentCrustdataSicCode {
  /**
   * SIC code.
   */
  code?: string;
  /**
   * SIC industry name.
   */
  industry?: string;
  /**
   * SIC revision year the code belongs to.
   */
  year?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Company Enrichment - Crustdata (company_enrichment.crustdata).
 */
export interface CompanyEnrichmentCrustdataData {
  /**
   * Acquisition status, when the company has been acquired.
   */
  acquisitionStatus?: string | null;
  /**
   * Crustdata identifier for the company, accepted back as the companyId input.
   */
  companyId?: string | null;
  /**
   * Company type, e.g. Privately Held or Public Company.
   */
  companyType?: string | null;
  /**
   * Crunchbase category tags, followed by the broader category groups they belong to.
   */
  crunchbaseCategories?: string[] | null;
  /**
   * Company description from its LinkedIn page.
   */
  description?: string | null;
  /**
   * Primary website domain, or null when the upstream holds none for this company.
   */
  domain: string | null;
  /**
   * All domains associated with the company.
   */
  domains?: string[] | null;
  /**
   * Latest observed employee count.
   */
  employeeCount?: number | null;
  /**
   * Net headcount change over trailing windows.
   */
  employeeGrowthAbsolute?: {
    /**
     * Change over the last month.
     */
    mom?: number;
    /**
     * Change over the last quarter.
     */
    qoq?: number;
    /**
     * Change over the last six months.
     */
    sixMonths?: number;
    /**
     * Change over the last two years.
     */
    twoYears?: number;
    /**
     * Change over the last twelve months.
     */
    yoy?: number;
  } | null;
  /**
   * Percent headcount change over trailing windows.
   */
  employeeGrowthPercent?: {
    /**
     * Change over the last month.
     */
    mom?: number;
    /**
     * Change over the last quarter.
     */
    qoq?: number;
    /**
     * Change over the last six months.
     */
    sixMonths?: number;
    /**
     * Change over the last two years.
     */
    twoYears?: number;
    /**
     * Change over the last twelve months.
     */
    yoy?: number;
  } | null;
  /**
   * Employee count band, e.g. 51-200.
   */
  employeeRange?: string | null;
  /**
   * Upper bound of estimated annual revenue in USD.
   */
  estimatedRevenueHigherUsd?: number | null;
  /**
   * Lower bound of estimated annual revenue in USD.
   */
  estimatedRevenueLowerUsd?: number | null;
  /**
   * Fiscal year end.
   */
  fiscalYearEnd?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Founding date of the company.
   */
  foundedUtc?: number | null;
  /**
   * Year the company was founded.
   */
  foundedYear?: number | null;
  /**
   * Headcount history broken down by region and by job function. Untyped passthrough: the whole nested structure ships exactly as Crustdata returns it, including its raw grouping keys (GEO_REGION, CURRENT_FUNCTION) and its string observation dates rather than epoch seconds, because the shape cannot be expressed in the canonical field grammar.
   */
  headcountByFunctionTimeseries?: unknown;
  /**
   * Employee count per region, keyed by LinkedIn region name.
   */
  headcountByRegion?: {} | null;
  /**
   * Share of employees per region as a percent, keyed by LinkedIn region name.
   */
  headcountByRegionPercent?: {} | null;
  /**
   * Employee count per job function, keyed by LinkedIn function name.
   */
  headcountByRole?: {} | null;
  /**
   * Share of employees per job function as a percent, keyed by LinkedIn function name.
   */
  headcountByRolePercent?: {} | null;
  /**
   * Six-month percent headcount change per job function, exactly as Crustdata returns it. Untyped passthrough: the structure ships verbatim and is not validated.
   */
  headcountByRoleSixMonthsGrowthPercent?: unknown;
  /**
   * Year-over-year percent headcount change per job function, exactly as Crustdata returns it. Untyped passthrough: the structure ships verbatim and is not validated.
   */
  headcountByRoleYoyGrowthPercent?: unknown;
  /**
   * Employee count per listed skill, keyed by skill name.
   */
  headcountBySkill?: {} | null;
  /**
   * Share of employees per listed skill as a percent, keyed by skill name.
   */
  headcountBySkillPercent?: {} | null;
  /**
   * Historical employee-count observations, oldest first.
   */
  headcountTimeseries?: CompanyEnrichmentCrustdataHeadcountTimeserie[] | null;
  /**
   * Country of the headquarters.
   */
  hqCountry?: string | null;
  /**
   * State or province of the headquarters.
   */
  hqState?: string | null;
  /**
   * Headquarters street address. Crustdata returns the same string as location for most companies.
   */
  hqStreetAddress?: string | null;
  /**
   * Company logo URL. Crustdata's cached copy, which does not expire.
   * Format: uri.
   */
  image?: string | null;
  /**
   * All LinkedIn industries listed for the company.
   */
  industries?: string[] | null;
  /**
   * Primary LinkedIn industry.
   */
  industry?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Date the company went public.
   */
  ipoUtc?: number | null;
  /**
   * Country holding the largest share of employees.
   */
  largestHeadcountCountry?: string | null;
  /**
   * LinkedIn's own numeric identifier for the company page.
   */
  linkedinCompanyId?: string | null;
  /**
   * Company name as it appears on the LinkedIn page. Usually the same value as name; Crustdata returns both.
   */
  linkedinProfileName?: string | null;
  /**
   * LinkedIn company page URL.
   * Format: uri.
   */
  linkedinUrl?: string | null;
  /**
   * Headquarters location.
   */
  location?: string | null;
  /**
   * Primary NAICS industry classification.
   */
  naics?: {
    /**
     * Primary NAICS code.
     */
    code?: string;
    /**
     * NAICS industry name.
     */
    industry?: string;
    /**
     * NAICS industry group name.
     */
    industryGroup?: string;
    /**
     * NAICS sector name.
     */
    sector?: string;
    /**
     * NAICS sub-sector name.
     */
    subSector?: string;
    /**
     * NAICS revision year the code belongs to.
     */
    year?: number;
  } | null;
  /**
   * Company name.
   */
  name?: string | null;
  /**
   * SIC industry classifications assigned to the company.
   */
  sicCodes?: CompanyEnrichmentCrustdataSicCode[] | null;
  /**
   * Speciality tags the company lists on LinkedIn.
   */
  specialities?: string[] | null;
  /**
   * X (Twitter) profile URL.
   * Format: uri.
   */
  twitterUrl?: string | null;
  /**
   * Company website URL.
   * Format: uri.
   */
  website?: string | null;
  [extra: string]: unknown;
}

/**
 * Input for Company Enrichment - Data Legion (company_enrichment.datalegion).
 */
export interface CompanyEnrichmentDatalegionInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Company website domain, e.g. hubspot.com. The strongest identifier. Send either domain or name, not both.
   */
  domain?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Lowest match confidence that still counts as found. Omit it for Data Legion's default.
   * One of: high, moderate, low.
   */
  minConfidence?: "high" | "moderate" | "low";
  /**
   * Company name, for when you have no domain. A domain matches more reliably.
   */
  name?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Fields a match must have, as a Data Legion expression over its snake_case field names combined with AND, OR and parentheses, e.g. linkedin_url AND founded. A match without them counts as not found.
   */
  required?: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface CompanyEnrichmentDatalegionEmployeeCountByMonth {
  /**
   * Employees counted that month.
   */
  count?: number;
  /**
   * Employees who left that month.
   */
  departures?: number;
  /**
   * Change in headcount from the month before, as a fraction.
   */
  growthRate?: number;
  /**
   * Employees who joined that month.
   */
  hires?: number;
  /**
   * Calendar month as YYYY-MM.
   */
  month: string;
  /**
   * Change in headcount from the month before.
   */
  netChange?: number;
  [extra: string]: unknown;
}

export interface CompanyEnrichmentDatalegionLocation {
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
   * ISO 3166-1 alpha-2 country code, e.g. US.
   */
  countryCode?: string;
  /**
   * Coordinates as "lat,lon".
   */
  geo?: string;
  /**
   * True while the office is still in use.
   */
  isCurrent?: boolean;
  /**
   * True for the headquarters.
   */
  isPrimary?: boolean;
  /**
   * UTC epoch timestamp in seconds (Unix time) Data Legion last saw this location. Multiply by 1000 for a JS Date in milliseconds.
   */
  lastSeenUtc?: number;
  /**
   * City.
   */
  locality?: string;
  /**
   * Postal code.
   */
  postalCode?: string;
  /**
   * State or region.
   */
  region?: string;
  /**
   * ISO 3166-2 region code, e.g. US-MA.
   */
  regionCode?: string;
  /**
   * Street address.
   */
  streetAddress?: string;
  [extra: string]: unknown;
}

export interface CompanyEnrichmentDatalegionProfile {
  /**
   * Network the profile is on, e.g. linkedin, facebook, crunchbase.
   */
  network: string;
  /**
   * Numeric or opaque id on that network.
   */
  profileId?: string;
  /**
   * Profile URL.
   * Format: uri.
   */
  url?: string;
  /**
   * Handle on that network.
   */
  username?: string;
  [extra: string]: unknown;
}

export interface CompanyEnrichmentDatalegionTicker {
  /**
   * Exchange the ticker lists on, e.g. NYSE.
   */
  exchange?: string;
  /**
   * Ticker symbol, e.g. HUBS.
   */
  symbol: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Company Enrichment - Data Legion (company_enrichment.datalegion).
 */
export interface CompanyEnrichmentDatalegionData {
  /**
   * Average tenure of current employees, in months.
   */
  averageTenureMonths?: number | null;
  /**
   * Data Legion dataset build the record came from.
   */
  datasetVersion?: string | null;
  /**
   * Departures over the trailing 1, 3, 6 and 12 months, keyed 1m, 3m, 6m and 12m.
   */
  departures?: {} | null;
  /**
   * Every website domain Data Legion links to the company, the primary one included.
   */
  domains?: string[] | null;
  /**
   * Employees Data Legion currently counts from the people profiles it holds, usually below the LinkedIn figure.
   */
  employeeCount?: number | null;
  /**
   * Current employees per highest degree, e.g. bachelors, masters, doctorate.
   */
  employeeCountByEducation?: {} | null;
  /**
   * Current employees per expense category, e.g. research_and_development, sales_and_marketing.
   */
  employeeCountByExpenseCategory?: {} | null;
  /**
   * Current employees per job function, e.g. engineering, sales, product.
   */
  employeeCountByFunction?: {} | null;
  /**
   * Monthly headcount history, oldest month first.
   */
  employeeCountByMonth?:
    CompanyEnrichmentDatalegionEmployeeCountByMonth[] | null;
  /**
   * Current employees per seniority level, e.g. c_level, director, manager, senior.
   */
  employeeCountBySeniority?: {} | null;
  /**
   * Current employees per tenure band, e.g. <1yr, 1-2yr, 2-5yr.
   */
  employeeCountByTenure?: {} | null;
  /**
   * Headcount growth rate as a fraction over the trailing 1, 3, 6 and 12 months, keyed 1m, 3m, 6m and 12m.
   */
  employeeGrowthRate?: {} | null;
  /**
   * Turnover rate as a fraction over the trailing 1, 3, 6 and 12 months, keyed 1m, 3m, 6m and 12m.
   */
  employeeTurnoverRate?: {} | null;
  /**
   * Year the company was founded.
   */
  founded?: number | null;
  /**
   * Headcount growth rate per expense category, each keyed 1m, 3m, 6m and 12m.
   */
  growthRateByExpenseCategory?: {} | null;
  /**
   * Headcount growth rate per job function, each keyed 1m, 3m, 6m and 12m.
   */
  growthRateByFunction?: {} | null;
  /**
   * Headcount growth rate per seniority level, each keyed 1m, 3m, 6m and 12m.
   */
  growthRateBySeniority?: {} | null;
  /**
   * One-line company tagline, as the company writes it.
   */
  headline?: string | null;
  /**
   * Company industry, lowercase, e.g. software development.
   */
  industry?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time) of the month Data Legion last saw the company, at the first of that month. Multiply by 1000 for a JS Date in milliseconds.
   */
  lastSeenUtc?: number | null;
  /**
   * Data Legion persistent company id.
   */
  legionId?: string | null;
  /**
   * Employee count the company's LinkedIn page states.
   */
  linkedinEmployeeCount?: number | null;
  /**
   * LinkedIn follower count.
   */
  linkedinFollowers?: number | null;
  /**
   * Company LinkedIn numeric id.
   */
  linkedinId?: string | null;
  /**
   * Company LinkedIn page URL.
   * Format: uri.
   */
  linkedinUrl?: string | null;
  /**
   * Office locations, the headquarters marked isPrimary.
   */
  locations?: CompanyEnrichmentDatalegionLocation[] | null;
  /**
   * How sure the match is: high, moderate or low.
   */
  matchConfidence?: string | null;
  /**
   * How the identifier matched, e.g. exact.
   */
  matchType?: string | null;
  /**
   * Identifiers the match was made on, e.g. domain or name.
   */
  matchedOn?: string[] | null;
  /**
   * Company name as Data Legion displays it.
   */
  name: string | null;
  /**
   * Lowercase normalized company name, the form Data Legion matches on.
   */
  nameNormalized?: string | null;
  /**
   * Hires over the trailing 1, 3, 6 and 12 months, keyed 1m, 3m, 6m and 12m.
   */
  newHires?: {} | null;
  /**
   * Number of sources Data Legion merged into this record.
   */
  numSources?: number | null;
  /**
   * Social and directory profiles Data Legion links to the company.
   */
  profiles?: CompanyEnrichmentDatalegionProfile[] | null;
  /**
   * Employee headcount band, e.g. 51-200.
   */
  size?: string | null;
  /**
   * Long company description, as the company writes it.
   */
  summary?: string | null;
  /**
   * Stock tickers the company trades under. Empty for a private company.
   */
  tickers?: CompanyEnrichmentDatalegionTicker[] | null;
  /**
   * Ownership type, e.g. private, public.
   */
  type?: string | null;
  /**
   * Primary company website domain, e.g. hubspot.com.
   */
  website?: string | null;
  [extra: string]: unknown;
}

/**
 * Input for Company Enrichment - Lusha (company_enrichment.lusha).
 */
export interface CompanyEnrichmentLushaInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Company name to look up when you have no domain.
   */
  company?: string;
  /**
   * Lusha's own company identifier, as returned by this SKU's companyId output.
   */
  companyId?: string;
  /**
   * Company domain, e.g. posthog.com. Send the bare domain, without a scheme or www.
   */
  domain?: string;
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

export interface CompanyEnrichmentLushaNaicsCode {
  /**
   * NAICS code.
   */
  code: string | null;
  /**
   * What the NAICS code covers.
   */
  description?: string;
  [extra: string]: unknown;
}

export interface CompanyEnrichmentLushaOffice {
  /**
   * City.
   */
  city?: string;
  /**
   * Continent name.
   */
  continent?: string;
  /**
   * Country name.
   */
  country?: string;
  /**
   * ISO 3166-1 alpha-2 country code.
   */
  countryCode?: string;
  /**
   * Location as one display string.
   */
  fullLocation?: string;
  /**
   * State or region.
   */
  state?: string;
  /**
   * State or region code.
   */
  stateCode?: string;
  [extra: string]: unknown;
}

export interface CompanyEnrichmentLushaSicCode {
  /**
   * SIC code.
   */
  code: string | null;
  /**
   * What the SIC code covers.
   */
  description?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Company Enrichment - Lusha (company_enrichment.lusha).
 */
export interface CompanyEnrichmentLushaData {
  /**
   * Headquarters address as one display string.
   */
  address?: string | null;
  /**
   * Other domains the company owns.
   */
  alternativeDomains?: string[] | null;
  /**
   * Alternative name Lusha holds for the company.
   */
  alternativeName?: string | null;
  /**
   * Lusha's own company identifier. Send it back as this SKU's companyId input.
   */
  companyId?: string | null;
  /**
   * Ownership type, e.g. Private Company.
   */
  companyType?: string | null;
  /**
   * Company description.
   */
  description?: string | null;
  /**
   * Primary company domain.
   */
  domain?: string | null;
  /**
   * Domain the company's work email addresses use.
   */
  emailDomain?: string | null;
  /**
   * Employee headcount band as Lusha bands it, e.g. 51 - 200.
   */
  employeeRange?: string | null;
  /**
   * Employees LinkedIn shows for the company.
   */
  employeesOnLinkedin?: number | null;
  /**
   * Company Facebook page URL.
   * Format: uri.
   */
  facebookUrl?: string | null;
  /**
   * Year the company was founded.
   */
  founded?: number | null;
  /**
   * Fully qualified host for the company website.
   */
  fqdn?: string | null;
  /**
   * Company logo URL.
   * Format: uri.
   */
  image?: string | null;
  /**
   * LinkedIn follower count.
   */
  linkedinFollowers?: number | null;
  /**
   * Company LinkedIn page URL.
   * Format: uri.
   */
  linkedinUrl?: string | null;
  /**
   * Headquarters location.
   */
  location?: {
    /**
     * City.
     */
    city?: string;
    /**
     * Continent name.
     */
    continent?: string;
    /**
     * Country name.
     */
    country?: string;
    /**
     * ISO 3166-1 alpha-2 country code.
     */
    countryCode?: string;
    /**
     * Location as one display string.
     */
    fullLocation?: string;
    /**
     * State or region.
     */
    state?: string;
    /**
     * State or region code.
     */
    stateCode?: string;
  } | null;
  /**
   * Top-level industry.
   */
  mainIndustry?: string | null;
  /**
   * NAICS classification codes for the company.
   */
  naicsCodes?: CompanyEnrichmentLushaNaicsCode[] | null;
  /**
   * Company name.
   */
  name: string | null;
  /**
   * Every office location Lusha holds for the company.
   */
  offices?: CompanyEnrichmentLushaOffice[] | null;
  /**
   * Lusha's popularity tier for the company, 1 being the most prominent.
   */
  popularityTier?: number | null;
  /**
   * Lusha's internal record id for the company row.
   */
  recordId?: string | null;
  /**
   * Annual revenue band in USD as [min, max].
   */
  revenueRange?: number[] | null;
  /**
   * SIC classification codes for the company.
   */
  sicCodes?: CompanyEnrichmentLushaSicCode[] | null;
  /**
   * Specialities the company lists for itself.
   */
  specialities?: string[] | null;
  /**
   * Sub-industry.
   */
  subIndustry?: string | null;
  /**
   * Company website URL.
   * Format: uri.
   */
  website?: string | null;
  /**
   * Company X (Twitter) profile URL.
   * Format: uri.
   */
  xUrl?: string | null;
  [extra: string]: unknown;
}

/**
 * Input for Company Enrichment - People Data Labs (company_enrichment.peopledatalabs).
 */
export interface CompanyEnrichmentPeopledatalabsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Comma-separated People Data Labs fields to include, or a leading - list to exclude. Projection changes the payload only; it does not reduce what the call costs.
   */
  dataInclude?: string;
  /**
   * Company website domain, e.g. posthog.com. The strongest identifier.
   */
  domain?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Report which of the sent identifiers actually matched.
   */
  includeIfMatched?: boolean;
  /**
   * Minimum People Data Labs likelihood score a match must reach to count as found.
   * Range: minimum 1, maximum 10.
   */
  minLikelihood?: number;
  /**
   * Company name, for when you have no domain.
   */
  name?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * People Data Labs boolean expression over top-level fields that a match must satisfy, e.g. website and industry.
   */
  required?: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Return text in title case instead of People Data Labs' lowercase default.
   */
  titlecase?: boolean;
}

export interface CompanyEnrichmentPeopledatalabsNaicsCode {
  /**
   * NAICS code.
   */
  code: string | null;
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

export interface CompanyEnrichmentPeopledatalabsSicCode {
  /**
   * SIC code.
   */
  code: string | null;
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
 * The `data` payload of Company Enrichment - People Data Labs (company_enrichment.peopledatalabs).
 */
export interface CompanyEnrichmentPeopledatalabsData {
  /**
   * People Data Labs company ids of affiliated entities.
   */
  affiliatedEntities?: (string | null)[] | null;
  /**
   * People Data Labs company ids of affiliated profiles.
   */
  affiliatedProfiles?: string[] | null;
  /**
   * People Data Labs company ids of every subsidiary, at any depth.
   */
  allSubsidiaries?: string[] | null;
  /**
   * Other domains the company owns.
   */
  alternativeDomains?: string[] | null;
  /**
   * Other names the company trades under.
   */
  alternativeNames?: string[] | null;
  /**
   * Average employee tenure in years.
   */
  averageEmployeeTenure?: number | null;
  /**
   * Average tenure in years, keyed by seniority level.
   */
  averageTenureByLevel?: {} | null;
  /**
   * Average tenure in years, keyed by role.
   */
  averageTenureByRole?: {} | null;
  /**
   * Version of the People Data Labs dataset this record came from.
   */
  datasetVersion?: string | null;
  /**
   * People Data Labs company ids of direct subsidiaries.
   */
  directSubsidiaries?: string[] | null;
  /**
   * Churn rate keyed by window, e.g. 12_month.
   */
  employeeChurnRate?: {} | null;
  /**
   * Employees People Data Labs currently counts.
   */
  employeeCount?: number | null;
  /**
   * Headcount keyed by job class.
   */
  employeeCountByClass?: {} | null;
  /**
   * Headcount keyed by country.
   */
  employeeCountByCountry?: {} | null;
  /**
   * Headcount keyed by YYYY-MM month.
   */
  employeeCountByMonth?: {} | null;
  /**
   * Headcount keyed by role.
   */
  employeeCountByRole?: {} | null;
  /**
   * Headcount keyed by sub-role.
   */
  employeeCountBySubRole?: {} | null;
  /**
   * Headcount growth rate keyed by window.
   */
  employeeGrowthRate?: {} | null;
  /**
   * Twelve-month headcount growth rate keyed by job class.
   */
  employeeGrowthRate12MonthByClass?: {} | null;
  /**
   * Twelve-month headcount growth keyed by country, each entry carrying current and prior headcount.
   */
  employeeGrowthRate12MonthByCountry?: {} | null;
  /**
   * Twelve-month headcount growth rate keyed by role.
   */
  employeeGrowthRate12MonthByRole?: {} | null;
  /**
   * Turnover rate keyed by window, e.g. 3_month, 12_month.
   */
  employeeTurnoverRate?: {} | null;
  /**
   * Company Facebook page URL.
   * Format: uri.
   */
  facebookUrl?: string | null;
  /**
   * Year the company was founded.
   */
  founded?: number | null;
  /**
   * Number of funding rounds raised.
   */
  fundingRounds?: number | null;
  /**
   * Every funding stage the company has raised.
   */
  fundingStages?: string[] | null;
  /**
   * Employees joined, keyed by YYYY-MM month.
   */
  grossAdditionsByMonth?: {} | null;
  /**
   * Employees departed, keyed by YYYY-MM month.
   */
  grossDeparturesByMonth?: {} | null;
  /**
   * One-line company tagline.
   */
  headline?: string | null;
  /**
   * People Data Labs company id of the immediate parent company.
   */
  immediateParent?: string | null;
  /**
   * Company industry.
   */
  industry?: string | null;
  /**
   * Company industry on People Data Labs' newer taxonomy.
   */
  industryV2?: string | null;
  /**
   * Inferred annual revenue band, e.g. $50M-$100M.
   */
  inferredRevenue?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time) of the most recent funding round. Multiply by 1000 for a JS Date in milliseconds.
   */
  lastFundingUtc?: number | null;
  /**
   * Most recent funding stage, e.g. series_e.
   */
  latestFundingStage?: string | null;
  /**
   * People Data Labs' 1 to 10 confidence that this record is the company you asked for.
   */
  likelihood?: number | null;
  /**
   * LinkedIn follower count.
   */
  linkedinFollowers?: number | null;
  /**
   * Company LinkedIn numeric id.
   */
  linkedinId?: string | null;
  /**
   * Company LinkedIn vanity slug.
   */
  linkedinSlug?: string | null;
  /**
   * Company LinkedIn page URL.
   * Format: uri.
   */
  linkedinUrl?: string | null;
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
  } | null;
  /**
   * Median employee tenure in years.
   */
  medianEmployeeTenure?: number | null;
  /**
   * Median tenure in years, keyed by seniority level.
   */
  medianTenureByLevel?: {} | null;
  /**
   * Median tenure in years, keyed by role.
   */
  medianTenureByRole?: {} | null;
  /**
   * MIC code of the exchange the company lists on.
   */
  micExchange?: string | null;
  /**
   * NAICS classification for the company.
   */
  naicsCodes?: CompanyEnrichmentPeopledatalabsNaicsCode[] | null;
  /**
   * Company name as People Data Labs displays it.
   */
  name: string | null;
  /**
   * Lowercase normalized company name, the form People Data Labs matches on.
   */
  nameNormalized?: string | null;
  /**
   * People Data Labs persistent company id.
   */
  pdlId?: string | null;
  /**
   * Every social profile People Data Labs links to the company.
   */
  profiles?: string[] | null;
  /**
   * SIC classification for the company.
   */
  sicCodes?: CompanyEnrichmentPeopledatalabsSicCode[] | null;
  /**
   * Employee headcount band, e.g. 11-50.
   */
  size?: string | null;
  /**
   * Long company description.
   */
  summary?: string | null;
  /**
   * Descriptive tags for the company.
   */
  tags?: string[] | null;
  /**
   * Stock ticker, for listed companies.
   */
  ticker?: string | null;
  /**
   * Total capital raised, in USD.
   */
  totalFundingRaised?: number | null;
  /**
   * Company X (Twitter) profile URL.
   * Format: uri.
   */
  twitterUrl?: string | null;
  /**
   * Ownership type, e.g. private, public.
   */
  type?: string | null;
  /**
   * People Data Labs company id of the ultimate parent company.
   */
  ultimateParent?: string | null;
  /**
   * Company website domain.
   */
  website?: string | null;
  [extra: string]: unknown;
}

/**
 * Input for Company Enrichment - Prospeo (company_enrichment.prospeo).
 */
export interface CompanyEnrichmentProspeoInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Prospeo's own company identifier, as returned by this SKU's companyId output.
   */
  companyId?: string;
  /**
   * Company LinkedIn page URL.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Company name, for when you have no domain.
   */
  companyName?: string;
  /**
   * Company domain, e.g. stripe.com. The most reliable identifier.
   */
  companyWebsite?: string;
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

export interface CompanyEnrichmentProspeoEvent {
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
 * The `data` payload of Company Enrichment - Prospeo (company_enrichment.prospeo).
 */
export interface CompanyEnrichmentProspeoData {
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
  } | null;
  /**
   * Prospeo's own company identifier. Send it back as this SKU's companyId input.
   */
  companyId?: string | null;
  /**
   * Company Crunchbase profile URL.
   * Format: uri.
   */
  crunchbaseUrl?: string | null;
  /**
   * Company description as the company writes it.
   */
  description?: string | null;
  /**
   * Prospeo's own AI-written company summary.
   */
  descriptionAi?: string | null;
  /**
   * Meta description from the company's website.
   */
  descriptionSeo?: string | null;
  /**
   * Primary company domain.
   */
  domain?: string | null;
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
  } | null;
  /**
   * Employees Prospeo currently counts.
   */
  employeeCount?: number | null;
  /**
   * Employees of this company that Prospeo holds a profile for.
   */
  employeeCountOnProspeo?: number | null;
  /**
   * Employee headcount band, e.g. 10000+.
   */
  employeeRange?: string | null;
  /**
   * Company Facebook page URL.
   * Format: uri.
   */
  facebookUrl?: string | null;
  /**
   * Year the company was founded.
   */
  founded?: number | null;
  /**
   * True when Prospeo served this record from cache and did not charge for it.
   */
  freeEnrichment?: boolean | null;
  /**
   * Funding history.
   */
  funding?: {
    /**
     * One entry per funding round.
     */
    events?: CompanyEnrichmentProspeoEvent[] | null;
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
  } | null;
  /**
   * Company logo URL.
   * Format: uri.
   */
  image?: string | null;
  /**
   * Company industry.
   */
  industry?: string | null;
  /**
   * Company Instagram profile URL.
   * Format: uri.
   */
  instagramUrl?: string | null;
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
  } | null;
  /**
   * Keywords Prospeo assigns the company.
   */
  keywords?: string[] | null;
  /**
   * Company LinkedIn numeric id.
   */
  linkedinId?: string | null;
  /**
   * Company LinkedIn page URL.
   * Format: uri.
   */
  linkedinUrl?: string | null;
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
  } | null;
  /**
   * NAICS classification codes for the company.
   */
  naicsCodes?: string[] | null;
  /**
   * Company name.
   */
  name: string | null;
  /**
   * Other domains the company owns.
   */
  otherWebsites?: string[] | null;
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
  } | null;
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
  } | null;
  /**
   * Annual revenue band as a display string.
   */
  revenueRangePrinted?: string | null;
  /**
   * SIC classification codes for the company.
   */
  sicCodes?: string[] | null;
  /**
   * Technologies Prospeo detects in the company's stack.
   */
  technologies?: string[] | null;
  /**
   * Company X (Twitter) profile URL.
   * Format: uri.
   */
  twitterUrl?: string | null;
  /**
   * Ownership type, e.g. Private, Public, Non Profit.
   */
  type?: string | null;
  /**
   * Company website URL.
   * Format: uri.
   */
  website?: string | null;
  /**
   * Company YouTube channel URL.
   * Format: uri.
   */
  youtubeUrl?: string | null;
  [extra: string]: unknown;
}

/**
 * Typed methods for the company_enrichment platform. Attached to the AnyAPI client as
 * `client.companyEnrichment`.
 */
export class CompanyEnrichmentNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Company Enrichment - Crustdata
   *
   * Enrich a company by domain, name, LinkedIn URL, or Crustdata identifier.
   *
   * Price: $0.096 per request.
   *
   * @example
   * const res = await client.companyEnrichment.crustdata({ companyDomain: "posthog.com" });
   */
  crustdata(
    input: CompanyEnrichmentCrustdataInput,
    options?: RequestOptions,
  ): Promise<RunResult<CompanyEnrichmentCrustdataData>> {
    return this._core.run("company_enrichment.crustdata", input, options);
  }

  /**
   * Company Enrichment - Data Legion
   *
   * Enrich one company from a domain or a company name into Data Legion's premium firmographics: industry, size, founding year, office locations, stock tickers and social profiles, plus headcount, hiring, attrition, growth and turnover, workforce breakdowns by seniority, function and tenure, and monthly headcount history.
   *
   * Price: $0.00006 per request plus $0.048 per result (maximum $0.04806).
   *
   * @example
   * const res = await client.companyEnrichment.datalegion({ domain: "hubspot.com" });
   */
  datalegion(
    input: CompanyEnrichmentDatalegionInput,
    options?: RequestOptions,
  ): Promise<RunResult<CompanyEnrichmentDatalegionData>> {
    return this._core.run("company_enrichment.datalegion", input, options);
  }

  /**
   * Company Enrichment - Lusha
   *
   * Enrich one company into firmographics, industry classification, headcount, revenue band and social profiles from a domain, a company name, or a Lusha company id.
   *
   * Price: $0.084 per request.
   *
   * @example
   * const res = await client.companyEnrichment.lusha({ domain: "posthog.com" });
   */
  lusha(
    input: CompanyEnrichmentLushaInput,
    options?: RequestOptions,
  ): Promise<RunResult<CompanyEnrichmentLushaData>> {
    return this._core.run("company_enrichment.lusha", input, options);
  }

  /**
   * Company Enrichment - People Data Labs
   *
   * Enrich one company into firmographics, funding history, NAICS and SIC classification, and People Data Labs' headcount growth, tenure and churn series from a domain or a company name.
   *
   * Price: $0.12 per request.
   *
   * @example
   * const res = await client.companyEnrichment.peopledatalabs({ domain: "posthog.com" });
   */
  peopledatalabs(
    input: CompanyEnrichmentPeopledatalabsInput,
    options?: RequestOptions,
  ): Promise<RunResult<CompanyEnrichmentPeopledatalabsData>> {
    return this._core.run("company_enrichment.peopledatalabs", input, options);
  }

  /**
   * Company Enrichment - Prospeo
   *
   * Enrich one company into firmographics, funding history, technology stack, open roles and headquarters contact details from a website, a company name, or a LinkedIn page.
   *
   * Price: $0.066 per request.
   *
   * @example
   * const res = await client.companyEnrichment.prospeo({ companyWebsite: "stripe.com" });
   */
  prospeo(
    input: CompanyEnrichmentProspeoInput,
    options?: RequestOptions,
  ): Promise<RunResult<CompanyEnrichmentProspeoData>> {
    return this._core.run("company_enrichment.prospeo", input, options);
  }
}
