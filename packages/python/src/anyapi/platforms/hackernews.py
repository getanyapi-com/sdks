# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the hackernews platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

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

    bio: str
    karma: int
    username: str = Field(description="Populated whenever the provider returns data.")


class HackernewsSearchData(BaseModel):
    results: list[HackernewsSearchResult] = Field(
        description="Populated whenever the provider returns data."
    )


class HackernewsSearchResult(BaseModel):
    model_config = ConfigDict(extra="allow")

    author: str = Field(description="Populated whenever the provider returns data.")
    comments: int
    id: str = Field(description="Populated whenever the provider returns data.")
    points: int
    publishedAt: str = Field(
        description="Populated whenever the provider returns data."
    )
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str


class HackernewsStoryData(BaseModel):
    model_config = ConfigDict(extra="allow")

    author: str = Field(description="Populated whenever the provider returns data.")
    comments: int
    points: int
    publishedAt: str = Field(
        description="Populated whenever the provider returns data."
    )
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str


class HackernewsStoryCommentsData(BaseModel):
    comments: list[HackernewsStoryCommentsComment] = Field(
        description="Populated whenever the provider returns data."
    )


class HackernewsStoryCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow")

    author: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    parentId: str
    publishedAt: str = Field(
        description="Populated whenever the provider returns data."
    )
    text: str


class HackernewsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsProfileInput],
    ) -> RunResult[HackernewsProfileData]:
        """Hacker News Profile

        Get a Hacker News user's public profile by username - karma, bio, and
        account details as clean JSON, billed per request in USD.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.profile(handle="pg")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "hackernews.profile", dict(input), options
        )
        return RunResult[HackernewsProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsSearchInput],
    ) -> RunResult[HackernewsSearchData]:
        """Hacker News Search

        Search Hacker News by keyword - matching stories with title, link, author,
        points, and comment count as clean JSON, billed per request in USD.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.search(query="ai")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "hackernews.search", dict(input), options
        )
        return RunResult[HackernewsSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def story(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsStoryInput],
    ) -> RunResult[HackernewsStoryData]:
        """Hacker News Story

        Get a Hacker News story by id - title, link, author, points, and comment
        count as clean JSON, billed per request in USD.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.story(id="47340079")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "hackernews.story", dict(input), options
        )
        return RunResult[HackernewsStoryData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def story_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsStoryCommentsInput],
    ) -> RunResult[HackernewsStoryCommentsData]:
        """Hacker News Story Comments

        List the comments on a Hacker News story by id - text, author, and timestamp
        as clean JSON, billed per request in USD.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.story_comments(id="47340079")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "hackernews.story_comments", dict(input), options
        )
        return RunResult[HackernewsStoryCommentsData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncHackernewsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsProfileInput],
    ) -> RunResult[HackernewsProfileData]:
        """Hacker News Profile

        Get a Hacker News user's public profile by username - karma, bio, and
        account details as clean JSON, billed per request in USD.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.profile(handle="pg")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "hackernews.profile", dict(input), options
        )
        return RunResult[HackernewsProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsSearchInput],
    ) -> RunResult[HackernewsSearchData]:
        """Hacker News Search

        Search Hacker News by keyword - matching stories with title, link, author,
        points, and comment count as clean JSON, billed per request in USD.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.search(query="ai")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "hackernews.search", dict(input), options
        )
        return RunResult[HackernewsSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def story(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsStoryInput],
    ) -> RunResult[HackernewsStoryData]:
        """Hacker News Story

        Get a Hacker News story by id - title, link, author, points, and comment
        count as clean JSON, billed per request in USD.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.story(id="47340079")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "hackernews.story", dict(input), options
        )
        return RunResult[HackernewsStoryData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def story_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsStoryCommentsInput],
    ) -> RunResult[HackernewsStoryCommentsData]:
        """Hacker News Story Comments

        List the comments on a Hacker News story by id - text, author, and timestamp
        as clean JSON, billed per request in USD.

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.story_comments(id="47340079")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "hackernews.story_comments", dict(input), options
        )
        return RunResult[HackernewsStoryCommentsData].model_validate(
            raw.model_dump(by_alias=True)
        )
