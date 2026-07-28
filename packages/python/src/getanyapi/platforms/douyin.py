# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the douyin platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    model_config = ConfigDict(extra="allow")


class DouyinSearchVideosData(BaseModel):
    model_config = ConfigDict(extra="allow")


class DouyinUserPostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class DouyinVideoData(BaseModel):
    model_config = ConfigDict(extra="allow")


class DouyinVideoCommentsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class DouyinNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinProfileInput],
    ) -> BareRunResult[DouyinProfileData]:
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
        return BareRunResult[DouyinProfileData].model_validate(raw)

    def search_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinSearchVideosInput],
    ) -> BareRunResult[DouyinSearchVideosData]:
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
        return BareRunResult[DouyinSearchVideosData].model_validate(raw)

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinUserPostsInput],
    ) -> BareRunResult[DouyinUserPostsData]:
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
        return BareRunResult[DouyinUserPostsData].model_validate(raw)

    def video(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinVideoInput],
    ) -> BareRunResult[DouyinVideoData]:
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
        return BareRunResult[DouyinVideoData].model_validate(raw)

    def video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinVideoCommentsInput],
    ) -> BareRunResult[DouyinVideoCommentsData]:
        """Douyin Video Comments

        List public comments on a Douyin video with author and engagement data.

        Price: $0.001 per request.

        Example:
            res = client.douyin.video_comments(videoId="7448118827402972455")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "douyin.video_comments", dict(input), options
        )
        return BareRunResult[DouyinVideoCommentsData].model_validate(raw)


class AsyncDouyinNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinProfileInput],
    ) -> BareRunResult[DouyinProfileData]:
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
        return BareRunResult[DouyinProfileData].model_validate(raw)

    async def search_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinSearchVideosInput],
    ) -> BareRunResult[DouyinSearchVideosData]:
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
        return BareRunResult[DouyinSearchVideosData].model_validate(raw)

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinUserPostsInput],
    ) -> BareRunResult[DouyinUserPostsData]:
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
        return BareRunResult[DouyinUserPostsData].model_validate(raw)

    async def video(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinVideoInput],
    ) -> BareRunResult[DouyinVideoData]:
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
        return BareRunResult[DouyinVideoData].model_validate(raw)

    async def video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[DouyinVideoCommentsInput],
    ) -> BareRunResult[DouyinVideoCommentsData]:
        """Douyin Video Comments

        List public comments on a Douyin video with author and engagement data.

        Price: $0.001 per request.

        Example:
            res = client.douyin.video_comments(videoId="7448118827402972455")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "douyin.video_comments", dict(input), options
        )
        return BareRunResult[DouyinVideoCommentsData].model_validate(raw)
