// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Redfin Search (redfin.search).
 */
export interface RedfinSearchInput {
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Redfin search results URL for a city, ZIP or map area (e.g. https://www.redfin.com/city/30772/CA/San-Francisco).
   */
  url: string;
}

export type RedfinSearchData = unknown;

/**
 * Typed methods for the redfin platform. Attached to the AnyAPI client as
 * `client.redfin`.
 */
export class RedfinNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Redfin Search
   *
   * Run a Redfin map search by URL and get matching home listings (price, address, beds, baths, status) as normalized JSON.
   *
   * Price: $0.0027 per request plus $0.00043 per result (maximum $0.01345).
   *
   * @example
   * const res = await client.redfin.search({ url: "https://www.redfin.com/city/30818/TX/Austin", limit: 3 });
   */
  search(
    input: RedfinSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<RedfinSearchData>> {
    return this._core.run(
      "redfin.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<RedfinSearchData>>;
  }
}
