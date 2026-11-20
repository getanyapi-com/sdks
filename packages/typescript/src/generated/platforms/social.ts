// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Social Profile Finder (social.finder).
 */
export interface SocialFinderInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 10.
   */
  limit?: number;
  /**
   * The profile name or handle to search for across social networks (e.g. johndoe).
   */
  name: string;
  /**
   * Limit the search to one network: askfm, discord, facebook, github, instagram, linkedin, medium, pinterest, steam, threads, tiktok, twitch, or youtube (e.g. instagram); all networks are searched when omitted.
   */
  platform?: string;
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

export interface SocialFinderItem {
  /**
   * The name that was searched for. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  inputProfileName?: string | null;
  /**
   * The social network checked (e.g. discord, facebook, github). Populated whenever the provider has data for the entity.
   */
  social: string | null;
  /**
   * URL of the matching profile, or null when no account was found on that network.
   */
  socialProfileUrl: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Social Profile Finder (social.finder).
 */
export interface SocialFinderData {
  /**
   * Profile match records: the queried profile name, the social network, and the matching profile URL when one was found. Populated whenever the provider has data for the entity.
   */
  items: SocialFinderItem[];
}

/**
 * Typed methods for the social platform. Attached to the AnyAPI client as
 * `client.social`.
 */
export class SocialNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Social Profile Finder
   *
   * Find a person's or brand's profiles across major social networks from a single name, returned as normalized JSON.
   *
   * Price: $0.0012 per request plus $0.0024 per result (maximum $0.0252).
   *
   * @example
   * const res = await client.social.finder({ name: "Elon Musk", limit: 3 });
   */
  finder(
    input: SocialFinderInput,
    options?: RequestOptions,
  ): Promise<RunResult<SocialFinderData>> {
    return this._core.run("social.finder", input, options);
  }
}
