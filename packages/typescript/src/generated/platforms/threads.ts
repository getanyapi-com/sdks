// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Threads Post (threads.post).
 */
export interface ThreadsPostInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The full URL of the Threads post to fetch (e.g. https://www.threads.com/@zuck/post/C8yKXdRxKqK).
   */
  url: string;
}

/**
 * The `data` payload of Threads Post (threads.post).
 */
export interface ThreadsPostData {
  /**
   * Threads post shortcode.
   */
  code: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Display name of the author. Populated whenever the provider has data for the entity.
   */
  fullName: string;
  /**
   * Post identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of likes on the post.
   */
  likeCount: number;
  /**
   * Number of quote posts.
   */
  quoteCount: number;
  /**
   * Number of replies to the post.
   */
  replyCount: number;
  /**
   * Number of reposts of the post.
   */
  repostCount: number;
  /**
   * Post text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Username of the author. Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * Input for Threads Profile (threads.profile).
 */
export interface ThreadsProfileInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The Threads username to look up, without the @ prefix (e.g. zuck).
   */
  username: string;
}

/**
 * The `data` payload of Threads Profile (threads.profile).
 */
export interface ThreadsProfileData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  biography: string;
  followerCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  fullName: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  isPrivate: boolean;
  isVerified: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  profilePicUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * Input for Threads Search (threads.search).
 */
export interface ThreadsSearchInput {
  /**
   * Only return posts published on or before this date, format YYYY-MM-DD (e.g. 2026-08-07). Threads pages backwards in time from here, so narrowing this is how you walk older results.
   */
  endDate?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Keyword or hashtag to search public Threads posts for; the # prefix is optional (e.g. AI agents). Threads matches text in posts, so search a brand or topic rather than a URL - a query that is only a domain is searched by its name (wander.com is searched as wander).
   */
  query: string;
  /**
   * Only return posts published on or after this date, format YYYY-MM-DD (e.g. 2026-08-01).
   */
  startDate?: string;
}

export interface ThreadsSearchPost {
  /**
   * Threads post shortcode.
   */
  code: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Display name of the author. Populated whenever the provider has data for the entity.
   */
  fullName: string;
  /**
   * Post identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of likes on the post.
   */
  likeCount: number;
  /**
   * Number of replies to the post.
   */
  replyCount: number;
  /**
   * Number of reposts of the post.
   */
  repostCount: number;
  /**
   * Post text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Canonical URL of the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Username of the author. Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Threads Search (threads.search).
 */
export interface ThreadsSearchData {
  /**
   * Matching public post records: text, author, engagement counts, timestamp, and URL. Populated whenever the provider has data for the entity.
   */
  posts: ThreadsSearchPost[];
}

/**
 * Input for Threads User Search (threads.search_users).
 */
export interface ThreadsSearchUsersInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The name or username to search Threads users for.
   */
  query: string;
}

export interface ThreadsSearchUsersUser {
  /**
   * Populated whenever the provider has data for the entity.
   */
  fullName: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  isVerified: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  profilePicUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Threads User Search (threads.search_users).
 */
export interface ThreadsSearchUsersData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  users: ThreadsSearchUsersUser[];
}

/**
 * Input for Threads User Posts (threads.user_posts).
 */
export interface ThreadsUserPostsInput {
  /**
   * The Threads username to list posts for, without the @ prefix.
   */
  handle: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface ThreadsUserPostsPost {
  /**
   * Threads post shortcode.
   */
  code: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Post identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of likes on the post.
   */
  likeCount: number;
  /**
   * Number of quote posts.
   */
  quoteCount: number;
  /**
   * Number of replies to the post.
   */
  replyCount: number;
  /**
   * Number of reposts of the post.
   */
  repostCount: number;
  /**
   * Post text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Canonical URL of the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Username of the author. Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Threads User Posts (threads.user_posts).
 */
export interface ThreadsUserPostsData {
  /**
   * The user's recent posts. Populated whenever the provider has data for the entity.
   */
  posts: ThreadsUserPostsPost[];
}

/**
 * Typed methods for the threads platform. Attached to the AnyAPI client as
 * `client.threads`.
 */
export class ThreadsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Threads Post
   *
   * Fetch a single Threads post by URL: text, author, engagement counts, and timestamp.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.threads.post({ url: "https://www.threads.com/@aaronparnas/post/DZxPYVFkYSq" });
   */
  post(
    input: ThreadsPostInput,
    options?: RequestOptions,
  ): Promise<RunResult<ThreadsPostData>> {
    return this._core.run("threads.post", input, options);
  }

  /**
   * Threads Profile
   *
   * Fetch a Threads user's public profile (bio, follower count, verification, profile picture) by username.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.threads.profile({ username: "zuck" });
   */
  profile(
    input: ThreadsProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<ThreadsProfileData>> {
    return this._core.run("threads.profile", input, options);
  }

  /**
   * Threads Search
   *
   * Search public Threads posts by keyword or hashtag and get normalized post records: text, author, and engagement.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.threads.search({ query: "trump" });
   */
  search(
    input: ThreadsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<ThreadsSearchData>> {
    return this._core.run("threads.search", input, options);
  }

  /**
   * Threads User Search
   *
   * Search Threads users by name or username and get normalized profile records: username, full name, verification, and picture.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.threads.searchUsers({ query: "shams" });
   */
  searchUsers(
    input: ThreadsSearchUsersInput,
    options?: RequestOptions,
  ): Promise<RunResult<ThreadsSearchUsersData>> {
    return this._core.run("threads.search_users", input, options);
  }

  /**
   * Threads User Posts
   *
   * List a Threads user's recent public posts by username: text, engagement counts, and post URLs.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.threads.userPosts({ handle: "trendspider" });
   */
  userPosts(
    input: ThreadsUserPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<ThreadsUserPostsData>> {
    return this._core.run("threads.user_posts", input, options);
  }
}
