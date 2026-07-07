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
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    comments: int = Field(description="Number of comments on the post.")
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    display_name: str = Field(
        alias="displayName", description="Display name of the author."
    )
    id: str = Field(description="Post identifier.")
    likes: int = Field(description="Number of likes on the post.")
    shares: int = Field(description="Number of reblogs of the post.")
    text: str = Field(description="Post text content.")
    username: str = Field(description="Username of the author.")


class TruthsocialProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(alias="avatarUrl")
    bio: str
    display_name: str = Field(alias="displayName")
    followers: int
    following: int
    id: str
    joined_at: str = Field(alias="joinedAt")
    posts_count: int = Field(alias="postsCount")
    private: bool
    url: str
    username: str
    verified: bool


class TruthsocialUserPostsData(BaseModel):
    posts: list[TruthsocialUserPostsPost] = Field(
        description="The user's recent posts."
    )


class TruthsocialUserPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    comments: int = Field(description="Number of comments on the post.")
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(description="Post identifier.")
    likes: int = Field(description="Number of likes on the post.")
    shares: int = Field(description="Number of reblogs of the post.")
    text: str = Field(description="Post text content.")
    url: str = Field(description="Canonical URL of the post.")


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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.post", dict(input), options
        )
        return RunResult[TruthsocialPostData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.profile", dict(input), options
        )
        return RunResult[TruthsocialProfileData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.user_posts", dict(input), options
        )
        return RunResult[TruthsocialUserPostsData].model_validate(raw)


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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.post", dict(input), options
        )
        return RunResult[TruthsocialPostData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.profile", dict(input), options
        )
        return RunResult[TruthsocialProfileData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "truthsocial.user_posts", dict(input), options
        )
        return RunResult[TruthsocialUserPostsData].model_validate(raw)
