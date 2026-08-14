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
   * Opaque pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Maximum number of title-enriched posts to return, from 1 to 5 (default 5).
   * Range: minimum 1, maximum 5.
   */
  limit?: number;
  /**
   * Keyword phrase to search across Naver blogs.
   */
  query: string;
  /**
   * Order posts by Naver relevance or newest publication date (default relevance).
   * One of: relevance, recent.
   */
  sort?: "relevance" | "recent";
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
