// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type ZhihuAnswerData = unknown;

/**
 * Input for Zhihu Profile (zhihu.profile).
 */
export interface ZhihuProfileInput {
  /**
   * Zhihu user URL token.
   */
  userToken: string;
}

export type ZhihuProfileData = unknown;

/**
 * Input for Zhihu Question (zhihu.question).
 */
export interface ZhihuQuestionInput {
  /**
   * Zhihu question identifier.
   */
  questionId: string;
}

export type ZhihuQuestionData = unknown;

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

export type ZhihuQuestionAnswersData = unknown;

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

export type ZhihuSearchArticlesData = unknown;

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
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.zhihu.answer({ answerId: "2054145988235880002" });
   */
  answer(
    input: ZhihuAnswerInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ZhihuAnswerData>> {
    return this._core.run("zhihu.answer", input, options) as unknown as Promise<
      BareRunResult<ZhihuAnswerData>
    >;
  }

  /**
   * Zhihu Profile
   *
   * Fetch a public Zhihu profile with normalized identity and audience data.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.zhihu.profile({ userToken: "ming-he-43-93" });
   */
  profile(
    input: ZhihuProfileInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ZhihuProfileData>> {
    return this._core.run(
      "zhihu.profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ZhihuProfileData>>;
  }

  /**
   * Zhihu Question
   *
   * Fetch a public Zhihu question with normalized text and engagement statistics.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.zhihu.question({ questionId: "37811449" });
   */
  question(
    input: ZhihuQuestionInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ZhihuQuestionData>> {
    return this._core.run(
      "zhihu.question",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ZhihuQuestionData>>;
  }

  /**
   * Zhihu Question Answers
   *
   * List public answers to a Zhihu question with normalized authors and engagement data.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.zhihu.questionAnswers({ questionId: "37811449", limit: 5, offset: 0, order: "default" });
   */
  questionAnswers(
    input: ZhihuQuestionAnswersInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ZhihuQuestionAnswersData>> {
    return this._core.run(
      "zhihu.question_answers",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ZhihuQuestionAnswersData>>;
  }

  /**
   * Zhihu Article Search
   *
   * Search public Zhihu articles by keyword with normalized author and engagement data.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.zhihu.searchArticles({ query: "deepseek", limit: "20", showAllTopics: 0 });
   */
  searchArticles(
    input: ZhihuSearchArticlesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<ZhihuSearchArticlesData>> {
    return this._core.run(
      "zhihu.search_articles",
      input,
      options,
    ) as unknown as Promise<BareRunResult<ZhihuSearchArticlesData>>;
  }
}
