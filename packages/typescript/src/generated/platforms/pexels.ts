// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Pexels Photo Search (pexels.search_photos).
 */
export interface PexelsSearchPhotosInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Only return photos at least this many pixels tall.
   * Range: minimum 1.
   */
  minHeight?: number;
  /**
   * Only return photos at least this many pixels wide.
   * Range: minimum 1.
   */
  minWidth?: number;
  /**
   * Only return photos with this orientation. Omit for any orientation.
   * One of: landscape, portrait, square.
   */
  orientation?: "landscape" | "portrait" | "square";
  /**
   * Only return photos showing this many people: "0" for none, "1" or "2". Omit for any number.
   * One of: 0, 1, 2.
   */
  peopleCount?: "0" | "1" | "2";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Keyword or phrase to search Pexels photos for, e.g. "coffee" or "city skyline".
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `tags`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a photo that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "tags"[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface PexelsSearchPhotosPhoto {
  /**
   * Alt text describing the photo. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  alt?: string;
  /**
   * Dominant color as a hex code, e.g. "#918c79".
   */
  color?: string;
  /**
   * Palette of the photo's main colors as hex codes.
   */
  colors?: string[];
  /**
   * When the photo was uploaded. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number | null;
  /**
   * Direct download URL for the full-quality file.
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
   * Display-size image URL, 1440 px wide. The query parameters set the size, so keep the URL intact. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  image: string;
  /**
   * Medium image URL, 750 px wide.
   * Format: uri.
   */
  imageMedium?: string;
  /**
   * Full-resolution original image URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  imageOriginal?: string;
  /**
   * License the photo is published under. "Pexels" means the Pexels License: free to use, attribution appreciated but not required. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  license?: string;
  /**
   * landscape, portrait, or square.
   */
  orientation?: string;
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
   * Photographer's Instagram username, when they list one on Pexels.
   */
  photographerInstagramUsername?: string;
  /**
   * Photographer's location as they state it on Pexels, when they list one.
   */
  photographerLocation?: string;
  /**
   * Photographer's Pexels profile page, for attribution. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  photographerUrl?: string;
  /**
   * Photographer's Pexels handle, without the leading @.
   */
  photographerUsername?: string;
  /**
   * When Pexels published the photo. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  publishedUtc?: number | null;
  /**
   * Pexels' tags for the photo. One source returns at most 25 tags; name tags in requireFields to be served the full list.
   */
  tags?: string[];
  /**
   * Thumbnail image URL, 130 px tall.
   * Format: uri.
   */
  thumbnail?: string;
  /**
   * Photo title set by the photographer.
   */
  title?: string;
  /**
   * The photo's page on pexels.com. Populated whenever the provider has data for the entity.
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
 * The `data` payload of Pexels Photo Search (pexels.search_photos).
 */
export interface PexelsSearchPhotosData {
  /**
   * Free Pexels photos matching the keyword, in Pexels' relevance order.
   */
  photos: PexelsSearchPhotosPhoto[];
}

/**
 * Typed methods for the pexels platform. Attached to the AnyAPI client as
 * `client.pexels`.
 */
export class PexelsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Pexels Photo Search
   *
   * Search Pexels for free stock photos by keyword. Returns image URLs in several sizes, dimensions, alt text, the photographer's name and profile, and the photo's Pexels page.
   *
   * Price: $0.00055 per request plus $0.0033 per result (maximum $0.0666).
   *
   * @example
   * const res = await client.pexels.searchPhotos({ query: "coffee", limit: 2 });
   */
  searchPhotos(
    input: PexelsSearchPhotosInput,
    options?: RequestOptions,
  ): Promise<RunResult<PexelsSearchPhotosData>> {
    return this._core.run("pexels.search_photos", input, options);
  }
}
