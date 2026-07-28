# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the hackernews platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class HackernewsProfileInput(TypedDict, total=False):
    """Input for Hacker News Profile."""

    handle: Required[str]
    """Hacker News username, e.g. "pg"."""


class HackernewsSearchInput(TypedDict, total=False):
    """Input for Hacker News Search."""

    query: Required[str]
    """Search keyword, e.g. "ai"."""
    tags: NotRequired[str]
    """Optional result filter, e.g. "story" or "comment"."""


class HackernewsStoryInput(TypedDict, total=False):
    """Input for Hacker News Story."""

    id: Required[str]
    """Hacker News story id, e.g. "47340079"."""


class HackernewsStoryCommentsInput(TypedDict, total=False):
    """Input for Hacker News Story Comments."""

    id: Required[str]
    """Hacker News story id, e.g. "47340079"."""


class HackernewsProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class HackernewsSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class HackernewsStoryData(BaseModel):
    model_config = ConfigDict(extra="allow")


class HackernewsStoryCommentsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class HackernewsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsProfileInput],
    ) -> BareRunResult[HackernewsProfileData]:
        """Hacker News Profile

        Get a Hacker News user's public profile by username - karma, bio, and
        account details as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.profile(handle="pg")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.profile", dict(input), options
        )
        return BareRunResult[HackernewsProfileData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsSearchInput],
    ) -> BareRunResult[HackernewsSearchData]:
        """Hacker News Search

        Search Hacker News by keyword - matching stories with title, link, author,
        points, and comment count as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.search(query="ai")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.search", dict(input), options
        )
        return BareRunResult[HackernewsSearchData].model_validate(raw)

    def story(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsStoryInput],
    ) -> BareRunResult[HackernewsStoryData]:
        """Hacker News Story

        Get a Hacker News story by id - title, link, author, points, and comment
        count as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.story(id="47340079")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.story", dict(input), options
        )
        return BareRunResult[HackernewsStoryData].model_validate(raw)

    def story_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsStoryCommentsInput],
    ) -> BareRunResult[HackernewsStoryCommentsData]:
        """Hacker News Story Comments

        List the comments on a Hacker News story by id - text, author, and timestamp
        as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.story_comments(id="47340079")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.story_comments", dict(input), options
        )
        return BareRunResult[HackernewsStoryCommentsData].model_validate(raw)


class AsyncHackernewsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsProfileInput],
    ) -> BareRunResult[HackernewsProfileData]:
        """Hacker News Profile

        Get a Hacker News user's public profile by username - karma, bio, and
        account details as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.profile(handle="pg")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.profile", dict(input), options
        )
        return BareRunResult[HackernewsProfileData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsSearchInput],
    ) -> BareRunResult[HackernewsSearchData]:
        """Hacker News Search

        Search Hacker News by keyword - matching stories with title, link, author,
        points, and comment count as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.search(query="ai")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.search", dict(input), options
        )
        return BareRunResult[HackernewsSearchData].model_validate(raw)

    async def story(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsStoryInput],
    ) -> BareRunResult[HackernewsStoryData]:
        """Hacker News Story

        Get a Hacker News story by id - title, link, author, points, and comment
        count as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.story(id="47340079")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.story", dict(input), options
        )
        return BareRunResult[HackernewsStoryData].model_validate(raw)

    async def story_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsStoryCommentsInput],
    ) -> BareRunResult[HackernewsStoryCommentsData]:
        """Hacker News Story Comments

        List the comments on a Hacker News story by id - text, author, and timestamp
        as clean JSON.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.story_comments(id="47340079")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.story_comments", dict(input), options
        )
        return BareRunResult[HackernewsStoryCommentsData].model_validate(raw)
