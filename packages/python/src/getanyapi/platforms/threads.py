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
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    code: str = Field(description="Threads post shortcode.")
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    full_name: str = Field(
        alias="fullName",
        description="Display name of the author. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Post identifier. Populated whenever the provider has data for the entity."
    )
    like_count: int = Field(
        alias="likeCount", description="Number of likes on the post."
    )
    quote_count: int = Field(alias="quoteCount", description="Number of quote posts.")
    reply_count: int = Field(
        alias="replyCount", description="Number of replies to the post."
    )
    repost_count: int = Field(
        alias="repostCount", description="Number of reposts of the post."
    )
    text: str = Field(
        description="Post text content. Populated whenever the provider has data for the entity."
    )
    username: str = Field(
        description="Username of the author. Populated whenever the provider has data for the entity."
    )


class ThreadsProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    biography: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    follower_count: int = Field(alias="followerCount")
    full_name: str = Field(
        alias="fullName",
        description="Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    is_private: bool = Field(alias="isPrivate")
    is_verified: bool = Field(alias="isVerified")
    profile_pic_url: str = Field(
        alias="profilePicUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    username: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class ThreadsSearchData(BaseModel):
    posts: list[ThreadsSearchPost] = Field(
        description="Matching public post records: text, author, engagement counts, timestamp, and URL. Populated whenever the provider has data for the entity."
    )


class ThreadsSearchPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    code: str = Field(description="Threads post shortcode.")
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    full_name: str = Field(
        alias="fullName",
        description="Display name of the author. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Post identifier. Populated whenever the provider has data for the entity."
    )
    like_count: int = Field(
        alias="likeCount", description="Number of likes on the post."
    )
    reply_count: int = Field(
        alias="replyCount", description="Number of replies to the post."
    )
    repost_count: int = Field(
        alias="repostCount", description="Number of reposts of the post."
    )
    text: str = Field(
        description="Post text content. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical URL of the post. Populated whenever the provider has data for the entity."
    )
    username: str = Field(
        description="Username of the author. Populated whenever the provider has data for the entity."
    )


class ThreadsSearchUsersData(BaseModel):
    users: list[ThreadsSearchUsersUser] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class ThreadsSearchUsersUser(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    full_name: str = Field(
        alias="fullName",
        description="Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    is_verified: bool = Field(alias="isVerified")
    profile_pic_url: str = Field(
        alias="profilePicUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    username: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class ThreadsUserPostsData(BaseModel):
    posts: list[ThreadsUserPostsPost] = Field(
        description="The user's recent posts. Populated whenever the provider has data for the entity."
    )


class ThreadsUserPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    code: str = Field(description="Threads post shortcode.")
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="Post identifier. Populated whenever the provider has data for the entity."
    )
    like_count: int = Field(
        alias="likeCount", description="Number of likes on the post."
    )
    quote_count: int = Field(alias="quoteCount", description="Number of quote posts.")
    reply_count: int = Field(
        alias="replyCount", description="Number of replies to the post."
    )
    repost_count: int = Field(
        alias="repostCount", description="Number of reposts of the post."
    )
    text: str = Field(
        description="Post text content. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical URL of the post. Populated whenever the provider has data for the entity."
    )
    username: str = Field(
        description="Username of the author. Populated whenever the provider has data for the entity."
    )


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
        timestamp.

        Price: $0.002 per request.

        Example:
            res = client.threads.post(url="https://www.threads.com/@aaronparnas/post/DZxPYVFkYSq")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.post", dict(input), options
        )
        return RunResult[ThreadsPostData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsProfileInput],
    ) -> RunResult[ThreadsProfileData]:
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
        return RunResult[ThreadsProfileData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsSearchInput],
    ) -> RunResult[ThreadsSearchData]:
        """Threads Search

        Search public Threads posts by keyword or hashtag and get normalized post
        records - text, author, and engagement.

        Price: $0.002 per request.

        Example:
            res = client.threads.search(query="trump")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.search", dict(input), options
        )
        return RunResult[ThreadsSearchData].model_validate(raw)

    def search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsSearchUsersInput],
    ) -> RunResult[ThreadsSearchUsersData]:
        """Threads User Search

        Search Threads users by name or username and get normalized profile records
        - username, full name, verification, and picture.

        Price: $0.002 per request.

        Example:
            res = client.threads.search_users(query="shams")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.search_users", dict(input), options
        )
        return RunResult[ThreadsSearchUsersData].model_validate(raw)

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsUserPostsInput],
    ) -> RunResult[ThreadsUserPostsData]:
        """Threads User Posts

        List a Threads user's recent public posts by username - text, engagement
        counts, and post URLs.

        Price: $0.002 per request.

        Example:
            res = client.threads.user_posts(handle="trendspider")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.user_posts", dict(input), options
        )
        return RunResult[ThreadsUserPostsData].model_validate(raw)


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
        timestamp.

        Price: $0.002 per request.

        Example:
            res = client.threads.post(url="https://www.threads.com/@aaronparnas/post/DZxPYVFkYSq")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.post", dict(input), options
        )
        return RunResult[ThreadsPostData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsProfileInput],
    ) -> RunResult[ThreadsProfileData]:
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
        return RunResult[ThreadsProfileData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsSearchInput],
    ) -> RunResult[ThreadsSearchData]:
        """Threads Search

        Search public Threads posts by keyword or hashtag and get normalized post
        records - text, author, and engagement.

        Price: $0.002 per request.

        Example:
            res = client.threads.search(query="trump")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.search", dict(input), options
        )
        return RunResult[ThreadsSearchData].model_validate(raw)

    async def search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsSearchUsersInput],
    ) -> RunResult[ThreadsSearchUsersData]:
        """Threads User Search

        Search Threads users by name or username and get normalized profile records
        - username, full name, verification, and picture.

        Price: $0.002 per request.

        Example:
            res = client.threads.search_users(query="shams")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.search_users", dict(input), options
        )
        return RunResult[ThreadsSearchUsersData].model_validate(raw)

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[ThreadsUserPostsInput],
    ) -> RunResult[ThreadsUserPostsData]:
        """Threads User Posts

        List a Threads user's recent public posts by username - text, engagement
        counts, and post URLs.

        Price: $0.002 per request.

        Example:
            res = client.threads.user_posts(handle="trendspider")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "threads.user_posts", dict(input), options
        )
        return RunResult[ThreadsUserPostsData].model_validate(raw)
