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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
