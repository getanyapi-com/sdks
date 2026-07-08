// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Pinterest Search (pinterest.search).
 */
export interface PinterestSearchInput {
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Keyword, topic, brand, or theme to search Pinterest for (e.g. mid-century living room).
   */
  query: string;
  /**
   * Kind of results to return: all pins, only video pins, boards, or profiles (e.g. videos).
   * One of: all-pins, videos, boards, profiles.
   * Default: all-pins.
   */
  type?: "all-pins" | "videos" | "boards" | "profiles";
}

export interface PinterestSearchItem {
  id: string;
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Pinterest Search (pinterest.search).
 */
export interface PinterestSearchData {
  /**
   * Matching Pinterest records: pin or board title, description, image/video URL, creator, and link. Populated whenever the provider has data for the entity.
   */
  items: PinterestSearchItem[];
}

/**
 * Typed methods for the pinterest platform. Attached to the AnyAPI client as
 * `client.pinterest`.
 */
export class PinterestNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Pinterest Search
   *
   * Search Pinterest by keyword and get pin, video, board, or profile results with titles, images, and links.

**Price:** $3.25 per 1,000 requests (flat per request - same cost regardless of results returned).
   *
   * Price: $0.00325 per request.
   *
   * @example
   * const res = await client.pinterest.search({ query: "home decor", limit: 3 });
   */
  search(
    input: PinterestSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<PinterestSearchData>> {
    return this._core.run("pinterest.search", input, options);
  }
}
