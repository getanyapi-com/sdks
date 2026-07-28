# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the appstore platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

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
    model_config = ConfigDict(extra="allow")


class AppstoreNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AppstoreReviewsInput],
    ) -> BareRunResult[AppstoreReviewsData]:
        """App Store Reviews

        Get App Store reviews for any iOS app by app ID, in any storefront country:
        ratings, titles, and review text.

        Price: $0 per request plus $0.0001 per result (maximum $0.01).

        Example:
            res = client.appstore.reviews(appId="389801252", country="us", limit=3)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "appstore.reviews", dict(input), options
        )
        return BareRunResult[AppstoreReviewsData].model_validate(raw)


class AsyncAppstoreNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AppstoreReviewsInput],
    ) -> BareRunResult[AppstoreReviewsData]:
        """App Store Reviews

        Get App Store reviews for any iOS app by app ID, in any storefront country:
        ratings, titles, and review text.

        Price: $0 per request plus $0.0001 per result (maximum $0.01).

        Example:
            res = client.appstore.reviews(appId="389801252", country="us", limit=3)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "appstore.reviews", dict(input), options
        )
        return BareRunResult[AppstoreReviewsData].model_validate(raw)
