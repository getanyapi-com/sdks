// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Brave Search (brave.search).
 */
export interface BraveSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * ISO-3166 alpha-2 country Brave searches from, e.g. US, GB, DE. Brave ranks and localizes results for that country. Only the countries Brave offers are accepted; US is served by every source and the others by the sources that can target them.
   * One of: AR, AU, AT, BE, BR, CA, CL, CN, DK, FI, FR, DE, GR, HK, IN, ID, IT, JP, KR, MY, MX, NL, NZ, NO, PL, PT, PH, RU, SA, SG, ZA, ES, SE, CH, TW, TR, GB, US.
   * Default: US.
   */
  country?:
    | "AR"
    | "AU"
    | "AT"
    | "BE"
    | "BR"
    | "CA"
    | "CL"
    | "CN"
    | "DK"
    | "FI"
    | "FR"
    | "DE"
    | "GR"
    | "HK"
    | "IN"
    | "ID"
    | "IT"
    | "JP"
    | "KR"
    | "MY"
    | "MX"
    | "NL"
    | "NZ"
    | "NO"
    | "PL"
    | "PT"
    | "PH"
    | "RU"
    | "SA"
    | "SG"
    | "ZA"
    | "ES"
    | "SE"
    | "CH"
    | "TW"
    | "TR"
    | "GB"
    | "US";
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of organic results to return (1-20, default 20). Brave serves about 20 organic results per page, and some queries carry fewer.
   * Range: minimum 1, maximum 20.
   * Default: 20.
   */
  limit?: number;
  /**
   * Which page of Brave results to return, starting at 1 (up to 10); a page holds about 20 results. Each page is billed as one request. Pages after the first are served only for country US, by the one source that continues each page exactly where the last ended. A limit below the page size drops the rest of that page, so keep the default limit to walk every result.
   * Range: minimum 1, maximum 10.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The Brave search query.
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `relatedSearches` or `publishedUtc`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a record that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "durationSeconds"
    | "image"
    | "publishedUtc"
    | "relatedSearches"
    | "source"
    | "videos"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface BraveSearchItem {
  /**
   * The URL as Brave displays it under the title, e.g. a host or a breadcrumb path. Its format differs by source. null when the source did not send one.
   */
  displayUrl: string | null;
  /**
   * Host of the result URL without a leading www., e.g. runnersworld.com.
   */
  domain: string | null;
  /**
   * 1-based rank of the result. On page 2 and later, some sources count from the top of page 1 and others from the top of the page returned. Populated whenever the provider has data for the entity.
   */
  position: number;
  /**
   * Page date Brave shows for the result. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. null when Brave shows no date or the source that answered cannot report it.
   */
  publishedUtc?: number | null;
  /**
   * Text excerpt Brave shows under the result, often led by the page date. Absent on the results where Brave shows none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  snippet?: string;
  /**
   * Result title as Brave shows it. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Destination URL of the result. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

export interface BraveSearchVideo {
  /**
   * Video length in seconds; null when Brave shows none.
   */
  durationSeconds?: number | null;
  /**
   * Thumbnail image URL.
   */
  image?: string | null;
  /**
   * Date Brave shows for the video. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. null when Brave shows no date.
   */
  publishedUtc?: number | null;
  /**
   * Site hosting the video, e.g. YouTube.
   */
  source?: string | null;
  /**
   * Video title as Brave shows it.
   */
  title?: string | null;
  /**
   * URL of the video page.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Brave Search (brave.search).
 */
export interface BraveSearchData {
  /**
   * Organic results in Brave's ranked order. Ads are not included. Populated whenever the provider has data for the entity.
   */
  items: BraveSearchItem[];
  /**
   * The query Brave searched.
   */
  query: string;
  /**
   * Brave's related searches for the query. An empty array means Brave showed none; null means the source that answered cannot report them.
   */
  relatedSearches?: string[] | null;
  /**
   * Video results Brave shows for the query. An empty array means Brave showed none; null means the source that answered cannot report them.
   */
  videos?: BraveSearchVideo[] | null;
}

/**
 * Typed methods for the brave platform. Attached to the AnyAPI client as
 * `client.brave`.
 */
export class BraveNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Brave Search
   *
   * Run a Brave web search and get the ranked organic results (title, URL, snippet, position, display URL, domain) as clean JSON. Brave answers from its own independent index. Returns up to 20 results per call, with related searches and video results where the source has them; page deeper with page and pick the country Brave searches from.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.brave.search({ query: "best running shoes", country: "US", limit: 20 });
   */
  search(
    input: BraveSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<BraveSearchData>> {
    return this._core.run("brave.search", input, options);
  }
}
