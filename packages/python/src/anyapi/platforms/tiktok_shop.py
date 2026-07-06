# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the tiktok_shop platform."""

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


class TiktokShopProductInput(TypedDict, total=False):
    """Input for TikTok Shop Product."""

    region: NotRequired[str]
    """Two-letter country code for the proxy location used to access region-specific products (e.g. US, GB, FR). Defaults to US."""
    url: Required[str]
    """TikTok Shop product detail page URL (e.g. https://www.tiktok.com/shop/pdp/.../1729587769570529799)."""


class TiktokShopProductReviewsInput(TypedDict, total=False):
    """Input for TikTok Shop Product Reviews."""

    page: NotRequired[int]
    """1-based results page. Use with hasMore in the output to paginate. Minimum: 1. Default: 1."""
    region: NotRequired[str]
    """Two-letter country code of the product's shop region (e.g. US). Strongly recommended for correct results."""
    url: Required[str]
    """TikTok Shop product URL (e.g. https://www.tiktok.com/shop/pdp/.../1729385633899532161)."""


class TiktokShopSearchInput(TypedDict, total=False):
    """Input for TikTok Shop Search."""

    country: NotRequired[
        Literal[
            "US",
            "VN",
            "TH",
            "PH",
            "MY",
            "ID",
            "GB",
            "SG",
            "ES",
            "MX",
            "DE",
            "IT",
            "FR",
            "BR",
            "JP",
        ]
    ]
    """Country code of the TikTok Shop market to search (e.g. US). Default: US."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less. Range: 1 to 10."""
    query: Required[str]
    """Search keyword for TikTok Shop products (e.g. wireless earbuds)."""


class TiktokShopShopProductsInput(TypedDict, total=False):
    """Input for TikTok Shop Store Products."""

    cursor: NotRequired[str]
    """Opaque pagination cursor from a previous response's nextCursor."""
    region: NotRequired[str]
    """Two-letter country code of the store's market (e.g. US)."""
    sortBy: NotRequired[Literal["top", "new_releases"]]
    """Product ordering within the store. Default: top."""
    url: Required[str]
    """TikTok Shop store URL (e.g. https://www.tiktok.com/shop/store/...)."""


class TiktokShopUserShowcaseInput(TypedDict, total=False):
    """Input for TikTok Shop User Showcase."""

    cursor: NotRequired[str]
    """Pagination token for retrieving subsequent product pages."""
    handle: Required[str]
    """The handle of the TikTok user (e.g. mrtiktokreviews)."""
    region: NotRequired[str]
    """Geographical region for proxy placement (defaults to US)."""


class TiktokShopProductData(BaseModel):
    model_config = ConfigDict(extra="allow")

    currency: str = Field(description="Populated whenever the provider returns data.")
    originalPrice: str = Field(
        description="Populated whenever the provider returns data."
    )
    price: str = Field(description="Populated whenever the provider returns data.")
    productId: str = Field(description="Populated whenever the provider returns data.")
    rating: float
    reviewCount: int
    sellerLocation: str
    sellerName: str = Field(description="Populated whenever the provider returns data.")
    soldCount: int
    title: str = Field(description="Populated whenever the provider returns data.")


class TiktokShopProductReviewsData(BaseModel):
    hasMore: bool
    rating: float = Field(description="Overall product score (1-5).")
    reviews: list[TiktokShopProductReviewsReview] = Field(
        description="Populated whenever the provider returns data."
    )
    totalReviews: int


class TiktokShopProductReviewsReview(BaseModel):
    model_config = ConfigDict(extra="allow")

    country: str
    createdAt: str = Field(
        description="Review time as epoch milliseconds. Populated whenever the provider returns data."
    )
    id: str = Field(description="Populated whenever the provider returns data.")
    rating: float
    reviewerName: str = Field(
        description="Populated whenever the provider returns data."
    )
    sku: str = Field(
        description='Variant bought, e.g. "Color: Black". Populated whenever the provider returns data.'
    )
    text: str = Field(description="Populated whenever the provider returns data.")
    verifiedPurchase: bool


