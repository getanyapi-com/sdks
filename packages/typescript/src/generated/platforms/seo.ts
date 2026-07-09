// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
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
   * Domain to analyze, without a protocol or leading www.
   */
  target: string;
}

export interface SeoCompetitorsDomainCompetitor {
  /**
   * Average ranking position across shared keywords. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  avgPosition?: number;
  /**
   * Competing domain. Populated whenever the provider has data for the entity.
   */
  domain: string;
  /**
   * Number of keywords shared with the target domain. Populated whenever the provider has data for the entity.
   */
  intersections: number;
  /**
   * Estimated monthly organic search traffic for the competitor domain.
   */
  organicEtv?: number;
  /**
   * Number of organic search results where the competitor domain appears.
   */
  organicKeywords?: number;
  /**
   * Sum of ranking positions across shared keywords. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sumPosition?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEO Competitor Domains (seo.competitors_domain).
 */
export interface SeoCompetitorsDomainData {
  /**
   * SEO competitor domain records. Populated whenever the provider has data for the entity.
   */
  competitors: SeoCompetitorsDomainCompetitor[];
}

/**
 * Input for SEO Domain Intersection (seo.domain_intersection).
 */
export interface SeoDomainIntersectionInput {
  /**
   * Language code for SEO overlap metrics.
   * Default: en.
   */
  language?: string;
  /**
   * Maximum number of overlapping keywords to return. You are billed per returned result, so a lower limit costs less.
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
   * First domain to compare, without a protocol or leading www.
   */
  target1: string;
  /**
   * Second domain to compare, without a protocol or leading www.
   */
  target2: string;
}

export interface SeoDomainIntersectionKeyword {
  /**
   * Average paid-search cost per click in USD.
   */
  cpc?: number;
  /**
   * Absolute organic ranking position for the first domain. Populated whenever the provider has data for the entity.
   */
  firstRank: number;
  /**
   * Ranking URL for the first domain.
   */
  firstUrl?: string;
  /**
   * Keyword phrase both domains rank for. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Estimated organic ranking difficulty on a 0-100 scale.
   */
  keywordDifficulty?: number;
  /**
   * Average monthly search volume for the keyword.
   */
  searchVolume?: number;
  /**
   * Absolute organic ranking position for the second domain. Populated whenever the provider has data for the entity.
   */
  secondRank: number;
  /**
   * Ranking URL for the second domain.
   */
  secondUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEO Domain Intersection (seo.domain_intersection).
 */
export interface SeoDomainIntersectionData {
  /**
   * SEO keyword records both domains rank for. Populated whenever the provider has data for the entity.
   */
  keywords: SeoDomainIntersectionKeyword[];
}

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

/**
 * The `data` payload of SEO Domain Rank Overview (seo.domain_rank_overview).
 */
export interface SeoDomainRankOverviewData {
  /**
   * Analyzed domain. Populated whenever the provider has data for the entity.
   */
  domain: string;
  /**
   * Language code the metrics are scoped to.
   */
  language?: string;
  /**
   * Location code the metrics are scoped to.
   */
  location?: number;
  /**
   * Number of organic search results where the domain appears. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  organicKeywords?: number;
  /**
   * Number of organic search results where the domain ranks first. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  organicPos1?: number;
  /**
   * Number of organic search results where the domain ranks second or third. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  organicPos2To3?: number;
  /**
   * Number of organic search results where the domain ranks fourth through tenth. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  organicPos4To10?: number;
  /**
   * Estimated monthly organic search traffic. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  organicTraffic?: number;
  /**
   * Estimated USD value of the organic search traffic. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  organicTrafficCostUsd?: number;
  /**
   * Number of paid search results where the domain appears.
   */
  paidKeywords?: number;
  /**
   * Number of paid search results where the domain ranks first.
   */
  paidPos1?: number;
  /**
   * Number of paid search results where the domain ranks second or third.
   */
  paidPos2To3?: number;
  /**
   * Number of paid search results where the domain ranks fourth through tenth.
   */
  paidPos4To10?: number;
  /**
   * Estimated monthly paid search traffic.
   */
  paidTraffic?: number;
  /**
   * Estimated USD value of the paid search traffic.
   */
  paidTrafficCostUsd?: number;
  [extra: string]: unknown;
}

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

export interface SeoKeywordDifficultyDifficultie {
  /**
   * Keyword phrase. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Estimated organic ranking difficulty on a 0-100 scale. Omitted when the upstream has no difficulty for the keyword. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  keywordDifficulty?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEO Keyword Difficulty (seo.keyword_difficulty).
 */
export interface SeoKeywordDifficultyData {
  /**
   * SEO keyword difficulty records. Populated whenever the provider has data for the entity.
   */
  difficulties: SeoKeywordDifficultyDifficultie[];
}

/**
 * Input for SEO Keyword Ideas (seo.keyword_ideas).
 */
export interface SeoKeywordIdeasInput {
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
}

export interface SeoKeywordIdeasIdea {
  /**
   * Paid-search competition level for the keyword idea. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  competition?: string;
  /**
   * Average paid-search cost per click in USD. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cpc?: number;
  /**
   * Keyword idea phrase. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Estimated organic ranking difficulty on a 0-100 scale. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  keywordDifficulty?: number;
  /**
   * Primary SEO search intent for the keyword idea. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  searchIntent?: string;
  /**
   * Average monthly search volume for the keyword idea. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  searchVolume?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEO Keyword Ideas (seo.keyword_ideas).
 */
export interface SeoKeywordIdeasData {
  /**
   * SEO keyword idea records. Populated whenever the provider has data for the entity.
   */
  ideas: SeoKeywordIdeasIdea[];
}

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

export interface SeoKeywordOverviewKeyword {
  /**
   * Upper bound of the estimated paid-search top-of-page bid in USD.
   */
  bidHigh?: number;
  /**
   * Lower bound of the estimated paid-search top-of-page bid in USD.
   */
  bidLow?: number;
  /**
   * Paid-search competition level for the keyword. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  competition?: string;
  /**
   * Average paid-search cost per click in USD. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cpc?: number;
  /**
   * Keyword phrase. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Estimated organic ranking difficulty on a 0-100 scale. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  keywordDifficulty?: number;
  /**
   * Monthly search-volume history for the keyword.
   */
  monthlySearches?: SeoKeywordOverviewMonthlySearche[];
  /**
   * Primary SEO search intent for the keyword. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  searchIntent?: string;
  /**
   * Average monthly search volume for the keyword. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  searchVolume?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  [extra: string]: unknown;
}

export interface SeoKeywordOverviewMonthlySearche {
  /**
   * Calendar month number for the monthly search-volume record.
   */
  month?: number;
  /**
   * Search volume for the month.
   */
  searchVolume?: number;
  /**
   * Calendar year for the monthly search-volume record.
   */
  year?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEO Keyword Overview (seo.keyword_overview).
 */
export interface SeoKeywordOverviewData {
  /**
   * SEO keyword metric records. Populated whenever the provider has data for the entity.
   */
  keywords: SeoKeywordOverviewKeyword[];
}

/**
 * Input for SEO Keyword Suggestions (seo.keyword_suggestions).
 */
export interface SeoKeywordSuggestionsInput {
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
}

export interface SeoKeywordSuggestionsSuggestion {
  /**
   * Paid-search competition level for the keyword suggestion. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  competition?: string;
  /**
   * Average paid-search cost per click in USD. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cpc?: number;
  /**
   * Keyword suggestion phrase. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Estimated organic ranking difficulty on a 0-100 scale. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  keywordDifficulty?: number;
  /**
   * Primary SEO search intent for the keyword suggestion. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  searchIntent?: string;
  /**
   * Average monthly search volume for the keyword suggestion. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  searchVolume?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEO Keyword Suggestions (seo.keyword_suggestions).
 */
export interface SeoKeywordSuggestionsData {
  /**
   * SEO keyword suggestion records. Populated whenever the provider has data for the entity.
   */
  suggestions: SeoKeywordSuggestionsSuggestion[];
}

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
   * Local pack search location name, formatted like City,Region,Country; for example, New York,New York,United States.
   */
  location: string;
}

export interface SeoLocalPackPlace {
  /**
   * Full formatted street address. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  address?: string;
  /**
   * Primary place category.
   */
  category?: string;
  /**
   * True when the place listing is claimed.
   */
  claimed?: boolean;
  /**
   * Latitude of the place in decimal degrees.
   */
  latitude?: number;
  /**
   * Longitude of the place in decimal degrees.
   */
  longitude?: number;
  /**
   * Place name. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Business phone number, when listed.
   */
  phone?: string;
  /**
   * Place identifier.
   */
  placeId?: string;
  /**
   * Absolute ranking position in the local pack results. Populated whenever the provider has data for the entity.
   */
  rankAbsolute: number;
  /**
   * Average star rating out of 5. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number;
  /**
   * Total number of reviews.
   */
  reviewsCount?: number;
  /**
   * Canonical place URL.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEO Local Pack (seo.local_pack).
 */
export interface SeoLocalPackData {
  /**
   * SEO local pack place records. Populated whenever the provider has data for the entity.
   */
  places: SeoLocalPackPlace[];
}

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
   * Domain to analyze, without a protocol or leading www.
   */
  target: string;
}

export interface SeoRankedKeywordsRankedKeyword {
  /**
   * Average paid-search cost per click in USD.
   */
  cpc?: number;
  /**
   * Estimated organic search traffic for the ranking URL.
   */
  etv?: number;
  /**
   * Keyword phrase the domain ranks for. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Estimated organic ranking difficulty on a 0-100 scale.
   */
  keywordDifficulty?: number;
  /**
   * Absolute organic ranking position for the keyword. Populated whenever the provider has data for the entity.
   */
  rankAbsolute: number;
  /**
   * Grouped organic ranking position for the keyword. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rankGroup?: number;
  /**
   * Primary SEO search intent for the keyword.
   */
  searchIntent?: string;
  /**
   * Average monthly search volume for the keyword. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  searchVolume?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  /**
   * Ranking URL for the domain.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEO Ranked Keywords (seo.ranked_keywords).
 */
export interface SeoRankedKeywordsData {
  /**
   * SEO ranked keyword records for the domain. Populated whenever the provider has data for the entity.
   */
  rankedKeywords: SeoRankedKeywordsRankedKeyword[];
}

/**
 * Input for SEO Related Keywords (seo.related_keywords).
 */
export interface SeoRelatedKeywordsInput {
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
}

export interface SeoRelatedKeywordsRelatedKeyword {
  /**
   * Paid-search competition level for the related keyword. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  competition?: string;
  /**
   * Average paid-search cost per click in USD. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cpc?: number;
  /**
   * Related-keyword graph depth from the seed keyword. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  depth?: number;
  /**
   * Related keyword phrase. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Estimated organic ranking difficulty on a 0-100 scale. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  keywordDifficulty?: number;
  /**
   * Primary SEO search intent for the related keyword. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  searchIntent?: string;
  /**
   * Average monthly search volume for the related keyword. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  searchVolume?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEO Related Keywords (seo.related_keywords).
 */
export interface SeoRelatedKeywordsData {
  /**
   * SEO related keyword records. Populated whenever the provider has data for the entity.
   */
  relatedKeywords: SeoRelatedKeywordsRelatedKeyword[];
}

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

export interface SeoSearchIntentIntent {
  /**
   * Primary SEO search intent for the keyword. Populated whenever the provider has data for the entity.
   */
  intent: string;
  /**
   * Keyword phrase. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEO Search Intent (seo.search_intent).
 */
export interface SeoSearchIntentData {
  /**
   * SEO keyword search intent records. Populated whenever the provider has data for the entity.
   */
  intents: SeoSearchIntentIntent[];
}

/**
 * Input for SEO Search Volume (seo.search_volume).
 */
export interface SeoSearchVolumeInput {
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
}

export interface SeoSearchVolumeKeyword {
  /**
   * Upper bound of the estimated paid-search top-of-page bid in USD.
   */
  bidHigh?: number;
  /**
   * Lower bound of the estimated paid-search top-of-page bid in USD.
   */
  bidLow?: number;
  /**
   * Paid-search competition level for the keyword. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  competition?: string;
  /**
   * Paid-search competition index for the keyword.
   */
  competitionIndex?: number;
  /**
   * Average paid-search cost per click in USD. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cpc?: number;
  /**
   * Keyword phrase. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Monthly search-volume history for the keyword.
   */
  monthlySearches?: SeoSearchVolumeMonthlySearche[];
  /**
   * Average monthly search volume for the keyword. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  searchVolume?: number;
  [extra: string]: unknown;
}

export interface SeoSearchVolumeMonthlySearche {
  /**
   * Calendar month number for the monthly search-volume record.
   */
  month?: number;
  /**
   * Search volume for the month.
   */
  searchVolume?: number;
  /**
   * Calendar year for the monthly search-volume record.
   */
  year?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of SEO Search Volume (seo.search_volume).
 */
export interface SeoSearchVolumeData {
  /**
   * SEO keyword search-volume records. Populated whenever the provider has data for the entity.
   */
  keywords: SeoSearchVolumeKeyword[];
}

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

**Price:** billed per result - \$15.60 per 1,000 requests base + \$0.16 per 1,000 results, capped at \$175.60 per 1,000 requests.
   *
   * Price: $0.0156 per request plus $0.00016 per result.
   *
   * @example
   * const res = await client.seo.competitorsDomain({ target: "github.com", language: "en", limit: 10, location: 2840 });
   */
  competitorsDomain(
    input: SeoCompetitorsDomainInput,
    options?: RequestOptions,
  ): Promise<RunResult<SeoCompetitorsDomainData>> {
    return this._core.run("seo.competitors_domain", input, options);
  }

