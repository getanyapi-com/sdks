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
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    active: bool | None = Field(
        default=None, description="Whether the ad is currently running."
    )
    ad_archive_id: str = Field(
        alias="adArchiveId", description="Ad Library archive ID (stable identity)."
    )
    cta_text: str | None = Field(
        default=None,
        alias="ctaText",
        description="Call-to-action label. Present whenever the upstream returns this record.",
    )
    currency: str | None = Field(
        default=None, description="Spend currency, may be empty."
    )
    display_format: str | None = Field(
        default=None,
        alias="displayFormat",
        description="Ad creative format. Present whenever the upstream returns this record.",
    )
    end_date: int | None = Field(
        default=None, alias="endDate", description="Run end, epoch seconds."
    )
    link_url: str | None = Field(
        default=None,
        alias="linkUrl",
        description="Creative destination URL. Present whenever the upstream returns this record.",
    )
    page_id: str = Field(
        alias="pageId", description="Advertiser page ID (stable identity)."
    )
    page_name: str | None = Field(
        default=None,
        alias="pageName",
        description="Advertiser page name. Present whenever the upstream returns this record.",
    )
    platforms: list[str] | None = Field(
        default=None,
        description="Publisher platforms the ad runs on. Present whenever the upstream returns this record.",
    )
    start_date: int | None = Field(
        default=None,
        alias="startDate",
        description="Run start, epoch seconds. Present whenever the upstream returns this record.",
    )
    text: str | None = Field(
        default=None,
        description="Ad body text. Present whenever the upstream returns this record.",
    )
    title: str | None = Field(
        default=None,
        description="Creative title. Present whenever the upstream returns this record.",
    )


class FacebookAdTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    ad_id: str = Field(alias="adId")
    transcript: str = Field(description="Transcribed ad audio text.")
    transcript_available: bool = Field(alias="transcriptAvailable")
    url: str


class FacebookAdsSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    ads: list[FacebookAdsSearchAd]
    next_cursor: str = Field(alias="nextCursor")
    total_results: int = Field(alias="totalResults")


