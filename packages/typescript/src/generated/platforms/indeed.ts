// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Indeed Jobs (indeed.jobs).
 */
export interface IndeedJobsInput {
  /**
   * Two-letter country site code (e.g. us, uk, de).
   * Default: us.
   */
  country?: string;
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * City, state, zip, or 'remote'.
   */
  location?: string;
  /**
   * Job search keywords (e.g. software engineer).
   */
  query: string;
}

export interface IndeedJobsItem {
  city?: string;
  /**
   * Populated whenever the provider returns data.
   */
  company?: string;
  country?: string;
  /**
   * ISO 8601 publish date.
   */
  datePublished?: string;
  /**
   * Plain-text job description.
   */
  description?: string;
  expired?: boolean;
  /**
   * Indeed job key.
   * Populated whenever the provider returns data.
   */
  jobId: string;
  postalCode?: string;
  salaryCurrency?: string;
  salaryMax?: number;
  salaryMin?: number;
  /**
   * Salary period, e.g. YEAR or HOUR.
   */
  salaryUnit?: string;
  state?: string;
  /**
   * Populated whenever the provider returns data.
   */
  title: string;
  /**
   * Indeed job posting URL.
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Indeed Jobs (indeed.jobs).
 */
export interface IndeedJobsData {
  /**
   * Job listing records: title, employer, location, salary when available, job type, posting date, and description.
   * Populated whenever the provider returns data.
   */
  items: IndeedJobsItem[];
}

/**
 * Typed methods for the indeed platform. Attached to the AnyAPI client as
 * `client.indeed`.
 */
export class IndeedNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Indeed Jobs
   *
   * Search Indeed job listings by keyword, location, and country - up to 20 normalized job records per request at a flat USD price.
   *
   * Price: $0.0008 per request plus $0.00008 per result.
   *
   * @example
   * const res = await client.indeed.jobs({"limit":3,"location":"Austin, TX","query":"data analyst"});
   */
  jobs(
    input: IndeedJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<IndeedJobsData>> {
    return this._core.run("indeed.jobs", input, options);
  }
}
