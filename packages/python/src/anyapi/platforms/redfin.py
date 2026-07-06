# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the redfin platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class RedfinSearchInput(TypedDict, total=False):
    """Input for Redfin Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less. Range: 1 to 25."""
    url: Required[str]
    """Redfin search results URL for a city, ZIP or map area (e.g. https://www.redfin.com/city/30772/CA/San-Francisco)."""


class RedfinSearchData(BaseModel):
    items: list[RedfinSearchItem] = Field(
        description="Home listing records: address, price, beds, baths, square footage, and listing status. Populated whenever the provider returns data."
    )


class RedfinSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    title: str | None = None
    url: str = Field(description="Populated whenever the provider returns data.")


class RedfinNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedfinSearchInput],
    ) -> RunResult[RedfinSearchData]:
        """Redfin Search

        Run a Redfin map search by URL and get matching home listings (price,
        address, beds, baths, status) as normalized JSON with flat per-request USD
        pricing.

        Price: $0.00043 per result.

        Example:
            res = client.redfin.search(limit=3, url="https://www.redfin.com/city/30818/TX/Austin")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "redfin.search", dict(input), options
        )
        return RunResult[RedfinSearchData].model_validate(raw.model_dump(by_alias=True))


class AsyncRedfinNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedfinSearchInput],
    ) -> RunResult[RedfinSearchData]:
        """Redfin Search

        Run a Redfin map search by URL and get matching home listings (price,
        address, beds, baths, status) as normalized JSON with flat per-request USD
        pricing.

        Price: $0.00043 per result.

        Example:
            res = client.redfin.search(limit=3, url="https://www.redfin.com/city/30818/TX/Austin")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "redfin.search", dict(input), options
        )
        return RunResult[RedfinSearchData].model_validate(raw.model_dump(by_alias=True))
