// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
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

export interface SemrushKeywordsItem {
  /**
   * Paid-search competition density, 0 to 1.
   */
  competition?: number;
  /**
   * Average cost per click in USD.
   */
  cpcUsd?: number;
  /**
   * Two-letter Semrush regional database the metrics are scoped to.
   */
  database?: string;
  /**
   * Search-intent labels for the keyword (e.g. commercial, informational). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  intents?: string[];
  /**
   * The researched search term. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Semrush Keyword Difficulty, 0 to 100.
   */
  keywordDifficulty?: number;
  /**
   * Number of organic results Google returns for the keyword.
   */
  organicResultsCount?: number;
  /**
   * Question-phrased keyword variations with their own volume and difficulty. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  questions?: SemrushKeywordsQuestion[];
  /**
   * Median number of referring domains across the ranking pages.
   */
  referringDomainsMedian?: number;
  /**
   * Related keyword suggestions with their own volume and difficulty. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  relatedKeywords?: SemrushKeywordsRelatedKeyword[];
  /**
   * Average monthly search volume in the selected database.
   */
  searchVolume?: number;
  [extra: string]: unknown;
}

export interface SemrushKeywordsQuestion {
  /**
   * The question keyword.
   */
  keyword: string;
  /**
   * Semrush Keyword Difficulty for the question keyword, 0 to 100.
   */
  keywordDifficulty?: number;
  /**
   * Average monthly search volume for the question keyword.
   */
  searchVolume?: number;
  [extra: string]: unknown;
}

export interface SemrushKeywordsRelatedKeyword {
  /**
   * The related keyword.
   */
  keyword: string;
  /**
   * Semrush Keyword Difficulty for the related keyword, 0 to 100.
   */
  keywordDifficulty?: number;
  /**
   * Average monthly search volume for the related keyword.
   */
  searchVolume?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Semrush Keyword Research (semrush.keywords).
 */
export interface SemrushKeywordsData {
  /**
   * Keyword-research records: search volume, CPC, competition, keyword difficulty, plus related keywords and question keywords for the researched term. Populated whenever the provider has data for the entity.
   */
  items: SemrushKeywordsItem[];
}

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

export interface SemrushOverviewItem {
  /**
   * Semrush AI visibility metric for the domain.
   */
  aiVisibility?: number;
  /**
   * Semrush Authority Score, 0-100.
   */
  authorityScore?: number;
  /**
   * Total number of backlinks pointing at the domain.
   */
  backlinks?: number;
  /**
   * Two-letter Semrush regional database the metrics are scoped to.
   */
  database?: string;
  /**
   * The analyzed domain. Populated whenever the provider has data for the entity.
   */
  domain: string;
  /**
   * Number of dofollow backlinks.
   */
  followBacklinks?: number;
  /**
   * Moz Domain Authority, 0-100 (only when includeMoz is true).
   */
  mozDomainAuthority?: number;
  /**
   * Moz Spam Score as a percentage string (only when includeMoz is true).
   */
  mozSpamScore?: string;
  /**
   * Number of nofollow backlinks.
   */
  nofollowBacklinks?: number;
  /**
   * Number of keywords the domain ranks for organically.
   */
  organicKeywords?: number;
  /**
   * Estimated monthly organic search traffic.
   */
  organicTraffic?: number;
  /**
   * Estimated USD value of the organic traffic.
   */
  organicTrafficCostUsd?: number;
  /**
   * Number of keywords the domain bids on.
   */
  paidKeywords?: number;
  /**
   * Estimated monthly paid search traffic.
   */
  paidTraffic?: number;
  /**
   * Estimated USD value of the paid traffic.
   */
  paidTrafficCostUsd?: number;
  /**
   * Number of unique domains linking to the domain.
   */
  referringDomains?: number;
  /**
   * Two-letter code of the country sending the most traffic.
   */
  topCountry?: string;
  /**
   * Estimated monthly traffic from the top country.
   */
  topCountryTraffic?: number;
  /**
   * The domain's top organic keywords with position, volume, and value. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  topKeywords?: SemrushOverviewTopKeyword[];
  /**
   * Estimated total monthly traffic across organic and paid.
   */
  totalTraffic?: number;
  [extra: string]: unknown;
}

export interface SemrushOverviewTopKeyword {
  /**
   * Average cost per click in USD.
   */
  cpcUsd?: number;
  /**
   * Search intents associated with the keyword.
   */
  intents?: string[];
  /**
   * The organic keyword.
   */
  keyword: string;
  /**
   * Semrush Keyword Difficulty, 0-100.
   */
  keywordDifficulty?: number;
  /**
   * Current SERP position for this keyword.
   */
  position?: number;
  /**
   * Monthly search volume for this keyword.
   */
  searchVolume?: number;
  /**
   * Estimated monthly traffic this keyword drives to the domain.
   */
  traffic?: number;
  /**
   * The ranking URL on the domain.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Semrush Domain Overview (semrush.overview).
 */
export interface SemrushOverviewData {
  /**
   * Domain overview records: Authority Score, organic and paid traffic, keyword and backlink counts, top country, and the domain's top organic keywords. Populated whenever the provider has data for the entity.
   */
  items: SemrushOverviewItem[];
}

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

**Price:** billed per result - \$15.00 per 1,000 results, capped at \$15.00 per 1,000 requests.
   *
   * Price: $0.015 per result.
   *
   * @example
   * const res = await client.semrush.keywords({ keyword: "best running shoes", database: "us" });
   */
  keywords(
    input: SemrushKeywordsInput,
    options?: RequestOptions,
  ): Promise<RunResult<SemrushKeywordsData>> {
    return this._core.run("semrush.keywords", input, options);
  }

  /**
   * Semrush Domain Overview
   *
   * a Semrush SEO overview for any domain: Authority Score, organic and paid traffic, keyword and backlink counts, top country, and the domain's top organic keywords.

**Price:** billed per result - \$15.00 per 1,000 results, capped at \$15.00 per 1,000 requests.
   *
   * Price: $0.015 per result.
   *
   * @example
   * const res = await client.semrush.overview({ domain: "ahrefs.com", database: "us" });
   */
  overview(
    input: SemrushOverviewInput,
    options?: RequestOptions,
  ): Promise<RunResult<SemrushOverviewData>> {
    return this._core.run("semrush.overview", input, options);
  }
}
