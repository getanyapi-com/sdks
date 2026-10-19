// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for DuckDuckGo Search (duckduckgo.search).
 */
export interface DuckduckgoSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * ISO-3166 alpha-2 country DuckDuckGo searches from, e.g. US, GB, DE: DuckDuckGo's region for that country in its main language (Belgium in Dutch, Canada and the US in English, Switzerland in German, Spain in Spanish). Only the countries DuckDuckGo offers are accepted; every country is served by most sources and US, GB and DE by all of them.
   * One of: AR, AU, AT, BE, BR, BG, CA, CL, CN, CO, HR, CZ, DK, EE, FI, FR, DE, GR, HK, HU, IS, IN, ID, IE, IL, IT, JP, KR, LV, LT, MY, MX, NL, NZ, NO, PK, PE, PH, PL, PT, RO, RU, SA, SG, SK, SI, ZA, ES, SE, CH, TW, TH, TR, US, UA, GB, VN.
   * Default: US.
   */
  country?:
    | "AR"
    | "AU"
    | "AT"
    | "BE"
    | "BR"
    | "BG"
    | "CA"
    | "CL"
    | "CN"
    | "CO"
    | "HR"
    | "CZ"
    | "DK"
    | "EE"
    | "FI"
    | "FR"
    | "DE"
    | "GR"
    | "HK"
    | "HU"
    | "IS"
    | "IN"
    | "ID"
    | "IE"
    | "IL"
    | "IT"
    | "JP"
    | "KR"
    | "LV"
    | "LT"
    | "MY"
    | "MX"
    | "NL"
    | "NZ"
    | "NO"
    | "PK"
    | "PE"
    | "PH"
    | "PL"
    | "PT"
    | "RO"
    | "RU"
    | "SA"
    | "SG"
    | "SK"
    | "SI"
    | "ZA"
    | "ES"
    | "SE"
    | "CH"
    | "TW"
    | "TH"
    | "TR"
    | "US"
    | "UA"
    | "GB"
    | "VN";
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of organic results to return (1-10, default 10). DuckDuckGo serves about 10 organic results per page, and some queries carry fewer.
   * Range: minimum 1, maximum 10.
   * Default: 10.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The DuckDuckGo search query.
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface DuckduckgoSearchItem {
  /**
   * The URL as DuckDuckGo displays it under the title, e.g. a host or a host and path. Its format differs by source. null when the source did not send one.
   */
  displayUrl: string | null;
  /**
   * Host of the result URL without a leading www., e.g. runnersworld.com.
   */
  domain: string | null;
  /**
   * 1-based rank of the result on the page. Populated whenever the provider has data for the entity.
   */
  position: number;
  /**
   * Text excerpt DuckDuckGo shows under the result. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  snippet?: string;
  /**
   * Result title as DuckDuckGo shows it. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Destination URL of the result. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of DuckDuckGo Search (duckduckgo.search).
 */
export interface DuckduckgoSearchData {
  /**
   * Organic results in DuckDuckGo's ranked order. Ads are not included. Populated whenever the provider has data for the entity.
   */
  items: DuckduckgoSearchItem[];
  /**
   * The query DuckDuckGo searched.
   */
  query: string;
}

/**
 * Typed methods for the duckduckgo platform. Attached to the AnyAPI client as
 * `client.duckduckgo`.
 */
export class DuckduckgoNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * DuckDuckGo Search
   *
   * Run a DuckDuckGo web search and get the ranked organic results (title, URL, snippet, position, display URL, domain) as clean JSON, ads left out. Returns up to 10 results per call; pick the country DuckDuckGo searches from.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.duckduckgo.search({ query: "best running shoes", country: "US", limit: 10 });
   */
  search(
    input: DuckduckgoSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<DuckduckgoSearchData>> {
    return this._core.run("duckduckgo.search", input, options);
  }
}
