# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the walmart platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class WalmartProductInput(TypedDict, total=False):
    """Input for Walmart Product."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    requireFields: NotRequired[
        list[
            Literal[
                "availability",
                "brand",
                "description",
                "images",
                "model",
                "orderLimit",
                "priceText",
                "productId",
                "rating",
                "returnWindow",
                "reviewsCount",
                "sellerId",
                "sellerName",
                "upc",
            ]
        ]
    ]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `availability`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a product that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""
    url: Required[str]
    """Walmart product page URL."""


class WalmartProductData(BaseModel):
    items: list[WalmartProductItem] = Field(
        description="Product detail records (one per requested product URL). Populated whenever the provider has data for the entity."
    )


class WalmartProductItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    availability: str | None = Field(
        default=None, description='Stock status, e.g. "IN_STOCK".'
    )
    brand: str | None = Field(
        default=None, description="Brand name; empty when not reported."
    )
    description: str | None = Field(
        default=None,
        description="Short product description; empty when the listing has none.",
    )
    image: str | None = Field(
        default=None,
        description="Primary product image URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    images: list[str] | None = Field(
        default=None, description="All product image URLs."
    )
    item_id: str | None = Field(
        default=None,
        alias="itemId",
        description="Walmart US item id (usItemId). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    model: str | None = Field(
        default=None, description="Manufacturer model number; empty when not reported."
    )
    order_limit: int | None = Field(
        default=None,
        alias="orderLimit",
        description="Maximum units of this item one order may contain.",
    )
    price_text: str | None = Field(
        default=None,
        alias="priceText",
        description='Current price as displayed, e.g. "$125.00"; empty when unavailable (Walmart returns a formatted string, not a numeric value).',
    )
    product_id: str | None = Field(
        default=None, alias="productId", description="Walmart internal product id."
    )
    rating: float | None = Field(
        default=None, description="Average customer rating, 0-5; 0 when unrated."
    )
    return_window: int | None = Field(
        default=None,
        alias="returnWindow",
        description="Days the buyer has to return the item.",
    )
    reviews_count: int | None = Field(
        default=None,
        alias="reviewsCount",
        description="Number of customer reviews; 0 when none.",
    )
    seller_id: str | None = Field(
        default=None,
        alias="sellerId",
        description="Identifier of the seller fulfilling the offer.",
    )
    seller_name: str | None = Field(
        default=None,
        alias="sellerName",
        description="Name of the seller fulfilling the offer.",
    )
    title: str = Field(
        description="Product title. Populated whenever the provider has data for the entity."
    )
    upc: str | None = Field(
        default=None, description="Universal Product Code; empty when not reported."
    )
    url: str = Field(
        description="Canonical Walmart product page URL (condition query param retained, as it selects the offer). Populated whenever the provider has data for the entity."
    )


class WalmartNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def product(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WalmartProductInput],
    ) -> RunResult[WalmartProductData]:
        """Walmart Product

        Fetch a Walmart product page by URL and get full product details (title,
        price, availability, ratings, images, and specs) in one normalized response.

        Price: $0.0018 per request.

        Example:
            res = client.walmart.product(url="https://www.walmart.com/ip/Apple-AirPods-Pro-2/5689919121")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "walmart.product", dict(input), options
        )
        return RunResult[WalmartProductData].model_validate(raw)


class AsyncWalmartNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def product(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WalmartProductInput],
    ) -> RunResult[WalmartProductData]:
        """Walmart Product

        Fetch a Walmart product page by URL and get full product details (title,
        price, availability, ratings, images, and specs) in one normalized response.

        Price: $0.0018 per request.

        Example:
            res = client.walmart.product(url="https://www.walmart.com/ip/Apple-AirPods-Pro-2/5689919121")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "walmart.product", dict(input), options
        )
        return RunResult[WalmartProductData].model_validate(raw)
