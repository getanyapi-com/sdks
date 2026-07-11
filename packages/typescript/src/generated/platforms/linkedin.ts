// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
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

/**
 * The `data` payload of LinkedIn Ad Details (linkedin.ad).
 */
export interface LinkedinAdData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  adType: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  advertiser: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  advertiserLinkedinPage: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  cta: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  description: string;
  destinationUrl: string;
  /**
   * ISO 8601 date.
   */
  endDate: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  headline: string;
  id: string;
  image: string;
  /**
   * ISO 8601 date.
   */
  startDate: string;
  totalImpressions: string;
  [extra: string]: unknown;
}

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

/**
 * A LinkedIn ad: advertiser, creative text, format, and ad library URL.
 */
export interface LinkedinAdsItem {
  /**
   * Advertiser (company) name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  advertiser?: string;
  /**
   * Advertiser logo image URL.
   */
  advertiserLogo?: string;
  /**
   * Ad format (e.g. SINGLE_IMAGE, VIDEO).
   */
  format?: string;
  /**
   * LinkedIn ad id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Ad creative image URL.
   */
  image?: string;
  /**
   * Ad creative body text.
   */
  text?: string;
  /**
   * Canonical LinkedIn Ad Library detail URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Ads Library (linkedin.ads).
 */
export interface LinkedinAdsData {
  /**
   * Ad records from the LinkedIn Ad Library. Populated whenever the provider has data for the entity.
   */
  items: LinkedinAdsItem[];
}

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

export interface LinkedinAdsSearchAd {
  /**
   * Populated whenever the provider has data for the entity.
   */
  adType: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  advertiser: string;
  advertiserLinkedinPage: string;
  cta: string;
  description: string;
  destinationUrl: string;
  endDate: string;
  headline: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  startDate: string;
  totalImpressions: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Ad Search (linkedin.ads_search).
 */
export interface LinkedinAdsSearchData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  ads: LinkedinAdsSearchAd[];
  nextCursor: string;
  totalAds: number;
}

/**
 * Input for LinkedIn Company (linkedin.company).
 */
export interface LinkedinCompanyInput {
  /**
   * Full LinkedIn company page URL.
   */
  url: string;
}

export interface LinkedinCompanyLocation {
  /**
   * City.
   */
  city?: string;
  /**
   * ISO country code.
   */
  country?: string;
  /**
   * True when this location is the headquarters.
   */
  headquarter?: boolean;
  /**
   * Street address line.
   */
  line1?: string;
  /**
   * Postal code.
   */
  postalCode?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Company (linkedin.company).
 */
export interface LinkedinCompanyData {
  /**
   * Company type, e.g. Privately Held, Public Company.
   */
  companyType?: string;
  /**
   * Company about/description text. Populated whenever the provider has data for the entity.
   */
  description: string;
  /**
   * Reported total employee count. Populated whenever the provider has data for the entity.
   */
  employeeCount: number;
  /**
   * LinkedIn size bucket the company falls in.
   */
  employeeCountRange?: {
    /**
     * Upper bound of the employee-count bucket.
     */
    end?: number;
    /**
     * Lower bound of the employee-count bucket.
     */
    start?: number;
  };
  /**
   * LinkedIn page follower count. Populated whenever the provider has data for the entity.
   */
  followerCount: number;
  /**
   * Founding date (year populated when known).
   */
  foundedOn?: {
    /**
     * Year the company was founded.
     */
    year?: number;
  };
  /**
   * Funding summary sourced from Crunchbase, when available.
   */
  fundingData?: {
    /**
     * Crunchbase profile URL for the company.
     */
    companyCrunchbaseUrl?: string;
    /**
     * Type of the most recent funding round.
     */
    lastFundingType?: string;
    /**
     * Total number of funding rounds.
     */
    numFundingRounds?: number;
  };
  /**
   * Primary industry.
   */
  industry: string;
  /**
   * Company office locations, including headquarters.
   */
  locations?: LinkedinCompanyLocation[];
  /**
   * Company logo image URL.
   */
  logoUrl: string;
  /**
   * Company name.
   */
  name: string;
  /**
   * Whether LinkedIn has verified the company page.
   */
  pageVerified?: boolean;
  /**
   * Similar organizations surfaced by LinkedIn.
   */
  similarOrganizations?: unknown[];
  /**
   * Company-declared specialities.
   */
  specialities?: unknown[];
  /**
   * Company tagline/slogan.
   */
  tagline: string;
  /**
   * LinkedIn universal (vanity) name for the company.
   */
  universalName?: string;
  /**
   * Company website URL.
   */
  website: string;
  [extra: string]: unknown;
}

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

/**
 * An employee: name, headline, location, handle, and LinkedIn profile URL.
 */
export interface LinkedinCompanyEmployeesItem {
  /**
   * First name.
   */
  firstName?: string;
  /**
   * Public profile identifier (the vanity slug in the URL). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  handle?: string;
  /**
   * Profile picture URL.
   */
  image?: string;
  /**
   * The employee's current role or headline.
   */
  jobTitle?: string;
  /**
   * Last name.
   */
  lastName?: string;
  /**
   * The employee's location as a single string (city, region, country).
   */
  location?: string;
  /**
   * Full name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  name?: string;
  /**
   * Canonical LinkedIn profile URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Company Employees (linkedin.company_employees).
 */
export interface LinkedinCompanyEmployeesData {
  /**
   * Employee records for the company. Populated whenever the provider has data for the entity.
   */
  items: LinkedinCompanyEmployeesItem[];
}

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

export interface LinkedinCompanyPostsItem {
  /**
   * The post author (a company or a profile).
   */
  author?: {
    /**
     * Author follower count as displayed text (e.g. '1,543,793 followers').
     */
    followers?: string;
    /**
     * Canonical LinkedIn URL of the author.
     */
    linkedinUrl?: string;
    /**
     * Display name of the author.
     */
    name?: string;
    /**
     * Author kind, e.g. 'company' or 'profile'.
     */
    type?: string;
    /**
     * URL-safe company/profile handle, when present.
     */
    universalName?: string;
  };
  /**
   * Inline mentions and entity references in the post text.
   */
  contentAttributes?: LinkedinCompanyPostsContentAttribute[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Engagement metrics for the post.
   */
  engagement?: {
    /**
     * Number of comments on the post.
     */
    comments?: number;
    /**
     * Total reaction count on the post. Populated whenever the provider has data for the entity.
     * Present whenever the upstream returns this record.
     */
    likes?: number;
    /**
     * Per-reaction-type breakdown of the reaction total.
     */
    reactions?: LinkedinCompanyPostsReaction[];
    /**
     * Number of shares/reposts of the post.
     */
    shares?: number;
  };
  /**
   * Unique identifier of the post. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Images attached to the post.
   */
  postImages?: LinkedinCompanyPostsPostImage[];
  /**
   * Video attached to the post, or null when absent.
   */
  postVideo?: {};
  /**
   * Full text content of the post.
   */
  text: string;
  /**
   * Canonical URL of the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

export interface LinkedinCompanyPostsContentAttribute {
  [extra: string]: unknown;
}

export interface LinkedinCompanyPostsReaction {
  /**
   * Number of reactions of this type.
   */
  count?: number;
  /**
   * Reaction type, e.g. LIKE, PRAISE, EMPATHY, INTEREST, APPRECIATION.
   */
  type?: string;
  [extra: string]: unknown;
}

export interface LinkedinCompanyPostsPostImage {
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Company Posts (linkedin.company_posts).
 */
export interface LinkedinCompanyPostsData {
  /**
   * The company's recent posts. Populated whenever the provider has data for the entity.
   */
  items: LinkedinCompanyPostsItem[];
}

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

export interface LinkedinCompanyPostsThinItem {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Unique identifier of the post. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Text content of the post. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Canonical URL of the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Company Posts (basic) (linkedin.company_posts_thin).
 */
export interface LinkedinCompanyPostsThinData {
  /**
   * The company's recent posts. Populated whenever the provider has data for the entity.
   */
  items: LinkedinCompanyPostsThinItem[];
}

/**
 * Input for LinkedIn Company (basic) (linkedin.company_thin).
 */
export interface LinkedinCompanyThinInput {
  /**
   * Full LinkedIn company page URL.
   */
  url: string;
}

/**
 * The `data` payload of LinkedIn Company (basic) (linkedin.company_thin).
 */
export interface LinkedinCompanyThinData {
  /**
   * Company about/description text. Populated whenever the provider has data for the entity.
   */
  description: string;
  /**
   * Reported employee count.
   */
  employeeCount: number;
  /**
   * Primary industry. Populated whenever the provider has data for the entity.
   */
  industry: string;
  /**
   * Company logo image URL. Populated whenever the provider has data for the entity.
   */
  logoUrl: string;
  /**
   * Company name.
   */
  name: string;
  /**
   * Company tagline/slogan. Populated whenever the provider has data for the entity.
   */
  tagline: string;
  /**
   * Company website URL. Populated whenever the provider has data for the entity.
   */
  website: string;
  [extra: string]: unknown;
}

/**
 * Input for LinkedIn Email Finder (linkedin.email).
 */
export interface LinkedinEmailInput {
  /**
   * LinkedIn profile URL or public identifier (the last part of the URL) to find the deliverability-validated work email for.
   */
  profileUrl: string;
}

/**
 * A discovered email with its deliverability and validation signals.
 */
export interface LinkedinEmailEmail {
  /**
   * True when the email passed deliverability checks (including SMTP).
   */
  deliverable?: boolean;
  /**
   * Discovered work email address. Populated whenever the provider has data for the entity.
   */
  email: string;
  /**
   * Confidence score for the email, 0-100.
   */
  qualityScore?: number;
  /**
   * Validation status of the email (e.g. valid).
   */
  status?: string;
  /**
   * True when the domain has a valid mail server.
   */
  validEmailServer?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Email Finder (linkedin.email).
 */
export interface LinkedinEmailData {
  /**
   * Deliverability-validated work emails discovered for the profile. Populated whenever the provider has data for the entity.
   */
  emails: LinkedinEmailEmail[];
  /**
   * First name on the LinkedIn profile.
   */
  firstName?: string;
  /**
   * Profile headline.
   */
  headline?: string;
  /**
   * Last name on the LinkedIn profile.
   */
  lastName?: string;
  /**
   * Canonical LinkedIn profile URL.
   */
  linkedinUrl?: string;
}

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

/**
 * A LinkedIn job listing with full detail: title, description, salary, applicant count, seniority, company, and benefits.
 */
export interface LinkedinJobsItem {
  /**
   * Number of applicants reported by LinkedIn. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  applicants?: number;
  /**
   * External company apply URL when the job applies off-site.
   */
  applyUrl?: string;
  /**
   * Listed benefits.
   */
  benefits?: string[];
  /**
   * Hiring company details.
   */
  company?: {
    /**
     * Canonical LinkedIn company URL.
     */
    linkedinUrl?: string;
    /**
     * Company logo image URL.
     */
    logo?: string;
    /**
     * Company name.
     */
    name?: string;
    /**
     * Company LinkedIn universal (vanity) name.
     */
    universalName?: string;
  };
  /**
   * UTC epoch timestamp in seconds (Unix time) the job was posted. Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Full job description as plain text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  descriptionText?: string;
  /**
   * LinkedIn Easy Apply URL when available.
   */
  easyApplyUrl?: string;
  /**
   * Employment type (e.g. full_time, contract, part_time).
   */
  employmentType?: string;
  /**
   * Seniority / experience level (e.g. Mid-Senior level, Entry level).
   */
  experienceLevel?: string;
  /**
   * LinkedIn job listing id.
   */
  id?: string;
  /**
   * Industries associated with the role.
   */
  industries?: string[];
  /**
   * Job location (city, region, or country).
   */
  location?: string;
  /**
   * Salary range when disclosed by the poster.
   */
  salary?: {
    /**
     * Maximum salary.
     */
    max?: number;
    /**
     * Minimum salary.
     */
    min?: number;
    /**
     * Salary as displayed (e.g. '300,000 - 330,000 USD').
     */
    text?: string;
  };
  /**
   * Job title.
   */
  title: string;
  /**
   * Canonical LinkedIn job listing URL.
   */
  url: string;
  /**
   * Workplace type (e.g. remote, on_site, hybrid).
   */
  workplaceType?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Jobs (linkedin.jobs).
 */
export interface LinkedinJobsData {
  /**
   * Full job listing records for the search. Populated whenever the provider has data for the entity.
   */
  items: LinkedinJobsItem[];
}

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

/**
 * A LinkedIn job listing index entry: title, company, location, posting date, and the listing URL.
 */
export interface LinkedinJobsThinItem {
  /**
   * Hiring company name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  company?: string;
  /**
   * Canonical LinkedIn company URL.
   */
  companyUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * LinkedIn job listing id.
   */
  id?: string;
  /**
   * Job location (city, region). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  location?: string;
  /**
   * Job title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical LinkedIn job listing URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Jobs (index) (linkedin.jobs_thin).
 */
export interface LinkedinJobsThinData {
  /**
   * Job listing index records for the search. Populated whenever the provider has data for the entity.
   */
  items: LinkedinJobsThinItem[];
}

/**
 * Input for LinkedIn Post (linkedin.post).
 */
export interface LinkedinPostInput {
  /**
   * Full LinkedIn post or article URL.
   */
  url: string;
}

/**
 * The `data` payload of LinkedIn Post (linkedin.post).
 */
export interface LinkedinPostData {
  /**
   * Name of the post author. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * Number of comments on the post.
   */
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Number of likes on the post.
   */
  likes: number;
  /**
   * Text content of the post. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Title of the post.
   */
  title: string;
  /**
   * Canonical URL of the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

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

export interface LinkedinPostCommentsItem {
  /**
   * The commenter (a profile or a company).
   */
  actor?: {
    /**
     * Profile picture URL of the commenter.
     */
    image?: string;
    /**
     * Canonical LinkedIn URL of the commenter.
     */
    linkedinUrl?: string;
    /**
     * Display name of the commenter.
     */
    name?: string;
    /**
     * Commenter's headline or job title as displayed.
     */
    position?: string;
    /**
     * Commenter kind, e.g. 'profile' or 'company'.
     */
    type?: string;
  };
  /**
   * Full text of the comment. Populated whenever the provider has data for the entity.
   */
  commentary: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Whether the comment has been edited.
   */
  edited?: boolean;
  /**
   * Engagement metrics for the comment.
   */
  engagement?: {
    /**
     * Number of replies to the comment.
     */
    comments?: number;
    /**
     * Number of likes on the comment.
     */
    likes?: number;
  };
  /**
   * Unique identifier of the comment. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Whether the comment is pinned on the post.
   */
  pinned?: boolean;
  /**
   * Canonical permalink URL of the comment.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Post Comments (linkedin.post_comments).
 */
export interface LinkedinPostCommentsData {
  /**
   * The post's comments. Populated whenever the provider has data for the entity.
   */
  items: LinkedinPostCommentsItem[];
}

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

export interface LinkedinPostReactionsItem {
  /**
   * The reactor - the person or company that reacted.
   */
  actor: {
    /**
     * LinkedIn member or company id of the reactor.
     */
    id?: string;
    /**
     * Canonical LinkedIn profile or company URL of the reactor.
     * Format: uri.
     */
    linkedinUrl?: string;
    /**
     * Full name of the reactor (or company name). Populated whenever the provider has data for the entity.
     */
    name: string;
    /**
     * Profile picture URL of the reactor.
     */
    pictureUrl?: string;
    /**
     * Reactor's current job title / headline (or follower count for a company).
     */
    position?: string;
  };
  /**
   * LinkedIn URN of the post that was reacted to.
   */
  postId?: string;
  /**
   * Reaction kind (e.g. LIKE, PRAISE, EMPATHY, INTEREST, APPRECIATION, ENTERTAINMENT).
   */
  reactionType: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Post Reactions (linkedin.post_reactions).
 */
export interface LinkedinPostReactionsData {
  /**
   * Reactions on the post, one record per reactor.
   */
  items: LinkedinPostReactionsItem[];
}

/**
 * Input for LinkedIn Post Transcript (linkedin.post_transcript).
 */
export interface LinkedinPostTranscriptInput {
  /**
   * The full URL of the LinkedIn post to get the video transcript from.
   */
  url: string;
}

/**
 * The `data` payload of LinkedIn Post Transcript (linkedin.post_transcript).
 */
export interface LinkedinPostTranscriptData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  transcript: string;
  transcriptNotAvailable: boolean;
  url: string;
  [extra: string]: unknown;
}

/**
 * Input for LinkedIn Profile (linkedin.profile).
 */
export interface LinkedinProfileInput {
  /**
   * Full LinkedIn profile URL.
   */
  url: string;
}

export interface LinkedinProfileCertification {
  /**
   * Issue date text.
   */
  issuedAt?: string;
  /**
   * Issuing organization.
   */
  issuedBy?: string;
  /**
   * Certification title.
   */
  title?: string;
  [extra: string]: unknown;
}

export interface LinkedinProfileCurrentPosition {
  /**
   * Company LinkedIn URL.
   */
  companyLinkedinUrl?: string;
  /**
   * Company name.
   */
  companyName?: string;
  /**
   * Human-readable tenure, e.g. '12 yrs 6 mos'.
   */
  duration?: string;
  /**
   * Role location.
   */
  location?: string;
  /**
   * Job title.
   */
  position?: string;
  [extra: string]: unknown;
}

export interface LinkedinProfileEducation {
  /**
   * Degree earned.
   */
  degree?: string;
  /**
   * End date text.
   */
  endDate?: string;
  /**
   * Field of study.
   */
  fieldOfStudy?: string;
  /**
   * School name.
   */
  school: string;
  /**
   * School LinkedIn URL.
   */
  schoolUrl?: string;
  /**
   * Start date text.
   */
  startDate?: string;
  [extra: string]: unknown;
}

export interface LinkedinProfileExperience {
  /**
   * Company LinkedIn URL.
   */
  companyLinkedinUrl?: string;
  /**
   * Company name.
   */
  companyName?: string;
  /**
   * Role description.
   */
  description?: string;
  /**
   * Human-readable tenure, e.g. '3 yrs 2 mos'.
   */
  duration?: string;
  /**
   * Employment type, e.g. 'Full-time'.
   */
  employmentType?: string;
  /**
   * End date text, e.g. 'Present'.
   */
  endDate?: string;
  /**
   * Role location.
   */
  location?: string;
  /**
   * Job title. Populated whenever the provider has data for the entity.
   */
  position: string;
  /**
   * Skills associated with this role.
   */
  skills?: unknown[];
  /**
   * Start date text, e.g. 'Feb 2014'.
   */
  startDate?: string;
  /**
   * Workplace type, e.g. 'Remote' or 'On-site'.
   */
  workplaceType?: string;
  [extra: string]: unknown;
}

export interface LinkedinProfileHonorsAndAward {
  /**
   * Award description.
   */
  description?: string;
  /**
   * Issue date text.
   */
  issuedAt?: string;
  /**
   * Issuing organization.
   */
  issuedBy?: string;
  /**
   * Award title.
   */
  title?: string;
  [extra: string]: unknown;
}

export interface LinkedinProfilePublication {
  /**
   * Publication description.
   */
  description?: string;
  /**
   * Publisher and/or date text as shown on LinkedIn.
   */
  publishedText?: string;
  /**
   * Publication title.
   */
  title?: string;
  [extra: string]: unknown;
}

export interface LinkedinProfileSkill {
  /**
   * Endorsement count text, e.g. '99+ endorsements'.
   */
  endorsements?: string;
  /**
   * Skill name.
   */
  name?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Profile (linkedin.profile).
 */
export interface LinkedinProfileData {
  /**
   * About/summary text of the profile.
   */
  about?: string;
  /**
   * Licenses and certifications.
   */
  certifications?: LinkedinProfileCertification[];
  /**
   * Number of connections.
   */
  connectionsCount?: number;
  /**
   * The member's current role(s).
   */
  currentPosition?: LinkedinProfileCurrentPosition[];
  /**
   * Education entries.
   */
  education?: LinkedinProfileEducation[];
  /**
   * Full work experience with titles, descriptions, dates, and per-role skills. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  experience?: LinkedinProfileExperience[];
  /**
   * First name of the profile owner.
   */
  firstName: string;
  /**
   * Number of followers.
   */
  followerCount?: number;
  /**
   * Professional headline shown under the name. Populated whenever the provider has data for the entity.
   */
  headline: string;
  /**
   * Honors and awards.
   */
  honorsAndAwards?: LinkedinProfileHonorsAndAward[];
  /**
   * Languages, as returned by LinkedIn when present.
   */
  languages?: unknown[];
  /**
   * Last name of the profile owner.
   */
  lastName: string;
  /**
   * Location of the profile owner.
   */
  location?: string;
  /**
   * Whether the member is open to work.
   */
  openToWork?: boolean;
  /**
   * URL of the profile photo.
   */
  photo?: string;
  /**
   * Whether the member has LinkedIn Premium.
   */
  premium?: boolean;
  /**
   * Projects, as returned by LinkedIn when present.
   */
  projects?: unknown[];
  /**
   * LinkedIn public identifier (the /in/ handle).
   */
  publicIdentifier?: string;
  /**
   * Publications.
   */
  publications?: LinkedinProfilePublication[];
  /**
   * Endorsed skills.
   */
  skills?: LinkedinProfileSkill[];
  /**
   * The member's top skills, as free-form strings when present.
   */
  topSkills?: unknown[];
  /**
   * Canonical LinkedIn profile URL.
   */
  url: string;
  /**
   * Whether the profile is identity-verified.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * Input for LinkedIn Profile (basic) (linkedin.profile_thin).
 */
export interface LinkedinProfileThinInput {
  /**
   * Full LinkedIn profile URL.
   */
  url: string;
}

export interface LinkedinProfileThinArticle {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Headline of the article.
   */
  headline: string;
  /**
   * Canonical URL of the article.
   */
  url?: string;
  [extra: string]: unknown;
}

export interface LinkedinProfileThinEducation {
  /**
   * End date of study.
   */
  endDate?: string;
  /**
   * Name of the school.
   */
  school: string;
  /**
   * URL of the school page.
   */
  schoolUrl?: string;
  /**
   * Start date of study.
   */
  startDate?: string;
  [extra: string]: unknown;
}

export interface LinkedinProfileThinExperience {
  /**
   * Name of the company.
   */
  company: string;
  /**
   * URL of the company page.
   */
  companyUrl?: string;
  /**
   * End date of the role.
   */
  endDate?: string;
  /**
   * Start date of the role.
   */
  startDate?: string;
  [extra: string]: unknown;
}

export interface LinkedinProfileThinRecentPost {
  /**
   * Type of activity for the post.
   */
  activityType?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Unique identifier of the post.
   */
  id: string;
  /**
   * Text content of the post.
   */
  text?: string;
  /**
   * Canonical URL of the post.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Profile (basic) (linkedin.profile_thin).
 */
export interface LinkedinProfileThinData {
  /**
   * About/summary text of the profile.
   */
  about: string;
  /**
   * The profile's published articles.
   */
  articles: LinkedinProfileThinArticle[];
  /**
   * URL of the profile avatar image.
   */
  avatarUrl: string;
  /**
   * Education entries.
   */
  education: LinkedinProfileThinEducation[];
  /**
   * Work experience entries (company and dates only in this basic tier). Populated whenever the provider has data for the entity.
   */
  experience: LinkedinProfileThinExperience[];
  /**
   * Number of followers.
   */
  followers: number;
  /**
   * Location of the profile owner.
   */
  location: string;
  /**
   * Full name of the profile owner.
   */
  name: string;
  /**
   * The profile's recent posts.
   */
  recentPosts: LinkedinProfileThinRecentPost[];
  [extra: string]: unknown;
}

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

/**
 * A LinkedIn company: name, URL, industry, location, follower count, and description.
 */
export interface LinkedinSearchCompaniesItem {
  /**
   * Company summary / about text.
   */
  description?: string;
  /**
   * Follower count as a display string (e.g. 105K followers).
   */
  followersText?: string;
  /**
   * Company universal name (the vanity slug in the URL).
   */
  handle?: string;
  /**
   * LinkedIn company id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Company logo image URL.
   */
  image?: string;
  /**
   * Company industry.
   */
  industry?: string;
  /**
   * Company location as a single string (city, region).
   */
  location?: string;
  /**
   * Company name. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Canonical LinkedIn company URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Company Search (linkedin.search_companies).
 */
export interface LinkedinSearchCompaniesData {
  /**
   * Matching company records. Populated whenever the provider has data for the entity.
   */
  items: LinkedinSearchCompaniesItem[];
}

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

export interface LinkedinSearchPostsPost {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Text content of the post. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Canonical URL of the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Post Search (linkedin.search_posts).
 */
export interface LinkedinSearchPostsData {
  /**
   * Posts matching the search query. Populated whenever the provider has data for the entity.
   */
  posts: LinkedinSearchPostsPost[];
}

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

/**
 * A full LinkedIn profile: name, headline, location, about, current position, work experience, education, and skills, plus the profile URL, handle, and id.
 */
export interface LinkedinSearchProfilesItem {
  /**
   * Profile about / summary text.
   */
  about?: string;
  /**
   * Current role(s). Each entry is an open object with the position title, company, dates, and location; shape can vary by profile.
   */
  currentPosition?: LinkedinSearchProfilesCurrentPosition[];
  /**
   * Education history. Each entry is an open object with school, degree, and field of study; shape can vary by profile.
   */
  education?: LinkedinSearchProfilesEducation[];
  /**
   * Full work history. Each entry is an open object with the position title, company, dates, and location; shape can vary by profile. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  experience?: LinkedinSearchProfilesExperience[];
  /**
   * Member's first name.
   */
  firstName?: string;
  /**
   * Public profile identifier (the vanity slug in the URL). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  handle?: string;
  /**
   * Profile headline (the tagline under the name). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  headline?: string;
  /**
   * LinkedIn member URN id for the profile.
   */
  id: string;
  /**
   * Profile picture URL.
   */
  image?: string;
  /**
   * Member's last name.
   */
  lastName?: string;
  /**
   * Member's location as a single string (city, region, country).
   */
  location?: string;
  /**
   * Whether the member has the Open to Work flag set.
   */
  openToWork?: boolean;
  /**
   * Whether the member has a LinkedIn Premium subscription.
   */
  premium?: boolean;
  /**
   * Listed skills. Each entry is an open object with the skill name and endorsement summary.
   */
  skills?: LinkedinSearchProfilesSkill[];
  /**
   * Canonical LinkedIn profile URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

export interface LinkedinSearchProfilesCurrentPosition {
  [extra: string]: unknown;
}

export interface LinkedinSearchProfilesEducation {
  [extra: string]: unknown;
}

export interface LinkedinSearchProfilesExperience {
  [extra: string]: unknown;
}

export interface LinkedinSearchProfilesSkill {
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Profile Search (linkedin.search_profiles).
 */
export interface LinkedinSearchProfilesData {
  /**
   * Matched profile records. Populated whenever the provider has data for the entity.
   */
  items: LinkedinSearchProfilesItem[];
}

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

/**
 * A full LinkedIn profile: name, headline, location, about, current position, work experience, education, and skills, plus the profile URL, handle, id, and a discovered work email with deliverability.
 */
export interface LinkedinSearchProfilesEmailItem {
  /**
   * Profile about / summary text.
   */
  about?: string;
  /**
   * Current role(s). Each entry is an open object with the position title, company, dates, and location; shape can vary by profile.
   */
  currentPosition?: LinkedinSearchProfilesEmailCurrentPosition[];
  /**
   * Education history. Each entry is an open object with school, degree, and field of study; shape can vary by profile.
   */
  education?: LinkedinSearchProfilesEmailEducation[];
  /**
   * Discovered work email(s) for the member. Each entry is an open object with the email address plus deliverability signals (deliverable, disposable, catchAllDomain, validEmailServer, qualityScore, status); may be empty when no email could be verified. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  emails?: LinkedinSearchProfilesEmailEmail[];
  /**
   * Full work history. Each entry is an open object with the position title, company, dates, and location; shape can vary by profile. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  experience?: LinkedinSearchProfilesEmailExperience[];
  /**
   * Member's first name.
   */
  firstName?: string;
  /**
   * Public profile identifier (the vanity slug in the URL). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  handle?: string;
  /**
   * Profile headline (the tagline under the name). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  headline?: string;
  /**
   * LinkedIn member URN id for the profile.
   */
  id: string;
  /**
   * Profile picture URL.
   */
  image?: string;
  /**
   * Member's last name.
   */
  lastName?: string;
  /**
   * Member's location as a single string (city, region, country).
   */
  location?: string;
  /**
   * Whether the member has the Open to Work flag set.
   */
  openToWork?: boolean;
  /**
   * Whether the member has a LinkedIn Premium subscription.
   */
  premium?: boolean;
  /**
   * Listed skills. Each entry is an open object with the skill name and endorsement summary.
   */
  skills?: LinkedinSearchProfilesEmailSkill[];
  /**
   * Canonical LinkedIn profile URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

export interface LinkedinSearchProfilesEmailCurrentPosition {
  [extra: string]: unknown;
}

export interface LinkedinSearchProfilesEmailEducation {
  [extra: string]: unknown;
}

export interface LinkedinSearchProfilesEmailEmail {
  [extra: string]: unknown;
}

export interface LinkedinSearchProfilesEmailExperience {
  [extra: string]: unknown;
}

export interface LinkedinSearchProfilesEmailSkill {
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Profile Search + Email (linkedin.search_profiles_email).
 */
export interface LinkedinSearchProfilesEmailData {
  /**
   * Matched profile records, each with a discovered work email. Populated whenever the provider has data for the entity.
   */
  items: LinkedinSearchProfilesEmailItem[];
}

/**
 * Input for LinkedIn Profile Search (basic) (linkedin.search_profiles_thin).
 */
export interface LinkedinSearchProfilesThinInput {
  /**
   * Search query for LinkedIn profiles - a role, name, or keywords (e.g. 'Marketing Manager').
   */
  query: string;
}

/**
 * A basic LinkedIn profile record: name, handle, headline, vanity profile URL, and location.
 */
export interface LinkedinSearchProfilesThinItem {
  /**
   * Public profile identifier (the vanity slug in the URL). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  handle?: string;
  /**
   * Profile headline (the tagline under the name). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  headline?: string;
  /**
   * LinkedIn member URN id for the profile.
   */
  id?: string;
  /**
   * Profile picture URL.
   */
  image?: string;
  /**
   * Member's location as a single string (city, region, country).
   */
  location?: string;
  /**
   * Member's display name.
   */
  name?: string;
  /**
   * Canonical LinkedIn vanity profile URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Profile Search (basic) (linkedin.search_profiles_thin).
 */
export interface LinkedinSearchProfilesThinData {
  /**
   * Matched profile records (basic fields only). Populated whenever the provider has data for the entity.
   */
  items: LinkedinSearchProfilesThinItem[];
}

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

**Price:** \$2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.ad({ url: "https://www.linkedin.com/ad-library/detail/1487405616" });
   */
  ad(
    input: LinkedinAdInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinAdData>> {
    return this._core.run("linkedin.ad", input, options);
  }

  /**
   * LinkedIn Ads Library
   *
   * Search the LinkedIn Ad Library by search URL and list the matching ads (advertiser, creative text, format).

**Price:** billed per result - \$0.05 per 1,000 requests base + \$1.50 per 1,000 results, capped at \$30.05 per 1,000 requests.
   *
   * Price: $0.00005 per request plus $0.0015 per result.
   *
   * @example
   * const res = await client.linkedin.ads({ url: "https://www.linkedin.com/company/stripe", limit: 3 });
   */
  ads(
    input: LinkedinAdsInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinAdsData>> {
    return this._core.run("linkedin.ads", input, options);
  }

  /**
   * LinkedIn Ad Search
   *
   * Search the LinkedIn Ad Library by company or keyword and list matching ads - advertiser, headline, creative text, format, CTA, and run dates - with pagination.

**Price:** \$2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.adsSearch({ company: "microsoft" });
   */
  adsSearch(
    input: LinkedinAdsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinAdsSearchData>> {
    return this._core.run("linkedin.ads_search", input, options);
  }

  /**
   * LinkedIn Company
   *
   * Fetch a full LinkedIn company page by URL: name, description, industry, employee count and range, follower count, founded year, headquarters and office locations, funding data, tagline, logo, website, and specialities.

**Price:** \$4.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.004 per request.
   *
   * @example
   * const res = await client.linkedin.company({ url: "https://www.linkedin.com/company/stripe" });
   */
  company(
    input: LinkedinCompanyInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinCompanyData>> {
    return this._core.run("linkedin.company", input, options);
  }

  /**
   * LinkedIn Company Employees
   *
   * List the employees of a LinkedIn company by name or company URL, with optional job-title filtering.

**Price:** billed per result - \$10.00 per 1,000 results, capped at \$100.00 per 1,000 requests.
   *
   * Price: $0.01 per result.
   *
   * @example
   * const res = await client.linkedin.companyEmployees({ company: "stripe", limit: 3 });
   */
  companyEmployees(
    input: LinkedinCompanyEmployeesInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinCompanyEmployeesData>> {
    return this._core.run("linkedin.company_employees", input, options);
  }

  /**
   * LinkedIn Company Posts
   *
   * List a LinkedIn company page's recent posts by URL: full text, canonical link, publish date, author, engagement counts with a per-reaction breakdown, and attached media.

**Price:** billed per result - \$0.05 per 1,000 requests base + \$1.75 per 1,000 results, capped at \$87.55 per 1,000 requests.
   *
   * Price: $0.00005 per request plus $0.00175 per result.
   *
   * @example
   * const res = await client.linkedin.companyPosts({ url: "https://www.linkedin.com/company/stripe", limit: 10 });
   */
  companyPosts(
    input: LinkedinCompanyPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinCompanyPostsData>> {
    return this._core.run("linkedin.company_posts", input, options);
  }

  /**
   * LinkedIn Company Posts (basic)
   *
   * Post text and link only. No engagement counts, author details, media, or reaction breakdown - for those use linkedin.company_posts.

**Price:** \$2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.companyPostsThin({ url: "https://www.linkedin.com/company/stripe" });
   */
  companyPostsThin(
    input: LinkedinCompanyPostsThinInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinCompanyPostsThinData>> {
    return this._core.run("linkedin.company_posts_thin", input, options);
  }

  /**
   * LinkedIn Company (basic)
   *
   * Basic company: name, description, employee count, industry, logo, website, tagline. No follower count, founded year, office locations, or funding data - for those use linkedin.company.

**Price:** \$2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.companyThin({ url: "https://www.linkedin.com/company/stripe" });
   */
  companyThin(
    input: LinkedinCompanyThinInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinCompanyThinData>> {
    return this._core.run("linkedin.company_thin", input, options);
  }

  /**
   * LinkedIn Email Finder
   *
   * Find the deliverability-validated work email behind a LinkedIn profile URL or public ID. Returns each discovered email with its deliverability, validation status, and quality score, plus the person's name and headline.

**Price:** \$10.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.01 per request.
   *
   * @example
   * const res = await client.linkedin.email({ profileUrl: "https://www.linkedin.com/in/satyanadella" });
   */
  email(
    input: LinkedinEmailInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinEmailData>> {
    return this._core.run("linkedin.email", input, options);
  }

  /**
   * LinkedIn Jobs
   *
   * Search LinkedIn job listings by title and location - full records with description, salary, applicant count, seniority, company details, and benefits. Up to 25 jobs per request.

**Price:** billed per result - \$1.00 per 1,000 requests base + \$1.00 per 1,000 results, capped at \$26.00 per 1,000 requests.
   *
   * Price: $0.001 per request plus $0.001 per result.
   *
   * @example
   * const res = await client.linkedin.jobs({ query: "software engineer", limit: 3, location: "United States", workplaceType: "remote" });
   */
  jobs(
    input: LinkedinJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinJobsData>> {
    return this._core.run("linkedin.jobs", input, options);
  }

  /**
   * LinkedIn Jobs (index)
   *
   * Cheap job index: title, company, location, posted date, URL. No description, salary, applicant counts, or seniority - for those use linkedin.jobs.

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.linkedin.jobsThin({ query: "software engineer", limit: 3, location: "United States", workplaceType: "remote" });
   */
  jobsThin(
    input: LinkedinJobsThinInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinJobsThinData>> {
    return this._core.run("linkedin.jobs_thin", input, options);
  }

  /**
   * LinkedIn Post
   *
   * Fetch a single LinkedIn post or article by URL (title, text, author, like and comment counts, publish date), normalized across providers.

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.linkedin.post({ url: "https://www.linkedin.com/posts/stripe_last-week-agent-traffic-surpassed-human-activity-7470882737390940160-2Nxs" });
   */
  post(
    input: LinkedinPostInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinPostData>> {
    return this._core.run("linkedin.post", input, options);
  }

  /**
   * LinkedIn Post Comments
   *
   * List comments on a LinkedIn post - full text, commenter name/URL/job title, timestamps, and engagement.

**Price:** billed per result - \$2.00 per 1,000 results, capped at \$200.00 per 1,000 requests.
   *
   * Price: $0.002 per result.
   *
   * @example
   * const res = await client.linkedin.postComments({ url: "https://www.linkedin.com/posts/stripe_philip-kl%C3%B6ckner-in-conversation-with-conor-activity-7477791740645564416-tIbZ", limit: 10 });
   */
  postComments(
    input: LinkedinPostCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinPostCommentsData>> {
    return this._core.run("linkedin.post_comments", input, options);
  }

  /**
   * LinkedIn Post Reactions
   *
   * List who reacted to a LinkedIn post - reactor name, profile URL, job title, and reaction type. Lead-gen grade.

**Price:** billed per result - \$2.00 per 1,000 results, capped at \$200.00 per 1,000 requests.
   *
   * Price: $0.002 per result.
   *
   * @example
   * const res = await client.linkedin.postReactions({ url: "https://www.linkedin.com/posts/satyanadella_today-were-bringing-skills-to-copilot-for-activity-7475945433668694017--kvG", limit: 5 });
   */
  postReactions(
    input: LinkedinPostReactionsInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinPostReactionsData>> {
    return this._core.run("linkedin.post_reactions", input, options);
  }

  /**
   * LinkedIn Post Transcript
   *
   * Get the spoken transcript of a LinkedIn video post by URL.

**Price:** \$2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.postTranscript({ url: "https://www.linkedin.com/posts/artificial-analysis_gemini-35-flash-is-a-step-forward-for-google-activity-7465082408409870337-4Pm-" });
   */
  postTranscript(
    input: LinkedinPostTranscriptInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinPostTranscriptData>> {
    return this._core.run("linkedin.post_transcript", input, options);
  }

  /**
   * LinkedIn Profile
   *
   * Fetch a rich LinkedIn member profile by URL: name, headline, avatar, location, connections and followers, current position, and full work experience with job titles, descriptions, dates, employment/workplace type, and per-role skills, plus education, skills, certifications, honors and awards, languages, projects, publications, and verified/premium/open-to-work flags.

**Price:** \$4.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.004 per request.
   *
   * @example
   * const res = await client.linkedin.profile({ url: "https://www.linkedin.com/in/williamhgates" });
   */
  profile(
    input: LinkedinProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinProfileData>> {
    return this._core.run("linkedin.profile", input, options);
  }

  /**
   * LinkedIn Profile (basic)
   *
   * Lightweight profile: name, avatar, location, followers, and a basic experience/education list (company + dates only, no job titles, descriptions, or skills; past companies may be redacted). For full experience detail, skills, certifications, connections, and verified flags use linkedin.profile.

**Price:** \$2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.profileThin({ url: "https://www.linkedin.com/in/williamhgates" });
   */
  profileThin(
    input: LinkedinProfileThinInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinProfileThinData>> {
    return this._core.run("linkedin.profile_thin", input, options);
  }

  /**
   * LinkedIn Company Search
   *
   * Search LinkedIn companies by keyword with optional location filtering, returning normalized company records.

**Price:** billed per result - \$1.00 per 1,000 requests base + \$4.00 per 1,000 results, capped at \$81.00 per 1,000 requests.
   *
   * Price: $0.001 per request plus $0.004 per result.
   *
   * @example
   * const res = await client.linkedin.searchCompanies({ query: "fintech", limit: 3 });
   */
  searchCompanies(
    input: LinkedinSearchCompaniesInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinSearchCompaniesData>> {
    return this._core.run("linkedin.search_companies", input, options);
  }

  /**
   * LinkedIn Post Search
   *
   * Search public LinkedIn posts by keyword (text, link, publish date), normalized across providers with transparent failover.

**Price:** \$2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.searchPosts({ query: "hiring", datePosted: "last-week" });
   */
  searchPosts(
    input: LinkedinSearchPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinSearchPostsData>> {
    return this._core.run("linkedin.search_posts", input, options);
  }

  /**
   * LinkedIn Profile Search
   *
   * Search LinkedIn profiles by keyword with optional location and job-title filters. Each match returns a full profile record: name, headline, location, current position, work experience, education, and skills, plus the profile URL, handle, and id. For a cheaper name/headline/URL-only search use linkedin.search_profiles_thin; add emails with linkedin.search_profiles_email.

**Price:** billed per result - \$80.00 per 1,000 requests base + \$4.00 per 1,000 results, capped at \$180.00 per 1,000 requests.
   *
   * Price: $0.08 per request plus $0.004 per result.
   *
   * @example
   * const res = await client.linkedin.searchProfiles({ query: "engineer", currentCompanies: ["Google"], limit: 3 });
   */
  searchProfiles(
    input: LinkedinSearchProfilesInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinSearchProfilesData>> {
    return this._core.run("linkedin.search_profiles", input, options);
  }

  /**
   * LinkedIn Profile Search + Email
   *
   * People search returning a full profile AND a verified work email for each hit. Search LinkedIn profiles by keyword with optional location and job-title filters; each match returns the full profile record (name, headline, location, current position, work experience, education, and skills, plus the profile URL, handle, and id) together with an emails array carrying the discovered work email and its deliverability. For a full profile without email use linkedin.search_profiles; for a cheaper name/headline/URL-only search use linkedin.search_profiles_thin.

**Price:** billed per result - \$80.00 per 1,000 requests base + \$9.00 per 1,000 results, capped at \$305.00 per 1,000 requests.
   *
   * Price: $0.08 per request plus $0.009 per result.
   *
   * @example
   * const res = await client.linkedin.searchProfilesEmail({ query: "founder", companyHeadcount: ["B"], limit: 5 });
   */
  searchProfilesEmail(
    input: LinkedinSearchProfilesEmailInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinSearchProfilesEmailData>> {
    return this._core.run("linkedin.search_profiles_email", input, options);
  }

  /**
   * LinkedIn Profile Search (basic)
   *
   * Cheap people search: name/handle, headline, VANITY profile URL, location. No full profile or email - for full profiles per hit use linkedin.search_profiles, add emails with linkedin.search_profiles_email.

**Price:** \$32.50 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.0325 per request.
   *
   * @example
   * const res = await client.linkedin.searchProfilesThin({ query: "recruiter" });
   */
  searchProfilesThin(
    input: LinkedinSearchProfilesThinInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinSearchProfilesThinData>> {
    return this._core.run("linkedin.search_profiles_thin", input, options);
  }
}