  /**
   * SEO Domain Intersection
   *
   * Get AnyAPI SEO keyword overlap for two domains with each domain's rankings, URLs, volume, CPC, and difficulty as normalized JSON.

**Price:** billed per result - \$15.60 per 1,000 requests base + \$0.16 per 1,000 results, capped at \$175.60 per 1,000 requests.
   *
   * Price: $0.0156 per request plus $0.00016 per result.
   *
   * @example
   * const res = await client.seo.domainIntersection({ target1: "github.com", target2: "gitlab.com", language: "en", limit: 10, location: 2840 });
   */
  domainIntersection(
    input: SeoDomainIntersectionInput,
    options?: RequestOptions,
  ): Promise<RunResult<SeoDomainIntersectionData>> {
    return this._core.run("seo.domain_intersection", input, options);
  }

  /**
   * SEO Domain Rank Overview
   *
   * Get AnyAPI SEO domain ranking, organic traffic, and paid traffic metrics as normalized JSON.

**Price:** \$15.60 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.0156 per request.
   *
   * @example
   * const res = await client.seo.domainRankOverview({ target: "ahrefs.com", language: "en", location: 2840 });
   */
  domainRankOverview(
    input: SeoDomainRankOverviewInput,
    options?: RequestOptions,
  ): Promise<RunResult<SeoDomainRankOverviewData>> {
    return this._core.run("seo.domain_rank_overview", input, options);
  }

