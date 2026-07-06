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
    model_config = ConfigDict(extra="allow")

    createdAt: float
    creatorHandle: str = Field(
        description="Populated whenever the provider returns data."
    )
    description: str = Field(
        description="Populated whenever the provider returns data."
    )
    id: str = Field(description="Populated whenever the provider returns data.")
    joinPolicy: str = Field(description="Populated whenever the provider returns data.")
    memberCount: int
    name: str = Field(description="Populated whenever the provider returns data.")


class TwitterCommunityTweetsData(BaseModel):
    tweets: list[TwitterCommunityTweetsTweet] = Field(
        description="Populated whenever the provider returns data."
    )


class TwitterCommunityTweetsTweet(BaseModel):
    model_config = ConfigDict(extra="allow")

    authorHandle: str = Field(
        description="Populated whenever the provider returns data."
    )
    createdAt: str = Field(description="Populated whenever the provider returns data.")
    favoriteCount: int
    id: str = Field(description="Populated whenever the provider returns data.")
    quoteCount: int
    replyCount: int
    retweetCount: int
    text: str = Field(description="Populated whenever the provider returns data.")


class TwitterFollowersData(BaseModel):
    items: list[TwitterFollowersItem] = Field(
        description="Follower records, normalized to a compact shape. Populated whenever the provider returns data."
    )


class TwitterFollowersItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    avatarUrl: str = Field(
        description="URL of the account's profile image (may be empty). Populated whenever the provider returns data."
    )
    bio: str = Field(description="The account's profile bio/description.")
    followers: int = Field(description="How many followers this account has.")
    following: int = Field(description="How many accounts this account follows.")
    location: str = Field(
        description="The account's self-reported location (may be empty)."
    )
    name: str = Field(
        description="The account's display name. Populated whenever the provider returns data."
    )
    username: str = Field(
        description="The account's @ handle, without the @ prefix. Populated whenever the provider returns data."
    )
    verified: bool = Field(description="Whether the account is verified.")


class TwitterFollowingData(BaseModel):
    items: list[TwitterFollowingItem] = Field(
        description="Followed-account records, normalized to a compact shape. Populated whenever the provider returns data."
    )


class TwitterFollowingItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    avatarUrl: str = Field(
        description="URL of the account's profile image (may be empty). Populated whenever the provider returns data."
    )
    bio: str = Field(description="The account's profile bio/description.")
    followers: int = Field(description="How many followers this account has.")
    following: int = Field(description="How many accounts this account follows.")
    location: str = Field(
        description="The account's self-reported location (may be empty)."
    )
    name: str = Field(
        description="The account's display name. Populated whenever the provider returns data."
    )
    username: str = Field(
        description="The account's @ handle, without the @ prefix. Populated whenever the provider returns data."
    )
    verified: bool = Field(description="Whether the account is verified.")


class TwitterProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")

    avatarUrl: str = Field(description="Populated whenever the provider returns data.")
    bio: str = Field(description="Populated whenever the provider returns data.")
    displayName: str = Field(
        description="Populated whenever the provider returns data."
    )
    followers: int
    following: int
    handle: str = Field(description="Populated whenever the provider returns data.")
    tweets: int
    verified: bool


class TwitterRepliesData(BaseModel):
    items: list[TwitterRepliesItem] = Field(
        description="Reply records: reply text, author profile, timestamp, and engagement metrics. Populated whenever the provider returns data."
    )


class TwitterRepliesItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    text: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class TwitterSearchData(BaseModel):
    items: list[TwitterSearchItem] = Field(
        description="Tweet records: text, author profile, timestamp, and engagement metrics (likes, retweets, replies, views). Populated whenever the provider returns data."
    )


class TwitterSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    authorName: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    authorUsername: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    authorVerified: bool | None = None
    bookmarkCount: int | None = None
    conversationId: str | None = None
    createdAt: str | None = Field(
        default=None,
        description="Tweet creation time. Populated whenever the provider returns data.",
    )
    id: str = Field(description="Populated whenever the provider returns data.")
    isReply: bool | None = None
    lang: str | None = None
    likeCount: int | None = None
    quoteCount: int | None = None
    replyCount: int | None = None
    retweetCount: int | None = None
    text: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")
    viewCount: int | None = None


class TwitterTweetData(BaseModel):
    model_config = ConfigDict(extra="allow")

    authorId: str = Field(description="Populated whenever the provider returns data.")
    bookmarks: int
    createdAt: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    likes: int
    quotes: int
    replies: int
    retweets: int
    text: str = Field(description="Populated whenever the provider returns data.")
    views: int


class TwitterTweetTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")

    transcript: str


