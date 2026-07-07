# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the github platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult
from .._pagination import (
    AsyncPaginator,
    Paginator,
    apaginate,
    paginate,
)

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class GithubRepositoryInput(TypedDict, total=False):
    """Input for GitHub Repository."""

    url: Required[str]
    """GitHub repository URL (e.g. https://github.com/facebook/react)."""


class GithubTrendingDevelopersInput(TypedDict, total=False):
    """Input for GitHub Trending Developers."""

    language: NotRequired[str]
    """Programming language to filter trending developers (e.g. javascript, python, go)."""
    since: NotRequired[str]
    """Trending range: daily, weekly, or monthly (defaults to daily)."""


class GithubTrendingRepositoriesInput(TypedDict, total=False):
    """Input for GitHub Trending Repositories."""

    language: NotRequired[str]
    """Filter by programming language (e.g. "go", "typescript"). Omit for all languages."""
    since: NotRequired[Literal["daily", "weekly", "monthly"]]
    """Trending window. Default: daily."""


class GithubUserInput(TypedDict, total=False):
    """Input for GitHub User."""

    handle: Required[str]
    """GitHub username."""


class GithubUserActivityInput(TypedDict, total=False):
    """Input for GitHub User Activity."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response (pages backward by month)."""
    handle: Required[str]
    """GitHub username."""
    year: NotRequired[str]
    """Year of contribution activity to return (defaults to the current year)."""


class GithubUserContributionsInput(TypedDict, total=False):
    """Input for GitHub User Contributions."""

    handle: Required[str]
    """GitHub username."""
    year: NotRequired[int]
    """Calendar year of the contribution graph. Defaults to the current year."""


class GithubUserFollowersInput(TypedDict, total=False):
    """Input for GitHub User Followers."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response (page number, defaults to 1)."""
    handle: Required[str]
    """GitHub username."""


class GithubUserFollowingInput(TypedDict, total=False):
    """Input for GitHub User Following."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response (page number, defaults to 1)."""
    handle: Required[str]
    """GitHub username."""


class GithubUserPullRequestsInput(TypedDict, total=False):
    """Input for GitHub User Pull Requests."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response (page number, defaults to 1)."""
    handle: Required[str]
    """GitHub username."""
    since: NotRequired[str]
    """Only include pull requests created on or after this date (YYYY-MM-DD)."""
    until: NotRequired[str]
    """Only include pull requests created on or before this date (YYYY-MM-DD)."""


class GithubUserRepositoriesInput(TypedDict, total=False):
    """Input for GitHub User Repositories."""

    cursor: NotRequired[int]
    """1-based results page. Use the output's nextCursor to paginate. Minimum: 1. Default: 1."""
    handle: Required[str]
    """GitHub username."""
    sort: NotRequired[Literal["created", "updated", "pushed", "full_name"]]
    """Repository ordering. Default: updated."""


class GithubRepositoryData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    archived: bool | None = Field(
        default=None, description="Whether the repository is archived."
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Present whenever the upstream returns this record.",
    )
    default_branch: str | None = Field(
        default=None,
        alias="defaultBranch",
        description="Name of the default branch. Present whenever the upstream returns this record.",
    )
    description: str | None = Field(
        default=None, description="Short repository description, or null if none."
    )
    fork: bool | None = Field(
        default=None, description="Whether the repository is a fork."
    )
    forks: int | None = Field(default=None, description="Number of forks.")
    full_name: str = Field(
        alias="fullName", description="Full repository name in owner/name form."
    )
    homepage: str | None = Field(
        default=None, description="Project homepage URL, or null if none."
    )
    language: str | None = Field(
        default=None, description="Primary programming language, or null if undetected."
    )
    license: str | None = Field(
        default=None, description="License name, or null if unlicensed."
    )
    name: str = Field(description="Repository short name (without owner).")
    open_issues: int | None = Field(
        default=None,
        alias="openIssues",
        description="Count of open issues and pull requests.",
    )
    owner: str | None = Field(
        default=None,
        description="Login of the repository owner (user or organization). Present whenever the upstream returns this record.",
    )
    pushed_at: str | None = Field(
        default=None,
        alias="pushedAt",
        description="Last push timestamp (ISO 8601). Present whenever the upstream returns this record.",
    )
    stars: int | None = Field(default=None, description="Number of stargazers.")
    topics: list[str] | None = Field(default=None, description="Repository topic tags.")
    updated_at: str | None = Field(
        default=None,
        alias="updatedAt",
        description="Last metadata update timestamp (ISO 8601). Present whenever the upstream returns this record.",
    )
    url: str = Field(description="Canonical URL of the repository.")
    watchers: int | None = Field(default=None, description="Number of watchers.")


