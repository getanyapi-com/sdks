# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the playstore platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class PlaystoreReviewsInput(TypedDict, total=False):
    """Input for Google Play Reviews."""

    appId: Required[str]
    """Android app package name or full Google Play store URL (e.g. com.supercell.brawlstars)."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-100, default 100). You are billed per result returned, so a lower limit costs less. Range: 1 to 100."""
    rating: NotRequired[int]
    """Only return reviews with this exact star rating from 1 to 5 (e.g. 1); omit for all ratings."""
    sortBy: NotRequired[str]
    """Review ordering: mostRelevant, newest, or rating (e.g. newest). Default: mostRelevant."""


class PlaystoreReviewsData(BaseModel):
    items: list[PlaystoreReviewsItem] = Field(
        description="Review records: star rating, review text, reviewer name, app version, helpfulness votes, and review date. Populated whenever the provider returns data."
    )


class PlaystoreReviewsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    rating: float
    text: str = Field(description="Populated whenever the provider returns data.")


class PlaystoreNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PlaystoreReviewsInput],
    ) -> RunResult[PlaystoreReviewsData]:
        """Google Play Reviews

        Fetch Google Play reviews for any Android app by package name or store URL -
        ratings, review text, dates, and helpfulness votes, billed per request in
        USD.

        Price: $0.00011 per result.

        Example:
            res = client.playstore.reviews(appId="com.whatsapp", limit=3)
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "playstore.reviews", dict(input), options
        )
        return RunResult[PlaystoreReviewsData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncPlaystoreNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PlaystoreReviewsInput],
    ) -> RunResult[PlaystoreReviewsData]:
        """Google Play Reviews

        Fetch Google Play reviews for any Android app by package name or store URL -
        ratings, review text, dates, and helpfulness votes, billed per request in
        USD.

        Price: $0.00011 per result.

        Example:
            res = client.playstore.reviews(appId="com.whatsapp", limit=3)
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "playstore.reviews", dict(input), options
        )
        return RunResult[PlaystoreReviewsData].model_validate(
            raw.model_dump(by_alias=True)
        )
