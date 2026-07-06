# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the threads platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

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

    code: str
    fullName: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    likeCount: int
    quoteCount: int
    replyCount: int
    repostCount: int
    takenAt: int
    text: str = Field(description="Populated whenever the provider returns data.")
    username: str = Field(description="Populated whenever the provider returns data.")


class ThreadsProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")

    biography: str = Field(description="Populated whenever the provider returns data.")
    followerCount: int
    fullName: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    isPrivate: bool
    isVerified: bool
    profilePicUrl: str = Field(
        description="Populated whenever the provider returns data."
    )
    username: str = Field(description="Populated whenever the provider returns data.")


class ThreadsSearchData(BaseModel):
    posts: list[ThreadsSearchPost] = Field(
        description="Matching public post records: text, author, engagement counts, timestamp, and URL. Populated whenever the provider returns data."
    )


class ThreadsSearchPost(BaseModel):
    model_config = ConfigDict(extra="allow")

    code: str
    fullName: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    likeCount: int
    replyCount: int
    repostCount: int
    takenAt: int
    text: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")
    username: str = Field(description="Populated whenever the provider returns data.")


class ThreadsSearchUsersData(BaseModel):
    users: list[ThreadsSearchUsersUser] = Field(
        description="Populated whenever the provider returns data."
    )


class ThreadsSearchUsersUser(BaseModel):
    model_config = ConfigDict(extra="allow")

    fullName: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    isVerified: bool
    profilePicUrl: str = Field(
        description="Populated whenever the provider returns data."
    )
    username: str = Field(description="Populated whenever the provider returns data.")


class ThreadsUserPostsData(BaseModel):
    posts: list[ThreadsUserPostsPost] = Field(
        description="Populated whenever the provider returns data."
    )


class ThreadsUserPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow")

    code: str
    id: str = Field(description="Populated whenever the provider returns data.")
    likeCount: int
    quoteCount: int
    replyCount: int
    repostCount: int
    takenAt: int
    text: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")
    username: str = Field(description="Populated whenever the provider returns data.")


class ThreadsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsPostInput],
    ) -> RunResult[ThreadsPostData]:
        """Threads Post

        Fetch a single Threads post by URL - text, author, engagement counts, and
        timestamp - billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.threads.post(url="https://www.threads.com/@aaronparnas/post/DZxPYVFkYSq")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "threads.post", dict(input), options
        )
        return RunResult[ThreadsPostData].model_validate(raw.model_dump(by_alias=True))

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsProfileInput],
    ) -> RunResult[ThreadsProfileData]:
        """Threads Profile

        Fetch a Threads user's public profile (bio, follower count, verification,
        profile picture) by username, billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.threads.profile(username="zuck")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "threads.profile", dict(input), options
        )
        return RunResult[ThreadsProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsSearchInput],
    ) -> RunResult[ThreadsSearchData]:
        """Threads Search

        Search public Threads posts by keyword or hashtag and get normalized post
        records - text, author, and engagement - billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.threads.search(query="trump")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "threads.search", dict(input), options
        )
        return RunResult[ThreadsSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsSearchUsersInput],
    ) -> RunResult[ThreadsSearchUsersData]:
        """Threads User Search

        Search Threads users by name or username and get normalized profile records
        - username, full name, verification, and picture - at a flat per-request USD
        price.

        Price: $0.002 per request.

        Example:
            res = client.threads.search_users(query="shams")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "threads.search_users", dict(input), options
        )
        return RunResult[ThreadsSearchUsersData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsUserPostsInput],
    ) -> RunResult[ThreadsUserPostsData]:
        """Threads User Posts

        List a Threads user's recent public posts by username - text, engagement
        counts, and post URLs - at a flat per-request USD price.

        Price: $0.002 per request.

        Example:
            res = client.threads.user_posts(handle="trendspider")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "threads.user_posts", dict(input), options
        )
        return RunResult[ThreadsUserPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncThreadsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsPostInput],
    ) -> RunResult[ThreadsPostData]:
        """Threads Post

        Fetch a single Threads post by URL - text, author, engagement counts, and
        timestamp - billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.threads.post(url="https://www.threads.com/@aaronparnas/post/DZxPYVFkYSq")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "threads.post", dict(input), options
        )
        return RunResult[ThreadsPostData].model_validate(raw.model_dump(by_alias=True))

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsProfileInput],
    ) -> RunResult[ThreadsProfileData]:
        """Threads Profile

        Fetch a Threads user's public profile (bio, follower count, verification,
        profile picture) by username, billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.threads.profile(username="zuck")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "threads.profile", dict(input), options
        )
        return RunResult[ThreadsProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsSearchInput],
    ) -> RunResult[ThreadsSearchData]:
        """Threads Search

        Search public Threads posts by keyword or hashtag and get normalized post
        records - text, author, and engagement - billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.threads.search(query="trump")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "threads.search", dict(input), options
        )
        return RunResult[ThreadsSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsSearchUsersInput],
    ) -> RunResult[ThreadsSearchUsersData]:
        """Threads User Search

        Search Threads users by name or username and get normalized profile records
        - username, full name, verification, and picture - at a flat per-request USD
        price.

        Price: $0.002 per request.

        Example:
            res = client.threads.search_users(query="shams")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "threads.search_users", dict(input), options
        )
        return RunResult[ThreadsSearchUsersData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsUserPostsInput],
    ) -> RunResult[ThreadsUserPostsData]:
        """Threads User Posts

        List a Threads user's recent public posts by username - text, engagement
        counts, and post URLs - at a flat per-request USD price.

        Price: $0.002 per request.

        Example:
            res = client.threads.user_posts(handle="trendspider")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "threads.user_posts", dict(input), options
        )
        return RunResult[ThreadsUserPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )
