// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Amazon Products by ASIN (amazon.asins).
 */
export interface AmazonAsinsInput {
  /**
   * Amazon marketplace domain to fetch products from (e.g. amazon.com, amazon.de, amazon.co.uk).
   * Default: amazon.com.
   */
  amazonDomain?: string;
  /**
   * Up to 10 Amazon ASINs to look up (e.g. ["B0CHX1W1XY", "B09G9FPHY6"]).
   */
  asins: string[];
  /**
   * Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 10.
   */
  limit?: number;
}

export interface AmazonAsinsItem {
  /**
   * Amazon Standard Identification Number. Populated whenever the provider has data for the entity.
   */
  asin: string;
  /**
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  brand?: string;
  condition?: string;
  currency?: string;
  /**
   * Primary product image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  inStock?: boolean;
  /**
   * Buy-box price; 0 when no offer is available.
   */
  price?: number;
  /**
   * Average star rating, 0-5.
   */
  rating?: number;
  reviewsCount?: number;
  sellerName?: string;
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
 * The `data` payload of Amazon Products by ASIN (amazon.asins).
 */
export interface AmazonAsinsData {
  /**
   * Product records: ASIN, title, brand, price, ratings, images, and attributes. Populated whenever the provider has data for the entity.
   */
  items: AmazonAsinsItem[];
}

/**
 * Input for Amazon Bestsellers (amazon.bestsellers).
 */
export interface AmazonBestsellersInput {
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Amazon Best Sellers category URL (e.g. https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics).
   */
  url: string;
}

export interface AmazonBestsellersItem {
  /**
   * Amazon Standard Identification Number. Populated whenever the provider has data for the entity.
   */
  asin: string;
  /**
   * Best Sellers category name the product ranks in.
   */
  categoryName?: string;
  /**
   * Price currency symbol or code, e.g. "$".
   */
  currency?: string;
  /**
   * Primary product thumbnail image URL.
   */
  image?: string;
  /**
   * Number of available offers; 0 when unknown.
   */
  offersCount?: number;
  /**
   * Listed price; 0 when no offer is available.
   */
  price?: number;
  /**
   * Best-seller rank within the category (1 = top).
   */
  rank?: number;
  /**
   * Average star rating, 0-5; 0 when unrated.
   */
  rating?: number;
  /**
   * Number of customer reviews; 0 when none.
   */
  reviewsCount?: number;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical product detail page URL (tracking query params stripped). Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Amazon Bestsellers (amazon.bestsellers).
 */
export interface AmazonBestsellersData {
  /**
   * Best-seller product records ordered by category rank. Populated whenever the provider has data for the entity.
   */
  items: AmazonBestsellersItem[];
}

/**
 * Input for Amazon Product (amazon.product).
 */
export interface AmazonProductInput {
  /**
   * Full Amazon product URL (e.g. https://www.amazon.com/dp/B0CX23V2ZK).
   */
  url: string;
}

export interface AmazonProductItem {
  /**
   * Amazon Standard Identification Number. Populated whenever the provider has data for the entity.
   */
  asin: string;
  /**
   * Manufacturer or brand name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  brand?: string;
  /**
   * Category breadcrumb path, e.g. "Health & Household > Household Supplies".
   */
  category?: string;
  /**
   * Item condition, e.g. "New"; empty when not reported.
   */
  condition?: string;
  /**
   * Price currency symbol or code, e.g. "$".
   */
  currency?: string;
  /**
   * Product description text; empty when the listing has none.
   */
  description?: string;
  /**
   * Bullet-point feature list from the listing.
   */
  features?: string[];
  /**
   * Primary product image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * High-resolution product image URLs.
   */
  images?: string[];
  /**
   * True when the product is purchasable.
   */
  inStock?: boolean;
  /**
   * Current buy-box price as a numeric amount; 0 when the listing has no buyable price (out of stock).
   */
  price?: number;
  /**
   * Average customer star rating, 0-5; 0 when unrated.
   */
  rating?: number;
  /**
   * Total number of customer reviews; 0 when none.
   */
  reviewsCount?: number;
  /**
   * Name of the seller fulfilling the buy box.
   */
  sellerName?: string;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical product detail page URL (tracking query params stripped). Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Amazon Product (amazon.product).
 */
export interface AmazonProductData {
  /**
   * Product detail records (one per requested product URL). Populated whenever the provider has data for the entity.
   */
  items: AmazonProductItem[];
}

/**
 * Input for Amazon Reviews (amazon.reviews).
 */
export interface AmazonReviewsInput {
  /**
   * Only return reviews on or before this date, inclusive, in YYYY-MM-DD format (e.g. 2026-06-30).
   */
  endDate?: string;
  /**
   * Only return reviews whose text contains one of these keywords (e.g. ["battery", "screen"]).
   */
  keywords?: string[];
  /**
   * Maximum number of results to return (1-50, default 50). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 50.
   */
  limit?: number;
  /**
   * Amazon product ASIN or full product URL (e.g. B07CMS5Q6P).
   */
  product: string;
  /**
   * Only return reviews whose star rating is in this set (e.g. ["5", "4"] for 4 and 5 star reviews); omit for all ratings.
   */
  ratings?: ("1" | "2" | "3" | "4" | "5")[];
  /**
   * Amazon marketplace domain the product ASIN belongs to (e.g. amazon.co.uk).
   * One of: amazon.com, amazon.ca, amazon.de, amazon.fr, amazon.co.uk, amazon.it, amazon.es, amazon.com.au, amazon.co.jp, amazon.com.br, amazon.com.mx, amazon.nl, amazon.ie, amazon.se, amazon.com.tr, amazon.ae, amazon.sg, amazon.sa, amazon.pl, amazon.com.be, amazon.eg, amazon.in.
   * Default: amazon.com.
   */
  region?:
    | "amazon.com"
    | "amazon.ca"
    | "amazon.de"
    | "amazon.fr"
    | "amazon.co.uk"
    | "amazon.it"
    | "amazon.es"
    | "amazon.com.au"
    | "amazon.co.jp"
    | "amazon.com.br"
    | "amazon.com.mx"
    | "amazon.nl"
    | "amazon.ie"
    | "amazon.se"
    | "amazon.com.tr"
    | "amazon.ae"
    | "amazon.sg"
    | "amazon.sa"
    | "amazon.pl"
    | "amazon.com.be"
    | "amazon.eg"
    | "amazon.in";
  /**
   * Review sort order: most helpful first or most recent first (e.g. recent).
   * One of: helpful, recent.
   * Default: helpful.
   */
  sort?: "helpful" | "recent";
  /**
   * Only return reviews on or after this date, inclusive, in YYYY-MM-DD format (e.g. 2026-01-01).
   */
  startDate?: string;
  /**
   * Set true to return only verified-purchase reviews (e.g. true).
   * Default: false.
   */
  verifiedOnly?: boolean;
}

export interface AmazonReviewsItem {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. 0 when the review date is not reported in a parseable form.
   */
  createdUtc?: number;
  /**
   * Number of "helpful" votes the review received; 0 when none.
   */
  helpfulVotes?: number;
  /**
   * Star rating the reviewer gave, 1-5; 0 when not reported.
   */
  rating: number;
  /**
   * Reviewer display name; empty when withheld.
   */
  reviewer?: string;
  /**
   * Full review body text. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Review headline / title; empty when the review has none.
   */
  title?: string;
  /**
   * True when Amazon marks the review a verified purchase.
   */
  verifiedPurchase?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Amazon Reviews (amazon.reviews).
 */
export interface AmazonReviewsData {
  /**
   * Customer review records. Populated whenever the provider has data for the entity.
   */
  items: AmazonReviewsItem[];
}

/**
 * Input for Amazon Search (amazon.search).
 */
export interface AmazonSearchInput {
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Amazon search or category URL to pull results from (e.g. https://www.amazon.com/s?k=gaming+mouse).
   */
  url: string;
}

export interface AmazonSearchItem {
  /**
   * Amazon Standard Identification Number; use it with the Amazon Products by ASIN SKU for full detail. Populated whenever the provider has data for the entity.
   */
  asin: string;
  /**
   * Price currency symbol or code, e.g. "$".
   */
  currency?: string;
  /**
   * Primary product thumbnail image URL.
   */
  image?: string;
  /**
   * True when the result is a sponsored placement.
   */
  isSponsored?: boolean;
  /**
   * Pre-discount list price when on sale; 0 when not discounted.
   */
  listPrice?: number;
  /**
   * Number of available offers; 0 when unknown.
   */
  offersCount?: number;
  /**
   * 1-based position of the result on the search page.
   */
  position?: number;
  /**
   * Current price as a numeric amount; 0 when no offer is available.
   */
  price?: number;
  /**
   * Average star rating, 0-5; 0 when unrated.
   */
  rating?: number;
  /**
   * Number of customer reviews; 0 when none.
   */
  reviewsCount?: number;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Amazon Search (amazon.search).
 */
export interface AmazonSearchData {
  /**
   * Matching Amazon product records. Populated whenever the provider has data for the entity.
   */
  items: AmazonSearchItem[];
}

/**
 * Typed methods for the amazon platform. Attached to the AnyAPI client as
 * `client.amazon`.
 */
export class AmazonNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Amazon Products by ASIN
   *
   * Look up to 10 Amazon products in one call by ASIN - title, brand, price, ratings, images, and attributes - as normalized JSON.

**Price:** billed per asin - \$3.50 per 1,000 asins, capped at \$35.00 per 1,000 requests.
   *
   * Price: $0.0035 per asin.
   *
   * @example
   * const res = await client.amazon.asins({ asins: ["B09G9FPHY6"], limit: 3 });
   */
  asins(
    input: AmazonAsinsInput,
    options?: RequestOptions,
  ): Promise<RunResult<AmazonAsinsData>> {
    return this._core.run("amazon.asins", input, options);
  }

