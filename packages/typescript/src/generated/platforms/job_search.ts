// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Job Search - TheirStack (job_search.theirstack).
 */
export interface JobSearchTheirstackInput {
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
   * Only jobs discovered by TheirStack on this date or datetime or after will be returned. In UTC timezone.
   */
  discoveredAtGte?: string;
  /**
   * Only jobs discovered by TheirStack on this date or datetime or before will be returned. In UTC timezone.
   */
  discoveredAtLte?: string;
  /**
   * If 0, only return jobs added to our database in the current day. If 1, from today and yesterday, etc.
   */
  discoveredAtMaxAgeDays?: number;
  /**
   * If 1, only return jobs discovered by TheirStack until yesterday. If 2, until 2 days ago, etc.
   */
  discoveredAtMinAgeDays?: number;
  /**
   * If True, only return jobs that can be applied directly through the job board. If False, only return jobs that require redirecting to the company's website.
   */
  easyApply?: boolean;
  /**
   * Filter jobs by employment status. Returns jobs that match any of the specified employment types. If no values are provided or an empty list is sent, all jobs regardless of employment status will be returned.
   */
  employmentStatusesOr?: string[];
  /**
   * (Use `property_exists_or / property_exists_and` instead) Only return jobs with a final URL. Typically jobs that were originally posted on an ATS. If True, only return jobs with a final URL. If False, only return jobs without a final URL. If None, return all jobs.
   */
  finalUrlExists?: boolean;
  /**
   * Funding stages of companies returned. Possible values: ['angel', 'convertible_note', 'debt_financing', 'equity_crowdfunding', 'other', 'private_equity', 'seed', 'series_a', 'series_b', 'series_c', 'series_d', 'series_e', 'series_f', 'series_g', 'series_h', 'venture_round_not_specified', 'series_i', 'series_j', 'undisclosed', 'series_unknown', 'pre_seed', 'post_ipo_secondary', 'post_ipo_equity', 'post_ipo_debt', 'non_equity_assistance', 'late_vc', 'initial_coin_offering', 'growth_equity_vc', 'grant', 'early_vc', 'corporate_round', 'secondary_market', 'product_crowdfunding']
   */
  fundingStageOr?: string[];
  /**
   * (Use `property_exists_or / property_exists_and` instead) If True, only return jobs with a hiring manager. If False, only return jobs without a hiring manager. If None, return all jobs.
   */
  hiringManagersExists?: boolean;
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
  /**
   * 2-letter ISO country code of the location of the job. Can pass more than 1. Will exclude jobs from these countries
   */
  jobCountryCodeNot?: string[];
  /**
   * 2-letter ISO country code of the location of the job. Can pass more than 1
   */
  jobCountryCodeOr?: string[];
  /**
   * Exclude jobs whose description contains any of these whole words using word boundaries (\b). Case-insensitive by default, except for the patterns that are uppercase - in that case we'll respect it. Only finds complete words (e.g., searching 'quality' won't match 'inequality'). Results will exclude jobs whose description contains any of these words.
   */
  jobDescriptionContainsNot?: string[];
  /**
   * Search for whole words in job descriptions using word boundaries (\b). Case-insensitive by default, except for the patterns that are uppercase - in that case we'll respect it. Only finds complete words (e.g., searching 'quality' won't match 'inequality'). Results will include jobs whose description contains any of these words.
   */
  jobDescriptionContainsOr?: string[];
  /**
   * Regex patterns that must ALL match the job description (AND logic). Use (?i) at the start of a pattern to make it case-insensitive. Results will only include jobs whose description matches every pattern in this list.
   */
  jobDescriptionPatternAnd?: string[];
  /**
   * Deprecated. Use job_description_pattern_or instead, which now behaves identically.
   */
  jobDescriptionPatternCaseSensitiveOr?: string[];
  /**
   * Deprecated. Has no effect.
   */
  jobDescriptionPatternIsCaseInsensitive?: boolean;
  /**
   * Regex patterns to look for in job descriptions. Case-sensitive. Results will include jobs whose description don't match any of these patterns. Use (?i) at the start of a pattern to make it case-insensitive. Can pass more than one.
   */
  jobDescriptionPatternNot?: string[];
  /**
   * Regex patterns to look for in job descriptions. Case-sensitive. Results will include jobs whose description matches any of these patterns. Use (?i) at the start of a pattern to make it case-insensitive. Can pass more than one.
   */
  jobDescriptionPatternOr?: string[];
  /**
   * Exclude jobs with these IDs.
   */
  jobIdNot?: string[];
  /**
   * Get jobs with these IDs only.
   */
  jobIdOr?: string[];
  /**
   * Get jobs with these IDs only. Deprecated parameter, use job_id_or instead.
   */
  jobIds?: string[];
  /**
   * Will return jobs where all of these keyword slugs appear. Case sensitive. Check out all the keywords we track at GET /v0/catalog/keywords
   */
  jobKeywordSlugAnd?: string[];
  /**
   * Will return jobs where none of these keyword slugs appear. Case sensitive. Check out all the keywords we track at GET /v0/catalog/keywords
   */
  jobKeywordSlugNot?: string[];
  /**
   * Will return jobs where any of these keyword slugs appear. Case sensitive. Check out all the keywords we track at GET /v0/catalog/keywords
   */
  jobKeywordSlugOr?: string[];
  /**
   * Filter jobs by location. Returns jobs whose locations DO NOT match ANY of the specified location criteria. Each location criteria is specified using a JobLocationFilter object. (You can find location IDs using the locations catalog endpoint)
   */
  jobLocationNot?: string[];
  /**
   * Filter jobs by location. Returns jobs whose locations match ANY of the specified location criteria. Each location criteria is specified using a JobLocationFilter object. (You can find location IDs using the locations catalog endpoint)
   */
  jobLocationOr?: string[];
  /**
   * Regex patterns to exclude job locations. Case-insensitive. Searches both the location field and the enhanced locations array (using normalized city and state name fields within each location element). Jobs matching ANY of the provided patterns will be EXCLUDED from results. Use this to filter out specific locations.
   */
  jobLocationPatternNot?: string[];
  /**
   * Regex patterns to match job locations. Case-insensitive. Searches both the location field and the enhanced locations array (using normalized city and state name fields within each location element). Jobs matching ANY of the provided patterns will be returned. Use this to find jobs in specific cities, states, or regions.
   */
  jobLocationPatternOr?: string[];
  /**
   * Will return jobs where the seniority is any of the ones passed here
   */
  jobSeniorityOr?: string[];
  /**
   * Will return jobs where all of these technologies appear. Case sensitive. Pass slugs. Check out all the technologies we track with the technologies endpoint.
   */
  jobTechnologySlugAnd?: string[];
  /**
   * Will return jobs where none of these technologies appear. Case sensitive. Pass slugs. Check out all the technologies we track with the technologies endpoint.
   */
  jobTechnologySlugNot?: string[];
  /**
   * Will return jobs where any of these technologies appear. Case sensitive. Pass slugs. Check out all the technologies we track with the technologies endpoint. If you pass more than one technology, we will return jobs that mentnion all of the technologies.
   */
  jobTechnologySlugOr?: string[];
  /**
   * Natural language patterns to match job titles. Case-insensitive. Only jobs with title that do not match any of these patterns will be returned. Uses Postgres full text search.
   */
  jobTitleNot?: string[];
  /**
   * Natural language patterns to match job titles. Case-insensitive. Only jobs with title that match any of these patterns will be returned. Uses Postgres full text search.
   */
  jobTitleOr?: string[];
  /**
   * Regex patterns to match job titles. Case-insensitive. Only jobs with title that match all of these patterns will be returned.
   */
  jobTitlePatternAnd?: string[];
  /**
   * Regex patterns to match job titles. Case-insensitive. Jobs whose job title doesn't match any of the patterns will be returned.
   */
  jobTitlePatternNot?: string[];
  /**
   * Regex patterns to match job titles. Case-insensitive. Jobs whose job title matches of the filters will be returned.
   */
  jobTitlePatternOr?: string[];
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
   * Range: minimum 1, maximum 148.
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
   * Maximum annual salary in USD. For example, 150000 means $150,000.
   */
  maxSalaryUsd?: number;
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
   * Minimum annual salary in USD. For example, 100000 means $100,000.
   */
  minSalaryUsd?: number;
  /**
   * Number of results to skip. Required for offset-based pagination.
   */
  offset?: number;
  /**
   * Only return jobs with a hiring manager. If True, only return jobs with a hiring manager. If False, only return jobs without a hiring manager. If None, return all jobs.
   */
  onlyJobsWithHiringManagers?: boolean;
  /**
   * Only return jobs where we identified the role the hired person would report to. Deprecated field, use reports_to_exists instead.
   */
  onlyJobsWithReportsTo?: boolean;
  /**
   * Only return YC companies
   */
  onlyYcCompanies?: boolean;
  /**
   * List of column objects. You can pass several columns to order by, in order of priority. Only `field` is required, `desc` is True by default.
   */
  orderBy?: string[];
  /**
   * Page number. Required when using page-based pagination.
   */
  page?: number;
  /**
   * ISO 8601 date string (yyyy-mm-dd). Only jobs published in this date or after will be returned.
   */
  postedAtGte?: string;
  /**
   * ISO 8601 date string (yyyy-mm-dd). Only jobs published in this date or before will be returned.
   */
  postedAtLte?: string;
  /**
   * Date posted max age in days. If 0, only return jobs posted today. If 1, from today and yesterday, etc.
   */
  postedAtMaxAgeDays?: number;
  propertyExistsAnd?: string[];
  /**
   * Return jobs that have any of these fields not null. For example, if you pass ['final_url'], it will return jobs that have a final_url set. This field also support chaining of fields. For example, if you pass ['company_object.domain', 'company_object.linkedin_url'], it will return jobs that have a company domain or a company linkedin_url set.
   */
  propertyExistsOr?: string[];
  /**
   * True: only show remote jobs. False: only show non-remote jobs. None: show all jobs.
   */
  remote?: boolean;
  /**
   * Only return jobs where we identified the role the hired person would report to. If True, only return jobs where we identified the role the hired person would report to. If False, only return jobs where we didn't identify the role the hired person would report to. If None, return all jobs.
   */
  reportsToExists?: boolean;
  /**
   * Regex patterns to match job sources. Case-insensitive.
   */
  scraperNamePatternOr?: string[];
  /**
   * Exclude jobs if their URL domain (from `url` or `source_url`) is in the provided case-insensitive list. For example, ['greenhouse.io', 'workable.com'] will exclude URLs containing 'greenhouse.io' or 'workable.com'. Refer to our list of sources at https://theirstack.com/en/docs/data/job/sources.
   */
  urlDomainNot?: string[];
  /**
   * Include jobs only if their URL domain (from `url` or `source_url`) is in the provided case-insensitive list. For example, ['greenhouse.io', 'workable.com'] will match URLs containing 'greenhouse.io' or 'workable.com'. Refer to our list of sources at https://theirstack.com/en/docs/data/job/sources.
   */
  urlDomainOr?: string[];
}

