# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the maps platform."""

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


class MapsContactsInput(TypedDict, total=False):
    """Input for Google Maps Contacts."""

    categoryFilterWords: NotRequired[list[str]]
    """Optional list of Google Maps place-category names to keep; results are limited to places whose category matches one of these. Use lowercase category names as shown on Google Maps (e.g. ["dentist", "orthodontist"]). Omit to include all categories."""
    language: NotRequired[str]
    """Two-letter language code for the results (e.g. en). Default: en."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    location: Required[str]
    """Free-text location to search in, ideally city plus country (e.g. Denver, USA)."""
    placeMinimumStars: NotRequired[
        Literal["two", "twoAndHalf", "three", "threeAndHalf", "four", "fourAndHalf"]
    ]
    """Only return places with at least this average rating: two (2+), twoAndHalf (2.5+), three (3+), threeAndHalf (3.5+), four (4+), or fourAndHalf (4.5+). Places with no reviews are excluded. Omit for no rating filter."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """What you would type in the Google Maps search bar (e.g. dentist)."""
    website: NotRequired[Literal["allPlaces", "withWebsite", "withoutWebsite"]]
    """Filter places by whether they list a website: allPlaces (default), withWebsite (only places that have a website), or withoutWebsite (only places without one). Contact enrichment pulls emails and social profiles from a place's website, so withWebsite targets leads that can be enriched."""


class MapsPlaceInput(TypedDict, total=False):
    """Input for Google Maps Place Lookup."""

    categoryFilterWords: NotRequired[list[str]]
    """Optional list of Google Maps place-category names to keep; the match is limited to a place whose category is one of these. Use lowercase category names as shown on Google Maps (e.g. ["coffee shop"]). Omit to allow any category and stay on the cheapest price; a category filter routes to a dearer source."""
    language: NotRequired[str]
    """Two-letter language code for the result details (e.g. en). Default: en."""
    location: NotRequired[str]
    """Optional free-text location to scope the search, ideally city plus state or country (e.g. San Francisco, CA). Narrows the query to the best match in that area."""
    placeMinimumStars: NotRequired[
        Literal["two", "twoAndHalf", "three", "threeAndHalf", "four", "fourAndHalf"]
    ]
    """Only match a place with at least this average rating: two (2+), twoAndHalf (2.5+), three (3+), threeAndHalf (3.5+), four (4+), or fourAndHalf (4.5+). Places with no reviews are excluded. Omit this field to stay on the cheapest price; a rating floor routes to a dearer source."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """The business name or search text to look up, as you would type it into the Google Maps search bar (e.g. Blue Bottle Coffee)."""
    requireFields: NotRequired[
        list[
            Literal[
                "city",
                "countryCode",
                "hours",
                "image",
                "neighborhood",
                "permanentlyClosed",
                "phone",
                "plusCode",
                "postalCode",
                "priceLevel",
                "rating",
                "reviewsCount",
                "state",
                "street",
                "website",
            ]
        ]
    ]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `hours` or `plusCode`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a place that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge."""
    website: NotRequired[Literal["allPlaces", "withWebsite", "withoutWebsite"]]
    """Filter by whether the place lists a website: allPlaces (default), withWebsite (only if it has a website), or withoutWebsite (only if it has none). Omit this field, or send allPlaces, to stay on the cheapest price; withWebsite and withoutWebsite route to a dearer source."""


class MapsReviewsInput(TypedDict, total=False):
    """Input for Google Maps Reviews."""

    language: NotRequired[str]
    """Two-letter language code for the review details (e.g. en). Default: en."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-100, default 100). Range: 1 to 100."""
    placeId: Required[str]
    """The Google Maps place ID to fetch reviews for (e.g. ChIJj61dQgK6j4AR4GeTYWZsKWw)."""
    postedLimit: NotRequired[Literal["24h", "week", "month", "year"]]
    """Only return reviews posted within this window: 24h (past 24 hours), week (past 7 days), month (past month), or year (past year). Omit for no recency filter."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    requireFields: NotRequired[
        list[
            Literal[
                "isLocalGuide",
                "likes",
                "origin",
                "ownerResponse",
                "ownerResponseAt",
                "placeId",
                "publishedAgo",
                "rating",
                "reviewerId",
                "reviewerReviewsCount",
                "text",
            ]
        ]
    ]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `isLocalGuide` or `placeId`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a review that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge."""
    reviewsFilterString: NotRequired[str]
    """Only return reviews whose text contains this keyword or phrase (case-insensitive). Omit to return all reviews (e.g. parking)."""
    sort: NotRequired[
        Literal["newest", "mostRelevant", "highestRanking", "lowestRanking"]
    ]
    """Order in which reviews are returned (e.g. newest). Default: newest."""


