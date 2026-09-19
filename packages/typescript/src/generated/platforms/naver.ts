// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Naver Blog Search (naver.blog_search).
 */
export interface NaverBlogSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Opaque pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of title-enriched posts to return, from 1 to 5 (default 5).
   * Range: minimum 1, maximum 5.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Keyword phrase to search across Naver blogs.
   */
  query: string;
  /**
   * Order posts by Naver relevance or newest publication date (default relevance).
   * One of: relevance, recent.
   */
  sort?: "relevance" | "recent";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface NaverBlogSearchItem {
  /**
   * Blogger display name.
   */
  bloggerName: string;
  /**
   * Public root URL for the blog that published the post.
   * Format: uri.
   */
  bloggerUrl: string;
  /**
   * Publication date as a UTC epoch timestamp in seconds.
   */
  createdUtc: number;
  /**
   * Search-result excerpt from the post.
   */
  description: string;
  /**
   * Two-letter language code Naver detected for the post text.
   */
  language?: string;
  /**
   * One-based rank within this result page.
   * Range: minimum 1.
   */
  rank: number;
  /**
   * Blog post title.
   */
  title: string;
  /**
   * Public blog post URL.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Naver Blog Search (naver.blog_search).
 */
export interface NaverBlogSearchData {
  /**
   * Blog posts in Naver's requested search order. Populated whenever the provider has data for the entity.
   */
  items: NaverBlogSearchItem[];
  /**
   * Opaque cursor for the next page, or an empty string when no next page is available.
   */
  nextCursor: string | null;
  /**
   * Naver's reported number of matching blog posts.
   * Range: minimum 0.
   */
  total: number;
}

/**
 * Typed methods for the naver platform. Attached to the AnyAPI client as
 * `client.naver`.
 */
export class NaverNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Naver Blog Search
   *
   * Search up to five enriched Naver blog results by keyword with stable cursor pagination: result rank, title, excerpt, post and blogger URLs, blogger name, publish time, and Naver's total match count.
   *
   * Price: $0.036 per request.
   *
   * @example
   * const res = await client.naver.blogSearch({ query: "제주도 맛집", limit: 5, sort: "relevance" });
   */
  blogSearch(
    input: NaverBlogSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<NaverBlogSearchData>> {
    return this._core.run("naver.blog_search", input, options);
  }

  /**
   * Iterate every result of Naver Blog Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterBlogSearch(
    input: NaverBlogSearchInput,
    options?: RequestOptions,
  ): Paginator<NaverBlogSearchItem, RunResult<NaverBlogSearchData>> {
    return paginate<NaverBlogSearchItem, RunResult<NaverBlogSearchData>>(
      this._core,
      "naver.blog_search",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }
}
