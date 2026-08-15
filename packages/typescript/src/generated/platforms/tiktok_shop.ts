// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for TikTok Shop Categories (tiktok_shop.categories).
 */
export interface TiktokShopCategoriesInput {
  /**
   * Country code of the TikTok Shop market whose category tree to list. Only US and VN publish a category tree.
   * One of: US, VN.
   * Default: US.
   */
  region?: "US" | "VN";
}

export interface TiktokShopCategoriesCategorie {
  /**
   * TikTok Shop category id. Pass this to tiktok_shop.category_products. Populated whenever the provider has data for the entity.
   */
  categoryId: string;
  /**
   * Child categories one level down.
   */
  children?: TiktokShopCategoriesChildren[];
  /**
   * Category tile image URL.
   */
  image?: string;
  /**
   * True when the category has no children.
   */
  isLeaf?: boolean;
  /**
   * Display name of the category. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * URL slug of the category.
   */
  slug?: string;
  [extra: string]: unknown;
}

export interface TiktokShopCategoriesChildren {
  /**
   * TikTok Shop category id.
   */
  categoryId: string;
  /**
   * True when the category has no children.
   */
  isLeaf?: boolean;
  /**
   * Display name of the category.
   */
  name: string;
  /**
   * URL slug of the category.
   */
  slug?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Shop Categories (tiktok_shop.categories).
 */
export interface TiktokShopCategoriesData {
  /**
   * Top-level TikTok Shop categories for the market, each with its child categories. Populated whenever the provider has data for the entity.
   */
  categories: TiktokShopCategoriesCategorie[];
}

/**
 * Input for TikTok Shop Category Products (tiktok_shop.category_products).
 */
export interface TiktokShopCategoryProductsInput {
  /**
   * TikTok Shop category id, from tiktok_shop.categories (e.g. 700645 for Health).
   */
  categoryId: string;
  /**
   * Pagination cursor: the number of products to skip. Pass "0" or omit for the first page, then advance by the number of items you received (e.g. 15) while hasMore is true.
   */
  cursor?: string;
  /**
   * Two-letter country code of the TikTok Shop market (e.g. US).
   * Default: US.
   */
  region?: string;
}

export interface TiktokShopCategoryProductsItem {
  /**
   * ISO currency name, e.g. USD.
   */
  currency?: string;
  /**
   * Discount off the original price as a percentage, e.g. 10 for 10% off. Omitted when the product is not discounted.
   */
  discountPct?: number;
  /**
   * Primary product image URL.
   */
  image?: string;
  /**
   * Pre-discount list price (0 when not on sale).
   */
  originalPrice?: number;
  /**
   * Current sale price.
   */
  price?: number;
  /**
   * TikTok Shop product id. Populated whenever the provider has data for the entity.
   */
  productId: string;
  /**
   * Average review score.
   */
  rating?: number;
  /**
   * Number of reviews.
   */
  reviewCount?: number;
  /**
   * TikTok Shop seller id, for joining to the seller's other products.
   */
  sellerId?: string;
  /**
   * Seller shop name.
   */
  shopName?: string;
  /**
   * Units sold.
   */
  soldCount?: number;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical product detail page URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Shop Category Products (tiktok_shop.category_products).
 */
export interface TiktokShopCategoryProductsData {
  /**
   * True when the category has further pages upstream.
   */
  hasMore?: boolean;
  /**
   * Product records in the category: id, title, price, rating, sales count, seller, and product URL. Populated whenever the provider has data for the entity.
   */
  items: TiktokShopCategoryProductsItem[];
}

/**
 * Input for TikTok Shop Creator (tiktok_shop.creator).
 */
export interface TiktokShopCreatorInput {
  /**
   * TikTok handle of the creator or shop account, without the @ (e.g. golinutrition).
   */
  handle: string;
  /**
   * Lowercase two-letter country code of the TikTok Shop market (e.g. us).
   * Default: us.
   */
  region?: string;
}

export interface TiktokShopCreatorAudienceAge {
  /**
   * Age bucket, e.g. 25-34.
   */
  bucket?: string;
  /**
   * Share of followers in this bucket, as a percentage.
   */
  sharePct?: number;
  [extra: string]: unknown;
}

export interface TiktokShopCreatorAudienceGender {
  /**
   * Gender label as published upstream.
   */
  gender?: string;
  /**
   * Share of followers, as a percentage.
   */
  sharePct?: number;
  [extra: string]: unknown;
}

export interface TiktokShopCreatorAudienceLocation {
  /**
   * Followers in this location.
   */
  followers?: number;
  /**
   * State or region name.
   */
  state?: string;
  [extra: string]: unknown;
}

export interface TiktokShopCreatorCategorie {
  /**
   * TikTok Shop category id.
   */
  categoryId?: string;
  /**
   * Category display name.
   */
  name?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Shop Creator (tiktok_shop.creator).
 */
export interface TiktokShopCreatorData {
  /**
   * Follower age distribution.
   */
  audienceAge?: TiktokShopCreatorAudienceAge[];
  /**
   * Follower gender distribution.
   */
  audienceGender?: TiktokShopCreatorAudienceGender[];
  /**
   * Top follower locations.
   */
  audienceLocations?: TiktokShopCreatorAudienceLocation[];
  /**
   * Banded average affiliate commission rate the creator earns. Empty when upstream does not publish it.
   */
  avgCommissionRange?: string;
  /**
   * Average likes per live stream.
   */
  avgLiveLikes?: number;
  /**
   * Average viewers per live stream.
   */
  avgLiveViews?: number;
  /**
   * Average comments per video.
   */
  avgVideoComments?: number;
  /**
   * Average likes per video.
   */
  avgVideoLikes?: number;
  /**
   * Average views per video.
   */
  avgVideoViews?: number;
  /**
   * Creator bio text.
   */
  bio?: string;
  /**
   * Number of distinct brands the creator has collaborated with.
   */
  brandCollaborations?: number;
  /**
   * TikTok Shop categories the creator sells in.
   */
  categories?: TiktokShopCreatorCategorie[];
  /**
   * Follower count.
   */
  followers?: number;
  /**
   * Banded gross merchandise value the creator has driven, e.g. "$25K-$60K". Upstream publishes a band rather than an exact figure.
   */
  gmvRange?: string;
  /**
   * Gross merchandise value per thousand views. Zero when upstream does not publish it.
   */
  gpm?: number;
  /**
   * TikTok handle of the creator, without the @. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Creator avatar URL.
   */
  image?: string;
  /**
   * Number of live streams in the measured window.
   */
  liveCount?: number;
  /**
   * Engagement rate on live streams, as a percentage.
   */
  liveEngagementRate?: number;
  /**
   * Display name of the creator. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  nickname?: string;
  /**
   * Share of the creator's posts that carry a shop product, as a percentage.
   */
  postRate?: number;
  /**
   * Number of TikTok Shop products the creator has promoted.
   */
  promotedProducts?: number;
  /**
   * Creator rating. Zero when upstream does not publish it.
   */
  rating?: number;
  /**
   * Two-letter country code of the creator's TikTok Shop market.
   */
  region?: string;
  /**
   * Number of videos posted in the measured window.
   */
  videoCount?: number;
  /**
   * Engagement rate on videos, as a percentage.
   */
  videoEngagementRate?: number;
  [extra: string]: unknown;
}

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
  /**
   * Populated whenever the provider has data for the entity.
   */
  currency: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  originalPrice: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  price: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  productId: string;
  rating: number;
  reviewCount: number;
  sellerLocation: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  sellerName: string;
  soldCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  [extra: string]: unknown;
}

/**
 * Input for TikTok Shop Product Full (tiktok_shop.product_full).
 */
export interface TiktokShopProductFullInput {
  /**
   * TikTok Shop product URL. Any of the public forms works (https://www.tiktok.com/shop/pdp/<id>, https://shop.tiktok.com/<region>/pdp/<slug>/<id>, or https://shop.tiktok.com/view/product/<id>); the product id is read out of it.
   */
  url: string;
}

/**
 * The `data` payload of TikTok Shop Product Full (tiktok_shop.product_full).
 */
export interface TiktokShopProductFullData {
  /**
   * Top-level TikTok Shop category id.
   */
  categoryId?: string;
  /**
   * Slash-separated category breadcrumb, e.g. Health/Nutrition & Wellness/Vitamins.
   */
  categoryPath?: string;
  /**
   * Sales rank of this product within its category. Approximate.
   */
  categoryRank?: number;
  /**
   * Affiliate commission rate as a percentage, e.g. 25 for 25%. Zero when the product runs no open affiliate offer.
   */
  commissionRatePct?: number;
  /**
   * ISO currency code, e.g. USD. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string;
  /**
   * Lifetime gross merchandise value in the product's currency. Rounded upstream to three significant figures, so treat it as approximate.
   */
  gmv?: number;
  /**
   * Gross merchandise value over the last 30 days, in the product's currency. Rounded upstream to three significant figures, so treat it as approximate.
   */
  gmv30d?: number;
  /**
   * Primary product image URL.
   */
  image?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  listedUtc?: number;
  /**
   * Lifetime count of live streams promoting this product. Approximate.
   */
  liveCount?: number;
  /**
   * Live streams promoting this product in the last 30 days. Approximate.
   */
  liveCount30d?: number;
  /**
   * Highest variant price.
   */
  maxPrice?: number;
  /**
   * Lowest variant price.
   */
  minPrice?: number;
  /**
   * True when the listing is no longer on sale.
   */
  offShelf?: boolean;
  /**
   * Current selling price in the product's currency. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number;
  /**
   * TikTok Shop product id. Populated whenever the provider has data for the entity.
   */
  productId: string;
  /**
   * Average review score.
   */
  rating?: number;
  /**
   * Two-letter country code of the TikTok Shop market, e.g. US.
   */
  region?: string;
  /**
   * Number of reviews. Rounded upstream to three significant figures, so treat it as approximate.
   */
  reviewCount?: number;
  /**
   * Seller's lifetime gross merchandise value. Approximate.
   */
  sellerGmv?: number;
  /**
   * TikTok Shop seller id.
   */
  sellerId?: string;
  /**
   * Seller shop name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sellerName?: string;
  /**
   * Seller's lifetime units sold across all products. Approximate.
   */
  sellerUnitsSold?: number;
  /**
   * Seller storefront URL.
   */
  sellerUrl?: string;
  /**
   * Units currently in stock. Rounded upstream to three significant figures, so treat it as approximate.
   */
  stock?: number;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Lifetime units sold. Rounded upstream to three significant figures, so treat it as approximate.
   */
  unitsSold?: number;
  /**
   * Units sold in the last 30 days. Rounded upstream to three significant figures, so treat it as approximate.
   */
  unitsSold30d?: number;
  /**
   * Canonical product detail page URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  /**
   * Lifetime count of videos promoting this product. Approximate.
   */
  videoCount?: number;
  /**
   * Videos promoting this product in the last 30 days. Approximate.
   */
  videoCount30d?: number;
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
  /**
   * Reviewer's country code.
   */
  country: string;
  /**
   * Review time as epoch milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Review identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Star rating for this review (1-5).
   */
  rating: number;
  /**
   * Display name of the reviewer. Populated whenever the provider has data for the entity.
   */
  reviewerName: string;
  /**
   * Variant bought, e.g. "Color: Black". Populated whenever the provider has data for the entity.
   */
  sku: string;
  /**
   * Review text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * True when the review is from a verified purchase.
   */
  verifiedPurchase: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Shop Product Reviews (tiktok_shop.product_reviews).
 */
export interface TiktokShopProductReviewsData {
  /**
   * True when more reviews are available beyond this page.
   */
  hasMore: boolean;
  /**
   * Overall product score (1-5).
   */
  rating: number;
  /**
   * Product reviews. Populated whenever the provider has data for the entity.
   */
  reviews: TiktokShopProductReviewsReview[];
  /**
   * Total number of reviews for the product.
   */
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
   * Discount off the original price as a percentage, e.g. 10 for 10% off. Omitted when the product is not discounted.
   */
  discountPct?: number;
  /**
   * Pre-discount list price (0 when not on sale).
   */
  originalPrice?: number;
  /**
   * Current sale price.
   */
  price?: number;
  /**
   * TikTok Shop product id. Populated whenever the provider has data for the entity.
   */
  productId: string;
  /**
   * Average review score.
   */
  rating?: number;
  /**
   * Number of reviews. Omitted when the lane that served this request does not report it.
   */
  reviewCount?: number;
  /**
   * TikTok Shop seller id, for joining to the seller's other products.
   */
  sellerId?: string;
  /**
   * Seller shop name.
   */
  shopName?: string;
  /**
   * Units sold.
   */
  soldCount?: number;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical product detail page URL. Populated whenever the provider has data for the entity.
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
   * Product records matching the search query: id, title, price, sales count, rating, seller, and product URL. Populated whenever the provider has data for the entity.
   */
  items: TiktokShopSearchItem[];
}

/**
 * Input for TikTok Shop Search Suggestions (tiktok_shop.search_suggestions).
 */
export interface TiktokShopSearchSuggestionsInput {
  /**
   * Two-letter country code of the TikTok Shop market (e.g. US).
   * Default: US.
   */
  country?: string;
  /**
   * Language tag for the suggestions (e.g. en-US).
   * Default: en-US.
   */
  language?: string;
  /**
   * Seed keyword to expand (e.g. ashwagandha gummies).
   */
  query: string;
}

/**
 * The `data` payload of TikTok Shop Search Suggestions (tiktok_shop.search_suggestions).
 */
export interface TiktokShopSearchSuggestionsData {
  /**
   * Autocomplete terms TikTok Shop suggests for the seed keyword, most relevant first. Populated whenever the provider has data for the entity.
   */
  suggestions: string[];
  [extra: string]: unknown;
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
  /**
   * Populated whenever the provider has data for the entity.
   */
  productId: string;
  rating: number;
  reviewCount: number;
  soldCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Shop Store Products (tiktok_shop.shop_products).
 */
export interface TiktokShopShopProductsData {
  hasMore: boolean;
  /**
   * Opaque cursor for the next page of products, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  productCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  products: TiktokShopShopProductsProduct[];
  /**
   * Populated whenever the provider has data for the entity.
   */
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
  /**
   * Populated whenever the provider has data for the entity.
   */
  imageUrl: string;
  originalPrice: string;
  price: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  productId: string;
  rating: number;
  reviewCount: number;
  soldCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of TikTok Shop User Showcase (tiktok_shop.user_showcase).
 */
export interface TiktokShopUserShowcaseData {
  /**
   * Opaque cursor for the next page of products, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  products: TiktokShopUserShowcaseProduct[];
}

/**
 * Typed methods for the tiktok_shop platform. Attached to the AnyAPI client as
 * `client.tiktokShop`.
 */
export class TiktokShopNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * TikTok Shop Categories
   *
   * List the TikTok Shop category tree for a market: top-level categories with ids, slugs, and images, each with its child categories.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.tiktokShop.categories({ region: "US" });
   */
  categories(
    input: TiktokShopCategoriesInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokShopCategoriesData>> {
    return this._core.run("tiktok_shop.categories", input, options);
  }

  /**
   * TikTok Shop Category Products
   *
   * Browse TikTok Shop products inside a category by category id: price, discount, rating, sales count, seller, and product URL per product.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.tiktokShop.categoryProducts({ categoryId: "700645", region: "US" });
   */
  categoryProducts(
    input: TiktokShopCategoryProductsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokShopCategoryProductsData>> {
    return this._core.run("tiktok_shop.category_products", input, options);
  }

  /**
   * TikTok Shop Creator
   *
   * TikTok Shop creator performance by handle: GMV range, promoted product count, brand collaborations, follower age/gender/location demographics, category GMV split, and video versus live engagement.
   *
   * Price: $0.00525 per request plus $0 per result (maximum $0.00525).
   *
   * @example
   * const res = await client.tiktokShop.creator({ handle: "golinutrition" });
   */
  creator(
    input: TiktokShopCreatorInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokShopCreatorData>> {
    return this._core.run("tiktok_shop.creator", input, options);
  }

  /**
   * TikTok Shop Product
   *
   * Fetch TikTok Shop product details (title, price, sales, seller, and ratings) from a product URL.
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
   * TikTok Shop Product Full
   *
   * Deep TikTok Shop product record from a product URL: affiliate commission rate, units sold and GMV over the last 30 days and lifetime, stock, rating, review count, category tree, listing date, and the seller's own sales totals.
   *
   * Price: $0.021 per request plus $0 per result (maximum $0.021).
   *
   * @example
   * const res = await client.tiktokShop.productFull({ url: "https://www.tiktok.com/shop/pdp/1729527313880355335" });
   */
  productFull(
    input: TiktokShopProductFullInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokShopProductFullData>> {
    return this._core.run("tiktok_shop.product_full", input, options);
  }

  /**
   * TikTok Shop Product Reviews
   *
   * Fetch customer reviews for a TikTok Shop product by URL (rating, text, reviewer, country, and verified-purchase flag).
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
   * Price: $0.0012 per request.
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
   * TikTok Shop Search Suggestions
   *
   * Get TikTok Shop search autocomplete terms for a keyword: the long-tail queries shoppers actually type, for keyword and demand research.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.tiktokShop.searchSuggestions({ query: "ashwagandha gummies", country: "US" });
   */
  searchSuggestions(
    input: TiktokShopSearchSuggestionsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TiktokShopSearchSuggestionsData>> {
    return this._core.run("tiktok_shop.search_suggestions", input, options);
  }

  /**
   * TikTok Shop Store Products
   *
   * List every product of a TikTok Shop store by URL (title, price, sales, and rating per product plus shop-level stats) with cursor pagination.
   *
   * Price: $0.0012 per request.
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
   * List the TikTok Shop products a creator showcases (title, price, rating, and sales per product).
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
