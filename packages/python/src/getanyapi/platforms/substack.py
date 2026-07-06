# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the substack platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class SubstackPostsInput(TypedDict, total=False):
    """Input for Substack Posts."""

    contentType: NotRequired[Literal["all", "newsletter", "podcast", "thread"]]
    """Restrict to a single post type, or 'all' (e.g. newsletter). Default: all."""
    includeContent: NotRequired[bool]
    """Include the full article body as HTML. Set false for metadata only (e.g. false). Default: true."""
    limit: NotRequired[int]
    """Maximum number of recent posts to return when given a publication URL (1-100, default 25); ignored for a single post URL, which always returns that one post. You are billed per post returned, so a lower limit costs less. Range: 1 to 100."""
    onlyFree: NotRequired[bool]
    """Return only free (non-paywalled) posts (e.g. true). Default: false."""
    url: Required[str]
    """Either a Substack publication URL / custom domain to fetch its recent posts (e.g. https://www.astralcodexten.com), OR a single post URL to fetch just that one article with full content (e.g. https://www.astralcodexten.com/p/your-book-review)."""


class SubstackPostsData(BaseModel):
    items: list[SubstackPostsItem] = Field(
        description="Post records: title, subtitle, URL, publish date, paywall status, word count, engagement (reactions, comments, restacks), author profile, publication info, and full article HTML when requested."
    )


class SubstackPostsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_handle: str | None = Field(
        default=None,
        alias="authorHandle",
        description="Present whenever the upstream returns this record.",
    )
    author_name: str | None = Field(
        default=None,
        alias="authorName",
        description="Present whenever the upstream returns this record.",
    )
    comment_count: int | None = Field(default=None, alias="commentCount")
    description: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    image: str | None = Field(
        default=None,
        description="Cover image URL. Present whenever the upstream returns this record.",
    )
    is_paid: bool | None = Field(default=None, alias="isPaid")
    post_id: str | None = Field(
        default=None,
        alias="postId",
        description="Present whenever the upstream returns this record.",
    )
    post_type: str | None = Field(
        default=None,
        alias="postType",
        description="Present whenever the upstream returns this record.",
    )
    published_at: str | None = Field(
        default=None,
        alias="publishedAt",
        description="ISO 8601 publish date. Present whenever the upstream returns this record.",
    )
    reaction_count: int | None = Field(default=None, alias="reactionCount")
    subtitle: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    title: str
    url: str
    wordcount: int | None = None


class SubstackNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SubstackPostsInput],
    ) -> RunResult[SubstackPostsData]:
        """Substack Posts

        Pull posts from any Substack publication by its URL - or pass a single post
        URL (…/p/slug) to fetch just that one article. Returns title, subtitle,
        publish date, paywall status, word count, engagement (reactions, comments,
        restacks), author profile, and full article HTML. Priced per post returned.

        Price: $0.005 per request plus $0.00156 per result.

        Example:
            res = client.substack.posts(limit=3, url="https://www.astralcodexten.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "substack.posts", dict(input), options
        )
        return RunResult[SubstackPostsData].model_validate(raw)


class AsyncSubstackNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SubstackPostsInput],
    ) -> RunResult[SubstackPostsData]:
        """Substack Posts

        Pull posts from any Substack publication by its URL - or pass a single post
        URL (…/p/slug) to fetch just that one article. Returns title, subtitle,
        publish date, paywall status, word count, engagement (reactions, comments,
        restacks), author profile, and full article HTML. Priced per post returned.

        Price: $0.005 per request plus $0.00156 per result.

        Example:
            res = client.substack.posts(limit=3, url="https://www.astralcodexten.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "substack.posts", dict(input), options
        )
        return RunResult[SubstackPostsData].model_validate(raw)
