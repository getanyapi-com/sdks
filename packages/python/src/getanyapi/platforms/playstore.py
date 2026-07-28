# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the playstore platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class PlaystoreReviewsInput(TypedDict, total=False):
    """Input for Google Play Reviews."""

    appId: Required[str]
    """Android app package name or full Google Play store URL (e.g. com.supercell.brawlstars)."""
    appVersion: NotRequired[list[str]]
    """Only return reviews left on these app versions (e.g. ["2.24.1", "2.24.2"])."""
    deviceType: NotRequired[Literal["mobile", "tablet", "chromebook"]]
    """Only return reviews from this device type (e.g. "tablet"); defaults to mobile. Default: mobile."""
    endDate: NotRequired[str]
    """Only return reviews on or before this date, inclusive, in YYYY-MM-DD format (e.g. 2026-06-30)."""
    keywords: NotRequired[list[str]]
    """Only return reviews whose text contains one of these keywords (e.g. ["crash", "login"])."""
    languages: NotRequired[list[str]]
    """Only return reviews in these ISO 639-1 languages (e.g. ["en", "es"])."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-100, default 100). You are billed per result returned, so a lower limit costs less. Range: 1 to 100."""
    rating: NotRequired[int]
    """Only return reviews with this exact star rating from 1 to 5 (e.g. 1); omit for all ratings."""
    recentDays: NotRequired[int]
    """Only return reviews from the last N days (e.g. 30); omit for no time limit. Minimum: 1."""
    sortBy: NotRequired[str]
    """Review ordering: mostRelevant, newest, or rating (e.g. newest). Default: mostRelevant."""


class PlaystoreReviewsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class PlaystoreNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PlaystoreReviewsInput],
    ) -> BareRunResult[PlaystoreReviewsData]:
        """Google Play Reviews

        Fetch Google Play reviews for any Android app by package name or store URL:
        ratings, review text, dates, and helpfulness votes.

        Price: $0 per request plus $0.00011 per result (maximum $0.011).

        Example:
            res = client.playstore.reviews(appId="com.whatsapp", limit=3)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "playstore.reviews", dict(input), options
        )
        return BareRunResult[PlaystoreReviewsData].model_validate(raw)


class AsyncPlaystoreNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PlaystoreReviewsInput],
    ) -> BareRunResult[PlaystoreReviewsData]:
        """Google Play Reviews

        Fetch Google Play reviews for any Android app by package name or store URL:
        ratings, review text, dates, and helpfulness votes.

        Price: $0 per request plus $0.00011 per result (maximum $0.011).

        Example:
            res = client.playstore.reviews(appId="com.whatsapp", limit=3)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "playstore.reviews", dict(input), options
        )
        return BareRunResult[PlaystoreReviewsData].model_validate(raw)
