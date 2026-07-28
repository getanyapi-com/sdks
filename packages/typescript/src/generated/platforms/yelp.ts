// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Yelp Search (yelp.search).
 */
export interface YelpSearchInput {
  /**
   * Maximum number of results to return (1 to 20, default 20).
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * City and state defining the search area (e.g. San Francisco, CA).
   */
  location: string;
  /**
   * Search term or category to look for (e.g. sushi).
   */
  query: string;
}

export type YelpSearchData = unknown;

/**
 * Typed methods for the yelp platform. Attached to the AnyAPI client as
 * `client.yelp`.
 */
export class YelpNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Yelp Search
   *
   * Search Yelp for businesses by keyword and location: up to 20 listings with ratings, categories, and core business info per request.
   *
   * Price: $0.04 per request plus $0.00075 per result (maximum $0.055).
   *
   * @example
   * const res = await client.yelp.search({ location: "Chicago, IL", query: "pizza", limit: 5 });
   */
  search(
    input: YelpSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<YelpSearchData>> {
    return this._core.run("yelp.search", input, options) as unknown as Promise<
      BareRunResult<YelpSearchData>
    >;
  }
}
