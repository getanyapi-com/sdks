# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the facebook platform."""

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


class FacebookAdDetailsInput(TypedDict, total=False):
    """Input for Facebook Ad Details."""

    id: NotRequired[str]
    """Meta Ad Library ad ID (e.g. "702369045530963"). Provide either id or url."""
    url: NotRequired[str]
    """Meta Ad Library ad URL (e.g. "https://www.facebook.com/ads/library?id=1185617869915074"). Provide either id or url."""


class FacebookAdTranscriptInput(TypedDict, total=False):
    """Input for Facebook Ad Transcript."""

    id: NotRequired[str]
    """Meta Ad Library ad ID (e.g. "1020359190509080"). Provide either id or url."""
    url: NotRequired[str]
    """Meta Ad Library ad URL (e.g. "https://www.facebook.com/ads/library?id=1020359190509080"). Provide either id or url."""


class FacebookAdsSearchInput(TypedDict, total=False):
    """Input for Facebook Ad Search."""

    country: NotRequired[str]
    """Two-letter country code to scope results. Omit for all countries."""
    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor."""
    mediaType: NotRequired[
        Literal["ALL", "IMAGE", "VIDEO", "MEME", "IMAGE_AND_MEME", "NONE"]
    ]
    """Creative media type filter."""
    query: Required[str]
    """Keyword to search the Meta Ad Library for (e.g. "protein powder")."""
    status: NotRequired[Literal["ALL", "ACTIVE", "INACTIVE"]]
    """Ad status filter. Default: ACTIVE."""


class FacebookCommentRepliesInput(TypedDict, total=False):
    """Input for Facebook Comment Replies."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    expansionToken: Required[str]
    """The expansion_token of the comment, from the post comments endpoint."""
    feedbackId: Required[str]
    """The feedback_id of the comment (not the comment id)."""


class FacebookCompanyAdsInput(TypedDict, total=False):
    """Input for Facebook Company Ads."""

    companyName: NotRequired[str]
    """Company name to search (e.g. "nike"). Provide either pageId or companyName."""
    country: NotRequired[str]
    """Two-letter country code to scope results. Defaults to all countries."""
    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor."""
    mediaType: NotRequired[
        Literal["ALL", "IMAGE", "VIDEO", "MEME", "IMAGE_AND_MEME", "NONE"]
    ]
    """Creative media type filter."""
    pageId: NotRequired[str]
    """Company's Ad Library page ID. Provide either pageId or companyName."""
    status: NotRequired[Literal["ALL", "ACTIVE", "INACTIVE"]]
    """Ad status filter. Defaults to ACTIVE."""


class FacebookEventDetailsInput(TypedDict, total=False):
    """Input for Facebook Event Details."""

    id: NotRequired[str]
    """The event's numeric identifier."""
    url: NotRequired[str]
    """The event's Facebook URL."""


class FacebookEventsInput(TypedDict, total=False):
    """Input for Facebook Events."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response to fetch the next page."""
    time: NotRequired[Literal["today", "this_week", "next_week"]]
    """Timeframe filter for the returned events. Defaults to all time."""
    url: Required[str]
    """URL of a city's or place's Facebook Events page (e.g. https://www.facebook.com/events/explore/saint-petersburg-florida/111326725552547)."""


class FacebookEventsSearchInput(TypedDict, total=False):
    """Input for Facebook Events Search."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    query: Required[str]
    """The query to search events for."""


class FacebookFollowersInput(TypedDict, total=False):
    """Input for Facebook Followers."""

    followType: NotRequired[str]
    """Which relation to fetch: 'follower' or 'following' (e.g. follower). Default: follower."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    url: Required[str]
    """Facebook page or profile URL to list follows for (e.g. https://www.facebook.com/nasa)."""


class FacebookGroupPostsInput(TypedDict, total=False):
    """Input for Facebook Group Posts."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response to fetch the next page."""
    sort: NotRequired[
        Literal[
            "TOP_POSTS", "RECENT_ACTIVITY", "CHRONOLOGICAL", "CHRONOLOGICAL_LISTINGS"
        ]
    ]
    """Ordering for the returned posts (e.g. TOP_POSTS)."""
    url: Required[str]
    """The URL of a public Facebook group to fetch posts from (e.g. https://www.facebook.com/groups/1270525996445602/)."""


class FacebookMarketplaceInput(TypedDict, total=False):
    """Input for Facebook Marketplace."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response to fetch the next page."""
    lat: Required[str]
    """Latitude of the search location (e.g. '30.2677')."""
    lng: Required[str]
    """Longitude of the search location (e.g. '-97.7475')."""
    query: Required[str]
    """Search keyword for Marketplace listings (e.g. 'bike')."""
    sort: NotRequired[
        Literal[
            "suggested",
            "distance_ascend",
            "creation_time_descend",
            "price_ascend",
            "price_descend",
        ]
    ]
    """Sort order for the returned listings (e.g. price_ascend)."""


class FacebookMarketplaceItemInput(TypedDict, total=False):
    """Input for Facebook Marketplace Item."""

    id: NotRequired[str]
    """Facebook Marketplace item ID."""
    url: NotRequired[str]
    """Facebook Marketplace item URL."""


class FacebookMarketplaceLocationSearchInput(TypedDict, total=False):
    """Input for Facebook Marketplace Location Search."""

    query: Required[str]
    """Location search query (e.g. a city name)."""


class FacebookPageContactInput(TypedDict, total=False):
    """Input for Facebook Page Contact Info."""

    language: NotRequired[str]
    """Locale code for the returned data (e.g. en-US). Default: en-US."""
    page: Required[str]
    """Facebook Page URL or page ID to look up (e.g. https://www.facebook.com/nasa)."""


class FacebookPhotosInput(TypedDict, total=False):
    """Input for Facebook Page Photos."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response to fetch the next page."""
    url: Required[str]
    """URL of the public Facebook page or profile to fetch photos from (e.g. https://www.facebook.com/Spurs)."""


class FacebookPostInput(TypedDict, total=False):
    """Input for Facebook Post."""

    url: Required[str]
    """Full Facebook post URL."""


