// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Weibo Hot Search (weibo.hot_search).
 */
export interface WeiboHotSearchInput {
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
}

export interface WeiboHotSearchTopic {
  /**
   * Topic popularity value.
   */
  heat?: string;
  /**
   * Hot-search keyword. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Whether the topic is pinned.
   */
  pinned?: boolean;
  /**
   * Ranking position; zero may indicate pinned content. Populated whenever the provider has data for the entity.
   */
  rank: number;
  /**
   * Hot-search label.
   */
  tag?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Weibo Hot Search (weibo.hot_search).
 */
export interface WeiboHotSearchData {
  /**
   * Ranked hot-search topics. Populated whenever the provider has data for the entity.
   */
  topics: WeiboHotSearchTopic[];
  /**
   * Total topics.
   */
  total: number;
}

/**
 * Input for Weibo Post (weibo.post).
 */
export interface WeiboPostInput {
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
   * Whether to include the full text of long posts.
   * Default: true.
   */
  includeLongText?: string;
  /**
   * Weibo post identifier.
   */
  postId: string;
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
 * The `data` payload of Weibo Post (weibo.post).
 */
export interface WeiboPostData {
  /**
   * Author avatar URL.
   * Format: uri.
   */
  authorImage?: string;
  /**
   * Author display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorName?: string;
  /**
   * Author user identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
  /**
   * Whether the author is verified.
   */
  authorVerified?: boolean;
  /**
   * Comment count.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Post identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Attached image count.
   */
  imageCount?: number;
  /**
   * Like count.
   */
  likes?: number;
  /**
   * Region label reported by Weibo.
   */
  region?: string;
  /**
   * Repost count.
   */
  reposts?: number;
  /**
   * Short Weibo post identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  shortId?: string;
  /**
   * Plain post text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  text?: string;
  [extra: string]: unknown;
}

/**
 * Input for Weibo Post Comments (weibo.post_comments).
 */
export interface WeiboPostCommentsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor returned as nextCursor.
   */
  cursor?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Requested comment count.
   * Default: 10.
   */
  limit?: number;
  /**
   * Weibo post identifier.
   */
  postId: string;
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

export interface WeiboPostCommentsComment {
  /**
   * Comment author avatar URL.
   * Format: uri.
   */
  authorImage?: string;
  /**
   * Comment author display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorName?: string;
  /**
   * Comment author user identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
  /**
   * Whether the comment author is verified.
   */
  authorVerified?: boolean;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Comment identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Like count.
   */
  likes?: number;
  /**
   * Plain comment text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  text?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Weibo Post Comments (weibo.post_comments).
 */
export interface WeiboPostCommentsData {
  /**
   * Normalized first-level comments. Populated whenever the provider has data for the entity.
   */
  comments: WeiboPostCommentsComment[];
  /**
   * Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Total comments reported by Weibo.
   */
  total: number;
}

/**
 * Input for Weibo Profile (weibo.profile).
 */
export interface WeiboProfileInput {
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
   * Weibo user identifier.
   */
  userId: string;
}

/**
 * The `data` payload of Weibo Profile (weibo.profile).
 */
export interface WeiboProfileData {
  /**
   * Profile biography.
   */
  bio?: string;
  /**
   * Custom Weibo username when configured.
   */
  customName?: string;
  /**
   * External profile URL.
   * Format: uri.
   */
  externalUrl?: string;
  /**
   * Follower count.
   */
  followers?: number;
  /**
   * Following count.
   */
  following?: number;
  /**
   * Gender code reported by Weibo.
   */
  gender?: string;
  /**
   * Profile image URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Profile location.
   */
  location?: string;
  /**
   * Display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  name?: string;
  /**
   * Published post count.
   */
  posts?: number;
  /**
   * User identifier. Populated whenever the provider has data for the entity.
   */
  userId: string;
  /**
   * Whether the account is verified.
   */
  verified?: boolean;
  /**
   * Verification reason.
   */
  verifiedReason?: string;
  [extra: string]: unknown;
}

/**
 * Input for Weibo Advanced Search (weibo.search).
 */
export interface WeiboSearchInput {
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
   * Media filter, such as all, pic, video, music, or link.
   */
  includeType?: string;
  /**
   * Page number starting at 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keyword.
   */
  query: string;
  /**
   * Search type, such as all, hot, original, verified, media, or viewpoint.
   */
  searchType?: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Custom time range in the API's custom:start:end format.
   */
  timeScope?: string;
}

export interface WeiboSearchPost {
  /**
   * Author avatar URL.
   * Format: uri.
   */
  authorImage?: string;
  /**
   * Author display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorName?: string;
  /**
   * Comment count.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Whether the result contains an image.
   */
  hasImage?: boolean;
  /**
   * Whether the result contains a video.
   */
  hasVideo?: boolean;
  /**
   * Post identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Like count.
   */
  likes?: number;
  /**
   * Repost count.
   */
  reposts?: number;
  /**
   * Post text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  text?: string;
  /**
   * Post type.
   */
  type?: string;
  /**
   * Canonical post URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Weibo Advanced Search (weibo.search).
 */
export interface WeiboSearchData {
  /**
   * Whether another result page is available.
   */
  hasMore: boolean;
  /**
   * Normalized Weibo search results. Populated whenever the provider has data for the entity.
   */
  posts: WeiboSearchPost[];
  /**
   * Result count reported for this page.
   */
  resultCount: number;
}

/**
 * Input for Weibo User Posts (weibo.user_posts).
 */
export interface WeiboUserPostsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Page number starting at 1.
   * Default: 1.
   */
  page?: number;
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
   * Weibo user identifier.
   */
  userId: string;
}

export interface WeiboUserPostsPost {
  /**
   * Author avatar URL.
   * Format: uri.
   */
  authorImage?: string;
  /**
   * Author display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorName?: string;
  /**
   * Author user identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
  /**
   * Whether the author is verified.
   */
  authorVerified?: boolean;
  /**
   * Comment count.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Post identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Post preview image URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Like count.
   */
  likes?: number;
  /**
   * Repost count.
   */
  reposts?: number;
  /**
   * Short Weibo post identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  shortId?: string;
  /**
   * Plain post text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  text?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Weibo User Posts (weibo.user_posts).
 */
export interface WeiboUserPostsData {
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Normalized Weibo posts. Populated whenever the provider has data for the entity.
   */
  posts: WeiboUserPostsPost[];
}

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
   * Price: $0.0018 per request.
   *
   * @example
   * const res = await client.weibo.hotSearch({});
   */
  hotSearch(
    input: WeiboHotSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<WeiboHotSearchData>> {
    return this._core.run("weibo.hot_search", input, options);
  }

  /**
   * Weibo Post
   *
   * Fetch a public Weibo post by ID with normalized author and engagement data.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.weibo.post({ postId: "5092682368025584", includeLongText: "true" });
   */
  post(
    input: WeiboPostInput,
    options?: RequestOptions,
  ): Promise<RunResult<WeiboPostData>> {
    return this._core.run("weibo.post", input, options);
  }

  /**
   * Weibo Post Comments
   *
   * List first-level comments on a public Weibo post with pagination.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.weibo.postComments({ postId: "5283919831764022", limit: 10 });
   */
  postComments(
    input: WeiboPostCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<WeiboPostCommentsData>> {
    return this._core.run("weibo.post_comments", input, options);
  }

  /**
   * Iterate every result of Weibo Post Comments across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterPostComments(
    input: WeiboPostCommentsInput,
    options?: RequestOptions,
  ): Paginator<WeiboPostCommentsComment, RunResult<WeiboPostCommentsData>> {
    return paginate<WeiboPostCommentsComment, RunResult<WeiboPostCommentsData>>(
      this._core,
      "weibo.post_comments",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

  /**
   * Weibo Profile
   *
   * Fetch a public Weibo profile by user ID with normalized audience and account data.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.weibo.profile({ userId: "1722594714" });
   */
  profile(
    input: WeiboProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<WeiboProfileData>> {
    return this._core.run("weibo.profile", input, options);
  }

  /**
   * Weibo Advanced Search
   *
   * Search public Weibo posts with optional result, media, and time filters.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.weibo.search({ query: "python", includeType: "pic", page: 1, searchType: "hot" });
   */
  search(
    input: WeiboSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<WeiboSearchData>> {
    return this._core.run("weibo.search", input, options);
  }

  /**
   * Weibo User Posts
   *
   * List public posts from a Weibo user with normalized author and engagement data.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.weibo.userPosts({ userId: "7277477906", feature: 3, page: 1 });
   */
  userPosts(
    input: WeiboUserPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<WeiboUserPostsData>> {
    return this._core.run("weibo.user_posts", input, options);
  }

  /**
   * Iterate every result of Weibo User Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserPosts(
    input: WeiboUserPostsInput,
    options?: RequestOptions,
  ): Paginator<WeiboUserPostsPost, RunResult<WeiboUserPostsData>> {
    return paginate<WeiboUserPostsPost, RunResult<WeiboUserPostsData>>(
      this._core,
      "weibo.user_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }
}
