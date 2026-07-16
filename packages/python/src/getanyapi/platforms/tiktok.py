# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the tiktok platform."""

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
    limit: NotRequired[str]
    """Results per page, max 50 (defaults to 20)."""
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
    period: NotRequired[str]
    """Time window for top ads: 7, 30, or 180 days."""
    query: Required[str]
    """Keyword to search ad titles and content (e.g. spotify)."""
    region: NotRequired[str]
    """Country code (defaults to US)."""


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
    datePosted: NotRequired[str]
    """Time frame filter (e.g. 0=any, 1=past 24h, 7=past week)."""
    query: Required[str]
    """The keyword to search TikTok for."""
    sortBy: NotRequired[str]
    """Sort order (e.g. 0=relevance, 1=most liked)."""


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
    next_cursor: str = Field(alias="nextCursor")
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
    next_cursor: str = Field(alias="nextCursor")


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
    next_cursor: str = Field(alias="nextCursor")
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

    next_cursor: str = Field(alias="nextCursor")
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
    next_cursor: str = Field(alias="nextCursor")


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

    next_cursor: str = Field(alias="nextCursor")
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
    next_cursor: str = Field(alias="nextCursor")
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
    next_cursor: str = Field(alias="nextCursor")


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

    language: str
    transcript: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


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

        Fetch full details for a single TikTok ad - brand, title, spend, CTR,
        objectives, landing page, and video info - normalized across providers with
        transparent failover.

        Price: $0.002 per request.

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

        Search TikTok's ad library by keyword - top ads with brand, title, spend,
        CTR, likes, and video info - normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.ad_library_search(objective="conversions", query="spotify")
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

    def audience_demographics(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAudienceDemographicsInput],
    ) -> RunResult[TiktokAudienceDemographicsData]:
        """TikTok Audience Demographics

        Get the audience country breakdown (follower count and share per country)
        for a TikTok creator by handle, normalized across providers.

        Price: $0.01625 per request.

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
        likes), normalized across providers.

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
        count, bio) by username, normalized across providers.

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
        shares), normalized output.

        Price: $0.00325 per request.

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
        viewers, start time) by handle, normalized across providers.

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
        verification) by handle, normalized across providers with transparent
        failover.

        Price: $0.001 per request.

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

        Resolve the home region (country) of a TikTok creator by handle, normalized
        across providers with transparent failover.

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
        with cursor pagination, normalized across providers.

        Price: $0.001 per request.

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
        comments, shares) as normalized JSON, across providers with transparent
        failover.

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
        comments, shares) as normalized JSON, across providers with transparent
        failover.

        Price: $0.001 per request.

        Example:
            res = client.tiktok.search_keyword(query="cooking")
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
        shares) with cursor pagination, normalized across providers.

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
        cursor pagination, normalized across providers.

        Price: $0.001 per request.

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

        Fetch details for a TikTok song or sound - title, author, duration, cover
        art, and how many videos use it - normalized across providers with
        transparent failover.

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

        List TikTok videos that use a given song or sound - with descriptions,
        authors, and engagement stats - normalized across providers with transparent
        failover.

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

    def trending_feed(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokTrendingFeedInput],
    ) -> RunResult[TiktokTrendingFeedData]:
        """TikTok Trending Feed

        Get TikTok's trending feed for a region (caption, views, likes, comments,
        author) as normalized JSON, across providers with transparent failover.

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
        (views, likes, comments, shares, saves), normalized across providers with
        transparent failover.

        Price: $0.001 per request.

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
        author, likes, reply count), normalized across providers.

        Price: $0.002 per request.

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

        Fetch the spoken-word transcript of a TikTok video by URL, normalized across
        providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.video_transcript(url="https://www.tiktok.com/@washingtonpost/video/7609177768793787679")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.video_transcript", dict(input), options
        )
        return RunResult[TiktokVideoTranscriptData].model_validate(raw)


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

        Fetch full details for a single TikTok ad - brand, title, spend, CTR,
        objectives, landing page, and video info - normalized across providers with
        transparent failover.

        Price: $0.002 per request.

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

        Search TikTok's ad library by keyword - top ads with brand, title, spend,
        CTR, likes, and video info - normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.ad_library_search(objective="conversions", query="spotify")
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

    async def audience_demographics(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokAudienceDemographicsInput],
    ) -> RunResult[TiktokAudienceDemographicsData]:
        """TikTok Audience Demographics

        Get the audience country breakdown (follower count and share per country)
        for a TikTok creator by handle, normalized across providers.

        Price: $0.01625 per request.

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
        likes), normalized across providers.

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
        count, bio) by username, normalized across providers.

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
        shares), normalized output.

        Price: $0.00325 per request.

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
        viewers, start time) by handle, normalized across providers.

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
        verification) by handle, normalized across providers with transparent
        failover.

        Price: $0.001 per request.

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

        Resolve the home region (country) of a TikTok creator by handle, normalized
        across providers with transparent failover.

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
        with cursor pagination, normalized across providers.

        Price: $0.001 per request.

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
        comments, shares) as normalized JSON, across providers with transparent
        failover.

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
        comments, shares) as normalized JSON, across providers with transparent
        failover.

        Price: $0.001 per request.

        Example:
            res = client.tiktok.search_keyword(query="cooking")
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
        shares) with cursor pagination, normalized across providers.

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
        cursor pagination, normalized across providers.

        Price: $0.001 per request.

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

        Fetch details for a TikTok song or sound - title, author, duration, cover
        art, and how many videos use it - normalized across providers with
        transparent failover.

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

        List TikTok videos that use a given song or sound - with descriptions,
        authors, and engagement stats - normalized across providers with transparent
        failover.

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

    async def trending_feed(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokTrendingFeedInput],
    ) -> RunResult[TiktokTrendingFeedData]:
        """TikTok Trending Feed

        Get TikTok's trending feed for a region (caption, views, likes, comments,
        author) as normalized JSON, across providers with transparent failover.

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
        (views, likes, comments, shares, saves), normalized across providers with
        transparent failover.

        Price: $0.001 per request.

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
        author, likes, reply count), normalized across providers.

        Price: $0.002 per request.

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

        Fetch the spoken-word transcript of a TikTok video by URL, normalized across
        providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.tiktok.video_transcript(url="https://www.tiktok.com/@washingtonpost/video/7609177768793787679")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok.video_transcript", dict(input), options
        )
        return RunResult[TiktokVideoTranscriptData].model_validate(raw)
