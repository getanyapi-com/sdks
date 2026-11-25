// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Threads Post (threads.post).
 */
export interface ThreadsPostInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The full URL of the Threads post to fetch (e.g. https://www.threads.com/@zuck/post/C8yKXdRxKqK).
   */
  url: string;
}

/**
 * The `data` payload of Threads Post (threads.post).
 */
export interface ThreadsPostData {
  /**
   * Threads post shortcode.
   */
  code: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Display name of the author. Populated whenever the provider has data for the entity.
   */
  fullName: string;
  /**
   * Post identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * True when the author's account carries a verified badge.
   */
  isVerified?: boolean;
  /**
   * Number of likes on the post.
   */
  likeCount: number;
  /**
   * Profile picture URL of the author.
   */
  profilePicUrl?: string;
  /**
   * Number of quote posts. Null when the source does not report it.
   */
  quoteCount: number | null;
  /**
   * Number of replies to the post. Null when the source does not report it.
   */
  replyCount: number | null;
  /**
   * Number of reposts of the post. Null when the source does not report it.
   */
  repostCount: number | null;
  /**
   * Post text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Canonical URL of the post.
   */
  url?: string;
  /**
   * Username of the author. Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * Input for Threads Profile (threads.profile).
 */
export interface ThreadsProfileInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The Threads username to look up, without the @ prefix (e.g. zuck).
   */
  username: string;
}

/**
 * The `data` payload of Threads Profile (threads.profile).
 */
export interface ThreadsProfileData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  biography: string;
  followerCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  fullName: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  isPrivate: boolean;
  isVerified: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  profilePicUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * Input for Threads Search (threads.search).
 */
export interface ThreadsSearchInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Only return posts published on or before this date, format YYYY-MM-DD (e.g. 2026-08-07). Threads pages backwards in time from here, so narrowing this is how you walk older results.
   */
  endDate?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Keyword or #hashtag to search public Threads posts for (e.g. Widgetable). A #hashtag can return different posts than the plain word, so if a tag returns nothing, try the word without #. Single words and brand names return the most; quotes around the whole query are removed, since quoted searches return nothing. Search a brand or topic rather than a URL - a query that is only a domain is searched by its name (wander.com is searched as wander).
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `nextCursor`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a post that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. On a paginated walk it applies to the first page only; later pages stay with the source that page chose, at the price it was quoted.
   */
  requireFields?: "nextCursor"[];
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Only return posts published on or after this date, format YYYY-MM-DD (e.g. 2026-08-01). Without dates, results lean toward popular posts of any age, so set startDate (e.g. a week ago) to get recent posts; there is no sort option.
   */
  startDate?: string;
}

