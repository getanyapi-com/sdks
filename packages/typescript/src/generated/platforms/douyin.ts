// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Douyin Profile (douyin.profile).
 */
export interface DouyinProfileInput {
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
   * Douyin sec_user_id for the public account.
   */
  secUserId: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

/**
 * The `data` payload of Douyin Profile (douyin.profile).
 */
export interface DouyinProfileData {
  /**
   * Profile biography.
   */
  bio?: string;
  /**
   * Follower count.
   */
  followers?: number;
  /**
   * Following count.
   */
  following?: number;
  /**
   * Profile image URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Total likes received.
   */
  likes?: number;
  /**
   * Display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  nickname?: string;
  /**
   * Published post count.
   */
  posts?: number;
  /**
   * Douyin sec_user_id. Populated whenever the provider has data for the entity.
   */
  secUserId: string;
  /**
   * Legacy numeric short ID.
   */
  shortId?: string;
  /**
   * Public Douyin handle when configured. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  uniqueId?: string;
  /**
   * Douyin user identifier. Populated whenever the provider has data for the entity.
   */
  userId: string;
  [extra: string]: unknown;
}

/**
 * Input for Douyin Video Search (douyin.search_videos).
 */
export interface DouyinSearchVideosInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Backtrace token returned by the previous page.
   */
  backtrace?: string;
  /**
   * Pagination cursor from the previous response; omit for the first page.
   * Range: minimum 0.
   */
  cursor?: number;
  /**
   * Duration filter in minutes: any, under 1, 1 to 5, or over 5.
   * One of: 0, 0-1, 1-5, 5-10000.
   * Default: 0.
   */
  duration?: "0" | "0-1" | "1-5" | "5-10000";
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
   * Publication window in days. Use the canonical JSON integer 0 for any time, 1 for one day, 7 for seven days, or 180 for 180 days; legacy numeric strings remain accepted.
   */
  publishedWithin?: unknown;
  /**
   * Keyword to search for.
   */
  query: string;
  /**
   * Search ID returned by the previous page.
   */
  searchId?: string;
  /**
   * Sort order. Use the canonical JSON integer 0 for comprehensive, 1 for most liked, or 2 for newest; legacy numeric strings remain accepted.
   */
  sort?: unknown;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface DouyinSearchVideosVideo {
  /**
   * Author's avatar image URL.
   */
  authorImage?: string;
  /**
   * Author display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorNickname?: string;
  /**
   * Author's Douyin handle (unique id).
   */
  authorUniqueId?: string;
  /**
   * Author user identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
  /**
   * Whether the author's account is verified.
   */
  authorVerified?: boolean;
  /**
   * Video caption. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  caption?: string;
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
   * Video duration in milliseconds.
   */
  durationMs?: number;
  /**
   * Pixel height of the video.
   */
  height?: number;
  /**
   * Video identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Cover image URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Like count.
   */
  likes?: number;
  /**
   * Two-letter region code the video was published from.
   */
  region?: string;
  /**
   * Save count.
   */
  saves?: number;
  /**
   * Share count.
   */
  shares?: number;
  /**
   * Canonical video URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  /**
   * Playable video URL. The query string carries required access parameters, so keep it intact.
   */
  videoUrl?: string;
  /**
   * Play count.
   */
  views?: number;
  /**
   * Pixel width of the video.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Douyin Video Search (douyin.search_videos).
 */
export interface DouyinSearchVideosData {
  /**
   * Backtrace token required for the next page.
   */
  backtrace: string;
  /**
   * Whether another page is available.
   */
  hasMore: boolean;
  /**
   * Opaque cursor for the next page of videos, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Search ID required for the next page.
   */
  searchId: string;
  /**
   * Normalized matching videos. Populated whenever the provider has data for the entity.
   */
  videos: DouyinSearchVideosVideo[];
}

/**
 * Input for Douyin User Posts (douyin.user_posts).
 */
export interface DouyinUserPostsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from the previous response; omit for the first page.
   */
  cursor?: number;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Requested page size. Values up to 20 are recommended.
   * Default: 20.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Douyin sec_user_id for the public account.
   */
  secUserId: string;
  /**
   * Post order. Use the canonical JSON integer 0 for newest or 1 for most popular; legacy numeric strings remain accepted.
   */
  sort?: unknown;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface DouyinUserPostsPost {
  /**
   * Author's avatar image URL.
   */
  authorImage?: string;
  /**
   * Author display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorNickname?: string;
  /**
   * Author sec_user_id. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorSecUserId?: string;
  /**
   * Author's Douyin handle (unique id).
   */
  authorUniqueId?: string;
  /**
   * Author user identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
  /**
   * Whether the author's account is verified.
   */
  authorVerified?: boolean;
  /**
   * Post caption. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  caption?: string;
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
   * Media duration in milliseconds.
   */
  durationMs?: number;
  /**
   * Pixel height of the media.
   */
  height?: number;
  /**
   * Post identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Cover image URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Like count.
   */
  likes?: number;
  /**
   * Two-letter region code the post was published from.
   */
  region?: string;
  /**
   * Save count.
   */
  saves?: number;
  /**
   * Share count.
   */
  shares?: number;
  /**
   * Canonical post URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  /**
   * Play count.
   */
  views?: number;
  /**
   * Pixel width of the media.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Douyin User Posts (douyin.user_posts).
 */
export interface DouyinUserPostsData {
  /**
   * Whether another page is available.
   */
  hasMore: boolean;
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Normalized Douyin posts. Populated whenever the provider has data for the entity.
   */
  posts: DouyinUserPostsPost[];
}

/**
 * Input for Douyin Video (douyin.video).
 */
export interface DouyinVideoInput {
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
   * Public Douyin video share URL.
   * Format: uri.
   */
  url: string;
}

/**
 * The `data` payload of Douyin Video (douyin.video).
 */
export interface DouyinVideoData {
  /**
   * Author's avatar image URL.
   */
  authorImage?: string;
  /**
   * Author display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorNickname?: string;
  /**
   * Author sec_user_id. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorSecUserId?: string;
  /**
   * Author's Douyin handle (unique id).
   */
  authorUniqueId?: string;
  /**
   * Author user identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
  /**
   * Whether the author's account is verified.
   */
  authorVerified?: boolean;
  /**
   * Video caption. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  caption?: string;
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
   * Video duration in milliseconds.
   */
  durationMs?: number;
  /**
   * Pixel height of the video.
   */
  height?: number;
  /**
   * Video identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Video cover image URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Like count.
   */
  likes?: number;
  /**
   * Two-letter region code the video was published from.
   */
  region?: string;
  /**
   * Save count.
   */
  saves?: number;
  /**
   * Share count.
   */
  shares?: number;
  /**
   * Canonical Douyin video URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  /**
   * Playable video URL. The query string carries required access parameters, so keep it intact.
   */
  videoUrl?: string;
  /**
   * Play count.
   */
  views?: number;
  /**
   * Pixel width of the video.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * Input for Douyin Video Comments (douyin.video_comments).
 */
export interface DouyinVideoCommentsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from the previous response; omit for the first page.
   * Range: minimum 0.
   */
  cursor?: number;
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
   * Douyin aweme_id for the video.
   */
  videoId: string;
}

export interface DouyinVideoCommentsComment {
  /**
   * Author profile image URL.
   * Format: uri.
   */
  authorImage?: string;
  /**
   * Author display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorNickname?: string;
  /**
   * Author sec_user_id. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorSecUserId?: string;
  /**
   * Author public handle.
   */
  authorUniqueId?: string;
  /**
   * Author user identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
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
   * Approximate location label shown by Douyin.
   */
  ipLabel?: string;
  /**
   * Comment like count.
   */
  likes?: number;
  /**
   * Direct reply count.
   */
  replyCount?: number;
  /**
   * Comment text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  text?: string;
  /**
   * Commented video identifier. Populated whenever the provider has data for the entity.
   */
  videoId: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Douyin Video Comments (douyin.video_comments).
 */
export interface DouyinVideoCommentsData {
  /**
   * Normalized video comments. Populated whenever the provider has data for the entity.
   */
  comments: DouyinVideoCommentsComment[];
  /**
   * Whether another page is available.
   */
  hasMore: boolean;
  /**
   * Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Total comment count reported by Douyin.
   */
  total: number;
}

/**
 * Typed methods for the douyin platform. Attached to the AnyAPI client as
 * `client.douyin`.
 */
export class DouyinNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Douyin Profile
   *
   * Look up a public Douyin profile by sec_user_id and return normalized profile statistics.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.douyin.profile({ secUserId: "MS4wLjABAAAAW9FWcqS7RdQAWPd2AA5fL_ilmqsIFUCQ_Iym6Yh9_cUa6ZRqVLjVQSUjlHrfXY1Y" });
   */
  profile(
    input: DouyinProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<DouyinProfileData>> {
    return this._core.run("douyin.profile", input, options);
  }

  /**
   * Douyin Video Search
   *
   * Search public Douyin videos by keyword with sorting, time, duration, and content filters.
   *
   * Price: $0.012 per request.
   *
   * @example
   * const res = await client.douyin.searchVideos({ query: "机器人", duration: "0", publishedWithin: 0, sort: 0 });
   */
  searchVideos(
    input: DouyinSearchVideosInput,
    options?: RequestOptions,
  ): Promise<RunResult<DouyinSearchVideosData>> {
    return this._core.run("douyin.search_videos", input, options);
  }

  /**
   * Douyin User Posts
   *
   * List public posts from a Douyin user with normalized engagement data and pagination.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.douyin.userPosts({ secUserId: "MS4wLjABAAAANXSltcLCzDGmdNFI2Q_QixVTr67NiYzjKOIP5s03CAE", limit: 20, sort: 0 });
   */
  userPosts(
    input: DouyinUserPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<DouyinUserPostsData>> {
    return this._core.run("douyin.user_posts", input, options);
  }

  /**
   * Douyin Video
   *
   * Fetch a public Douyin video by share URL with normalized author and engagement data.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.douyin.video({ url: "https://www.douyin.com/video/6894784055775071503" });
   */
  video(
    input: DouyinVideoInput,
    options?: RequestOptions,
  ): Promise<RunResult<DouyinVideoData>> {
    return this._core.run("douyin.video", input, options);
  }

  /**
   * Douyin Video Comments
   *
   * List public comments on a Douyin video with author and engagement data.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.douyin.videoComments({ videoId: "7448118827402972455" });
   */
  videoComments(
    input: DouyinVideoCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<DouyinVideoCommentsData>> {
    return this._core.run("douyin.video_comments", input, options);
  }
}