class GithubTrendingDevelopersData(BaseModel):
    developers: list[GithubTrendingDevelopersDeveloper]
    language: str
    since: str


class GithubTrendingDevelopersDeveloper(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(alias="avatarUrl")
    name: str
    popular_repo: str = Field(alias="popularRepo")
    popular_repo_description: str = Field(alias="popularRepoDescription")
    popular_repo_url: str = Field(alias="popularRepoUrl")
    rank: int
    url: str
    username: str


class GithubTrendingRepositoriesData(BaseModel):
    repos: list[GithubTrendingRepositoriesRepo]


class GithubTrendingRepositoriesRepo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    description: str
    forks: int
    full_name: str = Field(alias="fullName")
    language: str
    rank: int
    stars: int
    stars_today: int = Field(alias="starsToday")
    url: str


class GithubUserData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(
        alias="avatarUrl", description="URL of the profile avatar image."
    )
    bio: str = Field(description="Profile bio text.")
    blog: str | None = Field(
        default=None, description="Blog or website URL from the profile."
    )
    company: str | None = Field(
        default=None, description="Company listed on the profile."
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Present whenever the upstream returns this record.",
    )
    followers: int = Field(description="Number of followers.")
    following: int = Field(description="Number of accounts the user follows.")
    location: str | None = Field(
        default=None, description="Location listed on the profile."
    )
    login: str = Field(description="GitHub username (handle).")
    name: str = Field(description="Display name, or empty string if unset.")
    public_gists: int | None = Field(
        default=None, alias="publicGists", description="Count of public gists."
    )
    public_repos: int = Field(
        alias="publicRepos", description="Count of public repositories."
    )
    twitter_username: str | None = Field(
        default=None, alias="twitterUsername", description="Linked X/Twitter username."
    )
    type_: str | None = Field(
        default=None, alias="type", description='"User" or "Organization".'
    )


class GithubUserActivityData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    activity: list[GithubUserActivityActivity]
    month: str
    next_cursor: str = Field(alias="nextCursor")
    no_activity: bool = Field(alias="noActivity")
    username: str
    year: int


class GithubUserActivityActivity(BaseModel):
    model_config = ConfigDict(extra="allow")

    summary: str


class GithubUserContributionsData(BaseModel):
    days: list[GithubUserContributionsDay] = Field(
        description="Per-day contribution buckets for the year."
    )
    total: int = Field(description="Total contributions across the year.")
    username: str = Field(
        description="GitHub username the contribution graph belongs to."
    )
    year: int = Field(description="Calendar year of the contribution graph.")


class GithubUserContributionsDay(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    count: int = Field(description="Number of contributions on this day.")
    date_utc: float = Field(
        alias="dateUtc",
        description="UTC epoch seconds at 00:00 UTC of the contribution day.",
    )
    intensity: int = Field(description="Heatmap level 0-4.")


class GithubUserFollowersData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    followers: list[GithubUserFollowersFollower]
    next_cursor: str = Field(alias="nextCursor")


class GithubUserFollowersFollower(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(alias="avatarUrl")
    id: int
    login: str
    site_admin: bool = Field(alias="siteAdmin")
    type_: str = Field(alias="type")
    url: str


class GithubUserFollowingData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    following: list[GithubUserFollowingFollowing]
    next_cursor: str = Field(alias="nextCursor")


class GithubUserFollowingFollowing(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(alias="avatarUrl")
    id: int
    login: str
    site_admin: bool = Field(alias="siteAdmin")
    type_: str = Field(alias="type")
    url: str


class GithubUserPullRequestsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    has_more: bool = Field(
        alias="hasMore",
        description="Whether more pull requests are available beyond this page.",
    )
    next_cursor: str = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page, or empty string when none.",
    )
    pull_requests: list[GithubUserPullRequestsPullRequest] = Field(
        alias="pullRequests",
        description="The user's public pull requests for this page.",
    )


class GithubUserPullRequestsPullRequest(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    repo: str = Field(
        description="Repository the pull request targets, in owner/name form."
    )
    state: str = Field(description="Pull request state (e.g. open, closed, merged).")
    title: str = Field(description="Pull request title.")
    url: str = Field(description="Canonical URL of the pull request.")


class GithubUserRepositoriesData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    has_more: bool = Field(alias="hasMore")
    next_cursor: int = Field(alias="nextCursor")
    repos: list[GithubUserRepositoriesRepo]


class GithubUserRepositoriesRepo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    archived: bool
    description: str
    fork: bool
    forks: int
    full_name: str = Field(alias="fullName")
    language: str
    name: str
    pushed_at: str = Field(alias="pushedAt")
    stars: int
    updated_at: str = Field(alias="updatedAt")
    url: str


class GithubNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def repository(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubRepositoryInput],
    ) -> RunResult[GithubRepositoryData]:
        """GitHub Repository

        Fetch a GitHub repository's metadata by URL - stars, forks, language,
        topics, license, and timestamps - normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.github.repository(url="https://github.com/facebook/react")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.repository", dict(input), options
        )
        return RunResult[GithubRepositoryData].model_validate(raw)

    def trending_developers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubTrendingDevelopersInput],
    ) -> RunResult[GithubTrendingDevelopersData]:
        """GitHub Trending Developers

        List trending GitHub developers - rank, username, name, avatar, and their
        most popular repository - optionally filtered by programming language and
        time range.

        Price: $0.002 per request.

        Example:
            res = client.github.trending_developers(language="go", since="weekly")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.trending_developers", dict(input), options
        )
        return RunResult[GithubTrendingDevelopersData].model_validate(raw)

    def trending_repositories(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubTrendingRepositoriesInput],
    ) -> RunResult[GithubTrendingRepositoriesData]:
        """GitHub Trending Repositories

        List GitHub Trending repositories - rank, stars, stars gained today,
        language, and description - filterable by language and time window,
        normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.github.trending_repositories(language="python", since="daily")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.trending_repositories", dict(input), options
        )
        return RunResult[GithubTrendingRepositoriesData].model_validate(raw)

    def user(
        self, *, options: RequestOptions | None = None, **input: Unpack[GithubUserInput]
    ) -> RunResult[GithubUserData]:
        """GitHub User

        Fetch a GitHub user's public profile by handle - name, bio, company,
        location, followers, and repo counts - normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.github.user(handle="torvalds")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user", dict(input), options
        )
        return RunResult[GithubUserData].model_validate(raw)

    def user_activity(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserActivityInput],
    ) -> RunResult[GithubUserActivityData]:
        """GitHub User Activity

        List a GitHub user's public contribution activity by handle - grouped
        monthly summaries of commits, pull requests, and issues with repository
        links - for a given year.

        Price: $0.002 per request.

        Example:
            res = client.github.user_activity(handle="kentcdodds")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_activity", dict(input), options
        )
        return RunResult[GithubUserActivityData].model_validate(raw)

    def iter_user_activity(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserActivityInput],
    ) -> Paginator[GithubUserActivityActivity, GithubUserActivityData]:
        """Iterate GitHub User Activity results, following pagination cursors.

        Yields validated `GithubUserActivityActivity` items from the `activity` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "github.user_activity",
            dict(input),
            "activity",
            item_model=GithubUserActivityActivity,
            data_model=GithubUserActivityData,
            bare=False,
            options=options,
        )

    def user_contributions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserContributionsInput],
    ) -> RunResult[GithubUserContributionsData]:
        """GitHub User Contributions

        Fetch a GitHub user's contribution graph for a year - total contributions
        plus per-day counts and heatmap intensity - normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.github.user_contributions(handle="torvalds", year=2024)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_contributions", dict(input), options
        )
        return RunResult[GithubUserContributionsData].model_validate(raw)

    def user_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowersInput],
    ) -> RunResult[GithubUserFollowersData]:
        """GitHub User Followers

        List a GitHub user's followers by handle - each follower's login, type,
        avatar, and profile URL - with pagination.

        Price: $0.002 per request.

        Example:
            res = client.github.user_followers(handle="torvalds")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_followers", dict(input), options
        )
        return RunResult[GithubUserFollowersData].model_validate(raw)

    def iter_user_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowersInput],
    ) -> Paginator[GithubUserFollowersFollower, GithubUserFollowersData]:
        """Iterate GitHub User Followers results, following pagination cursors.

        Yields validated `GithubUserFollowersFollower` items from the `followers` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "github.user_followers",
            dict(input),
            "followers",
            item_model=GithubUserFollowersFollower,
            data_model=GithubUserFollowersData,
            bare=False,
            options=options,
        )

    def user_following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowingInput],
    ) -> RunResult[GithubUserFollowingData]:
        """GitHub User Following

        List the GitHub users a given user follows by handle - each account's login,
        type, avatar, and profile URL - with pagination.

        Price: $0.002 per request.

        Example:
            res = client.github.user_following(handle="kentcdodds")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_following", dict(input), options
        )
        return RunResult[GithubUserFollowingData].model_validate(raw)

    def iter_user_following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowingInput],
    ) -> Paginator[GithubUserFollowingFollowing, GithubUserFollowingData]:
        """Iterate GitHub User Following results, following pagination cursors.

        Yields validated `GithubUserFollowingFollowing` items from the `following` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "github.user_following",
            dict(input),
            "following",
            item_model=GithubUserFollowingFollowing,
            data_model=GithubUserFollowingData,
            bare=False,
            options=options,
        )

    def user_pull_requests(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserPullRequestsInput],
    ) -> RunResult[GithubUserPullRequestsData]:
        """GitHub User Pull Requests

        List a GitHub user's public pull requests by handle - title, repository,
        state, creation date, and URL - with optional date filtering and pagination.

        Price: $0.002 per request.

        Example:
            res = client.github.user_pull_requests(handle="torvalds")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_pull_requests", dict(input), options
        )
        return RunResult[GithubUserPullRequestsData].model_validate(raw)

    def iter_user_pull_requests(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserPullRequestsInput],
    ) -> Paginator[GithubUserPullRequestsPullRequest, GithubUserPullRequestsData]:
        """Iterate GitHub User Pull Requests results, following pagination cursors.

        Yields validated `GithubUserPullRequestsPullRequest` items from the `pullRequests` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "github.user_pull_requests",
            dict(input),
            "pullRequests",
            item_model=GithubUserPullRequestsPullRequest,
            data_model=GithubUserPullRequestsData,
            bare=False,
            options=options,
        )

    def user_repositories(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserRepositoriesInput],
    ) -> RunResult[GithubUserRepositoriesData]:
        """GitHub User Repositories

        List a GitHub user's public repositories - name, description, language,
        stars, and forks - with sorting and cursor pagination, normalized across
        providers.

        Price: $0.002 per request.

        Example:
            res = client.github.user_repositories(handle="torvalds")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_repositories", dict(input), options
        )
        return RunResult[GithubUserRepositoriesData].model_validate(raw)


class AsyncGithubNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def repository(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubRepositoryInput],
    ) -> RunResult[GithubRepositoryData]:
        """GitHub Repository

        Fetch a GitHub repository's metadata by URL - stars, forks, language,
        topics, license, and timestamps - normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.github.repository(url="https://github.com/facebook/react")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.repository", dict(input), options
        )
        return RunResult[GithubRepositoryData].model_validate(raw)

    async def trending_developers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubTrendingDevelopersInput],
    ) -> RunResult[GithubTrendingDevelopersData]:
        """GitHub Trending Developers

        List trending GitHub developers - rank, username, name, avatar, and their
        most popular repository - optionally filtered by programming language and
        time range.

        Price: $0.002 per request.

        Example:
            res = client.github.trending_developers(language="go", since="weekly")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.trending_developers", dict(input), options
        )
        return RunResult[GithubTrendingDevelopersData].model_validate(raw)

    async def trending_repositories(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubTrendingRepositoriesInput],
    ) -> RunResult[GithubTrendingRepositoriesData]:
        """GitHub Trending Repositories

        List GitHub Trending repositories - rank, stars, stars gained today,
        language, and description - filterable by language and time window,
        normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.github.trending_repositories(language="python", since="daily")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.trending_repositories", dict(input), options
        )
        return RunResult[GithubTrendingRepositoriesData].model_validate(raw)

    async def user(
        self, *, options: RequestOptions | None = None, **input: Unpack[GithubUserInput]
    ) -> RunResult[GithubUserData]:
        """GitHub User

        Fetch a GitHub user's public profile by handle - name, bio, company,
        location, followers, and repo counts - normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.github.user(handle="torvalds")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user", dict(input), options
        )
        return RunResult[GithubUserData].model_validate(raw)

    async def user_activity(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserActivityInput],
    ) -> RunResult[GithubUserActivityData]:
        """GitHub User Activity

        List a GitHub user's public contribution activity by handle - grouped
        monthly summaries of commits, pull requests, and issues with repository
        links - for a given year.

        Price: $0.002 per request.

        Example:
            res = client.github.user_activity(handle="kentcdodds")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_activity", dict(input), options
        )
        return RunResult[GithubUserActivityData].model_validate(raw)

    def iter_user_activity(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserActivityInput],
    ) -> AsyncPaginator[GithubUserActivityActivity, GithubUserActivityData]:
        """Iterate GitHub User Activity results, following pagination cursors.

        Yields validated `GithubUserActivityActivity` items from the `activity` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "github.user_activity",
            dict(input),
            "activity",
            item_model=GithubUserActivityActivity,
            data_model=GithubUserActivityData,
            bare=False,
            options=options,
        )

    async def user_contributions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserContributionsInput],
    ) -> RunResult[GithubUserContributionsData]:
        """GitHub User Contributions

        Fetch a GitHub user's contribution graph for a year - total contributions
        plus per-day counts and heatmap intensity - normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.github.user_contributions(handle="torvalds", year=2024)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_contributions", dict(input), options
        )
        return RunResult[GithubUserContributionsData].model_validate(raw)

    async def user_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowersInput],
    ) -> RunResult[GithubUserFollowersData]:
        """GitHub User Followers

        List a GitHub user's followers by handle - each follower's login, type,
        avatar, and profile URL - with pagination.

        Price: $0.002 per request.

        Example:
            res = client.github.user_followers(handle="torvalds")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_followers", dict(input), options
        )
        return RunResult[GithubUserFollowersData].model_validate(raw)

    def iter_user_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowersInput],
    ) -> AsyncPaginator[GithubUserFollowersFollower, GithubUserFollowersData]:
        """Iterate GitHub User Followers results, following pagination cursors.

        Yields validated `GithubUserFollowersFollower` items from the `followers` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "github.user_followers",
            dict(input),
            "followers",
            item_model=GithubUserFollowersFollower,
            data_model=GithubUserFollowersData,
            bare=False,
            options=options,
        )

    async def user_following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowingInput],
    ) -> RunResult[GithubUserFollowingData]:
        """GitHub User Following

        List the GitHub users a given user follows by handle - each account's login,
        type, avatar, and profile URL - with pagination.

        Price: $0.002 per request.

        Example:
            res = client.github.user_following(handle="kentcdodds")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_following", dict(input), options
        )
        return RunResult[GithubUserFollowingData].model_validate(raw)

    def iter_user_following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowingInput],
    ) -> AsyncPaginator[GithubUserFollowingFollowing, GithubUserFollowingData]:
        """Iterate GitHub User Following results, following pagination cursors.

        Yields validated `GithubUserFollowingFollowing` items from the `following` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "github.user_following",
            dict(input),
            "following",
            item_model=GithubUserFollowingFollowing,
            data_model=GithubUserFollowingData,
            bare=False,
            options=options,
        )

    async def user_pull_requests(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserPullRequestsInput],
    ) -> RunResult[GithubUserPullRequestsData]:
        """GitHub User Pull Requests

        List a GitHub user's public pull requests by handle - title, repository,
        state, creation date, and URL - with optional date filtering and pagination.

        Price: $0.002 per request.

        Example:
            res = client.github.user_pull_requests(handle="torvalds")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_pull_requests", dict(input), options
        )
        return RunResult[GithubUserPullRequestsData].model_validate(raw)

    def iter_user_pull_requests(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserPullRequestsInput],
    ) -> AsyncPaginator[GithubUserPullRequestsPullRequest, GithubUserPullRequestsData]:
        """Iterate GitHub User Pull Requests results, following pagination cursors.

        Yields validated `GithubUserPullRequestsPullRequest` items from the `pullRequests` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "github.user_pull_requests",
            dict(input),
            "pullRequests",
            item_model=GithubUserPullRequestsPullRequest,
            data_model=GithubUserPullRequestsData,
            bare=False,
            options=options,
        )

    async def user_repositories(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserRepositoriesInput],
    ) -> RunResult[GithubUserRepositoriesData]:
        """GitHub User Repositories

        List a GitHub user's public repositories - name, description, language,
        stars, and forks - with sorting and cursor pagination, normalized across
        providers.

        Price: $0.002 per request.

        Example:
            res = client.github.user_repositories(handle="torvalds")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_repositories", dict(input), options
        )
        return RunResult[GithubUserRepositoriesData].model_validate(raw)
