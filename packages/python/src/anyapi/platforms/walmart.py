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
        description="Product detail records: title, price, availability, rating, review count, images, and specifications. Populated whenever the provider returns data."
    )


class WalmartProductItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


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
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "walmart.product", dict(input), options
        )
        return RunResult[WalmartProductData].model_validate(
            raw.model_dump(by_alias=True)
        )


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
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "walmart.product", dict(input), options
        )
        return RunResult[WalmartProductData].model_validate(
            raw.model_dump(by_alias=True)
        )
