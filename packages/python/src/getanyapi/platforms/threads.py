# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the threads platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class ThreadsPostInput(TypedDict, total=False):
    """Input for Threads Post."""

    url: Required[str]
    """The full URL of the Threads post to fetch (e.g. https://www.threads.com/@zuck/post/C8yKXdRxKqK)."""


class ThreadsProfileInput(TypedDict, total=False):
    """Input for Threads Profile."""

    username: Required[str]
    """The Threads username to look up, without the @ prefix (e.g. zuck)."""


class ThreadsSearchInput(TypedDict, total=False):
    """Input for Threads Search."""

    query: Required[str]
    """Keyword or hashtag to search public Threads posts for; the # prefix is optional (e.g. AI agents)."""


class ThreadsSearchUsersInput(TypedDict, total=False):
    """Input for Threads User Search."""

    query: Required[str]
    """The name or username to search Threads users for."""


class ThreadsUserPostsInput(TypedDict, total=False):
    """Input for Threads User Posts."""

    handle: Required[str]
    """The Threads username to list posts for, without the @ prefix."""


class ThreadsPostData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ThreadsProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ThreadsSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ThreadsSearchUsersData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ThreadsUserPostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class ThreadsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsPostInput],
    ) -> BareRunResult[ThreadsPostData]:
        """Threads Post

        Fetch a single Threads post by URL: text, author, engagement counts, and
        timestamp.

        Price: $0.002 per request.

        Example:
            res = client.threads.post(url="https://www.threads.com/@aaronparnas/post/DZxPYVFkYSq")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.post", dict(input), options
        )
        return BareRunResult[ThreadsPostData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsProfileInput],
    ) -> BareRunResult[ThreadsProfileData]:
        """Threads Profile

        Fetch a Threads user's public profile (bio, follower count, verification,
        profile picture) by username.

        Price: $0.002 per request.

        Example:
            res = client.threads.profile(username="zuck")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.profile", dict(input), options
        )
        return BareRunResult[ThreadsProfileData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsSearchInput],
    ) -> BareRunResult[ThreadsSearchData]:
        """Threads Search

        Search public Threads posts by keyword or hashtag and get normalized post
        records: text, author, and engagement.

        Price: $0.002 per request.

        Example:
            res = client.threads.search(query="trump")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.search", dict(input), options
        )
        return BareRunResult[ThreadsSearchData].model_validate(raw)

    def search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsSearchUsersInput],
    ) -> BareRunResult[ThreadsSearchUsersData]:
        """Threads User Search

        Search Threads users by name or username and get normalized profile records:
        username, full name, verification, and picture.

        Price: $0.002 per request.

        Example:
            res = client.threads.search_users(query="shams")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.search_users", dict(input), options
        )
        return BareRunResult[ThreadsSearchUsersData].model_validate(raw)

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsUserPostsInput],
    ) -> BareRunResult[ThreadsUserPostsData]:
        """Threads User Posts

        List a Threads user's recent public posts by username: text, engagement
        counts, and post URLs.

        Price: $0.002 per request.

        Example:
            res = client.threads.user_posts(handle="trendspider")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.user_posts", dict(input), options
        )
        return BareRunResult[ThreadsUserPostsData].model_validate(raw)


class AsyncThreadsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsPostInput],
    ) -> BareRunResult[ThreadsPostData]:
        """Threads Post

        Fetch a single Threads post by URL: text, author, engagement counts, and
        timestamp.

        Price: $0.002 per request.

        Example:
            res = client.threads.post(url="https://www.threads.com/@aaronparnas/post/DZxPYVFkYSq")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.post", dict(input), options
        )
        return BareRunResult[ThreadsPostData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsProfileInput],
    ) -> BareRunResult[ThreadsProfileData]:
        """Threads Profile

        Fetch a Threads user's public profile (bio, follower count, verification,
        profile picture) by username.

        Price: $0.002 per request.

        Example:
            res = client.threads.profile(username="zuck")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.profile", dict(input), options
        )
        return BareRunResult[ThreadsProfileData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsSearchInput],
    ) -> BareRunResult[ThreadsSearchData]:
        """Threads Search

        Search public Threads posts by keyword or hashtag and get normalized post
        records: text, author, and engagement.

        Price: $0.002 per request.

        Example:
            res = client.threads.search(query="trump")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.search", dict(input), options
        )
        return BareRunResult[ThreadsSearchData].model_validate(raw)

    async def search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsSearchUsersInput],
    ) -> BareRunResult[ThreadsSearchUsersData]:
        """Threads User Search

        Search Threads users by name or username and get normalized profile records:
        username, full name, verification, and picture.

        Price: $0.002 per request.

        Example:
            res = client.threads.search_users(query="shams")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.search_users", dict(input), options
        )
        return BareRunResult[ThreadsSearchUsersData].model_validate(raw)

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsUserPostsInput],
    ) -> BareRunResult[ThreadsUserPostsData]:
        """Threads User Posts

        List a Threads user's recent public posts by username: text, engagement
        counts, and post URLs.

        Price: $0.002 per request.

        Example:
            res = client.threads.user_posts(handle="trendspider")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.user_posts", dict(input), options
        )
        return BareRunResult[ThreadsUserPostsData].model_validate(raw)
