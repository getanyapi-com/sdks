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

export interface GlassdoorJobsItem {
  /**
   * Populated whenever the provider returns data.
   */
  title: string;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Glassdoor Jobs (glassdoor.jobs).
 */
export interface GlassdoorJobsData {
  /**
   * Job listing records: title, employer, location, salary estimate, rating, and posting details.
   * Populated whenever the provider returns data.
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
   * Fetch job listings from any Glassdoor company or job search page URL - up to 20 normalized job records per request at a flat USD price.
   *
   * Price: $0.005 per request plus $0.00475 per result.
   *
   * @example
   * const res = await client.glassdoor.jobs({"limit":3,"url":"https://www.glassdoor.com/Job/software-engineer-jobs-SRCH_KO0,17.htm"});
   */
  jobs(
    input: GlassdoorJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GlassdoorJobsData>> {
    return this._core.run("glassdoor.jobs", input, options);
  }
}
