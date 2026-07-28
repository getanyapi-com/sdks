# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the google_ads platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class GoogleAdsAdDetailsInput(TypedDict, total=False):
    """Input for Google Ads Ad Details."""

    url: Required[str]
    """Google Ads Transparency Center creative URL (e.g. "https://adstransparency.google.com/advertiser/AR.../creative/CR...")."""


class GoogleAdsAdvertiserSearchInput(TypedDict, total=False):
    """Input for Google Ads Advertiser Search."""

    query: Required[str]
    """Advertiser name or keyword to search for (e.g. "lululemon")."""
    region: NotRequired[str]
    """Two-letter country code to scope results (e.g. "AU", "CA"). Defaults to US."""


class GoogleAdsCompanyAdsInput(TypedDict, total=False):
    """Input for Google Ads Company Ads."""

    advertiserId: NotRequired[str]
    """Advertiser ID. Provide either domain or advertiserId."""
    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor."""
    domain: NotRequired[str]
    """Company domain (e.g. "lululemon.com"). Provide either domain or advertiserId."""
    endDate: NotRequired[str]
    """Only return ads first shown on or before this date, format YYYY-MM-DD (e.g. 2024-12-31)."""
    format: NotRequired[Literal["text", "image", "video"]]
    """Ad format filter."""
    platform: NotRequired[
        Literal[
            "google_maps", "google_play", "google_search", "google_shopping", "youtube"
        ]
    ]
    """Platform filter."""
    region: NotRequired[str]
    """Two-letter country code to scope results (e.g. "US", "AU")."""
    startDate: NotRequired[str]
    """Only return ads first shown on or after this date, format YYYY-MM-DD (e.g. 2024-01-01)."""
    topic: NotRequired[Literal["all", "political"]]
    """Search topic. "political" requires a region."""


class GoogleAdsSearchInput(TypedDict, total=False):
    """Input for Google Ads Transparency."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    url: Required[str]
    """A Google Ads Transparency Center URL for a selected advertiser or domain (e.g. https://adstransparency.google.com/advertiser/AR01614014350098432001?region=US)."""


class GoogleAdsAdDetailsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleAdsAdvertiserSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleAdsCompanyAdsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleAdsSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class GoogleAdsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def ad_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsAdDetailsInput],
    ) -> BareRunResult[GoogleAdsAdDetailsData]:
        """Google Ads Ad Details

        Look up a single Google Ads Transparency Center creative by URL and get its
        format, run dates, impression range, regions, and creative variations as
        clean JSON.

        Price: $0.002 per request.

        Example:
            res = client.google_ads.ad_details(url="https://adstransparency.google.com/advertiser/AR01614014350098432001/creative/CR10449491775734153217")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google_ads.ad_details", dict(input), options
        )
        return BareRunResult[GoogleAdsAdDetailsData].model_validate(raw)

    def advertiser_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsAdvertiserSearchInput],
    ) -> BareRunResult[GoogleAdsAdvertiserSearchData]:
        """Google Ads Advertiser Search

        Search the Google Ads Transparency Center for advertisers by keyword and get
        matching advertiser IDs, regions, and estimated ad counts as clean JSON.

        Price: $0.002 per request.

        Example:
            res = client.google_ads.advertiser_search(query="lululemon")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google_ads.advertiser_search", dict(input), options
        )
        return BareRunResult[GoogleAdsAdvertiserSearchData].model_validate(raw)

    def company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsCompanyAdsInput],
    ) -> BareRunResult[GoogleAdsCompanyAdsData]:
        """Google Ads Company Ads

        List the ads a company is running from the Google Ads Transparency Center by
        domain or advertiser ID (creative ID, format, ad URL, and first/last shown
        dates) with cursor pagination.

        Price: $0.002 per request.

        Example:
            res = client.google_ads.company_ads(domain="lululemon.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google_ads.company_ads", dict(input), options
        )
        return BareRunResult[GoogleAdsCompanyAdsData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsSearchInput],
    ) -> BareRunResult[GoogleAdsSearchData]:
        """Google Ads Transparency

        Pull the ads an advertiser is currently running from the Google Ads
        Transparency Center (creative details, formats, and run dates) as clean
        JSON.

        Price: $0.00005 per request plus $0.0013 per result (maximum $0.02605).

        Example:
            res = client.google_ads.search(limit=3, url="https://adstransparency.google.com/?region=US&domain=nike.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "google_ads.search", dict(input), options
        )
        return BareRunResult[GoogleAdsSearchData].model_validate(raw)


class AsyncGoogleAdsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def ad_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsAdDetailsInput],
    ) -> BareRunResult[GoogleAdsAdDetailsData]:
        """Google Ads Ad Details

        Look up a single Google Ads Transparency Center creative by URL and get its
        format, run dates, impression range, regions, and creative variations as
        clean JSON.

        Price: $0.002 per request.

        Example:
            res = client.google_ads.ad_details(url="https://adstransparency.google.com/advertiser/AR01614014350098432001/creative/CR10449491775734153217")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google_ads.ad_details", dict(input), options
        )
        return BareRunResult[GoogleAdsAdDetailsData].model_validate(raw)

    async def advertiser_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsAdvertiserSearchInput],
    ) -> BareRunResult[GoogleAdsAdvertiserSearchData]:
        """Google Ads Advertiser Search

        Search the Google Ads Transparency Center for advertisers by keyword and get
        matching advertiser IDs, regions, and estimated ad counts as clean JSON.

        Price: $0.002 per request.

        Example:
            res = client.google_ads.advertiser_search(query="lululemon")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google_ads.advertiser_search", dict(input), options
        )
        return BareRunResult[GoogleAdsAdvertiserSearchData].model_validate(raw)

    async def company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsCompanyAdsInput],
    ) -> BareRunResult[GoogleAdsCompanyAdsData]:
        """Google Ads Company Ads

        List the ads a company is running from the Google Ads Transparency Center by
        domain or advertiser ID (creative ID, format, ad URL, and first/last shown
        dates) with cursor pagination.

        Price: $0.002 per request.

        Example:
            res = client.google_ads.company_ads(domain="lululemon.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google_ads.company_ads", dict(input), options
        )
        return BareRunResult[GoogleAdsCompanyAdsData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsSearchInput],
    ) -> BareRunResult[GoogleAdsSearchData]:
        """Google Ads Transparency

        Pull the ads an advertiser is currently running from the Google Ads
        Transparency Center (creative details, formats, and run dates) as clean
        JSON.

        Price: $0.00005 per request plus $0.0013 per result (maximum $0.02605).

        Example:
            res = client.google_ads.search(limit=3, url="https://adstransparency.google.com/?region=US&domain=nike.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "google_ads.search", dict(input), options
        )
        return BareRunResult[GoogleAdsSearchData].model_validate(raw)
