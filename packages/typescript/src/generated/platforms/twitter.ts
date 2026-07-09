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
   * Maximum number of results to return (1-100000, default 200). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 100000.
   * Default: 200.
   */
  limit?: number;
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
}

/**
 * Input for X / Twitter Following (twitter.following).
 */
export interface TwitterFollowingInput {
  /**
   * Maximum number of results to return (1-100000, default 200). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 100000.
   * Default: 200.
   */
  limit?: number;
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
   * Optional ISO 639-1 language code to restrict tweets to (e.g. en).
   */
  lang?: string;
  /**
   * Maximum number of results to return (1-50, default 50). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 50.
   */
  limit?: number;
  /**
   * Search query using X advanced-search syntax. IMPORTANT: terms are ANDed - a tweet must contain EVERY word, so a list of loosely related keywords matches nothing. Use one short phrase, or OR between alternatives (e.g. 'anyapi OR getanyapi'). Useful operators: from:user, since:YYYY-MM-DD, "exact phrase", -filter:replies. A query with no matches returns an empty items array; prefer the fewest words that identify the topic.
   */
  query: string;
  /**
   * Result ranking: 'Latest', 'Top', 'Photos', or 'Videos' (e.g. Latest).
   * Default: Latest.
   */
  queryType?: string;
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
}

/**
 * Input for Twitter Tweet (twitter.tweet).
 */
export interface TwitterTweetInput {
  /**
   * Full tweet URL, e.g. https://x.com/NASA/status/1800000000000000000.
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
 * Input for Twitter User Tweets (twitter.user_tweets).
 */
export interface TwitterUserTweetsInput {
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of tweets.
   */
  cursor?: string;
  /**
   * Twitter/X handle without the leading @.
   */
  handle: string;
  /**
   * How many tweets you want (1-1000), newest first. By default results may come back in cheap pages of ~20: follow the response's nextCursor for more. With requireSinglePage true, up to this many are returned in one (pricier) call.
   * Range: minimum 1, maximum 1000.
   * Default: 20.
   */
  limit?: number;
  /**
   * Set true to get up to limit tweets in a single response instead of cheap pages, served by a bulk provider at a higher price.
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
 * The `data` payload of Twitter User Tweets (twitter.user_tweets).
 */
export interface TwitterUserTweetsData {
  /**
   * Opaque cursor for the next page of tweets, or null when this lane has no more. Pass it back as cursor to continue.
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

**Price:** \$2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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

**Price:** \$2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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
   * Fetch the follower list of any public X (Twitter) account by username - up to 100,000 follower records per request.

**Price:** billed per result - \$0.15 per 1,000 results, capped at \$15,000.00 per 1,000 requests.
   *
   * Price: $0.00015 per result.
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
   * X / Twitter Following
   *
   * List the accounts a public X (Twitter) account follows by username - up to 100,000 records per request.

**Price:** billed per result - \$0.15 per 1,000 results, capped at \$15,000.00 per 1,000 requests.
   *
   * Price: $0.00015 per result.
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
   * Twitter Profile
   *
   * Fetch a Twitter/X account's public profile (followers, tweets, bio, verification) by handle, normalized across providers with transparent failover.

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
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

**Price:** billed per result - \$2.50 per 1,000 requests base + \$0.25 per 1,000 results, capped at \$12.50 per 1,000 requests.
   *
   * Price: $0.0025 per request plus $0.00025 per result.
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
   * Search X (Twitter) with full advanced-search syntax and get up to 50 structured tweets per request - text, author, and engagement.

**Price:** billed per result - \$4.00 per 1,000 requests base + \$0.20 per 1,000 results, capped at \$14.00 per 1,000 requests.
   *
   * Price: $0.004 per request plus $0.0002 per result.
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
   * Twitter Tweet
   *
   * Fetch a single Twitter/X tweet by URL with its full text and engagement counts (likes, retweets, replies, quotes, bookmarks, views), normalized across providers.

**Price:** \$2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.002 per request.
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

**Price:** \$2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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
   * Twitter User Tweets
   *
   * Get an X (Twitter) account's latest tweets by handle, newest first (reverse-chronological, replies included) - not just the popular ones - up to 1000 per call, with engagement, views, and language, normalized across providers with cursor pagination.

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
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
   * Iterate every result of Twitter User Tweets across pages.
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
