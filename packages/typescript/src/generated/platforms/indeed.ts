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
   * Only return jobs posted within this window: 24h (past day) or week (past 7 days). Omit for all dates.
   * One of: 24h, week.
   */
  postedLimit?: "24h" | "week";
  /**
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Job search keywords (e.g. software engineer).
   */
  query: string;
}

export interface IndeedJobsItem {
  city?: string;
  /**
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
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
   * Indeed job key. Populated whenever the provider has data for the entity.
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
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Indeed job posting URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Indeed Jobs (indeed.jobs).
 */
export interface IndeedJobsData {
  /**
   * Job listing records: title, employer, location, salary when available, job type, posting date, and description. Populated whenever the provider has data for the entity.
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
   * Search Indeed job listings by keyword, location, and country, with up to 20 normalized job records per request.
   *
   * Price: $0.00088 per request plus $0.00009 per result (maximum $0.00264).
   *
   * @example
   * const res = await client.indeed.jobs({ query: "data analyst", limit: 3, location: "Austin, TX" });
   */
  jobs(
    input: IndeedJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<IndeedJobsData>> {
    return this._core.run("indeed.jobs", input, options);
  }
}
