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
  nextCursor: string;
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
 * Input for Instagram Profile Embed (instagram.embed).
 */
export interface InstagramEmbedInput {
  /**
   * Instagram username without the leading @.
   */
  handle: string;
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
  nextCursor?: string;
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
  nextCursor?: string;
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
 * Input for Instagram Highlight Detail (instagram.highlight_detail).
 */
export interface InstagramHighlightDetailInput {
  /**
   * The id of the highlight to retrieve details for.
   */
  id: string;
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
   * Full Instagram post or reel URL.
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
}

/**
 * Input for Instagram Profile (instagram.profile).
 */
export interface InstagramProfileInput {
  /**
   * Instagram username without the leading @.
   */
  handle: string;
}

/**
 * The `data` payload of Instagram Profile (instagram.profile).
 */
export interface InstagramProfileData {
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
  posts: number;
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Reel Transcript (instagram.reel_transcript).
 */
export interface InstagramReelTranscriptInput {
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
   * Restrict results to reels posted within this window.
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
   * Follower count of the posting account.
   */
  followers: number;
  /**
   * Number of likes on the reel.
   */
  likes: number;
  /**
   * True when the reel is a paid partnership.
   */
  paidPartnership: boolean;
  /**
   * Number of plays of the reel.
   */
  plays: number;
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
  /**
   * Number of views on the reel.
   */
  views: number;
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
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
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
   * Hashtag to search, without the leading #.
   */
  hashtag: string;
  /**
   * Filter by media type (e.g. all, photo, video, reel).
   */
  mediaType?: string;
}

export interface InstagramSearchHashtagPost {
  caption: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  displayUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  type: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Hashtag Search (instagram.search_hashtag).
 */
export interface InstagramSearchHashtagData {
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
  nextCursor: string;
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
   * Instagram usernames/handles (without the @). A flat run fee is shared across the batch, so request several at once to lower the cost per account. Up to 100 usernames per request.
   */
  usernames: string[];
}

export interface InstagramStoriesFullItem {
  /**
   * Story caption text, when present.
   */
  caption?: string;
  /**
   * Instagram media shortcode.
   */
  code?: string;
  /**
   * Posting time (Unix seconds).
   */
  createdUtc?: number;
  /**
   * Expiry time, 24h after posting (Unix seconds).
   */
  expiresAt?: number;
  /**
   * Media pixel height.
   */
  height?: number;
  /**
   * Story identifier.
   */
  id: string;
  /**
   * Direct URL to the story image (highest resolution).
   */
  imageUrl?: string;
  /**
   * Media type: 1 = image, 2 = video.
   */
  mediaType?: number;
  /**
   * Owner username. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  username?: string;
  /**
   * Direct URL to the story video, when the story is a video.
   */
  videoUrl?: string;
  /**
   * Media pixel width.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Stories (full) (instagram.stories_full).
 */
export interface InstagramStoriesFullData {
  /**
   * Story records across the requested accounts, each with full media, type, dimensions, posting + expiry time, and caption. Populated whenever the provider has data for the entity.
   */
  items: InstagramStoriesFullItem[];
}

/**
 * Input for Instagram Stories (basic) (instagram.stories_thin).
 */
export interface InstagramStoriesThinInput {
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
 * Input for Instagram Trending Reels (instagram.trending_reels).
 */
export interface InstagramTrendingReelsInput {}

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
  plays: number;
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
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram User Posts (instagram.user_posts).
 */
export interface InstagramUserPostsData {
  nextCursor: string;
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
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram User Reels (instagram.user_reels).
 */
export interface InstagramUserReelsData {
  nextCursor: string;
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
   * List Instagram reels that use a given audio track by audio id, normalized across providers with transparent failover.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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
   * Fetch an Instagram account's core public profile fields (followers, posts, bio, verification) by user id, normalized across providers with transparent failover.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
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
   * Instagram Profile Embed
   *
   * Fetch the public embed HTML for an Instagram profile by handle, normalized across providers with transparent failover.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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
   * List the followers of any public Instagram account by username - follower usernames, names, and profile details.

**Price:** $16.25 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.01625 per request.
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
   * List the accounts a public Instagram user follows - usernames, names, and profile details.

**Price:** $16.25 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.01625 per request.
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
   * Get analytics for any Instagram hashtag - total post count, related hashtags, and usage signals - normalized.

**Price:** billed per result - $1.00 per 1,000 requests base + $1.70 per 1,000 results, capped at $35.00 per 1,000 requests.
   *
   * Price: $0.001 per request plus $0.0017 per result.
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
   * Instagram Highlight Detail
   *
   * Fetch the details and media items of a single Instagram story highlight by id, normalized across providers with transparent failover.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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
   * Get the spoken-audio transcript text for an Instagram post or reel by URL, normalized across providers with transparent failover.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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
   * Fetch a single Instagram post or reel by URL (media URLs, like count, owner, type) as normalized JSON, across providers with transparent failover.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
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
   * List the comments on an Instagram post or reel by URL with cursor pagination (text, author, likes), normalized across providers.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
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
   * Instagram Profile
   *
   * Fetch an Instagram account's public profile (followers, posts, bio, verification) by handle, normalized across providers with transparent failover.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
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
   * Instagram Reel Transcript
   *
   * Turn any public Instagram reel or video post into a full speech transcript, with optional word-level timestamps.

**Price:** billed per result - $5.00 per 1,000 requests base + $20.00 per 1,000 results, capped at $25.00 per 1,000 requests.
   *
   * Price: $0.005 per request plus $0.02 per result.
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
   * Search Instagram Reels by keyword and get matching reels - caption, views, likes, creator, and duration - normalized across providers with transparent failover.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
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

**Price:** $3.25 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.00325 per request.
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
   * List recent Instagram posts under a hashtag (caption, type, media URL), normalized across providers with transparent failover.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.instagram.searchHashtag({ hashtag: "travel" });
   */
  searchHashtag(
    input: InstagramSearchHashtagInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramSearchHashtagData>> {
    return this._core.run("instagram.search_hashtag", input, options);
  }

  /**
   * Instagram Profile Search
   *
   * Search public Instagram profiles by a bio or caption keyword, normalized across providers with transparent failover.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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
   * Fetch public Instagram accounts' currently live stories with the full record - media (image and video), type, dimensions, posting time, 24h expiry, and caption. Up to 100 usernames per request.

**Price:** billed per username - $99.00 per 1,000 requests base + $3.00 per 1,000 usernames, capped at $102.00 per 1,000 requests.
   *
   * Price: $0.099 per request plus $0.003 per username.
   *
   * @example
   * const res = await client.instagram.storiesFull({ usernames: ["natgeo"] });
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

**Price:** $16.25 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.01625 per request.
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
   * Instagram Trending Reels
   *
   * List currently trending Instagram reels, normalized across providers with transparent failover.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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
   * List an Instagram account's story highlight reels by handle, normalized across providers with transparent failover.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
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
   * List an Instagram account's recent posts (likes, comments, captions) by handle with cursor pagination, normalized across providers.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
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
   * List an Instagram account's reels by handle with cursor pagination (caption, plays, likes, comments), normalized across providers.

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
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
