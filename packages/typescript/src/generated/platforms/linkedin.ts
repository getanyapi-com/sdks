// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for LinkedIn Ad Details (linkedin.ad).
 */
export interface LinkedinAdInput {
  /**
   * LinkedIn Ad Library ad URL (e.g. "https://www.linkedin.com/ad-library/detail/666281156").
   */
  url: string;
}

export type LinkedinAdData = unknown;

/**
 * Input for LinkedIn Ads Library (linkedin.ads).
 */
export interface LinkedinAdsInput {
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * LinkedIn Ad Library search URL or a LinkedIn company URL (e.g. https://www.linkedin.com/ad-library/search?companyIds=1035).
   */
  url: string;
}

export type LinkedinAdsData = unknown;

/**
 * Input for LinkedIn Ad Search (linkedin.ads_search).
 */
export interface LinkedinAdsSearchInput {
  /**
   * Company name to search (e.g. "microsoft").
   */
  company?: string;
  /**
   * LinkedIn company identifier.
   */
  companyId?: string;
  /**
   * Comma-separated two-letter country codes (e.g. "US,CA,MX").
   */
  countries?: string;
  /**
   * Search end date in YYYY-MM-DD format.
   */
  endDate?: string;
  /**
   * Keyword term for the ad search.
   */
  keyword?: string;
  /**
   * Opaque pagination token from a previous response's nextCursor.
   */
  paginationToken?: string;
  /**
   * Search start date in YYYY-MM-DD format.
   */
  startDate?: string;
}

export type LinkedinAdsSearchData = unknown;

/**
 * Input for LinkedIn Company (linkedin.company).
 */
export interface LinkedinCompanyInput {
  /**
   * Full LinkedIn company page URL.
   */
  url: string;
}

export type LinkedinCompanyData = unknown;

/**
 * Input for LinkedIn Company Employees (linkedin.company_employees).
 */
export interface LinkedinCompanyEmployeesInput {
  /**
   * Company name or LinkedIn company URL (e.g. google or https://www.linkedin.com/company/google/).
   */
  company: string;
  /**
   * Optional job-title filter supporting boolean operators (e.g. CEO OR CTO).
   */
  jobTitle?: string;
  /**
   * Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 10.
   */
  limit?: number;
}

export type LinkedinCompanyEmployeesData = unknown;

/**
 * Input for LinkedIn Company Posts (linkedin.company_posts).
 */
export interface LinkedinCompanyPostsInput {
  /**
   * Include quote posts (posts shared with an added comment). Defaults to true; set false to exclude them.
   */
  includeQuotePosts?: boolean;
  /**
   * Include reposts (posts shared without an added comment). Defaults to true; set false to exclude them.
   */
  includeReposts?: boolean;
  /**
   * Maximum number of posts to return.
   * Range: minimum 1, maximum 50.
   * Default: 10.
   */
  limit?: number;
  /**
   * Only return posts published within this window (default any).
   * One of: any, 1h, 24h, week, month, 3months, 6months, year.
   */
  postedLimit?:
    "any" | "1h" | "24h" | "week" | "month" | "3months" | "6months" | "year";
  /**
   * Full LinkedIn company page URL.
   */
  url: string;
}

export type LinkedinCompanyPostsData = unknown;

/**
 * Input for LinkedIn Company Posts (basic) (linkedin.company_posts_thin).
 */
export interface LinkedinCompanyPostsThinInput {
  /**
   * Page number for pagination.
   * Range: minimum 1.
   */
  page?: number;
  /**
   * Full LinkedIn company page URL.
   */
  url: string;
}

export type LinkedinCompanyPostsThinData = unknown;

/**
 * Input for LinkedIn Company (basic) (linkedin.company_thin).
 */
export interface LinkedinCompanyThinInput {
  /**
   * Full LinkedIn company page URL.
   */
  url: string;
}

export type LinkedinCompanyThinData = unknown;

/**
 * Input for LinkedIn Email Finder (linkedin.email).
 */
export interface LinkedinEmailInput {
  /**
   * LinkedIn profile URL or public identifier (the last part of the URL) to find the deliverability-validated work email for.
   */
  profileUrl: string;
}

export type LinkedinEmailData = unknown;

/**
 * Input for LinkedIn Jobs (linkedin.jobs).
 */
export interface LinkedinJobsInput {
  /**
   * Filter to a specific company by name (e.g. Google).
   */
  company?: string;
  /**
   * When true, only return jobs offering LinkedIn Easy Apply.
   */
  easyApply?: boolean;
  /**
   * Filter by employment type.
   * One of: full-time, part-time, contract, internship, temporary.
   */
  employmentType?:
    "full-time" | "part-time" | "contract" | "internship" | "temporary";
  /**
   * Filter by required seniority/experience level.
   * One of: internship, entry, associate, mid-senior, director, executive.
   */
  experienceLevel?:
    | "internship"
    | "entry"
    | "associate"
    | "mid-senior"
    | "director"
    | "executive";
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * City, region, or country to search within (e.g. United States, San Francisco).
   */
  location?: string;
  /**
   * Only jobs posted within this window (past hour, 24 hours, week, or month).
   * One of: 1h, 24h, week, month.
   */
  postedLimit?: "1h" | "24h" | "week" | "month";
  /**
   * Job title or keywords to search. Supports LinkedIn boolean operators.
   */
  query: string;
  /**
   * Filter by minimum base salary band (US dollars).
   * One of: 40k+, 60k+, 80k+, 100k+, 120k+, 140k+, 160k+, 180k+, 200k+.
   */
  salary?:
    | "40k+"
    | "60k+"
    | "80k+"
    | "100k+"
    | "120k+"
    | "140k+"
    | "160k+"
    | "180k+"
    | "200k+";
  /**
   * Sort order: most recent (date) or best match (relevance).
   * One of: date, relevance.
   */
  sortBy?: "date" | "relevance";
  /**
   * When true, only return jobs with fewer than 10 applicants (lower competition).
   */
  under10Applicants?: boolean;
  /**
   * Filter by workplace type (remote, hybrid, or onsite).
   * One of: remote, hybrid, onsite.
   */
  workplaceType?: "remote" | "hybrid" | "onsite";
}

export type LinkedinJobsData = unknown;

/**
 * Input for LinkedIn Jobs (index) (linkedin.jobs_thin).
 */
export interface LinkedinJobsThinInput {
  /**
   * Filter to a specific company by its LinkedIn numeric company id.
   */
  companyId?: string;
  /**
   * Filter by employment type.
   * One of: full-time, part-time, contract, internship, temporary.
   */
  employmentType?:
    "full-time" | "part-time" | "contract" | "internship" | "temporary";
  /**
   * Filter by required seniority/experience level.
   * One of: internship, entry, associate, mid-senior, director, executive.
   */
  experienceLevel?:
    | "internship"
    | "entry"
    | "associate"
    | "mid-senior"
    | "director"
    | "executive";
  /**
   * LinkedIn geo id to target a precise location (e.g. 103644278 for the United States); more exact than the free-text location.
   */
  geoId?: string;
  /**
   * Maximum number of results to return (1-25, default 25).
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * City, region, or country to search within.
   */
  location?: string;
  /**
   * Only jobs posted within this window (past 24 hours, week, or month).
   * One of: 24h, week, month.
   */
  postedLimit?: "24h" | "week" | "month";
  /**
   * Job title or keywords to search.
   */
  query: string;
  /**
   * Filter by workplace type (remote, hybrid, or onsite).
   * One of: remote, hybrid, onsite.
   */
  workplaceType?: "remote" | "hybrid" | "onsite";
}

export type LinkedinJobsThinData = unknown;

/**
 * Input for LinkedIn Post (linkedin.post).
 */
export interface LinkedinPostInput {
  /**
   * Full LinkedIn post or article URL.
   */
  url: string;
}

export type LinkedinPostData = unknown;

/**
 * Input for LinkedIn Post Comments (linkedin.post_comments).
 */
export interface LinkedinPostCommentsInput {
  /**
   * Maximum number of comments to return. You are billed per comment returned, so a lower limit costs less.
   * Range: minimum 1, maximum 100.
   * Default: 100.
   */
  limit?: number;
  /**
   * Only return comments posted within this window (default any).
   * One of: any, 24h, week, month, 3months, 6months, year.
   */
  postedLimit?:
    "any" | "24h" | "week" | "month" | "3months" | "6months" | "year";
  /**
   * Full URL of the LinkedIn post to list comments for.
   */
  url: string;
}

export type LinkedinPostCommentsData = unknown;

/**
 * Input for LinkedIn Post Reactions (linkedin.post_reactions).
 */
export interface LinkedinPostReactionsInput {
  /**
   * Maximum number of reactions to return (1-100, default 100). You are billed per reaction returned, so a lower limit costs less.
   * Range: minimum 1, maximum 100.
   */
  limit?: number;
  /**
   * URL of the LinkedIn post to list reactions for (a /posts/...-activity-... or /feed/update/urn:li:activity:... link).
   */
  url: string;
}

export type LinkedinPostReactionsData = unknown;

/**
 * Input for LinkedIn Post Transcript (linkedin.post_transcript).
 */
export interface LinkedinPostTranscriptInput {
  /**
   * The full URL of the LinkedIn post to get the video transcript from.
   */
  url: string;
}

export type LinkedinPostTranscriptData = unknown;

/**
 * Input for LinkedIn Profile (linkedin.profile).
 */
export interface LinkedinProfileInput {
  /**
   * Full LinkedIn profile URL.
   */
  url: string;
}

export type LinkedinProfileData = unknown;

/**
 * Input for LinkedIn Profile (basic) (linkedin.profile_thin).
 */
export interface LinkedinProfileThinInput {
  /**
   * Full LinkedIn profile URL.
   */
  url: string;
}

export type LinkedinProfileThinData = unknown;

/**
 * Input for LinkedIn Company Search (linkedin.search_companies).
 */
export interface LinkedinSearchCompaniesInput {
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Optional location filter, written out in full (e.g. United Kingdom or San Francisco).
   */
  location?: string;
  /**
   * Keyword to search LinkedIn companies for (e.g. marketing agency).
   */
  query: string;
}

export type LinkedinSearchCompaniesData = unknown;

/**
 * Input for LinkedIn Post Search (linkedin.search_posts).
 */
export interface LinkedinSearchPostsInput {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * Filter by recency. One of last-hour, last-day, last-week, last-month, last-year.
   * One of: last-hour, last-day, last-week, last-month, last-year.
   */
  datePosted?:
    "last-hour" | "last-day" | "last-week" | "last-month" | "last-year";
  /**
   * The post search query.
   */
  query: string;
}

export type LinkedinSearchPostsData = unknown;

/**
 * Input for LinkedIn Profile Search (linkedin.search_profiles).
 */
export interface LinkedinSearchProfilesInput {
  /**
   * Filter by current company size (employee count). Codes: A=Self-Employed, B=1-10, C=11-50, D=51-200, E=201-500, F=501-1,000, G=1,001-5,000, H=5,001-10,000, I=10,001+.
   */
  companyHeadcount?: ("A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I")[];
  /**
   * Filter by the location of the person's current company headquarters, by place name (e.g. ['United States']).
   */
  companyHeadquarterLocations?: string[];
  /**
   * Filter to people who currently work at any of these companies, by name (e.g. ['Google','Meta']). Multiple names widen the match (OR).
   */
  currentCompanies?: string[];
  /**
   * Exclude people whose current company is headquartered in any of these locations.
   */
  excludeCompanyHeadquarterLocations?: string[];
  /**
   * Exclude people who currently work at any of these companies, by name.
   */
  excludeCurrentCompanies?: string[];
  /**
   * Exclude people whose current job title matches any of these.
   */
  excludeCurrentJobTitles?: string[];
  /**
   * Exclude these job functions (same codes as functionIds).
   */
  excludeFunctionIds?: (
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
  )[];
  /**
   * Exclude people in any of these locations, by place name.
   */
  excludeLocations?: string[];
  /**
   * Exclude people who previously worked at any of these companies, by name.
   */
  excludePastCompanies?: string[];
  /**
   * Exclude people who held any of these past job titles.
   */
  excludePastJobTitles?: string[];
  /**
   * Exclude people who attended any of these schools, by name.
   */
  excludeSchools?: string[];
  /**
   * Exclude these seniority levels (same codes as seniorityLevelIds).
   */
  excludeSeniorityLevelIds?: (
    | "100"
    | "110"
    | "120"
    | "130"
    | "200"
    | "210"
    | "220"
    | "300"
    | "310"
    | "320"
  )[];
  /**
   * Filter to people whose first name matches any of these.
   */
  firstNames?: string[];
  /**
   * Filter by job function. Codes: 1=Accounting, 2=Administrative, 3=Arts and Design, 4=Business Development, 5=Community and Social Services, 6=Consulting, 7=Education, 8=Engineering, 9=Entrepreneurship, 10=Finance, 11=Healthcare Services, 12=Human Resources, 13=Information Technology, 14=Legal, 15=Marketing, 16=Media and Communication, 17=Military and Protective Services, 18=Operations, 19=Product Management, 20=Program and Project Management, 21=Purchasing, 22=Quality Assurance, 23=Real Estate, 24=Research, 25=Sales, 26=Customer Success and Support.
   */
  functionIds?: (
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
  )[];
  /**
   * Optional current job title filter (e.g. 'Software Engineer').
   */
  jobTitle?: string;
  /**
   * Filter to people whose last name matches any of these.
   */
  lastNames?: string[];
  /**
   * Maximum number of full profiles to return (1-25, default 10). You are billed per profile returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Optional location filter (e.g. 'San Francisco').
   */
  location?: string;
  /**
   * Filter to people who previously worked at any of these companies, by name.
   */
  pastCompanies?: string[];
  /**
   * Filter by a past job title the person held (e.g. ['Product Manager']).
   */
  pastJobTitles?: string[];
  /**
   * Filter by the profile's primary language.
   */
  profileLanguages?: (
    | "Arabic"
    | "English"
    | "Spanish"
    | "Portuguese"
    | "Chinese"
    | "French"
    | "Italian"
    | "Russian"
    | "German"
    | "Dutch"
    | "Turkish"
    | "Tagalog"
    | "Polish"
    | "Korean"
    | "Japanese"
    | "Malay"
    | "Norwegian"
    | "Danish"
    | "Romanian"
    | "Swedish"
    | "Bahasa Indonesia"
    | "Czech"
  )[];
  /**
   * Search query for LinkedIn profiles: a role, name, or keywords (e.g. 'Marketing Manager').
   */
  query: string;
  /**
   * When true, only return people who recently changed jobs (a strong sales/recruiting signal).
   */
  recentlyChangedJobs?: boolean;
  /**
   * When true, only return people who recently posted on LinkedIn (an activity signal).
   */
  recentlyPostedOnLinkedIn?: boolean;
  /**
   * Filter to people who attended any of these schools, by name.
   */
  schools?: string[];
  /**
   * Filter by seniority level. Codes: 100=In Training, 110=Entry Level, 120=Senior, 130=Strategic, 200=Entry Level Manager, 210=Experienced Manager, 220=Director, 300=Vice President, 310=CXO, 320=Owner/Partner.
   */
  seniorityLevelIds?: (
    | "100"
    | "110"
    | "120"
    | "130"
    | "200"
    | "210"
    | "220"
    | "300"
    | "310"
    | "320"
  )[];
  /**
   * Filter by tenure at the current company. Codes: 1=Less than 1 year, 2=1 to 2 years, 3=3 to 5 years, 4=6 to 10 years, 5=More than 10 years.
   */
  yearsAtCurrentCompanyIds?: ("1" | "2" | "3" | "4" | "5")[];
  /**
   * Filter by total years of experience. Codes: 1=Less than 1 year, 2=1 to 2 years, 3=3 to 5 years, 4=6 to 10 years, 5=More than 10 years.
   */
  yearsOfExperienceIds?: ("1" | "2" | "3" | "4" | "5")[];
}

export type LinkedinSearchProfilesData = unknown;

/**
 * Input for LinkedIn Profile Search + Email (linkedin.search_profiles_email).
 */
export interface LinkedinSearchProfilesEmailInput {
  /**
   * Filter by current company size (employee count). Codes: A=Self-Employed, B=1-10, C=11-50, D=51-200, E=201-500, F=501-1,000, G=1,001-5,000, H=5,001-10,000, I=10,001+.
   */
  companyHeadcount?: ("A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I")[];
  /**
   * Filter by the location of the person's current company headquarters, by place name (e.g. ['United States']).
   */
  companyHeadquarterLocations?: string[];
  /**
   * Filter to people who currently work at any of these companies, by name (e.g. ['Google','Meta']). Multiple names widen the match (OR).
   */
  currentCompanies?: string[];
  /**
   * Exclude people whose current company is headquartered in any of these locations.
   */
  excludeCompanyHeadquarterLocations?: string[];
  /**
   * Exclude people who currently work at any of these companies, by name.
   */
  excludeCurrentCompanies?: string[];
  /**
   * Exclude people whose current job title matches any of these.
   */
  excludeCurrentJobTitles?: string[];
  /**
   * Exclude these job functions (same codes as functionIds).
   */
  excludeFunctionIds?: (
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
  )[];
  /**
   * Exclude people in any of these locations, by place name.
   */
  excludeLocations?: string[];
  /**
   * Exclude people who previously worked at any of these companies, by name.
   */
  excludePastCompanies?: string[];
  /**
   * Exclude people who held any of these past job titles.
   */
  excludePastJobTitles?: string[];
  /**
   * Exclude people who attended any of these schools, by name.
   */
  excludeSchools?: string[];
  /**
   * Exclude these seniority levels (same codes as seniorityLevelIds).
   */
  excludeSeniorityLevelIds?: (
    | "100"
    | "110"
    | "120"
    | "130"
    | "200"
    | "210"
    | "220"
    | "300"
    | "310"
    | "320"
  )[];
  /**
   * Filter to people whose first name matches any of these.
   */
  firstNames?: string[];
  /**
   * Filter by job function. Codes: 1=Accounting, 2=Administrative, 3=Arts and Design, 4=Business Development, 5=Community and Social Services, 6=Consulting, 7=Education, 8=Engineering, 9=Entrepreneurship, 10=Finance, 11=Healthcare Services, 12=Human Resources, 13=Information Technology, 14=Legal, 15=Marketing, 16=Media and Communication, 17=Military and Protective Services, 18=Operations, 19=Product Management, 20=Program and Project Management, 21=Purchasing, 22=Quality Assurance, 23=Real Estate, 24=Research, 25=Sales, 26=Customer Success and Support.
   */
  functionIds?: (
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
  )[];
  /**
   * Optional current job title filter (e.g. 'Software Engineer').
   */
  jobTitle?: string;
  /**
   * Filter to people whose last name matches any of these.
   */
  lastNames?: string[];
  /**
   * Maximum number of full profiles (with email) to return (1-25, default 10). You are billed per profile returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Optional location filter (e.g. 'San Francisco').
   */
  location?: string;
  /**
   * Filter to people who previously worked at any of these companies, by name.
   */
  pastCompanies?: string[];
  /**
   * Filter by a past job title the person held (e.g. ['Product Manager']).
   */
  pastJobTitles?: string[];
  /**
   * Filter by the profile's primary language.
   */
  profileLanguages?: (
    | "Arabic"
    | "English"
    | "Spanish"
    | "Portuguese"
    | "Chinese"
    | "French"
    | "Italian"
    | "Russian"
    | "German"
    | "Dutch"
    | "Turkish"
    | "Tagalog"
    | "Polish"
    | "Korean"
    | "Japanese"
    | "Malay"
    | "Norwegian"
    | "Danish"
    | "Romanian"
    | "Swedish"
    | "Bahasa Indonesia"
    | "Czech"
  )[];
  /**
   * Search query for LinkedIn profiles: a role, name, or keywords (e.g. 'Marketing Manager').
   */
  query: string;
  /**
   * When true, only return people who recently changed jobs (a strong sales/recruiting signal).
   */
  recentlyChangedJobs?: boolean;
  /**
   * When true, only return people who recently posted on LinkedIn (an activity signal).
   */
  recentlyPostedOnLinkedIn?: boolean;
  /**
   * Filter to people who attended any of these schools, by name.
   */
  schools?: string[];
  /**
   * Filter by seniority level. Codes: 100=In Training, 110=Entry Level, 120=Senior, 130=Strategic, 200=Entry Level Manager, 210=Experienced Manager, 220=Director, 300=Vice President, 310=CXO, 320=Owner/Partner.
   */
  seniorityLevelIds?: (
    | "100"
    | "110"
    | "120"
    | "130"
    | "200"
    | "210"
    | "220"
    | "300"
    | "310"
    | "320"
  )[];
  /**
   * Filter by tenure at the current company. Codes: 1=Less than 1 year, 2=1 to 2 years, 3=3 to 5 years, 4=6 to 10 years, 5=More than 10 years.
   */
  yearsAtCurrentCompanyIds?: ("1" | "2" | "3" | "4" | "5")[];
  /**
   * Filter by total years of experience. Codes: 1=Less than 1 year, 2=1 to 2 years, 3=3 to 5 years, 4=6 to 10 years, 5=More than 10 years.
   */
  yearsOfExperienceIds?: ("1" | "2" | "3" | "4" | "5")[];
}

export type LinkedinSearchProfilesEmailData = unknown;

/**
 * Input for LinkedIn Profile Search (basic) (linkedin.search_profiles_thin).
 */
export interface LinkedinSearchProfilesThinInput {
  /**
   * Search query for LinkedIn profiles - a role, name, or keywords (e.g. 'Marketing Manager').
   */
  query: string;
}

export type LinkedinSearchProfilesThinData = unknown;

/**
 * Typed methods for the linkedin platform. Attached to the AnyAPI client as
 * `client.linkedin`.
 */
export class LinkedinNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * LinkedIn Ad Details
   *
   * Look up a single LinkedIn Ad Library ad by URL and get the advertiser, headline, creative text, format, CTA, targeting, run dates, and impressions as clean JSON.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.ad({ url: "https://www.linkedin.com/ad-library/detail/1487405616" });
   */
  ad(
    input: LinkedinAdInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinAdData>> {
    return this._core.run("linkedin.ad", input, options) as unknown as Promise<
      BareRunResult<LinkedinAdData>
    >;
  }

  /**
   * LinkedIn Ads Library
   *
   * Search the LinkedIn Ad Library by search URL and list the matching ads (advertiser, creative text, format).
   *
   * Price: $0.00005 per request plus $0.0015 per result (maximum $0.03005).
   *
   * @example
   * const res = await client.linkedin.ads({ url: "https://www.linkedin.com/company/stripe", limit: 3 });
   */
  ads(
    input: LinkedinAdsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinAdsData>> {
    return this._core.run("linkedin.ads", input, options) as unknown as Promise<
      BareRunResult<LinkedinAdsData>
    >;
  }

  /**
   * LinkedIn Ad Search
   *
   * Search the LinkedIn Ad Library by company or keyword and list matching ads (advertiser, headline, creative text, format, CTA, and run dates) with pagination.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.adsSearch({ company: "microsoft" });
   */
  adsSearch(
    input: LinkedinAdsSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinAdsSearchData>> {
    return this._core.run(
      "linkedin.ads_search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinAdsSearchData>>;
  }

  /**
   * LinkedIn Company
   *
   * Fetch a full LinkedIn company page by URL: name, description, industry, employee count and range, follower count, founded year, headquarters and office locations, funding data, tagline, logo, website, and specialities.
   *
   * Price: $0.004 per request plus $0 per result (maximum $0.004).
   *
   * @example
   * const res = await client.linkedin.company({ url: "https://www.linkedin.com/company/stripe" });
   */
  company(
    input: LinkedinCompanyInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinCompanyData>> {
    return this._core.run(
      "linkedin.company",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinCompanyData>>;
  }

  /**
   * LinkedIn Company Employees
   *
   * List the employees of a LinkedIn company by name or company URL, with optional job-title filtering.
   *
   * Price: $0 per request plus $0.01 per result (maximum $0.1).
   *
   * @example
   * const res = await client.linkedin.companyEmployees({ company: "stripe", limit: 3 });
   */
  companyEmployees(
    input: LinkedinCompanyEmployeesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinCompanyEmployeesData>> {
    return this._core.run(
      "linkedin.company_employees",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinCompanyEmployeesData>>;
  }

  /**
   * LinkedIn Company Posts
   *
   * List a LinkedIn company page's recent posts by URL: full text, canonical link, publish date, author, engagement counts with a per-reaction breakdown, and attached media.
   *
   * Price: $0.00005 per request plus $0.00175 per result (maximum $0.08755).
   *
   * @example
   * const res = await client.linkedin.companyPosts({ url: "https://www.linkedin.com/company/stripe", limit: 10 });
   */
  companyPosts(
    input: LinkedinCompanyPostsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinCompanyPostsData>> {
    return this._core.run(
      "linkedin.company_posts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinCompanyPostsData>>;
  }

  /**
   * LinkedIn Company Posts (basic)
   *
   * Post text and link only. No engagement counts, author details, media, or reaction breakdown - for those use linkedin.company_posts.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.companyPostsThin({ url: "https://www.linkedin.com/company/stripe" });
   */
  companyPostsThin(
    input: LinkedinCompanyPostsThinInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinCompanyPostsThinData>> {
    return this._core.run(
      "linkedin.company_posts_thin",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinCompanyPostsThinData>>;
  }

  /**
   * LinkedIn Company (basic)
   *
   * Basic company: name, description, employee count, industry, logo, website, tagline. No follower count, founded year, office locations, or funding data - for those use linkedin.company.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.companyThin({ url: "https://www.linkedin.com/company/stripe" });
   */
  companyThin(
    input: LinkedinCompanyThinInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinCompanyThinData>> {
    return this._core.run(
      "linkedin.company_thin",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinCompanyThinData>>;
  }

  /**
   * LinkedIn Email Finder
   *
   * Find the deliverability-validated work email behind a LinkedIn profile URL or public ID. Returns each discovered email with its deliverability, validation status, and quality score, plus the person's name and headline.
   *
   * Price: $0.01 per request plus $0 per result (maximum $0.01).
   *
   * @example
   * const res = await client.linkedin.email({ profileUrl: "https://www.linkedin.com/in/satyanadella" });
   */
  email(
    input: LinkedinEmailInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinEmailData>> {
    return this._core.run(
      "linkedin.email",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinEmailData>>;
  }

  /**
   * LinkedIn Jobs
   *
   * Search LinkedIn job listings by title and location - full records with description, salary, applicant count, seniority, company details, and benefits. Up to 25 jobs per request.
   *
   * Price: $0.001 per request plus $0.001 per result (maximum $0.026).
   *
   * @example
   * const res = await client.linkedin.jobs({ query: "software engineer", limit: 3, location: "United States", workplaceType: "remote" });
   */
  jobs(
    input: LinkedinJobsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinJobsData>> {
    return this._core.run(
      "linkedin.jobs",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinJobsData>>;
  }

  /**
   * LinkedIn Jobs (index)
   *
   * Cheap job index: title, company, location, posted date, URL. No description, salary, applicant counts, or seniority - for those use linkedin.jobs.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.linkedin.jobsThin({ query: "software engineer", limit: 3, location: "United States", workplaceType: "remote" });
   */
  jobsThin(
    input: LinkedinJobsThinInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinJobsThinData>> {
    return this._core.run(
      "linkedin.jobs_thin",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinJobsThinData>>;
  }

  /**
   * LinkedIn Post
   *
   * Fetch a single LinkedIn post or article by URL (title, text, author, like and comment counts, publish date), normalized across providers.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.linkedin.post({ url: "https://www.linkedin.com/posts/stripe_last-week-agent-traffic-surpassed-human-activity-7470882737390940160-2Nxs" });
   */
  post(
    input: LinkedinPostInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinPostData>> {
    return this._core.run(
      "linkedin.post",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinPostData>>;
  }

  /**
   * LinkedIn Post Comments
   *
   * List comments on a LinkedIn post - full text, commenter name/URL/job title, timestamps, and engagement.
   *
   * Price: $0 per request plus $0.002 per result (maximum $0.2).
   *
   * @example
   * const res = await client.linkedin.postComments({ url: "https://www.linkedin.com/posts/stripe_philip-kl%C3%B6ckner-in-conversation-with-conor-activity-7477791740645564416-tIbZ", limit: 10 });
   */
  postComments(
    input: LinkedinPostCommentsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinPostCommentsData>> {
    return this._core.run(
      "linkedin.post_comments",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinPostCommentsData>>;
  }

  /**
   * LinkedIn Post Reactions
   *
   * List who reacted to a LinkedIn post - reactor name, profile URL, job title, and reaction type. Lead-gen grade.
   *
   * Price: $0 per request plus $0.002 per result (maximum $0.2).
   *
   * @example
   * const res = await client.linkedin.postReactions({ url: "https://www.linkedin.com/posts/satyanadella_today-were-bringing-skills-to-copilot-for-activity-7475945433668694017--kvG", limit: 5 });
   */
  postReactions(
    input: LinkedinPostReactionsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinPostReactionsData>> {
    return this._core.run(
      "linkedin.post_reactions",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinPostReactionsData>>;
  }

  /**
   * LinkedIn Post Transcript
   *
   * Get the spoken transcript of a LinkedIn video post by URL.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.postTranscript({ url: "https://www.linkedin.com/posts/artificial-analysis_gemini-35-flash-is-a-step-forward-for-google-activity-7465082408409870337-4Pm-" });
   */
  postTranscript(
    input: LinkedinPostTranscriptInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinPostTranscriptData>> {
    return this._core.run(
      "linkedin.post_transcript",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinPostTranscriptData>>;
  }

  /**
   * LinkedIn Profile
   *
   * Fetch a rich LinkedIn member profile by URL: name, headline, avatar, location, connections and followers, current position, and full work experience with job titles, descriptions, dates, employment/workplace type, and per-role skills, plus education, skills, certifications, honors and awards, languages, projects, publications, and verified/premium/open-to-work flags.
   *
   * Price: $0.004 per request plus $0 per result (maximum $0.004).
   *
   * @example
   * const res = await client.linkedin.profile({ url: "https://www.linkedin.com/in/williamhgates" });
   */
  profile(
    input: LinkedinProfileInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinProfileData>> {
    return this._core.run(
      "linkedin.profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinProfileData>>;
  }

  /**
   * LinkedIn Profile (basic)
   *
   * Lightweight profile: name, avatar, location, followers, and a basic experience/education list (company + dates only, no job titles, descriptions, or skills; past companies may be redacted). For full experience detail, skills, certifications, connections, and verified flags use linkedin.profile.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.profileThin({ url: "https://www.linkedin.com/in/williamhgates" });
   */
  profileThin(
    input: LinkedinProfileThinInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinProfileThinData>> {
    return this._core.run(
      "linkedin.profile_thin",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinProfileThinData>>;
  }

  /**
   * LinkedIn Company Search
   *
   * Search LinkedIn companies by keyword with optional location filtering, returning normalized company records.
   *
   * Price: $0.001 per request plus $0.004 per result (maximum $0.081).
   *
   * @example
   * const res = await client.linkedin.searchCompanies({ query: "fintech", limit: 3 });
   */
  searchCompanies(
    input: LinkedinSearchCompaniesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinSearchCompaniesData>> {
    return this._core.run(
      "linkedin.search_companies",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinSearchCompaniesData>>;
  }

  /**
   * LinkedIn Post Search
   *
   * Search public LinkedIn posts by keyword (text, link, publish date), normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.searchPosts({ query: "hiring", datePosted: "last-week" });
   */
  searchPosts(
    input: LinkedinSearchPostsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinSearchPostsData>> {
    return this._core.run(
      "linkedin.search_posts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinSearchPostsData>>;
  }

  /**
   * LinkedIn Profile Search
   *
   * Search LinkedIn profiles by keyword with optional location and job-title filters. Each match returns a full profile record: name, headline, location, current position, work experience, education, and skills, plus the profile URL, handle, and id. For a cheaper name/headline/URL-only search use linkedin.search_profiles_thin; add emails with linkedin.search_profiles_email.
   *
   * Price: $0.08 per request plus $0.004 per result (maximum $0.18).
   *
   * @example
   * const res = await client.linkedin.searchProfiles({ query: "engineer", currentCompanies: ["Google"], limit: 3 });
   */
  searchProfiles(
    input: LinkedinSearchProfilesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinSearchProfilesData>> {
    return this._core.run(
      "linkedin.search_profiles",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinSearchProfilesData>>;
  }

  /**
   * LinkedIn Profile Search + Email
   *
   * People search returning a full profile AND a verified work email for each hit. Search LinkedIn profiles by keyword with optional location and job-title filters; each match returns the full profile record (name, headline, location, current position, work experience, education, and skills, plus the profile URL, handle, and id) together with an emails array carrying the discovered work email and its deliverability. For a full profile without email use linkedin.search_profiles; for a cheaper name/headline/URL-only search use linkedin.search_profiles_thin.
   *
   * Price: $0.08 per request plus $0.009 per result (maximum $0.305).
   *
   * @example
   * const res = await client.linkedin.searchProfilesEmail({ query: "founder", companyHeadcount: ["B"], limit: 5 });
   */
  searchProfilesEmail(
    input: LinkedinSearchProfilesEmailInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinSearchProfilesEmailData>> {
    return this._core.run(
      "linkedin.search_profiles_email",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinSearchProfilesEmailData>>;
  }

  /**
   * LinkedIn Profile Search (basic)
   *
   * Cheap people search: name/handle, headline, VANITY profile URL, location. No full profile or email - for full profiles per hit use linkedin.search_profiles, add emails with linkedin.search_profiles_email.
   *
   * Price: $0.0325 per request.
   *
   * @example
   * const res = await client.linkedin.searchProfilesThin({ query: "recruiter" });
   */
  searchProfilesThin(
    input: LinkedinSearchProfilesThinInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<LinkedinSearchProfilesThinData>> {
    return this._core.run(
      "linkedin.search_profiles_thin",
      input,
      options,
    ) as unknown as Promise<BareRunResult<LinkedinSearchProfilesThinData>>;
  }
}
