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
  /**
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface CompanyEnrichmentCrustdataV3HeadcountTimeserie {
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

export interface CompanyEnrichmentCrustdataV3SicCode {
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
 * The `data` payload of Company Enrichment - Crustdata v3 (company_enrichment.crustdata_v3).
 */
export interface CompanyEnrichmentCrustdataV3Data {
  /**
   * Acquisition status, when the company has been acquired.
   */
  acquisitionStatus?: string;
  /**
   * Crustdata identifier for the company, accepted back as the companyId input.
   */
  companyId?: string;
  /**
   * Company type, e.g. Privately Held or Public Company.
   */
  companyType?: string;
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
  domain: string | null;
  /**
   * All domains associated with the company.
   */
  domains?: string[];
  /**
   * Latest observed employee count.
   */
  employeeCount?: number;
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
  };
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
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Founding date of the company.
   */
  foundedUtc?: number;
  /**
   * Year the company was founded.
   */
  foundedYear?: number;
  /**
   * True when the matched company's domain is an exact match for the requested one.
   */
  fullDomainMatch?: boolean;
  /**
   * Headcount history broken down by region and by job function. Untyped passthrough: the whole nested structure ships exactly as Crustdata returns it, including its raw snake_case grouping keys (GEO_REGION, CURRENT_FUNCTION) and its string observation dates rather than epoch seconds, because the shape cannot be expressed in the canonical field grammar.
   */
  headcountByFunctionTimeseries?: unknown;
  /**
   * Employee count per region, keyed by LinkedIn region name.
   */
  headcountByRegion?: {};
  /**
   * Share of employees per region as a percent, keyed by LinkedIn region name.
   */
  headcountByRegionPercent?: {};
  /**
   * Employee count per job function, keyed by LinkedIn function name.
   */
  headcountByRole?: {};
  /**
   * Share of employees per job function as a percent, keyed by LinkedIn function name.
   */
  headcountByRolePercent?: {};
  /**
   * Six-month percent headcount change per job function, exactly as Crustdata returns it. Untyped passthrough: the structure ships verbatim and is not validated, because it was empty for the company we captured.
   */
  headcountByRoleSixMonthsGrowthPercent?: unknown;
  /**
   * Year-over-year percent headcount change per job function, exactly as Crustdata returns it. Untyped passthrough: the structure ships verbatim and is not validated, because it was empty for the company we captured.
   */
  headcountByRoleYoyGrowthPercent?: unknown;
  /**
   * Employee count per listed skill, keyed by skill name.
   */
  headcountBySkill?: {};
  /**
   * Share of employees per listed skill as a percent, keyed by skill name.
   */
  headcountBySkillPercent?: {};
  /**
   * Historical employee-count observations, oldest first.
   */
  headcountTimeseries?: CompanyEnrichmentCrustdataV3HeadcountTimeserie[];
  /**
   * Country of the headquarters.
   */
  hqCountry?: string;
  /**
   * State or province of the headquarters.
   */
  hqState?: string;
  /**
   * Headquarters street address. Crustdata returns the same string as location for most companies.
   */
  hqStreetAddress?: string;
  /**
   * Company logo URL.
   * Format: uri.
   */
  image?: string;
  /**
   * All LinkedIn industries listed for the company.
   */
  industries?: string[];
  /**
   * Primary LinkedIn industry.
   */
  industry?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Date the company went public.
   */
  ipoUtc?: number;
  /**
   * Country holding the largest share of employees.
   */
  largestHeadcountCountry?: string;
  /**
   * LinkedIn's own numeric identifier for the company page.
   */
  linkedinCompanyId?: string;
  /**
   * Company logo URL as LinkedIn serves it, including the signed expiry query LinkedIn requires to serve the file. The image field carries Crustdata's cached copy of the same logo, which does not expire.
   * Format: uri.
   */
  linkedinLogoUrl?: string;
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
   * Headquarters location.
   */
  location?: string;
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
  };
  /**
   * Company name.
   */
  name: string;
  /**
   * Regions bucketed by the share of headcount they represent. Restates headcountByRegionPercent as bands.
   */
  regionMetrics?: {
    /**
     * Comma separated regions that each account for 0 to 10 percent of headcount.
     */
    share0To10Percent?: string;
    /**
     * Comma separated regions that each account for 11 to 30 percent of headcount.
     */
    share11To30Percent?: string;
    /**
     * Comma separated regions that each account for 31 to 50 percent of headcount.
     */
    share31To50Percent?: string;
    /**
     * Comma separated regions that each account for 51 to 70 percent of headcount.
     */
    share51To70Percent?: string;
    /**
     * Comma separated regions that each account for 71 to 100 percent of headcount.
     */
    share71To100Percent?: string;
  };
  /**
   * Job functions bucketed by the share of headcount they represent. Restates headcountByRolePercent as bands.
   */
  roleMetrics?: {
    /**
     * Every job function present at the company, comma separated.
     */
    allRoles?: string;
    /**
     * Comma separated job functions that each account for 0 to 10 percent of headcount.
     */
    share0To10Percent?: string;
    /**
     * Comma separated job functions that each account for 11 to 30 percent of headcount.
     */
    share11To30Percent?: string;
    /**
     * Comma separated job functions that each account for 31 to 50 percent of headcount.
     */
    share31To50Percent?: string;
    /**
     * Comma separated job functions that each account for 51 to 70 percent of headcount.
     */
    share51To70Percent?: string;
    /**
     * Comma separated job functions that each account for 71 to 100 percent of headcount.
     */
    share71To100Percent?: string;
  };
  /**
   * SIC industry classifications assigned to the company.
   */
  sicCodes?: CompanyEnrichmentCrustdataV3SicCode[];
  /**
   * Skills bucketed by the share of headcount that lists them. Restates headcountBySkillPercent as bands.
   */
  skillMetrics?: {
    /**
     * Comma separated skills that each account for 0 to 10 percent of headcount.
     */
    share0To10Percent?: string;
    /**
     * Comma separated skills that each account for 11 to 30 percent of headcount.
     */
    share11To30Percent?: string;
    /**
     * Comma separated skills that each account for 31 to 50 percent of headcount.
     */
    share31To50Percent?: string;
    /**
     * Comma separated skills that each account for 51 to 70 percent of headcount.
     */
    share51To70Percent?: string;
    /**
     * Comma separated skills that each account for 71 to 100 percent of headcount.
     */
    share71To100Percent?: string;
  };
  /**
   * Speciality tags the company lists on LinkedIn.
   */
  specialities?: string[];
  /**
   * X (Twitter) profile URL.
   * Format: uri.
   */
  twitterUrl?: string;
  /**
   * Company website URL.
   * Format: uri.
   */
  website?: string;
  [extra: string]: unknown;
}

