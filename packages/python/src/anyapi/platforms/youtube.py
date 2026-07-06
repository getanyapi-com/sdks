# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the youtube platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult
from .._pagination import (
    AsyncPaginator,
    Paginator,
    apaginate,
    paginate,
)

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class YoutubeChannelInput(TypedDict, total=False):
    """Input for YouTube Channel."""

    channelId: NotRequired[str]
    """YouTube channel ID (UC...)."""
    handle: NotRequired[str]
    """YouTube channel handle."""


class YoutubeChannelCommunityPostsInput(TypedDict, total=False):
    """Input for YouTube Channel Community Posts."""

    channelId: NotRequired[str]
    """YouTube channel ID."""
    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    handle: NotRequired[str]
    """YouTube channel handle."""


class YoutubeChannelLivesInput(TypedDict, total=False):
    """Input for YouTube Channel Live Streams."""

    channelId: NotRequired[str]
    """YouTube channel ID."""
    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    handle: NotRequired[str]
    """YouTube channel handle."""


class YoutubeChannelPlaylistsInput(TypedDict, total=False):
    """Input for YouTube Channel Playlists."""

    channelId: NotRequired[str]
    """YouTube channel ID."""
    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    handle: NotRequired[str]
    """YouTube channel handle."""


class YoutubeChannelShortsInput(TypedDict, total=False):
    """Input for YouTube Channel Shorts."""

    channelId: NotRequired[str]
    """YouTube channel ID."""
    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    handle: NotRequired[str]
    """YouTube channel handle."""
    sort: NotRequired[Literal["newest", "popular"]]
    """Sort order."""


class YoutubeChannelVideosInput(TypedDict, total=False):
    """Input for YouTube Channel Videos."""

    channelId: NotRequired[str]
    """YouTube channel ID."""
    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    handle: NotRequired[str]
    """YouTube channel handle."""
    sort: NotRequired[Literal["latest", "popular"]]
    """Sort order."""


class YoutubeCommentRepliesInput(TypedDict, total=False):
    """Input for YouTube Comment Replies."""

    continuationToken: Required[str]
    """Replies continuation token from the comments endpoint, or the continuationToken from a previous replies response for further pagination."""


class YoutubeCommunityPostInput(TypedDict, total=False):
    """Input for YouTube Community Post."""

    url: Required[str]
    """URL of the YouTube community post."""


class YoutubePlaylistInput(TypedDict, total=False):
    """Input for YouTube Playlist."""

    playlistId: Required[str]
    """The playlist ID - the "list" parameter in a playlist URL (e.g. "PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi")."""


class YoutubeSearchInput(TypedDict, total=False):
    """Input for YouTube Search."""

    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    query: Required[str]
    """The YouTube search query."""
    sortBy: NotRequired[Literal["relevance", "popular"]]
    """Sort order: "relevance" (default) or "popular" (most-viewed). Default: relevance."""
    uploadDate: NotRequired[Literal["today", "this_week", "this_month", "this_year"]]
    """Filter by upload recency. Omit for any time."""


class YoutubeSearchHashtagInput(TypedDict, total=False):
    """Input for YouTube Hashtag Search."""

    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    hashtag: Required[str]
    """Hashtag to search for (without the leading #)."""
    type: NotRequired[Literal["all", "shorts"]]
    """Content filter."""


class YoutubeTrendingShortsInput(TypedDict, total=False):
    """Input for YouTube Trending Shorts."""


class YoutubeVideoInput(TypedDict, total=False):
    """Input for YouTube Video."""

    id: NotRequired[str]
    """YouTube video ID."""
    url: NotRequired[str]
    """Full YouTube video URL."""


class YoutubeVideoCommentsInput(TypedDict, total=False):
    """Input for YouTube Video Comments."""

    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    order: NotRequired[str]
    """Comment order (e.g. top, newest)."""
    url: Required[str]
    """Full YouTube video URL."""


class YoutubeVideoSponsorsInput(TypedDict, total=False):
    """Input for YouTube Video Sponsors."""

    language: NotRequired[str]
    """2-letter language code for transcript lookup (e.g. en, es, fr)."""
    url: Required[str]
    """YouTube video or Short URL."""