  /**
   * Amazon Bestsellers
   *
   * List the top-ranked products of any Amazon Best Sellers category - rank, title, price, and rating - in one normalized request.

**Price:** billed per result - \$4.10 per 1,000 results, capped at \$82.00 per 1,000 requests.
   *
   * Price: $0.0041 per result.
   *
   * @example
   * const res = await client.amazon.bestsellers({ url: "https://www.amazon.com/gp/bestsellers/electronics", limit: 3 });
   */
  bestsellers(
    input: AmazonBestsellersInput,
    options?: RequestOptions,
  ): Promise<RunResult<AmazonBestsellersData>> {
    return this._core.run("amazon.bestsellers", input, options);
  }

  /**
   * Amazon Product
   *
   * Fetch full Amazon product details (title, brand, price when in stock, images, ratings, review count, variants, and attributes) from a product URL.

**Price:** billed per result - \$1.00 per 1,000 requests base + \$8.10 per 1,000 results, capped at \$9.10 per 1,000 requests.
   *
   * Price: $0.001 per request plus $0.0081 per result.
   *
   * @example
   * const res = await client.amazon.product({ url: "https://www.amazon.com/dp/B00NTCH52W" });
   */
  product(
    input: AmazonProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<AmazonProductData>> {
    return this._core.run("amazon.product", input, options);
  }

  /**
   * Amazon Reviews
   *
   * Pull up to 50 customer reviews for any Amazon product by ASIN or URL - rating, title, text, date, and verified-purchase badge.

**Price:** \$16.25 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.01625 per request.
   *
   * @example
   * const res = await client.amazon.reviews({ product: "B07PXGQC1Q", limit: 3 });
   */
  reviews(
    input: AmazonReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<AmazonReviewsData>> {
    return this._core.run("amazon.reviews", input, options);
  }

  /**
   * Amazon Search
   *
   * Search Amazon from any search or category URL and get up to 20 matching products - title, price, rating, and thumbnail - in one normalized response.

**Price:** billed per result - \$3.50 per 1,000 results, capped at \$70.00 per 1,000 requests.
   *
   * Price: $0.0035 per result.
   *
   * @example
   * const res = await client.amazon.search({ url: "https://www.amazon.com/s?k=laptop", limit: 3 });
   */
  search(
    input: AmazonSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<AmazonSearchData>> {
    return this._core.run("amazon.search", input, options);
  }
}
