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
  /**
   * Whether the repository is archived.
   */
  archived?: boolean;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Name of the default branch. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  defaultBranch?: string;
  /**
   * Short repository description, or null if none.
   */
  description?: string;
  /**
   * Whether the repository is a fork.
   */
  fork?: boolean;
  /**
   * Number of forks.
   */
  forks?: number;
  /**
   * Full repository name in owner/name form. Populated whenever the provider has data for the entity.
   */
  fullName: string;
  /**
   * Project homepage URL, or null if none.
   */
  homepage?: string;
  /**
   * Primary programming language, or null if undetected.
   */
  language?: string;
  /**
   * License name, or null if unlicensed.
   */
  license?: string;
  /**
   * Repository short name (without owner). Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Count of open issues and pull requests.
   */
  openIssues?: number;
  /**
   * Login of the repository owner (user or organization). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  owner?: string;
  /**
   * Last push timestamp (ISO 8601). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  pushedAt?: string;
  /**
   * Number of stargazers.
   */
  stars?: number;
  /**
   * Repository topic tags.
   */
  topics?: string[];
  /**
   * Last metadata update timestamp (ISO 8601). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  updatedAt?: string;
  /**
   * Canonical URL of the repository. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Number of watchers.
   */
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
   * Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  name: string;
  popularRepo: string;
  popularRepoDescription: string;
  popularRepoUrl: string;
  rank: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub Trending Developers (github.trending_developers).
 */
export interface GithubTrendingDevelopersData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  developers: GithubTrendingDevelopersDeveloper[];
  language: string;
  /**
   * Populated whenever the provider has data for the entity.
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
   * Populated whenever the provider has data for the entity.
   */
  fullName: string;
  language: string;
  rank: number;
  stars: number;
  starsToday: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub Trending Repositories (github.trending_repositories).
 */
export interface GithubTrendingRepositoriesData {
  /**
   * Populated whenever the provider has data for the entity.
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
   * URL of the profile avatar image. Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  /**
   * Profile bio text.
   */
  bio: string;
  /**
   * Blog or website URL from the profile.
   */
  blog?: string;
  /**
   * Company listed on the profile.
   */
  company?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Number of followers.
   */
  followers: number;
  /**
   * Number of accounts the user follows.
   */
  following: number;
  /**
   * Location listed on the profile.
   */
  location?: string;
  /**
   * GitHub username (handle). Populated whenever the provider has data for the entity.
   */
  login: string;
  /**
   * Display name, or empty string if unset. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Count of public gists.
   */
  publicGists?: number;
  /**
   * Count of public repositories.
   */
  publicRepos: number;
  /**
   * Linked X/Twitter username.
   */
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
   * Populated whenever the provider has data for the entity.
   */
  summary: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Activity (github.user_activity).
 */
export interface GithubUserActivityData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  activity: GithubUserActivityActivity[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  month: string;
  nextCursor: string;
  noActivity: boolean;
  /**
   * Populated whenever the provider has data for the entity.
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
  /**
   * Number of contributions on this day.
   */
  count: number;
  /**
   * UTC epoch seconds at 00:00 UTC of the contribution day. Populated whenever the provider has data for the entity.
   */
  dateUtc: number;
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
   * Per-day contribution buckets for the year. Populated whenever the provider has data for the entity.
   */
  days: GithubUserContributionsDay[];
  /**
   * Total contributions across the year.
   */
  total: number;
  /**
   * GitHub username the contribution graph belongs to. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * Calendar year of the contribution graph.
   */
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
   * Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  id: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  login: string;
  siteAdmin: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  type: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Followers (github.user_followers).
 */
export interface GithubUserFollowersData {
  /**
   * Populated whenever the provider has data for the entity.
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
   * Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  id: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  login: string;
  siteAdmin: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  type: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Following (github.user_following).
 */
export interface GithubUserFollowingData {
  /**
   * Populated whenever the provider has data for the entity.
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
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Repository the pull request targets, in owner/name form. Populated whenever the provider has data for the entity.
   */
  repo: string;
  /**
   * Pull request state (e.g. open, closed, merged). Populated whenever the provider has data for the entity.
   */
  state: string;
  /**
   * Pull request title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical URL of the pull request. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Pull Requests (github.user_pull_requests).
 */
export interface GithubUserPullRequestsData {
  /**
   * Whether more pull requests are available beyond this page.
   */
  hasMore: boolean;
  /**
   * Opaque cursor for the next page, or empty string when none.
   */
  nextCursor: string;
  /**
   * The user's public pull requests for this page. Populated whenever the provider has data for the entity.
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
   * Populated whenever the provider has data for the entity.
   */
  fullName: string;
  language: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  pushedAt: string;
  stars: number;
  updatedAt: string;
  /**
   * Populated whenever the provider has data for the entity.
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
   * Populated whenever the provider has data for the entity.
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

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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

**Price:** $2.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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
