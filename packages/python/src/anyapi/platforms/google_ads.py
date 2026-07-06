# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the google_ads platform."""

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
    topic: NotRequired[Literal["all", "political"]]
    """Search topic. "political" requires a region."""


class GoogleAdsSearchInput(TypedDict, total=False):
    """Input for Google Ads Transparency."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    url: Required[str]
    """A Google Ads Transparency Center URL for a selected advertiser or domain (e.g. https://adstransparency.google.com/advertiser/AR01614014350098432001?region=US)."""


class GoogleAdsAdDetailsData(BaseModel):
    advertiserId: str = Field(
        description="Populated whenever the provider returns data."
    )
    creativeId: str = Field(description="Populated whenever the provider returns data.")
    firstShown: str = Field(description="ISO 8601 date.")
    format: str = Field(description="Populated whenever the provider returns data.")
    impressionsMax: int
    impressionsMin: int
    lastShown: str = Field(description="ISO 8601 date.")
    variations: list[GoogleAdsAdDetailsVariation] = Field(
        description="Populated whenever the provider returns data."
    )


class GoogleAdsAdDetailsVariation(BaseModel):
    model_config = ConfigDict(extra="allow")

    allText: str
    description: str
    destinationUrl: str
    headline: str
    imageUrl: str


class GoogleAdsAdvertiserSearchData(BaseModel):
    advertisers: list[GoogleAdsAdvertiserSearchAdvertiser] = Field(
        description="Populated whenever the provider returns data."
    )


class GoogleAdsAdvertiserSearchAdvertiser(BaseModel):
    model_config = ConfigDict(extra="allow")

    adsEstimate: int = Field(
        description="Estimated number of ads for this advertiser/region."
    )
    advertiserId: str = Field(
        description="Populated whenever the provider returns data."
    )
    name: str = Field(description="Populated whenever the provider returns data.")
    region: str = Field(description="Populated whenever the provider returns data.")


class GoogleAdsCompanyAdsData(BaseModel):
    ads: list[GoogleAdsCompanyAdsAd] = Field(
        description="Populated whenever the provider returns data."
    )
    adsEstimate: int = Field(description="Estimated total number of ads.")
    nextCursor: str


class GoogleAdsCompanyAdsAd(BaseModel):
    model_config = ConfigDict(extra="allow")

    adUrl: str = Field(description="Populated whenever the provider returns data.")
    advertiserId: str = Field(
        description="Populated whenever the provider returns data."
    )
    advertiserName: str = Field(
        description="Populated whenever the provider returns data."
    )
    creativeId: str = Field(description="Populated whenever the provider returns data.")
    firstShown: str = Field(description="ISO 8601 date.")
    format: str = Field(description="Populated whenever the provider returns data.")
    imageUrl: str
    lastShown: str = Field(description="ISO 8601 date.")


class GoogleAdsSearchData(BaseModel):
    items: list[GoogleAdsSearchItem] = Field(
        description="Ad records from the Transparency Center: advertiser, ad format, creative details, preview URL, and first/last shown dates. Populated whenever the provider returns data."
    )


class GoogleAdsSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class GoogleAdsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def ad_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsAdDetailsInput],
    ) -> RunResult[GoogleAdsAdDetailsData]:
        """Google Ads Ad Details

        Look up a single Google Ads Transparency Center creative by URL and get its
        format, run dates, impression range, regions, and creative variations as
        clean JSON, billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.google_ads.ad_details(url="https://adstransparency.google.com/advertiser/AR01614014350098432001/creative/CR10449491775734153217")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "google_ads.ad_details", dict(input), options
        )
        return RunResult[GoogleAdsAdDetailsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def advertiser_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsAdvertiserSearchInput],
    ) -> RunResult[GoogleAdsAdvertiserSearchData]:
        """Google Ads Advertiser Search

        Search the Google Ads Transparency Center for advertisers by keyword and get
        matching advertiser IDs, regions, and estimated ad counts as clean JSON,
        billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.google_ads.advertiser_search(query="lululemon")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "google_ads.advertiser_search", dict(input), options
        )
        return RunResult[GoogleAdsAdvertiserSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsCompanyAdsInput],
    ) -> RunResult[GoogleAdsCompanyAdsData]:
        """Google Ads Company Ads

        List the ads a company is running from the Google Ads Transparency Center by
        domain or advertiser ID - creative ID, format, ad URL, and first/last shown
        dates - with cursor pagination, billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.google_ads.company_ads(domain="lululemon.com")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "google_ads.company_ads", dict(input), options
        )
        return RunResult[GoogleAdsCompanyAdsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsCompanyAdsInput],
    ) -> Paginator[GoogleAdsCompanyAdsAd, GoogleAdsCompanyAdsData]:
        """Iterate Google Ads Company Ads results, following pagination cursors.

        Yields flattened items from the `ads` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "google_ads.company_ads", dict(input), "ads", options=options
        )

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsSearchInput],
    ) -> RunResult[GoogleAdsSearchData]:
        """Google Ads Transparency

        Pull the ads an advertiser is currently running from the Google Ads
        Transparency Center - creative details, formats, and run dates - as clean
        JSON, billed per request in USD.

        Price: $0.0013 per result.

        Example:
            res = client.google_ads.search(limit=3, url="https://adstransparency.google.com/?region=US&domain=nike.com")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "google_ads.search", dict(input), options
        )
        return RunResult[GoogleAdsSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )


class AsyncGoogleAdsNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def ad_details(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsAdDetailsInput],
    ) -> RunResult[GoogleAdsAdDetailsData]:
        """Google Ads Ad Details

        Look up a single Google Ads Transparency Center creative by URL and get its
        format, run dates, impression range, regions, and creative variations as
        clean JSON, billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.google_ads.ad_details(url="https://adstransparency.google.com/advertiser/AR01614014350098432001/creative/CR10449491775734153217")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "google_ads.ad_details", dict(input), options
        )
        return RunResult[GoogleAdsAdDetailsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def advertiser_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsAdvertiserSearchInput],
    ) -> RunResult[GoogleAdsAdvertiserSearchData]:
        """Google Ads Advertiser Search

        Search the Google Ads Transparency Center for advertisers by keyword and get
        matching advertiser IDs, regions, and estimated ad counts as clean JSON,
        billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.google_ads.advertiser_search(query="lululemon")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "google_ads.advertiser_search", dict(input), options
        )
        return RunResult[GoogleAdsAdvertiserSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsCompanyAdsInput],
    ) -> RunResult[GoogleAdsCompanyAdsData]:
        """Google Ads Company Ads

        List the ads a company is running from the Google Ads Transparency Center by
        domain or advertiser ID - creative ID, format, ad URL, and first/last shown
        dates - with cursor pagination, billed per request in USD.

        Price: $0.002 per request.

        Example:
            res = client.google_ads.company_ads(domain="lululemon.com")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "google_ads.company_ads", dict(input), options
        )
        return RunResult[GoogleAdsCompanyAdsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_company_ads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsCompanyAdsInput],
    ) -> AsyncPaginator[GoogleAdsCompanyAdsAd, GoogleAdsCompanyAdsData]:
        """Iterate Google Ads Company Ads results, following pagination cursors.

        Yields flattened items from the `ads` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "google_ads.company_ads", dict(input), "ads", options=options
        )

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[GoogleAdsSearchInput],
    ) -> RunResult[GoogleAdsSearchData]:
        """Google Ads Transparency

        Pull the ads an advertiser is currently running from the Google Ads
        Transparency Center - creative details, formats, and run dates - as clean
        JSON, billed per request in USD.

        Price: $0.0013 per result.

        Example:
            res = client.google_ads.search(limit=3, url="https://adstransparency.google.com/?region=US&domain=nike.com")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "google_ads.search", dict(input), options
        )
        return RunResult[GoogleAdsSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )
