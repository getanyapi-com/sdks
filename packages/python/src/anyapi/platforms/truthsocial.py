# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the truthsocial platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

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

    comments: int
    displayName: str = Field(
        description="Populated whenever the provider returns data."
    )
    id: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    publishedAt: str = Field(
        description="Populated whenever the provider returns data."
    )
    shares: int
    text: str = Field(description="Populated whenever the provider returns data.")
    username: str = Field(description="Populated whenever the provider returns data.")


class TruthsocialProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")

    avatarUrl: str = Field(description="Populated whenever the provider returns data.")
    bio: str = Field(description="Populated whenever the provider returns data.")
    displayName: str = Field(
        description="Populated whenever the provider returns data."
    )
    followers: int
    following: int
    id: str = Field(description="Populated whenever the provider returns data.")
    joinedAt: str = Field(description="Populated whenever the provider returns data.")
    postsCount: int
    private: bool
    url: str = Field(description="Populated whenever the provider returns data.")
    username: str = Field(description="Populated whenever the provider returns data.")
    verified: bool


class TruthsocialUserPostsData(BaseModel):
    posts: list[TruthsocialUserPostsPost] = Field(
        description="Populated whenever the provider returns data."
    )


class TruthsocialUserPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow")

    comments: int
    id: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    publishedAt: str = Field(
        description="Populated whenever the provider returns data."
    )
    shares: int
    text: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class TruthsocialNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TruthsocialPostInput],
    ) -> RunResult[TruthsocialPostData]:
        """Truth Social Post

        Get a single Truth Social post by its URL - text, author, engagement (likes,
        comments, shares), and timestamp as clean JSON, billed per request in USD.

        Price: $0.00325 per request.

        Example:
            res = client.truthsocial.post(url="https://truthsocial.com/@realDonaldTrump/posts/116824551176646175")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.post", dict(input), options
        )
        return RunResult[TruthsocialPostData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TruthsocialProfileInput],
    ) -> RunResult[TruthsocialProfileData]:
        """Truth Social Profile

        Get a Truth Social account's public profile by handle - display name, bio,
        follower/following counts, and post count as clean JSON, billed per request
        in USD.

        Price: $0.00325 per request.

        Example:
            res = client.truthsocial.profile(handle="realDonaldTrump")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.profile", dict(input), options
        )
        return RunResult[TruthsocialProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TruthsocialUserPostsInput],
    ) -> RunResult[TruthsocialUserPostsData]:
        """Truth Social User Posts

        List a Truth Social account's recent posts by handle - text, engagement
        (likes, comments, shares), and timestamps as clean JSON, billed per request
        in USD.

        Price: $0.00325 per request.

        Example:
            res = client.truthsocial.user_posts(handle="realDonaldTrump")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.user_posts", dict(input), options
        )
        return RunResult[TruthsocialUserPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncTruthsocialNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TruthsocialPostInput],
    ) -> RunResult[TruthsocialPostData]:
        """Truth Social Post

        Get a single Truth Social post by its URL - text, author, engagement (likes,
        comments, shares), and timestamp as clean JSON, billed per request in USD.

        Price: $0.00325 per request.

        Example:
            res = client.truthsocial.post(url="https://truthsocial.com/@realDonaldTrump/posts/116824551176646175")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.post", dict(input), options
        )
        return RunResult[TruthsocialPostData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TruthsocialProfileInput],
    ) -> RunResult[TruthsocialProfileData]:
        """Truth Social Profile

        Get a Truth Social account's public profile by handle - display name, bio,
        follower/following counts, and post count as clean JSON, billed per request
        in USD.

        Price: $0.00325 per request.

        Example:
            res = client.truthsocial.profile(handle="realDonaldTrump")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.profile", dict(input), options
        )
        return RunResult[TruthsocialProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TruthsocialUserPostsInput],
    ) -> RunResult[TruthsocialUserPostsData]:
        """Truth Social User Posts

        List a Truth Social account's recent posts by handle - text, engagement
        (likes, comments, shares), and timestamps as clean JSON, billed per request
        in USD.

        Price: $0.00325 per request.

        Example:
            res = client.truthsocial.user_posts(handle="realDonaldTrump")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.user_posts", dict(input), options
        )
        return RunResult[TruthsocialUserPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )
