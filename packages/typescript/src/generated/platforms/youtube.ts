// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for YouTube Channel (youtube.channel).
 */
export interface YoutubeChannelInput {
  /**
   * YouTube channel ID (UC...).
   */
  channelId?: string;
  /**
   * YouTube channel handle.
   */
  handle?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

/**
 * The `data` payload of YouTube Channel (youtube.channel).
 */
export interface YoutubeChannelData {
  avatarUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  channelId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  description: string;
  subscribers: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  videos: number;
  views: number;
  [extra: string]: unknown;
}

/**
 * Input for YouTube Channel Community Posts (youtube.channel_community_posts).
 */
export interface YoutubeChannelCommunityPostsInput {
  /**
   * YouTube channel ID.
   */
  channelId?: string;
  /**
   * Continuation token from a previous response for pagination.
   */
  cursor?: string;
  /**
   * YouTube channel handle.
   */
  handle?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface YoutubeChannelCommunityPostsPost {
  /**
   * Populated whenever the provider has data for the entity.
   */
  content: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  image: string;
  likeCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  publishedTime: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Channel Community Posts (youtube.channel_community_posts).
 */
export interface YoutubeChannelCommunityPostsData {
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  posts: YoutubeChannelCommunityPostsPost[];
}

/**
 * Input for YouTube Channel Contact Email (youtube.channel_contact).
 */
export interface YoutubeChannelContactInput {
  /**
   * YouTube channel ID (UC...).
   */
  channelId?: string;
  /**
   * YouTube channel handle, with or without the leading @.
   */
  handle?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

/**
 * The `data` payload of YouTube Channel Contact Email (youtube.channel_contact).
 */
export interface YoutubeChannelContactData {
  /**
   * The business inquiry email the creator published on the channel's About tab, as YouTube reveals it behind the View email address button. This is the address YouTube gates behind a signed-in session, so it is often different from any address written into the channel description.
   */
  email: string;
  [extra: string]: unknown;
}

/**
 * Input for YouTube Channel Live Streams (youtube.channel_lives).
 */
export interface YoutubeChannelLivesInput {
  /**
   * YouTube channel ID.
   */
  channelId?: string;
  /**
   * Continuation token from a previous response for pagination.
   */
  cursor?: string;
  /**
   * YouTube channel handle.
   */
  handle?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface YoutubeChannelLivesLive {
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  lengthText: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  publishedTime: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Channel Live Streams (youtube.channel_lives).
 */
export interface YoutubeChannelLivesData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  lives: YoutubeChannelLivesLive[];
  /**
   * Opaque cursor for the next page of live streams, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for YouTube Channel Playlists (youtube.channel_playlists).
 */
export interface YoutubeChannelPlaylistsInput {
  /**
   * YouTube channel ID.
   */
  channelId?: string;
  /**
   * Continuation token from a previous response for pagination.
   */
  cursor?: string;
  /**
   * YouTube channel handle.
   */
  handle?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface YoutubeChannelPlaylistsPlaylist {
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  playlistUrl: string;
  thumbnail: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  videoCount: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Channel Playlists (youtube.channel_playlists).
 */
export interface YoutubeChannelPlaylistsData {
  /**
   * Opaque cursor for the next page of playlists, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  playlists: YoutubeChannelPlaylistsPlaylist[];
}

/**
 * Input for YouTube Channel Shorts (youtube.channel_shorts).
 */
export interface YoutubeChannelShortsInput {
  /**
   * YouTube channel ID beginning with UC.
   */
  channelId?: string;
  /**
   * Continuation token from a previous response.
   */
  cursor?: string;
  /**
   * YouTube channel handle, including or omitting the leading @.
   */
  handle?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Sort order for the Shorts feed. latest and newest are equivalent.
   * One of: latest, newest, popular.
   */
  sort?: "latest" | "newest" | "popular";
}

export interface YoutubeChannelShortsShort {
  /**
   * Explicit normalized provenance that this item came from a dedicated Shorts feed.
   * One of: short.
   */
  contentType: "short";
  /**
   * UTC epoch timestamp in seconds when supplied by the upstream response.
   */
  createdUtc?: number;
  /**
   * Published duration when supplied by the upstream response.
   */
  duration: string;
  /**
   * Unique YouTube video identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Public like count when supplied by the upstream response.
   * Range: minimum 0.
   */
  likes: number;
  /**
   * Public title or caption for the Short. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  title?: string;
  /**
   * Public YouTube URL for the Short. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * Public view count when supplied by the upstream response.
   * Range: minimum 0.
   */
  views: number;
  /**
   * Whether views is backed by a public count in the upstream response.
   */
  viewsAvailable: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Channel Shorts (youtube.channel_shorts).
 */
export interface YoutubeChannelShortsData {
  /**
   * Opaque cursor for the next Shorts page, or null when no next page is available.
   */
  nextCursor: string | null;
  /**
   * Short-form videos returned by the provider's dedicated YouTube Shorts endpoint. Populated whenever the provider has data for the entity.
   */
  shorts: YoutubeChannelShortsShort[];
}

/**
 * Input for YouTube Channel Videos (youtube.channel_videos).
 */
export interface YoutubeChannelVideosInput {
  /**
   * YouTube channel ID.
   */
  channelId?: string;
  /**
   * Continuation token from a previous response for pagination.
   */
  cursor?: string;
  /**
   * YouTube channel handle.
   */
  handle?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Sort order.
   * One of: latest, popular.
   */
  sort?: "latest" | "popular";
}

export interface YoutubeChannelVideosVideo {
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  lengthText: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  publishedTime: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Channel Videos (youtube.channel_videos).
 */
export interface YoutubeChannelVideosData {
  /**
   * Opaque cursor for the next page of videos, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  videos: YoutubeChannelVideosVideo[];
}

/**
 * Input for YouTube Comment Replies (youtube.comment_replies).
 */
export interface YoutubeCommentRepliesInput {
  /**
   * Replies continuation token from the comments endpoint, or the continuationToken from a previous replies response for further pagination.
   */
  continuationToken: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface YoutubeCommentRepliesComment {
  /**
   * Populated whenever the provider has data for the entity.
   */
  authorName: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  content: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  publishedTime: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Comment Replies (youtube.comment_replies).
 */
export interface YoutubeCommentRepliesData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  comments: YoutubeCommentRepliesComment[];
  nextCursor: string;
}

/**
 * Input for YouTube Community Post (youtube.community_post).
 */
export interface YoutubeCommunityPostInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * URL of the YouTube community post.
   */
  url: string;
}

/**
 * The `data` payload of YouTube Community Post (youtube.community_post).
 */
export interface YoutubeCommunityPostData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  channelHandle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  channelTitle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  content: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  publishedTime: string;
  [extra: string]: unknown;
}

/**
 * Input for YouTube Playlist (youtube.playlist).
 */
export interface YoutubePlaylistInput {
  /**
   * The playlist ID: the "list" parameter in a playlist URL (e.g. "PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi").
   */
  playlistId: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface YoutubePlaylistVideo {
  /**
   * Populated whenever the provider has data for the entity.
   */
  channel: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  lengthSeconds: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  lengthText: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  thumbnail: string;
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Playlist (youtube.playlist).
 */
export interface YoutubePlaylistData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  owner: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  totalVideos: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  videos: YoutubePlaylistVideo[];
}

/**
 * Input for YouTube Search (youtube.search).
 */
export interface YoutubeSearchInput {
  /**
   * Continuation token from a previous response for pagination.
   */
  cursor?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The YouTube search query.
   */
  query: string;
  /**
   * Deprecated; send `requireFields: ["nextCursor"]` instead, which does exactly the same thing. Set true if you intend to page through results, so the request is only served by a source that can return a nextCursor. Omit it and routing is unchanged, with the cheapest source serving. This can raise your price: when the cheapest source cannot page, a source that can serves, and you are quoted and charged its price. It stays accepted so callers that already send it keep working.
   */
  requireCursor?: boolean;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `nextCursor`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a result that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. On a paginated walk it applies to the first page only; later pages stay with the source that page chose, at the price it was quoted.
   */
  requireFields?: ("lengthText" | "nextCursor" | "views")[];
  /**
   * Sort order: "relevance" (default) or "popular" (most-viewed).
   * One of: relevance, popular.
   * Default: relevance.
   */
  sortBy?: "relevance" | "popular";
  /**
   * Filter by upload recency. Omit for any time.
   * One of: today, this_week, this_month, this_year.
   */
  uploadDate?: "today" | "this_week" | "this_month" | "this_year";
}

export interface YoutubeSearchVideo {
  /**
   * Populated whenever the provider has data for the entity.
   */
  channel: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  lengthText: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  publishedTime: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Search (youtube.search).
 */
export interface YoutubeSearchData {
  /**
   * Opaque cursor for the next page of results, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  videos: YoutubeSearchVideo[];
}

/**
 * Input for YouTube Hashtag Search (youtube.search_hashtag).
 */
export interface YoutubeSearchHashtagInput {
  /**
   * Continuation token from a previous response for pagination.
   */
  cursor?: string;
  /**
   * Hashtag to search for (without the leading #).
   */
  hashtag: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Content filter. Only "all" is served: no source we buy returns a Shorts row with the channel and publish time this endpoint requires.
   * One of: all.
   */
  type?: "all";
}

export interface YoutubeSearchHashtagVideo {
  /**
   * Populated whenever the provider has data for the entity.
   */
  channelTitle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  lengthText: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  publishedTime: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Hashtag Search (youtube.search_hashtag).
 */
export interface YoutubeSearchHashtagData {
  /**
   * Opaque cursor for the next page of videos, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  videos: YoutubeSearchHashtagVideo[];
}

/**
 * Input for YouTube Shorts Search (youtube.search_shorts).
 */
export interface YoutubeSearchShortsInput {
  /**
   * Continuation token from a previous response for pagination.
   */
  cursor?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The keyword to search Shorts for.
   */
  query: string;
  /**
   * Sort order: "relevance" (default) or "popular" (most-viewed).
   * One of: relevance, popular.
   * Default: relevance.
   */
  sortBy?: "relevance" | "popular";
  /**
   * Filter by upload recency. Omit for any time.
   * One of: today, this_week, this_month, this_year.
   */
  uploadDate?: "today" | "this_week" | "this_month" | "this_year";
}

export interface YoutubeSearchShortsShort {
  /**
   * Always "short": every row here comes from YouTube's Shorts shelf.
   */
  contentType: string;
  /**
   * YouTube video id of the Short. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Title of the Short. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Watch URL for the Short. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * View count, or 0 when the source did not publish one. Read viewsAvailable before trusting a 0.
   */
  views: number;
  /**
   * False when the source published no view count, so views is a placeholder rather than a measured zero.
   */
  viewsAvailable: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Shorts Search (youtube.search_shorts).
 */
export interface YoutubeSearchShortsData {
  /**
   * Opaque cursor for the next page of results, or null when there are no more. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  shorts: YoutubeSearchShortsShort[];
}

/**
 * Input for YouTube Trending Shorts (youtube.trending_shorts).
 */
export interface YoutubeTrendingShortsInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface YoutubeTrendingShortsShort {
  /**
   * Populated whenever the provider has data for the entity.
   */
  channelTitle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  duration: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Trending Shorts (youtube.trending_shorts).
 */
export interface YoutubeTrendingShortsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  shorts: YoutubeTrendingShortsShort[];
}

/**
 * Input for YouTube Video (youtube.video).
 */
export interface YoutubeVideoInput {
  /**
   * YouTube video ID. A Short uses the same ID as any other video.
   */
  id?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Full YouTube video URL. Shorts (youtube.com/shorts/...), youtu.be, live, and embed URLs all work.
   */
  url?: string;
}

/**
 * The `data` payload of YouTube Video (youtube.video).
 */
export interface YoutubeVideoData {
  /**
   * Name of the channel that published the video. Populated whenever the provider has data for the entity.
   */
  channel: string;
  /**
   * Number of comments.
   */
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Duration of the video in milliseconds.
   */
  durationMs: number;
  /**
   * Unique identifier of the video. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of likes.
   */
  likes: number;
  /**
   * Title of the video. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Number of views.
   */
  views: number;
  [extra: string]: unknown;
}

/**
 * Input for YouTube Video Comments (youtube.video_comments).
 */
export interface YoutubeVideoCommentsInput {
  /**
   * Continuation token from a previous response for pagination.
   */
  cursor?: string;
  /**
   * Comment order (e.g. top, newest).
   */
  order?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Full YouTube video URL. Shorts (youtube.com/shorts/...) and youtu.be URLs also work.
   */
  url: string;
}

export interface YoutubeVideoCommentsComment {
  /**
   * Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  publishedTime: string;
  replies: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Video Comments (youtube.video_comments).
 */
export interface YoutubeVideoCommentsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  comments: YoutubeVideoCommentsComment[];
  /**
   * Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for YouTube Video Sponsors (youtube.video_sponsors).
 */
export interface YoutubeVideoSponsorsInput {
  /**
   * 2-letter language code for transcript lookup (e.g. en, es, fr).
   */
  language?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * YouTube video or Short URL.
   */
  url: string;
}

export interface YoutubeVideoSponsorsSuspectedSponsor {
  confidence: string;
  name: string;
  website: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Video Sponsors (youtube.video_sponsors).
 */
export interface YoutubeVideoSponsorsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  detectionStatus: string;
  isPaidPromotion: boolean;
  suspectedSponsors: YoutubeVideoSponsorsSuspectedSponsor[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  videoId: string;
}

/**
 * Input for YouTube Video Transcript (youtube.video_transcript).
 */
export interface YoutubeVideoTranscriptInput {
  /**
   * YouTube video ID. A Short uses the same ID as any other video.
   */
  id?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Full YouTube video URL. Shorts (youtube.com/shorts/...), youtu.be, live, and embed URLs all work.
   */
  url?: string;
}

export interface YoutubeVideoTranscriptSegment {
  /**
   * Segment duration in seconds.
   * Range: minimum 0.
   */
  durationSeconds: number;
  /**
   * Segment start offset in seconds.
   * Range: minimum 0.
   */
  startSeconds: number;
  /**
   * Text of this transcript segment.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Video Transcript (youtube.video_transcript).
 */
export interface YoutubeVideoTranscriptData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  language: string;
  /**
   * Timed transcript segments in source order when the serving lane supplies caption timing.
   */
  segments?: YoutubeVideoTranscriptSegment[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  transcript: string;
  [extra: string]: unknown;
}

/**
 * Input for YouTube Video Transcript (Provenance) (youtube.video_transcript_full).
 */
export interface YoutubeVideoTranscriptFullInput {
  /**
   * Which caption track to accept: "manual" only creator-written captions, "automatic" only YouTube's speech recognition, "any" whichever exists.
   * One of: manual, automatic, any.
   * Default: any.
   */
  captionKind?: "manual" | "automatic" | "any";
  /**
   * Preferred caption language code (e.g. "en", "es"). Defaults to English.
   */
  language?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `isAiGenerated`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a transcript that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "channel"
    | "durationSeconds"
    | "endSeconds"
    | "isAiGenerated"
    | "startSeconds"
    | "text"
    | "title"
  )[];
  /**
   * YouTube video or Short URL (e.g. "https://www.youtube.com/watch?v=dQw4w9WgXcQ" or "https://www.youtube.com/shorts/Fir1x9cw2vg").
   */
  url: string;
}

export interface YoutubeVideoTranscriptFullSegment {
  /**
   * Segment end offset in seconds.
   * Range: minimum 0.
   */
  endSeconds: number;
  /**
   * Segment start offset in seconds.
   * Range: minimum 0.
   */
  startSeconds: number;
  /**
   * Text of this transcript segment.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Video Transcript (Provenance) (youtube.video_transcript_full).
 */
export interface YoutubeVideoTranscriptFullData {
  /**
   * Channel name that published the video.
   */
  channel?: string;
  /**
   * Video duration in seconds.
   * Range: minimum 0.
   */
  durationSeconds?: number;
  /**
   * True when the words were recognized from the audio by the serving lane rather than read from any YouTube caption track, or null when the serving source does not say.
   */
  isAiGenerated?: boolean | null;
  /**
   * True when YouTube generated the caption track by speech recognition rather than the creator supplying it. Automatic captions carry recognition errors, especially on names and jargon. Populated whenever the provider has data for the entity.
   */
  isAutoGenerated: boolean;
  /**
   * Caption language code (e.g. "en"). Populated whenever the provider has data for the entity.
   */
  language: string;
  /**
   * Timed transcript segments in playback order. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  segments?: YoutubeVideoTranscriptFullSegment[];
  /**
   * Video title.
   */
  title?: string;
  /**
   * Full transcript text, segments joined in playback order. Populated whenever the provider has data for the entity.
   */
  transcript: string;
  [extra: string]: unknown;
}

/**
 * Typed methods for the youtube platform. Attached to the AnyAPI client as
 * `client.youtube`.
 */
export class YoutubeNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * YouTube Channel
   *
   * Fetch a YouTube channel's stats (subscribers, video count, total views, description) by handle or channel ID.
   *
   * Price: $0.0005 per request.
   *
   * @example
   * const res = await client.youtube.channel({ handle: "@mkbhd" });
   */
  channel(
    input: YoutubeChannelInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeChannelData>> {
    return this._core.run("youtube.channel", input, options);
  }

  /**
   * YouTube Channel Community Posts
   *
   * List a YouTube channel's community posts by handle or channel ID with cursor pagination (text, likes, image, publish time).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.youtube.channelCommunityPosts({ handle: "@MrBeast" });
   */
  channelCommunityPosts(
    input: YoutubeChannelCommunityPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeChannelCommunityPostsData>> {
    return this._core.run("youtube.channel_community_posts", input, options);
  }

  /**
   * Iterate every result of YouTube Channel Community Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterChannelCommunityPosts(
    input: YoutubeChannelCommunityPostsInput,
    options?: RequestOptions,
  ): Paginator<
    YoutubeChannelCommunityPostsPost,
    RunResult<YoutubeChannelCommunityPostsData>
  > {
    return paginate<
      YoutubeChannelCommunityPostsPost,
      RunResult<YoutubeChannelCommunityPostsData>
    >(
      this._core,
      "youtube.channel_community_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * YouTube Channel Contact Email
   *
   * Reveal the business inquiry email a YouTube creator publishes behind the channel's View email address button. YouTube gates that address behind a signed-in Google session and a CAPTCHA, so it is absent from the channel page a logged-out scraper reads.
   *
   * Price: $0.0718 per request plus $0 per result (maximum $0.0718).
   *
   * @example
   * const res = await client.youtube.channelContact({ handle: "@mkbhd" });
   */
  channelContact(
    input: YoutubeChannelContactInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeChannelContactData>> {
    return this._core.run("youtube.channel_contact", input, options);
  }

  /**
   * YouTube Channel Live Streams
   *
   * List a YouTube channel's live and past-live streams by handle or channel ID with cursor pagination (title, views, length, publish time).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.youtube.channelLives({ handle: "@IShowSpeed" });
   */
  channelLives(
    input: YoutubeChannelLivesInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeChannelLivesData>> {
    return this._core.run("youtube.channel_lives", input, options);
  }

  /**
   * Iterate every result of YouTube Channel Live Streams across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterChannelLives(
    input: YoutubeChannelLivesInput,
    options?: RequestOptions,
  ): Paginator<YoutubeChannelLivesLive, RunResult<YoutubeChannelLivesData>> {
    return paginate<
      YoutubeChannelLivesLive,
      RunResult<YoutubeChannelLivesData>
    >(
      this._core,
      "youtube.channel_lives",
      input as unknown as Record<string, unknown>,
      "lives",
      false,
      options,
    );
  }

  /**
   * YouTube Channel Playlists
   *
   * List a YouTube channel's playlists by handle or channel ID with cursor pagination (title, video count, thumbnail).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.youtube.channelPlaylists({ handle: "@veritasium" });
   */
  channelPlaylists(
    input: YoutubeChannelPlaylistsInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeChannelPlaylistsData>> {
    return this._core.run("youtube.channel_playlists", input, options);
  }

  /**
   * Iterate every result of YouTube Channel Playlists across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterChannelPlaylists(
    input: YoutubeChannelPlaylistsInput,
    options?: RequestOptions,
  ): Paginator<
    YoutubeChannelPlaylistsPlaylist,
    RunResult<YoutubeChannelPlaylistsData>
  > {
    return paginate<
      YoutubeChannelPlaylistsPlaylist,
      RunResult<YoutubeChannelPlaylistsData>
    >(
      this._core,
      "youtube.channel_playlists",
      input as unknown as Record<string, unknown>,
      "playlists",
      false,
      options,
    );
  }

  /**
   * YouTube Channel Shorts
   *
   * List a YouTube channel's Shorts by handle or channel ID with cursor pagination, views, and publish timestamps.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.youtube.channelShorts({ handle: "@zachking", sort: "latest" });
   */
  channelShorts(
    input: YoutubeChannelShortsInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeChannelShortsData>> {
    return this._core.run("youtube.channel_shorts", input, options);
  }

  /**
   * Iterate every result of YouTube Channel Shorts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterChannelShorts(
    input: YoutubeChannelShortsInput,
    options?: RequestOptions,
  ): Paginator<YoutubeChannelShortsShort, RunResult<YoutubeChannelShortsData>> {
    return paginate<
      YoutubeChannelShortsShort,
      RunResult<YoutubeChannelShortsData>
    >(
      this._core,
      "youtube.channel_shorts",
      input as unknown as Record<string, unknown>,
      "shorts",
      false,
      options,
    );
  }

  /**
   * YouTube Channel Videos
   *
   * List a YouTube channel's videos by handle or channel ID with cursor pagination (title, views, length, publish time).
   *
   * Price: $0.0005 per request.
   *
   * @example
   * const res = await client.youtube.channelVideos({ handle: "@mkbhd" });
   */
  channelVideos(
    input: YoutubeChannelVideosInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeChannelVideosData>> {
    return this._core.run("youtube.channel_videos", input, options);
  }

  /**
   * Iterate every result of YouTube Channel Videos across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterChannelVideos(
    input: YoutubeChannelVideosInput,
    options?: RequestOptions,
  ): Paginator<YoutubeChannelVideosVideo, RunResult<YoutubeChannelVideosData>> {
    return paginate<
      YoutubeChannelVideosVideo,
      RunResult<YoutubeChannelVideosData>
    >(
      this._core,
      "youtube.channel_videos",
      input as unknown as Record<string, unknown>,
      "videos",
      false,
      options,
    );
  }

  /**
   * YouTube Comment Replies
   *
   * List replies to a YouTube comment using a continuation token with cursor pagination (text, author, likes, publish time).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.youtube.commentReplies({ continuationToken: "Eg0SC19fZm1EajBaSjFRGAYygwEaUBIaVWd3aXRjRk9fdmtpM0x4LUNfZDRBYUFCQWciAggAKhhVQ1g2T1EzRGtjc2JZTkU2SDh1UVF1VkEyC19fZm1EajBaSjFRQABICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dpdGNGT192a2kzTHgtQ19kNEFhQUJBZw==" });
   */
  commentReplies(
    input: YoutubeCommentRepliesInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeCommentRepliesData>> {
    return this._core.run("youtube.comment_replies", input, options);
  }

  /**
   * YouTube Community Post
   *
   * Fetch a single YouTube community post by URL (text, images, channel, publish time).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.youtube.communityPost({ url: "https://www.youtube.com/post/Ugkx1LonSRBBUqASv-J8j9_FesxwlMAhT3_e" });
   */
  communityPost(
    input: YoutubeCommunityPostInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeCommunityPostData>> {
    return this._core.run("youtube.community_post", input, options);
  }

  /**
   * YouTube Playlist
   *
   * List every video in a YouTube playlist (title, length, and channel per video plus playlist owner and totals).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.youtube.playlist({ playlistId: "PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj" });
   */
  playlist(
    input: YoutubePlaylistInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubePlaylistData>> {
    return this._core.run("youtube.playlist", input, options);
  }

  /**
   * YouTube Search
   *
   * Search YouTube and get matching videos (title, channel, views, length, publish time) as normalized JSON.
   *
   * Price: $0.0005 per request.
   *
   * @example
   * const res = await client.youtube.search({ query: "how to cook rice" });
   */
  search(
    input: YoutubeSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeSearchData>> {
    return this._core.run("youtube.search", input, options);
  }

  /**
   * Iterate every result of YouTube Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearch(
    input: YoutubeSearchInput,
    options?: RequestOptions,
  ): Paginator<YoutubeSearchVideo, RunResult<YoutubeSearchData>> {
    return paginate<YoutubeSearchVideo, RunResult<YoutubeSearchData>>(
      this._core,
      "youtube.search",
      input as unknown as Record<string, unknown>,
      "videos",
      false,
      options,
    );
  }

  /**
   * YouTube Hashtag Search
   *
   * Search YouTube videos by hashtag with cursor pagination (title, channel, views, length, publish time).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.youtube.searchHashtag({ hashtag: "funny" });
   */
  searchHashtag(
    input: YoutubeSearchHashtagInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeSearchHashtagData>> {
    return this._core.run("youtube.search_hashtag", input, options);
  }

  /**
   * Iterate every result of YouTube Hashtag Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearchHashtag(
    input: YoutubeSearchHashtagInput,
    options?: RequestOptions,
  ): Paginator<YoutubeSearchHashtagVideo, RunResult<YoutubeSearchHashtagData>> {
    return paginate<
      YoutubeSearchHashtagVideo,
      RunResult<YoutubeSearchHashtagData>
    >(
      this._core,
      "youtube.search_hashtag",
      input as unknown as Record<string, unknown>,
      "videos",
      false,
      options,
    );
  }

  /**
   * YouTube Shorts Search
   *
   * Search YouTube Shorts by keyword and get matching Shorts (title, views, URL) with cursor pagination as normalized JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.youtube.searchShorts({ query: "cats" });
   */
  searchShorts(
    input: YoutubeSearchShortsInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeSearchShortsData>> {
    return this._core.run("youtube.search_shorts", input, options);
  }

  /**
   * Iterate every result of YouTube Shorts Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearchShorts(
    input: YoutubeSearchShortsInput,
    options?: RequestOptions,
  ): Paginator<YoutubeSearchShortsShort, RunResult<YoutubeSearchShortsData>> {
    return paginate<
      YoutubeSearchShortsShort,
      RunResult<YoutubeSearchShortsData>
    >(
      this._core,
      "youtube.search_shorts",
      input as unknown as Record<string, unknown>,
      "shorts",
      false,
      options,
    );
  }

  /**
   * YouTube Trending Shorts
   *
   * List currently trending YouTube Shorts (title, channel, views, likes, duration).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.youtube.trendingShorts({});
   */
  trendingShorts(
    input: YoutubeTrendingShortsInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeTrendingShortsData>> {
    return this._core.run("youtube.trending_shorts", input, options);
  }

  /**
   * YouTube Video
   *
   * Fetch a YouTube video or Short's metadata (title, channel, views, likes, duration, publish date) by URL or ID.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.youtube.video({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
   */
  video(
    input: YoutubeVideoInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeVideoData>> {
    return this._core.run("youtube.video", input, options);
  }

  /**
   * YouTube Video Comments
   *
   * List the comments on a YouTube video or Short by URL with cursor pagination (text, author, likes, reply count).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.youtube.videoComments({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
   */
  videoComments(
    input: YoutubeVideoCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeVideoCommentsData>> {
    return this._core.run("youtube.video_comments", input, options);
  }

  /**
   * Iterate every result of YouTube Video Comments across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterVideoComments(
    input: YoutubeVideoCommentsInput,
    options?: RequestOptions,
  ): Paginator<
    YoutubeVideoCommentsComment,
    RunResult<YoutubeVideoCommentsData>
  > {
    return paginate<
      YoutubeVideoCommentsComment,
      RunResult<YoutubeVideoCommentsData>
    >(
      this._core,
      "youtube.video_comments",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

  /**
   * YouTube Video Sponsors
   *
   * Detect suspected sponsors and paid promotions in a YouTube video by URL (sponsor names, websites, confidence).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.youtube.videoSponsors({ url: "https://www.youtube.com/watch?v=AVO0ifle-OU" });
   */
  videoSponsors(
    input: YoutubeVideoSponsorsInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeVideoSponsorsData>> {
    return this._core.run("youtube.video_sponsors", input, options);
  }

  /**
   * YouTube Video Transcript
   *
   * Fetch the transcript/captions of a YouTube video or Short by URL or ID.
   *
   * Price: $0.00125 per request.
   *
   * @example
   * const res = await client.youtube.videoTranscript({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
   */
  videoTranscript(
    input: YoutubeVideoTranscriptInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeVideoTranscriptData>> {
    return this._core.run("youtube.video_transcript", input, options);
  }

  /**
   * YouTube Video Transcript (Provenance)
   *
   * Fetch a YouTube video or Short transcript with timed segments and its provenance: whether the words are creator-written captions or machine speech recognition.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.youtube.videoTranscriptFull({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
   */
  videoTranscriptFull(
    input: YoutubeVideoTranscriptFullInput,
    options?: RequestOptions,
  ): Promise<RunResult<YoutubeVideoTranscriptFullData>> {
    return this._core.run("youtube.video_transcript_full", input, options);
  }
}