class YoutubeVideoTranscriptInput(TypedDict, total=False):
    """Input for YouTube Video Transcript."""

    id: NotRequired[str]
    """YouTube video ID."""
    url: NotRequired[str]
    """Full YouTube video URL."""


class YoutubeChannelData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(alias="avatarUrl")
    channel_id: str = Field(alias="channelId")
    description: str
    subscribers: int
    title: str
    videos: int
    views: int


class YoutubeChannelCommunityPostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str = Field(alias="nextCursor")
    posts: list[YoutubeChannelCommunityPostsPost]


class YoutubeChannelCommunityPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    content: str
    id: str
    image: str
    like_count: int = Field(alias="likeCount")
    published_time: str = Field(alias="publishedTime")
    url: str


class YoutubeChannelLivesData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    lives: list[YoutubeChannelLivesLive]
    next_cursor: str = Field(alias="nextCursor")


class YoutubeChannelLivesLive(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str
    length_text: str = Field(alias="lengthText")
    published_time: str = Field(alias="publishedTime")
    title: str
    url: str
    views: int


class YoutubeChannelPlaylistsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str = Field(alias="nextCursor")
    playlists: list[YoutubeChannelPlaylistsPlaylist]


class YoutubeChannelPlaylistsPlaylist(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str
    playlist_url: str = Field(alias="playlistUrl")
    thumbnail: str
    title: str
    video_count: int = Field(alias="videoCount")


class YoutubeChannelShortsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str = Field(alias="nextCursor")
    shorts: list[YoutubeChannelShortsShort]


class YoutubeChannelShortsShort(BaseModel):
    model_config = ConfigDict(extra="allow")

    duration: str
    id: str
    likes: int
    title: str
    url: str
    views: int


class YoutubeChannelVideosData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str = Field(alias="nextCursor")
    videos: list[YoutubeChannelVideosVideo]


class YoutubeChannelVideosVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str
    length_text: str = Field(alias="lengthText")
    published_time: str = Field(alias="publishedTime")
    title: str
    url: str
    views: int


class YoutubeCommentRepliesData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    comments: list[YoutubeCommentRepliesComment]
    next_cursor: str = Field(alias="nextCursor")


class YoutubeCommentRepliesComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_name: str = Field(alias="authorName")
    content: str
    id: str
    likes: int
    published_time: str = Field(alias="publishedTime")


class YoutubeCommunityPostData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel_handle: str = Field(alias="channelHandle")
    channel_title: str = Field(alias="channelTitle")
    content: str
    id: str
    published_time: str = Field(alias="publishedTime")


class YoutubePlaylistData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    owner: str
    title: str
    total_videos: int = Field(alias="totalVideos")
    videos: list[YoutubePlaylistVideo]


class YoutubePlaylistVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel: str
    id: str
    length_seconds: int = Field(alias="lengthSeconds")
    length_text: str = Field(alias="lengthText")
    thumbnail: str
    title: str
    url: str


class YoutubeSearchData(BaseModel):
    videos: list[YoutubeSearchVideo]


class YoutubeSearchVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel: str
    id: str
    length_text: str = Field(alias="lengthText")
    published_time: str = Field(alias="publishedTime")
    title: str
    url: str
    views: int


class YoutubeSearchHashtagData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str = Field(alias="nextCursor")
    videos: list[YoutubeSearchHashtagVideo]


class YoutubeSearchHashtagVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel_title: str = Field(alias="channelTitle")
    id: str
    length_text: str = Field(alias="lengthText")
    published_time: str = Field(alias="publishedTime")
    title: str
    url: str
    views: int


class YoutubeTrendingShortsData(BaseModel):
    shorts: list[YoutubeTrendingShortsShort]


class YoutubeTrendingShortsShort(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel_title: str = Field(alias="channelTitle")
    duration: str
    id: str
    likes: int
    title: str
    url: str
    views: int


class YoutubeVideoData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel: str
    comments: int
    duration_ms: int = Field(alias="durationMs")
    id: str
    likes: int
    published_at: str = Field(alias="publishedAt")
    title: str
    views: int


class YoutubeVideoCommentsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    comments: list[YoutubeVideoCommentsComment]
    next_cursor: str = Field(alias="nextCursor")


class YoutubeVideoCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str
    id: str
    likes: int
    published_time: str = Field(alias="publishedTime")
    replies: int
    text: str


class YoutubeVideoSponsorsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    detection_status: str = Field(alias="detectionStatus")
    is_paid_promotion: bool = Field(alias="isPaidPromotion")
    suspected_sponsors: list[YoutubeVideoSponsorsSuspectedSponsor] = Field(
        alias="suspectedSponsors"
    )
    title: str
    video_id: str = Field(alias="videoId")


class YoutubeVideoSponsorsSuspectedSponsor(BaseModel):
    model_config = ConfigDict(extra="allow")

    confidence: str
    name: str
    website: str


class YoutubeVideoTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")

    language: str
    transcript: str


class YoutubeNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def channel(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelInput],
    ) -> RunResult[YoutubeChannelData]:
        """YouTube Channel

        Fetch a YouTube channel's stats (subscribers, video count, total views,
        description) by handle or channel ID, normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.channel(handle="@mkbhd")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel", dict(input), options
        )
        return RunResult[YoutubeChannelData].model_validate(raw)

    def channel_community_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelCommunityPostsInput],
    ) -> RunResult[YoutubeChannelCommunityPostsData]:
        """YouTube Channel Community Posts

        List a YouTube channel's community posts by handle or channel ID with cursor
        pagination (text, likes, image, publish time), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.channel_community_posts(handle="@MrBeast")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel_community_posts", dict(input), options
        )
        return RunResult[YoutubeChannelCommunityPostsData].model_validate(raw)

    def iter_channel_community_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelCommunityPostsInput],
    ) -> Paginator[YoutubeChannelCommunityPostsPost, YoutubeChannelCommunityPostsData]:
        """Iterate YouTube Channel Community Posts results, following pagination cursors.

        Yields validated `YoutubeChannelCommunityPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "youtube.channel_community_posts",
            dict(input),
            "posts",
            item_model=YoutubeChannelCommunityPostsPost,
            data_model=YoutubeChannelCommunityPostsData,
            bare=False,
            options=options,
        )

    def channel_lives(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelLivesInput],
    ) -> RunResult[YoutubeChannelLivesData]:
        """YouTube Channel Live Streams

        List a YouTube channel's live and past-live streams by handle or channel ID
        with cursor pagination (title, views, length, publish time), normalized
        across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.channel_lives(handle="@IShowSpeed")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel_lives", dict(input), options
        )
        return RunResult[YoutubeChannelLivesData].model_validate(raw)

    def iter_channel_lives(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelLivesInput],
    ) -> Paginator[YoutubeChannelLivesLive, YoutubeChannelLivesData]:
        """Iterate YouTube Channel Live Streams results, following pagination cursors.

        Yields validated `YoutubeChannelLivesLive` items from the `lives` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "youtube.channel_lives",
            dict(input),
            "lives",
            item_model=YoutubeChannelLivesLive,
            data_model=YoutubeChannelLivesData,
            bare=False,
            options=options,
        )

    def channel_playlists(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelPlaylistsInput],
    ) -> RunResult[YoutubeChannelPlaylistsData]:
        """YouTube Channel Playlists

        List a YouTube channel's playlists by handle or channel ID with cursor
        pagination (title, video count, thumbnail), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.channel_playlists(handle="@veritasium")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel_playlists", dict(input), options
        )
        return RunResult[YoutubeChannelPlaylistsData].model_validate(raw)

    def iter_channel_playlists(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelPlaylistsInput],
    ) -> Paginator[YoutubeChannelPlaylistsPlaylist, YoutubeChannelPlaylistsData]:
        """Iterate YouTube Channel Playlists results, following pagination cursors.

        Yields validated `YoutubeChannelPlaylistsPlaylist` items from the `playlists` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "youtube.channel_playlists",
            dict(input),
            "playlists",
            item_model=YoutubeChannelPlaylistsPlaylist,
            data_model=YoutubeChannelPlaylistsData,
            bare=False,
            options=options,
        )

    def channel_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelShortsInput],
    ) -> RunResult[YoutubeChannelShortsData]:
        """YouTube Channel Shorts

        List a YouTube channel's Shorts by handle or channel ID with cursor
        pagination (title, views, likes, duration), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.channel_shorts(handle="@starterstory")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel_shorts", dict(input), options
        )
        return RunResult[YoutubeChannelShortsData].model_validate(raw)

    def iter_channel_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelShortsInput],
    ) -> Paginator[YoutubeChannelShortsShort, YoutubeChannelShortsData]:
        """Iterate YouTube Channel Shorts results, following pagination cursors.

        Yields validated `YoutubeChannelShortsShort` items from the `shorts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "youtube.channel_shorts",
            dict(input),
            "shorts",
            item_model=YoutubeChannelShortsShort,
            data_model=YoutubeChannelShortsData,
            bare=False,
            options=options,
        )

    def channel_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelVideosInput],
    ) -> RunResult[YoutubeChannelVideosData]:
        """YouTube Channel Videos

        List a YouTube channel's videos by handle or channel ID with cursor
        pagination (title, views, length, publish time), normalized across
        providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.channel_videos(handle="@mkbhd")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel_videos", dict(input), options
        )
        return RunResult[YoutubeChannelVideosData].model_validate(raw)

    def iter_channel_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelVideosInput],
    ) -> Paginator[YoutubeChannelVideosVideo, YoutubeChannelVideosData]:
        """Iterate YouTube Channel Videos results, following pagination cursors.

        Yields validated `YoutubeChannelVideosVideo` items from the `videos` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "youtube.channel_videos",
            dict(input),
            "videos",
            item_model=YoutubeChannelVideosVideo,
            data_model=YoutubeChannelVideosData,
            bare=False,
            options=options,
        )

    def comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeCommentRepliesInput],
    ) -> RunResult[YoutubeCommentRepliesData]:
        """YouTube Comment Replies

        List replies to a YouTube comment using a continuation token with cursor
        pagination (text, author, likes, publish time), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.comment_replies(continuationToken="Eg0SC19fZm1EajBaSjFRGAYygwEaUBIaVWd3aXRjRk9fdmtpM0x4LUNfZDRBYUFCQWciAggAKhhVQ1g2T1EzRGtjc2JZTkU2SDh1UVF1VkEyC19fZm1EajBaSjFRQABICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dpdGNGT192a2kzTHgtQ19kNEFhQUJBZw==")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.comment_replies", dict(input), options
        )
        return RunResult[YoutubeCommentRepliesData].model_validate(raw)

    def community_post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeCommunityPostInput],
    ) -> RunResult[YoutubeCommunityPostData]:
        """YouTube Community Post

        Fetch a single YouTube community post by URL (text, images, channel, publish
        time), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.community_post(url="https://www.youtube.com/post/Ugkx1LonSRBBUqASv-J8j9_FesxwlMAhT3_e")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.community_post", dict(input), options
        )
        return RunResult[YoutubeCommunityPostData].model_validate(raw)

    def playlist(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubePlaylistInput],
    ) -> RunResult[YoutubePlaylistData]:
        """YouTube Playlist

        List every video in a YouTube playlist - title, length, and channel per
        video plus playlist owner and totals - normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.youtube.playlist(playlistId="PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.playlist", dict(input), options
        )
        return RunResult[YoutubePlaylistData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchInput],
    ) -> RunResult[YoutubeSearchData]:
        """YouTube Search

        Search YouTube and get matching videos (title, channel, views, length,
        publish time) as normalized JSON, across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.youtube.search(query="how to cook rice")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.search", dict(input), options
        )
        return RunResult[YoutubeSearchData].model_validate(raw)

    def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchHashtagInput],
    ) -> RunResult[YoutubeSearchHashtagData]:
        """YouTube Hashtag Search

        Search YouTube videos by hashtag with cursor pagination (title, channel,
        views, length, publish time), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.search_hashtag(hashtag="funny")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.search_hashtag", dict(input), options
        )
        return RunResult[YoutubeSearchHashtagData].model_validate(raw)

    def iter_search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchHashtagInput],
    ) -> Paginator[YoutubeSearchHashtagVideo, YoutubeSearchHashtagData]:
        """Iterate YouTube Hashtag Search results, following pagination cursors.

        Yields validated `YoutubeSearchHashtagVideo` items from the `videos` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "youtube.search_hashtag",
            dict(input),
            "videos",
            item_model=YoutubeSearchHashtagVideo,
            data_model=YoutubeSearchHashtagData,
            bare=False,
            options=options,
        )

    def trending_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeTrendingShortsInput],
    ) -> RunResult[YoutubeTrendingShortsData]:
        """YouTube Trending Shorts

        List currently trending YouTube Shorts (title, channel, views, likes,
        duration), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.trending_shorts()
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.trending_shorts", dict(input), options
        )
        return RunResult[YoutubeTrendingShortsData].model_validate(raw)

    def video(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoInput],
    ) -> RunResult[YoutubeVideoData]:
        """YouTube Video

        Fetch a YouTube video's metadata (title, channel, views, likes, duration,
        publish date) by URL or ID, normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.video(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.video", dict(input), options
        )
        return RunResult[YoutubeVideoData].model_validate(raw)

    def video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoCommentsInput],
    ) -> RunResult[YoutubeVideoCommentsData]:
        """YouTube Video Comments

        List the comments on a YouTube video by URL with cursor pagination (text,
        author, likes, reply count), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.video_comments(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.video_comments", dict(input), options
        )
        return RunResult[YoutubeVideoCommentsData].model_validate(raw)

    def iter_video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoCommentsInput],
    ) -> Paginator[YoutubeVideoCommentsComment, YoutubeVideoCommentsData]:
        """Iterate YouTube Video Comments results, following pagination cursors.

        Yields validated `YoutubeVideoCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "youtube.video_comments",
            dict(input),
            "comments",
            item_model=YoutubeVideoCommentsComment,
            data_model=YoutubeVideoCommentsData,
            bare=False,
            options=options,
        )

    def video_sponsors(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoSponsorsInput],
    ) -> RunResult[YoutubeVideoSponsorsData]:
        """YouTube Video Sponsors

        Detect suspected sponsors and paid promotions in a YouTube video by URL
        (sponsor names, websites, confidence), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.video_sponsors(url="https://www.youtube.com/watch?v=AVO0ifle-OU")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.video_sponsors", dict(input), options
        )
        return RunResult[YoutubeVideoSponsorsData].model_validate(raw)

    def video_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoTranscriptInput],
    ) -> RunResult[YoutubeVideoTranscriptData]:
        """YouTube Video Transcript

        Fetch the transcript/captions of a YouTube video by URL or ID, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.youtube.video_transcript(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.video_transcript", dict(input), options
        )
        return RunResult[YoutubeVideoTranscriptData].model_validate(raw)


class AsyncYoutubeNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def channel(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelInput],
    ) -> RunResult[YoutubeChannelData]:
        """YouTube Channel

        Fetch a YouTube channel's stats (subscribers, video count, total views,
        description) by handle or channel ID, normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.channel(handle="@mkbhd")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel", dict(input), options
        )
        return RunResult[YoutubeChannelData].model_validate(raw)

    async def channel_community_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelCommunityPostsInput],
    ) -> RunResult[YoutubeChannelCommunityPostsData]:
        """YouTube Channel Community Posts

        List a YouTube channel's community posts by handle or channel ID with cursor
        pagination (text, likes, image, publish time), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.channel_community_posts(handle="@MrBeast")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel_community_posts", dict(input), options
        )
        return RunResult[YoutubeChannelCommunityPostsData].model_validate(raw)

    def iter_channel_community_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelCommunityPostsInput],
    ) -> AsyncPaginator[
        YoutubeChannelCommunityPostsPost, YoutubeChannelCommunityPostsData
    ]:
        """Iterate YouTube Channel Community Posts results, following pagination cursors.

        Yields validated `YoutubeChannelCommunityPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "youtube.channel_community_posts",
            dict(input),
            "posts",
            item_model=YoutubeChannelCommunityPostsPost,
            data_model=YoutubeChannelCommunityPostsData,
            bare=False,
            options=options,
        )

    async def channel_lives(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelLivesInput],
    ) -> RunResult[YoutubeChannelLivesData]:
        """YouTube Channel Live Streams

        List a YouTube channel's live and past-live streams by handle or channel ID
        with cursor pagination (title, views, length, publish time), normalized
        across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.channel_lives(handle="@IShowSpeed")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel_lives", dict(input), options
        )
        return RunResult[YoutubeChannelLivesData].model_validate(raw)

    def iter_channel_lives(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelLivesInput],
    ) -> AsyncPaginator[YoutubeChannelLivesLive, YoutubeChannelLivesData]:
        """Iterate YouTube Channel Live Streams results, following pagination cursors.

        Yields validated `YoutubeChannelLivesLive` items from the `lives` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "youtube.channel_lives",
            dict(input),
            "lives",
            item_model=YoutubeChannelLivesLive,
            data_model=YoutubeChannelLivesData,
            bare=False,
            options=options,
        )

    async def channel_playlists(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelPlaylistsInput],
    ) -> RunResult[YoutubeChannelPlaylistsData]:
        """YouTube Channel Playlists

        List a YouTube channel's playlists by handle or channel ID with cursor
        pagination (title, video count, thumbnail), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.channel_playlists(handle="@veritasium")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel_playlists", dict(input), options
        )
        return RunResult[YoutubeChannelPlaylistsData].model_validate(raw)

    def iter_channel_playlists(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelPlaylistsInput],
    ) -> AsyncPaginator[YoutubeChannelPlaylistsPlaylist, YoutubeChannelPlaylistsData]:
        """Iterate YouTube Channel Playlists results, following pagination cursors.

        Yields validated `YoutubeChannelPlaylistsPlaylist` items from the `playlists` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "youtube.channel_playlists",
            dict(input),
            "playlists",
            item_model=YoutubeChannelPlaylistsPlaylist,
            data_model=YoutubeChannelPlaylistsData,
            bare=False,
            options=options,
        )

    async def channel_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelShortsInput],
    ) -> RunResult[YoutubeChannelShortsData]:
        """YouTube Channel Shorts

        List a YouTube channel's Shorts by handle or channel ID with cursor
        pagination (title, views, likes, duration), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.channel_shorts(handle="@starterstory")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel_shorts", dict(input), options
        )
        return RunResult[YoutubeChannelShortsData].model_validate(raw)

    def iter_channel_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelShortsInput],
    ) -> AsyncPaginator[YoutubeChannelShortsShort, YoutubeChannelShortsData]:
        """Iterate YouTube Channel Shorts results, following pagination cursors.

        Yields validated `YoutubeChannelShortsShort` items from the `shorts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "youtube.channel_shorts",
            dict(input),
            "shorts",
            item_model=YoutubeChannelShortsShort,
            data_model=YoutubeChannelShortsData,
            bare=False,
            options=options,
        )

    async def channel_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelVideosInput],
    ) -> RunResult[YoutubeChannelVideosData]:
        """YouTube Channel Videos

        List a YouTube channel's videos by handle or channel ID with cursor
        pagination (title, views, length, publish time), normalized across
        providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.channel_videos(handle="@mkbhd")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel_videos", dict(input), options
        )
        return RunResult[YoutubeChannelVideosData].model_validate(raw)

    def iter_channel_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelVideosInput],
    ) -> AsyncPaginator[YoutubeChannelVideosVideo, YoutubeChannelVideosData]:
        """Iterate YouTube Channel Videos results, following pagination cursors.

        Yields validated `YoutubeChannelVideosVideo` items from the `videos` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "youtube.channel_videos",
            dict(input),
            "videos",
            item_model=YoutubeChannelVideosVideo,
            data_model=YoutubeChannelVideosData,
            bare=False,
            options=options,
        )

    async def comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeCommentRepliesInput],
    ) -> RunResult[YoutubeCommentRepliesData]:
        """YouTube Comment Replies

        List replies to a YouTube comment using a continuation token with cursor
        pagination (text, author, likes, publish time), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.comment_replies(continuationToken="Eg0SC19fZm1EajBaSjFRGAYygwEaUBIaVWd3aXRjRk9fdmtpM0x4LUNfZDRBYUFCQWciAggAKhhVQ1g2T1EzRGtjc2JZTkU2SDh1UVF1VkEyC19fZm1EajBaSjFRQABICoIBAggBQi9jb21tZW50LXJlcGxpZXMtaXRlbS1VZ3dpdGNGT192a2kzTHgtQ19kNEFhQUJBZw==")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.comment_replies", dict(input), options
        )
        return RunResult[YoutubeCommentRepliesData].model_validate(raw)

    async def community_post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeCommunityPostInput],
    ) -> RunResult[YoutubeCommunityPostData]:
        """YouTube Community Post

        Fetch a single YouTube community post by URL (text, images, channel, publish
        time), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.community_post(url="https://www.youtube.com/post/Ugkx1LonSRBBUqASv-J8j9_FesxwlMAhT3_e")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.community_post", dict(input), options
        )
        return RunResult[YoutubeCommunityPostData].model_validate(raw)

    async def playlist(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubePlaylistInput],
    ) -> RunResult[YoutubePlaylistData]:
        """YouTube Playlist

        List every video in a YouTube playlist - title, length, and channel per
        video plus playlist owner and totals - normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.youtube.playlist(playlistId="PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.playlist", dict(input), options
        )
        return RunResult[YoutubePlaylistData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchInput],
    ) -> RunResult[YoutubeSearchData]:
        """YouTube Search

        Search YouTube and get matching videos (title, channel, views, length,
        publish time) as normalized JSON, across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.youtube.search(query="how to cook rice")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.search", dict(input), options
        )
        return RunResult[YoutubeSearchData].model_validate(raw)

    async def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchHashtagInput],
    ) -> RunResult[YoutubeSearchHashtagData]:
        """YouTube Hashtag Search

        Search YouTube videos by hashtag with cursor pagination (title, channel,
        views, length, publish time), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.search_hashtag(hashtag="funny")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.search_hashtag", dict(input), options
        )
        return RunResult[YoutubeSearchHashtagData].model_validate(raw)

    def iter_search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchHashtagInput],
    ) -> AsyncPaginator[YoutubeSearchHashtagVideo, YoutubeSearchHashtagData]:
        """Iterate YouTube Hashtag Search results, following pagination cursors.

        Yields validated `YoutubeSearchHashtagVideo` items from the `videos` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "youtube.search_hashtag",
            dict(input),
            "videos",
            item_model=YoutubeSearchHashtagVideo,
            data_model=YoutubeSearchHashtagData,
            bare=False,
            options=options,
        )

    async def trending_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeTrendingShortsInput],
    ) -> RunResult[YoutubeTrendingShortsData]:
        """YouTube Trending Shorts

        List currently trending YouTube Shorts (title, channel, views, likes,
        duration), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.trending_shorts()
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.trending_shorts", dict(input), options
        )
        return RunResult[YoutubeTrendingShortsData].model_validate(raw)

    async def video(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoInput],
    ) -> RunResult[YoutubeVideoData]:
        """YouTube Video

        Fetch a YouTube video's metadata (title, channel, views, likes, duration,
        publish date) by URL or ID, normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.video(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.video", dict(input), options
        )
        return RunResult[YoutubeVideoData].model_validate(raw)

    async def video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoCommentsInput],
    ) -> RunResult[YoutubeVideoCommentsData]:
        """YouTube Video Comments

        List the comments on a YouTube video by URL with cursor pagination (text,
        author, likes, reply count), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.video_comments(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.video_comments", dict(input), options
        )
        return RunResult[YoutubeVideoCommentsData].model_validate(raw)

    def iter_video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoCommentsInput],
    ) -> AsyncPaginator[YoutubeVideoCommentsComment, YoutubeVideoCommentsData]:
        """Iterate YouTube Video Comments results, following pagination cursors.

        Yields validated `YoutubeVideoCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "youtube.video_comments",
            dict(input),
            "comments",
            item_model=YoutubeVideoCommentsComment,
            data_model=YoutubeVideoCommentsData,
            bare=False,
            options=options,
        )

    async def video_sponsors(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoSponsorsInput],
    ) -> RunResult[YoutubeVideoSponsorsData]:
        """YouTube Video Sponsors

        Detect suspected sponsors and paid promotions in a YouTube video by URL
        (sponsor names, websites, confidence), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.youtube.video_sponsors(url="https://www.youtube.com/watch?v=AVO0ifle-OU")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.video_sponsors", dict(input), options
        )
        return RunResult[YoutubeVideoSponsorsData].model_validate(raw)

    async def video_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoTranscriptInput],
    ) -> RunResult[YoutubeVideoTranscriptData]:
        """YouTube Video Transcript

        Fetch the transcript/captions of a YouTube video by URL or ID, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.youtube.video_transcript(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.video_transcript", dict(input), options
        )
        return RunResult[YoutubeVideoTranscriptData].model_validate(raw)
