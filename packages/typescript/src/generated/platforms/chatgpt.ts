// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for ChatGPT Brand Visibility (chatgpt.brand_visibility).
 */
export interface ChatgptBrandVisibilityInput {
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
   * Question or topic ChatGPT should answer while measuring brand visibility.
   */
  prompt: string;
}

export interface ChatgptBrandVisibilityCitation {
  /**
   * Source attribution label when supplied. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  attribution?: string;
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
   * Answer text matched to the citation evidence.
   */
  matchedText?: string;
  /**
   * Source publication UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  pubDateUtc?: number;
  /**
   * Source published UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  publishedUtc?: number;
  /**
   * Source evidence snippet when supplied. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  snippet?: string;
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

export interface ChatgptBrandVisibilityCompetitor {
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
   * Character position of the first competitor mention. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
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
 * The `data` payload of ChatGPT Brand Visibility (chatgpt.brand_visibility).
 */
export interface ChatgptBrandVisibilityData {
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
   * One-based citation rank for the brand, or null when it was not cited. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  citationRank?: number | null;
  /**
   * Sources cited by the answer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  citations?: ChatgptBrandVisibilityCitation[];
  /**
   * Whether the answer cites the brand domain. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cited?: boolean;
  /**
   * URLs attributed to the brand domain. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  citedUrls?: string[];
  /**
   * Visibility metrics for requested competitors. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  competitors?: ChatgptBrandVisibilityCompetitor[];
  /**
   * Country context used for the answer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  country?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
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
   * ChatGPT model that generated the answer. Populated whenever the provider has data for the entity.
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
   * Whether ChatGPT used web search for the answer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  webSearchTriggered?: boolean;
}

/**
 * Input for ChatGPT Search (chatgpt.search).
 */
export interface ChatgptSearchInput {
  /**
   * Question or research prompt for ChatGPT to answer using web search.
   */
  prompt: string;
}

export interface ChatgptSearchCitation {
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
 * The `data` payload of ChatGPT Search (chatgpt.search).
 */
export interface ChatgptSearchData {
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
  citations: ChatgptSearchCitation[];
  /**
   * The prompt answered by ChatGPT.
   */
  prompt: string;
}

/**
 * Typed methods for the chatgpt platform. Attached to the AnyAPI client as
 * `client.chatgpt`.
 */
export class ChatgptNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * ChatGPT Brand Visibility
   *
   * Analyze how ChatGPT mentions and cites a brand relative to its competitors.
   *
   * Price: $0.0045 per request.
   *
   * @example
   * const res = await client.chatgpt.brandVisibility({ brand: "OpenAI", prompt: "What is OpenAI and who are its main competitors?", competitors: ["Anthropic", "Google DeepMind", "Meta"], country: "US", domain: "openai.com" });
   */
  brandVisibility(
    input: ChatgptBrandVisibilityInput,
    options?: RequestOptions,
  ): Promise<RunResult<ChatgptBrandVisibilityData>> {
    return this._core.run("chatgpt.brand_visibility", input, options);
  }

  /**
   * ChatGPT Search
   *
   * Ask ChatGPT a web-grounded question and receive an answer with source citations.
   *
   * Price: $0.0036 per request.
   *
   * @example
   * const res = await client.chatgpt.search({ prompt: "What is AnyAPI at getanyapi.com, and what does it offer?" });
   */
  search(
    input: ChatgptSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<ChatgptSearchData>> {
    return this._core.run("chatgpt.search", input, options);
  }
}
