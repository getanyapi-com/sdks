// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Target Product (target.product).
 */
export interface TargetProductInput {
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `availability`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a product that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "availability"
    | "category"
    | "dpci"
    | "highlights"
    | "images"
    | "listPrice"
    | "packageDimensions"
    | "rating"
    | "ratingCount"
    | "returnPolicy"
    | "specifications"
    | "upc"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Target product page URL; the TCIN after /A- identifies the product (e.g. https://www.target.com/p/-/A-91863920).
   */
  url: string;
}

export interface TargetProductItem {
  /**
   * Stock status as Target reports it, e.g. "InStock", or null when the serving source does not report it.
   */
  availability?: string | null;
  /**
   * Brand name, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  brand?: string | null;
  /**
   * Target category the product sits in, e.g. "Drip Coffee Makers", or null when the serving source does not report it.
   */
  category?: string | null;
  /**
   * Price currency code, e.g. "USD", or null when no price is shown.
   */
  currency?: string | null;
  /**
   * Product description text, or null when the listing has none.
   */
  description?: string | null;
  /**
   * Target's in-store item number (DPCI), e.g. "072-08-0313", or null when not reported.
   */
  dpci?: string | null;
  /**
   * Highlight bullets from the product page, or null when the serving source does not report them.
   */
  highlights?: string[] | null;
  /**
   * Primary product image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Product image URLs, primary first. One source returns only the primary image.
   */
  images?: string[];
  /**
   * Regular price when the product is on sale, or null when it is not discounted or the serving source does not report it.
   */
  listPrice?: number | null;
  /**
   * Size and weight of the shipping package as Target lists them, or null when the serving source does not report them.
   */
  packageDimensions?: {
    /**
     * Package depth, in dimensionUnit.
     */
    depth?: number | null;
    /**
     * Unit of the three dimensions, e.g. "INCH".
     */
    dimensionUnit?: string | null;
    /**
     * Package height, in dimensionUnit.
     */
    height?: number | null;
    /**
     * Package weight, in weightUnit.
     */
    weight?: number | null;
    /**
     * Unit of the weight, e.g. "POUND".
     */
    weightUnit?: string | null;
    /**
     * Package width, in dimensionUnit.
     */
    width?: number | null;
  } | null;
  /**
   * Current price in USD, or null when the product shows no current price. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * Average customer rating, 0-5, or null when the product is unrated. One source rounds it to one decimal.
   */
  rating?: number | null;
  /**
   * Number of star ratings, including ratings left without a written review, or null when the serving source does not report it.
   */
  ratingCount?: number | null;
  /**
   * Target's return policy text for this item, or null when the serving source does not report it.
   */
  returnPolicy?: string | null;
  /**
   * Number of written customer reviews, or null when not reported.
   */
  reviewsCount?: number | null;
  /**
   * The specifications table from the product page, one name and value per row, or null when the serving source does not report it.
   */
  specifications?: TargetProductSpecification[] | null;
  /**
   * Target product id (TCIN). Target rolls a colour or size variant up to its parent product, so it can differ from the id in the requested URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  tcin?: string;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * UPC barcode as Target lists it, or null when not reported.
   */
  upc?: string | null;
  /**
   * Target product page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

export interface TargetProductSpecification {
  /**
   * Attribute name as Target labels it, e.g. "Material".
   */
  name?: string;
  /**
   * Attribute value as Target lists it.
   */
  value?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Target Product (target.product).
 */
export interface TargetProductData {
  /**
   * Product detail records (one per requested product URL). Populated whenever the provider has data for the entity.
   */
  items: TargetProductItem[];
}

/**
 * Input for Target Reviews (target.reviews).
 */
export interface TargetReviewsInput {
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
   * 1-based page of 10 reviews. Each page is billed as one request; keep url and sort the same while walking pages.
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
   * Review order: recent (newest first, the default), helpful, rating_high, or rating_low (e.g. helpful).
   * One of: recent, helpful, rating_high, rating_low.
   * Default: recent.
   */
  sort?: "recent" | "helpful" | "rating_high" | "rating_low";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Target product page URL; the TCIN after /A- identifies the product (e.g. https://www.target.com/p/-/A-91863920).
   */
  url: string;
}

export interface TargetReviewsItem {
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
   * True when the reviewer received an incentive, such as a free sample, for writing the review, or null when not reported.
   */
  incentivized?: boolean | null;
  /**
   * Star rating the reviewer gave, 1-5.
   */
  rating: number;
  /**
   * True when the reviewer says they would recommend the product, false when they would not, or null when they did not answer.
   */
  recommended?: boolean | null;
  /**
   * Public replies to the review from the brand or Target, oldest first; empty when there are none.
   */
  responses?: TargetReviewsResponse[];
  /**
   * Target review id; use it to deduplicate across pages. Populated whenever the provider has data for the entity.
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
   * UTC epoch timestamp in seconds (Unix time) of the review's last update on Target. Multiply by 1000 for a JS Date in milliseconds. Null when not reported.
   */
  updatedUtc?: number | null;
  /**
   * True when Target marks the review a verified purchase, or null when not reported.
   */
  verifiedPurchase?: boolean | null;
  [extra: string]: unknown;
}

export interface TargetReviewsResponse {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Null when not reported.
   */
  createdUtc?: number | null;
  /**
   * Name the reply is signed with, e.g. the brand's customer team.
   */
  name?: string;
  /**
   * Reply text.
   */
  text?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Target Reviews (target.reviews).
 */
export interface TargetReviewsData {
  /**
   * Customer review records for the requested page. Populated whenever the provider has data for the entity.
   */
  items: TargetReviewsItem[];
  /**
   * Overall product score (1-5), or null when not reported.
   */
  rating?: number | null;
  /**
   * Number of ratings at each star rating, keyed "1" through "5".
   */
  ratingDistribution?: {
    /**
     * Number of 1-star ratings.
     */
    "1"?: number | null;
    /**
     * Number of 2-star ratings.
     */
    "2"?: number | null;
    /**
     * Number of 3-star ratings.
     */
    "3"?: number | null;
    /**
     * Number of 4-star ratings.
     */
    "4"?: number | null;
    /**
     * Number of 5-star ratings.
     */
    "5"?: number | null;
  };
  /**
   * Number of 10-review pages Target reports for the product, or null when not reported.
   */
  totalPages?: number | null;
  /**
   * Total number of written reviews for the product, or null when not reported.
   */
  totalReviews?: number | null;
}

/**
 * Input for Target Search (target.search).
 */
export interface TargetSearchInput {
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
   * 1-based results page of 24 products; Target serves no products past page 50. Each page is billed as one request.
   * Range: minimum 1, maximum 50.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keywords, e.g. "coffee maker" or "lego".
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `totalPages`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    "hasMore" | "images" | "isSponsored" | "rating" | "totalPages"
  )[];
  /**
   * Result sort order; omit for Target's own relevance order (e.g. price_low sorts by lowest price first).
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

export interface TargetSearchItem {
  /**
   * Brand name, or null when not reported.
   */
  brand?: string | null;
  /**
   * Target brand page URL, or null when not reported.
   */
  brandUrl?: string | null;
  /**
   * Target product type the result belongs to, e.g. "Coffee Makers", or null when not reported.
   */
  category?: string | null;
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
   * All product image URLs, primary first, or null when the serving source returns only the primary image.
   */
  images?: string[] | null;
  /**
   * True when the result is a sponsored placement, or null when the serving source does not report it.
   */
  isSponsored?: boolean | null;
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
   * Average customer rating, 0-5, or null when the product is unrated. One source rounds it to one decimal.
   */
  rating?: number | null;
  /**
   * Number of customer ratings, or null when the product has none.
   */
  reviewsCount?: number | null;
  /**
   * Target product id (TCIN), the number after /A- in a target.com URL; use the product URL with the Target Product or Target Reviews SKU. Populated whenever the provider has data for the entity.
   */
  tcin: string;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Target product page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Target Search (target.search).
 */
export interface TargetSearchData {
  /**
   * True when another page of results exists; request it with page + 1. Null when the serving source does not report it.
   */
  hasMore?: boolean | null;
  /**
   * Matching Target product records for the requested page. Populated whenever the provider has data for the entity.
   */
  items: TargetSearchItem[];
  /**
   * Highest page number available for the query, or null when the serving source does not report it.
   */
  totalPages?: number | null;
  /**
   * Total number of matching products Target reports for the query, or null when not reported.
   */
  totalResults?: number | null;
}

/**
 * Typed methods for the target platform. Attached to the AnyAPI client as
 * `client.target`.
 */
export class TargetNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Target Product
   *
   * Fetch a Target.com product by URL and get title, price, brand, rating, description, and images in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.target.product({ url: "https://www.target.com/p/mr-coffee-12c-programmable-drip-coffee-maker-stainless-steel-finish/-/A-91863920" });
   */
  product(
    input: TargetProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<TargetProductData>> {
    return this._core.run("target.product", input, options);
  }

  /**
   * Target Reviews
   *
   * Pull a page of 10 customer reviews for any Target.com product by URL, newest first or by helpfulness or rating: rating, title, text, date, reviewer, and verified-purchase badge.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.target.reviews({ url: "https://www.target.com/p/mr-coffee-12c-programmable-drip-coffee-maker-stainless-steel-finish/-/A-91863920" });
   */
  reviews(
    input: TargetReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TargetReviewsData>> {
    return this._core.run("target.reviews", input, options);
  }

  /**
   * Target Search
   *
   * Search Target.com by keyword with optional sort, price-range, and page filters and get title, price, rating, and brand for each product in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.target.search({ query: "coffee maker" });
   */
  search(
    input: TargetSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<TargetSearchData>> {
    return this._core.run("target.search", input, options);
  }
}
