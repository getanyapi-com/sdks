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
   * Avatar image URL of the repository owner.
   */
  avatarUrl?: string;
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
  description?: string | null;
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
  homepage?: string | null;
  /**
   * GitHub's numeric repository id, as a string.
   */
  id?: string;
  /**
   * Primary programming language, or null if undetected.
   */
  language?: string | null;
  /**
   * License name, or null if unlicensed.
   */
  license?: string | null;
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
   * Whether the repository is private.
   */
  private?: boolean;
  /**
   * GitHub profile URL of the repository owner.
   */
  profileUrl?: string;
  /**
   * Last push timestamp (ISO 8601). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  pushedAt?: string;
  /**
   * Repository size in kilobytes as reported by GitHub.
   */
  size?: number;
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Programming language to filter trending developers (e.g. javascript, python, go).
   */
  language?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Trending range: daily, weekly, or monthly (defaults to daily).
   */
  since?: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Filter by programming language (e.g. "go", "typescript"). Omit for all languages.
   */
  language?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Trending window.
   * One of: daily, weekly, monthly.
   * Default: daily.
   */
  since?: "daily" | "weekly" | "monthly";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface GithubTrendingRepositoriesRepo {
  description: string;
  forks: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  fullName: string;
  language: string;
  /**
   * Repository short name (without owner).
   */
  name?: string;
  /**
   * Login of the repository owner (user or organization).
   */
  owner?: string;
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
  /**
   * Trending window the listing was read for (daily, weekly, or monthly).
   */
  since?: string;
}

/**
 * Input for GitHub User (github.user).
 */
export interface GithubUserInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * GitHub username.
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
   * GitHub's numeric user id, as a string.
   */
  id?: string;
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
   * Canonical GitHub profile URL.
   */
  profileUrl?: string;
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response (pages backward by month).
   */
  cursor?: string;
  /**
   * GitHub username.
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
  /**
   * Year of contribution activity to return (defaults to the current year).
   */
  year?: string;
}

export interface GithubUserActivityActivity {
  /**
   * The individual entries behind this activity summary. Empty when the upstream published no breakdown.
   */
  items?: GithubUserActivityItem[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  summary: string;
  [extra: string]: unknown;
}

export interface GithubUserActivityItem {
  /**
   * Full repository name in owner/name form for this entry.
   */
  repo?: string;
  /**
   * The entry as GitHub renders it, e.g. "owner/repo 353 commits".
   */
  text?: string;
  /**
   * Canonical URL of the repository for this entry.
   */
  url?: string;
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
  /**
   * Opaque cursor for the next page of activity, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * GitHub username.
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response (page number, defaults to 1).
   */
  cursor?: string;
  /**
   * GitHub username.
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
  /**
   * Opaque cursor for the next page of followers, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for GitHub User Following (github.user_following).
 */
export interface GithubUserFollowingInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response (page number, defaults to 1).
   */
  cursor?: string;
  /**
   * GitHub username.
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
  /**
   * Opaque cursor for the next page of followed accounts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for GitHub User Pull Requests (github.user_pull_requests).
 */
export interface GithubUserPullRequestsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response (page number, defaults to 1).
   */
  cursor?: string;
  /**
   * GitHub username.
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
   * Only include pull requests created on or after this date (YYYY-MM-DD).
   */
  since?: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Opaque cursor for the next page of pull requests, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it back to fetch the next page.
   */
  cursor?: string;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Repository ordering.
   * One of: created, updated, pushed, full_name.
   * Default: updated.
   */
  sort?: "created" | "updated" | "pushed" | "full_name";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Which repositories to include: owner (default), all, or member.
   * One of: owner, all, member.
   */
  type?: "owner" | "all" | "member";
}

export interface GithubUserRepositoriesRepo {
  archived: boolean;
  /**
   * URL of the repository owner's avatar image.
   */
  avatarUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Name of the default branch.
   */
  defaultBranch?: string;
  description: string;
  fork: boolean;
  forks: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  fullName: string;
  /**
   * Project homepage URL, or empty string if none.
   */
  homepage?: string;
  /**
   * GitHub's numeric repository id, as a string.
   */
  id?: string;
  language: string;
  /**
   * License name, or empty string if unlicensed.
   */
  license?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Count of open issues and pull requests.
   */
  openIssues?: number;
  /**
   * Login of the repository owner (user or organization).
   */
  owner?: string;
  /**
   * Whether the repository is private.
   */
  private?: boolean;
  /**
   * GitHub profile URL of the repository owner.
   */
  profileUrl?: string;
  pushedAt: string;
  /**
   * Repository size in kilobytes as reported by GitHub.
   */
  size?: number;
  stars: number;
  /**
   * Repository topic tags.
   */
  topics?: string[];
  updatedAt: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Number of watchers.
   */
  watchers?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub User Repositories (github.user_repositories).
 */
export interface GithubUserRepositoriesData {
  hasMore: boolean;
  /**
   * Opaque cursor for the next page of repositories, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
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
   * Fetch a GitHub repository's metadata by URL (stars, forks, language, topics, license, and timestamps).
   *
   * Price: $0.0012 per request.
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
   * List trending GitHub developers (rank, username, name, avatar, and their most popular repository), optionally filtered by programming language and time range.
   *
   * Price: $0.0012 per request.
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
   * List GitHub Trending repositories (rank, stars, stars gained today, language, and description), filterable by language and time window.
   *
   * Price: $0.0012 per request.
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
   * Fetch a GitHub user's public profile by handle (name, bio, company, location, followers, and repo counts).
   *
   * Price: $0.0012 per request.
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
   * List a GitHub user's public contribution activity by handle (grouped monthly summaries of commits, pull requests, and issues with repository links) for a given year.
   *
   * Price: $0.0012 per request.
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
   * Fetch a GitHub user's contribution graph for a year (total contributions plus per-day counts and heatmap intensity).
   *
   * Price: $0.0012 per request.
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
   * List a GitHub user's followers by handle (each follower's login, type, avatar, and profile URL) with pagination.
   *
   * Price: $0.0012 per request.
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
   * List the GitHub users a given user follows by handle (each account's login, type, avatar, and profile URL) with pagination.
   *
   * Price: $0.0012 per request.
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
   * List a GitHub user's public pull requests by handle (title, repository, state, creation date, and URL) with optional date filtering and pagination.
   *
   * Price: $0.0012 per request.
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
   * List a GitHub user's public repositories (name, description, language, stars, and forks) with sorting and cursor pagination.
   *
   * Price: $0.0012 per request.
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

  /**
   * Iterate every result of GitHub User Repositories across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserRepositories(
    input: GithubUserRepositoriesInput,
    options?: RequestOptions,
  ): Paginator<
    GithubUserRepositoriesRepo,
    RunResult<GithubUserRepositoriesData>
  > {
    return paginate<
      GithubUserRepositoriesRepo,
      RunResult<GithubUserRepositoriesData>
    >(
      this._core,
      "github.user_repositories",
      input as unknown as Record<string, unknown>,
      "repos",
      false,
      options,
    );
  }
}
