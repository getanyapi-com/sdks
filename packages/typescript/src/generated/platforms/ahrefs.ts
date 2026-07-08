// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Ahrefs Backlinks (ahrefs.backlinks).
 */
export interface AhrefsBacklinksInput {
  /**
   * Match scope: "exact" for the given URL only, or "subdomains" to include the domain and its subdomains.
   * One of: exact, subdomains.
   * Default: subdomains.
   */
  mode?: "exact" | "subdomains";
  /**
   * The domain or page URL to find backlinks for (e.g. "ahrefs.com").
   */
  url: string;
}

export interface AhrefsBacklinksItem {
  /**
   * Anchor text of the link.
   */
  anchor?: string;
  /**
   * Text immediately after the anchor on the referring page.
   */
  contextAfter?: string;
  /**
   * Text immediately before the anchor on the referring page.
   */
  contextBefore?: string;
  /**
   * Ahrefs Domain Rating (0-100) of the linking domain.
   */
  domainRating?: number;
  /**
   * Title of the referring page.
   */
  title?: string;
  /**
   * URL of the referring page that contains the link. Populated whenever the provider has data for the entity.
   */
  urlFrom: string;
  /**
   * Target URL the link points to.
   */
  urlTo?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Ahrefs Backlinks (ahrefs.backlinks).
 */
export interface AhrefsBacklinksData {
  /**
   * Referring pages that link to the domain or URL. Populated whenever the provider has data for the entity.
   */
  items: AhrefsBacklinksItem[];
}

/**
 * Input for Ahrefs Keyword Ideas (ahrefs.keyword_ideas).
 */
export interface AhrefsKeywordIdeasInput {
  /**
   * Two-letter country code that scopes the suggestions (e.g. us, gb, de).
   * Default: us.
   */
  country?: string;
  /**
   * The seed keyword to expand into related suggestions (e.g. "coffee").
   */
  keyword: string;
}

export interface AhrefsKeywordIdeasItem {
  /**
   * Two-letter country code the suggestions are scoped to.
   */
  country?: string;
  /**
   * Related keyword suggestions for the seed term. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  ideas?: AhrefsKeywordIdeasIdea[];
  /**
   * Search engine the suggestions are drawn from (e.g. Google).
   */
  searchEngine?: string;
  /**
   * The seed keyword the suggestions were expanded from. Populated whenever the provider has data for the entity.
   */
  sourceKeyword: string;
  [extra: string]: unknown;
}

export interface AhrefsKeywordIdeasIdea {
  /**
   * Relative Ahrefs difficulty bucket (a letter such as E, M, or H), not an exact number.
   */
  difficulty?: string;
  /**
   * The suggested related keyword. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Timestamp the suggestion metrics were last updated.
   */
  updatedAt?: string;
  /**
   * Relative search-volume bucket (a letter grade), not an exact number.
   */
  volume?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Ahrefs Keyword Ideas (ahrefs.keyword_ideas).
 */
export interface AhrefsKeywordIdeasData {
  /**
   * Keyword-idea records: the seed keyword and its related keyword suggestions, each with an Ahrefs difficulty and search-volume bucket. Populated whenever the provider has data for the entity.
   */
  items: AhrefsKeywordIdeasItem[];
}

/**
 * Input for Ahrefs Keyword Difficulty (ahrefs.keywords).
 */
export interface AhrefsKeywordsInput {
  /**
   * Two-letter country code that scopes volume and difficulty (e.g. us, gb, de).
   * Default: us.
   */
  country?: string;
  /**
   * The search term to analyze (e.g. "seo tools").
   */
  keyword: string;
}

export interface AhrefsKeywordsItem {
  /**
   * Two-letter country code the metrics are scoped to.
   */
  country?: string;
  /**
   * Ahrefs Keyword Difficulty, 0-100.
   */
  difficulty?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Estimated number of referring domains a page needs to rank in the top 10 for this keyword.
   */
  referringDomainsToRank?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Ahrefs Keyword Difficulty (ahrefs.keywords).
 */
export interface AhrefsKeywordsData {
  /**
   * Keyword-difficulty records: the difficulty score and the referring-domain gap needed to rank in the top 10. Populated whenever the provider has data for the entity.
   */
  items: AhrefsKeywordsItem[];
}

/**
 * Input for Ahrefs Domain Overview (ahrefs.overview).
 */
export interface AhrefsOverviewInput {
  /**
   * Analysis scope: subdomains covers the whole domain, exact matches only the given URL.
   * One of: exact, subdomains.
   * Default: subdomains.
   */
  mode?: "exact" | "subdomains";
  /**
   * The domain or page URL to analyze (e.g. ahrefs.com).
   */
  url: string;
}

export interface AhrefsOverviewItem {
  /**
   * Total number of backlinks pointing to the domain.
   */
  backlinks?: number;
  /**
   * Percentage (0-100) of backlinks that are dofollow.
   */
  dofollowBacklinksPct?: number;
  /**
   * Percentage (0-100) of referring domains that provide a dofollow link.
   */
  dofollowReferringDomainsPct?: number;
  /**
   * The domain or URL the metrics are scoped to. Populated whenever the provider has data for the entity.
   */
  domain: string;
  /**
   * Ahrefs Domain Rating, 0-100, measuring backlink-profile strength.
   */
  domainRating?: number;
  /**
   * Analysis scope used: subdomains (whole domain) or exact (the given URL only).
   */
  mode?: string;
  /**
   * Number of unique referring domains linking to the domain.
   */
  referringDomains?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Ahrefs Domain Overview (ahrefs.overview).
 */
export interface AhrefsOverviewData {
  /**
   * Domain authority records: the requested domain plus its Domain Rating, total backlinks, and referring-domain counts. Populated whenever the provider has data for the entity.
   */
  items: AhrefsOverviewItem[];
}

/**
 * Typed methods for the ahrefs platform. Attached to the AnyAPI client as
 * `client.ahrefs`.
 */
export class AhrefsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Ahrefs Backlinks
   *
   * Get the referring pages linking to a domain or URL, each with the source page, anchor text, linking domain rating, and page title.

**Price:** $19.50 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.0195 per request.
   *
   * @example
   * const res = await client.ahrefs.backlinks({ url: "ahrefs.com", mode: "exact" });
   */
  backlinks(
    input: AhrefsBacklinksInput,
    options?: RequestOptions,
  ): Promise<RunResult<AhrefsBacklinksData>> {
    return this._core.run("ahrefs.backlinks", input, options);
  }

