// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for GitHub Issue Comments (github.issue_comments).
 */
export interface GithubIssueCommentsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Rows per page, 1-100 (GitHub's own page-size limit). Each call returns one full page of this size; use nextCursor for the next page.
   * Range: minimum 1, maximum 100.
   * Default: 100.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `authorAssociation` or `body`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a comment that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    "authorAssociation" | "authorId" | "authorType" | "body" | "updatedUtc"
  )[];
  /**
   * Only comments updated on or after this date (YYYY-MM-DD).
   */
  since?: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * URL of a GitHub issue or pull request, e.g. https://github.com/openai/whisper/pull/1838.
   */
  url: string;
}

export interface GithubIssueCommentsComment {
  /**
   * GitHub login of the commenter. Populated whenever the provider has data for the entity.
   */
  author: string | null;
  /**
   * The commenter's relationship to the repository, as GitHub reports it: OWNER, MEMBER, COLLABORATOR, CONTRIBUTOR, FIRST_TIME_CONTRIBUTOR, FIRST_TIMER or NONE.
   */
  authorAssociation: string | null;
  /**
   * Avatar image URL of the commenter.
   */
  authorAvatarUrl: string | null;
  /**
   * GitHub's numeric user id of the commenter, as a string.
   */
  authorId: string | null;
  /**
   * Account type of the commenter: User, Bot or Organization.
   */
  authorType: string | null;
  /**
   * Comment text in Markdown. One source returns it with HTML tags removed; name body in requireFields for the exact Markdown.
   */
  body: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number | null;
  /**
   * GitHub's numeric comment id, as a string.
   */
  id: string;
  /**
   * Total number of reactions of every kind.
   */
  reactions: number | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc: number | null;
  /**
   * Canonical GitHub URL of the comment. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub Issue Comments (github.issue_comments).
 */
export interface GithubIssueCommentsData {
  /**
   * Comments in the order they were posted. Review comments on pull request code lines are not included. Populated whenever the provider has data for the entity.
   */
  comments: GithubIssueCommentsComment[];
  /**
   * Opaque cursor for the next page of comments, or null when there are no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

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
 * Input for GitHub Repository Contributors (github.repository_contributors).
 */
export interface GithubRepositoryContributorsInput {
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
   * Rows per page, 1-100 (GitHub's own page-size limit). Keep it the same while walking pages, because it sets the page size.
   * Range: minimum 1, maximum 100.
   * Default: 100.
   */
  limit?: number;
  /**
   * 1-based page of contributors. Request page + 1 while hasMore is true.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
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
   * GitHub repository URL, e.g. https://github.com/openai/whisper.
   */
  url: string;
}

export interface GithubRepositoryContributorsContributor {
  /**
   * Avatar image URL.
   */
  avatarUrl: string | null;
  /**
   * Number of commits to the repository's default branch. Populated whenever the provider has data for the entity.
   */
  contributions: number | null;
  /**
   * GitHub's numeric user id, as a string.
   */
  id: string | null;
  /**
   * GitHub login of the contributor. Populated whenever the provider has data for the entity.
   */
  login: string;
  /**
   * Whether the account is a GitHub staff administrator.
   */
  siteAdmin: boolean | null;
  /**
   * Account type: User, Bot or Organization.
   */
  type: string | null;
  /**
   * GitHub profile URL. Populated whenever the provider has data for the entity.
   */
  url: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub Repository Contributors (github.repository_contributors).
 */
export interface GithubRepositoryContributorsData {
  /**
   * Contributors with a GitHub account, most commits first. Populated whenever the provider has data for the entity.
   */
  contributors: GithubRepositoryContributorsContributor[];
  /**
   * True when another page of contributors exists; request page + 1 to continue.
   */
  hasMore: boolean | null;
}

/**
 * Input for GitHub Repository Forks (github.repository_forks).
 */
export interface GithubRepositoryForksInput {
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
   * Rows per page, 1-100 (GitHub's own page-size limit). Keep it the same while walking pages, because it sets the page size.
   * Range: minimum 1, maximum 100.
   * Default: 100.
   */
  limit?: number;
  /**
   * 1-based page of forks. Request page + 1 while hasMore is true.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Order of the forks. Defaults to newest.
   * One of: newest, oldest, stargazers, watchers.
   */
  sort?: "newest" | "oldest" | "stargazers" | "watchers";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * GitHub repository URL, e.g. https://github.com/openai/whisper.
   */
  url: string;
}

export interface GithubRepositoryForksFork {
  /**
   * Whether the fork is archived.
   */
  archived: boolean | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the fork was created.
   */
  createdUtc: number | null;
  /**
   * Name of the default branch.
   */
  defaultBranch: string | null;
  /**
   * Repository description.
   */
  description: string | null;
  /**
   * Number of forks of this fork.
   */
  forks: number | null;
  /**
   * Fork's full name in owner/name form. Populated whenever the provider has data for the entity.
   */
  fullName: string;
  /**
   * Project homepage URL, or null if none.
   */
  homepage: string | null;
  /**
   * GitHub's numeric repository id of the fork, as a string.
   */
  id: string;
  /**
   * Primary language GitHub detected.
   */
  language: string | null;
  /**
   * Fork's repository name (without owner). Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Count of open issues and pull requests.
   */
  openIssues: number | null;
  /**
   * Login of the fork's owner. Populated whenever the provider has data for the entity.
   */
  owner: string | null;
  /**
   * Avatar image URL of the owner.
   */
  ownerAvatarUrl: string | null;
  /**
   * Account type of the owner: User or Organization.
   */
  ownerType: string | null;
  /**
   * GitHub profile URL of the owner.
   */
  ownerUrl: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Last push to any branch; a fork never pushed to keeps its parent's last push.
   */
  pushedUtc: number | null;
  /**
   * Repository size in kilobytes as reported by GitHub.
   */
  size: number | null;
  /**
   * Number of stars.
   */
  stars: number | null;
  /**
   * Topics set on the fork.
   */
  topics: string[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc: number | null;
  /**
   * Canonical GitHub URL of the fork. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Number of watchers as GitHub counts them (equal to stars).
   */
  watchers: number | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub Repository Forks (github.repository_forks).
 */
export interface GithubRepositoryForksData {
  /**
   * Forks of the repository. Populated whenever the provider has data for the entity.
   */
  forks: GithubRepositoryForksFork[];
  /**
   * True when another page of forks exists; request page + 1 to continue.
   */
  hasMore: boolean | null;
}

/**
 * Input for GitHub Repository Issues (github.repository_issues).
 */
export interface GithubRepositoryIssuesInput {
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
   * Rows per page, 1-100 (GitHub's own page-size limit). Keep it the same while walking pages, because it sets the page size.
   * Range: minimum 1, maximum 100.
   * Default: 100.
   */
  limit?: number;
  /**
   * Sort direction. Defaults to desc.
   * One of: desc, asc.
   */
  order?: "desc" | "asc";
  /**
   * 1-based page of issues. Request page + 1 while hasMore is true.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Only issues updated on or after this date (YYYY-MM-DD).
   */
  since?: string;
  /**
   * Sort by creation date, last update, or number of comments. Defaults to created.
   * One of: created, updated, comments.
   */
  sort?: "created" | "updated" | "comments";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Which issues to list. Defaults to open.
   * One of: open, closed, all.
   */
  state?: "open" | "closed" | "all";
  /**
   * GitHub repository URL, e.g. https://github.com/openai/whisper.
   */
  url: string;
}

export interface GithubRepositoryIssuesIssue {
  /**
   * GitHub login of the person who opened it. Populated whenever the provider has data for the entity.
   */
  author: string | null;
  /**
   * The author's relationship to the repository, as GitHub reports it: OWNER, MEMBER, COLLABORATOR, CONTRIBUTOR, FIRST_TIME_CONTRIBUTOR, FIRST_TIMER or NONE.
   */
  authorAssociation: string | null;
  /**
   * Avatar image URL of the author.
   */
  authorAvatarUrl: string | null;
  /**
   * GitHub's numeric user id of the author, as a string.
   */
  authorId: string | null;
  /**
   * Account type of the author: User, Bot or Organization.
   */
  authorType: string | null;
  /**
   * Markdown body as written, or null when empty.
   */
  body: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Null while open.
   */
  closedUtc: number | null;
  /**
   * Number of comments.
   */
  comments: number | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number | null;
  /**
   * Whether a pull request is a draft; null for an issue.
   */
  draft: boolean | null;
  /**
   * GitHub's numeric issue id, as a string.
   */
  id: string;
  /**
   * True for a pull request, false for an issue.
   */
  isPullRequest: boolean;
  /**
   * Names of the labels applied.
   */
  labels: string[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Set only on a merged pull request.
   */
  mergedUtc: number | null;
  /**
   * Issue or pull request number within its repository (the #N shown on GitHub).
   */
  number: number | null;
  /**
   * Total number of reactions of every kind.
   */
  reactions: number | null;
  /**
   * Repository the issue belongs to, in owner/name form.
   */
  repo: string | null;
  /**
   * open or closed. A merged pull request is closed and has mergedUtc set.
   */
  state: string | null;
  /**
   * Title of the issue or pull request. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc: number | null;
  /**
   * Canonical GitHub URL of the issue or pull request. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub Repository Issues (github.repository_issues).
 */
export interface GithubRepositoryIssuesData {
  /**
   * True when another page of issues exists; request page + 1 to continue.
   */
  hasMore: boolean | null;
  /**
   * Issues and pull requests, newest first unless sorted otherwise. Populated whenever the provider has data for the entity.
   */
  issues: GithubRepositoryIssuesIssue[];
}

/**
 * Input for GitHub Repository README (github.repository_readme).
 */
export interface GithubRepositoryReadmeInput {
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `content` or `size`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a README that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    "content" | "downloadUrl" | "name" | "path" | "sha" | "size" | "url"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * GitHub repository URL, e.g. https://github.com/openai/whisper. The README of the default branch is returned.
   */
  url: string;
}

/**
 * The `data` payload of GitHub Repository README (github.repository_readme).
 */
export interface GithubRepositoryReadmeData {
  /**
   * The README text exactly as committed, usually Markdown that may include HTML. One source returns it with HTML tags removed; name content in requireFields for the exact file.
   */
  content: string;
  /**
   * Raw download URL of the README file.
   */
  downloadUrl: string | null;
  /**
   * File name of the README, e.g. README.md.
   */
  name: string | null;
  /**
   * Path of the README inside the repository.
   */
  path: string | null;
  /**
   * Git blob SHA of the README file.
   */
  sha: string | null;
  /**
   * Size of the README file in bytes.
   */
  size: number | null;
  /**
   * GitHub URL of the README file.
   */
  url: string | null;
  [extra: string]: unknown;
}

/**
 * Input for GitHub Issue and PR Search (github.search_issues).
 */
export interface GithubSearchIssuesInput {
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
   * Rows per page, 1-100 (GitHub's own page-size limit). Keep it the same while walking pages, because it sets the page size.
   * Range: minimum 1, maximum 100.
   * Default: 100.
   */
  limit?: number;
  /**
   * Sort direction when sort is set. Defaults to desc.
   * One of: desc, asc.
   */
  order?: "desc" | "asc";
  /**
   * 1-based page of results. Request page + 1 while hasMore is true.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * GitHub issue search query with any of GitHub's qualifiers, e.g. "repo:openai/whisper is:pr", "is:issue label:bug author:octocat", "repo:ggml-org/llama.cpp is:pr is:merged created:>2026-01-01".
   */
  query: string;
  /**
   * Sort by number of comments, creation date, last update, or reactions. Omit for best match.
   * One of: comments, created, updated, reactions.
   */
  sort?: "comments" | "created" | "updated" | "reactions";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface GithubSearchIssuesIssue {
  /**
   * GitHub login of the person who opened it. Populated whenever the provider has data for the entity.
   */
  author: string | null;
  /**
   * The author's relationship to the repository, as GitHub reports it: OWNER, MEMBER, COLLABORATOR, CONTRIBUTOR, FIRST_TIME_CONTRIBUTOR, FIRST_TIMER or NONE.
   */
  authorAssociation: string | null;
  /**
   * Avatar image URL of the author.
   */
  authorAvatarUrl: string | null;
  /**
   * GitHub's numeric user id of the author, as a string.
   */
  authorId: string | null;
  /**
   * Account type of the author: User, Bot or Organization.
   */
  authorType: string | null;
  /**
   * Markdown body as written, or null when empty.
   */
  body: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Null while open.
   */
  closedUtc: number | null;
  /**
   * Number of comments.
   */
  comments: number | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number | null;
  /**
   * Whether a pull request is a draft; null for an issue.
   */
  draft: boolean | null;
  /**
   * GitHub's numeric issue id, as a string.
   */
  id: string;
  /**
   * True for a pull request, false for an issue.
   */
  isPullRequest: boolean;
  /**
   * Names of the labels applied.
   */
  labels: string[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Set only on a merged pull request.
   */
  mergedUtc: number | null;
  /**
   * Issue or pull request number within its repository (the #N shown on GitHub).
   */
  number: number | null;
  /**
   * Total number of reactions of every kind.
   */
  reactions: number | null;
  /**
   * Repository the issue belongs to, in owner/name form.
   */
  repo: string | null;
  /**
   * open or closed. A merged pull request is closed and has mergedUtc set.
   */
  state: string | null;
  /**
   * Title of the issue or pull request. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc: number | null;
  /**
   * Canonical GitHub URL of the issue or pull request. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of GitHub Issue and PR Search (github.search_issues).
 */
export interface GithubSearchIssuesData {
  /**
   * True when another page of results exists; request page + 1 to continue.
   */
  hasMore: boolean | null;
  /**
   * Matching issues and pull requests. Populated whenever the provider has data for the entity.
   */
  issues: GithubSearchIssuesIssue[];
  /**
   * Total number of matches GitHub reports. GitHub serves only the first 1,000 of them, so page times limit can be at most 1,000.
   */
  total: number | null;
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
   * One of: daily, weekly, monthly.
   */
  since?: "daily" | "weekly" | "monthly";
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
   * GitHub Issue Comments
   *
   * List the comments on a GitHub issue or pull request by its URL, oldest first, with each commenter's login, their relationship to the repository, reactions and the comment text.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.github.issueComments({ url: "https://github.com/openai/whisper/pull/1838", limit: 10 });
   */
  issueComments(
    input: GithubIssueCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubIssueCommentsData>> {
    return this._core.run("github.issue_comments", input, options);
  }

  /**
   * Iterate every result of GitHub Issue Comments across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterIssueComments(
    input: GithubIssueCommentsInput,
    options?: RequestOptions,
  ): Paginator<GithubIssueCommentsComment, RunResult<GithubIssueCommentsData>> {
    return paginate<
      GithubIssueCommentsComment,
      RunResult<GithubIssueCommentsData>
    >(
      this._core,
      "github.issue_comments",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

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
   * GitHub Repository Contributors
   *
   * List the people who have committed to a GitHub repository by repository URL, ordered by number of commits, with each contributor's login, profile URL and commit count. Look each one up with github.user for their profile, website and socials.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.github.repositoryContributors({ url: "https://github.com/openai/whisper", limit: 10 });
   */
  repositoryContributors(
    input: GithubRepositoryContributorsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubRepositoryContributorsData>> {
    return this._core.run("github.repository_contributors", input, options);
  }

  /**
   * GitHub Repository Forks
   *
   * List the forks of a GitHub repository by repository URL, with each fork's owner, description, stars, language and last push. Sort by newest, oldest or most starred.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.github.repositoryForks({ url: "https://github.com/openai/whisper" });
   */
  repositoryForks(
    input: GithubRepositoryForksInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubRepositoryForksData>> {
    return this._core.run("github.repository_forks", input, options);
  }

  /**
   * GitHub Repository Issues
   *
   * List a GitHub repository's issues and pull requests by repository URL (GitHub lists pull requests as issues), with each one's author, state, labels, counts and body. Filter by state, sort and update date.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.github.repositoryIssues({ url: "https://github.com/openai/whisper" });
   */
  repositoryIssues(
    input: GithubRepositoryIssuesInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubRepositoryIssuesData>> {
    return this._core.run("github.repository_issues", input, options);
  }

  /**
   * GitHub Repository README
   *
   * Get a GitHub repository's README by repository URL, as the Markdown text the maintainers wrote, with its file name, path and size. Use it to learn what a project does, which models and tools it uses, and how to reach its authors.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.github.repositoryReadme({ url: "https://github.com/openai/whisper" });
   */
  repositoryReadme(
    input: GithubRepositoryReadmeInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubRepositoryReadmeData>> {
    return this._core.run("github.repository_readme", input, options);
  }

  /**
   * GitHub Issue and PR Search
   *
   * Search issues and pull requests across GitHub with GitHub's own search syntax (repo:, is:pr, is:issue, author:, label:, created:...), with each result's author, state, labels, counts and body. Use it to find who opens issues and pull requests on a repository.
   *
   * Price: $0.0024 per request.
   *
   * @example
   * const res = await client.github.searchIssues({ query: "repo:openai/whisper is:pr" });
   */
  searchIssues(
    input: GithubSearchIssuesInput,
    options?: RequestOptions,
  ): Promise<RunResult<GithubSearchIssuesData>> {
    return this._core.run("github.search_issues", input, options);
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
