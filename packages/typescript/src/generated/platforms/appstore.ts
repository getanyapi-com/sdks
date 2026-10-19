// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for App Store App Details (appstore.app).
 */
export interface AppstoreAppInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Numeric App Store app ID, the digits at the end of the app's store URL without the 'id' prefix (e.g. 310633997).
   */
  appId: string;
  /**
   * Two-letter App Store storefront country code to read the listing from (e.g. gb); price and currency follow that storefront.
   * Default: us.
   */
  country?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `ratingCount` or `screenshots`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on an app that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "author"
    | "bundleId"
    | "categories"
    | "category"
    | "createdUtc"
    | "currency"
    | "currentVersionRating"
    | "currentVersionRatingCount"
    | "genres"
    | "hasInAppPurchases"
    | "languages"
    | "minimumOsVersion"
    | "moreByDeveloper"
    | "privacyTypes"
    | "ratingCount"
    | "ratingHistogram"
    | "releasedUtc"
    | "reviewSamples"
    | "screenshots"
    | "similarApps"
    | "sizeBytes"
    | "subtitle"
    | "supportedDevices"
    | "text"
    | "website"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface AppstoreAppMoreByDeveloper {
  /**
   * Numeric App Store app ID.
   */
  appId: string;
  /**
   * App icon image URL.
   */
  image?: string | null;
  /**
   * App name.
   */
  title?: string | null;
  /**
   * App Store page URL.
   */
  url?: string | null;
  [extra: string]: unknown;
}

export interface AppstoreAppPrivacyType {
  /**
   * Data categories it covers (e.g. Contact Info).
   */
  categories?: string[] | null;
  /**
   * Kind of data use (e.g. Data Linked to You).
   */
  title: string;
  [extra: string]: unknown;
}

export interface AppstoreAppReviewSample {
  /**
   * Reviewer nickname.
   */
  author?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the review was posted.
   */
  createdUtc?: number | null;
  /**
   * Star rating, 1 to 5.
   */
  rating: number;
  /**
   * Review text.
   */
  text?: string | null;
  /**
   * Review title.
   */
  title?: string | null;
  [extra: string]: unknown;
}

