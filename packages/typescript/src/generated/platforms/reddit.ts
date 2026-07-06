// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Reddit Post Comments (reddit.post_comments).
 */
export interface RedditPostCommentsInput {
  /**
   * Cursor from a previous response for more comments.
   */
  cursor?: string;
  /**
   * Full Reddit post URL.
   */
  url: string;
}

export interface RedditPostCommentsComment {
  /**
   * Commenter username, without the u/ prefix.
   * Populated whenever the provider returns data.
   */
  author: string;
  /**
   * Comment text, as Markdown.
   * Populated whenever the provider returns data.
   */
  body: string;
  /**
   * Comment creation time as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Reddit comment ID (base-36, without the t1_ prefix).
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Permalink to the comment on reddit.com.
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Reddit Post Comments (reddit.post_comments).
 */
export interface RedditPostCommentsData {
  /**
   * Populated whenever the provider returns data.
   */
  comments: RedditPostCommentsComment[];
}

/**
 * Input for Reddit Post Transcript (reddit.post_transcript).
 */
export interface RedditPostTranscriptInput {
  /**
   * Optional two-letter language code (defaults to en).
   */
  language?: string;
  /**
   * Reddit post URL or direct v.redd.it video URL to transcribe.
   */
  url: string;
}

/**
 * The `data` payload of Reddit Post Transcript (reddit.post_transcript).
 */
export interface RedditPostTranscriptData {
  /**
   * Populated whenever the provider returns data.
   */
  language: string;
  /**
   * Populated whenever the provider returns data.
   */
  postId: string;
  transcript: string;
  transcriptNotAvailable: boolean;
  [extra: string]: unknown;
}

/**
 * Input for Reddit Search (reddit.search).
 */
export interface RedditSearchInput {
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of results.
   */
  cursor?: string;
  /**
   * Free-text search across all of Reddit. Reddit's field operators are supported inside the string: subreddit:<name> to scope to one subreddit, author:<user>, title:<text>, selftext:<text>, self:yes|no, nsfw:yes|no, and boolean AND/OR/NOT. To restrict to a single subreddit you can use subreddit:<name> here, or use the reddit.subreddit_posts SKU for a plain subreddit listing.
   */
  query: string;
  /**
   * Result sort order.
   * One of: relevance, hot, top, new, comments.
   */
  sort?: "relevance" | "hot" | "top" | "new" | "comments";
  /**
   * Time window for results.
   * One of: hour, day, week, month, year, all.
   */
  timeframe?: "hour" | "day" | "week" | "month" | "year" | "all";
}

export interface RedditSearchPost {
  /**
   * Author username, without the u/ prefix.
   * Populated whenever the provider returns data.
   */
  author: string;
  /**
   * Post creation time as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Reddit post ID (base-36, without the t3_ prefix).
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Total number of comments on the post.
   */
  numComments: number;
  /**
   * Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Empty if the upstream omits it.
   * Populated whenever the provider returns data.
   */
  permalink: string;
  /**
   * Net score (upvotes minus downvotes) at fetch time.
   */
  score: number;
  /**
   * Subreddit name, without the r/ prefix.
   * Populated whenever the provider returns data.
   */
  subreddit: string;
  /**
   * Post title.
   * Populated whenever the provider returns data.
   */
  title: string;
  /**
   * The post's destination link (the external URL for link posts, or the thread URL for self posts).
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Reddit Search (reddit.search).
 */
export interface RedditSearchData {
  /**
   * Cursor for the next page of results; pass it back as the `cursor` input to fetch the following page. Empty string when there are no more results.
   */
  nextCursor: string;
  /**
   * Populated whenever the provider returns data.
   */
  posts: RedditSearchPost[];
}

/**
 * Input for Reddit Subreddit Details (reddit.subreddit_details).
 */
export interface RedditSubredditDetailsInput {
  /**
   * Subreddit name without the r/ prefix. Case-sensitive (e.g. "AskReddit", not "askreddit").
   */
  subreddit: string;
}

/**
 * The `data` payload of Reddit Subreddit Details (reddit.subreddit_details).
 */
export interface RedditSubredditDetailsData {
  advertiserCategory: string;
  /**
   * Populated whenever the provider returns data.
   */
  createdAt: string;
  /**
   * Populated whenever the provider returns data.
   */
  description: string;
  /**
   * Populated whenever the provider returns data.
   */
  iconUrl: string;
  /**
   * Reddit fullname, e.g. "t5_2qh1i".
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Populated whenever the provider returns data.
   */
  name: string;
  weeklyActiveUsers: number;
  [extra: string]: unknown;
}

/**
 * Input for Reddit Subreddit Posts (reddit.subreddit_posts).
 */
export interface RedditSubredditPostsInput {
  /**
   * Pagination cursor from a previous response (its `nextCursor`). Fetches the page that follows; omit for the first page.
   */
  after?: string;
  /**
   * Requested number of posts. Note: the upstream returns one page (about 25 posts) per call; values larger than a page are not delivered in a single response. To fetch more, page with the `after` cursor returned as `nextCursor`.
   * Range: minimum 1, maximum 100.
   * Default: 25.
   */
  limit?: number;
  /**
   * Listing sort order.
   * One of: hot, new, top.
   * Default: hot.
   */
  sort?: "hot" | "new" | "top";
  /**
   * Subreddit name without the leading r/ (e.g. "golang").
   */
  subreddit: string;
  /**
   * Time window, applied when sort is "top" (e.g. "year" for the year's top posts). Ignored for hot/new. Omit to default to the current day for top.
   * One of: all, year, month, week, day, hour.
   */
  timeframe?: "all" | "year" | "month" | "week" | "day" | "hour";
}

export interface RedditSubredditPostsPost {
  /**
   * Author username, without the u/ prefix.
   * Populated whenever the provider returns data.
   */
  author: string;
  /**
   * Post creation time as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   * Populated whenever the provider returns data.
   */
  createdUtc: number;
  /**
   * Reddit post ID (base-36, without the t3_ prefix).
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Total number of comments on the post.
   */
  numComments: number;
  /**
   * Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Empty if the upstream omits it.
   * Populated whenever the provider returns data.
   */
  permalink: string;
  /**
   * Net score (upvotes minus downvotes) at fetch time.
   */
  score: number;
  /**
   * Subreddit name, without the r/ prefix.
   * Populated whenever the provider returns data.
   */
  subreddit: string;
  /**
   * Post title.
   * Populated whenever the provider returns data.
   */
  title: string;
  /**
   * The post's destination link (the external URL for link posts, or the thread URL for self posts).
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Reddit Subreddit Posts (reddit.subreddit_posts).
 */
export interface RedditSubredditPostsData {
  /**
   * Cursor for the next page of results; pass it back as the `after` input to fetch the following page. Empty string when there are no more results.
   */
  nextCursor: string;
  /**
   * Populated whenever the provider returns data.
   */
  posts: RedditSubredditPostsPost[];
}

/**
 * Input for Reddit Subreddit Search (reddit.subreddit_search).
 */
export interface RedditSubredditSearchInput {
  /**
   * Optional pagination token from a previous response.
   */
  cursor?: string;
  /**
   * Optional search query to match posts (e.g. 'push ups').
   */
  query?: string;
  /**
   * Optional sort order: relevance, hot, top, new, comments.
   */
  sort?: string;
  /**
   * Subreddit name without the r/ prefix (e.g. 'Fitness').
   */
  subreddit: string;
  /**
   * Optional time filter: all, year, month, week, day, hour.
   */
  timeframe?: string;
}

export interface RedditSubredditSearchPost {
  /**
   * Author username, without the u/ prefix.
   * Populated whenever the provider returns data.
   */
  author: string;
  /**
   * Post creation time as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Reddit post ID (base-36, without the t3_ prefix).
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Whether the post is marked NSFW (over 18).
   */
  nsfw: boolean;
  /**
   * Total number of comments on the post.
   */
  numComments: number;
  /**
   * Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link.
   * Populated whenever the provider returns data.
   */
  permalink: string;
  /**
   * Net score (upvotes minus downvotes) at fetch time.
   */
  score: number;
  /**
   * Subreddit name, without the r/ prefix.
   * Populated whenever the provider returns data.
   */
  subreddit: string;
  /**
   * Post title.
   * Populated whenever the provider returns data.
   */
  title: string;
  /**
   * The post's destination link (the external URL for link posts, or the thread URL for self posts).
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Reddit Subreddit Search (reddit.subreddit_search).
 */
export interface RedditSubredditSearchData {
  nextCursor: string;
  /**
   * Populated whenever the provider returns data.
   */
  posts: RedditSubredditSearchPost[];
}

/**
 * Typed methods for the reddit platform. Attached to the AnyAPI client as
 * `client.reddit`.
 */
export class RedditNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Reddit Post Comments
   *
   * List the top-level comments on a Reddit post by URL (author, body, score, timestamp), normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.reddit.postComments({"url":"https://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/"});
   */
  postComments(
    input: RedditPostCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedditPostCommentsData>> {
    return this._core.run("reddit.post_comments", input, options);
  }

  /**
   * Reddit Post Transcript
   *
   * Extract the spoken transcript from a Reddit video post by URL, normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.reddit.postTranscript({"url":"https://www.reddit.com/r/youseeingthisshit/comments/1oiu9xm/"});
   */
  postTranscript(
    input: RedditPostTranscriptInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedditPostTranscriptData>> {
    return this._core.run("reddit.post_transcript", input, options);
  }

  /**
   * Reddit Search
   *
   * Search Reddit posts across all subreddits by query, normalized across providers with transparent failover.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.reddit.search({"query":"mechanical keyboard"});
   */
  search(
    input: RedditSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedditSearchData>> {
    return this._core.run("reddit.search", input, options);
  }

  /**
   * Iterate every result of Reddit Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * RunResult pages instead (each carries its own costUsd).
   */
  iterSearch(
    input: RedditSearchInput,
    options?: RequestOptions,
  ): Paginator<RedditSearchPost, RedditSearchData> {
    return paginate<RedditSearchPost, RedditSearchData>(
      this._core,
      "reddit.search",
      input as unknown as Record<string, unknown>,
      "posts",
      options,
    );
  }

  /**
   * Reddit Subreddit Details
   *
   * Fetch a subreddit's metadata - weekly active users, description, and category - normalized across providers with transparent failover.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.reddit.subredditDetails({"subreddit":"programming"});
   */
  subredditDetails(
    input: RedditSubredditDetailsInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedditSubredditDetailsData>> {
    return this._core.run("reddit.subreddit_details", input, options);
  }

  /**
   * Reddit Subreddit Posts
   *
   * Fetch posts from a subreddit listing (hot, new, or top), normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.reddit.subredditPosts({"limit":5,"subreddit":"programming"});
   */
  subredditPosts(
    input: RedditSubredditPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedditSubredditPostsData>> {
    return this._core.run("reddit.subreddit_posts", input, options);
  }

  /**
   * Reddit Subreddit Search
   *
   * Search posts within a single subreddit by query, sort, and timeframe, normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.reddit.subredditSearch({"query":"push ups","subreddit":"Fitness"});
   */
  subredditSearch(
    input: RedditSubredditSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedditSubredditSearchData>> {
    return this._core.run("reddit.subreddit_search", input, options);
  }

  /**
   * Iterate every result of Reddit Subreddit Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * RunResult pages instead (each carries its own costUsd).
   */
  iterSubredditSearch(
    input: RedditSubredditSearchInput,
    options?: RequestOptions,
  ): Paginator<RedditSubredditSearchPost, RedditSubredditSearchData> {
    return paginate<RedditSubredditSearchPost, RedditSubredditSearchData>(
      this._core,
      "reddit.subreddit_search",
      input as unknown as Record<string, unknown>,
      "posts",
      options,
    );
  }
}
