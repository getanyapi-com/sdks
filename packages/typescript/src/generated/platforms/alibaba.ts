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
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Keywords to search for on Alibaba (e.g. "bluetooth speaker wholesale").
   */
  query: string;
}

export interface AlibabaSearchItem {
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Alibaba Search (alibaba.search).
 */
export interface AlibabaSearchData {
  /**
   * Matching Alibaba wholesale listings: title, price range, minimum order quantity, supplier name, and listing URL.
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
   * Search Alibaba by keyword and get up to 25 wholesale listings - title, price range, minimum order, and supplier - in one normalized, flat-priced response.
   *
   * Price: $0.0012 per result.
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
