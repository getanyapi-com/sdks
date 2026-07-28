// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Weibo Hot Search (weibo.hot_search).
 */
export interface WeiboHotSearchInput {}

export type WeiboHotSearchData = unknown;

/**
 * Input for Weibo Post (weibo.post).
 */
export interface WeiboPostInput {
  /**
   * Whether to include the full text of long posts.
   * Default: true.
   */
  includeLongText?: string;
  /**
   * Weibo post identifier.
   */
  postId: string;
}

export type WeiboPostData = unknown;

/**
 * Input for Weibo Post Comments (weibo.post_comments).
 */
export interface WeiboPostCommentsInput {
  /**
   * Pagination cursor returned as nextCursor.
   */
  cursor?: string;
  /**
   * Requested comment count.
   * Default: 10.
   */
  limit?: number;
  /**
   * Weibo post identifier.
   */
  postId: string;
}

export type WeiboPostCommentsData = unknown;

/**
 * Input for Weibo Profile (weibo.profile).
 */
export interface WeiboProfileInput {
  /**
   * Weibo user identifier.
   */
  userId: string;
}

export type WeiboProfileData = unknown;

/**
 * Input for Weibo Advanced Search (weibo.search).
 */
export interface WeiboSearchInput {
  /**
   * Media filter, such as all, pic, video, music, or link.
   */
  includeType?: string;
  /**
   * Page number starting at 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Search keyword.
   */
  query: string;
  /**
   * Search type, such as all, hot, original, verified, media, or viewpoint.
   */
  searchType?: string;
  /**
   * Custom time range in the API's custom:start:end format.
   */
  timeScope?: string;
}

export type WeiboSearchData = unknown;

/**
 * Input for Weibo User Posts (weibo.user_posts).
 */
export interface WeiboUserPostsInput {
  /**
   * Pagination identifier returned as nextCursor.
   */
  cursor?: string;
  /**
   * Response detail feature: 0 basic, 1 extended, 2 image-oriented, or 3 video-oriented.
   * Default: 0.
   */
  feature?: number;
  /**
   * Page number starting at 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Weibo user identifier.
   */
  userId: string;
}

export type WeiboUserPostsData = unknown;

/**
 * Typed methods for the weibo platform. Attached to the AnyAPI client as
 * `client.weibo`.
 */
export class WeiboNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Weibo Hot Search
   *
   * Get the complete current Weibo hot-search ranking with labels and heat values.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.weibo.hotSearch({});
   */
  hotSearch(
    input: WeiboHotSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<WeiboHotSearchData>> {
    return this._core.run(
      "weibo.hot_search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<WeiboHotSearchData>>;
  }

  /**
   * Weibo Post
   *
   * Fetch a public Weibo post by ID with normalized author and engagement data.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.weibo.post({ postId: "5092682368025584", includeLongText: "true" });
   */
  post(
    input: WeiboPostInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<WeiboPostData>> {
    return this._core.run("weibo.post", input, options) as unknown as Promise<
      BareRunResult<WeiboPostData>
    >;
  }

  /**
   * Weibo Post Comments
   *
   * List first-level comments on a public Weibo post with pagination.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.weibo.postComments({ postId: "5283919831764022", limit: 10 });
   */
  postComments(
    input: WeiboPostCommentsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<WeiboPostCommentsData>> {
    return this._core.run(
      "weibo.post_comments",
      input,
      options,
    ) as unknown as Promise<BareRunResult<WeiboPostCommentsData>>;
  }

  /**
   * Weibo Profile
   *
   * Fetch a public Weibo profile by user ID with normalized audience and account data.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.weibo.profile({ userId: "1722594714" });
   */
  profile(
    input: WeiboProfileInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<WeiboProfileData>> {
    return this._core.run(
      "weibo.profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<WeiboProfileData>>;
  }

  /**
   * Weibo Advanced Search
   *
   * Search public Weibo posts with optional result, media, and time filters.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.weibo.search({ query: "python", includeType: "pic", page: 1, searchType: "hot" });
   */
  search(
    input: WeiboSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<WeiboSearchData>> {
    return this._core.run("weibo.search", input, options) as unknown as Promise<
      BareRunResult<WeiboSearchData>
    >;
  }

  /**
   * Weibo User Posts
   *
   * List public posts from a Weibo user with normalized author and engagement data.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.weibo.userPosts({ userId: "7277477906", feature: 3, page: 1 });
   */
  userPosts(
    input: WeiboUserPostsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<WeiboUserPostsData>> {
    return this._core.run(
      "weibo.user_posts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<WeiboUserPostsData>>;
  }
}
