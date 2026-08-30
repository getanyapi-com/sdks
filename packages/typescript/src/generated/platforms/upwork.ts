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
   * Maximum number of results to return (10-25, default 25). You are billed per result returned, so a lower limit costs less. This search has a floor of 10 results per page.
   * Range: minimum 10, maximum 25.
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
  paymentVerified?: boolean | null;
  /**
   * Number of proposals submitted.
   */
  proposals?: number;
  /**
   * Skill tags.
   */
  tags?: string[] | null;
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
   * Search Upwork job postings by keyword, with up to 25 fresh listings per request.
   *
   * Price: $0 per request plus $0.00363 per result (maximum $0.0908).
   *
   * @example
   * const res = await client.upwork.jobs({ query: "web developer", jobType: "fixed", limit: 10 });
   */
  jobs(
    input: UpworkJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<UpworkJobsData>> {
    return this._core.run("upwork.jobs", input, options);
  }
}
