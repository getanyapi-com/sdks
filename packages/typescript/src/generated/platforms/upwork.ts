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
  /**
   * Client country or location.
   */
  clientLocation?: string;
  /**
   * Client average rating.
   */
  clientRating?: number;
  /**
   * Client lifetime spend (USD).
   */
  clientTotalSpent?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Full job posting description text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Required experience level (e.g. Entry, Intermediate, Expert).
   */
  experienceLevel?: string;
  /**
   * Upwork job identifier. Populated whenever the provider has data for the entity.
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
   * Number of proposals submitted.
   */
  proposals?: number;
  /**
   * Skill tags.
   */
  tags?: string[];
  /**
   * Job posting title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Upwork job posting URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Upwork Jobs (upwork.jobs).
 */
export interface UpworkJobsData {
  /**
   * Job records: title, description, budget or hourly rate, required skills, posted date, and client details. Populated whenever the provider has data for the entity.
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
   * Search Upwork job postings by keyword - up to 25 fresh listings per request.

**Price:** billed per result - \$3.30 per 1,000 results, capped at \$82.50 per 1,000 requests.
   *
   * Price: $0.0033 per result.
   *
   * @example
   * const res = await client.upwork.jobs({ query: "web developer", limit: 10 });
   */
  jobs(
    input: UpworkJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<UpworkJobsData>> {
    return this._core.run("upwork.jobs", input, options);
  }
}
