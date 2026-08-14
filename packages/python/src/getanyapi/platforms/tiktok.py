# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the tiktok platform."""

from __future__ import annotations

from typing import Any, Literal, TYPE_CHECKING

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


class TiktokAdLibraryAdInput(TypedDict, total=False):
    """Input for TikTok Ad Library Ad."""

    adId: Required[str]
    """TikTok Top Ads material/ad ID, or a Top Ads detail URL (e.g. 7648493525660270600)."""


class TiktokAdLibrarySearchInput(TypedDict, total=False):
    """Input for TikTok Ad Library Search."""

    adFormat: NotRequired[Literal["spark_ads", "non_spark_ads"]]
    """Ad format filter."""
    adLanguage: NotRequired[
        Literal[
            "en",
            "es",
            "ar",
            "vi",
            "th",
            "de",
            "id",
            "pt",
            "fr",
            "ms",
            "nl",
            "ja",
            "it",
            "ro",
            "zh-Hant",
            "ko",
        ]
    ]
    """Ad language filter."""
    advertiserName: NotRequired[str]
    """Filter to a specific advertiser by name (searches the public TikTok Ads Library by advertiser)."""
    cursor: NotRequired[str]
    """Page number for pagination (defaults to 1)."""
    duration: NotRequired[
        Literal["under_10s", "10_20s", "20_30s", "30_40s", "40_50s", "over_50s"]
    ]
    """Video duration bucket filter."""
    industry: NotRequired[
        Literal[
            "apparel_accessories",
            "appliances",
            "apps",
            "baby_kids_maternity",
            "beauty_personal_care",
            "business_services",
            "ecommerce_non_app",
            "education",
            "financial_services",
            "food_beverage",
            "games",
            "health",
            "home_improvement",
            "household_products",
            "life_services",
            "news_entertainment",
            "pets",
            "sports_outdoor",
            "tech_electronics",
            "travel",
            "vehicle_transportation",
        ]
    ]
    """Advertiser industry filter."""
    likes: NotRequired[
        Literal["top_1_20", "top_21_40", "top_41_60", "top_61_80", "top_81_100"]
    ]
    """Likes percentile bucket filter (top_1_20 is the top-performing 20 percent)."""
    limit: NotRequired[Any]
    """Results per page, with an existing maximum of 50 (default 20). Use a canonical JSON integer; legacy numeric strings remain accepted."""
    objective: NotRequired[
        Literal[
            "app_installs",
            "conversions",
            "lead_generation",
            "product_sales",
            "reach",
            "traffic",
            "video_views",
        ]
    ]
    """Campaign objective filter."""
    orderBy: NotRequired[str]
    """Sort metric: for_you, impression, play_2s_rate, play_6s_rate, cvr, ctr, or like."""
    period: NotRequired[Any]
    """Time window for top ads. Use the canonical JSON integer 7, 30, or 180; legacy numeric strings remain accepted."""
    query: Required[str]
    """Keyword to search ad titles and content (e.g. spotify)."""
    region: NotRequired[str]
    """Country code (defaults to US)."""


class TiktokAdTransparencySearchInput(TypedDict, total=False):
    """Input for TikTok Ad Transparency Search."""

    advertiserId: NotRequired[str]
    """TikTok Commercial Content Library advertiser ID. Provide advertiserId or query."""
    cursor: NotRequired[str]
    """Search cursor from a previous response's nextCursor."""
    days: NotRequired[int]
    """Number of days of Commercial Content Library history to search, from 1 to 365. Defaults to 30. Range: 1 to 365. Default: 30."""
    limit: NotRequired[int]
    """Maximum number of ads to return, from 1 to 50. Defaults to 20. Billing is flat per request. Range: 1 to 50. Default: 20."""
    offset: NotRequired[int]
    """Zero-based result offset. Defaults to 0. Minimum: 0. Default: 0."""
    query: NotRequired[str]
    """Keyword to search in TikTok's EU Commercial Content Library. Provide query or advertiserId."""
    region: NotRequired[str]
    """Region code for the transparency search. Defaults to DE. Default: DE."""
    sort: NotRequired[str]
    """Upstream sort expression. Defaults to last_shown_date,desc. Default: last_shown_date,desc."""


class TiktokAudienceDemographicsInput(TypedDict, total=False):
    """Input for TikTok Audience Demographics."""

    handle: Required[str]
    """TikTok username without the leading @ (e.g. "shakira")."""


class TiktokCommentRepliesInput(TypedDict, total=False):
    """Input for TikTok Comment Replies."""

    commentId: Required[str]
    """TikTok comment ID (the comment's cid from the comments endpoint)."""
    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    url: Required[str]
    """TikTok video URL the comment belongs to."""


class TiktokFollowersInput(TypedDict, total=False):
    """Input for TikTok Followers."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor, to fetch the next page of followers."""
    handle: Required[str]
    """TikTok username whose followers to list, without the @ prefix (e.g. stoolpresidente)."""


class TiktokFollowingInput(TypedDict, total=False):
    """Input for TikTok Following."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    handle: Required[str]
    """TikTok username without the leading @ (e.g. "stoolpresidente")."""


class TiktokHashtagVideosInput(TypedDict, total=False):
    """Input for TikTok Hashtag Videos."""

    hashtag: Required[str]
    """TikTok hashtag to fetch videos for, without the # prefix (e.g. booktok)."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""


class TiktokLiveInput(TypedDict, total=False):
    """Input for TikTok Live."""

    handle: Required[str]
    """TikTok username without the leading @ (e.g. "thejustalex")."""


class TiktokProfileInput(TypedDict, total=False):
    """Input for TikTok Profile."""

    handle: Required[str]
    """TikTok username without the leading @ (e.g. "stoolpresidente")."""


class TiktokProfileRegionInput(TypedDict, total=False):
    """Input for TikTok Profile Region."""

    handle: Required[str]
    """TikTok username without the leading @ (e.g. "stoolpresidente")."""


class TiktokProfileVideosInput(TypedDict, total=False):
    """Input for TikTok Profile Videos."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    handle: Required[str]
    """TikTok username without the leading @."""


class TiktokSearchHashtagInput(TypedDict, total=False):
    """Input for TikTok Hashtag Search."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    query: Required[str]
    """Hashtag or keyword to search for (without the leading #)."""


class TiktokSearchKeywordInput(TypedDict, total=False):
    """Input for TikTok Keyword Search."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    datePosted: NotRequired[Any]
    """Time frame filter. Use a canonical JSON integer that is nonnegative; common values are 0 for any time, 1 for the past 24 hours, 7 for the past week, and 30 for the past month. Legacy numeric strings remain accepted."""
    query: Required[str]
    """The keyword to search TikTok for."""
    sortBy: NotRequired[Any]
    """Sort order. Use the canonical JSON integer 0 for relevance or 1 for most liked; legacy numeric strings remain accepted."""


class TiktokSearchTopInput(TypedDict, total=False):
    """Input for TikTok Top Search."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    publishTime: NotRequired[str]
    """Time-frame filter: yesterday, this-week, this-month, last-3-months, last-6-months, all-time."""
    query: Required[str]
    """Keyword to search for (e.g. "funny")."""
    region: NotRequired[str]
    """2-letter country code for the proxy location (e.g. US, GB, FR)."""
    sortBy: NotRequired[str]
    """Sort order: relevance, most-liked, date-posted."""


class TiktokSearchUsersInput(TypedDict, total=False):
    """Input for TikTok User Search."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    query: Required[str]
    """The keyword to search TikTok accounts for."""


class TiktokSongInput(TypedDict, total=False):
    """Input for TikTok Song."""

    clipId: Required[str]
    """The clip identifier for the song, found in TikTok music URLs (e.g. 7439295283975702544)."""


class TiktokSongVideosInput(TypedDict, total=False):
    """Input for TikTok Song Videos."""

    clipId: Required[str]
    """The song ID found in TikTok music URLs (e.g. 7439295283975702544)."""
    cursor: NotRequired[str]
    """Pagination cursor for retrieving the next page of results."""


class TiktokTopAdsSearchInput(TypedDict, total=False):
    """Input for TikTok Top Ads Search."""

    adLanguage: NotRequired[
        Literal[
            "en",
            "es",
            "ar",
            "vi",
            "th",
            "de",
            "id",
            "pt",
            "fr",
            "ms",
            "nl",
            "ja",
            "it",
            "ro",
            "zh-Hant",
            "ko",
        ]
    ]
    """Language code for returned ads (default en). Default: en."""
    limit: NotRequired[int]
    """Maximum number of ads requested for this page, from 1 through 20 (default 20). Range: 1 to 20. Default: 20."""
    objective: NotRequired[
        Literal[
            "traffic",
            "app_installs",
            "conversions",
            "video_views",
            "reach",
            "lead_generation",
            "product_sales",
        ]
    ]
    """Campaign objective filter (default traffic). Default: traffic."""
    orderBy: NotRequired[Literal["for_you", "likes"]]
    """Result ordering: Creative Center recommendations or like count (default for_you). Default: for_you."""
    page: NotRequired[int]
    """One-based provider page number (default 1). Minimum: 1. Default: 1."""
    performanceRank: NotRequired[
        Literal["top_1_20", "top_21_40", "top_41_60", "top_61_80"]
    ]
    """Ad performance percentile bucket, where top_1_20 is the highest-performing 20 percent (default top_1_20). Default: top_1_20."""
    period: NotRequired[int]
    """Lookback period in days (default 180). Default: 180."""
    query: Required[str]
    """Keyword to search in TikTok Creative Center top video ads."""
    region: NotRequired[str]
    """Country code used to select the Creative Center market (default US). Default: US."""


class TiktokTrendingFeedInput(TypedDict, total=False):
    """Input for TikTok Trending Feed."""

    region: Required[str]
    """2-letter country code for the proxy location (e.g. "US")."""
    trim: NotRequired[str]
    """Set to true to return a simplified response."""


class TiktokVideoInput(TypedDict, total=False):
    """Input for TikTok Video."""

    url: Required[str]
    """Full TikTok video URL."""


class TiktokVideoCommentsInput(TypedDict, total=False):
    """Input for TikTok Video Comments."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    url: Required[str]
    """Full TikTok video URL."""


class TiktokVideoTranscriptInput(TypedDict, total=False):
    """Input for TikTok Video Transcript."""

    url: Required[str]
    """Full TikTok video URL."""


class TiktokVideoTranscriptFullInput(TypedDict, total=False):
    """Input for TikTok Video Transcript (Audio)."""

    url: Required[str]
    """TikTok video URL (e.g. "https://www.tiktok.com/@user/video/1234567890")."""


