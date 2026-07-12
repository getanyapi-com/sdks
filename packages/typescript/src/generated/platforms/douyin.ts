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
   * Douyin sec_user_id for the public account.
   */
  secUserId: string;
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
   * Publication window in days: 0 any time, 1 day, 7 days, or 180 days.
   * One of: 0, 1, 7, 180.
   * Default: 0.
   */
  publishedWithin?: "0" | "1" | "7" | "180";
  /**
   * Keyword to search for.
   */
  query: string;
  /**
   * Search ID returned by the previous page.
   */
  searchId?: string;
  /**
   * Sort order: 0 comprehensive, 1 most liked, or 2 newest.
   * One of: 0, 1, 2.
   * Default: 0.
   */
  sort?: "0" | "1" | "2";
}

export interface DouyinSearchVideosVideo {
  /**
   * Author display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorNickname?: string;
  /**
   * Author user identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
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
   * Play count.
   */
  views?: number;
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
   * Cursor for the next page.
   */
  nextCursor: string;
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
   * Pagination cursor from the previous response; omit for the first page.
   */
  cursor?: number;
  /**
   * Requested page size. Values up to 20 are recommended.
   * Default: 20.
   */
  limit?: number;
  /**
   * Douyin sec_user_id for the public account.
   */
  secUserId: string;
  /**
   * Post order: 0 for newest or 1 for most popular.
   * Default: 0.
   */
  sort?: number;
}

export interface DouyinUserPostsPost {
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
   * Author user identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
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
   * Cursor for the next page; empty when unavailable.
   */
  nextCursor: string;
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
   * Author user identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
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
   * Play count.
   */
  views?: number;
  [extra: string]: unknown;
}

/**
 * Input for Douyin Video Comments (douyin.video_comments).
 */
export interface DouyinVideoCommentsInput {
  /**
   * Pagination cursor from the previous response; omit for the first page.
   * Range: minimum 0.
   */
  cursor?: number;
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
   * Cursor for the next page.
   */
  nextCursor: string;
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

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
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

**Price:** \$10.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.01 per request.
   *
   * @example
   * const res = await client.douyin.searchVideos({ query: "机器人", duration: "0", publishedWithin: "0", sort: "0" });
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

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
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

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
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

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
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
