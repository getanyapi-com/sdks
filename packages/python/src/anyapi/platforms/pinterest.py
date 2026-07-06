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
    query: Required[str]
    """Keyword, topic, brand, or theme to search Pinterest for (e.g. mid-century living room)."""
    type: NotRequired[Literal["all-pins", "videos", "boards", "profiles"]]
    """Kind of results to return: all pins, only video pins, boards, or profiles (e.g. videos). Default: all-pins."""


class PinterestSearchData(BaseModel):
    items: list[PinterestSearchItem] = Field(
        description="Matching Pinterest records: pin or board title, description, image/video URL, creator, and link. Populated whenever the provider returns data."
    )


class PinterestSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str
    title: str
    url: str = Field(description="Populated whenever the provider returns data.")


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
        with titles, images, and links - flat per-request USD pricing.

        Price: $0.00325 per request.

        Example:
            res = client.pinterest.search(limit=3, query="home decor")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "pinterest.search", dict(input), options
        )
        return RunResult[PinterestSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )


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
        with titles, images, and links - flat per-request USD pricing.

        Price: $0.00325 per request.

        Example:
            res = client.pinterest.search(limit=3, query="home decor")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "pinterest.search", dict(input), options
        )
        return RunResult[PinterestSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )
