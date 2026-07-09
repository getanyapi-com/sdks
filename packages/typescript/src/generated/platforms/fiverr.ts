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
   * Extract Fiverr gig listings from any search or category URL - titles, sellers, ratings, and pricing as structured JSON.

**Price:** billed per result - \$1.50 per 1,000 results, capped at \$30.00 per 1,000 requests.
   *
   * Price: $0.0015 per result.
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
