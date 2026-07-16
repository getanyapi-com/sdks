// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Twitter Community (twitter.community).
 */
export interface TwitterCommunityInput {
  /**
   * Community URL (e.g. https://x.com/i/communities/1926186499399139650).
   */
  url: string;
}

/**
 * The `data` payload of Twitter Community (twitter.community).
 */
export interface TwitterCommunityData {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Handle of the account that created the community. Populated whenever the provider has data for the entity.
   */
  creatorHandle: string;
  /**
   * Community description text. Populated whenever the provider has data for the entity.
   */
  description: string;
  /**
   * Community identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * How members join, e.g. "open" or "restricted". Populated whenever the provider has data for the entity.
   */
  joinPolicy: string;
  /**
   * Number of members in the community.
   */
  memberCount: number;
  /**
   * Community name. Populated whenever the provider has data for the entity.
   */
  name: string;
  [extra: string]: unknown;
}

/**
 * Input for Twitter Community Tweets (twitter.community_tweets).
 */
export interface TwitterCommunityTweetsInput {
  /**
   * Community URL (e.g. https://x.com/i/communities/1926186499399139650).
   */
  url: string;
}

export interface TwitterCommunityTweetsTweet {
  /**
   * Populated whenever the provider has data for the entity.
   */
  authorHandle: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  favoriteCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  quoteCount: number;
  replyCount: number;
  retweetCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Twitter Community Tweets (twitter.community_tweets).
 */
export interface TwitterCommunityTweetsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  tweets: TwitterCommunityTweetsTweet[];
}

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

