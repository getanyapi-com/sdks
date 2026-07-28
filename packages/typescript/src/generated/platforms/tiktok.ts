// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for TikTok Ad Library Ad (tiktok.ad_library_ad).
 */
export interface TiktokAdLibraryAdInput {
  /**
   * TikTok Top Ads material/ad ID, or a Top Ads detail URL (e.g. 7648493525660270600).
   */
  adId: string;
}

export type TiktokAdLibraryAdData = unknown;

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
   * Results per page, max 50 (defaults to 20).
   */
  limit?: string;
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
   * Time window for top ads: 7, 30, or 180 days.
   */
  period?: string;
  /**
   * Keyword to search ad titles and content (e.g. spotify).
   */
  query: string;
  /**
   * Country code (defaults to US).
   */
  region?: string;
}

export type TiktokAdLibrarySearchData = unknown;

/**
 * Input for TikTok Audience Demographics (tiktok.audience_demographics).
 */
export interface TiktokAudienceDemographicsInput {
  /**
   * TikTok username without the leading @ (e.g. "shakira").
   */
  handle: string;
}

export type TiktokAudienceDemographicsData = unknown;

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

export type TiktokCommentRepliesData = unknown;

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

export type TiktokFollowersData = unknown;

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

export type TiktokFollowingData = unknown;

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

export type TiktokHashtagVideosData = unknown;

/**
 * Input for TikTok Live (tiktok.live).
 */
export interface TiktokLiveInput {
  /**
   * TikTok username without the leading @ (e.g. "thejustalex").
   */
  handle: string;
}

export type TiktokLiveData = unknown;

/**
 * Input for TikTok Profile (tiktok.profile).
 */
export interface TiktokProfileInput {
  /**
   * TikTok username without the leading @ (e.g. "stoolpresidente").
   */
  handle: string;
}

export type TiktokProfileData = unknown;

/**
 * Input for TikTok Profile Region (tiktok.profile_region).
 */
export interface TiktokProfileRegionInput {
  /**
   * TikTok username without the leading @ (e.g. "stoolpresidente").
   */
  handle: string;
}

export type TiktokProfileRegionData = unknown;

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

export type TiktokProfileVideosData = unknown;

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

export type TiktokSearchHashtagData = unknown;

/**
 * Input for TikTok Keyword Search (tiktok.search_keyword).
 */
export interface TiktokSearchKeywordInput {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * Time frame filter (e.g. 0=any, 1=past 24h, 7=past week).
   */
  datePosted?: string;
  /**
   * The keyword to search TikTok for.
   */
  query: string;
  /**
   * Sort order (e.g. 0=relevance, 1=most liked).
   */
  sortBy?: string;
}

export type TiktokSearchKeywordData = unknown;

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

export type TiktokSearchTopData = unknown;

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

export type TiktokSearchUsersData = unknown;

/**
 * Input for TikTok Song (tiktok.song).
 */
export interface TiktokSongInput {
  /**
   * The clip identifier for the song, found in TikTok music URLs (e.g. 7439295283975702544).
   */
  clipId: string;
}

export type TiktokSongData = unknown;

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

export type TiktokSongVideosData = unknown;

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

export type TiktokTrendingFeedData = unknown;

/**
 * Input for TikTok Video (tiktok.video).
 */
export interface TiktokVideoInput {
  /**
   * Full TikTok video URL.
   */
  url: string;
}

export type TiktokVideoData = unknown;

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

export type TiktokVideoCommentsData = unknown;

/**
 * Input for TikTok Video Transcript (tiktok.video_transcript).
 */
export interface TiktokVideoTranscriptInput {
  /**
   * Full TikTok video URL.
   */
  url: string;
}

export type TiktokVideoTranscriptData = unknown;

/**
 * Typed methods for the tiktok platform. Attached to the AnyAPI client as
 * `client.tiktok`.
 */