class MapsSearchInput(TypedDict, total=False):
    """Input for Google Maps Search."""

    categoryFilterWords: NotRequired[list[str]]
    """Optional list of Google Maps place-category names to keep; results are limited to places whose category matches one of these. Use lowercase category names as shown on Google Maps (e.g. ["coffee shop", "restaurant"]). Omit to include all categories and stay on the cheapest price; a category filter routes to a dearer source."""
    language: NotRequired[str]
    """Two-letter language code for the results (e.g. en). Default: en."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). Pricing depends on the selected provider and may be flat per request. Range: 1 to 20."""
    location: Required[str]
    """Free-text location to search in, ideally city plus country (e.g. Austin, USA)."""
    placeMinimumStars: NotRequired[
        Literal["two", "twoAndHalf", "three", "threeAndHalf", "four", "fourAndHalf"]
    ]
    """Only return places with at least this average rating: two (2+), twoAndHalf (2.5+), three (3+), threeAndHalf (3.5+), four (4+), or fourAndHalf (4.5+). Places with no reviews are excluded. Omit this field to stay on the cheapest price; a rating floor routes to a dearer source."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """What you would type in the Google Maps search bar (e.g. coffee shop)."""
    requireFields: NotRequired[
        list[
            Literal[
                "address",
                "category",
                "cid",
                "city",
                "countryCode",
                "image",
                "latitude",
                "longitude",
                "permanentlyClosed",
                "phone",
                "postalCode",
                "priceLevel",
                "rating",
                "reviewCount",
                "state",
                "street",
                "website",
            ]
        ]
    ]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `cid` or `street`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a place that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge."""
    website: NotRequired[Literal["allPlaces", "withWebsite", "withoutWebsite"]]
    """Filter places by whether they list a website: allPlaces (default), withWebsite (only places that have a website), or withoutWebsite (only places without one). Omit this field, or send allPlaces, to stay on the cheapest price; withWebsite and withoutWebsite route to a dearer source."""


