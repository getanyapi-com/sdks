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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Two-letter country site code (e.g. us, uk, de).
   * Default: us.
   */
  country?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Job search keywords (e.g. software engineer).
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface IndeedJobsItem {
  /**
   * Second-level administrative division code (county) for the job location.
   */
  admin2Code?: string;
  /**
   * External URL that starts the application, usually the employer's own tracking system.
   */
  applyUrl?: string;
  city?: string;
  /**
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  company?: string;
  /**
   * Short employer description as Indeed publishes it.
   */
  companyDescription?: string;
  /**
   * Employer revenue band as Indeed words it.
   */
  companyRevenue?: string;
  /**
   * Employer headcount band as Indeed words it (e.g. "501 to 1,000").
   */
  companySize?: string;
  /**
   * Indeed company page URL for the employer.
   */
  companyUrl?: string;
  /**
   * Employer's own website.
   */
  companyWebsite?: string;
  country?: string;
  /**
   * ISO 8601 publish date.
   */
  datePublished?: string;
  /**
   * Plain-text job description.
   */
  description?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) when the listing appeared on Indeed. Multiply by 1000 for a JS Date in milliseconds.
   */
  discoveredUtc?: number;
  expired?: boolean;
  /**
   * Indeed job key. Populated whenever the provider has data for the entity.
   */
  jobId: string;
  /**
   * Language code of the posting, e.g. en.
   */
  language?: string;
  /**
   * Latitude of the job location.
   */
  latitude?: number;
  /**
   * Employer logo image URL.
   */
  logoUrl?: string;
  /**
   * Longitude of the job location.
   */
  longitude?: number;
  postalCode?: string;
  /**
   * Employer star rating on Indeed.
   */
  rating?: number;
  /**
   * Number of employer reviews on Indeed.
   */
  reviewCount?: number;
  salaryCurrency?: string;
  salaryMax?: number;
  salaryMin?: number;
  /**
   * Salary period, e.g. YEAR or HOUR.
   */
  salaryUnit?: string;
  state?: string;
  /**
   * Street address of the job location.
   */
  streetAddress?: string;
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
