// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for TikTok Ad Library Ad (tiktok.ad_library_ad).
 */
export interface TiktokAdLibraryAdInput {
  /**
   * TikTok Top Ads material/ad ID, or a Top Ads detail URL (e.g. 7648493525660270600).
   */
  adId: string;
}

/**
 * The `data` payload of TikTok Ad Library Ad (tiktok.ad_library_ad).
 */
export interface TiktokAdLibraryAdData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  adId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  adTitle: string;
  brandName: string;
  comments: number;
  cost: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  coverUrl: string;
  ctr: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  industry: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  landingPage: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  objective: string;
  shares: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  videoUrl: string;
  [extra: string]: unknown;
}

/**
 * Input for TikTok Ad Library Search (tiktok.ad_library_search).
 */
export interface TiktokAdLibrarySearchInput {
  /**
   * Ad format filter.
   * One of: spark_ads, non_spark_ads.
   */
  adFormat?: "spark_ads" | "non_spark_ads";
  /**
   * Ad language filter.
   * One of: en, es, ar, vi, th, de, id, pt, fr, ms, nl, ja, it, ro, zh-Hant, ko.
   */
  adLanguage?:
    | "en"
    | "es"
    | "ar"
    | "vi"
    | "th"
    | "de"
    | "id"
    | "pt"
    | "fr"
    | "ms"
    | "nl"
    | "ja"
    | "it"
    | "ro"
    | "zh-Hant"
    | "ko";
  /**
   * Filter to a specific advertiser by name (searches the public TikTok Ads Library by advertiser).
   */
  advertiserName?: string;
  /**
   * Page number for pagination (defaults to 1).
   */
  cursor?: string;
  /**
   * Video duration bucket filter.
   * One of: under_10s, 10_20s, 20_30s, 30_40s, 40_50s, over_50s.
   */
  duration?:
    "under_10s" | "10_20s" | "20_30s" | "30_40s" | "40_50s" | "over_50s";
  /**
   * Advertiser industry filter.
   * One of: apparel_accessories, appliances, apps, baby_kids_maternity, beauty_personal_care, business_services, ecommerce_non_app, education, financial_services, food_beverage, games, health, home_improvement, household_products, life_services, news_entertainment, pets, sports_outdoor, tech_electronics, travel, vehicle_transportation.
   */
  industry?:
    | "apparel_accessories"
    | "appliances"
    | "apps"
    | "baby_kids_maternity"
    | "beauty_personal_care"
    | "business_services"
    | "ecommerce_non_app"
    | "education"
    | "financial_services"
    | "food_beverage"
    | "games"
    | "health"
    | "home_improvement"
    | "household_products"
    | "life_services"
    | "news_entertainment"
    | "pets"
    | "sports_outdoor"
    | "tech_electronics"
    | "travel"
    | "vehicle_transportation";
  /**
   * Likes percentile bucket filter (top_1_20 is the top-performing 20 percent).
   * One of: top_1_20, top_21_40, top_41_60, top_61_80, top_81_100.
   */
  likes?: "top_1_20" | "top_21_40" | "top_41_60" | "top_61_80" | "top_81_100";
  /**
   * Results per page, with an existing maximum of 50 (default 20). Use a canonical JSON integer; legacy numeric strings remain accepted.
   */
  limit?: unknown;
  /**
   * Campaign objective filter.
   * One of: app_installs, conversions, lead_generation, product_sales, reach, traffic, video_views.
   */
  objective?:
    | "app_installs"
    | "conversions"
    | "lead_generation"
    | "product_sales"
    | "reach"
    | "traffic"
    | "video_views";
  /**
   * Sort metric: for_you, impression, play_2s_rate, play_6s_rate, cvr, ctr, or like.
   */
  orderBy?: string;
  /**
   * Time window for top ads. Use the canonical JSON integer 7, 30, or 180; legacy numeric strings remain accepted.
   */
  period?: unknown;
  /**
   * Keyword to search ad titles and content (e.g. spotify).
   */
  query: string;
  /**
   * Country code (defaults to US).
   */
  region?: string;
}