export interface TwitterFollowersItem {
  /**
   * URL of the account's profile image (may be empty). Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  /**
   * The account's profile bio/description.
   */
  bio: string;
  /**
   * How many followers this account has.
   */
  followers: number;
  /**
   * How many accounts this account follows.
   */
  following: number;
  /**
   * The account's self-reported location (may be empty).
   */
  location: string;
  /**
   * The account's display name. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * The account's @ handle, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * Whether the account is verified.
   */
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of X / Twitter Followers (twitter.followers).
 */
export interface TwitterFollowersData {
  /**
   * Follower records, normalized to a compact shape. Populated whenever the provider has data for the entity.
   */
  items: TwitterFollowersItem[];
  /**
   * Opaque cursor for the next page of followers, or null when there are no more. Pass it back as cursor to continue.
   */
  nextCursor?: string;
}

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

export interface TwitterFollowingItem {
  /**
   * URL of the account's profile image (may be empty). Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  /**
   * The account's profile bio/description.
   */
  bio: string;
  /**
   * How many followers this account has.
   */
  followers: number;
  /**
   * How many accounts this account follows.
   */
  following: number;
  /**
   * The account's self-reported location (may be empty).
   */
  location: string;
  /**
   * The account's display name. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * The account's @ handle, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * Whether the account is verified.
   */
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of X / Twitter Following (twitter.following).
 */
export interface TwitterFollowingData {
  /**
   * Followed-account records, normalized to a compact shape. Populated whenever the provider has data for the entity.
   */
  items: TwitterFollowingItem[];
  /**
   * Opaque cursor for the next page of followed accounts, or null when there are no more. Pass it back as cursor to continue.
   */
  nextCursor?: string;
}

/**
 * Input for Twitter Profile (twitter.profile).
 */
export interface TwitterProfileInput {
  /**
   * Twitter/X handle without the leading @.
   */
  handle: string;
}

/**
 * The `data` payload of Twitter Profile (twitter.profile).
 */
export interface TwitterProfileData {
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
  tweets: number;
  verified: boolean;
  [extra: string]: unknown;
}

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

export interface TwitterRepliesItem {
  /**
   * Screen name / handle of the reply's author, without the @ prefix.
   */
  authorHandle?: string;
  /**
   * Display name of the reply's author. Empty when the upstream omits it.
   */
  authorName?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * The reply's numeric tweet ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of likes on this reply.
   */
  likeCount?: number;
  /**
   * Number of quote tweets of this reply.
   */
  quoteCount?: number;
  /**
   * Number of replies to this reply.
   */
  replyCount?: number;
  /**
   * Number of reposts/retweets of this reply.
   */
  repostCount?: number;
  /**
   * The reply's text. Empty for media-only replies with no text.
   */
  text: string;
  /**
   * Canonical x.com URL of the reply, with tracking query params stripped. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Number of views of this reply.
   */
  viewCount?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of X / Twitter Post Replies (twitter.replies).
 */
export interface TwitterRepliesData {
  /**
   * Reply records for the requested post. Populated whenever the provider has data for the entity.
   */
  items: TwitterRepliesItem[];
}

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

export interface TwitterSearchItem {
  /**
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorName?: string;
  /**
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorUsername?: string;
  authorVerified?: boolean;
  bookmarkCount?: number;
  conversationId?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  isReply?: boolean;
  lang?: string;
  likeCount?: number;
  quoteCount?: number;
  replyCount?: number;
  retweetCount?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  viewCount?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of X / Twitter Search (twitter.search).
 */
export interface TwitterSearchData {
  /**
   * Tweet records: text, author profile, timestamp, and engagement metrics (likes, retweets, replies, views). Populated whenever the provider has data for the entity.
   */
  items: TwitterSearchItem[];
  /**
   * Opaque cursor for the next page of search results, or null when there are no more. Pass it back as cursor to continue.
   */
  nextCursor?: string;
}

/**
 * Input for Twitter Tweet (twitter.tweet).
 */
export interface TwitterTweetInput {
  /**
   * Canonical x.com or twitter.com status URL with a numeric tweet ID, including /i/web/status and media-share variants.
   */
  url: string;
}

/**
 * The `data` payload of Twitter Tweet (twitter.tweet).
 */
export interface TwitterTweetData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  authorId: string;
  bookmarks: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  quotes: number;
  replies: number;
  retweets: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * Input for Twitter Tweet Transcript (twitter.tweet_transcript).
 */
export interface TwitterTweetTranscriptInput {
  /**
   * Tweet URL of the video to transcribe (e.g. https://x.com/TheoVon/status/1916982720317821050).
   */
  url: string;
}

/**
 * The `data` payload of Twitter Tweet Transcript (twitter.tweet_transcript).
 */
export interface TwitterTweetTranscriptData {
  transcript: string;
  [extra: string]: unknown;
}

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

export interface TwitterUserPostsTweet {
  /**
   * Number of bookmarks.
   */
  bookmarks: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * The post's numeric tweet ID, represented as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Whether X marks the post as pinned on the profile.
   */
  isPinned: boolean;
  /**
   * Whether X marks the record as a reply. Certified Posts-tab captures use this for self-thread continuations.
   */
  isReply?: boolean;
  /**
   * Language code reported for the post, when available.
   */
  lang?: string;
  /**
   * Number of likes.
   */
  likes: number;
  /**
   * Number of quote posts.
   */
  quotes?: number;
  /**
   * Number of replies.
   */
  replies: number;
  /**
   * Number of reposts or retweets.
   */
  retweets: number;
  /**
   * The post text. Empty for media-only posts. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Canonical x.com URL of the post. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * Number of views.
   */
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of X / Twitter User Posts (twitter.user_posts).
 */
export interface TwitterUserPostsData {
  /**
   * Opaque cursor for the next native Posts-tab page, or null when no more pages are available.
   */
  nextCursor: string;
  /**
   * Posts in profile order. A pinned post may appear before otherwise reverse-chronological results. Populated whenever the provider has data for the entity.
   */
  tweets: TwitterUserPostsTweet[];
}

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

export interface TwitterUserTweetsTweet {
  bookmarks: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  isPinned: boolean;
  isReply?: boolean;
  lang?: string;
  likes: number;
  quotes?: number;
  replies: number;
  retweets: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of X / Twitter User Tweets and Replies (twitter.user_tweets).
 */
export interface TwitterUserTweetsData {
  /**
   * Reserved pagination cursor. The current bulk lane returns null; cursor-capable lanes may return an opaque continuation value in the future.
   */
  nextCursor?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  tweets: TwitterUserTweetsTweet[];
}

/**
 * Typed methods for the twitter platform. Attached to the AnyAPI client as
 * `client.twitter`.
 */
export class TwitterNamespace {
  constructor(private readonly _core: ClientCore) {}

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
  ): Promise<RunResult<TwitterCommunityData>> {
    return this._core.run("twitter.community", input, options);
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
  ): Promise<RunResult<TwitterCommunityTweetsData>> {
    return this._core.run("twitter.community_tweets", input, options);
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
  ): Promise<RunResult<TwitterFollowersData>> {
    return this._core.run("twitter.followers", input, options);
  }

