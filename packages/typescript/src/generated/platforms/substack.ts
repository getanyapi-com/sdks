// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Substack Posts (substack.posts).
 */
export interface SubstackPostsInput {
  /**
   * Restrict to a single post type, or 'all' (e.g. newsletter).
   * One of: all, newsletter, podcast, thread.
   * Default: all.
   */
  contentType?: "all" | "newsletter" | "podcast" | "thread";
  /**
   * Include the full article body as HTML. Set false for metadata only (e.g. false).
   * Default: true.
   */
  includeContent?: boolean;
  /**
   * Maximum number of recent posts to return when given a publication URL (1-100, default 25); ignored for a single post URL, which always returns that one post. You are billed per post returned, so a lower limit costs less.
   * Range: minimum 1, maximum 100.
   */
  limit?: number;
  /**
   * Return only free (non-paywalled) posts (e.g. true).
   * Default: false.
   */
  onlyFree?: boolean;
  /**
   * Either a Substack publication URL / custom domain to fetch its recent posts (e.g. https://www.astralcodexten.com), OR a single post URL to fetch just that one article with full content (e.g. https://www.astralcodexten.com/p/your-book-review).
   */
  url: string;
}

export interface SubstackPostsItem {
  /**
   * Present whenever the upstream returns this record.
   */
  authorHandle?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  authorName?: string;
  commentCount?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Cover image URL.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  isPaid?: boolean;
  /**
   * Present whenever the upstream returns this record.
   */
  postId?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  postType?: string;
  /**
   * ISO 8601 publish date.
   * Present whenever the upstream returns this record.
   */
  publishedAt?: string;
  reactionCount?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  subtitle?: string;
  title: string;
  url: string;
  wordcount?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Substack Posts (substack.posts).
 */
export interface SubstackPostsData {
  /**
   * Post records: title, subtitle, URL, publish date, paywall status, word count, engagement (reactions, comments, restacks), author profile, publication info, and full article HTML when requested.
   */
  items: SubstackPostsItem[];
}

/**
 * Typed methods for the substack platform. Attached to the AnyAPI client as
 * `client.substack`.
 */
export class SubstackNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Substack Posts
   *
   * Pull posts from any Substack publication by its URL - or pass a single post URL (…/p/slug) to fetch just that one article. Returns title, subtitle, publish date, paywall status, word count, engagement (reactions, comments, restacks), author profile, and full article HTML. Priced per post returned.
   *
   * Price: $0.005 per request plus $0.00156 per result.
   *
   * @example
   * const res = await client.substack.posts({ url: "https://www.astralcodexten.com", limit: 3 });
   */
  posts(
    input: SubstackPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<SubstackPostsData>> {
    return this._core.run("substack.posts", input, options);
  }
}
