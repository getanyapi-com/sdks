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
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Fiverr search or category page URL to extract gigs from.
   */
  url: string;
}

export interface FiverrSearchItem {
  /**
   * Fiverr's numeric top-level category id for the gig, as a string.
   */
  categoryId?: string;
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
