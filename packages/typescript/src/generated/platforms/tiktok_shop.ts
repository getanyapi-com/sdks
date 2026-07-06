// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for TikTok Shop Product (tiktok_shop.product).
 */
export interface TiktokShopProductInput {
  /**
   * Two-letter country code for the proxy location used to access region-specific products (e.g. US, GB, FR). Defaults to US.
   */
  region?: string;
  /**
   * TikTok Shop product detail page URL (e.g. https://www.tiktok.com/shop/pdp/.../1729587769570529799).
   */
  url: string;
}

/**
 * The `data` payload of TikTok Shop Product (tiktok_shop.product).
 */
export interface TiktokShopProductData {
  currency: string;
  originalPrice: string;
  price: string;
  productId: string;
  rating: number;
  reviewCount: number;
  sellerLocation: string;
  sellerName: string;
  soldCount: number;
  title: string;
  [extra: string]: unknown;
}

/**
 * Input for TikTok Shop Product Reviews (tiktok_shop.product_reviews).
 */
export interface TiktokShopProductReviewsInput {
  /**
   * 1-based results page. Use with hasMore in the output to paginate.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Two-letter country code of the product's shop region (e.g. US). Strongly recommended for correct results.
   */
  region?: string;
  /**
   * TikTok Shop product URL (e.g. https://www.tiktok.com/shop/pdp/.../1729385633899532161).
   */
  url: string;
}