export interface TiktokAdLibrarySearchAd {
  /**
   * Populated whenever the provider has data for the entity.
   */
  adId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  adTitle: string;
  brandName: string;
  cost: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  coverUrl: string;
  ctr: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  industry: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  objective: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  videoUrl: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Ad Library Search (tiktok.ad_library_search).
 */
export interface TiktokAdLibrarySearchData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  ads: TiktokAdLibrarySearchAd[];
  hasMore: boolean;
  /**
   * Opaque cursor for the next page of ads, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  total: number;
}

/**
 * Input for TikTok Ad Transparency Search (tiktok.ad_transparency_search).
 */
export interface TiktokAdTransparencySearchInput {
  /**
   * TikTok Commercial Content Library advertiser ID. Provide advertiserId or query.
   */
  advertiserId?: string;
  /**
   * Search cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Number of days of Commercial Content Library history to search, from 1 to 365. Defaults to 30.
   * Range: minimum 1, maximum 365.
   * Default: 30.
   */
  days?: number;
  /**
   * Maximum number of ads to return, from 1 to 50. Defaults to 20. Billing is flat per request.
   * Range: minimum 1, maximum 50.
   * Default: 20.
   */
  limit?: number;
  /**
   * Zero-based result offset. Defaults to 0.
   * Range: minimum 0.
   * Default: 0.
   */
  offset?: number;
  /**
   * Keyword to search in TikTok's EU Commercial Content Library. Provide query or advertiserId.
   */
  query?: string;
  /**
   * Region code for the transparency search. Defaults to DE.
   * Default: DE.
   */
  region?: string;
  /**
   * Upstream sort expression. Defaults to last_shown_date,desc.
   * Default: last_shown_date,desc.
   */
  sort?: string;
}

export interface TiktokAdTransparencySearchAd {
  /**
   * Advertiser display name associated with the ad. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  advertiserName?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the ad was first shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  firstShownUtc?: number;
  /**
   * Commercial Content Library creative format code for the ad. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  format?: string;
  /**
   * TikTok Commercial Content Library ad identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Signed cover image URL exactly as returned by the Commercial Content Library. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the ad was last shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  lastShownUtc?: number;
  /**
   * Commercial Content Library audit status code for the ad. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  status?: string;
  /**
   * Signed video asset URL exactly as returned by the Commercial Content Library. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  videoUrl?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Ad Transparency Search (tiktok.ad_transparency_search).
 */
export interface TiktokAdTransparencySearchData {
  /**
   * Commercial Content Library ad records returned for the search. Populated whenever the provider has data for the entity.
   */
  ads: TiktokAdTransparencySearchAd[];
  /**
   * Whether the Commercial Content Library reports more matching ads. Populated whenever the provider has data for the entity.
   */
  hasMore: boolean;
  /**
   * Search cursor to pass as cursor on a subsequent request, or null when there is no next page. Populated whenever the provider has data for the entity.
   */
  nextCursor: string | null;
  /**
   * Zero-based result offset reported for this page.
   */
  offset: number;
  /**
   * Region code applied to this transparency search. Populated whenever the provider has data for the entity.
   */
  region: string;
  /**
   * Total number of matching ads reported by the Commercial Content Library. Populated whenever the provider has data for the entity.
   */
  total: number;
}

/**
 * Input for TikTok Audience Demographics (tiktok.audience_demographics).
 */
export interface TiktokAudienceDemographicsInput {
  /**
   * TikTok username without the leading @ (e.g. "shakira").
   */
  handle: string;
}

export interface TiktokAudienceDemographicsAudienceLocation {
  count: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  country: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  countryCode: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  percentage: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Audience Demographics (tiktok.audience_demographics).
 */
export interface TiktokAudienceDemographicsData {
  audienceLocations: TiktokAudienceDemographicsAudienceLocation[];
}

/**
 * Input for TikTok Comment Replies (tiktok.comment_replies).
 */
export interface TiktokCommentRepliesInput {
  /**
   * TikTok comment ID (the comment's cid from the comments endpoint).
   */
  commentId: string;
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * TikTok video URL the comment belongs to.
   */
  url: string;
}

export interface TiktokCommentRepliesComment {
  /**
   * Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Comment Replies (tiktok.comment_replies).
 */
export interface TiktokCommentRepliesData {
  comments: TiktokCommentRepliesComment[];
  /**
   * Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for TikTok Followers (tiktok.followers).
 */
export interface TiktokFollowersInput {
  /**
   * Pagination cursor from a previous response's nextCursor, to fetch the next page of followers.
   */
  cursor?: string;
  /**
   * TikTok username whose followers to list, without the @ prefix (e.g. stoolpresidente).
   */
  handle: string;
}

export interface TiktokFollowersFollower {
  avatarUrl: string;
  followerCount: number;
  followingCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  nickname: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  region: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  userId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Followers (tiktok.followers).
 */
export interface TiktokFollowersData {
  followers: TiktokFollowersFollower[];
  /**
   * Opaque cursor for the next page of followers, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  total: number;
}

/**
 * Input for TikTok Following (tiktok.following).
 */
export interface TiktokFollowingInput {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * TikTok username without the leading @ (e.g. "stoolpresidente").
   */
  handle: string;
}

export interface TiktokFollowingFollowing {
  bio: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  displayName: string;
  followers: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  region: string;
  videos: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Following (tiktok.following).
 */
export interface TiktokFollowingData {
  following: TiktokFollowingFollowing[];
}

/**
 * Input for TikTok Hashtag Videos (tiktok.hashtag_videos).
 */
export interface TiktokHashtagVideosInput {
  /**
   * TikTok hashtag to fetch videos for, without the # prefix (e.g. booktok).
   */
  hashtag: string;
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
}

export interface TiktokHashtagVideosItem {
  /**
   * Username of the video's creator, without the @ prefix. Empty when the upstream omits it.
   */
  authorHandle?: string;
  /**
   * Number of comments on the video.
   */
  commentCount?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * The video's numeric TikTok ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the video's cover/thumbnail image, with tracking query params stripped. Empty when the upstream omits it.
   */
  image?: string;
  /**
   * Number of likes on the video.
   */
  likeCount?: number;
  /**
   * Number of views/plays of the video.
   */
  playCount?: number;
  /**
   * Number of shares of the video.
   */
  shareCount?: number;
  /**
   * The video caption text. Empty for videos with no caption.
   */
  text?: string;
  /**
   * Canonical tiktok.com URL of the video, with tracking query params stripped. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Hashtag Videos (tiktok.hashtag_videos).
 */
export interface TiktokHashtagVideosData {
  /**
   * Recent TikTok video records for the hashtag. Populated whenever the provider has data for the entity.
   */
  items: TiktokHashtagVideosItem[];
}

/**
 * Input for TikTok Live (tiktok.live).
 */
export interface TiktokLiveInput {
  /**
   * TikTok username without the leading @ (e.g. "thejustalex").
   */
  handle: string;
}

/**
 * The `data` payload of TikTok Live (tiktok.live).
 */
export interface TiktokLiveData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  coverUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  displayName: string;
  enterCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  roomId: string;
  startTime: number;
  status: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  viewers: number;
  [extra: string]: unknown;
}

/**
 * Input for TikTok Profile (tiktok.profile).
 */
export interface TiktokProfileInput {
  /**
   * TikTok username without the leading @ (e.g. "stoolpresidente").
   */
  handle: string;
}

/**
 * The `data` payload of TikTok Profile (tiktok.profile).
 */
export interface TiktokProfileData {
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
  handle: string;
  likes: number;
  verified: boolean;
  videos: number;
  [extra: string]: unknown;
}

/**
 * Input for TikTok Profile Region (tiktok.profile_region).
 */
export interface TiktokProfileRegionInput {
  /**
   * TikTok username without the leading @ (e.g. "stoolpresidente").
   */
  handle: string;
}

/**
 * The `data` payload of TikTok Profile Region (tiktok.profile_region).
 */
export interface TiktokProfileRegionData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  profileUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  region: string;
  [extra: string]: unknown;
}

/**
 * Input for TikTok Profile Videos (tiktok.profile_videos).
 */
export interface TiktokProfileVideosInput {
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * TikTok username without the leading @.
   */
  handle: string;
}

export interface TiktokProfileVideosVideo {
  /**
   * Populated whenever the provider has data for the entity.
   */
  caption: string;
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the video's cover/thumbnail image. A signed, short-lived TikTok CDN URL (typically expires within about a day; query params are load-bearing and kept intact), often served as HEIC rather than JPEG, so fetch it promptly and transcode if you need broad browser support. Absent when the upstream provides no cover.
   */
  image?: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Profile Videos (tiktok.profile_videos).
 */
export interface TiktokProfileVideosData {
  /**
   * Opaque cursor for the next page of videos, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  videos: TiktokProfileVideosVideo[];
}

/**
 * Input for TikTok Hashtag Search (tiktok.search_hashtag).
 */
export interface TiktokSearchHashtagInput {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * Hashtag or keyword to search for (without the leading #).
   */
  query: string;
}

export interface TiktokSearchHashtagVideo {
  /**
   * Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  caption: string;
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  shares: number;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Hashtag Search (tiktok.search_hashtag).
 */
export interface TiktokSearchHashtagData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  videos: TiktokSearchHashtagVideo[];
}

/**
 * Input for TikTok Keyword Search (tiktok.search_keyword).
 */
export interface TiktokSearchKeywordInput {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * Time frame filter. Use a canonical JSON integer that is nonnegative; common values are 0 for any time, 1 for the past 24 hours, 7 for the past week, and 30 for the past month. Legacy numeric strings remain accepted.
   */
  datePosted?: unknown;
  /**
   * The keyword to search TikTok for.
   */
  query: string;
  /**
   * Sort order. Use the canonical JSON integer 0 for relevance or 1 for most liked; legacy numeric strings remain accepted.
   */
  sortBy?: unknown;
}

export interface TiktokSearchKeywordVideo {
  /**
   * Populated whenever the provider has data for the entity.
   */
  caption: string;
  comments: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  region: string;
  shares: number;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Keyword Search (tiktok.search_keyword).
 */
export interface TiktokSearchKeywordData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  videos: TiktokSearchKeywordVideo[];
}

/**
 * Input for TikTok Top Search (tiktok.search_top).
 */
export interface TiktokSearchTopInput {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * Time-frame filter: yesterday, this-week, this-month, last-3-months, last-6-months, all-time.
   */
  publishTime?: string;
  /**
   * Keyword to search for (e.g. "funny").
   */
  query: string;
  /**
   * 2-letter country code for the proxy location (e.g. US, GB, FR).
   */
  region?: string;
  /**
   * Sort order: relevance, most-liked, date-posted.
   */
  sortBy?: string;
}

export interface TiktokSearchTopItem {
  /**
   * Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  caption: string;
  comments: number;
  contentType: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  shares: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Top Search (tiktok.search_top).
 */
export interface TiktokSearchTopData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  items: TiktokSearchTopItem[];
  /**
   * Opaque cursor for the next page of results, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for TikTok User Search (tiktok.search_users).
 */
export interface TiktokSearchUsersInput {
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * The keyword to search TikTok accounts for.
   */
  query: string;
}

export interface TiktokSearchUsersUser {
  followers: number;
  following: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  nickname: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  userId: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok User Search (tiktok.search_users).
 */
export interface TiktokSearchUsersData {
  /**
   * Opaque cursor for the next page of users, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  users: TiktokSearchUsersUser[];
}

/**
 * Input for TikTok Song (tiktok.song).
 */
export interface TiktokSongInput {
  /**
   * The clip identifier for the song, found in TikTok music URLs (e.g. 7439295283975702544).
   */
  clipId: string;
}

/**
 * The `data` payload of TikTok Song (tiktok.song).
 */
export interface TiktokSongData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  album: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  coverUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  duration: number;
  isOriginal: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  shareUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  songId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  videoCount: number;
  [extra: string]: unknown;
}

/**
 * Input for TikTok Song Videos (tiktok.song_videos).
 */
export interface TiktokSongVideosInput {
  /**
   * The song ID found in TikTok music URLs (e.g. 7439295283975702544).
   */
  clipId: string;
  /**
   * Pagination cursor for retrieving the next page of results.
   */
  cursor?: string;
}

export interface TiktokSongVideosVideo {
  /**
   * Populated whenever the provider has data for the entity.
   */
  authorHandle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  authorName: string;
  commentCount: number;
  createTime: number;
  description: string;
  likeCount: number;
  playCount: number;
  shareCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  videoId: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Song Videos (tiktok.song_videos).
 */
export interface TiktokSongVideosData {
  hasMore: number;
  /**
   * Opaque cursor for the next page of videos, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  videos: TiktokSongVideosVideo[];
}

/**
 * Input for TikTok Top Ads Search (tiktok.top_ads_search).
 */
export interface TiktokTopAdsSearchInput {
  /**
   * Language code for returned ads (default en).
   * One of: en, es, ar, vi, th, de, id, pt, fr, ms, nl, ja, it, ro, zh-Hant, ko.
   * Default: en.
   */
  adLanguage?:
    | "en"
    | "es"
    | "ar"
    | "vi"
    | "th"
    | "de"
    | "id"
    | "pt"
    | "fr"
    | "ms"
    | "nl"
    | "ja"
    | "it"
    | "ro"
    | "zh-Hant"
    | "ko";
  /**
   * Maximum number of ads requested for this page, from 1 through 20 (default 20).
   * Range: minimum 1, maximum 20.
   * Default: 20.
   */
  limit?: number;
  /**
   * Campaign objective filter (default traffic).
   * One of: traffic, app_installs, conversions, video_views, reach, lead_generation, product_sales.
   * Default: traffic.
   */
  objective?:
    | "traffic"
    | "app_installs"
    | "conversions"
    | "video_views"
    | "reach"
    | "lead_generation"
    | "product_sales";
  /**
   * Result ordering: Creative Center recommendations or like count (default for_you).
   * One of: for_you, likes.
   * Default: for_you.
   */
  orderBy?: "for_you" | "likes";
  /**
   * One-based provider page number (default 1).
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Ad performance percentile bucket, where top_1_20 is the highest-performing 20 percent (default top_1_20).
   * One of: top_1_20, top_21_40, top_41_60, top_61_80.
   * Default: top_1_20.
   */
  performanceRank?: "top_1_20" | "top_21_40" | "top_41_60" | "top_61_80";
  /**
   * Lookback period in days (default 180).
   * Default: 180.
   */
  period?: number;
  /**
   * Keyword to search in TikTok Creative Center top video ads.
   */
  query: string;
  /**
   * Country code used to select the Creative Center market (default US).
   * Default: US.
   */
  region?: string;
}

export interface TiktokTopAdsSearchAd {
  /**
   * TikTok Creative Center ad material identifier. Populated whenever the provider has data for the entity.
   */
  adId: string;
  /**
   * Title or primary copy shown for the ad. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  adTitle?: string;
  /**
   * Advertiser brand name when supplied by TikTok Creative Center. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  brandName?: string;
  /**
   * TikTok Creative Center's relative cost ranking value for the ad. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cost?: number;
  /**
   * TikTok Creative Center's click-through rate value for the ad. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  ctr?: number;
  /**
   * Video duration in seconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  durationSeconds?: number;
  /**
   * Video height in pixels. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  height?: number;
  /**
   * Signed video cover image URL exactly as returned by TikTok Creative Center. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * TikTok Creative Center industry classification key. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  industry?: string;
  /**
   * Number of likes reported for the ad. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  likes?: number;
  /**
   * TikTok Creative Center campaign objective key. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  objective?: string;
  /**
   * Signed 720p video asset URL exactly as returned by TikTok Creative Center. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  videoUrl?: string;
  /**
   * Video width in pixels. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Top Ads Search (tiktok.top_ads_search).
 */
export interface TiktokTopAdsSearchData {
  /**
   * TikTok Creative Center top-ad records returned for this page. Populated whenever the provider has data for the entity.
   */
  ads: TiktokTopAdsSearchAd[];
  /**
   * Whether TikTok Creative Center reports another page of matching ads. Populated whenever the provider has data for the entity.
   */
  hasMore: boolean;
  /**
   * One-based page number reported by TikTok Creative Center. Populated whenever the provider has data for the entity.
   */
  page: number;
  /**
   * Page size reported by TikTok Creative Center. Populated whenever the provider has data for the entity.
   */
  pageSize: number;
  /**
   * Total number of matching top ads reported by TikTok Creative Center. Populated whenever the provider has data for the entity.
   */
  total: number;
}

/**
 * Input for TikTok Trending Feed (tiktok.trending_feed).
 */
export interface TiktokTrendingFeedInput {
  /**
   * 2-letter country code for the proxy location (e.g. "US").
   */
  region: string;
  /**
   * Set to true to return a simplified response.
   */
  trim?: string;
}

export interface TiktokTrendingFeedVideo {
  /**
   * Populated whenever the provider has data for the entity.
   */
  author: string;
  caption: string;
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  region: string;
  shares: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Trending Feed (tiktok.trending_feed).
 */
export interface TiktokTrendingFeedData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  videos: TiktokTrendingFeedVideo[];
}

/**
 * Input for TikTok Video (tiktok.video).
 */
export interface TiktokVideoInput {
  /**
   * Full TikTok video URL.
   */
  url: string;
}

/**
 * The `data` payload of TikTok Video (tiktok.video).
 */
export interface TiktokVideoData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  caption: string;
  comments: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the video's cover/thumbnail image. A signed, short-lived TikTok CDN URL (typically expires within about a day; query params are load-bearing and kept intact), often served as HEIC rather than JPEG, so fetch it promptly and transcode if you need broad browser support. Absent when the upstream provides no cover.
   */
  image?: string;
  likes: number;
  region: string;
  saves: number;
  shares: number;
  views: number;
  [extra: string]: unknown;
}

/**
 * Input for TikTok Video Comments (tiktok.video_comments).
 */
export interface TiktokVideoCommentsInput {
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Full TikTok video URL.
   */
  url: string;
}

export interface TiktokVideoCommentsComment {
  /**
   * Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  replies: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Video Comments (tiktok.video_comments).
 */
export interface TiktokVideoCommentsData {
  comments: TiktokVideoCommentsComment[];
  /**
   * Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for TikTok Video Transcript (tiktok.video_transcript).
 */
export interface TiktokVideoTranscriptInput {
  /**
   * Full TikTok video URL.
   */
  url: string;
}

/**
 * The `data` payload of TikTok Video Transcript (tiktok.video_transcript).
 */
export interface TiktokVideoTranscriptData {
  language: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  transcript: string;
  [extra: string]: unknown;
}

/**
 * Typed methods for the tiktok platform. Attached to the AnyAPI client as
 * `client.tiktok`.
 */
export class TiktokNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * TikTok Ad Library Ad
   *
   * Fetch full details for a single TikTok ad (brand, title, spend, CTR, objectives, landing page, and video info).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.tiktok.adLibraryAd({ adId: "7648493525660270600" });
   */
  adLibraryAd(
    input: TiktokAdLibraryAdInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokAdLibraryAdData>> {
    return this._core.run("tiktok.ad_library_ad", input, options);
  }

  /**
   * TikTok Ad Library Search
   *
   * Search TikTok's ad library by keyword (top ads with brand, title, spend, CTR, likes, and video info).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.adLibrarySearch({ query: "spotify", limit: 20, objective: "conversions", period: 30 });
   */
  adLibrarySearch(
    input: TiktokAdLibrarySearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokAdLibrarySearchData>> {
    return this._core.run("tiktok.ad_library_search", input, options);
  }

  /**
   * Iterate every result of TikTok Ad Library Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterAdLibrarySearch(
    input: TiktokAdLibrarySearchInput,
    options?: RequestOptions,
  ): Paginator<TiktokAdLibrarySearchAd, RunResult<TiktokAdLibrarySearchData>> {
    return paginate<
      TiktokAdLibrarySearchAd,
      RunResult<TiktokAdLibrarySearchData>
    >(
      this._core,
      "tiktok.ad_library_search",
      input as unknown as Record<string, unknown>,
      "ads",
      false,
      options,
    );
  }

  /**
   * TikTok Ad Transparency Search
   *
   * Search TikTok's EU Commercial Content Library by keyword or advertiser ID.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.tiktok.adTransparencySearch({ days: 30, limit: 20, query: "nike", region: "DE" });
   */
  adTransparencySearch(
    input: TiktokAdTransparencySearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokAdTransparencySearchData>> {
    return this._core.run("tiktok.ad_transparency_search", input, options);
  }

  /**
   * Iterate every result of TikTok Ad Transparency Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterAdTransparencySearch(
    input: TiktokAdTransparencySearchInput,
    options?: RequestOptions,
  ): Paginator<
    TiktokAdTransparencySearchAd,
    RunResult<TiktokAdTransparencySearchData>
  > {
    return paginate<
      TiktokAdTransparencySearchAd,
      RunResult<TiktokAdTransparencySearchData>
    >(
      this._core,
      "tiktok.ad_transparency_search",
      input as unknown as Record<string, unknown>,
      "ads",
      false,
      options,
    );
  }

  /**
   * TikTok Audience Demographics
   *
   * Get the audience country breakdown (follower count and share per country) for a TikTok creator by handle.
   *
   * Price: $0.018 per request.
   *
   * @example
   * const res = await client.tiktok.audienceDemographics({ handle: "shakira" });
   */
  audienceDemographics(
    input: TiktokAudienceDemographicsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokAudienceDemographicsData>> {
    return this._core.run("tiktok.audience_demographics", input, options);
  }

  /**
   * TikTok Comment Replies
   *
   * List the replies to a TikTok comment with cursor pagination (text, author, likes).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.commentReplies({ commentId: "7623828115408274207", url: "https://www.tiktok.com/@stoolpresidente/video/7623818255903329566" });
   */
  commentReplies(
    input: TiktokCommentRepliesInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokCommentRepliesData>> {
    return this._core.run("tiktok.comment_replies", input, options);
  }

  /**
   * Iterate every result of TikTok Comment Replies across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterCommentReplies(
    input: TiktokCommentRepliesInput,
    options?: RequestOptions,
  ): Paginator<
    TiktokCommentRepliesComment,
    RunResult<TiktokCommentRepliesData>
  > {
    return paginate<
      TiktokCommentRepliesComment,
      RunResult<TiktokCommentRepliesData>
    >(
      this._core,
      "tiktok.comment_replies",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

  /**
   * TikTok Followers
   *
   * List the followers of a TikTok account by username, returning each follower's profile basics.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.followers({ handle: "stoolpresidente" });
   */
  followers(
    input: TiktokFollowersInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokFollowersData>> {
    return this._core.run("tiktok.followers", input, options);
  }

  /**
   * Iterate every result of TikTok Followers across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterFollowers(
    input: TiktokFollowersInput,
    options?: RequestOptions,
  ): Paginator<TiktokFollowersFollower, RunResult<TiktokFollowersData>> {
    return paginate<TiktokFollowersFollower, RunResult<TiktokFollowersData>>(
      this._core,
      "tiktok.followers",
      input as unknown as Record<string, unknown>,
      "followers",
      false,
      options,
    );
  }

  /**
   * TikTok Following
   *
   * List the accounts a TikTok user follows (handle, display name, follower count, bio) by username.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.following({ handle: "stoolpresidente" });
   */
  following(
    input: TiktokFollowingInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokFollowingData>> {
    return this._core.run("tiktok.following", input, options);
  }

  /**
   * TikTok Hashtag Videos
   *
   * List recent TikTok videos for a hashtag (creator, caption, views, likes, shares).
   *
   * Price: $0.00144 per request.
   *
   * @example
   * const res = await client.tiktok.hashtagVideos({ hashtag: "cooking", limit: 3 });
   */
  hashtagVideos(
    input: TiktokHashtagVideosInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokHashtagVideosData>> {
    return this._core.run("tiktok.hashtag_videos", input, options);
  }

  /**
   * TikTok Live
   *
   * Check whether a TikTok creator is live and get the current live room (title, viewers, start time) by handle.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.live({ handle: "thejustalex" });
   */
  live(
    input: TiktokLiveInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokLiveData>> {
    return this._core.run("tiktok.live", input, options);
  }

  /**
   * TikTok Profile
   *
   * Fetch a TikTok creator's public profile (followers, likes, bio, verification) by handle.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.tiktok.profile({ handle: "zachking" });
   */
  profile(
    input: TiktokProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokProfileData>> {
    return this._core.run("tiktok.profile", input, options);
  }

  /**
   * TikTok Profile Region
   *
   * Resolve the home region (country) of a TikTok creator by handle.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.profileRegion({ handle: "stoolpresidente" });
   */
  profileRegion(
    input: TiktokProfileRegionInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokProfileRegionData>> {
    return this._core.run("tiktok.profile_region", input, options);
  }

  /**
   * TikTok Profile Videos
   *
   * List a TikTok creator's recent videos (views, likes, comments) by handle with cursor pagination.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.tiktok.profileVideos({ handle: "zachking" });
   */
  profileVideos(
    input: TiktokProfileVideosInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokProfileVideosData>> {
    return this._core.run("tiktok.profile_videos", input, options);
  }

  /**
   * Iterate every result of TikTok Profile Videos across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterProfileVideos(
    input: TiktokProfileVideosInput,
    options?: RequestOptions,
  ): Paginator<TiktokProfileVideosVideo, RunResult<TiktokProfileVideosData>> {
    return paginate<
      TiktokProfileVideosVideo,
      RunResult<TiktokProfileVideosData>
    >(
      this._core,
      "tiktok.profile_videos",
      input as unknown as Record<string, unknown>,
      "videos",
      false,
      options,
    );
  }

  /**
   * TikTok Hashtag Search
   *
   * Search TikTok by hashtag and get matching videos (caption, views, likes, comments, shares) as normalized JSON.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.searchHashtag({ query: "recipe" });
   */
  searchHashtag(
    input: TiktokSearchHashtagInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokSearchHashtagData>> {
    return this._core.run("tiktok.search_hashtag", input, options);
  }

  /**
   * TikTok Keyword Search
   *
   * Search TikTok by keyword and get matching videos (caption, views, likes, comments, shares) as normalized JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.tiktok.searchKeyword({ query: "cooking", datePosted: 0, sortBy: 0 });
   */
  searchKeyword(
    input: TiktokSearchKeywordInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokSearchKeywordData>> {
    return this._core.run("tiktok.search_keyword", input, options);
  }

  /**
   * TikTok Top Search
   *
   * Search TikTok's top results for a keyword (caption, views, likes, comments, shares) with cursor pagination.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.searchTop({ query: "funny" });
   */
  searchTop(
    input: TiktokSearchTopInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokSearchTopData>> {
    return this._core.run("tiktok.search_top", input, options);
  }

  /**
   * Iterate every result of TikTok Top Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearchTop(
    input: TiktokSearchTopInput,
    options?: RequestOptions,
  ): Paginator<TiktokSearchTopItem, RunResult<TiktokSearchTopData>> {
    return paginate<TiktokSearchTopItem, RunResult<TiktokSearchTopData>>(
      this._core,
      "tiktok.search_top",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }

  /**
   * TikTok User Search
   *
   * Search TikTok accounts by keyword (handle, nickname, follower count) with cursor pagination.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.tiktok.searchUsers({ query: "chef" });
   */
  searchUsers(
    input: TiktokSearchUsersInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokSearchUsersData>> {
    return this._core.run("tiktok.search_users", input, options);
  }

  /**
   * Iterate every result of TikTok User Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearchUsers(
    input: TiktokSearchUsersInput,
    options?: RequestOptions,
  ): Paginator<TiktokSearchUsersUser, RunResult<TiktokSearchUsersData>> {
    return paginate<TiktokSearchUsersUser, RunResult<TiktokSearchUsersData>>(
      this._core,
      "tiktok.search_users",
      input as unknown as Record<string, unknown>,
      "users",
      false,
      options,
    );
  }

  /**
   * TikTok Song
   *
   * Fetch details for a TikTok song or sound (title, author, duration, cover art, and how many videos use it).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.song({ clipId: "7439295283975702544" });
   */
  song(
    input: TiktokSongInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokSongData>> {
    return this._core.run("tiktok.song", input, options);
  }

  /**
   * TikTok Song Videos
   *
   * List TikTok videos that use a given song or sound (with descriptions, authors, and engagement stats).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.songVideos({ clipId: "7439295283975702544" });
   */
  songVideos(
    input: TiktokSongVideosInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokSongVideosData>> {
    return this._core.run("tiktok.song_videos", input, options);
  }

  /**
   * Iterate every result of TikTok Song Videos across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSongVideos(
    input: TiktokSongVideosInput,
    options?: RequestOptions,
  ): Paginator<TiktokSongVideosVideo, RunResult<TiktokSongVideosData>> {
    return paginate<TiktokSongVideosVideo, RunResult<TiktokSongVideosData>>(
      this._core,
      "tiktok.song_videos",
      input as unknown as Record<string, unknown>,
      "videos",
      false,
      options,
    );
  }

  /**
   * TikTok Top Ads Search
   *
   * Search TikTok Creative Center top video ads by keyword with explicit performance, objective, region, language, and time-window filters.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.tiktok.topAdsSearch({ query: "glasses" });
   */
  topAdsSearch(
    input: TiktokTopAdsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokTopAdsSearchData>> {
    return this._core.run("tiktok.top_ads_search", input, options);
  }

  /**
   * TikTok Trending Feed
   *
   * Get TikTok's trending feed for a region (caption, views, likes, comments, author) as normalized JSON.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.trendingFeed({ region: "US" });
   */
  trendingFeed(
    input: TiktokTrendingFeedInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokTrendingFeedData>> {
    return this._core.run("tiktok.trending_feed", input, options);
  }

  /**
   * TikTok Video
   *
   * Fetch a single TikTok video by URL with its caption and engagement counts (views, likes, comments, shares, saves).
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.tiktok.video({ url: "https://www.tiktok.com/@mrbeast/video/7654638524729216287?_r=1&u_code=elgjf3ff8cajhk&preview_pb=0&sharer_language=en&_d=elh6737j6kjl71&share_item_id=7654638524729216287&source=h5_m" });
   */
  video(
    input: TiktokVideoInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokVideoData>> {
    return this._core.run("tiktok.video", input, options);
  }

  /**
   * TikTok Video Comments
   *
   * List the comments on a TikTok video by URL with cursor pagination (text, author, likes, reply count).
   *
   * Price: $0.00144 per request.
   *
   * @example
   * const res = await client.tiktok.videoComments({ url: "https://www.tiktok.com/@zachking/video/7650468599424945422?_r=1&u_code=f0hj7d780760m9&preview_pb=0&sharer_language=en&_d=f0hj7blh067h71&share_item_id=7650468599424945422&source=h5_m" });
   */
  videoComments(
    input: TiktokVideoCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokVideoCommentsData>> {
    return this._core.run("tiktok.video_comments", input, options);
  }

  /**
   * Iterate every result of TikTok Video Comments across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterVideoComments(
    input: TiktokVideoCommentsInput,
    options?: RequestOptions,
  ): Paginator<TiktokVideoCommentsComment, RunResult<TiktokVideoCommentsData>> {
    return paginate<
      TiktokVideoCommentsComment,
      RunResult<TiktokVideoCommentsData>
    >(
      this._core,
      "tiktok.video_comments",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

  /**
   * TikTok Video Transcript
   *
   * Fetch the spoken-word transcript of a TikTok video by URL.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.videoTranscript({ url: "https://www.tiktok.com/@washingtonpost/video/7609177768793787679" });
   */
  videoTranscript(
    input: TiktokVideoTranscriptInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokVideoTranscriptData>> {
    return this._core.run("tiktok.video_transcript", input, options);
  }
}
