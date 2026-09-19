// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Truth Social Post (truthsocial.post).
 */
export interface TruthsocialPostInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Full Truth Social post URL, e.g. "https://truthsocial.com/@realDonaldTrump/posts/116824551176646175".
   */
  url: string;
}

/**
 * The `data` payload of Truth Social Post (truthsocial.post).
 */
export interface TruthsocialPostData {
  /**
   * Avatar URL of the account that posted.
   */
  avatarUrl?: string;
  /**
   * Number of comments on the post.
   */
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Display name of the author. Populated whenever the provider has data for the entity.
   */
  displayName: string;
  /**
   * Post identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Preview image URL for the post.
   */
  image?: string;
  /**
   * Number of likes on the post.
   */
  likes: number;
  /**
   * URLs of media attached to the post.
   */
  mediaUrls?: string[];
  /**
   * Number of reblogs of the post.
   */
  shares: number;
  /**
   * Post text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Username of the author. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * Whether the posting account is verified on Truth Social.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * Input for Truth Social Profile (truthsocial.profile).
 */
export interface TruthsocialProfileInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Truth Social handle without the @, e.g. "realDonaldTrump".
   */
  handle: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

/**
 * The `data` payload of Truth Social Profile (truthsocial.profile).
 */
export interface TruthsocialProfileData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  bio: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  displayName: string;
  followers: number;
  following: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  joinedAt: string;
  postsCount: number;
  private: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Populated whenever the provider has data for the entity.
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; a page holds 20 posts.
   */
  cursor?: string;
  /**
   * Truth Social handle without the @, e.g. "realDonaldTrump".
   */
  handle: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface TruthsocialUserPostsPost {
  /**
   * Avatar URL of the account that posted.
   */
  avatarUrl?: string;
  /**
   * Number of comments on the post.
   */
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Display name of the account that posted.
   */
  displayName?: string;
  /**
   * Post identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of likes on the post.
   */
  likes: number;
  /**
   * Number of reblogs of the post.
   */
  shares: number;
  /**
   * Post text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Canonical URL of the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Handle of the account that posted.
   */
  username?: string;
  /**
   * Whether the posting account is verified on Truth Social.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Truth Social User Posts (truthsocial.user_posts).
 */
export interface TruthsocialUserPostsData {
  /**
   * Opaque cursor for the next page of posts, or null/empty when there are no more. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
  /**
   * The user's recent posts. Populated whenever the provider has data for the entity.
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
   * Get a single Truth Social post by its URL - text, author, engagement (likes, comments, shares), and timestamp as clean JSON.
   *
   * Price: $0.0036 per request.
   *
   * @example
   * const res = await client.truthsocial.post({ url: "https://truthsocial.com/@realDonaldTrump/posts/116824551176646175" });
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
   * Get a Truth Social account's public profile by handle - display name, bio, follower/following counts, and post count as clean JSON.
   *
   * Price: $0.0036 per request.
   *
   * @example
   * const res = await client.truthsocial.profile({ handle: "DevinNunes" });
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
   * List a Truth Social account's recent posts by handle - text, engagement (likes, comments, shares), and timestamps as clean JSON.
   *
   * Price: $0.0036 per request.
   *
   * @example
   * const res = await client.truthsocial.userPosts({ handle: "realDonaldTrump" });
   */
  userPosts(
    input: TruthsocialUserPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TruthsocialUserPostsData>> {
    return this._core.run("truthsocial.user_posts", input, options);
  }

  /**
   * Iterate every result of Truth Social User Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserPosts(
    input: TruthsocialUserPostsInput,
    options?: RequestOptions,
  ): Paginator<TruthsocialUserPostsPost, RunResult<TruthsocialUserPostsData>> {
    return paginate<
      TruthsocialUserPostsPost,
      RunResult<TruthsocialUserPostsData>
    >(
      this._core,
      "truthsocial.user_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }
}
