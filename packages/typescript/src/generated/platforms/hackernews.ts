// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type HackernewsProfileData = unknown;

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

export type HackernewsSearchData = unknown;

/**
 * Input for Hacker News Story (hackernews.story).
 */
export interface HackernewsStoryInput {
  /**
   * Hacker News story id, e.g. "47340079".
   */
  id: string;
}

export type HackernewsStoryData = unknown;

/**
 * Input for Hacker News Story Comments (hackernews.story_comments).
 */
export interface HackernewsStoryCommentsInput {
  /**
   * Hacker News story id, e.g. "47340079".
   */
  id: string;
}

export type HackernewsStoryCommentsData = unknown;

/**
 * Typed methods for the hackernews platform. Attached to the AnyAPI client as
 * `client.hackernews`.
 */
export class HackernewsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Hacker News Profile
   *
   * Get a Hacker News user's public profile by username - karma, bio, and account details as clean JSON.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.hackernews.profile({ handle: "pg" });
   */
  profile(
    input: HackernewsProfileInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<HackernewsProfileData>> {
    return this._core.run(
      "hackernews.profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<HackernewsProfileData>>;
  }

  /**
   * Hacker News Search
   *
   * Search Hacker News by keyword - matching stories with title, link, author, points, and comment count as clean JSON.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.hackernews.search({ query: "ai" });
   */
  search(
    input: HackernewsSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<HackernewsSearchData>> {
    return this._core.run(
      "hackernews.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<HackernewsSearchData>>;
  }

  /**
   * Hacker News Story
   *
   * Get a Hacker News story by id - title, link, author, points, and comment count as clean JSON.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.hackernews.story({ id: "47340079" });
   */
  story(
    input: HackernewsStoryInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<HackernewsStoryData>> {
    return this._core.run(
      "hackernews.story",
      input,
      options,
    ) as unknown as Promise<BareRunResult<HackernewsStoryData>>;
  }

  /**
   * Hacker News Story Comments
   *
   * List the comments on a Hacker News story by id - text, author, and timestamp as clean JSON.
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.hackernews.storyComments({ id: "47340079" });
   */
  storyComments(
    input: HackernewsStoryCommentsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<HackernewsStoryCommentsData>> {
    return this._core.run(
      "hackernews.story_comments",
      input,
      options,
    ) as unknown as Promise<BareRunResult<HackernewsStoryCommentsData>>;
  }
}
