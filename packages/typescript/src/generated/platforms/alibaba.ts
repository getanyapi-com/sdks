// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Alibaba Search (alibaba.search).
 */
export interface AlibabaSearchInput {
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Keywords to search for on Alibaba (e.g. "bluetooth speaker wholesale").
   */
  query: string;
}

export type AlibabaSearchData = unknown;

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
   * Price: $0 per request plus $0.0012 per result (maximum $0.03).
   *
   * @example
   * const res = await client.alibaba.search({ query: "bluetooth speaker", limit: 3 });
   */
  search(
    input: AlibabaSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<AlibabaSearchData>> {
    return this._core.run(
      "alibaba.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<AlibabaSearchData>>;
  }
}
