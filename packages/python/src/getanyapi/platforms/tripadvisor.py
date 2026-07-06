# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the tripadvisor platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class TripadvisorReviewsInput(TypedDict, total=False):
    """Input for Tripadvisor Reviews."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    since: NotRequired[str]
    """Only return reviews newer than this date, YYYY-MM-DD or a relative window like '3 months' (e.g. 2026-01-01)."""
    url: Required[str]
    """Tripadvisor page URL of the hotel, restaurant, or attraction."""


class TripadvisorSearchInput(TypedDict, total=False):
    """Input for Tripadvisor Search."""

    currency: NotRequired[str]
    """ISO currency code for prices (e.g. USD, EUR). Default: USD."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    query: Required[str]
    """Destination or keyword to search for (e.g. Barcelona)."""


class TripadvisorReviewsData(BaseModel):
    items: list[TripadvisorReviewsItem] = Field(
        description="Review records for the place: rating, title, review text, publish date, trip type, and reviewer details."
    )


class TripadvisorReviewsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    published_at: str | None = Field(
        default=None,
        alias="publishedAt",
        description="Publish date. Present whenever the upstream returns this record.",
    )
    rating: float = Field(description="Star rating (typically 1-5).")
    text: str = Field(description="Review body text.")
    title: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    url: str | None = Field(
        default=None,
        description="Canonical review URL. Present whenever the upstream returns this record.",
    )


class TripadvisorSearchData(BaseModel):
    items: list[TripadvisorSearchItem] = Field(
        description="Matching place records: name, type (hotel/restaurant/attraction), rating, review count, address, contact details, and pricing."
    )


class TripadvisorSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    rating: float
    title: str
    url: str


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
        normalized JSON with transparent per-request USD pricing.

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
        details, pricing) as normalized JSON with transparent per-request USD
        pricing.

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
        normalized JSON with transparent per-request USD pricing.

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
        details, pricing) as normalized JSON with transparent per-request USD
        pricing.

        Price: $0.00325 per request.

        Example:
            res = client.tripadvisor.search(limit=3, query="Paris")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tripadvisor.search", dict(input), options
        )
        return RunResult[TripadvisorSearchData].model_validate(raw)
