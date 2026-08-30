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
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface SocialFinderItem {
  /**
   * The name that was searched for. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  inputProfileName?: string;
  /**
   * The social network checked (e.g. discord, facebook, github). Populated whenever the provider has data for the entity.
   */
  social: string;
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
   * Price: $0.0011 per request plus $0.0022 per result (maximum $0.0231).
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
