# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the maps platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    query: Required[str]
    """What you would type in the Google Maps search bar (e.g. dentist)."""
    website: NotRequired[Literal["allPlaces", "withWebsite", "withoutWebsite"]]
    """Filter places by whether they list a website: allPlaces (default), withWebsite (only places that have a website), or withoutWebsite (only places without one). Contact enrichment pulls emails and social profiles from a place's website, so withWebsite targets leads that can be enriched."""


class MapsPlaceInput(TypedDict, total=False):
    """Input for Google Maps Place Lookup."""

    categoryFilterWords: NotRequired[list[str]]
    """Optional list of Google Maps place-category names to keep; the match is limited to a place whose category is one of these. Use lowercase category names as shown on Google Maps (e.g. ["coffee shop"]). Omit to allow any category."""
    language: NotRequired[str]
    """Two-letter language code for the result details (e.g. en). Default: en."""
    location: NotRequired[str]
    """Optional free-text location to scope the search, ideally city plus state or country (e.g. San Francisco, CA). Narrows the query to the best match in that area."""
    placeMinimumStars: NotRequired[
        Literal["two", "twoAndHalf", "three", "threeAndHalf", "four", "fourAndHalf"]
    ]
    """Only match a place with at least this average rating: two (2+), twoAndHalf (2.5+), three (3+), threeAndHalf (3.5+), four (4+), or fourAndHalf (4.5+). Places with no reviews are excluded. Omit for no rating filter."""
    query: Required[str]
    """The business name or search text to look up, as you would type it into the Google Maps search bar (e.g. Blue Bottle Coffee)."""
    website: NotRequired[Literal["allPlaces", "withWebsite", "withoutWebsite"]]
    """Filter by whether the place lists a website: allPlaces (default), withWebsite (only if it has a website), or withoutWebsite (only if it has none)."""


class MapsReviewsInput(TypedDict, total=False):
    """Input for Google Maps Reviews."""

    language: NotRequired[str]
    """Two-letter language code for the review details (e.g. en). Default: en."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-100, default 100). You are billed per result returned, so a lower limit costs less. Range: 1 to 100."""
    placeId: Required[str]
    """The Google Maps place ID to fetch reviews for (e.g. ChIJj61dQgK6j4AR4GeTYWZsKWw)."""
    postedLimit: NotRequired[Literal["24h", "week", "month", "year"]]
    """Only return reviews posted within this window: 24h (past 24 hours), week (past 7 days), month (past month), or year (past year). Omit for no recency filter."""
    reviewsFilterString: NotRequired[str]
    """Only return reviews whose text contains this keyword or phrase (case-insensitive). Omit to return all reviews (e.g. parking)."""
    sort: NotRequired[
        Literal["newest", "mostRelevant", "highestRanking", "lowestRanking"]
    ]
    """Order in which reviews are returned (e.g. newest). Default: newest."""


