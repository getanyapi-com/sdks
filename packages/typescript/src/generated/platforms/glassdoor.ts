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
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * A Glassdoor company or job search page URL (e.g. https://www.glassdoor.com/Jobs/Google-Jobs-E9079.htm).
   */
  url: string;
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
   * Fetch job listings from any Glassdoor company or job search page URL - up to 20 normalized job records per request.

**Price:** billed per result - \$5.00 per 1,000 requests base + \$4.75 per 1,000 results, capped at \$100.00 per 1,000 requests.
   *
   * Price: $0.005 per request plus $0.00475 per result.
   *
   * @example
   * const res = await client.glassdoor.jobs({ url: "https://www.glassdoor.com/Job/software-engineer-jobs-SRCH_KO0,17.htm", limit: 3 });
   */
  jobs(
    input: GlassdoorJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GlassdoorJobsData>> {
    return this._core.run("glassdoor.jobs", input, options);
  }
}
