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
   * Amazon Standard Identification Number.
   */
  asin: string;
  /**
   * Present whenever the upstream returns this record.
   */
  brand?: string;
  condition?: string;
  currency?: string;
  /**
   * Primary product image URL.
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
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Amazon Products by ASIN (amazon.asins).
 */
export interface AmazonAsinsData {
  /**
   * Product records: ASIN, title, brand, price, ratings, images, and attributes.
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
  asin: string;
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Amazon Bestsellers (amazon.bestsellers).
 */
export interface AmazonBestsellersData {
  /**
   * Best-seller product records: category rank, title, price, rating, thumbnail, and product URL.
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
  asin: string;
  /**
   * Manufacturer or brand name.
   * Present whenever the upstream returns this record.
   */
  brand?: string;
  /**
   * High-resolution product image URLs.
   * Present whenever the upstream returns this record.
   */
  images?: string[];
  /**
   * Current price as a numeric amount. Absent when the listing has no buyable price (out of stock).
   */
  priceAmount?: number;
  /**
   * Average customer star rating, 0 to 5.
   */
  rating?: number;
  /**
   * Total number of customer reviews.
   */
  reviewCount?: number;
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Amazon Product (amazon.product).
 */
export interface AmazonProductData {
  /**
   * Product detail records: title, url, asin, brand, price amount (when in stock), images, rating, review count, and (passed through) variant details and attributes.
   */
  items: AmazonProductItem[];
}

/**
 * Input for Amazon Reviews (amazon.reviews).
 */
export interface AmazonReviewsInput {
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
}

export interface AmazonReviewsItem {
  rating: number;
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Amazon Reviews (amazon.reviews).
 */
export interface AmazonReviewsData {
  /**
   * Customer review records: star rating, title, review text, date, reviewer, and verified-purchase status.
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
  asin: string;
  /**
   * Currency symbol or code for the price.
   */
  currency?: string;
  /**
   * Current price as a numeric amount.
   */
  priceAmount?: number;
  /**
   * Average star rating.
   */
  rating?: number;
  /**
   * Number of customer reviews.
   */
  reviewCount?: number;
  /**
   * Product thumbnail image URL.
   * Present whenever the upstream returns this record.
   */
  thumbnail?: string;
  title: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Amazon Search (amazon.search).
 */
export interface AmazonSearchData {
  /**
   * Search result product records: title, ASIN, price amount, currency, rating, review count, and thumbnail.
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
   * Look up to 10 Amazon products in one call by ASIN - title, brand, price, ratings, images, and attributes - as normalized JSON with flat per-request USD pricing.
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
   * List the top-ranked products of any Amazon Best Sellers category - rank, title, price, and rating - in one normalized, flat-priced request.
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
   * Fetch full Amazon product details (title, brand, price when in stock, images, ratings, review count, variants, and attributes) from a product URL, with transparent per-request USD pricing.
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
   * Pull up to 50 customer reviews for any Amazon product by ASIN or URL - rating, title, text, date, and verified-purchase badge - at a flat per-request USD price.
   *
   * Price: $0.01625 per request.
   *
   * @example
   * const res = await client.amazon.reviews({ product: "B07FZ8S74R", limit: 3 });
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
   * Search Amazon from any search or category URL and get up to 20 matching products - title, price, rating, and thumbnail - in one normalized, flat-priced response.
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
