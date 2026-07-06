// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for App Store Reviews (appstore.reviews).
 */
export interface AppstoreReviewsInput {
  /**
   * Numeric App Store app ID, the digits at the end of the app's store URL without the 'id' prefix (e.g. 310633997).
   */
  appId: string;
  /**
   * Two-letter App Store storefront country code to read reviews from.
   * Default: us.
   */
  country?: string;
  /**
   * Maximum number of results to return (1-100, default 100). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 100.
   */
  limit?: number;
}

export interface AppstoreReviewsItem {
  rating: number;
  /**
   * Populated whenever the provider returns data.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of App Store Reviews (appstore.reviews).
 */
export interface AppstoreReviewsData {
  /**
   * Review records: star rating, review title and text, reviewer nickname, app version, and review date.
   * Populated whenever the provider returns data.
   */
  items: AppstoreReviewsItem[];
}

/**
 * Typed methods for the appstore platform. Attached to the AnyAPI client as
 * `client.appstore`.
 */
export class AppstoreNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * App Store Reviews
   *
   * Get App Store reviews for any iOS app by app ID, in any storefront country - ratings, titles, and review text with transparent per-request USD pricing.
   *
   * Price: $0 per request plus $0.0001 per result.
   *
   * @example
   * const res = await client.appstore.reviews({"appId":"389801252","country":"us","limit":3});
   */
  reviews(
    input: AppstoreReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<AppstoreReviewsData>> {
    return this._core.run("appstore.reviews", input, options);
  }
}
