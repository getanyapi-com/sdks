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
   * Only return posts published on or before this date, format YYYY-MM-DD (e.g. 2024-12-31). Applied within the most recent 'limit' posts scanned.
   */
  endDate?: string;
  /**
   * Include public comment threads and their direct replies on each post (e.g. true).
   * Default: false.
   */
  includeComments?: boolean;
  /**
   * Include the full article body as text, HTML and Markdown. Set false for metadata only, which is faster (e.g. false).
   * Default: true.
   */
  includeContent?: boolean;
  /**
   * Maximum number of recent posts to return when given a publication URL (1-100, default 25); ignored for a single post URL, which always returns that one post. You are billed per post returned, so a lower limit costs less.
   * Range: minimum 1, maximum 100.
   */
  limit?: number;
  /**
   * Maximum comments collected per post when 'includeComments' is true (0-500, default 20). Costs nothing extra (e.g. 50).
   * Range: minimum 0, maximum 500.
   */
  maxComments?: number;
  /**
   * Only return posts with at least this many comments (e.g. 10).
   * Range: minimum 0.
   */
  minComments?: number;
  /**
   * Only return posts with at least this many reactions (e.g. 100).
   * Range: minimum 0.
   */
  minReactions?: number;
  /**
   * Only return posts with at least this many words, which filters out short notes and announcements (e.g. 1000).
   * Range: minimum 0.
   */
  minWordCount?: number;
  /**
   * Return only free (non-paywalled) posts (e.g. true).
   * Default: false.
   */
  onlyFree?: boolean;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Only return posts published on or after this date, format YYYY-MM-DD (e.g. 2024-01-01). Applied within the most recent 'limit' posts scanned, so raise 'limit' to reach older date ranges.
   */
  startDate?: string;
  /**
   * Either a Substack publication URL / custom domain to fetch its recent posts (e.g. https://www.astralcodexten.com), OR a single post URL to fetch just that one article with full content (e.g. https://www.astralcodexten.com/p/your-book-review).
   */
  url: string;
}

export interface SubstackPostsItem {
  /**
   * Author bio as shown on their Substack profile.
   */
  authorBio?: string;
  /**
   * Substack handle of the post author. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorHandle?: string;
  /**
   * Profile photo URL of the post author.
   * Format: uri.
   */
  authorImage?: string;
  /**
   * Display name of the post author. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorName?: string;
  /**
   * Substack profile URL of the post author.
   * Format: uri.
   */
  authorUrl?: string;
  /**
   * Number of top-level comments on the post.
   */
  commentCount?: number;
  /**
   * Top-level comment threads on the post, each with its direct replies. Empty unless 'includeComments' is true. Replies nested more than one level deep are not returned.
   */
  comments?: SubstackPostsComment[];
  /**
   * How much of the article body this record carries: 'full' for the whole article, 'preview_only' for the public excerpt of a paywalled post, 'metadata_only' when no body was requested or available, or 'failed' when extraction failed. Read this before trusting 'text', 'html', or 'markdown'. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  contentStatus?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Short post description, usually the subtitle or an excerpt.
   */
  description?: string;
  /**
   * Whether the post carries a narrated audio version.
   */
  hasVoiceover?: boolean;
  /**
   * Article body as HTML. Present when 'includeContent' is true and 'contentStatus' is 'full' or 'preview_only'.
   */
  html?: string;
  /**
   * Cover image URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Whether the post is behind a paywall.
   */
  isPaid?: boolean;
  /**
   * Two-letter language code of the post.
   */
  language?: string;
  /**
   * Article body as Markdown. Present when 'includeContent' is true and 'contentStatus' is 'full' or 'preview_only'.
   */
  markdown?: string;
  /**
   * Audio URL for a podcast post or a narrated voiceover, when the post has one.
   * Format: uri.
   */
  podcastUrl?: string;
  /**
   * Substack post identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  postId?: string;
  /**
   * Post type (newsletter, podcast, or thread). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  postType?: string;
  /**
   * The publication the post belongs to.
   */
  publication?: {
    /**
     * Custom domain the publication is served on, when it has one.
     */
    customDomain?: string;
    /**
     * Publication tagline or hero text.
     */
    description?: string;
    /**
     * Substack publication identifier.
     */
    id?: string;
    /**
     * Publication logo URL.
     * Format: uri.
     */
    image?: string;
    /**
     * Two-letter language code of the publication.
     */
    language?: string;
    /**
     * Publication name.
     */
    name?: string;
    /**
     * Whether the publication sells paid subscriptions.
     */
    paymentsEnabled?: boolean;
    /**
     * Publication subdomain on substack.com.
     */
    subdomain?: string;
    /**
     * Subscriber count, when the publication publishes it.
     */
    subscriberCount?: number;
    /**
     * Publication home URL.
     * Format: uri.
     */
    url?: string;
  };
  /**
   * Number of reactions (likes) on the post.
   */
  reactionCount?: number;
  /**
   * Number of replies to comments on the post.
   */
  replyCount?: number;
  /**
   * Number of times the post was restacked.
   */
  restackCount?: number;
  /**
   * Post slug, the last path segment of the post URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  slug?: string;
  /**
   * Post subtitle or deck.
   */
  subtitle?: string;
  /**
   * Article body as plain text. Present when 'includeContent' is true and 'contentStatus' is 'full' or 'preview_only'.
   */
  text?: string;
  /**
   * Post title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  /**
   * Canonical post URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * Approximate word count of the article.
   */
  wordcount?: number;
  [extra: string]: unknown;
}

export interface SubstackPostsComment {
  /**
   * Substack handle of the comment author.
   */
  authorHandle?: string;
  /**
   * Profile photo URL of the comment author.
   * Format: uri.
   */
  authorImage?: string;
  /**
   * Display name of the comment author.
   */
  authorName?: string;
  /**
   * Substack profile URL of the comment author.
   * Format: uri.
   */
  authorUrl?: string;
  /**
   * Substack comment identifier.
   */
  commentId: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  editedUtc?: number;
  /**
   * Whether the comment was written by the post author.
   */
  isAuthor?: boolean;
  /**
   * Whether the comment is pinned by the publication.
   */
  isPinned?: boolean;
  /**
   * Number of reactions on the comment.
   */
  reactionCount?: number;
  /**
   * Direct replies to this comment.
   */
  replies?: SubstackPostsReplie[];
  /**
   * Number of times the comment was restacked.
   */
  restackCount?: number;
  /**
   * Comment body text.
   */
  text?: string;
  [extra: string]: unknown;
}

export interface SubstackPostsReplie {
  /**
   * Substack handle of the reply author.
   */
  authorHandle?: string;
  /**
   * Profile photo URL of the reply author.
   * Format: uri.
   */
  authorImage?: string;
  /**
   * Display name of the reply author.
   */
  authorName?: string;
  /**
   * Substack profile URL of the reply author.
   * Format: uri.
   */
  authorUrl?: string;
  /**
   * Substack comment identifier.
   */
  commentId: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  editedUtc?: number;
  /**
   * Whether the reply was written by the post author.
   */
  isAuthor?: boolean;
  /**
   * Whether the reply is pinned by the publication.
   */
  isPinned?: boolean;
  /**
   * Number of reactions on the reply.
   */
  reactionCount?: number;
  /**
   * Number of times the reply was restacked.
   */
  restackCount?: number;
  /**
   * Reply body text.
   */
  text?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Substack Posts (substack.posts).
 */
export interface SubstackPostsData {
  /**
   * Post records: title, subtitle, URL, publish date, paywall status, word count, engagement (reactions, comments, restacks), author profile, publication details, the article body as text, HTML and Markdown, and comment threads when requested. Populated whenever the provider has data for the entity.
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
   * Pull posts from any Substack publication by its URL, or pass a single post URL (…/p/slug) to fetch just that one article. Returns title, subtitle, publish date, paywall status, word count, engagement (reactions, comments, restacks), author profile, publication details, the full article body as text, HTML and Markdown, and optional comment threads.
   *
   * Price: $0.00039 per request plus $0.00044 per result (maximum $0.0444).
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
