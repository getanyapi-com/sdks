// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Google Ads Ad Details (google_ads.ad_details).
 */
export interface GoogleAdsAdDetailsInput {
  /**
   * Google Ads Transparency Center creative URL (e.g. "https://adstransparency.google.com/advertiser/AR.../creative/CR...").
   */
  url: string;
}

export interface GoogleAdsAdDetailsVariation {
  allText: string;
  description: string;
  destinationUrl: string;
  headline: string;
  imageUrl: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Ads Ad Details (google_ads.ad_details).
 */
export interface GoogleAdsAdDetailsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  advertiserId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  creativeId: string;
  /**
   * ISO 8601 date.
   */
  firstShown: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  format: string;
  impressionsMax: number;
  impressionsMin: number;
  /**
   * ISO 8601 date.
   */
  lastShown: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  variations: GoogleAdsAdDetailsVariation[];
}

/**
 * Input for Google Ads Advertiser Search (google_ads.advertiser_search).
 */
export interface GoogleAdsAdvertiserSearchInput {
  /**
   * Advertiser name or keyword to search for (e.g. "lululemon").
   */
  query: string;
  /**
   * Two-letter country code to scope results (e.g. "AU", "CA"). Defaults to US.
   */
  region?: string;
}

export interface GoogleAdsAdvertiserSearchAdvertiser {
  /**
   * Estimated number of ads for this advertiser/region.
   */
  adsEstimate: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  advertiserId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  region: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Ads Advertiser Search (google_ads.advertiser_search).
 */
export interface GoogleAdsAdvertiserSearchData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  advertisers: GoogleAdsAdvertiserSearchAdvertiser[];
}

/**
 * Input for Google Ads Company Ads (google_ads.company_ads).
 */
export interface GoogleAdsCompanyAdsInput {
  /**
   * Advertiser ID. Provide either domain or advertiserId.
   */
  advertiserId?: string;
  /**
   * Opaque pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Company domain (e.g. "lululemon.com"). Provide either domain or advertiserId.
   */
  domain?: string;
  /**
   * Only return ads first shown on or before this date, format YYYY-MM-DD (e.g. 2024-12-31).
   */
  endDate?: string;
  /**
   * Ad format filter.
   * One of: text, image, video.
   */
  format?: "text" | "image" | "video";
  /**
   * Platform filter.
   * One of: google_maps, google_play, google_search, google_shopping, youtube.
   */
  platform?:
    | "google_maps"
    | "google_play"
    | "google_search"
    | "google_shopping"
    | "youtube";
  /**
   * Two-letter country code to scope results (e.g. "US", "AU").
   */
  region?: string;
  /**
   * Only return ads first shown on or after this date, format YYYY-MM-DD (e.g. 2024-01-01).
   */
  startDate?: string;
  /**
   * Search topic. "political" requires a region.
   * One of: all, political.
   */
  topic?: "all" | "political";
}

export interface GoogleAdsCompanyAdsAd {
  /**
   * Populated whenever the provider has data for the entity.
   */
  adUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  advertiserId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  advertiserName: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  creativeId: string;
  /**
   * ISO 8601 date.
   */
  firstShown: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  format: string;
  imageUrl: string;
  /**
   * ISO 8601 date.
   */
  lastShown: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Ads Company Ads (google_ads.company_ads).
 */
export interface GoogleAdsCompanyAdsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  ads: GoogleAdsCompanyAdsAd[];
  /**
   * Estimated total number of ads.
   */
  adsEstimate: number;
  nextCursor: string;
}

/**
 * Input for Google Ads Transparency (google_ads.search).
 */
