# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the appstore platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class AppstoreReviewsInput(TypedDict, total=False):
    """Input for App Store Reviews."""

    appId: Required[str]
    """Numeric App Store app ID, the digits at the end of the app's store URL without the 'id' prefix (e.g. 310633997)."""
    country: NotRequired[str]
    """Two-letter App Store storefront country code to read reviews from. Default: us."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-100, default 100). You are billed per result returned, so a lower limit costs less. Range: 1 to 100."""


class AppstoreReviewsData(BaseModel):
    items: list[AppstoreReviewsItem] = Field(
        description="Review records: star rating, review title and text, reviewer nickname, app version, and review date. Populated whenever the provider returns data."
    )


class AppstoreReviewsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    rating: float
    text: str = Field(description="Populated whenever the provider returns data.")


class AppstoreNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AppstoreReviewsInput],
    ) -> RunResult[AppstoreReviewsData]:
        """App Store Reviews

        Get App Store reviews for any iOS app by app ID, in any storefront country -
        ratings, titles, and review text with transparent per-request USD pricing.

        Price: $0.0001 per result.

        Example:
            res = client.appstore.reviews(appId="389801252", country="us", limit=3)
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "appstore.reviews", dict(input), options
        )
        return RunResult[AppstoreReviewsData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncAppstoreNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AppstoreReviewsInput],
    ) -> RunResult[AppstoreReviewsData]:
        """App Store Reviews

        Get App Store reviews for any iOS app by app ID, in any storefront country -
        ratings, titles, and review text with transparent per-request USD pricing.

        Price: $0.0001 per result.

        Example:
            res = client.appstore.reviews(appId="389801252", country="us", limit=3)
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "appstore.reviews", dict(input), options
        )
        return RunResult[AppstoreReviewsData].model_validate(
            raw.model_dump(by_alias=True)
        )
