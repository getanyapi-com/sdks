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
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class YoutubeChannelCommunityPostsInput(TypedDict, total=False):
    """Input for YouTube Channel Community Posts."""

    channelId: NotRequired[str]
    """YouTube channel ID."""
    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    handle: NotRequired[str]
    """YouTube channel handle."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class YoutubeChannelContactInput(TypedDict, total=False):
    """Input for YouTube Channel Contact Email."""

    channelId: NotRequired[str]
    """YouTube channel ID (UC...)."""
    handle: NotRequired[str]
    """YouTube channel handle, with or without the leading @."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class YoutubeChannelLivesInput(TypedDict, total=False):
    """Input for YouTube Channel Live Streams."""

    channelId: NotRequired[str]
    """YouTube channel ID."""
    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    handle: NotRequired[str]
    """YouTube channel handle."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class YoutubeChannelPlaylistsInput(TypedDict, total=False):
    """Input for YouTube Channel Playlists."""

    channelId: NotRequired[str]
    """YouTube channel ID."""
    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    handle: NotRequired[str]
    """YouTube channel handle."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class YoutubeChannelShortsInput(TypedDict, total=False):
    """Input for YouTube Channel Shorts."""

    channelId: NotRequired[str]
    """YouTube channel ID beginning with UC."""
    cursor: NotRequired[str]
    """Continuation token from a previous response."""
    handle: NotRequired[str]
    """YouTube channel handle, including or omitting the leading @."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    sort: NotRequired[Literal["latest", "newest", "popular"]]
    """Sort order for the Shorts feed. latest and newest are equivalent."""


class YoutubeChannelVideosInput(TypedDict, total=False):
    """Input for YouTube Channel Videos."""

    channelId: NotRequired[str]
    """YouTube channel ID."""
    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    handle: NotRequired[str]
    """YouTube channel handle."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    sort: NotRequired[Literal["latest", "popular"]]
    """Sort order."""


class YoutubeCommentRepliesInput(TypedDict, total=False):
    """Input for YouTube Comment Replies."""

    continuationToken: Required[str]
    """Replies continuation token from the comments endpoint, or the continuationToken from a previous replies response for further pagination."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class YoutubeCommunityPostInput(TypedDict, total=False):
    """Input for YouTube Community Post."""

    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    url: Required[str]
    """URL of the YouTube community post."""


class YoutubePlaylistInput(TypedDict, total=False):
    """Input for YouTube Playlist."""

    playlistId: Required[str]
    """The playlist ID: the "list" parameter in a playlist URL (e.g. "PLu0W_9lII9ahIappRPN0MCAgtOu3lQjQi")."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class YoutubeSearchInput(TypedDict, total=False):
    """Input for YouTube Search."""

    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """The YouTube search query."""
    requireCursor: NotRequired[bool]
    """Deprecated; send `requireFields: ["nextCursor"]` instead, which does exactly the same thing. Set true if you intend to page through results, so the request is only served by a source that can return a nextCursor. Omit it and routing is unchanged, with the cheapest source serving. This can raise your price: when the cheapest source cannot page, a source that can serves, and you are quoted and charged its price. It stays accepted so callers that already send it keep working."""
    requireFields: NotRequired[list[Literal["lengthText", "nextCursor", "views"]]]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `nextCursor`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a result that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. On a paginated walk it applies to the first page only; later pages stay with the source that page chose, at the price it was quoted."""
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
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    type: NotRequired[Literal["all"]]
    """Content filter. Only "all" is served: no source we buy returns a Shorts row with the channel and publish time this endpoint requires."""


class YoutubeSearchShortsInput(TypedDict, total=False):
    """Input for YouTube Shorts Search."""

    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """The keyword to search Shorts for."""
    sortBy: NotRequired[Literal["relevance", "popular"]]
    """Sort order: "relevance" (default) or "popular" (most-viewed). Default: relevance."""
    uploadDate: NotRequired[Literal["today", "this_week", "this_month", "this_year"]]
    """Filter by upload recency. Omit for any time."""


class YoutubeTrendingShortsInput(TypedDict, total=False):
    """Input for YouTube Trending Shorts."""

    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class YoutubeVideoInput(TypedDict, total=False):
    """Input for YouTube Video."""

    id: NotRequired[str]
    """YouTube video ID. A Short uses the same ID as any other video."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    url: NotRequired[str]
    """Full YouTube video URL. Shorts (youtube.com/shorts/...), youtu.be, live, and embed URLs all work."""


