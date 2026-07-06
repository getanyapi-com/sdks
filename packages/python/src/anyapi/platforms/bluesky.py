# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the bluesky platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class BlueskyPostInput(TypedDict, total=False):
    """Input for Bluesky Post."""

    url: Required[str]
    """Bluesky post URL, e.g. "https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l"."""


class BlueskyProfileInput(TypedDict, total=False):
    """Input for Bluesky Profile."""

    handle: Required[str]
    """Bluesky handle, e.g. "bsky.app" or "jay.bsky.team"."""


class BlueskyUserPostsInput(TypedDict, total=False):
    """Input for Bluesky User Posts."""

    handle: Required[str]
    """Bluesky handle, e.g. "bsky.app" or "jay.bsky.team"."""


class BlueskyPostData(BaseModel):
    model_config = ConfigDict(extra="allow")

    authorHandle: str = Field(
        description="Populated whenever the provider returns data."
    )
    createdAt: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    replies: int
    reposts: int
    text: str = Field(description="Populated whenever the provider returns data.")


class BlueskyProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")

    description: str = Field(
        description="Populated whenever the provider returns data."
    )
    displayName: str = Field(
        description="Populated whenever the provider returns data."
    )
    followers: int
    following: int
    handle: str = Field(description="Populated whenever the provider returns data.")
    postsCount: int


class BlueskyUserPostsData(BaseModel):
    posts: list[BlueskyUserPostsPost] = Field(
        description="Populated whenever the provider returns data."
    )


class BlueskyUserPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow")

    authorHandle: str = Field(
        description="Populated whenever the provider returns data."
    )
    createdAt: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    replies: int
    reposts: int
    text: str = Field(description="Populated whenever the provider returns data.")


class BlueskyNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyPostInput],
    ) -> RunResult[BlueskyPostData]:
        """Bluesky Post

        Get a single Bluesky post by URL - text, author handle, like, reply, and
        repost counts as clean JSON, billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.bluesky.post(url="https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "bluesky.post", dict(input), options
        )
        return RunResult[BlueskyPostData].model_validate(raw.model_dump(by_alias=True))

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyProfileInput],
    ) -> RunResult[BlueskyProfileData]:
        """Bluesky Profile

        Get a Bluesky user's public profile by handle - display name, bio, follower
        and post counts as clean JSON, billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.bluesky.profile(handle="bsky.app")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "bluesky.profile", dict(input), options
        )
        return RunResult[BlueskyProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyUserPostsInput],
    ) -> RunResult[BlueskyUserPostsData]:
        """Bluesky User Posts

        List a Bluesky account's recent posts (text, author handle, like, reply, and
        repost counts) by handle as clean JSON, normalized across providers, billed
        per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.bluesky.user_posts(handle="bsky.app")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "bluesky.user_posts", dict(input), options
        )
        return RunResult[BlueskyUserPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncBlueskyNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyPostInput],
    ) -> RunResult[BlueskyPostData]:
        """Bluesky Post

        Get a single Bluesky post by URL - text, author handle, like, reply, and
        repost counts as clean JSON, billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.bluesky.post(url="https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "bluesky.post", dict(input), options
        )
        return RunResult[BlueskyPostData].model_validate(raw.model_dump(by_alias=True))

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyProfileInput],
    ) -> RunResult[BlueskyProfileData]:
        """Bluesky Profile

        Get a Bluesky user's public profile by handle - display name, bio, follower
        and post counts as clean JSON, billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.bluesky.profile(handle="bsky.app")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "bluesky.profile", dict(input), options
        )
        return RunResult[BlueskyProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyUserPostsInput],
    ) -> RunResult[BlueskyUserPostsData]:
        """Bluesky User Posts

        List a Bluesky account's recent posts (text, author handle, like, reply, and
        repost counts) by handle as clean JSON, normalized across providers, billed
        per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.bluesky.user_posts(handle="bsky.app")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "bluesky.user_posts", dict(input), options
        )
        return RunResult[BlueskyUserPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )
