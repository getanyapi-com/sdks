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


class TiktokShopCategoriesInput(TypedDict, total=False):
    """Input for TikTok Shop Categories."""

    region: NotRequired[Literal["US", "VN"]]
    """Country code of the TikTok Shop market whose category tree to list. Only US and VN publish a category tree. Default: US."""


class TiktokShopCategoryProductsInput(TypedDict, total=False):
    """Input for TikTok Shop Category Products."""

    categoryId: Required[str]
    """TikTok Shop category id, from tiktok_shop.categories (e.g. 700645 for Health)."""
    region: NotRequired[str]
    """Two-letter country code of the TikTok Shop market (e.g. US). Default: US."""


class TiktokShopCreatorInput(TypedDict, total=False):
    """Input for TikTok Shop Creator."""

    handle: Required[str]
    """TikTok handle of the creator or shop account, without the @ (e.g. golinutrition)."""
    region: NotRequired[str]
    """Lowercase two-letter country code of the TikTok Shop market (e.g. us). Default: us."""


class TiktokShopProductInput(TypedDict, total=False):
    """Input for TikTok Shop Product."""

    region: NotRequired[str]
    """Two-letter country code for the proxy location used to access region-specific products (e.g. US, GB, FR). Defaults to US."""
    url: Required[str]
    """TikTok Shop product detail page URL (e.g. https://www.tiktok.com/shop/pdp/.../1729587769570529799)."""


class TiktokShopProductFullInput(TypedDict, total=False):
    """Input for TikTok Shop Product Full."""

    url: Required[str]
    """TikTok Shop product URL. Any of the public forms works (https://www.tiktok.com/shop/pdp/<id>, https://shop.tiktok.com/<region>/pdp/<slug>/<id>, or https://shop.tiktok.com/view/product/<id>); the product id is read out of it."""


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


class TiktokShopSearchSuggestionsInput(TypedDict, total=False):
    """Input for TikTok Shop Search Suggestions."""

    country: NotRequired[str]
    """Two-letter country code of the TikTok Shop market (e.g. US). Default: US."""
    language: NotRequired[str]
    """Language tag for the suggestions (e.g. en-US). Default: en-US."""
    query: Required[str]
    """Seed keyword to expand (e.g. ashwagandha gummies)."""


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


class TiktokShopCategoriesData(BaseModel):
    categories: list[TiktokShopCategoriesCategorie] = Field(
        description="Top-level TikTok Shop categories for the market, each with its child categories. Populated whenever the provider has data for the entity."
    )


