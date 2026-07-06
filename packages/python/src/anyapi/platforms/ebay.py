# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the ebay platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class EbaySearchInput(TypedDict, total=False):
    """Input for eBay Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1 to 25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    maxPrice: NotRequired[int]
    """Optional maximum item price in USD. Minimum: 0."""
    minPrice: NotRequired[int]
    """Optional minimum item price in USD. Minimum: 0."""
    query: Required[str]
    """Search keywords, e.g. "nintendo switch" or "vintage levis 501"."""


class EbaySoldListingsInput(TypedDict, total=False):
    """Input for eBay Sold Listings."""

    condition: NotRequired[Literal["any", "new", "used"]]
    """Item condition filter (e.g. used). Default: any."""
    daysBack: NotRequired[int]
    """How many days back to include sold listings, 1-90 (e.g. 30). Default: 30."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    query: Required[str]
    """Search keyword for sold items (e.g. iphone 13 pro)."""
    site: NotRequired[
        Literal[
            "ebay.com",
            "ebay.co.uk",
            "ebay.de",
            "ebay.fr",
            "ebay.it",
            "ebay.es",
            "ebay.ca",
            "ebay.com.au",
        ]
    ]
    """eBay country site to search (e.g. ebay.co.uk). Default: ebay.com."""


class EbaySearchData(BaseModel):
    items: list[EbaySearchItem] = Field(
        description="Listing records: title, price, condition, shipping cost, seller info, image, and item URL. Populated whenever the provider returns data."
    )


class EbaySearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    condition: str | None = None
    image: str | None = Field(
        default=None,
        description="Primary listing image URL. Populated whenever the provider returns data.",
    )
    itemId: str = Field(
        description="eBay item identifier. Populated whenever the provider returns data."
    )
    listingType: str | None = Field(
        default=None, description="Auction, FixedPrice, etc."
    )
    price: float | None = Field(default=None, description="Listing price.")
    sellerFeedbackPercent: float | None = Field(
        default=None, description="Seller positive-feedback percentage."
    )
    sellerName: str | None = None
    shippingCost: str | None = Field(
        default=None, description="Shipping cost or free-delivery label."
    )
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class EbaySoldListingsData(BaseModel):
    items: list[EbaySoldListingsItem] = Field(
        description="Sold listing records: title, sold price, sale date, condition, shipping, and item URL. Populated whenever the provider returns data."
    )


class EbaySoldListingsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    condition: str | None = None
    endedAt: str | None = Field(default=None, description="Sale date (ISO 8601).")
    image: str | None = Field(
        default=None,
        description="Primary listing image URL. Populated whenever the provider returns data.",
    )
    itemId: str = Field(
        description="eBay item identifier. Populated whenever the provider returns data."
    )
    listingType: str | None = None
    sellerUsername: str | None = None
    soldCurrency: str | None = None
    soldPrice: float | None = Field(default=None, description="Final sold price.")
    title: str = Field(description="Populated whenever the provider returns data.")
    totalPrice: float | None = Field(
        default=None, description="Sold price plus shipping."
    )
    url: str = Field(description="Populated whenever the provider returns data.")


class EbayNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[EbaySearchInput]
    ) -> RunResult[EbaySearchData]:
        """eBay Search

        Search eBay active listings by keyword and get title, price, condition,
        shipping, seller, and sold count in one normalized response. You are billed
        per result returned.

        Price: $0.00234 per result.

        Example:
            res = client.ebay.search(limit=3, query="nintendo switch")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "ebay.search", dict(input), options
        )
        return RunResult[EbaySearchData].model_validate(raw.model_dump(by_alias=True))

    def sold_listings(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EbaySoldListingsInput],
    ) -> RunResult[EbaySoldListingsData]:
        """eBay Sold Listings

        Retrieve recently sold eBay listings for any keyword - sold price, sale
        date, condition, and item details - ideal for pricing research, at a flat
        per-request USD price.

        Price: $0.004 per result.

        Example:
            res = client.ebay.sold_listings(limit=3, query="nintendo switch")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "ebay.sold_listings", dict(input), options
        )
        return RunResult[EbaySoldListingsData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncEbayNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[EbaySearchInput]
    ) -> RunResult[EbaySearchData]:
        """eBay Search

        Search eBay active listings by keyword and get title, price, condition,
        shipping, seller, and sold count in one normalized response. You are billed
        per result returned.

        Price: $0.00234 per result.

        Example:
            res = client.ebay.search(limit=3, query="nintendo switch")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "ebay.search", dict(input), options
        )
        return RunResult[EbaySearchData].model_validate(raw.model_dump(by_alias=True))

    async def sold_listings(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EbaySoldListingsInput],
    ) -> RunResult[EbaySoldListingsData]:
        """eBay Sold Listings

        Retrieve recently sold eBay listings for any keyword - sold price, sale
        date, condition, and item details - ideal for pricing research, at a flat
        per-request USD price.

        Price: $0.004 per result.

        Example:
            res = client.ebay.sold_listings(limit=3, query="nintendo switch")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "ebay.sold_listings", dict(input), options
        )
        return RunResult[EbaySoldListingsData].model_validate(
            raw.model_dump(by_alias=True)
        )