export interface GoogleAdsSearchInput {
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * A Google Ads Transparency Center URL for a selected advertiser or domain (e.g. https://adstransparency.google.com/advertiser/AR01614014350098432001?region=US).
   */
  url: string;
}

export interface GoogleAdsSearchItem {
  /**
   * Advertiser display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  advertiser?: string;
  /**
   * Google Ads advertiser identifier.
   */
  advertiserId?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the ad was first shown.
   */
  firstShownUtc?: number;
  /**
   * Ad format, e.g. TEXT, IMAGE, VIDEO.
   */
  format?: string;
  /**
   * Google Ads creative identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the ad was last shown.
   */
  lastShownUtc?: number;
  /**
   * Number of days the ad has been served.
   */
  numServedDays?: number;
  /**
   * URL to a rendered preview of the creative.
   */
  previewUrl?: string;
  /**
   * Ads Transparency Center URL for the creative. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Creative variations for the ad, each with image, headline, and body text where present.
   */
  variations?: GoogleAdsSearchVariation[];
  [extra: string]: unknown;
}

export interface GoogleAdsSearchVariation {
  /**
   * Creative headline text.
   */
  headline?: string;
  /**
   * Creative image URL.
   */
  imageUrl?: string;
  /**
   * Creative body/description text.
   */
  text?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Ads Transparency (google_ads.search).
 */
export interface GoogleAdsSearchData {
  /**
   * Ad records from the Transparency Center: advertiser, ad format, creative details, preview URL, and first/last shown dates. Populated whenever the provider has data for the entity.
   */
  items: GoogleAdsSearchItem[];
}

/**
 * Typed methods for the google_ads platform. Attached to the AnyAPI client as
 * `client.googleAds`.
 */
export class GoogleAdsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Ads Ad Details
   *
   * Look up a single Google Ads Transparency Center creative by URL and get its format, run dates, impression range, regions, and creative variations as clean JSON.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.googleAds.adDetails({ url: "https://adstransparency.google.com/advertiser/AR01614014350098432001/creative/CR10449491775734153217" });
   */
  adDetails(
    input: GoogleAdsAdDetailsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleAdsAdDetailsData>> {
    return this._core.run("google_ads.ad_details", input, options);
  }

  /**
   * Google Ads Advertiser Search
   *
   * Search the Google Ads Transparency Center for advertisers by keyword and get matching advertiser IDs, regions, and estimated ad counts as clean JSON.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.googleAds.advertiserSearch({ query: "lululemon" });
   */
  advertiserSearch(
    input: GoogleAdsAdvertiserSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleAdsAdvertiserSearchData>> {
    return this._core.run("google_ads.advertiser_search", input, options);
  }

  /**
   * Google Ads Company Ads
   *
   * List the ads a company is running from the Google Ads Transparency Center by domain or advertiser ID - creative ID, format, ad URL, and first/last shown dates - with cursor pagination.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.googleAds.companyAds({ domain: "lululemon.com" });
   */
  companyAds(
    input: GoogleAdsCompanyAdsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleAdsCompanyAdsData>> {
    return this._core.run("google_ads.company_ads", input, options);
  }

  /**
   * Iterate every result of Google Ads Company Ads across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterCompanyAds(
    input: GoogleAdsCompanyAdsInput,
    options?: RequestOptions,
  ): Paginator<GoogleAdsCompanyAdsAd, RunResult<GoogleAdsCompanyAdsData>> {
    return paginate<GoogleAdsCompanyAdsAd, RunResult<GoogleAdsCompanyAdsData>>(
      this._core,
      "google_ads.company_ads",
      input as unknown as Record<string, unknown>,
      "ads",
      false,
      options,
    );
  }

  /**
   * Google Ads Transparency
   *
   * Pull the ads an advertiser is currently running from the Google Ads Transparency Center - creative details, formats, and run dates - as clean JSON.
   *
   * Price: $0.00005 per request plus $0.0013 per result (maximum $0.02605).
   *
   * @example
   * const res = await client.googleAds.search({ url: "https://adstransparency.google.com/?region=US&domain=nike.com", limit: 3 });
   */
  search(
    input: GoogleAdsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleAdsSearchData>> {
    return this._core.run("google_ads.search", input, options);
  }
}