/**
 * Input for Company Enrichment - Lusha (company_enrichment.lusha).
 */
export interface CompanyEnrichmentLushaInput {
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
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface CompanyEnrichmentLushaNaicsCode {
  /**
   * NAICS code.
   */
  code: string;
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
  code: string;
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
  address?: string;
  /**
   * Other domains the company owns.
   */
  alternativeDomains?: string[];
  /**
   * Alternative name Lusha holds for the company.
   */
  alternativeName?: string;
  /**
   * Lusha's own company identifier. Send it back as this SKU's companyId input.
   */
  companyId?: string;
  /**
   * Ownership type, e.g. Private Company.
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
   * Domain the company's work email addresses use.
   */
  emailDomain?: string;
  /**
   * Employee headcount band as Lusha bands it, e.g. 51 - 200.
   */
  employeeRange?: string;
  /**
   * Employees LinkedIn shows for the company.
   */
  employeesOnLinkedin?: number;
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
   * Fully qualified host for the company website.
   */
  fqdn?: string;
  /**
   * Company logo URL.
   * Format: uri.
   */
  image?: string;
  /**
   * LinkedIn follower count.
   */
  linkedinFollowers?: number;
  /**
   * Company LinkedIn page URL.
   * Format: uri.
   */
  linkedinUrl?: string;
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
  };
  /**
   * Top-level industry.
   */
  mainIndustry?: string;
  /**
   * NAICS classification codes for the company.
   */
  naicsCodes?: CompanyEnrichmentLushaNaicsCode[];
  /**
   * Company name.
   */
  name: string;
  /**
   * Every office location Lusha holds for the company.
   */
  offices?: CompanyEnrichmentLushaOffice[];
  /**
   * Lusha's popularity tier for the company, 1 being the most prominent.
   */
  popularityTier?: number;
  /**
   * Lusha's internal record id for the company row.
   */
  recordId?: string;
  /**
   * Annual revenue band in USD as [min, max].
   */
  revenueRange?: number[];
  /**
   * SIC classification codes for the company.
   */
  sicCodes?: CompanyEnrichmentLushaSicCode[];
  /**
   * Specialities the company lists for itself.
   */
  specialities?: string[];
  /**
   * Sub-industry.
   */
  subIndustry?: string;
  /**
   * Company website URL.
   * Format: uri.
   */
  website?: string;
  /**
   * Company X (Twitter) profile URL.
   * Format: uri.
   */
  xUrl?: string;
  [extra: string]: unknown;
}

/**
 * Input for Company Enrichment - People Data Labs (company_enrichment.peopledatalabs).
 */
export interface CompanyEnrichmentPeopledatalabsInput {
  /**
   * Comma-separated People Data Labs fields to include, or a leading - list to exclude. Projection changes the payload only; it does not reduce what the call costs.
   */
  dataInclude?: string;
  /**
   * Company website domain, e.g. posthog.com. The strongest identifier.
   */
  domain?: string;
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
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * People Data Labs boolean expression over top-level fields that a match must satisfy, e.g. website and industry.
   */
  required?: string;
  /**
   * Return text in title case instead of People Data Labs' lowercase default.
   */
  titlecase?: boolean;
}

export interface CompanyEnrichmentPeopledatalabsNaicsCode {
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

export interface CompanyEnrichmentPeopledatalabsSicCode {
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
 * The `data` payload of Company Enrichment - People Data Labs (company_enrichment.peopledatalabs).
 */
export interface CompanyEnrichmentPeopledatalabsData {
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
   * Version of the People Data Labs dataset this record came from.
   */
  datasetVersion?: string;
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
   * People Data Labs' 1 to 10 confidence that this record is the company you asked for.
   */
  likelihood?: number;
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
  naicsCodes?: CompanyEnrichmentPeopledatalabsNaicsCode[];
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
  sicCodes?: CompanyEnrichmentPeopledatalabsSicCode[];
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

/**
 * Input for Company Enrichment - Prospeo (company_enrichment.prospeo).
 */
export interface CompanyEnrichmentProspeoInput {
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
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * True when Prospeo served this record from cache and did not charge for it.
   */
  freeEnrichment?: boolean;
  /**
   * Funding history.
   */
  funding?: {
    /**
     * One entry per funding round.
     */
    events?: CompanyEnrichmentProspeoEvent[];
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
   * Price: $0.048 per request.
   *
   * @example
   * const res = await client.companyEnrichment.crustdataV3({ companyDomain: "posthog.com" });
   */
  crustdataV3(
    input: CompanyEnrichmentCrustdataV3Input,
    options?: RequestOptions,
  ): Promise<RunResult<CompanyEnrichmentCrustdataV3Data>> {
    return this._core.run("company_enrichment.crustdata_v3", input, options);
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
