// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Ahrefs Backlinks (ahrefs.backlinks).
 */
export interface AhrefsBacklinksInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Match scope: "exact" for the given URL only, or "subdomains" to include the domain and its subdomains.
   * One of: exact, subdomains.
   * Default: subdomains.
   */
  mode?: "exact" | "subdomains";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The domain or page URL to find backlinks for (e.g. "ahrefs.com").
   */
  url: string;
}

export interface AhrefsBacklinksItem {
  /**
   * Anchor text of the link.
   */
  anchor?: string;
  /**
   * Text immediately after the anchor on the referring page.
   */
  contextAfter?: string;
  /**
   * Text immediately before the anchor on the referring page.
   */
  contextBefore?: string;
  /**
   * Ahrefs Domain Rating (0-100) of the linking domain.
   */
  domainRating?: number;
  /**
   * Title of the referring page.
   */
  title?: string;
  /**
   * URL of the referring page that contains the link. Populated whenever the provider has data for the entity.
   */
  urlFrom: string;
  /**
   * Target URL the link points to.
   */
  urlTo?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Ahrefs Backlinks (ahrefs.backlinks).
 */
export interface AhrefsBacklinksData {
  /**
   * Referring pages that link to the domain or URL. Populated whenever the provider has data for the entity.
   */
  items: AhrefsBacklinksItem[];
}

/**
 * Input for Ahrefs Keyword Ideas (ahrefs.keyword_ideas).
 */
export interface AhrefsKeywordIdeasInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Two-letter country code that scopes the suggestions (e.g. us, gb, de).
   * Default: us.
   */
  country?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * The seed keyword to expand into related suggestions (e.g. "coffee").
   */
  keyword: string;
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

export interface AhrefsKeywordIdeasItem {
  /**
   * Two-letter country code the suggestions are scoped to.
   */
  country?: string;
  /**
   * Related keyword suggestions for the seed term. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  ideas?: AhrefsKeywordIdeasIdea[];
  /**
   * Question-shaped keyword suggestions for the seed term.
   */
  questions?: AhrefsKeywordIdeasQuestion[];
  /**
   * Search engine the suggestions are drawn from (e.g. Google).
   */
  searchEngine?: string;
  /**
   * The seed keyword the suggestions were expanded from. Populated whenever the provider has data for the entity.
   */
  sourceKeyword: string;
  [extra: string]: unknown;
}

export interface AhrefsKeywordIdeasIdea {
  /**
   * Relative Ahrefs difficulty bucket (a letter such as E, M, or H), not an exact number.
   */
  difficulty?: string;
  /**
   * The suggested related keyword. Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Timestamp the suggestion metrics were last updated.
   */
  updatedAt?: string;
  /**
   * Relative search-volume bucket (a letter grade), not an exact number.
   */
  volume?: string;
  [extra: string]: unknown;
}

export interface AhrefsKeywordIdeasQuestion {
  /**
   * Relative Ahrefs difficulty bucket (a letter such as E, M, or H), not an exact number.
   */
  difficulty?: string;
  /**
   * The suggested question keyword.
   */
  keyword?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  /**
   * Relative search-volume bucket (a letter grade), not an exact number.
   */
  volume?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Ahrefs Keyword Ideas (ahrefs.keyword_ideas).
 */
export interface AhrefsKeywordIdeasData {
  /**
   * Keyword-idea records: the seed keyword and its related keyword suggestions, each with an Ahrefs difficulty and search-volume bucket. Populated whenever the provider has data for the entity.
   */
  items: AhrefsKeywordIdeasItem[];
}

/**
 * Input for Ahrefs Keyword Difficulty (ahrefs.keywords).
 */
export interface AhrefsKeywordsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Two-letter country code that scopes volume and difficulty (e.g. us, gb, de).
   * Default: us.
   */
  country?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * The search term to analyze (e.g. "seo tools").
   */
  keyword: string;
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

export interface AhrefsKeywordsItem {
  /**
   * Two-letter country code the metrics are scoped to.
   */
  country?: string;
  /**
   * Ahrefs' estimated paid-search cost per click in USD.
   */
  cpcUsd?: number;
  /**
   * Ahrefs Keyword Difficulty, 0-100.
   */
  difficulty?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  keyword: string;
  /**
   * Estimated number of referring domains a page needs to rank in the top 10 for this keyword.
   */
  referringDomainsToRank?: number;
  /**
   * Average monthly search volume for the keyword in the requested country.
   */
  searchVolume?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Ahrefs Keyword Difficulty (ahrefs.keywords).
 */
export interface AhrefsKeywordsData {
  /**
   * Keyword-difficulty records: the difficulty score and the referring-domain gap needed to rank in the top 10. Populated whenever the provider has data for the entity.
   */
  items: AhrefsKeywordsItem[];
}

/**
 * Input for Ahrefs Domain Overview (ahrefs.overview).
 */
export interface AhrefsOverviewInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Analysis scope: subdomains covers the whole domain, exact matches only the given URL.
   * One of: exact, subdomains.
   * Default: subdomains.
   */
  mode?: "exact" | "subdomains";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The domain or page URL to analyze (e.g. ahrefs.com).
   */
  url: string;
}

export interface AhrefsOverviewItem {
  /**
   * Total number of backlinks pointing to the domain.
   */
  backlinks?: number;
  /**
   * Percentage (0-100) of backlinks that are dofollow.
   */
  dofollowBacklinksPct?: number;
  /**
   * Percentage (0-100) of referring domains that provide a dofollow link.
   */
  dofollowReferringDomainsPct?: number;
  /**
   * The domain or URL the metrics are scoped to. Populated whenever the provider has data for the entity.
   */
  domain: string;
  /**
   * Ahrefs Domain Rating, 0-100, measuring backlink-profile strength.
   */
  domainRating?: number;
  /**
   * Analysis scope used: subdomains (whole domain) or exact (the given URL only).
   */
  mode?: string;
  /**
   * Number of unique referring domains linking to the domain.
   */
  referringDomains?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Ahrefs Domain Overview (ahrefs.overview).
 */
export interface AhrefsOverviewData {
  /**
   * Domain authority records: the requested domain plus its Domain Rating, total backlinks, and referring-domain counts. Populated whenever the provider has data for the entity.
   */
  items: AhrefsOverviewItem[];
}

/**
 * Input for Ahrefs Traffic Overview (ahrefs.traffic).
 */
export interface AhrefsTrafficInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Analysis scope: subdomains covers the domain and its subdomains, domain covers the root domain only, prefix covers every page under the given path, exact matches only the given URL.
   * One of: exact, subdomains, prefix, domain.
   * Default: subdomains.
   */
  mode?: "exact" | "subdomains" | "prefix" | "domain";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The domain or page URL to analyze (e.g. ahrefs.com).
   */
  url: string;
}

export interface AhrefsTrafficItem {
  /**
   * The domain or URL the metrics are scoped to. Populated whenever the provider has data for the entity.
   */
  domain: string;
  /**
   * Analysis scope used: subdomains, domain, prefix, or exact.
   */
  mode?: string;
  /**
   * Estimated monthly organic search visits.
   */
  monthlyTraffic?: number;
  /**
   * Estimated monthly USD value of the organic traffic, what the same clicks would cost in paid search.
   */
  monthlyTrafficValueUsd?: number;
  /**
   * Countries sending the most organic traffic, up to five.
   */
  topCountries?: AhrefsTrafficTopCountrie[];
  /**
   * The top organic keywords the domain already ranks for, up to five, ordered by traffic. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  topKeywords?: AhrefsTrafficTopKeyword[];
  /**
   * The pages receiving the most organic traffic, up to five.
   */
  topPages?: AhrefsTrafficTopPage[];
  /**
   * Monthly organic traffic estimates for recent months, oldest first.
   */
  trafficHistory?: AhrefsTrafficTrafficHistory[];
  [extra: string]: unknown;
}

export interface AhrefsTrafficTopCountrie {
  /**
   * Two-letter country code.
   */
  country: string;
  /**
   * Share (0-100) of the domain's organic traffic from this country.
   */
  sharePct?: number;
  [extra: string]: unknown;
}

export interface AhrefsTrafficTopKeyword {
  /**
   * The organic keyword.
   */
  keyword: string;
  /**
   * Current Google organic position for this keyword.
   */
  position?: number;
  /**
   * Estimated monthly traffic this keyword drives to the domain.
   */
  traffic?: number;
  [extra: string]: unknown;
}

export interface AhrefsTrafficTopPage {
  /**
   * Share (0-100) of the domain's organic traffic this page receives.
   */
  sharePct?: number;
  /**
   * Estimated monthly organic visits to the page.
   */
  traffic?: number;
  /**
   * The page URL.
   */
  url: string;
  [extra: string]: unknown;
}

export interface AhrefsTrafficTrafficHistory {
  /**
   * UTC epoch timestamp in seconds (Unix time) of the first day of the month. Multiply by 1000 for a JS Date in milliseconds.
   */
  monthUtc: number;
  /**
   * Estimated organic search visits in that month.
   */
  organicTraffic?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Ahrefs Traffic Overview (ahrefs.traffic).
 */
export interface AhrefsTrafficData {
  /**
   * Traffic overview records: the requested domain plus its monthly organic traffic, top ranking keywords, top pages, top countries, and traffic history. Populated whenever the provider has data for the entity.
   */
  items: AhrefsTrafficItem[];
}

/**
 * Typed methods for the ahrefs platform. Attached to the AnyAPI client as
 * `client.ahrefs`.
 */
export class AhrefsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Ahrefs Backlinks
   *
   * Get the referring pages linking to a domain or URL, each with the source page, anchor text, linking domain rating, and page title.
   *
   * Price: $0.00501 per request plus $0 per result (maximum $0.00501).
   *
   * @example
   * const res = await client.ahrefs.backlinks({ url: "ahrefs.com", mode: "exact" });
   */
  backlinks(
    input: AhrefsBacklinksInput,
    options?: RequestOptions,
  ): Promise<RunResult<AhrefsBacklinksData>> {
    return this._core.run("ahrefs.backlinks", input, options);
  }

