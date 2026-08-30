# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the trustpilot platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class TrustpilotReviewsInput(TypedDict, total=False):
    """Input for Trustpilot Reviews."""

    company: Required[str]
    """Brand name or Trustpilot review-page URL to fetch reviews for (e.g. nike or https://www.trustpilot.com/review/nike.com)."""
    countries: NotRequired[list[str]]
    """Only return reviews from reviewers in these ISO 3166-1 alpha-2 countries (e.g. ["US", "GB"]); omit for all countries."""
    languages: NotRequired[list[str]]
    """Only return reviews in these ISO 639-1 languages (e.g. ["en", "de"]); omit for all languages."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-200, default 200). Trustpilot serves at most 200 reviews per company. You are billed per result returned, so a lower limit costs less. Range: 1 to 200."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    sortBy: NotRequired[str]
    """Review ordering: auto, relevancy, or recent (e.g. recent). Default: auto."""
    stars: NotRequired[str]
    """Limit reviews to a single star rating from 1 to 5 (e.g. 5); omit for all ratings."""
    startDate: NotRequired[str]
    """Only return reviews on or after this date, inclusive, in YYYY-MM-DD format (e.g. 2026-01-01)."""
    verifiedOnly: NotRequired[bool]
    """Set true to return only verified reviews (e.g. true). Default: false."""


class TrustpilotReviewsData(BaseModel):
    items: list[TrustpilotReviewsItem] = Field(
        description="Review records: star rating, review title and text, date, reviewer name and country, and company reply when present. Populated whenever the provider has data for the entity."
    )


class TrustpilotReviewsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str | None = Field(
        default=None,
        alias="avatarUrl",
        description="URL of the reviewer's avatar image.",
    )
    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    rating: float = Field(description="Star rating (1-5).")
    text: str = Field(
        description="Review body text. Populated whenever the provider has data for the entity."
    )
    title: str | None = Field(
        default=None,
        description="Review title or headline. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    url: str | None = Field(
        default=None,
        description="Canonical review URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    verified: bool | None = Field(
        default=None, description="Whether the reviewer is verified."
    )


class TrustpilotNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TrustpilotReviewsInput],
    ) -> RunResult[TrustpilotReviewsData]:
        """Trustpilot Reviews

        Pull Trustpilot reviews for any company by brand name: star ratings, review
        text, dates, and reviewer details as clean JSON.

        Price: $0.00006 per request plus $0.00005 per result (maximum $0.00886).

        Example:
            res = client.trustpilot.reviews(company="stripe.com", limit=3)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "trustpilot.reviews", dict(input), options
        )
        return RunResult[TrustpilotReviewsData].model_validate(raw)


class AsyncTrustpilotNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TrustpilotReviewsInput],
    ) -> RunResult[TrustpilotReviewsData]:
        """Trustpilot Reviews

        Pull Trustpilot reviews for any company by brand name: star ratings, review
        text, dates, and reviewer details as clean JSON.

        Price: $0.00006 per request plus $0.00005 per result (maximum $0.00886).

        Example:
            res = client.trustpilot.reviews(company="stripe.com", limit=3)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "trustpilot.reviews", dict(input), options
        )
        return RunResult[TrustpilotReviewsData].model_validate(raw)
