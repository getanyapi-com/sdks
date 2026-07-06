// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Upwork Jobs (upwork.jobs).
 */
export interface UpworkJobsInput {
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Keywords to search Upwork jobs for (e.g. react developer).
   */
  query: string;
  /**
   * Sort order for listings: newest or relevance (e.g. newest).
   * Default: newest.
   */
  sort?: string;
}

export interface UpworkJobsItem {
  /**
   * Fixed budget or hourly range.
   */
  budget?: string;
  clientLocation?: string;
  clientRating?: number;
  /**
   * Client lifetime spend (USD).
   */
  clientTotalSpent?: number;
  /**
   * Populated whenever the provider returns data.
   */
  description?: string;
  experienceLevel?: string;
  /**
   * Upwork job identifier.
   * Populated whenever the provider returns data.
   */
  jobId: string;
  /**
   * Fixed or Hourly.
   */
  jobType?: string;
  /**
   * Whether the client's payment method is verified; null when Upwork reports it as unknown.
   */
  paymentVerified?: boolean;
  /**
   * ISO 8601 posting date.
   */
  postedAt?: string;
  /**
   * Number of proposals submitted.
   */
  proposals?: number;
  /**
   * Skill tags.
   */
  tags?: string[];
  /**
   * Populated whenever the provider returns data.
   */
  title: string;
  /**
   * Upwork job posting URL.
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Upwork Jobs (upwork.jobs).
 */
export interface UpworkJobsData {
  /**
   * Job records: title, description, budget or hourly rate, required skills, posted date, and client details.
   * Populated whenever the provider returns data.
   */
  items: UpworkJobsItem[];
}

/**
 * Typed methods for the upwork platform. Attached to the AnyAPI client as
 * `client.upwork`.
 */
export class UpworkNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Upwork Jobs
   *
   * Search Upwork job postings by keyword - up to 25 fresh listings per request with transparent per-request USD pricing.
   *
   * Price: $0 per request plus $0.0033 per result.
   *
   * @example
   * const res = await client.upwork.jobs({"limit":10,"query":"web developer"});
   */
  jobs(
    input: UpworkJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<UpworkJobsData>> {
    return this._core.run("upwork.jobs", input, options);
  }
}
