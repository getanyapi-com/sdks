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

    condition: NotRequired[
        list[Literal["new", "open_box", "refurbished", "used", "for_parts"]]
    ]
    """Filter by one or more item conditions; omit for all conditions (e.g. ["new", "open_box"])."""
    limit: NotRequired[int]
    """Maximum number of results to return (1 to 25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    listingType: NotRequired[Literal["all", "auction", "buy_it_now"]]
    """Restrict to a listing format; omit or use all for both (e.g. buy_it_now for fixed-price only)."""
    maxPrice: NotRequired[int]
    """Optional maximum item price in USD. Minimum: 0."""
    minPrice: NotRequired[int]
    """Optional minimum item price in USD. Minimum: 0."""
    query: Required[str]
    """Search keywords, e.g. "nintendo switch" or "vintage levis 501"."""
    sort: NotRequired[
        Literal[
            "best_match", "ending_soonest", "newly_listed", "price_low", "price_high"
        ]
    ]
    """Result sort order; omit for eBay's Best Match (e.g. price_low sorts by lowest price plus shipping first)."""


class EbaySoldListingsInput(TypedDict, total=False):
    """Input for eBay Sold Listings."""

    condition: NotRequired[Literal["any", "new", "used"]]
    """Item condition filter (e.g. used). Default: any."""
    daysBack: NotRequired[int]
    """How many days back to include sold listings, 1-90 (e.g. 30). Default: 30."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    maxPrice: NotRequired[float]
    """Optional maximum sold price in the site currency (e.g. 500). Minimum: 0."""
    minPrice: NotRequired[float]
    """Optional minimum sold price in the site currency (e.g. 200). Minimum: 0."""
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
    sort: NotRequired[
        Literal[
            "ended_recently",
            "newly_listed",
            "price_low",
            "price_high",
            "distance_nearest",
        ]
    ]
    """Result sort order; omit for eBay's default ended-recently (e.g. price_high sorts by highest total price first)."""


class EbaySearchData(BaseModel):
    items: list[EbaySearchItem] = Field(
        description="Listing records: title, price, condition, shipping cost, seller info, image, and item URL. Populated whenever the provider has data for the entity."
    )


class EbaySearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    condition: str | None = None
    image: str | None = Field(
        default=None,
        description="Primary listing image URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    item_id: str = Field(
        alias="itemId",
        description="eBay item identifier. Populated whenever the provider has data for the entity.",
    )
    listing_type: str | None = Field(
        default=None, alias="listingType", description="Auction, FixedPrice, etc."
    )
    price: float | None = Field(default=None, description="Listing price.")
    seller_feedback_percent: float | None = Field(
        default=None,
        alias="sellerFeedbackPercent",
        description="Seller positive-feedback percentage.",
    )
    seller_name: str | None = Field(default=None, alias="sellerName")
    shipping_cost: str | None = Field(
        default=None,
        alias="shippingCost",
        description="Shipping cost or free-delivery label.",
    )
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class EbaySoldListingsData(BaseModel):
    items: list[EbaySoldListingsItem] = Field(
        description="Sold listing records: title, sold price, sale date, condition, shipping, and item URL. Populated whenever the provider has data for the entity."
    )


class EbaySoldListingsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    condition: str | None = None
    ended_at: str | None = Field(
        default=None, alias="endedAt", description="Sale date (ISO 8601)."
    )
    image: str | None = Field(
        default=None,
        description="Primary listing image URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    item_id: str = Field(
        alias="itemId",
        description="eBay item identifier. Populated whenever the provider has data for the entity.",
    )
    listing_type: str | None = Field(default=None, alias="listingType")
    seller_username: str | None = Field(default=None, alias="sellerUsername")
    sold_currency: str | None = Field(default=None, alias="soldCurrency")
    sold_price: float | None = Field(
        default=None, alias="soldPrice", description="Final sold price."
    )
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    total_price: float | None = Field(
        default=None, alias="totalPrice", description="Sold price plus shipping."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class EbayNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[EbaySearchInput]
    ) -> RunResult[EbaySearchData]:
        """eBay Search

        Search eBay active listings by keyword with optional price-range,
        item-condition, listing-type, and sort filters and get title, price,
        condition, shipping, and seller in one normalized response.

        Price: $0.001 per request plus $0.00234 per result (maximum $0.0595).

        Example:
            res = client.ebay.search(limit=3, query="nintendo switch", sort="price_low")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "ebay.search", dict(input), options
        )
        return RunResult[EbaySearchData].model_validate(raw)

    def sold_listings(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EbaySoldListingsInput],
    ) -> RunResult[EbaySoldListingsData]:
        """eBay Sold Listings

        Retrieve recently sold eBay listings for any keyword with optional
        price-range and sort filters (sold price, sale date, condition, item
        details); ideal for pricing research.

        Price: $0.00005 per request plus $0.004 per result (maximum $0.10005).

        Example:
            res = client.ebay.sold_listings(limit=3, query="nintendo switch", sort="price_high")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "ebay.sold_listings", dict(input), options
        )
        return RunResult[EbaySoldListingsData].model_validate(raw)


class AsyncEbayNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self, *, options: RequestOptions | None = None, **input: Unpack[EbaySearchInput]
    ) -> RunResult[EbaySearchData]:
        """eBay Search

        Search eBay active listings by keyword with optional price-range,
        item-condition, listing-type, and sort filters and get title, price,
        condition, shipping, and seller in one normalized response.

        Price: $0.001 per request plus $0.00234 per result (maximum $0.0595).

        Example:
            res = client.ebay.search(limit=3, query="nintendo switch", sort="price_low")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "ebay.search", dict(input), options
        )
        return RunResult[EbaySearchData].model_validate(raw)

    async def sold_listings(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EbaySoldListingsInput],
    ) -> RunResult[EbaySoldListingsData]:
        """eBay Sold Listings

        Retrieve recently sold eBay listings for any keyword with optional
        price-range and sort filters (sold price, sale date, condition, item
        details); ideal for pricing research.

        Price: $0.00005 per request plus $0.004 per result (maximum $0.10005).

        Example:
            res = client.ebay.sold_listings(limit=3, query="nintendo switch", sort="price_high")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "ebay.sold_listings", dict(input), options
        )
        return RunResult[EbaySoldListingsData].model_validate(raw)
