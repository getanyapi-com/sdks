# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the tripadvisor platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class TripadvisorReviewsInput(TypedDict, total=False):
    """Input for Tripadvisor Reviews."""

    languages: NotRequired[list[str]]
    """Only return reviews in these ISO 639-1 languages (e.g. ["en", "es"]); omit for all languages."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    ratings: NotRequired[list[Literal["1", "2", "3", "4", "5"]]]
    """Only return reviews whose bubble rating is in this set (e.g. ["5", "4"] for 4 and 5 star reviews); omit for all ratings."""
    since: NotRequired[str]
    """Only return reviews newer than this date, YYYY-MM-DD or a relative window like '3 months' (e.g. 2026-01-01)."""
    url: Required[str]
    """Tripadvisor page URL of the hotel, restaurant, or attraction."""


class TripadvisorSearchInput(TypedDict, total=False):
    """Input for Tripadvisor Search."""

    currency: NotRequired[str]
    """ISO currency code for prices (e.g. USD, EUR). Default: USD."""
    includeAttractions: NotRequired[bool]
    """Include attractions and things to do in the results; set false to exclude them (e.g. false). Defaults to true. Default: true."""
    includeHotels: NotRequired[bool]
    """Include hotels in the results; set false to exclude them (e.g. false). Defaults to true. Default: true."""
    includeRestaurants: NotRequired[bool]
    """Include restaurants in the results; set false to exclude them (e.g. false). Defaults to true. Default: true."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    query: Required[str]
    """Destination or keyword to search for (e.g. Barcelona)."""


class TripadvisorReviewsData(BaseModel):
    items: list[TripadvisorReviewsItem] = Field(
        description="Review records for the place: rating, title, review text, publish date, trip type, and reviewer details. Populated whenever the provider has data for the entity."
    )


class TripadvisorReviewsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    rating: float = Field(description="Star rating (typically 1-5).")
    text: str = Field(
        description="Review body text. Populated whenever the provider has data for the entity."
    )
    title: str | None = Field(
        default=None,
        description="Review title or headline. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    url: str | None = Field(
        default=None,
        description="Canonical review URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )


class TripadvisorSearchData(BaseModel):
    items: list[TripadvisorSearchItem] = Field(
        description="Matching Tripadvisor place records (hotels, restaurants, attractions). Populated whenever the provider has data for the entity."
    )


class TripadvisorSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address: str | None = Field(
        default=None, description="Full formatted street address."
    )
    category: str | None = Field(
        default=None,
        description="High-level category (e.g. hotel, restaurant, attraction).",
    )
    city: str | None = Field(default=None, description="City the place is in.")
    country: str | None = Field(default=None, description="Country the place is in.")
    email: str | None = Field(
        default=None, description="Business contact email, when listed."
    )
    hotel_class: str | None = Field(
        default=None,
        alias="hotelClass",
        description="Star rating / hotel class, when applicable.",
    )
    id: str | None = Field(
        default=None,
        description="Tripadvisor location id (stable identifier for the place).",
    )
    image: str | None = Field(default=None, description="Primary place photo URL.")
    latitude: float | None = Field(
        default=None, description="Latitude of the place in decimal degrees."
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the place in decimal degrees."
    )
    phone: str | None = Field(
        default=None, description="Business phone number, when listed."
    )
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Postal code of the place."
    )
    price_level: str | None = Field(
        default=None,
        alias="priceLevel",
        description="Relative price level indicator (e.g. $$, $$$$).",
    )
    price_range: str | None = Field(
        default=None,
        alias="priceRange",
        description="Nightly or per-visit price range in the requested currency.",
    )
    ranking: str | None = Field(
        default=None,
        description='Ranking string within its location (e.g. "#2 of 1,885 hotels in Paris").',
    )
    rating: float = Field(
        description="Average traveler rating out of 5. Populated whenever the provider has data for the entity."
    )
    review_count: float | None = Field(
        default=None,
        alias="reviewCount",
        description="Total number of traveler reviews.",
    )
    title: str = Field(
        description="Place name. Populated whenever the provider has data for the entity."
    )
    type_: str | None = Field(
        default=None,
        alias="type",
        description="Tripadvisor place type (e.g. HOTEL, RESTAURANT, ATTRACTION).",
    )
    url: str = Field(
        description="Canonical Tripadvisor listing page URL. Populated whenever the provider has data for the entity."
    )
    website: str | None = Field(
        default=None, description="The place's own website URL, when listed."
    )


class TripadvisorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TripadvisorReviewsInput],
    ) -> RunResult[TripadvisorReviewsData]:
        """Tripadvisor Reviews

        Fetch the latest reviews for any Tripadvisor hotel, restaurant, or
        attraction by its page URL - rating, text, date, and trip details as
        normalized JSON.

        Price: $0.00325 per request.

        Example:
            res = client.tripadvisor.reviews(limit=3, url="https://www.tripadvisor.com/Hotel_Review-g60763-d93450-Reviews-The_Plaza-New_York_City_New_York.html")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tripadvisor.reviews", dict(input), options
        )
        return RunResult[TripadvisorReviewsData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TripadvisorSearchInput],
    ) -> RunResult[TripadvisorSearchData]:
        """Tripadvisor Search

        Search Tripadvisor for hotels, restaurants, and attractions in any
        destination and get rich place records (ratings, review counts, contact
        details, pricing) as normalized JSON.

        Price: $0.00325 per request.

        Example:
            res = client.tripadvisor.search(limit=3, query="Paris")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tripadvisor.search", dict(input), options
        )
        return RunResult[TripadvisorSearchData].model_validate(raw)


class AsyncTripadvisorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TripadvisorReviewsInput],
    ) -> RunResult[TripadvisorReviewsData]:
        """Tripadvisor Reviews

        Fetch the latest reviews for any Tripadvisor hotel, restaurant, or
        attraction by its page URL - rating, text, date, and trip details as
        normalized JSON.

        Price: $0.00325 per request.

        Example:
            res = client.tripadvisor.reviews(limit=3, url="https://www.tripadvisor.com/Hotel_Review-g60763-d93450-Reviews-The_Plaza-New_York_City_New_York.html")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tripadvisor.reviews", dict(input), options
        )
        return RunResult[TripadvisorReviewsData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TripadvisorSearchInput],
    ) -> RunResult[TripadvisorSearchData]:
        """Tripadvisor Search

        Search Tripadvisor for hotels, restaurants, and attractions in any
        destination and get rich place records (ratings, review counts, contact
        details, pricing) as normalized JSON.

        Price: $0.00325 per request.

        Example:
            res = client.tripadvisor.search(limit=3, query="Paris")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tripadvisor.search", dict(input), options
        )
        return RunResult[TripadvisorSearchData].model_validate(raw)
