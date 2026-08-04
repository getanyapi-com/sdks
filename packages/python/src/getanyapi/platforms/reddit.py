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


class RedditPostInput(TypedDict, total=False):
    """Input for Reddit Post."""

    url: Required[str]
    """Full Reddit post URL in the /r/<subreddit>/comments/<id>/<slug>/ form, e.g. "https://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/". The short "reddit.com/comments/<id>" form is not accepted."""


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


class RedditProfileInput(TypedDict, total=False):
    """Input for Reddit Profile."""

    username: Required[str]
    """Reddit username, without the u/ prefix. Example: "spez"."""


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
    """Legacy pagination alias. Prefer `cursor`; omit both fields for the first page."""
    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's `nextCursor`; omit for the first page."""
    limit: NotRequired[int]
    """Requested number of posts. Note: the upstream returns one page (about 25 posts) per call; values larger than a page are not delivered in a single response. To fetch more, pass `nextCursor` back as `cursor`. Range: 1 to 100. Default: 25."""
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


class RedditTrendingPostsInput(TypedDict, total=False):
    """Input for Reddit Trending Posts."""

    after: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor. Omit for the first page."""
    limit: NotRequired[int]
    """Maximum number of trending posts to return (1-100, default 25). Range: 1 to 100. Default: 25."""


class RedditUserCommentsInput(TypedDict, total=False):
    """Input for Reddit User Comments."""

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it back to fetch the next page."""
    limit: NotRequired[int]
    """Maximum number of comments to return in this response (a page cap, not a total). Defaults to 25. Range: 1 to 100. Default: 25."""
    sort: NotRequired[Literal["new", "top", "hot", "controversial"]]
    """Sort order for the user's comments. Defaults to new (most recent first)."""
    username: Required[str]
    """Reddit username, without the u/ prefix. Example: "spez"."""


class RedditUserPostsInput(TypedDict, total=False):
    """Input for Reddit User Posts."""

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it back to fetch the next page."""
    sort: NotRequired[Literal["new", "top", "hot", "controversial"]]
    """Sort order for the user's posts. Defaults to new (most recent first)."""
    username: Required[str]
    """Reddit username without the leading u/ prefix (e.g. "spez")."""


class RedditPostData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Author username, without the u/ prefix. Populated whenever the provider has data for the entity."
    )
    body: str | None = Field(
        default=None,
        description="The post's own body text (selftext), as Markdown. Empty for link posts, which carry no body. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="Preview image for the post, when Reddit generated one. Reddit signs this URL and it is time-limited, so fetch it promptly rather than storing it; the query string carries the signature and must be kept intact. Empty when the post has no preview image.",
    )
    is_nsfw: bool | None = Field(
        default=None,
        alias="isNsfw",
        description="True when the post is marked NSFW (over 18).",
    )
    num_comments: int = Field(
        alias="numComments", description="Total number of comments on the post."
    )
    permalink: str = Field(
        description='Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Empty if the upstream omits it. Populated whenever the provider has data for the entity.'
    )
    score: int = Field(description="Net score (upvotes minus downvotes) at fetch time.")
    subreddit: str = Field(
        description="Subreddit name, without the r/ prefix. Populated whenever the provider has data for the entity."
    )
    title: str = Field(
        description="Post title. Populated whenever the provider has data for the entity."
    )
    upvote_ratio: float | None = Field(
        default=None,
        alias="upvoteRatio",
        description="Fraction of votes that are upvotes, between 0 and 1. Zero when the upstream does not report it.",
    )
    url: str = Field(
        description="The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider has data for the entity."
    )


class RedditPostCommentsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    comments: list[RedditPostCommentsComment] = Field(
        description="Populated whenever the provider has data for the entity."
    )
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.",
    )


class RedditPostCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Commenter username, without the u/ prefix. Populated whenever the provider has data for the entity."
    )
    body: str = Field(
        description="Comment text, as Markdown. Populated whenever the provider has data for the entity."
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="Reddit comment ID (base-36, without the t1_ prefix). Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Permalink to the comment on reddit.com. Populated whenever the provider has data for the entity."
    )


class RedditPostTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    language: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    post_id: str = Field(
        alias="postId",
        description="Populated whenever the provider has data for the entity.",
    )
    transcript: str
    transcript_not_available: bool = Field(alias="transcriptNotAvailable")


class RedditProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str | None = Field(
        default=None,
        alias="avatarUrl",
        description="URL of the profile avatar image, with sizing and signing query params stripped. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    bio: str | None = Field(
        default=None,
        description="Public profile description text. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    comment_karma: int | None = Field(
        default=None,
        alias="commentKarma",
        description="Karma earned from comments. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    comments: int | None = Field(
        default=None,
        description="Number of comments the account has contributed. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    display_name: str | None = Field(
        default=None,
        alias="displayName",
        description="Profile display title. Reddit defaults it to the username when the account has not set one. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    employee: bool | None = Field(
        default=None, description="True when the account belongs to a Reddit employee."
    )
    followers: int | None = Field(
        default=None,
        description="Number of profile subscribers. Reddit reports 0 for accounts that do not expose a follower count.",
    )
    id: str = Field(
        description="Reddit account ID (base-36, without the t2_ prefix). Populated whenever the provider has data for the entity."
    )
    karma: int | None = Field(
        default=None,
        description="Total karma across the account, as Reddit reports it. The postKarma and commentKarma fields below are the split it is composed of. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    nsfw: bool | None = Field(
        default=None, description="True when the profile is marked NSFW (over 18)."
    )
    post_karma: int | None = Field(
        default=None,
        alias="postKarma",
        description="Karma earned from posts. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    posts: int | None = Field(
        default=None,
        description="Number of posts the account has contributed. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    profile_url: str | None = Field(
        default=None,
        alias="profileUrl",
        description="Absolute reddit.com URL of the profile page. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    trophies: int | None = Field(
        default=None,
        description="Number of trophies unlocked in the account's trophy case. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    username: str = Field(
        description="Account username, without the u/ prefix. Populated whenever the provider has data for the entity."
    )
    verified: bool | None = Field(
        default=None, description="True when the account is verified by Reddit."
    )


class RedditSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    posts: list[RedditSearchPost] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class RedditSearchPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Author username, without the u/ prefix. Populated whenever the provider has data for the entity."
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider has data for the entity."
    )
    num_comments: int = Field(
        alias="numComments", description="Total number of comments on the post."
    )
    permalink: str = Field(
        description='Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Empty if the upstream omits it. Populated whenever the provider has data for the entity.'
    )
    score: int = Field(description="Net score (upvotes minus downvotes) at fetch time.")
    subreddit: str = Field(
        description="Subreddit name, without the r/ prefix. Populated whenever the provider has data for the entity."
    )
    title: str = Field(
        description="Post title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider has data for the entity."
    )


class RedditSubredditDetailsData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    advertiser_category: str = Field(
        alias="advertiserCategory",
        description="Reddit advertiser category for the subreddit.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    description: str = Field(
        description="Subreddit description text. Populated whenever the provider has data for the entity."
    )
    icon_url: str = Field(
        alias="iconUrl",
        description="URL of the subreddit icon. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description='Reddit fullname, e.g. "t5_2qh1i". Populated whenever the provider has data for the entity.'
    )
    name: str = Field(
        description="Subreddit name (without the r/ prefix). Populated whenever the provider has data for the entity."
    )
    weekly_active_users: int = Field(
        alias="weeklyActiveUsers",
        description="Number of users active in the past week.",
    )


class RedditSubredditPostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Cursor for the next page of results; pass it back as the `cursor` input to fetch the following page. Null when there are no more results.",
    )
    posts: list[RedditSubredditPostsPost] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class RedditSubredditPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Author username, without the u/ prefix. Populated whenever the provider has data for the entity."
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider has data for the entity."
    )
    num_comments: int = Field(
        alias="numComments", description="Total number of comments on the post."
    )
    permalink: str = Field(
        description='Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Empty if the upstream omits it. Populated whenever the provider has data for the entity.'
    )
    score: int = Field(description="Net score (upvotes minus downvotes) at fetch time.")
    subreddit: str = Field(
        description="Subreddit name, without the r/ prefix. Populated whenever the provider has data for the entity."
    )
    title: str = Field(
        description="Post title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider has data for the entity."
    )


