// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for X / Twitter Article (twitter.article).
 */
export interface TwitterArticleInput {
  /**
   * Canonical x.com or twitter.com URL of the public wrapper post for an X Article.
   */
  url: string;
}

export type TwitterArticleData = unknown;

/**
 * Input for Twitter Community (twitter.community).
 */
export interface TwitterCommunityInput {
  /**
   * Community URL (e.g. https://x.com/i/communities/1926186499399139650).
   */
  url: string;
}

export type TwitterCommunityData = unknown;

/**
 * Input for Twitter Community Tweets (twitter.community_tweets).
 */
export interface TwitterCommunityTweetsInput {
  /**
   * Community URL (e.g. https://x.com/i/communities/1926186499399139650).
   */
  url: string;
}

export type TwitterCommunityTweetsData = unknown;

/**
 * Input for X / Twitter Followers (twitter.followers).
 */
export interface TwitterFollowersInput {
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of followers.
   */
  cursor?: string;
  /**
   * Per-page maximum number of followers to return (1-100000, default 200). A provider may return a smaller native page; follow nextCursor for more.
   * Range: minimum 1, maximum 100000.
   * Default: 200.
   */
  limit?: number;
  /**
   * Set true to get up to limit followers in one response instead of provider-native pages, served by a bulk provider when needed.
   */
  requireSinglePage?: boolean;
  /**
   * The X (Twitter) username to fetch followers for, without the @ prefix (e.g. elonmusk).
   */
  username: string;
}

export type TwitterFollowersData = unknown;

/**
 * Input for X / Twitter Following (twitter.following).
 */
export interface TwitterFollowingInput {
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of followed accounts.
   */
  cursor?: string;
  /**
   * Per-page maximum number of followed accounts to return (1-100000, default 200). A provider may return a smaller native page; follow nextCursor for more.
   * Range: minimum 1, maximum 100000.
   * Default: 200.
   */
  limit?: number;
  /**
   * Set true to get up to limit accounts in one response instead of provider-native pages, served by a bulk provider when needed.
   */
  requireSinglePage?: boolean;
  /**
   * The X (Twitter) username to fetch the following list for, without the @ prefix (e.g. elonmusk).
   */
  username: string;
}

export type TwitterFollowingData = unknown;

/**
 * Input for Twitter Profile (twitter.profile).
 */
export interface TwitterProfileInput {
  /**
   * Twitter/X handle without the leading @.
   */
  handle: string;
}

export type TwitterProfileData = unknown;

/**
 * Input for X / Twitter Post Replies (twitter.replies).
 */
export interface TwitterRepliesInput {
  /**
   * Maximum number of results to return (1-40, default 40). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 40.
   */
  limit?: number;
  /**
   * Full URL of the X (Twitter) post to fetch replies for (e.g. https://x.com/nasa/status/1846987139428634858).
   */
  url: string;
}

export type TwitterRepliesData = unknown;

/**
 * Input for X / Twitter Search (twitter.search).
 */
export interface TwitterSearchInput {
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of search results.
   */
  cursor?: string;
  /**
   * Optional ISO 639-1 language code to restrict tweets to (e.g. en).
   */
  lang?: string;
  /**
   * Per-page maximum number of results to return (1-50, default 20). A provider may return a smaller native page; follow nextCursor for more.
   * Range: minimum 1, maximum 50.
   * Default: 20.
   */
  limit?: number;
  /**
   * Search query using X (Twitter) advanced-search syntax. IMPORTANT: bare terms are ANDed - a tweet must contain EVERY word, so a list of loosely related keywords matches nothing; use one short phrase or OR between alternatives (e.g. 'anyapi OR getanyapi'). You can embed X advanced-search operators directly in the query to filter results: from:username and to:username (author or recipient), since:YYYY-MM-DD and until:YYYY-MM-DD (date range), min_faves:N, min_retweets:N, min_replies:N (engagement floors), "exact phrase", -term to exclude, filter:media and filter:links and -filter:replies (content filters), lang:en, near:city, and geocode:lat,long,radius. Examples: 'from:OpenAI', 'AI agents min_faves:500 -filter:replies', 'nvidia since:2026-01-01 until:2026-03-01'. A query with no matches returns an empty items array; prefer the fewest words that identify the topic.
   */
  query: string;
  /**
   * Result ranking: 'Latest', 'Top', 'Photos', or 'Videos' (e.g. Latest).
   * Default: Latest.
   */
  queryType?: string;
  /**
   * Set true to get up to limit results in one response instead of provider-native pages, served by a bulk provider when needed.
   */
  requireSinglePage?: boolean;
}

