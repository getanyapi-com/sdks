# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the yelp platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class YelpSearchInput(TypedDict, total=False):
    """Input for Yelp Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1 to 20, default 20). Range: 1 to 20."""
    location: Required[str]
    """City and state defining the search area (e.g. San Francisco, CA)."""
    query: Required[str]
    """Search term or category to look for (e.g. sushi)."""


class YelpSearchData(BaseModel):
    items: list[YelpSearchItem] = Field(
        description="Business listing records: name, categories, rating, review count, address, and core business info. Populated whenever the provider has data for the entity."
    )


class YelpSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    address1: str | None = Field(
        default=None, description="Primary street address line."
    )
    address2: str | None = Field(default=None, description="Secondary address line.")
    address3: str | None = Field(default=None, description="Tertiary address line.")
    alias: str = Field(
        description="URL slug for the business. Populated whenever the provider has data for the entity."
    )
    avg_rating: float | None = Field(
        default=None, description="Rounded average star rating."
    )
    categories: list[YelpSearchCategorie] | None = Field(
        default=None, description="Business category tags."
    )
    city: str | None = Field(default=None, description="City name.")
    country: str | None = Field(default=None, description="ISO country code.")
    dialable_phone: str | None = Field(
        default=None, description="Dialable phone number."
    )
    id: str = Field(
        description="Stable Yelp business identifier. Populated whenever the provider has data for the entity."
    )
    is_closed: bool | None = Field(
        default=None, description="Whether the business is permanently closed."
    )
    latitude: float | None = Field(
        default=None, description="Latitude of the business."
    )
    localized_phone: str | None = Field(
        default=None, description="Formatted local phone number."
    )
    localized_price: str | None = Field(
        default=None, description="Localized price tier (e.g. $$)."
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the business."
    )
    name: str = Field(
        description="Business display name. Populated whenever the provider has data for the entity."
    )
    neighborhoods: list[str] | None = Field(
        default=None, description="Neighborhood labels for the location."
    )
    phone: str | None = Field(default=None, description="Raw phone number.")
    photo_count: int | None = Field(default=None, description="Total photo count.")
    photo_url: str | None = Field(
        default=None,
        description="Primary photo URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    price: int | None = Field(default=None, description="Numeric price tier.")
    review_count: int | None = Field(default=None, description="Number of reviews.")
    state: str | None = Field(default=None, description="State or region code.")
    unrounded_avg_rating: float | None = Field(
        default=None, description="Unrounded average star rating."
    )
    zip: str | None = Field(default=None, description="Postal code.")


class YelpSearchCategorie(BaseModel):
    model_config = ConfigDict(extra="allow")


class YelpNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[YelpSearchInput]
    ) -> RunResult[YelpSearchData]:
        """Yelp Search

        Search Yelp for businesses by keyword and location: up to 20 listings with
        ratings, categories, and core business info per request. **Price:** billed
        per result - $40.00 per 1,000 requests base + $0.75 per 1,000 results,
        capped at $55.00 per 1,000 requests.

        Price: $0.04 per request plus $0.00075 per result.

        Example:
            res = client.yelp.search(limit=5, location="Chicago, IL", query="pizza")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "yelp.search", dict(input), options
        )
        return RunResult[YelpSearchData].model_validate(raw)


class AsyncYelpNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[YelpSearchInput]
    ) -> RunResult[YelpSearchData]:
        """Yelp Search

        Search Yelp for businesses by keyword and location: up to 20 listings with
        ratings, categories, and core business info per request. **Price:** billed
        per result - $40.00 per 1,000 requests base + $0.75 per 1,000 results,
        capped at $55.00 per 1,000 requests.

        Price: $0.04 per request plus $0.00075 per result.

        Example:
            res = client.yelp.search(limit=5, location="Chicago, IL", query="pizza")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "yelp.search", dict(input), options
        )
        return RunResult[YelpSearchData].model_validate(raw)
