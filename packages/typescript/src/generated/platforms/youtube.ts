// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

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
}

export type YoutubeChannelData = unknown;

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
}

export type YoutubeChannelCommunityPostsData = unknown;

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
}

export type YoutubeChannelLivesData = unknown;

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
}

export type YoutubeChannelPlaylistsData = unknown;

/**
 * Input for YouTube Channel Shorts (youtube.channel_shorts).
 */
export interface YoutubeChannelShortsInput {
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
   * Sort order.
   * One of: newest, popular.
   */
  sort?: "newest" | "popular";
}

export type YoutubeChannelShortsData = unknown;

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
   * Sort order.
   * One of: latest, popular.
   */
  sort?: "latest" | "popular";
}

export type YoutubeChannelVideosData = unknown;

/**
 * Input for YouTube Comment Replies (youtube.comment_replies).
 */
export interface YoutubeCommentRepliesInput {
  /**
   * Replies continuation token from the comments endpoint, or the continuationToken from a previous replies response for further pagination.
   */
  continuationToken: string;
}

export type YoutubeCommentRepliesData = unknown;

/**
 * Input for YouTube Community Post (youtube.community_post).
 */
export interface YoutubeCommunityPostInput {
  /**
   * URL of the YouTube community post.
   */
  url: string;
}

export type YoutubeCommunityPostData = unknown;

/**
 * Input for YouTube Playlist (youtube.playlist).
 */
export interface YoutubePlaylistInput {
  /**
   * The playlist ID: the "list" parameter in a playlist URL (e.g. "PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi").
   */
  playlistId: string;
}

export type YoutubePlaylistData = unknown;

/**
 * Input for YouTube Search (youtube.search).
 */
export interface YoutubeSearchInput {
  /**
   * Continuation token from a previous response for pagination.
   */
  cursor?: string;
  /**
   * The YouTube search query.
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

export type YoutubeSearchData = unknown;

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
   * Content filter.
   * One of: all, shorts.
   */
  type?: "all" | "shorts";
}

export type YoutubeSearchHashtagData = unknown;

/**
 * Input for YouTube Trending Shorts (youtube.trending_shorts).
 */
export interface YoutubeTrendingShortsInput {}

export type YoutubeTrendingShortsData = unknown;

/**
 * Input for YouTube Video (youtube.video).
 */
export interface YoutubeVideoInput {
  /**
   * YouTube video ID.
   */
  id?: string;
  /**
   * Full YouTube video URL.
   */
  url?: string;
}

export type YoutubeVideoData = unknown;

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
   * Full YouTube video URL.
   */
  url: string;
}

export type YoutubeVideoCommentsData = unknown;

/**
 * Input for YouTube Video Sponsors (youtube.video_sponsors).
 */
export interface YoutubeVideoSponsorsInput {
  /**
   * 2-letter language code for transcript lookup (e.g. en, es, fr).
   */
  language?: string;
  /**
   * YouTube video or Short URL.
   */
  url: string;
}

export type YoutubeVideoSponsorsData = unknown;

/**
 * Input for YouTube Video Transcript (youtube.video_transcript).
 */
export interface YoutubeVideoTranscriptInput {
  /**
   * YouTube video ID.
   */
  id?: string;
  /**
   * Full YouTube video URL.
   */
  url?: string;
}

export type YoutubeVideoTranscriptData = unknown;

/**
 * Typed methods for the youtube platform. Attached to the AnyAPI client as
 * `client.youtube`.
 */
