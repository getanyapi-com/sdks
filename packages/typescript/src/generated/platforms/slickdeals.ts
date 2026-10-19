// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Slickdeals Deal (slickdeals.deal).
 */
export interface SlickdealsDealInput {
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
   * Slickdeals deal page URL, e.g. https://slickdeals.net/f/20177112-lg-55-c6-series-oled-evo-ai-4k-smart-webos-tv-2026-best-buy-amazon-999-99.
   */
  url: string;
}

export interface SlickdealsDealItem {
  /**
   * Brand Slickdeals files the deal under, or null when none.
   */
  brand?: string | null;
  /**
   * Slickdeals category, e.g. "4K TVs", or null when none.
   */
  category?: string | null;
  /**
   * Number of comments on the deal, or null when not reported.
   */
  commentsCount?: number | null;
  /**
   * Coupon code the deal needs, or null when it needs none.
   */
  couponCode?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the deal was posted; null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number | null;
  /**
   * Price currency code, e.g. "USD", or null when no price is posted.
   */
  currency?: string | null;
  /**
   * Slickdeals deal id. Populated whenever the provider has data for the entity.
   */
  dealId: string;
  /**
   * Deal description as posted, or null when it has none.
   */
  description?: string | null;
  /**
   * Primary deal image URL.
   */
  image?: string;
  /**
   * Deal image URLs.
   */
  images?: string[];
  /**
   * True when the community marked the deal expired, or null when not reported.
   */
  isExpired?: boolean | null;
  /**
   * List price the deal compares against, or null when not posted.
   */
  listPrice?: number | null;
  /**
   * Deal price in USD, or null when the deal has no numeric price.
   */
  price?: number | null;
  /**
   * Net community thumbs score, or null when not reported.
   */
  score?: number | null;
  /**
   * Store selling the deal, e.g. "Best Buy", or null when not posted.
   */
  store?: string | null;
  /**
   * Deal title as posted. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Slickdeals deal page URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Number of views of the deal, or null when not reported.
   */
  viewsCount?: number | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Slickdeals Deal (slickdeals.deal).
 */
export interface SlickdealsDealData {
  /**
   * Deal detail records (one per requested deal URL). Populated whenever the provider has data for the entity.
   */
  items: SlickdealsDealItem[];
}

/**
 * Input for Slickdeals Search (slickdeals.search).
 */
export interface SlickdealsSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional; true leaves out deals the community marked expired.
   */
  hideExpired?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional maximum deal price in USD; deals without a numeric price are left out.
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Optional; keep only deals at least this many percent off the list price, e.g. 50.
   * Range: minimum 1, maximum 99.
   */
  minDiscount?: number;
  /**
   * Optional minimum deal price in USD; deals without a numeric price are left out.
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * 1-based page of 40 deals; Slickdeals stops at page 25. Each page is billed as one request.
   * Range: minimum 1, maximum 25.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keywords, e.g. "airpods" or "laptop".
   */
  query: string;
  /**
   * Result order; omit for Slickdeals' relevance order (e.g. new for the most recently posted deals first).
   * One of: best_match, new, popular, price_low, price_high.
   */
  sort?: "best_match" | "new" | "popular" | "price_low" | "price_high";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface SlickdealsSearchItem {
  /**
   * Number of comments on the deal, or null when not reported.
   */
  commentsCount?: number | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the deal was posted; null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number | null;
  /**
   * Price currency code, e.g. "USD", or null when no price is posted.
   */
  currency?: string | null;
  /**
   * Slickdeals deal id; use the deal URL with the Slickdeals Deal SKU. Populated whenever the provider has data for the entity.
   */
  dealId: string;
  /**
   * Deal thumbnail image URL.
   */
  image?: string;
  /**
   * True when the community marked the deal expired, or null when not reported.
   */
  isExpired?: boolean | null;
  /**
   * List price the deal compares against, or null when not posted.
   */
  listPrice?: number | null;
  /**
   * Deal price in USD, or null when the deal has no numeric price.
   */
  price?: number | null;
  /**
   * Net community thumbs score, or null when not reported.
   */
  score?: number | null;
  /**
   * Store selling the deal, e.g. "Amazon", or null when not posted.
   */
  store?: string | null;
  /**
   * Deal title as posted. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Slickdeals deal page URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  /**
   * Number of views of the deal, or null when not reported.
   */
  viewsCount?: number | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Slickdeals Search (slickdeals.search).
 */
export interface SlickdealsSearchData {
  /**
   * Matching Slickdeals deal records for the requested page. Populated whenever the provider has data for the entity.
   */
  items: SlickdealsSearchItem[];
  /**
   * Total number of matching deals Slickdeals reports (it stops counting at 1000), or null when not reported.
   */
  totalResults?: number | null;
}

/**
 * Typed methods for the slickdeals platform. Attached to the AnyAPI client as
 * `client.slickdeals`.
 */
export class SlickdealsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Slickdeals Deal
   *
   * Fetch one Slickdeals deal by URL and get title, price, list price, store, coupon code, score, views, comments, and description in one normalized response.
   *
   * Price: $0.00213 per request.
   *
   * @example
   * const res = await client.slickdeals.deal({ url: "https://slickdeals.net/f/20177112-lg-55-c6-series-oled-evo-ai-4k-smart-webos-tv-2026-best-buy-amazon-999-99" });
   */
  deal(
    input: SlickdealsDealInput,
    options?: RequestOptions,
  ): Promise<RunResult<SlickdealsDealData>> {
    return this._core.run("slickdeals.deal", input, options);
  }

  /**
   * Slickdeals Search
   *
   * Search Slickdeals deals by keyword with optional sort, price, discount, and page filters and get title, price, list price, store, score, and comment count for each deal in one normalized response.
   *
   * Price: $0.00213 per request.
   *
   * @example
   * const res = await client.slickdeals.search({ query: "airpods" });
   */
  search(
    input: SlickdealsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<SlickdealsSearchData>> {
    return this._core.run("slickdeals.search", input, options);
  }
}
