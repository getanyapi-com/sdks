# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the walmart platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class WalmartProductInput(TypedDict, total=False):
    """Input for Walmart Product."""

    url: Required[str]
    """Walmart product page URL."""


class WalmartProductData(BaseModel):
    model_config = ConfigDict(extra="allow")


class WalmartNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def product(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WalmartProductInput],
    ) -> BareRunResult[WalmartProductData]:
        """Walmart Product

        Fetch a Walmart product page by URL and get full product details (title,
        price, availability, ratings, images, and specs) in one normalized response.

        Price: $0 per request plus $0.00368 per result (maximum $0.00368).

        Example:
            res = client.walmart.product(url="https://www.walmart.com/ip/Apple-AirPods-Pro-2/5689919121")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "walmart.product", dict(input), options
        )
        return BareRunResult[WalmartProductData].model_validate(raw)


class AsyncWalmartNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def product(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WalmartProductInput],
    ) -> BareRunResult[WalmartProductData]:
        """Walmart Product

        Fetch a Walmart product page by URL and get full product details (title,
        price, availability, ratings, images, and specs) in one normalized response.

        Price: $0 per request plus $0.00368 per result (maximum $0.00368).

        Example:
            res = client.walmart.product(url="https://www.walmart.com/ip/Apple-AirPods-Pro-2/5689919121")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "walmart.product", dict(input), options
        )
        return BareRunResult[WalmartProductData].model_validate(raw)
