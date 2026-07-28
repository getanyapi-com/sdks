// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for SEO Competitor Domains (seo.competitors_domain).
 */
export interface SeoCompetitorsDomainInput {
  /**
   * Language code for SEO competitor metrics.
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of competitor domains to return. You are billed per returned result, so a lower limit costs less.
   * Range: minimum 1, maximum 1000.
   * Default: 10.
   */
  limit?: number;
  /**
   * Location code for SEO competitor metrics. The default is the United States.
   * Default: 2840.
   */
  location?: number;
  /**
   * Sort order for the returned competitors: by shared keyword count (intersections), organic keyword count, organic traffic value (etv), or average position. Omit for the default order.
   * One of: intersections_desc, organic_keywords_desc, organic_etv_desc, avg_position_asc.
   */
  orderBy?:
    | "intersections_desc"
    | "organic_keywords_desc"
    | "organic_etv_desc"
    | "avg_position_asc";
  /**
   * Domain to analyze, without a protocol or leading www.
   */
  target: string;
}

export type SeoCompetitorsDomainData = unknown;

/**
 * Input for SEO Domain Intersection (seo.domain_intersection).
 */
export interface SeoDomainIntersectionInput {
  /**
   * When true (the default), return keywords both domains rank for (overlap). When false, return keywords the first domain ranks for that the second domain does NOT (the content-gap query); in that mode secondRank and secondUrl are absent.
   */
  intersections?: boolean;
  /**
   * Language code for SEO overlap metrics.
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of keywords to return. You are billed per returned result, so a lower limit costs less.
   * Range: minimum 1, maximum 1000.
   * Default: 10.
   */
  limit?: number;
  /**
   * Location code for SEO overlap metrics. The default is the United States.
   * Default: 2840.
   */
  location?: number;
  /**
   * Sort order for the returned keywords: by search volume, cost per click, or keyword difficulty, ascending or descending. Omit for the default order.
   * One of: volume_desc, volume_asc, cpc_desc, difficulty_asc, difficulty_desc.
   */
  orderBy?:
    | "volume_desc"
    | "volume_asc"
    | "cpc_desc"
    | "difficulty_asc"
    | "difficulty_desc";
  /**
   * First domain to compare, without a protocol or leading www.
   */
  target1: string;
  /**
   * Second domain to compare, without a protocol or leading www.
   */
  target2: string;
}

export type SeoDomainIntersectionData = unknown;

/**
 * Input for SEO Domain Rank Overview (seo.domain_rank_overview).
 */
export interface SeoDomainRankOverviewInput {
  /**
   * Language code for SEO domain metrics.
   * Default: en.
   */
  language?: string;
  /**
   * Location code for SEO domain metrics. The default is the United States.
   * Default: 2840.
   */
  location?: number;
  /**
   * Domain to analyze, without a protocol or leading www.
   */
  target: string;
}

export type SeoDomainRankOverviewData = unknown;

/**
 * Input for SEO Keyword Difficulty (seo.keyword_difficulty).
 */
export interface SeoKeywordDifficultyInput {
  /**
   * SEO keywords to score for organic ranking difficulty.
   */
  keywords: string[];
  /**
   * Language code for SEO keyword difficulty metrics.
   * Default: en.
   */
  language?: string;
  /**
   * Location code for SEO keyword difficulty metrics. The default is the United States.
   * Default: 2840.
   */
  location?: number;
}

export type SeoKeywordDifficultyData = unknown;

/**
 * Input for SEO Keyword Ideas (seo.keyword_ideas).
 */
export interface SeoKeywordIdeasInput {
  /**
   * When true, generate only close variants of the seed keywords; when false (the default), generate a broader set of related ideas.
   */
  closelyVariants?: boolean;
  /**
   * Seed SEO keywords used to generate related keyword ideas.
   */
  keywords: string[];
  /**
   * Language code for SEO metrics.
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of keyword ideas to return. You are billed per returned result, so a lower limit costs less.
   * Range: minimum 1, maximum 1000.
   * Default: 5.
   */
  limit?: number;
  /**
   * Location code for SEO metrics. The default is the United States.
   * Default: 2840.
   */
  location?: number;
  /**
   * Sort order for the returned ideas: by search volume, cost per click, or keyword difficulty, ascending or descending. Omit for the default order.
   * One of: volume_desc, volume_asc, cpc_desc, difficulty_asc, difficulty_desc.
   */
  orderBy?:
    | "volume_desc"
    | "volume_asc"
    | "cpc_desc"
    | "difficulty_asc"
    | "difficulty_desc";
}

