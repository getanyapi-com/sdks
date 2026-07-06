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
        description="Business records: name, address, rating, plus enriched contact details such as emails, phone numbers, and social profiles. Populated whenever the provider returns data."
    )


class MapsContactsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    name: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class MapsPlaceData(BaseModel):
    items: list[MapsPlaceItem] = Field(
        description="The best-matching place for the query, with full details: name, address, contact info, category, rating, opening hours, and coordinates. Up to one element (empty when nothing matched). Populated whenever the provider returns data."
    )


class MapsPlaceItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    address: str | None = Field(
        default=None,
        description="Full formatted street address. Populated whenever the provider returns data.",
    )
    category: str | None = Field(
        default=None,
        description="Primary Google Maps category (e.g. Coffee shop). Populated whenever the provider returns data.",
    )
    city: str | None = None
    countryCode: str | None = Field(
        default=None, description="Two-letter country code."
    )
    hours: list[MapsPlaceHour] | None = Field(
        default=None,
        description="Opening hours by day: each element is an object with the day name and its hours.",
    )
    image: str | None = Field(
        default=None, description="URL of the primary place photo."
    )
    latitude: float | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    longitude: float | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    name: str = Field(
        description="Business or place name. Populated whenever the provider returns data."
    )
    neighborhood: str | None = None
    permanentlyClosed: bool | None = Field(
        default=None, description="Whether the place is permanently closed."
    )
    phone: str | None = Field(default=None, description="Formatted phone number.")
    placeId: str | None = Field(
        default=None,
        description="Google Maps place id. Populated whenever the provider returns data.",
    )
    plusCode: str | None = Field(
        default=None, description="Google Plus Code for the location."
    )
    postalCode: str | None = None
    priceLevel: str | None = Field(
        default=None, description="Price level indicator (e.g. a price range)."
    )
    rating: float | None = Field(default=None, description="Average star rating.")
    reviewsCount: int | None = Field(
        default=None, description="Total number of reviews."
    )
    state: str | None = Field(default=None, description="State or region name.")
    street: str | None = Field(
        default=None, description="Street portion of the address."
    )
    url: str = Field(
        description="Google Maps URL for the place. Populated whenever the provider returns data."
    )
    website: str | None = Field(default=None, description="Business website URL.")


class MapsPlaceHour(BaseModel):
    model_config = ConfigDict(extra="allow")


class MapsReviewsData(BaseModel):
    items: list[MapsReviewsItem] = Field(
        description="Review records: reviewer, star rating, review text (empty when the reviewer left only a rating), publish date, likes, and owner response where present. Populated whenever the provider returns data."
    )


class MapsReviewsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    author: str | None = Field(
        default=None,
        description="Reviewer display name. Populated whenever the provider returns data.",
    )
    isLocalGuide: bool | None = Field(
        default=None, description="Whether the reviewer is a Google Local Guide."
    )
    likes: int | None = Field(
        default=None, description="Number of likes on the review."
    )
    origin: str | None = Field(
        default=None, description="Source of the review (e.g. Google)."
    )
    ownerResponse: str | None = Field(
        default=None, description="Owner's reply text; empty when there is none."
    )
    ownerResponseAt: str | None = Field(
        default=None,
        description="ISO 8601 timestamp of the owner's reply; empty when there is none.",
    )
    placeId: str | None = Field(
        default=None,
        description="Google Maps place id the review belongs to. Populated whenever the provider returns data.",
    )
    publishedAgo: str | None = Field(
        default=None, description="Human-relative publish time (e.g. '7 hours ago')."
    )
    publishedAt: str | None = Field(
        default=None,
        description="ISO 8601 timestamp the review was published. Populated whenever the provider returns data.",
    )
    rating: float | None = Field(
        default=None, description="Star rating the reviewer gave (1-5)."
    )
    reviewId: str = Field(
        description="Stable Google review id. Populated whenever the provider returns data."
    )
    reviewerId: str | None = None
    reviewerReviewsCount: int | None = Field(
        default=None, description="Total number of reviews the reviewer has written."
    )
    text: str | None = Field(
        default=None,
        description="Review text; empty string when the reviewer left only a star rating.",
    )
    url: str | None = Field(
        default=None,
        description="Direct URL to the review on Google Maps. Populated whenever the provider returns data.",
    )


