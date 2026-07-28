# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the bluesky platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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


class BlueskyProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class BlueskyUserPostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class BlueskyNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyPostInput],
    ) -> BareRunResult[BlueskyPostData]:
        """Bluesky Post

        Get a single Bluesky post by URL - text, author handle, like, reply, and
        repost counts as clean JSON.

        Price: $0.002 per request.

        Example:
            res = client.bluesky.post(url="https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "bluesky.post", dict(input), options
        )
        return BareRunResult[BlueskyPostData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyProfileInput],
    ) -> BareRunResult[BlueskyProfileData]:
        """Bluesky Profile

        Get a Bluesky user's public profile by handle - display name, bio, follower
        and post counts as clean JSON.

        Price: $0.002 per request.

        Example:
            res = client.bluesky.profile(handle="bsky.app")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "bluesky.profile", dict(input), options
        )
        return BareRunResult[BlueskyProfileData].model_validate(raw)

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyUserPostsInput],
    ) -> BareRunResult[BlueskyUserPostsData]:
        """Bluesky User Posts

        List a Bluesky account's recent posts (text, author handle, like, reply, and
        repost counts) by handle as clean JSON, normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.bluesky.user_posts(handle="bsky.app")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "bluesky.user_posts", dict(input), options
        )
        return BareRunResult[BlueskyUserPostsData].model_validate(raw)


class AsyncBlueskyNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyPostInput],
    ) -> BareRunResult[BlueskyPostData]:
        """Bluesky Post

        Get a single Bluesky post by URL - text, author handle, like, reply, and
        repost counts as clean JSON.

        Price: $0.002 per request.

        Example:
            res = client.bluesky.post(url="https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "bluesky.post", dict(input), options
        )
        return BareRunResult[BlueskyPostData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyProfileInput],
    ) -> BareRunResult[BlueskyProfileData]:
        """Bluesky Profile

        Get a Bluesky user's public profile by handle - display name, bio, follower
        and post counts as clean JSON.

        Price: $0.002 per request.

        Example:
            res = client.bluesky.profile(handle="bsky.app")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "bluesky.profile", dict(input), options
        )
        return BareRunResult[BlueskyProfileData].model_validate(raw)

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[BlueskyUserPostsInput],
    ) -> BareRunResult[BlueskyUserPostsData]:
        """Bluesky User Posts

        List a Bluesky account's recent posts (text, author handle, like, reply, and
        repost counts) by handle as clean JSON, normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.bluesky.user_posts(handle="bsky.app")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "bluesky.user_posts", dict(input), options
        )
        return BareRunResult[BlueskyUserPostsData].model_validate(raw)
