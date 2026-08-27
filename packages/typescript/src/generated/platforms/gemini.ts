// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Gemini Search (gemini.search).
 */
export interface GeminiSearchInput {
  /**
   * Question or research prompt for Gemini to answer using web search.
   */
  prompt: string;
}

export interface GeminiSearchCitation {
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
 * The `data` payload of Gemini Search (gemini.search).
 */
export interface GeminiSearchData {
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
  citations: GeminiSearchCitation[];
  /**
   * The prompt answered by Gemini.
   */
  prompt: string;
}

/**
 * Typed methods for the gemini platform. Attached to the AnyAPI client as
 * `client.gemini`.
 */
export class GeminiNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Gemini Search
   *
   * Ask Gemini a web-grounded question and receive an answer with source citations.
   *
   * Price: $0.0036 per request.
   *
   * @example
   * const res = await client.gemini.search({ prompt: "What is AnyAPI at getanyapi.com, and what does it offer?" });
   */
  search(
    input: GeminiSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<GeminiSearchData>> {
    return this._core.run("gemini.search", input, options);
  }
}
