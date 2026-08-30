// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Snapchat Profile (snapchat.profile).
 */
export interface SnapchatProfileInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The Snapchat username or profile URL to look up (e.g. fcbarcelona or https://www.snapchat.com/add/fcbarcelona).
   */
  username: string;
}

export interface SnapchatProfileItem {
  /**
   * The profile's public bio / description text. Empty when the profile has none.
   */
  bio?: string;
  /**
   * The profile's category (e.g. "Government Org"). Empty when the upstream omits it.
   */
  category?: string;
  /**
   * The profile's public display name. Populated whenever the provider has data for the entity.
   */
  displayName: string;
  /**
   * The profile's Snapchat username (add-me handle). Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * URL of the profile avatar image, with tracking query params stripped. Empty when the upstream omits it.
   */
  image?: string;
  /**
   * Recent public stories on the profile.
   */
  stories?: SnapchatProfileStorie[];
  /**
   * Public subscriber count.
   */
  subscribers?: number;
  /**
   * Canonical public profile URL, with tracking query params stripped. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * The profile's linked website URL. Empty when the profile has none.
   */
  website?: string;
  [extra: string]: unknown;
}

export interface SnapchatProfileStorie {
  /**
   * Story identifier.
   */
  id?: string;
  /**
   * Story title. Empty when the story has no title.
   */
  storyTitle?: string;
  /**
   * Story thumbnail image URL, preserving signed delivery parameters required to load the preview.
   */
  thumbnailUrl?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Snapchat Profile (snapchat.profile).
 */
export interface SnapchatProfileData {
  /**
   * Profile record for the requested Snapchat username (one item). Populated whenever the provider has data for the entity.
   */
  items: SnapchatProfileItem[];
}

/**
 * Typed methods for the snapchat platform. Attached to the AnyAPI client as
 * `client.snapchat`.
 */
export class SnapchatNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Snapchat Profile
   *
   * Fetch a Snapchat user's public profile by username: display name, bio, subscriber count, and recent public content.
   *
   * Price: $0.0011 per request plus $0.0022 per result (maximum $0.0033).
   *
   * @example
   * const res = await client.snapchat.profile({ username: "nasa" });
   */
  profile(
    input: SnapchatProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<SnapchatProfileData>> {
    return this._core.run("snapchat.profile", input, options);
  }
}
