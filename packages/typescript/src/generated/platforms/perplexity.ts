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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Question or research prompt for Perplexity to answer using web search.
   */
  prompt: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface PerplexitySearchCitation {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Excerpt of the cited source the engine used.
   */
  snippet?: string;
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
   * Price: $0.002 per request.
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
