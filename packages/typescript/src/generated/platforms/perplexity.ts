// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

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
   * The answer in Markdown when the engine returns a Markdown rendering, otherwise the same text as answer. Populated whenever the provider has data for the entity.
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
   * Perplexity Search
   *
   * Ask Perplexity a web-grounded question and receive an answer with source citations.
   *
   * Price: $0.0018 per request.
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