  /**
   * Ahrefs Keyword Ideas
   *
   * Get related keyword suggestions for any seed term, each with an Ahrefs difficulty and search-volume bucket.
   *
   * Price: $0.00006 per request plus $0.00495 per result (maximum $0.00501).
   *
   * @example
   * const res = await client.ahrefs.keywordIdeas({ keyword: "coffee", country: "us" });
   */
  keywordIdeas(
    input: AhrefsKeywordIdeasInput,
    options?: RequestOptions,
  ): Promise<RunResult<AhrefsKeywordIdeasData>> {
    return this._core.run("ahrefs.keyword_ideas", input, options);
  }

  /**
   * Ahrefs Keyword Difficulty
   *
   * Get the Ahrefs keyword-difficulty metrics for any search term: the difficulty score (0-100) and the number of referring domains a page needs to rank in the top 10 - as normalized JSON.
   *
   * Price: $0.00006 per request plus $0.00495 per result (maximum $0.00501).
   *
   * @example
   * const res = await client.ahrefs.keywords({ keyword: "seo tools", country: "us" });
   */
  keywords(
    input: AhrefsKeywordsInput,
    options?: RequestOptions,
  ): Promise<RunResult<AhrefsKeywordsData>> {
    return this._core.run("ahrefs.keywords", input, options);
  }

