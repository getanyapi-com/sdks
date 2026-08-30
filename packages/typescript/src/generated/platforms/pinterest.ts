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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   *
   * Price: $0.0036 per request.
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
