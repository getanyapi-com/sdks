// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type AhrefsBacklinksData = unknown;

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

export type AhrefsKeywordIdeasData = unknown;

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

export type AhrefsKeywordsData = unknown;

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

export type AhrefsOverviewData = unknown;

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
   *
   * Price: $0.0195 per request plus $0 per result (maximum $0.0195).
   *
   * @example
   * const res = await client.ahrefs.backlinks({ url: "ahrefs.com", mode: "exact" });
   */
  backlinks(
    input: AhrefsBacklinksInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<AhrefsBacklinksData>> {
    return this._core.run(
      "ahrefs.backlinks",
      input,
      options,
    ) as unknown as Promise<BareRunResult<AhrefsBacklinksData>>;
  }

  /**
   * Ahrefs Keyword Ideas
   *
   * Get related keyword suggestions for any seed term, each with an Ahrefs difficulty and search-volume bucket.
   *
   * Price: $0.0015 per request plus $0.018 per result (maximum $0.0195).
   *
   * @example
   * const res = await client.ahrefs.keywordIdeas({ keyword: "coffee", country: "us" });
   */
  keywordIdeas(
    input: AhrefsKeywordIdeasInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<AhrefsKeywordIdeasData>> {
    return this._core.run(
      "ahrefs.keyword_ideas",
      input,
      options,
    ) as unknown as Promise<BareRunResult<AhrefsKeywordIdeasData>>;
  }

  /**
   * Ahrefs Keyword Difficulty
   *
   * Get the Ahrefs keyword-difficulty metrics for any search term: the difficulty score (0-100) and the number of referring domains a page needs to rank in the top 10 - as normalized JSON.
   *
   * Price: $0.0015 per request plus $0.018 per result (maximum $0.0195).
   *
   * @example
   * const res = await client.ahrefs.keywords({ keyword: "seo tools", country: "us" });
   */
  keywords(
    input: AhrefsKeywordsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<AhrefsKeywordsData>> {
    return this._core.run(
      "ahrefs.keywords",
      input,
      options,
    ) as unknown as Promise<BareRunResult<AhrefsKeywordsData>>;
  }

  /**
   * Ahrefs Domain Overview
   *
   * Get an SEO authority overview for any domain or URL: Domain Rating, total backlinks, and referring domains - as normalized JSON.
   *
   * Price: $0.0015 per request plus $0.018 per result (maximum $0.0195).
   *
   * @example
   * const res = await client.ahrefs.overview({ url: "ahrefs.com", mode: "subdomains" });
   */
  overview(
    input: AhrefsOverviewInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<AhrefsOverviewData>> {
    return this._core.run(
      "ahrefs.overview",
      input,
      options,
    ) as unknown as Promise<BareRunResult<AhrefsOverviewData>>;
  }
}
