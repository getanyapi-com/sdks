# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the maps platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class MapsContactsInput(TypedDict, total=False):
    """Input for Google Maps Contacts."""

    language: NotRequired[str]
    """Two-letter language code for the results (e.g. en). Default: en."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    location: Required[str]
    """Free-text location to search in, ideally city plus country (e.g. Denver, USA)."""
    query: Required[str]
    """What you would type in the Google Maps search bar (e.g. dentist)."""


class MapsPlaceInput(TypedDict, total=False):
    """Input for Google Maps Place Lookup."""

    language: NotRequired[str]
    """Two-letter language code for the result details (e.g. en). Default: en."""
    location: NotRequired[str]
    """Optional free-text location to scope the search, ideally city plus state or country (e.g. San Francisco, CA). Narrows the query to the best match in that area."""
    query: Required[str]
    """The business name or search text to look up, as you would type it into the Google Maps search bar (e.g. Blue Bottle Coffee)."""


class MapsReviewsInput(TypedDict, total=False):
    """Input for Google Maps Reviews."""

    language: NotRequired[str]
    """Two-letter language code for the review details (e.g. en). Default: en."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-100, default 100). You are billed per result returned, so a lower limit costs less. Range: 1 to 100."""
    placeId: Required[str]
    """The Google Maps place ID to fetch reviews for (e.g. ChIJj61dQgK6j4AR4GeTYWZsKWw)."""
    sort: NotRequired[
        Literal["newest", "mostRelevant", "highestRanking", "lowestRanking"]
    ]
    """Order in which reviews are returned (e.g. newest). Default: newest."""


