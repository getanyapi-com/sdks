# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the twitter platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

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


class TwitterCommunityInput(TypedDict, total=False):
    """Input for Twitter Community."""

    url: Required[str]
    """Community URL (e.g. https://x.com/i/communities/1926186499399139650)."""


class TwitterCommunityTweetsInput(TypedDict, total=False):
    """Input for Twitter Community Tweets."""

    url: Required[str]
    """Community URL (e.g. https://x.com/i/communities/1926186499399139650)."""


class TwitterFollowersInput(TypedDict, total=False):
    """Input for X / Twitter Followers."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-100000, default 200). You are billed per result returned, so a lower limit costs less. Range: 1 to 100000. Default: 200."""
    username: Required[str]
    """The X (Twitter) username to fetch followers for, without the @ prefix (e.g. elonmusk)."""


class TwitterFollowingInput(TypedDict, total=False):
    """Input for X / Twitter Following."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-100000, default 200). You are billed per result returned, so a lower limit costs less. Range: 1 to 100000. Default: 200."""
    username: Required[str]
    """The X (Twitter) username to fetch the following list for, without the @ prefix (e.g. elonmusk)."""


class TwitterProfileInput(TypedDict, total=False):
    """Input for Twitter Profile."""

    handle: Required[str]
    """Twitter/X handle without the leading @."""


class TwitterRepliesInput(TypedDict, total=False):
    """Input for X / Twitter Post Replies."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-40, default 40). You are billed per result returned, so a lower limit costs less. Range: 1 to 40."""
    url: Required[str]
    """Full URL of the X (Twitter) post to fetch replies for (e.g. https://x.com/nasa/status/1846987139428634858)."""


class TwitterSearchInput(TypedDict, total=False):
    """Input for X / Twitter Search."""

    lang: NotRequired[str]
    """Optional ISO 639-1 language code to restrict tweets to (e.g. en)."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-50, default 50). You are billed per result returned, so a lower limit costs less. Range: 1 to 50."""
    query: Required[str]
    """Search query using X advanced-search syntax. IMPORTANT: terms are ANDed - a tweet must contain EVERY word, so a list of loosely related keywords matches nothing. Use one short phrase, or OR between alternatives (e.g. 'anyapi OR getanyapi'). Useful operators: from:user, since:YYYY-MM-DD, "exact phrase", -filter:replies. A query with no matches returns an empty items array; prefer the fewest words that identify the topic."""
    queryType: NotRequired[str]
    """Result ranking: 'Latest', 'Top', 'Photos', or 'Videos' (e.g. Latest). Default: Latest."""


class TwitterTweetInput(TypedDict, total=False):
    """Input for Twitter Tweet."""

    url: Required[str]
    """Full tweet URL, e.g. https://x.com/NASA/status/1800000000000000000."""


class TwitterTweetTranscriptInput(TypedDict, total=False):
    """Input for Twitter Tweet Transcript."""

    url: Required[str]
    """Tweet URL of the video to transcribe (e.g. https://x.com/TheoVon/status/1916982720317821050)."""


class TwitterUserTweetsInput(TypedDict, total=False):
    """Input for Twitter User Tweets."""

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of tweets."""
    handle: Required[str]
    """Twitter/X handle without the leading @."""
    limit: NotRequired[int]
    """How many tweets you want (1-1000), newest first. By default results may come back in cheap pages of ~20: follow the response's nextCursor for more. With requireSinglePage true, up to this many are returned in one (pricier) call. Range: 1 to 1000. Default: 20."""
    requireSinglePage: NotRequired[bool]
    """Set true to get up to limit tweets in a single response instead of cheap pages, served by a bulk provider at a higher price."""


class TwitterCommunityData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    creator_handle: str = Field(
        alias="creatorHandle",
        description="Handle of the account that created the community. Populated whenever the provider has data for the entity.",
    )
    description: str = Field(
        description="Community description text. Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="Community identifier. Populated whenever the provider has data for the entity."
    )
    join_policy: str = Field(
        alias="joinPolicy",
        description='How members join, e.g. "open" or "restricted". Populated whenever the provider has data for the entity.',
    )
    member_count: int = Field(
        alias="memberCount", description="Number of members in the community."
    )
    name: str = Field(
        description="Community name. Populated whenever the provider has data for the entity."
    )


class TwitterCommunityTweetsData(BaseModel):
    tweets: list[TwitterCommunityTweetsTweet] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TwitterCommunityTweetsTweet(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_handle: str = Field(
        alias="authorHandle",
        description="Populated whenever the provider has data for the entity.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    favorite_count: int = Field(alias="favoriteCount")
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    quote_count: int = Field(alias="quoteCount")
    reply_count: int = Field(alias="replyCount")
    retweet_count: int = Field(alias="retweetCount")
    text: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TwitterFollowersData(BaseModel):
    items: list[TwitterFollowersItem] = Field(
        description="Follower records, normalized to a compact shape. Populated whenever the provider has data for the entity."
    )


class TwitterFollowersItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(
        alias="avatarUrl",
        description="URL of the account's profile image (may be empty). Populated whenever the provider has data for the entity.",
    )
    bio: str = Field(description="The account's profile bio/description.")
    followers: int = Field(description="How many followers this account has.")
    following: int = Field(description="How many accounts this account follows.")
    location: str = Field(
        description="The account's self-reported location (may be empty)."
    )
    name: str = Field(
        description="The account's display name. Populated whenever the provider has data for the entity."
    )
    username: str = Field(
        description="The account's @ handle, without the @ prefix. Populated whenever the provider has data for the entity."
    )
    verified: bool = Field(description="Whether the account is verified.")


class TwitterFollowingData(BaseModel):
    items: list[TwitterFollowingItem] = Field(
        description="Followed-account records, normalized to a compact shape. Populated whenever the provider has data for the entity."
    )


class TwitterFollowingItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(
        alias="avatarUrl",
        description="URL of the account's profile image (may be empty). Populated whenever the provider has data for the entity.",
    )
    bio: str = Field(description="The account's profile bio/description.")
    followers: int = Field(description="How many followers this account has.")
    following: int = Field(description="How many accounts this account follows.")
    location: str = Field(
        description="The account's self-reported location (may be empty)."
    )
    name: str = Field(
        description="The account's display name. Populated whenever the provider has data for the entity."
    )
    username: str = Field(
        description="The account's @ handle, without the @ prefix. Populated whenever the provider has data for the entity."
    )
    verified: bool = Field(description="Whether the account is verified.")


class TwitterProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(
        alias="avatarUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    bio: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    display_name: str = Field(
        alias="displayName",
        description="Populated whenever the provider has data for the entity.",
    )
    followers: int
    following: int
    handle: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    tweets: int
    verified: bool


class TwitterRepliesData(BaseModel):
    items: list[TwitterRepliesItem] = Field(
        description="Reply records for the requested post. Populated whenever the provider has data for the entity."
    )


class TwitterRepliesItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_handle: str | None = Field(
        default=None,
        alias="authorHandle",
        description="Screen name / handle of the reply's author, without the @ prefix.",
    )
    author_name: str | None = Field(
        default=None,
        alias="authorName",
        description="Display name of the reply's author. Empty when the upstream omits it.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="The reply's numeric tweet ID, as a string. Populated whenever the provider has data for the entity."
    )
    like_count: int | None = Field(
        default=None, alias="likeCount", description="Number of likes on this reply."
    )
    quote_count: int | None = Field(
        default=None,
        alias="quoteCount",
        description="Number of quote tweets of this reply.",
    )
    reply_count: int | None = Field(
        default=None, alias="replyCount", description="Number of replies to this reply."
    )
    repost_count: int | None = Field(
        default=None,
        alias="repostCount",
        description="Number of reposts/retweets of this reply.",
    )
    text: str = Field(
        description="The reply's text. Empty for media-only replies with no text."
    )
    url: str = Field(
        description="Canonical x.com URL of the reply, with tracking query params stripped. Populated whenever the provider has data for the entity."
    )
    view_count: int | None = Field(
        default=None, alias="viewCount", description="Number of views of this reply."
    )


class TwitterSearchData(BaseModel):
    items: list[TwitterSearchItem] = Field(
        description="Tweet records: text, author profile, timestamp, and engagement metrics (likes, retweets, replies, views). Populated whenever the provider has data for the entity."
    )


class TwitterSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_name: str | None = Field(
        default=None,
        alias="authorName",
        description="Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    author_username: str | None = Field(
        default=None,
        alias="authorUsername",
        description="Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    author_verified: bool | None = Field(default=None, alias="authorVerified")
    bookmark_count: int | None = Field(default=None, alias="bookmarkCount")
    conversation_id: str | None = Field(default=None, alias="conversationId")
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    is_reply: bool | None = Field(default=None, alias="isReply")
    lang: str | None = None
    like_count: int | None = Field(default=None, alias="likeCount")
    quote_count: int | None = Field(default=None, alias="quoteCount")
    reply_count: int | None = Field(default=None, alias="replyCount")
    retweet_count: int | None = Field(default=None, alias="retweetCount")
    text: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    view_count: int | None = Field(default=None, alias="viewCount")


class TwitterTweetData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_id: str = Field(
        alias="authorId",
        description="Populated whenever the provider has data for the entity.",
    )
    bookmarks: int
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    quotes: int
    replies: int
    retweets: int
    text: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    views: int


class TwitterTweetTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")

    transcript: str


class TwitterUserTweetsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        default=None,
        alias="nextCursor",
        description="Opaque cursor for the next page of tweets, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    tweets: list[TwitterUserTweetsTweet] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TwitterUserTweetsTweet(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    bookmarks: int
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    is_pinned: bool = Field(alias="isPinned")
    is_reply: bool | None = Field(default=None, alias="isReply")
    lang: str | None = None
    likes: int
    quotes: int | None = None
    replies: int
    retweets: int
    text: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    views: int


class TwitterNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def community(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterCommunityInput],
    ) -> RunResult[TwitterCommunityData]:
        """Twitter Community

        Fetch a Twitter/X community's public details (name, description, member
        count, join policy) by URL, normalized across providers with transparent
        failover. **Price:** $2.00 per 1,000 requests (flat per request - same cost
        regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.twitter.community(url="https://x.com/i/communities/1926186499399139650")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.community", dict(input), options
        )
        return RunResult[TwitterCommunityData].model_validate(raw)

    def community_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterCommunityTweetsInput],
    ) -> RunResult[TwitterCommunityTweetsData]:
        """Twitter Community Tweets

        List recent tweets posted in a Twitter/X community by URL, normalized across
        providers with transparent failover. **Price:** $2.00 per 1,000 requests
        (flat per request - same cost regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.twitter.community_tweets(url="https://x.com/i/communities/1926186499399139650")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.community_tweets", dict(input), options
        )
        return RunResult[TwitterCommunityTweetsData].model_validate(raw)

    def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterFollowersInput],
    ) -> RunResult[TwitterFollowersData]:
        """X / Twitter Followers

        Fetch the follower list of any public X (Twitter) account by username - up
        to 100,000 follower records per request. **Price:** billed per result -
        $0.00 per 1,000 requests base + $0.15 per 1,000 results, capped at
        $15,000.00 per 1,000 requests.

        Price: $0.00015 per result.

        Example:
            res = client.twitter.followers(limit=200, username="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.followers", dict(input), options
        )
        return RunResult[TwitterFollowersData].model_validate(raw)

    def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterFollowingInput],
    ) -> RunResult[TwitterFollowingData]:
        """X / Twitter Following

        List the accounts a public X (Twitter) account follows by username - up to
        100,000 records per request. **Price:** billed per result - $0.00 per 1,000
        requests base + $0.15 per 1,000 results, capped at $15,000.00 per 1,000
        requests.

        Price: $0.00015 per result.

        Example:
            res = client.twitter.following(limit=200, username="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.following", dict(input), options
        )
        return RunResult[TwitterFollowingData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterProfileInput],
    ) -> RunResult[TwitterProfileData]:
        """Twitter Profile

        Fetch a Twitter/X account's public profile (followers, tweets, bio,
        verification) by handle, normalized across providers with transparent
        failover. **Price:** $1.00 per 1,000 requests (flat per request - same cost
        regardless of results returned).

        Price: $0.001 per request.

        Example:
            res = client.twitter.profile(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.profile", dict(input), options
        )
        return RunResult[TwitterProfileData].model_validate(raw)

    def replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterRepliesInput],
    ) -> RunResult[TwitterRepliesData]:
        """X / Twitter Post Replies

        Fetch the replies to any X (Twitter) post URL as structured records -
        author, text, and engagement. **Price:** billed per result - $2.50 per 1,000
        requests base + $0.25 per 1,000 results, capped at $12.50 per 1,000
        requests.

        Price: $0.0025 per request plus $0.00025 per result.

        Example:
            res = client.twitter.replies(limit=3, url="https://x.com/jack/status/20")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.replies", dict(input), options
        )
        return RunResult[TwitterRepliesData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterSearchInput],
    ) -> RunResult[TwitterSearchData]:
        """X / Twitter Search

        Search X (Twitter) with full advanced-search syntax and get up to 50
        structured tweets per request - text, author, and engagement. **Price:**
        billed per result - $4.00 per 1,000 requests base + $0.20 per 1,000 results,
        capped at $14.00 per 1,000 requests.

        Price: $0.004 per request plus $0.0002 per result.

        Example:
            res = client.twitter.search(query="openai")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.search", dict(input), options
        )
        return RunResult[TwitterSearchData].model_validate(raw)

    def tweet(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTweetInput],
    ) -> RunResult[TwitterTweetData]:
        """Twitter Tweet

        Fetch a single Twitter/X tweet by URL with its full text and engagement
        counts (likes, retweets, replies, quotes, bookmarks, views), normalized
        across providers. **Price:** $2.00 per 1,000 requests (flat per request -
        same cost regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.twitter.tweet(url="https://x.com/SpaceX/status/1732824684683784516")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.tweet", dict(input), options
        )
        return RunResult[TwitterTweetData].model_validate(raw)

    def tweet_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTweetTranscriptInput],
    ) -> RunResult[TwitterTweetTranscriptData]:
        """Twitter Tweet Transcript

        Extract the spoken transcript from a Twitter/X video tweet by URL,
        normalized across providers with transparent failover. **Price:** $2.00 per
        1,000 requests (flat per request - same cost regardless of results
        returned).

        Price: $0.002 per request.

        Example:
            res = client.twitter.tweet_transcript(url="https://x.com/TheoVon/status/1916982720317821050")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.tweet_transcript", dict(input), options
        )
        return RunResult[TwitterTweetTranscriptData].model_validate(raw)

    def user_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterUserTweetsInput],
    ) -> RunResult[TwitterUserTweetsData]:
        """Twitter User Tweets

        Get an X (Twitter) account's latest tweets by handle, newest first
        (reverse-chronological, replies included) - not just the popular ones - up
        to 1000 per call, with engagement, views, and language, normalized across
        providers with cursor pagination. **Price:** $1.00 per 1,000 requests (flat
        per request - same cost regardless of results returned).

        Price: $0.001 per request.

        Example:
            res = client.twitter.user_tweets(handle="levelsio", limit=20)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.user_tweets", dict(input), options
        )
        return RunResult[TwitterUserTweetsData].model_validate(raw)

    def iter_user_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterUserTweetsInput],
    ) -> Paginator[TwitterUserTweetsTweet, TwitterUserTweetsData]:
        """Iterate Twitter User Tweets results, following pagination cursors.

        Yields validated `TwitterUserTweetsTweet` items from the `tweets` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "twitter.user_tweets",
            dict(input),
            "tweets",
            item_model=TwitterUserTweetsTweet,
            data_model=TwitterUserTweetsData,
            bare=False,
            options=options,
        )


class AsyncTwitterNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def community(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterCommunityInput],
    ) -> RunResult[TwitterCommunityData]:
        """Twitter Community

        Fetch a Twitter/X community's public details (name, description, member
        count, join policy) by URL, normalized across providers with transparent
        failover. **Price:** $2.00 per 1,000 requests (flat per request - same cost
        regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.twitter.community(url="https://x.com/i/communities/1926186499399139650")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.community", dict(input), options
        )
        return RunResult[TwitterCommunityData].model_validate(raw)

    async def community_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterCommunityTweetsInput],
    ) -> RunResult[TwitterCommunityTweetsData]:
        """Twitter Community Tweets

        List recent tweets posted in a Twitter/X community by URL, normalized across
        providers with transparent failover. **Price:** $2.00 per 1,000 requests
        (flat per request - same cost regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.twitter.community_tweets(url="https://x.com/i/communities/1926186499399139650")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.community_tweets", dict(input), options
        )
        return RunResult[TwitterCommunityTweetsData].model_validate(raw)

    async def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterFollowersInput],
    ) -> RunResult[TwitterFollowersData]:
        """X / Twitter Followers

        Fetch the follower list of any public X (Twitter) account by username - up
        to 100,000 follower records per request. **Price:** billed per result -
        $0.00 per 1,000 requests base + $0.15 per 1,000 results, capped at
        $15,000.00 per 1,000 requests.

        Price: $0.00015 per result.

        Example:
            res = client.twitter.followers(limit=200, username="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.followers", dict(input), options
        )
        return RunResult[TwitterFollowersData].model_validate(raw)

    async def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterFollowingInput],
    ) -> RunResult[TwitterFollowingData]:
        """X / Twitter Following

        List the accounts a public X (Twitter) account follows by username - up to
        100,000 records per request. **Price:** billed per result - $0.00 per 1,000
        requests base + $0.15 per 1,000 results, capped at $15,000.00 per 1,000
        requests.

        Price: $0.00015 per result.

        Example:
            res = client.twitter.following(limit=200, username="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.following", dict(input), options
        )
        return RunResult[TwitterFollowingData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterProfileInput],
    ) -> RunResult[TwitterProfileData]:
        """Twitter Profile

        Fetch a Twitter/X account's public profile (followers, tweets, bio,
        verification) by handle, normalized across providers with transparent
        failover. **Price:** $1.00 per 1,000 requests (flat per request - same cost
        regardless of results returned).

        Price: $0.001 per request.

        Example:
            res = client.twitter.profile(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.profile", dict(input), options
        )
        return RunResult[TwitterProfileData].model_validate(raw)

    async def replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterRepliesInput],
    ) -> RunResult[TwitterRepliesData]:
        """X / Twitter Post Replies

        Fetch the replies to any X (Twitter) post URL as structured records -
        author, text, and engagement. **Price:** billed per result - $2.50 per 1,000
        requests base + $0.25 per 1,000 results, capped at $12.50 per 1,000
        requests.

        Price: $0.0025 per request plus $0.00025 per result.

        Example:
            res = client.twitter.replies(limit=3, url="https://x.com/jack/status/20")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.replies", dict(input), options
        )
        return RunResult[TwitterRepliesData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterSearchInput],
    ) -> RunResult[TwitterSearchData]:
        """X / Twitter Search

        Search X (Twitter) with full advanced-search syntax and get up to 50
        structured tweets per request - text, author, and engagement. **Price:**
        billed per result - $4.00 per 1,000 requests base + $0.20 per 1,000 results,
        capped at $14.00 per 1,000 requests.

        Price: $0.004 per request plus $0.0002 per result.

        Example:
            res = client.twitter.search(query="openai")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.search", dict(input), options
        )
        return RunResult[TwitterSearchData].model_validate(raw)

    async def tweet(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTweetInput],
    ) -> RunResult[TwitterTweetData]:
        """Twitter Tweet

        Fetch a single Twitter/X tweet by URL with its full text and engagement
        counts (likes, retweets, replies, quotes, bookmarks, views), normalized
        across providers. **Price:** $2.00 per 1,000 requests (flat per request -
        same cost regardless of results returned).

        Price: $0.002 per request.

        Example:
            res = client.twitter.tweet(url="https://x.com/SpaceX/status/1732824684683784516")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.tweet", dict(input), options
        )
        return RunResult[TwitterTweetData].model_validate(raw)

    async def tweet_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTweetTranscriptInput],
    ) -> RunResult[TwitterTweetTranscriptData]:
        """Twitter Tweet Transcript

        Extract the spoken transcript from a Twitter/X video tweet by URL,
        normalized across providers with transparent failover. **Price:** $2.00 per
        1,000 requests (flat per request - same cost regardless of results
        returned).

        Price: $0.002 per request.

        Example:
            res = client.twitter.tweet_transcript(url="https://x.com/TheoVon/status/1916982720317821050")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.tweet_transcript", dict(input), options
        )
        return RunResult[TwitterTweetTranscriptData].model_validate(raw)

    async def user_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterUserTweetsInput],
    ) -> RunResult[TwitterUserTweetsData]:
        """Twitter User Tweets

        Get an X (Twitter) account's latest tweets by handle, newest first
        (reverse-chronological, replies included) - not just the popular ones - up
        to 1000 per call, with engagement, views, and language, normalized across
        providers with cursor pagination. **Price:** $1.00 per 1,000 requests (flat
        per request - same cost regardless of results returned).

        Price: $0.001 per request.

        Example:
            res = client.twitter.user_tweets(handle="levelsio", limit=20)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.user_tweets", dict(input), options
        )
        return RunResult[TwitterUserTweetsData].model_validate(raw)

    def iter_user_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterUserTweetsInput],
    ) -> AsyncPaginator[TwitterUserTweetsTweet, TwitterUserTweetsData]:
        """Iterate Twitter User Tweets results, following pagination cursors.

        Yields validated `TwitterUserTweetsTweet` items from the `tweets` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "twitter.user_tweets",
            dict(input),
            "tweets",
            item_model=TwitterUserTweetsTweet,
            data_model=TwitterUserTweetsData,
            bare=False,
            options=options,
        )
