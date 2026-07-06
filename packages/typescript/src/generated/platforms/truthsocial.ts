// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Truth Social Post (truthsocial.post).
 */
export interface TruthsocialPostInput {
  /**
   * Full Truth Social post URL, e.g. "https://truthsocial.com/@realDonaldTrump/posts/116824551176646175".
   */
  url: string;
}

/**
 * The `data` payload of Truth Social Post (truthsocial.post).
 */
export interface TruthsocialPostData {
  comments: number;
  /**
   * Populated whenever the provider returns data.
   */
  displayName: string;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  likes: number;
  /**
   * Populated whenever the provider returns data.
   */
  publishedAt: string;
  shares: number;
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
 * Input for Truth Social Profile (truthsocial.profile).
 */
export interface TruthsocialProfileInput {
  /**
   * Truth Social handle without the @, e.g. "realDonaldTrump".
   */
  handle: string;
}

/**
 * The `data` payload of Truth Social Profile (truthsocial.profile).
 */
export interface TruthsocialProfileData {
  /**
   * Populated whenever the provider returns data.
   */
  avatarUrl: string;
  /**
   * Populated whenever the provider returns data.
   */
  bio: string;
  /**
   * Populated whenever the provider returns data.
   */
  displayName: string;
  followers: number;
  following: number;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Populated whenever the provider returns data.
   */
  joinedAt: string;
  postsCount: number;
  private: boolean;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  /**
   * Populated whenever the provider returns data.
   */
  username: string;
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * Input for Truth Social User Posts (truthsocial.user_posts).
 */
export interface TruthsocialUserPostsInput {
  /**
   * Truth Social handle without the @, e.g. "realDonaldTrump".
   */
  handle: string;
}

export interface TruthsocialUserPostsPost {
  comments: number;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  likes: number;
  /**
   * Populated whenever the provider returns data.
   */
  publishedAt: string;
  shares: number;
  /**
   * Populated whenever the provider returns data.
   */
  text: string;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Truth Social User Posts (truthsocial.user_posts).
 */
export interface TruthsocialUserPostsData {
  /**
   * Populated whenever the provider returns data.
   */
  posts: TruthsocialUserPostsPost[];
}

/**
 * Typed methods for the truthsocial platform. Attached to the AnyAPI client as
 * `client.truthsocial`.
 */
export class TruthsocialNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Truth Social Post
   *
   * Get a single Truth Social post by its URL - text, author, engagement (likes, comments, shares), and timestamp as clean JSON, billed per request in USD.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.truthsocial.post({"url":"https://truthsocial.com/@realDonaldTrump/posts/116824551176646175"});
   */
  post(
    input: TruthsocialPostInput,
    options?: RequestOptions,
  ): Promise<RunResult<TruthsocialPostData>> {
    return this._core.run("truthsocial.post", input, options);
  }

  /**
   * Truth Social Profile
   *
   * Get a Truth Social account's public profile by handle - display name, bio, follower/following counts, and post count as clean JSON, billed per request in USD.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.truthsocial.profile({"handle":"realDonaldTrump"});
   */
  profile(
    input: TruthsocialProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<TruthsocialProfileData>> {
    return this._core.run("truthsocial.profile", input, options);
  }

  /**
   * Truth Social User Posts
   *
   * List a Truth Social account's recent posts by handle - text, engagement (likes, comments, shares), and timestamps as clean JSON, billed per request in USD.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.truthsocial.userPosts({"handle":"realDonaldTrump"});
   */
  userPosts(
    input: TruthsocialUserPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TruthsocialUserPostsData>> {
    return this._core.run("truthsocial.user_posts", input, options);
  }
}
