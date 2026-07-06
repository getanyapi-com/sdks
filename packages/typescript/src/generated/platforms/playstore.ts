// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Google Play Reviews (playstore.reviews).
 */
export interface PlaystoreReviewsInput {
  /**
   * Android app package name or full Google Play store URL (e.g. com.supercell.brawlstars).
   */
  appId: string;
  /**
   * Maximum number of results to return (1-100, default 100). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 100.
   */
  limit?: number;
  /**
   * Only return reviews with this exact star rating from 1 to 5 (e.g. 1); omit for all ratings.
   */
  rating?: number;
  /**
   * Review ordering: mostRelevant, newest, or rating (e.g. newest).
   * Default: mostRelevant.
   */
  sortBy?: string;
}

export interface PlaystoreReviewsItem {
  rating: number;
  /**
   * Populated whenever the provider returns data.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Play Reviews (playstore.reviews).
 */
export interface PlaystoreReviewsData {
  /**
   * Review records: star rating, review text, reviewer name, app version, helpfulness votes, and review date.
   * Populated whenever the provider returns data.
   */
  items: PlaystoreReviewsItem[];
}

/**
 * Typed methods for the playstore platform. Attached to the AnyAPI client as
 * `client.playstore`.
 */
export class PlaystoreNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Play Reviews
   *
   * Fetch Google Play reviews for any Android app by package name or store URL - ratings, review text, dates, and helpfulness votes, billed per request in USD.
   *
   * Price: $0 per request plus $0.00011 per result.
   *
   * @example
   * const res = await client.playstore.reviews({"appId":"com.whatsapp","limit":3});
   */
  reviews(
    input: PlaystoreReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<PlaystoreReviewsData>> {
    return this._core.run("playstore.reviews", input, options);
  }
}
