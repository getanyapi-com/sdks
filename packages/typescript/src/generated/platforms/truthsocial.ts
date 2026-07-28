// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type TruthsocialPostData = unknown;

/**
 * Input for Truth Social Profile (truthsocial.profile).
 */
export interface TruthsocialProfileInput {
  /**
   * Truth Social handle without the @, e.g. "realDonaldTrump".
   */
  handle: string;
}

export type TruthsocialProfileData = unknown;

/**
 * Input for Truth Social User Posts (truthsocial.user_posts).
 */
export interface TruthsocialUserPostsInput {
  /**
   * Truth Social handle without the @, e.g. "realDonaldTrump".
   */
  handle: string;
}

export type TruthsocialUserPostsData = unknown;

/**
 * Typed methods for the truthsocial platform. Attached to the AnyAPI client as
 * `client.truthsocial`.
 */
export class TruthsocialNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Truth Social Post
   *
   * Get a single Truth Social post by its URL - text, author, engagement (likes, comments, shares), and timestamp as clean JSON.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.truthsocial.post({ url: "https://truthsocial.com/@realDonaldTrump/posts/116824551176646175" });
   */
  post(
    input: TruthsocialPostInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TruthsocialPostData>> {
    return this._core.run(
      "truthsocial.post",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TruthsocialPostData>>;
  }

  /**
   * Truth Social Profile
   *
   * Get a Truth Social account's public profile by handle - display name, bio, follower/following counts, and post count as clean JSON.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.truthsocial.profile({ handle: "realDonaldTrump" });
   */
  profile(
    input: TruthsocialProfileInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TruthsocialProfileData>> {
    return this._core.run(
      "truthsocial.profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TruthsocialProfileData>>;
  }

  /**
   * Truth Social User Posts
   *
   * List a Truth Social account's recent posts by handle - text, engagement (likes, comments, shares), and timestamps as clean JSON.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.truthsocial.userPosts({ handle: "realDonaldTrump" });
   */
  userPosts(
    input: TruthsocialUserPostsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TruthsocialUserPostsData>> {
    return this._core.run(
      "truthsocial.user_posts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TruthsocialUserPostsData>>;
  }
}
