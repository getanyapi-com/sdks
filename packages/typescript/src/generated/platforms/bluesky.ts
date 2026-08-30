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
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Bluesky post URL, e.g. "https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l".
   */
  url: string;
}

/**
 * The `data` payload of Bluesky Post (bluesky.post).
 */
export interface BlueskyPostData {
  /**
   * Handle of the account that authored the post. Populated whenever the provider has data for the entity.
   */
  authorHandle: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Number of likes on the post.
   */
  likes: number;
  /**
   * Number of replies to the post.
   */
  replies: number;
  /**
   * Number of reposts of the post.
   */
  reposts: number;
  /**
   * The post's text content. Populated whenever the provider has data for the entity.
   */
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
  /**
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

/**
 * The `data` payload of Bluesky Profile (bluesky.profile).
 */
export interface BlueskyProfileData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  description: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  displayName: string;
  followers: number;
  following: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
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
  /**
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface BlueskyUserPostsPost {
  /**
   * Handle of the account that authored the post. Populated whenever the provider has data for the entity.
   */
  authorHandle: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Number of likes on the post.
   */
  likes: number;
  /**
   * Number of replies to the post.
   */
  replies: number;
  /**
   * Number of reposts of the post.
   */
  reposts: number;
  /**
   * The post's text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Bluesky User Posts (bluesky.user_posts).
 */
export interface BlueskyUserPostsData {
  /**
   * The account's recent posts. Populated whenever the provider has data for the entity.
   */
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
   * Get a single Bluesky post by URL - text, author handle, like, reply, and repost counts as clean JSON.
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
   * Get a Bluesky user's public profile by handle - display name, bio, follower and post counts as clean JSON.
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
   * List a Bluesky account's recent posts (text, author handle, like, reply, and repost counts) by handle as clean JSON.
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