export type TwitterSearchData = unknown;

/**
 * Input for X / Twitter Trends (twitter.trends).
 */
export interface TwitterTrendsInput {
  /**
   * Maximum number of ranked trends to return (1-50, default 50).
   * Range: minimum 1, maximum 50.
   * Default: 50.
   */
  limit?: number;
  /**
   * Country name, city name, or ISO country code. Omit for worldwide trends.
   */
  location?: string;
}

export type TwitterTrendsData = unknown;

/**
 * Input for Twitter Tweet (twitter.tweet).
 */
export interface TwitterTweetInput {
  /**
   * Canonical x.com or twitter.com status URL with a numeric tweet ID, including /i/web/status and media-share variants.
   */
  url: string;
}

export type TwitterTweetData = unknown;

/**
 * Input for Twitter Tweet Transcript (twitter.tweet_transcript).
 */
export interface TwitterTweetTranscriptInput {
  /**
   * Tweet URL of the video to transcribe (e.g. https://x.com/TheoVon/status/1916982720317821050).
   */
  url: string;
}

export type TwitterTweetTranscriptData = unknown;

/**
 * Input for X / Twitter User Posts (twitter.user_posts).
 */
export interface TwitterUserPostsInput {
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page.
   */
  cursor?: string;
  /**
   * Twitter/X handle without the leading @.
   */
  handle: string;
}

export type TwitterUserPostsData = unknown;

/**
 * Input for X / Twitter User Tweets and Replies (twitter.user_tweets).
 */
export interface TwitterUserTweetsInput {
  /**
   * Reserved for cursor-capable lanes. The current bulk lane returns nextCursor as null, so omit this field.
   */
  cursor?: string;
  /**
   * Twitter/X handle without the leading @.
   */
  handle: string;
  /**
   * Maximum number of authored tweets and replies to return in the current bulk call (1-1000). The provider may return fewer results.
   * Range: minimum 1, maximum 1000.
   * Default: 20.
   */
  limit?: number;
  /**
   * Compatibility flag for requiring one response. The current lane already returns up to limit results in one bulk call, whether this is omitted or true.
   */
  requireSinglePage?: boolean;
}

export type TwitterUserTweetsData = unknown;

/**
 * Typed methods for the twitter platform. Attached to the AnyAPI client as
 * `client.twitter`.
 */
