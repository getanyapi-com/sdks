// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Alibaba Search (alibaba.search).
 */
export interface AlibabaSearchInput {
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
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Keywords to search for on Alibaba (e.g. "bluetooth speaker wholesale").
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface AlibabaSearchItem {
  /**
   * Supplier country ISO code, e.g. "CN".
   */
  countryCode?: string;
  /**
   * Primary product image URL.
   */
  image?: string;
  /**
   * Minimum order quantity text, e.g. "Min. order: 1 piece".
   */
  moq?: string;
  /**
   * Price or price range as displayed, e.g. "$40.80-45.80" (Alibaba lists ranges, not a single numeric value).
   */
  priceText?: string;
  /**
   * Discounted promotional price when the listing is on sale; empty otherwise.
   */
  promotionPrice?: string;
  /**
   * Average buyer review score, 0-5; 0 when the listing has no reviews.
   */
  rating?: number;
  /**
   * Number of buyer reviews; 0 when none.
   */
  reviewCount?: number;
  /**
   * Supplier / company name.
   */
  supplierName?: string;
  /**
   * Gold Supplier tenure text, e.g. "3 yrs"; empty when not a Gold Supplier.
   */
  supplierYears?: string;
  /**
   * Listing title as shown on Alibaba (may contain the supplier's inline markup). Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical product detail page URL (tracking query params stripped). Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Alibaba Search (alibaba.search).
 */
export interface AlibabaSearchData {
  /**
   * Matching Alibaba wholesale listings. Populated whenever the provider has data for the entity.
   */
  items: AlibabaSearchItem[];
}

/**
 * Typed methods for the alibaba platform. Attached to the AnyAPI client as
 * `client.alibaba`.
 */
export class AlibabaNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Alibaba Search
   *
   * Search Alibaba by keyword and get up to 25 wholesale listings (title, price range, minimum order, and supplier) in one normalized response.
   *
   * Price: $0 per request plus $0.00088 per result (maximum $0.022).
   *
   * @example
   * const res = await client.alibaba.search({ query: "bluetooth speaker", limit: 3 });
   */
  search(
    input: AlibabaSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<AlibabaSearchData>> {
    return this._core.run("alibaba.search", input, options);
  }
}
