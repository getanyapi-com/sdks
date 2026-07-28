// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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
   * Only return reviews left on these app versions (e.g. ["2.24.1", "2.24.2"]).
   */
  appVersion?: string[];
  /**
   * Only return reviews from this device type (e.g. "tablet"); defaults to mobile.
   * One of: mobile, tablet, chromebook.
   * Default: mobile.
   */
  deviceType?: "mobile" | "tablet" | "chromebook";
  /**
   * Only return reviews on or before this date, inclusive, in YYYY-MM-DD format (e.g. 2026-06-30).
   */
  endDate?: string;
  /**
   * Only return reviews whose text contains one of these keywords (e.g. ["crash", "login"]).
   */
  keywords?: string[];
  /**
   * Only return reviews in these ISO 639-1 languages (e.g. ["en", "es"]).
   */
  languages?: string[];
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
   * Only return reviews from the last N days (e.g. 30); omit for no time limit.
   * Range: minimum 1.
   */
  recentDays?: number;
  /**
   * Review ordering: mostRelevant, newest, or rating (e.g. newest).
   * Default: mostRelevant.
   */
  sortBy?: string;
}

export type PlaystoreReviewsData = unknown;

/**
 * Typed methods for the playstore platform. Attached to the AnyAPI client as
 * `client.playstore`.
 */
export class PlaystoreNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Play Reviews
   *
   * Fetch Google Play reviews for any Android app by package name or store URL: ratings, review text, dates, and helpfulness votes.
   *
   * Price: $0 per request plus $0.00011 per result (maximum $0.011).
   *
   * @example
   * const res = await client.playstore.reviews({ appId: "com.whatsapp", limit: 3 });
   */
  reviews(
    input: PlaystoreReviewsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<PlaystoreReviewsData>> {
    return this._core.run(
      "playstore.reviews",
      input,
      options,
    ) as unknown as Promise<BareRunResult<PlaystoreReviewsData>>;
  }
}