  /**
   * Ahrefs Keyword Ideas
   *
   * Get related keyword suggestions for any seed term, each with an Ahrefs difficulty and search-volume bucket.

**Price:** billed per result - $1.50 per 1,000 requests base + $18.00 per 1,000 results, capped at $19.50 per 1,000 requests.
   *
   * Price: $0.0015 per request plus $0.018 per result.
   *
   * @example
   * const res = await client.ahrefs.keywordIdeas({ keyword: "coffee", country: "us" });
   */
  keywordIdeas(
    input: AhrefsKeywordIdeasInput,
    options?: RequestOptions,
  ): Promise<RunResult<AhrefsKeywordIdeasData>> {
    return this._core.run("ahrefs.keyword_ideas", input, options);
  }

  /**
   * Ahrefs Keyword Difficulty
   *
   * Get the Ahrefs keyword-difficulty metrics for any search term: the difficulty score (0-100) and the number of referring domains a page needs to rank in the top 10 - as normalized JSON.

**Price:** billed per result - $1.50 per 1,000 requests base + $18.00 per 1,000 results, capped at $19.50 per 1,000 requests.
   *
   * Price: $0.0015 per request plus $0.018 per result.
   *
   * @example
   * const res = await client.ahrefs.keywords({ keyword: "seo tools", country: "us" });
   */
  keywords(
    input: AhrefsKeywordsInput,
    options?: RequestOptions,
  ): Promise<RunResult<AhrefsKeywordsData>> {
    return this._core.run("ahrefs.keywords", input, options);
  }

  /**
   * Ahrefs Domain Overview
   *
   * Get an SEO authority overview for any domain or URL: Domain Rating, total backlinks, and referring domains - as normalized JSON.

**Price:** billed per result - $1.50 per 1,000 requests base + $18.00 per 1,000 results, capped at $19.50 per 1,000 requests.
   *
   * Price: $0.0015 per request plus $0.018 per result.
   *
   * @example
   * const res = await client.ahrefs.overview({ url: "ahrefs.com", mode: "subdomains" });
   */
  overview(
    input: AhrefsOverviewInput,
    options?: RequestOptions,
  ): Promise<RunResult<AhrefsOverviewData>> {
    return this._core.run("ahrefs.overview", input, options);
  }
}
