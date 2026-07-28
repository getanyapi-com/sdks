// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Semrush Keyword Research (semrush.keywords).
 */
export interface SemrushKeywordsInput {
  /**
   * Two-letter Semrush regional database that scopes the metrics (e.g. us, uk, de).
   * Default: us.
   */
  database?: string;
  /**
   * The search term to research (e.g. "best running shoes").
   */
  keyword: string;
}

export type SemrushKeywordsData = unknown;

/**
 * Input for Semrush Domain Overview (semrush.overview).
 */
export interface SemrushOverviewInput {
  /**
   * Two-letter Semrush regional database that scopes the metrics (e.g. us, uk, de).
   * Default: us.
   */
  database?: string;
  /**
   * The domain to analyze (e.g. ahrefs.com).
   */
  domain: string;
  /**
   * Add Moz Domain Authority and Spam Score to the response.
   * Default: false.
   */
  includeMoz?: boolean;
}

export type SemrushOverviewData = unknown;

/**
 * Typed methods for the semrush platform. Attached to the AnyAPI client as
 * `client.semrush`.
 */
export class SemrushNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Semrush Keyword Research
   *
   * Semrush keyword research for any term: monthly search volume, CPC, competition, keyword difficulty, plus related keywords and question keywords.
   *
   * Price: $0 per request plus $0.015 per result (maximum $0.015).
   *
   * @example
   * const res = await client.semrush.keywords({ keyword: "best running shoes", database: "us" });
   */
  keywords(
    input: SemrushKeywordsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SemrushKeywordsData>> {
    return this._core.run(
      "semrush.keywords",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SemrushKeywordsData>>;
  }

  /**
   * Semrush Domain Overview
   *
   * a Semrush SEO overview for any domain: Authority Score, organic and paid traffic, keyword and backlink counts, top country, and the domain's top organic keywords.
   *
   * Price: $0 per request plus $0.015 per result (maximum $0.015).
   *
   * @example
   * const res = await client.semrush.overview({ domain: "ahrefs.com", database: "us" });
   */
  overview(
    input: SemrushOverviewInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SemrushOverviewData>> {
    return this._core.run(
      "semrush.overview",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SemrushOverviewData>>;
  }
}