export class YoutubeNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * YouTube Channel
   *
   * Fetch a YouTube channel's stats (subscribers, video count, total views, description) by handle or channel ID, normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.channel({ handle: "@mkbhd" });
   */
  channel(
    input: YoutubeChannelInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeChannelData>> {
    return this._core.run(
      "youtube.channel",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeChannelData>>;
  }

  /**
   * YouTube Channel Community Posts
   *
   * List a YouTube channel's community posts by handle or channel ID with cursor pagination (text, likes, image, publish time), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.channelCommunityPosts({ handle: "@MrBeast" });
   */
  channelCommunityPosts(
    input: YoutubeChannelCommunityPostsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeChannelCommunityPostsData>> {
    return this._core.run(
      "youtube.channel_community_posts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeChannelCommunityPostsData>>;
  }

  /**
   * YouTube Channel Live Streams
   *
   * List a YouTube channel's live and past-live streams by handle or channel ID with cursor pagination (title, views, length, publish time), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.channelLives({ handle: "@IShowSpeed" });
   */
  channelLives(
    input: YoutubeChannelLivesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeChannelLivesData>> {
    return this._core.run(
      "youtube.channel_lives",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeChannelLivesData>>;
  }

  /**
   * YouTube Channel Playlists
   *
   * List a YouTube channel's playlists by handle or channel ID with cursor pagination (title, video count, thumbnail), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.channelPlaylists({ handle: "@veritasium" });
   */
  channelPlaylists(
    input: YoutubeChannelPlaylistsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeChannelPlaylistsData>> {
    return this._core.run(
      "youtube.channel_playlists",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeChannelPlaylistsData>>;
  }

  /**
   * YouTube Channel Shorts
   *
   * List a YouTube channel's Shorts by handle or channel ID with cursor pagination (title, views, likes, duration), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.channelShorts({ handle: "@starterstory" });
   */
  channelShorts(
    input: YoutubeChannelShortsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeChannelShortsData>> {
    return this._core.run(
      "youtube.channel_shorts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeChannelShortsData>>;
  }

  /**
   * YouTube Channel Videos
   *
   * List a YouTube channel's videos by handle or channel ID with cursor pagination (title, views, length, publish time), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.channelVideos({ handle: "@mkbhd" });
   */
  channelVideos(
    input: YoutubeChannelVideosInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeChannelVideosData>> {
    return this._core.run(
      "youtube.channel_videos",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeChannelVideosData>>;
  }

  /**
   * YouTube Comment Replies
   *
   * List replies to a YouTube comment using a continuation token with cursor pagination (text, author, likes, publish time), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.commentReplies({ continuationToken: "Eg0SC19fZm1EajBaSjFRGAYygwEaUBIaVWd3aXRjRk9fdmtpM0x4LUNfZDRBYUFCQWciAggAKhhVQ1g2T1EzRGtjc2JZTkU2SDh1UVF1VkEyC19fZm1EajBaSjFRQABICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dpdGNGT192a2kzTHgtQ19kNEFhQUJBZw==" });
   */
  commentReplies(
    input: YoutubeCommentRepliesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeCommentRepliesData>> {
    return this._core.run(
      "youtube.comment_replies",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeCommentRepliesData>>;
  }

  /**
   * YouTube Community Post
   *
   * Fetch a single YouTube community post by URL (text, images, channel, publish time), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.communityPost({ url: "https://www.youtube.com/post/Ugkx1LonSRBBUqASv-J8j9_FesxwlMAhT3_e" });
   */
  communityPost(
    input: YoutubeCommunityPostInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeCommunityPostData>> {
    return this._core.run(
      "youtube.community_post",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeCommunityPostData>>;
  }

  /**
   * YouTube Playlist
   *
   * List every video in a YouTube playlist (title, length, and channel per video plus playlist owner and totals), normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.playlist({ playlistId: "PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj" });
   */
  playlist(
    input: YoutubePlaylistInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubePlaylistData>> {
    return this._core.run(
      "youtube.playlist",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubePlaylistData>>;
  }

  /**
   * YouTube Search
   *
   * Search YouTube and get matching videos (title, channel, views, length, publish time) as normalized JSON, across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.search({ query: "how to cook rice" });
   */
  search(
    input: YoutubeSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeSearchData>> {
    return this._core.run(
      "youtube.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeSearchData>>;
  }

  /**
   * YouTube Hashtag Search
   *
   * Search YouTube videos by hashtag with cursor pagination (title, channel, views, length, publish time), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.searchHashtag({ hashtag: "funny" });
   */
  searchHashtag(
    input: YoutubeSearchHashtagInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeSearchHashtagData>> {
    return this._core.run(
      "youtube.search_hashtag",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeSearchHashtagData>>;
  }

  /**
   * YouTube Trending Shorts
   *
   * List currently trending YouTube Shorts (title, channel, views, likes, duration), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.trendingShorts({});
   */
  trendingShorts(
    input: YoutubeTrendingShortsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeTrendingShortsData>> {
    return this._core.run(
      "youtube.trending_shorts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeTrendingShortsData>>;
  }

  /**
   * YouTube Video
   *
   * Fetch a YouTube video's metadata (title, channel, views, likes, duration, publish date) by URL or ID, normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.video({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
   */
  video(
    input: YoutubeVideoInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeVideoData>> {
    return this._core.run(
      "youtube.video",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeVideoData>>;
  }

  /**
   * YouTube Video Comments
   *
   * List the comments on a YouTube video by URL with cursor pagination (text, author, likes, reply count), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.videoComments({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
   */
  videoComments(
    input: YoutubeVideoCommentsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeVideoCommentsData>> {
    return this._core.run(
      "youtube.video_comments",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeVideoCommentsData>>;
  }

  /**
   * YouTube Video Sponsors
   *
   * Detect suspected sponsors and paid promotions in a YouTube video by URL (sponsor names, websites, confidence), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.videoSponsors({ url: "https://www.youtube.com/watch?v=AVO0ifle-OU" });
   */
  videoSponsors(
    input: YoutubeVideoSponsorsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeVideoSponsorsData>> {
    return this._core.run(
      "youtube.video_sponsors",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeVideoSponsorsData>>;
  }

  /**
   * YouTube Video Transcript
   *
   * Fetch the transcript/captions of a YouTube video by URL or ID, normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.youtube.videoTranscript({ url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" });
   */
  videoTranscript(
    input: YoutubeVideoTranscriptInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YoutubeVideoTranscriptData>> {
    return this._core.run(
      "youtube.video_transcript",
      input,
      options,
    ) as unknown as Promise<BareRunResult<YoutubeVideoTranscriptData>>;
  }
}
