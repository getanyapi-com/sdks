# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the walmart platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class WalmartProductInput(TypedDict, total=False):
    """Input for Walmart Product."""

    url: Required[str]
    """Walmart product page URL."""


class WalmartProductData(BaseModel):
    items: list[WalmartProductItem] = Field(
        description="Product detail records (one per requested product URL)."
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
        description="Primary product image URL. Present whenever the upstream returns this record.",
    )
    images: list[str] | None = Field(
        default=None, description="All product image URLs."
    )
    item_id: str | None = Field(
        default=None,
        alias="itemId",
        description="Walmart US item id (usItemId). Present whenever the upstream returns this record.",
    )
    model: str | None = Field(
        default=None, description="Manufacturer model number; empty when not reported."
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
    reviews_count: int | None = Field(
        default=None,
        alias="reviewsCount",
        description="Number of customer reviews; 0 when none.",
    )
    seller_name: str | None = Field(
        default=None,
        alias="sellerName",
        description="Name of the seller fulfilling the offer.",
    )
    title: str = Field(description="Product title.")
    upc: str | None = Field(
        default=None, description="Universal Product Code; empty when not reported."
    )
    url: str = Field(
        description="Canonical Walmart product page URL (condition query param retained, as it selects the offer)."
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

        Fetch a Walmart product page by URL and get full product details - title,
        price, availability, ratings, images, and specs - in one normalized,
        flat-priced response.

        Price: $0.00368 per result.

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

        Fetch a Walmart product page by URL and get full product details - title,
        price, availability, ratings, images, and specs - in one normalized,
        flat-priced response.

        Price: $0.00368 per result.

        Example:
            res = client.walmart.product(url="https://www.walmart.com/ip/Apple-AirPods-Pro-2/5689919121")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "walmart.product", dict(input), options
        )
        return RunResult[WalmartProductData].model_validate(raw)