  /**
   * SEO Keyword Difficulty
   *
   * Get AnyAPI SEO keyword difficulty scores for one or more keywords as normalized JSON.

**Price:** billed per keyword - \$15.60 per 1,000 requests base + \$0.16 per 1,000 keywords, capped at \$175.60 per 1,000 requests.
   *
   * Price: $0.0156 per request plus $0.00016 per keyword.
   *
   * @example
   * const res = await client.seo.keywordDifficulty({ keywords: ["seo tools"], language: "en", location: 2840 });
   */
  keywordDifficulty(
    input: SeoKeywordDifficultyInput,
    options?: RequestOptions,
  ): Promise<RunResult<SeoKeywordDifficultyData>> {
    return this._core.run("seo.keyword_difficulty", input, options);
  }

  /**
   * SEO Keyword Ideas
   *
   * Find AnyAPI SEO keyword ideas from seed terms with volume, CPC, competition, difficulty, and intent as normalized JSON.

**Price:** billed per result - \$15.60 per 1,000 requests base + \$0.16 per 1,000 results, capped at \$175.60 per 1,000 requests.
   *
   * Price: $0.0156 per request plus $0.00016 per result.
   *
   * @example
   * const res = await client.seo.keywordIdeas({ keywords: ["project management software"], language: "en", limit: 5, location: 2840 });
   */
  keywordIdeas(
    input: SeoKeywordIdeasInput,
    options?: RequestOptions,
  ): Promise<RunResult<SeoKeywordIdeasData>> {
    return this._core.run("seo.keyword_ideas", input, options);
  }

  /**
   * SEO Keyword Overview
   *
   * Get AnyAPI SEO keyword metrics including search volume, CPC, competition, difficulty, and search intent as normalized JSON.

**Price:** billed per keyword - \$15.60 per 1,000 requests base + \$0.16 per 1,000 keywords, capped at \$127.60 per 1,000 requests.
   *
   * Price: $0.0156 per request plus $0.00016 per keyword.
   *
   * @example
   * const res = await client.seo.keywordOverview({ keywords: ["project management software"], language: "en", location: 2840 });
   */
  keywordOverview(
    input: SeoKeywordOverviewInput,
    options?: RequestOptions,
  ): Promise<RunResult<SeoKeywordOverviewData>> {
    return this._core.run("seo.keyword_overview", input, options);
  }

  /**
   * SEO Keyword Suggestions
   *
   * Find AnyAPI SEO keyword suggestions from a seed term with volume, CPC, competition, difficulty, and intent as normalized JSON.

**Price:** billed per result - \$15.60 per 1,000 requests base + \$0.16 per 1,000 results, capped at \$175.60 per 1,000 requests.
   *
   * Price: $0.0156 per request plus $0.00016 per result.
   *
   * @example
   * const res = await client.seo.keywordSuggestions({ keyword: "project management software", language: "en", limit: 5, location: 2840 });
   */
  keywordSuggestions(
    input: SeoKeywordSuggestionsInput,
    options?: RequestOptions,
  ): Promise<RunResult<SeoKeywordSuggestionsData>> {
    return this._core.run("seo.keyword_suggestions", input, options);
  }