export interface JobSearchTheirstackJob {
  /**
   * Midpoint of the posted annual salary, converted to USD.
   */
  avgAnnualSalaryUsd?: number;
  /**
   * Every city the post covers.
   */
  cities?: string[];
  /**
   * UTC epoch timestamp in seconds (Unix time) the post closed. Multiply by 1000 for a JS Date in milliseconds.
   */
  closedUtc?: number;
  /**
   * The hiring company's full TheirStack firmographic record.
   */
  company?: {
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
    name?: string;
    /**
     * Distinct buying-intent topics detected in the company's job posts.
     */
    numBuyingIntentTopics?: number;
    /**
     * Job posts TheirStack holds for the company, all time.
     */
    numJobs?: number;
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
     * Y Combinator batch, e.g. W20, for companies that went through it.
     */
    ycBatch?: string;
  };
  /**
   * Hiring company domain.
   */
  companyDomain?: string;
  /**
   * Hiring company name.
   */
  companyName?: string;
  /**
   * Every continent the post covers.
   */
  continents?: string[];
  /**
   * Every country the post covers.
   */
  countries?: string[];
  /**
   * Country name.
   */
  country?: string;
  /**
   * ISO 3166-1 alpha-2 country code.
   */
  countryCode?: string;
  /**
   * Every country code the post covers.
   */
  countryCodes?: string[];
  /**
   * Full job description text.
   */
  description?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) TheirStack first saw the post. Multiply by 1000 for a JS Date in milliseconds.
   */
  discoveredUtc?: number;
  /**
   * True when the post supports one-click apply.
   */
  easyApply?: boolean;
  /**
   * Employment types, e.g. full_time.
   */
  employmentStatuses?: string[];
  /**
   * URL the post redirects to, when it does.
   * Format: uri.
   */
  finalUrl?: string;
  /**
   * True when TheirStack redacted part of the record on this plan.
   */
  hasBlurredData?: boolean;
  /**
   * True for a hybrid role.
   */
  hybrid?: boolean;
  /**
   * TheirStack's own identifier for the post.
   */
  jobId: string;
  /**
   * Keyword slugs found in the post.
   */
  keywordSlugs?: string[];
  /**
   * Latitude of the posted location.
   */
  latitude?: number;
  /**
   * Location as posted.
   */
  location?: string;
  /**
   * Every resolved location the post covers, with TheirStack's geographic breakdown.
   */
  locations?: JobSearchTheirstackLocation[];
  /**
   * Long form of the location.
   */
  longLocation?: string;
  /**
   * Longitude of the posted location.
   */
  longitude?: number;
  /**
   * Manager roles TheirStack extracted from the post.
   */
  managerRoles?: string[];
  /**
   * Phrases from your pattern filters that matched this post.
   */
  matchingPhrases?: string[];
  /**
   * Words from your pattern filters that matched this post.
   */
  matchingWords?: string[];
  /**
   * Upper bound of the posted annual salary, in the posted currency.
   */
  maxAnnualSalary?: number;
  /**
   * Upper bound of the posted annual salary, converted to USD.
   */
  maxAnnualSalaryUsd?: number;
  /**
   * Lower bound of the posted annual salary, in the posted currency.
   */
  minAnnualSalary?: number;
  /**
   * Lower bound of the posted annual salary, converted to USD.
   */
  minAnnualSalaryUsd?: number;
  /**
   * TheirStack's normalized form of the title.
   */
  normalizedTitle?: string;
  /**
   * Postal code.
   */
  postalCode?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the job was posted. Multiply by 1000 for a JS Date in milliseconds.
   */
  postedUtc?: number;
  /**
   * True for a fully remote role.
   */
  remote?: boolean;
  /**
   * True when the post is a repost of an earlier one.
   */
  reposted?: boolean;
  /**
   * UTC epoch timestamp in seconds (Unix time) the post was last reposted. Multiply by 1000 for a JS Date in milliseconds.
   */
  repostedUtc?: number;
  /**
   * Currency the posted salary is in.
   */
  salaryCurrency?: string;
  /**
   * Salary exactly as the post states it.
   */
  salaryString?: string;
  /**
   * Seniority band TheirStack assigns, e.g. mid_level.
   */
  seniority?: string;
  /**
   * Short form of the location.
   */
  shortLocation?: string;
  /**
   * URL TheirStack found the post at.
   * Format: uri.
   */
  sourceUrl?: string;
  /**
   * State or region code.
   */
  stateCode?: string;
  /**
   * Technology slugs found in the post.
   */
  technologySlugs?: string[];
  /**
   * Job title as posted.
   */
  title: string;
  /**
   * URL of the job post.
   * Format: uri.
   */
  url?: string;
  [extra: string]: unknown;
}