class TiktokShopSearchData(BaseModel):
    items: list[TiktokShopSearchItem] = Field(
        description="Product records matching the search query: id, title, price, sales count, rating, seller, and product URL. Populated whenever the provider returns data."
    )


class TiktokShopSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    currency: str | None = Field(
        default=None, description="ISO currency name, e.g. USD."
    )
    originalPrice: float | None = Field(
        default=None, description="Pre-discount list price (0 when not on sale)."
    )
    price: float | None = Field(default=None, description="Current sale price.")
    productId: str = Field(
        description="TikTok Shop product id. Populated whenever the provider returns data."
    )
    rating: float | None = Field(default=None, description="Average review score.")
    shopName: str | None = Field(default=None, description="Seller shop name.")
    soldCount: int | None = Field(default=None, description="Units sold.")
    title: str = Field(
        description="Product title. Populated whenever the provider returns data."
    )
    url: str | None = Field(
        default=None,
        description="Canonical product detail page URL. Populated whenever the provider returns data.",
    )


class TiktokShopShopProductsData(BaseModel):
    hasMore: bool
    nextCursor: str
    productCount: int
    products: list[TiktokShopShopProductsProduct] = Field(
        description="Populated whenever the provider returns data."
    )
    shopName: str = Field(description="Populated whenever the provider returns data.")
    shopRating: float
    soldCount: int


class TiktokShopShopProductsProduct(BaseModel):
    model_config = ConfigDict(extra="allow")

    currency: str
    originalPrice: float
    price: float
    productId: str = Field(description="Populated whenever the provider returns data.")
    rating: float
    reviewCount: int
    soldCount: int
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class TiktokShopUserShowcaseData(BaseModel):
    nextCursor: str
    products: list[TiktokShopUserShowcaseProduct] = Field(
        description="Populated whenever the provider returns data."
    )


class TiktokShopUserShowcaseProduct(BaseModel):
    model_config = ConfigDict(extra="allow")

    currency: str
    imageUrl: str = Field(description="Populated whenever the provider returns data.")
    originalPrice: str
    price: str
    productId: str = Field(description="Populated whenever the provider returns data.")
    rating: float
    reviewCount: int
    soldCount: int
    title: str = Field(description="Populated whenever the provider returns data.")
    url: str = Field(description="Populated whenever the provider returns data.")


class TiktokShopNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def product(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopProductInput],
    ) -> RunResult[TiktokShopProductData]:
        """TikTok Shop Product

        Fetch TikTok Shop product details - title, price, sales, seller, and ratings
        - from a product URL, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.product(url="https://www.tiktok.com/shop/pdp/goli-ashwagandha-gummies-with-vitamin-d-ksm-66-vegan-non-gmo/1729587769570529799")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.product", dict(input), options
        )
        return RunResult[TiktokShopProductData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def product_reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopProductReviewsInput],
    ) -> RunResult[TiktokShopProductReviewsData]:
        """TikTok Shop Product Reviews

        Fetch customer reviews for a TikTok Shop product by URL - rating, text,
        reviewer, country, and verified-purchase flag - normalized across providers
        with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.product_reviews(url="https://www.tiktok.com/shop/pdp/cat-nail-clipper-by-potaroma-adjustable-sizes-built-in-file-safe-for-kittens-cats/1731578642912612516")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.product_reviews", dict(input), options
        )
        return RunResult[TiktokShopProductReviewsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopSearchInput],
    ) -> RunResult[TiktokShopSearchData]:
        """TikTok Shop Search

        Search TikTok Shop products by keyword across 15 countries: price, sales,
        rating, and seller info per product, in one normalized response.

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.search(limit=3, query="phone case")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.search", dict(input), options
        )
        return RunResult[TiktokShopSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def shop_products(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopShopProductsInput],
    ) -> RunResult[TiktokShopShopProductsData]:
        """TikTok Shop Store Products

        List every product of a TikTok Shop store by URL - title, price, sales, and
        rating per product plus shop-level stats - with cursor pagination and
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.shop_products(url="https://www.tiktok.com/shop/store/goli-nutrition/7495794203056835079")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.shop_products", dict(input), options
        )
        return RunResult[TiktokShopShopProductsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_shop_products(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopShopProductsInput],
    ) -> Paginator[TiktokShopShopProductsProduct, TiktokShopShopProductsData]:
        """Iterate TikTok Shop Store Products results, following pagination cursors.

        Yields flattened items from the `products` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok_shop.shop_products",
            dict(input),
            "products",
            options=options,
        )

    def user_showcase(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopUserShowcaseInput],
    ) -> RunResult[TiktokShopUserShowcaseData]:
        """TikTok Shop User Showcase

        List the TikTok Shop products a creator showcases - title, price, rating,
        and sales per product - normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.user_showcase(handle="mrtiktokreviews")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.user_showcase", dict(input), options
        )
        return RunResult[TiktokShopUserShowcaseData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_showcase(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopUserShowcaseInput],
    ) -> Paginator[TiktokShopUserShowcaseProduct, TiktokShopUserShowcaseData]:
        """Iterate TikTok Shop User Showcase results, following pagination cursors.

        Yields flattened items from the `products` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok_shop.user_showcase",
            dict(input),
            "products",
            options=options,
        )


class AsyncTiktokShopNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def product(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopProductInput],
    ) -> RunResult[TiktokShopProductData]:
        """TikTok Shop Product

        Fetch TikTok Shop product details - title, price, sales, seller, and ratings
        - from a product URL, with transparent per-request USD pricing.

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.product(url="https://www.tiktok.com/shop/pdp/goli-ashwagandha-gummies-with-vitamin-d-ksm-66-vegan-non-gmo/1729587769570529799")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.product", dict(input), options
        )
        return RunResult[TiktokShopProductData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def product_reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopProductReviewsInput],
    ) -> RunResult[TiktokShopProductReviewsData]:
        """TikTok Shop Product Reviews

        Fetch customer reviews for a TikTok Shop product by URL - rating, text,
        reviewer, country, and verified-purchase flag - normalized across providers
        with transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.product_reviews(url="https://www.tiktok.com/shop/pdp/cat-nail-clipper-by-potaroma-adjustable-sizes-built-in-file-safe-for-kittens-cats/1731578642912612516")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.product_reviews", dict(input), options
        )
        return RunResult[TiktokShopProductReviewsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopSearchInput],
    ) -> RunResult[TiktokShopSearchData]:
        """TikTok Shop Search

        Search TikTok Shop products by keyword across 15 countries: price, sales,
        rating, and seller info per product, in one normalized response.

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.search(limit=3, query="phone case")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.search", dict(input), options
        )
        return RunResult[TiktokShopSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def shop_products(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopShopProductsInput],
    ) -> RunResult[TiktokShopShopProductsData]:
        """TikTok Shop Store Products

        List every product of a TikTok Shop store by URL - title, price, sales, and
        rating per product plus shop-level stats - with cursor pagination and
        transparent failover.

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.shop_products(url="https://www.tiktok.com/shop/store/goli-nutrition/7495794203056835079")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.shop_products", dict(input), options
        )
        return RunResult[TiktokShopShopProductsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_shop_products(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopShopProductsInput],
    ) -> AsyncPaginator[TiktokShopShopProductsProduct, TiktokShopShopProductsData]:
        """Iterate TikTok Shop Store Products results, following pagination cursors.

        Yields flattened items from the `products` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok_shop.shop_products",
            dict(input),
            "products",
            options=options,
        )

    async def user_showcase(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopUserShowcaseInput],
    ) -> RunResult[TiktokShopUserShowcaseData]:
        """TikTok Shop User Showcase

        List the TikTok Shop products a creator showcases - title, price, rating,
        and sales per product - normalized across providers with transparent
        failover.

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.user_showcase(handle="mrtiktokreviews")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.user_showcase", dict(input), options
        )
        return RunResult[TiktokShopUserShowcaseData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_showcase(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopUserShowcaseInput],
    ) -> AsyncPaginator[TiktokShopUserShowcaseProduct, TiktokShopUserShowcaseData]:
        """Iterate TikTok Shop User Showcase results, following pagination cursors.

        Yields flattened items from the `products` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok_shop.user_showcase",
            dict(input),
            "products",
            options=options,
        )
