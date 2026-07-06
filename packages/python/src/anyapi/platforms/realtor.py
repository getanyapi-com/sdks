# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the realtor platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class RealtorSearchInput(TypedDict, total=False):
    """Input for Realtor.com Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    location: Required[str]
    """City, ZIP code, neighborhood or state to search (e.g. Las Vegas, NV)."""
    priceMax: NotRequired[int]
    """Maximum listing price in USD (e.g. 750000)."""
    priceMin: NotRequired[int]
    """Minimum listing price in USD (e.g. 250000)."""
    searchMode: NotRequired[str]
    """Listing type to search: for_sale or sold (e.g. for_sale). Default: for_sale."""


class RealtorSearchData(BaseModel):
    items: list[RealtorSearchItem] = Field(
        description="Property listing records: address, price, beds, baths, square footage, status, and listing metadata. Populated whenever the provider returns data."
    )


class RealtorSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    price: float | None = None
    title: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    url: str = Field(description="Populated whenever the provider returns data.")


class RealtorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RealtorSearchInput],
    ) -> RunResult[RealtorSearchData]:
        """Realtor.com Search

        Search Realtor.com listings by location with optional price filters and get
        property records (price, address, beds, baths) as normalized JSON, priced
        per request in USD.

        Price: $0.0015 per result.

        Example:
            res = client.realtor.search(limit=3, location="Austin, TX")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "realtor.search", dict(input), options
        )
        return RunResult[RealtorSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncRealtorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RealtorSearchInput],
    ) -> RunResult[RealtorSearchData]:
        """Realtor.com Search

        Search Realtor.com listings by location with optional price filters and get
        property records (price, address, beds, baths) as normalized JSON, priced
        per request in USD.

        Price: $0.0015 per result.

        Example:
            res = client.realtor.search(limit=3, location="Austin, TX")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "realtor.search", dict(input), options
        )
        return RunResult[RealtorSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )
