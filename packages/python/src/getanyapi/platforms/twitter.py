# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the twitter platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class TwitterArticleInput(TypedDict, total=False):
    """Input for X / Twitter Article."""

    url: Required[str]
    """Canonical x.com or twitter.com URL of the public wrapper post for an X Article."""


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

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of followers."""
    limit: NotRequired[int]
    """Per-page maximum number of followers to return (1-100000, default 200). A provider may return a smaller native page; follow nextCursor for more. Range: 1 to 100000. Default: 200."""
    requireSinglePage: NotRequired[bool]
    """Set true to get up to limit followers in one response instead of provider-native pages, served by a bulk provider when needed."""
    username: Required[str]
    """The X (Twitter) username to fetch followers for, without the @ prefix (e.g. elonmusk)."""


class TwitterFollowingInput(TypedDict, total=False):
    """Input for X / Twitter Following."""

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of followed accounts."""
    limit: NotRequired[int]
    """Per-page maximum number of followed accounts to return (1-100000, default 200). A provider may return a smaller native page; follow nextCursor for more. Range: 1 to 100000. Default: 200."""
    requireSinglePage: NotRequired[bool]
    """Set true to get up to limit accounts in one response instead of provider-native pages, served by a bulk provider when needed."""
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

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of search results."""
    lang: NotRequired[str]
    """Optional ISO 639-1 language code to restrict tweets to (e.g. en)."""
    limit: NotRequired[int]
    """Per-page maximum number of results to return (1-50, default 20). A provider may return a smaller native page; follow nextCursor for more. Range: 1 to 50. Default: 20."""
    query: Required[str]
    """Search query using X (Twitter) advanced-search syntax. IMPORTANT: bare terms are ANDed - a tweet must contain EVERY word, so a list of loosely related keywords matches nothing; use one short phrase or OR between alternatives (e.g. 'anyapi OR getanyapi'). You can embed X advanced-search operators directly in the query to filter results: from:username and to:username (author or recipient), since:YYYY-MM-DD and until:YYYY-MM-DD (date range), min_faves:N, min_retweets:N, min_replies:N (engagement floors), "exact phrase", -term to exclude, filter:media and filter:links and -filter:replies (content filters), lang:en, near:city, and geocode:lat,long,radius. Examples: 'from:OpenAI', 'AI agents min_faves:500 -filter:replies', 'nvidia since:2026-01-01 until:2026-03-01'. A query with no matches returns an empty items array; prefer the fewest words that identify the topic."""
    queryType: NotRequired[str]
    """Result ranking: 'Latest', 'Top', 'Photos', or 'Videos' (e.g. Latest). Default: Latest."""
    requireSinglePage: NotRequired[bool]
    """Set true to get up to limit results in one response instead of provider-native pages, served by a bulk provider when needed."""


class TwitterTrendsInput(TypedDict, total=False):
    """Input for X / Twitter Trends."""

    limit: NotRequired[int]
    """Maximum number of ranked trends to return (1-50, default 50). Range: 1 to 50. Default: 50."""
    location: NotRequired[str]
    """Country name, city name, or ISO country code. Omit for worldwide trends."""


class TwitterTweetInput(TypedDict, total=False):
    """Input for Twitter Tweet."""

    url: Required[str]
    """Canonical x.com or twitter.com status URL with a numeric tweet ID, including /i/web/status and media-share variants."""


class TwitterTweetTranscriptInput(TypedDict, total=False):
    """Input for Twitter Tweet Transcript."""

    url: Required[str]
    """Tweet URL of the video to transcribe (e.g. https://x.com/TheoVon/status/1916982720317821050)."""


class TwitterUserPostsInput(TypedDict, total=False):
    """Input for X / Twitter User Posts."""

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor. Omit for the first page."""
    handle: Required[str]
    """Twitter/X handle without the leading @."""


class TwitterUserTweetsInput(TypedDict, total=False):
    """Input for X / Twitter User Tweets and Replies."""

    cursor: NotRequired[str]
    """Reserved for cursor-capable lanes. The current bulk lane returns nextCursor as null, so omit this field."""
    handle: Required[str]
    """Twitter/X handle without the leading @."""
    limit: NotRequired[int]
    """Maximum number of authored tweets and replies to return in the current bulk call (1-1000). The provider may return fewer results. Range: 1 to 1000. Default: 20."""
    requireSinglePage: NotRequired[bool]
    """Compatibility flag for requiring one response. The current lane already returns up to limit results in one bulk call, whether this is omitted or true."""


class TwitterArticleData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterCommunityData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterCommunityTweetsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterFollowersData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterFollowingData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterRepliesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterTrendsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterTweetData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterTweetTranscriptData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterUserPostsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterUserTweetsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class TwitterNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def article(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterArticleInput],
    ) -> BareRunResult[TwitterArticleData]:
        """X / Twitter Article

        Get a public X long-form article from its wrapper post URL, including its
        author, engagement, cover image, and structured content blocks.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.article(url="https://x.com/Decentralisedco/status/1905545699552375179")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.article", dict(input), options
        )
        return BareRunResult[TwitterArticleData].model_validate(raw)

    def community(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterCommunityInput],
    ) -> BareRunResult[TwitterCommunityData]:
        """Twitter Community

        Fetch a Twitter/X community's public details (name, description, member
        count, join policy) by URL, normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.twitter.community(url="https://x.com/i/communities/1926186499399139650")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.community", dict(input), options
        )
        return BareRunResult[TwitterCommunityData].model_validate(raw)

    def community_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterCommunityTweetsInput],
    ) -> BareRunResult[TwitterCommunityTweetsData]:
        """Twitter Community Tweets

        List recent tweets posted in a Twitter/X community by URL, normalized across
        providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.twitter.community_tweets(url="https://x.com/i/communities/1926186499399139650")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.community_tweets", dict(input), options
        )
        return BareRunResult[TwitterCommunityTweetsData].model_validate(raw)

    def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterFollowersInput],
    ) -> BareRunResult[TwitterFollowersData]:
        """X / Twitter Followers

        Fetch the follower list of any public X (Twitter) account by username with
        cursor pagination. Limit is a per-page maximum; native pages contain up to
        200 accounts unless requireSinglePage selects a bulk lane.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.followers(limit=200, username="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.followers", dict(input), options
        )
        return BareRunResult[TwitterFollowersData].model_validate(raw)

    def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterFollowingInput],
    ) -> BareRunResult[TwitterFollowingData]:
        """X / Twitter Following

        List the accounts a public X (Twitter) account follows by username with
        cursor pagination. Limit is a per-page maximum; native pages contain up to
        200 accounts unless requireSinglePage selects a bulk lane.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.following(limit=200, username="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.following", dict(input), options
        )
        return BareRunResult[TwitterFollowingData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterProfileInput],
    ) -> BareRunResult[TwitterProfileData]:
        """Twitter Profile

        Fetch a Twitter/X account's public profile (followers, tweets, bio,
        verification) by handle, normalized across providers with transparent
        failover.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.profile(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.profile", dict(input), options
        )
        return BareRunResult[TwitterProfileData].model_validate(raw)

    def replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterRepliesInput],
    ) -> BareRunResult[TwitterRepliesData]:
        """X / Twitter Post Replies

        Fetch the replies to any X (Twitter) post URL as structured records: author,
        text, and engagement.

        Price: $0.0025 per request plus $0.00025 per result (maximum $0.0125).

        Example:
            res = client.twitter.replies(limit=3, url="https://x.com/jack/status/20")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.replies", dict(input), options
        )
        return BareRunResult[TwitterRepliesData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterSearchInput],
    ) -> BareRunResult[TwitterSearchData]:
        """X / Twitter Search

        Search X (Twitter) with full advanced-search syntax (operators like from:,
        since:, until:, min_faves: work inline in the query) and get structured
        tweets with text, author, engagement, and cursor pagination. Limit is a
        per-page maximum; native pages contain approximately 20 tweets unless
        requireSinglePage selects a bulk lane.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.search(query="openai")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.search", dict(input), options
        )
        return BareRunResult[TwitterSearchData].model_validate(raw)

    def trends(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTrendsInput],
    ) -> BareRunResult[TwitterTrendsData]:
        """X / Twitter Trends

        Get current X (Twitter) trends for worldwide, a country, or a city in X
        ranking order, including the resolved location.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.trends(limit=10, location="US")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.trends", dict(input), options
        )
        return BareRunResult[TwitterTrendsData].model_validate(raw)

    def tweet(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTweetInput],
    ) -> BareRunResult[TwitterTweetData]:
        """Twitter Tweet

        Fetch a single Twitter/X tweet by URL with its full text and engagement
        counts (likes, retweets, replies, quotes, bookmarks, views), normalized
        across providers.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.tweet(url="https://x.com/SpaceX/status/1732824684683784516")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.tweet", dict(input), options
        )
        return BareRunResult[TwitterTweetData].model_validate(raw)

    def tweet_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTweetTranscriptInput],
    ) -> BareRunResult[TwitterTweetTranscriptData]:
        """Twitter Tweet Transcript

        Extract the spoken transcript from a Twitter/X video tweet by URL,
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.twitter.tweet_transcript(url="https://x.com/TheoVon/status/1916982720317821050")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.tweet_transcript", dict(input), options
        )
        return BareRunResult[TwitterTweetTranscriptData].model_validate(raw)

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterUserPostsInput],
    ) -> BareRunResult[TwitterUserPostsData]:
        """X / Twitter User Posts

        Get an X (Twitter) account's profile Posts-tab timeline by handle. Results
        follow profile order: a pinned post may appear first, followed by otherwise
        reverse-chronological authored posts, reposts, quotes, and self-thread
        continuations.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.user_posts(handle="levelsio")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.user_posts", dict(input), options
        )
        return BareRunResult[TwitterUserPostsData].model_validate(raw)

    def user_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterUserTweetsInput],
    ) -> BareRunResult[TwitterUserTweetsData]:
        """X / Twitter User Tweets and Replies

        Get up to the requested limit of tweets and replies authored by an X
        (Twitter) account in one bulk call, with engagement, views, and language.
        The current lane returns nextCursor as null; cursor is reserved for future
        cursor-capable lanes.

        Price: $0 per request plus $0.0002 per result (maximum $0.2).

        Example:
            res = client.twitter.user_tweets(handle="levelsio", limit=20)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.user_tweets", dict(input), options
        )
        return BareRunResult[TwitterUserTweetsData].model_validate(raw)


class AsyncTwitterNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def article(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterArticleInput],
    ) -> BareRunResult[TwitterArticleData]:
        """X / Twitter Article

        Get a public X long-form article from its wrapper post URL, including its
        author, engagement, cover image, and structured content blocks.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.article(url="https://x.com/Decentralisedco/status/1905545699552375179")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.article", dict(input), options
        )
        return BareRunResult[TwitterArticleData].model_validate(raw)

    async def community(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterCommunityInput],
    ) -> BareRunResult[TwitterCommunityData]:
        """Twitter Community

        Fetch a Twitter/X community's public details (name, description, member
        count, join policy) by URL, normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.twitter.community(url="https://x.com/i/communities/1926186499399139650")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.community", dict(input), options
        )
        return BareRunResult[TwitterCommunityData].model_validate(raw)

    async def community_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterCommunityTweetsInput],
    ) -> BareRunResult[TwitterCommunityTweetsData]:
        """Twitter Community Tweets

        List recent tweets posted in a Twitter/X community by URL, normalized across
        providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.twitter.community_tweets(url="https://x.com/i/communities/1926186499399139650")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.community_tweets", dict(input), options
        )
        return BareRunResult[TwitterCommunityTweetsData].model_validate(raw)

    async def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterFollowersInput],
    ) -> BareRunResult[TwitterFollowersData]:
        """X / Twitter Followers

        Fetch the follower list of any public X (Twitter) account by username with
        cursor pagination. Limit is a per-page maximum; native pages contain up to
        200 accounts unless requireSinglePage selects a bulk lane.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.followers(limit=200, username="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.followers", dict(input), options
        )
        return BareRunResult[TwitterFollowersData].model_validate(raw)

    async def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterFollowingInput],
    ) -> BareRunResult[TwitterFollowingData]:
        """X / Twitter Following

        List the accounts a public X (Twitter) account follows by username with
        cursor pagination. Limit is a per-page maximum; native pages contain up to
        200 accounts unless requireSinglePage selects a bulk lane.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.following(limit=200, username="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.following", dict(input), options
        )
        return BareRunResult[TwitterFollowingData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterProfileInput],
    ) -> BareRunResult[TwitterProfileData]:
        """Twitter Profile

        Fetch a Twitter/X account's public profile (followers, tweets, bio,
        verification) by handle, normalized across providers with transparent
        failover.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.profile(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.profile", dict(input), options
        )
        return BareRunResult[TwitterProfileData].model_validate(raw)

    async def replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterRepliesInput],
    ) -> BareRunResult[TwitterRepliesData]:
        """X / Twitter Post Replies

        Fetch the replies to any X (Twitter) post URL as structured records: author,
        text, and engagement.

        Price: $0.0025 per request plus $0.00025 per result (maximum $0.0125).

        Example:
            res = client.twitter.replies(limit=3, url="https://x.com/jack/status/20")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.replies", dict(input), options
        )
        return BareRunResult[TwitterRepliesData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterSearchInput],
    ) -> BareRunResult[TwitterSearchData]:
        """X / Twitter Search

        Search X (Twitter) with full advanced-search syntax (operators like from:,
        since:, until:, min_faves: work inline in the query) and get structured
        tweets with text, author, engagement, and cursor pagination. Limit is a
        per-page maximum; native pages contain approximately 20 tweets unless
        requireSinglePage selects a bulk lane.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.search(query="openai")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.search", dict(input), options
        )
        return BareRunResult[TwitterSearchData].model_validate(raw)

    async def trends(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTrendsInput],
    ) -> BareRunResult[TwitterTrendsData]:
        """X / Twitter Trends

        Get current X (Twitter) trends for worldwide, a country, or a city in X
        ranking order, including the resolved location.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.trends(limit=10, location="US")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.trends", dict(input), options
        )
        return BareRunResult[TwitterTrendsData].model_validate(raw)

    async def tweet(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTweetInput],
    ) -> BareRunResult[TwitterTweetData]:
        """Twitter Tweet

        Fetch a single Twitter/X tweet by URL with its full text and engagement
        counts (likes, retweets, replies, quotes, bookmarks, views), normalized
        across providers.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.tweet(url="https://x.com/SpaceX/status/1732824684683784516")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.tweet", dict(input), options
        )
        return BareRunResult[TwitterTweetData].model_validate(raw)

    async def tweet_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterTweetTranscriptInput],
    ) -> BareRunResult[TwitterTweetTranscriptData]:
        """Twitter Tweet Transcript

        Extract the spoken transcript from a Twitter/X video tweet by URL,
        normalized across providers with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.twitter.tweet_transcript(url="https://x.com/TheoVon/status/1916982720317821050")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.tweet_transcript", dict(input), options
        )
        return BareRunResult[TwitterTweetTranscriptData].model_validate(raw)

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterUserPostsInput],
    ) -> BareRunResult[TwitterUserPostsData]:
        """X / Twitter User Posts

        Get an X (Twitter) account's profile Posts-tab timeline by handle. Results
        follow profile order: a pinned post may appear first, followed by otherwise
        reverse-chronological authored posts, reposts, quotes, and self-thread
        continuations.

        Price: $0.00075 per request.

        Example:
            res = client.twitter.user_posts(handle="levelsio")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.user_posts", dict(input), options
        )
        return BareRunResult[TwitterUserPostsData].model_validate(raw)

    async def user_tweets(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TwitterUserTweetsInput],
    ) -> BareRunResult[TwitterUserTweetsData]:
        """X / Twitter User Tweets and Replies

        Get up to the requested limit of tweets and replies authored by an X
        (Twitter) account in one bulk call, with engagement, views, and language.
        The current lane returns nextCursor as null; cursor is reserved for future
        cursor-capable lanes.

        Price: $0 per request plus $0.0002 per result (maximum $0.2).

        Example:
            res = client.twitter.user_tweets(handle="levelsio", limit=20)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "twitter.user_tweets", dict(input), options
        )
        return BareRunResult[TwitterUserTweetsData].model_validate(raw)
