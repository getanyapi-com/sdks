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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Hacker News username, e.g. "pg".
   */
  handle: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

/**
 * The `data` payload of Hacker News Profile (hackernews.profile).
 */
export interface HackernewsProfileData {
  bio: string;
  karma: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * Input for Hacker News Search (hackernews.search).
 */
export interface HackernewsSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keyword, e.g. "ai".
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Optional result filter, e.g. "story" or "comment".
   */
  tags?: string;
}

export interface HackernewsSearchResult {
  /**
   * Submitting user's username. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * Number of comments on the story.
   */
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Hacker News item id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Story score (upvotes).
   */
  points: number;
  /**
   * Story title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Story link.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Hacker News Search (hackernews.search).
 */
export interface HackernewsSearchData {
  /**
   * Matching Hacker News stories. Populated whenever the provider has data for the entity.
   */
  results: HackernewsSearchResult[];
}

/**
 * Input for Hacker News Story (hackernews.story).
 */
export interface HackernewsStoryInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Hacker News story id, e.g. "47340079".
   */
  id: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

/**
 * The `data` payload of Hacker News Story (hackernews.story).
 */
export interface HackernewsStoryData {
  /**
   * Submitting user's username. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * Number of comments on the story.
   */
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Story score (upvotes).
   */
  points: number;
  /**
   * Story title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Story link.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * Input for Hacker News Story Comments (hackernews.story_comments).
 */
export interface HackernewsStoryCommentsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Hacker News story id, e.g. "47340079".
   */
  id: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface HackernewsStoryCommentsComment {
  /**
   * Commenting user's username. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Hacker News comment id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Id of the parent item (story or comment) this reply belongs to.
   */
  parentId: string;
  /**
   * Comment body text.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Hacker News Story Comments (hackernews.story_comments).
 */
export interface HackernewsStoryCommentsData {
  /**
   * Comments on the story. Populated whenever the provider has data for the entity.
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
   * Get a Hacker News user's public profile by username - karma, bio, and account details as clean JSON.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.hackernews.profile({ handle: "pg" });
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
   * Search Hacker News by keyword - matching stories with title, link, author, points, and comment count as clean JSON.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.hackernews.search({ query: "ai" });
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
   * Get a Hacker News story by id - title, link, author, points, and comment count as clean JSON.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.hackernews.story({ id: "47340079" });
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
   * List the comments on a Hacker News story by id - text, author, and timestamp as clean JSON.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.hackernews.storyComments({ id: "47340079" });
   */
  storyComments(
    input: HackernewsStoryCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<HackernewsStoryCommentsData>> {
    return this._core.run("hackernews.story_comments", input, options);
  }
}
