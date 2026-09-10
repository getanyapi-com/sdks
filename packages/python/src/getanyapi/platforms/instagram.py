# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the instagram platform."""

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


class InstagramAudioReelsInput(TypedDict, total=False):
    """Input for Instagram Reels by Audio."""

    audioId: Required[str]
    """Audio identifier from the Instagram audio page URL."""
    cursor: NotRequired[str]
    """Pagination cursor returned by a previous response."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramBasicProfileInput(TypedDict, total=False):
    """Input for Instagram Basic Profile."""

    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    userId: Required[str]
    """Instagram numeric user id."""


class InstagramCommentRepliesInput(TypedDict, total=False):
    """Input for Instagram Comment Replies."""

    commentId: Required[str]
    """Instagram comment ID (a comment's id from the Instagram Post Comments endpoint)."""
    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    url: Required[str]
    """Full Instagram post or reel URL the comment belongs to."""


class InstagramEmbedInput(TypedDict, total=False):
    """Input for Instagram Profile Embed."""

    handle: Required[str]
    """Instagram username without the leading @."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramFollowersInput(TypedDict, total=False):
    """Input for Instagram Followers."""

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of followers. A page holds up to 50 followers."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    username: Required[str]
    """The Instagram username, user ID, or profile URL whose followers to list (e.g. natgeo)."""


class InstagramFollowingInput(TypedDict, total=False):
    """Input for Instagram Following."""

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page. A page holds up to 50 accounts."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    username: Required[str]
    """The Instagram username, user ID, or profile URL whose following list to fetch (e.g. natgeo)."""


class InstagramHashtagAnalyticsInput(TypedDict, total=False):
    """Input for Instagram Hashtag Analytics."""

    hashtag: Required[str]
    """The Instagram hashtag to analyze, with or without the # symbol (e.g. streetphotography)."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramHashtagRecentPostsInput(TypedDict, total=False):
    """Input for Instagram Hashtag Recent Posts."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    hashtag: Required[str]
    """Hashtag to monitor, without the leading #."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramHashtagTopPostsInput(TypedDict, total=False):
    """Input for Instagram Hashtag Top Posts."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    hashtag: Required[str]
    """Hashtag to fetch, without the leading #."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramHighlightDetailInput(TypedDict, total=False):
    """Input for Instagram Highlight Detail."""

    id: Required[str]
    """The id of the highlight to retrieve details for."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramLocationPostsInput(TypedDict, total=False):
    """Input for Instagram Location Posts."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    locationId: Required[str]
    """Instagram location id, as returned by instagram.search_locations."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    sort: NotRequired[Literal["ranked", "recent"]]
    """Order the posts by Instagram's top ranking or by newest first. Defaults to ranked."""


class InstagramMediaTranscriptInput(TypedDict, total=False):
    """Input for Instagram Media Transcript."""

    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    url: Required[str]
    """Instagram post or reel URL."""


class InstagramPostInput(TypedDict, total=False):
    """Input for Instagram Post."""

    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    requirePlayCount: NotRequired[bool]
    """Set true to be served only by a source that reports a reel's play count. The default cheapest source does not carry play counts, so `plays` is absent from its responses; opting in guarantees the field when Instagram exposes it, at a higher price per request."""
    url: Required[str]
    """Full Instagram post or reel URL, carrying the media shortcode: /p/, /reel/, /reels/, or /tv/. A profile URL such as https://www.instagram.com/username names no post, so it is rejected instead of charged for an empty result."""


class InstagramPostCommentsInput(TypedDict, total=False):
    """Input for Instagram Post Comments."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    url: Required[str]
    """Full Instagram post or reel URL."""


class InstagramPostLikersInput(TypedDict, total=False):
    """Input for Instagram Post Likers."""

    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    url: Required[str]
    """Canonical URL of a public Instagram post or reel."""


class InstagramProfileInput(TypedDict, total=False):
    """Input for Instagram Profile."""

    handle: Required[str]
    """Instagram username without the leading @."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramProfileContactInput(TypedDict, total=False):
    """Input for Instagram Profile Contact Info."""

    handle: Required[str]
    """Instagram username without the leading @."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramReelTranscriptInput(TypedDict, total=False):
    """Input for Instagram Reel Transcript."""

    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    url: Required[str]
    """The URL of a public Instagram reel or video post with spoken audio (e.g. https://www.instagram.com/reel/C8yKXdRxKqK/)."""
    wordTimestamps: NotRequired[bool]
    """Set true to include a precise timestamp for every word in the transcript (e.g. true). Default: false."""


class InstagramReelsSearchInput(TypedDict, total=False):
    """Input for Instagram Reels Search."""

    datePosted: NotRequired[
        Literal["last-hour", "last-day", "last-week", "last-month", "last-year"]
    ]
    """Recency hint, not a hard filter. Reel discovery runs on top of Google search, so this window narrows Google's index by when it discovered or last crawled the reel, which is not the same as when the reel was published to Instagram. Returned reels can have a createdUtc outside the requested window, and narrow windows such as last-hour often return older reels or no results. Check createdUtc yourself if you need exact publication-time precision."""
    page: NotRequired[int]
    """1-based results page. Minimum: 1. Default: 1."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """Search keyword (e.g. "crossfit")."""


class InstagramSearchInput(TypedDict, total=False):
    """Input for Instagram Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). Range: 1 to 20."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """Keyword to search Instagram for; one or more words without special punctuation (e.g. coffee roastery)."""
    type: NotRequired[Literal["user", "hashtag", "place"]]
    """What to search for: user profiles, hashtags, or places (e.g. hashtag). Default: user."""


class InstagramSearchHashtagInput(TypedDict, total=False):
    """Input for Instagram Hashtag Search."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response."""
    datePosted: NotRequired[
        Literal["last-hour", "last-day", "last-week", "last-month", "last-year"]
    ]
    """Restrict results to posts published within this window."""
    hashtag: Required[str]
    """Hashtag to search, without the leading #."""
    mediaType: NotRequired[Literal["all", "reel"]]
    """Filter by media type. One of all, reel."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramSearchLocationsInput(TypedDict, total=False):
    """Input for Instagram Location Search."""

    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """Place name, address or city to search for."""


class InstagramSearchProfilesInput(TypedDict, total=False):
    """Input for Instagram Profile Search."""

    cursor: NotRequired[str]
    """Pagination cursor returned by a previous response."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    query: Required[str]
    """Bio or caption keyword/phrase to search for."""


class InstagramSimilarProfilesInput(TypedDict, total=False):
    """Input for Instagram Similar Profiles."""

    handle: Required[str]
    """Instagram username without the leading @."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramStoriesFullInput(TypedDict, total=False):
    """Input for Instagram Stories (full)."""

    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    username: Required[str]
    """Instagram username or handle without the @."""


class InstagramStoriesThinInput(TypedDict, total=False):
    """Input for Instagram Stories (basic)."""

    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    username: Required[str]
    """Instagram username/handle to fetch currently live stories for (without the @)."""


class InstagramTaggedPostsInput(TypedDict, total=False):
    """Input for Instagram Tagged Posts."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    handle: Required[str]
    """Instagram username without the leading @."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramTrendingReelsInput(TypedDict, total=False):
    """Input for Instagram Trending Reels."""

    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramUserHighlightsInput(TypedDict, total=False):
    """Input for Instagram User Highlights."""

    handle: Required[str]
    """Instagram username without the leading @."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    userId: NotRequired[str]
    """Instagram numeric user id (optional, faster than handle)."""


class InstagramUserPostsInput(TypedDict, total=False):
    """Input for Instagram User Posts."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    handle: Required[str]
    """Instagram username without the leading @."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class InstagramUserReelsInput(TypedDict, total=False):
    """Input for Instagram User Reels."""

    cursor: NotRequired[str]
    """Pagination cursor (max_id) from a previous response's nextCursor."""
    handle: NotRequired[str]
    """Instagram handle."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    userId: NotRequired[str]
    """Instagram user id (faster than handle when known)."""


class InstagramUserRepostsInput(TypedDict, total=False):
    """Input for Instagram User Reposts."""

    cursor: NotRequired[str]
    """Pagination cursor from a previous response's nextCursor."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    userId: Required[str]
    """Instagram's numeric account id, as returned by instagram.profile."""


class InstagramAudioReelsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    has_more: bool = Field(alias="hasMore")
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of reels, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    reels: list[InstagramAudioReelsReel] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramAudioReelsReel(BaseModel):
    model_config = ConfigDict(extra="allow")

    code: str
    comments: int
    handle: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    plays: int


class InstagramBasicProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(
        alias="avatarUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    bio: str
    display_name: str = Field(
        alias="displayName",
        description="Populated whenever the provider has data for the entity.",
    )
    external_url: str = Field(alias="externalUrl")
    followers: int
    following: int
    handle: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    private: bool
    user_id: str = Field(
        alias="userId",
        description="Populated whenever the provider has data for the entity.",
    )
    verified: bool


class InstagramCommentRepliesData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    comments: list[InstagramCommentRepliesComment] = Field(
        description="Replies to the requested comment, oldest first. Populated whenever the provider has data for the entity."
    )
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of replies, or null when this lane has no more. Pass it back as cursor to continue.",
    )


class InstagramCommentRepliesComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Username of the account that wrote the reply, without the @ prefix. Populated whenever the provider has data for the entity."
    )
    avatar_url: str | None = Field(
        default=None,
        alias="avatarUrl",
        description="URL of the replying account's profile avatar image.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="The reply's Instagram comment ID, as a string. Populated whenever the provider has data for the entity."
    )
    likes: int | None = Field(
        default=None,
        description="Number of likes on the reply. Omitted when no like count is reported for the reply.",
    )
    text: str = Field(
        description="The reply's text content. Populated whenever the provider has data for the entity."
    )
    verified: bool = Field(
        description="Whether the reply's author has a verified badge."
    )


class InstagramEmbedData(BaseModel):
    model_config = ConfigDict(extra="allow")

    html: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramFollowersData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    items: list[InstagramFollowersItem] = Field(
        description="Follower records for the target account. Populated whenever the provider has data for the entity."
    )
    next_cursor: str | None = Field(
        default=None,
        alias="nextCursor",
        description="Opaque cursor for the next page of followers, or null/empty when this lane has no more. Pass it back as cursor to continue.",
    )


class InstagramFollowersItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    handle: str = Field(
        description="The follower's username, without the @ prefix. Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="The follower's numeric Instagram user ID, as a string. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="URL of the follower's profile picture, with tracking query params stripped. Empty when the upstream omits it.",
    )
    name: str | None = Field(
        default=None,
        description="The follower's display name. Empty when the account has none.",
    )
    private: bool | None = Field(
        default=None, description="Whether the follower's account is private."
    )
    url: str | None = Field(
        default=None,
        description="Canonical URL of the follower's profile, with tracking query params stripped. Empty when the lane does not return it.",
    )
    verified: bool | None = Field(
        default=None, description="Whether the follower's account is verified."
    )


