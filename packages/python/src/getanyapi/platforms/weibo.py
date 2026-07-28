# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the weibo platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class WeiboHotSearchInput(TypedDict, total=False):
    """Input for Weibo Hot Search."""


class WeiboPostInput(TypedDict, total=False):
    """Input for Weibo Post."""

    includeLongText: NotRequired[str]
    """Whether to include the full text of long posts. Default: true."""
    postId: Required[str]
    """Weibo post identifier."""


class WeiboPostCommentsInput(TypedDict, total=False):
    """Input for Weibo Post Comments."""

    cursor: NotRequired[str]
    """Pagination cursor returned as nextCursor."""
    limit: NotRequired[int]
    """Requested comment count. Default: 10."""
    postId: Required[str]
    """Weibo post identifier."""


class WeiboProfileInput(TypedDict, total=False):
    """Input for Weibo Profile."""

    userId: Required[str]
    """Weibo user identifier."""


class WeiboSearchInput(TypedDict, total=False):
    """Input for Weibo Advanced Search."""

    includeType: NotRequired[str]
    """Media filter, such as all, pic, video, music, or link."""
    page: NotRequired[int]
    """Page number starting at 1. Default: 1."""
    query: Required[str]
    """Search keyword."""
    searchType: NotRequired[str]
    """Search type, such as all, hot, original, verified, media, or viewpoint."""
    timeScope: NotRequired[str]
    """Custom time range in the API's custom:start:end format."""


class WeiboUserPostsInput(TypedDict, total=False):
    """Input for Weibo User Posts."""

    cursor: NotRequired[str]
    """Pagination identifier returned as nextCursor."""
    feature: NotRequired[int]
    """Response detail feature: 0 basic, 1 extended, 2 image-oriented, or 3 video-oriented. Default: 0."""
    page: NotRequired[int]
    """Page number starting at 1. Default: 1."""
    userId: Required[str]
    """Weibo user identifier."""


class WeiboHotSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class WeiboPostData(BaseModel):
    model_config = ConfigDict(extra="allow")


class WeiboPostCommentsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class WeiboProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class WeiboSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class WeiboUserPostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class WeiboNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def hot_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WeiboHotSearchInput],
    ) -> BareRunResult[WeiboHotSearchData]:
        """Weibo Hot Search

        Get the complete current Weibo hot-search ranking with labels and heat
        values.

        Price: $0.0015 per request.

        Example:
            res = client.weibo.hot_search()
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "weibo.hot_search", dict(input), options
        )
        return BareRunResult[WeiboHotSearchData].model_validate(raw)

    def post(
        self, *, options: RequestOptions | None = None, **input: Unpack[WeiboPostInput]
    ) -> BareRunResult[WeiboPostData]:
        """Weibo Post

        Fetch a public Weibo post by ID with normalized author and engagement data.

        Price: $0.001 per request.

        Example:
            res = client.weibo.post(includeLongText="true", postId="5092682368025584")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "weibo.post", dict(input), options
        )
        return BareRunResult[WeiboPostData].model_validate(raw)

    def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WeiboPostCommentsInput],
    ) -> BareRunResult[WeiboPostCommentsData]:
        """Weibo Post Comments

        List first-level comments on a public Weibo post with pagination.

        Price: $0.001 per request.

        Example:
            res = client.weibo.post_comments(limit=10, postId="5283919831764022")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "weibo.post_comments", dict(input), options
        )
        return BareRunResult[WeiboPostCommentsData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WeiboProfileInput],
    ) -> BareRunResult[WeiboProfileData]:
        """Weibo Profile

        Fetch a public Weibo profile by user ID with normalized audience and account
        data.

        Price: $0.001 per request.

        Example:
            res = client.weibo.profile(userId="1722594714")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "weibo.profile", dict(input), options
        )
        return BareRunResult[WeiboProfileData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WeiboSearchInput],
    ) -> BareRunResult[WeiboSearchData]:
        """Weibo Advanced Search

        Search public Weibo posts with optional result, media, and time filters.

        Price: $0.001 per request.

        Example:
            res = client.weibo.search(includeType="pic", page=1, query="python", searchType="hot")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "weibo.search", dict(input), options
        )
        return BareRunResult[WeiboSearchData].model_validate(raw)

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WeiboUserPostsInput],
    ) -> BareRunResult[WeiboUserPostsData]:
        """Weibo User Posts

        List public posts from a Weibo user with normalized author and engagement
        data.

        Price: $0.001 per request.

        Example:
            res = client.weibo.user_posts(feature=3, page=1, userId="7277477906")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "weibo.user_posts", dict(input), options
        )
        return BareRunResult[WeiboUserPostsData].model_validate(raw)


class AsyncWeiboNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def hot_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WeiboHotSearchInput],
    ) -> BareRunResult[WeiboHotSearchData]:
        """Weibo Hot Search

        Get the complete current Weibo hot-search ranking with labels and heat
        values.

        Price: $0.0015 per request.

        Example:
            res = client.weibo.hot_search()
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "weibo.hot_search", dict(input), options
        )
        return BareRunResult[WeiboHotSearchData].model_validate(raw)

    async def post(
        self, *, options: RequestOptions | None = None, **input: Unpack[WeiboPostInput]
    ) -> BareRunResult[WeiboPostData]:
        """Weibo Post

        Fetch a public Weibo post by ID with normalized author and engagement data.

        Price: $0.001 per request.

        Example:
            res = client.weibo.post(includeLongText="true", postId="5092682368025584")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "weibo.post", dict(input), options
        )
        return BareRunResult[WeiboPostData].model_validate(raw)

    async def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WeiboPostCommentsInput],
    ) -> BareRunResult[WeiboPostCommentsData]:
        """Weibo Post Comments

        List first-level comments on a public Weibo post with pagination.

        Price: $0.001 per request.

        Example:
            res = client.weibo.post_comments(limit=10, postId="5283919831764022")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "weibo.post_comments", dict(input), options
        )
        return BareRunResult[WeiboPostCommentsData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WeiboProfileInput],
    ) -> BareRunResult[WeiboProfileData]:
        """Weibo Profile

        Fetch a public Weibo profile by user ID with normalized audience and account
        data.

        Price: $0.001 per request.

        Example:
            res = client.weibo.profile(userId="1722594714")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "weibo.profile", dict(input), options
        )
        return BareRunResult[WeiboProfileData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WeiboSearchInput],
    ) -> BareRunResult[WeiboSearchData]:
        """Weibo Advanced Search

        Search public Weibo posts with optional result, media, and time filters.

        Price: $0.001 per request.

        Example:
            res = client.weibo.search(includeType="pic", page=1, query="python", searchType="hot")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "weibo.search", dict(input), options
        )
        return BareRunResult[WeiboSearchData].model_validate(raw)

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WeiboUserPostsInput],
    ) -> BareRunResult[WeiboUserPostsData]:
        """Weibo User Posts

        List public posts from a Weibo user with normalized author and engagement
        data.

        Price: $0.001 per request.

        Example:
            res = client.weibo.user_posts(feature=3, page=1, userId="7277477906")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "weibo.user_posts", dict(input), options
        )
        return BareRunResult[WeiboUserPostsData].model_validate(raw)
