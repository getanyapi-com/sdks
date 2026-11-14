// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Company Identify - Crustdata v3 (company_identify.crustdata_v3).
 */
export interface CompanyIdentifyCrustdataV3Input {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Company website domain without a scheme or path, e.g. stripe.com. Send exactly one of companyDomain, companyLinkedinUrl, companyId, or companyName.
   */
  companyDomain?: string;
  /**
   * Crustdata company id, as returned in companyId by this or another Crustdata v3 endpoint.
   * Range: minimum 1.
   */
  companyId?: number;
  /**
   * LinkedIn company page URL, e.g. https://www.linkedin.com/company/stripe.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Full company name, including any legal suffix. A name match is a best guess; confirm it against the returned domain or LinkedIn page before relying on it.
   */
  companyName?: string;
  /**
   * Require an exact match on the identifier instead of letting Crustdata decide. Leave unset for automatic matching.
   */
  exactMatch?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

/**
 * The `data` payload of Company Identify - Crustdata v3 (company_identify.crustdata_v3).
 */
export interface CompanyIdentifyCrustdataV3Data {
  /**
   * Crustdata company id. Send it as companyId to identify the same company again.
   */
  companyId: string | null;
  /**
   * Ownership type, e.g. Privately Held or Public Company.
   */
  companyType?: string | null;
  /**
   * Match confidence from 0 to 1. Treat a low score on a name match as a guess.
   */
  confidenceScore?: number | null;
  /**
   * Company description.
   */
  description?: string | null;
  /**
   * Primary website domain, or null when Crustdata holds none for this company.
   */
  domain: string | null;
  /**
   * Every website domain Crustdata links to the company.
   */
  domains?: string[] | null;
  /**
   * Employee count band, e.g. 5001-10000.
   */
  employeeRange?: string | null;
  /**
   * Year the company was founded.
   */
  foundedYear?: number | null;
  /**
   * Company logo URL.
   * Format: uri.
   */
  image?: string | null;
  /**
   * Industries the company operates in.
   */
  industries?: string[] | null;
  /**
   * LinkedIn numeric company id.
   */
  linkedinCompanyId?: string | null;
  /**
   * Company name as shown on its LinkedIn page.
   */
  linkedinProfileName?: string | null;
  /**
   * LinkedIn company page URL.
   * Format: uri.
   */
  linkedinUrl?: string | null;
  /**
   * Markets the company is listed in, e.g. PRIVATE or NASDAQ.
   */
  markets?: string[] | null;
  /**
   * Which kind of identifier produced the match, e.g. domain.
   */
  matchType?: string | null;
  /**
   * Company name.
   */
  name?: string | null;
  /**
   * Company website URL.
   * Format: uri.
   */
  website?: string | null;
  [extra: string]: unknown;
}

/**
 * Typed methods for the company_identify platform. Attached to the AnyAPI client as
 * `client.companyIdentify`.
 */
export class CompanyIdentifyNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Company Identify - Crustdata v3
   *
   * Resolve one company from its domain, LinkedIn company page, Crustdata company id, or name to its Crustdata id, primary domain, LinkedIn page, and basic profile. Identify a company for $1 per 1,000 requests before paying to enrich it.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.companyIdentify.crustdataV3({ companyDomain: "stripe.com" });
   */
  crustdataV3(
    input: CompanyIdentifyCrustdataV3Input,
    options?: RequestOptions,
  ): Promise<RunResult<CompanyIdentifyCrustdataV3Data>> {
    return this._core.run("company_identify.crustdata_v3", input, options);
  }
}
