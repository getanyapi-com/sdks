// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for GitHub Repository (github.repository).
 */
export interface GithubRepositoryInput {
  /**
   * GitHub repository URL (e.g. https://github.com/facebook/react).
   */
  url: string;
}

export type GithubRepositoryData = unknown;

/**
 * Input for GitHub Trending Developers (github.trending_developers).
 */
export interface GithubTrendingDevelopersInput {
  /**
   * Programming language to filter trending developers (e.g. javascript, python, go).
   */
  language?: string;
  /**
   * Trending range: daily, weekly, or monthly (defaults to daily).
   */
  since?: string;
}

export type GithubTrendingDevelopersData = unknown;

/**
 * Input for GitHub Trending Repositories (github.trending_repositories).
 */
export interface GithubTrendingRepositoriesInput {
  /**
   * Filter by programming language (e.g. "go", "typescript"). Omit for all languages.
   */
  language?: string;
  /**
   * Trending window.
   * One of: daily, weekly, monthly.
   * Default: daily.
   */
  since?: "daily" | "weekly" | "monthly";
}

export type GithubTrendingRepositoriesData = unknown;

/**
 * Input for GitHub User (github.user).
 */
export interface GithubUserInput {
  /**
   * GitHub username.
   */
  handle: string;
}

export type GithubUserData = unknown;

/**
 * Input for GitHub User Activity (github.user_activity).
 */
export interface GithubUserActivityInput {
  /**
   * Pagination cursor from a previous response (pages backward by month).
   */
  cursor?: string;
  /**
   * GitHub username.
   */
  handle: string;
  /**
   * Year of contribution activity to return (defaults to the current year).
   */
  year?: string;
}

export type GithubUserActivityData = unknown;

/**
 * Input for GitHub User Contributions (github.user_contributions).
 */
export interface GithubUserContributionsInput {
  /**
   * GitHub username.
   */
  handle: string;
  /**
   * Calendar year of the contribution graph. Defaults to the current year.
   */
  year?: number;
}

export type GithubUserContributionsData = unknown;

/**
 * Input for GitHub User Followers (github.user_followers).
 */
export interface GithubUserFollowersInput {
  /**
   * Pagination cursor from a previous response (page number, defaults to 1).
   */
  cursor?: string;
  /**
   * GitHub username.
   */
  handle: string;
}

export type GithubUserFollowersData = unknown;

/**
 * Input for GitHub User Following (github.user_following).
 */
export interface GithubUserFollowingInput {
  /**
   * Pagination cursor from a previous response (page number, defaults to 1).
   */
  cursor?: string;
  /**
   * GitHub username.
   */
  handle: string;
}

export type GithubUserFollowingData = unknown;

/**
 * Input for GitHub User Pull Requests (github.user_pull_requests).
 */
export interface GithubUserPullRequestsInput {
  /**
   * Pagination cursor from a previous response (page number, defaults to 1).
   */
  cursor?: string;
  /**
   * GitHub username.
   */
  handle: string;
  /**
   * Only include pull requests created on or after this date (YYYY-MM-DD).
   */
  since?: string;
  /**
   * Only include pull requests created on or before this date (YYYY-MM-DD).
   */
  until?: string;
}

export type GithubUserPullRequestsData = unknown;

/**
 * Input for GitHub User Repositories (github.user_repositories).
 */
export interface GithubUserRepositoriesInput {
  /**
   * 1-based results page. Use the output's nextCursor to paginate.
   * Range: minimum 1.
   * Default: 1.
   */
  cursor?: number;
  /**
   * Sort direction, ascending or descending, paired with sort.
   * One of: asc, desc.
   */
  direction?: "asc" | "desc";
  /**
   * GitHub username.
   */
  handle: string;
  /**
   * Repository ordering.
   * One of: created, updated, pushed, full_name.
   * Default: updated.
   */
  sort?: "created" | "updated" | "pushed" | "full_name";
  /**
   * Which repositories to include: owner (default), all, or member.
   * One of: owner, all, member.
   */
  type?: "owner" | "all" | "member";
}

export type GithubUserRepositoriesData = unknown;

/**
 * Typed methods for the github platform. Attached to the AnyAPI client as
 * `client.github`.
 */
