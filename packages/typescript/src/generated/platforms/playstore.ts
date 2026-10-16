// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Google Play App Details (playstore.app).
 */
export interface PlaystoreAppInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Android app package name, the id parameter of the app's Google Play URL (e.g. com.supercell.brawlstars).
   */
  appId: string;
  /**
   * Two-letter Google Play store country code to read the listing from (e.g. gb); price and currency follow that country. Text is returned in English.
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `reviewCount` or `developerEmail`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on an app that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "author"
    | "containsAds"
    | "createdUtc"
    | "dataSafety"
    | "developerAddress"
    | "developerEmail"
    | "developerId"
    | "developerPhone"
    | "editorsChoice"
    | "group"
    | "headerImage"
    | "helpfulVotes"
    | "id"
    | "installCount"
    | "minAndroidVersion"
    | "moreByDeveloper"
    | "permissions"
    | "ratingHistogram"
    | "recentChanges"
    | "reviewCount"
    | "reviewSamples"
    | "similarApps"
    | "text"
    | "version"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface PlaystoreAppDataSafety {
  /**
   * Data types it covers.
   */
  description?: string | null;
  /**
   * Statement (e.g. This app may collect these data types).
   */
  title: string;
  [extra: string]: unknown;
}

export interface PlaystoreAppMoreByDeveloper {
  /**
   * Android package name.
   */
  appId: string;
  /**
   * Developer name.
   */
  developer?: string | null;
  /**
   * App icon image URL.
   */
  image?: string | null;
  /**
   * Average star rating, 0 to 5.
   */
  rating?: number | null;
  /**
   * App name.
   */
  title?: string | null;
  /**
   * Google Play page URL.
   */
  url?: string | null;
  [extra: string]: unknown;
}

export interface PlaystoreAppPermission {
  /**
   * Permission group (e.g. Location).
   */
  group: string;
  /**
   * Individual permissions in the group.
   */
  permissions?: string[] | null;
  [extra: string]: unknown;
}

export interface PlaystoreAppReviewSample {
  /**
   * Reviewer name.
   */
  author?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the review was posted.
   */
  createdUtc?: number | null;
  /**
   * Number of people who found the review helpful.
   */
  helpfulVotes?: number | null;
  /**
   * Review identifier.
   */
  id?: string | null;
  /**
   * Star rating, 1 to 5.
   */
  rating: number;
  /**
   * Review text.
   */
  text?: string | null;
  /**
   * App version the review was left on.
   */
  version?: string | null;
  [extra: string]: unknown;
}

