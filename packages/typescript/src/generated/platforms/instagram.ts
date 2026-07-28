// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

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

export type InstagramAudioReelsData = unknown;

/**
 * Input for Instagram Basic Profile (instagram.basic_profile).
 */
export interface InstagramBasicProfileInput {
  /**
   * Instagram numeric user id.
   */
  userId: string;
}

export type InstagramBasicProfileData = unknown;

/**
 * Input for Instagram Profile Embed (instagram.embed).
 */
export interface InstagramEmbedInput {
  /**
   * Instagram username without the leading @.
   */
  handle: string;
}

export type InstagramEmbedData = unknown;

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

export type InstagramFollowersData = unknown;

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

export type InstagramFollowingData = unknown;

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

export type InstagramHashtagAnalyticsData = unknown;

/**
 * Input for Instagram Highlight Detail (instagram.highlight_detail).
 */
export interface InstagramHighlightDetailInput {
  /**
   * The id of the highlight to retrieve details for.
   */
  id: string;
}

export type InstagramHighlightDetailData = unknown;

/**
 * Input for Instagram Media Transcript (instagram.media_transcript).
 */
export interface InstagramMediaTranscriptInput {
  /**
   * Instagram post or reel URL.
   */
  url: string;
}

export type InstagramMediaTranscriptData = unknown;

/**
 * Input for Instagram Post (instagram.post).
 */
export interface InstagramPostInput {
  /**
   * Full Instagram post or reel URL.
   */
  url: string;
}

export type InstagramPostData = unknown;

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

export type InstagramPostCommentsData = unknown;

/**
 * Input for Instagram Profile (instagram.profile).
 */
export interface InstagramProfileInput {
  /**
   * Instagram username without the leading @.
   */
  handle: string;
}

export type InstagramProfileData = unknown;

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

export type InstagramReelTranscriptData = unknown;

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

export type InstagramReelsSearchData = unknown;

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

export type InstagramSearchData = unknown;

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
   * Filter by media type (e.g. all, photo, video, reel).
   */
  mediaType?: string;
}

export type InstagramSearchHashtagData = unknown;

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

export type InstagramSearchProfilesData = unknown;

/**
 * Input for Instagram Stories (full) (instagram.stories_full).
 */
export interface InstagramStoriesFullInput {
  /**
   * Instagram usernames/handles (without the @). A flat run fee is shared across the batch, so request several at once to lower the cost per account. Up to 100 usernames per request.
   */
  usernames: string[];
}

export type InstagramStoriesFullData = unknown;

/**
 * Input for Instagram Stories (basic) (instagram.stories_thin).
 */
export interface InstagramStoriesThinInput {
  /**
   * Instagram username/handle to fetch currently live stories for (without the @).
   */
  username: string;
}

export type InstagramStoriesThinData = unknown;

/**
 * Input for Instagram Trending Reels (instagram.trending_reels).
 */
export interface InstagramTrendingReelsInput {}

export type InstagramTrendingReelsData = unknown;

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

export type InstagramUserHighlightsData = unknown;

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

export type InstagramUserPostsData = unknown;

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