class YoutubeVideoCommentsInput(TypedDict, total=False):
    """Input for YouTube Video Comments."""

    cursor: NotRequired[str]
    """Continuation token from a previous response for pagination."""
    order: NotRequired[str]
    """Comment order (e.g. top, newest)."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    url: Required[str]
    """Full YouTube video URL. Shorts (youtube.com/shorts/...) and youtu.be URLs also work."""


class YoutubeVideoSponsorsInput(TypedDict, total=False):
    """Input for YouTube Video Sponsors."""

    language: NotRequired[str]
    """2-letter language code for transcript lookup (e.g. en, es, fr)."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    url: Required[str]
    """YouTube video or Short URL."""


class YoutubeVideoTranscriptInput(TypedDict, total=False):
    """Input for YouTube Video Transcript."""

    id: NotRequired[str]
    """YouTube video ID. A Short uses the same ID as any other video."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    url: NotRequired[str]
    """Full YouTube video URL. Shorts (youtube.com/shorts/...), youtu.be, live, and embed URLs all work."""


class YoutubeVideoTranscriptFullInput(TypedDict, total=False):
    """Input for YouTube Video Transcript (Provenance)."""

    captionKind: NotRequired[Literal["manual", "automatic", "any"]]
    """Which caption track to accept: "manual" only creator-written captions, "automatic" only YouTube's speech recognition, "any" whichever exists. Default: any."""
    language: NotRequired[str]
    """Preferred caption language code (e.g. "en", "es"). Defaults to English."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    requireFields: NotRequired[
        list[
            Literal[
                "channel",
                "durationSeconds",
                "endSeconds",
                "isAiGenerated",
                "startSeconds",
                "text",
                "title",
            ]
        ]
    ]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `isAiGenerated`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a transcript that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge."""
    url: Required[str]
    """YouTube video or Short URL (e.g. "https://www.youtube.com/watch?v=dQw4w9WgXcQ" or "https://www.youtube.com/shorts/Fir1x9cw2vg")."""


class YoutubeChannelData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(alias="avatarUrl")
    channel_id: str = Field(
        alias="channelId",
        description="Populated whenever the provider has data for the entity.",
    )
    description: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    subscribers: int
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    videos: int
    views: int


class YoutubeChannelCommunityPostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    posts: list[YoutubeChannelCommunityPostsPost] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class YoutubeChannelCommunityPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    content: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    image: str
    like_count: int = Field(alias="likeCount")
    published_time: str = Field(
        alias="publishedTime",
        description="Populated whenever the provider has data for the entity.",
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class YoutubeChannelContactData(BaseModel):
    model_config = ConfigDict(extra="allow")

    email: str = Field(
        description="The business inquiry email the creator published on the channel's About tab, as YouTube reveals it behind the View email address button. This is the address YouTube gates behind a signed-in session, so it is often different from any address written into the channel description."
    )


class YoutubeChannelLivesData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    lives: list[YoutubeChannelLivesLive] = Field(
        description="Populated whenever the provider has data for the entity."
    )
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of live streams, or null when this lane has no more. Pass it back as cursor to continue.",
    )


