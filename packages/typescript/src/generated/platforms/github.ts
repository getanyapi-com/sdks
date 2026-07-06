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
   * Populated whenever the provider returns data.
   */
  createdAt?: string;
  /**
   * Populated whenever the provider returns data.
   */
  defaultBranch?: string;
  description?: string;
  fork?: boolean;
  forks?: number;
  /**
   * Populated whenever the provider returns data.
   */
  fullName: string;
  homepage?: string;
  language?: string;
  license?: string;
  /**
   * Populated whenever the provider returns data.
   */
  name: string;
  openIssues?: number;
  /**
   * Populated whenever the provider returns data.
   */
  owner?: string;
  /**
   * Populated whenever the provider returns data.
   */
  pushedAt?: string;
  stars?: number;
  topics?: string[];
  /**
   * Populated whenever the provider returns data.
   */
  updatedAt?: string;
  /**
   * Populated whenever the provider returns data.
   */
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
  /**
   * Populated whenever the provider returns data.
   */
  avatarUrl: string;
  name: string;
  popularRepo: string;
  popularRepoDescription: string;
  popularRepoUrl: string;
  rank: number;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  /**
   * Populated whenever the provider returns data.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub Trending Developers (github.trending_developers).
 */
export interface GithubTrendingDevelopersData {
  /**
   * Populated whenever the provider returns data.
   */
  developers: GithubTrendingDevelopersDeveloper[];
  language: string;
  /**
   * Populated whenever the provider returns data.
   */
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
  /**
   * Populated whenever the provider returns data.
   */
  fullName: string;
  language: string;
  rank: number;
  stars: number;
  starsToday: number;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub Trending Repositories (github.trending_repositories).
 */
export interface GithubTrendingRepositoriesData {
  /**
   * Populated whenever the provider returns data.
   */
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
  /**
   * Populated whenever the provider returns data.
   */
  avatarUrl: string;
  bio: string;
  blog?: string;
  company?: string;
  /**
   * Populated whenever the provider returns data.
   */
  createdAt?: string;
  followers: number;
  following: number;
  location?: string;
  /**
   * Populated whenever the provider returns data.
   */
  login: string;
  /**
   * Populated whenever the provider returns data.
   */
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
  /**
   * Populated whenever the provider returns data.
   */
  summary: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Activity (github.user_activity).
 */
export interface GithubUserActivityData {
  /**
   * Populated whenever the provider returns data.
   */
  activity: GithubUserActivityActivity[];
  /**
   * Populated whenever the provider returns data.
   */
  month: string;
  nextCursor: string;
  noActivity: boolean;
  /**
   * Populated whenever the provider returns data.
   */
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
   * Populated whenever the provider returns data.
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
  /**
   * Populated whenever the provider returns data.
   */
  days: GithubUserContributionsDay[];
  total: number;
  /**
   * Populated whenever the provider returns data.
   */
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
  /**
   * Populated whenever the provider returns data.
   */
  avatarUrl: string;
  id: number;
  /**
   * Populated whenever the provider returns data.
   */
  login: string;
  siteAdmin: boolean;
  /**
   * Populated whenever the provider returns data.
   */
  type: string;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Followers (github.user_followers).
 */
export interface GithubUserFollowersData {
  /**
   * Populated whenever the provider returns data.
   */
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
  /**
   * Populated whenever the provider returns data.
   */
  avatarUrl: string;
  id: number;
  /**
   * Populated whenever the provider returns data.
   */
  login: string;
  siteAdmin: boolean;
  /**
   * Populated whenever the provider returns data.
   */
  type: string;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Following (github.user_following).
 */
export interface GithubUserFollowingData {
  /**
   * Populated whenever the provider returns data.
   */
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
  /**
   * Populated whenever the provider returns data.
   */
  createdAt: string;
  /**
   * Populated whenever the provider returns data.
   */
  repo: string;
  /**
   * Populated whenever the provider returns data.
   */
  state: string;
  /**
   * Populated whenever the provider returns data.
   */
  title: string;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Pull Requests (github.user_pull_requests).
 */
export interface GithubUserPullRequestsData {
  hasMore: boolean;
  nextCursor: string;
  /**
   * Populated whenever the provider returns data.
   */
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
  /**
   * Populated whenever the provider returns data.
   */
  fullName: string;
  language: string;
  /**
   * Populated whenever the provider returns data.
   */
  name: string;
  pushedAt: string;
  stars: number;
  updatedAt: string;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Repositories (github.user_repositories).
 */
export interface GithubUserRepositoriesData {
  hasMore: boolean;
  nextCursor: number;
  /**
   * Populated whenever the provider returns data.
   */
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
   * const res = await client.github.repository({"url":"https://github.com/facebook/react"});
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
   * const res = await client.github.trendingDevelopers({"language":"go","since":"weekly"});
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
   * const res = await client.github.trendingRepositories({"language":"python","since":"daily"});
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
   * const res = await client.github.user({"handle":"torvalds"});
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
   * const res = await client.github.userActivity({"handle":"kentcdodds"});
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
   * RunResult pages instead (each carries its own costUsd).
   */
  iterUserActivity(
    input: GithubUserActivityInput,
    options?: RequestOptions,
  ): Paginator<GithubUserActivityActivity, GithubUserActivityData> {
    return paginate<GithubUserActivityActivity, GithubUserActivityData>(
      this._core,
      "github.user_activity",
      input as unknown as Record<string, unknown>,
      "activity",
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
   * const res = await client.github.userContributions({"handle":"torvalds","year":2024});
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
   * const res = await client.github.userFollowers({"handle":"torvalds"});
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
   * RunResult pages instead (each carries its own costUsd).
   */
  iterUserFollowers(
    input: GithubUserFollowersInput,
    options?: RequestOptions,
  ): Paginator<GithubUserFollowersFollower, GithubUserFollowersData> {
    return paginate<GithubUserFollowersFollower, GithubUserFollowersData>(
      this._core,
      "github.user_followers",
      input as unknown as Record<string, unknown>,
      "followers",
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
   * const res = await client.github.userFollowing({"handle":"kentcdodds"});
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
   * RunResult pages instead (each carries its own costUsd).
   */
  iterUserFollowing(
    input: GithubUserFollowingInput,
    options?: RequestOptions,
  ): Paginator<GithubUserFollowingFollowing, GithubUserFollowingData> {
    return paginate<GithubUserFollowingFollowing, GithubUserFollowingData>(
      this._core,
      "github.user_following",
      input as unknown as Record<string, unknown>,
      "following",
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
   * const res = await client.github.userPullRequests({"handle":"torvalds"});
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
   * RunResult pages instead (each carries its own costUsd).
   */
  iterUserPullRequests(
    input: GithubUserPullRequestsInput,
    options?: RequestOptions,
  ): Paginator<GithubUserPullRequestsPullRequest, GithubUserPullRequestsData> {
    return paginate<
      GithubUserPullRequestsPullRequest,
      GithubUserPullRequestsData
    >(
      this._core,
      "github.user_pull_requests",
      input as unknown as Record<string, unknown>,
      "pullRequests",
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
   * const res = await client.github.userRepositories({"handle":"torvalds"});
   */
  userRepositories(
    input: GithubUserRepositoriesInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubUserRepositoriesData>> {
    return this._core.run("github.user_repositories", input, options);
  }
}
