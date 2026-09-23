// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Similarweb Website Traffic (similarweb.overview).
 */
export interface SimilarwebOverviewInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * The website's domain, without a scheme or path (e.g. stripe.com).
   */
  domain: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface SimilarwebOverviewTopCountrie {
  /**
   * Two-letter country code.
   */
  countryCode: string;
  /**
   * Country name in English.
   */
  countryName?: string;
  /**
   * Share of the website's visits, as a fraction from 0 to 1 (0.25 means 25%).
   */
  share?: number;
  [extra: string]: unknown;
}

export interface SimilarwebOverviewTopKeyword {
  /**
   * Average cost per click in USD. Null when Similarweb has no figure.
   */
  cpcUsd?: number | null;
  /**
   * Similarweb's estimated value of the keyword to this website, as Similarweb publishes it.
   */
  estimatedValue?: number | null;
  /**
   * The search keyword.
   */
  keyword: string;
  /**
   * Monthly search volume for the keyword.
   */
  searchVolume?: number | null;
  [extra: string]: unknown;
}

export interface SimilarwebOverviewVisitsHistory {
  /**
   * First day of the month: UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  monthUtc: number;
  /**
   * Estimated visits in that month.
   */
  visits?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Similarweb Website Traffic (similarweb.overview).
 */
export interface SimilarwebOverviewData {
  /**
   * Average visit duration in seconds.
   */
  avgVisitDurationSeconds: number | null;
  /**
   * Share of visits that leave after one page, as a fraction from 0 to 1.
   */
  bounceRate: number | null;
  /**
   * Similarweb's category slug for the website (e.g. finance, news_and_media).
   */
  category: string | null;
  /**
   * Rank by traffic within the website's category. Null for websites too small to rank.
   */
  categoryRank: number | null;
  /**
   * Two-letter code of the country countryRank is measured in, the website's top country.
   */
  countryCode: string | null;
  /**
   * Rank by traffic within countryCode. Null for websites too small to rank.
   */
  countryRank: number | null;
  /**
   * The website's meta description as Similarweb records it.
   */
  description: string | null;
  /**
   * The website's domain. Populated whenever the provider has data for the entity.
   */
  domain: string;
  /**
   * Similarweb global rank by traffic. Null for websites too small to rank. Populated whenever the provider has data for the entity.
   */
  globalRank: number | null;
  /**
   * Screenshot of the website's homepage.
   */
  image: string | null;
  /**
   * Estimated total visits in the snapshot month. Populated whenever the provider has data for the entity.
   */
  monthlyVisits: number | null;
  /**
   * Average pages viewed per visit.
   */
  pagesPerVisit: number | null;
  /**
   * The month the traffic figures describe: UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  snapshotUtc: number | null;
  /**
   * The website's page title as Similarweb records it.
   */
  title: string | null;
  /**
   * Countries sending the most visits, up to five, largest first. Populated whenever the provider has data for the entity.
   */
  topCountries: SimilarwebOverviewTopCountrie[];
  /**
   * Search keywords sending the most visits, up to five. Populated whenever the provider has data for the entity.
   */
  topKeywords: SimilarwebOverviewTopKeyword[];
  /**
   * Where the website's visits come from. Each value is a fraction from 0 to 1 of all visits. Populated whenever the provider has data for the entity.
   */
  trafficSources: {
    /**
     * Share of visits that arrive from affiliate and paid referral links, as a fraction from 0 to 1 (0.25 means 25%).
     */
    affiliate?: number | null;
    /**
     * Share of visits that arrive from typing the address or bookmarks, as a fraction from 0 to 1 (0.25 means 25%).
     */
    direct?: number | null;
    /**
     * Share of visits that arrive from display ads, as a fraction from 0 to 1 (0.25 means 25%).
     */
    displayAds?: number | null;
    /**
     * Share of visits that arrive from AI chatbots such as ChatGPT, as a fraction from 0 to 1 (0.25 means 25%).
     */
    genAi?: number | null;
    /**
     * Share of visits that arrive from email, as a fraction from 0 to 1 (0.25 means 25%).
     */
    mail?: number | null;
    /**
     * Share of visits that arrive from links on other websites, as a fraction from 0 to 1 (0.25 means 25%).
     */
    referrals?: number | null;
    /**
     * Share of visits that arrive from unpaid search results, as a fraction from 0 to 1 (0.25 means 25%).
     */
    searchOrganic?: number | null;
    /**
     * Share of visits that arrive from paid search ads, as a fraction from 0 to 1 (0.25 means 25%).
     */
    searchPaid?: number | null;
    /**
     * Share of visits that arrive from unpaid social media, as a fraction from 0 to 1 (0.25 means 25%).
     */
    socialOrganic?: number | null;
    /**
     * Share of visits that arrive from paid social media ads, as a fraction from 0 to 1 (0.25 means 25%).
     */
    socialPaid?: number | null;
  };
  /**
   * Estimated monthly visits for recent months, oldest first. Populated whenever the provider has data for the entity.
   */
  visitsHistory: SimilarwebOverviewVisitsHistory[];
  [extra: string]: unknown;
}

/**
 * Input for Similarweb Similar Sites (similarweb.similar_sites).
 */
export interface SimilarwebSimilarSitesInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * The website's domain, without a scheme or path (e.g. stripe.com).
   */
  domain: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface SimilarwebSimilarSitesSite {
  /**
   * Similarweb category path of the similar website (e.g. Finance/Banking_Credit_and_Lending).
   */
  category?: string | null;
  /**
   * The similar website's meta description.
   */
  description?: string | null;
  /**
   * The similar website's domain.
   */
  domain: string;
  /**
   * Screenshot of the similar website's homepage.
   */
  image?: string | null;
  /**
   * Position in the similarity list, 1 being most similar.
   */
  similarityRank?: number | null;
  /**
   * Similarweb's similarity score from 0 to 1, higher meaning more similar.
   */
  similarityScore?: number | null;
  /**
   * The similar website's traffic rank in its own top country.
   */
  topCountryRank?: number | null;
  /**
   * Estimated monthly visits to the similar website.
   */
  totalVisits?: number | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Similarweb Similar Sites (similarweb.similar_sites).
 */
export interface SimilarwebSimilarSitesData {
  /**
   * Similarweb category of the website (e.g. Finance).
   */
  category: string | null;
  /**
   * The website's meta description as Similarweb records it.
   */
  description: string | null;
  /**
   * The website's domain. Populated whenever the provider has data for the entity.
   */
  domain: string;
  /**
   * Websites most similar to this one, up to 20, most similar first. Populated whenever the provider has data for the entity.
   */
  sites: SimilarwebSimilarSitesSite[];
  /**
   * Topic tags Similarweb assigns the website.
   */
  tags: string[];
  /**
   * The website's page title as Similarweb records it.
   */
  title: string | null;
  /**
   * Estimated monthly visits to the website.
   */
  totalVisits: number | null;
  [extra: string]: unknown;
}

/**
 * Typed methods for the similarweb platform. Attached to the AnyAPI client as
 * `client.similarweb`.
 */
export class SimilarwebNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Similarweb Website Traffic
   *
   * Get the Similarweb traffic overview for any website: estimated monthly visits and a three-month history, global, country, and category rank, bounce rate, pages per visit, visit duration, traffic sources including AI chatbots, top countries, and top search keywords - as normalized JSON.
   *
   * Price: $0.00002 per request plus $0.00165 per result (maximum $0.00167).
   *
   * @example
   * const res = await client.similarweb.overview({ domain: "stripe.com" });
   */
  overview(
    input: SimilarwebOverviewInput,
    options?: RequestOptions,
  ): Promise<RunResult<SimilarwebOverviewData>> {
    return this._core.run("similarweb.overview", input, options);
  }

  /**
   * Similarweb Similar Sites
   *
   * Find the websites Similarweb ranks as most similar to any website: up to 20 competitor and alternative sites in similarity order, each with its similarity score, category, top-country rank, estimated monthly visits, and description - as normalized JSON.
   *
   * Price: $0.00002 per request plus $0.00165 per result (maximum $0.00167).
   *
   * @example
   * const res = await client.similarweb.similarSites({ domain: "stripe.com" });
   */
  similarSites(
    input: SimilarwebSimilarSitesInput,
    options?: RequestOptions,
  ): Promise<RunResult<SimilarwebSimilarSitesData>> {
    return this._core.run("similarweb.similar_sites", input, options);
  }
}
