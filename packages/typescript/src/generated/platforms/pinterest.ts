// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Pinterest Search (pinterest.search).
 */
export interface PinterestSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page.
   */
  cursor?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Page size to ask for (1-20). Some sources return their whole page of about 20 pins whatever limit says: a page is never trimmed after the call, so nextCursor continues exactly where this response ended.
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `description` or `videoUrl`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be null on a pin that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: ("description" | "videoUrl")[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Kind of results to return: all pins, only video pins, boards, or profiles (e.g. videos).
   * One of: all-pins, videos, boards, profiles.
   * Default: all-pins.
   */
  type?: "all-pins" | "videos" | "boards" | "profiles";
}

export interface PinterestSearchItem {
  /**
   * Username (handle) of the account that saved the pin.
   */
  author?: string;
  /**
   * Display name of the account that saved the pin.
   */
  authorName?: string;
  /**
   * The pin's full description text, or null when the source does not provide it.
   */
  description?: string | null;
  id: string;
  /**
   * URL of the pin's full-size image; for a video pin, its cover image.
   */
  image?: string;
  /**
   * Pin title, or the pin's description when the pin has no title.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Streaming (HLS) URL of the pin's video, or null when the pin is not a video or the source does not provide it.
   */
  videoUrl?: string | null;
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
  /**
   * Opaque cursor for the next page of results, or null/empty when there are no more. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
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
   * Price: $0.0008 per request.
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

  /**
   * Iterate every result of Pinterest Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearch(
    input: PinterestSearchInput,
    options?: RequestOptions,
  ): Paginator<PinterestSearchItem, RunResult<PinterestSearchData>> {
    return paginate<PinterestSearchItem, RunResult<PinterestSearchData>>(
      this._core,
      "pinterest.search",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }
}
