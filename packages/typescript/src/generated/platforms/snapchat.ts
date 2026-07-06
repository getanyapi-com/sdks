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

/**
 * A public Snapchat profile: url, handle, displayName, bio, subscribers, avatarUrl, and recent public stories.
 */
export interface SnapchatProfileItem {
  /**
   * URL of the profile avatar image.
   * Present whenever the upstream returns this record.
   */
  avatarUrl?: string;
  /**
   * The profile's public bio / description text.
   * Present whenever the upstream returns this record.
   */
  bio?: string;
  /**
   * The profile's public display name.
   * Present whenever the upstream returns this record.
   */
  displayName?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  handle?: string;
  /**
   * Recent public stories, each with its snaps (media items).
   */
  stories?: SnapchatProfileStorie[];
  /**
   * Public subscriber count.
   */
  subscribers?: number;
  url: string;
  [extra: string]: unknown;
}

export interface SnapchatProfileStorie {
  /**
   * Story identifier.
   */
  id?: string;
  /**
   * The snaps (media items) in this story.
   */
  snaps?: SnapchatProfileSnap[];
  /**
   * Story title.
   */
  storyTitle?: string;
  /**
   * Story thumbnail image URL.
   */
  thumbnailUrl?: string;
  [extra: string]: unknown;
}

export interface SnapchatProfileSnap {
  /**
   * Snap identifier.
   */
  id?: string;
  /**
   * Full-resolution media URL.
   */
  mediaUrl?: string;
  /**
   * Preview/thumbnail media URL.
   */
  previewUrl?: string;
  /**
   * Snap timestamp (ISO 8601).
   */
  timestamp?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Snapchat Profile (snapchat.profile).
 */
export interface SnapchatProfileData {
  /**
   * Profile records: public profile URL, handle, display name, bio, subscriber count, avatar, and recent public stories.
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
   * Fetch a Snapchat user's public profile by username - display name, bio, subscriber count, and recent public content - with transparent per-request USD pricing.
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
