// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Zhihu Answer (zhihu.answer).
 */
export interface ZhihuAnswerInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Zhihu answer identifier.
   */
  answerId: string;
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
 * The `data` payload of Zhihu Answer (zhihu.answer).
 */
export interface ZhihuAnswerData {
  /**
   * Author headline.
   */
  authorHeadline?: string;
  /**
   * Author avatar URL.
   * Format: uri.
   */
  authorImage?: string;
  /**
   * Author display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorName?: string;
  /**
   * Author URL token.
   */
  authorToken?: string;
  /**
   * Author identifier.
   */
  authorUserId?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Answer excerpt. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  excerpt?: string;
  /**
   * Answer identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Parent question identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  questionId?: string;
  /**
   * Parent question title. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  questionTitle?: string;
  /**
   * Last update UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  /**
   * Canonical answer URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * Input for Zhihu Profile (zhihu.profile).
 */
export interface ZhihuProfileInput {
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Zhihu user URL token.
   */
  userToken: string;
}

/**
 * The `data` payload of Zhihu Profile (zhihu.profile).
 */
export interface ZhihuProfileData {
  /**
   * Published answer count.
   */
  answers?: number;
  /**
   * Published article count.
   */
  articles?: number;
  /**
   * Follower count.
   */
  followers?: number;
  /**
   * Gender code reported by Zhihu.
   */
  gender?: number;
  /**
   * Profile headline. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  headline?: string;
  /**
   * User identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Profile image URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * IP location label reported by Zhihu.
   */
  ipLocation?: string;
  /**
   * Display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  name?: string;
  /**
   * Whether this is an organization profile.
   */
  organization?: boolean;
  /**
   * Canonical profile URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * User URL token. Populated whenever the provider has data for the entity.
   */
  userToken: string;
  [extra: string]: unknown;
}

/**
 * Input for Zhihu Question (zhihu.question).
 */
export interface ZhihuQuestionInput {
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
   * Zhihu question identifier.
   */
  questionId: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

/**
 * The `data` payload of Zhihu Question (zhihu.question).
 */
export interface ZhihuQuestionData {
  /**
   * Answer count.
   */
  answers?: number;
  /**
   * Comment count.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Question body as returned by Zhihu. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Short question excerpt.
   */
  excerpt?: string;
  /**
   * Follower count.
   */
  followers?: number;
  /**
   * Question identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Question title. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  title?: string;
  /**
   * Last update UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  /**
   * Canonical question URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * View count.
   */
  views?: number;
  [extra: string]: unknown;
}

/**
 * Input for Zhihu Question Answers (zhihu.question_answers).
 */
export interface ZhihuQuestionAnswersInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from an answer item in the previous response.
   * Default: .
   */
  cursor?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Number of answers requested per page.
   * Default: 5.
   */
  limit?: number;
  /**
   * Pagination offset.
   * Default: 0.
   */
  offset?: number;
  /**
   * Answer ordering: default ranking or recently updated.
   * One of: default, updated.
   * Default: default.
   */
  order?: "default" | "updated";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Zhihu question identifier.
   */
  questionId: string;
  /**
   * Pagination session identifier returned in the previous response.
   * Default: .
   */
  sessionId?: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface ZhihuQuestionAnswersAnswer {
  /**
   * Author avatar URL.
   * Format: uri.
   */
  authorImage?: string;
  /**
   * Author display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorName?: string;
  /**
   * Author URL token.
   */
  authorToken?: string;
  /**
   * Author identifier.
   */
  authorUserId?: string;
  /**
   * Comment count.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Cursor associated with this answer; use the final item cursor for the next page.
   */
  cursor?: string;
  /**
   * Answer excerpt. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  excerpt?: string;
  /**
   * Answer identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Save count.
   */
  saves?: number;
  /**
   * Thanks count.
   */
  thanks?: number;
  /**
   * Last update UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  /**
   * Canonical answer URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * Upvote count.
   */
  votes?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Zhihu Question Answers (zhihu.question_answers).
 */
export interface ZhihuQuestionAnswersData {
  /**
   * Normalized answers. Populated whenever the provider has data for the entity.
   */
  answers: ZhihuQuestionAnswersAnswer[];
  /**
   * Whether the result set has reached its final page.
   */
  isEnd: boolean;
  /**
   * Session identifier to pass when requesting another page.
   */
  sessionId: string;
}

/**
 * Input for Zhihu Article Search (zhihu.search_articles).
 */
export interface ZhihuSearchArticlesInput {
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
   * Number of articles requested per page.
   * Default: 20.
   */
  limit?: string;
  /**
   * Result offset returned as nextOffset in the previous response.
   * Default: 0.
   */
  offset?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keyword.
   */
  query: string;
  /**
   * Search hash identifier returned in the previous response.
   * Default: .
   */
  searchHashId?: string;
  /**
   * Whether to include all topics: 0 excludes them and 1 includes them.
   * Default: 0.
   */
  showAllTopics?: number;
  /**
   * Article ordering: comprehensive, most upvoted, or newest.
   * One of: , upvoted_count, created_time.
   * Default: .
   */
  sort?: "" | "upvoted_count" | "created_time";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Optional publication-time filter.
   * One of: , a_day, a_week, a_month, three_months, half_a_year, a_year.
   * Default: .
   */
  timeInterval?:
    | ""
    | "a_day"
    | "a_week"
    | "a_month"
    | "three_months"
    | "half_a_year"
    | "a_year";
  /**
   * Article-search vertical continuation state returned as nextVerticalInfo in the previous response.
   * Default: 0,0,0,0,0,0,0,0,0,2,0,0.
   */
  verticalInfo?: string;
}

export interface ZhihuSearchArticlesArticle {
  /**
   * Author avatar URL.
   * Format: uri.
   */
  authorImage?: string;
  /**
   * Author display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorName?: string;
  /**
   * Author URL token.
   */
  authorToken?: string;
  /**
   * Author identifier.
   */
  authorUserId?: string;
  /**
   * Comment count.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Article excerpt. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  excerpt?: string;
  /**
   * Article identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Article title. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  title?: string;
  /**
   * Last update UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  /**
   * Canonical article URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * Upvote count.
   */
  votes?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Zhihu Article Search (zhihu.search_articles).
 */
export interface ZhihuSearchArticlesData {
  /**
   * Normalized article results. Populated whenever the provider has data for the entity.
   */
  articles: ZhihuSearchArticlesArticle[];
  /**
   * Whether the result set has reached its final page.
   */
  isEnd: boolean;
  /**
   * Result offset to pass as offset when requesting the next page.
   */
  nextOffset: string;
  /**
   * Article-search vertical continuation state to pass as verticalInfo when requesting the next page.
   */
  nextVerticalInfo: string;
  /**
   * Search hash identifier to pass when requesting another page.
   */
  searchHashId: string;
}

/**
 * Typed methods for the zhihu platform. Attached to the AnyAPI client as
 * `client.zhihu`.
 */
export class ZhihuNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Zhihu Answer
   *
   * Fetch a public Zhihu answer with normalized author and question data.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.zhihu.answer({ answerId: "2054145988235880002" });
   */
  answer(
    input: ZhihuAnswerInput,
    options?: RequestOptions,
  ): Promise<RunResult<ZhihuAnswerData>> {
    return this._core.run("zhihu.answer", input, options);
  }

  /**
   * Zhihu Profile
   *
   * Fetch a public Zhihu profile with normalized identity and audience data.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.zhihu.profile({ userToken: "ming-he-43-93" });
   */
  profile(
    input: ZhihuProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<ZhihuProfileData>> {
    return this._core.run("zhihu.profile", input, options);
  }

  /**
   * Zhihu Question
   *
   * Fetch a public Zhihu question with normalized text and engagement statistics.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.zhihu.question({ questionId: "37811449" });
   */
  question(
    input: ZhihuQuestionInput,
    options?: RequestOptions,
  ): Promise<RunResult<ZhihuQuestionData>> {
    return this._core.run("zhihu.question", input, options);
  }

  /**
   * Zhihu Question Answers
   *
   * List public answers to a Zhihu question with normalized authors and engagement data.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.zhihu.questionAnswers({ questionId: "37811449", limit: 5, offset: 0, order: "default" });
   */
  questionAnswers(
    input: ZhihuQuestionAnswersInput,
    options?: RequestOptions,
  ): Promise<RunResult<ZhihuQuestionAnswersData>> {
    return this._core.run("zhihu.question_answers", input, options);
  }

  /**
   * Zhihu Article Search
   *
   * Search public Zhihu articles by keyword with normalized author and engagement data.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.zhihu.searchArticles({ query: "deepseek", limit: "20", showAllTopics: 0 });
   */
  searchArticles(
    input: ZhihuSearchArticlesInput,
    options?: RequestOptions,
  ): Promise<RunResult<ZhihuSearchArticlesData>> {
    return this._core.run("zhihu.search_articles", input, options);
  }
}
