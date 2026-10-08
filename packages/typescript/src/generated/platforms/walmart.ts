// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Walmart Product (walmart.product).
 */
export interface WalmartProductInput {
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `productId`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a product that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "productId"[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Walmart product page URL.
   */
  url: string;
}

export interface WalmartProductItem {
  /**
   * Stock status, e.g. "IN_STOCK".
   */
  availability?: string;
  /**
   * Brand name; empty when not reported.
   */
  brand?: string;
  /**
   * Short product description; empty when the listing has none.
   */
  description?: string;
  /**
   * Primary product image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * All product image URLs.
   */
  images?: string[];
  /**
   * Walmart US item id (usItemId). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  itemId?: string;
  /**
   * Manufacturer model number; empty when not reported.
   */
  model?: string;
  /**
   * Maximum units of this item one order may contain.
   */
  orderLimit?: number;
  /**
   * Current price as displayed, e.g. "$125.00"; empty when unavailable (Walmart returns a formatted string, not a numeric value).
   */
  priceText?: string;
  /**
   * Walmart internal product id.
   */
  productId?: string;
  /**
   * Average customer rating, 0-5; 0 when unrated.
   */
  rating?: number;
  /**
   * Days the buyer has to return the item.
   */
  returnWindow?: number;
  /**
   * Number of customer reviews; 0 when none.
   */
  reviewsCount?: number;
  /**
   * Identifier of the seller fulfilling the offer.
   */
  sellerId?: string;
  /**
   * Name of the seller fulfilling the offer.
   */
  sellerName?: string;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Universal Product Code; empty when not reported.
   */
  upc?: string;
  /**
   * Canonical Walmart product page URL (condition query param retained, as it selects the offer). Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Walmart Product (walmart.product).
 */
export interface WalmartProductData {
  /**
   * Product detail records (one per requested product URL). Populated whenever the provider has data for the entity.
   */
  items: WalmartProductItem[];
}

/**
 * Input for Walmart Reviews (walmart.reviews).
 */
export interface WalmartReviewsInput {
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
   * 1-based page of 10 reviews, Walmart's fixed page size; Walmart serves at most 100 pages. Each page is billed as one request; keep url and sort the same while walking pages.
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `totalPages`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "totalPages"[];
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
   * Walmart product page URL (e.g. https://www.walmart.com/ip/Apple-AirPods-Pro-2/5689919121).
   */
  url: string;
}

export interface WalmartReviewsItem {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Walmart publishes the review date only, so this is midnight UTC of that date; null when not reported. Populated whenever the provider has data for the entity.
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
   * Walmart review id; use it to deduplicate across pages. Populated whenever the provider has data for the entity.
   */
  reviewId: string;
  /**
   * Reviewer display name as Walmart shows it, e.g. "anonymous"; empty when withheld.
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
   * True when Walmart marks the review a verified purchase; null when the serving source reports no badge either way.
   */
  verifiedPurchase?: boolean | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Walmart Reviews (walmart.reviews).
 */
export interface WalmartReviewsData {
  /**
   * Customer review records for the requested page. Populated whenever the provider has data for the entity.
   */
  items: WalmartReviewsItem[];
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
   * Number of 10-review pages Walmart reports for the product (it can exceed the 100 pages this SKU serves), or absent or null when the serving source does not report it.
   */
  totalPages?: number | null;
  /**
   * Total number of reviews for the product, or null when the serving source does not report it.
   */
  totalReviews?: number | null;
}

/**
 * Input for Walmart Search (walmart.search).
 */
export interface WalmartSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional Walmart facet filter token, e.g. brand:HP to keep only HP products.
   */
  facet?: string;
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
   * 1-based results page of about 40 to 60 products; Walmart serves no products past page 10. Each page is billed as one request. Walmart re-ranks between requests, so consecutive pages can repeat a product: deduplicate on itemId.
   * Range: minimum 1, maximum 10.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keywords, e.g. "airpods" or "paper towels".
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `totalPages`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "totalPages"[];
  /**
   * Result sort order; omit for Walmart's Best Match (e.g. price_low sorts by lowest price first).
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

export interface WalmartSearchItem {
  /**
   * Stock status as Walmart reports it, e.g. "IN_STOCK" or "OUT_OF_STOCK".
   */
  availability?: string;
  /**
   * Brand name, or null when Walmart omits it from the search grid (it publishes brand on clothing-style grids and on no row elsewhere; the Walmart Product SKU always carries it).
   */
  brand?: string | null;
  /**
   * Price currency code, e.g. "USD"; empty when no price is shown.
   */
  currency?: string;
  /**
   * Primary product image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * True when the product is in stock, false when it is not, or null when not reported.
   */
  inStock?: boolean | null;
  /**
   * True when the result is a sponsored placement.
   */
  isSponsored?: boolean | null;
  /**
   * Walmart US item id (usItemId), the number in a walmart.com/ip/ URL; use the product URL with the Walmart Product or Walmart Reviews SKU. Populated whenever the provider has data for the entity.
   */
  itemId: string;
  /**
   * Pre-discount "was" price when the product is on sale, or null when it is not discounted.
   */
  listPrice?: number | null;
  /**
   * 1-based position of the result in this page.
   */
  position?: number | null;
  /**
   * Current price in USD as a number, or null when the result shows no current price. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * Average customer rating, 0-5, or null when the product is unrated.
   */
  rating?: number | null;
  /**
   * Number of customer ratings, or null when the product has none.
   */
  reviewsCount?: number | null;
  /**
   * Identifier of the seller fulfilling the shown offer.
   */
  sellerId?: string;
  /**
   * Name of the seller fulfilling the shown offer.
   */
  sellerName?: string;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Walmart product page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Walmart Search (walmart.search).
 */
export interface WalmartSearchData {
  /**
   * Matching Walmart product records for the requested page. Populated whenever the provider has data for the entity.
   */
  items: WalmartSearchItem[];
  /**
   * Highest page number available for the query; request pages 1 through this value. Absent or null when the serving source does not report it.
   */
  totalPages?: number | null;
  /**
   * Total number of matching products Walmart reports for the query, or null when not reported.
   */
  totalResults?: number | null;
}

/**
 * Typed methods for the walmart platform. Attached to the AnyAPI client as
 * `client.walmart`.
 */
export class WalmartNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Walmart Product
   *
   * Fetch a Walmart product page by URL and get full product details (title, price, availability, ratings, images, and specs) in one normalized response.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.walmart.product({ url: "https://www.walmart.com/ip/Apple-AirPods-Pro-2/5689919121" });
   */
  product(
    input: WalmartProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<WalmartProductData>> {
    return this._core.run("walmart.product", input, options);
  }

  /**
   * Walmart Reviews
   *
   * Pull a page of 10 customer reviews for any Walmart product by URL, newest first or by relevance, helpfulness, or rating: rating, title, text, date, reviewer, and verified-purchase badge.
   *
   * Price: $0.00125 per request.
   *
   * @example
   * const res = await client.walmart.reviews({ url: "https://www.walmart.com/ip/Apple-AirPods-Pro-2/5689919121" });
   */
  reviews(
    input: WalmartReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<WalmartReviewsData>> {
    return this._core.run("walmart.reviews", input, options);
  }

  /**
   * Walmart Search
   *
   * Search Walmart by keyword with optional sort, price-range, facet, and page filters and get title, price, rating, seller, and availability for each product in one normalized response.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.walmart.search({ query: "airpods", sort: "best_seller" });
   */
  search(
    input: WalmartSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<WalmartSearchData>> {
    return this._core.run("walmart.search", input, options);
  }
}
