# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the amazon platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

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

    limit: NotRequired[int]
    """Maximum number of results to return (1-50, default 50). You are billed per result returned, so a lower limit costs less. Range: 1 to 50."""
    product: Required[str]
    """Amazon product ASIN or full product URL (e.g. B07CMS5Q6P)."""
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


class AmazonSearchInput(TypedDict, total=False):
    """Input for Amazon Search."""

    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less. Range: 1 to 20."""
    url: Required[str]
    """Amazon search or category URL to pull results from (e.g. https://www.amazon.com/s?k=gaming+mouse)."""


class AmazonAsinsData(BaseModel):
    items: list[AmazonAsinsItem] = Field(
        description="Product records: ASIN, title, brand, price, ratings, images, and attributes."
    )


class AmazonAsinsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    asin: str = Field(description="Amazon Standard Identification Number.")
    brand: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    condition: str | None = None
    currency: str | None = None
    image: str | None = Field(
        default=None,
        description="Primary product image URL. Present whenever the upstream returns this record.",
    )
    in_stock: bool | None = Field(default=None, alias="inStock")
    price: float | None = Field(
        default=None, description="Buy-box price; 0 when no offer is available."
    )
    rating: float | None = Field(default=None, description="Average star rating, 0-5.")
    reviews_count: int | None = Field(default=None, alias="reviewsCount")
    seller_name: str | None = Field(default=None, alias="sellerName")
    title: str
    url: str


class AmazonBestsellersData(BaseModel):
    items: list[AmazonBestsellersItem] = Field(
        description="Best-seller product records: category rank, title, price, rating, thumbnail, and product URL."
    )


class AmazonBestsellersItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    asin: str
    title: str
    url: str


class AmazonProductData(BaseModel):
    items: list[AmazonProductItem] = Field(
        description="Product detail records: title, url, asin, brand, price amount (when in stock), images, rating, review count, and (passed through) variant details and attributes."
    )


class AmazonProductItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    asin: str
    brand: str | None = Field(
        default=None,
        description="Manufacturer or brand name. Present whenever the upstream returns this record.",
    )
    images: list[str] | None = Field(
        default=None,
        description="High-resolution product image URLs. Present whenever the upstream returns this record.",
    )
    price_amount: float | None = Field(
        default=None,
        alias="priceAmount",
        description="Current price as a numeric amount. Absent when the listing has no buyable price (out of stock).",
    )
    rating: float | None = Field(
        default=None, description="Average customer star rating, 0 to 5."
    )
    review_count: int | None = Field(
        default=None,
        alias="reviewCount",
        description="Total number of customer reviews.",
    )
    title: str
    url: str


class AmazonReviewsData(BaseModel):
    items: list[AmazonReviewsItem] = Field(
        description="Customer review records: star rating, title, review text, date, reviewer, and verified-purchase status."
    )


class AmazonReviewsItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    rating: float
    text: str


class AmazonSearchData(BaseModel):
    items: list[AmazonSearchItem] = Field(
        description="Search result product records: title, ASIN, price amount, currency, rating, review count, and thumbnail."
    )


class AmazonSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    asin: str
    currency: str | None = Field(
        default=None, description="Currency symbol or code for the price."
    )
    price_amount: float | None = Field(
        default=None,
        alias="priceAmount",
        description="Current price as a numeric amount.",
    )
    rating: float | None = Field(default=None, description="Average star rating.")
    review_count: int | None = Field(
        default=None, alias="reviewCount", description="Number of customer reviews."
    )
    thumbnail: str | None = Field(
        default=None,
        description="Product thumbnail image URL. Present whenever the upstream returns this record.",
    )
    title: str


class AmazonNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def asins(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonAsinsInput],
    ) -> RunResult[AmazonAsinsData]:
        """Amazon Products by ASIN

        Look up to 10 Amazon products in one call by ASIN - title, brand, price,
        ratings, images, and attributes - as normalized JSON with flat per-request
        USD pricing.

        Price: $0.0035 per asin.

        Example:
            res = client.amazon.asins(asins=["B09G9FPHY6"], limit=3)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.asins", dict(input), options
        )
        return RunResult[AmazonAsinsData].model_validate(raw)

    def bestsellers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonBestsellersInput],
    ) -> RunResult[AmazonBestsellersData]:
        """Amazon Bestsellers

        List the top-ranked products of any Amazon Best Sellers category - rank,
        title, price, and rating - in one normalized, flat-priced request.

        Price: $0.0041 per result.

        Example:
            res = client.amazon.bestsellers(limit=3, url="https://www.amazon.com/gp/bestsellers/electronics")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.bestsellers", dict(input), options
        )
        return RunResult[AmazonBestsellersData].model_validate(raw)

    def product(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonProductInput],
    ) -> RunResult[AmazonProductData]:
        """Amazon Product

        Fetch full Amazon product details (title, brand, price when in stock,
        images, ratings, review count, variants, and attributes) from a product URL,
        with transparent per-request USD pricing.

        Price: $0.001 per request plus $0.0081 per result.

        Example:
            res = client.amazon.product(url="https://www.amazon.com/dp/B00NTCH52W")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.product", dict(input), options
        )
        return RunResult[AmazonProductData].model_validate(raw)

    def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonReviewsInput],
    ) -> RunResult[AmazonReviewsData]:
        """Amazon Reviews

        Pull up to 50 customer reviews for any Amazon product by ASIN or URL -
        rating, title, text, date, and verified-purchase badge - at a flat
        per-request USD price.

        Price: $0.01625 per request.

        Example:
            res = client.amazon.reviews(limit=3, product="B07FZ8S74R")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.reviews", dict(input), options
        )
        return RunResult[AmazonReviewsData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonSearchInput],
    ) -> RunResult[AmazonSearchData]:
        """Amazon Search

        Search Amazon from any search or category URL and get up to 20 matching
        products - title, price, rating, and thumbnail - in one normalized,
        flat-priced response.

        Price: $0.0035 per result.

        Example:
            res = client.amazon.search(limit=3, url="https://www.amazon.com/s?k=laptop")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.search", dict(input), options
        )
        return RunResult[AmazonSearchData].model_validate(raw)


class AsyncAmazonNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def asins(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonAsinsInput],
    ) -> RunResult[AmazonAsinsData]:
        """Amazon Products by ASIN

        Look up to 10 Amazon products in one call by ASIN - title, brand, price,
        ratings, images, and attributes - as normalized JSON with flat per-request
        USD pricing.

        Price: $0.0035 per asin.

        Example:
            res = client.amazon.asins(asins=["B09G9FPHY6"], limit=3)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.asins", dict(input), options
        )
        return RunResult[AmazonAsinsData].model_validate(raw)

    async def bestsellers(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonBestsellersInput],
    ) -> RunResult[AmazonBestsellersData]:
        """Amazon Bestsellers

        List the top-ranked products of any Amazon Best Sellers category - rank,
        title, price, and rating - in one normalized, flat-priced request.

        Price: $0.0041 per result.

        Example:
            res = client.amazon.bestsellers(limit=3, url="https://www.amazon.com/gp/bestsellers/electronics")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.bestsellers", dict(input), options
        )
        return RunResult[AmazonBestsellersData].model_validate(raw)

    async def product(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonProductInput],
    ) -> RunResult[AmazonProductData]:
        """Amazon Product

        Fetch full Amazon product details (title, brand, price when in stock,
        images, ratings, review count, variants, and attributes) from a product URL,
        with transparent per-request USD pricing.

        Price: $0.001 per request plus $0.0081 per result.

        Example:
            res = client.amazon.product(url="https://www.amazon.com/dp/B00NTCH52W")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.product", dict(input), options
        )
        return RunResult[AmazonProductData].model_validate(raw)

    async def reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonReviewsInput],
    ) -> RunResult[AmazonReviewsData]:
        """Amazon Reviews

        Pull up to 50 customer reviews for any Amazon product by ASIN or URL -
        rating, title, text, date, and verified-purchase badge - at a flat
        per-request USD price.

        Price: $0.01625 per request.

        Example:
            res = client.amazon.reviews(limit=3, product="B07FZ8S74R")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.reviews", dict(input), options
        )
        return RunResult[AmazonReviewsData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[AmazonSearchInput],
    ) -> RunResult[AmazonSearchData]:
        """Amazon Search

        Search Amazon from any search or category URL and get up to 20 matching
        products - title, price, rating, and thumbnail - in one normalized,
        flat-priced response.

        Price: $0.0035 per result.

        Example:
            res = client.amazon.search(limit=3, url="https://www.amazon.com/s?k=laptop")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.search", dict(input), options
        )
        return RunResult[AmazonSearchData].model_validate(raw)
