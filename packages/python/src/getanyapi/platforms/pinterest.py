# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the pinterest platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class PinterestSearchInput(TypedDict, total=False):
    """Input for Pinterest Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """Keyword, topic, brand, or theme to search Pinterest for (e.g. mid-century living room)."""
    type: NotRequired[Literal["all-pins", "videos", "boards", "profiles"]]
    """Kind of results to return: all pins, only video pins, boards, or profiles (e.g. videos). Default: all-pins."""


class PinterestSearchData(BaseModel):
    items: list[PinterestSearchItem] = Field(
        description="Matching Pinterest records: pin or board title, description, image/video URL, creator, and link. Populated whenever the provider has data for the entity."
    )


class PinterestSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    title: str
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class PinterestNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PinterestSearchInput],
    ) -> RunResult[PinterestSearchData]:
        """Pinterest Search

        Search Pinterest by keyword and get pin, video, board, or profile results
        with titles, images, and links.

        Price: $0.0036 per request.

        Example:
            res = client.pinterest.search(limit=3, query="home decor")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "pinterest.search", dict(input), options
        )
        return RunResult[PinterestSearchData].model_validate(raw)


class AsyncPinterestNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PinterestSearchInput],
    ) -> RunResult[PinterestSearchData]:
        """Pinterest Search

        Search Pinterest by keyword and get pin, video, board, or profile results
        with titles, images, and links.

        Price: $0.0036 per request.

        Example:
            res = client.pinterest.search(limit=3, query="home decor")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "pinterest.search", dict(input), options
        )
        return RunResult[PinterestSearchData].model_validate(raw)
