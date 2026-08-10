// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Perplexity Brand Visibility (perplexity.brand_visibility).
 */
export interface PerplexityBrandVisibilityInput {
  /**
   * Alternative brand names to include in mention analysis.
   */
  aliases?: string[];
  /**
   * Brand name to measure in the answer.
   */
  brand: string;
  /**
   * Competitor brand names to compare against the target brand.
   */
  competitors?: string[];
  /**
   * Country context for the answer and web search (default US).
   * Default: US.
   */
  country?: string;
  /**
   * Brand domain used to attribute citations when supplied.
   */
  domain?: string;
  /**
   * Question or topic Perplexity should answer while measuring brand visibility.
   */
  prompt: string;
}

export interface PerplexityBrandVisibilityCitation {
  /**
   * Source domain. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  domain?: string;
  /**
   * End character offset of the citation evidence. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  endIndex?: number;
  /**
   * Source last-updated UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  lastUpdatedUtc?: number;
  /**
   * Answer text matched to the citation evidence. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  matchedText?: string;
  /**
   * Source publication UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  pubDateUtc?: number;
  /**
   * Source published UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  publishedUtc?: number;
  /**
   * One-based citation reference index used in the answer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  refIndex?: number;
  /**
   * Source evidence snippet when supplied. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  snippet?: string;
  /**
   * Source evidence type. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sourceType?: string;
  /**
   * Start character offset of the citation evidence. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  startIndex?: number;
  /**
   * Source page title when supplied. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  title?: string;
  /**
   * Canonical source URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

export interface PerplexityBrandVisibilityCompetitor {
  /**
   * Whether the answer cites the competitor. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cited?: boolean;
  /**
   * URLs attributed to the competitor.
   */
  citedUrls?: string[];
  /**
   * Character position of the first competitor mention when present.
   */
  firstPosition?: number;
  /**
   * Number of competitor mentions in the answer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  mentionCount?: number;
  /**
   * Whether the answer mentions the competitor. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  mentioned?: boolean;
  /**
   * Competitor brand name.
   */
  name: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Perplexity Brand Visibility (perplexity.brand_visibility).
 */
export interface PerplexityBrandVisibilityData {
  /**
   * Full answer used for the visibility analysis. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  answer?: string;
  /**
   * Brand measured in the answer.
   */
  brand: string;
  /**
   * One-based citation rank for the brand, or null when it was not cited.
   */
  citationRank?: number | null;
  /**
   * Sources cited by the answer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  citations?: PerplexityBrandVisibilityCitation[];
  /**
   * Whether the answer cites the brand domain. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cited?: boolean;
  /**
   * URLs attributed to the brand domain.
   */
  citedUrls?: string[];
  /**
   * Visibility metrics for requested competitors. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  competitors?: PerplexityBrandVisibilityCompetitor[];
  /**
   * Country context used for the answer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  country?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Brand domain used for citation attribution. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  domain?: string;
  /**
   * Leading excerpt from the answer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  excerpt?: string;
  /**
   * Character position of the first brand mention. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  firstPosition?: number;
  /**
   * Upstream processing latency in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  latencyMs?: number;
  /**
   * Number of brand mentions in the answer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  mentionCount?: number;
  /**
   * Whether the answer mentions the brand. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  mentioned?: boolean;
  /**
   * Perplexity model that generated the answer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  model?: string;
  /**
   * Visibility score derived from the first mention position. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  positionScore?: number;
  /**
   * Prompt answered for the visibility analysis.
   */
  prompt: string;
  /**
   * Brand share of voice among the measured brands, as a percentage. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  shareOfVoicePct?: number;
  /**
   * Whether Perplexity used web search for the answer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  webSearchTriggered?: boolean;
}

/**
 * Input for Perplexity Search (perplexity.search).
 */
export interface PerplexitySearchInput {
  /**
   * Question or research prompt for Perplexity to answer using web search.
   */
  prompt: string;
}

export interface PerplexitySearchCitation {
  /**
   * Source page title when supplied by the search engine.
   */
  title: string;
  /**
   * Source page URL.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Perplexity Search (perplexity.search).
 */
export interface PerplexitySearchData {
  /**
   * The web-grounded answer as text. Populated whenever the provider has data for the entity.
   */
  answer: string;
  /**
   * The web-grounded answer with Markdown formatting. Populated whenever the provider has data for the entity.
   */
  answerMarkdown: string;
  /**
   * Sources cited by the answer. Populated whenever the provider has data for the entity.
   */
  citations: PerplexitySearchCitation[];
  /**
   * The prompt answered by Perplexity.
   */
  prompt: string;
}

/**
 * Typed methods for the perplexity platform. Attached to the AnyAPI client as
 * `client.perplexity`.
 */
export class PerplexityNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Perplexity Brand Visibility
   *
   * Analyze how Perplexity mentions and cites a brand relative to its competitors.
   *
   * Price: $0.0045 per request.
   *
   * @example
   * const res = await client.perplexity.brandVisibility({ brand: "OpenAI", prompt: "What is OpenAI and who are its main competitors?", competitors: ["Anthropic", "Google DeepMind", "Meta"], country: "US", domain: "openai.com" });
   */
  brandVisibility(
    input: PerplexityBrandVisibilityInput,
    options?: RequestOptions,
  ): Promise<RunResult<PerplexityBrandVisibilityData>> {
    return this._core.run("perplexity.brand_visibility", input, options);
  }

  /**
   * Perplexity Search
   *
   * Ask Perplexity a web-grounded question and receive an answer with source citations.
   *
   * Price: $0.0036 per request.
   *
   * @example
   * const res = await client.perplexity.search({ prompt: "What is AnyAPI at getanyapi.com, and what does it offer?" });
   */
  search(
    input: PerplexitySearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<PerplexitySearchData>> {
    return this._core.run("perplexity.search", input, options);
  }
}
