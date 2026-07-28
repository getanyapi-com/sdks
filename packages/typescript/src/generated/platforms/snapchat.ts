// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type SnapchatProfileData = unknown;

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
   * Price: $0.001 per request plus $0.002 per result (maximum $0.003).
   *
   * @example
   * const res = await client.snapchat.profile({ username: "nasa" });
   */
  profile(
    input: SnapchatProfileInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<SnapchatProfileData>> {
    return this._core.run(
      "snapchat.profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SnapchatProfileData>>;
  }
}