export class GithubNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * GitHub Repository
   *
   * Fetch a GitHub repository's metadata by URL (stars, forks, language, topics, license, and timestamps), normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.repository({ url: "https://github.com/facebook/react" });
   */
  repository(
    input: GithubRepositoryInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GithubRepositoryData>> {
    return this._core.run(
      "github.repository",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GithubRepositoryData>>;
  }

  /**
   * GitHub Trending Developers
   *
   * List trending GitHub developers (rank, username, name, avatar, and their most popular repository), optionally filtered by programming language and time range.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.trendingDevelopers({ language: "go", since: "weekly" });
   */
  trendingDevelopers(
    input: GithubTrendingDevelopersInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GithubTrendingDevelopersData>> {
    return this._core.run(
      "github.trending_developers",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GithubTrendingDevelopersData>>;
  }

  /**
   * GitHub Trending Repositories
   *
   * List GitHub Trending repositories (rank, stars, stars gained today, language, and description), filterable by language and time window, normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.trendingRepositories({ language: "python", since: "daily" });
   */
  trendingRepositories(
    input: GithubTrendingRepositoriesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GithubTrendingRepositoriesData>> {
    return this._core.run(
      "github.trending_repositories",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GithubTrendingRepositoriesData>>;
  }

  /**
   * GitHub User
   *
   * Fetch a GitHub user's public profile by handle (name, bio, company, location, followers, and repo counts), normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.user({ handle: "torvalds" });
   */
  user(
    input: GithubUserInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GithubUserData>> {
    return this._core.run("github.user", input, options) as unknown as Promise<
      BareRunResult<GithubUserData>
    >;
  }

  /**
   * GitHub User Activity
   *
   * List a GitHub user's public contribution activity by handle (grouped monthly summaries of commits, pull requests, and issues with repository links) for a given year.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.userActivity({ handle: "kentcdodds" });
   */
  userActivity(
    input: GithubUserActivityInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GithubUserActivityData>> {
    return this._core.run(
      "github.user_activity",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GithubUserActivityData>>;
  }

  /**
   * GitHub User Contributions
   *
   * Fetch a GitHub user's contribution graph for a year (total contributions plus per-day counts and heatmap intensity), normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.userContributions({ handle: "torvalds", year: 2024 });
   */
  userContributions(
    input: GithubUserContributionsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GithubUserContributionsData>> {
    return this._core.run(
      "github.user_contributions",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GithubUserContributionsData>>;
  }

  /**
   * GitHub User Followers
   *
   * List a GitHub user's followers by handle (each follower's login, type, avatar, and profile URL) with pagination.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.userFollowers({ handle: "torvalds" });
   */
  userFollowers(
    input: GithubUserFollowersInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GithubUserFollowersData>> {
    return this._core.run(
      "github.user_followers",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GithubUserFollowersData>>;
  }

  /**
   * GitHub User Following
   *
   * List the GitHub users a given user follows by handle (each account's login, type, avatar, and profile URL) with pagination.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.userFollowing({ handle: "kentcdodds" });
   */
  userFollowing(
    input: GithubUserFollowingInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GithubUserFollowingData>> {
    return this._core.run(
      "github.user_following",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GithubUserFollowingData>>;
  }

  /**
   * GitHub User Pull Requests
   *
   * List a GitHub user's public pull requests by handle (title, repository, state, creation date, and URL) with optional date filtering and pagination.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.userPullRequests({ handle: "torvalds" });
   */
  userPullRequests(
    input: GithubUserPullRequestsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GithubUserPullRequestsData>> {
    return this._core.run(
      "github.user_pull_requests",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GithubUserPullRequestsData>>;
  }

  /**
   * GitHub User Repositories
   *
   * List a GitHub user's public repositories (name, description, language, stars, and forks) with sorting and cursor pagination, normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.userRepositories({ handle: "torvalds" });
   */
  userRepositories(
    input: GithubUserRepositoriesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<GithubUserRepositoriesData>> {
    return this._core.run(
      "github.user_repositories",
      input,
      options,
    ) as unknown as Promise<BareRunResult<GithubUserRepositoriesData>>;
  }
}
