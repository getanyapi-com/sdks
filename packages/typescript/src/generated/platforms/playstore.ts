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
   * Only return reviews left on these app versions (e.g. ["2.24.1", "2.24.2"]).
   */
  appVersion?: string[];
  /**
   * Only return reviews from this device type (e.g. "tablet"); omit for the provider default.
   * One of: mobile, tablet, chromebook.
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `title` or `version`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a review that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: ("helpfulVotes" | "title" | "version")[];
  /**
   * Review ordering: mostRelevant, newest, or rating (e.g. newest).
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
   * Fetch Google Play reviews for any Android app by package name or store URL: ratings, review text, dates, and helpfulness votes.
   *
   * Price: $0 per request plus $0.00013 per result (maximum $0.0121).
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
