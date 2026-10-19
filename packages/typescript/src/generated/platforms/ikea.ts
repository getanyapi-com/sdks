// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for IKEA Search (ikea.search).
 */
export interface IkeaSearchInput {
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
   * 1-based results page of 24 products. Each page is billed as one request.
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
   * Search keywords, e.g. "bookshelf" or "desk".
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `memberOffer`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "memberOffer"[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface IkeaSearchItem {
  /**
   * Price currency code, e.g. "USD", or null when no price is shown.
   */
  currency?: string | null;
  /**
   * Product dimensions as IKEA lists them, e.g. "31 1/2x11x79 1/2" (inches on the US store), or null when not listed.
   */
  dimensions?: string | null;
  /**
   * Primary product image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * IKEA Family member offer shown on the product, e.g. "In-store only price $65.00", or null when there is none or the serving source does not report it.
   */
  memberOffer?: string | null;
  /**
   * 1-based position of the result in this page.
   */
  position?: number | null;
  /**
   * Current online price in USD, or null when the result shows no price. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * IKEA product id: the 8-digit article number, or an s-prefixed id for a combination. Populated whenever the provider has data for the entity.
   */
  productId: string;
  /**
   * Average customer rating, 0-5, or null when the product is unrated.
   */
  rating?: number | null;
  /**
   * Number of customer ratings, or null when the product has none.
   */
  reviewsCount?: number | null;
  /**
   * Product name and type as IKEA lists it, e.g. "BILLY Bookcase white". Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * IKEA product page URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of IKEA Search (ikea.search).
 */
export interface IkeaSearchData {
  /**
   * Matching IKEA US product records for the requested page. Populated whenever the provider has data for the entity.
   */
  items: IkeaSearchItem[];
  /**
   * Total number of matching products IKEA reports for the query, or null when not reported.
   */
  totalResults?: number | null;
}

/**
 * Typed methods for the ikea platform. Attached to the AnyAPI client as
 * `client.ikea`.
 */
export class IkeaNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * IKEA Search
   *
   * Search IKEA's US store by keyword and get title, price, rating, and image for each product in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.ikea.search({ query: "bookshelf" });
   */
  search(
    input: IkeaSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<IkeaSearchData>> {
    return this._core.run("ikea.search", input, options);
  }
}