class InstagramFollowingData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    items: list[InstagramFollowingItem] = Field(
        description="Records for the accounts the target user follows. Populated whenever the provider has data for the entity."
    )
    next_cursor: str | None = Field(
        default=None,
        alias="nextCursor",
        description="Opaque cursor for the next page of results, or null/empty when this lane has no more. Pass it back as cursor to continue.",
    )


class InstagramFollowingItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    handle: str = Field(
        description="The followed account's username, without the @ prefix. Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="The followed account's numeric Instagram user ID, as a string. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="URL of the followed account's profile picture, with tracking query params stripped. Empty when the upstream omits it.",
    )
    name: str | None = Field(
        default=None,
        description="The followed account's display name. Empty when the account has none.",
    )
    private: bool | None = Field(
        default=None, description="Whether the followed account is private."
    )
    url: str | None = Field(
        default=None,
        description="Canonical URL of the followed account's profile, with tracking query params stripped. Empty when the lane does not return it.",
    )
    verified: bool | None = Field(
        default=None, description="Whether the followed account is verified."
    )


class InstagramHashtagAnalyticsData(BaseModel):
    items: list[InstagramHashtagAnalyticsItem] = Field(
        description="Hashtag analytics records: hashtag name, total post count, and related hashtag suggestions. Populated whenever the provider has data for the entity."
    )


class InstagramHashtagAnalyticsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    difficulty: str | None = None
    id: str | None = Field(
        default=None,
        description="Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    name: str = Field(
        description="Hashtag (without #). Populated whenever the provider has data for the entity."
    )
    posts_count: int | None = Field(
        default=None, alias="postsCount", description="Total posts using the hashtag."
    )
    posts_formatted: str | None = Field(
        default=None,
        alias="postsFormatted",
        description="Human-formatted post count (e.g. 793.54 M). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramHashtagRecentPostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    posts: list[InstagramHashtagRecentPostsPost] = Field(
        description="Posts under the hashtag, newest first. Engagement counts are usually zero because the posts are minutes old. Populated whenever the provider has data for the entity."
    )


class InstagramHashtagRecentPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    caption: str = Field(
        description="Post caption text, including its hashtags. Populated whenever the provider has data for the entity."
    )
    carousel_count: int | None = Field(
        default=None,
        alias="carouselCount",
        description="Number of items in the carousel. Absent on a single-image post.",
    )
    comments: int | None = Field(
        default=None, description="Comment count. Usually zero on a post this new."
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    hashtags: list[str] | None = Field(
        default=None,
        description="Hashtags carried in the caption, each including its leading #. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    id: str = Field(
        description="Instagram media id. Populated whenever the provider has data for the entity."
    )
    likes: int | None = Field(
        default=None, description="Like count. Usually zero on a post this new."
    )
    location_lat: float | None = Field(
        default=None, alias="locationLat", description="Latitude of the tagged place."
    )
    location_lng: float | None = Field(
        default=None, alias="locationLng", description="Longitude of the tagged place."
    )
    location_name: str | None = Field(
        default=None,
        alias="locationName",
        description="Place name tagged on the post. Absent when the poster tagged none, which is most posts.",
    )
    media: list[InstagramHashtagRecentPostsMedia] | None = Field(
        default=None,
        description="Cover media for the post. A carousel reports its full size in carouselCount.",
    )
    shortcode: str = Field(
        description="Short code in the post permalink. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical permalink to the post. Populated whenever the provider has data for the entity."
    )
    username: str = Field(
        description="Username of the account that posted. Populated whenever the provider has data for the entity."
    )


class InstagramHashtagRecentPostsMedia(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    type_: str = Field(
        alias="type",
        description="One of photo or video. Videos are rare in this feed; Instagram keeps reels on a separate tab.",
    )
    url: str = Field(description="Image URL. For a video this is the cover frame.")


class InstagramHashtagTopPostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    posts: list[InstagramHashtagTopPostsPost] = Field(
        description="Top-ranked posts for the hashtag, ordered by Instagram's engagement model rather than by time. Populated whenever the provider has data for the entity."
    )


class InstagramHashtagTopPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str | None = Field(
        default=None,
        alias="avatarUrl",
        description="Profile picture URL of the posting account. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    caption: str = Field(
        description="Post caption text, including its hashtags. Populated whenever the provider has data for the entity."
    )
    comments: int | None = Field(default=None, description="Comment count.")
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    duration_seconds: float | None = Field(
        default=None,
        alias="durationSeconds",
        description="Video duration in seconds. Absent on photo posts.",
    )
    id: str = Field(
        description="Instagram media id. Populated whenever the provider has data for the entity."
    )
    likes: int | None = Field(
        default=None, description="Like count. Absent when the account hides it."
    )
    media: list[InstagramHashtagTopPostsMedia] | None = Field(
        default=None, description="Photo and video attachments on the post."
    )
    shortcode: str = Field(
        description="Short code in the post permalink. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical permalink to the post. Populated whenever the provider has data for the entity."
    )
    username: str = Field(
        description="Username of the account that posted. Populated whenever the provider has data for the entity."
    )
    verified: bool | None = Field(
        default=None, description="True when the posting account is verified."
    )
    views: int | None = Field(
        default=None, description="Play count. Present on video posts."
    )


class InstagramHashtagTopPostsMedia(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    type_: str = Field(alias="type", description="One of photo or video.")
    url: str = Field(description="Image URL. For a video this is the cover frame.")
    video_url: str | None = Field(
        default=None,
        alias="videoUrl",
        description="Playable video file URL. Present only for video items.",
    )


class InstagramHighlightDetailData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    cover_url: str = Field(
        alias="coverUrl",
        description="URL of the highlight cover image. Populated whenever the provider has data for the entity.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="Highlight identifier. Populated whenever the provider has data for the entity."
    )
    media_count: int = Field(
        alias="mediaCount", description="Number of media items in the highlight."
    )
    owner_handle: str = Field(
        alias="ownerHandle",
        description="Handle of the account that owns the highlight. Populated whenever the provider has data for the entity.",
    )
    title: str = Field(
        description="Highlight title. Populated whenever the provider has data for the entity."
    )


class InstagramLocationPostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of posts, or null when there are no more. Pass it back as cursor to continue.",
    )
    posts: list[InstagramLocationPostsPost] = Field(
        description="Public posts tagged at the location. Populated whenever the provider has data for the entity."
    )


class InstagramLocationPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    alt_text: str | None = Field(
        default=None,
        alias="altText",
        description="Instagram's generated accessibility description of the media.",
    )
    author: str = Field(
        description="Username of the account that posted it, without the leading @. Populated whenever the provider has data for the entity."
    )
    author_id: str | None = Field(
        default=None,
        alias="authorId",
        description="The author's numeric Instagram account id, as a string.",
    )
    author_private: bool | None = Field(
        default=None,
        alias="authorPrivate",
        description="Whether the author's account is private.",
    )
    author_verified: bool | None = Field(
        default=None,
        alias="authorVerified",
        description="Whether the author carries Instagram's verified badge.",
    )
    avatar_url: str | None = Field(
        default=None,
        alias="avatarUrl",
        description="Author's profile picture URL, as Instagram's CDN serves it.",
    )
    caption: str = Field(description="Post caption text.")
    caption_edited: bool | None = Field(
        default=None,
        alias="captionEdited",
        description="Whether the caption has been edited since posting.",
    )
    carousel_count: int | None = Field(
        default=None,
        alias="carouselCount",
        description="Number of slides, present on carousel posts only.",
    )
    coauthors: list[InstagramLocationPostsCoauthor] | None = Field(
        default=None, description="Accounts listed as coauthors of the post."
    )
    comments: int = Field(description="Number of comments on the post.")
    counts_hidden: bool | None = Field(
        default=None,
        alias="countsHidden",
        description="Whether the author has hidden the like and view counts.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    has_audio: bool | None = Field(
        default=None,
        alias="hasAudio",
        description="Whether the video carries an audio track.",
    )
    height: int | None = Field(default=None, description="Media height in pixels.")
    id: str = Field(
        description="The post's numeric Instagram media ID, as a string. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="Post image or video thumbnail URL, as Instagram's CDN serves it. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    likes: int = Field(description="Number of likes on the post.")
    location_id: str | None = Field(
        default=None,
        alias="locationId",
        description="Instagram location id the post is tagged at.",
    )
    location_lat: float | None = Field(
        default=None,
        alias="locationLat",
        description="Latitude of the tagged location, in decimal degrees.",
    )
    location_lng: float | None = Field(
        default=None,
        alias="locationLng",
        description="Longitude of the tagged location, in decimal degrees.",
    )
    location_name: str | None = Field(
        default=None,
        alias="locationName",
        description="Name of the location the post is tagged at.",
    )
    media_type: str | None = Field(
        default=None,
        alias="mediaType",
        description="What the post is: photo, video or carousel.",
    )
    paid_partnership: bool | None = Field(
        default=None,
        alias="paidPartnership",
        description="Whether the post is tagged as a paid partnership.",
    )
    product_type: str | None = Field(
        default=None,
        alias="productType",
        description="Instagram's own surface label for the post, such as feed, clips or carousel_container.",
    )
    shortcode: str | None = Field(
        default=None,
        description="The post's short code, the segment Instagram puts in its URL.",
    )
    tagged_users: list[InstagramLocationPostsTaggedUser] | None = Field(
        default=None, alias="taggedUsers", description="Accounts tagged in the media."
    )
    url: str = Field(
        description="Canonical URL of the post. Populated whenever the provider has data for the entity."
    )
    video_url: str | None = Field(
        default=None,
        alias="videoUrl",
        description="Direct video file URL, present on video posts and reels only.",
    )
    width: int | None = Field(default=None, description="Media width in pixels.")


class InstagramLocationPostsCoauthor(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str | None = Field(
        default=None,
        alias="avatarUrl",
        description="Coauthor's profile picture URL, as Instagram's CDN serves it.",
    )
    user_id: str | None = Field(
        default=None,
        alias="userId",
        description="Instagram's numeric account id, as a string.",
    )
    username: str = Field(description="Instagram username without the leading @.")


class InstagramLocationPostsTaggedUser(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    display_name: str | None = Field(
        default=None, alias="displayName", description="Account display name."
    )
    user_id: str | None = Field(
        default=None,
        alias="userId",
        description="Instagram's numeric account id, as a string.",
    )
    username: str = Field(description="Instagram username without the leading @.")


class InstagramMediaTranscriptData(BaseModel):
    transcripts: list[InstagramMediaTranscriptTranscript] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramMediaTranscriptTranscript(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    shortcode: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    text: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramPostData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    display_url: str = Field(
        alias="displayUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    owner: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    plays: int | None = Field(
        default=None,
        description="Number of plays of the reel or video. Absent when Instagram does not expose a play count for this media, and on lanes that cannot serve it.",
    )
    shortcode: str
    type_: str = Field(alias="type")
    video_url: str = Field(alias="videoUrl")


class InstagramPostCommentsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    comments: list[InstagramPostCommentsComment] = Field(
        description="Populated whenever the provider has data for the entity."
    )
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.",
    )


class InstagramPostCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    avatar_url: str | None = Field(
        default=None,
        alias="avatarUrl",
        description="URL of the commenting account's profile avatar image.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    text: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    verified: bool


class InstagramPostLikersData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    likers: list[InstagramPostLikersLiker] = Field(
        description="One page of accounts that liked the post. A single call returns one page; it does not walk the whole liker list. Populated whenever the provider has data for the entity."
    )
    total_likes: int = Field(
        alias="totalLikes",
        description="Total number of likes on the post, which can exceed the number of likers returned in this page.",
    )


class InstagramPostLikersLiker(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(
        alias="avatarUrl",
        description="Profile picture URL, as Instagram's CDN serves it.",
    )
    display_name: str = Field(alias="displayName", description="Account display name.")
    latest_story_utc: float | None = Field(
        default=None,
        alias="latestStoryUtc",
        description="Timestamp of the account's most recent story. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    private: bool = Field(description="Whether the account is private.")
    user_id: str = Field(
        alias="userId", description="Instagram's numeric account id, as a string."
    )
    username: str = Field(
        description="Instagram username without the leading @. Populated whenever the provider has data for the entity."
    )
    verified: bool = Field(
        description="Whether the account carries Instagram's verified badge."
    )


class InstagramProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(
        alias="avatarUrl",
        description="Profile picture URL at the highest resolution the account exposes. Populated whenever the provider has data for the entity.",
    )
    bio: str = Field(
        description="Profile biography text. Populated whenever the provider has data for the entity."
    )
    bio_links: list[InstagramProfileBioLink] | None = Field(
        default=None,
        alias="bioLinks",
        description="Every link the account publishes in its bio, in the order Instagram returns them. Business accounts often list several here while externalUrl carries only the first. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    category: str | None = Field(
        default=None,
        description='Instagram\'s category label for the account (for example "Government Agencies" or "Coffee shop"). Absent when the account publishes no category. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.',
    )
    contact_method: str | None = Field(
        default=None,
        alias="contactMethod",
        description="The contact button Instagram shows on the profile, for example CALL, TEXT, EMAIL, or UNKNOWN. Absent when the account exposes no contact button. Instagram no longer publishes the underlying email or phone number to unauthenticated callers.",
    )
    display_name: str = Field(
        alias="displayName",
        description="Account display name. Populated whenever the provider has data for the entity.",
    )
    external_url: str | None = Field(
        default=None,
        alias="externalUrl",
        description="The single website link on the profile. Absent when the account publishes no link. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    followers: int = Field(description="Follower count.")
    following: int = Field(description="Number of accounts this account follows.")
    handle: str = Field(
        description="Instagram username without the leading @. Populated whenever the provider has data for the entity."
    )
    is_business: bool | None = Field(
        default=None,
        alias="isBusiness",
        description="Whether Instagram flags the account as a business account.",
    )
    posts: int = Field(description="Number of posts on the account.")
    private: bool = Field(description="Whether the account is private.")
    user_id: str | None = Field(
        default=None,
        alias="userId",
        description="Instagram's numeric account id, as a string. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    verified: bool = Field(
        description="Whether the account carries Instagram's verified badge."
    )


class InstagramProfileBioLink(BaseModel):
    model_config = ConfigDict(extra="allow")

    title: str | None = Field(
        default=None,
        description="Display label for the link, empty when the account set none.",
    )
    url: str = Field(
        description="Destination URL, exactly as the account published it."
    )


class InstagramProfileContactData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    bio: str | None = Field(default=None, description="Profile biography text.")
    display_name: str | None = Field(
        default=None, alias="displayName", description="Account display name."
    )
    emails: list[str] = Field(
        description="Every email address found for the account: the contact-button address plus any address written into the bio, deduplicated. Empty when the account publishes none. Populated whenever the provider has data for the entity."
    )
    external_url: str | None = Field(
        default=None,
        alias="externalUrl",
        description="The website link on the profile. Absent when the account publishes no link.",
    )
    handle: str = Field(
        description="Instagram username without the leading @. Populated whenever the provider has data for the entity."
    )
    phones: list[str] | None = Field(
        default=None,
        description="Every phone number found for the account, in E.164 form where the number could be normalized. Empty when the account publishes none.",
    )
    private: bool | None = Field(
        default=None, description="Whether the account is private."
    )
    public_email: str | None = Field(
        default=None,
        alias="publicEmail",
        description="The address behind the profile's Email contact button, as the account owner entered it. Absent when the account publishes no contact email. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    public_phone: str | None = Field(
        default=None,
        alias="publicPhone",
        description="The number behind the profile's Call or Text contact button, as the account owner entered it. Absent when the account publishes no contact phone.",
    )
    verified: bool | None = Field(
        default=None,
        description="Whether the account carries Instagram's verified badge.",
    )


class InstagramReelTranscriptData(BaseModel):
    items: list[InstagramReelTranscriptItem] = Field(
        description="Transcript record for the requested reel (one item), with the full transcript text, timed segments, and source video metadata. Populated whenever the provider has data for the entity."
    )


class InstagramReelTranscriptItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    caption: str | None = Field(
        default=None,
        description="The reel's caption text. Empty when the reel has no caption.",
    )
    comment_count: int | None = Field(
        default=None,
        alias="commentCount",
        description="Number of comments on the reel.",
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    duration_seconds: float | None = Field(
        default=None, alias="durationSeconds", description="Video duration in seconds."
    )
    id: str = Field(
        description="The reel's numeric Instagram media ID, as a string. Populated whenever the provider has data for the entity."
    )
    language: str | None = Field(
        default=None,
        description='Detected spoken language (ISO 639-1 code, e.g. "en"). Empty when the upstream omits it.',
    )
    like_count: int | None = Field(
        default=None, alias="likeCount", description="Number of likes on the reel."
    )
    owner_username: str | None = Field(
        default=None,
        alias="ownerUsername",
        description="Username of the reel's owner, without the @ prefix. Empty when the upstream omits it.",
    )
    segments: list[InstagramReelTranscriptSegment] | None = Field(
        default=None,
        description="Time-aligned transcript segments, each with its text and start/end offsets in seconds.",
    )
    text: str = Field(
        description="The full speech transcript. Empty when the reel has no detectable spoken audio. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical URL of the reel, with tracking query params stripped. Populated whenever the provider has data for the entity."
    )
    view_count: int | None = Field(
        default=None, alias="viewCount", description="Number of video views."
    )


class InstagramReelTranscriptSegment(BaseModel):
    model_config = ConfigDict(extra="allow")

    end: float | None = Field(
        default=None,
        description="Segment end offset in seconds from the start of the video.",
    )
    start: float | None = Field(
        default=None,
        description="Segment start offset in seconds from the start of the video.",
    )
    text: str | None = Field(
        default=None, description="The segment's transcribed text."
    )


class InstagramReelsSearchData(BaseModel):
    reels: list[InstagramReelsSearchReel] = Field(
        description="Reels matching the search. Populated whenever the provider has data for the entity."
    )


class InstagramReelsSearchReel(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    caption: str = Field(
        description="Reel caption text. Populated whenever the provider has data for the entity."
    )
    comments: int = Field(description="Number of comments on the reel.")
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    duration_seconds: float = Field(
        alias="durationSeconds", description="Reel duration in seconds."
    )
    likes: int = Field(description="Number of likes on the reel.")
    paid_partnership: bool = Field(
        alias="paidPartnership", description="True when the reel is a paid partnership."
    )
    shortcode: str = Field(
        description="Instagram media shortcode. Populated whenever the provider has data for the entity."
    )
    thumbnail: str = Field(
        description="URL of the reel thumbnail image. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical URL of the reel. Populated whenever the provider has data for the entity."
    )
    username: str = Field(
        description="Username of the account that posted the reel. Populated whenever the provider has data for the entity."
    )
    verified: bool = Field(description="True when the posting account is verified.")


class InstagramSearchData(BaseModel):
    items: list[InstagramSearchItem] = Field(
        description="Matching Instagram profile records for the query. Populated whenever the provider has data for the entity."
    )


class InstagramSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    bio: str | None = Field(
        default=None,
        description="The account's bio text. Empty when the account has none.",
    )
    followers: int | None = Field(
        default=None,
        description="The account's follower count. May be 0 when the lane does not return it in search results.",
    )
    following: int | None = Field(
        default=None,
        description="The number of accounts the account follows. May be 0 when the lane does not return it in search results.",
    )
    handle: str = Field(
        description="The account's username, without the @ prefix. Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="The account's numeric Instagram user ID, as a string. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="URL of the account's profile picture, with tracking query params stripped. Empty when the upstream omits it.",
    )
    name: str | None = Field(
        default=None,
        description="The account's display name. Empty when the account has none.",
    )
    posts_count: int | None = Field(
        default=None,
        alias="postsCount",
        description="The account's post count. May be 0 when the lane does not return it in search results.",
    )
    url: str = Field(
        description="Canonical URL of the account's profile, with tracking query params stripped. Populated whenever the provider has data for the entity."
    )
    verified: bool | None = Field(
        default=None, description="Whether the account is verified."
    )


class InstagramSearchHashtagData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    posts: list[InstagramSearchHashtagPost] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramSearchHashtagPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str | None = Field(
        default=None,
        alias="avatarUrl",
        description="Profile picture URL of the posting account.",
    )
    caption: str = Field(description="Post caption text, including its hashtags.")
    comments: int | None = Field(default=None, description="Comment count.")
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    display_url: str = Field(
        alias="displayUrl",
        description="Poster image URL. For a video this is the cover frame. Populated whenever the provider has data for the entity.",
    )
    duration_seconds: float | None = Field(
        default=None,
        alias="durationSeconds",
        description="Video duration in seconds. Absent on photo posts.",
    )
    id: str = Field(
        description="Instagram media id. Populated whenever the provider has data for the entity."
    )
    is_ad: bool | None = Field(
        default=None,
        alias="isAd",
        description="True when the post is a paid advertisement.",
    )
    likes: int | None = Field(
        default=None, description="Like count. Absent when the account hides it."
    )
    shortcode: str = Field(
        description="Short code in the post permalink. Populated whenever the provider has data for the entity."
    )
    type_: str = Field(
        alias="type",
        description="Instagram media typename, for example XDTGraphVideo or XDTGraphImage.",
    )
    url: str = Field(
        description="Canonical permalink to the post. Populated whenever the provider has data for the entity."
    )
    username: str | None = Field(
        default=None,
        description="Username of the account that posted. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    verified: bool | None = Field(
        default=None, description="True when the posting account is verified."
    )
    video_url: str | None = Field(
        default=None,
        alias="videoUrl",
        description="Playable video file URL. Present only on video posts.",
    )


class InstagramSearchLocationsData(BaseModel):
    locations: list[InstagramSearchLocationsLocation] = Field(
        description="Instagram locations matching the keyword, best match first. Populated whenever the provider has data for the entity."
    )


class InstagramSearchLocationsLocation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address: str | None = Field(
        default=None, description="Street address of the place."
    )
    city: str | None = Field(default=None, description="City the place sits in.")
    id: str = Field(
        description="Instagram location id. Pass it to instagram.location_posts as locationId. Populated whenever the provider has data for the entity."
    )
    latitude: float = Field(description="Latitude in decimal degrees.")
    longitude: float = Field(description="Longitude in decimal degrees.")
    name: str = Field(
        description="Full place name, usually including city and country. Populated whenever the provider has data for the entity."
    )
    short_name: str | None = Field(
        default=None,
        alias="shortName",
        description="Place name without the city and country suffix.",
    )


class InstagramSearchProfilesData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of profiles, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    profiles: list[InstagramSearchProfilesProfile] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramSearchProfilesProfile(BaseModel):
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
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    posts: int
    private: bool
    verified: bool


class InstagramSimilarProfilesData(BaseModel):
    profiles: list[InstagramSimilarProfilesProfile] = Field(
        description="Accounts Instagram recommends as similar to the requested profile. Populated whenever the provider has data for the entity."
    )


class InstagramSimilarProfilesProfile(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str = Field(
        alias="avatarUrl",
        description="Profile picture URL, as Instagram's CDN serves it.",
    )
    display_name: str = Field(alias="displayName", description="Account display name.")
    private: bool = Field(description="Whether the account is private.")
    user_id: str = Field(
        alias="userId", description="Instagram's numeric account id, as a string."
    )
    username: str = Field(
        description="Instagram username without the leading @. Populated whenever the provider has data for the entity."
    )
    verified: bool = Field(
        description="Whether the account carries Instagram's verified badge."
    )


class InstagramStoriesFullData(BaseModel):
    items: list[InstagramStoriesFullItem] = Field(
        description="Currently live story records for the requested account, with media, type, dimensions, posting time, and expiry. Populated whenever the provider has data for the entity."
    )


class InstagramStoriesFullItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    code: str | None = Field(
        default=None,
        description="Instagram media shortcode. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    expires_utc: float | None = Field(
        default=None,
        alias="expiresUtc",
        description="Expiry UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    height: int | None = Field(
        default=None,
        description="Media pixel height. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    id: str = Field(
        description="Story identifier. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="Direct URL to the story image (highest resolution). Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    media_type: int | None = Field(
        default=None,
        alias="mediaType",
        description="Media type: 1 = image, 2 = video. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    username: str | None = Field(
        default=None,
        description="Owner username. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    video_url: str | None = Field(
        default=None,
        alias="videoUrl",
        description="Direct URL to the story video, when the story is a video. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    width: int | None = Field(
        default=None,
        description="Media pixel width. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )


class InstagramStoriesThinData(BaseModel):
    items: list[InstagramStoriesThinItem] = Field(
        description="The account's currently live stories, each with its media URL, owner, posting time, and permalink. Populated whenever the provider has data for the entity."
    )


class InstagramStoriesThinItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    created_utc: float | None = Field(
        default=None, alias="createdUtc", description="Posting time (Unix seconds)."
    )
    id: str = Field(
        description="Story identifier. Populated whenever the provider has data for the entity."
    )
    media_url: str | None = Field(
        default=None,
        alias="mediaUrl",
        description="Direct URL to the story image or video. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    permalink: str | None = Field(
        default=None,
        description="Public link to the story. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    username: str | None = Field(
        default=None,
        description="Owner username. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )


class InstagramTaggedPostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of tagged posts, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    posts: list[InstagramTaggedPostsPost] = Field(
        description="Posts that tag the requested account, newest first. Populated whenever the provider has data for the entity."
    )


class InstagramTaggedPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author: str = Field(
        description="Username of the account that posted and applied the tag, without the @ prefix. Populated whenever the provider has data for the entity."
    )
    avatar_url: str | None = Field(
        default=None,
        alias="avatarUrl",
        description="URL of the posting account's profile avatar image.",
    )
    caption: str = Field(
        description="The post's caption text. Empty when the post has none. Populated whenever the provider has data for the entity."
    )
    comments: int = Field(description="Number of comments on the post.")
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    id: str = Field(
        description="The post's numeric Instagram media ID, as a string. Populated whenever the provider has data for the entity."
    )
    likes: int = Field(description="Number of likes on the post.")
    url: str = Field(
        description="Canonical URL of the post, with tracking query params stripped. Populated whenever the provider has data for the entity."
    )


class InstagramTrendingReelsData(BaseModel):
    reels: list[InstagramTrendingReelsReel] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramTrendingReelsReel(BaseModel):
    model_config = ConfigDict(extra="allow")

    caption: str
    comments: int
    handle: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    likes: int
    shortcode: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramUserHighlightsData(BaseModel):
    highlights: list[InstagramUserHighlightsHighlight] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramUserHighlightsHighlight(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    cover_url: str = Field(
        alias="coverUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    owner_handle: str = Field(
        alias="ownerHandle",
        description="Populated whenever the provider has data for the entity.",
    )
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramUserPostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    posts: list[InstagramUserPostsPost] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramUserPostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    caption: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    comments: int
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    duration_seconds: float | None = Field(
        default=None,
        alias="durationSeconds",
        description="Video duration in seconds. Absent on photo posts.",
    )
    id: str = Field(
        description="Instagram media id. Populated whenever the provider has data for the entity."
    )
    likes: int
    media: list[InstagramUserPostsMedia] | None = Field(
        default=None,
        description="Photo, video, and GIF attachments on the post. Empty when the post has none.",
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    username: str = Field(
        description="Username of the account that posted. A profile feed includes collaborator posts, so this is not always the requested handle. Populated whenever the provider has data for the entity."
    )
    verified: bool = Field(description="True when the posting account is verified.")


class InstagramUserPostsMedia(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    height: int | None = Field(
        default=None,
        description="Pixel height of the media item, when the lane reports it.",
    )
    type_: str = Field(alias="type", description="One of photo, video, or gif.")
    url: str = Field(
        description="Image URL. For a video or GIF this is the poster/thumbnail frame."
    )
    video_url: str | None = Field(
        default=None,
        alias="videoUrl",
        description="Playable video file URL. Present only for video and gif items.",
    )
    width: int | None = Field(
        default=None,
        description="Pixel width of the media item, when the lane reports it.",
    )


class InstagramUserReelsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of reels, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    reels: list[InstagramUserReelsReel] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class InstagramUserReelsReel(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    caption: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    comments: int
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    duration_seconds: float = Field(
        alias="durationSeconds", description="Reel duration in seconds."
    )
    id: str = Field(
        description="Instagram media id. Populated whenever the provider has data for the entity."
    )
    likes: int
    media: list[InstagramUserReelsMedia] | None = Field(
        default=None,
        description="Photo, video, and GIF attachments on the post. Empty when the post has none.",
    )
    shortcode: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    username: str = Field(
        description="Username of the account that posted the reel. A reels tab includes collaborator reels, so this is not always the requested handle. Populated whenever the provider has data for the entity."
    )
    verified: bool = Field(description="True when the posting account is verified.")
    views: int


class InstagramUserReelsMedia(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    height: int | None = Field(
        default=None,
        description="Pixel height of the media item, when the lane reports it.",
    )
    type_: str = Field(alias="type", description="One of photo, video, or gif.")
    url: str = Field(
        description="Image URL. For a video or GIF this is the poster/thumbnail frame."
    )
    video_url: str | None = Field(
        default=None,
        alias="videoUrl",
        description="Playable video file URL. Present only for video and gif items.",
    )
    width: int | None = Field(
        default=None,
        description="Pixel width of the media item, when the lane reports it.",
    )


class InstagramUserRepostsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of reposts, or null when there are no more. Pass it back as cursor to continue.",
    )
    posts: list[InstagramUserRepostsPost] = Field(
        description="Posts the account has reposted to its feed, newest first. Populated whenever the provider has data for the entity."
    )


class InstagramUserRepostsPost(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    alt_text: str | None = Field(
        default=None,
        alias="altText",
        description="Instagram's generated accessibility description of the media.",
    )
    author: str = Field(
        description="Username of the account that posted it, without the leading @. Populated whenever the provider has data for the entity."
    )
    author_id: str | None = Field(
        default=None,
        alias="authorId",
        description="The author's numeric Instagram account id, as a string.",
    )
    author_name: str | None = Field(
        default=None, alias="authorName", description="The author's display name."
    )
    author_private: bool | None = Field(
        default=None,
        alias="authorPrivate",
        description="Whether the author's account is private.",
    )
    author_verified: bool | None = Field(
        default=None,
        alias="authorVerified",
        description="Whether the author carries Instagram's verified badge.",
    )
    avatar_url: str | None = Field(
        default=None,
        alias="avatarUrl",
        description="Author's profile picture URL, as Instagram's CDN serves it.",
    )
    caption: str = Field(description="Post caption text.")
    caption_edited: bool | None = Field(
        default=None,
        alias="captionEdited",
        description="Whether the caption has been edited since posting.",
    )
    carousel_count: int | None = Field(
        default=None,
        alias="carouselCount",
        description="Number of slides, present on carousel posts only.",
    )
    coauthors: list[InstagramUserRepostsCoauthor] | None = Field(
        default=None, description="Accounts listed as coauthors of the post."
    )
    comments: int = Field(description="Number of comments on the post.")
    counts_hidden: bool | None = Field(
        default=None,
        alias="countsHidden",
        description="Whether the author has hidden the like and view counts.",
    )
    created_utc: float = Field(
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    has_audio: bool | None = Field(
        default=None,
        alias="hasAudio",
        description="Whether the video carries an audio track.",
    )
    height: int | None = Field(default=None, description="Media height in pixels.")
    id: str = Field(
        description="The post's numeric Instagram media ID, as a string. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="Post image or video thumbnail URL, as Instagram's CDN serves it. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    likes: int = Field(description="Number of likes on the post.")
    location_id: str | None = Field(
        default=None,
        alias="locationId",
        description="Instagram location id the post is tagged at.",
    )
    location_lat: float | None = Field(
        default=None,
        alias="locationLat",
        description="Latitude of the tagged location, in decimal degrees.",
    )
    location_lng: float | None = Field(
        default=None,
        alias="locationLng",
        description="Longitude of the tagged location, in decimal degrees.",
    )
    location_name: str | None = Field(
        default=None,
        alias="locationName",
        description="Name of the location the post is tagged at.",
    )
    media_type: str | None = Field(
        default=None,
        alias="mediaType",
        description="What the post is: photo, video or carousel.",
    )
    paid_partnership: bool | None = Field(
        default=None,
        alias="paidPartnership",
        description="Whether the post is tagged as a paid partnership.",
    )
    product_type: str | None = Field(
        default=None,
        alias="productType",
        description="Instagram's own surface label for the post, such as feed, clips or carousel_container.",
    )
    reshares: int | None = Field(
        default=None,
        description="Number of times the post has been reshared, when Instagram reports it.",
    )
    shortcode: str | None = Field(
        default=None,
        description="The post's short code, the segment Instagram puts in its URL.",
    )
    tagged_users: list[InstagramUserRepostsTaggedUser] | None = Field(
        default=None, alias="taggedUsers", description="Accounts tagged in the media."
    )
    url: str = Field(
        description="Canonical URL of the post. Populated whenever the provider has data for the entity."
    )
    video_duration_seconds: float | None = Field(
        default=None,
        alias="videoDurationSeconds",
        description="Video length in seconds, present on video posts and reels only.",
    )
    video_url: str | None = Field(
        default=None,
        alias="videoUrl",
        description="Direct video file URL, present on video posts and reels only.",
    )
    views: int | None = Field(
        default=None, description="Play count, present on video posts and reels only."
    )
    width: int | None = Field(default=None, description="Media width in pixels.")


class InstagramUserRepostsCoauthor(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    display_name: str | None = Field(
        default=None, alias="displayName", description="Account display name."
    )
    user_id: str | None = Field(
        default=None,
        alias="userId",
        description="Instagram's numeric account id, as a string.",
    )
    username: str = Field(description="Instagram username without the leading @.")
    verified: bool | None = Field(
        default=None,
        description="Whether the account carries Instagram's verified badge.",
    )


class InstagramUserRepostsTaggedUser(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    display_name: str | None = Field(
        default=None, alias="displayName", description="Account display name."
    )
    user_id: str | None = Field(
        default=None,
        alias="userId",
        description="Instagram's numeric account id, as a string.",
    )
    username: str = Field(description="Instagram username without the leading @.")


class InstagramNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def audio_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramAudioReelsInput],
    ) -> RunResult[InstagramAudioReelsData]:
        """Instagram Reels by Audio

        List Instagram reels that use a given audio track by audio id.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.audio_reels(audioId="1392969992841787")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.audio_reels", dict(input), options
        )
        return RunResult[InstagramAudioReelsData].model_validate(raw)

    def iter_audio_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramAudioReelsInput],
    ) -> Paginator[InstagramAudioReelsReel, InstagramAudioReelsData]:
        """Iterate Instagram Reels by Audio results, following pagination cursors.

        Yields validated `InstagramAudioReelsReel` items from the `reels` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.audio_reels",
            dict(input),
            "reels",
            item_model=InstagramAudioReelsReel,
            data_model=InstagramAudioReelsData,
            bare=False,
            options=options,
        )

    def basic_profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramBasicProfileInput],
    ) -> RunResult[InstagramBasicProfileData]:
        """Instagram Basic Profile

        Fetch an Instagram account's core public profile fields (followers, posts,
        bio, verification) by user id.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.basic_profile(userId="314216")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.basic_profile", dict(input), options
        )
        return RunResult[InstagramBasicProfileData].model_validate(raw)

    def comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramCommentRepliesInput],
    ) -> RunResult[InstagramCommentRepliesData]:
        """Instagram Comment Replies

        List the replies to an Instagram comment with cursor pagination (text,
        author, likes).

        Price: $0.0012 per request.

        Example:
            res = client.instagram.comment_replies(commentId="18126632131325044", url="https://www.instagram.com/p/C8rKmYvsrck/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.comment_replies", dict(input), options
        )
        return RunResult[InstagramCommentRepliesData].model_validate(raw)

    def iter_comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramCommentRepliesInput],
    ) -> Paginator[InstagramCommentRepliesComment, InstagramCommentRepliesData]:
        """Iterate Instagram Comment Replies results, following pagination cursors.

        Yields validated `InstagramCommentRepliesComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.comment_replies",
            dict(input),
            "comments",
            item_model=InstagramCommentRepliesComment,
            data_model=InstagramCommentRepliesData,
            bare=False,
            options=options,
        )

    def embed(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramEmbedInput],
    ) -> RunResult[InstagramEmbedData]:
        """Instagram Profile Embed

        Fetch the public embed HTML for an Instagram profile by handle.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.embed(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.embed", dict(input), options
        )
        return RunResult[InstagramEmbedData].model_validate(raw)

    def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowersInput],
    ) -> RunResult[InstagramFollowersData]:
        """Instagram Followers

        List the followers of any public Instagram account by username: follower
        usernames, names, and profile details.

        Price: $0.0015 per request.

        Example:
            res = client.instagram.followers(username="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.followers", dict(input), options
        )
        return RunResult[InstagramFollowersData].model_validate(raw)

    def iter_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowersInput],
    ) -> Paginator[InstagramFollowersItem, InstagramFollowersData]:
        """Iterate Instagram Followers results, following pagination cursors.

        Yields validated `InstagramFollowersItem` items from the `items` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.followers",
            dict(input),
            "items",
            item_model=InstagramFollowersItem,
            data_model=InstagramFollowersData,
            bare=False,
            options=options,
        )

    def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowingInput],
    ) -> RunResult[InstagramFollowingData]:
        """Instagram Following

        List the accounts a public Instagram user follows: usernames, names, and
        profile details.

        Price: $0.0015 per request.

        Example:
            res = client.instagram.following(username="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.following", dict(input), options
        )
        return RunResult[InstagramFollowingData].model_validate(raw)

    def iter_following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowingInput],
    ) -> Paginator[InstagramFollowingItem, InstagramFollowingData]:
        """Iterate Instagram Following results, following pagination cursors.

        Yields validated `InstagramFollowingItem` items from the `items` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.following",
            dict(input),
            "items",
            item_model=InstagramFollowingItem,
            data_model=InstagramFollowingData,
            bare=False,
            options=options,
        )

    def hashtag_analytics(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagAnalyticsInput],
    ) -> RunResult[InstagramHashtagAnalyticsData]:
        """Instagram Hashtag Analytics

        Get analytics for any Instagram hashtag (total post count, related hashtags,
        and usage signals).

        Price: $0.0011 per request plus $0.00187 per result (maximum $0.0385).

        Example:
            res = client.instagram.hashtag_analytics(hashtag="travel", limit=5)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.hashtag_analytics", dict(input), options
        )
        return RunResult[InstagramHashtagAnalyticsData].model_validate(raw)

    def hashtag_recent_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagRecentPostsInput],
    ) -> RunResult[InstagramHashtagRecentPostsData]:
        """Instagram Hashtag Recent Posts

        Instagram posts published under a hashtag, newest first, read from its live
        chronological feed rather than a web search index. Built for monitoring:
        results arrive within a couple of minutes of posting, so engagement counts
        are usually still zero and reels do not appear (Instagram keeps those on a
        separate tab). For engagement-ranked results use
        instagram.hashtag_top_posts; for older relevance-ranked results use
        instagram.search_hashtag.

        Price: $0.0015 per request.

        Example:
            res = client.instagram.hashtag_recent_posts(hashtag="skincare")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.hashtag_recent_posts", dict(input), options
        )
        return RunResult[InstagramHashtagRecentPostsData].model_validate(raw)

    def iter_hashtag_recent_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagRecentPostsInput],
    ) -> Paginator[InstagramHashtagRecentPostsPost, InstagramHashtagRecentPostsData]:
        """Iterate Instagram Hashtag Recent Posts results, following pagination cursors.

        Yields validated `InstagramHashtagRecentPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.hashtag_recent_posts",
            dict(input),
            "posts",
            item_model=InstagramHashtagRecentPostsPost,
            data_model=InstagramHashtagRecentPostsData,
            bare=False,
            options=options,
        )

    def hashtag_top_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagTopPostsInput],
    ) -> RunResult[InstagramHashtagTopPostsData]:
        """Instagram Hashtag Top Posts

        Instagram's own top-ranked posts for a hashtag, read from its live hashtag
        feed rather than a web search index, with view, like, and comment counts.
        Reels-heavy and engagement-ranked, so it answers what is performing on a tag
        right now. For older relevance-ranked results with date and media-type
        filters use instagram.search_hashtag; for the chronological feed use
        instagram.hashtag_recent_posts.

        Price: $0.0015 per request.

        Example:
            res = client.instagram.hashtag_top_posts(hashtag="skincare")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.hashtag_top_posts", dict(input), options
        )
        return RunResult[InstagramHashtagTopPostsData].model_validate(raw)

    def iter_hashtag_top_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagTopPostsInput],
    ) -> Paginator[InstagramHashtagTopPostsPost, InstagramHashtagTopPostsData]:
        """Iterate Instagram Hashtag Top Posts results, following pagination cursors.

        Yields validated `InstagramHashtagTopPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.hashtag_top_posts",
            dict(input),
            "posts",
            item_model=InstagramHashtagTopPostsPost,
            data_model=InstagramHashtagTopPostsData,
            bare=False,
            options=options,
        )

    def highlight_detail(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHighlightDetailInput],
    ) -> RunResult[InstagramHighlightDetailData]:
        """Instagram Highlight Detail

        Fetch the details and media items of a single Instagram story highlight by
        id.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.highlight_detail(id="18201653992314974")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.highlight_detail", dict(input), options
        )
        return RunResult[InstagramHighlightDetailData].model_validate(raw)

    def location_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramLocationPostsInput],
    ) -> RunResult[InstagramLocationPostsData]:
        """Instagram Location Posts

        List public Instagram posts tagged at a location, ranked or most recent,
        with cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.location_posts(locationId="103912118089363", sort="recent")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.location_posts", dict(input), options
        )
        return RunResult[InstagramLocationPostsData].model_validate(raw)

    def iter_location_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramLocationPostsInput],
    ) -> Paginator[InstagramLocationPostsPost, InstagramLocationPostsData]:
        """Iterate Instagram Location Posts results, following pagination cursors.

        Yields validated `InstagramLocationPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.location_posts",
            dict(input),
            "posts",
            item_model=InstagramLocationPostsPost,
            data_model=InstagramLocationPostsData,
            bare=False,
            options=options,
        )

    def media_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramMediaTranscriptInput],
    ) -> RunResult[InstagramMediaTranscriptData]:
        """Instagram Media Transcript

        Get the spoken-audio transcript text for an Instagram post or reel by URL.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.media_transcript(url="https://www.instagram.com/reel/DHsD6HGqJhp/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.media_transcript", dict(input), options
        )
        return RunResult[InstagramMediaTranscriptData].model_validate(raw)

    def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostInput],
    ) -> RunResult[InstagramPostData]:
        """Instagram Post

        Fetch a single Instagram post or reel by URL (media URLs, like count, owner,
        type) as normalized JSON.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.post(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.post", dict(input), options
        )
        return RunResult[InstagramPostData].model_validate(raw)

    def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostCommentsInput],
    ) -> RunResult[InstagramPostCommentsData]:
        """Instagram Post Comments

        List the comments on an Instagram post or reel by URL with cursor pagination
        (text, author, likes).

        Price: $0.0008 per request.

        Example:
            res = client.instagram.post_comments(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.post_comments", dict(input), options
        )
        return RunResult[InstagramPostCommentsData].model_validate(raw)

    def iter_post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostCommentsInput],
    ) -> Paginator[InstagramPostCommentsComment, InstagramPostCommentsData]:
        """Iterate Instagram Post Comments results, following pagination cursors.

        Yields validated `InstagramPostCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.post_comments",
            dict(input),
            "comments",
            item_model=InstagramPostCommentsComment,
            data_model=InstagramPostCommentsData,
            bare=False,
            options=options,
        )

    def post_likers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostLikersInput],
    ) -> RunResult[InstagramPostLikersData]:
        """Instagram Post Likers

        List the accounts that liked a public Instagram post, one page of likers per
        call, with each liker's handle, display name, verified flag and avatar.

        Price: $0.0024 per request.

        Example:
            res = client.instagram.post_likers(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.post_likers", dict(input), options
        )
        return RunResult[InstagramPostLikersData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramProfileInput],
    ) -> RunResult[InstagramProfileData]:
        """Instagram Profile

        Fetch an Instagram account's public profile (followers, posts, bio,
        verification) by handle.

        Price: $0.0005 per request.

        Example:
            res = client.instagram.profile(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.profile", dict(input), options
        )
        return RunResult[InstagramProfileData].model_validate(raw)

    def profile_contact(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramProfileContactInput],
    ) -> RunResult[InstagramProfileContactData]:
        """Instagram Profile Contact Info

        Look up the contact email and phone number an Instagram creator or business
        publishes on its profile, including the address behind the profile's Email
        button that public profile lookups do not return.

        Price: $0.00721 per request plus $0 per result (maximum $0.00721).

        Example:
            res = client.instagram.profile_contact(handle="eminenceorganics")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.profile_contact", dict(input), options
        )
        return RunResult[InstagramProfileContactData].model_validate(raw)

    def reel_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramReelTranscriptInput],
    ) -> RunResult[InstagramReelTranscriptData]:
        """Instagram Reel Transcript

        Turn any public Instagram reel or video post into a full speech transcript,
        with optional word-level timestamps.

        Price: $0.0055 per request plus $0.0253 per result (maximum $0.0308).

        Example:
            res = client.instagram.reel_transcript(url="https://www.instagram.com/reel/DWzrfE2kaY8/", wordTimestamps=False)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.reel_transcript", dict(input), options
        )
        return RunResult[InstagramReelTranscriptData].model_validate(raw)

    def reels_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramReelsSearchInput],
    ) -> RunResult[InstagramReelsSearchData]:
        """Instagram Reels Search

        Search Instagram Reels by keyword and get matching reels (caption, likes,
        comments, creator, and duration). Instagram does not return view or play
        counts in reels search results. Results are relevance-ranked, not
        chronological. Paging tops out around 110 reels per query (11 pages of 10).

        Price: $0.0012 per request.

        Example:
            res = client.instagram.reels_search(query="travel")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.reels_search", dict(input), options
        )
        return RunResult[InstagramReelsSearchData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchInput],
    ) -> RunResult[InstagramSearchData]:
        """Instagram Search

        Search Instagram for users, hashtags, or places by keyword and get matching
        results with names, counts, and links.

        Price: $0.0036 per request.

        Example:
            res = client.instagram.search(query="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search", dict(input), options
        )
        return RunResult[InstagramSearchData].model_validate(raw)

    def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchHashtagInput],
    ) -> RunResult[InstagramSearchHashtagData]:
        """Instagram Hashtag Search

        Search posts under an Instagram hashtag through a web search index rather
        than Instagram's own hashtag feed. That is what lets it filter by date and
        media type and return reels whose like counts have settled, and it is also
        why results skew older (median around three months) and stop at roughly 110
        per hashtag. If that web search index is unavailable, a first-page request
        that sets no date and no media type is served from Instagram's own live top
        feed instead. For Instagram's own live ranking of a tag use
        instagram.hashtag_top_posts, and for the chronological feed use
        instagram.hashtag_recent_posts.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.search_hashtag(datePosted="last-month", hashtag="skincare", mediaType="reel")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_hashtag", dict(input), options
        )
        return RunResult[InstagramSearchHashtagData].model_validate(raw)

    def iter_search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchHashtagInput],
    ) -> Paginator[InstagramSearchHashtagPost, InstagramSearchHashtagData]:
        """Iterate Instagram Hashtag Search results, following pagination cursors.

        Yields validated `InstagramSearchHashtagPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.search_hashtag",
            dict(input),
            "posts",
            item_model=InstagramSearchHashtagPost,
            data_model=InstagramSearchHashtagData,
            bare=False,
            options=options,
        )

    def search_locations(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchLocationsInput],
    ) -> RunResult[InstagramSearchLocationsData]:
        """Instagram Location Search

        Search Instagram locations by keyword and return each place's id, name,
        address and coordinates.

        Price: $0.0024 per request.

        Example:
            res = client.instagram.search_locations(query="Eiffel Tower")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_locations", dict(input), options
        )
        return RunResult[InstagramSearchLocationsData].model_validate(raw)

    def search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchProfilesInput],
    ) -> RunResult[InstagramSearchProfilesData]:
        """Instagram Profile Search

        Search public Instagram profiles by a bio or caption keyword.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.search_profiles(query="coffee roaster")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_profiles", dict(input), options
        )
        return RunResult[InstagramSearchProfilesData].model_validate(raw)

    def iter_search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchProfilesInput],
    ) -> Paginator[InstagramSearchProfilesProfile, InstagramSearchProfilesData]:
        """Iterate Instagram Profile Search results, following pagination cursors.

        Yields validated `InstagramSearchProfilesProfile` items from the `profiles` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.search_profiles",
            dict(input),
            "profiles",
            item_model=InstagramSearchProfilesProfile,
            data_model=InstagramSearchProfilesData,
            bare=False,
            options=options,
        )

    def similar_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSimilarProfilesInput],
    ) -> RunResult[InstagramSimilarProfilesData]:
        """Instagram Similar Profiles

        List the accounts Instagram recommends as similar to a public profile, with
        each account's handle, display name, verified flag and avatar.

        Price: $0.0024 per request.

        Example:
            res = client.instagram.similar_profiles(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.similar_profiles", dict(input), options
        )
        return RunResult[InstagramSimilarProfilesData].model_validate(raw)

    def stories_full(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramStoriesFullInput],
    ) -> RunResult[InstagramStoriesFullData]:
        """Instagram Stories (full)

        Fetch a public Instagram account's currently live stories with media, type,
        dimensions, posting time, and 24-hour expiry by username.

        Price: $0.0024 per request.

        Example:
            res = client.instagram.stories_full(username="natgeo")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.stories_full", dict(input), options
        )
        return RunResult[InstagramStoriesFullData].model_validate(raw)

    def stories_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramStoriesThinInput],
    ) -> RunResult[InstagramStoriesThinData]:
        """Instagram Stories (basic)

        Fetch a public Instagram account's currently live stories - media URL,
        owner, and posting time - by username. Lightweight projection; for media
        type, dimensions, and the 24h expiry time use instagram.stories_full.

        Price: $0.0015 per request.

        Example:
            res = client.instagram.stories_thin(username="natgeo")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.stories_thin", dict(input), options
        )
        return RunResult[InstagramStoriesThinData].model_validate(raw)

    def tagged_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramTaggedPostsInput],
    ) -> RunResult[InstagramTaggedPostsData]:
        """Instagram Tagged Posts

        List the posts an Instagram user is tagged in, with cursor pagination
        (author, caption, likes, comments).

        Price: $0.0015 per request.

        Example:
            res = client.instagram.tagged_posts(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.tagged_posts", dict(input), options
        )
        return RunResult[InstagramTaggedPostsData].model_validate(raw)

    def iter_tagged_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramTaggedPostsInput],
    ) -> Paginator[InstagramTaggedPostsPost, InstagramTaggedPostsData]:
        """Iterate Instagram Tagged Posts results, following pagination cursors.

        Yields validated `InstagramTaggedPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.tagged_posts",
            dict(input),
            "posts",
            item_model=InstagramTaggedPostsPost,
            data_model=InstagramTaggedPostsData,
            bare=False,
            options=options,
        )

    def trending_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramTrendingReelsInput],
    ) -> RunResult[InstagramTrendingReelsData]:
        """Instagram Trending Reels

        List currently trending Instagram reels. Instagram does not return play
        counts on this feed.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.trending_reels()
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.trending_reels", dict(input), options
        )
        return RunResult[InstagramTrendingReelsData].model_validate(raw)

    def user_highlights(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserHighlightsInput],
    ) -> RunResult[InstagramUserHighlightsData]:
        """Instagram User Highlights

        List an Instagram account's story highlight reels by handle.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.user_highlights(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_highlights", dict(input), options
        )
        return RunResult[InstagramUserHighlightsData].model_validate(raw)

    def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserPostsInput],
    ) -> RunResult[InstagramUserPostsData]:
        """Instagram User Posts

        List an Instagram account's recent posts (likes, comments, captions) by
        handle with cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.user_posts(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_posts", dict(input), options
        )
        return RunResult[InstagramUserPostsData].model_validate(raw)

    def iter_user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserPostsInput],
    ) -> Paginator[InstagramUserPostsPost, InstagramUserPostsData]:
        """Iterate Instagram User Posts results, following pagination cursors.

        Yields validated `InstagramUserPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.user_posts",
            dict(input),
            "posts",
            item_model=InstagramUserPostsPost,
            data_model=InstagramUserPostsData,
            bare=False,
            options=options,
        )

    def user_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserReelsInput],
    ) -> RunResult[InstagramUserReelsData]:
        """Instagram User Reels

        List an Instagram account's reels by handle with cursor pagination (caption,
        plays, likes, comments).

        Price: $0.0012 per request.

        Example:
            res = client.instagram.user_reels(handle="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_reels", dict(input), options
        )
        return RunResult[InstagramUserReelsData].model_validate(raw)

    def iter_user_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserReelsInput],
    ) -> Paginator[InstagramUserReelsReel, InstagramUserReelsData]:
        """Iterate Instagram User Reels results, following pagination cursors.

        Yields validated `InstagramUserReelsReel` items from the `reels` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.user_reels",
            dict(input),
            "reels",
            item_model=InstagramUserReelsReel,
            data_model=InstagramUserReelsData,
            bare=False,
            options=options,
        )

    def user_reposts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserRepostsInput],
    ) -> RunResult[InstagramUserRepostsData]:
        """Instagram User Reposts

        List the posts a public Instagram account has reposted to its feed, with
        cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.user_reposts(userId="787132")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_reposts", dict(input), options
        )
        return RunResult[InstagramUserRepostsData].model_validate(raw)

    def iter_user_reposts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserRepostsInput],
    ) -> Paginator[InstagramUserRepostsPost, InstagramUserRepostsData]:
        """Iterate Instagram User Reposts results, following pagination cursors.

        Yields validated `InstagramUserRepostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "instagram.user_reposts",
            dict(input),
            "posts",
            item_model=InstagramUserRepostsPost,
            data_model=InstagramUserRepostsData,
            bare=False,
            options=options,
        )


class AsyncInstagramNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def audio_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramAudioReelsInput],
    ) -> RunResult[InstagramAudioReelsData]:
        """Instagram Reels by Audio

        List Instagram reels that use a given audio track by audio id.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.audio_reels(audioId="1392969992841787")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.audio_reels", dict(input), options
        )
        return RunResult[InstagramAudioReelsData].model_validate(raw)

    def iter_audio_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramAudioReelsInput],
    ) -> AsyncPaginator[InstagramAudioReelsReel, InstagramAudioReelsData]:
        """Iterate Instagram Reels by Audio results, following pagination cursors.

        Yields validated `InstagramAudioReelsReel` items from the `reels` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.audio_reels",
            dict(input),
            "reels",
            item_model=InstagramAudioReelsReel,
            data_model=InstagramAudioReelsData,
            bare=False,
            options=options,
        )

    async def basic_profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramBasicProfileInput],
    ) -> RunResult[InstagramBasicProfileData]:
        """Instagram Basic Profile

        Fetch an Instagram account's core public profile fields (followers, posts,
        bio, verification) by user id.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.basic_profile(userId="314216")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.basic_profile", dict(input), options
        )
        return RunResult[InstagramBasicProfileData].model_validate(raw)

    async def comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramCommentRepliesInput],
    ) -> RunResult[InstagramCommentRepliesData]:
        """Instagram Comment Replies

        List the replies to an Instagram comment with cursor pagination (text,
        author, likes).

        Price: $0.0012 per request.

        Example:
            res = client.instagram.comment_replies(commentId="18126632131325044", url="https://www.instagram.com/p/C8rKmYvsrck/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.comment_replies", dict(input), options
        )
        return RunResult[InstagramCommentRepliesData].model_validate(raw)

    def iter_comment_replies(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramCommentRepliesInput],
    ) -> AsyncPaginator[InstagramCommentRepliesComment, InstagramCommentRepliesData]:
        """Iterate Instagram Comment Replies results, following pagination cursors.

        Yields validated `InstagramCommentRepliesComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.comment_replies",
            dict(input),
            "comments",
            item_model=InstagramCommentRepliesComment,
            data_model=InstagramCommentRepliesData,
            bare=False,
            options=options,
        )

    async def embed(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramEmbedInput],
    ) -> RunResult[InstagramEmbedData]:
        """Instagram Profile Embed

        Fetch the public embed HTML for an Instagram profile by handle.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.embed(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.embed", dict(input), options
        )
        return RunResult[InstagramEmbedData].model_validate(raw)

    async def followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowersInput],
    ) -> RunResult[InstagramFollowersData]:
        """Instagram Followers

        List the followers of any public Instagram account by username: follower
        usernames, names, and profile details.

        Price: $0.0015 per request.

        Example:
            res = client.instagram.followers(username="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.followers", dict(input), options
        )
        return RunResult[InstagramFollowersData].model_validate(raw)

    def iter_followers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowersInput],
    ) -> AsyncPaginator[InstagramFollowersItem, InstagramFollowersData]:
        """Iterate Instagram Followers results, following pagination cursors.

        Yields validated `InstagramFollowersItem` items from the `items` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.followers",
            dict(input),
            "items",
            item_model=InstagramFollowersItem,
            data_model=InstagramFollowersData,
            bare=False,
            options=options,
        )

    async def following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowingInput],
    ) -> RunResult[InstagramFollowingData]:
        """Instagram Following

        List the accounts a public Instagram user follows: usernames, names, and
        profile details.

        Price: $0.0015 per request.

        Example:
            res = client.instagram.following(username="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.following", dict(input), options
        )
        return RunResult[InstagramFollowingData].model_validate(raw)

    def iter_following(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramFollowingInput],
    ) -> AsyncPaginator[InstagramFollowingItem, InstagramFollowingData]:
        """Iterate Instagram Following results, following pagination cursors.

        Yields validated `InstagramFollowingItem` items from the `items` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.following",
            dict(input),
            "items",
            item_model=InstagramFollowingItem,
            data_model=InstagramFollowingData,
            bare=False,
            options=options,
        )

    async def hashtag_analytics(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagAnalyticsInput],
    ) -> RunResult[InstagramHashtagAnalyticsData]:
        """Instagram Hashtag Analytics

        Get analytics for any Instagram hashtag (total post count, related hashtags,
        and usage signals).

        Price: $0.0011 per request plus $0.00187 per result (maximum $0.0385).

        Example:
            res = client.instagram.hashtag_analytics(hashtag="travel", limit=5)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.hashtag_analytics", dict(input), options
        )
        return RunResult[InstagramHashtagAnalyticsData].model_validate(raw)

    async def hashtag_recent_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagRecentPostsInput],
    ) -> RunResult[InstagramHashtagRecentPostsData]:
        """Instagram Hashtag Recent Posts

        Instagram posts published under a hashtag, newest first, read from its live
        chronological feed rather than a web search index. Built for monitoring:
        results arrive within a couple of minutes of posting, so engagement counts
        are usually still zero and reels do not appear (Instagram keeps those on a
        separate tab). For engagement-ranked results use
        instagram.hashtag_top_posts; for older relevance-ranked results use
        instagram.search_hashtag.

        Price: $0.0015 per request.

        Example:
            res = client.instagram.hashtag_recent_posts(hashtag="skincare")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.hashtag_recent_posts", dict(input), options
        )
        return RunResult[InstagramHashtagRecentPostsData].model_validate(raw)

    def iter_hashtag_recent_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagRecentPostsInput],
    ) -> AsyncPaginator[
        InstagramHashtagRecentPostsPost, InstagramHashtagRecentPostsData
    ]:
        """Iterate Instagram Hashtag Recent Posts results, following pagination cursors.

        Yields validated `InstagramHashtagRecentPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.hashtag_recent_posts",
            dict(input),
            "posts",
            item_model=InstagramHashtagRecentPostsPost,
            data_model=InstagramHashtagRecentPostsData,
            bare=False,
            options=options,
        )

    async def hashtag_top_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagTopPostsInput],
    ) -> RunResult[InstagramHashtagTopPostsData]:
        """Instagram Hashtag Top Posts

        Instagram's own top-ranked posts for a hashtag, read from its live hashtag
        feed rather than a web search index, with view, like, and comment counts.
        Reels-heavy and engagement-ranked, so it answers what is performing on a tag
        right now. For older relevance-ranked results with date and media-type
        filters use instagram.search_hashtag; for the chronological feed use
        instagram.hashtag_recent_posts.

        Price: $0.0015 per request.

        Example:
            res = client.instagram.hashtag_top_posts(hashtag="skincare")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.hashtag_top_posts", dict(input), options
        )
        return RunResult[InstagramHashtagTopPostsData].model_validate(raw)

    def iter_hashtag_top_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHashtagTopPostsInput],
    ) -> AsyncPaginator[InstagramHashtagTopPostsPost, InstagramHashtagTopPostsData]:
        """Iterate Instagram Hashtag Top Posts results, following pagination cursors.

        Yields validated `InstagramHashtagTopPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.hashtag_top_posts",
            dict(input),
            "posts",
            item_model=InstagramHashtagTopPostsPost,
            data_model=InstagramHashtagTopPostsData,
            bare=False,
            options=options,
        )

    async def highlight_detail(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramHighlightDetailInput],
    ) -> RunResult[InstagramHighlightDetailData]:
        """Instagram Highlight Detail

        Fetch the details and media items of a single Instagram story highlight by
        id.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.highlight_detail(id="18201653992314974")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.highlight_detail", dict(input), options
        )
        return RunResult[InstagramHighlightDetailData].model_validate(raw)

    async def location_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramLocationPostsInput],
    ) -> RunResult[InstagramLocationPostsData]:
        """Instagram Location Posts

        List public Instagram posts tagged at a location, ranked or most recent,
        with cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.location_posts(locationId="103912118089363", sort="recent")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.location_posts", dict(input), options
        )
        return RunResult[InstagramLocationPostsData].model_validate(raw)

    def iter_location_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramLocationPostsInput],
    ) -> AsyncPaginator[InstagramLocationPostsPost, InstagramLocationPostsData]:
        """Iterate Instagram Location Posts results, following pagination cursors.

        Yields validated `InstagramLocationPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.location_posts",
            dict(input),
            "posts",
            item_model=InstagramLocationPostsPost,
            data_model=InstagramLocationPostsData,
            bare=False,
            options=options,
        )

    async def media_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramMediaTranscriptInput],
    ) -> RunResult[InstagramMediaTranscriptData]:
        """Instagram Media Transcript

        Get the spoken-audio transcript text for an Instagram post or reel by URL.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.media_transcript(url="https://www.instagram.com/reel/DHsD6HGqJhp/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.media_transcript", dict(input), options
        )
        return RunResult[InstagramMediaTranscriptData].model_validate(raw)

    async def post(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostInput],
    ) -> RunResult[InstagramPostData]:
        """Instagram Post

        Fetch a single Instagram post or reel by URL (media URLs, like count, owner,
        type) as normalized JSON.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.post(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.post", dict(input), options
        )
        return RunResult[InstagramPostData].model_validate(raw)

    async def post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostCommentsInput],
    ) -> RunResult[InstagramPostCommentsData]:
        """Instagram Post Comments

        List the comments on an Instagram post or reel by URL with cursor pagination
        (text, author, likes).

        Price: $0.0008 per request.

        Example:
            res = client.instagram.post_comments(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.post_comments", dict(input), options
        )
        return RunResult[InstagramPostCommentsData].model_validate(raw)

    def iter_post_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostCommentsInput],
    ) -> AsyncPaginator[InstagramPostCommentsComment, InstagramPostCommentsData]:
        """Iterate Instagram Post Comments results, following pagination cursors.

        Yields validated `InstagramPostCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.post_comments",
            dict(input),
            "comments",
            item_model=InstagramPostCommentsComment,
            data_model=InstagramPostCommentsData,
            bare=False,
            options=options,
        )

    async def post_likers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramPostLikersInput],
    ) -> RunResult[InstagramPostLikersData]:
        """Instagram Post Likers

        List the accounts that liked a public Instagram post, one page of likers per
        call, with each liker's handle, display name, verified flag and avatar.

        Price: $0.0024 per request.

        Example:
            res = client.instagram.post_likers(url="https://www.instagram.com/reel/DWzrfE2kaY8/")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.post_likers", dict(input), options
        )
        return RunResult[InstagramPostLikersData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramProfileInput],
    ) -> RunResult[InstagramProfileData]:
        """Instagram Profile

        Fetch an Instagram account's public profile (followers, posts, bio,
        verification) by handle.

        Price: $0.0005 per request.

        Example:
            res = client.instagram.profile(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.profile", dict(input), options
        )
        return RunResult[InstagramProfileData].model_validate(raw)

    async def profile_contact(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramProfileContactInput],
    ) -> RunResult[InstagramProfileContactData]:
        """Instagram Profile Contact Info

        Look up the contact email and phone number an Instagram creator or business
        publishes on its profile, including the address behind the profile's Email
        button that public profile lookups do not return.

        Price: $0.00721 per request plus $0 per result (maximum $0.00721).

        Example:
            res = client.instagram.profile_contact(handle="eminenceorganics")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.profile_contact", dict(input), options
        )
        return RunResult[InstagramProfileContactData].model_validate(raw)

    async def reel_transcript(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramReelTranscriptInput],
    ) -> RunResult[InstagramReelTranscriptData]:
        """Instagram Reel Transcript

        Turn any public Instagram reel or video post into a full speech transcript,
        with optional word-level timestamps.

        Price: $0.0055 per request plus $0.0253 per result (maximum $0.0308).

        Example:
            res = client.instagram.reel_transcript(url="https://www.instagram.com/reel/DWzrfE2kaY8/", wordTimestamps=False)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.reel_transcript", dict(input), options
        )
        return RunResult[InstagramReelTranscriptData].model_validate(raw)

    async def reels_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramReelsSearchInput],
    ) -> RunResult[InstagramReelsSearchData]:
        """Instagram Reels Search

        Search Instagram Reels by keyword and get matching reels (caption, likes,
        comments, creator, and duration). Instagram does not return view or play
        counts in reels search results. Results are relevance-ranked, not
        chronological. Paging tops out around 110 reels per query (11 pages of 10).

        Price: $0.0012 per request.

        Example:
            res = client.instagram.reels_search(query="travel")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.reels_search", dict(input), options
        )
        return RunResult[InstagramReelsSearchData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchInput],
    ) -> RunResult[InstagramSearchData]:
        """Instagram Search

        Search Instagram for users, hashtags, or places by keyword and get matching
        results with names, counts, and links.

        Price: $0.0036 per request.

        Example:
            res = client.instagram.search(query="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search", dict(input), options
        )
        return RunResult[InstagramSearchData].model_validate(raw)

    async def search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchHashtagInput],
    ) -> RunResult[InstagramSearchHashtagData]:
        """Instagram Hashtag Search

        Search posts under an Instagram hashtag through a web search index rather
        than Instagram's own hashtag feed. That is what lets it filter by date and
        media type and return reels whose like counts have settled, and it is also
        why results skew older (median around three months) and stop at roughly 110
        per hashtag. If that web search index is unavailable, a first-page request
        that sets no date and no media type is served from Instagram's own live top
        feed instead. For Instagram's own live ranking of a tag use
        instagram.hashtag_top_posts, and for the chronological feed use
        instagram.hashtag_recent_posts.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.search_hashtag(datePosted="last-month", hashtag="skincare", mediaType="reel")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_hashtag", dict(input), options
        )
        return RunResult[InstagramSearchHashtagData].model_validate(raw)

    def iter_search_hashtag(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchHashtagInput],
    ) -> AsyncPaginator[InstagramSearchHashtagPost, InstagramSearchHashtagData]:
        """Iterate Instagram Hashtag Search results, following pagination cursors.

        Yields validated `InstagramSearchHashtagPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.search_hashtag",
            dict(input),
            "posts",
            item_model=InstagramSearchHashtagPost,
            data_model=InstagramSearchHashtagData,
            bare=False,
            options=options,
        )

    async def search_locations(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchLocationsInput],
    ) -> RunResult[InstagramSearchLocationsData]:
        """Instagram Location Search

        Search Instagram locations by keyword and return each place's id, name,
        address and coordinates.

        Price: $0.0024 per request.

        Example:
            res = client.instagram.search_locations(query="Eiffel Tower")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_locations", dict(input), options
        )
        return RunResult[InstagramSearchLocationsData].model_validate(raw)

    async def search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchProfilesInput],
    ) -> RunResult[InstagramSearchProfilesData]:
        """Instagram Profile Search

        Search public Instagram profiles by a bio or caption keyword.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.search_profiles(query="coffee roaster")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.search_profiles", dict(input), options
        )
        return RunResult[InstagramSearchProfilesData].model_validate(raw)

    def iter_search_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSearchProfilesInput],
    ) -> AsyncPaginator[InstagramSearchProfilesProfile, InstagramSearchProfilesData]:
        """Iterate Instagram Profile Search results, following pagination cursors.

        Yields validated `InstagramSearchProfilesProfile` items from the `profiles` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.search_profiles",
            dict(input),
            "profiles",
            item_model=InstagramSearchProfilesProfile,
            data_model=InstagramSearchProfilesData,
            bare=False,
            options=options,
        )

    async def similar_profiles(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramSimilarProfilesInput],
    ) -> RunResult[InstagramSimilarProfilesData]:
        """Instagram Similar Profiles

        List the accounts Instagram recommends as similar to a public profile, with
        each account's handle, display name, verified flag and avatar.

        Price: $0.0024 per request.

        Example:
            res = client.instagram.similar_profiles(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.similar_profiles", dict(input), options
        )
        return RunResult[InstagramSimilarProfilesData].model_validate(raw)

    async def stories_full(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramStoriesFullInput],
    ) -> RunResult[InstagramStoriesFullData]:
        """Instagram Stories (full)

        Fetch a public Instagram account's currently live stories with media, type,
        dimensions, posting time, and 24-hour expiry by username.

        Price: $0.0024 per request.

        Example:
            res = client.instagram.stories_full(username="natgeo")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.stories_full", dict(input), options
        )
        return RunResult[InstagramStoriesFullData].model_validate(raw)

    async def stories_thin(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramStoriesThinInput],
    ) -> RunResult[InstagramStoriesThinData]:
        """Instagram Stories (basic)

        Fetch a public Instagram account's currently live stories - media URL,
        owner, and posting time - by username. Lightweight projection; for media
        type, dimensions, and the 24h expiry time use instagram.stories_full.

        Price: $0.0015 per request.

        Example:
            res = client.instagram.stories_thin(username="natgeo")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.stories_thin", dict(input), options
        )
        return RunResult[InstagramStoriesThinData].model_validate(raw)

    async def tagged_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramTaggedPostsInput],
    ) -> RunResult[InstagramTaggedPostsData]:
        """Instagram Tagged Posts

        List the posts an Instagram user is tagged in, with cursor pagination
        (author, caption, likes, comments).

        Price: $0.0015 per request.

        Example:
            res = client.instagram.tagged_posts(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.tagged_posts", dict(input), options
        )
        return RunResult[InstagramTaggedPostsData].model_validate(raw)

    def iter_tagged_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramTaggedPostsInput],
    ) -> AsyncPaginator[InstagramTaggedPostsPost, InstagramTaggedPostsData]:
        """Iterate Instagram Tagged Posts results, following pagination cursors.

        Yields validated `InstagramTaggedPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.tagged_posts",
            dict(input),
            "posts",
            item_model=InstagramTaggedPostsPost,
            data_model=InstagramTaggedPostsData,
            bare=False,
            options=options,
        )

    async def trending_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramTrendingReelsInput],
    ) -> RunResult[InstagramTrendingReelsData]:
        """Instagram Trending Reels

        List currently trending Instagram reels. Instagram does not return play
        counts on this feed.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.trending_reels()
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.trending_reels", dict(input), options
        )
        return RunResult[InstagramTrendingReelsData].model_validate(raw)

    async def user_highlights(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserHighlightsInput],
    ) -> RunResult[InstagramUserHighlightsData]:
        """Instagram User Highlights

        List an Instagram account's story highlight reels by handle.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.user_highlights(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_highlights", dict(input), options
        )
        return RunResult[InstagramUserHighlightsData].model_validate(raw)

    async def user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserPostsInput],
    ) -> RunResult[InstagramUserPostsData]:
        """Instagram User Posts

        List an Instagram account's recent posts (likes, comments, captions) by
        handle with cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.user_posts(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_posts", dict(input), options
        )
        return RunResult[InstagramUserPostsData].model_validate(raw)

    def iter_user_posts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserPostsInput],
    ) -> AsyncPaginator[InstagramUserPostsPost, InstagramUserPostsData]:
        """Iterate Instagram User Posts results, following pagination cursors.

        Yields validated `InstagramUserPostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.user_posts",
            dict(input),
            "posts",
            item_model=InstagramUserPostsPost,
            data_model=InstagramUserPostsData,
            bare=False,
            options=options,
        )

    async def user_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserReelsInput],
    ) -> RunResult[InstagramUserReelsData]:
        """Instagram User Reels

        List an Instagram account's reels by handle with cursor pagination (caption,
        plays, likes, comments).

        Price: $0.0012 per request.

        Example:
            res = client.instagram.user_reels(handle="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_reels", dict(input), options
        )
        return RunResult[InstagramUserReelsData].model_validate(raw)

    def iter_user_reels(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserReelsInput],
    ) -> AsyncPaginator[InstagramUserReelsReel, InstagramUserReelsData]:
        """Iterate Instagram User Reels results, following pagination cursors.

        Yields validated `InstagramUserReelsReel` items from the `reels` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.user_reels",
            dict(input),
            "reels",
            item_model=InstagramUserReelsReel,
            data_model=InstagramUserReelsData,
            bare=False,
            options=options,
        )

    async def user_reposts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserRepostsInput],
    ) -> RunResult[InstagramUserRepostsData]:
        """Instagram User Reposts

        List the posts a public Instagram account has reposted to its feed, with
        cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.instagram.user_reposts(userId="787132")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "instagram.user_reposts", dict(input), options
        )
        return RunResult[InstagramUserRepostsData].model_validate(raw)

    def iter_user_reposts(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[InstagramUserRepostsInput],
    ) -> AsyncPaginator[InstagramUserRepostsPost, InstagramUserRepostsData]:
        """Iterate Instagram User Reposts results, following pagination cursors.

        Yields validated `InstagramUserRepostsPost` items from the `posts` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "instagram.user_reposts",
            dict(input),
            "posts",
            item_model=InstagramUserRepostsPost,
            data_model=InstagramUserRepostsData,
            bare=False,
            options=options,
        )
