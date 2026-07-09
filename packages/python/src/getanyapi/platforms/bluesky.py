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
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_handle: str = Field(
        alias="authorHandle",
        description="Handle of the account that authored the post. Populated whenever the provider has data for the entity.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    likes: int = Field(description="Number of likes on the post.")
    replies: int = Field(description="Number of replies to the post.")
    reposts: int = Field(description="Number of reposts of the post.")
    text: str = Field(
        description="The post's text content. Populated whenever the provider has data for the entity."
    )


class BlueskyProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    description: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    display_name: str = Field(
        alias="displayName",
        description="Populated whenever the provider has data for the entity.",
    )
    followers: int
    following: int
    handle: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    posts_count: int = Field(alias="postsCount")


class BlueskyUserPostsData(BaseModel):
    posts: list[BlueskyUserPostsPost] = Field(
        description="The account's recent posts. Populated whenever the provider has data for the entity."
    )


class BlueskyUserPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_handle: str = Field(
        alias="authorHandle",
        description="Handle of the account that authored the post. Populated whenever the provider has data for the entity.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    likes: int = Field(description="Number of likes on the post.")
    replies: int = Field(description="Number of replies to the post.")
    reposts: int = Field(description="Number of reposts of the post.")
    text: str = Field(
        description="The post's text content. Populated whenever the provider has data for the entity."
    )


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
        repost counts as clean JSON. **Price:** \$2.00 per 1,000 requests (flat per
        request - same cost regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.bluesky.post(url="https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "bluesky.post", dict(input), options
        )
        return RunResult[BlueskyPostData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyProfileInput],
    ) -> RunResult[BlueskyProfileData]:
        """Bluesky Profile

        Get a Bluesky user's public profile by handle - display name, bio, follower
        and post counts as clean JSON. **Price:** \$2.00 per 1,000 requests (flat
        per request - same cost regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.bluesky.profile(handle="bsky.app")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "bluesky.profile", dict(input), options
        )
        return RunResult[BlueskyProfileData].model_validate(raw)

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyUserPostsInput],
    ) -> RunResult[BlueskyUserPostsData]:
        """Bluesky User Posts

        List a Bluesky account's recent posts (text, author handle, like, reply, and
        repost counts) by handle as clean JSON, normalized across providers.
        **Price:** \$2.00 per 1,000 requests (flat per request - same cost
        regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.bluesky.user_posts(handle="bsky.app")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "bluesky.user_posts", dict(input), options
        )
        return RunResult[BlueskyUserPostsData].model_validate(raw)


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
        repost counts as clean JSON. **Price:** \$2.00 per 1,000 requests (flat per
        request - same cost regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.bluesky.post(url="https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "bluesky.post", dict(input), options
        )
        return RunResult[BlueskyPostData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyProfileInput],
    ) -> RunResult[BlueskyProfileData]:
        """Bluesky Profile

        Get a Bluesky user's public profile by handle - display name, bio, follower
        and post counts as clean JSON. **Price:** \$2.00 per 1,000 requests (flat
        per request - same cost regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.bluesky.profile(handle="bsky.app")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "bluesky.profile", dict(input), options
        )
        return RunResult[BlueskyProfileData].model_validate(raw)

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyUserPostsInput],
    ) -> RunResult[BlueskyUserPostsData]:
        """Bluesky User Posts

        List a Bluesky account's recent posts (text, author handle, like, reply, and
        repost counts) by handle as clean JSON, normalized across providers.
        **Price:** \$2.00 per 1,000 requests (flat per request - same cost
        regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.bluesky.user_posts(handle="bsky.app")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "bluesky.user_posts", dict(input), options
        )
        return RunResult[BlueskyUserPostsData].model_validate(raw)
