// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type FiverrSearchData = unknown;

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
   * Price: $0 per request plus $0.0015 per result (maximum $0.03).
   *
   * @example
   * const res = await client.fiverr.search({ url: "https://www.fiverr.com/search/gigs?query=logo%20design", limit: 3 });
   */
  search(
    input: FiverrSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FiverrSearchData>> {
    return this._core.run(
      "fiverr.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FiverrSearchData>>;
  }
}