export interface ThreadsSearchPost {
  /**
   * Threads post shortcode.
   */
  code: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Display name of the author. Populated whenever the provider has data for the entity.
   */
  fullName: string;
  /**
   * Post identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * True when the author's account carries a verified badge.
   */
  isVerified?: boolean;
  /**
   * Number of likes on the post.
   */
  likeCount: number;
  /**
   * Profile picture URL of the author.
   */
  profilePicUrl?: string;
  /**
   * Number of quote posts.
   */
  quoteCount?: number;
  /**
   * Number of replies to the post.
   */
  replyCount: number;
  /**
   * Number of reposts of the post.
   */
  repostCount: number;
  /**
   * Post text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Canonical URL of the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Username of the author. Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Threads Search (threads.search).
 */
export interface ThreadsSearchData {
  /**
   * Opaque cursor for the next page of posts, or null when this source has no more. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
  /**
   * Matching public post records: text, author, engagement counts, timestamp, and URL. Without date filters, results tend to favor popular posts of any age. Use startDate or endDate to narrow the results; neither guarantees newest-first order. Populated whenever the provider has data for the entity.
   */
  posts: ThreadsSearchPost[];
}

/**
 * Input for Threads User Search (threads.search_users).
 */
export interface ThreadsSearchUsersInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The name or username to search Threads users for.
   */
  query: string;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface ThreadsSearchUsersUser {
  /**
   * Populated whenever the provider has data for the entity.
   */
  fullName: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  isVerified: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  profilePicUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Threads User Search (threads.search_users).
 */
export interface ThreadsSearchUsersData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  users: ThreadsSearchUsersUser[];
}

/**
 * Input for Threads User Posts (threads.user_posts).
 */
export interface ThreadsUserPostsInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * The Threads username to list posts for, without the @ prefix.
   */
  handle: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `nextCursor`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a post that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. On a paginated walk it applies to the first page only; later pages stay with the source that page chose, at the price it was quoted.
   */
  requireFields?: "nextCursor"[];
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface ThreadsUserPostsPost {
  /**
   * Threads post shortcode.
   */
  code: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Post identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * True when the author's account carries a verified badge.
   */
  isVerified?: boolean;
  /**
   * Number of likes on the post.
   */
  likeCount: number;
  /**
   * Profile picture URL of the author.
   */
  profilePicUrl?: string;
  /**
   * Number of quote posts.
   */
  quoteCount: number;
  /**
   * Number of replies to the post.
   */
  replyCount: number;
  /**
   * Number of reposts of the post.
   */
  repostCount: number;
  /**
   * Post text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Canonical URL of the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Username of the author. Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Threads User Posts (threads.user_posts).
 */
export interface ThreadsUserPostsData {
  /**
   * Opaque cursor for the next page of posts, or null when this source has no more. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
  /**
   * One page of recent public posts (typically 10 to 15). An older pinned post may appear first. Populated whenever the provider has data for the entity.
   */
  posts: ThreadsUserPostsPost[];
}

/**
 * Typed methods for the threads platform. Attached to the AnyAPI client as
 * `client.threads`.
 */
export class ThreadsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Threads Post
   *
   * Fetch a single Threads post by URL: text, author, engagement counts, and timestamp.
   *
   * Price: $0.0011 per request.
   *
   * @example
   * const res = await client.threads.post({ url: "https://www.threads.com/@aaronparnas/post/DZxPYVFkYSq" });
   */
  post(
    input: ThreadsPostInput,
    options?: RequestOptions,
  ): Promise<RunResult<ThreadsPostData>> {
    return this._core.run("threads.post", input, options);
  }

  /**
   * Threads Profile
   *
   * Fetch a Threads user's public profile (bio, follower count, verification, profile picture) by username.
   *
   * Price: $0.0011 per request.
   *
   * @example
   * const res = await client.threads.profile({ username: "zuck" });
   */
  profile(
    input: ThreadsProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<ThreadsProfileData>> {
    return this._core.run("threads.profile", input, options);
  }

  /**
   * Threads Search
   *
   * Search public Threads posts by keyword or hashtag and get normalized post records: text, author, and engagement.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.threads.search({ query: "trump" });
   */
  search(
    input: ThreadsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<ThreadsSearchData>> {
    return this._core.run("threads.search", input, options);
  }

  /**
   * Iterate every result of Threads Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearch(
    input: ThreadsSearchInput,
    options?: RequestOptions,
  ): Paginator<ThreadsSearchPost, RunResult<ThreadsSearchData>> {
    return paginate<ThreadsSearchPost, RunResult<ThreadsSearchData>>(
      this._core,
      "threads.search",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Threads User Search
   *
   * Search Threads users by name or username and get normalized profile records: username, full name, verification, and picture.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.threads.searchUsers({ query: "shams" });
   */
  searchUsers(
    input: ThreadsSearchUsersInput,
    options?: RequestOptions,
  ): Promise<RunResult<ThreadsSearchUsersData>> {
    return this._core.run("threads.search_users", input, options);
  }

  /**
   * Threads User Posts
   *
   * List a Threads user's recent public posts by username, one page per call (typically 10 to 15): text, engagement counts, and post URLs. Pass nextCursor back as cursor for older posts when it is not null. There is no date filter, and an older pinned post may appear first.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.threads.userPosts({ handle: "trendspider" });
   */
  userPosts(
    input: ThreadsUserPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<ThreadsUserPostsData>> {
    return this._core.run("threads.user_posts", input, options);
  }

  /**
   * Iterate every result of Threads User Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserPosts(
    input: ThreadsUserPostsInput,
    options?: RequestOptions,
  ): Paginator<ThreadsUserPostsPost, RunResult<ThreadsUserPostsData>> {
    return paginate<ThreadsUserPostsPost, RunResult<ThreadsUserPostsData>>(
      this._core,
      "threads.user_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }
}