  /**
   * SEO Local Pack
   *
   * Search AnyAPI SEO local pack results with rankings, ratings, addresses, and contact basics as normalized JSON.

**Price:** \$2.60 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.0026 per request.
   *
   * @example
   * const res = await client.seo.localPack({ keyword: "coffee shop", location: "New York,New York,United States", language: "en", limit: 5 });
   */
  localPack(
    input: SeoLocalPackInput,
    options?: RequestOptions,
  ): Promise<RunResult<SeoLocalPackData>> {
    return this._core.run("seo.local_pack", input, options);
  }

  /**
   * SEO Ranked Keywords
   *
   * Get AnyAPI SEO ranked keywords for a domain with rankings, traffic estimates, volume, CPC, difficulty, and intent as normalized JSON.

**Price:** billed per result - \$15.60 per 1,000 requests base + \$0.16 per 1,000 results, capped at \$175.60 per 1,000 requests.
   *
   * Price: $0.0156 per request plus $0.00016 per result.
   *
   * @example
   * const res = await client.seo.rankedKeywords({ target: "github.com", language: "en", limit: 10, location: 2840 });
   */
  rankedKeywords(
    input: SeoRankedKeywordsInput,
    options?: RequestOptions,
  ): Promise<RunResult<SeoRankedKeywordsData>> {
    return this._core.run("seo.ranked_keywords", input, options);
  }

  /**
   * SEO Related Keywords
   *
   * Find AnyAPI SEO related keywords from a seed term with volume, CPC, competition, difficulty, and intent as normalized JSON.

**Price:** billed per result - \$15.60 per 1,000 requests base + \$0.16 per 1,000 results, capped at \$175.60 per 1,000 requests.
   *
   * Price: $0.0156 per request plus $0.00016 per result.
   *
   * @example
   * const res = await client.seo.relatedKeywords({ keyword: "project management software", language: "en", limit: 5, location: 2840 });
   */
  relatedKeywords(
    input: SeoRelatedKeywordsInput,
    options?: RequestOptions,
  ): Promise<RunResult<SeoRelatedKeywordsData>> {
    return this._core.run("seo.related_keywords", input, options);
  }

  /**
   * SEO Search Intent
   *
   * Classify AnyAPI SEO keyword search intent as normalized JSON.

**Price:** billed per keyword - \$15.60 per 1,000 requests base + \$0.16 per 1,000 keywords, capped at \$175.60 per 1,000 requests.
   *
   * Price: $0.0156 per request plus $0.00016 per keyword.
   *
   * @example
   * const res = await client.seo.searchIntent({ keywords: ["seo tools"], language: "en" });
   */
  searchIntent(
    input: SeoSearchIntentInput,
    options?: RequestOptions,
  ): Promise<RunResult<SeoSearchIntentData>> {
    return this._core.run("seo.search_intent", input, options);
  }

  /**
   * SEO Search Volume
   *
   * Get AnyAPI SEO keyword search volume, CPC, competition, bid estimates, and monthly history as normalized JSON.

**Price:** \$117.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.117 per request.
   *
   * @example
   * const res = await client.seo.searchVolume({ keywords: ["seo tools"], language: "en", location: 2840 });
   */
  searchVolume(
    input: SeoSearchVolumeInput,
    options?: RequestOptions,
  ): Promise<RunResult<SeoSearchVolumeData>> {
    return this._core.run("seo.search_volume", input, options);
  }
}
