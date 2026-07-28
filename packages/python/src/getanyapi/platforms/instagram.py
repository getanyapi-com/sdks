# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the instagram platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    datePosted: NotRequired[
        Literal["last-hour", "last-day", "last-week", "last-month", "last-year"]
    ]
    """Restrict results to posts published within this window."""
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
    model_config = ConfigDict(extra="allow")


class InstagramBasicProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramEmbedData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramFollowersData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramFollowingData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramHashtagAnalyticsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramHighlightDetailData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramMediaTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramPostData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramPostCommentsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramReelTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramReelsSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramSearchHashtagData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramSearchProfilesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramStoriesFullData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramStoriesThinData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramTrendingReelsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramUserHighlightsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramUserPostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramUserReelsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class InstagramNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def audio_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramAudioReelsInput],
    ) -> BareRunResult[InstagramAudioReelsData]:
        """Instagram Reels by Audio

        List Instagram reels that use a given audio track by audio id, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.audio_reels(audioId="1392969992841787")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.audio_reels", dict(input), options
        )
        return BareRunResult[InstagramAudioReelsData].model_validate(raw)

    def basic_profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramBasicProfileInput],
    ) -> BareRunResult[InstagramBasicProfileData]:
        """Instagram Basic Profile

        Fetch an Instagram account's core public profile fields (followers, posts,
        bio, verification) by user id, normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.basic_profile(userId="314216")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.basic_profile", dict(input), options
        )
        return BareRunResult[InstagramBasicProfileData].model_validate(raw)

    def embed(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramEmbedInput],
    ) -> BareRunResult[InstagramEmbedData]:
        """Instagram Profile Embed

        Fetch the public embed HTML for an Instagram profile by handle, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.embed(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.embed", dict(input), options
        )
        return BareRunResult[InstagramEmbedData].model_validate(raw)

    def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowersInput],
    ) -> BareRunResult[InstagramFollowersData]:
        """Instagram Followers

        List the followers of any public Instagram account by username: follower
        usernames, names, and profile details.

        Price: $0.01625 per request.

        Example:
            res = client.instagram.followers(limit=50, username="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.followers", dict(input), options
        )
        return BareRunResult[InstagramFollowersData].model_validate(raw)

    def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowingInput],
    ) -> BareRunResult[InstagramFollowingData]:
        """Instagram Following

        List the accounts a public Instagram user follows: usernames, names, and
        profile details.

        Price: $0.01625 per request.

        Example:
            res = client.instagram.following(limit=50, username="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.following", dict(input), options
        )
        return BareRunResult[InstagramFollowingData].model_validate(raw)

    def hashtag_analytics(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagAnalyticsInput],
    ) -> BareRunResult[InstagramHashtagAnalyticsData]:
        """Instagram Hashtag Analytics

        Get analytics for any Instagram hashtag (total post count, related hashtags,
        and usage signals), normalized.

        Price: $0.001 per request plus $0.0017 per result (maximum $0.035).

        Example:
            res = client.instagram.hashtag_analytics(hashtag="travel", limit=5)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.hashtag_analytics", dict(input), options
        )
        return BareRunResult[InstagramHashtagAnalyticsData].model_validate(raw)

    def highlight_detail(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHighlightDetailInput],
    ) -> BareRunResult[InstagramHighlightDetailData]:
        """Instagram Highlight Detail

        Fetch the details and media items of a single Instagram story highlight by
        id, normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.highlight_detail(id="18201653992314974")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.highlight_detail", dict(input), options
        )
        return BareRunResult[InstagramHighlightDetailData].model_validate(raw)

    def media_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramMediaTranscriptInput],
    ) -> BareRunResult[InstagramMediaTranscriptData]:
        """Instagram Media Transcript

        Get the spoken-audio transcript text for an Instagram post or reel by URL,
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.media_transcript(url="https://www.instagram.com/reel/DHsD6HGqJhp/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.media_transcript", dict(input), options
        )
        return BareRunResult[InstagramMediaTranscriptData].model_validate(raw)

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostInput],
    ) -> BareRunResult[InstagramPostData]:
        """Instagram Post

        Fetch a single Instagram post or reel by URL (media URLs, like count, owner,
        type) as normalized JSON, across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.post(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.post", dict(input), options
        )
        return BareRunResult[InstagramPostData].model_validate(raw)

    def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostCommentsInput],
    ) -> BareRunResult[InstagramPostCommentsData]:
        """Instagram Post Comments

        List the comments on an Instagram post or reel by URL with cursor pagination
        (text, author, likes), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.instagram.post_comments(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.post_comments", dict(input), options
        )
        return BareRunResult[InstagramPostCommentsData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramProfileInput],
    ) -> BareRunResult[InstagramProfileData]:
        """Instagram Profile

        Fetch an Instagram account's public profile (followers, posts, bio,
        verification) by handle, normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.profile(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.profile", dict(input), options
        )
        return BareRunResult[InstagramProfileData].model_validate(raw)

    def reel_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramReelTranscriptInput],
    ) -> BareRunResult[InstagramReelTranscriptData]:
        """Instagram Reel Transcript

        Turn any public Instagram reel or video post into a full speech transcript,
        with optional word-level timestamps.

        Price: $0.005 per request plus $0.02 per result (maximum $0.025).

        Example:
            res = client.instagram.reel_transcript(url="https://www.instagram.com/reel/DWzrfE2kaY8/", wordTimestamps=False)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.reel_transcript", dict(input), options
        )
        return BareRunResult[InstagramReelTranscriptData].model_validate(raw)

    def reels_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramReelsSearchInput],
    ) -> BareRunResult[InstagramReelsSearchData]:
        """Instagram Reels Search

        Search Instagram Reels by keyword and get matching reels (caption, views,
        likes, creator, and duration), normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.reels_search(query="travel")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.reels_search", dict(input), options
        )
        return BareRunResult[InstagramReelsSearchData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchInput],
    ) -> BareRunResult[InstagramSearchData]:
        """Instagram Search

        Search Instagram for users, hashtags, or places by keyword and get matching
        results with names, counts, and links.

        Price: $0.00325 per request.

        Example:
            res = client.instagram.search(query="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search", dict(input), options
        )
        return BareRunResult[InstagramSearchData].model_validate(raw)

    def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchHashtagInput],
    ) -> BareRunResult[InstagramSearchHashtagData]:
        """Instagram Hashtag Search

        List recent Instagram posts under a hashtag (caption, type, media URL),
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.search_hashtag(hashtag="travel")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_hashtag", dict(input), options
        )
        return BareRunResult[InstagramSearchHashtagData].model_validate(raw)

    def search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchProfilesInput],
    ) -> BareRunResult[InstagramSearchProfilesData]:
        """Instagram Profile Search

        Search public Instagram profiles by a bio or caption keyword, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.search_profiles(query="coffee roaster")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_profiles", dict(input), options
        )
        return BareRunResult[InstagramSearchProfilesData].model_validate(raw)

    def stories_full(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramStoriesFullInput],
    ) -> BareRunResult[InstagramStoriesFullData]:
        """Instagram Stories (full)

        Fetch public Instagram accounts' currently live stories with the full record
        - media (image and video), type, dimensions, posting time, 24h expiry, and
        caption. Up to 100 usernames per request.

        Price: $0.099 per request plus $0.003 per username (maximum $0.102).

        Example:
            res = client.instagram.stories_full(usernames=["natgeo"])
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.stories_full", dict(input), options
        )
        return BareRunResult[InstagramStoriesFullData].model_validate(raw)

    def stories_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramStoriesThinInput],
    ) -> BareRunResult[InstagramStoriesThinData]:
        """Instagram Stories (basic)

        Fetch a public Instagram account's currently live stories - media URL,
        owner, and posting time - by username. Lightweight projection; for media
        type, dimensions, and the 24h expiry time use instagram.stories_full.

        Price: $0.01625 per request.

        Example:
            res = client.instagram.stories_thin(username="natgeo")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.stories_thin", dict(input), options
        )
        return BareRunResult[InstagramStoriesThinData].model_validate(raw)

    def trending_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramTrendingReelsInput],
    ) -> BareRunResult[InstagramTrendingReelsData]:
        """Instagram Trending Reels

        List currently trending Instagram reels, normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.trending_reels()
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.trending_reels", dict(input), options
        )
        return BareRunResult[InstagramTrendingReelsData].model_validate(raw)

    def user_highlights(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserHighlightsInput],
    ) -> BareRunResult[InstagramUserHighlightsData]:
        """Instagram User Highlights

        List an Instagram account's story highlight reels by handle, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.user_highlights(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_highlights", dict(input), options
        )
        return BareRunResult[InstagramUserHighlightsData].model_validate(raw)

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserPostsInput],
    ) -> BareRunResult[InstagramUserPostsData]:
        """Instagram User Posts

        List an Instagram account's recent posts (likes, comments, captions) by
        handle with cursor pagination, normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.instagram.user_posts(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_posts", dict(input), options
        )
        return BareRunResult[InstagramUserPostsData].model_validate(raw)

    def user_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserReelsInput],
    ) -> BareRunResult[InstagramUserReelsData]:
        """Instagram User Reels

        List an Instagram account's reels by handle with cursor pagination (caption,
        plays, likes, comments), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.instagram.user_reels(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_reels", dict(input), options
        )
        return BareRunResult[InstagramUserReelsData].model_validate(raw)


class AsyncInstagramNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def audio_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramAudioReelsInput],
    ) -> BareRunResult[InstagramAudioReelsData]:
        """Instagram Reels by Audio

        List Instagram reels that use a given audio track by audio id, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.audio_reels(audioId="1392969992841787")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.audio_reels", dict(input), options
        )
        return BareRunResult[InstagramAudioReelsData].model_validate(raw)

    async def basic_profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramBasicProfileInput],
    ) -> BareRunResult[InstagramBasicProfileData]:
        """Instagram Basic Profile

        Fetch an Instagram account's core public profile fields (followers, posts,
        bio, verification) by user id, normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.basic_profile(userId="314216")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.basic_profile", dict(input), options
        )
        return BareRunResult[InstagramBasicProfileData].model_validate(raw)

    async def embed(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramEmbedInput],
    ) -> BareRunResult[InstagramEmbedData]:
        """Instagram Profile Embed

        Fetch the public embed HTML for an Instagram profile by handle, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.embed(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.embed", dict(input), options
        )
        return BareRunResult[InstagramEmbedData].model_validate(raw)

    async def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowersInput],
    ) -> BareRunResult[InstagramFollowersData]:
        """Instagram Followers

        List the followers of any public Instagram account by username: follower
        usernames, names, and profile details.

        Price: $0.01625 per request.

        Example:
            res = client.instagram.followers(limit=50, username="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.followers", dict(input), options
        )
        return BareRunResult[InstagramFollowersData].model_validate(raw)

    async def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowingInput],
    ) -> BareRunResult[InstagramFollowingData]:
        """Instagram Following

        List the accounts a public Instagram user follows: usernames, names, and
        profile details.

        Price: $0.01625 per request.

        Example:
            res = client.instagram.following(limit=50, username="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.following", dict(input), options
        )
        return BareRunResult[InstagramFollowingData].model_validate(raw)

    async def hashtag_analytics(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagAnalyticsInput],
    ) -> BareRunResult[InstagramHashtagAnalyticsData]:
        """Instagram Hashtag Analytics

        Get analytics for any Instagram hashtag (total post count, related hashtags,
        and usage signals), normalized.

        Price: $0.001 per request plus $0.0017 per result (maximum $0.035).

        Example:
            res = client.instagram.hashtag_analytics(hashtag="travel", limit=5)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.hashtag_analytics", dict(input), options
        )
        return BareRunResult[InstagramHashtagAnalyticsData].model_validate(raw)

    async def highlight_detail(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHighlightDetailInput],
    ) -> BareRunResult[InstagramHighlightDetailData]:
        """Instagram Highlight Detail

        Fetch the details and media items of a single Instagram story highlight by
        id, normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.highlight_detail(id="18201653992314974")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.highlight_detail", dict(input), options
        )
        return BareRunResult[InstagramHighlightDetailData].model_validate(raw)

    async def media_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramMediaTranscriptInput],
    ) -> BareRunResult[InstagramMediaTranscriptData]:
        """Instagram Media Transcript

        Get the spoken-audio transcript text for an Instagram post or reel by URL,
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.media_transcript(url="https://www.instagram.com/reel/DHsD6HGqJhp/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.media_transcript", dict(input), options
        )
        return BareRunResult[InstagramMediaTranscriptData].model_validate(raw)

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostInput],
    ) -> BareRunResult[InstagramPostData]:
        """Instagram Post

        Fetch a single Instagram post or reel by URL (media URLs, like count, owner,
        type) as normalized JSON, across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.post(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.post", dict(input), options
        )
        return BareRunResult[InstagramPostData].model_validate(raw)

    async def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostCommentsInput],
    ) -> BareRunResult[InstagramPostCommentsData]:
        """Instagram Post Comments

        List the comments on an Instagram post or reel by URL with cursor pagination
        (text, author, likes), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.instagram.post_comments(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.post_comments", dict(input), options
        )
        return BareRunResult[InstagramPostCommentsData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramProfileInput],
    ) -> BareRunResult[InstagramProfileData]:
        """Instagram Profile

        Fetch an Instagram account's public profile (followers, posts, bio,
        verification) by handle, normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.profile(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.profile", dict(input), options
        )
        return BareRunResult[InstagramProfileData].model_validate(raw)

    async def reel_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramReelTranscriptInput],
    ) -> BareRunResult[InstagramReelTranscriptData]:
        """Instagram Reel Transcript

        Turn any public Instagram reel or video post into a full speech transcript,
        with optional word-level timestamps.

        Price: $0.005 per request plus $0.02 per result (maximum $0.025).

        Example:
            res = client.instagram.reel_transcript(url="https://www.instagram.com/reel/DWzrfE2kaY8/", wordTimestamps=False)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.reel_transcript", dict(input), options
        )
        return BareRunResult[InstagramReelTranscriptData].model_validate(raw)

    async def reels_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramReelsSearchInput],
    ) -> BareRunResult[InstagramReelsSearchData]:
        """Instagram Reels Search

        Search Instagram Reels by keyword and get matching reels (caption, views,
        likes, creator, and duration), normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.reels_search(query="travel")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.reels_search", dict(input), options
        )
        return BareRunResult[InstagramReelsSearchData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchInput],
    ) -> BareRunResult[InstagramSearchData]:
        """Instagram Search

        Search Instagram for users, hashtags, or places by keyword and get matching
        results with names, counts, and links.

        Price: $0.00325 per request.

        Example:
            res = client.instagram.search(query="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search", dict(input), options
        )
        return BareRunResult[InstagramSearchData].model_validate(raw)

    async def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchHashtagInput],
    ) -> BareRunResult[InstagramSearchHashtagData]:
        """Instagram Hashtag Search

        List recent Instagram posts under a hashtag (caption, type, media URL),
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.search_hashtag(hashtag="travel")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_hashtag", dict(input), options
        )
        return BareRunResult[InstagramSearchHashtagData].model_validate(raw)

    async def search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchProfilesInput],
    ) -> BareRunResult[InstagramSearchProfilesData]:
        """Instagram Profile Search

        Search public Instagram profiles by a bio or caption keyword, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.search_profiles(query="coffee roaster")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_profiles", dict(input), options
        )
        return BareRunResult[InstagramSearchProfilesData].model_validate(raw)

    async def stories_full(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramStoriesFullInput],
    ) -> BareRunResult[InstagramStoriesFullData]:
        """Instagram Stories (full)

        Fetch public Instagram accounts' currently live stories with the full record
        - media (image and video), type, dimensions, posting time, 24h expiry, and
        caption. Up to 100 usernames per request.

        Price: $0.099 per request plus $0.003 per username (maximum $0.102).

        Example:
            res = client.instagram.stories_full(usernames=["natgeo"])
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.stories_full", dict(input), options
        )
        return BareRunResult[InstagramStoriesFullData].model_validate(raw)

    async def stories_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramStoriesThinInput],
    ) -> BareRunResult[InstagramStoriesThinData]:
        """Instagram Stories (basic)

        Fetch a public Instagram account's currently live stories - media URL,
        owner, and posting time - by username. Lightweight projection; for media
        type, dimensions, and the 24h expiry time use instagram.stories_full.

        Price: $0.01625 per request.

        Example:
            res = client.instagram.stories_thin(username="natgeo")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.stories_thin", dict(input), options
        )
        return BareRunResult[InstagramStoriesThinData].model_validate(raw)

    async def trending_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramTrendingReelsInput],
    ) -> BareRunResult[InstagramTrendingReelsData]:
        """Instagram Trending Reels

        List currently trending Instagram reels, normalized across providers with
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.trending_reels()
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.trending_reels", dict(input), options
        )
        return BareRunResult[InstagramTrendingReelsData].model_validate(raw)

    async def user_highlights(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserHighlightsInput],
    ) -> BareRunResult[InstagramUserHighlightsData]:
        """Instagram User Highlights

        List an Instagram account's story highlight reels by handle, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.instagram.user_highlights(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_highlights", dict(input), options
        )
        return BareRunResult[InstagramUserHighlightsData].model_validate(raw)

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserPostsInput],
    ) -> BareRunResult[InstagramUserPostsData]:
        """Instagram User Posts

        List an Instagram account's recent posts (likes, comments, captions) by
        handle with cursor pagination, normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.instagram.user_posts(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_posts", dict(input), options
        )
        return BareRunResult[InstagramUserPostsData].model_validate(raw)

    async def user_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserReelsInput],
    ) -> BareRunResult[InstagramUserReelsData]:
        """Instagram User Reels

        List an Instagram account's reels by handle with cursor pagination (caption,
        plays, likes, comments), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.instagram.user_reels(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_reels", dict(input), options
        )
        return BareRunResult[InstagramUserReelsData].model_validate(raw)
