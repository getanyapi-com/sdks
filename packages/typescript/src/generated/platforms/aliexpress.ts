// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for AliExpress Product (aliexpress.product).
 */
export interface AliexpressProductInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Ship-to country as a 2-letter ISO code, e.g. US or DE. It changes prices, stock and the delivery estimate.
   * Default: US.
   */
  country?: string;
  /**
   * Price currency as a 3-letter ISO code, e.g. USD or EUR.
   * Default: USD.
   */
  currency?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * AliExpress product id, the number in the product URL (https://www.aliexpress.com/item/<id>.html), e.g. 3256807039224587. The AliExpress Search SKU returns it as productId.
   */
  productId: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `video`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    "freeShipping" | "returnPolicy" | "shippingCost" | "video" | "wishlistCount"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface AliexpressProductItem {
  /**
   * Price currency code, e.g. "USD", or null when no price is shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * Most days the default shipping option takes to the requested country, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  deliveryDaysMax?: number | null;
  /**
   * Fewest days the default shipping option takes to the requested country, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  deliveryDaysMin?: number | null;
  /**
   * True when the default shipping option to the requested country costs nothing after AliExpress's buyer promotions, or null when the serving source does not report it.
   */
  freeShipping?: boolean | null;
  /**
   * Product image URLs, primary first. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  images?: string[];
  /**
   * True when AliExpress marks the store as a top-rated seller, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  isTopRatedSeller?: boolean | null;
  /**
   * The choices a buyer picks from, e.g. Color and Size, each with its values. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  options?: AliexpressProductOption[];
  /**
   * Price of the default variant before the current discount, or null when not shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  originalPrice?: number | null;
  /**
   * Current price of the default variant in the requested currency (the lowest variant price when the page shows a range), or null when not shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * AliExpress product id. Populated whenever the provider has data for the entity.
   */
  productId: string;
  /**
   * Units in stock across all variants, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  quantityAvailable?: number | null;
  /**
   * Average customer rating, 0-5, or null when the product is unrated. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number | null;
  /**
   * The returns promise AliExpress shows on the product, e.g. "Free returns within 90 days", or null when the serving source does not report it.
   */
  returnPolicy?: string | null;
  /**
   * Number of customer reviews, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  reviewsCount?: number | null;
  /**
   * Country the store is registered in, as AliExpress names it, e.g. "China", or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sellerCountry?: string | null;
  /**
   * Number of buyer feedback ratings the store has received, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sellerFeedbackCount?: number | null;
  /**
   * Share of the store's buyer feedback that is positive, as a percentage, e.g. 95.9, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sellerFeedbackPercent?: number | null;
  /**
   * The store's AliExpress seller level code, e.g. "25-s", or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sellerLevel?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. The day the store opened on AliExpress, as midnight UTC of that date; null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sellerOpenedUtc?: number | null;
  /**
   * The store's AliExpress feedback score, the points AliExpress shows beside the store, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sellerScore?: number | null;
  /**
   * Country the default shipping option ships from, as AliExpress names it, e.g. "China", or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  shipFrom?: string | null;
  /**
   * Shipping cost of the default option to the requested country, in the requested currency, or null when not reported or the serving source does not report it in that currency. AliExpress applies buyer promotions to it, so sources can differ.
   */
  shippingCost?: number | null;
  /**
   * Units sold, read from AliExpress's rounded label, so "4,000+ sold" comes back as 4000; null when not shown.
   */
  soldCount?: number | null;
  /**
   * The seller's specifications table, one name and value per row. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  specifications?: AliexpressProductSpecification[];
  /**
   * Storefront number of the store, the digits in https://www.aliexpress.com/store/<id>, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  storeId?: string | null;
  /**
   * Name of the store selling the product, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  storeName?: string | null;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * AliExpress product page URL with tracking query parameters removed.
   */
  url: string;
  /**
   * One entry per purchasable combination of options. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  variants?: AliexpressProductVariant[];
  /**
   * Product video URL (MP4), or null when the product has none or the serving source does not report it.
   */
  video?: string | null;
  /**
   * Number of shoppers who added the product to their wish list, or null when the serving source does not report it.
   */
  wishlistCount?: number | null;
  [extra: string]: unknown;
}

export interface AliexpressProductOption {
  /**
   * Option name as AliExpress shows it, e.g. "Color".
   */
  name?: string;
  /**
   * Values a buyer can pick, e.g. ["green", "Purple"].
   */
  values?: string[];
  [extra: string]: unknown;
}

export interface AliexpressProductSpecification {
  /**
   * Attribute name as the seller lists it, e.g. "Material".
   */
  name?: string;
  /**
   * Attribute value as the seller lists it.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface AliexpressProductVariant {
  /**
   * The option values that make up this variant, keyed by option name, e.g. {"Color": "Purple", "Size": "XL"}, or null when the serving source does not report them.
   */
  attributes?: {} | null;
  /**
   * Picture of this variant, or null when it has none or the serving source does not report it.
   */
  image?: string | null;
  /**
   * True when this variant can be bought now, or null when not reported.
   */
  inStock?: boolean | null;
  /**
   * Price of this variant before the current discount, or null when not reported.
   */
  originalPrice?: number | null;
  /**
   * Current price of this variant, or null when the serving source does not report it.
   */
  price?: number | null;
  /**
   * Units of this variant in stock, or null when not reported.
   */
  quantityAvailable?: number | null;
  /**
   * AliExpress id of this variant.
   */
  skuId?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of AliExpress Product (aliexpress.product).
 */
export interface AliexpressProductData {
  /**
   * Product detail records (one per requested product id). Populated whenever the provider has data for the entity.
   */
  items: AliexpressProductItem[];
}

/**
 * Input for AliExpress Reviews (aliexpress.reviews).
 */
export interface AliexpressReviewsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * 1-based page of 20 reviews in AliExpress's default order. Each page is billed as one request.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * AliExpress product id, the number in the product URL (https://www.aliexpress.com/item/<id>.html), e.g. 3256807039224587. The AliExpress Search SKU returns it as productId.
   */
  productId: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `helpfulVotes`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "followUpImages"
    | "followUpText"
    | "followUpUtc"
    | "helpfulVotes"
    | "unhelpfulVotes"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface AliexpressReviewsItem {
  /**
   * The buyer's ratings of named aspects of the product, e.g. {"name": "Durability", "value": "Poor"}; empty when the buyer rated none.
   */
  aspects: AliexpressReviewsAspect[];
  /**
   * 2-letter ISO code of the buyer's country, e.g. "US", or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  country?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. AliExpress publishes the review date only, so this is midnight UTC of that date; null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number | null;
  /**
   * Photo URLs attached to the follow-up review; empty when it has none, null when the serving source does not report follow-ups.
   */
  followUpImages?: string[] | null;
  /**
   * Text of the follow-up review the buyer added later, or null when there is none or the serving source does not report it.
   */
  followUpText?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. The day the buyer added the follow-up review, as midnight UTC of that date; null when there is none or the serving source does not report it.
   */
  followUpUtc?: number | null;
  /**
   * Number of "helpful" votes the review received, or null when the serving source does not report it.
   */
  helpfulVotes?: number | null;
  /**
   * Photo URLs the buyer attached; empty when there are none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  images?: string[];
  /**
   * Star rating the buyer gave, 1-5.
   */
  rating: number;
  /**
   * AliExpress review id; use it to deduplicate across pages. Populated whenever the provider has data for the entity.
   */
  reviewId: string;
  /**
   * Buyer display name as AliExpress shows it, usually masked (e.g. "A***r") or "AliExpress Shopper". Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  reviewer?: string;
  /**
   * Shipping service the buyer's order came by, as AliExpress names it, e.g. "AliExpress Selection Standard Shipping", or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  shippingMethod?: string | null;
  /**
   * The variant the buyer bought, as AliExpress prints it, e.g. "Color:Yellow Size:XXL", or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  skuInfo?: string | null;
  /**
   * Review body text in the buyer's own language; empty when the buyer left a rating only. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Number of "not helpful" votes the review received, or null when the serving source does not report it.
   */
  unhelpfulVotes?: number | null;
  [extra: string]: unknown;
}

export interface AliexpressReviewsAspect {
  /**
   * Aspect the buyer rated, e.g. "Durability".
   */
  name?: string;
  /**
   * The buyer's rating of it, e.g. "Poor", or null when not reported.
   */
  value?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of AliExpress Reviews (aliexpress.reviews).
 */
export interface AliexpressReviewsData {
  /**
   * Buyer review records for the requested page. Populated whenever the provider has data for the entity.
   */
  items: AliexpressReviewsItem[];
  /**
   * Overall product score (1-5), or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number | null;
  /**
   * Number of reviews at each star rating, keyed "1" through "5". Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  ratingDistribution?: {
    /**
     * Number of 1-star reviews.
     */
    "1"?: number | null;
    /**
     * Number of 2-star reviews.
     */
    "2"?: number | null;
    /**
     * Number of 3-star reviews.
     */
    "3"?: number | null;
    /**
     * Number of 4-star reviews.
     */
    "4"?: number | null;
    /**
     * Number of 5-star reviews.
     */
    "5"?: number | null;
  };
  /**
   * Number of 20-review pages AliExpress reports for the product, or null when not reported.
   */
  totalPages?: number | null;
  /**
   * Total number of reviews for the product, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  totalReviews?: number | null;
}

/**
 * Input for AliExpress Search (aliexpress.search).
 */
export interface AliexpressSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Ship-to country as a 2-letter ISO code, e.g. US or DE. It changes prices, availability and delivery estimates.
   * Default: US.
   */
  country?: string;
  /**
   * Price currency as a 3-letter ISO code, e.g. USD or EUR.
   * Default: USD.
   */
  currency?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional maximum product price, in the requested currency.
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Optional minimum product price, in the requested currency.
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * 1-based results page of about 60 products; AliExpress serves no results past page 60. Each page is billed as one request.
   * Range: minimum 1, maximum 60.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keywords, e.g. "wireless earbuds".
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `shipFrom`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "deliveryDaysMax"
    | "deliveryDaysMin"
    | "isChoice"
    | "listedUtc"
    | "shipFrom"
    | "storeName"
    | "totalResults"
  )[];
  /**
   * Result order: best_match (AliExpress relevance, the default), best_seller (most orders first), price_low, or price_high.
   * One of: best_match, best_seller, price_low, price_high.
   * Default: best_match.
   */
  sort?: "best_match" | "best_seller" | "price_low" | "price_high";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface AliexpressSearchItem {
  /**
   * Price currency code, e.g. "USD", or null when no price is shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * Most days the estimated delivery to the requested country takes, or null when not reported.
   */
  deliveryDaysMax?: number | null;
  /**
   * Fewest days the estimated delivery to the requested country takes, or null when not reported.
   */
  deliveryDaysMin?: number | null;
  /**
   * Primary product image URL, or null when the card shows none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string | null;
  /**
   * Every product image URL the card carries, primary first; empty when the card shows none.
   */
  images: string[];
  /**
   * True when the product carries the AliExpress Choice badge, or null when the serving source does not report it.
   */
  isChoice?: boolean | null;
  /**
   * True when the card is a paid placement, or null when not reported.
   */
  isSponsored: boolean | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. The day the product was first listed, as midnight UTC of that date; null when the serving source does not report it.
   */
  listedUtc?: number | null;
  /**
   * Price before the current discount, or null when the product is not discounted.
   */
  originalPrice?: number | null;
  /**
   * Current price in the requested currency, or null when the card shows no price. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * AliExpress product id, the number in the product URL; pass it to the AliExpress Product or AliExpress Reviews SKU. Populated whenever the provider has data for the entity.
   */
  productId: string;
  /**
   * Average customer rating, 0-5, or null when the product is unrated.
   */
  rating?: number | null;
  /**
   * 2-letter ISO code of the country the product ships from, e.g. "CN", or null when not reported.
   */
  shipFrom?: string | null;
  /**
   * Id of the product variant the card's price is for, or null when not reported.
   */
  skuId?: string | null;
  /**
   * Number of units sold, or null when not shown. One source reads it from AliExpress's rounded label, so "60,000+ sold" comes back as 60000. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  soldCount?: number | null;
  /**
   * Name of the store selling the product, or null when the card does not show it.
   */
  storeName?: string | null;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * AliExpress product page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of AliExpress Search (aliexpress.search).
 */
export interface AliexpressSearchData {
  /**
   * Matching AliExpress product cards for the requested page. Populated whenever the provider has data for the entity.
   */
  items: AliexpressSearchItem[];
  /**
   * Total products AliExpress reports for the search, or null when the serving source does not report it.
   */
  totalResults?: number | null;
}

/**
 * Typed methods for the aliexpress platform. Attached to the AnyAPI client as
 * `client.aliexpress`.
 */
export class AliexpressNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * AliExpress Product
   *
   * Look up one AliExpress product by id and get its price, original price, rating, reviews count, images, options, variants with stock, specifications, store, ship-from country and delivery estimate in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.aliexpress.product({ productId: "3256807039224587" });
   */
  product(
    input: AliexpressProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<AliexpressProductData>> {
    return this._core.run("aliexpress.product", input, options);
  }

  /**
   * AliExpress Reviews
   *
   * Get one page of buyer reviews for an AliExpress product by id, with rating, text, buyer country, date, bought variant and photos for each review, plus the product's total reviews, average rating and star distribution, in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.aliexpress.reviews({ productId: "3256807039224587" });
   */
  reviews(
    input: AliexpressReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<AliexpressReviewsData>> {
    return this._core.run("aliexpress.reviews", input, options);
  }

  /**
   * AliExpress Search
   *
   * Search AliExpress by keyword with optional sort, price-range, page, ship-to country and currency, and get title, price, original price, units sold and image for each product in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.aliexpress.search({ query: "minecraft room projector" });
   */
  search(
    input: AliexpressSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<AliexpressSearchData>> {
    return this._core.run("aliexpress.search", input, options);
  }
}
