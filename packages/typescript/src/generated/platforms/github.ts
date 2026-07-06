// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for GitHub Repository (github.repository).
 */
export interface GithubRepositoryInput {
  /**
   * GitHub repository URL (e.g. https://github.com/facebook/react).
   */
  url: string;
}

/**
 * The `data` payload of GitHub Repository (github.repository).
 */
export interface GithubRepositoryData {
  archived?: boolean;
  /**
   * Present whenever the upstream returns this record.
   */
  createdAt?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  defaultBranch?: string;
  description?: string;
  fork?: boolean;
  forks?: number;
  fullName: string;
  homepage?: string;
  language?: string;
  license?: string;
  name: string;
  openIssues?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  owner?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  pushedAt?: string;
  stars?: number;
  topics?: string[];
  /**
   * Present whenever the upstream returns this record.
   */
  updatedAt?: string;
  url: string;
  watchers?: number;
  [extra: string]: unknown;
}

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

export interface GithubTrendingDevelopersDeveloper {
  avatarUrl: string;
  name: string;
  popularRepo: string;
  popularRepoDescription: string;
  popularRepoUrl: string;
  rank: number;
  url: string;
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub Trending Developers (github.trending_developers).
 */
export interface GithubTrendingDevelopersData {
  developers: GithubTrendingDevelopersDeveloper[];
  language: string;
  since: string;
}

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

export interface GithubTrendingRepositoriesRepo {
  description: string;
  forks: number;
  fullName: string;
  language: string;
  rank: number;
  stars: number;
  starsToday: number;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub Trending Repositories (github.trending_repositories).
 */
export interface GithubTrendingRepositoriesData {
  repos: GithubTrendingRepositoriesRepo[];
}

/**
 * Input for GitHub User (github.user).
 */
export interface GithubUserInput {
  /**
   * GitHub username.
   */
  handle: string;
}

/**
 * The `data` payload of GitHub User (github.user).
 */
export interface GithubUserData {
  avatarUrl: string;
  bio: string;
  blog?: string;
  company?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  createdAt?: string;
  followers: number;
  following: number;
  location?: string;
  login: string;
  name: string;
  publicGists?: number;
  publicRepos: number;
  twitterUsername?: string;
  /**
   * "User" or "Organization".
   */
  type?: string;
  [extra: string]: unknown;
}

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

export interface GithubUserActivityActivity {
  summary: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Activity (github.user_activity).
 */
export interface GithubUserActivityData {
  activity: GithubUserActivityActivity[];
  month: string;
  nextCursor: string;
  noActivity: boolean;
  username: string;
  year: number;
}

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

export interface GithubUserContributionsDay {
  count: number;
  /**
   * YYYY-MM-DD.
   */
  date: string;
  /**
   * Heatmap level 0-4.
   */
  intensity: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Contributions (github.user_contributions).
 */
export interface GithubUserContributionsData {
  days: GithubUserContributionsDay[];
  total: number;
  username: string;
  year: number;
}

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

export interface GithubUserFollowersFollower {
  avatarUrl: string;
  id: number;
  login: string;
  siteAdmin: boolean;
  type: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Followers (github.user_followers).
 */
export interface GithubUserFollowersData {
  followers: GithubUserFollowersFollower[];
  nextCursor: string;
}

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

export interface GithubUserFollowingFollowing {
  avatarUrl: string;
  id: number;
  login: string;
  siteAdmin: boolean;
  type: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Following (github.user_following).
 */
export interface GithubUserFollowingData {
  following: GithubUserFollowingFollowing[];
  nextCursor: string;
}

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

export interface GithubUserPullRequestsPullRequest {
  createdAt: string;
  repo: string;
  state: string;
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Pull Requests (github.user_pull_requests).
 */
export interface GithubUserPullRequestsData {
  hasMore: boolean;
  nextCursor: string;
  pullRequests: GithubUserPullRequestsPullRequest[];
}

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
   * GitHub username.
   */
  handle: string;
  /**
   * Repository ordering.
   * One of: created, updated, pushed, full_name.
   * Default: updated.
   */
  sort?: "created" | "updated" | "pushed" | "full_name";
}

export interface GithubUserRepositoriesRepo {
  archived: boolean;
  description: string;
  fork: boolean;
  forks: number;
  fullName: string;
  language: string;
  name: string;
  pushedAt: string;
  stars: number;
  updatedAt: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Repositories (github.user_repositories).
 */
export interface GithubUserRepositoriesData {
  hasMore: boolean;
  nextCursor: number;
  repos: GithubUserRepositoriesRepo[];
}

/**
 * Typed methods for the github platform. Attached to the AnyAPI client as
 * `client.github`.
 */
export class GithubNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * GitHub Repository
   *
   * Fetch a GitHub repository's metadata by URL - stars, forks, language, topics, license, and timestamps - normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.repository({ url: "https://github.com/facebook/react" });
   */
  repository(
    input: GithubRepositoryInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubRepositoryData>> {
    return this._core.run("github.repository", input, options);
  }

  /**
   * GitHub Trending Developers
   *
   * List trending GitHub developers - rank, username, name, avatar, and their most popular repository - optionally filtered by programming language and time range.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.trendingDevelopers({ language: "go", since: "weekly" });
   */
  trendingDevelopers(
    input: GithubTrendingDevelopersInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubTrendingDevelopersData>> {
    return this._core.run("github.trending_developers", input, options);
  }

  /**
   * GitHub Trending Repositories
   *
   * List GitHub Trending repositories - rank, stars, stars gained today, language, and description - filterable by language and time window, normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.trendingRepositories({ language: "python", since: "daily" });
   */
  trendingRepositories(
    input: GithubTrendingRepositoriesInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubTrendingRepositoriesData>> {
    return this._core.run("github.trending_repositories", input, options);
  }

  /**
   * GitHub User
   *
   * Fetch a GitHub user's public profile by handle - name, bio, company, location, followers, and repo counts - normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.user({ handle: "torvalds" });
   */
  user(
    input: GithubUserInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubUserData>> {
    return this._core.run("github.user", input, options);
  }

  /**
   * GitHub User Activity
   *
   * List a GitHub user's public contribution activity by handle - grouped monthly summaries of commits, pull requests, and issues with repository links - for a given year.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.userActivity({ handle: "kentcdodds" });
   */
  userActivity(
    input: GithubUserActivityInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubUserActivityData>> {
    return this._core.run("github.user_activity", input, options);
  }

  /**
   * Iterate every result of GitHub User Activity across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserActivity(
    input: GithubUserActivityInput,
    options?: RequestOptions,
  ): Paginator<GithubUserActivityActivity, RunResult<GithubUserActivityData>> {
    return paginate<
      GithubUserActivityActivity,
      RunResult<GithubUserActivityData>
    >(
      this._core,
      "github.user_activity",
      input as unknown as Record<string, unknown>,
      "activity",
      false,
      options,
    );
  }

  /**
   * GitHub User Contributions
   *
   * Fetch a GitHub user's contribution graph for a year - total contributions plus per-day counts and heatmap intensity - normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.userContributions({ handle: "torvalds", year: 2024 });
   */
  userContributions(
    input: GithubUserContributionsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubUserContributionsData>> {
    return this._core.run("github.user_contributions", input, options);
  }

  /**
   * GitHub User Followers
   *
   * List a GitHub user's followers by handle - each follower's login, type, avatar, and profile URL - with pagination.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.userFollowers({ handle: "torvalds" });
   */
  userFollowers(
    input: GithubUserFollowersInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubUserFollowersData>> {
    return this._core.run("github.user_followers", input, options);
  }

  /**
   * Iterate every result of GitHub User Followers across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserFollowers(
    input: GithubUserFollowersInput,
    options?: RequestOptions,
  ): Paginator<
    GithubUserFollowersFollower,
    RunResult<GithubUserFollowersData>
  > {
    return paginate<
      GithubUserFollowersFollower,
      RunResult<GithubUserFollowersData>
    >(
      this._core,
      "github.user_followers",
      input as unknown as Record<string, unknown>,
      "followers",
      false,
      options,
    );
  }

  /**
   * GitHub User Following
   *
   * List the GitHub users a given user follows by handle - each account's login, type, avatar, and profile URL - with pagination.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.userFollowing({ handle: "kentcdodds" });
   */
  userFollowing(
    input: GithubUserFollowingInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubUserFollowingData>> {
    return this._core.run("github.user_following", input, options);
  }

  /**
   * Iterate every result of GitHub User Following across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserFollowing(
    input: GithubUserFollowingInput,
    options?: RequestOptions,
  ): Paginator<
    GithubUserFollowingFollowing,
    RunResult<GithubUserFollowingData>
  > {
    return paginate<
      GithubUserFollowingFollowing,
      RunResult<GithubUserFollowingData>
    >(
      this._core,
      "github.user_following",
      input as unknown as Record<string, unknown>,
      "following",
      false,
      options,
    );
  }

  /**
   * GitHub User Pull Requests
   *
   * List a GitHub user's public pull requests by handle - title, repository, state, creation date, and URL - with optional date filtering and pagination.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.userPullRequests({ handle: "torvalds" });
   */
  userPullRequests(
    input: GithubUserPullRequestsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubUserPullRequestsData>> {
    return this._core.run("github.user_pull_requests", input, options);
  }

  /**
   * Iterate every result of GitHub User Pull Requests across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserPullRequests(
    input: GithubUserPullRequestsInput,
    options?: RequestOptions,
  ): Paginator<
    GithubUserPullRequestsPullRequest,
    RunResult<GithubUserPullRequestsData>
  > {
    return paginate<
      GithubUserPullRequestsPullRequest,
      RunResult<GithubUserPullRequestsData>
    >(
      this._core,
      "github.user_pull_requests",
      input as unknown as Record<string, unknown>,
      "pullRequests",
      false,
      options,
    );
  }

  /**
   * GitHub User Repositories
   *
   * List a GitHub user's public repositories - name, description, language, stars, and forks - with sorting and cursor pagination, normalized across providers.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.github.userRepositories({ handle: "torvalds" });
   */
  userRepositories(
    input: GithubUserRepositoriesInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubUserRepositoriesData>> {
    return this._core.run("github.user_repositories", input, options);
  }
}
