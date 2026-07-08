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
   * Story thumbnail image URL, with tracking query params stripped.
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
   * Fetch a Snapchat user's public profile by username - display name, bio, subscriber count, and recent public content.

**Price:** billed per result - $1.00 per 1,000 requests base + $2.00 per 1,000 results, capped at $3.00 per 1,000 requests.
   *
   * Price: $0.001 per request plus $0.002 per result.
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
