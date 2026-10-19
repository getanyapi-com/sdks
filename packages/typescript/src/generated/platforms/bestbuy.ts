// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Best Buy Product (bestbuy.product).
 */
export interface BestbuyProductInput {
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Best Buy product page URL that carries the numeric Best Buy SKU, either the .../sku/6376564 form the Best Buy Search SKU returns or the older .../6376564.p?skuId=6376564 form.
   */
  url: string;
}

export interface BestbuyProductItem {
  /**
   * Brand name, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  brand?: string | null;
  /**
   * Price currency code, e.g. "USD", or null when no price is shown.
   */
  currency?: string | null;
  /**
   * Product description text, or null when the listing has none.
   */
  description?: string | null;
  /**
   * Primary product image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * All product image URLs, primary first.
   */
  images?: string[];
  /**
   * Regular price when the product is on sale, or null when it is not discounted.
   */
  listPrice?: number | null;
  /**
   * Manufacturer model number, or null when not reported.
   */
  model?: string | null;
  /**
   * Current price in USD, or null when the product shows no current price. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * Average customer rating, 0-5, or null when the product is unrated.
   */
  rating?: number | null;
  /**
   * Number of customer reviews, or null when not reported.
   */
  reviewsCount?: number | null;
  /**
   * Best Buy SKU. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sku?: string;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Universal Product Code, or null when not reported.
   */
  upc?: string | null;
  /**
   * Best Buy product page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Best Buy Product (bestbuy.product).
 */
export interface BestbuyProductData {
  /**
   * Product detail records (one per requested product URL). Populated whenever the provider has data for the entity.
   */
  items: BestbuyProductItem[];
}

/**
 * Input for Best Buy Reviews (bestbuy.reviews).
 */
export interface BestbuyReviewsInput {
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
   * 1-based page of 10 reviews; Best Buy serves at most 1000 pages. Each page is billed as one request; keep url and sort the same while walking pages.
   * Range: minimum 1, maximum 1000.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `rating`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "rating"[];
  /**
   * Review order: recent (newest first, the default), oldest, relevancy, helpful, rating_high, or rating_low (e.g. helpful).
   * One of: recent, oldest, relevancy, helpful, rating_high, rating_low.
   * Default: recent.
   */
  sort?:
    | "recent"
    | "oldest"
    | "relevancy"
    | "helpful"
    | "rating_high"
    | "rating_low";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Best Buy product page URL that carries the numeric Best Buy SKU, either the .../sku/6376564 form the Best Buy Search SKU returns or the older .../6376564.p?skuId=6376564 form.
   */
  url: string;
}

export interface BestbuyReviewsItem {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number | null;
  /**
   * Number of "helpful" votes the review received, or null when not reported.
   */
  helpfulVotes?: number | null;
  /**
   * Star rating the reviewer gave, 1-5.
   */
  rating: number;
  /**
   * Best Buy review id; use it to deduplicate across pages. Populated whenever the provider has data for the entity.
   */
  reviewId: string;
  /**
   * Reviewer display name; empty when withheld.
   */
  reviewer?: string;
  /**
   * Full review body text. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Review headline; empty when the review has none.
   */
  title?: string;
  /**
   * True when Best Buy marks the review a verified purchase, or null when not reported.
   */
  verifiedPurchase?: boolean | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Best Buy Reviews (bestbuy.reviews).
 */
export interface BestbuyReviewsData {
  /**
   * Customer review records for the requested page. Populated whenever the provider has data for the entity.
   */
  items: BestbuyReviewsItem[];
  /**
   * Overall product score (1-5), or null when the serving source does not report it.
   */
  rating?: number | null;
  /**
   * Number of reviews at each star rating, keyed "1" through "5".
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
   * Number of 10-review pages Best Buy reports for the product, or null when not reported.
   */
  totalPages?: number | null;
  /**
   * Total number of reviews for the product, or null when not reported.
   */
  totalReviews?: number | null;
}

/**
 * Input for Best Buy Search (bestbuy.search).
 */
export interface BestbuySearchInput {
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
   * Optional maximum product price in USD.
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Optional minimum product price in USD.
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * 1-based results page of about 18 to 24 products; Best Buy serves no products past page 100. Each page is billed as one request. Page sizes differ between sources, so deduplicate on sku.
   * Range: minimum 1, maximum 100.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keywords, e.g. "airpods" or "65 inch tv".
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `totalResults`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "totalResults"[];
  /**
   * Result sort order; omit for Best Buy's own relevance order (e.g. price_low sorts by lowest price first).
   * One of: best_match, best_seller, price_low, price_high, rating_high, new.
   */
  sort?:
    | "best_match"
    | "best_seller"
    | "price_low"
    | "price_high"
    | "rating_high"
    | "new";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface BestbuySearchItem {
  /**
   * Brand name, or null when not reported.
   */
  brand?: string | null;
  /**
   * Price currency code, e.g. "USD", or null when no price is shown.
   */
  currency?: string | null;
  /**
   * Primary product image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Regular price when the product is on sale, or null when it is not discounted.
   */
  listPrice?: number | null;
  /**
   * 1-based position of the result in this page.
   */
  position?: number | null;
  /**
   * Current price in USD, or null when the result shows no current price. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * Average customer rating, 0-5, or null when the product is unrated.
   */
  rating?: number | null;
  /**
   * Number of customer reviews, or null when the product has none.
   */
  reviewsCount?: number | null;
  /**
   * Best Buy SKU, the number after /sku/ in the product URL; use the product URL with the Best Buy Product or Best Buy Reviews SKU. Populated whenever the provider has data for the entity.
   */
  sku: string;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Best Buy product page URL carrying the SKU, with tracking query parameters removed. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Best Buy Search (bestbuy.search).
 */
export interface BestbuySearchData {
  /**
   * Matching Best Buy product records for the requested page. Populated whenever the provider has data for the entity.
   */
  items: BestbuySearchItem[];
  /**
   * Total number of matching products Best Buy reports for the query, or null when the serving source does not report it.
   */
  totalResults?: number | null;
}

/**
 * Typed methods for the bestbuy platform. Attached to the AnyAPI client as
 * `client.bestbuy`.
 */
export class BestbuyNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Best Buy Product
   *
   * Fetch a BestBuy.com product by URL and get title, price, brand, model, UPC, rating, description, and images in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.bestbuy.product({ url: "https://www.bestbuy.com/product/apple-airpods-5-true-wireless-active-noise-cancelling-earbuds-with-wireless-charging-case-white/JJGCQP634G/sku/6376564" });
   */
  product(
    input: BestbuyProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<BestbuyProductData>> {
    return this._core.run("bestbuy.product", input, options);
  }

  /**
   * Best Buy Reviews
   *
   * Pull a page of 10 customer reviews for any BestBuy.com product by URL, newest first or by relevance, helpfulness, or rating: rating, title, text, date, reviewer, and verified-purchase badge.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.bestbuy.reviews({ url: "https://www.bestbuy.com/product/apple-airpods-5-true-wireless-active-noise-cancelling-earbuds-with-wireless-charging-case-white/JJGCQP634G/sku/6376564" });
   */
  reviews(
    input: BestbuyReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<BestbuyReviewsData>> {
    return this._core.run("bestbuy.reviews", input, options);
  }

  /**
   * Best Buy Search
   *
   * Search BestBuy.com by keyword with optional sort, price-range, and page filters and get title, price, rating, and brand for each product in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.bestbuy.search({ query: "airpods" });
   */
  search(
    input: BestbuySearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<BestbuySearchData>> {
    return this._core.run("bestbuy.search", input, options);
  }
}
