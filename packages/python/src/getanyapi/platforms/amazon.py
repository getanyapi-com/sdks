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
        description="Product records: ASIN, title, brand, price, ratings, images, and attributes. Populated whenever the provider has data for the entity."
    )


class AmazonAsinsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    asin: str = Field(
        description="Amazon Standard Identification Number. Populated whenever the provider has data for the entity."
    )
    brand: str | None = Field(
        default=None,
        description="Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    condition: str | None = None
    currency: str | None = None
    image: str | None = Field(
        default=None,
        description="Primary product image URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    in_stock: bool | None = Field(default=None, alias="inStock")
    price: float | None = Field(
        default=None, description="Buy-box price; 0 when no offer is available."
    )
    rating: float | None = Field(default=None, description="Average star rating, 0-5.")
    reviews_count: int | None = Field(default=None, alias="reviewsCount")
    seller_name: str | None = Field(default=None, alias="sellerName")
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class AmazonBestsellersData(BaseModel):
    items: list[AmazonBestsellersItem] = Field(
        description="Best-seller product records ordered by category rank. Populated whenever the provider has data for the entity."
    )


class AmazonBestsellersItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    asin: str = Field(
        description="Amazon Standard Identification Number. Populated whenever the provider has data for the entity."
    )
    category_name: str | None = Field(
        default=None,
        alias="categoryName",
        description="Best Sellers category name the product ranks in.",
    )
    currency: str | None = Field(
        default=None, description='Price currency symbol or code, e.g. "$".'
    )
    image: str | None = Field(
        default=None, description="Primary product thumbnail image URL."
    )
    offers_count: int | None = Field(
        default=None,
        alias="offersCount",
        description="Number of available offers; 0 when unknown.",
    )
    price: float | None = Field(
        default=None, description="Listed price; 0 when no offer is available."
    )
    rank: int | None = Field(
        default=None, description="Best-seller rank within the category (1 = top)."
    )
    rating: float | None = Field(
        default=None, description="Average star rating, 0-5; 0 when unrated."
    )
    reviews_count: int | None = Field(
        default=None,
        alias="reviewsCount",
        description="Number of customer reviews; 0 when none.",
    )
    title: str = Field(
        description="Product title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical product detail page URL (tracking query params stripped). Populated whenever the provider has data for the entity."
    )


class AmazonProductData(BaseModel):
    items: list[AmazonProductItem] = Field(
        description="Product detail records (one per requested product URL). Populated whenever the provider has data for the entity."
    )


class AmazonProductItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    asin: str = Field(
        description="Amazon Standard Identification Number. Populated whenever the provider has data for the entity."
    )
    brand: str | None = Field(
        default=None,
        description="Manufacturer or brand name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    category: str | None = Field(
        default=None,
        description='Category breadcrumb path, e.g. "Health & Household > Household Supplies".',
    )
    condition: str | None = Field(
        default=None, description='Item condition, e.g. "New"; empty when not reported.'
    )
    currency: str | None = Field(
        default=None, description='Price currency symbol or code, e.g. "$".'
    )
    description: str | None = Field(
        default=None,
        description="Product description text; empty when the listing has none.",
    )
    features: list[str] | None = Field(
        default=None, description="Bullet-point feature list from the listing."
    )
    image: str | None = Field(
        default=None,
        description="Primary product image URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    images: list[str] | None = Field(
        default=None, description="High-resolution product image URLs."
    )
    in_stock: bool | None = Field(
        default=None,
        alias="inStock",
        description="True when the product is purchasable.",
    )
    price: float | None = Field(
        default=None,
        description="Current buy-box price as a numeric amount; 0 when the listing has no buyable price (out of stock).",
    )
    rating: float | None = Field(
        default=None, description="Average customer star rating, 0-5; 0 when unrated."
    )
    reviews_count: int | None = Field(
        default=None,
        alias="reviewsCount",
        description="Total number of customer reviews; 0 when none.",
    )
    seller_name: str | None = Field(
        default=None,
        alias="sellerName",
        description="Name of the seller fulfilling the buy box.",
    )
    title: str = Field(
        description="Product title. Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Canonical product detail page URL (tracking query params stripped). Populated whenever the provider has data for the entity."
    )


class AmazonReviewsData(BaseModel):
    items: list[AmazonReviewsItem] = Field(
        description="Customer review records. Populated whenever the provider has data for the entity."
    )


class AmazonReviewsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    created_utc: float | None = Field(
        default=None,
        alias="createdUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. 0 when the review date is not reported in a parseable form.",
    )
    helpful_votes: int | None = Field(
        default=None,
        alias="helpfulVotes",
        description='Number of "helpful" votes the review received; 0 when none.',
    )
    rating: float = Field(
        description="Star rating the reviewer gave, 1-5; 0 when not reported."
    )
    reviewer: str | None = Field(
        default=None, description="Reviewer display name; empty when withheld."
    )
    text: str = Field(
        description="Full review body text. Populated whenever the provider has data for the entity."
    )
    title: str | None = Field(
        default=None,
        description="Review headline / title; empty when the review has none.",
    )
    verified_purchase: bool | None = Field(
        default=None,
        alias="verifiedPurchase",
        description="True when Amazon marks the review a verified purchase.",
    )


class AmazonSearchData(BaseModel):
    items: list[AmazonSearchItem] = Field(
        description="Matching Amazon product records. Populated whenever the provider has data for the entity."
    )


class AmazonSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    asin: str = Field(
        description="Amazon Standard Identification Number; use it with the Amazon Products by ASIN SKU for full detail. Populated whenever the provider has data for the entity."
    )
    currency: str | None = Field(
        default=None, description='Price currency symbol or code, e.g. "$".'
    )
    image: str | None = Field(
        default=None, description="Primary product thumbnail image URL."
    )
    is_sponsored: bool | None = Field(
        default=None,
        alias="isSponsored",
        description="True when the result is a sponsored placement.",
    )
    list_price: float | None = Field(
        default=None,
        alias="listPrice",
        description="Pre-discount list price when on sale; 0 when not discounted.",
    )
    offers_count: int | None = Field(
        default=None,
        alias="offersCount",
        description="Number of available offers; 0 when unknown.",
    )
    position: int | None = Field(
        default=None, description="1-based position of the result on the search page."
    )
    price: float | None = Field(
        default=None,
        description="Current price as a numeric amount; 0 when no offer is available.",
    )
    rating: float | None = Field(
        default=None, description="Average star rating, 0-5; 0 when unrated."
    )
    reviews_count: int | None = Field(
        default=None,
        alias="reviewsCount",
        description="Number of customer reviews; 0 when none.",
    )
    title: str = Field(
        description="Product title. Populated whenever the provider has data for the entity."
    )


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
        ratings, images, and attributes - as normalized JSON. **Price:** billed per
        asin - $0.00 per 1,000 requests base + $3.50 per 1,000 asins, capped at
        $35.00 per 1,000 requests.

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
        title, price, and rating - in one normalized request. **Price:** billed per
        result - $0.00 per 1,000 requests base + $4.10 per 1,000 results, capped at
        $82.00 per 1,000 requests.

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
        images, ratings, review count, variants, and attributes) from a product URL.
        **Price:** billed per result - $1.00 per 1,000 requests base + $8.10 per
        1,000 results, capped at $9.10 per 1,000 requests.

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
        rating, title, text, date, and verified-purchase badge. **Price:** $16.25
        per 1,000 requests (flat per request - same cost regardless of results
        returned).

        Price: $0.01625 per request.

        Example:
            res = client.amazon.reviews(limit=3, product="B07PXGQC1Q")
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
        products - title, price, rating, and thumbnail - in one normalized response.
        **Price:** billed per result - $0.00 per 1,000 requests base + $3.50 per
        1,000 results, capped at $70.00 per 1,000 requests.

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
        ratings, images, and attributes - as normalized JSON. **Price:** billed per
        asin - $0.00 per 1,000 requests base + $3.50 per 1,000 asins, capped at
        $35.00 per 1,000 requests.

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
        title, price, and rating - in one normalized request. **Price:** billed per
        result - $0.00 per 1,000 requests base + $4.10 per 1,000 results, capped at
        $82.00 per 1,000 requests.

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
        images, ratings, review count, variants, and attributes) from a product URL.
        **Price:** billed per result - $1.00 per 1,000 requests base + $8.10 per
        1,000 results, capped at $9.10 per 1,000 requests.

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
        rating, title, text, date, and verified-purchase badge. **Price:** $16.25
        per 1,000 requests (flat per request - same cost regardless of results
        returned).

        Price: $0.01625 per request.

        Example:
            res = client.amazon.reviews(limit=3, product="B07PXGQC1Q")
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
        products - title, price, rating, and thumbnail - in one normalized response.
        **Price:** billed per result - $0.00 per 1,000 requests base + $3.50 per
        1,000 results, capped at $70.00 per 1,000 requests.

        Price: $0.0035 per result.

        Example:
            res = client.amazon.search(limit=3, url="https://www.amazon.com/s?k=laptop")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.search", dict(input), options
        )
        return RunResult[AmazonSearchData].model_validate(raw)
