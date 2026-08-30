// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Fiverr Gig Search (fiverr.search).
 */
export interface FiverrSearchInput {
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Fiverr search or category page URL to extract gigs from.
   */
  url: string;
}

export interface FiverrSearchItem {
  /**
   * Delivery time in days.
   */
  duration?: number;
  /**
   * Stable Fiverr gig identifier. Populated whenever the provider has data for the entity.
   */
  gigId: string;
  /**
   * Canonical Fiverr URL for the gig. Populated whenever the provider has data for the entity.
   */
  gigUrl: string;
  /**
   * Primary gig thumbnail URL.
   */
  image?: string;
  /**
   * Starting price in USD.
   */
  price?: number;
  /**
   * Seller country code.
   */
  sellerCountry?: string;
  /**
   * Seller display name.
   */
  sellerDisplayName?: string;
  /**
   * Fiverr seller level.
   */
  sellerLevel?: string;
  /**
   * Seller username.
   */
  sellerName?: string;
  /**
   * Number of seller ratings.
   */
  sellerRatingCount?: number;
  /**
   * Average seller rating.
   */
  sellerRatingScore?: number;
  /**
   * Seller profile URL.
   */
  sellerUrl?: string;
  /**
   * Gig headline. Populated whenever the provider has data for the entity.
   */
  title: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Fiverr Gig Search (fiverr.search).
 */
export interface FiverrSearchData {
  /**
   * Gig records from the search or category URL. Operators may return additional fields beyond those documented here. Populated whenever the provider has data for the entity.
   */
  items: FiverrSearchItem[];
}

/**
 * Typed methods for the fiverr platform. Attached to the AnyAPI client as
 * `client.fiverr`.
 */
export class FiverrNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Fiverr Gig Search
   *
   * Extract Fiverr gig listings from any search or category URL: titles, sellers, ratings, and pricing as structured JSON.
   *
   * Price: $0 per request plus $0.00165 per result (maximum $0.033).
   *
   * @example
   * const res = await client.fiverr.search({ url: "https://www.fiverr.com/search/gigs?query=logo%20design", limit: 3 });
   */
  search(
    input: FiverrSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<FiverrSearchData>> {
    return this._core.run("fiverr.search", input, options);
  }
}