class MapsSearchNearbyInput(TypedDict, total=False):
    """Input for Google Maps Nearby Search."""

    coordinates: Required[dict[str, Any]]
    """The exact map centre to search around. Use maps.search instead if you only have a place name."""
    cursor: NotRequired[str | None]
    """Opaque cursor from a previous response's nextCursor. Pass it back to get the next page of places."""
    language: NotRequired[str]
    """Two-letter language code for the results (e.g. en). Default: en."""
    limit: NotRequired[int]
    """Maximum number of places to return in this response (1-20). Google Maps returns one viewport of about 20 places per call; page with cursor for more. Price is flat per request. Range: 1 to 20. Default: 20."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """What you would type in the Google Maps search bar (e.g. coffee shop)."""
    zoom: NotRequired[float]
    """Google Maps viewport zoom. Lower covers a wider area, higher focuses more tightly around the coordinates. Range: 3 to 21. Default: 13.1."""


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
        description="The best-matching place for the query, with available address, contact, category, rating, opening-hours, and coordinate details. Up to one element (empty when nothing matched). Populated whenever the provider has data for the entity."
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
        description="Google Maps place id the review belongs to. Echoes the requested placeId; a lane that does not repeat it per review omits it.",
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


class MapsSearchNearbyData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    items: list[MapsSearchNearbyItem] = Field(
        description="Matching Google Maps place records, nearest the requested coordinates first. Populated whenever the provider has data for the entity."
    )
    next_cursor: str | None = Field(
        default=None,
        alias="nextCursor",
        description="Opaque cursor for the next page of places, or null when this search is complete. Pass it back as cursor to continue.",
    )


class MapsSearchNearbyItem(BaseModel):
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
    image: str | None = Field(
        default=None, description="Thumbnail photo URL for the place."
    )
    latitude: float | None = Field(
        default=None, description="Latitude of the place in decimal degrees."
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the place in decimal degrees."
    )
    name: str = Field(
        description="Place name. Populated whenever the provider has data for the entity."
    )
    phone: str | None = Field(
        default=None, description="Business phone number, when listed."
    )
    place_id: str = Field(
        alias="placeId",
        description="Google Maps place id (stable identifier for the place). Populated whenever the provider has data for the entity.",
    )
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Postal code of the place."
    )
    rating: float | None = Field(
        default=None, description="Average Google rating out of 5."
    )
    review_count: int | None = Field(
        default=None,
        alias="reviewCount",
        description="Number of Google reviews the place has.",
    )
    state: str | None = Field(
        default=None,
        description="State or region the place is in, spelled in full (e.g. Texas).",
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
        records per request.

        Price: $0.00006 per request plus $0.00495 per result (maximum $0.0991).

        Example:
            res = client.maps.contacts(limit=3, location="Austin, TX", placeMinimumStars="four", query="coffee shop", website="withWebsite")
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
        a location) and get the best-matching place with available address, contact,
        rating, and coordinate details as normalized JSON.

        Price: $0.00175 per request.

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
        you need, in one normalized response.

        Price: $0.0035 per request.

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
        request.

        Price: $0.00175 per request.

        Example:
            res = client.maps.search(limit=3, location="Austin, TX", query="coffee")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.search", dict(input), options
        )
        return RunResult[MapsSearchData].model_validate(raw)

    def search_nearby(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsSearchNearbyInput],
    ) -> RunResult[MapsSearchNearbyData]:
        """Google Maps Nearby Search

        Search Google Maps around an exact latitude and longitude and get up to 20
        normalized places per call, each with the address broken into street, city,
        state, postal code and country. Use this when you have coordinates and want
        the map viewport centred on them; use maps.search when you only have a place
        name. Pass the returned nextCursor back as cursor for the next 20 places.

        Price: $0.0013 per request.

        Example:
            res = client.maps.search_nearby(coordinates={"latitude": 30.2672, "longitude": -97.7431}, limit=20, query="coffee shop")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.search_nearby", dict(input), options
        )
        return RunResult[MapsSearchNearbyData].model_validate(raw)

    def iter_search_nearby(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsSearchNearbyInput],
    ) -> Paginator[MapsSearchNearbyItem, MapsSearchNearbyData]:
        """Iterate Google Maps Nearby Search results, following pagination cursors.

        Yields validated `MapsSearchNearbyItem` items from the `items` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "maps.search_nearby",
            dict(input),
            "items",
            item_model=MapsSearchNearbyItem,
            data_model=MapsSearchNearbyData,
            bare=False,
            options=options,
        )


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
        records per request.

        Price: $0.00006 per request plus $0.00495 per result (maximum $0.0991).

        Example:
            res = client.maps.contacts(limit=3, location="Austin, TX", placeMinimumStars="four", query="coffee shop", website="withWebsite")
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
        a location) and get the best-matching place with available address, contact,
        rating, and coordinate details as normalized JSON.

        Price: $0.00175 per request.

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
        you need, in one normalized response.

        Price: $0.0035 per request.

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
        request.

        Price: $0.00175 per request.

        Example:
            res = client.maps.search(limit=3, location="Austin, TX", query="coffee")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.search", dict(input), options
        )
        return RunResult[MapsSearchData].model_validate(raw)

    async def search_nearby(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsSearchNearbyInput],
    ) -> RunResult[MapsSearchNearbyData]:
        """Google Maps Nearby Search

        Search Google Maps around an exact latitude and longitude and get up to 20
        normalized places per call, each with the address broken into street, city,
        state, postal code and country. Use this when you have coordinates and want
        the map viewport centred on them; use maps.search when you only have a place
        name. Pass the returned nextCursor back as cursor for the next 20 places.

        Price: $0.0013 per request.

        Example:
            res = client.maps.search_nearby(coordinates={"latitude": 30.2672, "longitude": -97.7431}, limit=20, query="coffee shop")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.search_nearby", dict(input), options
        )
        return RunResult[MapsSearchNearbyData].model_validate(raw)

    def iter_search_nearby(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsSearchNearbyInput],
    ) -> AsyncPaginator[MapsSearchNearbyItem, MapsSearchNearbyData]:
        """Iterate Google Maps Nearby Search results, following pagination cursors.

        Yields validated `MapsSearchNearbyItem` items from the `items` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "maps.search_nearby",
            dict(input),
            "items",
            item_model=MapsSearchNearbyItem,
            data_model=MapsSearchNearbyData,
            bare=False,
            options=options,
        )
