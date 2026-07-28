# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the facebook platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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

    adType: NotRequired[Literal["all", "political_and_issue_ads"]]
    """Restrict to all ads (default) or only political and issue ads."""
    country: NotRequired[str]
    """Two-letter country code to scope results. Omit for all countries."""
    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor."""
    endDate: NotRequired[str]
    """Filter to ads with impressions on or before this date, in YYYY-MM-DD format."""
    mediaType: NotRequired[
        Literal["ALL", "IMAGE", "VIDEO", "MEME", "IMAGE_AND_MEME", "NONE"]
    ]
    """Creative media type filter."""
    query: Required[str]
    """Keyword to search the Meta Ad Library for (e.g. "protein powder")."""
    searchType: NotRequired[Literal["keyword_unordered", "keyword_exact_phrase"]]
    """Match mode for the query: loose keyword match (keyword_unordered, the default) or exact phrase (keyword_exact_phrase)."""
    sortBy: NotRequired[Literal["impressions", "recent"]]
    """Sort order: impressions (highest first, the default) or recent (most recent)."""
    startDate: NotRequired[str]
    """Filter to ads with impressions on or after this date, in YYYY-MM-DD format."""
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
    endDate: NotRequired[str]
    """Filter to ads with impressions on or before this date, in YYYY-MM-DD format."""
    language: NotRequired[str]
    """Two-letter language code to filter ads (e.g. "EN", "ES", "FR")."""
    mediaType: NotRequired[
        Literal["ALL", "IMAGE", "VIDEO", "MEME", "IMAGE_AND_MEME", "NONE"]
    ]
    """Creative media type filter."""
    pageId: NotRequired[str]
    """Company's Ad Library page ID. Provide either pageId or companyName."""
    sortBy: NotRequired[Literal["impressions", "recent"]]
    """Sort order: impressions (highest first, the default) or recent (most recent)."""
    startDate: NotRequired[str]
    """Filter to ads with impressions on or after this date, in YYYY-MM-DD format."""
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

    availability: NotRequired[Literal["available", "sold", "all"]]
    """Filter by availability: available (default), sold, or all (e.g. sold)."""
    condition: NotRequired[Literal["new", "used_like_new", "used_good", "used_fair"]]
    """Only return listings in this condition (e.g. used_good)."""
    cursor: NotRequired[str]
    """Pagination cursor from a previous response to fetch the next page."""
    dateListed: NotRequired[
        Literal["all", "last_24_hours", "last_7_days", "last_30_days"]
    ]
    """Only return listings posted within this window (e.g. last_7_days)."""
    deliveryMethod: NotRequired[Literal["all", "local_pickup", "shipping"]]
    """Only return listings offering this delivery method (e.g. shipping)."""
    lat: Required[str]
    """Latitude of the search location (e.g. '30.2677')."""
    lng: Required[str]
    """Longitude of the search location (e.g. '-97.7475')."""
    priceMax: NotRequired[int]
    """Maximum listing price in whole currency units, e.g. 500 for $500. Facebook may mix in a few suggested listings outside the range. Minimum: 0."""
    priceMin: NotRequired[int]
    """Minimum listing price in whole currency units, e.g. 100 for $100. Facebook may mix in a few suggested listings outside the range. Minimum: 0."""
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
    """Optional free-text location to narrow the search: a city, province, or country (e.g. 'Berlin')."""
    query: Required[str]
    """Keyword to search Facebook Pages for (e.g. 'coffee roasters')."""


