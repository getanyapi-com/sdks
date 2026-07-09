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
    username: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class HackernewsSearchData(BaseModel):
    results: list[HackernewsSearchResult] = Field(
        description="Matching Hacker News stories. Populated whenever the provider has data for the entity."
    )


class HackernewsSearchResult(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Submitting user's username. Populated whenever the provider has data for the entity."
    )
    comments: int = Field(description="Number of comments on the story.")
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Hacker News item id. Populated whenever the provider has data for the entity."
    )
    points: int = Field(description="Story score (upvotes).")
    title: str = Field(
        description="Story title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(description="Story link.")


class HackernewsStoryData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Submitting user's username. Populated whenever the provider has data for the entity."
    )
    comments: int = Field(description="Number of comments on the story.")
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    points: int = Field(description="Story score (upvotes).")
    title: str = Field(
        description="Story title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(description="Story link.")


class HackernewsStoryCommentsData(BaseModel):
    comments: list[HackernewsStoryCommentsComment] = Field(
        description="Comments on the story. Populated whenever the provider has data for the entity."
    )


class HackernewsStoryCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Commenting user's username. Populated whenever the provider has data for the entity."
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Hacker News comment id. Populated whenever the provider has data for the entity."
    )
    parent_id: str = Field(
        alias="parentId",
        description="Id of the parent item (story or comment) this reply belongs to.",
    )
    text: str = Field(description="Comment body text.")


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
        account details as clean JSON. **Price:** \$3.25 per 1,000 requests (flat
        per request - same cost regardless of results returned).

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.profile(handle="pg")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.profile", dict(input), options
        )
        return RunResult[HackernewsProfileData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsSearchInput],
    ) -> RunResult[HackernewsSearchData]:
        """Hacker News Search

        Search Hacker News by keyword - matching stories with title, link, author,
        points, and comment count as clean JSON. **Price:** \$3.25 per 1,000
        requests (flat per request - same cost regardless of results returned).

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.search(query="ai")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.search", dict(input), options
        )
        return RunResult[HackernewsSearchData].model_validate(raw)

    def story(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsStoryInput],
    ) -> RunResult[HackernewsStoryData]:
        """Hacker News Story

        Get a Hacker News story by id - title, link, author, points, and comment
        count as clean JSON. **Price:** \$3.25 per 1,000 requests (flat per request
        - same cost regardless of results returned).

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.story(id="47340079")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.story", dict(input), options
        )
        return RunResult[HackernewsStoryData].model_validate(raw)

    def story_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsStoryCommentsInput],
    ) -> RunResult[HackernewsStoryCommentsData]:
        """Hacker News Story Comments

        List the comments on a Hacker News story by id - text, author, and timestamp
        as clean JSON. **Price:** \$3.25 per 1,000 requests (flat per request - same
        cost regardless of results returned).

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.story_comments(id="47340079")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.story_comments", dict(input), options
        )
        return RunResult[HackernewsStoryCommentsData].model_validate(raw)


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
        account details as clean JSON. **Price:** \$3.25 per 1,000 requests (flat
        per request - same cost regardless of results returned).

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.profile(handle="pg")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.profile", dict(input), options
        )
        return RunResult[HackernewsProfileData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsSearchInput],
    ) -> RunResult[HackernewsSearchData]:
        """Hacker News Search

        Search Hacker News by keyword - matching stories with title, link, author,
        points, and comment count as clean JSON. **Price:** \$3.25 per 1,000
        requests (flat per request - same cost regardless of results returned).

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.search(query="ai")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.search", dict(input), options
        )
        return RunResult[HackernewsSearchData].model_validate(raw)

    async def story(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsStoryInput],
    ) -> RunResult[HackernewsStoryData]:
        """Hacker News Story

        Get a Hacker News story by id - title, link, author, points, and comment
        count as clean JSON. **Price:** \$3.25 per 1,000 requests (flat per request
        - same cost regardless of results returned).

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.story(id="47340079")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.story", dict(input), options
        )
        return RunResult[HackernewsStoryData].model_validate(raw)

    async def story_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[HackernewsStoryCommentsInput],
    ) -> RunResult[HackernewsStoryCommentsData]:
        """Hacker News Story Comments

        List the comments on a Hacker News story by id - text, author, and timestamp
        as clean JSON. **Price:** \$3.25 per 1,000 requests (flat per request - same
        cost regardless of results returned).

        Price: $0.00325 per request.

        Example:
            res = client.hackernews.story_comments(id="47340079")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "hackernews.story_comments", dict(input), options
        )
        return RunResult[HackernewsStoryCommentsData].model_validate(raw)