class FacebookAdsSearchAd(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    active: bool
    ad_count: int = Field(
        alias="adCount", description="Number of ads in this campaign (collation count)."
    )
    cta_text: str = Field(alias="ctaText")
    cta_type: str = Field(alias="ctaType")
    display_format: str = Field(alias="displayFormat")
    end_date: int = Field(alias="endDate", description="Epoch seconds.")
    id: str = Field(description="Ad Library archive ID.")
    link_url: str = Field(alias="linkUrl")
    page_id: str = Field(alias="pageId")
    page_name: str = Field(alias="pageName")
    platforms: list[str]
    start_date: int = Field(alias="startDate", description="Epoch seconds.")
    text: str = Field(description="Ad body text.")
    title: str


class FacebookCommentRepliesData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    has_next_page: bool = Field(alias="hasNextPage")
    next_cursor: str = Field(alias="nextCursor")
    replies: list[FacebookCommentRepliesReplie]


class FacebookCommentRepliesReplie(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_id: str = Field(alias="authorId")
    author_name: str = Field(alias="authorName")
    author_profile_picture: str = Field(alias="authorProfilePicture")
    created_at: str = Field(alias="createdAt")
    expansion_token: str | None = Field(default=None, alias="expansionToken")
    feedback_id: str = Field(alias="feedbackId")
    id: str
    reaction_count: int = Field(alias="reactionCount")
    reply_count: int = Field(alias="replyCount")
    text: str


class FacebookCompanyAdsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    ads: list[FacebookCompanyAdsAd]
    next_cursor: str = Field(alias="nextCursor")


class FacebookCompanyAdsAd(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    active: bool
    ad_count: int = Field(
        alias="adCount", description="Number of ads in this campaign (collation count)."
    )
    currency: str
    display_format: str = Field(alias="displayFormat")
    end_date: int = Field(alias="endDate", description="Epoch seconds.")
    id: str = Field(description="Ad Library archive ID.")
    page_id: str = Field(alias="pageId")
    page_name: str = Field(alias="pageName")
    platforms: list[str]
    start_date: int = Field(alias="startDate", description="Epoch seconds.")
    text: str = Field(description="Ad body text.")


class FacebookEventDetailsData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str
    cover_photo_url: str = Field(alias="coverPhotoUrl")
    day_time_sentence: str = Field(alias="dayTimeSentence")
    description: str
    end_time: str = Field(alias="endTime")
    going_count: int = Field(alias="goingCount")
    id: str
    interested_count: int = Field(alias="interestedCount")
    is_canceled: bool = Field(alias="isCanceled")
    is_online: bool = Field(alias="isOnline")
    location_name: str = Field(alias="locationName")
    name: str
    start_time: str = Field(alias="startTime")
    url: str


class FacebookEventsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    events: list[FacebookEventsEvent]
    next_cursor: str = Field(alias="nextCursor")


class FacebookEventsEvent(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    day_time_sentence: str = Field(alias="dayTimeSentence")
    going_count: int = Field(alias="goingCount")
    id: str
    interested_count: int = Field(alias="interestedCount")
    is_online: bool = Field(alias="isOnline")
    name: str
    place_name: str = Field(alias="placeName")
    start_timestamp: int = Field(alias="startTimestamp")
    url: str


class FacebookEventsSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    events: list[FacebookEventsSearchEvent]
    next_cursor: str = Field(alias="nextCursor")


class FacebookEventsSearchEvent(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    cover_image: str = Field(alias="coverImage")
    day_time_sentence: str = Field(alias="dayTimeSentence")
    going_count: int = Field(alias="goingCount")
    id: str
    interested_count: int = Field(alias="interestedCount")
    is_online: bool = Field(alias="isOnline")
    is_past: bool = Field(alias="isPast")
    name: str
    place_name: str = Field(alias="placeName")
    price_range_text: str = Field(alias="priceRangeText")
    start_timestamp: int = Field(alias="startTimestamp")
    url: str


class FacebookFollowersData(BaseModel):
    items: list[FacebookFollowersItem] = Field(
        description="Follower or following records: profile name, profile URL, and picture for each account."
    )


class FacebookFollowersItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    name: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    url: str


class FacebookGroupPostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str = Field(alias="nextCursor")
    posts: list[FacebookGroupPostsPost]


class FacebookGroupPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_id: str = Field(alias="authorId")
    author_name: str = Field(alias="authorName")
    comment_count: int = Field(alias="commentCount")
    id: str
    permalink: str
    publish_time: int = Field(alias="publishTime")
    reaction_count: int = Field(alias="reactionCount")
    text: str
    url: str


class FacebookMarketplaceData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    has_next_page: bool = Field(alias="hasNextPage")
    listings: list[FacebookMarketplaceListing]
    next_cursor: str = Field(alias="nextCursor")


class FacebookMarketplaceListing(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str
    is_sold: bool = Field(alias="isSold")
    location_name: str = Field(alias="locationName")
    photo_url: str = Field(alias="photoUrl")
    price_amount: float = Field(alias="priceAmount")
    price_formatted: str = Field(alias="priceFormatted")
    title: str
    url: str


class FacebookMarketplaceItemData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    category_id: str = Field(alias="categoryId")
    creation_time: str = Field(alias="creationTime")
    currency: str
    description: str
    id: str
    is_live: bool = Field(alias="isLive")
    is_sold: bool = Field(alias="isSold")
    location_text: str = Field(alias="locationText")
    price_amount: float = Field(alias="priceAmount")
    price_formatted: str = Field(alias="priceFormatted")
    title: str
    url: str


class FacebookMarketplaceLocationSearchData(BaseModel):
    locations: list[FacebookMarketplaceLocationSearchLocation]


class FacebookMarketplaceLocationSearchLocation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str
    latitude: float
    longitude: float
    name: str
    page_id: str = Field(alias="pageId")
    postal_code: str = Field(alias="postalCode")
    subtitle: str


class FacebookPageContactData(BaseModel):
    items: list[FacebookPageContactItem] = Field(
        description="Page contact records: page name, email, phone, website, physical address, and category."
    )


class FacebookPageContactItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    address: str | None = None
    category: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    email: str | None = None
    phone: str | None = None
    title: str
    url: str
    website: str | None = None


class FacebookPhotosData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str = Field(alias="nextCursor")
    next_page_id: str = Field(alias="nextPageId")
    photos: list[FacebookPhotosPhoto]


class FacebookPhotosPhoto(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    caption: str
    id: str
    image_height: int = Field(alias="imageHeight")
    image_url: str = Field(alias="imageUrl")
    image_width: int = Field(alias="imageWidth")
    photo_id: str = Field(alias="photoId")
    thumbnail: str
    url: str


class FacebookPostData(BaseModel):
    model_config = ConfigDict(extra="allow")

    comments: int
    id: str
    likes: int
    shares: int
    text: str
    views: int


class FacebookPostCommentsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    comments: list[FacebookPostCommentsComment]
    next_cursor: str = Field(alias="nextCursor")


class FacebookPostCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str
    created_at: str = Field(alias="createdAt")
    id: str
    reactions: int
    replies: int
    text: str


class FacebookPostTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")

    transcript: str


class FacebookProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    about: str
    avatar_url: str = Field(alias="avatarUrl")
    category: str
    followers: int
    likes: int
    name: str


class FacebookProfileEventsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    events: list[FacebookProfileEventsEvent]
    has_next_page: bool = Field(alias="hasNextPage")
    next_cursor: str = Field(alias="nextCursor")
    total_count: int = Field(alias="totalCount")


class FacebookProfileEventsEvent(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str
    creator_name: str = Field(alias="creatorName")
    day_time_sentence: str = Field(alias="dayTimeSentence")
    id: str
    is_canceled: bool = Field(alias="isCanceled")
    is_online: bool = Field(alias="isOnline")
    is_past: bool = Field(alias="isPast")
    name: str
    place_name: str = Field(alias="placeName")
    start_timestamp: int = Field(alias="startTimestamp")
    url: str


class FacebookProfilePostsData(BaseModel):
    posts: list[FacebookProfilePostsPost]


class FacebookProfilePostsPost(BaseModel):
    model_config = ConfigDict(extra="allow")

    author: str
    id: str
    text: str
    url: str


class FacebookProfileReelsData(BaseModel):
    reels: list[FacebookProfileReelsReel]


class FacebookProfileReelsReel(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    caption: str
    created_at: str = Field(alias="createdAt")
    id: str
    thumbnail: str
    url: str
    views: int


class FacebookSearchCompaniesData(BaseModel):
    companies: list[FacebookSearchCompaniesCompanie]


class FacebookSearchCompaniesCompanie(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    category: str
    country: str
    entity_type: str = Field(alias="entityType")
    ig_followers: int = Field(alias="igFollowers")
    ig_username: str = Field(alias="igUsername")
    image_url: str = Field(alias="imageUrl")
    likes: int
    name: str
    page_alias: str = Field(alias="pageAlias")
    page_id: str = Field(alias="pageId")
    verification: str


class FacebookSearchPagesData(BaseModel):
    items: list[FacebookSearchPagesItem] = Field(
        description="Page profile records: page name, category, follower/like counts, contact details, and page URL."
    )


class FacebookSearchPagesItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    title: str
    url: str


class FacebookSearchPostsData(BaseModel):
    items: list[FacebookSearchPostsItem] = Field(
        description="Post records: post text, author, timestamp, engagement counts (reactions, comments, shares), and post URL."
    )


class FacebookSearchPostsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    text: str
    url: str


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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.ad_details", dict(input), options
        )
        return RunResult[FacebookAdDetailsData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.ad_transcript", dict(input), options
        )
        return RunResult[FacebookAdTranscriptData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.ads_search", dict(input), options
        )
        return RunResult[FacebookAdsSearchData].model_validate(raw)

    def iter_ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdsSearchInput],
    ) -> Paginator[FacebookAdsSearchAd, FacebookAdsSearchData]:
        """Iterate Facebook Ad Search results, following pagination cursors.

        Yields validated `FacebookAdsSearchAd` items from the `ads` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.ads_search",
            dict(input),
            "ads",
            item_model=FacebookAdsSearchAd,
            data_model=FacebookAdsSearchData,
            bare=False,
            options=options,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.comment_replies", dict(input), options
        )
        return RunResult[FacebookCommentRepliesData].model_validate(raw)

    def iter_comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCommentRepliesInput],
    ) -> Paginator[FacebookCommentRepliesReplie, FacebookCommentRepliesData]:
        """Iterate Facebook Comment Replies results, following pagination cursors.

        Yields validated `FacebookCommentRepliesReplie` items from the `replies` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.comment_replies",
            dict(input),
            "replies",
            item_model=FacebookCommentRepliesReplie,
            data_model=FacebookCommentRepliesData,
            bare=False,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.company_ads", dict(input), options
        )
        return RunResult[FacebookCompanyAdsData].model_validate(raw)

    def iter_company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCompanyAdsInput],
    ) -> Paginator[FacebookCompanyAdsAd, FacebookCompanyAdsData]:
        """Iterate Facebook Company Ads results, following pagination cursors.

        Yields validated `FacebookCompanyAdsAd` items from the `ads` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.company_ads",
            dict(input),
            "ads",
            item_model=FacebookCompanyAdsAd,
            data_model=FacebookCompanyAdsData,
            bare=False,
            options=options,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.event_details", dict(input), options
        )
        return RunResult[FacebookEventDetailsData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.events", dict(input), options
        )
        return RunResult[FacebookEventsData].model_validate(raw)

    def iter_events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsInput],
    ) -> Paginator[FacebookEventsEvent, FacebookEventsData]:
        """Iterate Facebook Events results, following pagination cursors.

        Yields validated `FacebookEventsEvent` items from the `events` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.events",
            dict(input),
            "events",
            item_model=FacebookEventsEvent,
            data_model=FacebookEventsData,
            bare=False,
            options=options,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.events_search", dict(input), options
        )
        return RunResult[FacebookEventsSearchData].model_validate(raw)

    def iter_events_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsSearchInput],
    ) -> Paginator[FacebookEventsSearchEvent, FacebookEventsSearchData]:
        """Iterate Facebook Events Search results, following pagination cursors.

        Yields validated `FacebookEventsSearchEvent` items from the `events` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.events_search",
            dict(input),
            "events",
            item_model=FacebookEventsSearchEvent,
            data_model=FacebookEventsSearchData,
            bare=False,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.followers", dict(input), options
        )
        return RunResult[FacebookFollowersData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.group_posts", dict(input), options
        )
        return RunResult[FacebookGroupPostsData].model_validate(raw)

    def iter_group_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookGroupPostsInput],
    ) -> Paginator[FacebookGroupPostsPost, FacebookGroupPostsData]:
        """Iterate Facebook Group Posts results, following pagination cursors.

        Yields validated `FacebookGroupPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.group_posts",
            dict(input),
            "posts",
            item_model=FacebookGroupPostsPost,
            data_model=FacebookGroupPostsData,
            bare=False,
            options=options,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace", dict(input), options
        )
        return RunResult[FacebookMarketplaceData].model_validate(raw)

    def iter_marketplace(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceInput],
    ) -> Paginator[FacebookMarketplaceListing, FacebookMarketplaceData]:
        """Iterate Facebook Marketplace results, following pagination cursors.

        Yields validated `FacebookMarketplaceListing` items from the `listings` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.marketplace",
            dict(input),
            "listings",
            item_model=FacebookMarketplaceListing,
            data_model=FacebookMarketplaceData,
            bare=False,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace_item", dict(input), options
        )
        return RunResult[FacebookMarketplaceItemData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace_location_search", dict(input), options
        )
        return RunResult[FacebookMarketplaceLocationSearchData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.page_contact", dict(input), options
        )
        return RunResult[FacebookPageContactData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.photos", dict(input), options
        )
        return RunResult[FacebookPhotosData].model_validate(raw)

    def iter_photos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPhotosInput],
    ) -> Paginator[FacebookPhotosPhoto, FacebookPhotosData]:
        """Iterate Facebook Page Photos results, following pagination cursors.

        Yields validated `FacebookPhotosPhoto` items from the `photos` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.photos",
            dict(input),
            "photos",
            item_model=FacebookPhotosPhoto,
            data_model=FacebookPhotosData,
            bare=False,
            options=options,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.post", dict(input), options
        )
        return RunResult[FacebookPostData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.post_comments", dict(input), options
        )
        return RunResult[FacebookPostCommentsData].model_validate(raw)

    def iter_post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostCommentsInput],
    ) -> Paginator[FacebookPostCommentsComment, FacebookPostCommentsData]:
        """Iterate Facebook Post Comments results, following pagination cursors.

        Yields validated `FacebookPostCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.post_comments",
            dict(input),
            "comments",
            item_model=FacebookPostCommentsComment,
            data_model=FacebookPostCommentsData,
            bare=False,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.post_transcript", dict(input), options
        )
        return RunResult[FacebookPostTranscriptData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile", dict(input), options
        )
        return RunResult[FacebookProfileData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_events", dict(input), options
        )
        return RunResult[FacebookProfileEventsData].model_validate(raw)

    def iter_profile_events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileEventsInput],
    ) -> Paginator[FacebookProfileEventsEvent, FacebookProfileEventsData]:
        """Iterate Facebook Page Events results, following pagination cursors.

        Yields validated `FacebookProfileEventsEvent` items from the `events` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "facebook.profile_events",
            dict(input),
            "events",
            item_model=FacebookProfileEventsEvent,
            data_model=FacebookProfileEventsData,
            bare=False,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_posts", dict(input), options
        )
        return RunResult[FacebookProfilePostsData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_reels", dict(input), options
        )
        return RunResult[FacebookProfileReelsData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_companies", dict(input), options
        )
        return RunResult[FacebookSearchCompaniesData].model_validate(raw)

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

        Price: $0.001 per request plus $0.011 per result.

        Example:
            res = client.facebook.search_pages(limit=3, query="nike")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_pages", dict(input), options
        )
        return RunResult[FacebookSearchPagesData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_posts", dict(input), options
        )
        return RunResult[FacebookSearchPostsData].model_validate(raw)


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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.ad_details", dict(input), options
        )
        return RunResult[FacebookAdDetailsData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.ad_transcript", dict(input), options
        )
        return RunResult[FacebookAdTranscriptData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.ads_search", dict(input), options
        )
        return RunResult[FacebookAdsSearchData].model_validate(raw)

    def iter_ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdsSearchInput],
    ) -> AsyncPaginator[FacebookAdsSearchAd, FacebookAdsSearchData]:
        """Iterate Facebook Ad Search results, following pagination cursors.

        Yields validated `FacebookAdsSearchAd` items from the `ads` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.ads_search",
            dict(input),
            "ads",
            item_model=FacebookAdsSearchAd,
            data_model=FacebookAdsSearchData,
            bare=False,
            options=options,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.comment_replies", dict(input), options
        )
        return RunResult[FacebookCommentRepliesData].model_validate(raw)

    def iter_comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCommentRepliesInput],
    ) -> AsyncPaginator[FacebookCommentRepliesReplie, FacebookCommentRepliesData]:
        """Iterate Facebook Comment Replies results, following pagination cursors.

        Yields validated `FacebookCommentRepliesReplie` items from the `replies` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.comment_replies",
            dict(input),
            "replies",
            item_model=FacebookCommentRepliesReplie,
            data_model=FacebookCommentRepliesData,
            bare=False,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.company_ads", dict(input), options
        )
        return RunResult[FacebookCompanyAdsData].model_validate(raw)

    def iter_company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCompanyAdsInput],
    ) -> AsyncPaginator[FacebookCompanyAdsAd, FacebookCompanyAdsData]:
        """Iterate Facebook Company Ads results, following pagination cursors.

        Yields validated `FacebookCompanyAdsAd` items from the `ads` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.company_ads",
            dict(input),
            "ads",
            item_model=FacebookCompanyAdsAd,
            data_model=FacebookCompanyAdsData,
            bare=False,
            options=options,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.event_details", dict(input), options
        )
        return RunResult[FacebookEventDetailsData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.events", dict(input), options
        )
        return RunResult[FacebookEventsData].model_validate(raw)

    def iter_events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsInput],
    ) -> AsyncPaginator[FacebookEventsEvent, FacebookEventsData]:
        """Iterate Facebook Events results, following pagination cursors.

        Yields validated `FacebookEventsEvent` items from the `events` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.events",
            dict(input),
            "events",
            item_model=FacebookEventsEvent,
            data_model=FacebookEventsData,
            bare=False,
            options=options,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.events_search", dict(input), options
        )
        return RunResult[FacebookEventsSearchData].model_validate(raw)

    def iter_events_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsSearchInput],
    ) -> AsyncPaginator[FacebookEventsSearchEvent, FacebookEventsSearchData]:
        """Iterate Facebook Events Search results, following pagination cursors.

        Yields validated `FacebookEventsSearchEvent` items from the `events` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.events_search",
            dict(input),
            "events",
            item_model=FacebookEventsSearchEvent,
            data_model=FacebookEventsSearchData,
            bare=False,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.followers", dict(input), options
        )
        return RunResult[FacebookFollowersData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.group_posts", dict(input), options
        )
        return RunResult[FacebookGroupPostsData].model_validate(raw)

    def iter_group_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookGroupPostsInput],
    ) -> AsyncPaginator[FacebookGroupPostsPost, FacebookGroupPostsData]:
        """Iterate Facebook Group Posts results, following pagination cursors.

        Yields validated `FacebookGroupPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.group_posts",
            dict(input),
            "posts",
            item_model=FacebookGroupPostsPost,
            data_model=FacebookGroupPostsData,
            bare=False,
            options=options,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace", dict(input), options
        )
        return RunResult[FacebookMarketplaceData].model_validate(raw)

    def iter_marketplace(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceInput],
    ) -> AsyncPaginator[FacebookMarketplaceListing, FacebookMarketplaceData]:
        """Iterate Facebook Marketplace results, following pagination cursors.

        Yields validated `FacebookMarketplaceListing` items from the `listings` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.marketplace",
            dict(input),
            "listings",
            item_model=FacebookMarketplaceListing,
            data_model=FacebookMarketplaceData,
            bare=False,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace_item", dict(input), options
        )
        return RunResult[FacebookMarketplaceItemData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace_location_search", dict(input), options
        )
        return RunResult[FacebookMarketplaceLocationSearchData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.page_contact", dict(input), options
        )
        return RunResult[FacebookPageContactData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.photos", dict(input), options
        )
        return RunResult[FacebookPhotosData].model_validate(raw)

    def iter_photos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPhotosInput],
    ) -> AsyncPaginator[FacebookPhotosPhoto, FacebookPhotosData]:
        """Iterate Facebook Page Photos results, following pagination cursors.

        Yields validated `FacebookPhotosPhoto` items from the `photos` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.photos",
            dict(input),
            "photos",
            item_model=FacebookPhotosPhoto,
            data_model=FacebookPhotosData,
            bare=False,
            options=options,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.post", dict(input), options
        )
        return RunResult[FacebookPostData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.post_comments", dict(input), options
        )
        return RunResult[FacebookPostCommentsData].model_validate(raw)

    def iter_post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostCommentsInput],
    ) -> AsyncPaginator[FacebookPostCommentsComment, FacebookPostCommentsData]:
        """Iterate Facebook Post Comments results, following pagination cursors.

        Yields validated `FacebookPostCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.post_comments",
            dict(input),
            "comments",
            item_model=FacebookPostCommentsComment,
            data_model=FacebookPostCommentsData,
            bare=False,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.post_transcript", dict(input), options
        )
        return RunResult[FacebookPostTranscriptData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile", dict(input), options
        )
        return RunResult[FacebookProfileData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_events", dict(input), options
        )
        return RunResult[FacebookProfileEventsData].model_validate(raw)

    def iter_profile_events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileEventsInput],
    ) -> AsyncPaginator[FacebookProfileEventsEvent, FacebookProfileEventsData]:
        """Iterate Facebook Page Events results, following pagination cursors.

        Yields validated `FacebookProfileEventsEvent` items from the `events` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "facebook.profile_events",
            dict(input),
            "events",
            item_model=FacebookProfileEventsEvent,
            data_model=FacebookProfileEventsData,
            bare=False,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_posts", dict(input), options
        )
        return RunResult[FacebookProfilePostsData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_reels", dict(input), options
        )
        return RunResult[FacebookProfileReelsData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_companies", dict(input), options
        )
        return RunResult[FacebookSearchCompaniesData].model_validate(raw)

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

        Price: $0.001 per request plus $0.011 per result.

        Example:
            res = client.facebook.search_pages(limit=3, query="nike")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_pages", dict(input), options
        )
        return RunResult[FacebookSearchPagesData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_posts", dict(input), options
        )
        return RunResult[FacebookSearchPostsData].model_validate(raw)