class TwitterUserTweetsData(BaseModel):
    nextCursor: str | None = Field(
        default=None,
        description="Opaque cursor for the next page of tweets, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    tweets: list[TwitterUserTweetsTweet] = Field(
        description="Populated whenever the provider returns data."
    )


class TwitterUserTweetsTweet(BaseModel):
    model_config = ConfigDict(extra="allow")

    bookmarks: int
    createdAt: str = Field(description="Populated whenever the provider returns data.")
    id: str = Field(description="Populated whenever the provider returns data.")
    isPinned: bool
    isReply: bool | None = None
    lang: str | None = None
    likes: int
    quotes: int | None = None
    replies: int
    retweets: int
    text: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")
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
        failover.

        Price: $0.002 per request.

        Example:
            res = client.twitter.community(url="https://x.com/i/communities/1926186499399139650")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "twitter.community", dict(input), options
        )
        return RunResult[TwitterCommunityData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def community_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterCommunityTweetsInput],
    ) -> RunResult[TwitterCommunityTweetsData]:
        """Twitter Community Tweets

        List recent tweets posted in a Twitter/X community by URL, normalized across
        providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.twitter.community_tweets(url="https://x.com/i/communities/1926186499399139650")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "twitter.community_tweets", dict(input), options
        )
        return RunResult[TwitterCommunityTweetsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterFollowersInput],
    ) -> RunResult[TwitterFollowersData]:
        """X / Twitter Followers

        Fetch the follower list of any public X (Twitter) account by username - up
        to 100,000 follower records per request with transparent per-result USD
        pricing.

        Price: $0.00015 per result.

        Example:
            res = client.twitter.followers(limit=200, username="nasa")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "twitter.followers", dict(input), options
        )
        return RunResult[TwitterFollowersData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterFollowingInput],
    ) -> RunResult[TwitterFollowingData]:
        """X / Twitter Following

        List the accounts a public X (Twitter) account follows by username - up to
        100,000 records per request with transparent per-result USD pricing.

        Price: $0.00015 per result.

        Example:
            res = client.twitter.following(limit=200, username="nasa")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "twitter.following", dict(input), options
        )
        return RunResult[TwitterFollowingData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterProfileInput],
    ) -> RunResult[TwitterProfileData]:
        """Twitter Profile

        Fetch a Twitter/X account's public profile (followers, tweets, bio,
        verification) by handle, normalized across providers with transparent
        failover.

        Price: $0.001 per request.

        Example:
            res = client.twitter.profile(handle="nasa")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "twitter.profile", dict(input), options
        )
        return RunResult[TwitterProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterRepliesInput],
    ) -> RunResult[TwitterRepliesData]:
        """X / Twitter Post Replies

        Fetch the replies to any X (Twitter) post URL as structured records -
        author, text, and engagement - priced per request in USD.

        Price: $0.00025 per result.

        Example:
            res = client.twitter.replies(limit=3, url="https://x.com/jack/status/20")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "twitter.replies", dict(input), options
        )
        return RunResult[TwitterRepliesData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterSearchInput],
    ) -> RunResult[TwitterSearchData]:
        """X / Twitter Search

        Search X (Twitter) with full advanced-search syntax and get up to 50
        structured tweets per request - text, author, and engagement - with
        transparent per-request USD pricing.

        Price: $0.0002 per result.

        Example:
            res = client.twitter.search(query="openai")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "twitter.search", dict(input), options
        )
        return RunResult[TwitterSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def tweet(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTweetInput],
    ) -> RunResult[TwitterTweetData]:
        """Twitter Tweet

        Fetch a single Twitter/X tweet by URL with its full text and engagement
        counts (likes, retweets, replies, quotes, bookmarks, views), normalized
        across providers.

        Price: $0.002 per request.

        Example:
            res = client.twitter.tweet(url="https://x.com/SpaceX/status/1732824684683784516")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "twitter.tweet", dict(input), options
        )
        return RunResult[TwitterTweetData].model_validate(raw.model_dump(by_alias=True))

    def tweet_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTweetTranscriptInput],
    ) -> RunResult[TwitterTweetTranscriptData]:
        """Twitter Tweet Transcript

        Extract the spoken transcript from a Twitter/X video tweet by URL,
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.twitter.tweet_transcript(url="https://x.com/TheoVon/status/1916982720317821050")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "twitter.tweet_transcript", dict(input), options
        )
        return RunResult[TwitterTweetTranscriptData].model_validate(
            raw.model_dump(by_alias=True)
        )

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
        providers with cursor pagination.

        Price: $0.001 per request.

        Example:
            res = client.twitter.user_tweets(handle="levelsio", limit=20)
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "twitter.user_tweets", dict(input), options
        )
        return RunResult[TwitterUserTweetsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterUserTweetsInput],
    ) -> Paginator[TwitterUserTweetsTweet, TwitterUserTweetsData]:
        """Iterate Twitter User Tweets results, following pagination cursors.

        Yields flattened items from the `tweets` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "twitter.user_tweets", dict(input), "tweets", options=options
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
        failover.

        Price: $0.002 per request.

        Example:
            res = client.twitter.community(url="https://x.com/i/communities/1926186499399139650")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "twitter.community", dict(input), options
        )
        return RunResult[TwitterCommunityData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def community_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterCommunityTweetsInput],
    ) -> RunResult[TwitterCommunityTweetsData]:
        """Twitter Community Tweets

        List recent tweets posted in a Twitter/X community by URL, normalized across
        providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.twitter.community_tweets(url="https://x.com/i/communities/1926186499399139650")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "twitter.community_tweets", dict(input), options
        )
        return RunResult[TwitterCommunityTweetsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterFollowersInput],
    ) -> RunResult[TwitterFollowersData]:
        """X / Twitter Followers

        Fetch the follower list of any public X (Twitter) account by username - up
        to 100,000 follower records per request with transparent per-result USD
        pricing.

        Price: $0.00015 per result.

        Example:
            res = client.twitter.followers(limit=200, username="nasa")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "twitter.followers", dict(input), options
        )
        return RunResult[TwitterFollowersData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterFollowingInput],
    ) -> RunResult[TwitterFollowingData]:
        """X / Twitter Following

        List the accounts a public X (Twitter) account follows by username - up to
        100,000 records per request with transparent per-result USD pricing.

        Price: $0.00015 per result.

        Example:
            res = client.twitter.following(limit=200, username="nasa")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "twitter.following", dict(input), options
        )
        return RunResult[TwitterFollowingData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterProfileInput],
    ) -> RunResult[TwitterProfileData]:
        """Twitter Profile

        Fetch a Twitter/X account's public profile (followers, tweets, bio,
        verification) by handle, normalized across providers with transparent
        failover.

        Price: $0.001 per request.

        Example:
            res = client.twitter.profile(handle="nasa")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "twitter.profile", dict(input), options
        )
        return RunResult[TwitterProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterRepliesInput],
    ) -> RunResult[TwitterRepliesData]:
        """X / Twitter Post Replies

        Fetch the replies to any X (Twitter) post URL as structured records -
        author, text, and engagement - priced per request in USD.

        Price: $0.00025 per result.

        Example:
            res = client.twitter.replies(limit=3, url="https://x.com/jack/status/20")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "twitter.replies", dict(input), options
        )
        return RunResult[TwitterRepliesData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterSearchInput],
    ) -> RunResult[TwitterSearchData]:
        """X / Twitter Search

        Search X (Twitter) with full advanced-search syntax and get up to 50
        structured tweets per request - text, author, and engagement - with
        transparent per-request USD pricing.

        Price: $0.0002 per result.

        Example:
            res = client.twitter.search(query="openai")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "twitter.search", dict(input), options
        )
        return RunResult[TwitterSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def tweet(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTweetInput],
    ) -> RunResult[TwitterTweetData]:
        """Twitter Tweet

        Fetch a single Twitter/X tweet by URL with its full text and engagement
        counts (likes, retweets, replies, quotes, bookmarks, views), normalized
        across providers.

        Price: $0.002 per request.

        Example:
            res = client.twitter.tweet(url="https://x.com/SpaceX/status/1732824684683784516")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "twitter.tweet", dict(input), options
        )
        return RunResult[TwitterTweetData].model_validate(raw.model_dump(by_alias=True))

    async def tweet_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTweetTranscriptInput],
    ) -> RunResult[TwitterTweetTranscriptData]:
        """Twitter Tweet Transcript

        Extract the spoken transcript from a Twitter/X video tweet by URL,
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.twitter.tweet_transcript(url="https://x.com/TheoVon/status/1916982720317821050")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "twitter.tweet_transcript", dict(input), options
        )
        return RunResult[TwitterTweetTranscriptData].model_validate(
            raw.model_dump(by_alias=True)
        )

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
        providers with cursor pagination.

        Price: $0.001 per request.

        Example:
            res = client.twitter.user_tweets(handle="levelsio", limit=20)
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "twitter.user_tweets", dict(input), options
        )
        return RunResult[TwitterUserTweetsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterUserTweetsInput],
    ) -> AsyncPaginator[TwitterUserTweetsTweet, TwitterUserTweetsData]:
        """Iterate Twitter User Tweets results, following pagination cursors.

        Yields flattened items from the `tweets` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "twitter.user_tweets", dict(input), "tweets", options=options
        )
