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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Filter by required experience level.
   * One of: entry, intermediate, expert.
   */
  experienceLevel?: "entry" | "intermediate" | "expert";
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Filter by payment type: fixed-price or hourly jobs.
   * One of: fixed, hourly.
   */
  jobType?: "fixed" | "hourly";
  /**
   * Maximum number of results to return (10-25, default 25). You are billed per result returned, so a lower limit costs less.
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
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface UpworkJobsItem {
  /**
   * Fixed-price budget in USD (e.g. $4000). Absent on hourly jobs, which carry hourlyRateMin and hourlyRateMax.
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
   * Number of reviews the client has received from past contracts.
   */
  clientReviewCount?: number;
  /**
   * Client lifetime spend (USD).
   */
  clientTotalSpent?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * ISO currency code the budget is quoted in (e.g. USD).
   */
  currency?: string;
  /**
   * Full job posting description text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Expected engagement length as Upwork words it (e.g. "1 to 3 months").
   */
  duration?: string;
  /**
   * Required experience level (e.g. Entry, Intermediate, Expert).
   */
  experienceLevel?: string;
  /**
   * Upper bound of the client's hourly rate range in USD. Absent on fixed-price jobs.
   */
  hourlyRateMax?: number;
  /**
   * Lower bound of the client's hourly rate range in USD. Absent on fixed-price jobs.
   */
  hourlyRateMin?: number;
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
   * Whether Upwork flags the posting as premium.
   */
  premium?: boolean;
  /**
   * Number of proposals submitted.
   */
  proposals?: number;
  /**
   * Whether the posting is a repost of an earlier job.
   */
  reposted?: boolean;
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
   * Price: $0.0011 per request plus $0.0011 per result (maximum $0.0286).
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