export interface JobSearchTheirstackLocation {
  /**
   * Street address, when the post gives one.
   */
  address?: string;
  /**
   * First-level administrative division code.
   */
  admin1Code?: string;
  /**
   * First-level administrative division name.
   */
  admin1Name?: string;
  /**
   * Second-level administrative division code.
   */
  admin2Code?: string;
  /**
   * Second-level administrative division name.
   */
  admin2Name?: string;
  /**
   * City.
   */
  city?: string;
  /**
   * Continent code, e.g. NA.
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
  displayName?: string;
  /**
   * GeoNames feature code for the place.
   */
  featureCode?: string;
  /**
   * Latitude.
   */
  latitude?: number;
  /**
   * TheirStack's identifier for the place.
   */
  locationId?: string;
  /**
   * Longitude.
   */
  longitude?: number;
  /**
   * Location name.
   */
  name: string;
  /**
   * Postal code.
   */
  postalCode?: string;
  /**
   * State or region.
   */
  state?: string;
  /**
   * State or region code.
   */
  stateCode?: string;
  /**
   * Granularity of the place, e.g. city, state, country.
   */
  type?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Job Search - TheirStack (job_search.theirstack).
 */
export interface JobSearchTheirstackData {
  /**
   * Matching job posts, each carrying the hiring company's firmographic record.
   */
  jobs: JobSearchTheirstackJob[];
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
 * Typed methods for the job_search platform. Attached to the AnyAPI client as
 * `client.jobSearch`.
 */
export class JobSearchNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Job Search - TheirStack
   *
   * Search TheirStack's job-post index by company, technology, keyword, title, seniority, salary, location and how recently the post appeared, and get the hiring company's full firmographic record with every post. Billed per job returned.
   *
   * Price: $0 per request plus $0.0672 per result (maximum $9.9456).
   *
   * @example
   * const res = await client.jobSearch.theirstack({ companyDomainOr: ["stripe.com"], limit: 1, postedAtMaxAgeDays: 30 });
   */
  theirstack(
    input: JobSearchTheirstackInput,
    options?: RequestOptions,
  ): Promise<RunResult<JobSearchTheirstackData>> {
    return this._core.run("job_search.theirstack", input, options);
  }
}
