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
   * Handle of the post author. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorHandle?: string;
  /**
   * Display name of the post author. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorName?: string;
  /**
   * Number of comments on the post.
   */
  commentCount?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Post description or article HTML/summary. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Cover image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Whether the post is behind a paywall.
   */
  isPaid?: boolean;
  /**
   * Substack post identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  postId?: string;
  /**
   * Post type (e.g. newsletter, podcast, thread). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  postType?: string;
  /**
   * Number of reactions on the post.
   */
  reactionCount?: number;
  /**
   * Post subtitle or deck. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  subtitle?: string;
  /**
   * Post title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical post URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Approximate word count of the article.
   */
  wordcount?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Substack Posts (substack.posts).
 */
export interface SubstackPostsData {
  /**
   * Post records: title, subtitle, URL, publish date, paywall status, word count, engagement (reactions, comments, restacks), author profile, publication info, and full article HTML when requested. Populated whenever the provider has data for the entity.
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
   * Pull posts from any Substack publication by its URL - or pass a single post URL (…/p/slug) to fetch just that one article. Returns title, subtitle, publish date, paywall status, word count, engagement (reactions, comments, restacks), author profile, and full article HTML.

**Price:** billed per result - \$5.00 per 1,000 requests base + \$1.56 per 1,000 results, capped at \$161.00 per 1,000 requests.
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