export type SeoKeywordIdeasData = unknown;

/**
 * Input for SEO Keyword Overview (seo.keyword_overview).
 */
export interface SeoKeywordOverviewInput {
  /**
   * SEO keywords to analyze.
   */
  keywords: string[];
  /**
   * Language code for SEO metrics.
   * Default: en.
   */
  language?: string;
  /**
   * Location code for SEO metrics. The default is the United States.
   * Default: 2840.
   */
  location?: number;
}

export type SeoKeywordOverviewData = unknown;

/**
 * Input for SEO Keyword Suggestions (seo.keyword_suggestions).
 */
export interface SeoKeywordSuggestionsInput {
  /**
   * When true, only return suggestions that contain the exact seed phrase; when false (the default), allow reordered and partial-match suggestions.
   */
  exactMatch?: boolean;
  /**
   * Seed SEO keyword used to generate keyword suggestions.
   */
  keyword: string;
  /**
   * Language code for SEO metrics.
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of keyword suggestions to return. You are billed per returned result, so a lower limit costs less.
   * Range: minimum 1, maximum 1000.
   * Default: 5.
   */
  limit?: number;
  /**
   * Location code for SEO metrics. The default is the United States.
   * Default: 2840.
   */
  location?: number;
  /**
   * Sort order for the returned suggestions: by search volume, cost per click, or keyword difficulty, ascending or descending. Omit for the default order.
   * One of: volume_desc, volume_asc, cpc_desc, difficulty_asc, difficulty_desc.
   */
  orderBy?:
    | "volume_desc"
    | "volume_asc"
    | "cpc_desc"
    | "difficulty_asc"
    | "difficulty_desc";
}

export type SeoKeywordSuggestionsData = unknown;

/**
 * Input for SEO Local Pack (seo.local_pack).
 */
export interface SeoLocalPackInput {
  /**
   * SEO local pack search keyword.
   */
  keyword: string;
  /**
   * Language code for SEO local pack results.
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of local pack places to return. Billing is flat per request.
   * Range: minimum 1, maximum 100.
   * Default: 20.
   */
  limit?: number;
  /**
   * Local pack search location name, formatted like City,Region,Country; for example, New York,New York,United States. Supply either location or locationCoordinate, not both.
   */
  location?: string;
  /**
   * Precise geo target as latitude,longitude or latitude,longitude,radius (radius in meters); for example, 40.7580,-73.9855 or 40.7580,-73.9855,1000. Supply either location or locationCoordinate, not both.
   */
  locationCoordinate?: string;
}

export type SeoLocalPackData = unknown;

/**
 * Input for SEO Ranked Keywords (seo.ranked_keywords).
 */
export interface SeoRankedKeywordsInput {
  /**
   * Language code for SEO ranking metrics.
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of ranked keywords to return. You are billed per returned result, so a lower limit costs less.
   * Range: minimum 1, maximum 1000.
   * Default: 10.
   */
  limit?: number;
  /**
   * Location code for SEO ranking metrics. The default is the United States.
   * Default: 2840.
   */
  location?: number;
  /**
   * Sort order for the returned ranked keywords: by SERP position (ascending for best rankings first), search volume, or estimated traffic value (etv). Omit for the default order.
   * One of: position_asc, position_desc, volume_desc, etv_desc.
   */
  orderBy?: "position_asc" | "position_desc" | "volume_desc" | "etv_desc";
  /**
   * Domain to analyze, without a protocol or leading www.
   */
  target: string;
}

export type SeoRankedKeywordsData = unknown;

/**
 * Input for SEO Related Keywords (seo.related_keywords).
 */
export interface SeoRelatedKeywordsInput {
  /**
   * Depth of the related-keyword expansion (0-4). Higher depth explores a broader keyword tree; the number of returned results, and therefore the price, is still capped by limit.
   * Range: minimum 0, maximum 4.
   */
  depth?: number;
  /**
   * Seed SEO keyword used to find related keywords.
   */
  keyword: string;
  /**
   * Language code for SEO metrics.
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of related keywords to return. You are billed per returned result, so a lower limit costs less.
   * Range: minimum 1, maximum 1000.
   * Default: 5.
   */
  limit?: number;
  /**
   * Location code for SEO metrics. The default is the United States.
   * Default: 2840.
   */
  location?: number;
  /**
   * Sort order for the returned related keywords: by search volume, cost per click, or keyword difficulty, ascending or descending. Omit for the default order.
   * One of: volume_desc, volume_asc, cpc_desc, difficulty_asc, difficulty_desc.
   */
  orderBy?:
    | "volume_desc"
    | "volume_asc"
    | "cpc_desc"
    | "difficulty_asc"
    | "difficulty_desc";
}

