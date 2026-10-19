// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Levels.fyi Jobs (levels.jobs).
 */
export interface LevelsJobsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of jobs to return (1-20, default 20). Levels.fyi groups jobs by company, up to 3 per company, so several results can come from one employer.
   * Range: minimum 1, maximum 20.
   * Default: 20.
   */
  limit?: number;
  /**
   * Levels.fyi location slug as it appears in Levels.fyi URLs, e.g. united-states. Not a free-text city name; omit it to search everywhere.
   */
  location?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Job title, keywords or company name to search, e.g. software engineer or google.
   */
  query: string;
  /**
   * Sort order: best match (relevance), most recently posted (date), or highest total compensation (compensation).
   * One of: relevance, date, compensation.
   * Default: relevance.
   */
  sortBy?: "relevance" | "date" | "compensation";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface LevelsJobsItem {
  /**
   * URL that starts the application, usually the employer's own careers page or a job board.
   */
  applyUrl?: string | null;
  /**
   * Hiring company name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  company?: string;
  /**
   * Levels.fyi company slug, e.g. google; null when the source did not send one.
   */
  companySlug?: string | null;
  /**
   * When the job was posted. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Whether the listing is a paid placement on Levels.fyi.
   */
  isSponsored?: boolean | null;
  /**
   * Levels.fyi job id. Populated whenever the provider has data for the entity.
   */
  jobId: string;
  /**
   * Job location as Levels.fyi shows it, e.g. San Jose, CA. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  location?: string;
  /**
   * Company logo image URL.
   */
  logoUrl?: string | null;
  /**
   * Whether Levels.fyi marks the job as remote; null when it does not say.
   */
  remote?: boolean | null;
  /**
   * ISO 4217 currency of the salary and compensation figures, e.g. USD.
   */
  salaryCurrency?: string | null;
  /**
   * High end of the base salary range in salaryCurrency per salaryUnit. null when Levels.fyi shows no salary for the job. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  salaryMax?: number | null;
  /**
   * Low end of the base salary range in salaryCurrency per salaryUnit. null when Levels.fyi shows no salary for the job. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  salaryMin?: number | null;
  /**
   * Where the base salary range comes from, as Levels.fyi labels it, e.g. Levels.fyi base salary. null when the job has no salary range.
   */
  salarySource?: string | null;
  /**
   * Pay period of the salary and compensation figures, e.g. YEAR.
   */
  salaryUnit?: string | null;
  /**
   * Job title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * High end of the total compensation range (base, stock and bonus). Some ranges are Levels.fyi estimates. null when Levels.fyi shows none.
   */
  totalCompensationMax?: number | null;
  /**
   * Low end of the total compensation range (base, stock and bonus). Some ranges are Levels.fyi estimates. null when Levels.fyi shows none.
   */
  totalCompensationMin?: number | null;
  /**
   * Where the total compensation range comes from, as Levels.fyi labels it, e.g. Levels.fyi total compensation. Some ranges are Levels.fyi estimates rather than figures the employer posted. null when the job has no total compensation range.
   */
  totalCompensationSource?: string | null;
  /**
   * Levels.fyi job listing URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * Where the job is worked as Levels.fyi lists it, e.g. office or remote. null when Levels.fyi does not say.
   */
  workplaceTypes?: string[] | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Levels.fyi Jobs (levels.jobs).
 */
export interface LevelsJobsData {
  /**
   * Jobs in Levels.fyi's order, grouped by company. Populated whenever the provider has data for the entity.
   */
  items: LevelsJobsItem[];
  /**
   * Total number of jobs Levels.fyi matches for the search, beyond the ones returned.
   */
  total?: number | null;
}

/**
 * Typed methods for the levels platform. Attached to the AnyAPI client as
 * `client.levels`.
 */
export class LevelsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Levels.fyi Jobs
   *
   * Search Levels.fyi job listings by title or keyword and get each job with its salary range and estimated total compensation where Levels.fyi has them, plus company, location, posting date and apply link. Returns up to 20 jobs per call, grouped by company; filter by location and sort by relevance, date or pay.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.levels.jobs({ query: "software engineer", limit: 10, location: "united-states" });
   */
  jobs(
    input: LevelsJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<LevelsJobsData>> {
    return this._core.run("levels.jobs", input, options);
  }
}
