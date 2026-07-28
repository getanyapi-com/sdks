// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type AmazonAsinsData = unknown;

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

export type AmazonBestsellersData = unknown;

/**
 * Input for Amazon Product (amazon.product).
 */
export interface AmazonProductInput {
  /**
   * Full Amazon product URL (e.g. https://www.amazon.com/dp/B0CX23V2ZK).
   */
  url: string;
}

export type AmazonProductData = unknown;

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

export type AmazonReviewsData = unknown;

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

export type AmazonSearchData = unknown;

/**
 * Typed methods for the amazon platform. Attached to the AnyAPI client as
 * `client.amazon`.
 */
export class AmazonNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Amazon Products by ASIN
   *
   * Look up to 10 Amazon products in one call by ASIN (title, brand, price, ratings, images, and attributes) as normalized JSON.
   *
   * Price: $0 per request plus $0.0035 per asin (maximum $0.035).
   *
   * @example
   * const res = await client.amazon.asins({ asins: ["B09G9FPHY6"], limit: 3 });
   */
  asins(
    input: AmazonAsinsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<AmazonAsinsData>> {
    return this._core.run("amazon.asins", input, options) as unknown as Promise<
      BareRunResult<AmazonAsinsData>
    >;
  }

  /**
   * Amazon Bestsellers
   *
   * List the top-ranked products of any Amazon Best Sellers category (rank, title, price, and rating) in one normalized request.
   *
   * Price: $0 per request plus $0.0041 per result (maximum $0.082).
   *
   * @example
   * const res = await client.amazon.bestsellers({ url: "https://www.amazon.com/gp/bestsellers/electronics", limit: 3 });
   */
  bestsellers(
    input: AmazonBestsellersInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<AmazonBestsellersData>> {
    return this._core.run(
      "amazon.bestsellers",
      input,
      options,
    ) as unknown as Promise<BareRunResult<AmazonBestsellersData>>;
  }

  /**
   * Amazon Product
   *
   * Fetch full Amazon product details (title, brand, price when in stock, images, ratings, review count, variants, and attributes) from a product URL.
   *
   * Price: $0.001 per request plus $0.0081 per result (maximum $0.0091).
   *
   * @example
   * const res = await client.amazon.product({ url: "https://www.amazon.com/dp/B00NTCH52W" });
   */
  product(
    input: AmazonProductInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<AmazonProductData>> {
    return this._core.run(
      "amazon.product",
      input,
      options,
    ) as unknown as Promise<BareRunResult<AmazonProductData>>;
  }

  /**
   * Amazon Reviews
   *
   * Pull up to 50 customer reviews for any Amazon product by ASIN or URL: rating, title, text, date, and verified-purchase badge.
   *
   * Price: $0.01625 per request.
   *
   * @example
   * const res = await client.amazon.reviews({ product: "B07PXGQC1Q", limit: 3 });
   */
  reviews(
    input: AmazonReviewsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<AmazonReviewsData>> {
    return this._core.run(
      "amazon.reviews",
      input,
      options,
    ) as unknown as Promise<BareRunResult<AmazonReviewsData>>;
  }

  /**
   * Amazon Search
   *
   * Search Amazon from any search or category URL and get up to 20 matching products (title, price, rating, and thumbnail) in one normalized response.
   *
   * Price: $0 per request plus $0.0035 per result (maximum $0.07).
   *
   * @example
   * const res = await client.amazon.search({ url: "https://www.amazon.com/s?k=laptop", limit: 3 });
   */
  search(
    input: AmazonSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<AmazonSearchData>> {
    return this._core.run(
      "amazon.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<AmazonSearchData>>;
  }
}
