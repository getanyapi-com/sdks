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
    model_config = ConfigDict(extra="allow")

    archived: bool | None = None
    createdAt: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    defaultBranch: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    description: str | None = None
    fork: bool | None = None
    forks: int | None = None
    fullName: str = Field(description="Populated whenever the provider returns data.")
    homepage: str | None = None
    language: str | None = None
    license: str | None = None
    name: str = Field(description="Populated whenever the provider returns data.")
    openIssues: int | None = None
    owner: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    pushedAt: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    stars: int | None = None
    topics: list[str] | None = None
    updatedAt: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    url: str = Field(description="Populated whenever the provider returns data.")
    watchers: int | None = None


class GithubTrendingDevelopersData(BaseModel):
    developers: list[GithubTrendingDevelopersDeveloper] = Field(
        description="Populated whenever the provider returns data."
    )
    language: str
    since: str = Field(description="Populated whenever the provider returns data.")


class GithubTrendingDevelopersDeveloper(BaseModel):
    model_config = ConfigDict(extra="allow")

    avatarUrl: str = Field(description="Populated whenever the provider returns data.")
    name: str
    popularRepo: str
    popularRepoDescription: str
    popularRepoUrl: str
    rank: int
    url: str = Field(description="Populated whenever the provider returns data.")
    username: str = Field(description="Populated whenever the provider returns data.")


class GithubTrendingRepositoriesData(BaseModel):
    repos: list[GithubTrendingRepositoriesRepo] = Field(
        description="Populated whenever the provider returns data."
    )


class GithubTrendingRepositoriesRepo(BaseModel):
    model_config = ConfigDict(extra="allow")

    description: str
    forks: int
    fullName: str = Field(description="Populated whenever the provider returns data.")
    language: str
    rank: int
    stars: int
    starsToday: int
    url: str = Field(description="Populated whenever the provider returns data.")


class GithubUserData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatarUrl: str = Field(description="Populated whenever the provider returns data.")
    bio: str
    blog: str | None = None
    company: str | None = None
    createdAt: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    followers: int
    following: int
    location: str | None = None
    login: str = Field(description="Populated whenever the provider returns data.")
    name: str = Field(description="Populated whenever the provider returns data.")
    publicGists: int | None = None
    publicRepos: int
    twitterUsername: str | None = None
    type_: str | None = Field(
        default=None, alias="type", description='"User" or "Organization".'
    )


class GithubUserActivityData(BaseModel):
    activity: list[GithubUserActivityActivity] = Field(
        description="Populated whenever the provider returns data."
    )
    month: str = Field(description="Populated whenever the provider returns data.")
    nextCursor: str
    noActivity: bool
    username: str = Field(description="Populated whenever the provider returns data.")
    year: int


class GithubUserActivityActivity(BaseModel):
    model_config = ConfigDict(extra="allow")

    summary: str = Field(description="Populated whenever the provider returns data.")


class GithubUserContributionsData(BaseModel):
    days: list[GithubUserContributionsDay] = Field(
        description="Populated whenever the provider returns data."
    )
    total: int
    username: str = Field(description="Populated whenever the provider returns data.")
    year: int


class GithubUserContributionsDay(BaseModel):
    model_config = ConfigDict(extra="allow")

    count: int
    date: str = Field(
        description="YYYY-MM-DD. Populated whenever the provider returns data."
    )
    intensity: int = Field(description="Heatmap level 0-4.")


class GithubUserFollowersData(BaseModel):
    followers: list[GithubUserFollowersFollower] = Field(
        description="Populated whenever the provider returns data."
    )
    nextCursor: str


class GithubUserFollowersFollower(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatarUrl: str = Field(description="Populated whenever the provider returns data.")
    id: int
    login: str = Field(description="Populated whenever the provider returns data.")
    siteAdmin: bool
    type_: str = Field(
        alias="type", description="Populated whenever the provider returns data."
    )
    url: str = Field(description="Populated whenever the provider returns data.")


class GithubUserFollowingData(BaseModel):
    following: list[GithubUserFollowingFollowing] = Field(
        description="Populated whenever the provider returns data."
    )
    nextCursor: str


class GithubUserFollowingFollowing(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatarUrl: str = Field(description="Populated whenever the provider returns data.")
    id: int
    login: str = Field(description="Populated whenever the provider returns data.")
    siteAdmin: bool
    type_: str = Field(
        alias="type", description="Populated whenever the provider returns data."
    )
    url: str = Field(description="Populated whenever the provider returns data.")


class GithubUserPullRequestsData(BaseModel):
    hasMore: bool
    nextCursor: str
    pullRequests: list[GithubUserPullRequestsPullRequest] = Field(
        description="Populated whenever the provider returns data."
    )


class GithubUserPullRequestsPullRequest(BaseModel):
    model_config = ConfigDict(extra="allow")

    createdAt: str = Field(description="Populated whenever the provider returns data.")
    repo: str = Field(description="Populated whenever the provider returns data.")
    state: str = Field(description="Populated whenever the provider returns data.")
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class GithubUserRepositoriesData(BaseModel):
    hasMore: bool
    nextCursor: int
    repos: list[GithubUserRepositoriesRepo] = Field(
        description="Populated whenever the provider returns data."
    )


class GithubUserRepositoriesRepo(BaseModel):
    model_config = ConfigDict(extra="allow")

    archived: bool
    description: str
    fork: bool
    forks: int
    fullName: str = Field(description="Populated whenever the provider returns data.")
    language: str
    name: str = Field(description="Populated whenever the provider returns data.")
    pushedAt: str
    stars: int
    updatedAt: str
    url: str = Field(description="Populated whenever the provider returns data.")


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
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "github.repository", dict(input), options
        )
        return RunResult[GithubRepositoryData].model_validate(
            raw.model_dump(by_alias=True)
        )

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
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "github.trending_developers", dict(input), options
        )
        return RunResult[GithubTrendingDevelopersData].model_validate(
            raw.model_dump(by_alias=True)
        )

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
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "github.trending_repositories", dict(input), options
        )
        return RunResult[GithubTrendingRepositoriesData].model_validate(
            raw.model_dump(by_alias=True)
        )

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
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "github.user", dict(input), options
        )
        return RunResult[GithubUserData].model_validate(raw.model_dump(by_alias=True))

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
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "github.user_activity", dict(input), options
        )
        return RunResult[GithubUserActivityData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_activity(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserActivityInput],
    ) -> Paginator[GithubUserActivityActivity, GithubUserActivityData]:
        """Iterate GitHub User Activity results, following pagination cursors.

        Yields flattened items from the `activity` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "github.user_activity",
            dict(input),
            "activity",
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
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "github.user_contributions", dict(input), options
        )
        return RunResult[GithubUserContributionsData].model_validate(
            raw.model_dump(by_alias=True)
        )

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
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "github.user_followers", dict(input), options
        )
        return RunResult[GithubUserFollowersData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowersInput],
    ) -> Paginator[GithubUserFollowersFollower, GithubUserFollowersData]:
        """Iterate GitHub User Followers results, following pagination cursors.

        Yields flattened items from the `followers` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "github.user_followers",
            dict(input),
            "followers",
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
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "github.user_following", dict(input), options
        )
        return RunResult[GithubUserFollowingData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowingInput],
    ) -> Paginator[GithubUserFollowingFollowing, GithubUserFollowingData]:
        """Iterate GitHub User Following results, following pagination cursors.

        Yields flattened items from the `following` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "github.user_following",
            dict(input),
            "following",
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
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "github.user_pull_requests", dict(input), options
        )
        return RunResult[GithubUserPullRequestsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_pull_requests(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserPullRequestsInput],
    ) -> Paginator[GithubUserPullRequestsPullRequest, GithubUserPullRequestsData]:
        """Iterate GitHub User Pull Requests results, following pagination cursors.

        Yields flattened items from the `pullRequests` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "github.user_pull_requests",
            dict(input),
            "pullRequests",
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
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "github.user_repositories", dict(input), options
        )
        return RunResult[GithubUserRepositoriesData].model_validate(
            raw.model_dump(by_alias=True)
        )


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
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "github.repository", dict(input), options
        )
        return RunResult[GithubRepositoryData].model_validate(
            raw.model_dump(by_alias=True)
        )

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
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "github.trending_developers", dict(input), options
        )
        return RunResult[GithubTrendingDevelopersData].model_validate(
            raw.model_dump(by_alias=True)
        )

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
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "github.trending_repositories", dict(input), options
        )
        return RunResult[GithubTrendingRepositoriesData].model_validate(
            raw.model_dump(by_alias=True)
        )

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
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "github.user", dict(input), options
        )
        return RunResult[GithubUserData].model_validate(raw.model_dump(by_alias=True))

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
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "github.user_activity", dict(input), options
        )
        return RunResult[GithubUserActivityData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_activity(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserActivityInput],
    ) -> AsyncPaginator[GithubUserActivityActivity, GithubUserActivityData]:
        """Iterate GitHub User Activity results, following pagination cursors.

        Yields flattened items from the `activity` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "github.user_activity",
            dict(input),
            "activity",
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
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "github.user_contributions", dict(input), options
        )
        return RunResult[GithubUserContributionsData].model_validate(
            raw.model_dump(by_alias=True)
        )

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
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "github.user_followers", dict(input), options
        )
        return RunResult[GithubUserFollowersData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowersInput],
    ) -> AsyncPaginator[GithubUserFollowersFollower, GithubUserFollowersData]:
        """Iterate GitHub User Followers results, following pagination cursors.

        Yields flattened items from the `followers` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "github.user_followers",
            dict(input),
            "followers",
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
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "github.user_following", dict(input), options
        )
        return RunResult[GithubUserFollowingData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowingInput],
    ) -> AsyncPaginator[GithubUserFollowingFollowing, GithubUserFollowingData]:
        """Iterate GitHub User Following results, following pagination cursors.

        Yields flattened items from the `following` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "github.user_following",
            dict(input),
            "following",
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
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "github.user_pull_requests", dict(input), options
        )
        return RunResult[GithubUserPullRequestsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_pull_requests(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserPullRequestsInput],
    ) -> AsyncPaginator[GithubUserPullRequestsPullRequest, GithubUserPullRequestsData]:
        """Iterate GitHub User Pull Requests results, following pagination cursors.

        Yields flattened items from the `pullRequests` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "github.user_pull_requests",
            dict(input),
            "pullRequests",
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
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "github.user_repositories", dict(input), options
        )
        return RunResult[GithubUserRepositoriesData].model_validate(
            raw.model_dump(by_alias=True)
        )
