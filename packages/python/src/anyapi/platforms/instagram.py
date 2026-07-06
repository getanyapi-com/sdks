# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the instagram platform."""

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


class InstagramAudioReelsInput(TypedDict, total=False):
    """Input for Instagram Reels by Audio."""

    audioId: Required[str]
    """Audio identifier from the Instagram audio page URL."""
    cursor: NotRequired[str]
    """Pagination cursor returned by a previous response."""


class InstagramBasicProfileInput(TypedDict, total=False):
    """Input for Instagram Basic Profile."""

    userId: Required[str]
    """Instagram numeric user id."""


class InstagramEmbedInput(TypedDict, total=False):
    """Input for Instagram Profile Embed."""

    handle: Required[str]
    """Instagram username without the leading @."""


class InstagramFollowersInput(TypedDict, total=False):
    """Input for Instagram Followers."""

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of followers."""
    limit: NotRequired[int]
    """How many followers you want (50-1000). By default results come back in cheap pages of up to ~50: follow the response's nextCursor for more. With requireSinglePage true, up to this many are returned in one (pricier) call. Range: 50 to 1000."""
    requireSinglePage: NotRequired[bool]
    """Set true to get up to limit followers in a single response instead of cheap pages, served by a bulk provider at a higher price."""
    username: Required[str]
    """The Instagram username, user ID, or profile URL whose followers to list (e.g. natgeo)."""


class InstagramFollowingInput(TypedDict, total=False):
    """Input for Instagram Following."""

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page."""
    limit: NotRequired[int]
    """How many accounts you want (50-1000). By default results come back in cheap pages of up to ~50: follow the response's nextCursor for more. With requireSinglePage true, up to this many are returned in one (pricier) call. Range: 50 to 1000."""
    requireSinglePage: NotRequired[bool]
    """Set true to get up to limit accounts in a single response instead of cheap pages, served by a bulk provider at a higher price."""
    username: Required[str]
    """The Instagram username, user ID, or profile URL whose following list to fetch (e.g. natgeo)."""


class InstagramHashtagAnalyticsInput(TypedDict, total=False):
    """Input for Instagram Hashtag Analytics."""

    hashtag: Required[str]
    """The Instagram hashtag to analyze, with or without the # symbol (e.g. streetphotography)."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""


class InstagramHighlightDetailInput(TypedDict, total=False):
    """Input for Instagram Highlight Detail."""

    id: Required[str]
    """The id of the highlight to retrieve details for."""


class InstagramMediaTranscriptInput(TypedDict, total=False):
    """Input for Instagram Media Transcript."""

    url: Required[str]
    """Instagram post or reel URL."""


class InstagramPostInput(TypedDict, total=False):
    """Input for Instagram Post."""

    url: Required[str]
    """Full Instagram post or reel URL."""


class InstagramPostCommentsInput(TypedDict, total=False):
    """Input for Instagram Post Comments."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    url: Required[str]
    """Full Instagram post or reel URL."""


class InstagramProfileInput(TypedDict, total=False):
    """Input for Instagram Profile."""

    handle: Required[str]
    """Instagram username without the leading @."""


class InstagramReelTranscriptInput(TypedDict, total=False):
    """Input for Instagram Reel Transcript."""

    url: Required[str]
    """The URL of a public Instagram reel or video post with spoken audio (e.g. https://www.instagram.com/reel/C8yKXdRxKqK/)."""
    wordTimestamps: NotRequired[bool]
    """Set true to include a precise timestamp for every word in the transcript (e.g. true). Default: false."""


class InstagramReelsSearchInput(TypedDict, total=False):
    """Input for Instagram Reels Search."""

    datePosted: NotRequired[
        Literal["last-hour", "last-day", "last-week", "last-month", "last-year"]
    ]
    """Restrict results to reels posted within this window."""
    page: NotRequired[int]
    """1-based results page. Minimum: 1. Default: 1."""
    query: Required[str]
    """Search keyword (e.g. "crossfit")."""


class InstagramSearchInput(TypedDict, total=False):
    """Input for Instagram Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    query: Required[str]
    """Keyword to search Instagram for; one or more words without special punctuation (e.g. coffee roastery)."""
    type: NotRequired[Literal["user", "hashtag", "place"]]
    """What to search for: user profiles, hashtags, or places (e.g. hashtag). Default: user."""


class InstagramSearchHashtagInput(TypedDict, total=False):
    """Input for Instagram Hashtag Search."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    hashtag: Required[str]
    """Hashtag to search, without the leading #."""
    mediaType: NotRequired[str]
    """Filter by media type (e.g. all, photo, video, reel)."""


class InstagramSearchProfilesInput(TypedDict, total=False):
    """Input for Instagram Profile Search."""

    cursor: NotRequired[str]
    """Pagination cursor returned by a previous response."""
    query: Required[str]
    """Bio or caption keyword/phrase to search for."""


class InstagramStoriesFullInput(TypedDict, total=False):
    """Input for Instagram Stories (full)."""

    usernames: Required[list[str]]
    """Instagram usernames/handles (without the @). A flat run fee is shared across the batch, so request several at once to lower the cost per account. Up to 100 usernames per request."""


class InstagramStoriesThinInput(TypedDict, total=False):
    """Input for Instagram Stories (basic)."""

    username: Required[str]
    """Instagram username/handle to fetch currently live stories for (without the @)."""


class InstagramTrendingReelsInput(TypedDict, total=False):
    """Input for Instagram Trending Reels."""


class InstagramUserHighlightsInput(TypedDict, total=False):
    """Input for Instagram User Highlights."""

    handle: Required[str]
    """Instagram username without the leading @."""
    userId: NotRequired[str]
    """Instagram numeric user id (optional, faster than handle)."""


class InstagramUserPostsInput(TypedDict, total=False):
    """Input for Instagram User Posts."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    handle: Required[str]
    """Instagram username without the leading @."""


class InstagramUserReelsInput(TypedDict, total=False):
    """Input for Instagram User Reels."""

    cursor: NotRequired[str]
    """Pagination cursor (max_id) from a previous response's nextCursor."""
    handle: NotRequired[str]
    """Instagram handle."""
    userId: NotRequired[str]
    """Instagram user id (faster than handle when known)."""


class InstagramAudioReelsData(BaseModel):
    hasMore: bool
    nextCursor: str
    reels: list[InstagramAudioReelsReel] = Field(
        description="Populated whenever the provider returns data."
    )


class InstagramAudioReelsReel(BaseModel):
    model_config = ConfigDict(extra="allow")

    code: str
    comments: int
    handle: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    plays: int


class InstagramBasicProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")

    avatarUrl: str = Field(description="Populated whenever the provider returns data.")
    bio: str
    displayName: str = Field(
        description="Populated whenever the provider returns data."
    )
    externalUrl: str
    followers: int
    following: int
    handle: str = Field(description="Populated whenever the provider returns data.")
    private: bool
    userId: str = Field(description="Populated whenever the provider returns data.")
    verified: bool


class InstagramEmbedData(BaseModel):
    model_config = ConfigDict(extra="allow")

    html: str = Field(description="Populated whenever the provider returns data.")


class InstagramFollowersData(BaseModel):
    items: list[InstagramFollowersItem] = Field(
        description="Follower records: id, handle, full name, profile picture URL, and verification/privacy flags. Populated whenever the provider returns data."
    )
    nextCursor: str | None = Field(
        default=None,
        description="Opaque cursor for the next page of followers, or null when this lane has no more. Pass it back as cursor to continue.",
    )


class InstagramFollowersItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    fullName: str | None = Field(
        default=None,
        description="Follower's display name (may be empty). Populated whenever the provider returns data.",
    )
    handle: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    private: bool | None = Field(
        default=None, description="Whether the follower's account is private."
    )
    profilePicUrl: str | None = Field(
        default=None,
        description="URL of the follower's profile picture. Populated whenever the provider returns data.",
    )
    verified: bool | None = Field(
        default=None, description="Whether the follower's account is verified."
    )


class InstagramFollowingData(BaseModel):
    items: list[InstagramFollowingItem] = Field(
        description="Followed-account records: numeric id, handle, full name, profile picture URL, and verified/private flags. Populated whenever the provider returns data."
    )
    nextCursor: str | None = Field(
        default=None,
        description="Opaque cursor for the next page of accounts, or null when this lane has no more. Pass it back as cursor to continue.",
    )


class InstagramFollowingItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    fullName: str | None = Field(
        default=None,
        description="Account display name. Populated whenever the provider returns data.",
    )
    handle: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    private: bool | None = Field(
        default=None, description="Whether the account is private."
    )
    profilePicUrl: str | None = Field(
        default=None,
        description="URL of the account's profile picture. Populated whenever the provider returns data.",
    )
    verified: bool | None = Field(
        default=None, description="Whether the account has a verified badge."
    )


class InstagramHashtagAnalyticsData(BaseModel):
    items: list[InstagramHashtagAnalyticsItem] = Field(
        description="Hashtag analytics records: hashtag name, total post count, and related hashtag suggestions. Populated whenever the provider returns data."
    )


class InstagramHashtagAnalyticsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    difficulty: str | None = None
    id: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    name: str = Field(
        description="Hashtag (without #). Populated whenever the provider returns data."
    )
    postsCount: int | None = Field(
        default=None, description="Total posts using the hashtag."
    )
    postsFormatted: str | None = Field(
        default=None,
        description="Human-formatted post count (e.g. 793.54 M). Populated whenever the provider returns data.",
    )
    url: str = Field(description="Populated whenever the provider returns data.")


class InstagramHighlightDetailData(BaseModel):
    model_config = ConfigDict(extra="allow")

    coverUrl: str = Field(description="Populated whenever the provider returns data.")
    createdAt: int
    id: str = Field(description="Populated whenever the provider returns data.")
    mediaCount: int
    ownerHandle: str = Field(
        description="Populated whenever the provider returns data."
    )
    title: str = Field(description="Populated whenever the provider returns data.")


class InstagramMediaTranscriptData(BaseModel):
    transcripts: list[InstagramMediaTranscriptTranscript] = Field(
        description="Populated whenever the provider returns data."
    )


class InstagramMediaTranscriptTranscript(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str = Field(description="Populated whenever the provider returns data.")
    shortcode: str = Field(description="Populated whenever the provider returns data.")
    text: str = Field(description="Populated whenever the provider returns data.")


class InstagramPostData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    displayUrl: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    owner: str = Field(description="Populated whenever the provider returns data.")
    shortcode: str
    type_: str = Field(alias="type")
    videoUrl: str


class InstagramPostCommentsData(BaseModel):
    comments: list[InstagramPostCommentsComment] = Field(
        description="Populated whenever the provider returns data."
    )


class InstagramPostCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow")

    author: str = Field(description="Populated whenever the provider returns data.")
    createdAt: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    text: str = Field(description="Populated whenever the provider returns data.")
    verified: bool


class InstagramProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")

    avatarUrl: str = Field(description="Populated whenever the provider returns data.")
    bio: str = Field(description="Populated whenever the provider returns data.")
    displayName: str = Field(
        description="Populated whenever the provider returns data."
    )
    followers: int
    following: int
    handle: str = Field(description="Populated whenever the provider returns data.")
    posts: int
    verified: bool


class InstagramReelTranscriptData(BaseModel):
    items: list[InstagramReelTranscriptItem] = Field(
        description="Transcript records: full transcript text, timed segments, detected language, and source video metadata. Populated whenever the provider returns data."
    )


class InstagramReelTranscriptItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    text: str
    url: str


class InstagramReelsSearchData(BaseModel):
    reels: list[InstagramReelsSearchReel] = Field(
        description="Populated whenever the provider returns data."
    )


class InstagramReelsSearchReel(BaseModel):
    model_config = ConfigDict(extra="allow")

    caption: str = Field(description="Populated whenever the provider returns data.")
    comments: int
    durationSeconds: float
    followers: int
    likes: int
    paidPartnership: bool
    plays: int
    shortcode: str = Field(description="Populated whenever the provider returns data.")
    takenAt: str
    thumbnail: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")
    username: str = Field(description="Populated whenever the provider returns data.")
    verified: bool
    views: int


class InstagramSearchData(BaseModel):
    items: list[InstagramSearchItem] = Field(
        description="Matching search results: user profiles, hashtags, or places with names, follower/post counts, and profile links. Populated whenever the provider returns data."
    )


class InstagramSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    handle: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class InstagramSearchHashtagData(BaseModel):
    posts: list[InstagramSearchHashtagPost] = Field(
        description="Populated whenever the provider returns data."
    )


class InstagramSearchHashtagPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    caption: str
    displayUrl: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    shortcode: str = Field(description="Populated whenever the provider returns data.")
    type_: str = Field(alias="type")
    url: str = Field(description="Populated whenever the provider returns data.")


class InstagramSearchProfilesData(BaseModel):
    nextCursor: str
    profiles: list[InstagramSearchProfilesProfile] = Field(
        description="Populated whenever the provider returns data."
    )


class InstagramSearchProfilesProfile(BaseModel):
    model_config = ConfigDict(extra="allow")

    avatarUrl: str = Field(description="Populated whenever the provider returns data.")
    bio: str = Field(description="Populated whenever the provider returns data.")
    displayName: str = Field(
        description="Populated whenever the provider returns data."
    )
    followers: int
    following: int
    handle: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    posts: int
    private: bool
    verified: bool


class InstagramStoriesFullData(BaseModel):
    items: list[InstagramStoriesFullItem] = Field(
        description="Story records across the requested accounts, each with full media, type, dimensions, posting + expiry time, and caption. Populated whenever the provider returns data."
    )


class InstagramStoriesFullItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    caption: str | None = Field(
        default=None, description="Story caption text, when present."
    )
    code: str | None = Field(default=None, description="Instagram media shortcode.")
    expiresAt: int | None = Field(
        default=None, description="Expiry time, 24h after posting (Unix seconds)."
    )
    height: int | None = Field(default=None, description="Media pixel height.")
    id: str = Field(description="Story identifier.")
    imageUrl: str | None = Field(
        default=None, description="Direct URL to the story image (highest resolution)."
    )
    mediaType: int | None = Field(
        default=None, description="Media type: 1 = image, 2 = video."
    )
    postedAt: int | None = Field(
        default=None, description="Posting time (Unix seconds)."
    )
    username: str | None = Field(
        default=None,
        description="Owner username. Populated whenever the provider returns data.",
    )
    videoUrl: str | None = Field(
        default=None,
        description="Direct URL to the story video, when the story is a video.",
    )
    width: int | None = Field(default=None, description="Media pixel width.")


class InstagramStoriesThinData(BaseModel):
    items: list[InstagramStoriesThinItem] = Field(
        description="The account's currently live stories, each with its media URL, owner, posting time, and permalink. Populated whenever the provider returns data."
    )


class InstagramStoriesThinItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str = Field(
        description="Story identifier. Populated whenever the provider returns data."
    )
    mediaUrl: str | None = Field(
        default=None,
        description="Direct URL to the story image or video. Populated whenever the provider returns data.",
    )
    permalink: str | None = Field(
        default=None,
        description="Public link to the story. Populated whenever the provider returns data.",
    )
    postedAt: int | None = Field(
        default=None, description="Posting time (Unix seconds)."
    )
    username: str | None = Field(
        default=None,
        description="Owner username. Populated whenever the provider returns data.",
    )


class InstagramTrendingReelsData(BaseModel):
    reels: list[InstagramTrendingReelsReel] = Field(
        description="Populated whenever the provider returns data."
    )


class InstagramTrendingReelsReel(BaseModel):
    model_config = ConfigDict(extra="allow")

    caption: str
    comments: int
    handle: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    plays: int
    shortcode: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class InstagramUserHighlightsData(BaseModel):
    highlights: list[InstagramUserHighlightsHighlight] = Field(
        description="Populated whenever the provider returns data."
    )


class InstagramUserHighlightsHighlight(BaseModel):
    model_config = ConfigDict(extra="allow")

    coverUrl: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    ownerHandle: str = Field(
        description="Populated whenever the provider returns data."
    )
    title: str = Field(description="Populated whenever the provider returns data.")


class InstagramUserPostsData(BaseModel):
    nextCursor: str
    posts: list[InstagramUserPostsPost] = Field(
        description="Populated whenever the provider returns data."
    )


class InstagramUserPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow")

    caption: str = Field(description="Populated whenever the provider returns data.")
    comments: int
    createdAt: str
    id: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    url: str = Field(description="Populated whenever the provider returns data.")


class InstagramUserReelsData(BaseModel):
    nextCursor: str
    reels: list[InstagramUserReelsReel] = Field(
        description="Populated whenever the provider returns data."
    )


class InstagramUserReelsReel(BaseModel):
    model_config = ConfigDict(extra="allow")

    caption: str = Field(description="Populated whenever the provider returns data.")
    comments: int
    id: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    shortcode: str = Field(description="Populated whenever the provider returns data.")
    takenAt: int
    views: int


class InstagramNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def audio_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramAudioReelsInput],
    ) -> RunResult[InstagramAudioReelsData]:
        """Instagram Reels by Audio

        List Instagram reels that use a given audio track by audio id, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.audio_reels(audioId="1392969992841787")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.audio_reels", dict(input), options
        )
        return RunResult[InstagramAudioReelsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_audio_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramAudioReelsInput],
    ) -> Paginator[InstagramAudioReelsReel, InstagramAudioReelsData]:
        """Iterate Instagram Reels by Audio results, following pagination cursors.

        Yields flattened items from the `reels` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "instagram.audio_reels", dict(input), "reels", options=options
        )

    def basic_profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramBasicProfileInput],
    ) -> RunResult[InstagramBasicProfileData]:
        """Instagram Basic Profile

        Fetch an Instagram account's core public profile fields (followers, posts,
        bio, verification) by user id, normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.basic_profile(userId="314216")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.basic_profile", dict(input), options
        )
        return RunResult[InstagramBasicProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def embed(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramEmbedInput],
    ) -> RunResult[InstagramEmbedData]:
        """Instagram Profile Embed

        Fetch the public embed HTML for an Instagram profile by handle, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.embed(handle="nasa")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.embed", dict(input), options
        )
        return RunResult[InstagramEmbedData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowersInput],
    ) -> RunResult[InstagramFollowersData]:
        """Instagram Followers

        List the followers of any public Instagram account by username - follower
        usernames, names, and profile details - at a flat per-request USD price.

        Price: $0.01625 per request.

        Example:
            res = client.instagram.followers(limit=50, username="nasa")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.followers", dict(input), options
        )
        return RunResult[InstagramFollowersData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowersInput],
    ) -> Paginator[InstagramFollowersItem, InstagramFollowersData]:
        """Iterate Instagram Followers results, following pagination cursors.

        Yields flattened items from the `items` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "instagram.followers", dict(input), "items", options=options
        )

    def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowingInput],
    ) -> RunResult[InstagramFollowingData]:
        """Instagram Following

        List the accounts a public Instagram user follows - usernames, names, and
        profile details - at a flat per-request USD price.

        Price: $0.01625 per request.

        Example:
            res = client.instagram.following(limit=50, username="nasa")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.following", dict(input), options
        )
        return RunResult[InstagramFollowingData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowingInput],
    ) -> Paginator[InstagramFollowingItem, InstagramFollowingData]:
        """Iterate Instagram Following results, following pagination cursors.

        Yields flattened items from the `items` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "instagram.following", dict(input), "items", options=options
        )

    def hashtag_analytics(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagAnalyticsInput],
    ) -> RunResult[InstagramHashtagAnalyticsData]:
        """Instagram Hashtag Analytics

        Get analytics for any Instagram hashtag - total post count, related
        hashtags, and usage signals - normalized and priced per request in USD.

        Price: $0.0017 per result.

        Example:
            res = client.instagram.hashtag_analytics(hashtag="travel", limit=5)
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.hashtag_analytics", dict(input), options
        )
        return RunResult[InstagramHashtagAnalyticsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def highlight_detail(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHighlightDetailInput],
    ) -> RunResult[InstagramHighlightDetailData]:
        """Instagram Highlight Detail

        Fetch the details and media items of a single Instagram story highlight by
        id, normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.highlight_detail(id="18201653992314974")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.highlight_detail", dict(input), options
        )
        return RunResult[InstagramHighlightDetailData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def media_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramMediaTranscriptInput],
    ) -> RunResult[InstagramMediaTranscriptData]:
        """Instagram Media Transcript

        Get the spoken-audio transcript text for an Instagram post or reel by URL,
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.media_transcript(url="https://www.instagram.com/reel/DHsD6HGqJhp/")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.media_transcript", dict(input), options
        )
        return RunResult[InstagramMediaTranscriptData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostInput],
    ) -> RunResult[InstagramPostData]:
        """Instagram Post

        Fetch a single Instagram post or reel by URL (media URLs, like count, owner,
        type) as normalized JSON, across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.post(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.post", dict(input), options
        )
        return RunResult[InstagramPostData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostCommentsInput],
    ) -> RunResult[InstagramPostCommentsData]:
        """Instagram Post Comments

        List the comments on an Instagram post or reel by URL with cursor pagination
        (text, author, likes), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.instagram.post_comments(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.post_comments", dict(input), options
        )
        return RunResult[InstagramPostCommentsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramProfileInput],
    ) -> RunResult[InstagramProfileData]:
        """Instagram Profile

        Fetch an Instagram account's public profile (followers, posts, bio,
        verification) by handle, normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.profile(handle="nasa")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.profile", dict(input), options
        )
        return RunResult[InstagramProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def reel_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramReelTranscriptInput],
    ) -> RunResult[InstagramReelTranscriptData]:
        """Instagram Reel Transcript

        Turn any public Instagram reel or video post into a full speech transcript,
        with optional word-level timestamps - priced per request in USD.

        Price: $0.02 per result.

        Example:
            res = client.instagram.reel_transcript(url="https://www.instagram.com/reel/DWzrfE2kaY8/", wordTimestamps=False)
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.reel_transcript", dict(input), options
        )
        return RunResult[InstagramReelTranscriptData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def reels_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramReelsSearchInput],
    ) -> RunResult[InstagramReelsSearchData]:
        """Instagram Reels Search

        Search Instagram Reels by keyword and get matching reels - caption, views,
        likes, creator, and duration - normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.reels_search(query="travel")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.reels_search", dict(input), options
        )
        return RunResult[InstagramReelsSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchInput],
    ) -> RunResult[InstagramSearchData]:
        """Instagram Search

        Search Instagram for users, hashtags, or places by keyword and get matching
        results with names, counts, and links - flat per-request USD pricing.

        Price: $0.00325 per request.

        Example:
            res = client.instagram.search(query="nasa")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.search", dict(input), options
        )
        return RunResult[InstagramSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchHashtagInput],
    ) -> RunResult[InstagramSearchHashtagData]:
        """Instagram Hashtag Search

        List recent Instagram posts under a hashtag (caption, type, media URL),
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.search_hashtag(hashtag="travel")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_hashtag", dict(input), options
        )
        return RunResult[InstagramSearchHashtagData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchProfilesInput],
    ) -> RunResult[InstagramSearchProfilesData]:
        """Instagram Profile Search

        Search public Instagram profiles by a bio or caption keyword, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.search_profiles(query="coffee roaster")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_profiles", dict(input), options
        )
        return RunResult[InstagramSearchProfilesData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchProfilesInput],
    ) -> Paginator[InstagramSearchProfilesProfile, InstagramSearchProfilesData]:
        """Iterate Instagram Profile Search results, following pagination cursors.

        Yields flattened items from the `profiles` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.search_profiles",
            dict(input),
            "profiles",
            options=options,
        )

    def stories_full(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramStoriesFullInput],
    ) -> RunResult[InstagramStoriesFullData]:
        """Instagram Stories (full)

        Fetch public Instagram accounts' currently live stories with the full record
        - media (image and video), type, dimensions, posting time, 24h expiry, and
        caption. Priced per username (a flat run fee is shared across the batch), so
        request several at once to lower the cost per account. Up to 100 usernames
        per request.

        Price: $0.003 per username.

        Example:
            res = client.instagram.stories_full(usernames=["natgeo"])
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.stories_full", dict(input), options
        )
        return RunResult[InstagramStoriesFullData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def stories_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramStoriesThinInput],
    ) -> RunResult[InstagramStoriesThinData]:
        """Instagram Stories (basic)

        Fetch a public Instagram account's currently live stories - media URL,
        owner, and posting time - by username. Lightweight projection; for media
        type, dimensions, and the 24h expiry time use instagram.stories_full.

        Price: $0.01625 per request.

        Example:
            res = client.instagram.stories_thin(username="natgeo")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.stories_thin", dict(input), options
        )
        return RunResult[InstagramStoriesThinData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def trending_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramTrendingReelsInput],
    ) -> RunResult[InstagramTrendingReelsData]:
        """Instagram Trending Reels

        List currently trending Instagram reels, normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.trending_reels()
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.trending_reels", dict(input), options
        )
        return RunResult[InstagramTrendingReelsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def user_highlights(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserHighlightsInput],
    ) -> RunResult[InstagramUserHighlightsData]:
        """Instagram User Highlights

        List an Instagram account's story highlight reels by handle, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.user_highlights(handle="nasa")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_highlights", dict(input), options
        )
        return RunResult[InstagramUserHighlightsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserPostsInput],
    ) -> RunResult[InstagramUserPostsData]:
        """Instagram User Posts

        List an Instagram account's recent posts (likes, comments, captions) by
        handle with cursor pagination, normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.instagram.user_posts(handle="nasa")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_posts", dict(input), options
        )
        return RunResult[InstagramUserPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserPostsInput],
    ) -> Paginator[InstagramUserPostsPost, InstagramUserPostsData]:
        """Iterate Instagram User Posts results, following pagination cursors.

        Yields flattened items from the `posts` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "instagram.user_posts", dict(input), "posts", options=options
        )

    def user_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserReelsInput],
    ) -> RunResult[InstagramUserReelsData]:
        """Instagram User Reels

        List an Instagram account's reels by handle with cursor pagination (caption,
        plays, likes, comments), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.instagram.user_reels(handle="nasa")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_reels", dict(input), options
        )
        return RunResult[InstagramUserReelsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserReelsInput],
    ) -> Paginator[InstagramUserReelsReel, InstagramUserReelsData]:
        """Iterate Instagram User Reels results, following pagination cursors.

        Yields flattened items from the `reels` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "instagram.user_reels", dict(input), "reels", options=options
        )


class AsyncInstagramNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def audio_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramAudioReelsInput],
    ) -> RunResult[InstagramAudioReelsData]:
        """Instagram Reels by Audio

        List Instagram reels that use a given audio track by audio id, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.audio_reels(audioId="1392969992841787")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.audio_reels", dict(input), options
        )
        return RunResult[InstagramAudioReelsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_audio_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramAudioReelsInput],
    ) -> AsyncPaginator[InstagramAudioReelsReel, InstagramAudioReelsData]:
        """Iterate Instagram Reels by Audio results, following pagination cursors.

        Yields flattened items from the `reels` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "instagram.audio_reels", dict(input), "reels", options=options
        )

    async def basic_profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramBasicProfileInput],
    ) -> RunResult[InstagramBasicProfileData]:
        """Instagram Basic Profile

        Fetch an Instagram account's core public profile fields (followers, posts,
        bio, verification) by user id, normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.basic_profile(userId="314216")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.basic_profile", dict(input), options
        )
        return RunResult[InstagramBasicProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def embed(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramEmbedInput],
    ) -> RunResult[InstagramEmbedData]:
        """Instagram Profile Embed

        Fetch the public embed HTML for an Instagram profile by handle, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.embed(handle="nasa")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.embed", dict(input), options
        )
        return RunResult[InstagramEmbedData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowersInput],
    ) -> RunResult[InstagramFollowersData]:
        """Instagram Followers

        List the followers of any public Instagram account by username - follower
        usernames, names, and profile details - at a flat per-request USD price.

        Price: $0.01625 per request.

        Example:
            res = client.instagram.followers(limit=50, username="nasa")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.followers", dict(input), options
        )
        return RunResult[InstagramFollowersData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowersInput],
    ) -> AsyncPaginator[InstagramFollowersItem, InstagramFollowersData]:
        """Iterate Instagram Followers results, following pagination cursors.

        Yields flattened items from the `items` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "instagram.followers", dict(input), "items", options=options
        )

    async def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowingInput],
    ) -> RunResult[InstagramFollowingData]:
        """Instagram Following

        List the accounts a public Instagram user follows - usernames, names, and
        profile details - at a flat per-request USD price.

        Price: $0.01625 per request.

        Example:
            res = client.instagram.following(limit=50, username="nasa")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.following", dict(input), options
        )
        return RunResult[InstagramFollowingData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowingInput],
    ) -> AsyncPaginator[InstagramFollowingItem, InstagramFollowingData]:
        """Iterate Instagram Following results, following pagination cursors.

        Yields flattened items from the `items` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "instagram.following", dict(input), "items", options=options
        )

    async def hashtag_analytics(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagAnalyticsInput],
    ) -> RunResult[InstagramHashtagAnalyticsData]:
        """Instagram Hashtag Analytics

        Get analytics for any Instagram hashtag - total post count, related
        hashtags, and usage signals - normalized and priced per request in USD.

        Price: $0.0017 per result.

        Example:
            res = client.instagram.hashtag_analytics(hashtag="travel", limit=5)
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.hashtag_analytics", dict(input), options
        )
        return RunResult[InstagramHashtagAnalyticsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def highlight_detail(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHighlightDetailInput],
    ) -> RunResult[InstagramHighlightDetailData]:
        """Instagram Highlight Detail

        Fetch the details and media items of a single Instagram story highlight by
        id, normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.highlight_detail(id="18201653992314974")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.highlight_detail", dict(input), options
        )
        return RunResult[InstagramHighlightDetailData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def media_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramMediaTranscriptInput],
    ) -> RunResult[InstagramMediaTranscriptData]:
        """Instagram Media Transcript

        Get the spoken-audio transcript text for an Instagram post or reel by URL,
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.media_transcript(url="https://www.instagram.com/reel/DHsD6HGqJhp/")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.media_transcript", dict(input), options
        )
        return RunResult[InstagramMediaTranscriptData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostInput],
    ) -> RunResult[InstagramPostData]:
        """Instagram Post

        Fetch a single Instagram post or reel by URL (media URLs, like count, owner,
        type) as normalized JSON, across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.post(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.post", dict(input), options
        )
        return RunResult[InstagramPostData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostCommentsInput],
    ) -> RunResult[InstagramPostCommentsData]:
        """Instagram Post Comments

        List the comments on an Instagram post or reel by URL with cursor pagination
        (text, author, likes), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.instagram.post_comments(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.post_comments", dict(input), options
        )
        return RunResult[InstagramPostCommentsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramProfileInput],
    ) -> RunResult[InstagramProfileData]:
        """Instagram Profile

        Fetch an Instagram account's public profile (followers, posts, bio,
        verification) by handle, normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.profile(handle="nasa")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.profile", dict(input), options
        )
        return RunResult[InstagramProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def reel_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramReelTranscriptInput],
    ) -> RunResult[InstagramReelTranscriptData]:
        """Instagram Reel Transcript

        Turn any public Instagram reel or video post into a full speech transcript,
        with optional word-level timestamps - priced per request in USD.

        Price: $0.02 per result.

        Example:
            res = client.instagram.reel_transcript(url="https://www.instagram.com/reel/DWzrfE2kaY8/", wordTimestamps=False)
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.reel_transcript", dict(input), options
        )
        return RunResult[InstagramReelTranscriptData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def reels_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramReelsSearchInput],
    ) -> RunResult[InstagramReelsSearchData]:
        """Instagram Reels Search

        Search Instagram Reels by keyword and get matching reels - caption, views,
        likes, creator, and duration - normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.reels_search(query="travel")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.reels_search", dict(input), options
        )
        return RunResult[InstagramReelsSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchInput],
    ) -> RunResult[InstagramSearchData]:
        """Instagram Search

        Search Instagram for users, hashtags, or places by keyword and get matching
        results with names, counts, and links - flat per-request USD pricing.

        Price: $0.00325 per request.

        Example:
            res = client.instagram.search(query="nasa")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.search", dict(input), options
        )
        return RunResult[InstagramSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchHashtagInput],
    ) -> RunResult[InstagramSearchHashtagData]:
        """Instagram Hashtag Search

        List recent Instagram posts under a hashtag (caption, type, media URL),
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.search_hashtag(hashtag="travel")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_hashtag", dict(input), options
        )
        return RunResult[InstagramSearchHashtagData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchProfilesInput],
    ) -> RunResult[InstagramSearchProfilesData]:
        """Instagram Profile Search

        Search public Instagram profiles by a bio or caption keyword, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.search_profiles(query="coffee roaster")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_profiles", dict(input), options
        )
        return RunResult[InstagramSearchProfilesData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchProfilesInput],
    ) -> AsyncPaginator[InstagramSearchProfilesProfile, InstagramSearchProfilesData]:
        """Iterate Instagram Profile Search results, following pagination cursors.

        Yields flattened items from the `profiles` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.search_profiles",
            dict(input),
            "profiles",
            options=options,
        )

    async def stories_full(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramStoriesFullInput],
    ) -> RunResult[InstagramStoriesFullData]:
        """Instagram Stories (full)

        Fetch public Instagram accounts' currently live stories with the full record
        - media (image and video), type, dimensions, posting time, 24h expiry, and
        caption. Priced per username (a flat run fee is shared across the batch), so
        request several at once to lower the cost per account. Up to 100 usernames
        per request.

        Price: $0.003 per username.

        Example:
            res = client.instagram.stories_full(usernames=["natgeo"])
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.stories_full", dict(input), options
        )
        return RunResult[InstagramStoriesFullData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def stories_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramStoriesThinInput],
    ) -> RunResult[InstagramStoriesThinData]:
        """Instagram Stories (basic)

        Fetch a public Instagram account's currently live stories - media URL,
        owner, and posting time - by username. Lightweight projection; for media
        type, dimensions, and the 24h expiry time use instagram.stories_full.

        Price: $0.01625 per request.

        Example:
            res = client.instagram.stories_thin(username="natgeo")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.stories_thin", dict(input), options
        )
        return RunResult[InstagramStoriesThinData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def trending_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramTrendingReelsInput],
    ) -> RunResult[InstagramTrendingReelsData]:
        """Instagram Trending Reels

        List currently trending Instagram reels, normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.trending_reels()
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.trending_reels", dict(input), options
        )
        return RunResult[InstagramTrendingReelsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def user_highlights(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserHighlightsInput],
    ) -> RunResult[InstagramUserHighlightsData]:
        """Instagram User Highlights

        List an Instagram account's story highlight reels by handle, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.user_highlights(handle="nasa")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_highlights", dict(input), options
        )
        return RunResult[InstagramUserHighlightsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserPostsInput],
    ) -> RunResult[InstagramUserPostsData]:
        """Instagram User Posts

        List an Instagram account's recent posts (likes, comments, captions) by
        handle with cursor pagination, normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.instagram.user_posts(handle="nasa")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_posts", dict(input), options
        )
        return RunResult[InstagramUserPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserPostsInput],
    ) -> AsyncPaginator[InstagramUserPostsPost, InstagramUserPostsData]:
        """Iterate Instagram User Posts results, following pagination cursors.

        Yields flattened items from the `posts` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "instagram.user_posts", dict(input), "posts", options=options
        )

    async def user_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserReelsInput],
    ) -> RunResult[InstagramUserReelsData]:
        """Instagram User Reels

        List an Instagram account's reels by handle with cursor pagination (caption,
        plays, likes, comments), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.instagram.user_reels(handle="nasa")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_reels", dict(input), options
        )
        return RunResult[InstagramUserReelsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserReelsInput],
    ) -> AsyncPaginator[InstagramUserReelsReel, InstagramUserReelsData]:
        """Iterate Instagram User Reels results, following pagination cursors.

        Yields flattened items from the `reels` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "instagram.user_reels", dict(input), "reels", options=options
        )
