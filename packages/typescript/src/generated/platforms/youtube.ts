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
}

/**
 * The `data` payload of YouTube Channel (youtube.channel).
 */
export interface YoutubeChannelData {
  avatarUrl: string;
  channelId: string;
  description: string;
  subscribers: number;
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
}

export interface YoutubeChannelCommunityPostsPost {
  content: string;
  id: string;
  image: string;
  likeCount: number;
  publishedTime: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Channel Community Posts (youtube.channel_community_posts).
 */
export interface YoutubeChannelCommunityPostsData {
  nextCursor: string;
  posts: YoutubeChannelCommunityPostsPost[];
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
}

export interface YoutubeChannelLivesLive {
  id: string;
  lengthText: string;
  publishedTime: string;
  title: string;
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Channel Live Streams (youtube.channel_lives).
 */
export interface YoutubeChannelLivesData {
  lives: YoutubeChannelLivesLive[];
  nextCursor: string;
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
}

export interface YoutubeChannelPlaylistsPlaylist {
  id: string;
  playlistUrl: string;
  thumbnail: string;
  title: string;
  videoCount: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Channel Playlists (youtube.channel_playlists).
 */
export interface YoutubeChannelPlaylistsData {
  nextCursor: string;
  playlists: YoutubeChannelPlaylistsPlaylist[];
}

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

export interface YoutubeChannelShortsShort {
  duration: string;
  id: string;
  likes: number;
  title: string;
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Channel Shorts (youtube.channel_shorts).
 */
export interface YoutubeChannelShortsData {
  nextCursor: string;
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
   * Sort order.
   * One of: latest, popular.
   */
  sort?: "latest" | "popular";
}

export interface YoutubeChannelVideosVideo {
  id: string;
  lengthText: string;
  publishedTime: string;
  title: string;
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Channel Videos (youtube.channel_videos).
 */
export interface YoutubeChannelVideosData {
  nextCursor: string;
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
}

export interface YoutubeCommentRepliesComment {
  authorName: string;
  content: string;
  id: string;
  likes: number;
  publishedTime: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Comment Replies (youtube.comment_replies).
 */
export interface YoutubeCommentRepliesData {
  comments: YoutubeCommentRepliesComment[];
  nextCursor: string;
}

/**
 * Input for YouTube Community Post (youtube.community_post).
 */
export interface YoutubeCommunityPostInput {
  /**
   * URL of the YouTube community post.
   */
  url: string;
}

/**
 * The `data` payload of YouTube Community Post (youtube.community_post).
 */
export interface YoutubeCommunityPostData {
  channelHandle: string;
  channelTitle: string;
  content: string;
  id: string;
  publishedTime: string;
  [extra: string]: unknown;
}

/**
 * Input for YouTube Playlist (youtube.playlist).
 */
export interface YoutubePlaylistInput {
  /**
   * The playlist ID - the "list" parameter in a playlist URL (e.g. "PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi").
   */
  playlistId: string;
}

export interface YoutubePlaylistVideo {
  channel: string;
  id: string;
  lengthSeconds: number;
  lengthText: string;
  thumbnail: string;
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Playlist (youtube.playlist).
 */
export interface YoutubePlaylistData {
  owner: string;
  title: string;
  totalVideos: number;
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

export interface YoutubeSearchVideo {
  channel: string;
  id: string;
  lengthText: string;
  publishedTime: string;
  title: string;
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Search (youtube.search).
 */
export interface YoutubeSearchData {
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
   * Content filter.
   * One of: all, shorts.
   */
  type?: "all" | "shorts";
}

export interface YoutubeSearchHashtagVideo {
  channelTitle: string;
  id: string;
  lengthText: string;
  publishedTime: string;
  title: string;
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Hashtag Search (youtube.search_hashtag).
 */
export interface YoutubeSearchHashtagData {
  nextCursor: string;
  videos: YoutubeSearchHashtagVideo[];
}

/**
 * Input for YouTube Trending Shorts (youtube.trending_shorts).
 */
export interface YoutubeTrendingShortsInput {}

export interface YoutubeTrendingShortsShort {
  channelTitle: string;
  duration: string;
  id: string;
  likes: number;
  title: string;
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Trending Shorts (youtube.trending_shorts).
 */
export interface YoutubeTrendingShortsData {
  shorts: YoutubeTrendingShortsShort[];
}

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

/**
 * The `data` payload of YouTube Video (youtube.video).
 */
export interface YoutubeVideoData {
  channel: string;
  comments: number;
  durationMs: number;
  id: string;
  likes: number;
  publishedAt: string;
  title: string;
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
   * Full YouTube video URL.
   */
  url: string;
}

export interface YoutubeVideoCommentsComment {
  author: string;
  id: string;
  likes: number;
  publishedTime: string;
  replies: number;
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of YouTube Video Comments (youtube.video_comments).
 */
export interface YoutubeVideoCommentsData {
  comments: YoutubeVideoCommentsComment[];
  nextCursor: string;
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
  detectionStatus: string;
  isPaidPromotion: boolean;
  suspectedSponsors: YoutubeVideoSponsorsSuspectedSponsor[];
  title: string;
  videoId: string;
}

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

/**
 * The `data` payload of YouTube Video Transcript (youtube.video_transcript).
 */
export interface YoutubeVideoTranscriptData {
  language: string;
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
  ): Promise<RunResult<YoutubeChannelData>> {
    return this._core.run("youtube.channel", input, options);
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
  ): Promise<RunResult<YoutubeCommentRepliesData>> {
    return this._core.run("youtube.comment_replies", input, options);
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
  ): Promise<RunResult<YoutubeCommunityPostData>> {
    return this._core.run("youtube.community_post", input, options);
  }

  /**
   * YouTube Playlist
   *
   * List every video in a YouTube playlist - title, length, and channel per video plus playlist owner and totals - normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
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
  ): Promise<RunResult<YoutubeSearchData>> {
    return this._core.run("youtube.search", input, options);
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
  ): Promise<RunResult<YoutubeTrendingShortsData>> {
    return this._core.run("youtube.trending_shorts", input, options);
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
  ): Promise<RunResult<YoutubeVideoData>> {
    return this._core.run("youtube.video", input, options);
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
  ): Promise<RunResult<YoutubeVideoSponsorsData>> {
    return this._core.run("youtube.video_sponsors", input, options);
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
  ): Promise<RunResult<YoutubeVideoTranscriptData>> {
    return this._core.run("youtube.video_transcript", input, options);
  }
}