class YoutubeChannelLivesLive(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    length_text: str = Field(alias="lengthText")
    published_time: str = Field(
        alias="publishedTime",
        description="Populated whenever the provider has data for the entity.",
    )
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    views: int


class YoutubeChannelPlaylistsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of playlists, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    playlists: list[YoutubeChannelPlaylistsPlaylist] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class YoutubeChannelPlaylistsPlaylist(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    playlist_url: str = Field(
        alias="playlistUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    thumbnail: str
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    video_count: int = Field(alias="videoCount")


class YoutubeChannelShortsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next Shorts page, or null when no next page is available.",
    )
    shorts: list[YoutubeChannelShortsShort] = Field(
        description="Short-form videos returned by the provider's dedicated YouTube Shorts endpoint. Populated whenever the provider has data for the entity."
    )


class YoutubeChannelShortsShort(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    content_type: Literal["short"] = Field(
        alias="contentType",
        description="Explicit normalized provenance that this item came from a dedicated Shorts feed.",
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds when supplied by the upstream response.",
    )
    duration: str = Field(
        description="Published duration when supplied by the upstream response."
    )
    id: str = Field(
        description="Unique YouTube video identifier. Populated whenever the provider has data for the entity."
    )
    likes: int = Field(
        description="Public like count when supplied by the upstream response. Minimum: 0."
    )
    title: str | None = Field(
        default=None,
        description="Public title or caption for the Short. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    url: str = Field(
        description="Public YouTube URL for the Short. Populated whenever the provider has data for the entity."
    )
    views: int = Field(
        description="Public view count when supplied by the upstream response. Minimum: 0."
    )
    views_available: bool = Field(
        alias="viewsAvailable",
        description="Whether views is backed by a public count in the upstream response.",
    )


class YoutubeChannelVideosData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of videos, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    videos: list[YoutubeChannelVideosVideo] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class YoutubeChannelVideosVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    length_text: str = Field(alias="lengthText")
    published_time: str = Field(
        alias="publishedTime",
        description="Populated whenever the provider has data for the entity.",
    )
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    views: int


class YoutubeCommentRepliesData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    comments: list[YoutubeCommentRepliesComment] = Field(
        description="Populated whenever the provider has data for the entity."
    )
    next_cursor: str = Field(alias="nextCursor")


class YoutubeCommentRepliesComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_name: str = Field(
        alias="authorName",
        description="Populated whenever the provider has data for the entity.",
    )
    content: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    published_time: str = Field(
        alias="publishedTime",
        description="Populated whenever the provider has data for the entity.",
    )


class YoutubeCommunityPostData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel_handle: str = Field(
        alias="channelHandle",
        description="Populated whenever the provider has data for the entity.",
    )
    channel_title: str = Field(
        alias="channelTitle",
        description="Populated whenever the provider has data for the entity.",
    )
    content: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    published_time: str = Field(
        alias="publishedTime",
        description="Populated whenever the provider has data for the entity.",
    )


class YoutubePlaylistData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    owner: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    total_videos: int = Field(alias="totalVideos")
    videos: list[YoutubePlaylistVideo] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class YoutubePlaylistVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    length_seconds: int = Field(alias="lengthSeconds")
    length_text: str = Field(
        alias="lengthText",
        description="Populated whenever the provider has data for the entity.",
    )
    thumbnail: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    title: str
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class YoutubeSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        default=None,
        alias="nextCursor",
        description="Opaque cursor for the next page of results, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    videos: list[YoutubeSearchVideo] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class YoutubeSearchVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    length_text: str = Field(alias="lengthText")
    published_time: str = Field(
        alias="publishedTime",
        description="Populated whenever the provider has data for the entity.",
    )
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    views: int


class YoutubeSearchHashtagData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of videos, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    videos: list[YoutubeSearchHashtagVideo] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class YoutubeSearchHashtagVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel_title: str = Field(
        alias="channelTitle",
        description="Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    length_text: str = Field(alias="lengthText")
    published_time: str = Field(
        alias="publishedTime",
        description="Populated whenever the provider has data for the entity.",
    )
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    views: int


class YoutubeSearchShortsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        default=None,
        alias="nextCursor",
        description="Opaque cursor for the next page of results, or null when there are no more. Pass it back as cursor to continue.",
    )
    shorts: list[YoutubeSearchShortsShort] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class YoutubeSearchShortsShort(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    content_type: str = Field(
        alias="contentType",
        description='Always "short": every row here comes from YouTube\'s Shorts shelf.',
    )
    id: str = Field(
        description="YouTube video id of the Short. Populated whenever the provider has data for the entity."
    )
    title: str = Field(
        description="Title of the Short. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Watch URL for the Short. Populated whenever the provider has data for the entity."
    )
    views: int = Field(
        description="View count, or 0 when the source did not publish one. Read viewsAvailable before trusting a 0."
    )
    views_available: bool = Field(
        alias="viewsAvailable",
        description="False when the source published no view count, so views is a placeholder rather than a measured zero.",
    )


class YoutubeTrendingShortsData(BaseModel):
    shorts: list[YoutubeTrendingShortsShort] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class YoutubeTrendingShortsShort(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel_title: str = Field(
        alias="channelTitle",
        description="Populated whenever the provider has data for the entity.",
    )
    duration: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    views: int


class YoutubeVideoData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel: str = Field(
        description="Name of the channel that published the video. Populated whenever the provider has data for the entity."
    )
    comments: int = Field(description="Number of comments.")
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    duration_ms: int = Field(
        alias="durationMs", description="Duration of the video in milliseconds."
    )
    id: str = Field(
        description="Unique identifier of the video. Populated whenever the provider has data for the entity."
    )
    likes: int = Field(description="Number of likes.")
    title: str = Field(
        description="Title of the video. Populated whenever the provider has data for the entity."
    )
    views: int = Field(description="Number of views.")


class YoutubeVideoCommentsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    comments: list[YoutubeVideoCommentsComment] = Field(
        description="Populated whenever the provider has data for the entity."
    )
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.",
    )


class YoutubeVideoCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    published_time: str = Field(
        alias="publishedTime",
        description="Populated whenever the provider has data for the entity.",
    )
    replies: int
    text: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class YoutubeVideoSponsorsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    detection_status: str = Field(
        alias="detectionStatus",
        description="Populated whenever the provider has data for the entity.",
    )
    is_paid_promotion: bool = Field(alias="isPaidPromotion")
    suspected_sponsors: list[YoutubeVideoSponsorsSuspectedSponsor] = Field(
        alias="suspectedSponsors"
    )
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    video_id: str = Field(
        alias="videoId",
        description="Populated whenever the provider has data for the entity.",
    )


class YoutubeVideoSponsorsSuspectedSponsor(BaseModel):
    model_config = ConfigDict(extra="allow")

    confidence: str
    name: str
    website: str


class YoutubeVideoTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")

    language: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    segments: list[YoutubeVideoTranscriptSegment] | None = Field(
        default=None,
        description="Timed transcript segments in source order when the serving lane supplies caption timing.",
    )
    transcript: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class YoutubeVideoTranscriptSegment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    duration_seconds: float = Field(
        alias="durationSeconds", description="Segment duration in seconds. Minimum: 0."
    )
    start_seconds: float = Field(
        alias="startSeconds", description="Segment start offset in seconds. Minimum: 0."
    )
    text: str = Field(description="Text of this transcript segment.")


class YoutubeVideoTranscriptFullData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    channel: str | None = Field(
        default=None, description="Channel name that published the video."
    )
    duration_seconds: float | None = Field(
        default=None,
        alias="durationSeconds",
        description="Video duration in seconds. Minimum: 0.",
    )
    is_ai_generated: bool | None = Field(
        default=None,
        alias="isAiGenerated",
        description="True when the words were recognized from the audio by the serving lane rather than read from any YouTube caption track, or null when the serving source does not say.",
    )
    is_auto_generated: bool = Field(
        alias="isAutoGenerated",
        description="True when YouTube generated the caption track by speech recognition rather than the creator supplying it. Automatic captions carry recognition errors, especially on names and jargon. Populated whenever the provider has data for the entity.",
    )
    language: str = Field(
        description='Caption language code (e.g. "en"). Populated whenever the provider has data for the entity.'
    )
    segments: list[YoutubeVideoTranscriptFullSegment] | None = Field(
        default=None,
        description="Timed transcript segments in playback order. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    title: str | None = Field(default=None, description="Video title.")
    transcript: str = Field(
        description="Full transcript text, segments joined in playback order. Populated whenever the provider has data for the entity."
    )


class YoutubeVideoTranscriptFullSegment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    end_seconds: float = Field(
        alias="endSeconds", description="Segment end offset in seconds. Minimum: 0."
    )
    start_seconds: float = Field(
        alias="startSeconds", description="Segment start offset in seconds. Minimum: 0."
    )
    text: str = Field(description="Text of this transcript segment.")


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
        description) by handle or channel ID.

        Price: $0.0005 per request.

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
        pagination (text, likes, image, publish time).

        Price: $0.0012 per request.

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

    def channel_contact(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelContactInput],
    ) -> RunResult[YoutubeChannelContactData]:
        """YouTube Channel Contact Email

        Reveal the business inquiry email a YouTube creator publishes behind the
        channel's View email address button. YouTube gates that address behind a
        signed-in Google session and a CAPTCHA, so it is absent from the channel
        page a logged-out scraper reads.

        Price: $0.0718 per request plus $0 per result (maximum $0.0718).

        Example:
            res = client.youtube.channel_contact(handle="@mkbhd")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel_contact", dict(input), options
        )
        return RunResult[YoutubeChannelContactData].model_validate(raw)

    def channel_lives(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelLivesInput],
    ) -> RunResult[YoutubeChannelLivesData]:
        """YouTube Channel Live Streams

        List a YouTube channel's live and past-live streams by handle or channel ID
        with cursor pagination (title, views, length, publish time).

        Price: $0.0012 per request.

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
        pagination (title, video count, thumbnail).

        Price: $0.0012 per request.

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
        pagination, views, and publish timestamps.

        Price: $0.0012 per request.

        Example:
            res = client.youtube.channel_shorts(handle="@zachking", sort="latest")
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
        pagination (title, views, length, publish time).

        Price: $0.0005 per request.

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
        pagination (text, author, likes, publish time).

        Price: $0.0012 per request.

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
        time).

        Price: $0.0012 per request.

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

        List every video in a YouTube playlist (title, length, and channel per video
        plus playlist owner and totals).

        Price: $0.0012 per request.

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
        publish time) as normalized JSON.

        Price: $0.0005 per request.

        Example:
            res = client.youtube.search(query="how to cook rice")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.search", dict(input), options
        )
        return RunResult[YoutubeSearchData].model_validate(raw)

    def iter_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchInput],
    ) -> Paginator[YoutubeSearchVideo, YoutubeSearchData]:
        """Iterate YouTube Search results, following pagination cursors.

        Yields validated `YoutubeSearchVideo` items from the `videos` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "youtube.search",
            dict(input),
            "videos",
            item_model=YoutubeSearchVideo,
            data_model=YoutubeSearchData,
            bare=False,
            options=options,
        )

    def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchHashtagInput],
    ) -> RunResult[YoutubeSearchHashtagData]:
        """YouTube Hashtag Search

        Search YouTube videos by hashtag with cursor pagination (title, channel,
        views, length, publish time).

        Price: $0.0012 per request.

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

    def search_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchShortsInput],
    ) -> RunResult[YoutubeSearchShortsData]:
        """YouTube Shorts Search

        Search YouTube Shorts by keyword and get matching Shorts (title, views, URL)
        with cursor pagination as normalized JSON.

        Price: $0.0012 per request.

        Example:
            res = client.youtube.search_shorts(query="cats")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.search_shorts", dict(input), options
        )
        return RunResult[YoutubeSearchShortsData].model_validate(raw)

    def iter_search_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchShortsInput],
    ) -> Paginator[YoutubeSearchShortsShort, YoutubeSearchShortsData]:
        """Iterate YouTube Shorts Search results, following pagination cursors.

        Yields validated `YoutubeSearchShortsShort` items from the `shorts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "youtube.search_shorts",
            dict(input),
            "shorts",
            item_model=YoutubeSearchShortsShort,
            data_model=YoutubeSearchShortsData,
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
        duration).

        Price: $0.0012 per request.

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

        Fetch a YouTube video or Short's metadata (title, channel, views, likes,
        duration, publish date) by URL or ID.

        Price: $0.0009 per request.

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

        List the comments on a YouTube video or Short by URL with cursor pagination
        (text, author, likes, reply count).

        Price: $0.0012 per request.

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
        (sponsor names, websites, confidence).

        Price: $0.0012 per request.

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

        Fetch the transcript/captions of a YouTube video or Short by URL or ID.

        Price: $0.00125 per request.

        Example:
            res = client.youtube.video_transcript(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.video_transcript", dict(input), options
        )
        return RunResult[YoutubeVideoTranscriptData].model_validate(raw)

    def video_transcript_full(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoTranscriptFullInput],
    ) -> RunResult[YoutubeVideoTranscriptFullData]:
        """YouTube Video Transcript (Provenance)

        Fetch a YouTube video or Short transcript with timed segments and its
        provenance: whether the words are creator-written captions or machine speech
        recognition.

        Price: $0.001 per request.

        Example:
            res = client.youtube.video_transcript_full(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.video_transcript_full", dict(input), options
        )
        return RunResult[YoutubeVideoTranscriptFullData].model_validate(raw)


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
        description) by handle or channel ID.

        Price: $0.0005 per request.

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
        pagination (text, likes, image, publish time).

        Price: $0.0012 per request.

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

    async def channel_contact(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelContactInput],
    ) -> RunResult[YoutubeChannelContactData]:
        """YouTube Channel Contact Email

        Reveal the business inquiry email a YouTube creator publishes behind the
        channel's View email address button. YouTube gates that address behind a
        signed-in Google session and a CAPTCHA, so it is absent from the channel
        page a logged-out scraper reads.

        Price: $0.0718 per request plus $0 per result (maximum $0.0718).

        Example:
            res = client.youtube.channel_contact(handle="@mkbhd")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.channel_contact", dict(input), options
        )
        return RunResult[YoutubeChannelContactData].model_validate(raw)

    async def channel_lives(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeChannelLivesInput],
    ) -> RunResult[YoutubeChannelLivesData]:
        """YouTube Channel Live Streams

        List a YouTube channel's live and past-live streams by handle or channel ID
        with cursor pagination (title, views, length, publish time).

        Price: $0.0012 per request.

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
        pagination (title, video count, thumbnail).

        Price: $0.0012 per request.

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
        pagination, views, and publish timestamps.

        Price: $0.0012 per request.

        Example:
            res = client.youtube.channel_shorts(handle="@zachking", sort="latest")
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
        pagination (title, views, length, publish time).

        Price: $0.0005 per request.

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
        pagination (text, author, likes, publish time).

        Price: $0.0012 per request.

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
        time).

        Price: $0.0012 per request.

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

        List every video in a YouTube playlist (title, length, and channel per video
        plus playlist owner and totals).

        Price: $0.0012 per request.

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
        publish time) as normalized JSON.

        Price: $0.0005 per request.

        Example:
            res = client.youtube.search(query="how to cook rice")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.search", dict(input), options
        )
        return RunResult[YoutubeSearchData].model_validate(raw)

    def iter_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchInput],
    ) -> AsyncPaginator[YoutubeSearchVideo, YoutubeSearchData]:
        """Iterate YouTube Search results, following pagination cursors.

        Yields validated `YoutubeSearchVideo` items from the `videos` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "youtube.search",
            dict(input),
            "videos",
            item_model=YoutubeSearchVideo,
            data_model=YoutubeSearchData,
            bare=False,
            options=options,
        )

    async def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchHashtagInput],
    ) -> RunResult[YoutubeSearchHashtagData]:
        """YouTube Hashtag Search

        Search YouTube videos by hashtag with cursor pagination (title, channel,
        views, length, publish time).

        Price: $0.0012 per request.

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

    async def search_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchShortsInput],
    ) -> RunResult[YoutubeSearchShortsData]:
        """YouTube Shorts Search

        Search YouTube Shorts by keyword and get matching Shorts (title, views, URL)
        with cursor pagination as normalized JSON.

        Price: $0.0012 per request.

        Example:
            res = client.youtube.search_shorts(query="cats")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.search_shorts", dict(input), options
        )
        return RunResult[YoutubeSearchShortsData].model_validate(raw)

    def iter_search_shorts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeSearchShortsInput],
    ) -> AsyncPaginator[YoutubeSearchShortsShort, YoutubeSearchShortsData]:
        """Iterate YouTube Shorts Search results, following pagination cursors.

        Yields validated `YoutubeSearchShortsShort` items from the `shorts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "youtube.search_shorts",
            dict(input),
            "shorts",
            item_model=YoutubeSearchShortsShort,
            data_model=YoutubeSearchShortsData,
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
        duration).

        Price: $0.0012 per request.

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

        Fetch a YouTube video or Short's metadata (title, channel, views, likes,
        duration, publish date) by URL or ID.

        Price: $0.0009 per request.

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

        List the comments on a YouTube video or Short by URL with cursor pagination
        (text, author, likes, reply count).

        Price: $0.0012 per request.

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
        (sponsor names, websites, confidence).

        Price: $0.0012 per request.

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

        Fetch the transcript/captions of a YouTube video or Short by URL or ID.

        Price: $0.00125 per request.

        Example:
            res = client.youtube.video_transcript(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.video_transcript", dict(input), options
        )
        return RunResult[YoutubeVideoTranscriptData].model_validate(raw)

    async def video_transcript_full(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[YoutubeVideoTranscriptFullInput],
    ) -> RunResult[YoutubeVideoTranscriptFullData]:
        """YouTube Video Transcript (Provenance)

        Fetch a YouTube video or Short transcript with timed segments and its
        provenance: whether the words are creator-written captions or machine speech
        recognition.

        Price: $0.001 per request.

        Example:
            res = client.youtube.video_transcript_full(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "youtube.video_transcript_full", dict(input), options
        )
        return RunResult[YoutubeVideoTranscriptFullData].model_validate(raw)
