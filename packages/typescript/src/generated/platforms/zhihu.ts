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
   * Zhihu answer identifier.
   */
  answerId: string;
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
   * Zhihu question identifier.
   */
  questionId: string;
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
   * Pagination cursor from an answer item in the previous response.
   * Default: .
   */
  cursor?: string;
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
   * Zhihu question identifier.
   */
  questionId: string;
  /**
   * Pagination session identifier returned in the previous response.
   * Default: .
   */
  sessionId?: string;
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

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
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

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
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

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
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

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
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

**Price:** \$1.00 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.001 per request.
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
