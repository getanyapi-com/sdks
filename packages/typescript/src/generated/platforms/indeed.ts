// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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
   * Job search keywords (e.g. software engineer).
   */
  query: string;
}

export type IndeedJobsData = unknown;

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
   * Price: $0.0008 per request plus $0.00008 per result (maximum $0.0024).
   *
   * @example
   * const res = await client.indeed.jobs({ query: "data analyst", limit: 3, location: "Austin, TX" });
   */
  jobs(
    input: IndeedJobsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<IndeedJobsData>> {
    return this._core.run("indeed.jobs", input, options) as unknown as Promise<
      BareRunResult<IndeedJobsData>
    >;
  }
}
