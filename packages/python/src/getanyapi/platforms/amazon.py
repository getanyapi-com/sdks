# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the amazon platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class AmazonAsinsInput(TypedDict, total=False):
    """Input for Amazon Products by ASIN."""

    amazonDomain: NotRequired[str]
    """Amazon marketplace domain to fetch products from (e.g. amazon.com, amazon.de, amazon.co.uk). Default: amazon.com."""
    asins: Required[list[str]]
    """Up to 10 Amazon ASINs to look up (e.g. ["B0CHX1W1XY", "B09G9FPHY6"])."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less. Range: 1 to 10."""


class AmazonBestsellersInput(TypedDict, total=False):
    """Input for Amazon Bestsellers."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    url: Required[str]
    """Amazon Best Sellers category URL (e.g. https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics)."""


class AmazonProductInput(TypedDict, total=False):
    """Input for Amazon Product."""

    url: Required[str]
    """Full Amazon product URL (e.g. https://www.amazon.com/dp/B0CX23V2ZK)."""


class AmazonReviewsInput(TypedDict, total=False):
    """Input for Amazon Reviews."""

    endDate: NotRequired[str]
    """Only return reviews on or before this date, inclusive, in YYYY-MM-DD format (e.g. 2026-06-30)."""
    keywords: NotRequired[list[str]]
    """Only return reviews whose text contains one of these keywords (e.g. ["battery", "screen"])."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-50, default 50). You are billed per result returned, so a lower limit costs less. Range: 1 to 50."""
    product: Required[str]
    """Amazon product ASIN or full product URL (e.g. B07CMS5Q6P)."""
    ratings: NotRequired[list[Literal["1", "2", "3", "4", "5"]]]
    """Only return reviews whose star rating is in this set (e.g. ["5", "4"] for 4 and 5 star reviews); omit for all ratings."""
    region: NotRequired[
        Literal[
            "amazon.com",
            "amazon.ca",
            "amazon.de",
            "amazon.fr",
            "amazon.co.uk",
            "amazon.it",
            "amazon.es",
            "amazon.com.au",
            "amazon.co.jp",
            "amazon.com.br",
            "amazon.com.mx",
            "amazon.nl",
            "amazon.ie",
            "amazon.se",
            "amazon.com.tr",
            "amazon.ae",
            "amazon.sg",
            "amazon.sa",
            "amazon.pl",
            "amazon.com.be",
            "amazon.eg",
            "amazon.in",
        ]
    ]
    """Amazon marketplace domain the product ASIN belongs to (e.g. amazon.co.uk). Default: amazon.com."""
    sort: NotRequired[Literal["helpful", "recent"]]
    """Review sort order: most helpful first or most recent first (e.g. recent). Default: helpful."""
    startDate: NotRequired[str]
    """Only return reviews on or after this date, inclusive, in YYYY-MM-DD format (e.g. 2026-01-01)."""
    verifiedOnly: NotRequired[bool]
    """Set true to return only verified-purchase reviews (e.g. true). Default: false."""


class AmazonSearchInput(TypedDict, total=False):
    """Input for Amazon Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    url: Required[str]
    """Amazon search or category URL to pull results from (e.g. https://www.amazon.com/s?k=gaming+mouse)."""


class AmazonAsinsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class AmazonBestsellersData(BaseModel):
    model_config = ConfigDict(extra="allow")


class AmazonProductData(BaseModel):
    model_config = ConfigDict(extra="allow")


class AmazonReviewsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class AmazonSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class AmazonNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def asins(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonAsinsInput],
    ) -> BareRunResult[AmazonAsinsData]:
        """Amazon Products by ASIN

        Look up to 10 Amazon products in one call by ASIN (title, brand, price,
        ratings, images, and attributes) as normalized JSON.

        Price: $0 per request plus $0.0035 per asin (maximum $0.035).

        Example:
            res = client.amazon.asins(asins=["B09G9FPHY6"], limit=3)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.asins", dict(input), options
        )
        return BareRunResult[AmazonAsinsData].model_validate(raw)

    def bestsellers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonBestsellersInput],
    ) -> BareRunResult[AmazonBestsellersData]:
        """Amazon Bestsellers

        List the top-ranked products of any Amazon Best Sellers category (rank,
        title, price, and rating) in one normalized request.

        Price: $0 per request plus $0.0041 per result (maximum $0.082).

        Example:
            res = client.amazon.bestsellers(limit=3, url="https://www.amazon.com/gp/bestsellers/electronics")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.bestsellers", dict(input), options
        )
        return BareRunResult[AmazonBestsellersData].model_validate(raw)

    def product(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonProductInput],
    ) -> BareRunResult[AmazonProductData]:
        """Amazon Product

        Fetch full Amazon product details (title, brand, price when in stock,
        images, ratings, review count, variants, and attributes) from a product URL.

        Price: $0.001 per request plus $0.0081 per result (maximum $0.0091).

        Example:
            res = client.amazon.product(url="https://www.amazon.com/dp/B00NTCH52W")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.product", dict(input), options
        )
        return BareRunResult[AmazonProductData].model_validate(raw)

    def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonReviewsInput],
    ) -> BareRunResult[AmazonReviewsData]:
        """Amazon Reviews

        Pull up to 50 customer reviews for any Amazon product by ASIN or URL:
        rating, title, text, date, and verified-purchase badge.

        Price: $0.01625 per request.

        Example:
            res = client.amazon.reviews(limit=3, product="B07PXGQC1Q")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.reviews", dict(input), options
        )
        return BareRunResult[AmazonReviewsData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonSearchInput],
    ) -> BareRunResult[AmazonSearchData]:
        """Amazon Search

        Search Amazon from any search or category URL and get up to 20 matching
        products (title, price, rating, and thumbnail) in one normalized response.

        Price: $0 per request plus $0.0035 per result (maximum $0.07).

        Example:
            res = client.amazon.search(limit=3, url="https://www.amazon.com/s?k=laptop")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.search", dict(input), options
        )
        return BareRunResult[AmazonSearchData].model_validate(raw)


class AsyncAmazonNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def asins(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonAsinsInput],
    ) -> BareRunResult[AmazonAsinsData]:
        """Amazon Products by ASIN

        Look up to 10 Amazon products in one call by ASIN (title, brand, price,
        ratings, images, and attributes) as normalized JSON.

        Price: $0 per request plus $0.0035 per asin (maximum $0.035).

        Example:
            res = client.amazon.asins(asins=["B09G9FPHY6"], limit=3)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.asins", dict(input), options
        )
        return BareRunResult[AmazonAsinsData].model_validate(raw)

    async def bestsellers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonBestsellersInput],
    ) -> BareRunResult[AmazonBestsellersData]:
        """Amazon Bestsellers

        List the top-ranked products of any Amazon Best Sellers category (rank,
        title, price, and rating) in one normalized request.

        Price: $0 per request plus $0.0041 per result (maximum $0.082).

        Example:
            res = client.amazon.bestsellers(limit=3, url="https://www.amazon.com/gp/bestsellers/electronics")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.bestsellers", dict(input), options
        )
        return BareRunResult[AmazonBestsellersData].model_validate(raw)

    async def product(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonProductInput],
    ) -> BareRunResult[AmazonProductData]:
        """Amazon Product

        Fetch full Amazon product details (title, brand, price when in stock,
        images, ratings, review count, variants, and attributes) from a product URL.

        Price: $0.001 per request plus $0.0081 per result (maximum $0.0091).

        Example:
            res = client.amazon.product(url="https://www.amazon.com/dp/B00NTCH52W")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.product", dict(input), options
        )
        return BareRunResult[AmazonProductData].model_validate(raw)

    async def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonReviewsInput],
    ) -> BareRunResult[AmazonReviewsData]:
        """Amazon Reviews

        Pull up to 50 customer reviews for any Amazon product by ASIN or URL:
        rating, title, text, date, and verified-purchase badge.

        Price: $0.01625 per request.

        Example:
            res = client.amazon.reviews(limit=3, product="B07PXGQC1Q")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.reviews", dict(input), options
        )
        return BareRunResult[AmazonReviewsData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonSearchInput],
    ) -> BareRunResult[AmazonSearchData]:
        """Amazon Search

        Search Amazon from any search or category URL and get up to 20 matching
        products (title, price, rating, and thumbnail) in one normalized response.

        Price: $0 per request plus $0.0035 per result (maximum $0.07).

        Example:
            res = client.amazon.search(limit=3, url="https://www.amazon.com/s?k=laptop")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.search", dict(input), options
        )
        return BareRunResult[AmazonSearchData].model_validate(raw)