export interface TiktokShopProductReviewsReview {
  country: string;
  /**
   * Review time as epoch milliseconds.
   */
  createdAt: string;
  id: string;
  rating: number;
  reviewerName: string;
  /**
   * Variant bought, e.g. "Color: Black".
   */
  sku: string;
  text: string;
  verifiedPurchase: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Shop Product Reviews (tiktok_shop.product_reviews).
 */
export interface TiktokShopProductReviewsData {
  hasMore: boolean;
  /**
   * Overall product score (1-5).
   */
  rating: number;
  reviews: TiktokShopProductReviewsReview[];
  totalReviews: number;
}

/**
 * Input for TikTok Shop Search (tiktok_shop.search).
 */
export interface TiktokShopSearchInput {
  /**
   * Country code of the TikTok Shop market to search (e.g. US).
   * One of: US, VN, TH, PH, MY, ID, GB, SG, ES, MX, DE, IT, FR, BR, JP.
   * Default: US.
   */
  country?:
    | "US"
    | "VN"
    | "TH"
    | "PH"
    | "MY"
    | "ID"
    | "GB"
    | "SG"
    | "ES"
    | "MX"
    | "DE"
    | "IT"
    | "FR"
    | "BR"
    | "JP";
  /**
   * Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 10.
   */
  limit?: number;
  /**
   * Search keyword for TikTok Shop products (e.g. wireless earbuds).
   */
  query: string;
}

export interface TiktokShopSearchItem {
  /**
   * ISO currency name, e.g. USD.
   */
  currency?: string;
  /**
   * Pre-discount list price (0 when not on sale).
   */
  originalPrice?: number;
  /**
   * Current sale price.
   */
  price?: number;
  /**
   * TikTok Shop product id.
   */
  productId: string;
  /**
   * Average review score.
   */
  rating?: number;
  /**
   * Seller shop name.
   */
  shopName?: string;
  /**
   * Units sold.
   */
  soldCount?: number;
  /**
   * Product title.
   */
  title: string;
  /**
   * Canonical product detail page URL.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Shop Search (tiktok_shop.search).
 */
export interface TiktokShopSearchData {
  /**
   * Product records matching the search query: id, title, price, sales count, rating, seller, and product URL.
   */
  items: TiktokShopSearchItem[];
}

/**
 * Input for TikTok Shop Store Products (tiktok_shop.shop_products).
 */
export interface TiktokShopShopProductsInput {
  /**
   * Opaque pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Two-letter country code of the store's market (e.g. US).
   */
  region?: string;
  /**
   * Product ordering within the store.
   * One of: top, new_releases.
   * Default: top.
   */
  sortBy?: "top" | "new_releases";
  /**
   * TikTok Shop store URL (e.g. https://www.tiktok.com/shop/store/...).
   */
  url: string;
}

export interface TiktokShopShopProductsProduct {
  currency: string;
  originalPrice: number;
  price: number;
  productId: string;
  rating: number;
  reviewCount: number;
  soldCount: number;
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Shop Store Products (tiktok_shop.shop_products).
 */
export interface TiktokShopShopProductsData {
  hasMore: boolean;
  nextCursor: string;
  productCount: number;
  products: TiktokShopShopProductsProduct[];
  shopName: string;
  shopRating: number;
  soldCount: number;
}

/**
 * Input for TikTok Shop User Showcase (tiktok_shop.user_showcase).
 */
export interface TiktokShopUserShowcaseInput {
  /**
   * Pagination token for retrieving subsequent product pages.
   */
  cursor?: string;
  /**
   * The handle of the TikTok user (e.g. mrtiktokreviews).
   */
  handle: string;
  /**
   * Geographical region for proxy placement (defaults to US).
   */
  region?: string;
}

export interface TiktokShopUserShowcaseProduct {
  currency: string;
  imageUrl: string;
  originalPrice: string;
  price: string;
  productId: string;
  rating: number;
  reviewCount: number;
  soldCount: number;
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Shop User Showcase (tiktok_shop.user_showcase).
 */
export interface TiktokShopUserShowcaseData {
  nextCursor: string;
  products: TiktokShopUserShowcaseProduct[];
}

/**
 * Typed methods for the tiktok_shop platform. Attached to the AnyAPI client as
 * `client.tiktokShop`.
 */
export class TiktokShopNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * TikTok Shop Product
   *
   * Fetch TikTok Shop product details - title, price, sales, seller, and ratings - from a product URL, with transparent per-request USD pricing.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktokShop.product({ url: "https://www.tiktok.com/shop/pdp/goli-ashwagandha-gummies-with-vitamin-d-ksm-66-vegan-non-gmo/1729587769570529799" });
   */
  product(
    input: TiktokShopProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokShopProductData>> {
    return this._core.run("tiktok_shop.product", input, options);
  }

  /**
   * TikTok Shop Product Reviews
   *
   * Fetch customer reviews for a TikTok Shop product by URL - rating, text, reviewer, country, and verified-purchase flag - normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktokShop.productReviews({ url: "https://www.tiktok.com/shop/pdp/cat-nail-clipper-by-potaroma-adjustable-sizes-built-in-file-safe-for-kittens-cats/1731578642912612516" });
   */
  productReviews(
    input: TiktokShopProductReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokShopProductReviewsData>> {
    return this._core.run("tiktok_shop.product_reviews", input, options);
  }

  /**
   * TikTok Shop Search
   *
   * Search TikTok Shop products by keyword across 15 countries: price, sales, rating, and seller info per product, in one normalized response.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktokShop.search({ query: "phone case", limit: 3 });
   */
  search(
    input: TiktokShopSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokShopSearchData>> {
    return this._core.run("tiktok_shop.search", input, options);
  }

  /**
   * TikTok Shop Store Products
   *
   * List every product of a TikTok Shop store by URL - title, price, sales, and rating per product plus shop-level stats - with cursor pagination and transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktokShop.shopProducts({ url: "https://www.tiktok.com/shop/store/goli-nutrition/7495794203056835079" });
   */
  shopProducts(
    input: TiktokShopShopProductsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokShopShopProductsData>> {
    return this._core.run("tiktok_shop.shop_products", input, options);
  }

  /**
   * Iterate every result of TikTok Shop Store Products across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterShopProducts(
    input: TiktokShopShopProductsInput,
    options?: RequestOptions,
  ): Paginator<
    TiktokShopShopProductsProduct,
    RunResult<TiktokShopShopProductsData>
  > {
    return paginate<
      TiktokShopShopProductsProduct,
      RunResult<TiktokShopShopProductsData>
    >(
      this._core,
      "tiktok_shop.shop_products",
      input as unknown as Record<string, unknown>,
      "products",
      false,
      options,
    );
  }

  /**
   * TikTok Shop User Showcase
   *
   * List the TikTok Shop products a creator showcases - title, price, rating, and sales per product - normalized across providers with transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.tiktokShop.userShowcase({ handle: "mrtiktokreviews" });
   */
  userShowcase(
    input: TiktokShopUserShowcaseInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokShopUserShowcaseData>> {
    return this._core.run("tiktok_shop.user_showcase", input, options);
  }

  /**
   * Iterate every result of TikTok Shop User Showcase across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserShowcase(
    input: TiktokShopUserShowcaseInput,
    options?: RequestOptions,
  ): Paginator<
    TiktokShopUserShowcaseProduct,
    RunResult<TiktokShopUserShowcaseData>
  > {
    return paginate<
      TiktokShopUserShowcaseProduct,
      RunResult<TiktokShopUserShowcaseData>
    >(
      this._core,
      "tiktok_shop.user_showcase",
      input as unknown as Record<string, unknown>,
      "products",
      false,
      options,
    );
  }
}
