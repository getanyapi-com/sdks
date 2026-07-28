# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the truthsocial platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class TruthsocialPostInput(TypedDict, total=False):
    """Input for Truth Social Post."""

    url: Required[str]
    """Full Truth Social post URL, e.g. "https://truthsocial.com/@realDonaldTrump/posts/116824551176646175"."""


class TruthsocialProfileInput(TypedDict, total=False):
    """Input for Truth Social Profile."""

    handle: Required[str]
    """Truth Social handle without the @, e.g. "realDonaldTrump"."""


class TruthsocialUserPostsInput(TypedDict, total=False):
    """Input for Truth Social User Posts."""

    handle: Required[str]
    """Truth Social handle without the @, e.g. "realDonaldTrump"."""


class TruthsocialPostData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TruthsocialProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TruthsocialUserPostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TruthsocialNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TruthsocialPostInput],
    ) -> BareRunResult[TruthsocialPostData]:
        """Truth Social Post

        Get a single Truth Social post by its URL - text, author, engagement (likes,
        comments, shares), and timestamp as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.truthsocial.post(url="https://truthsocial.com/@realDonaldTrump/posts/116824551176646175")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.post", dict(input), options
        )
        return BareRunResult[TruthsocialPostData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TruthsocialProfileInput],
    ) -> BareRunResult[TruthsocialProfileData]:
        """Truth Social Profile

        Get a Truth Social account's public profile by handle - display name, bio,
        follower/following counts, and post count as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.truthsocial.profile(handle="realDonaldTrump")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.profile", dict(input), options
        )
        return BareRunResult[TruthsocialProfileData].model_validate(raw)

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TruthsocialUserPostsInput],
    ) -> BareRunResult[TruthsocialUserPostsData]:
        """Truth Social User Posts

        List a Truth Social account's recent posts by handle - text, engagement
        (likes, comments, shares), and timestamps as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.truthsocial.user_posts(handle="realDonaldTrump")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.user_posts", dict(input), options
        )
        return BareRunResult[TruthsocialUserPostsData].model_validate(raw)


class AsyncTruthsocialNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TruthsocialPostInput],
    ) -> BareRunResult[TruthsocialPostData]:
        """Truth Social Post

        Get a single Truth Social post by its URL - text, author, engagement (likes,
        comments, shares), and timestamp as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.truthsocial.post(url="https://truthsocial.com/@realDonaldTrump/posts/116824551176646175")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.post", dict(input), options
        )
        return BareRunResult[TruthsocialPostData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TruthsocialProfileInput],
    ) -> BareRunResult[TruthsocialProfileData]:
        """Truth Social Profile

        Get a Truth Social account's public profile by handle - display name, bio,
        follower/following counts, and post count as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.truthsocial.profile(handle="realDonaldTrump")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.profile", dict(input), options
        )
        return BareRunResult[TruthsocialProfileData].model_validate(raw)

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TruthsocialUserPostsInput],
    ) -> BareRunResult[TruthsocialUserPostsData]:
        """Truth Social User Posts

        List a Truth Social account's recent posts by handle - text, engagement
        (likes, comments, shares), and timestamps as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.truthsocial.user_posts(handle="realDonaldTrump")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.user_posts", dict(input), options
        )
        return BareRunResult[TruthsocialUserPostsData].model_validate(raw)