export type SeoRelatedKeywordsData = unknown;

/**
 * Input for SEO Search Intent (seo.search_intent).
 */
export interface SeoSearchIntentInput {
  /**
   * SEO keywords to classify by search intent.
   */
  keywords: string[];
  /**
   * Language code for search intent classification.
   * Default: en.
   */
  language?: string;
}

export type SeoSearchIntentData = unknown;

/**
 * Input for SEO Search Volume (seo.search_volume).
 */
export interface SeoSearchVolumeInput {
  /**
   * Start of the historical monthly-searches window, formatted YYYY-MM-DD. Cannot be more than four years before today. Omit for the default trailing window.
   */
  dateFrom?: string;
  /**
   * End of the historical monthly-searches window, formatted YYYY-MM-DD. Omit for the default trailing window.
   */
  dateTo?: string;
  /**
   * SEO keyword phrases to retrieve search-volume metrics for.
   */
  keywords: string[];
  /**
   * Language code for SEO search-volume metrics.
   * Default: en.
   */
  language?: string;
  /**
   * Location code for SEO search-volume metrics. The default is the United States.
   * Default: 2840.
   */
  location?: number;
  /**
   * When true, include Google search-partner network volume in the reported numbers; when false (the default), count Google search only.
   */
  searchPartners?: boolean;
}

export type SeoSearchVolumeData = unknown;

/**
 * Typed methods for the seo platform. Attached to the AnyAPI client as
 * `client.seo`.
 */
export class SeoNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * SEO Competitor Domains
   *
   * Get AnyAPI SEO competitor domains for a target domain with shared keyword counts and organic metrics as normalized JSON.
   *
   * Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).
   *
   * @example
   * const res = await client.seo.competitorsDomain({ target: "github.com", language: "en", limit: 10, location: 2840 });
   */
  competitorsDomain(
    input: SeoCompetitorsDomainInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SeoCompetitorsDomainData>> {
    return this._core.run(
      "seo.competitors_domain",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SeoCompetitorsDomainData>>;
  }

  /**
   * SEO Domain Intersection
   *
   * Get AnyAPI SEO keyword overlap for two domains with each domain's rankings, URLs, volume, CPC, and difficulty as normalized JSON.
   *
   * Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).
   *
   * @example
   * const res = await client.seo.domainIntersection({ target1: "github.com", target2: "gitlab.com", language: "en", limit: 10, location: 2840 });
   */
  domainIntersection(
    input: SeoDomainIntersectionInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SeoDomainIntersectionData>> {
    return this._core.run(
      "seo.domain_intersection",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SeoDomainIntersectionData>>;
  }

  /**
   * SEO Domain Rank Overview
   *
   * Get AnyAPI SEO domain ranking, organic traffic, and paid traffic metrics as normalized JSON.
   *
   * Price: $0.0156 per request plus $0 per result (maximum $0.0156).
   *
   * @example
   * const res = await client.seo.domainRankOverview({ target: "ahrefs.com", language: "en", location: 2840 });
   */
  domainRankOverview(
    input: SeoDomainRankOverviewInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SeoDomainRankOverviewData>> {
    return this._core.run(
      "seo.domain_rank_overview",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SeoDomainRankOverviewData>>;
  }

  /**
   * SEO Keyword Difficulty
   *
   * Get AnyAPI SEO keyword difficulty scores for one or more keywords as normalized JSON.
   *
   * Price: $0.0156 per request plus $0.00016 per keyword (maximum $0.1756).
   *
   * @example
   * const res = await client.seo.keywordDifficulty({ keywords: ["seo tools"], language: "en", location: 2840 });
   */
  keywordDifficulty(
    input: SeoKeywordDifficultyInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SeoKeywordDifficultyData>> {
    return this._core.run(
      "seo.keyword_difficulty",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SeoKeywordDifficultyData>>;
  }

  /**
   * SEO Keyword Ideas
   *
   * Find AnyAPI SEO keyword ideas from seed terms with volume, CPC, competition, difficulty, and intent as normalized JSON.
   *
   * Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).
   *
   * @example
   * const res = await client.seo.keywordIdeas({ keywords: ["project management software"], language: "en", limit: 5, location: 2840 });
   */
  keywordIdeas(
    input: SeoKeywordIdeasInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SeoKeywordIdeasData>> {
    return this._core.run(
      "seo.keyword_ideas",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SeoKeywordIdeasData>>;
  }

  /**
   * SEO Keyword Overview
   *
   * Get AnyAPI SEO keyword metrics including search volume, CPC, competition, difficulty, and search intent as normalized JSON.
   *
   * Price: $0.0156 per request plus $0.00016 per keyword (maximum $0.1276).
   *
   * @example
   * const res = await client.seo.keywordOverview({ keywords: ["project management software"], language: "en", location: 2840 });
   */
  keywordOverview(
    input: SeoKeywordOverviewInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SeoKeywordOverviewData>> {
    return this._core.run(
      "seo.keyword_overview",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SeoKeywordOverviewData>>;
  }

  /**
   * SEO Keyword Suggestions
   *
   * Find AnyAPI SEO keyword suggestions from a seed term with volume, CPC, competition, difficulty, and intent as normalized JSON.
   *
   * Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).
   *
   * @example
   * const res = await client.seo.keywordSuggestions({ keyword: "project management software", language: "en", limit: 5, location: 2840 });
   */
  keywordSuggestions(
    input: SeoKeywordSuggestionsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SeoKeywordSuggestionsData>> {
    return this._core.run(
      "seo.keyword_suggestions",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SeoKeywordSuggestionsData>>;
  }

  /**
   * SEO Local Pack
   *
   * Search AnyAPI SEO local pack results with rankings, ratings, addresses, and contact basics as normalized JSON.
   *
   * Price: $0.0026 per request plus $0 per result (maximum $0.0026).
   *
   * @example
   * const res = await client.seo.localPack({ keyword: "coffee shop", language: "en", limit: 5, location: "New York,New York,United States" });
   */
  localPack(
    input: SeoLocalPackInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SeoLocalPackData>> {
    return this._core.run(
      "seo.local_pack",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SeoLocalPackData>>;
  }

  /**
   * SEO Ranked Keywords
   *
   * Get AnyAPI SEO ranked keywords for a domain with rankings, traffic estimates, volume, CPC, difficulty, and intent as normalized JSON.
   *
   * Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).
   *
   * @example
   * const res = await client.seo.rankedKeywords({ target: "github.com", language: "en", limit: 10, location: 2840 });
   */
  rankedKeywords(
    input: SeoRankedKeywordsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SeoRankedKeywordsData>> {
    return this._core.run(
      "seo.ranked_keywords",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SeoRankedKeywordsData>>;
  }

  /**
   * SEO Related Keywords
   *
   * Find AnyAPI SEO related keywords from a seed term with volume, CPC, competition, difficulty, and intent as normalized JSON.
   *
   * Price: $0.0156 per request plus $0.00016 per result (maximum $0.1756).
   *
   * @example
   * const res = await client.seo.relatedKeywords({ keyword: "project management software", language: "en", limit: 5, location: 2840 });
   */
  relatedKeywords(
    input: SeoRelatedKeywordsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SeoRelatedKeywordsData>> {
    return this._core.run(
      "seo.related_keywords",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SeoRelatedKeywordsData>>;
  }

  /**
   * SEO Search Intent
   *
   * Classify AnyAPI SEO keyword search intent as normalized JSON.
   *
   * Price: $0.0156 per request plus $0.00016 per keyword (maximum $0.1756).
   *
   * @example
   * const res = await client.seo.searchIntent({ keywords: ["seo tools"], language: "en" });
   */
  searchIntent(
    input: SeoSearchIntentInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SeoSearchIntentData>> {
    return this._core.run(
      "seo.search_intent",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SeoSearchIntentData>>;
  }

  /**
   * SEO Search Volume
   *
   * Get AnyAPI SEO keyword search volume, CPC, competition, bid estimates, and monthly history as normalized JSON.
   *
   * Price: $0.117 per request plus $0 per result (maximum $0.117).
   *
   * @example
   * const res = await client.seo.searchVolume({ keywords: ["seo tools"], language: "en", location: 2840 });
   */
  searchVolume(
    input: SeoSearchVolumeInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SeoSearchVolumeData>> {
    return this._core.run(
      "seo.search_volume",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SeoSearchVolumeData>>;
  }
}