export class TwitterNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * X / Twitter Article
   *
   * Get a public X long-form article from its wrapper post URL, including its author, engagement, cover image, and structured content blocks.
   *
   * Price: $0.00075 per request.
   *
   * @example
   * const res = await client.twitter.article({ url: "https://x.com/Decentralisedco/status/1905545699552375179" });
   */
  article(
    input: TwitterArticleInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterArticleData>> {
    return this._core.run(
      "twitter.article",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterArticleData>>;
  }

  /**
   * Twitter Community
   *
   * Fetch a Twitter/X community's public details (name, description, member count, join policy) by URL, normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.twitter.community({ url: "https://x.com/i/communities/1926186499399139650" });
   */
  community(
    input: TwitterCommunityInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterCommunityData>> {
    return this._core.run(
      "twitter.community",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterCommunityData>>;
  }

  /**
   * Twitter Community Tweets
   *
   * List recent tweets posted in a Twitter/X community by URL, normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.twitter.communityTweets({ url: "https://x.com/i/communities/1926186499399139650" });
   */
  communityTweets(
    input: TwitterCommunityTweetsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterCommunityTweetsData>> {
    return this._core.run(
      "twitter.community_tweets",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterCommunityTweetsData>>;
  }

  /**
   * X / Twitter Followers
   *
   * Fetch the follower list of any public X (Twitter) account by username with cursor pagination. Limit is a per-page maximum; native pages contain up to 200 accounts unless requireSinglePage selects a bulk lane.
   *
   * Price: $0.00075 per request.
   *
   * @example
   * const res = await client.twitter.followers({ username: "nasa", limit: 200 });
   */
  followers(
    input: TwitterFollowersInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterFollowersData>> {
    return this._core.run(
      "twitter.followers",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterFollowersData>>;
  }

  /**
   * X / Twitter Following
   *
   * List the accounts a public X (Twitter) account follows by username with cursor pagination. Limit is a per-page maximum; native pages contain up to 200 accounts unless requireSinglePage selects a bulk lane.
   *
   * Price: $0.00075 per request.
   *
   * @example
   * const res = await client.twitter.following({ username: "nasa", limit: 200 });
   */
  following(
    input: TwitterFollowingInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterFollowingData>> {
    return this._core.run(
      "twitter.following",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterFollowingData>>;
  }

  /**
   * Twitter Profile
   *
   * Fetch a Twitter/X account's public profile (followers, tweets, bio, verification) by handle, normalized across providers with transparent failover.
   *
   * Price: $0.00075 per request.
   *
   * @example
   * const res = await client.twitter.profile({ handle: "nasa" });
   */
  profile(
    input: TwitterProfileInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterProfileData>> {
    return this._core.run(
      "twitter.profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterProfileData>>;
  }

  /**
   * X / Twitter Post Replies
   *
   * Fetch the replies to any X (Twitter) post URL as structured records: author, text, and engagement.
   *
   * Price: $0.0025 per request plus $0.00025 per result (maximum $0.0125).
   *
   * @example
   * const res = await client.twitter.replies({ url: "https://x.com/jack/status/20", limit: 3 });
   */
  replies(
    input: TwitterRepliesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterRepliesData>> {
    return this._core.run(
      "twitter.replies",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterRepliesData>>;
  }

  /**
   * X / Twitter Search
   *
   * Search X (Twitter) with full advanced-search syntax (operators like from:, since:, until:, min_faves: work inline in the query) and get structured tweets with text, author, engagement, and cursor pagination. Limit is a per-page maximum; native pages contain approximately 20 tweets unless requireSinglePage selects a bulk lane.
   *
   * Price: $0.00075 per request.
   *
   * @example
   * const res = await client.twitter.search({ query: "openai" });
   */
  search(
    input: TwitterSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterSearchData>> {
    return this._core.run(
      "twitter.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterSearchData>>;
  }

  /**
   * X / Twitter Trends
   *
   * Get current X (Twitter) trends for worldwide, a country, or a city in X ranking order, including the resolved location.
   *
   * Price: $0.00075 per request.
   *
   * @example
   * const res = await client.twitter.trends({ limit: 10, location: "US" });
   */
  trends(
    input: TwitterTrendsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterTrendsData>> {
    return this._core.run(
      "twitter.trends",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterTrendsData>>;
  }

  /**
   * Twitter Tweet
   *
   * Fetch a single Twitter/X tweet by URL with its full text and engagement counts (likes, retweets, replies, quotes, bookmarks, views), normalized across providers.
   *
   * Price: $0.00075 per request.
   *
   * @example
   * const res = await client.twitter.tweet({ url: "https://x.com/SpaceX/status/1732824684683784516" });
   */
  tweet(
    input: TwitterTweetInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterTweetData>> {
    return this._core.run(
      "twitter.tweet",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterTweetData>>;
  }

  /**
   * Twitter Tweet Transcript
   *
   * Extract the spoken transcript from a Twitter/X video tweet by URL, normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.twitter.tweetTranscript({ url: "https://x.com/TheoVon/status/1916982720317821050" });
   */
  tweetTranscript(
    input: TwitterTweetTranscriptInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterTweetTranscriptData>> {
    return this._core.run(
      "twitter.tweet_transcript",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterTweetTranscriptData>>;
  }

  /**
   * X / Twitter User Posts
   *
   * Get an X (Twitter) account's profile Posts-tab timeline by handle. Results follow profile order: a pinned post may appear first, followed by otherwise reverse-chronological authored posts, reposts, quotes, and self-thread continuations.
   *
   * Price: $0.00075 per request.
   *
   * @example
   * const res = await client.twitter.userPosts({ handle: "levelsio" });
   */
  userPosts(
    input: TwitterUserPostsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterUserPostsData>> {
    return this._core.run(
      "twitter.user_posts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterUserPostsData>>;
  }

  /**
   * X / Twitter User Tweets and Replies
   *
   * Get up to the requested limit of tweets and replies authored by an X (Twitter) account in one bulk call, with engagement, views, and language. The current lane returns nextCursor as null; cursor is reserved for future cursor-capable lanes.
   *
   * Price: $0 per request plus $0.0002 per result (maximum $0.2).
   *
   * @example
   * const res = await client.twitter.userTweets({ handle: "levelsio", limit: 20 });
   */
  userTweets(
    input: TwitterUserTweetsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<TwitterUserTweetsData>> {
    return this._core.run(
      "twitter.user_tweets",
      input,
      options,
    ) as unknown as Promise<BareRunResult<TwitterUserTweetsData>>;
  }
}
