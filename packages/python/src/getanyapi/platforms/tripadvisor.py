# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the tripadvisor platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    model_config = ConfigDict(extra="allow")


class TripadvisorSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TripadvisorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TripadvisorReviewsInput],
    ) -> BareRunResult[TripadvisorReviewsData]:
        """Tripadvisor Reviews

        Fetch the latest reviews for any Tripadvisor hotel, restaurant, or
        attraction by its page URL: rating, text, date, and trip details as
        normalized JSON.

        Price: $0.00325 per request.

        Example:
            res = client.tripadvisor.reviews(limit=3, url="https://www.tripadvisor.com/Hotel_Review-g60763-d93450-Reviews-The_Plaza-New_York_City_New_York.html")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tripadvisor.reviews", dict(input), options
        )
        return BareRunResult[TripadvisorReviewsData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TripadvisorSearchInput],
    ) -> BareRunResult[TripadvisorSearchData]:
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
        return BareRunResult[TripadvisorSearchData].model_validate(raw)


class AsyncTripadvisorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TripadvisorReviewsInput],
    ) -> BareRunResult[TripadvisorReviewsData]:
        """Tripadvisor Reviews

        Fetch the latest reviews for any Tripadvisor hotel, restaurant, or
        attraction by its page URL: rating, text, date, and trip details as
        normalized JSON.

        Price: $0.00325 per request.

        Example:
            res = client.tripadvisor.reviews(limit=3, url="https://www.tripadvisor.com/Hotel_Review-g60763-d93450-Reviews-The_Plaza-New_York_City_New_York.html")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tripadvisor.reviews", dict(input), options
        )
        return BareRunResult[TripadvisorReviewsData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TripadvisorSearchInput],
    ) -> BareRunResult[TripadvisorSearchData]:
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
        return BareRunResult[TripadvisorSearchData].model_validate(raw)
