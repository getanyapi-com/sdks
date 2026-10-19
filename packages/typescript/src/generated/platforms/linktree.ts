// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Linktree Profile (linktree.profile).
 */
export interface LinktreeProfileInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `title`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a page that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: ("locked" | "thumbnailUrl" | "title")[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The Linktree profile URL, e.g. https://linktr.ee/mkbhd.
   */
  url: string;
}

export interface LinktreeProfileLink {
  /**
   * Link card id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * True when Linktree locks the card and withholds its destination. Null when this source does not report it.
   */
  locked?: boolean | null;
  /**
   * Card thumbnail URL; null when none is set or when this source does not report it.
   */
  thumbnailUrl?: string | null;
  /**
   * Card title; null when none is set.
   */
  title?: string | null;
  /**
   * Linktree card type, e.g. CLASSIC, HEADER, GROUP or YOUTUBE_VIDEO. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  type?: string;
  /**
   * Where the card links to; null for headers, groups and locked cards. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Linktree Profile (linktree.profile).
 */
export interface LinktreeProfileData {
  /**
   * Apple Music artist URL listed in the page's social icons; null when none.
   */
  appleMusic?: string | null;
  /**
   * Apple Podcasts show URL listed in the page's social icons; null when none.
   */
  applePodcast?: string | null;
  /**
   * Profile picture URL; null when none is set. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  avatarUrl?: string | null;
  /**
   * The page's bio as plain text; null when none is set.
   */
  description?: string | null;
  /**
   * Contact email listed on the page; null when none is listed.
   */
  email?: string | null;
  /**
   * Facebook page URL listed in the page's social icons; null when none.
   */
  facebook?: string | null;
  /**
   * Linktree account id.
   */
  id?: string;
  /**
   * Instagram profile URL listed in the page's social icons; null when none.
   */
  instagram?: string | null;
  /**
   * LinkedIn profile URL listed in the page's social icons; null when none.
   */
  linkedin?: string | null;
  /**
   * The page's link cards in page order. Headers and group cards have no url. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  links?: LinktreeProfileLink[];
  /**
   * SoundCloud profile URL listed in the page's social icons; null when none.
   */
  soundcloud?: string | null;
  /**
   * Spotify artist or show URL listed in the page's social icons; null when none.
   */
  spotify?: string | null;
  /**
   * TikTok profile URL listed in the page's social icons; null when none.
   */
  tiktok?: string | null;
  /**
   * The account's timezone as the page reports it, e.g. America/New_York.
   */
  timezone?: string | null;
  /**
   * The page's title; the username when none is set. Null when this source does not report it.
   */
  title?: string | null;
  /**
   * Twitch channel URL listed in the page's social icons; null when none.
   */
  twitch?: string | null;
  /**
   * The page's Linktree username. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * Creator categories picked on Linktree, e.g. Creator or Music.
   */
  verticals?: string[];
  /**
   * X (Twitter) profile URL listed in the page's social icons; null when none.
   */
  x?: string | null;
  /**
   * YouTube channel URL listed in the page's social icons; null when none.
   */
  youtube?: string | null;
  [extra: string]: unknown;
}

/**
 * Typed methods for the linktree platform. Attached to the AnyAPI client as
 * `client.linktree`.
 */
export class LinktreeNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Linktree Profile
   *
   * Get a public Linktree page by URL: title, bio, picture, contact email, linked social accounts, and every link card with its destination.
   *
   * Price: $0.0011 per request.
   *
   * @example
   * const res = await client.linktree.profile({ url: "https://linktr.ee/mkbhd" });
   */
  profile(
    input: LinktreeProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<LinktreeProfileData>> {
    return this._core.run("linktree.profile", input, options);
  }
}