  /**
   * Ahrefs Domain Overview
   *
   * Get an SEO authority overview for any domain or URL: Domain Rating, total backlinks, and referring domains - as normalized JSON.
   *
   * Price: $0.00006 per request plus $0.00495 per result (maximum $0.00501).
   *
   * @example
   * const res = await client.ahrefs.overview({ url: "ahrefs.com", mode: "subdomains" });
   */
  overview(
    input: AhrefsOverviewInput,
    options?: RequestOptions,
  ): Promise<RunResult<AhrefsOverviewData>> {
    return this._core.run("ahrefs.overview", input, options);
  }

  /**
   * Ahrefs Traffic Overview
   *
   * Get the Ahrefs organic traffic overview for any domain or URL: monthly traffic estimate and value, the top keywords it already ranks for with position and traffic, top pages, traffic by country, and a monthly traffic history - as normalized JSON.
   *
   * Price: $0.00006 per request plus $0.00495 per result (maximum $0.00501).
   *
   * @example
   * const res = await client.ahrefs.traffic({ url: "ahrefs.com", mode: "subdomains" });
   */
  traffic(
    input: AhrefsTrafficInput,
    options?: RequestOptions,
  ): Promise<RunResult<AhrefsTrafficData>> {
    return this._core.run("ahrefs.traffic", input, options);
  }
}
