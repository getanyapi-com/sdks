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
        description="Matching Alibaba wholesale listings: title, price range, minimum order quantity, supplier name, and listing URL. Populated whenever the provider returns data."
    )


class AlibabaSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


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
        range, minimum order, and supplier - in one normalized, flat-priced
        response.

        Price: $0.0012 per result.

        Example:
            res = client.alibaba.search(limit=3, query="bluetooth speaker")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "alibaba.search", dict(input), options
        )
        return RunResult[AlibabaSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )


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
        range, minimum order, and supplier - in one normalized, flat-priced
        response.

        Price: $0.0012 per result.

        Example:
            res = client.alibaba.search(limit=3, query="bluetooth speaker")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "alibaba.search", dict(input), options
        )
        return RunResult[AlibabaSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )
