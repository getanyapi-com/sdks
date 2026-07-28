// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type AppstoreReviewsData = unknown;

/**
 * Typed methods for the appstore platform. Attached to the AnyAPI client as
 * `client.appstore`.
 */
export class AppstoreNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * App Store Reviews
   *
   * Get App Store reviews for any iOS app by app ID, in any storefront country: ratings, titles, and review text.
   *
   * Price: $0 per request plus $0.0001 per result (maximum $0.01).
   *
   * @example
   * const res = await client.appstore.reviews({ appId: "389801252", country: "us", limit: 3 });
   */
  reviews(
    input: AppstoreReviewsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<AppstoreReviewsData>> {
    return this._core.run(
      "appstore.reviews",
      input,
      options,
    ) as unknown as Promise<BareRunResult<AppstoreReviewsData>>;
  }
}
