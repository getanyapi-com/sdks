// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Unsplash Photo Search (unsplash.search_photos).
 */
export interface UnsplashSearchPhotosInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Only return photos with this dominant color tone. Omit for any color.
   * One of: black_and_white, black, white, yellow, orange, red, purple, magenta, green, teal, blue.
   */
  color?:
    | "black_and_white"
    | "black"
    | "white"
    | "yellow"
    | "orange"
    | "red"
    | "purple"
    | "magenta"
    | "green"
    | "teal"
    | "blue";
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of photos to return (1-20, default 20). You are billed per photo returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Only return photos with this orientation. Omit for any orientation.
   * One of: landscape, portrait, square.
   */
  orientation?: "landscape" | "portrait" | "square";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Keyword or phrase to search Unsplash photos for, e.g. "coffee" or "minimal workspace".
   */
  query: string;
  /**
   * Order results by best match (relevant, the default) or newest first (recent).
   * One of: relevant, recent.
   * Default: relevant.
   */
  sortBy?: "relevant" | "recent";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface UnsplashSearchPhotosPhoto {
  /**
   * Alt text describing the photo. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  alt?: string;
  /**
   * BlurHash string for rendering a blurred placeholder while the image loads.
   */
  blurHash?: string;
  /**
   * Dominant color as a hex code, e.g. "#918c79".
   */
  color?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number | null;
  /**
   * Photographer's own description. Absent when they wrote none.
   */
  description?: string;
  /**
   * Unsplash download link for the photo.
   * Format: uri.
   */
  downloadUrl?: string;
  /**
   * Original height in pixels. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  height?: number;
  /**
   * Photo id on the source site. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Display-size image URL, 1080 px wide. The query parameters set the size, so keep the URL intact. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  image: string;
  /**
   * Full-resolution JPEG URL.
   * Format: uri.
   */
  imageFull?: string;
  /**
   * Original image URL at full resolution, unprocessed. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  imageOriginal?: string;
  /**
   * Small image URL, 400 px wide.
   * Format: uri.
   */
  imageSmall?: string;
  /**
   * Number of likes on Unsplash.
   */
  likes?: number | null;
  /**
   * Photographer's display name, for attribution. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  photographer?: string;
  /**
   * Photographer's profile picture URL.
   * Format: uri.
   */
  photographerAvatarUrl?: string;
  /**
   * Photographer's Unsplash bio, when they wrote one.
   */
  photographerBio?: string;
  /**
   * True when the photographer marks themselves available for hire on Unsplash.
   */
  photographerForHire?: boolean | null;
  /**
   * Photographer's Instagram username, when they list one on Unsplash.
   */
  photographerInstagramUsername?: string;
  /**
   * Photographer's location as they state it on Unsplash, when they list one.
   */
  photographerLocation?: string;
  /**
   * Number of photos the photographer has liked on Unsplash.
   */
  photographerTotalLikes?: number | null;
  /**
   * Number of photos the photographer has published on Unsplash.
   */
  photographerTotalPhotos?: number | null;
  /**
   * Photographer's X (Twitter) username, when they list one on Unsplash.
   */
  photographerTwitterUsername?: string;
  /**
   * Photographer's Unsplash profile page, for attribution. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  photographerUrl?: string;
  /**
   * Photographer's Unsplash username, without the leading @.
   */
  photographerUsername?: string;
  /**
   * Photographer's portfolio or personal website, when they list one.
   * Format: uri.
   */
  photographerWebsite?: string;
  /**
   * True when Unsplash placed this photo in the results as a sponsored listing.
   */
  sponsored?: boolean | null;
  /**
   * Thumbnail image URL, 200 px wide.
   * Format: uri.
   */
  thumbnail?: string;
  /**
   * When the photo's record last changed on Unsplash. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number | null;
  /**
   * The photo's page on unsplash.com. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * Original width in pixels. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Unsplash Photo Search (unsplash.search_photos).
 */
export interface UnsplashSearchPhotosData {
  /**
   * Free Unsplash photos matching the keyword. Unsplash+ premium photos are excluded, so every photo is under the Unsplash License. Unsplash places sponsored photos among the results, flagged by sponsored.
   */
  photos: UnsplashSearchPhotosPhoto[];
}

/**
 * Typed methods for the unsplash platform. Attached to the AnyAPI client as
 * `client.unsplash`.
 */
export class UnsplashNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Unsplash Photo Search
   *
   * Search Unsplash for free stock photos by keyword. Returns image URLs in several sizes, dimensions, alt text, the photographer's name and profile, and the photo's Unsplash page.
   *
   * Price: $0.00055 per request plus $0.00165 per result (maximum $0.0336).
   *
   * @example
   * const res = await client.unsplash.searchPhotos({ query: "coffee", limit: 2 });
   */
  searchPhotos(
    input: UnsplashSearchPhotosInput,
    options?: RequestOptions,
  ): Promise<RunResult<UnsplashSearchPhotosData>> {
    return this._core.run("unsplash.search_photos", input, options);
  }
}
