# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the reddit platform."""

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


class RedditPostCommentsInput(TypedDict, total=False):
    """Input for Reddit Post Comments."""

    cursor: NotRequired[str]
    """Cursor from a previous response for more comments."""
    url: Required[str]
    """Full Reddit post URL."""


class RedditPostTranscriptInput(TypedDict, total=False):
    """Input for Reddit Post Transcript."""

    language: NotRequired[str]
    """Optional two-letter language code (defaults to en)."""
    url: Required[str]
    """Reddit post URL or direct v.redd.it video URL to transcribe."""


class RedditSearchInput(TypedDict, total=False):
    """Input for Reddit Search."""

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of results."""
    query: Required[str]
    """Free-text search across all of Reddit. Reddit's field operators are supported inside the string: subreddit:<name> to scope to one subreddit, author:<user>, title:<text>, selftext:<text>, self:yes|no, nsfw:yes|no, and boolean AND/OR/NOT. To restrict to a single subreddit you can use subreddit:<name> here, or use the reddit.subreddit_posts SKU for a plain subreddit listing."""
    sort: NotRequired[Literal["relevance", "hot", "top", "new", "comments"]]
    """Result sort order."""
    timeframe: NotRequired[Literal["hour", "day", "week", "month", "year", "all"]]
    """Time window for results."""


class RedditSubredditDetailsInput(TypedDict, total=False):
    """Input for Reddit Subreddit Details."""

    subreddit: Required[str]
    """Subreddit name without the r/ prefix. Case-sensitive (e.g. "AskReddit", not "askreddit")."""


class RedditSubredditPostsInput(TypedDict, total=False):
    """Input for Reddit Subreddit Posts."""

    after: NotRequired[str]
    """Pagination cursor from a previous response (its `nextCursor`). Fetches the page that follows; omit for the first page."""
    limit: NotRequired[int]
    """Requested number of posts. Note: the upstream returns one page (about 25 posts) per call; values larger than a page are not delivered in a single response. To fetch more, page with the `after` cursor returned as `nextCursor`. Range: 1 to 100. Default: 25."""
    sort: NotRequired[Literal["hot", "new", "top"]]
    """Listing sort order. Default: hot."""
    subreddit: Required[str]
    """Subreddit name without the leading r/ (e.g. "golang")."""
    timeframe: NotRequired[Literal["all", "year", "month", "week", "day", "hour"]]
    """Time window, applied when sort is "top" (e.g. "year" for the year's top posts). Ignored for hot/new. Omit to default to the current day for top."""


class RedditSubredditSearchInput(TypedDict, total=False):
    """Input for Reddit Subreddit Search."""

    cursor: NotRequired[str]
    """Optional pagination token from a previous response."""
    query: NotRequired[str]
    """Optional search query to match posts (e.g. 'push ups')."""
    sort: NotRequired[str]
    """Optional sort order: relevance, hot, top, new, comments."""
    subreddit: Required[str]
    """Subreddit name without the r/ prefix (e.g. 'Fitness')."""
    timeframe: NotRequired[str]
    """Optional time filter: all, year, month, week, day, hour."""


class RedditPostCommentsData(BaseModel):
    comments: list[RedditPostCommentsComment] = Field(
        description="Populated whenever the provider returns data."
    )


class RedditPostCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow")

    author: str = Field(
        description="Commenter username, without the u/ prefix. Populated whenever the provider returns data."
    )
    body: str = Field(
        description="Comment text, as Markdown. Populated whenever the provider returns data."
    )
    createdUtc: float = Field(
        description="Comment creation time as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds."
    )
    id: str = Field(
        description="Reddit comment ID (base-36, without the t1_ prefix). Populated whenever the provider returns data."
    )
    url: str = Field(
        description="Permalink to the comment on reddit.com. Populated whenever the provider returns data."
    )


class RedditPostTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")

    language: str = Field(description="Populated whenever the provider returns data.")
    postId: str = Field(description="Populated whenever the provider returns data.")
    transcript: str
    transcriptNotAvailable: bool


class RedditSearchData(BaseModel):
    nextCursor: str = Field(
        description="Cursor for the next page of results; pass it back as the `cursor` input to fetch the following page. Empty string when there are no more results."
    )
    posts: list[RedditSearchPost] = Field(
        description="Populated whenever the provider returns data."
    )


