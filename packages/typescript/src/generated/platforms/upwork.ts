// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Upwork Jobs (upwork.jobs).
 */
export interface UpworkJobsInput {
  /**
   * Filter by required experience level.
   * One of: entry, intermediate, expert.
   */
  experienceLevel?: "entry" | "intermediate" | "expert";
  /**
   * Budget range [min, max] in USD for fixed-price jobs (e.g. [500, 5000]).
   */
  fixedPriceRange?: number[];
  /**
   * Hourly rate range [min, max] in USD/hour for hourly jobs (e.g. [20, 50]).
   */
  hourlyRateRange?: number[];
  /**
   * Filter by payment type: fixed-price or hourly jobs.
   * One of: fixed, hourly.
   */
  jobType?: "fixed" | "hourly";
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Filter by client location - a region, subregion, or country (e.g. United States, Europe).
   */
  location?: string;
  /**
   * When true, only return jobs from clients with a verified payment method.
   */
  paymentVerified?: boolean;
  /**
   * Keywords to search Upwork jobs for (e.g. react developer).
   */
  query: string;
  /**
   * Sort order for listings: newest or relevance (e.g. newest).
   * One of: newest, relevance.
   * Default: newest.
   */
  sort?: "newest" | "relevance";
}

export type UpworkJobsData = unknown;

/**
 * Typed methods for the upwork platform. Attached to the AnyAPI client as
 * `client.upwork`.
 */
export class UpworkNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Upwork Jobs
   *
   * Search Upwork job postings by keyword, with up to 25 fresh listings per request.
   *
   * Price: $0 per request plus $0.0033 per result (maximum $0.0825).
   *
   * @example
   * const res = await client.upwork.jobs({ query: "web developer", jobType: "fixed", limit: 10 });
   */
  jobs(
    input: UpworkJobsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<UpworkJobsData>> {
    return this._core.run("upwork.jobs", input, options) as unknown as Promise<
      BareRunResult<UpworkJobsData>
    >;
  }
}
