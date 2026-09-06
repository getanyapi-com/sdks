// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Instagram Reels by Audio (instagram.audio_reels).
 */
export interface InstagramAudioReelsInput {
  /**
   * Audio identifier from the Instagram audio page URL.
   */
  audioId: string;
  /**
   * Pagination cursor returned by a previous response.
   */
  cursor?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface InstagramAudioReelsReel {
  code: string;
  comments: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  plays: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Reels by Audio (instagram.audio_reels).
 */
export interface InstagramAudioReelsData {
  hasMore: boolean;
  /**
   * Opaque cursor for the next page of reels, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  reels: InstagramAudioReelsReel[];
}

/**
 * Input for Instagram Basic Profile (instagram.basic_profile).
 */
export interface InstagramBasicProfileInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Instagram numeric user id.
   */
  userId: string;
}

/**
 * The `data` payload of Instagram Basic Profile (instagram.basic_profile).
 */
export interface InstagramBasicProfileData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  bio: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  displayName: string;
  externalUrl: string;
  followers: number;
  following: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  handle: string;
  private: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  userId: string;
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Comment Replies (instagram.comment_replies).
 */
export interface InstagramCommentRepliesInput {
  /**
   * Instagram comment ID (a comment's id from the Instagram Post Comments endpoint).
   */
  commentId: string;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Full Instagram post or reel URL the comment belongs to.
   */
  url: string;
}

export interface InstagramCommentRepliesComment {
  /**
   * Username of the account that wrote the reply, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * URL of the replying account's profile avatar image.
   */
  avatarUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * The reply's Instagram comment ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of likes on the reply. Omitted when no like count is reported for the reply.
   */
  likes?: number;
  /**
   * The reply's text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Whether the reply's author has a verified badge.
   */
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Comment Replies (instagram.comment_replies).
 */
export interface InstagramCommentRepliesData {
  /**
   * Replies to the requested comment, oldest first. Populated whenever the provider has data for the entity.
   */
  comments: InstagramCommentRepliesComment[];
  /**
   * Opaque cursor for the next page of replies, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for Instagram Profile Embed (instagram.embed).
 */
export interface InstagramEmbedInput {
  /**
   * Instagram username without the leading @.
   */
  handle: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

/**
 * The `data` payload of Instagram Profile Embed (instagram.embed).
 */
export interface InstagramEmbedData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  html: string;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Followers (instagram.followers).
 */
export interface InstagramFollowersInput {
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of followers.
   */
  cursor?: string;
  /**
   * How many followers you want (50-1000). By default results come back in cheap pages of up to ~50: follow the response's nextCursor for more. With requireSinglePage true, up to this many are returned in one (pricier) call.
   * Range: minimum 50, maximum 1000.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Set true if you intend to page through followers, so the request is only served by a source that can return a nextCursor. The bulk source cannot page, and a paging source may cost more per request. Cannot be combined with requireSinglePage.
   */
  requireCursor?: boolean;
  /**
   * Set true to get up to limit followers in a single response instead of cheap pages, served by a bulk provider at a higher price.
   */
  requireSinglePage?: boolean;
  /**
   * The Instagram username, user ID, or profile URL whose followers to list (e.g. natgeo).
   */
  username: string;
}

export interface InstagramFollowersItem {
  /**
   * The follower's username, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * The follower's numeric Instagram user ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the follower's profile picture, with tracking query params stripped. Empty when the upstream omits it.
   */
  image?: string;
  /**
   * The follower's display name. Empty when the account has none.
   */
  name?: string;
  /**
   * Whether the follower's account is private.
   */
  private?: boolean;
  /**
   * Canonical URL of the follower's profile, with tracking query params stripped. Empty when the lane does not return it.
   */
  url?: string;
  /**
   * Whether the follower's account is verified.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Followers (instagram.followers).
 */
export interface InstagramFollowersData {
  /**
   * Follower records for the target account. Populated whenever the provider has data for the entity.
   */
  items: InstagramFollowersItem[];
  /**
   * Opaque cursor for the next page of followers, or null/empty when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
}

/**
 * Input for Instagram Following (instagram.following).
 */
export interface InstagramFollowingInput {
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page.
   */
  cursor?: string;
  /**
   * How many accounts you want (50-1000). By default results come back in cheap pages of up to ~50: follow the response's nextCursor for more. With requireSinglePage true, up to this many are returned in one (pricier) call.
   * Range: minimum 50, maximum 1000.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Set true if you intend to page through the following list, so the request is only served by a source that can return a nextCursor. The bulk source cannot page, and a paging source may cost more per request. Cannot be combined with requireSinglePage.
   */
  requireCursor?: boolean;
  /**
   * Set true to get up to limit accounts in a single response instead of cheap pages, served by a bulk provider at a higher price.
   */
  requireSinglePage?: boolean;
  /**
   * The Instagram username, user ID, or profile URL whose following list to fetch (e.g. natgeo).
   */
  username: string;
}

export interface InstagramFollowingItem {
  /**
   * The followed account's username, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * The followed account's numeric Instagram user ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the followed account's profile picture, with tracking query params stripped. Empty when the upstream omits it.
   */
  image?: string;
  /**
   * The followed account's display name. Empty when the account has none.
   */
  name?: string;
  /**
   * Whether the followed account is private.
   */
  private?: boolean;
  /**
   * Canonical URL of the followed account's profile, with tracking query params stripped. Empty when the lane does not return it.
   */
  url?: string;
  /**
   * Whether the followed account is verified.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Following (instagram.following).
 */
export interface InstagramFollowingData {
  /**
   * Records for the accounts the target user follows. Populated whenever the provider has data for the entity.
   */
  items: InstagramFollowingItem[];
  /**
   * Opaque cursor for the next page of results, or null/empty when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
}

/**
 * Input for Instagram Hashtag Analytics (instagram.hashtag_analytics).
 */
export interface InstagramHashtagAnalyticsInput {
  /**
   * The Instagram hashtag to analyze, with or without the # symbol (e.g. streetphotography).
   */
  hashtag: string;
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface InstagramHashtagAnalyticsItem {
  difficulty?: string;
  /**
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  id?: string;
  /**
   * Hashtag (without #). Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Total posts using the hashtag.
   */
  postsCount?: number;
  /**
   * Human-formatted post count (e.g. 793.54 M). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  postsFormatted?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Hashtag Analytics (instagram.hashtag_analytics).
 */
export interface InstagramHashtagAnalyticsData {
  /**
   * Hashtag analytics records: hashtag name, total post count, and related hashtag suggestions. Populated whenever the provider has data for the entity.
   */
  items: InstagramHashtagAnalyticsItem[];
}

/**
 * Input for Instagram Hashtag Recent Posts (instagram.hashtag_recent_posts).
 */
export interface InstagramHashtagRecentPostsInput {
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Hashtag to monitor, without the leading #.
   */
  hashtag: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface InstagramHashtagRecentPostsPost {
  /**
   * Post caption text, including its hashtags. Populated whenever the provider has data for the entity.
   */
  caption: string;
  /**
   * Number of items in the carousel. Absent on a single-image post.
   */
  carouselCount?: number;
  /**
   * Comment count. Usually zero on a post this new.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Hashtags carried in the caption, each including its leading #. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  hashtags?: string[];
  /**
   * Instagram media id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Like count. Usually zero on a post this new.
   */
  likes?: number;
  /**
   * Latitude of the tagged place.
   */
  locationLat?: number;
  /**
   * Longitude of the tagged place.
   */
  locationLng?: number;
  /**
   * Place name tagged on the post. Absent when the poster tagged none, which is most posts.
   */
  locationName?: string;
  /**
   * Cover media for the post. A carousel reports its full size in carouselCount.
   */
  media?: InstagramHashtagRecentPostsMedia[];
  /**
   * Short code in the post permalink. Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * Canonical permalink to the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Username of the account that posted. Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

export interface InstagramHashtagRecentPostsMedia {
  /**
   * One of photo or video. Videos are rare in this feed; Instagram keeps reels on a separate tab.
   */
  type: string;
  /**
   * Image URL. For a video this is the cover frame.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Hashtag Recent Posts (instagram.hashtag_recent_posts).
 */
export interface InstagramHashtagRecentPostsData {
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Posts under the hashtag, newest first. Engagement counts are usually zero because the posts are minutes old. Populated whenever the provider has data for the entity.
   */
  posts: InstagramHashtagRecentPostsPost[];
}

/**
 * Input for Instagram Hashtag Top Posts (instagram.hashtag_top_posts).
 */
export interface InstagramHashtagTopPostsInput {
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Hashtag to fetch, without the leading #.
   */
  hashtag: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface InstagramHashtagTopPostsPost {
  /**
   * Profile picture URL of the posting account. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  avatarUrl?: string;
  /**
   * Post caption text, including its hashtags. Populated whenever the provider has data for the entity.
   */
  caption: string;
  /**
   * Comment count.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Video duration in seconds. Absent on photo posts.
   */
  durationSeconds?: number;
  /**
   * Instagram media id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Like count. Absent when the account hides it.
   */
  likes?: number;
  /**
   * Photo and video attachments on the post.
   */
  media?: InstagramHashtagTopPostsMedia[];
  /**
   * Short code in the post permalink. Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * Canonical permalink to the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Username of the account that posted. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * True when the posting account is verified.
   */
  verified?: boolean;
  /**
   * Play count. Present on video posts.
   */
  views?: number;
  [extra: string]: unknown;
}

export interface InstagramHashtagTopPostsMedia {
  /**
   * One of photo or video.
   */
  type: string;
  /**
   * Image URL. For a video this is the cover frame.
   * Format: uri.
   */
  url: string;
  /**
   * Playable video file URL. Present only for video items.
   * Format: uri.
   */
  videoUrl?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Hashtag Top Posts (instagram.hashtag_top_posts).
 */
export interface InstagramHashtagTopPostsData {
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Top-ranked posts for the hashtag, ordered by Instagram's engagement model rather than by time. Populated whenever the provider has data for the entity.
   */
  posts: InstagramHashtagTopPostsPost[];
}

/**
 * Input for Instagram Highlight Detail (instagram.highlight_detail).
 */
export interface InstagramHighlightDetailInput {
  /**
   * The id of the highlight to retrieve details for.
   */
  id: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

/**
 * The `data` payload of Instagram Highlight Detail (instagram.highlight_detail).
 */
export interface InstagramHighlightDetailData {
  /**
   * URL of the highlight cover image. Populated whenever the provider has data for the entity.
   */
  coverUrl: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Highlight identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of media items in the highlight.
   */
  mediaCount: number;
  /**
   * Handle of the account that owns the highlight. Populated whenever the provider has data for the entity.
   */
  ownerHandle: string;
  /**
   * Highlight title. Populated whenever the provider has data for the entity.
   */
  title: string;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Media Transcript (instagram.media_transcript).
 */
export interface InstagramMediaTranscriptInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Instagram post or reel URL.
   */
  url: string;
}

export interface InstagramMediaTranscriptTranscript {
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Media Transcript (instagram.media_transcript).
 */
export interface InstagramMediaTranscriptData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  transcripts: InstagramMediaTranscriptTranscript[];
}

/**
 * Input for Instagram Post (instagram.post).
 */
export interface InstagramPostInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Set true to be served only by a source that reports a reel's play count. The default cheapest source does not carry play counts, so `plays` is absent from its responses; opting in guarantees the field when Instagram exposes it, at a higher price per request.
   */
  requirePlayCount?: boolean;
  /**
   * Full Instagram post or reel URL, carrying the media shortcode: /p/, /reel/, /reels/, or /tv/. A profile URL such as https://www.instagram.com/username names no post, so it is rejected instead of charged for an empty result.
   */
  url: string;
}

/**
 * The `data` payload of Instagram Post (instagram.post).
 */
export interface InstagramPostData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  displayUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  owner: string;
  /**
   * Number of plays of the reel or video. Absent when Instagram does not expose a play count for this media, and on lanes that cannot serve it.
   */
  plays?: number;
  shortcode: string;
  type: string;
  videoUrl: string;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Post Comments (instagram.post_comments).
 */
export interface InstagramPostCommentsInput {
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Full Instagram post or reel URL.
   */
  url: string;
}

export interface InstagramPostCommentsComment {
  /**
   * Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * URL of the commenting account's profile avatar image.
   */
  avatarUrl?: string;
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
  text: string;
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Post Comments (instagram.post_comments).
 */
export interface InstagramPostCommentsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  comments: InstagramPostCommentsComment[];
  /**
   * Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for Instagram Profile (instagram.profile).
 */
export interface InstagramProfileInput {
  /**
   * Instagram username without the leading @.
   */
  handle: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface InstagramProfileBioLink {
  /**
   * Display label for the link, empty when the account set none.
   */
  title?: string;
  /**
   * Destination URL, exactly as the account published it.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Profile (instagram.profile).
 */
export interface InstagramProfileData {
  /**
   * Profile picture URL at the highest resolution the account exposes. Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  /**
   * Profile biography text. Populated whenever the provider has data for the entity.
   */
  bio: string;
  /**
   * Every link the account publishes in its bio, in the order Instagram returns them. Business accounts often list several here while externalUrl carries only the first. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  bioLinks?: InstagramProfileBioLink[];
  /**
   * Instagram's category label for the account (for example "Government Agencies" or "Coffee shop"). Absent when the account publishes no category. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  category?: string;
  /**
   * The contact button Instagram shows on the profile, for example CALL, TEXT, EMAIL, or UNKNOWN. Absent when the account exposes no contact button. Instagram no longer publishes the underlying email or phone number to unauthenticated callers.
   */
  contactMethod?: string;
  /**
   * Account display name. Populated whenever the provider has data for the entity.
   */
  displayName: string;
  /**
   * The single website link on the profile. Absent when the account publishes no link. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  externalUrl?: string;
  /**
   * Follower count.
   */
  followers: number;
  /**
   * Number of accounts this account follows.
   */
  following: number;
  /**
   * Instagram username without the leading @. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Whether Instagram flags the account as a business account.
   */
  isBusiness?: boolean;
  /**
   * Number of posts on the account.
   */
  posts: number;
  /**
   * Whether the account is private.
   */
  private: boolean;
  /**
   * Instagram's numeric account id, as a string. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  userId?: string;
  /**
   * Whether the account carries Instagram's verified badge.
   */
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Profile Contact Info (instagram.profile_contact).
 */
export interface InstagramProfileContactInput {
  /**
   * Instagram username without the leading @.
   */
  handle: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

/**
 * The `data` payload of Instagram Profile Contact Info (instagram.profile_contact).
 */
export interface InstagramProfileContactData {
  /**
   * Profile biography text.
   */
  bio?: string;
  /**
   * Account display name.
   */
  displayName?: string;
  /**
   * Every email address found for the account: the contact-button address plus any address written into the bio, deduplicated. Empty when the account publishes none. Populated whenever the provider has data for the entity.
   */
  emails: string[];
  /**
   * The website link on the profile. Absent when the account publishes no link.
   */
  externalUrl?: string;
  /**
   * Instagram username without the leading @. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Every phone number found for the account, in E.164 form where the number could be normalized. Empty when the account publishes none.
   */
  phones?: string[];
  /**
   * Whether the account is private.
   */
  private?: boolean;
  /**
   * The address behind the profile's Email contact button, as the account owner entered it. Absent when the account publishes no contact email. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  publicEmail?: string;
  /**
   * The number behind the profile's Call or Text contact button, as the account owner entered it. Absent when the account publishes no contact phone.
   */
  publicPhone?: string;
  /**
   * Whether the account carries Instagram's verified badge.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Reel Transcript (instagram.reel_transcript).
 */
export interface InstagramReelTranscriptInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The URL of a public Instagram reel or video post with spoken audio (e.g. https://www.instagram.com/reel/C8yKXdRxKqK/).
   */
  url: string;
  /**
   * Set true to include a precise timestamp for every word in the transcript (e.g. true).
   * Default: false.
   */
  wordTimestamps?: boolean;
}

export interface InstagramReelTranscriptItem {
  /**
   * The reel's caption text. Empty when the reel has no caption.
   */
  caption?: string;
  /**
   * Number of comments on the reel.
   */
  commentCount?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Video duration in seconds.
   */
  durationSeconds?: number;
  /**
   * The reel's numeric Instagram media ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Detected spoken language (ISO 639-1 code, e.g. "en"). Empty when the upstream omits it.
   */
  language?: string;
  /**
   * Number of likes on the reel.
   */
  likeCount?: number;
  /**
   * Username of the reel's owner, without the @ prefix. Empty when the upstream omits it.
   */
  ownerUsername?: string;
  /**
   * Time-aligned transcript segments, each with its text and start/end offsets in seconds.
   */
  segments?: InstagramReelTranscriptSegment[];
  /**
   * The full speech transcript. Empty when the reel has no detectable spoken audio. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Canonical URL of the reel, with tracking query params stripped. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Number of video views.
   */
  viewCount?: number;
  [extra: string]: unknown;
}

export interface InstagramReelTranscriptSegment {
  /**
   * Segment end offset in seconds from the start of the video.
   */
  end?: number;
  /**
   * Segment start offset in seconds from the start of the video.
   */
  start?: number;
  /**
   * The segment's transcribed text.
   */
  text?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Reel Transcript (instagram.reel_transcript).
 */
export interface InstagramReelTranscriptData {
  /**
   * Transcript record for the requested reel (one item), with the full transcript text, timed segments, and source video metadata. Populated whenever the provider has data for the entity.
   */
  items: InstagramReelTranscriptItem[];
}

/**
 * Input for Instagram Reels Search (instagram.reels_search).
 */
export interface InstagramReelsSearchInput {
  /**
   * Recency hint, not a hard filter. Reel discovery runs on top of Google search, so this window narrows Google's index by when it discovered or last crawled the reel, which is not the same as when the reel was published to Instagram. Returned reels can have a createdUtc outside the requested window, and narrow windows such as last-hour often return older reels or no results. Check createdUtc yourself if you need exact publication-time precision.
   * One of: last-hour, last-day, last-week, last-month, last-year.
   */
  datePosted?:
    "last-hour" | "last-day" | "last-week" | "last-month" | "last-year";
  /**
   * 1-based results page.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keyword (e.g. "crossfit").
   */
  query: string;
}

export interface InstagramReelsSearchReel {
  /**
   * Reel caption text. Populated whenever the provider has data for the entity.
   */
  caption: string;
  /**
   * Number of comments on the reel.
   */
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Reel duration in seconds.
   */
  durationSeconds: number;
  /**
   * Number of likes on the reel.
   */
  likes: number;
  /**
   * True when the reel is a paid partnership.
   */
  paidPartnership: boolean;
  /**
   * Instagram media shortcode. Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * URL of the reel thumbnail image. Populated whenever the provider has data for the entity.
   */
  thumbnail: string;
  /**
   * Canonical URL of the reel. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Username of the account that posted the reel. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * True when the posting account is verified.
   */
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Reels Search (instagram.reels_search).
 */
export interface InstagramReelsSearchData {
  /**
   * Reels matching the search. Populated whenever the provider has data for the entity.
   */
  reels: InstagramReelsSearchReel[];
}

/**
 * Input for Instagram Search (instagram.search).
 */
export interface InstagramSearchInput {
  /**
   * Maximum number of results to return (1-20, default 20).
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Keyword to search Instagram for; one or more words without special punctuation (e.g. coffee roastery).
   */
  query: string;
  /**
   * What to search for: user profiles, hashtags, or places (e.g. hashtag).
   * One of: user, hashtag, place.
   * Default: user.
   */
  type?: "user" | "hashtag" | "place";
}

export interface InstagramSearchItem {
  /**
   * The account's bio text. Empty when the account has none.
   */
  bio?: string;
  /**
   * The account's follower count. May be 0 when the lane does not return it in search results.
   */
  followers?: number;
  /**
   * The number of accounts the account follows. May be 0 when the lane does not return it in search results.
   */
  following?: number;
  /**
   * The account's username, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * The account's numeric Instagram user ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the account's profile picture, with tracking query params stripped. Empty when the upstream omits it.
   */
  image?: string;
  /**
   * The account's display name. Empty when the account has none.
   */
  name?: string;
  /**
   * The account's post count. May be 0 when the lane does not return it in search results.
   */
  postsCount?: number;
  /**
   * Canonical URL of the account's profile, with tracking query params stripped. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Whether the account is verified.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Search (instagram.search).
 */
export interface InstagramSearchData {
  /**
   * Matching Instagram profile records for the query. Populated whenever the provider has data for the entity.
   */
  items: InstagramSearchItem[];
}

/**
 * Input for Instagram Hashtag Search (instagram.search_hashtag).
 */
export interface InstagramSearchHashtagInput {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * Restrict results to posts published within this window.
   * One of: last-hour, last-day, last-week, last-month, last-year.
   */
  datePosted?:
    "last-hour" | "last-day" | "last-week" | "last-month" | "last-year";
  /**
   * Hashtag to search, without the leading #.
   */
  hashtag: string;
  /**
   * Filter by media type. One of all, reel.
   * One of: all, reel.
   */
  mediaType?: "all" | "reel";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface InstagramSearchHashtagPost {
  /**
   * Profile picture URL of the posting account.
   * Format: uri.
   */
  avatarUrl?: string;
  /**
   * Post caption text, including its hashtags.
   */
  caption: string;
  /**
   * Comment count.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Poster image URL. For a video this is the cover frame. Populated whenever the provider has data for the entity.
   */
  displayUrl: string;
  /**
   * Video duration in seconds. Absent on photo posts.
   */
  durationSeconds?: number;
  /**
   * Instagram media id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * True when the post is a paid advertisement.
   */
  isAd?: boolean;
  /**
   * Like count. Absent when the account hides it.
   */
  likes?: number;
  /**
   * Short code in the post permalink. Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * Instagram media typename, for example XDTGraphVideo or XDTGraphImage.
   */
  type: string;
  /**
   * Canonical permalink to the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Username of the account that posted. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  username?: string;
  /**
   * True when the posting account is verified.
   */
  verified?: boolean;
  /**
   * Playable video file URL. Present only on video posts.
   * Format: uri.
   */
  videoUrl?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Hashtag Search (instagram.search_hashtag).
 */
export interface InstagramSearchHashtagData {
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  posts: InstagramSearchHashtagPost[];
}

/**
 * Input for Instagram Profile Search (instagram.search_profiles).
 */
export interface InstagramSearchProfilesInput {
  /**
   * Pagination cursor returned by a previous response.
   */
  cursor?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Bio or caption keyword/phrase to search for.
   */
  query: string;
}

export interface InstagramSearchProfilesProfile {
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
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  posts: number;
  private: boolean;
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Profile Search (instagram.search_profiles).
 */
export interface InstagramSearchProfilesData {
  /**
   * Opaque cursor for the next page of profiles, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  profiles: InstagramSearchProfilesProfile[];
}

/**
 * Input for Instagram Stories (full) (instagram.stories_full).
 */
export interface InstagramStoriesFullInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Instagram username or handle without the @.
   */
  username: string;
}

export interface InstagramStoriesFullItem {
  /**
   * Instagram media shortcode. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  code?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Expiry UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  expiresUtc?: number;
  /**
   * Media pixel height. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  height?: number;
  /**
   * Story identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Direct URL to the story image (highest resolution). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Media type: 1 = image, 2 = video. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  mediaType?: number;
  /**
   * Owner username. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  username?: string;
  /**
   * Direct URL to the story video, when the story is a video. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  videoUrl?: string;
  /**
   * Media pixel width. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Stories (full) (instagram.stories_full).
 */
export interface InstagramStoriesFullData {
  /**
   * Currently live story records for the requested account, with media, type, dimensions, posting time, and expiry. Populated whenever the provider has data for the entity.
   */
  items: InstagramStoriesFullItem[];
}

/**
 * Input for Instagram Stories (basic) (instagram.stories_thin).
 */
export interface InstagramStoriesThinInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Instagram username/handle to fetch currently live stories for (without the @).
   */
  username: string;
}

export interface InstagramStoriesThinItem {
  /**
   * Posting time (Unix seconds).
   */
  createdUtc?: number;
  /**
   * Story identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Direct URL to the story image or video. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  mediaUrl?: string;
  /**
   * Public link to the story. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  permalink?: string;
  /**
   * Owner username. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  username?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Stories (basic) (instagram.stories_thin).
 */
export interface InstagramStoriesThinData {
  /**
   * The account's currently live stories, each with its media URL, owner, posting time, and permalink. Populated whenever the provider has data for the entity.
   */
  items: InstagramStoriesThinItem[];
}

/**
 * Input for Instagram Tagged Posts (instagram.tagged_posts).
 */
export interface InstagramTaggedPostsInput {
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Instagram username without the leading @.
   */
  handle: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface InstagramTaggedPostsPost {
  /**
   * Username of the account that posted and applied the tag, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * URL of the posting account's profile avatar image.
   */
  avatarUrl?: string;
  /**
   * The post's caption text. Empty when the post has none. Populated whenever the provider has data for the entity.
   */
  caption: string;
  /**
   * Number of comments on the post.
   */
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * The post's numeric Instagram media ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of likes on the post.
   */
  likes: number;
  /**
   * Canonical URL of the post, with tracking query params stripped. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Tagged Posts (instagram.tagged_posts).
 */
export interface InstagramTaggedPostsData {
  /**
   * Opaque cursor for the next page of tagged posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Posts that tag the requested account, newest first. Populated whenever the provider has data for the entity.
   */
  posts: InstagramTaggedPostsPost[];
}

/**
 * Input for Instagram Trending Reels (instagram.trending_reels).
 */
export interface InstagramTrendingReelsInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface InstagramTrendingReelsReel {
  caption: string;
  comments: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Trending Reels (instagram.trending_reels).
 */
export interface InstagramTrendingReelsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  reels: InstagramTrendingReelsReel[];
}

/**
 * Input for Instagram User Highlights (instagram.user_highlights).
 */
export interface InstagramUserHighlightsInput {
  /**
   * Instagram username without the leading @.
   */
  handle: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Instagram numeric user id (optional, faster than handle).
   */
  userId?: string;
}

export interface InstagramUserHighlightsHighlight {
  /**
   * Populated whenever the provider has data for the entity.
   */
  coverUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  ownerHandle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram User Highlights (instagram.user_highlights).
 */
export interface InstagramUserHighlightsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  highlights: InstagramUserHighlightsHighlight[];
}

/**
 * Input for Instagram User Posts (instagram.user_posts).
 */
export interface InstagramUserPostsInput {
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Instagram username without the leading @.
   */
  handle: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface InstagramUserPostsPost {
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
   * Video duration in seconds. Absent on photo posts.
   */
  durationSeconds?: number;
  /**
   * Instagram media id. Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Photo, video, and GIF attachments on the post. Empty when the post has none.
   */
  media?: InstagramUserPostsMedia[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Username of the account that posted. A profile feed includes collaborator posts, so this is not always the requested handle. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * True when the posting account is verified.
   */
  verified: boolean;
  [extra: string]: unknown;
}

export interface InstagramUserPostsMedia {
  /**
   * Pixel height of the media item, when the lane reports it.
   */
  height?: number;
  /**
   * One of photo, video, or gif.
   */
  type: string;
  /**
   * Image URL. For a video or GIF this is the poster/thumbnail frame.
   * Format: uri.
   */
  url: string;
  /**
   * Playable video file URL. Present only for video and gif items.
   * Format: uri.
   */
  videoUrl?: string;
  /**
   * Pixel width of the media item, when the lane reports it.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram User Posts (instagram.user_posts).
 */
export interface InstagramUserPostsData {
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  posts: InstagramUserPostsPost[];
}

/**
 * Input for Instagram User Reels (instagram.user_reels).
 */
export interface InstagramUserReelsInput {
  /**
   * Pagination cursor (max_id) from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Instagram handle.
   */
  handle?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Instagram user id (faster than handle when known).
   */
  userId?: string;
}

export interface InstagramUserReelsReel {
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
   * Reel duration in seconds.
   */
  durationSeconds: number;
  /**
   * Instagram media id. Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Photo, video, and GIF attachments on the post. Empty when the post has none.
   */
  media?: InstagramUserReelsMedia[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * Username of the account that posted the reel. A reels tab includes collaborator reels, so this is not always the requested handle. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * True when the posting account is verified.
   */
  verified: boolean;
  views: number;
  [extra: string]: unknown;
}

export interface InstagramUserReelsMedia {
  /**
   * Pixel height of the media item, when the lane reports it.
   */
  height?: number;
  /**
   * One of photo, video, or gif.
   */
  type: string;
  /**
   * Image URL. For a video or GIF this is the poster/thumbnail frame.
   * Format: uri.
   */
  url: string;
  /**
   * Playable video file URL. Present only for video and gif items.
   * Format: uri.
   */
  videoUrl?: string;
  /**
   * Pixel width of the media item, when the lane reports it.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram User Reels (instagram.user_reels).
 */
export interface InstagramUserReelsData {
  /**
   * Opaque cursor for the next page of reels, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  reels: InstagramUserReelsReel[];
}

/**
 * Typed methods for the instagram platform. Attached to the AnyAPI client as
 * `client.instagram`.
 */
export class InstagramNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Instagram Reels by Audio
   *
   * List Instagram reels that use a given audio track by audio id.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.instagram.audioReels({ audioId: "1392969992841787" });
   */
  audioReels(
    input: InstagramAudioReelsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramAudioReelsData>> {
    return this._core.run("instagram.audio_reels", input, options);
  }

  /**
   * Iterate every result of Instagram Reels by Audio across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterAudioReels(
    input: InstagramAudioReelsInput,
    options?: RequestOptions,
  ): Paginator<InstagramAudioReelsReel, RunResult<InstagramAudioReelsData>> {
    return paginate<
      InstagramAudioReelsReel,
      RunResult<InstagramAudioReelsData>
    >(
      this._core,
      "instagram.audio_reels",
      input as unknown as Record<string, unknown>,
      "reels",
      false,
      options,
    );
  }

  /**
   * Instagram Basic Profile
   *
   * Fetch an Instagram account's core public profile fields (followers, posts, bio, verification) by user id.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.basicProfile({ userId: "314216" });
   */
  basicProfile(
    input: InstagramBasicProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramBasicProfileData>> {
    return this._core.run("instagram.basic_profile", input, options);
  }

  /**
   * Instagram Comment Replies
   *
   * List the replies to an Instagram comment with cursor pagination (text, author, likes).
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.commentReplies({ commentId: "18126632131325044", url: "https://www.instagram.com/p/C8rKmYvsrck/" });
   */
  commentReplies(
    input: InstagramCommentRepliesInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramCommentRepliesData>> {
    return this._core.run("instagram.comment_replies", input, options);
  }

  /**
   * Iterate every result of Instagram Comment Replies across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterCommentReplies(
    input: InstagramCommentRepliesInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramCommentRepliesComment,
    RunResult<InstagramCommentRepliesData>
  > {
    return paginate<
      InstagramCommentRepliesComment,
      RunResult<InstagramCommentRepliesData>
    >(
      this._core,
      "instagram.comment_replies",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

  /**
   * Instagram Profile Embed
   *
   * Fetch the public embed HTML for an Instagram profile by handle.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.instagram.embed({ handle: "nasa" });
   */
  embed(
    input: InstagramEmbedInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramEmbedData>> {
    return this._core.run("instagram.embed", input, options);
  }

  /**
   * Instagram Followers
   *
   * List the followers of any public Instagram account by username: follower usernames, names, and profile details.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.followers({ username: "nasa", limit: 50 });
   */
  followers(
    input: InstagramFollowersInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramFollowersData>> {
    return this._core.run("instagram.followers", input, options);
  }

  /**
   * Iterate every result of Instagram Followers across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterFollowers(
    input: InstagramFollowersInput,
    options?: RequestOptions,
  ): Paginator<InstagramFollowersItem, RunResult<InstagramFollowersData>> {
    return paginate<InstagramFollowersItem, RunResult<InstagramFollowersData>>(
      this._core,
      "instagram.followers",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }

  /**
   * Instagram Following
   *
   * List the accounts a public Instagram user follows: usernames, names, and profile details.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.following({ username: "nasa", limit: 50 });
   */
  following(
    input: InstagramFollowingInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramFollowingData>> {
    return this._core.run("instagram.following", input, options);
  }

  /**
   * Iterate every result of Instagram Following across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterFollowing(
    input: InstagramFollowingInput,
    options?: RequestOptions,
  ): Paginator<InstagramFollowingItem, RunResult<InstagramFollowingData>> {
    return paginate<InstagramFollowingItem, RunResult<InstagramFollowingData>>(
      this._core,
      "instagram.following",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }

  /**
   * Instagram Hashtag Analytics
   *
   * Get analytics for any Instagram hashtag (total post count, related hashtags, and usage signals).
   *
   * Price: $0.0011 per request plus $0.00187 per result (maximum $0.0385).
   *
   * @example
   * const res = await client.instagram.hashtagAnalytics({ hashtag: "travel", limit: 5 });
   */
  hashtagAnalytics(
    input: InstagramHashtagAnalyticsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramHashtagAnalyticsData>> {
    return this._core.run("instagram.hashtag_analytics", input, options);
  }

  /**
   * Instagram Hashtag Recent Posts
   *
   * Instagram posts published under a hashtag, newest first, read from its live chronological feed rather than a web search index. Built for monitoring: results arrive within a couple of minutes of posting, so engagement counts are usually still zero and reels do not appear (Instagram keeps those on a separate tab). For engagement-ranked results use instagram.hashtag_top_posts; for older relevance-ranked results use instagram.search_hashtag.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.hashtagRecentPosts({ hashtag: "skincare" });
   */
  hashtagRecentPosts(
    input: InstagramHashtagRecentPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramHashtagRecentPostsData>> {
    return this._core.run("instagram.hashtag_recent_posts", input, options);
  }

  /**
   * Iterate every result of Instagram Hashtag Recent Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterHashtagRecentPosts(
    input: InstagramHashtagRecentPostsInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramHashtagRecentPostsPost,
    RunResult<InstagramHashtagRecentPostsData>
  > {
    return paginate<
      InstagramHashtagRecentPostsPost,
      RunResult<InstagramHashtagRecentPostsData>
    >(
      this._core,
      "instagram.hashtag_recent_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Instagram Hashtag Top Posts
   *
   * Instagram's own top-ranked posts for a hashtag, read from its live hashtag feed rather than a web search index, with view, like, and comment counts. Reels-heavy and engagement-ranked, so it answers what is performing on a tag right now. For older relevance-ranked results with date and media-type filters use instagram.search_hashtag; for the chronological feed use instagram.hashtag_recent_posts.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.hashtagTopPosts({ hashtag: "skincare" });
   */
  hashtagTopPosts(
    input: InstagramHashtagTopPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramHashtagTopPostsData>> {
    return this._core.run("instagram.hashtag_top_posts", input, options);
  }

  /**
   * Iterate every result of Instagram Hashtag Top Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterHashtagTopPosts(
    input: InstagramHashtagTopPostsInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramHashtagTopPostsPost,
    RunResult<InstagramHashtagTopPostsData>
  > {
    return paginate<
      InstagramHashtagTopPostsPost,
      RunResult<InstagramHashtagTopPostsData>
    >(
      this._core,
      "instagram.hashtag_top_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Instagram Highlight Detail
   *
   * Fetch the details and media items of a single Instagram story highlight by id.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.instagram.highlightDetail({ id: "18201653992314974" });
   */
  highlightDetail(
    input: InstagramHighlightDetailInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramHighlightDetailData>> {
    return this._core.run("instagram.highlight_detail", input, options);
  }

  /**
   * Instagram Media Transcript
   *
   * Get the spoken-audio transcript text for an Instagram post or reel by URL.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.instagram.mediaTranscript({ url: "https://www.instagram.com/reel/DHsD6HGqJhp/" });
   */
  mediaTranscript(
    input: InstagramMediaTranscriptInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramMediaTranscriptData>> {
    return this._core.run("instagram.media_transcript", input, options);
  }

  /**
   * Instagram Post
   *
   * Fetch a single Instagram post or reel by URL (media URLs, like count, owner, type) as normalized JSON.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.post({ url: "https://www.instagram.com/reel/DWzrfE2kaY8/" });
   */
  post(
    input: InstagramPostInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramPostData>> {
    return this._core.run("instagram.post", input, options);
  }

  /**
   * Instagram Post Comments
   *
   * List the comments on an Instagram post or reel by URL with cursor pagination (text, author, likes).
   *
   * Price: $0.00144 per request.
   *
   * @example
   * const res = await client.instagram.postComments({ url: "https://www.instagram.com/reel/DWzrfE2kaY8/" });
   */
  postComments(
    input: InstagramPostCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramPostCommentsData>> {
    return this._core.run("instagram.post_comments", input, options);
  }

  /**
   * Iterate every result of Instagram Post Comments across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterPostComments(
    input: InstagramPostCommentsInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramPostCommentsComment,
    RunResult<InstagramPostCommentsData>
  > {
    return paginate<
      InstagramPostCommentsComment,
      RunResult<InstagramPostCommentsData>
    >(
      this._core,
      "instagram.post_comments",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

  /**
   * Instagram Profile
   *
   * Fetch an Instagram account's public profile (followers, posts, bio, verification) by handle.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.instagram.profile({ handle: "nasa" });
   */
  profile(
    input: InstagramProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramProfileData>> {
    return this._core.run("instagram.profile", input, options);
  }

  /**
   * Instagram Profile Contact Info
   *
   * Look up the contact email and phone number an Instagram creator or business publishes on its profile, including the address behind the profile's Email button that public profile lookups do not return.
   *
   * Price: $0.00721 per request plus $0 per result (maximum $0.00721).
   *
   * @example
   * const res = await client.instagram.profileContact({ handle: "eminenceorganics" });
   */
  profileContact(
    input: InstagramProfileContactInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramProfileContactData>> {
    return this._core.run("instagram.profile_contact", input, options);
  }

  /**
   * Instagram Reel Transcript
   *
   * Turn any public Instagram reel or video post into a full speech transcript, with optional word-level timestamps.
   *
   * Price: $0.0055 per request plus $0.0253 per result (maximum $0.0308).
   *
   * @example
   * const res = await client.instagram.reelTranscript({ url: "https://www.instagram.com/reel/DWzrfE2kaY8/", wordTimestamps: false });
   */
  reelTranscript(
    input: InstagramReelTranscriptInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramReelTranscriptData>> {
    return this._core.run("instagram.reel_transcript", input, options);
  }

  /**
   * Instagram Reels Search
   *
   * Search Instagram Reels by keyword and get matching reels (caption, likes, comments, creator, and duration). Instagram does not return view or play counts in reels search results. Results are relevance-ranked, not chronological. Paging tops out around 110 reels per query (11 pages of 10).
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.reelsSearch({ query: "travel" });
   */
  reelsSearch(
    input: InstagramReelsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramReelsSearchData>> {
    return this._core.run("instagram.reels_search", input, options);
  }

  /**
   * Instagram Search
   *
   * Search Instagram for users, hashtags, or places by keyword and get matching results with names, counts, and links.
   *
   * Price: $0.0036 per request.
   *
   * @example
   * const res = await client.instagram.search({ query: "nasa" });
   */
  search(
    input: InstagramSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramSearchData>> {
    return this._core.run("instagram.search", input, options);
  }

  /**
   * Instagram Hashtag Search
   *
   * Search posts under an Instagram hashtag through a web search index rather than Instagram's own hashtag feed. That is what lets it filter by date and media type and return reels whose like counts have settled, and it is also why results skew older (median around three months) and stop at roughly 110 per hashtag. If that web search index is unavailable, a first-page request that sets no date and no media type is served from Instagram's own live top feed instead. For Instagram's own live ranking of a tag use instagram.hashtag_top_posts, and for the chronological feed use instagram.hashtag_recent_posts.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.instagram.searchHashtag({ hashtag: "skincare", datePosted: "last-month", mediaType: "reel" });
   */
  searchHashtag(
    input: InstagramSearchHashtagInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramSearchHashtagData>> {
    return this._core.run("instagram.search_hashtag", input, options);
  }

  /**
   * Iterate every result of Instagram Hashtag Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearchHashtag(
    input: InstagramSearchHashtagInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramSearchHashtagPost,
    RunResult<InstagramSearchHashtagData>
  > {
    return paginate<
      InstagramSearchHashtagPost,
      RunResult<InstagramSearchHashtagData>
    >(
      this._core,
      "instagram.search_hashtag",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Instagram Profile Search
   *
   * Search public Instagram profiles by a bio or caption keyword.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.instagram.searchProfiles({ query: "coffee roaster" });
   */
  searchProfiles(
    input: InstagramSearchProfilesInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramSearchProfilesData>> {
    return this._core.run("instagram.search_profiles", input, options);
  }

  /**
   * Iterate every result of Instagram Profile Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearchProfiles(
    input: InstagramSearchProfilesInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramSearchProfilesProfile,
    RunResult<InstagramSearchProfilesData>
  > {
    return paginate<
      InstagramSearchProfilesProfile,
      RunResult<InstagramSearchProfilesData>
    >(
      this._core,
      "instagram.search_profiles",
      input as unknown as Record<string, unknown>,
      "profiles",
      false,
      options,
    );
  }

  /**
   * Instagram Stories (full)
   *
   * Fetch a public Instagram account's currently live stories with media, type, dimensions, posting time, and 24-hour expiry by username.
   *
   * Price: $0.0024 per request.
   *
   * @example
   * const res = await client.instagram.storiesFull({ username: "natgeo" });
   */
  storiesFull(
    input: InstagramStoriesFullInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramStoriesFullData>> {
    return this._core.run("instagram.stories_full", input, options);
  }

  /**
   * Instagram Stories (basic)
   *
   * Fetch a public Instagram account's currently live stories - media URL, owner, and posting time - by username. Lightweight projection; for media type, dimensions, and the 24h expiry time use instagram.stories_full.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.storiesThin({ username: "natgeo" });
   */
  storiesThin(
    input: InstagramStoriesThinInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramStoriesThinData>> {
    return this._core.run("instagram.stories_thin", input, options);
  }

  /**
   * Instagram Tagged Posts
   *
   * List the posts an Instagram user is tagged in, with cursor pagination (author, caption, likes, comments).
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.taggedPosts({ handle: "nasa" });
   */
  taggedPosts(
    input: InstagramTaggedPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramTaggedPostsData>> {
    return this._core.run("instagram.tagged_posts", input, options);
  }

  /**
   * Iterate every result of Instagram Tagged Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterTaggedPosts(
    input: InstagramTaggedPostsInput,
    options?: RequestOptions,
  ): Paginator<InstagramTaggedPostsPost, RunResult<InstagramTaggedPostsData>> {
    return paginate<
      InstagramTaggedPostsPost,
      RunResult<InstagramTaggedPostsData>
    >(
      this._core,
      "instagram.tagged_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Instagram Trending Reels
   *
   * List currently trending Instagram reels. Instagram does not return play counts on this feed.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.instagram.trendingReels({});
   */
  trendingReels(
    input: InstagramTrendingReelsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramTrendingReelsData>> {
    return this._core.run("instagram.trending_reels", input, options);
  }

  /**
   * Instagram User Highlights
   *
   * List an Instagram account's story highlight reels by handle.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.userHighlights({ handle: "nasa" });
   */
  userHighlights(
    input: InstagramUserHighlightsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramUserHighlightsData>> {
    return this._core.run("instagram.user_highlights", input, options);
  }

  /**
   * Instagram User Posts
   *
   * List an Instagram account's recent posts (likes, comments, captions) by handle with cursor pagination.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.userPosts({ handle: "nasa" });
   */
  userPosts(
    input: InstagramUserPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramUserPostsData>> {
    return this._core.run("instagram.user_posts", input, options);
  }

  /**
   * Iterate every result of Instagram User Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserPosts(
    input: InstagramUserPostsInput,
    options?: RequestOptions,
  ): Paginator<InstagramUserPostsPost, RunResult<InstagramUserPostsData>> {
    return paginate<InstagramUserPostsPost, RunResult<InstagramUserPostsData>>(
      this._core,
      "instagram.user_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Instagram User Reels
   *
   * List an Instagram account's reels by handle with cursor pagination (caption, plays, likes, comments).
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.userReels({ handle: "nasa" });
   */
  userReels(
    input: InstagramUserReelsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramUserReelsData>> {
    return this._core.run("instagram.user_reels", input, options);
  }

  /**
   * Iterate every result of Instagram User Reels across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserReels(
    input: InstagramUserReelsInput,
    options?: RequestOptions,
  ): Paginator<InstagramUserReelsReel, RunResult<InstagramUserReelsData>> {
    return paginate<InstagramUserReelsReel, RunResult<InstagramUserReelsData>>(
      this._core,
      "instagram.user_reels",
      input as unknown as Record<string, unknown>,
      "reels",
      false,
      options,
    );
  }
}