class MapsSearchData(BaseModel):
    items: list[MapsSearchItem] = Field(
        description="Place records: name, category, address, coordinates, rating, review count, and contact basics. Populated whenever the provider returns data."
    )


class MapsSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    name: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


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
        details - emails, phones, and social profiles from their websites - up to 20
        records per request.

        Price: $0.003 per result.

        Example:
            res = client.maps.contacts(limit=3, location="Austin, TX", query="coffee shop")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "maps.contacts", dict(input), options
        )
        return RunResult[MapsContactsData].model_validate(raw.model_dump(by_alias=True))

    def place(
        self, *, options: RequestOptions | None = None, **input: Unpack[MapsPlaceInput]
    ) -> RunResult[MapsPlaceData]:
        """Google Maps Place Lookup

        Look up a place on Google Maps by name or search query (optionally scoped to
        a location) and get the best-matching place with full details - address,
        phone, website, rating, hours, and coordinates - as normalized JSON priced
        per request in USD.

        Price: $0.005 per result.

        Example:
            res = client.maps.place(location="San Francisco, CA", query="Blue Bottle Coffee")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "maps.place", dict(input), options
        )
        return RunResult[MapsPlaceData].model_validate(raw.model_dump(by_alias=True))

    def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsReviewsInput],
    ) -> RunResult[MapsReviewsData]:
        """Google Maps Reviews

        Fetch up to 100 Google Maps reviews for a place by place ID, sorted the way
        you need, in one flat-priced normalized response.

        Price: $0.0004 per result.

        Example:
            res = client.maps.reviews(limit=3, placeId="ChIJN1t_tDeuEmsRUsoyG83frY4")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "maps.reviews", dict(input), options
        )
        return RunResult[MapsReviewsData].model_validate(raw.model_dump(by_alias=True))

    def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[MapsSearchInput]
    ) -> RunResult[MapsSearchData]:
        """Google Maps Search

        Search Google Maps for places matching a query and location - up to 20
        normalized place records with ratings, addresses, and contact basics per
        request.

        Price: $0.003 per result.

        Example:
            res = client.maps.search(limit=3, location="Austin, TX", query="coffee")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "maps.search", dict(input), options
        )
        return RunResult[MapsSearchData].model_validate(raw.model_dump(by_alias=True))


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
        details - emails, phones, and social profiles from their websites - up to 20
        records per request.

        Price: $0.003 per result.

        Example:
            res = client.maps.contacts(limit=3, location="Austin, TX", query="coffee shop")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "maps.contacts", dict(input), options
        )
        return RunResult[MapsContactsData].model_validate(raw.model_dump(by_alias=True))

    async def place(
        self, *, options: RequestOptions | None = None, **input: Unpack[MapsPlaceInput]
    ) -> RunResult[MapsPlaceData]:
        """Google Maps Place Lookup

        Look up a place on Google Maps by name or search query (optionally scoped to
        a location) and get the best-matching place with full details - address,
        phone, website, rating, hours, and coordinates - as normalized JSON priced
        per request in USD.

        Price: $0.005 per result.

        Example:
            res = client.maps.place(location="San Francisco, CA", query="Blue Bottle Coffee")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "maps.place", dict(input), options
        )
        return RunResult[MapsPlaceData].model_validate(raw.model_dump(by_alias=True))

    async def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsReviewsInput],
    ) -> RunResult[MapsReviewsData]:
        """Google Maps Reviews

        Fetch up to 100 Google Maps reviews for a place by place ID, sorted the way
        you need, in one flat-priced normalized response.

        Price: $0.0004 per result.

        Example:
            res = client.maps.reviews(limit=3, placeId="ChIJN1t_tDeuEmsRUsoyG83frY4")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "maps.reviews", dict(input), options
        )
        return RunResult[MapsReviewsData].model_validate(raw.model_dump(by_alias=True))

    async def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[MapsSearchInput]
    ) -> RunResult[MapsSearchData]:
        """Google Maps Search

        Search Google Maps for places matching a query and location - up to 20
        normalized place records with ratings, addresses, and contact basics per
        request.

        Price: $0.003 per result.

        Example:
            res = client.maps.search(limit=3, location="Austin, TX", query="coffee")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "maps.search", dict(input), options
        )
        return RunResult[MapsSearchData].model_validate(raw.model_dump(by_alias=True))
