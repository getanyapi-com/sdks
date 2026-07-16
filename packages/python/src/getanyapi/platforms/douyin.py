# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the douyin platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class DouyinProfileInput(TypedDict, total=False):
    """Input for Douyin Profile."""

    secUserId: Required[str]
    """Douyin sec_user_id for the public account."""


class DouyinSearchVideosInput(TypedDict, total=False):
    """Input for Douyin Video Search."""

    backtrace: NotRequired[str]
    """Backtrace token returned by the previous page."""
    cursor: NotRequired[int]
    """Pagination cursor from the previous response; omit for the first page. Minimum: 0."""
    duration: NotRequired[Literal["0", "0-1", "1-5", "5-10000"]]
    """Duration filter in minutes: any, under 1, 1 to 5, or over 5. Default: 0."""
    publishedWithin: NotRequired[Literal["0", "1", "7", "180"]]
    """Publication window in days: 0 any time, 1 day, 7 days, or 180 days. Default: 0."""
    query: Required[str]
    """Keyword to search for."""
    searchId: NotRequired[str]
    """Search ID returned by the previous page."""
    sort: NotRequired[Literal["0", "1", "2"]]
    """Sort order: 0 comprehensive, 1 most liked, or 2 newest. Default: 0."""


class DouyinUserPostsInput(TypedDict, total=False):
    """Input for Douyin User Posts."""

    cursor: NotRequired[int]
    """Pagination cursor from the previous response; omit for the first page."""
    limit: NotRequired[int]
    """Requested page size. Values up to 20 are recommended. Default: 20."""
    secUserId: Required[str]
    """Douyin sec_user_id for the public account."""
    sort: NotRequired[int]
    """Post order: 0 for newest or 1 for most popular. Default: 0."""


class DouyinVideoInput(TypedDict, total=False):
    """Input for Douyin Video."""

    url: Required[str]
    """Public Douyin video share URL."""


class DouyinVideoCommentsInput(TypedDict, total=False):
    """Input for Douyin Video Comments."""

    cursor: NotRequired[int]
    """Pagination cursor from the previous response; omit for the first page. Minimum: 0."""
    videoId: Required[str]
    """Douyin aweme_id for the video."""


class DouyinProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    bio: str | None = Field(default=None, description="Profile biography.")
    followers: int | None = Field(default=None, description="Follower count.")
    following: int | None = Field(default=None, description="Following count.")
    image: str | None = Field(
        default=None,
        description="Profile image URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    likes: int | None = Field(default=None, description="Total likes received.")
    nickname: str | None = Field(
        default=None,
        description="Display name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    posts: int | None = Field(default=None, description="Published post count.")
    sec_user_id: str = Field(
        alias="secUserId",
        description="Douyin sec_user_id. Populated whenever the provider has data for the entity.",
    )
    short_id: str | None = Field(
        default=None, alias="shortId", description="Legacy numeric short ID."
    )
    unique_id: str | None = Field(
        default=None,
        alias="uniqueId",
        description="Public Douyin handle when configured. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    user_id: str = Field(
        alias="userId",
        description="Douyin user identifier. Populated whenever the provider has data for the entity.",
    )


class DouyinSearchVideosData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    backtrace: str = Field(description="Backtrace token required for the next page.")
    has_more: bool = Field(
        alias="hasMore", description="Whether another page is available."
    )
    next_cursor: str = Field(
        alias="nextCursor", description="Cursor for the next page."
    )
    search_id: str = Field(
        alias="searchId", description="Search ID required for the next page."
    )
    videos: list[DouyinSearchVideosVideo] = Field(
        description="Normalized matching videos. Populated whenever the provider has data for the entity."
    )


class DouyinSearchVideosVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_nickname: str | None = Field(
        default=None,
        alias="authorNickname",
        description="Author display name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    author_user_id: str | None = Field(
        default=None,
        alias="authorUserId",
        description="Author user identifier. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    caption: str | None = Field(
        default=None,
        description="Video caption. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    comments: int | None = Field(default=None, description="Comment count.")
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    id: str = Field(
        description="Video identifier. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(default=None, description="Cover image URL.")
    likes: int | None = Field(default=None, description="Like count.")
    saves: int | None = Field(default=None, description="Save count.")
    shares: int | None = Field(default=None, description="Share count.")
    url: str | None = Field(
        default=None,
        description="Canonical video URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    views: int | None = Field(default=None, description="Play count.")


class DouyinUserPostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    has_more: bool = Field(
        alias="hasMore", description="Whether another page is available."
    )
    next_cursor: str = Field(
        alias="nextCursor",
        description="Cursor for the next page; empty when unavailable.",
    )
    posts: list[DouyinUserPostsPost] = Field(
        description="Normalized Douyin posts. Populated whenever the provider has data for the entity."
    )


class DouyinUserPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_nickname: str | None = Field(
        default=None,
        alias="authorNickname",
        description="Author display name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    author_sec_user_id: str | None = Field(
        default=None,
        alias="authorSecUserId",
        description="Author sec_user_id. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    author_user_id: str | None = Field(
        default=None,
        alias="authorUserId",
        description="Author user identifier. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    caption: str | None = Field(
        default=None,
        description="Post caption. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    comments: int | None = Field(default=None, description="Comment count.")
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    id: str = Field(
        description="Post identifier. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(default=None, description="Cover image URL.")
    likes: int | None = Field(default=None, description="Like count.")
    saves: int | None = Field(default=None, description="Save count.")
    shares: int | None = Field(default=None, description="Share count.")
    url: str | None = Field(
        default=None,
        description="Canonical post URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    views: int | None = Field(default=None, description="Play count.")


class DouyinVideoData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_nickname: str | None = Field(
        default=None,
        alias="authorNickname",
        description="Author display name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    author_sec_user_id: str | None = Field(
        default=None,
        alias="authorSecUserId",
        description="Author sec_user_id. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    author_user_id: str | None = Field(
        default=None,
        alias="authorUserId",
        description="Author user identifier. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    caption: str | None = Field(
        default=None,
        description="Video caption. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    comments: int | None = Field(default=None, description="Comment count.")
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    duration_ms: int | None = Field(
        default=None, alias="durationMs", description="Video duration in milliseconds."
    )
    id: str = Field(
        description="Video identifier. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(default=None, description="Video cover image URL.")
    likes: int | None = Field(default=None, description="Like count.")
    saves: int | None = Field(default=None, description="Save count.")
    shares: int | None = Field(default=None, description="Share count.")
    url: str | None = Field(
        default=None,
        description="Canonical Douyin video URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    views: int | None = Field(default=None, description="Play count.")


class DouyinVideoCommentsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    comments: list[DouyinVideoCommentsComment] = Field(
        description="Normalized video comments. Populated whenever the provider has data for the entity."
    )
    has_more: bool = Field(
        alias="hasMore", description="Whether another page is available."
    )
    next_cursor: str = Field(
        alias="nextCursor", description="Cursor for the next page."
    )
    total: int = Field(description="Total comment count reported by Douyin.")


class DouyinVideoCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_image: str | None = Field(
        default=None, alias="authorImage", description="Author profile image URL."
    )
    author_nickname: str | None = Field(
        default=None,
        alias="authorNickname",
        description="Author display name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    author_sec_user_id: str | None = Field(
        default=None,
        alias="authorSecUserId",
        description="Author sec_user_id. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    author_unique_id: str | None = Field(
        default=None, alias="authorUniqueId", description="Author public handle."
    )
    author_user_id: str | None = Field(
        default=None,
        alias="authorUserId",
        description="Author user identifier. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    id: str = Field(
        description="Comment identifier. Populated whenever the provider has data for the entity."
    )
    ip_label: str | None = Field(
        default=None,
        alias="ipLabel",
        description="Approximate location label shown by Douyin.",
    )
    likes: int | None = Field(default=None, description="Comment like count.")
    reply_count: int | None = Field(
        default=None, alias="replyCount", description="Direct reply count."
    )
    text: str | None = Field(
        default=None,
        description="Comment text. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    video_id: str = Field(
        alias="videoId",
        description="Commented video identifier. Populated whenever the provider has data for the entity.",
    )


class DouyinNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinProfileInput],
    ) -> RunResult[DouyinProfileData]:
        """Douyin Profile

        Look up a public Douyin profile by sec_user_id and return normalized profile
        statistics.

        Price: $0.001 per request.

        Example:
            res = client.douyin.profile(secUserId="MS4wLjABAAAAW9FWcqS7RdQAWPd2AA5fL_ilmqsIFUCQ_Iym6Yh9_cUa6ZRqVLjVQSUjlHrfXY1Y")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "douyin.profile", dict(input), options
        )
        return RunResult[DouyinProfileData].model_validate(raw)

    def search_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinSearchVideosInput],
    ) -> RunResult[DouyinSearchVideosData]:
        """Douyin Video Search

        Search public Douyin videos by keyword with sorting, time, duration, and
        content filters.

        Price: $0.01 per request.

        Example:
            res = client.douyin.search_videos(duration="0", publishedWithin="0", query="机器人", sort="0")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "douyin.search_videos", dict(input), options
        )
        return RunResult[DouyinSearchVideosData].model_validate(raw)

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinUserPostsInput],
    ) -> RunResult[DouyinUserPostsData]:
        """Douyin User Posts

        List public posts from a Douyin user with normalized engagement data and
        pagination.

        Price: $0.001 per request.

        Example:
            res = client.douyin.user_posts(limit=20, secUserId="MS4wLjABAAAANXSltcLCzDGmdNFI2Q_QixVTr67NiYzjKOIP5s03CAE", sort=0)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "douyin.user_posts", dict(input), options
        )
        return RunResult[DouyinUserPostsData].model_validate(raw)

    def video(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinVideoInput],
    ) -> RunResult[DouyinVideoData]:
        """Douyin Video

        Fetch a public Douyin video by share URL with normalized author and
        engagement data.

        Price: $0.001 per request.

        Example:
            res = client.douyin.video(url="https://www.douyin.com/video/6894784055775071503")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "douyin.video", dict(input), options
        )
        return RunResult[DouyinVideoData].model_validate(raw)

    def video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinVideoCommentsInput],
    ) -> RunResult[DouyinVideoCommentsData]:
        """Douyin Video Comments

        List public comments on a Douyin video with author and engagement data.

        Price: $0.001 per request.

        Example:
            res = client.douyin.video_comments(videoId="7448118827402972455")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "douyin.video_comments", dict(input), options
        )
        return RunResult[DouyinVideoCommentsData].model_validate(raw)


class AsyncDouyinNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinProfileInput],
    ) -> RunResult[DouyinProfileData]:
        """Douyin Profile

        Look up a public Douyin profile by sec_user_id and return normalized profile
        statistics.

        Price: $0.001 per request.

        Example:
            res = client.douyin.profile(secUserId="MS4wLjABAAAAW9FWcqS7RdQAWPd2AA5fL_ilmqsIFUCQ_Iym6Yh9_cUa6ZRqVLjVQSUjlHrfXY1Y")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "douyin.profile", dict(input), options
        )
        return RunResult[DouyinProfileData].model_validate(raw)

    async def search_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinSearchVideosInput],
    ) -> RunResult[DouyinSearchVideosData]:
        """Douyin Video Search

        Search public Douyin videos by keyword with sorting, time, duration, and
        content filters.

        Price: $0.01 per request.

        Example:
            res = client.douyin.search_videos(duration="0", publishedWithin="0", query="机器人", sort="0")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "douyin.search_videos", dict(input), options
        )
        return RunResult[DouyinSearchVideosData].model_validate(raw)

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinUserPostsInput],
    ) -> RunResult[DouyinUserPostsData]:
        """Douyin User Posts

        List public posts from a Douyin user with normalized engagement data and
        pagination.

        Price: $0.001 per request.

        Example:
            res = client.douyin.user_posts(limit=20, secUserId="MS4wLjABAAAANXSltcLCzDGmdNFI2Q_QixVTr67NiYzjKOIP5s03CAE", sort=0)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "douyin.user_posts", dict(input), options
        )
        return RunResult[DouyinUserPostsData].model_validate(raw)

    async def video(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinVideoInput],
    ) -> RunResult[DouyinVideoData]:
        """Douyin Video

        Fetch a public Douyin video by share URL with normalized author and
        engagement data.

        Price: $0.001 per request.

        Example:
            res = client.douyin.video(url="https://www.douyin.com/video/6894784055775071503")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "douyin.video", dict(input), options
        )
        return RunResult[DouyinVideoData].model_validate(raw)

    async def video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinVideoCommentsInput],
    ) -> RunResult[DouyinVideoCommentsData]:
        """Douyin Video Comments

        List public comments on a Douyin video with author and engagement data.

        Price: $0.001 per request.

        Example:
            res = client.douyin.video_comments(videoId="7448118827402972455")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "douyin.video_comments", dict(input), options
        )
        return RunResult[DouyinVideoCommentsData].model_validate(raw)
