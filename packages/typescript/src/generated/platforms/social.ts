// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type SocialFinderData = unknown;

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
   * Price: $0.001 per request plus $0.002 per result (maximum $0.021).
   *
   * @example
   * const res = await client.social.finder({ name: "Elon Musk", limit: 3 });
   */
  finder(
    input: SocialFinderInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SocialFinderData>> {
    return this._core.run(
      "social.finder",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SocialFinderData>>;
  }
}
