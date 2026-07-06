// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Bluesky Post (bluesky.post).
 */
export interface BlueskyPostInput {
  /**
   * Bluesky post URL, e.g. "https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l".
   */
  url: string;
}

/**
 * The `data` payload of Bluesky Post (bluesky.post).
 */
export interface BlueskyPostData {
  authorHandle: string;
  createdAt: string;
  likes: number;
  replies: number;
  reposts: number;
  text: string;
  [extra: string]: unknown;
}

/**
 * Input for Bluesky Profile (bluesky.profile).
 */
export interface BlueskyProfileInput {
  /**
   * Bluesky handle, e.g. "bsky.app" or "jay.bsky.team".
   */
  handle: string;
}

/**
 * The `data` payload of Bluesky Profile (bluesky.profile).
 */
export interface BlueskyProfileData {
  description: string;
  displayName: string;
  followers: number;
  following: number;
  handle: string;
  postsCount: number;
  [extra: string]: unknown;
}

/**
 * Input for Bluesky User Posts (bluesky.user_posts).
 */
export interface BlueskyUserPostsInput {
  /**
   * Bluesky handle, e.g. "bsky.app" or "jay.bsky.team".
   */
  handle: string;
}

export interface BlueskyUserPostsPost {
  authorHandle: string;
  createdAt: string;
  likes: number;
  replies: number;
  reposts: number;
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Bluesky User Posts (bluesky.user_posts).
 */
export interface BlueskyUserPostsData {
  posts: BlueskyUserPostsPost[];
}

/**
 * Typed methods for the bluesky platform. Attached to the AnyAPI client as
 * `client.bluesky`.
 */
export class BlueskyNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Bluesky Post
   *
   * Get a single Bluesky post by URL - text, author handle, like, reply, and repost counts as clean JSON, billed per request in USD.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.bluesky.post({ url: "https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l" });
   */
  post(
    input: BlueskyPostInput,
    options?: RequestOptions,
  ): Promise<RunResult<BlueskyPostData>> {
    return this._core.run("bluesky.post", input, options);
  }

  /**
   * Bluesky Profile
   *
   * Get a Bluesky user's public profile by handle - display name, bio, follower and post counts as clean JSON, billed per request in USD.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.bluesky.profile({ handle: "bsky.app" });
   */
  profile(
    input: BlueskyProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<BlueskyProfileData>> {
    return this._core.run("bluesky.profile", input, options);
  }

  /**
   * Bluesky User Posts
   *
   * List a Bluesky account's recent posts (text, author handle, like, reply, and repost counts) by handle as clean JSON, normalized across providers, billed per request in USD.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.bluesky.userPosts({ handle: "bsky.app" });
   */
  userPosts(
    input: BlueskyUserPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<BlueskyUserPostsData>> {
    return this._core.run("bluesky.user_posts", input, options);
  }
}
