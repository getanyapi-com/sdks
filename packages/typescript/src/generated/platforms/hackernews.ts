// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Hacker News Profile (hackernews.profile).
 */
export interface HackernewsProfileInput {
  /**
   * Hacker News username, e.g. "pg".
   */
  handle: string;
}

/**
 * The `data` payload of Hacker News Profile (hackernews.profile).
 */
export interface HackernewsProfileData {
  bio: string;
  karma: number;
  /**
   * Populated whenever the provider returns data.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * Input for Hacker News Search (hackernews.search).
 */
export interface HackernewsSearchInput {
  /**
   * Search keyword, e.g. "ai".
   */
  query: string;
  /**
   * Optional result filter, e.g. "story" or "comment".
   */
  tags?: string;
}

export interface HackernewsSearchResult {
  /**
   * Populated whenever the provider returns data.
   */
  author: string;
  comments: number;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  points: number;
  /**
   * Populated whenever the provider returns data.
   */
  publishedAt: string;
  /**
   * Populated whenever the provider returns data.
   */
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Hacker News Search (hackernews.search).
 */
export interface HackernewsSearchData {
  /**
   * Populated whenever the provider returns data.
   */
  results: HackernewsSearchResult[];
}

/**
 * Input for Hacker News Story (hackernews.story).
 */
export interface HackernewsStoryInput {
  /**
   * Hacker News story id, e.g. "47340079".
   */
  id: string;
}

/**
 * The `data` payload of Hacker News Story (hackernews.story).
 */
export interface HackernewsStoryData {
  /**
   * Populated whenever the provider returns data.
   */
  author: string;
  comments: number;
  points: number;
  /**
   * Populated whenever the provider returns data.
   */
  publishedAt: string;
  /**
   * Populated whenever the provider returns data.
   */
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * Input for Hacker News Story Comments (hackernews.story_comments).
 */
export interface HackernewsStoryCommentsInput {
  /**
   * Hacker News story id, e.g. "47340079".
   */
  id: string;
}

export interface HackernewsStoryCommentsComment {
  /**
   * Populated whenever the provider returns data.
   */
  author: string;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  parentId: string;
  /**
   * Populated whenever the provider returns data.
   */
  publishedAt: string;
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Hacker News Story Comments (hackernews.story_comments).
 */
export interface HackernewsStoryCommentsData {
  /**
   * Populated whenever the provider returns data.
   */
  comments: HackernewsStoryCommentsComment[];
}

/**
 * Typed methods for the hackernews platform. Attached to the AnyAPI client as
 * `client.hackernews`.
 */
export class HackernewsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Hacker News Profile
   *
   * Get a Hacker News user's public profile by username - karma, bio, and account details as clean JSON, billed per request in USD.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.hackernews.profile({"handle":"pg"});
   */
  profile(
    input: HackernewsProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<HackernewsProfileData>> {
    return this._core.run("hackernews.profile", input, options);
  }

  /**
   * Hacker News Search
   *
   * Search Hacker News by keyword - matching stories with title, link, author, points, and comment count as clean JSON, billed per request in USD.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.hackernews.search({"query":"ai"});
   */
  search(
    input: HackernewsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<HackernewsSearchData>> {
    return this._core.run("hackernews.search", input, options);
  }

  /**
   * Hacker News Story
   *
   * Get a Hacker News story by id - title, link, author, points, and comment count as clean JSON, billed per request in USD.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.hackernews.story({"id":"47340079"});
   */
  story(
    input: HackernewsStoryInput,
    options?: RequestOptions,
  ): Promise<RunResult<HackernewsStoryData>> {
    return this._core.run("hackernews.story", input, options);
  }

  /**
   * Hacker News Story Comments
   *
   * List the comments on a Hacker News story by id - text, author, and timestamp as clean JSON, billed per request in USD.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.hackernews.storyComments({"id":"47340079"});
   */
  storyComments(
    input: HackernewsStoryCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<HackernewsStoryCommentsData>> {
    return this._core.run("hackernews.story_comments", input, options);
  }
}