export class TiktokNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * TikTok Ad Library Ad
   *
   * Fetch full details for a single TikTok ad (brand, title, spend, CTR, objectives, landing page, and video info), normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.adLibraryAd({ adId: "7648493525660270600" });
   */
  adLibraryAd(
    input: TiktokAdLibraryAdInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokAdLibraryAdData>> {
    return this._core.run(
      "tiktok.ad_library_ad",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokAdLibraryAdData>>;
  }

  /**
   * TikTok Ad Library Search
   *
   * Search TikTok's ad library by keyword (top ads with brand, title, spend, CTR, likes, and video info), normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.adLibrarySearch({ query: "spotify", objective: "conversions" });
   */
  adLibrarySearch(
    input: TiktokAdLibrarySearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokAdLibrarySearchData>> {
    return this._core.run(
      "tiktok.ad_library_search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokAdLibrarySearchData>>;
  }

  /**
   * TikTok Audience Demographics
   *
   * Get the audience country breakdown (follower count and share per country) for a TikTok creator by handle, normalized across providers.
   *
   * Price: $0.01625 per request.
   *
   * @example
   * const res = await client.tiktok.audienceDemographics({ handle: "shakira" });
   */
  audienceDemographics(
    input: TiktokAudienceDemographicsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokAudienceDemographicsData>> {
    return this._core.run(
      "tiktok.audience_demographics",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokAudienceDemographicsData>>;
  }

  /**
   * TikTok Comment Replies
   *
   * List the replies to a TikTok comment with cursor pagination (text, author, likes), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.commentReplies({ commentId: "7623828115408274207", url: "https://www.tiktok.com/@stoolpresidente/video/7623818255903329566" });
   */
  commentReplies(
    input: TiktokCommentRepliesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokCommentRepliesData>> {
    return this._core.run(
      "tiktok.comment_replies",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokCommentRepliesData>>;
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
  ): Promise<BareRunResult<TiktokFollowersData>> {
    return this._core.run(
      "tiktok.followers",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokFollowersData>>;
  }

  /**
   * TikTok Following
   *
   * List the accounts a TikTok user follows (handle, display name, follower count, bio) by username, normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.following({ handle: "stoolpresidente" });
   */
  following(
    input: TiktokFollowingInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokFollowingData>> {
    return this._core.run(
      "tiktok.following",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokFollowingData>>;
  }

  /**
   * TikTok Hashtag Videos
   *
   * List recent TikTok videos for a hashtag (creator, caption, views, likes, shares), normalized output.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.tiktok.hashtagVideos({ hashtag: "cooking", limit: 3 });
   */
  hashtagVideos(
    input: TiktokHashtagVideosInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokHashtagVideosData>> {
    return this._core.run(
      "tiktok.hashtag_videos",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokHashtagVideosData>>;
  }

  /**
   * TikTok Live
   *
   * Check whether a TikTok creator is live and get the current live room (title, viewers, start time) by handle, normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.live({ handle: "thejustalex" });
   */
  live(
    input: TiktokLiveInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokLiveData>> {
    return this._core.run("tiktok.live", input, options) as unknown as Promise<
      BareRunResult<TiktokLiveData>
    >;
  }

  /**
   * TikTok Profile
   *
   * Fetch a TikTok creator's public profile (followers, likes, bio, verification) by handle, normalized across providers with transparent failover.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.tiktok.profile({ handle: "zachking" });
   */
  profile(
    input: TiktokProfileInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokProfileData>> {
    return this._core.run(
      "tiktok.profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokProfileData>>;
  }

  /**
   * TikTok Profile Region
   *
   * Resolve the home region (country) of a TikTok creator by handle, normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.profileRegion({ handle: "stoolpresidente" });
   */
  profileRegion(
    input: TiktokProfileRegionInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokProfileRegionData>> {
    return this._core.run(
      "tiktok.profile_region",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokProfileRegionData>>;
  }

  /**
   * TikTok Profile Videos
   *
   * List a TikTok creator's recent videos (views, likes, comments) by handle with cursor pagination, normalized across providers.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.tiktok.profileVideos({ handle: "zachking" });
   */
  profileVideos(
    input: TiktokProfileVideosInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokProfileVideosData>> {
    return this._core.run(
      "tiktok.profile_videos",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokProfileVideosData>>;
  }

  /**
   * TikTok Hashtag Search
   *
   * Search TikTok by hashtag and get matching videos (caption, views, likes, comments, shares) as normalized JSON, across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.searchHashtag({ query: "recipe" });
   */
  searchHashtag(
    input: TiktokSearchHashtagInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokSearchHashtagData>> {
    return this._core.run(
      "tiktok.search_hashtag",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokSearchHashtagData>>;
  }

  /**
   * TikTok Keyword Search
   *
   * Search TikTok by keyword and get matching videos (caption, views, likes, comments, shares) as normalized JSON, across providers with transparent failover.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.tiktok.searchKeyword({ query: "cooking" });
   */
  searchKeyword(
    input: TiktokSearchKeywordInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokSearchKeywordData>> {
    return this._core.run(
      "tiktok.search_keyword",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokSearchKeywordData>>;
  }

  /**
   * TikTok Top Search
   *
   * Search TikTok's top results for a keyword (caption, views, likes, comments, shares) with cursor pagination, normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.searchTop({ query: "funny" });
   */
  searchTop(
    input: TiktokSearchTopInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokSearchTopData>> {
    return this._core.run(
      "tiktok.search_top",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokSearchTopData>>;
  }

  /**
   * TikTok User Search
   *
   * Search TikTok accounts by keyword (handle, nickname, follower count) with cursor pagination, normalized across providers.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.tiktok.searchUsers({ query: "chef" });
   */
  searchUsers(
    input: TiktokSearchUsersInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokSearchUsersData>> {
    return this._core.run(
      "tiktok.search_users",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokSearchUsersData>>;
  }

  /**
   * TikTok Song
   *
   * Fetch details for a TikTok song or sound (title, author, duration, cover art, and how many videos use it), normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.song({ clipId: "7439295283975702544" });
   */
  song(
    input: TiktokSongInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokSongData>> {
    return this._core.run("tiktok.song", input, options) as unknown as Promise<
      BareRunResult<TiktokSongData>
    >;
  }

  /**
   * TikTok Song Videos
   *
   * List TikTok videos that use a given song or sound (with descriptions, authors, and engagement stats), normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.songVideos({ clipId: "7439295283975702544" });
   */
  songVideos(
    input: TiktokSongVideosInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokSongVideosData>> {
    return this._core.run(
      "tiktok.song_videos",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokSongVideosData>>;
  }

  /**
   * TikTok Trending Feed
   *
   * Get TikTok's trending feed for a region (caption, views, likes, comments, author) as normalized JSON, across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.trendingFeed({ region: "US" });
   */
  trendingFeed(
    input: TiktokTrendingFeedInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokTrendingFeedData>> {
    return this._core.run(
      "tiktok.trending_feed",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokTrendingFeedData>>;
  }

  /**
   * TikTok Video
   *
   * Fetch a single TikTok video by URL with its caption and engagement counts (views, likes, comments, shares, saves), normalized across providers with transparent failover.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.tiktok.video({ url: "https://www.tiktok.com/@mrbeast/video/7654638524729216287?_r=1&u_code=elgjf3ff8cajhk&preview_pb=0&sharer_language=en&_d=elh6737j6kjl71&share_item_id=7654638524729216287&source=h5_m" });
   */
  video(
    input: TiktokVideoInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokVideoData>> {
    return this._core.run("tiktok.video", input, options) as unknown as Promise<
      BareRunResult<TiktokVideoData>
    >;
  }

  /**
   * TikTok Video Comments
   *
   * List the comments on a TikTok video by URL with cursor pagination (text, author, likes, reply count), normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.videoComments({ url: "https://www.tiktok.com/@zachking/video/7650468599424945422?_r=1&u_code=f0hj7d780760m9&preview_pb=0&sharer_language=en&_d=f0hj7blh067h71&share_item_id=7650468599424945422&source=h5_m" });
   */
  videoComments(
    input: TiktokVideoCommentsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokVideoCommentsData>> {
    return this._core.run(
      "tiktok.video_comments",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokVideoCommentsData>>;
  }

  /**
   * TikTok Video Transcript
   *
   * Fetch the spoken-word transcript of a TikTok video by URL, normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktok.videoTranscript({ url: "https://www.tiktok.com/@washingtonpost/video/7609177768793787679" });
   */
  videoTranscript(
    input: TiktokVideoTranscriptInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TiktokVideoTranscriptData>> {
    return this._core.run(
      "tiktok.video_transcript",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TiktokVideoTranscriptData>>;
  }
}