export interface AppstoreAppSimilarApp {
  /**
   * Numeric App Store app ID.
   */
  appId: string;
  /**
   * App icon image URL.
   */
  image?: string | null;
  /**
   * App name.
   */
  title?: string | null;
  /**
   * App Store page URL.
   */
  url?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of App Store App Details (appstore.app).
 */
export interface AppstoreAppData {
  /**
   * Numeric App Store app ID. Populated whenever the provider has data for the entity.
   */
  appId: string;
  /**
   * The app's bundle identifier (e.g. com.burbn.instagram).
   */
  bundleId?: string | null;
  /**
   * Primary App Store category (e.g. Photo & Video).
   */
  category?: string | null;
  /**
   * Age rating as shown on the listing (e.g. 13+). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  contentRating?: string;
  /**
   * ISO 4217 currency code of the price (e.g. USD).
   */
  currency?: string | null;
  /**
   * Average star rating of the current version.
   */
  currentVersionRating?: number | null;
  /**
   * Number of star ratings of the current version.
   */
  currentVersionRatingCount?: number | null;
  /**
   * Full app description. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Developer name as listed. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  developer?: string;
  /**
   * Numeric App Store developer ID. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  developerId?: string;
  /**
   * The developer's App Store page URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  developerUrl?: string;
  /**
   * All App Store categories the app is listed in.
   */
  genres?: string[] | null;
  /**
   * True when the listing offers in-app purchases; null when the source does not say.
   */
  hasInAppPurchases?: boolean | null;
  /**
   * App icon image URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Two-letter codes of the languages the app supports (e.g. EN).
   */
  languages?: string[] | null;
  /**
   * Minimum iOS version required (e.g. 16.3).
   */
  minimumOsVersion?: string | null;
  /**
   * Other apps by the same developer.
   */
  moreByDeveloper?: AppstoreAppMoreByDeveloper[] | null;
  /**
   * Price to download in the storefront's currency; 0 for a free app. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number;
  /**
   * The App Privacy label: each kind of data use the developer declared, with the data categories it covers.
   */
  privacyTypes?: AppstoreAppPrivacyType[] | null;
  /**
   * Average star rating, 0 to 5. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number;
  /**
   * Number of star ratings the app has in this storefront (ratings, not written reviews).
   */
  ratingCount?: number | null;
  /**
   * Number of ratings at each star level.
   */
  ratingHistogram?: {
    /**
     * Number of 5-star ratings.
     */
    fiveStar?: number | null;
    /**
     * Number of 4-star ratings.
     */
    fourStar?: number | null;
    /**
     * Number of 1-star ratings.
     */
    oneStar?: number | null;
    /**
     * Number of 3-star ratings.
     */
    threeStar?: number | null;
    /**
     * Number of 2-star ratings.
     */
    twoStar?: number | null;
  } | null;
  /**
   * What's new in the current version. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  releaseNotes?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the app was first released.
   */
  releasedUtc?: number | null;
  /**
   * A few reviews shown on the listing page; use appstore.reviews for the full list.
   */
  reviewSamples?: AppstoreAppReviewSample[] | null;
  /**
   * iPhone screenshot image URLs.
   */
  screenshots?: string[] | null;
  /**
   * Apps shown under You Might Also Like.
   */
  similarApps?: AppstoreAppSimilarApp[] | null;
  /**
   * Download size in bytes.
   */
  sizeBytes?: number | null;
  /**
   * Short subtitle shown under the app name.
   */
  subtitle?: string | null;
  /**
   * Apple device model codes the app runs on.
   */
  supportedDevices?: string[] | null;
  /**
   * App name as listed. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the current version was released. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  updatedUtc?: number;
  /**
   * App Store page URL for the app in the requested storefront. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  /**
   * Current version number (e.g. 451.0.0). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  version?: string;
  /**
   * The seller's own website, when listed.
   */
  website?: string | null;
  [extra: string]: unknown;
}

/**
 * Input for App Store Reviews (appstore.reviews).
 */
export interface AppstoreReviewsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Opaque pagination cursor from a previous response's nextCursor. Omit for the first page; pass it to fetch the next page of reviews.
   */
  cursor?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of results to return (1-100, default 100).
   * Range: minimum 1, maximum 100.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `helpfulVotes` or `version`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a review that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. On a paginated walk it applies to the first page only; later pages stay with the source that page chose, at the price it was quoted.
   */
  requireFields?: (
    "appId" | "helpfulVotes" | "nextCursor" | "url" | "version"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface AppstoreReviewsItem {
  /**
   * App Store numeric app identifier the review belongs to.
   */
  appId?: string;
  /**
   * Reviewer nickname. Populated whenever the provider has data for the entity.
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
   * Review title.
   */
  title?: string;
  /**
   * Public App Store page for this review, when supplied by the serving lane.
   * Format: uri.
   */
  url?: string;
  /**
   * App version the review was left on.
   */
  version?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of App Store Reviews (appstore.reviews).
 */
export interface AppstoreReviewsData {
  /**
   * Review records: star rating, review title and text, reviewer nickname, app version, and review date. Populated whenever the provider has data for the entity.
   */
  items: AppstoreReviewsItem[];
  /**
   * Opaque cursor for the next page of reviews, or null when there are no more. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
}

/**
 * Input for App Store Search (appstore.search).
 */
export interface AppstoreSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Two-letter App Store storefront country code to search (e.g. gb); results, prices, and currency follow that storefront.
   * Default: us.
   */
  country?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of apps to return (1-50, default 20).
   * Range: minimum 1, maximum 50.
   * Default: 20.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keywords, as typed into the App Store search box (e.g. budget tracker).
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `sizeBytes` or `updatedUtc`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on an app that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: ("bundleId" | "screenshots" | "sizeBytes" | "updatedUtc")[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface AppstoreSearchItem {
  /**
   * Numeric App Store app ID; pass it to appstore.app for the full listing. Populated whenever the provider has data for the entity.
   */
  appId: string;
  /**
   * The app's bundle identifier.
   */
  bundleId?: string | null;
  /**
   * Age rating (e.g. 4+). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  contentRating?: string;
  /**
   * ISO 4217 currency code of the price (e.g. USD).
   */
  currency?: string | null;
  /**
   * App description. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Developer name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  developer?: string;
  /**
   * Numeric App Store developer ID. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  developerId?: string;
  /**
   * App Store categories, primary first. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  genres?: string[];
  /**
   * App icon image URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Two-letter codes of the languages the app supports. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  languages?: string[];
  /**
   * Minimum iOS version required. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  minimumOsVersion?: string;
  /**
   * Price to download in the storefront's currency; 0 for a free app.
   */
  price: number;
  /**
   * Average star rating, 0 to 5. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number;
  /**
   * Number of star ratings (ratings, not written reviews). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  ratingCount?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the app was first released. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  releasedUtc?: number;
  /**
   * iPhone screenshot image URLs.
   */
  screenshots?: string[] | null;
  /**
   * Download size in bytes.
   */
  sizeBytes?: number | null;
  /**
   * App name. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the current version was released.
   */
  updatedUtc?: number | null;
  /**
   * App Store page URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  /**
   * Current version number. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  version?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of App Store Search (appstore.search).
 */
export interface AppstoreSearchData {
  /**
   * Matching apps in App Store search order. Populated whenever the provider has data for the entity.
   */
  items: AppstoreSearchItem[];
}

/**
 * Typed methods for the appstore platform. Attached to the AnyAPI client as
 * `client.appstore`.
 */
export class AppstoreNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * App Store App Details
   *
   * Get an iOS app's App Store listing by app ID, in any storefront country: title, developer, rating, price, version, description, screenshots, and more.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.appstore.app({ appId: "479516143", country: "us" });
   */
  app(
    input: AppstoreAppInput,
    options?: RequestOptions,
  ): Promise<RunResult<AppstoreAppData>> {
    return this._core.run("appstore.app", input, options);
  }

  /**
   * App Store Reviews
   *
   * Get App Store reviews for any iOS app by app ID, in any storefront country: ratings, titles, and review text.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.appstore.reviews({ appId: "389801252", country: "us", limit: 3 });
   */
  reviews(
    input: AppstoreReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<AppstoreReviewsData>> {
    return this._core.run("appstore.reviews", input, options);
  }

  /**
   * Iterate every result of App Store Reviews across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterReviews(
    input: AppstoreReviewsInput,
    options?: RequestOptions,
  ): Paginator<AppstoreReviewsItem, RunResult<AppstoreReviewsData>> {
    return paginate<AppstoreReviewsItem, RunResult<AppstoreReviewsData>>(
      this._core,
      "appstore.reviews",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }

  /**
   * App Store Search
   *
   * Search the App Store for iOS apps by keyword, in any storefront country: app ID, title, developer, rating, ratings count, price, version, and more for each result.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.appstore.search({ query: "minecraft", country: "us", limit: 10 });
   */
  search(
    input: AppstoreSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<AppstoreSearchData>> {
    return this._core.run("appstore.search", input, options);
  }
}
