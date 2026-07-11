// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Glassdoor Jobs (glassdoor.jobs).
 */
export interface GlassdoorJobsInput {
  /**
   * When true, only return jobs offering Easy Apply. Keyword mode only.
   */
  easyApply?: boolean;
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * City, region, or country to search within (keyword mode; e.g. United States, New York).
   */
  location?: string;
  /**
   * Only jobs posted within this window (past 24 hours, week, or month). Keyword mode only.
   * One of: 24h, week, month.
   */
  postedLimit?: "24h" | "week" | "month";
  /**
   * Job title or keywords to search (keyword mode). Provide this or a url.
   */
  query?: string;
  /**
   * Sort order: most recent (date) or best match (relevance). Keyword mode only.
   * One of: date, relevance.
   */
  sortBy?: "date" | "relevance";
  /**
   * Alternatively, a Glassdoor company or job search page URL to scrape (e.g. https://www.glassdoor.com/Jobs/Google-Jobs-E9079.htm). The filters below apply in keyword (query) mode.
   */
  url?: string;
  /**
   * Filter by workplace type (remote, hybrid, or onsite). Keyword mode only.
   * One of: remote, hybrid, onsite.
   */
  workplaceType?: "remote" | "hybrid" | "onsite";
}

/**
 * A Glassdoor job listing: title, employer, location, salary estimate, rating, and the listing URL.
 */
export interface GlassdoorJobsItem {
  /**
   * Days since the listing was posted.
   */
  ageInDays?: number;
  /**
   * Hiring employer name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  company?: string;
  /**
   * Full job description (may contain HTML).
   */
  description?: string;
  /**
   * Glassdoor job listing id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Job location (city, region).
   */
  location?: string;
  /**
   * Employer Glassdoor star rating (0 when not rated).
   */
  rating?: number;
  /**
   * Estimated salary range for the listing.
   */
  salary?: {
    /**
     * ISO currency code for the salary figures.
     */
    currency?: string;
    /**
     * High end of the estimated salary range.
     */
    max?: number;
    /**
     * Median of the estimated salary range.
     */
    median?: number;
    /**
     * Low end of the estimated salary range.
     */
    min?: number;
    /**
     * Pay period the figures cover (e.g. ANNUAL, HOURLY).
     */
    period?: string;
  };
  /**
   * Job title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Absolute Glassdoor job listing URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Glassdoor Jobs (glassdoor.jobs).
 */
export interface GlassdoorJobsData {
  /**
   * Job listing records for the search or company page. Populated whenever the provider has data for the entity.
   */
  items: GlassdoorJobsItem[];
}

/**
 * Typed methods for the glassdoor platform. Attached to the AnyAPI client as
 * `client.glassdoor`.
 */
export class GlassdoorNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Glassdoor Jobs
   *
   * Search Glassdoor job listings by keyword and location, or scrape any Glassdoor company or job search page URL - up to 20 normalized job records per request.

**Price:** billed per result - \$5.00 per 1,000 requests base + \$4.75 per 1,000 results, capped at \$100.00 per 1,000 requests.
   *
   * Price: $0.005 per request plus $0.00475 per result.
   *
   * @example
   * const res = await client.glassdoor.jobs({ limit: 3, location: "United States", postedLimit: "month", query: "software engineer" });
   */
  jobs(
    input: GlassdoorJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GlassdoorJobsData>> {
    return this._core.run("glassdoor.jobs", input, options);
  }
}
