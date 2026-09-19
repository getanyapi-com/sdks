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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * When true, only return jobs offering Easy Apply. Keyword mode only.
   */
  easyApply?: boolean;
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
   * City, region, or country to search within (keyword mode; e.g. United States, New York).
   */
  location?: string;
  /**
   * Only jobs posted within this window (past 24 hours, week, or month). Keyword mode only.
   * One of: 24h, week, month.
   */
  postedLimit?: "24h" | "week" | "month";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Job title or keywords to search (keyword mode). Provide this or a url.
   */
  query?: string;
  /**
   * Sort order: most recent (date) or best match (relevance). Keyword mode only.
   * One of: date, relevance.
   */
  sortBy?: "date" | "relevance";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Alternatively, a Glassdoor company or job search page URL to scrape (e.g. https://www.glassdoor.com/Jobs/Google-Jobs-E9079.htm). The filters below apply in keyword (query) mode.
   */
  url?: string;
  /**
   * Filter by workplace type (remote, hybrid, or onsite). Keyword mode only.
   * One of: remote, hybrid, onsite.
   */
  workplaceType?: "remote" | "hybrid" | "onsite";
}

/**
 * A Glassdoor job listing: title, employer, location, salary estimate, rating, and the listing URL.
 */
export interface GlassdoorJobsItem {
  /**
   * Days since the listing was posted.
   */
  ageInDays?: number;
  /**
   * Hiring employer name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  company?: string;
  /**
   * Full job description (may contain HTML).
   */
  description?: string;
  /**
   * Glassdoor job listing id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Job location (city, region).
   */
  location?: string;
  /**
   * Employer Glassdoor star rating (0 when not rated).
   */
  rating?: number;
  /**
   * Estimated salary range for the listing.
   */
  salary?: {
    /**
     * ISO currency code for the salary figures.
     */
    currency?: string;
    /**
     * High end of the estimated salary range.
     */
    max?: number;
    /**
     * Median of the estimated salary range.
     */
    median?: number;
    /**
     * Low end of the estimated salary range.
     */
    min?: number;
    /**
     * Pay period the figures cover (e.g. ANNUAL, HOURLY).
     */
    period?: string;
  };
  /**
   * Job title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Absolute Glassdoor job listing URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Glassdoor Jobs (glassdoor.jobs).
 */
export interface GlassdoorJobsData {
  /**
   * Job listing records for the search or company page. Populated whenever the provider has data for the entity.
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
   * Search Glassdoor job listings by keyword and location, or scrape any Glassdoor company or job search page URL - up to 20 normalized job records per request.
   *
   * Price: $0.0055 per request plus $0.00523 per result (maximum $0.11).
   *
   * @example
   * const res = await client.glassdoor.jobs({ limit: 3, location: "United States", postedLimit: "month", query: "software engineer" });
   */
  jobs(
    input: GlassdoorJobsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GlassdoorJobsData>> {
    return this._core.run("glassdoor.jobs", input, options);
  }
}
