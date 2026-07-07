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
  adType: string;
  advertiser: string;
  advertiserLinkedinPage: string;
  cta: string;
  description: string;
  destinationUrl: string;
  /**
   * ISO 8601 date.
   */
  endDate: string;
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
   * Advertiser (company) name.
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
   * LinkedIn ad id.
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
   * Canonical LinkedIn Ad Library detail URL.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Ads Library (linkedin.ads).
 */
export interface LinkedinAdsData {
  /**
   * Ad records from the LinkedIn Ad Library.
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
  adType: string;
  advertiser: string;
  advertiserLinkedinPage: string;
  cta: string;
  description: string;
  destinationUrl: string;
  endDate: string;
  headline: string;
  id: string;
  startDate: string;
  totalImpressions: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Ad Search (linkedin.ads_search).
 */
export interface LinkedinAdsSearchData {
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

/**
 * The `data` payload of LinkedIn Company (linkedin.company).
 */
export interface LinkedinCompanyData {
  description: string;
  employeeCount: number;
  industry: string;
  logoUrl: string;
  name: string;
  tagline: string;
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
   * Public profile identifier (the vanity slug in the URL).
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
   * Full name.
   * Present whenever the upstream returns this record.
   */
  name?: string;
  /**
   * Canonical LinkedIn profile URL.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Company Employees (linkedin.company_employees).
 */
export interface LinkedinCompanyEmployeesData {
  /**
   * Employee records for the company.
   */
  items: LinkedinCompanyEmployeesItem[];
}

/**
 * Input for LinkedIn Company Posts (linkedin.company_posts).
 */
export interface LinkedinCompanyPostsInput {
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

export interface LinkedinCompanyPostsPost {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Unique identifier of the post.
   */
  id: string;
  /**
   * Text content of the post.
   */
  text: string;
  /**
   * Canonical URL of the post.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Company Posts (linkedin.company_posts).
 */
export interface LinkedinCompanyPostsData {
  /**
   * The company's recent posts.
   */
  posts: LinkedinCompanyPostsPost[];
}

/**
 * Input for LinkedIn Email Finder (linkedin.email).
 */
export interface LinkedinEmailInput {
  /**
   * LinkedIn profile URL or public ID to find the work email for.
   */
  profileUrl: string;
}

/**
 * The discovered work email for a LinkedIn profile, with the person's name, title, company, and location.
 */
export interface LinkedinEmailItem {
  /**
   * Current company name.
   */
  company?: string;
  /**
   * Discovered work email address.
   */
  email: string;
  /**
   * First name.
   */
  firstName?: string;
  /**
   * Profile headline.
   */
  headline?: string;
  /**
   * Last name.
   */
  lastName?: string;
  /**
   * Canonical LinkedIn profile URL.
   * Present whenever the upstream returns this record.
   */
  linkedinUrl?: string;
  /**
   * Current location (city, region, country).
   */
  location?: string;
  /**
   * Full name on the LinkedIn profile.
   */
  name: string;
  /**
   * Phone number, when available.
   */
  phone?: string;
  /**
   * Seniority level (e.g. entry, senior).
   */
  seniority?: string;
  /**
   * Current job title.
   */
  title?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Email Finder (linkedin.email).
 */
export interface LinkedinEmailData {
  /**
   * Email lookup records for the LinkedIn profile.
   */
  items: LinkedinEmailItem[];
}

/**
 * Input for LinkedIn Jobs (linkedin.jobs).
 */
export interface LinkedinJobsInput {
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * City, region, or country to search within.
   */
  location?: string;
  /**
   * Job title or keywords to search.
   */
  query: string;
}

/**
 * A LinkedIn job listing: title, company, location, posting date, and the listing URL.
 */
export interface LinkedinJobsItem {
  /**
   * Hiring company name.
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
   * Full job description text.
   */
  description?: string;
  /**
   * LinkedIn job listing id.
   */
  id?: string;
  /**
   * Job location (city, region).
   * Present whenever the upstream returns this record.
   */
  location?: string;
  /**
   * Seniority / experience level (e.g. Entry level, Mid-Senior, Not Applicable).
   */
  seniority?: string;
  /**
   * Job title.
   */
  title: string;
  /**
   * Canonical LinkedIn job listing URL.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Jobs (linkedin.jobs).
 */
export interface LinkedinJobsData {
  /**
   * Job listing records for the search.
   */
  items: LinkedinJobsItem[];
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
   * Name of the post author.
   */
  author: string;
  /**
   * Number of comments on the post.
   */
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Number of likes on the post.
   */
  likes: number;
  /**
   * Text content of the post.
   */
  text: string;
  /**
   * Title of the post.
   */
  title: string;
  /**
   * Canonical URL of the post.
   */
  url: string;
  [extra: string]: unknown;
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

export interface LinkedinProfileArticle {
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

export interface LinkedinProfileEducation {
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

export interface LinkedinProfileExperience {
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

export interface LinkedinProfileRecentPost {
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
 * The `data` payload of LinkedIn Profile (linkedin.profile).
 */
export interface LinkedinProfileData {
  /**
   * About/summary text of the profile.
   */
  about: string;
  /**
   * The profile's published articles.
   */
  articles: LinkedinProfileArticle[];
  /**
   * URL of the profile avatar image.
   */
  avatarUrl: string;
  /**
   * Education entries.
   */
  education: LinkedinProfileEducation[];
  /**
   * Work experience entries.
   */
  experience: LinkedinProfileExperience[];
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
  recentPosts: LinkedinProfileRecentPost[];
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
   * LinkedIn company id.
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
   * Company name.
   */
  name: string;
  /**
   * Canonical LinkedIn company URL.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Company Search (linkedin.search_companies).
 */
export interface LinkedinSearchCompaniesData {
  /**
   * Matching company records.
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
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Text content of the post.
   */
  text: string;
  /**
   * Canonical URL of the post.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of LinkedIn Post Search (linkedin.search_posts).
 */
export interface LinkedinSearchPostsData {
  /**
   * Posts matching the search query.
   */
  posts: LinkedinSearchPostsPost[];
}

/**
 * Input for LinkedIn Profile Search (linkedin.search_profiles).
 */
export interface LinkedinSearchProfilesInput {
  /**
   * Optional current job title filter (e.g. 'Software Engineer').
   */
  jobTitle?: string;
  /**
   * Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 10.
   */
  limit?: number;
  /**
   * Optional location filter (e.g. 'San Francisco').
   */
  location?: string;
  /**
   * Search query for LinkedIn profiles - a role, name, or keywords (e.g. 'Marketing Manager').
   */
  query: string;
}

/**
 * A LinkedIn profile: name, headline, location, current position, work experience, and education, plus the profile URL, handle, and id.
 */
export interface LinkedinSearchProfilesItem {
  /**
   * Profile about / summary text.
   */
  about?: string;
  /**
   * Current role(s). Each entry is an open object with the position title, company, dates, and location; shape can vary by profile and lane.
   */
  currentPosition?: LinkedinSearchProfilesCurrentPosition[];
  /**
   * Education history. Each entry is an open object with school, degree, and field of study; shape can vary by profile and lane.
   */
  education?: LinkedinSearchProfilesEducation[];
  /**
   * Full work history. Each entry is an open object with the position title, company, dates, and location; shape can vary by profile and lane.
   */
  experience?: LinkedinSearchProfilesExperience[];
  /**
   * Member's first name.
   */
  firstName?: string;
  /**
   * Public profile identifier (the vanity slug in the URL).
   * Present whenever the upstream returns this record.
   */
  handle?: string;
  /**
   * Profile headline (the tagline under the name).
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
   * Canonical LinkedIn profile URL.
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

/**
 * The `data` payload of LinkedIn Profile Search (linkedin.search_profiles).
 */
export interface LinkedinSearchProfilesData {
  /**
   * Matched profile records.
   */
  items: LinkedinSearchProfilesItem[];
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
   * Look up a single LinkedIn Ad Library ad by URL and get the advertiser, headline, creative text, format, CTA, targeting, run dates, and impressions as clean JSON, billed per request in USD.
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
   * Search the LinkedIn Ad Library by search URL and list the matching ads (advertiser, creative text, format), priced per request in USD.
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
   * Search the LinkedIn Ad Library by company or keyword and list matching ads - advertiser, headline, creative text, format, CTA, and run dates - with pagination, billed per request in USD.
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
   * Fetch a LinkedIn company page (description, employee count, industry, website, logo) by company URL, normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
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
   * List the employees of a LinkedIn company by name or company URL, with optional job-title filtering and transparent per-request USD pricing.
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
   * List a LinkedIn company page's recent posts by URL with page pagination (text, link, publish date), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.linkedin.companyPosts({ url: "https://www.linkedin.com/company/stripe" });
   */
  companyPosts(
    input: LinkedinCompanyPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinCompanyPostsData>> {
    return this._core.run("linkedin.company_posts", input, options);
  }

  /**
   * LinkedIn Email Finder
   *
   * Find the verified work email behind a LinkedIn profile URL or ID, with transparent per-request USD pricing.
   *
   * Price: $0.0007 per result.
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
   * Search LinkedIn job listings by title and location - up to 25 normalized job records per request at a flat USD price.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.linkedin.jobs({ query: "software engineer", limit: 3, location: "San Francisco" });
   */
  jobs(
    input: LinkedinJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinJobsData>> {
    return this._core.run("linkedin.jobs", input, options);
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
  ): Promise<RunResult<LinkedinPostData>> {
    return this._core.run("linkedin.post", input, options);
  }

  /**
   * LinkedIn Post Transcript
   *
   * Get the spoken transcript of a LinkedIn video post by URL, with transparent per-request USD pricing.
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
   * Fetch a LinkedIn member's public profile by URL: name, location, followers, about, plus experience, education, recent posts, and published articles.
   *
   * Price: $0.002 per request.
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
   * LinkedIn Company Search
   *
   * Search LinkedIn companies by keyword with optional location filtering, returning normalized company records with transparent per-request USD pricing.
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
   * Search LinkedIn profiles by keyword with optional location and job-title filters. Each match returns a full profile record: name, headline, location, current position, work experience, and education, plus the profile URL, handle, and id. Flat USD price per request.
   *
   * Price: $0.0325 per request.
   *
   * @example
   * const res = await client.linkedin.searchProfiles({ query: "recruiter", limit: 3 });
   */
  searchProfiles(
    input: LinkedinSearchProfilesInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinkedinSearchProfilesData>> {
    return this._core.run("linkedin.search_profiles", input, options);
  }
}
