# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the youtube platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    """The playlist ID: the "list" parameter in a playlist URL (e.g. "PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi")."""


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
    model_config = ConfigDict(extra="allow")


class YoutubeChannelCommunityPostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeChannelLivesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeChannelPlaylistsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeChannelShortsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeChannelVideosData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeCommentRepliesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeCommunityPostData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubePlaylistData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeSearchHashtagData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeTrendingShortsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeVideoData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeVideoCommentsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeVideoSponsorsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeVideoTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")


class YoutubeNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def channel(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelInput],
    ) -> BareRunResult[YoutubeChannelData]:
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
        return BareRunResult[YoutubeChannelData].model_validate(raw)

    def channel_community_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelCommunityPostsInput],
    ) -> BareRunResult[YoutubeChannelCommunityPostsData]:
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
        return BareRunResult[YoutubeChannelCommunityPostsData].model_validate(raw)

    def channel_lives(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelLivesInput],
    ) -> BareRunResult[YoutubeChannelLivesData]:
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
        return BareRunResult[YoutubeChannelLivesData].model_validate(raw)

    def channel_playlists(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelPlaylistsInput],
    ) -> BareRunResult[YoutubeChannelPlaylistsData]:
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
        return BareRunResult[YoutubeChannelPlaylistsData].model_validate(raw)

    def channel_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelShortsInput],
    ) -> BareRunResult[YoutubeChannelShortsData]:
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
        return BareRunResult[YoutubeChannelShortsData].model_validate(raw)

    def channel_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelVideosInput],
    ) -> BareRunResult[YoutubeChannelVideosData]:
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
        return BareRunResult[YoutubeChannelVideosData].model_validate(raw)

    def comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeCommentRepliesInput],
    ) -> BareRunResult[YoutubeCommentRepliesData]:
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
        return BareRunResult[YoutubeCommentRepliesData].model_validate(raw)

    def community_post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeCommunityPostInput],
    ) -> BareRunResult[YoutubeCommunityPostData]:
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
        return BareRunResult[YoutubeCommunityPostData].model_validate(raw)

    def playlist(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubePlaylistInput],
    ) -> BareRunResult[YoutubePlaylistData]:
        """YouTube Playlist

        List every video in a YouTube playlist (title, length, and channel per video
        plus playlist owner and totals), normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.youtube.playlist(playlistId="PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.playlist", dict(input), options
        )
        return BareRunResult[YoutubePlaylistData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchInput],
    ) -> BareRunResult[YoutubeSearchData]:
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
        return BareRunResult[YoutubeSearchData].model_validate(raw)

    def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchHashtagInput],
    ) -> BareRunResult[YoutubeSearchHashtagData]:
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
        return BareRunResult[YoutubeSearchHashtagData].model_validate(raw)

    def trending_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeTrendingShortsInput],
    ) -> BareRunResult[YoutubeTrendingShortsData]:
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
        return BareRunResult[YoutubeTrendingShortsData].model_validate(raw)

    def video(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoInput],
    ) -> BareRunResult[YoutubeVideoData]:
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
        return BareRunResult[YoutubeVideoData].model_validate(raw)

    def video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoCommentsInput],
    ) -> BareRunResult[YoutubeVideoCommentsData]:
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
        return BareRunResult[YoutubeVideoCommentsData].model_validate(raw)

    def video_sponsors(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoSponsorsInput],
    ) -> BareRunResult[YoutubeVideoSponsorsData]:
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
        return BareRunResult[YoutubeVideoSponsorsData].model_validate(raw)

    def video_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoTranscriptInput],
    ) -> BareRunResult[YoutubeVideoTranscriptData]:
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
        return BareRunResult[YoutubeVideoTranscriptData].model_validate(raw)


class AsyncYoutubeNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def channel(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelInput],
    ) -> BareRunResult[YoutubeChannelData]:
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
        return BareRunResult[YoutubeChannelData].model_validate(raw)

    async def channel_community_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelCommunityPostsInput],
    ) -> BareRunResult[YoutubeChannelCommunityPostsData]:
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
        return BareRunResult[YoutubeChannelCommunityPostsData].model_validate(raw)

    async def channel_lives(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelLivesInput],
    ) -> BareRunResult[YoutubeChannelLivesData]:
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
        return BareRunResult[YoutubeChannelLivesData].model_validate(raw)

    async def channel_playlists(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelPlaylistsInput],
    ) -> BareRunResult[YoutubeChannelPlaylistsData]:
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
        return BareRunResult[YoutubeChannelPlaylistsData].model_validate(raw)

    async def channel_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelShortsInput],
    ) -> BareRunResult[YoutubeChannelShortsData]:
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
        return BareRunResult[YoutubeChannelShortsData].model_validate(raw)

    async def channel_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelVideosInput],
    ) -> BareRunResult[YoutubeChannelVideosData]:
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
        return BareRunResult[YoutubeChannelVideosData].model_validate(raw)

    async def comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeCommentRepliesInput],
    ) -> BareRunResult[YoutubeCommentRepliesData]:
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
        return BareRunResult[YoutubeCommentRepliesData].model_validate(raw)

    async def community_post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeCommunityPostInput],
    ) -> BareRunResult[YoutubeCommunityPostData]:
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
        return BareRunResult[YoutubeCommunityPostData].model_validate(raw)

    async def playlist(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubePlaylistInput],
    ) -> BareRunResult[YoutubePlaylistData]:
        """YouTube Playlist

        List every video in a YouTube playlist (title, length, and channel per video
        plus playlist owner and totals), normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.youtube.playlist(playlistId="PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.playlist", dict(input), options
        )
        return BareRunResult[YoutubePlaylistData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchInput],
    ) -> BareRunResult[YoutubeSearchData]:
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
        return BareRunResult[YoutubeSearchData].model_validate(raw)

    async def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchHashtagInput],
    ) -> BareRunResult[YoutubeSearchHashtagData]:
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
        return BareRunResult[YoutubeSearchHashtagData].model_validate(raw)

    async def trending_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeTrendingShortsInput],
    ) -> BareRunResult[YoutubeTrendingShortsData]:
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
        return BareRunResult[YoutubeTrendingShortsData].model_validate(raw)

    async def video(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoInput],
    ) -> BareRunResult[YoutubeVideoData]:
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
        return BareRunResult[YoutubeVideoData].model_validate(raw)

    async def video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoCommentsInput],
    ) -> BareRunResult[YoutubeVideoCommentsData]:
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
        return BareRunResult[YoutubeVideoCommentsData].model_validate(raw)

    async def video_sponsors(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoSponsorsInput],
    ) -> BareRunResult[YoutubeVideoSponsorsData]:
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
        return BareRunResult[YoutubeVideoSponsorsData].model_validate(raw)

    async def video_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoTranscriptInput],
    ) -> BareRunResult[YoutubeVideoTranscriptData]:
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
        return BareRunResult[YoutubeVideoTranscriptData].model_validate(raw)
