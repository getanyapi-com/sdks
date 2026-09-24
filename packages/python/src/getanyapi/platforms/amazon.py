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

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    amazonDomain: NotRequired[str]
    """Amazon marketplace domain to fetch products from (e.g. amazon.com, amazon.de, amazon.co.uk). Default: amazon.com."""
    asins: Required[list[str]]
    """Up to 10 Amazon ASINs to look up (e.g. ["B0CHX1W1XY", "B09G9FPHY6"])."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less. Range: 1 to 10."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""


class AmazonBestsellersInput(TypedDict, total=False):
    """Input for Amazon Bestsellers."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). Range: 1 to 20. Default: 20."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    requireFields: NotRequired[
        list[
            Literal[
                "categoryName",
                "currency",
                "image",
                "offersCount",
                "price",
                "rank",
                "rating",
                "reviewsCount",
            ]
        ]
    ]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `offersCount` or `categoryName`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a product that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""
    url: Required[str]
    """Amazon Best Sellers category URL (e.g. https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics)."""


class AmazonProductInput(TypedDict, total=False):
    """Input for Amazon Product."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    requireFields: NotRequired[
        list[
            Literal[
                "category",
                "condition",
                "currency",
                "description",
                "features",
                "images",
                "inStock",
                "price",
                "rating",
                "reviewsCount",
                "sellerName",
                "variantAsins",
            ]
        ]
    ]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `category` or `condition`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a product that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""
    url: Required[str]
    """Full Amazon product URL (e.g. https://www.amazon.com/dp/B0CX23V2ZK)."""


class AmazonReviewsInput(TypedDict, total=False):
    """Input for Amazon Reviews."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    endDate: NotRequired[str]
    """Only return reviews on or before this date, inclusive, in YYYY-MM-DD format (e.g. 2026-06-30)."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    keyword: NotRequired[str]
    """Only return reviews whose title or text contains this keyword, case-insensitively (e.g. battery)."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-50, default 50). Range: 1 to 50. Default: 50."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
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
    """Amazon marketplace domain the product ASIN belongs to (e.g. amazon.co.uk)."""
    requireFields: NotRequired[
        list[
            Literal[
                "createdUtc",
                "helpfulVotes",
                "rating",
                "reviewer",
                "title",
                "url",
                "verifiedPurchase",
            ]
        ]
    ]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `url`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a review that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge."""
    sort: NotRequired[Literal["helpful", "recent"]]
    """Review sort order: most helpful first or most recent first (e.g. recent)."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""
    startDate: NotRequired[str]
    """Only return reviews on or after this date, inclusive, in YYYY-MM-DD format (e.g. 2026-01-01)."""
    verifiedOnly: NotRequired[bool]
    """Set true to return only verified-purchase reviews (e.g. true)."""


class AmazonSearchInput(TypedDict, total=False):
    """Input for Amazon Search."""

    allowFallbacks: NotRequired[bool]
    """Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price. Default: true."""
    ignoreSources: NotRequired[list[str]]
    """Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way."""
    limit: NotRequired[int]
    """Maximum number of results to return (1-20, default 20). Range: 1 to 20. Default: 20."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    source: NotRequired[list[str]]
    """Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`."""
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
    attributes: list[AmazonAsinsAttribute] | None = Field(
        default=None,
        description="Product detail attributes as name/value pairs (dimensions, weight, model, and similar).",
    )
    brand: str | None = Field(
        default=None,
        description="Populated whenever the provider has data for the entity. Present whenever the upstream returns this record.",
    )
    condition: str | None = None
    currency: str | None = None
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
    variant_asins: list[str] | None = Field(
        default=None,
        alias="variantAsins",
        description="ASINs of the other variations of this product.",
    )


class AmazonAsinsAttribute(BaseModel):
    model_config = ConfigDict(extra="allow")

    name: str | None = Field(default=None, description="Attribute name.")
    value: str | None = Field(default=None, description="Attribute value.")


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
        description="Best Sellers category name the product ranks in, or null when the serving source does not publish it.",
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
        description="Number of available offers, or null when the serving source does not publish it.",
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
    variant_asins: list[str] | None = Field(
        default=None,
        alias="variantAsins",
        description="ASINs of the other variations of this product, or null when the serving source does not publish them.",
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
    url: str | None = Field(
        default=None,
        description="Public Amazon page for this review, when supplied by the serving lane.",
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
        description="Pre-discount list price when on sale, 0 when not discounted, or null when the serving source does not publish it.",
    )
    offers_count: int | None = Field(
        default=None,
        alias="offersCount",
        description="Number of available offers, or null when the serving source does not publish it.",
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
    url: str | None = Field(
        default=None, description="Canonical product detail page URL."
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

        Look up to 10 Amazon products in one call by ASIN (title, brand, price,
        ratings, images, and attributes) as normalized JSON.

        Price: $0 per request plus $0.00385 per asin (maximum $0.0385).

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

        List the top-ranked products of any Amazon Best Sellers category (rank,
        title, price, and rating) in one normalized request.

        Price: $0.0005 per request.

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

        Price: $0.001 per request.

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

        Pull up to 50 customer reviews for any Amazon product by ASIN or URL:
        rating, title, text, date, and verified-purchase badge.

        Price: $0.001 per request.

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
        products (title, price, rating, and thumbnail) in one normalized response.

        Price: $0.0005 per request.

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

        Look up to 10 Amazon products in one call by ASIN (title, brand, price,
        ratings, images, and attributes) as normalized JSON.

        Price: $0 per request plus $0.00385 per asin (maximum $0.0385).

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

        List the top-ranked products of any Amazon Best Sellers category (rank,
        title, price, and rating) in one normalized request.

        Price: $0.0005 per request.

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

        Price: $0.001 per request.

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

        Pull up to 50 customer reviews for any Amazon product by ASIN or URL:
        rating, title, text, date, and verified-purchase badge.

        Price: $0.001 per request.

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
        products (title, price, rating, and thumbnail) in one normalized response.

        Price: $0.0005 per request.

        Example:
            res = client.amazon.search(limit=3, url="https://www.amazon.com/s?k=laptop")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "amazon.search", dict(input), options
        )
        return RunResult[AmazonSearchData].model_validate(raw)