class TiktokShopCategoriesCategorie(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    category_id: str = Field(
        alias="categoryId",
        description="TikTok Shop category id. Pass this to tiktok_shop.category_products. Populated whenever the provider has data for the entity.",
    )
    children: list[TiktokShopCategoriesChildren] | None = Field(
        default=None, description="Child categories one level down."
    )
    image: str | None = Field(default=None, description="Category tile image URL.")
    is_leaf: bool | None = Field(
        default=None,
        alias="isLeaf",
        description="True when the category has no children.",
    )
    name: str = Field(
        description="Display name of the category. Populated whenever the provider has data for the entity."
    )
    slug: str | None = Field(default=None, description="URL slug of the category.")


class TiktokShopCategoriesChildren(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    category_id: str = Field(alias="categoryId", description="TikTok Shop category id.")
    is_leaf: bool | None = Field(
        default=None,
        alias="isLeaf",
        description="True when the category has no children.",
    )
    name: str = Field(description="Display name of the category.")
    slug: str | None = Field(default=None, description="URL slug of the category.")


class TiktokShopCategoryProductsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    has_more: bool | None = Field(
        default=None,
        alias="hasMore",
        description="True when the category has further pages upstream.",
    )
    items: list[TiktokShopCategoryProductsItem] = Field(
        description="Product records in the category: id, title, price, rating, sales count, seller, and product URL. Populated whenever the provider has data for the entity."
    )


class TiktokShopCategoryProductsItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    currency: str | None = Field(
        default=None, description="ISO currency name, e.g. USD."
    )
    image: str | None = Field(default=None, description="Primary product image URL.")
    original_price: float | None = Field(
        default=None,
        alias="originalPrice",
        description="Pre-discount list price (0 when not on sale).",
    )
    price: float | None = Field(default=None, description="Current sale price.")
    product_id: str = Field(
        alias="productId",
        description="TikTok Shop product id. Populated whenever the provider has data for the entity.",
    )
    rating: float | None = Field(default=None, description="Average review score.")
    review_count: int | None = Field(
        default=None, alias="reviewCount", description="Number of reviews."
    )
    shop_name: str | None = Field(
        default=None, alias="shopName", description="Seller shop name."
    )
    sold_count: int | None = Field(
        default=None, alias="soldCount", description="Units sold."
    )
    title: str = Field(
        description="Product title. Populated whenever the provider has data for the entity."
    )
    url: str | None = Field(
        default=None,
        description="Canonical product detail page URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )


class TiktokShopCreatorData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    audience_age: list[TiktokShopCreatorAudienceAge] | None = Field(
        default=None, alias="audienceAge", description="Follower age distribution."
    )
    audience_gender: list[TiktokShopCreatorAudienceGender] | None = Field(
        default=None,
        alias="audienceGender",
        description="Follower gender distribution.",
    )
    audience_locations: list[TiktokShopCreatorAudienceLocation] | None = Field(
        default=None, alias="audienceLocations", description="Top follower locations."
    )
    avg_commission_range: str | None = Field(
        default=None,
        alias="avgCommissionRange",
        description="Banded average affiliate commission rate the creator earns. Empty when upstream does not publish it.",
    )
    avg_live_likes: float | None = Field(
        default=None, alias="avgLiveLikes", description="Average likes per live stream."
    )
    avg_live_views: float | None = Field(
        default=None,
        alias="avgLiveViews",
        description="Average viewers per live stream.",
    )
    avg_video_comments: float | None = Field(
        default=None,
        alias="avgVideoComments",
        description="Average comments per video.",
    )
    avg_video_likes: float | None = Field(
        default=None, alias="avgVideoLikes", description="Average likes per video."
    )
    avg_video_views: float | None = Field(
        default=None, alias="avgVideoViews", description="Average views per video."
    )
    bio: str | None = Field(default=None, description="Creator bio text.")
    brand_collaborations: int | None = Field(
        default=None,
        alias="brandCollaborations",
        description="Number of distinct brands the creator has collaborated with.",
    )
    categories: list[TiktokShopCreatorCategorie] | None = Field(
        default=None, description="TikTok Shop categories the creator sells in."
    )
    followers: int | None = Field(default=None, description="Follower count.")
    gmv_range: str | None = Field(
        default=None,
        alias="gmvRange",
        description='Banded gross merchandise value the creator has driven, e.g. "$25K-$60K". Upstream publishes a band rather than an exact figure.',
    )
    gpm: float | None = Field(
        default=None,
        description="Gross merchandise value per thousand views. Zero when upstream does not publish it.",
    )
    handle: str = Field(
        description="TikTok handle of the creator, without the @. Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(default=None, description="Creator avatar URL.")
    live_count: int | None = Field(
        default=None,
        alias="liveCount",
        description="Number of live streams in the measured window.",
    )
    live_engagement_rate: float | None = Field(
        default=None,
        alias="liveEngagementRate",
        description="Engagement rate on live streams, as a percentage.",
    )
    nickname: str | None = Field(
        default=None,
        description="Display name of the creator. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    post_rate: float | None = Field(
        default=None,
        alias="postRate",
        description="Share of the creator's posts that carry a shop product, as a percentage.",
    )
    promoted_products: int | None = Field(
        default=None,
        alias="promotedProducts",
        description="Number of TikTok Shop products the creator has promoted.",
    )
    rating: float | None = Field(
        default=None,
        description="Creator rating. Zero when upstream does not publish it.",
    )
    region: str | None = Field(
        default=None,
        description="Two-letter country code of the creator's TikTok Shop market.",
    )
    video_count: int | None = Field(
        default=None,
        alias="videoCount",
        description="Number of videos posted in the measured window.",
    )
    video_engagement_rate: float | None = Field(
        default=None,
        alias="videoEngagementRate",
        description="Engagement rate on videos, as a percentage.",
    )


class TiktokShopCreatorAudienceAge(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    bucket: str | None = Field(default=None, description="Age bucket, e.g. 25-34.")
    share_pct: float | None = Field(
        default=None,
        alias="sharePct",
        description="Share of followers in this bucket, as a percentage.",
    )


class TiktokShopCreatorAudienceGender(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    gender: str | None = Field(
        default=None, description="Gender label as published upstream."
    )
    share_pct: float | None = Field(
        default=None,
        alias="sharePct",
        description="Share of followers, as a percentage.",
    )


class TiktokShopCreatorAudienceLocation(BaseModel):
    model_config = ConfigDict(extra="allow")

    followers: int | None = Field(
        default=None, description="Followers in this location."
    )
    state: str | None = Field(default=None, description="State or region name.")


class TiktokShopCreatorCategorie(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    category_id: str | None = Field(
        default=None, alias="categoryId", description="TikTok Shop category id."
    )
    name: str | None = Field(default=None, description="Category display name.")


class TiktokShopProductData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    currency: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    original_price: str = Field(
        alias="originalPrice",
        description="Populated whenever the provider has data for the entity.",
    )
    price: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    product_id: str = Field(
        alias="productId",
        description="Populated whenever the provider has data for the entity.",
    )
    rating: float
    review_count: int = Field(alias="reviewCount")
    seller_location: str = Field(alias="sellerLocation")
    seller_name: str = Field(
        alias="sellerName",
        description="Populated whenever the provider has data for the entity.",
    )
    sold_count: int = Field(alias="soldCount")
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokShopProductFullData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    category_id: str | None = Field(
        default=None,
        alias="categoryId",
        description="Top-level TikTok Shop category id.",
    )
    category_path: str | None = Field(
        default=None,
        alias="categoryPath",
        description="Slash-separated category breadcrumb, e.g. Health/Nutrition & Wellness/Vitamins.",
    )
    category_rank: float | None = Field(
        default=None,
        alias="categoryRank",
        description="Sales rank of this product within its category. Approximate.",
    )
    commission_rate_pct: float | None = Field(
        default=None,
        alias="commissionRatePct",
        description="Affiliate commission rate as a percentage, e.g. 25 for 25%. Zero when the product runs no open affiliate offer.",
    )
    currency: str | None = Field(
        default=None,
        description="ISO currency code, e.g. USD. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    gmv: float | None = Field(
        default=None,
        description="Lifetime gross merchandise value in the product's currency. Rounded upstream to three significant figures, so treat it as approximate.",
    )
    gmv30d: float | None = Field(
        default=None,
        description="Gross merchandise value over the last 30 days, in the product's currency. Rounded upstream to three significant figures, so treat it as approximate.",
    )
    image: str | None = Field(default=None, description="Primary product image URL.")
    listed_utc: float | None = Field(
        default=None,
        alias="listedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    live_count: float | None = Field(
        default=None,
        alias="liveCount",
        description="Lifetime count of live streams promoting this product. Approximate.",
    )
    live_count30d: float | None = Field(
        default=None,
        alias="liveCount30d",
        description="Live streams promoting this product in the last 30 days. Approximate.",
    )
    max_price: float | None = Field(
        default=None, alias="maxPrice", description="Highest variant price."
    )
    min_price: float | None = Field(
        default=None, alias="minPrice", description="Lowest variant price."
    )
    off_shelf: bool | None = Field(
        default=None,
        alias="offShelf",
        description="True when the listing is no longer on sale.",
    )
    price: float | None = Field(
        default=None,
        description="Current selling price in the product's currency. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    product_id: str = Field(
        alias="productId",
        description="TikTok Shop product id. Populated whenever the provider has data for the entity.",
    )
    rating: float | None = Field(default=None, description="Average review score.")
    region: str | None = Field(
        default=None,
        description="Two-letter country code of the TikTok Shop market, e.g. US.",
    )
    review_count: float | None = Field(
        default=None,
        alias="reviewCount",
        description="Number of reviews. Rounded upstream to three significant figures, so treat it as approximate.",
    )
    seller_gmv: float | None = Field(
        default=None,
        alias="sellerGmv",
        description="Seller's lifetime gross merchandise value. Approximate.",
    )
    seller_id: str | None = Field(
        default=None, alias="sellerId", description="TikTok Shop seller id."
    )
    seller_name: str | None = Field(
        default=None,
        alias="sellerName",
        description="Seller shop name. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    seller_units_sold: float | None = Field(
        default=None,
        alias="sellerUnitsSold",
        description="Seller's lifetime units sold across all products. Approximate.",
    )
    seller_url: str | None = Field(
        default=None, alias="sellerUrl", description="Seller storefront URL."
    )
    stock: float | None = Field(
        default=None,
        description="Units currently in stock. Rounded upstream to three significant figures, so treat it as approximate.",
    )
    title: str = Field(
        description="Product title. Populated whenever the provider has data for the entity."
    )
    units_sold: float | None = Field(
        default=None,
        alias="unitsSold",
        description="Lifetime units sold. Rounded upstream to three significant figures, so treat it as approximate.",
    )
    units_sold30d: float | None = Field(
        default=None,
        alias="unitsSold30d",
        description="Units sold in the last 30 days. Rounded upstream to three significant figures, so treat it as approximate.",
    )
    url: str | None = Field(
        default=None,
        description="Canonical product detail page URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    video_count: float | None = Field(
        default=None,
        alias="videoCount",
        description="Lifetime count of videos promoting this product. Approximate.",
    )
    video_count30d: float | None = Field(
        default=None,
        alias="videoCount30d",
        description="Videos promoting this product in the last 30 days. Approximate.",
    )


class TiktokShopProductReviewsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    has_more: bool = Field(
        alias="hasMore",
        description="True when more reviews are available beyond this page.",
    )
    rating: float = Field(description="Overall product score (1-5).")
    reviews: list[TiktokShopProductReviewsReview] = Field(
        description="Product reviews. Populated whenever the provider has data for the entity."
    )
    total_reviews: int = Field(
        alias="totalReviews", description="Total number of reviews for the product."
    )


class TiktokShopProductReviewsReview(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    country: str = Field(description="Reviewer's country code.")
    created_utc: float = Field(
        alias="createdUtc",
        description="Review time as epoch milliseconds. Populated whenever the provider has data for the entity.",
    )
    id: str = Field(
        description="Review identifier. Populated whenever the provider has data for the entity."
    )
    rating: float = Field(description="Star rating for this review (1-5).")
    reviewer_name: str = Field(
        alias="reviewerName",
        description="Display name of the reviewer. Populated whenever the provider has data for the entity.",
    )
    sku: str = Field(
        description='Variant bought, e.g. "Color: Black". Populated whenever the provider has data for the entity.'
    )
    text: str = Field(
        description="Review text content. Populated whenever the provider has data for the entity."
    )
    verified_purchase: bool = Field(
        alias="verifiedPurchase",
        description="True when the review is from a verified purchase.",
    )


class TiktokShopSearchData(BaseModel):
    items: list[TiktokShopSearchItem] = Field(
        description="Product records matching the search query: id, title, price, sales count, rating, seller, and product URL. Populated whenever the provider has data for the entity."
    )


class TiktokShopSearchItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    currency: str | None = Field(
        default=None, description="ISO currency name, e.g. USD."
    )
    original_price: float | None = Field(
        default=None,
        alias="originalPrice",
        description="Pre-discount list price (0 when not on sale).",
    )
    price: float | None = Field(default=None, description="Current sale price.")
    product_id: str = Field(
        alias="productId",
        description="TikTok Shop product id. Populated whenever the provider has data for the entity.",
    )
    rating: float | None = Field(default=None, description="Average review score.")
    shop_name: str | None = Field(
        default=None, alias="shopName", description="Seller shop name."
    )
    sold_count: int | None = Field(
        default=None, alias="soldCount", description="Units sold."
    )
    title: str = Field(
        description="Product title. Populated whenever the provider has data for the entity."
    )
    url: str | None = Field(
        default=None,
        description="Canonical product detail page URL. Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )


class TiktokShopSearchSuggestionsData(BaseModel):
    model_config = ConfigDict(extra="allow")

    suggestions: list[str] = Field(
        description="Autocomplete terms TikTok Shop suggests for the seed keyword, most relevant first. Populated whenever the provider has data for the entity."
    )


class TiktokShopShopProductsData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    has_more: bool = Field(alias="hasMore")
    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of products, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    product_count: int = Field(alias="productCount")
    products: list[TiktokShopShopProductsProduct] = Field(
        description="Populated whenever the provider has data for the entity."
    )
    shop_name: str = Field(
        alias="shopName",
        description="Populated whenever the provider has data for the entity.",
    )
    shop_rating: float = Field(alias="shopRating")
    sold_count: int = Field(alias="soldCount")


class TiktokShopShopProductsProduct(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    currency: str
    original_price: float = Field(alias="originalPrice")
    price: float
    product_id: str = Field(
        alias="productId",
        description="Populated whenever the provider has data for the entity.",
    )
    rating: float
    review_count: int = Field(alias="reviewCount")
    sold_count: int = Field(alias="soldCount")
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokShopUserShowcaseData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    next_cursor: str | None = Field(
        alias="nextCursor",
        description="Opaque cursor for the next page of products, or null when this lane has no more. Pass it back as cursor to continue.",
    )
    products: list[TiktokShopUserShowcaseProduct] = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokShopUserShowcaseProduct(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    currency: str
    image_url: str = Field(
        alias="imageUrl",
        description="Populated whenever the provider has data for the entity.",
    )
    original_price: str = Field(alias="originalPrice")
    price: str
    product_id: str = Field(
        alias="productId",
        description="Populated whenever the provider has data for the entity.",
    )
    rating: float
    review_count: int = Field(alias="reviewCount")
    sold_count: int = Field(alias="soldCount")
    title: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    url: str = Field(
        description="Populated whenever the provider has data for the entity."
    )


class TiktokShopNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def categories(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopCategoriesInput],
    ) -> RunResult[TiktokShopCategoriesData]:
        """TikTok Shop Categories

        List the TikTok Shop category tree for a market: top-level categories with
        ids, slugs, and images, each with its child categories.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok_shop.categories(region="US")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.categories", dict(input), options
        )
        return RunResult[TiktokShopCategoriesData].model_validate(raw)

    def category_products(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopCategoryProductsInput],
    ) -> RunResult[TiktokShopCategoryProductsData]:
        """TikTok Shop Category Products

        Browse TikTok Shop products inside a category by category id: price,
        discount, rating, sales count, seller, and product URL per product.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok_shop.category_products(categoryId="700645", region="US")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.category_products", dict(input), options
        )
        return RunResult[TiktokShopCategoryProductsData].model_validate(raw)

    def creator(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopCreatorInput],
    ) -> RunResult[TiktokShopCreatorData]:
        """TikTok Shop Creator

        TikTok Shop creator performance by handle: GMV range, promoted product
        count, brand collaborations, follower age/gender/location demographics,
        category GMV split, and video versus live engagement.

        Price: $0.00525 per request plus $0 per result (maximum $0.00525).

        Example:
            res = client.tiktok_shop.creator(handle="golinutrition")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.creator", dict(input), options
        )
        return RunResult[TiktokShopCreatorData].model_validate(raw)

    def product(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopProductInput],
    ) -> RunResult[TiktokShopProductData]:
        """TikTok Shop Product

        Fetch TikTok Shop product details (title, price, sales, seller, and ratings)
        from a product URL.

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.product(url="https://www.tiktok.com/shop/pdp/goli-ashwagandha-gummies-with-vitamin-d-ksm-66-vegan-non-gmo/1729587769570529799")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.product", dict(input), options
        )
        return RunResult[TiktokShopProductData].model_validate(raw)

    def product_full(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopProductFullInput],
    ) -> RunResult[TiktokShopProductFullData]:
        """TikTok Shop Product Full

        Deep TikTok Shop product record from a product URL: affiliate commission
        rate, units sold and GMV over the last 30 days and lifetime, stock, rating,
        review count, category tree, listing date, and the seller's own sales
        totals.

        Price: $0.021 per request plus $0 per result (maximum $0.021).

        Example:
            res = client.tiktok_shop.product_full(url="https://www.tiktok.com/shop/pdp/1729527313880355335")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.product_full", dict(input), options
        )
        return RunResult[TiktokShopProductFullData].model_validate(raw)

    def product_reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopProductReviewsInput],
    ) -> RunResult[TiktokShopProductReviewsData]:
        """TikTok Shop Product Reviews

        Fetch customer reviews for a TikTok Shop product by URL (rating, text,
        reviewer, country, and verified-purchase flag).

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.product_reviews(url="https://www.tiktok.com/shop/pdp/cat-nail-clipper-by-potaroma-adjustable-sizes-built-in-file-safe-for-kittens-cats/1731578642912612516")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.product_reviews", dict(input), options
        )
        return RunResult[TiktokShopProductReviewsData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopSearchInput],
    ) -> RunResult[TiktokShopSearchData]:
        """TikTok Shop Search

        Search TikTok Shop products by keyword across 15 countries: price, sales,
        rating, and seller info per product, in one normalized response.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok_shop.search(limit=3, query="phone case")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.search", dict(input), options
        )
        return RunResult[TiktokShopSearchData].model_validate(raw)

    def search_suggestions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopSearchSuggestionsInput],
    ) -> RunResult[TiktokShopSearchSuggestionsData]:
        """TikTok Shop Search Suggestions

        Get TikTok Shop search autocomplete terms for a keyword: the long-tail
        queries shoppers actually type, for keyword and demand research.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok_shop.search_suggestions(country="US", query="ashwagandha gummies")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.search_suggestions", dict(input), options
        )
        return RunResult[TiktokShopSearchSuggestionsData].model_validate(raw)

    def shop_products(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopShopProductsInput],
    ) -> RunResult[TiktokShopShopProductsData]:
        """TikTok Shop Store Products

        List every product of a TikTok Shop store by URL (title, price, sales, and
        rating per product plus shop-level stats) with cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok_shop.shop_products(url="https://www.tiktok.com/shop/store/goli-nutrition/7495794203056835079")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.shop_products", dict(input), options
        )
        return RunResult[TiktokShopShopProductsData].model_validate(raw)

    def iter_shop_products(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopShopProductsInput],
    ) -> Paginator[TiktokShopShopProductsProduct, TiktokShopShopProductsData]:
        """Iterate TikTok Shop Store Products results, following pagination cursors.

        Yields validated `TiktokShopShopProductsProduct` items from the `products` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok_shop.shop_products",
            dict(input),
            "products",
            item_model=TiktokShopShopProductsProduct,
            data_model=TiktokShopShopProductsData,
            bare=False,
            options=options,
        )

    def user_showcase(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopUserShowcaseInput],
    ) -> RunResult[TiktokShopUserShowcaseData]:
        """TikTok Shop User Showcase

        List the TikTok Shop products a creator showcases (title, price, rating, and
        sales per product).

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.user_showcase(handle="mrtiktokreviews")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.user_showcase", dict(input), options
        )
        return RunResult[TiktokShopUserShowcaseData].model_validate(raw)

    def iter_user_showcase(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopUserShowcaseInput],
    ) -> Paginator[TiktokShopUserShowcaseProduct, TiktokShopUserShowcaseData]:
        """Iterate TikTok Shop User Showcase results, following pagination cursors.

        Yields validated `TiktokShopUserShowcaseProduct` items from the `products` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "tiktok_shop.user_showcase",
            dict(input),
            "products",
            item_model=TiktokShopUserShowcaseProduct,
            data_model=TiktokShopUserShowcaseData,
            bare=False,
            options=options,
        )


class AsyncTiktokShopNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def categories(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopCategoriesInput],
    ) -> RunResult[TiktokShopCategoriesData]:
        """TikTok Shop Categories

        List the TikTok Shop category tree for a market: top-level categories with
        ids, slugs, and images, each with its child categories.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok_shop.categories(region="US")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.categories", dict(input), options
        )
        return RunResult[TiktokShopCategoriesData].model_validate(raw)

    async def category_products(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopCategoryProductsInput],
    ) -> RunResult[TiktokShopCategoryProductsData]:
        """TikTok Shop Category Products

        Browse TikTok Shop products inside a category by category id: price,
        discount, rating, sales count, seller, and product URL per product.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok_shop.category_products(categoryId="700645", region="US")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.category_products", dict(input), options
        )
        return RunResult[TiktokShopCategoryProductsData].model_validate(raw)

    async def creator(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopCreatorInput],
    ) -> RunResult[TiktokShopCreatorData]:
        """TikTok Shop Creator

        TikTok Shop creator performance by handle: GMV range, promoted product
        count, brand collaborations, follower age/gender/location demographics,
        category GMV split, and video versus live engagement.

        Price: $0.00525 per request plus $0 per result (maximum $0.00525).

        Example:
            res = client.tiktok_shop.creator(handle="golinutrition")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.creator", dict(input), options
        )
        return RunResult[TiktokShopCreatorData].model_validate(raw)

    async def product(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopProductInput],
    ) -> RunResult[TiktokShopProductData]:
        """TikTok Shop Product

        Fetch TikTok Shop product details (title, price, sales, seller, and ratings)
        from a product URL.

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.product(url="https://www.tiktok.com/shop/pdp/goli-ashwagandha-gummies-with-vitamin-d-ksm-66-vegan-non-gmo/1729587769570529799")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.product", dict(input), options
        )
        return RunResult[TiktokShopProductData].model_validate(raw)

    async def product_full(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopProductFullInput],
    ) -> RunResult[TiktokShopProductFullData]:
        """TikTok Shop Product Full

        Deep TikTok Shop product record from a product URL: affiliate commission
        rate, units sold and GMV over the last 30 days and lifetime, stock, rating,
        review count, category tree, listing date, and the seller's own sales
        totals.

        Price: $0.021 per request plus $0 per result (maximum $0.021).

        Example:
            res = client.tiktok_shop.product_full(url="https://www.tiktok.com/shop/pdp/1729527313880355335")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.product_full", dict(input), options
        )
        return RunResult[TiktokShopProductFullData].model_validate(raw)

    async def product_reviews(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopProductReviewsInput],
    ) -> RunResult[TiktokShopProductReviewsData]:
        """TikTok Shop Product Reviews

        Fetch customer reviews for a TikTok Shop product by URL (rating, text,
        reviewer, country, and verified-purchase flag).

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.product_reviews(url="https://www.tiktok.com/shop/pdp/cat-nail-clipper-by-potaroma-adjustable-sizes-built-in-file-safe-for-kittens-cats/1731578642912612516")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.product_reviews", dict(input), options
        )
        return RunResult[TiktokShopProductReviewsData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopSearchInput],
    ) -> RunResult[TiktokShopSearchData]:
        """TikTok Shop Search

        Search TikTok Shop products by keyword across 15 countries: price, sales,
        rating, and seller info per product, in one normalized response.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok_shop.search(limit=3, query="phone case")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.search", dict(input), options
        )
        return RunResult[TiktokShopSearchData].model_validate(raw)

    async def search_suggestions(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopSearchSuggestionsInput],
    ) -> RunResult[TiktokShopSearchSuggestionsData]:
        """TikTok Shop Search Suggestions

        Get TikTok Shop search autocomplete terms for a keyword: the long-tail
        queries shoppers actually type, for keyword and demand research.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok_shop.search_suggestions(country="US", query="ashwagandha gummies")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.search_suggestions", dict(input), options
        )
        return RunResult[TiktokShopSearchSuggestionsData].model_validate(raw)

    async def shop_products(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopShopProductsInput],
    ) -> RunResult[TiktokShopShopProductsData]:
        """TikTok Shop Store Products

        List every product of a TikTok Shop store by URL (title, price, sales, and
        rating per product plus shop-level stats) with cursor pagination.

        Price: $0.0012 per request.

        Example:
            res = client.tiktok_shop.shop_products(url="https://www.tiktok.com/shop/store/goli-nutrition/7495794203056835079")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.shop_products", dict(input), options
        )
        return RunResult[TiktokShopShopProductsData].model_validate(raw)

    def iter_shop_products(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopShopProductsInput],
    ) -> AsyncPaginator[TiktokShopShopProductsProduct, TiktokShopShopProductsData]:
        """Iterate TikTok Shop Store Products results, following pagination cursors.

        Yields validated `TiktokShopShopProductsProduct` items from the `products` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok_shop.shop_products",
            dict(input),
            "products",
            item_model=TiktokShopShopProductsProduct,
            data_model=TiktokShopShopProductsData,
            bare=False,
            options=options,
        )

    async def user_showcase(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopUserShowcaseInput],
    ) -> RunResult[TiktokShopUserShowcaseData]:
        """TikTok Shop User Showcase

        List the TikTok Shop products a creator showcases (title, price, rating, and
        sales per product).

        Price: $0.002 per request.

        Example:
            res = client.tiktok_shop.user_showcase(handle="mrtiktokreviews")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "tiktok_shop.user_showcase", dict(input), options
        )
        return RunResult[TiktokShopUserShowcaseData].model_validate(raw)

    def iter_user_showcase(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[TiktokShopUserShowcaseInput],
    ) -> AsyncPaginator[TiktokShopUserShowcaseProduct, TiktokShopUserShowcaseData]:
        """Iterate TikTok Shop User Showcase results, following pagination cursors.

        Yields validated `TiktokShopUserShowcaseProduct` items from the `products` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "tiktok_shop.user_showcase",
            dict(input),
            "products",
            item_model=TiktokShopUserShowcaseProduct,
            data_model=TiktokShopUserShowcaseData,
            bare=False,
            options=options,
        )
