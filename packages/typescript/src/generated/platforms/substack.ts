// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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
   * Only return posts published on or before this date, format YYYY-MM-DD (e.g. 2024-12-31). Applied within the most recent 'limit' posts scanned.
   */
  endDate?: string;
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
   * Only return posts published on or after this date, format YYYY-MM-DD (e.g. 2024-01-01). Applied within the most recent 'limit' posts scanned, so raise 'limit' to reach older date ranges.
   */
  startDate?: string;
  /**
   * Either a Substack publication URL / custom domain to fetch its recent posts (e.g. https://www.astralcodexten.com), OR a single post URL to fetch just that one article with full content (e.g. https://www.astralcodexten.com/p/your-book-review).
   */
  url: string;
}

export type SubstackPostsData = unknown;

/**
 * Typed methods for the substack platform. Attached to the AnyAPI client as
 * `client.substack`.
 */
export class SubstackNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Substack Posts
   *
   * Pull posts from any Substack publication by its URL, or pass a single post URL (…/p/slug) to fetch just that one article. Returns title, subtitle, publish date, paywall status, word count, engagement (reactions, comments, restacks), author profile, and full article HTML.
   *
   * Price: $0.005 per request plus $0.00156 per result (maximum $0.161).
   *
   * @example
   * const res = await client.substack.posts({ url: "https://www.astralcodexten.com", limit: 3 });
   */
  posts(
    input: SubstackPostsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SubstackPostsData>> {
    return this._core.run(
      "substack.posts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SubstackPostsData>>;
  }
}
