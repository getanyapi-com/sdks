# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the fiverr platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class FiverrSearchInput(TypedDict, total=False):
    """Input for Fiverr Gig Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    url: Required[str]
    """Fiverr search or category page URL to extract gigs from."""


class FiverrSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class FiverrNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FiverrSearchInput],
    ) -> BareRunResult[FiverrSearchData]:
        """Fiverr Gig Search

        Extract Fiverr gig listings from any search or category URL: titles,
        sellers, ratings, and pricing as structured JSON.

        Price: $0 per request plus $0.0015 per result (maximum $0.03).

        Example:
            res = client.fiverr.search(limit=3, url="https://www.fiverr.com/search/gigs?query=logo%20design")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "fiverr.search", dict(input), options
        )
        return BareRunResult[FiverrSearchData].model_validate(raw)


class AsyncFiverrNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[FiverrSearchInput],
    ) -> BareRunResult[FiverrSearchData]:
        """Fiverr Gig Search

        Extract Fiverr gig listings from any search or category URL: titles,
        sellers, ratings, and pricing as structured JSON.

        Price: $0 per request plus $0.0015 per result (maximum $0.03).

        Example:
            res = client.fiverr.search(limit=3, url="https://www.fiverr.com/search/gigs?query=logo%20design")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "fiverr.search", dict(input), options
        )
        return BareRunResult[FiverrSearchData].model_validate(raw)
