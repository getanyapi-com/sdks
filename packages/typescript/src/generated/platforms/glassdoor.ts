// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Glassdoor Jobs (glassdoor.jobs).
 */
export interface GlassdoorJobsInput {
  /**
   * When true, only return jobs offering Easy Apply. Keyword mode only.
   */
  easyApply?: boolean;
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
   * Job title or keywords to search (keyword mode). Provide this or a url.
   */
  query?: string;
  /**
   * Sort order: most recent (date) or best match (relevance). Keyword mode only.
   * One of: date, relevance.
   */
  sortBy?: "date" | "relevance";
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

export type GlassdoorJobsData = unknown;

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
   * Price: $0.005 per request plus $0.00475 per result (maximum $0.1).
   *
   * @example
   * const res = await client.glassdoor.jobs({ limit: 3, location: "United States", postedLimit: "month", query: "software engineer" });
   */
  jobs(
    input: GlassdoorJobsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GlassdoorJobsData>> {
    return this._core.run(
      "glassdoor.jobs",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GlassdoorJobsData>>;
  }
}