export type InstagramUserReelsData = unknown;

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
  ): Promise<BareRunResult<InstagramAudioReelsData>> {
    return this._core.run(
      "instagram.audio_reels",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramAudioReelsData>>;
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
  ): Promise<BareRunResult<InstagramBasicProfileData>> {
    return this._core.run(
      "instagram.basic_profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramBasicProfileData>>;
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
  ): Promise<BareRunResult<InstagramEmbedData>> {
    return this._core.run(
      "instagram.embed",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramEmbedData>>;
  }

  /**
   * Instagram Followers
   *
   * List the followers of any public Instagram account by username: follower usernames, names, and profile details.
   *
   * Price: $0.01625 per request.
   *
   * @example
   * const res = await client.instagram.followers({ username: "nasa", limit: 50 });
   */
  followers(
    input: InstagramFollowersInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<InstagramFollowersData>> {
    return this._core.run(
      "instagram.followers",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramFollowersData>>;
  }

  /**
   * Instagram Following
   *
   * List the accounts a public Instagram user follows: usernames, names, and profile details.
   *
   * Price: $0.01625 per request.
   *
   * @example
   * const res = await client.instagram.following({ username: "nasa", limit: 50 });
   */
  following(
    input: InstagramFollowingInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<InstagramFollowingData>> {
    return this._core.run(
      "instagram.following",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramFollowingData>>;
  }

  /**
   * Instagram Hashtag Analytics
   *
   * Get analytics for any Instagram hashtag (total post count, related hashtags, and usage signals), normalized.
   *
   * Price: $0.001 per request plus $0.0017 per result (maximum $0.035).
   *
   * @example
   * const res = await client.instagram.hashtagAnalytics({ hashtag: "travel", limit: 5 });
   */
  hashtagAnalytics(
    input: InstagramHashtagAnalyticsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<InstagramHashtagAnalyticsData>> {
    return this._core.run(
      "instagram.hashtag_analytics",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramHashtagAnalyticsData>>;
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
  ): Promise<BareRunResult<InstagramHighlightDetailData>> {
    return this._core.run(
      "instagram.highlight_detail",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramHighlightDetailData>>;
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
  ): Promise<BareRunResult<InstagramMediaTranscriptData>> {
    return this._core.run(
      "instagram.media_transcript",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramMediaTranscriptData>>;
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
  ): Promise<BareRunResult<InstagramPostData>> {
    return this._core.run(
      "instagram.post",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramPostData>>;
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
  ): Promise<BareRunResult<InstagramPostCommentsData>> {
    return this._core.run(
      "instagram.post_comments",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramPostCommentsData>>;
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
  ): Promise<BareRunResult<InstagramProfileData>> {
    return this._core.run(
      "instagram.profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramProfileData>>;
  }

  /**
   * Instagram Reel Transcript
   *
   * Turn any public Instagram reel or video post into a full speech transcript, with optional word-level timestamps.
   *
   * Price: $0.005 per request plus $0.02 per result (maximum $0.025).
   *
   * @example
   * const res = await client.instagram.reelTranscript({ url: "https://www.instagram.com/reel/DWzrfE2kaY8/", wordTimestamps: false });
   */
  reelTranscript(
    input: InstagramReelTranscriptInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<InstagramReelTranscriptData>> {
    return this._core.run(
      "instagram.reel_transcript",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramReelTranscriptData>>;
  }

  /**
   * Instagram Reels Search
   *
   * Search Instagram Reels by keyword and get matching reels (caption, views, likes, creator, and duration), normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.instagram.reelsSearch({ query: "travel" });
   */
  reelsSearch(
    input: InstagramReelsSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<InstagramReelsSearchData>> {
    return this._core.run(
      "instagram.reels_search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramReelsSearchData>>;
  }

  /**
   * Instagram Search
   *
   * Search Instagram for users, hashtags, or places by keyword and get matching results with names, counts, and links.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.instagram.search({ query: "nasa" });
   */
  search(
    input: InstagramSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<InstagramSearchData>> {
    return this._core.run(
      "instagram.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramSearchData>>;
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
  ): Promise<BareRunResult<InstagramSearchHashtagData>> {
    return this._core.run(
      "instagram.search_hashtag",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramSearchHashtagData>>;
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
  ): Promise<BareRunResult<InstagramSearchProfilesData>> {
    return this._core.run(
      "instagram.search_profiles",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramSearchProfilesData>>;
  }

  /**
   * Instagram Stories (full)
   *
   * Fetch public Instagram accounts' currently live stories with the full record - media (image and video), type, dimensions, posting time, 24h expiry, and caption. Up to 100 usernames per request.
   *
   * Price: $0.099 per request plus $0.003 per username (maximum $0.102).
   *
   * @example
   * const res = await client.instagram.storiesFull({ usernames: ["natgeo"] });
   */
  storiesFull(
    input: InstagramStoriesFullInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<InstagramStoriesFullData>> {
    return this._core.run(
      "instagram.stories_full",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramStoriesFullData>>;
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
  ): Promise<BareRunResult<InstagramStoriesThinData>> {
    return this._core.run(
      "instagram.stories_thin",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramStoriesThinData>>;
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
  ): Promise<BareRunResult<InstagramTrendingReelsData>> {
    return this._core.run(
      "instagram.trending_reels",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramTrendingReelsData>>;
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
  ): Promise<BareRunResult<InstagramUserHighlightsData>> {
    return this._core.run(
      "instagram.user_highlights",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramUserHighlightsData>>;
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
  ): Promise<BareRunResult<InstagramUserPostsData>> {
    return this._core.run(
      "instagram.user_posts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramUserPostsData>>;
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
  ): Promise<BareRunResult<InstagramUserReelsData>> {
    return this._core.run(
      "instagram.user_reels",
      input,
      options,
    ) as unknown as Promise<BareRunResult<InstagramUserReelsData>>;
  }
}