class MapsSearchInput(TypedDict, total=False):
    """Input for Google Maps Search."""

    categoryFilterWords: NotRequired[list[str]]
    """Optional list of Google Maps place-category names to keep; results are limited to places whose category matches one of these. Use lowercase category names as shown on Google Maps (e.g. ["coffee shop", "restaurant"]). Omit to include all categories."""
    language: NotRequired[str]
    """Two-letter language code for the results (e.g. en). Default: en."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    location: Required[str]
    """Free-text location to search in, ideally city plus country (e.g. Austin, USA)."""
    placeMinimumStars: NotRequired[
        Literal["two", "twoAndHalf", "three", "threeAndHalf", "four", "fourAndHalf"]
    ]
    """Only return places with at least this average rating: two (2+), twoAndHalf (2.5+), three (3+), threeAndHalf (3.5+), four (4+), or fourAndHalf (4.5+). Places with no reviews are excluded. Omit for no rating filter."""
    query: Required[str]
    """What you would type in the Google Maps search bar (e.g. coffee shop)."""
    website: NotRequired[Literal["allPlaces", "withWebsite", "withoutWebsite"]]
    """Filter places by whether they list a website: allPlaces (default), withWebsite (only places that have a website), or withoutWebsite (only places without one)."""


class MapsContactsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class MapsPlaceData(BaseModel):
    model_config = ConfigDict(extra="allow")


class MapsReviewsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class MapsSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class MapsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def contacts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsContactsInput],
    ) -> BareRunResult[MapsContactsData]:
        """Google Maps Contacts

        Search Google Maps for businesses and enrich each result with contact
        details (emails, phones, and social profiles from their websites), up to 20
        records per request.

        Price: $0.00005 per request plus $0.003 per result (maximum $0.06005).

        Example:
            res = client.maps.contacts(limit=3, location="Austin, TX", placeMinimumStars="four", query="coffee shop", website="withWebsite")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.contacts", dict(input), options
        )
        return BareRunResult[MapsContactsData].model_validate(raw)

    def place(
        self, *, options: RequestOptions | None = None, **input: Unpack[MapsPlaceInput]
    ) -> BareRunResult[MapsPlaceData]:
        """Google Maps Place Lookup

        Look up a place on Google Maps by name or search query (optionally scoped to
        a location) and get the best-matching place with full details - address,
        phone, website, rating, hours, and coordinates - as normalized JSON.

        Price: $0.003 per request plus $0.005 per result (maximum $0.009).

        Example:
            res = client.maps.place(location="San Francisco, CA", query="Blue Bottle Coffee", website="withWebsite")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.place", dict(input), options
        )
        return BareRunResult[MapsPlaceData].model_validate(raw)

    def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsReviewsInput],
    ) -> BareRunResult[MapsReviewsData]:
        """Google Maps Reviews

        Fetch up to 100 Google Maps reviews for a place by place ID, sorted the way
        you need, in one normalized response.

        Price: $0.00005 per request plus $0.0004 per result (maximum $0.04005).

        Example:
            res = client.maps.reviews(limit=3, placeId="ChIJN1t_tDeuEmsRUsoyG83frY4", postedLimit="year")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.reviews", dict(input), options
        )
        return BareRunResult[MapsReviewsData].model_validate(raw)

    def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[MapsSearchInput]
    ) -> BareRunResult[MapsSearchData]:
        """Google Maps Search

        Search Google Maps for places matching a query and location: up to 20
        normalized place records with ratings, addresses, and contact basics per
        request.

        Price: $0.00005 per request plus $0.003 per result (maximum $0.06005).

        Example:
            res = client.maps.search(limit=3, location="Austin, TX", placeMinimumStars="four", query="coffee", website="withWebsite")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.search", dict(input), options
        )
        return BareRunResult[MapsSearchData].model_validate(raw)


class AsyncMapsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def contacts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsContactsInput],
    ) -> BareRunResult[MapsContactsData]:
        """Google Maps Contacts

        Search Google Maps for businesses and enrich each result with contact
        details (emails, phones, and social profiles from their websites), up to 20
        records per request.

        Price: $0.00005 per request plus $0.003 per result (maximum $0.06005).

        Example:
            res = client.maps.contacts(limit=3, location="Austin, TX", placeMinimumStars="four", query="coffee shop", website="withWebsite")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.contacts", dict(input), options
        )
        return BareRunResult[MapsContactsData].model_validate(raw)

    async def place(
        self, *, options: RequestOptions | None = None, **input: Unpack[MapsPlaceInput]
    ) -> BareRunResult[MapsPlaceData]:
        """Google Maps Place Lookup

        Look up a place on Google Maps by name or search query (optionally scoped to
        a location) and get the best-matching place with full details - address,
        phone, website, rating, hours, and coordinates - as normalized JSON.

        Price: $0.003 per request plus $0.005 per result (maximum $0.009).

        Example:
            res = client.maps.place(location="San Francisco, CA", query="Blue Bottle Coffee", website="withWebsite")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.place", dict(input), options
        )
        return BareRunResult[MapsPlaceData].model_validate(raw)

    async def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MapsReviewsInput],
    ) -> BareRunResult[MapsReviewsData]:
        """Google Maps Reviews

        Fetch up to 100 Google Maps reviews for a place by place ID, sorted the way
        you need, in one normalized response.

        Price: $0.00005 per request plus $0.0004 per result (maximum $0.04005).

        Example:
            res = client.maps.reviews(limit=3, placeId="ChIJN1t_tDeuEmsRUsoyG83frY4", postedLimit="year")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.reviews", dict(input), options
        )
        return BareRunResult[MapsReviewsData].model_validate(raw)

    async def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[MapsSearchInput]
    ) -> BareRunResult[MapsSearchData]:
        """Google Maps Search

        Search Google Maps for places matching a query and location: up to 20
        normalized place records with ratings, addresses, and contact basics per
        request.

        Price: $0.00005 per request plus $0.003 per result (maximum $0.06005).

        Example:
            res = client.maps.search(limit=3, location="Austin, TX", placeMinimumStars="four", query="coffee", website="withWebsite")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "maps.search", dict(input), options
        )
        return BareRunResult[MapsSearchData].model_validate(raw)
