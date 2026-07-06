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
   * The full URL of the Threads post to fetch (e.g. https://www.threads.com/@zuck/post/C8yKXdRxKqK).
   */
  url: string;
}

/**
 * The `data` payload of Threads Post (threads.post).
 */
export interface ThreadsPostData {
  code: string;
  /**
   * Populated whenever the provider returns data.
   */
  fullName: string;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  likeCount: number;
  quoteCount: number;
  replyCount: number;
  repostCount: number;
  takenAt: number;
  /**
   * Populated whenever the provider returns data.
   */
  text: string;
  /**
   * Populated whenever the provider returns data.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * Input for Threads Profile (threads.profile).
 */
export interface ThreadsProfileInput {
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
   * Populated whenever the provider returns data.
   */
  biography: string;
  followerCount: number;
  /**
   * Populated whenever the provider returns data.
   */
  fullName: string;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  isPrivate: boolean;
  isVerified: boolean;
  /**
   * Populated whenever the provider returns data.
   */
  profilePicUrl: string;
  /**
   * Populated whenever the provider returns data.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * Input for Threads Search (threads.search).
 */
export interface ThreadsSearchInput {
  /**
   * Keyword or hashtag to search public Threads posts for; the # prefix is optional (e.g. AI agents).
   */
  query: string;
}

export interface ThreadsSearchPost {
  code: string;
  /**
   * Populated whenever the provider returns data.
   */
  fullName: string;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  likeCount: number;
  replyCount: number;
  repostCount: number;
  takenAt: number;
  /**
   * Populated whenever the provider returns data.
   */
  text: string;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  /**
   * Populated whenever the provider returns data.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Threads Search (threads.search).
 */
export interface ThreadsSearchData {
  /**
   * Matching public post records: text, author, engagement counts, timestamp, and URL.
   * Populated whenever the provider returns data.
   */
  posts: ThreadsSearchPost[];
}

/**
 * Input for Threads User Search (threads.search_users).
 */
export interface ThreadsSearchUsersInput {
  /**
   * The name or username to search Threads users for.
   */
  query: string;
}

export interface ThreadsSearchUsersUser {
  /**
   * Populated whenever the provider returns data.
   */
  fullName: string;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  isVerified: boolean;
  /**
   * Populated whenever the provider returns data.
   */
  profilePicUrl: string;
  /**
   * Populated whenever the provider returns data.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Threads User Search (threads.search_users).
 */
export interface ThreadsSearchUsersData {
  /**
   * Populated whenever the provider returns data.
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
}

export interface ThreadsUserPostsPost {
  code: string;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  likeCount: number;
  quoteCount: number;
  replyCount: number;
  repostCount: number;
  takenAt: number;
  /**
   * Populated whenever the provider returns data.
   */
  text: string;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  /**
   * Populated whenever the provider returns data.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Threads User Posts (threads.user_posts).
 */
export interface ThreadsUserPostsData {
  /**
   * Populated whenever the provider returns data.
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
   * Fetch a single Threads post by URL - text, author, engagement counts, and timestamp - billed per request in USD.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.threads.post({"url":"https://www.threads.com/@aaronparnas/post/DZxPYVFkYSq"});
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
   * Fetch a Threads user's public profile (bio, follower count, verification, profile picture) by username, billed per request in USD.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.threads.profile({"username":"zuck"});
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
   * Search public Threads posts by keyword or hashtag and get normalized post records - text, author, and engagement - billed per request in USD.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.threads.search({"query":"trump"});
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
   * Search Threads users by name or username and get normalized profile records - username, full name, verification, and picture - at a flat per-request USD price.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.threads.searchUsers({"query":"shams"});
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
   * List a Threads user's recent public posts by username - text, engagement counts, and post URLs - at a flat per-request USD price.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.threads.userPosts({"handle":"trendspider"});
   */
  userPosts(
    input: ThreadsUserPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<ThreadsUserPostsData>> {
    return this._core.run("threads.user_posts", input, options);
  }
}