class RedditSubredditSearchData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    posts: list[RedditSubredditSearchPost] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class RedditSubredditSearchPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Author username, without the u/ prefix. Populated whenever the provider has data for the entity."
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="Post creation time as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider has data for the entity."
    )
    nsfw: bool = Field(description="Whether the post is marked NSFW (over 18).")
    num_comments: int = Field(
        alias="numComments", description="Total number of comments on the post."
    )
    permalink: str = Field(
        description='Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Populated whenever the provider has data for the entity.'
    )
    score: int = Field(description="Net score (upvotes minus downvotes) at fetch time.")
    subreddit: str = Field(
        description="Subreddit name, without the r/ prefix. Populated whenever the provider has data for the entity."
    )
    title: str = Field(
        description="Post title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider has data for the entity."
    )


class RedditTrendingPostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Cursor for the next page; pass it back as after. Null when no more results exist.",
    )
    posts: list[RedditTrendingPostsPost] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class RedditTrendingPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Author username, without the u/ prefix. Populated whenever the provider has data for the entity."
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider has data for the entity."
    )
    num_comments: int = Field(
        alias="numComments", description="Total number of comments on the post."
    )
    permalink: str = Field(
        description="Canonical reddit.com thread path for the post. Populated whenever the provider has data for the entity."
    )
    score: int = Field(description="Net score (upvotes minus downvotes) at fetch time.")
    subreddit: str = Field(
        description="Subreddit name, without the r/ prefix. Populated whenever the provider has data for the entity."
    )
    title: str = Field(
        description="Post title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="The post's destination link. Populated whenever the provider has data for the entity."
    )


class RedditUserCommentsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    comments: list[RedditUserCommentsComment] = Field(
        description="The user's comments in feed order (newest first by default). Each item carries a truncated body preview plus the parent post it was made on; there is no per-comment permalink available from this endpoint. Populated whenever the provider has data for the entity."
    )
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of this user's comments; pass it back as the `cursor` input to fetch the following page. Null when there are no more pages.",
    )


class RedditUserCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Commenter username, without the u/ prefix. Populated whenever the provider has data for the entity."
    )
    body_preview: str | None = Field(
        default=None,
        alias="bodyPreview",
        description="A preview of the comment text, not the full comment body: the upstream truncates it to roughly 300 characters and cuts mid-word. It is plain text rather than Markdown, and it is empty on the occasional comment for which the upstream returns no preview at all. For full comment bodies and comment permalinks, use the reddit.post_comments SKU against the parent post.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="Reddit comment ID (base-36, without the t1_ prefix). Populated whenever the provider has data for the entity."
    )
    post_id: str | None = Field(
        default=None,
        alias="postId",
        description="Reddit post ID of the thread the comment was made on (base-36, without the t3_ prefix). Pass it to reddit.post or reddit.post_comments for the full thread. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    post_title: str | None = Field(
        default=None,
        alias="postTitle",
        description="Title of the thread the comment was made on. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    score: int | None = Field(
        default=None,
        description="Net score (upvotes minus downvotes) on the comment at fetch time.",
    )
    subreddit: str | None = Field(
        default=None,
        description="Subreddit name of the parent thread, without the r/ prefix. Empty when the comment is on a post hosted on a user's own profile (r/u_<name>), which has no subreddit.",
    )


class RedditUserPostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of this user's posts; pass it back as the `cursor` input to fetch the following page. Null when there are no more pages.",
    )
    posts: list[RedditUserPostsPost] = Field(
        description="The user's posts in feed order. Posts hosted on the user's own profile (r/u_<name>) are included and carry an empty subreddit. Populated whenever the provider has data for the entity."
    )


class RedditUserPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Author username, without the u/ prefix. Populated whenever the provider has data for the entity."
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="Reddit post ID (base-36, without the t3_ prefix). Populated whenever the provider has data for the entity."
    )
    num_comments: int | None = Field(
        default=None,
        alias="numComments",
        description="Total number of comments on the post.",
    )
    permalink: str = Field(
        description='Canonical reddit.com thread path for the post (e.g. "/r/golang/comments/abc123/..."). Differs from url, which is the destination link. Empty if the upstream omits it. Populated whenever the provider has data for the entity.'
    )
    score: int | None = Field(
        default=None, description="Net score (upvotes minus downvotes) at fetch time."
    )
    subreddit: str | None = Field(
        default=None,
        description="Subreddit name, without the r/ prefix. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    title: str = Field(
        description="Post title. Populated whenever the provider has data for the entity."
    )
    url: str | None = Field(
        default=None,
        description="The post's destination link (the external URL for link posts, or the thread URL for self posts). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )


class RedditNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def post(
        self, *, options: RequestOptions | None = None, **input: Unpack[RedditPostInput]
    ) -> RunResult[RedditPostData]:
        """Reddit Post

        Fetch a single Reddit post by URL, including its full body text, score,
        comment count, upvote ratio, and subreddit, as normalized JSON.

        Price: $0.0012 per request.

        Example:
            res = client.reddit.post(url="https://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.post", dict(input), options
        )
        return RunResult[RedditPostData].model_validate(raw)

    def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditPostCommentsInput],
    ) -> RunResult[RedditPostCommentsData]:
        """Reddit Post Comments

        List the top-level comments on a Reddit post by URL (author, body, score,
        timestamp).

        Price: $0.002 per request.

        Example:
            res = client.reddit.post_comments(url="https://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.post_comments", dict(input), options
        )
        return RunResult[RedditPostCommentsData].model_validate(raw)

    def iter_post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditPostCommentsInput],
    ) -> Paginator[RedditPostCommentsComment, RedditPostCommentsData]:
        """Iterate Reddit Post Comments results, following pagination cursors.

        Yields validated `RedditPostCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "reddit.post_comments",
            dict(input),
            "comments",
            item_model=RedditPostCommentsComment,
            data_model=RedditPostCommentsData,
            bare=False,
            options=options,
        )

    def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditPostTranscriptInput],
    ) -> RunResult[RedditPostTranscriptData]:
        """Reddit Post Transcript

        Extract the spoken transcript from a Reddit video post by URL.

        Price: $0.002 per request.

        Example:
            res = client.reddit.post_transcript(url="https://www.reddit.com/r/youseeingthisshit/comments/1oiu9xm/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.post_transcript", dict(input), options
        )
        return RunResult[RedditPostTranscriptData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditProfileInput],
    ) -> RunResult[RedditProfileData]:
        """Reddit Profile

        Fetch a Reddit user's public profile (karma split, post and comment counts,
        bio, avatar, account age) by username.

        Price: $0.0012 per request.

        Example:
            res = client.reddit.profile(username="spez")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.profile", dict(input), options
        )
        return RunResult[RedditProfileData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSearchInput],
    ) -> RunResult[RedditSearchData]:
        """Reddit Search

        Search Reddit posts across all subreddits by query.

        Price: $0.0012 per request.

        Example:
            res = client.reddit.search(query="mechanical keyboard")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.search", dict(input), options
        )
        return RunResult[RedditSearchData].model_validate(raw)

    def iter_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSearchInput],
    ) -> Paginator[RedditSearchPost, RedditSearchData]:
        """Iterate Reddit Search results, following pagination cursors.

        Yields validated `RedditSearchPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "reddit.search",
            dict(input),
            "posts",
            item_model=RedditSearchPost,
            data_model=RedditSearchData,
            bare=False,
            options=options,
        )

    def subreddit_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditDetailsInput],
    ) -> RunResult[RedditSubredditDetailsData]:
        """Reddit Subreddit Details

        Fetch a subreddit's metadata (weekly active users, description, and
        category).

        Price: $0.0012 per request.

        Example:
            res = client.reddit.subreddit_details(subreddit="programming")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.subreddit_details", dict(input), options
        )
        return RunResult[RedditSubredditDetailsData].model_validate(raw)

    def subreddit_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditPostsInput],
    ) -> RunResult[RedditSubredditPostsData]:
        """Reddit Subreddit Posts

        Fetch posts from a subreddit listing (hot, new, or top).

        Price: $0.002 per request.

        Example:
            res = client.reddit.subreddit_posts(limit=5, subreddit="programming")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.subreddit_posts", dict(input), options
        )
        return RunResult[RedditSubredditPostsData].model_validate(raw)

    def iter_subreddit_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditPostsInput],
    ) -> Paginator[RedditSubredditPostsPost, RedditSubredditPostsData]:
        """Iterate Reddit Subreddit Posts results, following pagination cursors.

        Yields validated `RedditSubredditPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "reddit.subreddit_posts",
            dict(input),
            "posts",
            item_model=RedditSubredditPostsPost,
            data_model=RedditSubredditPostsData,
            bare=False,
            options=options,
        )

    def subreddit_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditSearchInput],
    ) -> RunResult[RedditSubredditSearchData]:
        """Reddit Subreddit Search

        Search posts within a single subreddit by query, sort, and timeframe.

        Price: $0.002 per request.

        Example:
            res = client.reddit.subreddit_search(query="push ups", subreddit="Fitness")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.subreddit_search", dict(input), options
        )
        return RunResult[RedditSubredditSearchData].model_validate(raw)

    def iter_subreddit_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditSearchInput],
    ) -> Paginator[RedditSubredditSearchPost, RedditSubredditSearchData]:
        """Iterate Reddit Subreddit Search results, following pagination cursors.

        Yields validated `RedditSubredditSearchPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "reddit.subreddit_search",
            dict(input),
            "posts",
            item_model=RedditSubredditSearchPost,
            data_model=RedditSubredditSearchData,
            bare=False,
            options=options,
        )

    def trending_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditTrendingPostsInput],
    ) -> RunResult[RedditTrendingPostsData]:
        """Reddit Trending Posts

        Get currently trending Reddit posts across all subreddits with stable cursor
        pagination.

        Price: $0.00036 per request.

        Example:
            res = client.reddit.trending_posts(limit=25)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.trending_posts", dict(input), options
        )
        return RunResult[RedditTrendingPostsData].model_validate(raw)

    def user_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditUserCommentsInput],
    ) -> RunResult[RedditUserCommentsData]:
        """Reddit User Comments

        List a Reddit user's comments by username, sorted by new, top, hot, or
        controversial, with the parent post title and subreddit on every item and
        cursor pagination. Comment text comes back as a roughly 300-character
        preview rather than the full body, and this endpoint carries no per-comment
        permalink; use reddit.post_comments for full comment bodies and comment URLs
        on a given post.

        Price: $0.0012 per request.

        Example:
            res = client.reddit.user_comments(username="spez")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.user_comments", dict(input), options
        )
        return RunResult[RedditUserCommentsData].model_validate(raw)

    def iter_user_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditUserCommentsInput],
    ) -> Paginator[RedditUserCommentsComment, RedditUserCommentsData]:
        """Iterate Reddit User Comments results, following pagination cursors.

        Yields validated `RedditUserCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "reddit.user_comments",
            dict(input),
            "comments",
            item_model=RedditUserCommentsComment,
            data_model=RedditUserCommentsData,
            bare=False,
            options=options,
        )

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditUserPostsInput],
    ) -> RunResult[RedditUserPostsData]:
        """Reddit User Posts

        List a Reddit user's posts by username, sorted by new, top, hot, or
        controversial, with cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.reddit.user_posts(username="spez")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.user_posts", dict(input), options
        )
        return RunResult[RedditUserPostsData].model_validate(raw)

    def iter_user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditUserPostsInput],
    ) -> Paginator[RedditUserPostsPost, RedditUserPostsData]:
        """Iterate Reddit User Posts results, following pagination cursors.

        Yields validated `RedditUserPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "reddit.user_posts",
            dict(input),
            "posts",
            item_model=RedditUserPostsPost,
            data_model=RedditUserPostsData,
            bare=False,
            options=options,
        )


class AsyncRedditNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def post(
        self, *, options: RequestOptions | None = None, **input: Unpack[RedditPostInput]
    ) -> RunResult[RedditPostData]:
        """Reddit Post

        Fetch a single Reddit post by URL, including its full body text, score,
        comment count, upvote ratio, and subreddit, as normalized JSON.

        Price: $0.0012 per request.

        Example:
            res = client.reddit.post(url="https://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.post", dict(input), options
        )
        return RunResult[RedditPostData].model_validate(raw)

    async def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditPostCommentsInput],
    ) -> RunResult[RedditPostCommentsData]:
        """Reddit Post Comments

        List the top-level comments on a Reddit post by URL (author, body, score,
        timestamp).

        Price: $0.002 per request.

        Example:
            res = client.reddit.post_comments(url="https://www.reddit.com/r/IAmA/comments/z1c9z/i_am_barack_obama_president_of_the_united_states/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.post_comments", dict(input), options
        )
        return RunResult[RedditPostCommentsData].model_validate(raw)

    def iter_post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditPostCommentsInput],
    ) -> AsyncPaginator[RedditPostCommentsComment, RedditPostCommentsData]:
        """Iterate Reddit Post Comments results, following pagination cursors.

        Yields validated `RedditPostCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "reddit.post_comments",
            dict(input),
            "comments",
            item_model=RedditPostCommentsComment,
            data_model=RedditPostCommentsData,
            bare=False,
            options=options,
        )

    async def post_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditPostTranscriptInput],
    ) -> RunResult[RedditPostTranscriptData]:
        """Reddit Post Transcript

        Extract the spoken transcript from a Reddit video post by URL.

        Price: $0.002 per request.

        Example:
            res = client.reddit.post_transcript(url="https://www.reddit.com/r/youseeingthisshit/comments/1oiu9xm/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.post_transcript", dict(input), options
        )
        return RunResult[RedditPostTranscriptData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditProfileInput],
    ) -> RunResult[RedditProfileData]:
        """Reddit Profile

        Fetch a Reddit user's public profile (karma split, post and comment counts,
        bio, avatar, account age) by username.

        Price: $0.0012 per request.

        Example:
            res = client.reddit.profile(username="spez")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.profile", dict(input), options
        )
        return RunResult[RedditProfileData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSearchInput],
    ) -> RunResult[RedditSearchData]:
        """Reddit Search

        Search Reddit posts across all subreddits by query.

        Price: $0.0012 per request.

        Example:
            res = client.reddit.search(query="mechanical keyboard")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.search", dict(input), options
        )
        return RunResult[RedditSearchData].model_validate(raw)

    def iter_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSearchInput],
    ) -> AsyncPaginator[RedditSearchPost, RedditSearchData]:
        """Iterate Reddit Search results, following pagination cursors.

        Yields validated `RedditSearchPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "reddit.search",
            dict(input),
            "posts",
            item_model=RedditSearchPost,
            data_model=RedditSearchData,
            bare=False,
            options=options,
        )

    async def subreddit_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditDetailsInput],
    ) -> RunResult[RedditSubredditDetailsData]:
        """Reddit Subreddit Details

        Fetch a subreddit's metadata (weekly active users, description, and
        category).

        Price: $0.0012 per request.

        Example:
            res = client.reddit.subreddit_details(subreddit="programming")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.subreddit_details", dict(input), options
        )
        return RunResult[RedditSubredditDetailsData].model_validate(raw)

    async def subreddit_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditPostsInput],
    ) -> RunResult[RedditSubredditPostsData]:
        """Reddit Subreddit Posts

        Fetch posts from a subreddit listing (hot, new, or top).

        Price: $0.002 per request.

        Example:
            res = client.reddit.subreddit_posts(limit=5, subreddit="programming")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.subreddit_posts", dict(input), options
        )
        return RunResult[RedditSubredditPostsData].model_validate(raw)

    def iter_subreddit_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditPostsInput],
    ) -> AsyncPaginator[RedditSubredditPostsPost, RedditSubredditPostsData]:
        """Iterate Reddit Subreddit Posts results, following pagination cursors.

        Yields validated `RedditSubredditPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "reddit.subreddit_posts",
            dict(input),
            "posts",
            item_model=RedditSubredditPostsPost,
            data_model=RedditSubredditPostsData,
            bare=False,
            options=options,
        )

    async def subreddit_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditSearchInput],
    ) -> RunResult[RedditSubredditSearchData]:
        """Reddit Subreddit Search

        Search posts within a single subreddit by query, sort, and timeframe.

        Price: $0.002 per request.

        Example:
            res = client.reddit.subreddit_search(query="push ups", subreddit="Fitness")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.subreddit_search", dict(input), options
        )
        return RunResult[RedditSubredditSearchData].model_validate(raw)

    def iter_subreddit_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditSubredditSearchInput],
    ) -> AsyncPaginator[RedditSubredditSearchPost, RedditSubredditSearchData]:
        """Iterate Reddit Subreddit Search results, following pagination cursors.

        Yields validated `RedditSubredditSearchPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "reddit.subreddit_search",
            dict(input),
            "posts",
            item_model=RedditSubredditSearchPost,
            data_model=RedditSubredditSearchData,
            bare=False,
            options=options,
        )

    async def trending_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditTrendingPostsInput],
    ) -> RunResult[RedditTrendingPostsData]:
        """Reddit Trending Posts

        Get currently trending Reddit posts across all subreddits with stable cursor
        pagination.

        Price: $0.00036 per request.

        Example:
            res = client.reddit.trending_posts(limit=25)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.trending_posts", dict(input), options
        )
        return RunResult[RedditTrendingPostsData].model_validate(raw)

    async def user_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditUserCommentsInput],
    ) -> RunResult[RedditUserCommentsData]:
        """Reddit User Comments

        List a Reddit user's comments by username, sorted by new, top, hot, or
        controversial, with the parent post title and subreddit on every item and
        cursor pagination. Comment text comes back as a roughly 300-character
        preview rather than the full body, and this endpoint carries no per-comment
        permalink; use reddit.post_comments for full comment bodies and comment URLs
        on a given post.

        Price: $0.0012 per request.

        Example:
            res = client.reddit.user_comments(username="spez")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.user_comments", dict(input), options
        )
        return RunResult[RedditUserCommentsData].model_validate(raw)

    def iter_user_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditUserCommentsInput],
    ) -> AsyncPaginator[RedditUserCommentsComment, RedditUserCommentsData]:
        """Iterate Reddit User Comments results, following pagination cursors.

        Yields validated `RedditUserCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "reddit.user_comments",
            dict(input),
            "comments",
            item_model=RedditUserCommentsComment,
            data_model=RedditUserCommentsData,
            bare=False,
            options=options,
        )

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditUserPostsInput],
    ) -> RunResult[RedditUserPostsData]:
        """Reddit User Posts

        List a Reddit user's posts by username, sorted by new, top, hot, or
        controversial, with cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.reddit.user_posts(username="spez")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "reddit.user_posts", dict(input), options
        )
        return RunResult[RedditUserPostsData].model_validate(raw)

    def iter_user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RedditUserPostsInput],
    ) -> AsyncPaginator[RedditUserPostsPost, RedditUserPostsData]:
        """Iterate Reddit User Posts results, following pagination cursors.

        Yields validated `RedditUserPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "reddit.user_posts",
            dict(input),
            "posts",
            item_model=RedditUserPostsPost,
            data_model=RedditUserPostsData,
            bare=False,
            options=options,
        )
