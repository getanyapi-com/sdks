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
  /**
   * Reviewer display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  author?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the review was posted. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Number of helpful votes on the review.
   */
  helpfulVotes?: number;
  /**
   * Review identifier. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  id?: string;
  /**
   * Star rating, 1 to 5. Populated whenever the provider has data for the entity.
   */
  rating: number;
  /**
   * Review body text. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Review title, when the store provides one.
   */
  title?: string;
  /**
   * App version the review was left on.
   */
  version?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Play Reviews (playstore.reviews).
 */
export interface PlaystoreReviewsData {
  /**
   * Review records: star rating, review text, reviewer name, app version, helpfulness votes, and review date. Populated whenever the provider has data for the entity.
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
   * Fetch Google Play reviews for any Android app by package name or store URL - ratings, review text, dates, and helpfulness votes.

**Price:** billed per result - \$0.11 per 1,000 results, capped at \$11.00 per 1,000 requests.
   *
   * Price: $0.00011 per result.
   *
   * @example
   * const res = await client.playstore.reviews({ appId: "com.whatsapp", limit: 3 });
   */
  reviews(
    input: PlaystoreReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<PlaystoreReviewsData>> {
    return this._core.run("playstore.reviews", input, options);
  }
}