class TiktokAdLibraryAdData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    ad_id: str = Field(
        alias="adId",
        description="Populated whenever the provider has data for the entity.",
    )
    ad_title: str = Field(
        alias="adTitle",
        description="Populated whenever the provider has data for the entity.",
    )
    brand_name: str = Field(alias="brandName")
    comments: int
    cost: float
    cover_url: str = Field(
        alias="coverUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    ctr: float
    industry: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    landing_page: str = Field(
        alias="landingPage",
        description="Populated whenever the provider has data for the entity.",
    )
    likes: int
    objective: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    shares: int
    video_url: str = Field(
        alias="videoUrl",
        description="Populated whenever the provider has data for the entity.",
    )


class TiktokAdLibrarySearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    ads: list[TiktokAdLibrarySearchAd] = Field(
        description="Populated whenever the provider has data for the entity."
    )
    has_more: bool = Field(alias="hasMore")
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of ads, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    total: int


class TiktokAdLibrarySearchAd(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    ad_id: str = Field(
        alias="adId",
        description="Populated whenever the provider has data for the entity.",
    )
    ad_title: str = Field(
        alias="adTitle",
        description="Populated whenever the provider has data for the entity.",
    )
    brand_name: str = Field(alias="brandName")
    cost: float
    cover_url: str = Field(
        alias="coverUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    ctr: float
    industry: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    objective: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    video_url: str = Field(
        alias="videoUrl",
        description="Populated whenever the provider has data for the entity.",
    )


class TiktokAdTransparencySearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    ads: list[TiktokAdTransparencySearchAd] = Field(
        description="Commercial Content Library ad records returned for the search. Populated whenever the provider has data for the entity."
    )
    has_more: bool = Field(
        alias="hasMore",
        description="Whether the Commercial Content Library reports more matching ads. Populated whenever the provider has data for the entity.",
    )
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Search cursor to pass as cursor on a subsequent request, or null when there is no next page. Populated whenever the provider has data for the entity.",
    )
    offset: int = Field(description="Zero-based result offset reported for this page.")
    region: str = Field(
        description="Region code applied to this transparency search. Populated whenever the provider has data for the entity."
    )
    total: int = Field(
        description="Total number of matching ads reported by the Commercial Content Library. Populated whenever the provider has data for the entity."
    )


class TiktokAdTransparencySearchAd(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    advertiser_name: str | None = Field(
        default=None,
        alias="advertiserName",
        description="Advertiser display name associated with the ad. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    first_shown_utc: float | None = Field(
        default=None,
        alias="firstShownUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the ad was first shown. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    format: str | None = Field(
        default=None,
        description="Commercial Content Library creative format code for the ad. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    id: str = Field(
        description="TikTok Commercial Content Library ad identifier. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="Signed cover image URL exactly as returned by the Commercial Content Library. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    last_shown_utc: float | None = Field(
        default=None,
        alias="lastShownUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the ad was last shown. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    status: str | None = Field(
        default=None,
        description="Commercial Content Library audit status code for the ad. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    video_url: str | None = Field(
        default=None,
        alias="videoUrl",
        description="Signed video asset URL exactly as returned by the Commercial Content Library. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )


class TiktokAudienceDemographicsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    audience_locations: list[TiktokAudienceDemographicsAudienceLocation] = Field(
        alias="audienceLocations"
    )


class TiktokAudienceDemographicsAudienceLocation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    count: int
    country: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    country_code: str = Field(
        alias="countryCode",
        description="Populated whenever the provider has data for the entity.",
    )
    percentage: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokCommentRepliesData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    comments: list[TiktokCommentRepliesComment]
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.",
    )


class TiktokCommentRepliesComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    text: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokFollowersData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    followers: list[TiktokFollowersFollower]
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of followers, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    total: int


class TiktokFollowersFollower(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(alias="avatarUrl")
    follower_count: int = Field(alias="followerCount")
    following_count: int = Field(alias="followingCount")
    nickname: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    region: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    user_id: str = Field(
        alias="userId",
        description="Populated whenever the provider has data for the entity.",
    )
    username: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokFollowingData(BaseModel):
    following: list[TiktokFollowingFollowing]


class TiktokFollowingFollowing(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    bio: str
    display_name: str = Field(
        alias="displayName",
        description="Populated whenever the provider has data for the entity.",
    )
    followers: int
    handle: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    region: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    videos: int


class TiktokHashtagVideosData(BaseModel):
    items: list[TiktokHashtagVideosItem] = Field(
        description="Recent TikTok video records for the hashtag. Populated whenever the provider has data for the entity."
    )


class TiktokHashtagVideosItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_handle: str | None = Field(
        default=None,
        alias="authorHandle",
        description="Username of the video's creator, without the @ prefix. Empty when the upstream omits it.",
    )
    comment_count: int | None = Field(
        default=None,
        alias="commentCount",
        description="Number of comments on the video.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="The video's numeric TikTok ID, as a string. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="URL of the video's cover/thumbnail image, with tracking query params stripped. Empty when the upstream omits it.",
    )
    like_count: int | None = Field(
        default=None, alias="likeCount", description="Number of likes on the video."
    )
    play_count: int | None = Field(
        default=None,
        alias="playCount",
        description="Number of views/plays of the video.",
    )
    share_count: int | None = Field(
        default=None, alias="shareCount", description="Number of shares of the video."
    )
    text: str | None = Field(
        default=None,
        description="The video caption text. Empty for videos with no caption.",
    )
    url: str = Field(
        description="Canonical tiktok.com URL of the video, with tracking query params stripped. Populated whenever the provider has data for the entity."
    )


class TiktokLiveData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    cover_url: str = Field(
        alias="coverUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    display_name: str = Field(
        alias="displayName",
        description="Populated whenever the provider has data for the entity.",
    )
    enter_count: int = Field(alias="enterCount")
    handle: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    room_id: str = Field(
        alias="roomId",
        description="Populated whenever the provider has data for the entity.",
    )
    start_time: int = Field(alias="startTime")
    status: int
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    viewers: int


class TiktokProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(
        alias="avatarUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    bio: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    display_name: str = Field(
        alias="displayName",
        description="Populated whenever the provider has data for the entity.",
    )
    followers: int
    following: int
    handle: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    verified: bool
    videos: int


class TiktokProfileRegionData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    handle: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    profile_url: str = Field(
        alias="profileUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    region: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokProfileVideosData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of videos, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    videos: list[TiktokProfileVideosVideo]


class TiktokProfileVideosVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    caption: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    comments: int
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="URL of the video's cover/thumbnail image. A signed, short-lived TikTok CDN URL (typically expires within about a day; query params are load-bearing and kept intact), often served as HEIC rather than JPEG, so fetch it promptly and transcode if you need broad browser support. Absent when the upstream provides no cover.",
    )
    likes: int
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    views: int


class TiktokSearchHashtagData(BaseModel):
    videos: list[TiktokSearchHashtagVideo] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokSearchHashtagVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    caption: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    comments: int
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    shares: int
    views: int


class TiktokSearchKeywordData(BaseModel):
    videos: list[TiktokSearchKeywordVideo] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokSearchKeywordVideo(BaseModel):
    model_config = ConfigDict(extra="allow")

    caption: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    comments: int
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    region: str
    shares: int
    views: int


class TiktokSearchTopData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    items: list[TiktokSearchTopItem] = Field(
        description="Populated whenever the provider has data for the entity."
    )
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of results, or null when this lane has no more. Pass it back as cursor to continue.",
    )


class TiktokSearchTopItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    caption: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    comments: int
    content_type: str = Field(alias="contentType")
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    shares: int
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    views: int


class TiktokSearchUsersData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of users, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    users: list[TiktokSearchUsersUser] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokSearchUsersUser(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    followers: int
    following: int
    handle: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    nickname: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    user_id: str = Field(
        alias="userId",
        description="Populated whenever the provider has data for the entity.",
    )


class TiktokSongData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    album: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    author: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    cover_url: str = Field(
        alias="coverUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    duration: int = Field(
        description="Populated whenever the provider has data for the entity."
    )
    is_original: bool = Field(alias="isOriginal")
    share_url: str = Field(
        alias="shareUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    song_id: str = Field(
        alias="songId",
        description="Populated whenever the provider has data for the entity.",
    )
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    video_count: int = Field(alias="videoCount")


class TiktokSongVideosData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    has_more: int = Field(alias="hasMore")
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of videos, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    videos: list[TiktokSongVideosVideo] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokSongVideosVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_handle: str = Field(
        alias="authorHandle",
        description="Populated whenever the provider has data for the entity.",
    )
    author_name: str = Field(
        alias="authorName",
        description="Populated whenever the provider has data for the entity.",
    )
    comment_count: int = Field(alias="commentCount")
    create_time: int = Field(alias="createTime")
    description: str
    like_count: int = Field(alias="likeCount")
    play_count: int = Field(alias="playCount")
    share_count: int = Field(alias="shareCount")
    video_id: str = Field(
        alias="videoId",
        description="Populated whenever the provider has data for the entity.",
    )


class TiktokTopAdsSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    ads: list[TiktokTopAdsSearchAd] = Field(
        description="TikTok Creative Center top-ad records returned for this page. Populated whenever the provider has data for the entity."
    )
    has_more: bool = Field(
        alias="hasMore",
        description="Whether TikTok Creative Center reports another page of matching ads. Populated whenever the provider has data for the entity.",
    )
    page: int = Field(
        description="One-based page number reported by TikTok Creative Center. Populated whenever the provider has data for the entity."
    )
    page_size: int = Field(
        alias="pageSize",
        description="Page size reported by TikTok Creative Center. Populated whenever the provider has data for the entity.",
    )
    total: int = Field(
        description="Total number of matching top ads reported by TikTok Creative Center. Populated whenever the provider has data for the entity."
    )


class TiktokTopAdsSearchAd(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    ad_id: str = Field(
        alias="adId",
        description="TikTok Creative Center ad material identifier. Populated whenever the provider has data for the entity.",
    )
    ad_title: str | None = Field(
        default=None,
        alias="adTitle",
        description="Title or primary copy shown for the ad. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    brand_name: str | None = Field(
        default=None,
        alias="brandName",
        description="Advertiser brand name when supplied by TikTok Creative Center. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    cost: float | None = Field(
        default=None,
        description="TikTok Creative Center's relative cost ranking value for the ad. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    ctr: float | None = Field(
        default=None,
        description="TikTok Creative Center's click-through rate value for the ad. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    duration_seconds: float | None = Field(
        default=None,
        alias="durationSeconds",
        description="Video duration in seconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    height: int | None = Field(
        default=None,
        description="Video height in pixels. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    image: str | None = Field(
        default=None,
        description="Signed video cover image URL exactly as returned by TikTok Creative Center. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    industry: str | None = Field(
        default=None,
        description="TikTok Creative Center industry classification key. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    likes: int | None = Field(
        default=None,
        description="Number of likes reported for the ad. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    objective: str | None = Field(
        default=None,
        description="TikTok Creative Center campaign objective key. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    video_url: str | None = Field(
        default=None,
        alias="videoUrl",
        description="Signed 720p video asset URL exactly as returned by TikTok Creative Center. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    width: int | None = Field(
        default=None,
        description="Video width in pixels. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )


class TiktokTrendingFeedData(BaseModel):
    videos: list[TiktokTrendingFeedVideo] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokTrendingFeedVideo(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    caption: str
    comments: int
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    region: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    shares: int
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    views: int


class TiktokVideoData(BaseModel):
    model_config = ConfigDict(extra="allow")

    caption: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    comments: int
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="URL of the video's cover/thumbnail image. A signed, short-lived TikTok CDN URL (typically expires within about a day; query params are load-bearing and kept intact), often served as HEIC rather than JPEG, so fetch it promptly and transcode if you need broad browser support. Absent when the upstream provides no cover.",
    )
    likes: int
    region: str
    saves: int
    shares: int
    views: int


class TiktokVideoCommentsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    comments: list[TiktokVideoCommentsComment]
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.",
    )


class TiktokVideoCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    replies: int
    text: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokVideoTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")

    language: str | None = None
    transcript: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokVideoTranscriptFullData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    duration_seconds: float | None = Field(
        default=None,
        alias="durationSeconds",
        description="Video duration in seconds. Minimum: 0.",
    )
    language: str | None = Field(
        default=None,
        description='Detected spoken language of the audio (BCP-47 style code, e.g. "en").',
    )
    segments: list[TiktokVideoTranscriptFullSegment] | None = Field(
        default=None,
        description="Timed transcript segments in playback order, each with the recognizer's per-word confidence so low-confidence text can be treated as uncertain rather than quoted. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    source: str = Field(
        description='How the text was produced. Always "audio_asr" on this endpoint: the words come from automatic speech recognition over the audio, not from a caption track the platform published. Populated whenever the provider has data for the entity.'
    )
    transcript: str = Field(
        description="Full spoken-word transcript, machine-transcribed from the video's audio track. Populated whenever the provider has data for the entity."
    )


class TiktokVideoTranscriptFullSegment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    end_seconds: float = Field(
        alias="endSeconds", description="Segment end offset in seconds. Minimum: 0."
    )
    language: str | None = Field(
        default=None, description="Detected language for this segment."
    )
    speaker: str | None = Field(
        default=None,
        description='Recognizer speaker label for this segment (e.g. "SPEAKER_00"). Diarization is a guess, not an identification.',
    )
    start_seconds: float = Field(
        alias="startSeconds", description="Segment start offset in seconds. Minimum: 0."
    )
    text: str = Field(description="Text of this segment.")
    words: list[TiktokVideoTranscriptFullWord] | None = Field(
        default=None,
        description="Per-word timing and recognizer confidence for this segment.",
    )


class TiktokVideoTranscriptFullWord(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    confidence: float = Field(
        description="Recognizer confidence for this word, 0 to 1. Low values mark words the recognizer guessed; they are common on names, jargon, and music. Range: 0 to 1."
    )
    end_seconds: float | None = Field(
        default=None,
        alias="endSeconds",
        description="Word end offset in seconds. Minimum: 0.",
    )
    speaker: str | None = Field(
        default=None, description="Recognizer speaker label for this word."
    )
    start_seconds: float | None = Field(
        default=None,
        alias="startSeconds",
        description="Word start offset in seconds. Minimum: 0.",
    )
    word: str = Field(description="The recognized word.")


class TiktokNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def ad_library_ad(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAdLibraryAdInput],
    ) -> RunResult[TiktokAdLibraryAdData]:
        """TikTok Ad Library Ad

        Fetch full details for a single TikTok ad (brand, title, spend, CTR,
        objectives, landing page, and video info).

        Price: $0.0012 per request.

        Example:
            res = client.tiktok.ad_library_ad(adId="7648493525660270600")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.ad_library_ad", dict(input), options
        )
        return RunResult[TiktokAdLibraryAdData].model_validate(raw)

    def ad_library_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAdLibrarySearchInput],
    ) -> RunResult[TiktokAdLibrarySearchData]:
        """TikTok Ad Library Search

        Search TikTok's ad library by keyword (top ads with brand, title, spend,
        CTR, likes, and video info).

        Price: $0.002 per request.

        Example:
            res = client.tiktok.ad_library_search(limit=20, objective="conversions", period=30, query="spotify")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.ad_library_search", dict(input), options
        )
        return RunResult[TiktokAdLibrarySearchData].model_validate(raw)

    def iter_ad_library_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAdLibrarySearchInput],
    ) -> Paginator[TiktokAdLibrarySearchAd, TiktokAdLibrarySearchData]:
        """Iterate TikTok Ad Library Search results, following pagination cursors.

        Yields validated `TiktokAdLibrarySearchAd` items from the `ads` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok.ad_library_search",
            dict(input),
            "ads",
            item_model=TiktokAdLibrarySearchAd,
            data_model=TiktokAdLibrarySearchData,
            bare=False,
            options=options,
        )

    def ad_transparency_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAdTransparencySearchInput],
    ) -> RunResult[TiktokAdTransparencySearchData]:
        """TikTok Ad Transparency Search

        Search TikTok's EU Commercial Content Library by keyword or advertiser ID.

        Price: $0.0009 per request.

        Example:
            res = client.tiktok.ad_transparency_search(days=30, limit=20, query="nike", region="DE")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.ad_transparency_search", dict(input), options
        )
        return RunResult[TiktokAdTransparencySearchData].model_validate(raw)

    def iter_ad_transparency_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAdTransparencySearchInput],
    ) -> Paginator[TiktokAdTransparencySearchAd, TiktokAdTransparencySearchData]:
        """Iterate TikTok Ad Transparency Search results, following pagination cursors.

        Yields validated `TiktokAdTransparencySearchAd` items from the `ads` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok.ad_transparency_search",
            dict(input),
            "ads",
            item_model=TiktokAdTransparencySearchAd,
            data_model=TiktokAdTransparencySearchData,
            bare=False,
            options=options,
        )

    def audience_demographics(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAudienceDemographicsInput],
    ) -> RunResult[TiktokAudienceDemographicsData]:
        """TikTok Audience Demographics

        Get the audience country breakdown (follower count and share per country)
        for a TikTok creator by handle.

        Price: $0.018 per request.

        Example:
            res = client.tiktok.audience_demographics(handle="shakira")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.audience_demographics", dict(input), options
        )
        return RunResult[TiktokAudienceDemographicsData].model_validate(raw)

    def comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokCommentRepliesInput],
    ) -> RunResult[TiktokCommentRepliesData]:
        """TikTok Comment Replies

        List the replies to a TikTok comment with cursor pagination (text, author,
        likes).

        Price: $0.002 per request.

        Example:
            res = client.tiktok.comment_replies(commentId="7623828115408274207", url="https://www.tiktok.com/@stoolpresidente/video/7623818255903329566")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.comment_replies", dict(input), options
        )
        return RunResult[TiktokCommentRepliesData].model_validate(raw)

    def iter_comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokCommentRepliesInput],
    ) -> Paginator[TiktokCommentRepliesComment, TiktokCommentRepliesData]:
        """Iterate TikTok Comment Replies results, following pagination cursors.

        Yields validated `TiktokCommentRepliesComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok.comment_replies",
            dict(input),
            "comments",
            item_model=TiktokCommentRepliesComment,
            data_model=TiktokCommentRepliesData,
            bare=False,
            options=options,
        )

    def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokFollowersInput],
    ) -> RunResult[TiktokFollowersData]:
        """TikTok Followers

        List the followers of a TikTok account by username, returning each
        follower's profile basics.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.followers(handle="stoolpresidente")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.followers", dict(input), options
        )
        return RunResult[TiktokFollowersData].model_validate(raw)

    def iter_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokFollowersInput],
    ) -> Paginator[TiktokFollowersFollower, TiktokFollowersData]:
        """Iterate TikTok Followers results, following pagination cursors.

        Yields validated `TiktokFollowersFollower` items from the `followers` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok.followers",
            dict(input),
            "followers",
            item_model=TiktokFollowersFollower,
            data_model=TiktokFollowersData,
            bare=False,
            options=options,
        )

    def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokFollowingInput],
    ) -> RunResult[TiktokFollowingData]:
        """TikTok Following

        List the accounts a TikTok user follows (handle, display name, follower
        count, bio) by username.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.following(handle="stoolpresidente")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.following", dict(input), options
        )
        return RunResult[TiktokFollowingData].model_validate(raw)

    def hashtag_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokHashtagVideosInput],
    ) -> RunResult[TiktokHashtagVideosData]:
        """TikTok Hashtag Videos

        List recent TikTok videos for a hashtag (creator, caption, views, likes,
        shares).

        Price: $0.00144 per request.

        Example:
            res = client.tiktok.hashtag_videos(hashtag="cooking", limit=3)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.hashtag_videos", dict(input), options
        )
        return RunResult[TiktokHashtagVideosData].model_validate(raw)

    def live(
        self, *, options: RequestOptions | None = None, **input: Unpack[TiktokLiveInput]
    ) -> RunResult[TiktokLiveData]:
        """TikTok Live

        Check whether a TikTok creator is live and get the current live room (title,
        viewers, start time) by handle.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.live(handle="thejustalex")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.live", dict(input), options
        )
        return RunResult[TiktokLiveData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokProfileInput],
    ) -> RunResult[TiktokProfileData]:
        """TikTok Profile

        Fetch a TikTok creator's public profile (followers, likes, bio,
        verification) by handle.

        Price: $0.0009 per request.

        Example:
            res = client.tiktok.profile(handle="zachking")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.profile", dict(input), options
        )
        return RunResult[TiktokProfileData].model_validate(raw)

    def profile_region(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokProfileRegionInput],
    ) -> RunResult[TiktokProfileRegionData]:
        """TikTok Profile Region

        Resolve the home region (country) of a TikTok creator by handle.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.profile_region(handle="stoolpresidente")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.profile_region", dict(input), options
        )
        return RunResult[TiktokProfileRegionData].model_validate(raw)

    def profile_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokProfileVideosInput],
    ) -> RunResult[TiktokProfileVideosData]:
        """TikTok Profile Videos

        List a TikTok creator's recent videos (views, likes, comments) by handle
        with cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok.profile_videos(handle="zachking")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.profile_videos", dict(input), options
        )
        return RunResult[TiktokProfileVideosData].model_validate(raw)

    def iter_profile_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokProfileVideosInput],
    ) -> Paginator[TiktokProfileVideosVideo, TiktokProfileVideosData]:
        """Iterate TikTok Profile Videos results, following pagination cursors.

        Yields validated `TiktokProfileVideosVideo` items from the `videos` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok.profile_videos",
            dict(input),
            "videos",
            item_model=TiktokProfileVideosVideo,
            data_model=TiktokProfileVideosData,
            bare=False,
            options=options,
        )

    def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSearchHashtagInput],
    ) -> RunResult[TiktokSearchHashtagData]:
        """TikTok Hashtag Search

        Search TikTok by hashtag and get matching videos (caption, views, likes,
        comments, shares) as normalized JSON.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.search_hashtag(query="recipe")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.search_hashtag", dict(input), options
        )
        return RunResult[TiktokSearchHashtagData].model_validate(raw)

    def search_keyword(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSearchKeywordInput],
    ) -> RunResult[TiktokSearchKeywordData]:
        """TikTok Keyword Search

        Search TikTok by keyword and get matching videos (caption, views, likes,
        comments, shares) as normalized JSON.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok.search_keyword(datePosted=0, query="cooking", sortBy=0)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.search_keyword", dict(input), options
        )
        return RunResult[TiktokSearchKeywordData].model_validate(raw)

    def search_top(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSearchTopInput],
    ) -> RunResult[TiktokSearchTopData]:
        """TikTok Top Search

        Search TikTok's top results for a keyword (caption, views, likes, comments,
        shares) with cursor pagination.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.search_top(query="funny")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.search_top", dict(input), options
        )
        return RunResult[TiktokSearchTopData].model_validate(raw)

    def iter_search_top(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSearchTopInput],
    ) -> Paginator[TiktokSearchTopItem, TiktokSearchTopData]:
        """Iterate TikTok Top Search results, following pagination cursors.

        Yields validated `TiktokSearchTopItem` items from the `items` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok.search_top",
            dict(input),
            "items",
            item_model=TiktokSearchTopItem,
            data_model=TiktokSearchTopData,
            bare=False,
            options=options,
        )

    def search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSearchUsersInput],
    ) -> RunResult[TiktokSearchUsersData]:
        """TikTok User Search

        Search TikTok accounts by keyword (handle, nickname, follower count) with
        cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok.search_users(query="chef")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.search_users", dict(input), options
        )
        return RunResult[TiktokSearchUsersData].model_validate(raw)

    def iter_search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSearchUsersInput],
    ) -> Paginator[TiktokSearchUsersUser, TiktokSearchUsersData]:
        """Iterate TikTok User Search results, following pagination cursors.

        Yields validated `TiktokSearchUsersUser` items from the `users` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok.search_users",
            dict(input),
            "users",
            item_model=TiktokSearchUsersUser,
            data_model=TiktokSearchUsersData,
            bare=False,
            options=options,
        )

    def song(
        self, *, options: RequestOptions | None = None, **input: Unpack[TiktokSongInput]
    ) -> RunResult[TiktokSongData]:
        """TikTok Song

        Fetch details for a TikTok song or sound (title, author, duration, cover
        art, and how many videos use it).

        Price: $0.002 per request.

        Example:
            res = client.tiktok.song(clipId="7439295283975702544")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.song", dict(input), options
        )
        return RunResult[TiktokSongData].model_validate(raw)

    def song_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSongVideosInput],
    ) -> RunResult[TiktokSongVideosData]:
        """TikTok Song Videos

        List TikTok videos that use a given song or sound (with descriptions,
        authors, and engagement stats).

        Price: $0.002 per request.

        Example:
            res = client.tiktok.song_videos(clipId="7439295283975702544")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.song_videos", dict(input), options
        )
        return RunResult[TiktokSongVideosData].model_validate(raw)

    def iter_song_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSongVideosInput],
    ) -> Paginator[TiktokSongVideosVideo, TiktokSongVideosData]:
        """Iterate TikTok Song Videos results, following pagination cursors.

        Yields validated `TiktokSongVideosVideo` items from the `videos` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok.song_videos",
            dict(input),
            "videos",
            item_model=TiktokSongVideosVideo,
            data_model=TiktokSongVideosData,
            bare=False,
            options=options,
        )

    def top_ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokTopAdsSearchInput],
    ) -> RunResult[TiktokTopAdsSearchData]:
        """TikTok Top Ads Search

        Search TikTok Creative Center top video ads by keyword with explicit
        performance, objective, region, language, and time-window filters.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok.top_ads_search(query="glasses")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.top_ads_search", dict(input), options
        )
        return RunResult[TiktokTopAdsSearchData].model_validate(raw)

    def trending_feed(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokTrendingFeedInput],
    ) -> RunResult[TiktokTrendingFeedData]:
        """TikTok Trending Feed

        Get TikTok's trending feed for a region (caption, views, likes, comments,
        author) as normalized JSON.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.trending_feed(region="US")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.trending_feed", dict(input), options
        )
        return RunResult[TiktokTrendingFeedData].model_validate(raw)

    def video(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokVideoInput],
    ) -> RunResult[TiktokVideoData]:
        """TikTok Video

        Fetch a single TikTok video by URL with its caption and engagement counts
        (views, likes, comments, shares, saves).

        Price: $0.0009 per request.

        Example:
            res = client.tiktok.video(url="https://www.tiktok.com/@mrbeast/video/7654638524729216287?_r=1&u_code=elgjf3ff8cajhk&preview_pb=0&sharer_language=en&_d=elh6737j6kjl71&share_item_id=7654638524729216287&source=h5_m")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.video", dict(input), options
        )
        return RunResult[TiktokVideoData].model_validate(raw)

    def video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokVideoCommentsInput],
    ) -> RunResult[TiktokVideoCommentsData]:
        """TikTok Video Comments

        List the comments on a TikTok video by URL with cursor pagination (text,
        author, likes, reply count).

        Price: $0.00144 per request.

        Example:
            res = client.tiktok.video_comments(url="https://www.tiktok.com/@zachking/video/7650468599424945422?_r=1&u_code=f0hj7d780760m9&preview_pb=0&sharer_language=en&_d=f0hj7blh067h71&share_item_id=7650468599424945422&source=h5_m")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.video_comments", dict(input), options
        )
        return RunResult[TiktokVideoCommentsData].model_validate(raw)

    def iter_video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokVideoCommentsInput],
    ) -> Paginator[TiktokVideoCommentsComment, TiktokVideoCommentsData]:
        """Iterate TikTok Video Comments results, following pagination cursors.

        Yields validated `TiktokVideoCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok.video_comments",
            dict(input),
            "comments",
            item_model=TiktokVideoCommentsComment,
            data_model=TiktokVideoCommentsData,
            bare=False,
            options=options,
        )

    def video_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokVideoTranscriptInput],
    ) -> RunResult[TiktokVideoTranscriptData]:
        """TikTok Video Transcript

        Fetch the spoken-word transcript of a TikTok video by URL.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.video_transcript(url="https://www.tiktok.com/@washingtonpost/video/7609177768793787679")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.video_transcript", dict(input), options
        )
        return RunResult[TiktokVideoTranscriptData].model_validate(raw)

    def video_transcript_full(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokVideoTranscriptFullInput],
    ) -> RunResult[TiktokVideoTranscriptFullData]:
        """TikTok Video Transcript (Audio)

        Transcribe the spoken audio of a TikTok video with timed segments, speaker
        labels, and per-word confidence - for videos TikTok publishes no subtitle
        track for.

        Price: $0.0168 per request plus $0 per result (maximum $0.0168).

        Example:
            res = client.tiktok.video_transcript_full(url="https://www.tiktok.com/@thatdudecancook/video/7649086431641521421")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.video_transcript_full", dict(input), options
        )
        return RunResult[TiktokVideoTranscriptFullData].model_validate(raw)


class AsyncTiktokNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def ad_library_ad(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAdLibraryAdInput],
    ) -> RunResult[TiktokAdLibraryAdData]:
        """TikTok Ad Library Ad

        Fetch full details for a single TikTok ad (brand, title, spend, CTR,
        objectives, landing page, and video info).

        Price: $0.0012 per request.

        Example:
            res = client.tiktok.ad_library_ad(adId="7648493525660270600")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.ad_library_ad", dict(input), options
        )
        return RunResult[TiktokAdLibraryAdData].model_validate(raw)

    async def ad_library_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAdLibrarySearchInput],
    ) -> RunResult[TiktokAdLibrarySearchData]:
        """TikTok Ad Library Search

        Search TikTok's ad library by keyword (top ads with brand, title, spend,
        CTR, likes, and video info).

        Price: $0.002 per request.

        Example:
            res = client.tiktok.ad_library_search(limit=20, objective="conversions", period=30, query="spotify")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.ad_library_search", dict(input), options
        )
        return RunResult[TiktokAdLibrarySearchData].model_validate(raw)

    def iter_ad_library_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAdLibrarySearchInput],
    ) -> AsyncPaginator[TiktokAdLibrarySearchAd, TiktokAdLibrarySearchData]:
        """Iterate TikTok Ad Library Search results, following pagination cursors.

        Yields validated `TiktokAdLibrarySearchAd` items from the `ads` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok.ad_library_search",
            dict(input),
            "ads",
            item_model=TiktokAdLibrarySearchAd,
            data_model=TiktokAdLibrarySearchData,
            bare=False,
            options=options,
        )

    async def ad_transparency_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAdTransparencySearchInput],
    ) -> RunResult[TiktokAdTransparencySearchData]:
        """TikTok Ad Transparency Search

        Search TikTok's EU Commercial Content Library by keyword or advertiser ID.

        Price: $0.0009 per request.

        Example:
            res = client.tiktok.ad_transparency_search(days=30, limit=20, query="nike", region="DE")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.ad_transparency_search", dict(input), options
        )
        return RunResult[TiktokAdTransparencySearchData].model_validate(raw)

    def iter_ad_transparency_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAdTransparencySearchInput],
    ) -> AsyncPaginator[TiktokAdTransparencySearchAd, TiktokAdTransparencySearchData]:
        """Iterate TikTok Ad Transparency Search results, following pagination cursors.

        Yields validated `TiktokAdTransparencySearchAd` items from the `ads` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok.ad_transparency_search",
            dict(input),
            "ads",
            item_model=TiktokAdTransparencySearchAd,
            data_model=TiktokAdTransparencySearchData,
            bare=False,
            options=options,
        )

    async def audience_demographics(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAudienceDemographicsInput],
    ) -> RunResult[TiktokAudienceDemographicsData]:
        """TikTok Audience Demographics

        Get the audience country breakdown (follower count and share per country)
        for a TikTok creator by handle.

        Price: $0.018 per request.

        Example:
            res = client.tiktok.audience_demographics(handle="shakira")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.audience_demographics", dict(input), options
        )
        return RunResult[TiktokAudienceDemographicsData].model_validate(raw)

    async def comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokCommentRepliesInput],
    ) -> RunResult[TiktokCommentRepliesData]:
        """TikTok Comment Replies

        List the replies to a TikTok comment with cursor pagination (text, author,
        likes).

        Price: $0.002 per request.

        Example:
            res = client.tiktok.comment_replies(commentId="7623828115408274207", url="https://www.tiktok.com/@stoolpresidente/video/7623818255903329566")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.comment_replies", dict(input), options
        )
        return RunResult[TiktokCommentRepliesData].model_validate(raw)

    def iter_comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokCommentRepliesInput],
    ) -> AsyncPaginator[TiktokCommentRepliesComment, TiktokCommentRepliesData]:
        """Iterate TikTok Comment Replies results, following pagination cursors.

        Yields validated `TiktokCommentRepliesComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok.comment_replies",
            dict(input),
            "comments",
            item_model=TiktokCommentRepliesComment,
            data_model=TiktokCommentRepliesData,
            bare=False,
            options=options,
        )

    async def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokFollowersInput],
    ) -> RunResult[TiktokFollowersData]:
        """TikTok Followers

        List the followers of a TikTok account by username, returning each
        follower's profile basics.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.followers(handle="stoolpresidente")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.followers", dict(input), options
        )
        return RunResult[TiktokFollowersData].model_validate(raw)

    def iter_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokFollowersInput],
    ) -> AsyncPaginator[TiktokFollowersFollower, TiktokFollowersData]:
        """Iterate TikTok Followers results, following pagination cursors.

        Yields validated `TiktokFollowersFollower` items from the `followers` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok.followers",
            dict(input),
            "followers",
            item_model=TiktokFollowersFollower,
            data_model=TiktokFollowersData,
            bare=False,
            options=options,
        )

    async def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokFollowingInput],
    ) -> RunResult[TiktokFollowingData]:
        """TikTok Following

        List the accounts a TikTok user follows (handle, display name, follower
        count, bio) by username.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.following(handle="stoolpresidente")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.following", dict(input), options
        )
        return RunResult[TiktokFollowingData].model_validate(raw)

    async def hashtag_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokHashtagVideosInput],
    ) -> RunResult[TiktokHashtagVideosData]:
        """TikTok Hashtag Videos

        List recent TikTok videos for a hashtag (creator, caption, views, likes,
        shares).

        Price: $0.00144 per request.

        Example:
            res = client.tiktok.hashtag_videos(hashtag="cooking", limit=3)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.hashtag_videos", dict(input), options
        )
        return RunResult[TiktokHashtagVideosData].model_validate(raw)

    async def live(
        self, *, options: RequestOptions | None = None, **input: Unpack[TiktokLiveInput]
    ) -> RunResult[TiktokLiveData]:
        """TikTok Live

        Check whether a TikTok creator is live and get the current live room (title,
        viewers, start time) by handle.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.live(handle="thejustalex")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.live", dict(input), options
        )
        return RunResult[TiktokLiveData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokProfileInput],
    ) -> RunResult[TiktokProfileData]:
        """TikTok Profile

        Fetch a TikTok creator's public profile (followers, likes, bio,
        verification) by handle.

        Price: $0.0009 per request.

        Example:
            res = client.tiktok.profile(handle="zachking")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.profile", dict(input), options
        )
        return RunResult[TiktokProfileData].model_validate(raw)

    async def profile_region(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokProfileRegionInput],
    ) -> RunResult[TiktokProfileRegionData]:
        """TikTok Profile Region

        Resolve the home region (country) of a TikTok creator by handle.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.profile_region(handle="stoolpresidente")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.profile_region", dict(input), options
        )
        return RunResult[TiktokProfileRegionData].model_validate(raw)

    async def profile_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokProfileVideosInput],
    ) -> RunResult[TiktokProfileVideosData]:
        """TikTok Profile Videos

        List a TikTok creator's recent videos (views, likes, comments) by handle
        with cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok.profile_videos(handle="zachking")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.profile_videos", dict(input), options
        )
        return RunResult[TiktokProfileVideosData].model_validate(raw)

    def iter_profile_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokProfileVideosInput],
    ) -> AsyncPaginator[TiktokProfileVideosVideo, TiktokProfileVideosData]:
        """Iterate TikTok Profile Videos results, following pagination cursors.

        Yields validated `TiktokProfileVideosVideo` items from the `videos` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok.profile_videos",
            dict(input),
            "videos",
            item_model=TiktokProfileVideosVideo,
            data_model=TiktokProfileVideosData,
            bare=False,
            options=options,
        )

    async def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSearchHashtagInput],
    ) -> RunResult[TiktokSearchHashtagData]:
        """TikTok Hashtag Search

        Search TikTok by hashtag and get matching videos (caption, views, likes,
        comments, shares) as normalized JSON.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.search_hashtag(query="recipe")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.search_hashtag", dict(input), options
        )
        return RunResult[TiktokSearchHashtagData].model_validate(raw)

    async def search_keyword(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSearchKeywordInput],
    ) -> RunResult[TiktokSearchKeywordData]:
        """TikTok Keyword Search

        Search TikTok by keyword and get matching videos (caption, views, likes,
        comments, shares) as normalized JSON.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok.search_keyword(datePosted=0, query="cooking", sortBy=0)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.search_keyword", dict(input), options
        )
        return RunResult[TiktokSearchKeywordData].model_validate(raw)

    async def search_top(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSearchTopInput],
    ) -> RunResult[TiktokSearchTopData]:
        """TikTok Top Search

        Search TikTok's top results for a keyword (caption, views, likes, comments,
        shares) with cursor pagination.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.search_top(query="funny")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.search_top", dict(input), options
        )
        return RunResult[TiktokSearchTopData].model_validate(raw)

    def iter_search_top(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSearchTopInput],
    ) -> AsyncPaginator[TiktokSearchTopItem, TiktokSearchTopData]:
        """Iterate TikTok Top Search results, following pagination cursors.

        Yields validated `TiktokSearchTopItem` items from the `items` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok.search_top",
            dict(input),
            "items",
            item_model=TiktokSearchTopItem,
            data_model=TiktokSearchTopData,
            bare=False,
            options=options,
        )

    async def search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSearchUsersInput],
    ) -> RunResult[TiktokSearchUsersData]:
        """TikTok User Search

        Search TikTok accounts by keyword (handle, nickname, follower count) with
        cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok.search_users(query="chef")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.search_users", dict(input), options
        )
        return RunResult[TiktokSearchUsersData].model_validate(raw)

    def iter_search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSearchUsersInput],
    ) -> AsyncPaginator[TiktokSearchUsersUser, TiktokSearchUsersData]:
        """Iterate TikTok User Search results, following pagination cursors.

        Yields validated `TiktokSearchUsersUser` items from the `users` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok.search_users",
            dict(input),
            "users",
            item_model=TiktokSearchUsersUser,
            data_model=TiktokSearchUsersData,
            bare=False,
            options=options,
        )

    async def song(
        self, *, options: RequestOptions | None = None, **input: Unpack[TiktokSongInput]
    ) -> RunResult[TiktokSongData]:
        """TikTok Song

        Fetch details for a TikTok song or sound (title, author, duration, cover
        art, and how many videos use it).

        Price: $0.002 per request.

        Example:
            res = client.tiktok.song(clipId="7439295283975702544")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.song", dict(input), options
        )
        return RunResult[TiktokSongData].model_validate(raw)

    async def song_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSongVideosInput],
    ) -> RunResult[TiktokSongVideosData]:
        """TikTok Song Videos

        List TikTok videos that use a given song or sound (with descriptions,
        authors, and engagement stats).

        Price: $0.002 per request.

        Example:
            res = client.tiktok.song_videos(clipId="7439295283975702544")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.song_videos", dict(input), options
        )
        return RunResult[TiktokSongVideosData].model_validate(raw)

    def iter_song_videos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokSongVideosInput],
    ) -> AsyncPaginator[TiktokSongVideosVideo, TiktokSongVideosData]:
        """Iterate TikTok Song Videos results, following pagination cursors.

        Yields validated `TiktokSongVideosVideo` items from the `videos` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok.song_videos",
            dict(input),
            "videos",
            item_model=TiktokSongVideosVideo,
            data_model=TiktokSongVideosData,
            bare=False,
            options=options,
        )

    async def top_ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokTopAdsSearchInput],
    ) -> RunResult[TiktokTopAdsSearchData]:
        """TikTok Top Ads Search

        Search TikTok Creative Center top video ads by keyword with explicit
        performance, objective, region, language, and time-window filters.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok.top_ads_search(query="glasses")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.top_ads_search", dict(input), options
        )
        return RunResult[TiktokTopAdsSearchData].model_validate(raw)

    async def trending_feed(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokTrendingFeedInput],
    ) -> RunResult[TiktokTrendingFeedData]:
        """TikTok Trending Feed

        Get TikTok's trending feed for a region (caption, views, likes, comments,
        author) as normalized JSON.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.trending_feed(region="US")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.trending_feed", dict(input), options
        )
        return RunResult[TiktokTrendingFeedData].model_validate(raw)

    async def video(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokVideoInput],
    ) -> RunResult[TiktokVideoData]:
        """TikTok Video

        Fetch a single TikTok video by URL with its caption and engagement counts
        (views, likes, comments, shares, saves).

        Price: $0.0009 per request.

        Example:
            res = client.tiktok.video(url="https://www.tiktok.com/@mrbeast/video/7654638524729216287?_r=1&u_code=elgjf3ff8cajhk&preview_pb=0&sharer_language=en&_d=elh6737j6kjl71&share_item_id=7654638524729216287&source=h5_m")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.video", dict(input), options
        )
        return RunResult[TiktokVideoData].model_validate(raw)

    async def video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokVideoCommentsInput],
    ) -> RunResult[TiktokVideoCommentsData]:
        """TikTok Video Comments

        List the comments on a TikTok video by URL with cursor pagination (text,
        author, likes, reply count).

        Price: $0.00144 per request.

        Example:
            res = client.tiktok.video_comments(url="https://www.tiktok.com/@zachking/video/7650468599424945422?_r=1&u_code=f0hj7d780760m9&preview_pb=0&sharer_language=en&_d=f0hj7blh067h71&share_item_id=7650468599424945422&source=h5_m")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.video_comments", dict(input), options
        )
        return RunResult[TiktokVideoCommentsData].model_validate(raw)

    def iter_video_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokVideoCommentsInput],
    ) -> AsyncPaginator[TiktokVideoCommentsComment, TiktokVideoCommentsData]:
        """Iterate TikTok Video Comments results, following pagination cursors.

        Yields validated `TiktokVideoCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok.video_comments",
            dict(input),
            "comments",
            item_model=TiktokVideoCommentsComment,
            data_model=TiktokVideoCommentsData,
            bare=False,
            options=options,
        )

    async def video_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokVideoTranscriptInput],
    ) -> RunResult[TiktokVideoTranscriptData]:
        """TikTok Video Transcript

        Fetch the spoken-word transcript of a TikTok video by URL.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.video_transcript(url="https://www.tiktok.com/@washingtonpost/video/7609177768793787679")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.video_transcript", dict(input), options
        )
        return RunResult[TiktokVideoTranscriptData].model_validate(raw)

    async def video_transcript_full(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokVideoTranscriptFullInput],
    ) -> RunResult[TiktokVideoTranscriptFullData]:
        """TikTok Video Transcript (Audio)

        Transcribe the spoken audio of a TikTok video with timed segments, speaker
        labels, and per-word confidence - for videos TikTok publishes no subtitle
        track for.

        Price: $0.0168 per request plus $0 per result (maximum $0.0168).

        Example:
            res = client.tiktok.video_transcript_full(url="https://www.tiktok.com/@thatdudecancook/video/7649086431641521421")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.video_transcript_full", dict(input), options
        )
        return RunResult[TiktokVideoTranscriptFullData].model_validate(raw)
