# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the alibaba platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class AlibabaSearchInput(TypedDict, total=False):
    """Input for Alibaba Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    query: Required[str]
    """Keywords to search for on Alibaba (e.g. "bluetooth speaker wholesale")."""


class AlibabaSearchData(BaseModel):
    items: list[AlibabaSearchItem] = Field(
        description="Matching Alibaba wholesale listings. Populated whenever the provider has data for the entity."
    )


class AlibabaSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    country_code: str | None = Field(
        default=None,
        alias="countryCode",
        description='Supplier country ISO code, e.g. "CN".',
    )
    image: str | None = Field(default=None, description="Primary product image URL.")
    moq: str | None = Field(
        default=None,
        description='Minimum order quantity text, e.g. "Min. order: 1 piece".',
    )
    price_text: str | None = Field(
        default=None,
        alias="priceText",
        description='Price or price range as displayed, e.g. "$40.80-45.80" (Alibaba lists ranges, not a single numeric value).',
    )
    promotion_price: str | None = Field(
        default=None,
        alias="promotionPrice",
        description="Discounted promotional price when the listing is on sale; empty otherwise.",
    )
    rating: float | None = Field(
        default=None,
        description="Average buyer review score, 0-5; 0 when the listing has no reviews.",
    )
    review_count: int | None = Field(
        default=None,
        alias="reviewCount",
        description="Number of buyer reviews; 0 when none.",
    )
    supplier_name: str | None = Field(
        default=None, alias="supplierName", description="Supplier / company name."
    )
    supplier_years: str | None = Field(
        default=None,
        alias="supplierYears",
        description='Gold Supplier tenure text, e.g. "3 yrs"; empty when not a Gold Supplier.',
    )
    title: str = Field(
        description="Listing title as shown on Alibaba (may contain the supplier's inline markup). Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical product detail page URL (tracking query params stripped). Populated whenever the provider has data for the entity."
    )


class AlibabaNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AlibabaSearchInput],
    ) -> RunResult[AlibabaSearchData]:
        """Alibaba Search

        Search Alibaba by keyword and get up to 25 wholesale listings - title, price
        range, minimum order, and supplier - in one normalized response.

        Price: $0 per request plus $0.0012 per result (maximum $0.03).

        Example:
            res = client.alibaba.search(limit=3, query="bluetooth speaker")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "alibaba.search", dict(input), options
        )
        return RunResult[AlibabaSearchData].model_validate(raw)


class AsyncAlibabaNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AlibabaSearchInput],
    ) -> RunResult[AlibabaSearchData]:
        """Alibaba Search

        Search Alibaba by keyword and get up to 25 wholesale listings - title, price
        range, minimum order, and supplier - in one normalized response.

        Price: $0 per request plus $0.0012 per result (maximum $0.03).

        Example:
            res = client.alibaba.search(limit=3, query="bluetooth speaker")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "alibaba.search", dict(input), options
        )
        return RunResult[AlibabaSearchData].model_validate(raw)
