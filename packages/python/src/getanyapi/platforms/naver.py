# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the naver platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult
from .._pagination import (
    AsyncPaginator,
    Paginator,
    apaginate,
    paginate,
)

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class NaverBlogSearchInput(TypedDict, total=False):
    """Input for Naver Blog Search."""

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor."""
    limit: NotRequired[int]
    """Maximum number of title-enriched posts to return, from 1 to 5 (default 5). Range: 1 to 5."""
    query: Required[str]
    """Keyword phrase to search across Naver blogs."""
    sort: NotRequired[Literal["relevance", "recent"]]
    """Order posts by Naver relevance or newest publication date (default relevance)."""


class NaverBlogSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    items: list[NaverBlogSearchItem] = Field(
        description="Blog posts in Naver's requested search order. Populated whenever the provider has data for the entity."
    )
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page, or an empty string when no next page is available.",
    )
    total: int = Field(
        description="Naver's reported number of matching blog posts. Minimum: 0."
    )


class NaverBlogSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    blogger_name: str = Field(alias="bloggerName", description="Blogger display name.")
    blogger_url: str = Field(
        alias="bloggerUrl",
        description="Public root URL for the blog that published the post.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="Publication date as a UTC epoch timestamp in seconds.",
    )
    description: str = Field(description="Search-result excerpt from the post.")
    rank: int = Field(description="One-based rank within this result page. Minimum: 1.")
    title: str = Field(description="Blog post title.")
    url: str = Field(description="Public blog post URL.")


class NaverNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def blog_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[NaverBlogSearchInput],
    ) -> RunResult[NaverBlogSearchData]:
        """Naver Blog Search

        Search up to five enriched Naver blog results by keyword with stable cursor
        pagination: result rank, title, excerpt, post and blogger URLs, blogger
        name, publish time, and Naver's total match count.

        Price: $0.036 per request.

        Example:
            res = client.naver.blog_search(limit=5, query="제주도 맛집", sort="relevance")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "naver.blog_search", dict(input), options
        )
        return RunResult[NaverBlogSearchData].model_validate(raw)

    def iter_blog_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[NaverBlogSearchInput],
    ) -> Paginator[NaverBlogSearchItem, NaverBlogSearchData]:
        """Iterate Naver Blog Search results, following pagination cursors.

        Yields validated `NaverBlogSearchItem` items from the `items` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "naver.blog_search",
            dict(input),
            "items",
            item_model=NaverBlogSearchItem,
            data_model=NaverBlogSearchData,
            bare=False,
            options=options,
        )


class AsyncNaverNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def blog_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[NaverBlogSearchInput],
    ) -> RunResult[NaverBlogSearchData]:
        """Naver Blog Search

        Search up to five enriched Naver blog results by keyword with stable cursor
        pagination: result rank, title, excerpt, post and blogger URLs, blogger
        name, publish time, and Naver's total match count.

        Price: $0.036 per request.

        Example:
            res = client.naver.blog_search(limit=5, query="제주도 맛집", sort="relevance")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "naver.blog_search", dict(input), options
        )
        return RunResult[NaverBlogSearchData].model_validate(raw)

    def iter_blog_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[NaverBlogSearchInput],
    ) -> AsyncPaginator[NaverBlogSearchItem, NaverBlogSearchData]:
        """Iterate Naver Blog Search results, following pagination cursors.

        Yields validated `NaverBlogSearchItem` items from the `items` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "naver.blog_search",
            dict(input),
            "items",
            item_model=NaverBlogSearchItem,
            data_model=NaverBlogSearchData,
            bare=False,
            options=options,
        )
