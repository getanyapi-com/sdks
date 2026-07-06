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
  handle: string;
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
  avatarUrl: string;
  bio: string;
  displayName: string;
  externalUrl: string;
  followers: number;
  following: number;
  handle: string;
  private: boolean;
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
   * Follower's display name (may be empty).
   * Present whenever the upstream returns this record.
   */
  fullName?: string;
  handle: string;
  id: string;
  /**
   * Whether the follower's account is private.
   */
  private?: boolean;
  /**
   * URL of the follower's profile picture.
   * Present whenever the upstream returns this record.
   */
  profilePicUrl?: string;
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
   * Follower records: id, handle, full name, profile picture URL, and verification/privacy flags.
   */
  items: InstagramFollowersItem[];
  /**
   * Opaque cursor for the next page of followers, or null when this lane has no more. Pass it back as cursor to continue.
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
   * Account display name.
   * Present whenever the upstream returns this record.
   */
  fullName?: string;
  handle: string;
  id: string;
  /**
   * Whether the account is private.
   */
  private?: boolean;
  /**
   * URL of the account's profile picture.
   * Present whenever the upstream returns this record.
   */
  profilePicUrl?: string;
  /**
   * Whether the account has a verified badge.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Following (instagram.following).
 */
export interface InstagramFollowingData {
  /**
   * Followed-account records: numeric id, handle, full name, profile picture URL, and verified/private flags.
   */
  items: InstagramFollowingItem[];
  /**
   * Opaque cursor for the next page of accounts, or null when this lane has no more. Pass it back as cursor to continue.
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
   * Present whenever the upstream returns this record.
   */
  id?: string;
  /**
   * Hashtag (without #).
   */
  name: string;
  /**
   * Total posts using the hashtag.
   */
  postsCount?: number;
  /**
   * Human-formatted post count (e.g. 793.54 M).
   * Present whenever the upstream returns this record.
   */
  postsFormatted?: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Hashtag Analytics (instagram.hashtag_analytics).
 */
export interface InstagramHashtagAnalyticsData {
  /**
   * Hashtag analytics records: hashtag name, total post count, and related hashtag suggestions.
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
  coverUrl: string;
  createdAt: number;
  id: string;
  mediaCount: number;
  ownerHandle: string;
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
  id: string;
  shortcode: string;
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Media Transcript (instagram.media_transcript).
 */
export interface InstagramMediaTranscriptData {
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
  displayUrl: string;
  id: string;
  likes: number;
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
  author: string;
  createdAt: string;
  id: string;
  likes: number;
  text: string;
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Post Comments (instagram.post_comments).
 */
export interface InstagramPostCommentsData {
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
  avatarUrl: string;
  bio: string;
  displayName: string;
  followers: number;
  following: number;
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
  text: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Reel Transcript (instagram.reel_transcript).
 */
export interface InstagramReelTranscriptData {
  /**
   * Transcript records: full transcript text, timed segments, detected language, and source video metadata.
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
  caption: string;
  comments: number;
  durationSeconds: number;
  followers: number;
  likes: number;
  paidPartnership: boolean;
  plays: number;
  shortcode: string;
  takenAt: string;
  thumbnail: string;
  url: string;
  username: string;
  verified: boolean;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Reels Search (instagram.reels_search).
 */
export interface InstagramReelsSearchData {
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
  handle: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Search (instagram.search).
 */
export interface InstagramSearchData {
  /**
   * Matching search results: user profiles, hashtags, or places with names, follower/post counts, and profile links.
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
  displayUrl: string;
  id: string;
  shortcode: string;
  type: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Hashtag Search (instagram.search_hashtag).
 */
export interface InstagramSearchHashtagData {
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
  avatarUrl: string;
  bio: string;
  displayName: string;
  followers: number;
  following: number;
  handle: string;
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
   * Posting time (Unix seconds).
   */
  postedAt?: number;
  /**
   * Owner username.
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
   * Story records across the requested accounts, each with full media, type, dimensions, posting + expiry time, and caption.
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
   * Story identifier.
   */
  id: string;
  /**
   * Direct URL to the story image or video.
   * Present whenever the upstream returns this record.
   */
  mediaUrl?: string;
  /**
   * Public link to the story.
   * Present whenever the upstream returns this record.
   */
  permalink?: string;
  /**
   * Posting time (Unix seconds).
   */
  postedAt?: number;
  /**
   * Owner username.
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
   * The account's currently live stories, each with its media URL, owner, posting time, and permalink.
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
  handle: string;
  id: string;
  likes: number;
  plays: number;
  shortcode: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Trending Reels (instagram.trending_reels).
 */
export interface InstagramTrendingReelsData {
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
  coverUrl: string;
  id: string;
  ownerHandle: string;
  title: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram User Highlights (instagram.user_highlights).
 */
export interface InstagramUserHighlightsData {
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
  caption: string;
  comments: number;
  createdAt: string;
  id: string;
  likes: number;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram User Posts (instagram.user_posts).
 */
export interface InstagramUserPostsData {
  nextCursor: string;
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
  caption: string;
  comments: number;
  id: string;
  likes: number;
  shortcode: string;
  takenAt: number;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram User Reels (instagram.user_reels).
 */
export interface InstagramUserReelsData {
  nextCursor: string;
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
   * List the followers of any public Instagram account by username - follower usernames, names, and profile details - at a flat per-request USD price.
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
   * List the accounts a public Instagram user follows - usernames, names, and profile details - at a flat per-request USD price.
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
   * Get analytics for any Instagram hashtag - total post count, related hashtags, and usage signals - normalized and priced per request in USD.
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
   * Turn any public Instagram reel or video post into a full speech transcript, with optional word-level timestamps - priced per request in USD.
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
   * Search Instagram for users, hashtags, or places by keyword and get matching results with names, counts, and links - flat per-request USD pricing.
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
   * Fetch public Instagram accounts' currently live stories with the full record - media (image and video), type, dimensions, posting time, 24h expiry, and caption. Priced per username (a flat run fee is shared across the batch), so request several at once to lower the cost per account. Up to 100 usernames per request.
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