class FacebookPostCommentsInput(TypedDict, total=False):
    """Input for Facebook Post Comments."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    feedbackId: NotRequired[str]
    """Facebook feedback id for the post (alternative to url)."""
    url: NotRequired[str]
    """Full Facebook post URL."""


class FacebookPostTranscriptInput(TypedDict, total=False):
    """Input for Facebook Post Transcript."""

    url: Required[str]
    """The Facebook post or video URL."""


class FacebookProfileInput(TypedDict, total=False):
    """Input for Facebook Profile."""

    handle: NotRequired[str]
    """Facebook page handle/username."""
    url: NotRequired[str]
    """Full Facebook page URL."""


class FacebookProfileEventsInput(TypedDict, total=False):
    """Input for Facebook Page Events."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    url: Required[str]
    """The Facebook page URL."""


class FacebookProfilePostsInput(TypedDict, total=False):
    """Input for Facebook Profile Posts."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    pageId: NotRequired[str]
    """Facebook page id."""
    url: NotRequired[str]
    """Full Facebook page/profile URL."""


class FacebookProfileReelsInput(TypedDict, total=False):
    """Input for Facebook Profile Reels."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    url: Required[str]
    """Full Facebook page/profile URL."""


class FacebookSearchCompaniesInput(TypedDict, total=False):
    """Input for Facebook Company Search."""

    query: Required[str]
    """Keyword to search advertiser pages for (e.g. "nike")."""


class FacebookSearchPagesInput(TypedDict, total=False):
    """Input for Facebook Page Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less. Range: 1 to 10."""
    location: NotRequired[str]
    """Optional free-text location to narrow the search - a city, province, or country (e.g. 'Berlin')."""
    query: Required[str]
    """Keyword to search Facebook Pages for (e.g. 'coffee roasters')."""


class FacebookSearchPostsInput(TypedDict, total=False):
    """Input for Facebook Post Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    location: NotRequired[str]
    """Optional location to narrow results; include both city and country for best matches (e.g. 'Paris, France')."""
    query: Required[str]
    """Keyword or phrase to search Facebook posts for (e.g. 'product launch')."""


class FacebookAdDetailsData(BaseModel):
    model_config = ConfigDict(extra="allow")

    active: bool | None = Field(
        default=None, description="Whether the ad is currently running."
    )
    adArchiveId: str = Field(
        description="Ad Library archive ID (stable identity). Populated whenever the provider returns data."
    )
    ctaText: str | None = Field(
        default=None,
        description="Call-to-action label. Populated whenever the provider returns data.",
    )
    currency: str | None = Field(
        default=None, description="Spend currency, may be empty."
    )
    displayFormat: str | None = Field(
        default=None,
        description="Ad creative format. Populated whenever the provider returns data.",
    )
    endDate: int | None = Field(default=None, description="Run end, epoch seconds.")
    linkUrl: str | None = Field(
        default=None,
        description="Creative destination URL. Populated whenever the provider returns data.",
    )
    pageId: str = Field(
        description="Advertiser page ID (stable identity). Populated whenever the provider returns data."
    )
    pageName: str | None = Field(
        default=None,
        description="Advertiser page name. Populated whenever the provider returns data.",
    )
    platforms: list[str] | None = Field(
        default=None,
        description="Publisher platforms the ad runs on. Populated whenever the provider returns data.",
    )
    startDate: int | None = Field(
        default=None,
        description="Run start, epoch seconds. Populated whenever the provider returns data.",
    )
    text: str | None = Field(
        default=None,
        description="Ad body text. Populated whenever the provider returns data.",
    )
    title: str | None = Field(
        default=None,
        description="Creative title. Populated whenever the provider returns data.",
    )


class FacebookAdTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")

    adId: str = Field(description="Populated whenever the provider returns data.")
    transcript: str = Field(description="Transcribed ad audio text.")
    transcriptAvailable: bool
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookAdsSearchData(BaseModel):
    ads: list[FacebookAdsSearchAd]
    nextCursor: str
    totalResults: int


class FacebookAdsSearchAd(BaseModel):
    model_config = ConfigDict(extra="allow")

    active: bool
    adCount: int = Field(
        description="Number of ads in this campaign (collation count)."
    )
    ctaText: str = Field(description="Populated whenever the provider returns data.")
    ctaType: str = Field(description="Populated whenever the provider returns data.")
    displayFormat: str = Field(
        description="Populated whenever the provider returns data."
    )
    endDate: int = Field(description="Epoch seconds.")
    id: str = Field(
        description="Ad Library archive ID. Populated whenever the provider returns data."
    )
    linkUrl: str = Field(description="Populated whenever the provider returns data.")
    pageId: str = Field(description="Populated whenever the provider returns data.")
    pageName: str = Field(description="Populated whenever the provider returns data.")
    platforms: list[str] = Field(
        description="Populated whenever the provider returns data."
    )
    startDate: int = Field(
        description="Epoch seconds. Populated whenever the provider returns data."
    )
    text: str = Field(
        description="Ad body text. Populated whenever the provider returns data."
    )
    title: str = Field(description="Populated whenever the provider returns data.")


class FacebookCommentRepliesData(BaseModel):
    hasNextPage: bool
    nextCursor: str
    replies: list[FacebookCommentRepliesReplie] = Field(
        description="Populated whenever the provider returns data."
    )


class FacebookCommentRepliesReplie(BaseModel):
    model_config = ConfigDict(extra="allow")

    authorId: str = Field(description="Populated whenever the provider returns data.")
    authorName: str = Field(description="Populated whenever the provider returns data.")
    authorProfilePicture: str
    createdAt: str = Field(description="Populated whenever the provider returns data.")
    expansionToken: str | None = None
    feedbackId: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    reactionCount: int
    replyCount: int
    text: str = Field(description="Populated whenever the provider returns data.")


class FacebookCompanyAdsData(BaseModel):
    ads: list[FacebookCompanyAdsAd]
    nextCursor: str


class FacebookCompanyAdsAd(BaseModel):
    model_config = ConfigDict(extra="allow")

    active: bool
    adCount: int = Field(
        description="Number of ads in this campaign (collation count)."
    )
    currency: str
    displayFormat: str = Field(
        description="Populated whenever the provider returns data."
    )
    endDate: int = Field(description="Epoch seconds.")
    id: str = Field(
        description="Ad Library archive ID. Populated whenever the provider returns data."
    )
    pageId: str = Field(description="Populated whenever the provider returns data.")
    pageName: str = Field(description="Populated whenever the provider returns data.")
    platforms: list[str] = Field(
        description="Populated whenever the provider returns data."
    )
    startDate: int = Field(
        description="Epoch seconds. Populated whenever the provider returns data."
    )
    text: str = Field(
        description="Ad body text. Populated whenever the provider returns data."
    )


class FacebookEventDetailsData(BaseModel):
    model_config = ConfigDict(extra="allow")

    city: str = Field(description="Populated whenever the provider returns data.")
    coverPhotoUrl: str = Field(
        description="Populated whenever the provider returns data."
    )
    dayTimeSentence: str = Field(
        description="Populated whenever the provider returns data."
    )
    description: str = Field(
        description="Populated whenever the provider returns data."
    )
    endTime: str
    goingCount: int
    id: str = Field(description="Populated whenever the provider returns data.")
    interestedCount: int
    isCanceled: bool
    isOnline: bool
    locationName: str = Field(
        description="Populated whenever the provider returns data."
    )
    name: str = Field(description="Populated whenever the provider returns data.")
    startTime: str
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookEventsData(BaseModel):
    events: list[FacebookEventsEvent]
    nextCursor: str


class FacebookEventsEvent(BaseModel):
    model_config = ConfigDict(extra="allow")

    dayTimeSentence: str = Field(
        description="Populated whenever the provider returns data."
    )
    goingCount: int
    id: str = Field(description="Populated whenever the provider returns data.")
    interestedCount: int
    isOnline: bool
    name: str = Field(description="Populated whenever the provider returns data.")
    placeName: str = Field(description="Populated whenever the provider returns data.")
    startTimestamp: int = Field(
        description="Populated whenever the provider returns data."
    )
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookEventsSearchData(BaseModel):
    events: list[FacebookEventsSearchEvent]
    nextCursor: str


class FacebookEventsSearchEvent(BaseModel):
    model_config = ConfigDict(extra="allow")

    coverImage: str = Field(description="Populated whenever the provider returns data.")
    dayTimeSentence: str = Field(
        description="Populated whenever the provider returns data."
    )
    goingCount: int
    id: str = Field(description="Populated whenever the provider returns data.")
    interestedCount: int
    isOnline: bool
    isPast: bool
    name: str = Field(description="Populated whenever the provider returns data.")
    placeName: str = Field(description="Populated whenever the provider returns data.")
    priceRangeText: str
    startTimestamp: int = Field(
        description="Populated whenever the provider returns data."
    )
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookFollowersData(BaseModel):
    items: list[FacebookFollowersItem] = Field(
        description="Follower or following records: profile name, profile URL, and picture for each account. Populated whenever the provider returns data."
    )


class FacebookFollowersItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str = Field(description="Populated whenever the provider returns data.")
    name: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookGroupPostsData(BaseModel):
    nextCursor: str
    posts: list[FacebookGroupPostsPost] = Field(
        description="Populated whenever the provider returns data."
    )


class FacebookGroupPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow")

    authorId: str = Field(description="Populated whenever the provider returns data.")
    authorName: str = Field(description="Populated whenever the provider returns data.")
    commentCount: int
    id: str = Field(description="Populated whenever the provider returns data.")
    permalink: str
    publishTime: int = Field(
        description="Populated whenever the provider returns data."
    )
    reactionCount: int
    text: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookMarketplaceData(BaseModel):
    hasNextPage: bool
    listings: list[FacebookMarketplaceListing]
    nextCursor: str


class FacebookMarketplaceListing(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str = Field(description="Populated whenever the provider returns data.")
    isSold: bool
    locationName: str = Field(
        description="Populated whenever the provider returns data."
    )
    photoUrl: str = Field(description="Populated whenever the provider returns data.")
    priceAmount: float = Field(
        description="Populated whenever the provider returns data."
    )
    priceFormatted: str = Field(
        description="Populated whenever the provider returns data."
    )
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookMarketplaceItemData(BaseModel):
    model_config = ConfigDict(extra="allow")

    categoryId: str = Field(description="Populated whenever the provider returns data.")
    creationTime: str = Field(
        description="Populated whenever the provider returns data."
    )
    currency: str = Field(description="Populated whenever the provider returns data.")
    description: str = Field(
        description="Populated whenever the provider returns data."
    )
    id: str = Field(description="Populated whenever the provider returns data.")
    isLive: bool
    isSold: bool
    locationText: str = Field(
        description="Populated whenever the provider returns data."
    )
    priceAmount: float = Field(
        description="Populated whenever the provider returns data."
    )
    priceFormatted: str = Field(
        description="Populated whenever the provider returns data."
    )
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookMarketplaceLocationSearchData(BaseModel):
    locations: list[FacebookMarketplaceLocationSearchLocation]


class FacebookMarketplaceLocationSearchLocation(BaseModel):
    model_config = ConfigDict(extra="allow")

    city: str = Field(description="Populated whenever the provider returns data.")
    latitude: float = Field(description="Populated whenever the provider returns data.")
    longitude: float = Field(
        description="Populated whenever the provider returns data."
    )
    name: str = Field(description="Populated whenever the provider returns data.")
    pageId: str = Field(description="Populated whenever the provider returns data.")
    postalCode: str = Field(description="Populated whenever the provider returns data.")
    subtitle: str = Field(description="Populated whenever the provider returns data.")


class FacebookPageContactData(BaseModel):
    items: list[FacebookPageContactItem] = Field(
        description="Page contact records: page name, email, phone, website, physical address, and category. Populated whenever the provider returns data."
    )


class FacebookPageContactItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    address: str | None = None
    category: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    email: str | None = None
    phone: str | None = None
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")
    website: str | None = None


class FacebookPhotosData(BaseModel):
    nextCursor: str
    nextPageId: str
    photos: list[FacebookPhotosPhoto] = Field(
        description="Populated whenever the provider returns data."
    )


class FacebookPhotosPhoto(BaseModel):
    model_config = ConfigDict(extra="allow")

    caption: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    imageHeight: int
    imageUrl: str = Field(description="Populated whenever the provider returns data.")
    imageWidth: int
    photoId: str = Field(description="Populated whenever the provider returns data.")
    thumbnail: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookPostData(BaseModel):
    model_config = ConfigDict(extra="allow")

    comments: int
    id: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    shares: int
    text: str = Field(description="Populated whenever the provider returns data.")
    views: int


class FacebookPostCommentsData(BaseModel):
    comments: list[FacebookPostCommentsComment] = Field(
        description="Populated whenever the provider returns data."
    )
    nextCursor: str


class FacebookPostCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow")

    author: str = Field(description="Populated whenever the provider returns data.")
    createdAt: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    reactions: int
    replies: int
    text: str = Field(description="Populated whenever the provider returns data.")


class FacebookPostTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")

    transcript: str


class FacebookProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")

    about: str
    avatarUrl: str = Field(description="Populated whenever the provider returns data.")
    category: str = Field(description="Populated whenever the provider returns data.")
    followers: int
    likes: int
    name: str = Field(description="Populated whenever the provider returns data.")


class FacebookProfileEventsData(BaseModel):
    events: list[FacebookProfileEventsEvent] = Field(
        description="Populated whenever the provider returns data."
    )
    hasNextPage: bool
    nextCursor: str
    totalCount: int


class FacebookProfileEventsEvent(BaseModel):
    model_config = ConfigDict(extra="allow")

    city: str
    creatorName: str = Field(
        description="Populated whenever the provider returns data."
    )
    dayTimeSentence: str
    id: str = Field(description="Populated whenever the provider returns data.")
    isCanceled: bool
    isOnline: bool
    isPast: bool
    name: str = Field(description="Populated whenever the provider returns data.")
    placeName: str
    startTimestamp: int
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookProfilePostsData(BaseModel):
    posts: list[FacebookProfilePostsPost] = Field(
        description="Populated whenever the provider returns data."
    )


class FacebookProfilePostsPost(BaseModel):
    model_config = ConfigDict(extra="allow")

    author: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    text: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookProfileReelsData(BaseModel):
    reels: list[FacebookProfileReelsReel] = Field(
        description="Populated whenever the provider returns data."
    )


class FacebookProfileReelsReel(BaseModel):
    model_config = ConfigDict(extra="allow")

    caption: str = Field(description="Populated whenever the provider returns data.")
    createdAt: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    thumbnail: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")
    views: int


class FacebookSearchCompaniesData(BaseModel):
    companies: list[FacebookSearchCompaniesCompanie]


class FacebookSearchCompaniesCompanie(BaseModel):
    model_config = ConfigDict(extra="allow")

    category: str = Field(description="Populated whenever the provider returns data.")
    country: str
    entityType: str = Field(description="Populated whenever the provider returns data.")
    igFollowers: int = Field(
        description="Populated whenever the provider returns data."
    )
    igUsername: str = Field(description="Populated whenever the provider returns data.")
    imageUrl: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    name: str = Field(description="Populated whenever the provider returns data.")
    pageAlias: str = Field(description="Populated whenever the provider returns data.")
    pageId: str = Field(description="Populated whenever the provider returns data.")
    verification: str = Field(
        description="Populated whenever the provider returns data."
    )


class FacebookSearchPagesData(BaseModel):
    items: list[FacebookSearchPagesItem] = Field(
        description="Page profile records: page name, category, follower/like counts, contact details, and page URL. Populated whenever the provider returns data."
    )


class FacebookSearchPagesItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookSearchPostsData(BaseModel):
    items: list[FacebookSearchPostsItem] = Field(
        description="Post records: post text, author, timestamp, engagement counts (reactions, comments, shares), and post URL. Populated whenever the provider returns data."
    )


class FacebookSearchPostsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    text: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class FacebookNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def ad_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdDetailsInput],
    ) -> RunResult[FacebookAdDetailsData]:
        """Facebook Ad Details

        Look up a single Meta Ad Library ad by ID or URL and get the advertiser,
        creative text, call-to-action, platforms, and run dates as clean JSON,
        billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.facebook.ad_details(id="1869276447125570")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.ad_details", dict(input), options
        )
        return RunResult[FacebookAdDetailsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def ad_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdTranscriptInput],
    ) -> RunResult[FacebookAdTranscriptData]:
        """Facebook Ad Transcript

        Get the spoken-word transcript of a Meta Ad Library video ad by ad ID or
        URL, billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.facebook.ad_transcript(id="931919822778200")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.ad_transcript", dict(input), options
        )
        return RunResult[FacebookAdTranscriptData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdsSearchInput],
    ) -> RunResult[FacebookAdsSearchData]:
        """Facebook Ad Search

        Search the Meta Ad Library by keyword and get matching ads - advertiser,
        creative text, CTA, platforms, and run dates - with cursor pagination and
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.facebook.ads_search(country="US", query="nike")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.ads_search", dict(input), options
        )
        return RunResult[FacebookAdsSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdsSearchInput],
    ) -> Paginator[FacebookAdsSearchAd, FacebookAdsSearchData]:
        """Iterate Facebook Ad Search results, following pagination cursors.

        Yields flattened items from the `ads` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "facebook.ads_search", dict(input), "ads", options=options
        )

    def comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCommentRepliesInput],
    ) -> RunResult[FacebookCommentRepliesData]:
        """Facebook Comment Replies

        List the replies to a Facebook post comment - text, author, reactions, and
        timestamps - as normalized JSON at a flat USD price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.comment_replies(expansionToken="MjoxNzgzMjI4OTY4OgF_o5zrjDnpemv4bwPtpsShXutqvKIw2bKs2YuJksL1Ak8n8YG-_KPSQGkIks5oW6wdRfhb_cRv9q5OX0NHjFJwEupYNZi9pcMV-FYLWLp47u-eusMkZFOMwbkISsTln7gtSvQrOzlffyavOTIL85PECYzGfunU2IAEkd13CIikxu06Mw10UJ1ShcFAmz8175R1uJfYy_iOixWZukqfrWhUfVOXApXznxx7qXvUxPwct76qe6p7-nVWQrPC_SZc2xh9Z8ggL3WMjgTzSq4oWFSsyZuuVsyVVjSgdjRQiDqtJSeEUlSjTr6vOnKsvKV-GpnBRaeA0BCaNRhqpB4xDZoduBuO5ZYrFvWLJdJLryDhCPI2Ss-Z33cEM2Vz7pLf1wJzE7TuizXPwICSn1DA_Prca-BItTbOUjAjfiySap1LXYkGuuDC2ziUdiEsmE5XhevMP8XtF_2WQlMNcGbXMEQyAWDUawtPAxXgMeRrCO9YGSweFQ4OZumoIlSGa3Vfjy-euUOHT1IAsNbV2A8rAq4HJNU3jCXQTn0vfW9xvbVQhL-53Mhw2YPjhlvUj6QpnGA25N8", feedbackId="ZmVlZGJhY2s6MTM5MzQ2MTExNTQ4MTkyN18yMDgyNjUzMjQ1ODA5Mzg2")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.comment_replies", dict(input), options
        )
        return RunResult[FacebookCommentRepliesData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCommentRepliesInput],
    ) -> Paginator[FacebookCommentRepliesReplie, FacebookCommentRepliesData]:
        """Iterate Facebook Comment Replies results, following pagination cursors.

        Yields flattened items from the `replies` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.comment_replies",
            dict(input),
            "replies",
            options=options,
        )

    def company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCompanyAdsInput],
    ) -> RunResult[FacebookCompanyAdsData]:
        """Facebook Company Ads

        List the Meta Ad Library ads a company is running by page ID or company name
        - creative text, format, platforms, and run dates - with cursor pagination,
        billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.facebook.company_ads(companyName="nike")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.company_ads", dict(input), options
        )
        return RunResult[FacebookCompanyAdsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCompanyAdsInput],
    ) -> Paginator[FacebookCompanyAdsAd, FacebookCompanyAdsData]:
        """Iterate Facebook Company Ads results, following pagination cursors.

        Yields flattened items from the `ads` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "facebook.company_ads", dict(input), "ads", options=options
        )

    def event_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventDetailsInput],
    ) -> RunResult[FacebookEventDetailsData]:
        """Facebook Event Details

        Fetch full details for a single Facebook event by ID or URL - name,
        schedule, venue, hosts, and attendance - as normalized JSON at a flat USD
        price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.event_details(id="4045709448982422")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.event_details", dict(input), options
        )
        return RunResult[FacebookEventDetailsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsInput],
    ) -> RunResult[FacebookEventsData]:
        """Facebook Events

        List public Facebook events for a city or place by its events-page URL -
        event name, date, venue, and attendance - as normalized JSON at a flat USD
        price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.events(url="https://www.facebook.com/events/explore/saint-petersburg-florida/111326725552547")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.events", dict(input), options
        )
        return RunResult[FacebookEventsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsInput],
    ) -> Paginator[FacebookEventsEvent, FacebookEventsData]:
        """Iterate Facebook Events results, following pagination cursors.

        Yields flattened items from the `events` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "facebook.events", dict(input), "events", options=options
        )

    def events_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsSearchInput],
    ) -> RunResult[FacebookEventsSearchData]:
        """Facebook Events Search

        Search public Facebook events by keyword and get structured event records -
        name, schedule, venue, pricing, and attendance - as normalized JSON at a
        flat USD price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.events_search(query="music festival")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.events_search", dict(input), options
        )
        return RunResult[FacebookEventsSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_events_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsSearchInput],
    ) -> Paginator[FacebookEventsSearchEvent, FacebookEventsSearchData]:
        """Iterate Facebook Events Search results, following pagination cursors.

        Yields flattened items from the `events` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.events_search",
            dict(input),
            "events",
            options=options,
        )

    def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookFollowersInput],
    ) -> RunResult[FacebookFollowersData]:
        """Facebook Followers

        List the public followers - or accounts followed - of any Facebook page or
        profile URL as normalized JSON records, priced per request in USD.

        Price: $0.006 per result.

        Example:
            res = client.facebook.followers(limit=3, url="https://www.facebook.com/nike")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.followers", dict(input), options
        )
        return RunResult[FacebookFollowersData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def group_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookGroupPostsInput],
    ) -> RunResult[FacebookGroupPostsData]:
        """Facebook Group Posts

        Fetch recent posts from any public Facebook group by URL - text, author,
        reactions, and comment counts - at a flat per-request USD price.

        Price: $0.002 per request.

        Example:
            res = client.facebook.group_posts(url="https://www.facebook.com/groups/1270525996445602/")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.group_posts", dict(input), options
        )
        return RunResult[FacebookGroupPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_group_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookGroupPostsInput],
    ) -> Paginator[FacebookGroupPostsPost, FacebookGroupPostsData]:
        """Iterate Facebook Group Posts results, following pagination cursors.

        Yields flattened items from the `posts` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "facebook.group_posts", dict(input), "posts", options=options
        )

    def marketplace(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceInput],
    ) -> RunResult[FacebookMarketplaceData]:
        """Facebook Marketplace

        Search Facebook Marketplace listings by keyword near a location - title,
        price, location, and image - as normalized JSON at a flat USD price per
        request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.marketplace(lat="30.2677", lng="-97.7475", query="bike")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace", dict(input), options
        )
        return RunResult[FacebookMarketplaceData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_marketplace(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceInput],
    ) -> Paginator[FacebookMarketplaceListing, FacebookMarketplaceData]:
        """Iterate Facebook Marketplace results, following pagination cursors.

        Yields flattened items from the `listings` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.marketplace",
            dict(input),
            "listings",
            options=options,
        )

    def marketplace_item(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceItemInput],
    ) -> RunResult[FacebookMarketplaceItemData]:
        """Facebook Marketplace Item

        Fetch full details for a single Facebook Marketplace listing by ID or URL -
        title, price, location, photos, and attributes - as normalized JSON at a
        flat USD price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.marketplace_item(url="https://www.facebook.com/marketplace/item/1656586118821988/")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace_item", dict(input), options
        )
        return RunResult[FacebookMarketplaceItemData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def marketplace_location_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceLocationSearchInput],
    ) -> RunResult[FacebookMarketplaceLocationSearchData]:
        """Facebook Marketplace Location Search

        Resolve a place name to Facebook Marketplace locations with coordinates and
        metadata as normalized JSON at a flat USD price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.marketplace_location_search(query="Austin")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace_location_search", dict(input), options
        )
        return RunResult[FacebookMarketplaceLocationSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def page_contact(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPageContactInput],
    ) -> RunResult[FacebookPageContactData]:
        """Facebook Page Contact Info

        Look up a Facebook Page's public contact details - email, phone, website,
        and address - by page URL or ID, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.facebook.page_contact(page="https://www.facebook.com/joesstonecrab")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.page_contact", dict(input), options
        )
        return RunResult[FacebookPageContactData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def photos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPhotosInput],
    ) -> RunResult[FacebookPhotosData]:
        """Facebook Page Photos

        Fetch recent photos posted by any public Facebook page or profile - image
        URLs, captions, and dimensions - as normalized JSON at a flat USD price per
        request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.photos(url="https://www.facebook.com/Spurs")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.photos", dict(input), options
        )
        return RunResult[FacebookPhotosData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_photos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPhotosInput],
    ) -> Paginator[FacebookPhotosPhoto, FacebookPhotosData]:
        """Iterate Facebook Page Photos results, following pagination cursors.

        Yields flattened items from the `photos` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "facebook.photos", dict(input), "photos", options=options
        )

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostInput],
    ) -> RunResult[FacebookPostData]:
        """Facebook Post

        Fetch a single Facebook post by URL with its text and engagement counts
        (likes, comments, shares, views), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.facebook.post(url="https://www.facebook.com/reel/2166091230582141/")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.post", dict(input), options
        )
        return RunResult[FacebookPostData].model_validate(raw.model_dump(by_alias=True))

    def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostCommentsInput],
    ) -> RunResult[FacebookPostCommentsData]:
        """Facebook Post Comments

        List the comments on a Facebook post by URL with cursor pagination (text,
        author, reactions, reply count), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.facebook.post_comments(url="https://www.facebook.com/reel/2166091230582141/")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.post_comments", dict(input), options
        )
        return RunResult[FacebookPostCommentsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostCommentsInput],
    ) -> Paginator[FacebookPostCommentsComment, FacebookPostCommentsData]:
        """Iterate Facebook Post Comments results, following pagination cursors.

        Yields flattened items from the `comments` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.post_comments",
            dict(input),
            "comments",
            options=options,
        )

    def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostTranscriptInput],
    ) -> RunResult[FacebookPostTranscriptData]:
        """Facebook Post Transcript

        Get the spoken-word transcript of any public Facebook video post by URL as
        normalized JSON at a flat USD price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.post_transcript(url="https://www.facebook.com/reel/2166091230582141/")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.post_transcript", dict(input), options
        )
        return RunResult[FacebookPostTranscriptData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileInput],
    ) -> RunResult[FacebookProfileData]:
        """Facebook Profile

        Fetch a Facebook page's public profile (likes, followers, category, about)
        by URL or handle, normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.facebook.profile(url="https://www.facebook.com/nike")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile", dict(input), options
        )
        return RunResult[FacebookProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def profile_events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileEventsInput],
    ) -> RunResult[FacebookProfileEventsData]:
        """Facebook Page Events

        List upcoming and past events hosted by any public Facebook page by URL -
        name, schedule, venue, and host - as normalized JSON at a flat USD price per
        request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.profile_events(url="https://www.facebook.com/brickyardoldtown")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_events", dict(input), options
        )
        return RunResult[FacebookProfileEventsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_profile_events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileEventsInput],
    ) -> Paginator[FacebookProfileEventsEvent, FacebookProfileEventsData]:
        """Iterate Facebook Page Events results, following pagination cursors.

        Yields flattened items from the `events` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.profile_events",
            dict(input),
            "events",
            options=options,
        )

    def profile_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfilePostsInput],
    ) -> RunResult[FacebookProfilePostsData]:
        """Facebook Profile Posts

        List a Facebook page's recent posts by URL or page id with cursor pagination
        (text, author, permalink), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.facebook.profile_posts(url="https://www.facebook.com/nike")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_posts", dict(input), options
        )
        return RunResult[FacebookProfilePostsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def profile_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileReelsInput],
    ) -> RunResult[FacebookProfileReelsData]:
        """Facebook Profile Reels

        List a Facebook page's reels by URL with cursor pagination (caption, view
        count, permalink, thumbnail), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.facebook.profile_reels(url="https://www.facebook.com/nike")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_reels", dict(input), options
        )
        return RunResult[FacebookProfileReelsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search_companies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookSearchCompaniesInput],
    ) -> RunResult[FacebookSearchCompaniesData]:
        """Facebook Company Search

        Search the Meta Ad Library for advertisers by keyword and get matching pages
        - page ID, category, verification, follower counts, and linked Instagram -
        billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.facebook.search_companies(query="nike")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_companies", dict(input), options
        )
        return RunResult[FacebookSearchCompaniesData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search_pages(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookSearchPagesInput],
    ) -> RunResult[FacebookSearchPagesData]:
        """Facebook Page Search

        Search Facebook Pages by keyword, optionally narrowed to a location, and get
        structured page profiles (name, category, followers, contact details) at a
        flat USD price per request.

        Price: $0.011 per result.

        Example:
            res = client.facebook.search_pages(limit=3, query="nike")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_pages", dict(input), options
        )
        return RunResult[FacebookSearchPagesData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookSearchPostsInput],
    ) -> RunResult[FacebookSearchPostsData]:
        """Facebook Post Search

        Search public Facebook posts by keyword, optionally filtered by location,
        and get structured post records (text, author, engagement) with transparent
        per-request USD pricing.

        Price: $0.003 per result.

        Example:
            res = client.facebook.search_posts(limit=3, query="nike")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_posts", dict(input), options
        )
        return RunResult[FacebookSearchPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncFacebookNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def ad_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdDetailsInput],
    ) -> RunResult[FacebookAdDetailsData]:
        """Facebook Ad Details

        Look up a single Meta Ad Library ad by ID or URL and get the advertiser,
        creative text, call-to-action, platforms, and run dates as clean JSON,
        billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.facebook.ad_details(id="1869276447125570")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.ad_details", dict(input), options
        )
        return RunResult[FacebookAdDetailsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def ad_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdTranscriptInput],
    ) -> RunResult[FacebookAdTranscriptData]:
        """Facebook Ad Transcript

        Get the spoken-word transcript of a Meta Ad Library video ad by ad ID or
        URL, billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.facebook.ad_transcript(id="931919822778200")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.ad_transcript", dict(input), options
        )
        return RunResult[FacebookAdTranscriptData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdsSearchInput],
    ) -> RunResult[FacebookAdsSearchData]:
        """Facebook Ad Search

        Search the Meta Ad Library by keyword and get matching ads - advertiser,
        creative text, CTA, platforms, and run dates - with cursor pagination and
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.facebook.ads_search(country="US", query="nike")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.ads_search", dict(input), options
        )
        return RunResult[FacebookAdsSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdsSearchInput],
    ) -> AsyncPaginator[FacebookAdsSearchAd, FacebookAdsSearchData]:
        """Iterate Facebook Ad Search results, following pagination cursors.

        Yields flattened items from the `ads` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "facebook.ads_search", dict(input), "ads", options=options
        )

    async def comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCommentRepliesInput],
    ) -> RunResult[FacebookCommentRepliesData]:
        """Facebook Comment Replies

        List the replies to a Facebook post comment - text, author, reactions, and
        timestamps - as normalized JSON at a flat USD price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.comment_replies(expansionToken="MjoxNzgzMjI4OTY4OgF_o5zrjDnpemv4bwPtpsShXutqvKIw2bKs2YuJksL1Ak8n8YG-_KPSQGkIks5oW6wdRfhb_cRv9q5OX0NHjFJwEupYNZi9pcMV-FYLWLp47u-eusMkZFOMwbkISsTln7gtSvQrOzlffyavOTIL85PECYzGfunU2IAEkd13CIikxu06Mw10UJ1ShcFAmz8175R1uJfYy_iOixWZukqfrWhUfVOXApXznxx7qXvUxPwct76qe6p7-nVWQrPC_SZc2xh9Z8ggL3WMjgTzSq4oWFSsyZuuVsyVVjSgdjRQiDqtJSeEUlSjTr6vOnKsvKV-GpnBRaeA0BCaNRhqpB4xDZoduBuO5ZYrFvWLJdJLryDhCPI2Ss-Z33cEM2Vz7pLf1wJzE7TuizXPwICSn1DA_Prca-BItTbOUjAjfiySap1LXYkGuuDC2ziUdiEsmE5XhevMP8XtF_2WQlMNcGbXMEQyAWDUawtPAxXgMeRrCO9YGSweFQ4OZumoIlSGa3Vfjy-euUOHT1IAsNbV2A8rAq4HJNU3jCXQTn0vfW9xvbVQhL-53Mhw2YPjhlvUj6QpnGA25N8", feedbackId="ZmVlZGJhY2s6MTM5MzQ2MTExNTQ4MTkyN18yMDgyNjUzMjQ1ODA5Mzg2")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.comment_replies", dict(input), options
        )
        return RunResult[FacebookCommentRepliesData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCommentRepliesInput],
    ) -> AsyncPaginator[FacebookCommentRepliesReplie, FacebookCommentRepliesData]:
        """Iterate Facebook Comment Replies results, following pagination cursors.

        Yields flattened items from the `replies` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.comment_replies",
            dict(input),
            "replies",
            options=options,
        )

    async def company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCompanyAdsInput],
    ) -> RunResult[FacebookCompanyAdsData]:
        """Facebook Company Ads

        List the Meta Ad Library ads a company is running by page ID or company name
        - creative text, format, platforms, and run dates - with cursor pagination,
        billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.facebook.company_ads(companyName="nike")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.company_ads", dict(input), options
        )
        return RunResult[FacebookCompanyAdsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCompanyAdsInput],
    ) -> AsyncPaginator[FacebookCompanyAdsAd, FacebookCompanyAdsData]:
        """Iterate Facebook Company Ads results, following pagination cursors.

        Yields flattened items from the `ads` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "facebook.company_ads", dict(input), "ads", options=options
        )

    async def event_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventDetailsInput],
    ) -> RunResult[FacebookEventDetailsData]:
        """Facebook Event Details

        Fetch full details for a single Facebook event by ID or URL - name,
        schedule, venue, hosts, and attendance - as normalized JSON at a flat USD
        price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.event_details(id="4045709448982422")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.event_details", dict(input), options
        )
        return RunResult[FacebookEventDetailsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsInput],
    ) -> RunResult[FacebookEventsData]:
        """Facebook Events

        List public Facebook events for a city or place by its events-page URL -
        event name, date, venue, and attendance - as normalized JSON at a flat USD
        price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.events(url="https://www.facebook.com/events/explore/saint-petersburg-florida/111326725552547")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.events", dict(input), options
        )
        return RunResult[FacebookEventsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsInput],
    ) -> AsyncPaginator[FacebookEventsEvent, FacebookEventsData]:
        """Iterate Facebook Events results, following pagination cursors.

        Yields flattened items from the `events` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "facebook.events", dict(input), "events", options=options
        )

    async def events_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsSearchInput],
    ) -> RunResult[FacebookEventsSearchData]:
        """Facebook Events Search

        Search public Facebook events by keyword and get structured event records -
        name, schedule, venue, pricing, and attendance - as normalized JSON at a
        flat USD price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.events_search(query="music festival")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.events_search", dict(input), options
        )
        return RunResult[FacebookEventsSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_events_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsSearchInput],
    ) -> AsyncPaginator[FacebookEventsSearchEvent, FacebookEventsSearchData]:
        """Iterate Facebook Events Search results, following pagination cursors.

        Yields flattened items from the `events` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.events_search",
            dict(input),
            "events",
            options=options,
        )

    async def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookFollowersInput],
    ) -> RunResult[FacebookFollowersData]:
        """Facebook Followers

        List the public followers - or accounts followed - of any Facebook page or
        profile URL as normalized JSON records, priced per request in USD.

        Price: $0.006 per result.

        Example:
            res = client.facebook.followers(limit=3, url="https://www.facebook.com/nike")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.followers", dict(input), options
        )
        return RunResult[FacebookFollowersData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def group_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookGroupPostsInput],
    ) -> RunResult[FacebookGroupPostsData]:
        """Facebook Group Posts

        Fetch recent posts from any public Facebook group by URL - text, author,
        reactions, and comment counts - at a flat per-request USD price.

        Price: $0.002 per request.

        Example:
            res = client.facebook.group_posts(url="https://www.facebook.com/groups/1270525996445602/")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.group_posts", dict(input), options
        )
        return RunResult[FacebookGroupPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_group_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookGroupPostsInput],
    ) -> AsyncPaginator[FacebookGroupPostsPost, FacebookGroupPostsData]:
        """Iterate Facebook Group Posts results, following pagination cursors.

        Yields flattened items from the `posts` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "facebook.group_posts", dict(input), "posts", options=options
        )

    async def marketplace(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceInput],
    ) -> RunResult[FacebookMarketplaceData]:
        """Facebook Marketplace

        Search Facebook Marketplace listings by keyword near a location - title,
        price, location, and image - as normalized JSON at a flat USD price per
        request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.marketplace(lat="30.2677", lng="-97.7475", query="bike")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace", dict(input), options
        )
        return RunResult[FacebookMarketplaceData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_marketplace(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceInput],
    ) -> AsyncPaginator[FacebookMarketplaceListing, FacebookMarketplaceData]:
        """Iterate Facebook Marketplace results, following pagination cursors.

        Yields flattened items from the `listings` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.marketplace",
            dict(input),
            "listings",
            options=options,
        )

    async def marketplace_item(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceItemInput],
    ) -> RunResult[FacebookMarketplaceItemData]:
        """Facebook Marketplace Item

        Fetch full details for a single Facebook Marketplace listing by ID or URL -
        title, price, location, photos, and attributes - as normalized JSON at a
        flat USD price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.marketplace_item(url="https://www.facebook.com/marketplace/item/1656586118821988/")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace_item", dict(input), options
        )
        return RunResult[FacebookMarketplaceItemData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def marketplace_location_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceLocationSearchInput],
    ) -> RunResult[FacebookMarketplaceLocationSearchData]:
        """Facebook Marketplace Location Search

        Resolve a place name to Facebook Marketplace locations with coordinates and
        metadata as normalized JSON at a flat USD price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.marketplace_location_search(query="Austin")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace_location_search", dict(input), options
        )
        return RunResult[FacebookMarketplaceLocationSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def page_contact(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPageContactInput],
    ) -> RunResult[FacebookPageContactData]:
        """Facebook Page Contact Info

        Look up a Facebook Page's public contact details - email, phone, website,
        and address - by page URL or ID, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.facebook.page_contact(page="https://www.facebook.com/joesstonecrab")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.page_contact", dict(input), options
        )
        return RunResult[FacebookPageContactData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def photos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPhotosInput],
    ) -> RunResult[FacebookPhotosData]:
        """Facebook Page Photos

        Fetch recent photos posted by any public Facebook page or profile - image
        URLs, captions, and dimensions - as normalized JSON at a flat USD price per
        request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.photos(url="https://www.facebook.com/Spurs")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.photos", dict(input), options
        )
        return RunResult[FacebookPhotosData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_photos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPhotosInput],
    ) -> AsyncPaginator[FacebookPhotosPhoto, FacebookPhotosData]:
        """Iterate Facebook Page Photos results, following pagination cursors.

        Yields flattened items from the `photos` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "facebook.photos", dict(input), "photos", options=options
        )

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostInput],
    ) -> RunResult[FacebookPostData]:
        """Facebook Post

        Fetch a single Facebook post by URL with its text and engagement counts
        (likes, comments, shares, views), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.facebook.post(url="https://www.facebook.com/reel/2166091230582141/")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.post", dict(input), options
        )
        return RunResult[FacebookPostData].model_validate(raw.model_dump(by_alias=True))

    async def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostCommentsInput],
    ) -> RunResult[FacebookPostCommentsData]:
        """Facebook Post Comments

        List the comments on a Facebook post by URL with cursor pagination (text,
        author, reactions, reply count), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.facebook.post_comments(url="https://www.facebook.com/reel/2166091230582141/")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.post_comments", dict(input), options
        )
        return RunResult[FacebookPostCommentsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostCommentsInput],
    ) -> AsyncPaginator[FacebookPostCommentsComment, FacebookPostCommentsData]:
        """Iterate Facebook Post Comments results, following pagination cursors.

        Yields flattened items from the `comments` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.post_comments",
            dict(input),
            "comments",
            options=options,
        )

    async def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostTranscriptInput],
    ) -> RunResult[FacebookPostTranscriptData]:
        """Facebook Post Transcript

        Get the spoken-word transcript of any public Facebook video post by URL as
        normalized JSON at a flat USD price per request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.post_transcript(url="https://www.facebook.com/reel/2166091230582141/")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.post_transcript", dict(input), options
        )
        return RunResult[FacebookPostTranscriptData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileInput],
    ) -> RunResult[FacebookProfileData]:
        """Facebook Profile

        Fetch a Facebook page's public profile (likes, followers, category, about)
        by URL or handle, normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.facebook.profile(url="https://www.facebook.com/nike")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile", dict(input), options
        )
        return RunResult[FacebookProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def profile_events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileEventsInput],
    ) -> RunResult[FacebookProfileEventsData]:
        """Facebook Page Events

        List upcoming and past events hosted by any public Facebook page by URL -
        name, schedule, venue, and host - as normalized JSON at a flat USD price per
        request.

        Price: $0.002 per request.

        Example:
            res = client.facebook.profile_events(url="https://www.facebook.com/brickyardoldtown")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_events", dict(input), options
        )
        return RunResult[FacebookProfileEventsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_profile_events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileEventsInput],
    ) -> AsyncPaginator[FacebookProfileEventsEvent, FacebookProfileEventsData]:
        """Iterate Facebook Page Events results, following pagination cursors.

        Yields flattened items from the `events` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.profile_events",
            dict(input),
            "events",
            options=options,
        )

    async def profile_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfilePostsInput],
    ) -> RunResult[FacebookProfilePostsData]:
        """Facebook Profile Posts

        List a Facebook page's recent posts by URL or page id with cursor pagination
        (text, author, permalink), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.facebook.profile_posts(url="https://www.facebook.com/nike")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_posts", dict(input), options
        )
        return RunResult[FacebookProfilePostsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def profile_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileReelsInput],
    ) -> RunResult[FacebookProfileReelsData]:
        """Facebook Profile Reels

        List a Facebook page's reels by URL with cursor pagination (caption, view
        count, permalink, thumbnail), normalized across providers.

        Price: $0.002 per request.

        Example:
            res = client.facebook.profile_reels(url="https://www.facebook.com/nike")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_reels", dict(input), options
        )
        return RunResult[FacebookProfileReelsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search_companies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookSearchCompaniesInput],
    ) -> RunResult[FacebookSearchCompaniesData]:
        """Facebook Company Search

        Search the Meta Ad Library for advertisers by keyword and get matching pages
        - page ID, category, verification, follower counts, and linked Instagram -
        billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.facebook.search_companies(query="nike")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_companies", dict(input), options
        )
        return RunResult[FacebookSearchCompaniesData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search_pages(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookSearchPagesInput],
    ) -> RunResult[FacebookSearchPagesData]:
        """Facebook Page Search

        Search Facebook Pages by keyword, optionally narrowed to a location, and get
        structured page profiles (name, category, followers, contact details) at a
        flat USD price per request.

        Price: $0.011 per result.

        Example:
            res = client.facebook.search_pages(limit=3, query="nike")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_pages", dict(input), options
        )
        return RunResult[FacebookSearchPagesData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookSearchPostsInput],
    ) -> RunResult[FacebookSearchPostsData]:
        """Facebook Post Search

        Search public Facebook posts by keyword, optionally filtered by location,
        and get structured post records (text, author, engagement) with transparent
        per-request USD pricing.

        Price: $0.003 per result.

        Example:
            res = client.facebook.search_posts(limit=3, query="nike")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_posts", dict(input), options
        )
        return RunResult[FacebookSearchPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )
