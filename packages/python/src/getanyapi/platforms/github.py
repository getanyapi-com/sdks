# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the github platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    direction: NotRequired[Literal["asc", "desc"]]
    """Sort direction, ascending or descending, paired with sort."""
    handle: Required[str]
    """GitHub username."""
    sort: NotRequired[Literal["created", "updated", "pushed", "full_name"]]
    """Repository ordering. Default: updated."""
    type: NotRequired[Literal["owner", "all", "member"]]
    """Which repositories to include: owner (default), all, or member."""


class GithubRepositoryData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GithubTrendingDevelopersData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GithubTrendingRepositoriesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GithubUserData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GithubUserActivityData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GithubUserContributionsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GithubUserFollowersData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GithubUserFollowingData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GithubUserPullRequestsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GithubUserRepositoriesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GithubNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def repository(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubRepositoryInput],
    ) -> BareRunResult[GithubRepositoryData]:
        """GitHub Repository

        Fetch a GitHub repository's metadata by URL (stars, forks, language, topics,
        license, and timestamps), normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.github.repository(url="https://github.com/facebook/react")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.repository", dict(input), options
        )
        return BareRunResult[GithubRepositoryData].model_validate(raw)

    def trending_developers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubTrendingDevelopersInput],
    ) -> BareRunResult[GithubTrendingDevelopersData]:
        """GitHub Trending Developers

        List trending GitHub developers (rank, username, name, avatar, and their
        most popular repository), optionally filtered by programming language and
        time range.

        Price: $0.002 per request.

        Example:
            res = client.github.trending_developers(language="go", since="weekly")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.trending_developers", dict(input), options
        )
        return BareRunResult[GithubTrendingDevelopersData].model_validate(raw)

    def trending_repositories(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubTrendingRepositoriesInput],
    ) -> BareRunResult[GithubTrendingRepositoriesData]:
        """GitHub Trending Repositories

        List GitHub Trending repositories (rank, stars, stars gained today,
        language, and description), filterable by language and time window,
        normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.github.trending_repositories(language="python", since="daily")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.trending_repositories", dict(input), options
        )
        return BareRunResult[GithubTrendingRepositoriesData].model_validate(raw)

    def user(
        self, *, options: RequestOptions | None = None, **input: Unpack[GithubUserInput]
    ) -> BareRunResult[GithubUserData]:
        """GitHub User

        Fetch a GitHub user's public profile by handle (name, bio, company,
        location, followers, and repo counts), normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.github.user(handle="torvalds")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user", dict(input), options
        )
        return BareRunResult[GithubUserData].model_validate(raw)

    def user_activity(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserActivityInput],
    ) -> BareRunResult[GithubUserActivityData]:
        """GitHub User Activity

        List a GitHub user's public contribution activity by handle (grouped monthly
        summaries of commits, pull requests, and issues with repository links) for a
        given year.

        Price: $0.002 per request.

        Example:
            res = client.github.user_activity(handle="kentcdodds")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_activity", dict(input), options
        )
        return BareRunResult[GithubUserActivityData].model_validate(raw)

    def user_contributions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserContributionsInput],
    ) -> BareRunResult[GithubUserContributionsData]:
        """GitHub User Contributions

        Fetch a GitHub user's contribution graph for a year (total contributions
        plus per-day counts and heatmap intensity), normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.github.user_contributions(handle="torvalds", year=2024)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_contributions", dict(input), options
        )
        return BareRunResult[GithubUserContributionsData].model_validate(raw)

    def user_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowersInput],
    ) -> BareRunResult[GithubUserFollowersData]:
        """GitHub User Followers

        List a GitHub user's followers by handle (each follower's login, type,
        avatar, and profile URL) with pagination.

        Price: $0.002 per request.

        Example:
            res = client.github.user_followers(handle="torvalds")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_followers", dict(input), options
        )
        return BareRunResult[GithubUserFollowersData].model_validate(raw)

    def user_following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowingInput],
    ) -> BareRunResult[GithubUserFollowingData]:
        """GitHub User Following

        List the GitHub users a given user follows by handle (each account's login,
        type, avatar, and profile URL) with pagination.

        Price: $0.002 per request.

        Example:
            res = client.github.user_following(handle="kentcdodds")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_following", dict(input), options
        )
        return BareRunResult[GithubUserFollowingData].model_validate(raw)

    def user_pull_requests(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserPullRequestsInput],
    ) -> BareRunResult[GithubUserPullRequestsData]:
        """GitHub User Pull Requests

        List a GitHub user's public pull requests by handle (title, repository,
        state, creation date, and URL) with optional date filtering and pagination.

        Price: $0.002 per request.

        Example:
            res = client.github.user_pull_requests(handle="torvalds")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_pull_requests", dict(input), options
        )
        return BareRunResult[GithubUserPullRequestsData].model_validate(raw)

    def user_repositories(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserRepositoriesInput],
    ) -> BareRunResult[GithubUserRepositoriesData]:
        """GitHub User Repositories

        List a GitHub user's public repositories (name, description, language,
        stars, and forks) with sorting and cursor pagination, normalized across
        providers.

        Price: $0.002 per request.

        Example:
            res = client.github.user_repositories(handle="torvalds")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_repositories", dict(input), options
        )
        return BareRunResult[GithubUserRepositoriesData].model_validate(raw)


class AsyncGithubNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def repository(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubRepositoryInput],
    ) -> BareRunResult[GithubRepositoryData]:
        """GitHub Repository

        Fetch a GitHub repository's metadata by URL (stars, forks, language, topics,
        license, and timestamps), normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.github.repository(url="https://github.com/facebook/react")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.repository", dict(input), options
        )
        return BareRunResult[GithubRepositoryData].model_validate(raw)

    async def trending_developers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubTrendingDevelopersInput],
    ) -> BareRunResult[GithubTrendingDevelopersData]:
        """GitHub Trending Developers

        List trending GitHub developers (rank, username, name, avatar, and their
        most popular repository), optionally filtered by programming language and
        time range.

        Price: $0.002 per request.

        Example:
            res = client.github.trending_developers(language="go", since="weekly")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.trending_developers", dict(input), options
        )
        return BareRunResult[GithubTrendingDevelopersData].model_validate(raw)

    async def trending_repositories(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubTrendingRepositoriesInput],
    ) -> BareRunResult[GithubTrendingRepositoriesData]:
        """GitHub Trending Repositories

        List GitHub Trending repositories (rank, stars, stars gained today,
        language, and description), filterable by language and time window,
        normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.github.trending_repositories(language="python", since="daily")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.trending_repositories", dict(input), options
        )
        return BareRunResult[GithubTrendingRepositoriesData].model_validate(raw)

    async def user(
        self, *, options: RequestOptions | None = None, **input: Unpack[GithubUserInput]
    ) -> BareRunResult[GithubUserData]:
        """GitHub User

        Fetch a GitHub user's public profile by handle (name, bio, company,
        location, followers, and repo counts), normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.github.user(handle="torvalds")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user", dict(input), options
        )
        return BareRunResult[GithubUserData].model_validate(raw)

    async def user_activity(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserActivityInput],
    ) -> BareRunResult[GithubUserActivityData]:
        """GitHub User Activity

        List a GitHub user's public contribution activity by handle (grouped monthly
        summaries of commits, pull requests, and issues with repository links) for a
        given year.

        Price: $0.002 per request.

        Example:
            res = client.github.user_activity(handle="kentcdodds")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_activity", dict(input), options
        )
        return BareRunResult[GithubUserActivityData].model_validate(raw)

    async def user_contributions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserContributionsInput],
    ) -> BareRunResult[GithubUserContributionsData]:
        """GitHub User Contributions

        Fetch a GitHub user's contribution graph for a year (total contributions
        plus per-day counts and heatmap intensity), normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.github.user_contributions(handle="torvalds", year=2024)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_contributions", dict(input), options
        )
        return BareRunResult[GithubUserContributionsData].model_validate(raw)

    async def user_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowersInput],
    ) -> BareRunResult[GithubUserFollowersData]:
        """GitHub User Followers

        List a GitHub user's followers by handle (each follower's login, type,
        avatar, and profile URL) with pagination.

        Price: $0.002 per request.

        Example:
            res = client.github.user_followers(handle="torvalds")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_followers", dict(input), options
        )
        return BareRunResult[GithubUserFollowersData].model_validate(raw)

    async def user_following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserFollowingInput],
    ) -> BareRunResult[GithubUserFollowingData]:
        """GitHub User Following

        List the GitHub users a given user follows by handle (each account's login,
        type, avatar, and profile URL) with pagination.

        Price: $0.002 per request.

        Example:
            res = client.github.user_following(handle="kentcdodds")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_following", dict(input), options
        )
        return BareRunResult[GithubUserFollowingData].model_validate(raw)

    async def user_pull_requests(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserPullRequestsInput],
    ) -> BareRunResult[GithubUserPullRequestsData]:
        """GitHub User Pull Requests

        List a GitHub user's public pull requests by handle (title, repository,
        state, creation date, and URL) with optional date filtering and pagination.

        Price: $0.002 per request.

        Example:
            res = client.github.user_pull_requests(handle="torvalds")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_pull_requests", dict(input), options
        )
        return BareRunResult[GithubUserPullRequestsData].model_validate(raw)

    async def user_repositories(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GithubUserRepositoriesInput],
    ) -> BareRunResult[GithubUserRepositoriesData]:
        """GitHub User Repositories

        List a GitHub user's public repositories (name, description, language,
        stars, and forks) with sorting and cursor pagination, normalized across
        providers.

        Price: $0.002 per request.

        Example:
            res = client.github.user_repositories(handle="torvalds")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "github.user_repositories", dict(input), options
        )
        return BareRunResult[GithubUserRepositoriesData].model_validate(raw)
