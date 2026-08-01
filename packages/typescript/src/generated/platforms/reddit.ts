// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Reddit Post (reddit.post).
 */
export interface RedditPostInput {
  /**
   * Full Reddit post URL in the /r/<subreddit>/comments/<id>/<slug>/ form, e.g. "https://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/". The short "reddit.com/comments/<id>" form is not accepted.
   */
  url: string;
}

/**
 * The `data` payload of Reddit Post (reddit.post).
 */
export interface RedditPostData {
  /**
   * Author username, without the u/ prefix. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * The post's own body text (selftext), as Markdown. Empty for link posts, which carry no body. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  body?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Preview image for the post, when Reddit generated one. Reddit signs this URL and it is time-limited, so fetch it promptly rather than storing it; the query string carries the signature and must be kept intact. Empty when the post has no preview image.
   */
  image?: string;
  /**
   * True when the post is marked NSFW (over 18).
   */
  isNsfw?: boolean;
  /**
   * Total number of comments on the post.
   */
  numComments: number;
  /**
   * Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Empty if the upstream omits it. Populated whenever the provider has data for the entity.
   */
  permalink: string;
  /**
   * Net score (upvotes minus downvotes) at fetch time.
   */
  score: number;
  /**
   * Subreddit name, without the r/ prefix. Populated whenever the provider has data for the entity.
   */
  subreddit: string;
  /**
   * Post title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Fraction of votes that are upvotes, between 0 and 1. Zero when the upstream does not report it.
   */
  upvoteRatio?: number;
  /**
   * The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

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
   * Commenter username, without the u/ prefix. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * Comment text, as Markdown. Populated whenever the provider has data for the entity.
   */
  body: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Reddit comment ID (base-36, without the t1_ prefix). Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Permalink to the comment on reddit.com. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Reddit Post Comments (reddit.post_comments).
 */
export interface RedditPostCommentsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  comments: RedditPostCommentsComment[];
  /**
   * Cursor for the next page of comments; pass it back as the `cursor` input to fetch the following page. Empty string when there are no more comments.
   */
  nextCursor: string;
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
   * Populated whenever the provider has data for the entity.
   */
  language: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  postId: string;
  transcript: string;
  transcriptNotAvailable: boolean;
  [extra: string]: unknown;
}

/**
 * Input for Reddit Profile (reddit.profile).
 */
export interface RedditProfileInput {
  /**
   * Reddit username, without the u/ prefix. Example: "spez".
   */
  username: string;
}

/**
 * The `data` payload of Reddit Profile (reddit.profile).
 */
export interface RedditProfileData {
  /**
   * URL of the profile avatar image, with sizing and signing query params stripped. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  avatarUrl?: string;
  /**
   * Public profile description text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  bio?: string;
  /**
   * Karma earned from comments. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  commentKarma?: number;
  /**
   * Number of comments the account has contributed. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Profile display title. Reddit defaults it to the username when the account has not set one. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  displayName?: string;
  /**
   * True when the account belongs to a Reddit employee.
   */
  employee?: boolean;
  /**
   * Number of profile subscribers. Reddit reports 0 for accounts that do not expose a follower count.
   */
  followers?: number;
  /**
   * Reddit account ID (base-36, without the t2_ prefix). Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Total karma across the account, as Reddit reports it. The postKarma and commentKarma fields below are the split it is composed of. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  karma?: number;
  /**
   * True when the profile is marked NSFW (over 18).
   */
  nsfw?: boolean;
  /**
   * Karma earned from posts. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  postKarma?: number;
  /**
   * Number of posts the account has contributed. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  posts?: number;
  /**
   * Absolute reddit.com URL of the profile page. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  profileUrl?: string;
  /**
   * Number of trophies unlocked in the account's trophy case. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  trophies?: number;
  /**
   * Account username, without the u/ prefix. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * True when the account is verified by Reddit.
   */
  verified?: boolean;
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
   * Author username, without the u/ prefix. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Total number of comments on the post.
   */
  numComments: number;
  /**
   * Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Empty if the upstream omits it. Populated whenever the provider has data for the entity.
   */
  permalink: string;
  /**
   * Net score (upvotes minus downvotes) at fetch time.
   */
  score: number;
  /**
   * Subreddit name, without the r/ prefix. Populated whenever the provider has data for the entity.
   */
  subreddit: string;
  /**
   * Post title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider has data for the entity.
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
   * Populated whenever the provider has data for the entity.
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
  /**
   * Reddit advertiser category for the subreddit.
   */
  advertiserCategory: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Subreddit description text. Populated whenever the provider has data for the entity.
   */
  description: string;
  /**
   * URL of the subreddit icon. Populated whenever the provider has data for the entity.
   */
  iconUrl: string;
  /**
   * Reddit fullname, e.g. "t5_2qh1i". Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Subreddit name (without the r/ prefix). Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Number of users active in the past week.
   */
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
   * Author username, without the u/ prefix. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Total number of comments on the post.
   */
  numComments: number;
  /**
   * Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Empty if the upstream omits it. Populated whenever the provider has data for the entity.
   */
  permalink: string;
  /**
   * Net score (upvotes minus downvotes) at fetch time.
   */
  score: number;
  /**
   * Subreddit name, without the r/ prefix. Populated whenever the provider has data for the entity.
   */
  subreddit: string;
  /**
   * Post title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider has data for the entity.
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
   * Populated whenever the provider has data for the entity.
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
   * Author username, without the u/ prefix. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * Post creation time as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider has data for the entity.
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
   * Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Populated whenever the provider has data for the entity.
   */
  permalink: string;
  /**
   * Net score (upvotes minus downvotes) at fetch time.
   */
  score: number;
  /**
   * Subreddit name, without the r/ prefix. Populated whenever the provider has data for the entity.
   */
  subreddit: string;
  /**
   * Post title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider has data for the entity.
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
   * Populated whenever the provider has data for the entity.
   */
  posts: RedditSubredditSearchPost[];
}

/**
 * Input for Reddit User Comments (reddit.user_comments).
 */
export interface RedditUserCommentsInput {
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it back to fetch the next page.
   */
  cursor?: string;
  /**
   * Maximum number of comments to return in this response (a page cap, not a total). Defaults to 25.
   * Range: minimum 1, maximum 100.
   * Default: 25.
   */
  limit?: number;
  /**
   * Sort order for the user's comments. Defaults to new (most recent first).
   * One of: new, top, hot, controversial.
   */
  sort?: "new" | "top" | "hot" | "controversial";
  /**
   * Reddit username, without the u/ prefix. Example: "spez".
   */
  username: string;
}

export interface RedditUserCommentsComment {
  /**
   * Commenter username, without the u/ prefix. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * A preview of the comment text, not the full comment body: the upstream truncates it to roughly 300 characters and cuts mid-word. It is plain text rather than Markdown, and it is empty on the occasional comment for which the upstream returns no preview at all. For full comment bodies and comment permalinks, use the reddit.post_comments SKU against the parent post.
   */
  bodyPreview?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Reddit comment ID (base-36, without the t1_ prefix). Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Reddit post ID of the thread the comment was made on (base-36, without the t3_ prefix). Pass it to reddit.post or reddit.post_comments for the full thread. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  postId?: string;
  /**
   * Title of the thread the comment was made on. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  postTitle?: string;
  /**
   * Net score (upvotes minus downvotes) on the comment at fetch time.
   */
  score?: number;
  /**
   * Subreddit name of the parent thread, without the r/ prefix. Empty when the comment is on a post hosted on a user's own profile (r/u_<name>), which has no subreddit.
   */
  subreddit?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Reddit User Comments (reddit.user_comments).
 */
export interface RedditUserCommentsData {
  /**
   * The user's comments in feed order (newest first by default). Each item carries a truncated body preview plus the parent post it was made on; there is no per-comment permalink available from this endpoint. Populated whenever the provider has data for the entity.
   */
  comments: RedditUserCommentsComment[];
  /**
   * Opaque cursor for the next page of this user's comments; pass it back as the `cursor` input to fetch the following page. Null when there are no more pages.
   */
  nextCursor: string;
}

/**
 * Input for Reddit User Posts (reddit.user_posts).
 */
export interface RedditUserPostsInput {
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it back to fetch the next page.
   */
  cursor?: string;
  /**
   * Sort order for the user's posts. Defaults to new (most recent first).
   * One of: new, top, hot, controversial.
   */
  sort?: "new" | "top" | "hot" | "controversial";
  /**
   * Reddit username without the leading u/ prefix (e.g. "spez").
   */
  username: string;
}

export interface RedditUserPostsPost {
  /**
   * Author username, without the u/ prefix. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Total number of comments on the post.
   */
  numComments?: number;
  /**
   * Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Empty if the upstream omits it. Populated whenever the provider has data for the entity.
   */
  permalink: string;
  /**
   * Net score (upvotes minus downvotes) at fetch time.
   */
  score?: number;
  /**
   * Subreddit name, without the r/ prefix. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  subreddit?: string;
  /**
   * Post title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Reddit User Posts (reddit.user_posts).
 */
export interface RedditUserPostsData {
  /**
   * Opaque cursor for the next page of this user's posts; pass it back as the `cursor` input to fetch the following page. Null when there are no more pages.
   */
  nextCursor: string;
  /**
   * The user's posts in feed order. Posts hosted on the user's own profile (r/u_<name>) are included and carry an empty subreddit. Populated whenever the provider has data for the entity.
   */
  posts: RedditUserPostsPost[];
}

/**
 * Typed methods for the reddit platform. Attached to the AnyAPI client as
 * `client.reddit`.
 */
export class RedditNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Reddit Post
   *
   * Fetch a single Reddit post by URL, including its full body text, score, comment count, upvote ratio, and subreddit, as normalized JSON.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.reddit.post({ url: "https://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/" });
   */
  post(
    input: RedditPostInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedditPostData>> {
    return this._core.run("reddit.post", input, options);
  }

  /**
   * Reddit Post Comments
   *
   * List the top-level comments on a Reddit post by URL (author, body, score, timestamp).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.reddit.postComments({ url: "https://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/" });
   */
  postComments(
    input: RedditPostCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedditPostCommentsData>> {
    return this._core.run("reddit.post_comments", input, options);
  }

  /**
   * Iterate every result of Reddit Post Comments across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterPostComments(
    input: RedditPostCommentsInput,
    options?: RequestOptions,
  ): Paginator<RedditPostCommentsComment, RunResult<RedditPostCommentsData>> {
    return paginate<
      RedditPostCommentsComment,
      RunResult<RedditPostCommentsData>
    >(
      this._core,
      "reddit.post_comments",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

  /**
   * Reddit Post Transcript
   *
   * Extract the spoken transcript from a Reddit video post by URL.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.reddit.postTranscript({ url: "https://www.reddit.com/r/youseeingthisshit/comments/1oiu9xm/" });
   */
  postTranscript(
    input: RedditPostTranscriptInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedditPostTranscriptData>> {
    return this._core.run("reddit.post_transcript", input, options);
  }

  /**
   * Reddit Profile
   *
   * Fetch a Reddit user's public profile (karma split, post and comment counts, bio, avatar, account age) by username.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.reddit.profile({ username: "spez" });
   */
  profile(
    input: RedditProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedditProfileData>> {
    return this._core.run("reddit.profile", input, options);
  }

  /**
   * Reddit Search
   *
   * Search Reddit posts across all subreddits by query.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.reddit.search({ query: "mechanical keyboard" });
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
   * result pages instead (each carries its own costUsd).
   */
  iterSearch(
    input: RedditSearchInput,
    options?: RequestOptions,
  ): Paginator<RedditSearchPost, RunResult<RedditSearchData>> {
    return paginate<RedditSearchPost, RunResult<RedditSearchData>>(
      this._core,
      "reddit.search",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Reddit Subreddit Details
   *
   * Fetch a subreddit's metadata (weekly active users, description, and category).
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.reddit.subredditDetails({ subreddit: "programming" });
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
   * Fetch posts from a subreddit listing (hot, new, or top).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.reddit.subredditPosts({ subreddit: "programming", limit: 5 });
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
   * Search posts within a single subreddit by query, sort, and timeframe.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.reddit.subredditSearch({ subreddit: "Fitness", query: "push ups" });
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
   * result pages instead (each carries its own costUsd).
   */
  iterSubredditSearch(
    input: RedditSubredditSearchInput,
    options?: RequestOptions,
  ): Paginator<
    RedditSubredditSearchPost,
    RunResult<RedditSubredditSearchData>
  > {
    return paginate<
      RedditSubredditSearchPost,
      RunResult<RedditSubredditSearchData>
    >(
      this._core,
      "reddit.subreddit_search",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Reddit User Comments
   *
   * List a Reddit user's comments by username, sorted by new, top, hot, or controversial, with the parent post title and subreddit on every item and cursor pagination. Comment text comes back as a roughly 300-character preview rather than the full body, and this endpoint carries no per-comment permalink; use reddit.post_comments for full comment bodies and comment URLs on a given post.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.reddit.userComments({ username: "spez" });
   */
  userComments(
    input: RedditUserCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedditUserCommentsData>> {
    return this._core.run("reddit.user_comments", input, options);
  }

  /**
   * Iterate every result of Reddit User Comments across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserComments(
    input: RedditUserCommentsInput,
    options?: RequestOptions,
  ): Paginator<RedditUserCommentsComment, RunResult<RedditUserCommentsData>> {
    return paginate<
      RedditUserCommentsComment,
      RunResult<RedditUserCommentsData>
    >(
      this._core,
      "reddit.user_comments",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

  /**
   * Reddit User Posts
   *
   * List a Reddit user's posts by username, sorted by new, top, hot, or controversial, with cursor pagination.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.reddit.userPosts({ username: "spez" });
   */
  userPosts(
    input: RedditUserPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<RedditUserPostsData>> {
    return this._core.run("reddit.user_posts", input, options);
  }

  /**
   * Iterate every result of Reddit User Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserPosts(
    input: RedditUserPostsInput,
    options?: RequestOptions,
  ): Paginator<RedditUserPostsPost, RunResult<RedditUserPostsData>> {
    return paginate<RedditUserPostsPost, RunResult<RedditUserPostsData>>(
      this._core,
      "reddit.user_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }
}