class RedditSearchPost(BaseModel):
    model_config = ConfigDict(extra="allow")

    author: str = Field(
        description="Author username, without the u/ prefix. Populated whenever the provider returns data."
    )
    createdUtc: float = Field(
        description="Post creation time as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds."
    )
    id: str = Field(
        description="Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider returns data."
    )
    numComments: int = Field(description="Total number of comments on the post.")
    permalink: str = Field(
        description='Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Empty if the upstream omits it. Populated whenever the provider returns data.'
    )
    score: int = Field(description="Net score (upvotes minus downvotes) at fetch time.")
    subreddit: str = Field(
        description="Subreddit name, without the r/ prefix. Populated whenever the provider returns data."
    )
    title: str = Field(
        description="Post title. Populated whenever the provider returns data."
    )
    url: str = Field(
        description="The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider returns data."
    )


class RedditSubredditDetailsData(BaseModel):
    model_config = ConfigDict(extra="allow")

    advertiserCategory: str
    createdAt: str = Field(description="Populated whenever the provider returns data.")
    description: str = Field(
        description="Populated whenever the provider returns data."
    )
    iconUrl: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(
        description='Reddit fullname, e.g. "t5_2qh1i". Populated whenever the provider returns data.'
    )
    name: str = Field(description="Populated whenever the provider returns data.")
    weeklyActiveUsers: int


class RedditSubredditPostsData(BaseModel):
    nextCursor: str = Field(
        description="Cursor for the next page of results; pass it back as the `after` input to fetch the following page. Empty string when there are no more results."
    )
    posts: list[RedditSubredditPostsPost] = Field(
        description="Populated whenever the provider returns data."
    )


class RedditSubredditPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow")

    author: str = Field(
        description="Author username, without the u/ prefix. Populated whenever the provider returns data."
    )
    createdUtc: float = Field(
        description="Post creation time as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider returns data."
    )
    id: str = Field(
        description="Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider returns data."
    )
    numComments: int = Field(description="Total number of comments on the post.")
    permalink: str = Field(
        description='Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Empty if the upstream omits it. Populated whenever the provider returns data.'
    )
    score: int = Field(description="Net score (upvotes minus downvotes) at fetch time.")
    subreddit: str = Field(
        description="Subreddit name, without the r/ prefix. Populated whenever the provider returns data."
    )
    title: str = Field(
        description="Post title. Populated whenever the provider returns data."
    )
    url: str = Field(
        description="The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider returns data."
    )


class RedditSubredditSearchData(BaseModel):
    nextCursor: str
    posts: list[RedditSubredditSearchPost] = Field(
        description="Populated whenever the provider returns data."
    )


class RedditSubredditSearchPost(BaseModel):
    model_config = ConfigDict(extra="allow")

    author: str = Field(
        description="Author username, without the u/ prefix. Populated whenever the provider returns data."
    )
    createdUtc: float = Field(
        description="Post creation time as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds."
    )
    id: str = Field(
        description="Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider returns data."
    )
    nsfw: bool = Field(description="Whether the post is marked NSFW (over 18).")
    numComments: int = Field(description="Total number of comments on the post.")
    permalink: str = Field(
        description='Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Populated whenever the provider returns data.'
    )
    score: int = Field(description="Net score (upvotes minus downvotes) at fetch time.")
    subreddit: str = Field(
        description="Subreddit name, without the r/ prefix. Populated whenever the provider returns data."
    )
    title: str = Field(
        description="Post title. Populated whenever the provider returns data."
    )
    url: str = Field(
        description="The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider returns data."
    )


class RedditNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditPostCommentsInput],
    ) -> RunResult[RedditPostCommentsData]:
        """Reddit Post Comments

        List the top-level comments on a Reddit post by URL (author, body, score,
        timestamp), normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.reddit.post_comments(url="https://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "reddit.post_comments", dict(input), options
        )
        return RunResult[RedditPostCommentsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditPostTranscriptInput],
    ) -> RunResult[RedditPostTranscriptData]:
        """Reddit Post Transcript

        Extract the spoken transcript from a Reddit video post by URL, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.reddit.post_transcript(url="https://www.reddit.com/r/youseeingthisshit/comments/1oiu9xm/")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "reddit.post_transcript", dict(input), options
        )
        return RunResult[RedditPostTranscriptData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSearchInput],
    ) -> RunResult[RedditSearchData]:
        """Reddit Search

        Search Reddit posts across all subreddits by query, normalized across
        providers with transparent failover.

        Price: $0.001 per request.

        Example:
            res = client.reddit.search(query="mechanical keyboard")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "reddit.search", dict(input), options
        )
        return RunResult[RedditSearchData].model_validate(raw.model_dump(by_alias=True))

    def iter_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSearchInput],
    ) -> Paginator[RedditSearchPost, RedditSearchData]:
        """Iterate Reddit Search results, following pagination cursors.

        Yields flattened items from the `posts` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "reddit.search", dict(input), "posts", options=options
        )

    def subreddit_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditDetailsInput],
    ) -> RunResult[RedditSubredditDetailsData]:
        """Reddit Subreddit Details

        Fetch a subreddit's metadata - weekly active users, description, and
        category - normalized across providers with transparent failover.

        Price: $0.001 per request.

        Example:
            res = client.reddit.subreddit_details(subreddit="programming")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "reddit.subreddit_details", dict(input), options
        )
        return RunResult[RedditSubredditDetailsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def subreddit_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditPostsInput],
    ) -> RunResult[RedditSubredditPostsData]:
        """Reddit Subreddit Posts

        Fetch posts from a subreddit listing (hot, new, or top), normalized across
        providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.reddit.subreddit_posts(limit=5, subreddit="programming")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "reddit.subreddit_posts", dict(input), options
        )
        return RunResult[RedditSubredditPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def subreddit_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditSearchInput],
    ) -> RunResult[RedditSubredditSearchData]:
        """Reddit Subreddit Search

        Search posts within a single subreddit by query, sort, and timeframe,
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.reddit.subreddit_search(query="push ups", subreddit="Fitness")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "reddit.subreddit_search", dict(input), options
        )
        return RunResult[RedditSubredditSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_subreddit_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditSearchInput],
    ) -> Paginator[RedditSubredditSearchPost, RedditSubredditSearchData]:
        """Iterate Reddit Subreddit Search results, following pagination cursors.

        Yields flattened items from the `posts` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "reddit.subreddit_search",
            dict(input),
            "posts",
            options=options,
        )


class AsyncRedditNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditPostCommentsInput],
    ) -> RunResult[RedditPostCommentsData]:
        """Reddit Post Comments

        List the top-level comments on a Reddit post by URL (author, body, score,
        timestamp), normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.reddit.post_comments(url="https://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "reddit.post_comments", dict(input), options
        )
        return RunResult[RedditPostCommentsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditPostTranscriptInput],
    ) -> RunResult[RedditPostTranscriptData]:
        """Reddit Post Transcript

        Extract the spoken transcript from a Reddit video post by URL, normalized
        across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.reddit.post_transcript(url="https://www.reddit.com/r/youseeingthisshit/comments/1oiu9xm/")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "reddit.post_transcript", dict(input), options
        )
        return RunResult[RedditPostTranscriptData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSearchInput],
    ) -> RunResult[RedditSearchData]:
        """Reddit Search

        Search Reddit posts across all subreddits by query, normalized across
        providers with transparent failover.

        Price: $0.001 per request.

        Example:
            res = client.reddit.search(query="mechanical keyboard")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "reddit.search", dict(input), options
        )
        return RunResult[RedditSearchData].model_validate(raw.model_dump(by_alias=True))

    def iter_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSearchInput],
    ) -> AsyncPaginator[RedditSearchPost, RedditSearchData]:
        """Iterate Reddit Search results, following pagination cursors.

        Yields flattened items from the `posts` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "reddit.search", dict(input), "posts", options=options
        )

    async def subreddit_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditDetailsInput],
    ) -> RunResult[RedditSubredditDetailsData]:
        """Reddit Subreddit Details

        Fetch a subreddit's metadata - weekly active users, description, and
        category - normalized across providers with transparent failover.

        Price: $0.001 per request.

        Example:
            res = client.reddit.subreddit_details(subreddit="programming")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "reddit.subreddit_details", dict(input), options
        )
        return RunResult[RedditSubredditDetailsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def subreddit_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditPostsInput],
    ) -> RunResult[RedditSubredditPostsData]:
        """Reddit Subreddit Posts

        Fetch posts from a subreddit listing (hot, new, or top), normalized across
        providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.reddit.subreddit_posts(limit=5, subreddit="programming")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "reddit.subreddit_posts", dict(input), options
        )
        return RunResult[RedditSubredditPostsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def subreddit_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditSearchInput],
    ) -> RunResult[RedditSubredditSearchData]:
        """Reddit Subreddit Search

        Search posts within a single subreddit by query, sort, and timeframe,
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.reddit.subreddit_search(query="push ups", subreddit="Fitness")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "reddit.subreddit_search", dict(input), options
        )
        return RunResult[RedditSubredditSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_subreddit_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditSearchInput],
    ) -> AsyncPaginator[RedditSubredditSearchPost, RedditSubredditSearchData]:
        """Iterate Reddit Subreddit Search results, following pagination cursors.

        Yields flattened items from the `posts` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "reddit.subreddit_search",
            dict(input),
            "posts",
            options=options,
        )