class FacebookSearchPostsInput(TypedDict, total=False):
    """Input for Facebook Post Search."""

    endDate: NotRequired[str]
    """Only return posts published on or before this date, format YYYY-MM-DD (e.g. 2024-12-31)."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    location: NotRequired[str]
    """Optional location to narrow results; include both city and country for best matches (e.g. 'Paris, France')."""
    query: Required[str]
    """Keyword or phrase to search Facebook posts for (e.g. 'product launch')."""
    startDate: NotRequired[str]
    """Only return posts published on or after this date, format YYYY-MM-DD (e.g. 2024-01-01)."""


class FacebookAdDetailsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookAdTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookAdsSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookCommentRepliesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookCompanyAdsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookEventDetailsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookEventsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookEventsSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookFollowersData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookGroupPostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookMarketplaceData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookMarketplaceItemData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookMarketplaceLocationSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookPageContactData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookPhotosData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookPostData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookPostCommentsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookPostTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookProfileEventsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookProfilePostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookProfileReelsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookSearchCompaniesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookSearchPagesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookSearchPostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FacebookNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def ad_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdDetailsInput],
    ) -> BareRunResult[FacebookAdDetailsData]:
        """Facebook Ad Details

        Look up a single Meta Ad Library ad by ID or URL and get the advertiser,
        creative text, call-to-action, platforms, and run dates as clean JSON.

        Price: $0.002 per request.

        Example:
            res = client.facebook.ad_details(id="1869276447125570")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.ad_details", dict(input), options
        )
        return BareRunResult[FacebookAdDetailsData].model_validate(raw)

    def ad_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdTranscriptInput],
    ) -> BareRunResult[FacebookAdTranscriptData]:
        """Facebook Ad Transcript

        Get the spoken-word transcript of a Meta Ad Library video ad by ad ID or
        URL.

        Price: $0.002 per request.

        Example:
            res = client.facebook.ad_transcript(id="931919822778200")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.ad_transcript", dict(input), options
        )
        return BareRunResult[FacebookAdTranscriptData].model_validate(raw)

    def ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdsSearchInput],
    ) -> BareRunResult[FacebookAdsSearchData]:
        """Facebook Ad Search

        Search the Meta Ad Library by keyword and get matching ads (advertiser,
        creative text, CTA, platforms, and run dates) with cursor pagination and
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.facebook.ads_search(country="US", query="nike", searchType="keyword_exact_phrase")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.ads_search", dict(input), options
        )
        return BareRunResult[FacebookAdsSearchData].model_validate(raw)

    def comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCommentRepliesInput],
    ) -> BareRunResult[FacebookCommentRepliesData]:
        """Facebook Comment Replies

        List the replies to a Facebook post comment (text, author, reactions, and
        timestamps) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.comment_replies(expansionToken="MjoxNzgzMjI4OTY4OgF_o5zrjDnpemv4bwPtpsShXutqvKIw2bKs2YuJksL1Ak8n8YG-_KPSQGkIks5oW6wdRfhb_cRv9q5OX0NHjFJwEupYNZi9pcMV-FYLWLp47u-eusMkZFOMwbkISsTln7gtSvQrOzlffyavOTIL85PECYzGfunU2IAEkd13CIikxu06Mw10UJ1ShcFAmz8175R1uJfYy_iOixWZukqfrWhUfVOXApXznxx7qXvUxPwct76qe6p7-nVWQrPC_SZc2xh9Z8ggL3WMjgTzSq4oWFSsyZuuVsyVVjSgdjRQiDqtJSeEUlSjTr6vOnKsvKV-GpnBRaeA0BCaNRhqpB4xDZoduBuO5ZYrFvWLJdJLryDhCPI2Ss-Z33cEM2Vz7pLf1wJzE7TuizXPwICSn1DA_Prca-BItTbOUjAjfiySap1LXYkGuuDC2ziUdiEsmE5XhevMP8XtF_2WQlMNcGbXMEQyAWDUawtPAxXgMeRrCO9YGSweFQ4OZumoIlSGa3Vfjy-euUOHT1IAsNbV2A8rAq4HJNU3jCXQTn0vfW9xvbVQhL-53Mhw2YPjhlvUj6QpnGA25N8", feedbackId="ZmVlZGJhY2s6MTM5MzQ2MTExNTQ4MTkyN18yMDgyNjUzMjQ1ODA5Mzg2")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.comment_replies", dict(input), options
        )
        return BareRunResult[FacebookCommentRepliesData].model_validate(raw)

    def company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCompanyAdsInput],
    ) -> BareRunResult[FacebookCompanyAdsData]:
        """Facebook Company Ads

        List the Meta Ad Library ads a company is running by page ID or company name
        (creative text, format, platforms, and run dates) with cursor pagination.

        Price: $0.002 per request.

        Example:
            res = client.facebook.company_ads(companyName="nike", sortBy="recent")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.company_ads", dict(input), options
        )
        return BareRunResult[FacebookCompanyAdsData].model_validate(raw)

    def event_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventDetailsInput],
    ) -> BareRunResult[FacebookEventDetailsData]:
        """Facebook Event Details

        Fetch full details for a single Facebook event by ID or URL (name, schedule,
        venue, hosts, and attendance) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.event_details(id="4045709448982422")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.event_details", dict(input), options
        )
        return BareRunResult[FacebookEventDetailsData].model_validate(raw)

    def events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsInput],
    ) -> BareRunResult[FacebookEventsData]:
        """Facebook Events

        List public Facebook events for a city or place by its events-page URL
        (event name, date, venue, and attendance) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.events(url="https://www.facebook.com/events/explore/saint-petersburg-florida/111326725552547")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.events", dict(input), options
        )
        return BareRunResult[FacebookEventsData].model_validate(raw)

    def events_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsSearchInput],
    ) -> BareRunResult[FacebookEventsSearchData]:
        """Facebook Events Search

        Search public Facebook events by keyword and get structured event records
        (name, schedule, venue, pricing, and attendance) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.events_search(query="music festival")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.events_search", dict(input), options
        )
        return BareRunResult[FacebookEventsSearchData].model_validate(raw)

    def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookFollowersInput],
    ) -> BareRunResult[FacebookFollowersData]:
        """Facebook Followers

        List the public followers (or accounts followed) of any Facebook page or
        profile URL as normalized JSON records.

        Price: $0 per request plus $0.006 per result (maximum $0.12).

        Example:
            res = client.facebook.followers(limit=3, url="https://www.facebook.com/nike")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.followers", dict(input), options
        )
        return BareRunResult[FacebookFollowersData].model_validate(raw)

    def group_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookGroupPostsInput],
    ) -> BareRunResult[FacebookGroupPostsData]:
        """Facebook Group Posts

        Fetch recent posts from any public Facebook group by URL: text, author,
        reactions, and comment counts.

        Price: $0.002 per request.

        Example:
            res = client.facebook.group_posts(url="https://www.facebook.com/groups/1270525996445602/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.group_posts", dict(input), options
        )
        return BareRunResult[FacebookGroupPostsData].model_validate(raw)

    def marketplace(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceInput],
    ) -> BareRunResult[FacebookMarketplaceData]:
        """Facebook Marketplace

        Search Facebook Marketplace listings by keyword near a location, filter by
        price, condition, delivery, recency, and availability, and get title, price,
        location, and image as normalized JSON.

        Price: $0.002 per request.

        Example:
            res = client.facebook.marketplace(lat="30.2677", lng="-97.7475", priceMax=500, priceMin=100, query="bike")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace", dict(input), options
        )
        return BareRunResult[FacebookMarketplaceData].model_validate(raw)

    def marketplace_item(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceItemInput],
    ) -> BareRunResult[FacebookMarketplaceItemData]:
        """Facebook Marketplace Item

        Fetch full details for a single Facebook Marketplace listing by ID or URL
        (title, price, location, photos, and attributes) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.marketplace_item(url="https://www.facebook.com/marketplace/item/1656586118821988/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace_item", dict(input), options
        )
        return BareRunResult[FacebookMarketplaceItemData].model_validate(raw)

    def marketplace_location_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceLocationSearchInput],
    ) -> BareRunResult[FacebookMarketplaceLocationSearchData]:
        """Facebook Marketplace Location Search

        Resolve a place name to Facebook Marketplace locations with coordinates and
        metadata as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.marketplace_location_search(query="Austin")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace_location_search", dict(input), options
        )
        return BareRunResult[FacebookMarketplaceLocationSearchData].model_validate(raw)

    def page_contact(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPageContactInput],
    ) -> BareRunResult[FacebookPageContactData]:
        """Facebook Page Contact Info

        Look up a Facebook Page's public contact details (email, phone, website, and
        address) by page URL or ID.

        Price: $0.002 per request.

        Example:
            res = client.facebook.page_contact(page="https://www.facebook.com/joesstonecrab")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.page_contact", dict(input), options
        )
        return BareRunResult[FacebookPageContactData].model_validate(raw)

    def photos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPhotosInput],
    ) -> BareRunResult[FacebookPhotosData]:
        """Facebook Page Photos

        Fetch recent photos posted by any public Facebook page or profile (image
        URLs, captions, and dimensions) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.photos(url="https://www.facebook.com/Spurs")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.photos", dict(input), options
        )
        return BareRunResult[FacebookPhotosData].model_validate(raw)

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostInput],
    ) -> BareRunResult[FacebookPostData]:
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
        return BareRunResult[FacebookPostData].model_validate(raw)

    def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostCommentsInput],
    ) -> BareRunResult[FacebookPostCommentsData]:
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
        return BareRunResult[FacebookPostCommentsData].model_validate(raw)

    def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostTranscriptInput],
    ) -> BareRunResult[FacebookPostTranscriptData]:
        """Facebook Post Transcript

        Get the spoken-word transcript of any public Facebook video post by URL as
        normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.post_transcript(url="https://www.facebook.com/reel/2166091230582141/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.post_transcript", dict(input), options
        )
        return BareRunResult[FacebookPostTranscriptData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileInput],
    ) -> BareRunResult[FacebookProfileData]:
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
        return BareRunResult[FacebookProfileData].model_validate(raw)

    def profile_events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileEventsInput],
    ) -> BareRunResult[FacebookProfileEventsData]:
        """Facebook Page Events

        List upcoming and past events hosted by any public Facebook page by URL
        (name, schedule, venue, and host) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.profile_events(url="https://www.facebook.com/brickyardoldtown")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_events", dict(input), options
        )
        return BareRunResult[FacebookProfileEventsData].model_validate(raw)

    def profile_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfilePostsInput],
    ) -> BareRunResult[FacebookProfilePostsData]:
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
        return BareRunResult[FacebookProfilePostsData].model_validate(raw)

    def profile_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileReelsInput],
    ) -> BareRunResult[FacebookProfileReelsData]:
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
        return BareRunResult[FacebookProfileReelsData].model_validate(raw)

    def search_companies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookSearchCompaniesInput],
    ) -> BareRunResult[FacebookSearchCompaniesData]:
        """Facebook Company Search

        Search the Meta Ad Library for advertisers by keyword and get matching
        pages: page ID, category, verification, follower counts, and linked
        Instagram.

        Price: $0.002 per request.

        Example:
            res = client.facebook.search_companies(query="nike")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_companies", dict(input), options
        )
        return BareRunResult[FacebookSearchCompaniesData].model_validate(raw)

    def search_pages(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookSearchPagesInput],
    ) -> BareRunResult[FacebookSearchPagesData]:
        """Facebook Page Search

        Search Facebook Pages by keyword, optionally narrowed to a location, and get
        structured page profiles (name, category, followers, contact details) at a.

        Price: $0.001 per request plus $0.011 per result (maximum $0.111).

        Example:
            res = client.facebook.search_pages(limit=3, query="nike")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_pages", dict(input), options
        )
        return BareRunResult[FacebookSearchPagesData].model_validate(raw)

    def search_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookSearchPostsInput],
    ) -> BareRunResult[FacebookSearchPostsData]:
        """Facebook Post Search

        Search public Facebook posts by keyword, optionally filtered by location,
        and get structured post records (text, author, engagement).

        Price: $0 per request plus $0.003 per result (maximum $0.06).

        Example:
            res = client.facebook.search_posts(limit=3, query="nike")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_posts", dict(input), options
        )
        return BareRunResult[FacebookSearchPostsData].model_validate(raw)


class AsyncFacebookNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def ad_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdDetailsInput],
    ) -> BareRunResult[FacebookAdDetailsData]:
        """Facebook Ad Details

        Look up a single Meta Ad Library ad by ID or URL and get the advertiser,
        creative text, call-to-action, platforms, and run dates as clean JSON.

        Price: $0.002 per request.

        Example:
            res = client.facebook.ad_details(id="1869276447125570")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.ad_details", dict(input), options
        )
        return BareRunResult[FacebookAdDetailsData].model_validate(raw)

    async def ad_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdTranscriptInput],
    ) -> BareRunResult[FacebookAdTranscriptData]:
        """Facebook Ad Transcript

        Get the spoken-word transcript of a Meta Ad Library video ad by ad ID or
        URL.

        Price: $0.002 per request.

        Example:
            res = client.facebook.ad_transcript(id="931919822778200")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.ad_transcript", dict(input), options
        )
        return BareRunResult[FacebookAdTranscriptData].model_validate(raw)

    async def ads_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookAdsSearchInput],
    ) -> BareRunResult[FacebookAdsSearchData]:
        """Facebook Ad Search

        Search the Meta Ad Library by keyword and get matching ads (advertiser,
        creative text, CTA, platforms, and run dates) with cursor pagination and
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.facebook.ads_search(country="US", query="nike", searchType="keyword_exact_phrase")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.ads_search", dict(input), options
        )
        return BareRunResult[FacebookAdsSearchData].model_validate(raw)

    async def comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCommentRepliesInput],
    ) -> BareRunResult[FacebookCommentRepliesData]:
        """Facebook Comment Replies

        List the replies to a Facebook post comment (text, author, reactions, and
        timestamps) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.comment_replies(expansionToken="MjoxNzgzMjI4OTY4OgF_o5zrjDnpemv4bwPtpsShXutqvKIw2bKs2YuJksL1Ak8n8YG-_KPSQGkIks5oW6wdRfhb_cRv9q5OX0NHjFJwEupYNZi9pcMV-FYLWLp47u-eusMkZFOMwbkISsTln7gtSvQrOzlffyavOTIL85PECYzGfunU2IAEkd13CIikxu06Mw10UJ1ShcFAmz8175R1uJfYy_iOixWZukqfrWhUfVOXApXznxx7qXvUxPwct76qe6p7-nVWQrPC_SZc2xh9Z8ggL3WMjgTzSq4oWFSsyZuuVsyVVjSgdjRQiDqtJSeEUlSjTr6vOnKsvKV-GpnBRaeA0BCaNRhqpB4xDZoduBuO5ZYrFvWLJdJLryDhCPI2Ss-Z33cEM2Vz7pLf1wJzE7TuizXPwICSn1DA_Prca-BItTbOUjAjfiySap1LXYkGuuDC2ziUdiEsmE5XhevMP8XtF_2WQlMNcGbXMEQyAWDUawtPAxXgMeRrCO9YGSweFQ4OZumoIlSGa3Vfjy-euUOHT1IAsNbV2A8rAq4HJNU3jCXQTn0vfW9xvbVQhL-53Mhw2YPjhlvUj6QpnGA25N8", feedbackId="ZmVlZGJhY2s6MTM5MzQ2MTExNTQ4MTkyN18yMDgyNjUzMjQ1ODA5Mzg2")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.comment_replies", dict(input), options
        )
        return BareRunResult[FacebookCommentRepliesData].model_validate(raw)

    async def company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookCompanyAdsInput],
    ) -> BareRunResult[FacebookCompanyAdsData]:
        """Facebook Company Ads

        List the Meta Ad Library ads a company is running by page ID or company name
        (creative text, format, platforms, and run dates) with cursor pagination.

        Price: $0.002 per request.

        Example:
            res = client.facebook.company_ads(companyName="nike", sortBy="recent")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.company_ads", dict(input), options
        )
        return BareRunResult[FacebookCompanyAdsData].model_validate(raw)

    async def event_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventDetailsInput],
    ) -> BareRunResult[FacebookEventDetailsData]:
        """Facebook Event Details

        Fetch full details for a single Facebook event by ID or URL (name, schedule,
        venue, hosts, and attendance) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.event_details(id="4045709448982422")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.event_details", dict(input), options
        )
        return BareRunResult[FacebookEventDetailsData].model_validate(raw)

    async def events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsInput],
    ) -> BareRunResult[FacebookEventsData]:
        """Facebook Events

        List public Facebook events for a city or place by its events-page URL
        (event name, date, venue, and attendance) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.events(url="https://www.facebook.com/events/explore/saint-petersburg-florida/111326725552547")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.events", dict(input), options
        )
        return BareRunResult[FacebookEventsData].model_validate(raw)

    async def events_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookEventsSearchInput],
    ) -> BareRunResult[FacebookEventsSearchData]:
        """Facebook Events Search

        Search public Facebook events by keyword and get structured event records
        (name, schedule, venue, pricing, and attendance) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.events_search(query="music festival")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.events_search", dict(input), options
        )
        return BareRunResult[FacebookEventsSearchData].model_validate(raw)

    async def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookFollowersInput],
    ) -> BareRunResult[FacebookFollowersData]:
        """Facebook Followers

        List the public followers (or accounts followed) of any Facebook page or
        profile URL as normalized JSON records.

        Price: $0 per request plus $0.006 per result (maximum $0.12).

        Example:
            res = client.facebook.followers(limit=3, url="https://www.facebook.com/nike")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.followers", dict(input), options
        )
        return BareRunResult[FacebookFollowersData].model_validate(raw)

    async def group_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookGroupPostsInput],
    ) -> BareRunResult[FacebookGroupPostsData]:
        """Facebook Group Posts

        Fetch recent posts from any public Facebook group by URL: text, author,
        reactions, and comment counts.

        Price: $0.002 per request.

        Example:
            res = client.facebook.group_posts(url="https://www.facebook.com/groups/1270525996445602/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.group_posts", dict(input), options
        )
        return BareRunResult[FacebookGroupPostsData].model_validate(raw)

    async def marketplace(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceInput],
    ) -> BareRunResult[FacebookMarketplaceData]:
        """Facebook Marketplace

        Search Facebook Marketplace listings by keyword near a location, filter by
        price, condition, delivery, recency, and availability, and get title, price,
        location, and image as normalized JSON.

        Price: $0.002 per request.

        Example:
            res = client.facebook.marketplace(lat="30.2677", lng="-97.7475", priceMax=500, priceMin=100, query="bike")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace", dict(input), options
        )
        return BareRunResult[FacebookMarketplaceData].model_validate(raw)

    async def marketplace_item(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceItemInput],
    ) -> BareRunResult[FacebookMarketplaceItemData]:
        """Facebook Marketplace Item

        Fetch full details for a single Facebook Marketplace listing by ID or URL
        (title, price, location, photos, and attributes) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.marketplace_item(url="https://www.facebook.com/marketplace/item/1656586118821988/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace_item", dict(input), options
        )
        return BareRunResult[FacebookMarketplaceItemData].model_validate(raw)

    async def marketplace_location_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookMarketplaceLocationSearchInput],
    ) -> BareRunResult[FacebookMarketplaceLocationSearchData]:
        """Facebook Marketplace Location Search

        Resolve a place name to Facebook Marketplace locations with coordinates and
        metadata as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.marketplace_location_search(query="Austin")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.marketplace_location_search", dict(input), options
        )
        return BareRunResult[FacebookMarketplaceLocationSearchData].model_validate(raw)

    async def page_contact(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPageContactInput],
    ) -> BareRunResult[FacebookPageContactData]:
        """Facebook Page Contact Info

        Look up a Facebook Page's public contact details (email, phone, website, and
        address) by page URL or ID.

        Price: $0.002 per request.

        Example:
            res = client.facebook.page_contact(page="https://www.facebook.com/joesstonecrab")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.page_contact", dict(input), options
        )
        return BareRunResult[FacebookPageContactData].model_validate(raw)

    async def photos(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPhotosInput],
    ) -> BareRunResult[FacebookPhotosData]:
        """Facebook Page Photos

        Fetch recent photos posted by any public Facebook page or profile (image
        URLs, captions, and dimensions) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.photos(url="https://www.facebook.com/Spurs")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.photos", dict(input), options
        )
        return BareRunResult[FacebookPhotosData].model_validate(raw)

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostInput],
    ) -> BareRunResult[FacebookPostData]:
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
        return BareRunResult[FacebookPostData].model_validate(raw)

    async def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostCommentsInput],
    ) -> BareRunResult[FacebookPostCommentsData]:
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
        return BareRunResult[FacebookPostCommentsData].model_validate(raw)

    async def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookPostTranscriptInput],
    ) -> BareRunResult[FacebookPostTranscriptData]:
        """Facebook Post Transcript

        Get the spoken-word transcript of any public Facebook video post by URL as
        normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.post_transcript(url="https://www.facebook.com/reel/2166091230582141/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.post_transcript", dict(input), options
        )
        return BareRunResult[FacebookPostTranscriptData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileInput],
    ) -> BareRunResult[FacebookProfileData]:
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
        return BareRunResult[FacebookProfileData].model_validate(raw)

    async def profile_events(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileEventsInput],
    ) -> BareRunResult[FacebookProfileEventsData]:
        """Facebook Page Events

        List upcoming and past events hosted by any public Facebook page by URL
        (name, schedule, venue, and host) as normalized JSON at a.

        Price: $0.002 per request.

        Example:
            res = client.facebook.profile_events(url="https://www.facebook.com/brickyardoldtown")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.profile_events", dict(input), options
        )
        return BareRunResult[FacebookProfileEventsData].model_validate(raw)

    async def profile_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfilePostsInput],
    ) -> BareRunResult[FacebookProfilePostsData]:
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
        return BareRunResult[FacebookProfilePostsData].model_validate(raw)

    async def profile_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookProfileReelsInput],
    ) -> BareRunResult[FacebookProfileReelsData]:
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
        return BareRunResult[FacebookProfileReelsData].model_validate(raw)

    async def search_companies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookSearchCompaniesInput],
    ) -> BareRunResult[FacebookSearchCompaniesData]:
        """Facebook Company Search

        Search the Meta Ad Library for advertisers by keyword and get matching
        pages: page ID, category, verification, follower counts, and linked
        Instagram.

        Price: $0.002 per request.

        Example:
            res = client.facebook.search_companies(query="nike")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_companies", dict(input), options
        )
        return BareRunResult[FacebookSearchCompaniesData].model_validate(raw)

    async def search_pages(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookSearchPagesInput],
    ) -> BareRunResult[FacebookSearchPagesData]:
        """Facebook Page Search

        Search Facebook Pages by keyword, optionally narrowed to a location, and get
        structured page profiles (name, category, followers, contact details) at a.

        Price: $0.001 per request plus $0.011 per result (maximum $0.111).

        Example:
            res = client.facebook.search_pages(limit=3, query="nike")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_pages", dict(input), options
        )
        return BareRunResult[FacebookSearchPagesData].model_validate(raw)

    async def search_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FacebookSearchPostsInput],
    ) -> BareRunResult[FacebookSearchPostsData]:
        """Facebook Post Search

        Search public Facebook posts by keyword, optionally filtered by location,
        and get structured post records (text, author, engagement).

        Price: $0 per request plus $0.003 per result (maximum $0.06).

        Example:
            res = client.facebook.search_posts(limit=3, query="nike")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "facebook.search_posts", dict(input), options
        )
        return BareRunResult[FacebookSearchPostsData].model_validate(raw)
