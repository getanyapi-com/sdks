// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type ThreadsPostData = unknown;

/**
 * Input for Threads Profile (threads.profile).
 */
export interface ThreadsProfileInput {
  /**
   * The Threads username to look up, without the @ prefix (e.g. zuck).
   */
  username: string;
}

export type ThreadsProfileData = unknown;

/**
 * Input for Threads Search (threads.search).
 */
export interface ThreadsSearchInput {
  /**
   * Keyword or hashtag to search public Threads posts for; the # prefix is optional (e.g. AI agents).
   */
  query: string;
}

export type ThreadsSearchData = unknown;

/**
 * Input for Threads User Search (threads.search_users).
 */
export interface ThreadsSearchUsersInput {
  /**
   * The name or username to search Threads users for.
   */
  query: string;
}

export type ThreadsSearchUsersData = unknown;

/**
 * Input for Threads User Posts (threads.user_posts).
 */
export interface ThreadsUserPostsInput {
  /**
   * The Threads username to list posts for, without the @ prefix.
   */
  handle: string;
}

export type ThreadsUserPostsData = unknown;

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
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.threads.post({ url: "https://www.threads.com/@aaronparnas/post/DZxPYVFkYSq" });
   */
  post(
    input: ThreadsPostInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ThreadsPostData>> {
    return this._core.run("threads.post", input, options) as unknown as Promise<
      BareRunResult<ThreadsPostData>
    >;
  }

  /**
   * Threads Profile
   *
   * Fetch a Threads user's public profile (bio, follower count, verification, profile picture) by username.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.threads.profile({ username: "zuck" });
   */
  profile(
    input: ThreadsProfileInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ThreadsProfileData>> {
    return this._core.run(
      "threads.profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ThreadsProfileData>>;
  }

  /**
   * Threads Search
   *
   * Search public Threads posts by keyword or hashtag and get normalized post records: text, author, and engagement.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.threads.search({ query: "trump" });
   */
  search(
    input: ThreadsSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ThreadsSearchData>> {
    return this._core.run(
      "threads.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ThreadsSearchData>>;
  }

  /**
   * Threads User Search
   *
   * Search Threads users by name or username and get normalized profile records: username, full name, verification, and picture.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.threads.searchUsers({ query: "shams" });
   */
  searchUsers(
    input: ThreadsSearchUsersInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ThreadsSearchUsersData>> {
    return this._core.run(
      "threads.search_users",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ThreadsSearchUsersData>>;
  }

  /**
   * Threads User Posts
   *
   * List a Threads user's recent public posts by username: text, engagement counts, and post URLs.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.threads.userPosts({ handle: "trendspider" });
   */
  userPosts(
    input: ThreadsUserPostsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ThreadsUserPostsData>> {
    return this._core.run(
      "threads.user_posts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ThreadsUserPostsData>>;
  }
}