  /**
   * Iterate every result of X / Twitter Followers across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterFollowers(
    input: TwitterFollowersInput,
    options?: RequestOptions,
  ): Paginator<TwitterFollowersItem, RunResult<TwitterFollowersData>> {
    return paginate<TwitterFollowersItem, RunResult<TwitterFollowersData>>(
      this._core,
      "twitter.followers",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
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
  ): Promise<RunResult<TwitterFollowingData>> {
    return this._core.run("twitter.following", input, options);
  }

  /**
   * Iterate every result of X / Twitter Following across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterFollowing(
    input: TwitterFollowingInput,
    options?: RequestOptions,
  ): Paginator<TwitterFollowingItem, RunResult<TwitterFollowingData>> {
    return paginate<TwitterFollowingItem, RunResult<TwitterFollowingData>>(
      this._core,
      "twitter.following",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
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
  ): Promise<RunResult<TwitterProfileData>> {
    return this._core.run("twitter.profile", input, options);
  }

  /**
   * X / Twitter Post Replies
   *
   * Fetch the replies to any X (Twitter) post URL as structured records - author, text, and engagement.
   *
   * Price: $0.0025 per request plus $0.00025 per result (maximum $0.0125).
   *
   * @example
   * const res = await client.twitter.replies({ url: "https://x.com/jack/status/20", limit: 3 });
   */
  replies(
    input: TwitterRepliesInput,
    options?: RequestOptions,
  ): Promise<RunResult<TwitterRepliesData>> {
    return this._core.run("twitter.replies", input, options);
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
  ): Promise<RunResult<TwitterSearchData>> {
    return this._core.run("twitter.search", input, options);
  }

  /**
   * Iterate every result of X / Twitter Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearch(
    input: TwitterSearchInput,
    options?: RequestOptions,
  ): Paginator<TwitterSearchItem, RunResult<TwitterSearchData>> {
    return paginate<TwitterSearchItem, RunResult<TwitterSearchData>>(
      this._core,
      "twitter.search",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
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
  ): Promise<RunResult<TwitterTweetData>> {
    return this._core.run("twitter.tweet", input, options);
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
  ): Promise<RunResult<TwitterTweetTranscriptData>> {
    return this._core.run("twitter.tweet_transcript", input, options);
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
  ): Promise<RunResult<TwitterUserPostsData>> {
    return this._core.run("twitter.user_posts", input, options);
  }

  /**
   * Iterate every result of X / Twitter User Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserPosts(
    input: TwitterUserPostsInput,
    options?: RequestOptions,
  ): Paginator<TwitterUserPostsTweet, RunResult<TwitterUserPostsData>> {
    return paginate<TwitterUserPostsTweet, RunResult<TwitterUserPostsData>>(
      this._core,
      "twitter.user_posts",
      input as unknown as Record<string, unknown>,
      "tweets",
      false,
      options,
    );
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
  ): Promise<RunResult<TwitterUserTweetsData>> {
    return this._core.run("twitter.user_tweets", input, options);
  }

  /**
   * Iterate every result of X / Twitter User Tweets and Replies across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserTweets(
    input: TwitterUserTweetsInput,
    options?: RequestOptions,
  ): Paginator<TwitterUserTweetsTweet, RunResult<TwitterUserTweetsData>> {
    return paginate<TwitterUserTweetsTweet, RunResult<TwitterUserTweetsData>>(
      this._core,
      "twitter.user_tweets",
      input as unknown as Record<string, unknown>,
      "tweets",
      false,
      options,
    );
  }
}
