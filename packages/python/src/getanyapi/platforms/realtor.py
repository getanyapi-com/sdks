# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the realtor platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class RealtorSearchInput(TypedDict, total=False):
    """Input for Realtor.com Search."""

    bathsMin: NotRequired[int]
    """Minimum number of bathrooms (e.g. 2). Minimum: 0."""
    bedsMin: NotRequired[int]
    """Minimum number of bedrooms (e.g. 3). Minimum: 0."""
    keyword: NotRequired[str]
    """Free-text keyword that must appear in the listing description (e.g. 'pool')."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    location: Required[str]
    """City, ZIP code, neighborhood or state to search (e.g. Las Vegas, NV)."""
    priceMax: NotRequired[int]
    """Maximum listing price in USD (e.g. 750000). Minimum: 0."""
    priceMin: NotRequired[int]
    """Minimum listing price in USD (e.g. 250000). Minimum: 0."""
    propertyTypes: NotRequired[
        list[
            Literal[
                "single_family",
                "townhomes",
                "condo_townhome",
                "multi_family",
                "land",
                "farm",
                "manufactured",
                "mobile",
                "apartment",
                "coop",
                "duplex_triplex",
            ]
        ]
    ]
    """Filter by one or more property types; omit for all types (e.g. ["single_family", "townhomes"])."""
    searchMode: NotRequired[Literal["for_sale", "sold"]]
    """Listing type to search: for_sale or sold (e.g. for_sale). Default: for_sale."""
    searchStatuses: NotRequired[
        list[
            Literal[
                "for_sale", "ready_to_build", "pending", "coming_soon", "contingent"
            ]
        ]
    ]
    """Listing statuses to include in for_sale mode; omit for active For Sale + Ready to Build. Ignored in sold mode (e.g. ["for_sale", "pending"])."""


class RealtorSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class RealtorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RealtorSearchInput],
    ) -> BareRunResult[RealtorSearchData]:
        """Realtor.com Search

        Search Realtor.com listings by location with optional price, property-type,
        beds/baths, listing-status, and keyword filters and get property records
        (price, address, beds, baths) as normalized JSON.

        Price: $0.005 per request plus $0.0015 per result (maximum $0.0425).

        Example:
            res = client.realtor.search(bedsMin=4, limit=3, location="Austin, TX", propertyTypes=["single_family"], searchStatuses=["pending"])
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "realtor.search", dict(input), options
        )
        return BareRunResult[RealtorSearchData].model_validate(raw)


class AsyncRealtorNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RealtorSearchInput],
    ) -> BareRunResult[RealtorSearchData]:
        """Realtor.com Search

        Search Realtor.com listings by location with optional price, property-type,
        beds/baths, listing-status, and keyword filters and get property records
        (price, address, beds, baths) as normalized JSON.

        Price: $0.005 per request plus $0.0015 per result (maximum $0.0425).

        Example:
            res = client.realtor.search(bedsMin=4, limit=3, location="Austin, TX", propertyTypes=["single_family"], searchStatuses=["pending"])
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "realtor.search", dict(input), options
        )
        return BareRunResult[RealtorSearchData].model_validate(raw)
