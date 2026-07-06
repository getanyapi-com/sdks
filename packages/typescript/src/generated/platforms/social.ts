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
}

export interface SocialFinderItem {
  /**
   * The name that was searched for.
   * Populated whenever the provider returns data.
   */
  inputProfileName?: string;
  /**
   * The social network checked (e.g. discord, facebook, github).
   * Populated whenever the provider returns data.
   */
  social: string;
  /**
   * URL of the matching profile, or null when no account was found on that network.
   */
  socialProfileUrl: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Social Profile Finder (social.finder).
 */
export interface SocialFinderData {
  /**
   * Profile match records: the queried profile name, the social network, and the matching profile URL when one was found.
   * Populated whenever the provider returns data.
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
   * Find a person's or brand's profiles across major social networks from a single name, returned as normalized JSON with flat per-request USD pricing.
   *
   * Price: $0.001 per request plus $0.002 per result.
   *
   * @example
   * const res = await client.social.finder({"limit":3,"name":"Elon Musk"});
   */
  finder(
    input: SocialFinderInput,
    options?: RequestOptions,
  ): Promise<RunResult<SocialFinderData>> {
    return this._core.run("social.finder", input, options);
  }
}
