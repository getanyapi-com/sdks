// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Sam's Club Product (samsclub.product).
 */
export interface SamsclubProductInput {
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
   * Sam's Club product page URL, e.g. https://www.samsclub.com/ip/Bounty-Select-A-Size-2-Ply-Paper-Towels-12-Rolls-110-sheets-roll/18040450426. Prices and stock are those of Sam's Club's default club.
   */
  url: string;
}

export interface SamsclubProductItem {
  /**
   * Stock status as Sam's Club reports it, e.g. "IN_STOCK", or null when not reported.
   */
  availability?: string | null;
  /**
   * Brand name, or null when not reported.
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
   * Sam's Club item id. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  itemId?: string;
  /**
   * Price before Instant Savings, or null when the product is not discounted.
   */
  listPrice?: number | null;
  /**
   * Manufacturer model number, or null when not reported.
   */
  model?: string | null;
  /**
   * Current member price in USD, or null when no price is shown. Populated whenever the provider has data for the entity.
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
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Universal Product Code, or null when not reported.
   */
  upc?: string | null;
  /**
   * Sam's Club product page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Sam's Club Product (samsclub.product).
 */
export interface SamsclubProductData {
  /**
   * Product detail records (one per requested product URL). Populated whenever the provider has data for the entity.
   */
  items: SamsclubProductItem[];
}

/**
 * Input for Sam's Club Search (samsclub.search).
 */
export interface SamsclubSearchInput {
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
   * Optional maximum member price in USD.
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Optional minimum member price in USD.
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * 1-based results page of about 40 to 50 products. Each page is billed as one request.
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
   * Search keywords, e.g. "paper towels" or "tv".
   */
  query: string;
  /**
   * Result sort order; omit for Sam's Club's Best Match (e.g. price_low sorts by lowest price first).
   * One of: best_match, price_low, price_high.
   */
  sort?: "best_match" | "price_low" | "price_high";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface SamsclubSearchItem {
  /**
   * Stock status as Sam's Club reports it, e.g. "IN_STOCK", or null when not reported.
   */
  availability?: string | null;
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
   * Sam's Club item id, the number at the end of a samsclub.com/ip/ URL; use the product URL with the Sam's Club Product SKU. Populated whenever the provider has data for the entity.
   */
  itemId: string;
  /**
   * Price before Instant Savings, or null when the product is not discounted.
   */
  listPrice?: number | null;
  /**
   * 1-based organic position of the result in this page.
   */
  position?: number | null;
  /**
   * Current member price in USD, or null when the result shows no price. Populated whenever the provider has data for the entity.
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
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Sam's Club product page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Sam's Club Search (samsclub.search).
 */
export interface SamsclubSearchData {
  /**
   * Matching Sam's Club product records for the requested page, sponsored tiles left out. Prices are those of Sam's Club's default club. Populated whenever the provider has data for the entity.
   */
  items: SamsclubSearchItem[];
  /**
   * Number of organic products Sam's Club returns for the query (sponsored tiles are left out), or null when not reported.
   */
  totalResults?: number | null;
}

/**
 * Typed methods for the samsclub platform. Attached to the AnyAPI client as
 * `client.samsclub`.
 */
export class SamsclubNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Sam's Club Product
   *
   * Fetch a SamsClub.com product by URL and get title, member price, stock, brand, model, UPC, rating, description, and images in one normalized response.
   *
   * Price: $0.00319 per request.
   *
   * @example
   * const res = await client.samsclub.product({ url: "https://www.samsclub.com/ip/Bounty-Select-A-Size-2-Ply-Paper-Towels-12-Rolls-110-sheets-roll/18040450426" });
   */
  product(
    input: SamsclubProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<SamsclubProductData>> {
    return this._core.run("samsclub.product", input, options);
  }

  /**
   * Sam's Club Search
   *
   * Search SamsClub.com by keyword with optional sort, price-range, and page filters and get title, member price, stock, and rating for each product in one normalized response.
   *
   * Price: $0.00319 per request.
   *
   * @example
   * const res = await client.samsclub.search({ query: "paper towels" });
   */
  search(
    input: SamsclubSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<SamsclubSearchData>> {
    return this._core.run("samsclub.search", input, options);
  }
}