export interface PlaystoreAppSimilarApp {
  /**
   * Android package name.
   */
  appId: string;
  /**
   * Developer name.
   */
  developer?: string | null;
  /**
   * App icon image URL.
   */
  image?: string | null;
  /**
   * Average star rating, 0 to 5.
   */
  rating?: number | null;
  /**
   * App name.
   */
  title?: string | null;
  /**
   * Google Play page URL.
   */
  url?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Play App Details (playstore.app).
 */
export interface PlaystoreAppData {
  /**
   * Android package name. Populated whenever the provider has data for the entity.
   */
  appId: string;
  /**
   * Google Play category name (e.g. Music & Audio). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  category?: string;
  /**
   * Google Play category ID (e.g. MUSIC_AND_AUDIO). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  categoryId?: string;
  /**
   * True when the listing says the app contains ads.
   */
  containsAds?: boolean | null;
  /**
   * Content rating as shown (e.g. Teen). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  contentRating?: string;
  /**
   * ISO 4217 currency code of the price (e.g. USD).
   */
  currency?: string | null;
  /**
   * The Data safety section: what the developer says the app shares and collects.
   */
  dataSafety?: PlaystoreAppDataSafety[] | null;
  /**
   * Full app description as plain text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Developer name as listed. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  developer?: string;
  /**
   * Developer postal address.
   */
  developerAddress?: string | null;
  /**
   * Developer support email address.
   */
  developerEmail?: string | null;
  /**
   * Google Play developer ID.
   */
  developerId?: string | null;
  /**
   * Developer phone number.
   */
  developerPhone?: string | null;
  /**
   * Developer website URL.
   */
  developerWebsite?: string | null;
  /**
   * True when the app carries the Editors' Choice badge.
   */
  editorsChoice?: boolean | null;
  /**
   * Feature graphic image URL.
   */
  headerImage?: string | null;
  /**
   * App icon image URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Price range of in-app purchases as shown (e.g. $4.99 - $203.88 per item); null when the app has none.
   */
  inAppPurchaseRange?: string | null;
  /**
   * Install count Google Play holds behind the bracket.
   */
  installCount?: number | null;
  /**
   * Install count bracket as Google Play shows it (e.g. 1,000,000,000+). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  installs?: string;
  /**
   * Minimum Android version required; null when it varies with device.
   */
  minAndroidVersion?: string | null;
  /**
   * Lower bound of the install bracket (e.g. 1000000000). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  minInstalls?: number;
  /**
   * Other apps by the same developer, from the listing's More by section.
   */
  moreByDeveloper?: PlaystoreAppMoreByDeveloper[] | null;
  /**
   * Android permissions the app requests, grouped.
   */
  permissions?: PlaystoreAppPermission[] | null;
  /**
   * Price to install in the country's currency; 0 for a free app. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number;
  /**
   * Privacy policy URL.
   */
  privacyPolicyUrl?: string | null;
  /**
   * Average star rating, 0 to 5. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number;
  /**
   * Number of star ratings the app has (ratings, not written reviews). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  ratingCount?: number;
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
   * What's new in the latest update.
   */
  recentChanges?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the app was first released. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  releasedUtc?: number;
  /**
   * Number of written reviews, a subset of the ratings.
   */
  reviewCount?: number | null;
  /**
   * A few reviews shown on the listing page; use playstore.reviews for the full list.
   */
  reviewSamples?: PlaystoreAppReviewSample[] | null;
  /**
   * Screenshot image URLs. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  screenshots?: string[];
  /**
   * Apps from the listing's Similar apps (or Similar games) section.
   */
  similarApps?: PlaystoreAppSimilarApp[] | null;
  /**
   * Short description shown under the app name.
   */
  summary?: string | null;
  /**
   * App name as listed. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the app was last updated. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  updatedUtc?: number;
  /**
   * Google Play page URL for the app. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  /**
   * Current version number; null when the listing says it varies with device.
   */
  version?: string | null;
  [extra: string]: unknown;
}

/**
 * Input for Google Play Reviews (playstore.reviews).
 */
export interface PlaystoreReviewsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Only return reviews whose text contains one of these keywords (e.g. ["crash", "login"]).
   */
  keywords?: string[];
  /**
   * Only return reviews in these ISO 639-1 languages (e.g. ["en", "es"]).
   */
  languages?: string[];
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
   * Only return reviews with this exact star rating from 1 to 5 (e.g. 1); omit for all ratings.
   */
  rating?: number;
  /**
   * Only return reviews from the last N days (e.g. 30); omit for no time limit.
   * Range: minimum 1.
   */
  recentDays?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `title` or `appId`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a review that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: ("appId" | "title")[];
  /**
   * Review ordering: mostRelevant, newest, or rating (e.g. newest).
   */
  sortBy?: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface PlaystoreReviewsItem {
  /**
   * Google Play package name the review belongs to.
   */
  appId?: string;
  /**
   * Reviewer display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  author?: string;
  /**
   * Reviewer profile photo URL.
   */
  authorAvatarUrl?: string;
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
 * Input for Google Play Search (playstore.search).
 */
export interface PlaystoreSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Two-letter Google Play store country code to search (e.g. gb); results, prices, and currency follow that country. Text is returned in English.
   * Default: us.
   */
  country?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of apps to return in items (1-30, default 20). Google Play shows about 30 apps per search, so fewer may come back. The app Google Play features above the results comes back separately in featuredApps and does not count toward this limit.
   * Range: minimum 1, maximum 30.
   * Default: 20.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keywords, as typed into the Google Play search box (e.g. budget tracker).
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface PlaystoreSearchFeaturedApp {
  /**
   * Android package name.
   */
  appId: string;
  /**
   * ISO 4217 currency code of the price.
   */
  currency?: string | null;
  /**
   * Short app description.
   */
  description?: string | null;
  /**
   * Developer name.
   */
  developer?: string | null;
  /**
   * App icon image URL.
   */
  image?: string | null;
  /**
   * Install bracket as the featured card shows it (e.g. 50M+).
   */
  installs?: string | null;
  /**
   * Price to install in the country's currency; 0 for a free app.
   */
  price?: number | null;
  /**
   * Average star rating, 0 to 5.
   */
  rating?: number | null;
  /**
   * Number of star ratings (ratings, not written reviews).
   */
  ratingCount?: number | null;
  /**
   * App name.
   */
  title: string;
  /**
   * Google Play page URL.
   */
  url?: string | null;
  [extra: string]: unknown;
}

export interface PlaystoreSearchItem {
  /**
   * Android package name; pass it to playstore.app for the full listing. Populated whenever the provider has data for the entity.
   */
  appId: string;
  /**
   * Google Play category name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  category?: string;
  /**
   * ISO 4217 currency code of the price (e.g. USD).
   */
  currency?: string | null;
  /**
   * App description.
   */
  description?: string | null;
  /**
   * Developer name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  developer?: string;
  /**
   * App icon image URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Install count bracket as Google Play shows it (e.g. 1,000,000+). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  installs?: string;
  /**
   * Price to install in the country's currency; 0 for a free app.
   */
  price: number;
  /**
   * Average star rating, 0 to 5; absent for an app with too few ratings. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number;
  /**
   * Screenshot image URLs.
   */
  screenshots?: string[] | null;
  /**
   * App name. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Google Play page URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Play Search (playstore.search).
 */
export interface PlaystoreSearchData {
  /**
   * The app Google Play features above the results, usually the exact app the query names (e.g. Minecraft for minecraft); empty when the search shows none.
   */
  featuredApps?: PlaystoreSearchFeaturedApp[] | null;
  /**
   * Matching apps in Google Play search order, including the Similar apps shelf Google Play shows under a search for one app. Populated whenever the provider has data for the entity.
   */
  items: PlaystoreSearchItem[];
}

/**
 * Typed methods for the playstore platform. Attached to the AnyAPI client as
 * `client.playstore`.
 */
export class PlaystoreNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Play App Details
   *
   * Get an Android app's Google Play listing by package name, in any store country: title, developer and contact details, rating, ratings count, installs, price, description, screenshots, and more.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.playstore.app({ appId: "com.playdigious.deadcells.mobile", country: "us" });
   */
  app(
    input: PlaystoreAppInput,
    options?: RequestOptions,
  ): Promise<RunResult<PlaystoreAppData>> {
    return this._core.run("playstore.app", input, options);
  }

  /**
   * Google Play Reviews
   *
   * Fetch Google Play reviews for any Android app by package name or store URL: ratings, review text, dates, and helpfulness votes.
   *
   * Price: $0.0009 per request.
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

  /**
   * Google Play Search
   *
   * Search Google Play for Android apps by keyword, in any store country: package name, title, developer, rating, installs, price, and category for each result.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.playstore.search({ query: "budget tracker", country: "us", limit: 10 });
   */
  search(
    input: PlaystoreSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<PlaystoreSearchData>> {
    return this._core.run("playstore.search", input, options);
  }
}