class MapsSearchInput(TypedDict, total=False):
    """Input for Google Maps Search."""

    language: NotRequired[str]
    """Two-letter language code for the results (e.g. en). Default: en."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    location: Required[str]
    """Free-text location to search in, ideally city plus country (e.g. Austin, USA)."""
    query: Required[str]
    """What you would type in the Google Maps search bar (e.g. coffee shop)."""


class MapsContactsData(BaseModel):
    items: list[MapsContactsItem] = Field(
        description="Matching business records, each enriched with contact details scraped from the business website. Populated whenever the provider has data for the entity."
    )


class MapsContactsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address: str | None = Field(
        default=None, description="Full formatted street address."
    )
    category: str | None = Field(default=None, description="Primary business category.")
    cid: str | None = Field(default=None, description="Google customer/place id (cid).")
    city: str | None = Field(default=None, description="City the business is in.")
    country_code: str | None = Field(
        default=None, alias="countryCode", description="Two-letter country code."
    )
    emails: list[str] | None = Field(
        default=None, description="Email addresses scraped from the business website."
    )
    facebooks: list[str] | None = Field(
        default=None, description="Facebook profile URLs found on the business website."
    )
    image: str | None = Field(default=None, description="Primary business photo URL.")
    instagrams: list[str] | None = Field(
        default=None,
        description="Instagram profile URLs found on the business website.",
    )
    latitude: float | None = Field(
        default=None, description="Latitude of the business in decimal degrees."
    )
    linked_ins: list[str] | None = Field(
        default=None,
        alias="linkedIns",
        description="LinkedIn profile URLs found on the business website.",
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the business in decimal degrees."
    )
    name: str = Field(
        description="Business name. Populated whenever the provider has data for the entity."
    )
    phone: str | None = Field(
        default=None,
        description="Business phone number in E.164 format, when listed on Google Maps.",
    )
    phones: list[str] | None = Field(
        default=None,
        description="Additional phone numbers scraped from the business website.",
    )
    place_id: str = Field(
        alias="placeId",
        description="Google Maps place id (stable identifier for the business). Populated whenever the provider has data for the entity.",
    )
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Postal code of the business."
    )
    rating: float | None = Field(
        default=None, description="Average star rating out of 5."
    )
    review_count: float | None = Field(
        default=None, alias="reviewCount", description="Total number of reviews."
    )
    state: str | None = Field(
        default=None, description="State or region the business is in."
    )
    tiktoks: list[str] | None = Field(
        default=None, description="TikTok profile URLs found on the business website."
    )
    twitters: list[str] | None = Field(
        default=None,
        description="X/Twitter profile URLs found on the business website.",
    )
    url: str = Field(
        description="Canonical Google Maps URL for the business. Populated whenever the provider has data for the entity."
    )
    website: str | None = Field(
        default=None, description="The business website URL, when listed."
    )
    youtubes: list[str] | None = Field(
        default=None, description="YouTube channel URLs found on the business website."
    )


class MapsPlaceData(BaseModel):
    items: list[MapsPlaceItem] = Field(
        description="The best-matching place for the query, with full details: name, address, contact info, category, rating, opening hours, and coordinates. Up to one element (empty when nothing matched). Populated whenever the provider has data for the entity."
    )


class MapsPlaceItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address: str | None = Field(
        default=None,
        description="Full formatted street address. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    category: str | None = Field(
        default=None,
        description="Primary Google Maps category (e.g. Coffee shop). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    city: str | None = None
    country_code: str | None = Field(
        default=None, alias="countryCode", description="Two-letter country code."
    )
    hours: list[MapsPlaceHour] | None = Field(
        default=None,
        description="Opening hours by day: each element is an object with the day name and its hours.",
    )
    image: str | None = Field(
        default=None, description="URL of the primary place photo."
    )
    latitude: float | None = Field(
        default=None,
        description="Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    longitude: float | None = Field(
        default=None,
        description="Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    name: str = Field(
        description="Business or place name. Populated whenever the provider has data for the entity."
    )
    neighborhood: str | None = None
    permanently_closed: bool | None = Field(
        default=None,
        alias="permanentlyClosed",
        description="Whether the place is permanently closed.",
    )
    phone: str | None = Field(default=None, description="Formatted phone number.")
    place_id: str | None = Field(
        default=None,
        alias="placeId",
        description="Google Maps place id. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    plus_code: str | None = Field(
        default=None, alias="plusCode", description="Google Plus Code for the location."
    )
    postal_code: str | None = Field(default=None, alias="postalCode")
    price_level: str | None = Field(
        default=None,
        alias="priceLevel",
        description="Price level indicator (e.g. a price range).",
    )
    rating: float | None = Field(default=None, description="Average star rating.")
    reviews_count: int | None = Field(
        default=None, alias="reviewsCount", description="Total number of reviews."
    )
    state: str | None = Field(default=None, description="State or region name.")
    street: str | None = Field(
        default=None, description="Street portion of the address."
    )
    url: str = Field(
        description="Google Maps URL for the place. Populated whenever the provider has data for the entity."
    )
    website: str | None = Field(default=None, description="Business website URL.")


class MapsPlaceHour(BaseModel):
    model_config = ConfigDict(extra="allow")


class MapsReviewsData(BaseModel):
    items: list[MapsReviewsItem] = Field(
        description="Review records: reviewer, star rating, review text (empty when the reviewer left only a rating), publish date, likes, and owner response where present. Populated whenever the provider has data for the entity."
    )


class MapsReviewsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str | None = Field(
        default=None,
        description="Reviewer display name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    is_local_guide: bool | None = Field(
        default=None,
        alias="isLocalGuide",
        description="Whether the reviewer is a Google Local Guide.",
    )
    likes: int | None = Field(
        default=None, description="Number of likes on the review."
    )
    origin: str | None = Field(
        default=None, description="Source of the review (e.g. Google)."
    )
    owner_response: str | None = Field(
        default=None,
        alias="ownerResponse",
        description="Owner's reply text; empty when there is none.",
    )
    owner_response_at: str | None = Field(
        default=None,
        alias="ownerResponseAt",
        description="ISO 8601 timestamp of the owner's reply; empty when there is none.",
    )
    place_id: str | None = Field(
        default=None,
        alias="placeId",
        description="Google Maps place id the review belongs to. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    published_ago: str | None = Field(
        default=None,
        alias="publishedAgo",
        description="Human-relative publish time (e.g. '7 hours ago').",
    )
    rating: float | None = Field(
        default=None, description="Star rating the reviewer gave (1-5)."
    )
    review_id: str = Field(
        alias="reviewId",
        description="Stable Google review id. Populated whenever the provider has data for the entity.",
    )
    reviewer_id: str | None = Field(
        default=None,
        alias="reviewerId",
        description="Stable Google id of the reviewer.",
    )
    reviewer_reviews_count: int | None = Field(
        default=None,
        alias="reviewerReviewsCount",
        description="Total number of reviews the reviewer has written.",
    )
    text: str | None = Field(
        default=None,
        description="Review text; empty string when the reviewer left only a star rating.",
    )
    url: str | None = Field(
        default=None,
        description="Direct URL to the review on Google Maps. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )


class MapsSearchData(BaseModel):
    items: list[MapsSearchItem] = Field(
        description="Matching Google Maps place records. Populated whenever the provider has data for the entity."
    )


class MapsSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address: str | None = Field(
        default=None, description="Full formatted street address."
    )
    category: str | None = Field(
        default=None, description="Primary place category (e.g. Coffee shop)."
    )
    cid: str | None = Field(default=None, description="Google customer/place id (cid).")
    city: str | None = Field(default=None, description="City the place is in.")
    country_code: str | None = Field(
        default=None, alias="countryCode", description="Two-letter country code."
    )
    image: str | None = Field(default=None, description="Primary place photo URL.")
    latitude: float | None = Field(
        default=None, description="Latitude of the place in decimal degrees."
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the place in decimal degrees."
    )
    name: str = Field(
        description="Place name. Populated whenever the provider has data for the entity."
    )
    permanently_closed: bool | None = Field(
        default=None,
        alias="permanentlyClosed",
        description="True when the place is marked permanently closed.",
    )
    phone: str | None = Field(
        default=None, description="Business phone number in E.164 format, when listed."
    )
    place_id: str = Field(
        alias="placeId",
        description="Google Maps place id (stable identifier for the place). Populated whenever the provider has data for the entity.",
    )
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Postal code of the place."
    )
    price_level: str | None = Field(
        default=None,
        alias="priceLevel",
        description="Relative price level indicator (e.g. $, $10-20).",
    )
    rating: float | None = Field(
        default=None, description="Average star rating out of 5."
    )
    review_count: float | None = Field(
        default=None, alias="reviewCount", description="Total number of reviews."
    )
    state: str | None = Field(
        default=None, description="State or region the place is in."
    )
    street: str | None = Field(default=None, description="Street line of the address.")
    url: str = Field(
        description="Canonical Google Maps URL for the place. Populated whenever the provider has data for the entity."
    )
    website: str | None = Field(
        default=None, description="The place's own website URL, when listed."
    )


class MapsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def contacts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsContactsInput],
    ) -> RunResult[MapsContactsData]:
        """Google Maps Contacts

        Search Google Maps for businesses and enrich each result with contact
        details (emails, phones, and social profiles from their websites), up to 20
        records per request. **Price:** billed per result - $0.05 per 1,000 requests
        base + $3.00 per 1,000 results, capped at $60.05 per 1,000 requests.

        Price: $0.00005 per request plus $0.003 per result.

        Example:
            res = client.maps.contacts(limit=3, location="Austin, TX", query="coffee shop")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.contacts", dict(input), options
        )
        return RunResult[MapsContactsData].model_validate(raw)

    def place(
        self, *, options: RequestOptions | None = None, **input: Unpack[MapsPlaceInput]
    ) -> RunResult[MapsPlaceData]:
        """Google Maps Place Lookup

        Look up a place on Google Maps by name or search query (optionally scoped to
        a location) and get the best-matching place with full details - address,
        phone, website, rating, hours, and coordinates - as normalized JSON.
        **Price:** billed per result - $3.00 per 1,000 requests base + $5.00 per
        1,000 results, capped at $9.00 per 1,000 requests.

        Price: $0.003 per request plus $0.005 per result.

        Example:
            res = client.maps.place(location="San Francisco, CA", query="Blue Bottle Coffee")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.place", dict(input), options
        )
        return RunResult[MapsPlaceData].model_validate(raw)

    def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsReviewsInput],
    ) -> RunResult[MapsReviewsData]:
        """Google Maps Reviews

        Fetch up to 100 Google Maps reviews for a place by place ID, sorted the way
        you need, in one normalized response. **Price:** billed per result - $0.05
        per 1,000 requests base + $0.40 per 1,000 results, capped at $40.05 per
        1,000 requests.

        Price: $0.00005 per request plus $0.0004 per result.

        Example:
            res = client.maps.reviews(limit=3, placeId="ChIJN1t_tDeuEmsRUsoyG83frY4")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.reviews", dict(input), options
        )
        return RunResult[MapsReviewsData].model_validate(raw)

    def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[MapsSearchInput]
    ) -> RunResult[MapsSearchData]:
        """Google Maps Search

        Search Google Maps for places matching a query and location: up to 20
        normalized place records with ratings, addresses, and contact basics per
        request. **Price:** billed per result - $0.05 per 1,000 requests base +
        $3.00 per 1,000 results, capped at $60.05 per 1,000 requests.

        Price: $0.00005 per request plus $0.003 per result.

        Example:
            res = client.maps.search(limit=3, location="Austin, TX", query="coffee")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.search", dict(input), options
        )
        return RunResult[MapsSearchData].model_validate(raw)


class AsyncMapsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def contacts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsContactsInput],
    ) -> RunResult[MapsContactsData]:
        """Google Maps Contacts

        Search Google Maps for businesses and enrich each result with contact
        details (emails, phones, and social profiles from their websites), up to 20
        records per request. **Price:** billed per result - $0.05 per 1,000 requests
        base + $3.00 per 1,000 results, capped at $60.05 per 1,000 requests.

        Price: $0.00005 per request plus $0.003 per result.

        Example:
            res = client.maps.contacts(limit=3, location="Austin, TX", query="coffee shop")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.contacts", dict(input), options
        )
        return RunResult[MapsContactsData].model_validate(raw)

    async def place(
        self, *, options: RequestOptions | None = None, **input: Unpack[MapsPlaceInput]
    ) -> RunResult[MapsPlaceData]:
        """Google Maps Place Lookup

        Look up a place on Google Maps by name or search query (optionally scoped to
        a location) and get the best-matching place with full details - address,
        phone, website, rating, hours, and coordinates - as normalized JSON.
        **Price:** billed per result - $3.00 per 1,000 requests base + $5.00 per
        1,000 results, capped at $9.00 per 1,000 requests.

        Price: $0.003 per request plus $0.005 per result.

        Example:
            res = client.maps.place(location="San Francisco, CA", query="Blue Bottle Coffee")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.place", dict(input), options
        )
        return RunResult[MapsPlaceData].model_validate(raw)

    async def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsReviewsInput],
    ) -> RunResult[MapsReviewsData]:
        """Google Maps Reviews

        Fetch up to 100 Google Maps reviews for a place by place ID, sorted the way
        you need, in one normalized response. **Price:** billed per result - $0.05
        per 1,000 requests base + $0.40 per 1,000 results, capped at $40.05 per
        1,000 requests.

        Price: $0.00005 per request plus $0.0004 per result.

        Example:
            res = client.maps.reviews(limit=3, placeId="ChIJN1t_tDeuEmsRUsoyG83frY4")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.reviews", dict(input), options
        )
        return RunResult[MapsReviewsData].model_validate(raw)

    async def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[MapsSearchInput]
    ) -> RunResult[MapsSearchData]:
        """Google Maps Search

        Search Google Maps for places matching a query and location: up to 20
        normalized place records with ratings, addresses, and contact basics per
        request. **Price:** billed per result - $0.05 per 1,000 requests base +
        $3.00 per 1,000 results, capped at $60.05 per 1,000 requests.

        Price: $0.00005 per request plus $0.003 per result.

        Example:
            res = client.maps.search(limit=3, location="Austin, TX", query="coffee")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.search", dict(input), options
        )
        return RunResult[MapsSearchData].model_validate(raw)
