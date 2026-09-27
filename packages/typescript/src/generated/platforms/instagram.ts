// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Instagram Reels by Audio (instagram.audio_reels).
 */
export interface InstagramAudioReelsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Audio identifier from the Instagram audio page URL.
   */
  audioId: string;
  /**
   * Pagination cursor returned by a previous response.
   */
  cursor?: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramAudioReelsReel {
  /**
   * Profile picture URL of the reel's author.
   */
  avatarUrl?: string;
  /**
   * Reel caption text.
   */
  caption?: string;
  code: string;
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Display name of the reel's author.
   */
  displayName?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Thumbnail image URL for the reel.
   */
  image?: string;
  likes: number;
  plays: number;
  /**
   * True when the author's account carries a verified badge.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Reels by Audio (instagram.audio_reels).
 */
export interface InstagramAudioReelsData {
  hasMore: boolean;
  /**
   * Opaque cursor for the next page of reels, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  reels: InstagramAudioReelsReel[];
}

/**
 * Input for Instagram Basic Profile (instagram.basic_profile).
 */
export interface InstagramBasicProfileInput {
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Instagram numeric user id (the account's internal all-digits id, e.g. 314216), NOT the @handle or profile URL. Passing a handle here returns no profile.
   */
  userId: string;
}

/**
 * The `data` payload of Instagram Basic Profile (instagram.basic_profile).
 */
export interface InstagramBasicProfileData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  bio: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  displayName: string;
  externalUrl: string;
  followers: number;
  following: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  handle: string;
  private: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  userId: string;
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Comment Replies (instagram.comment_replies).
 */
export interface InstagramCommentRepliesInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Instagram comment ID (a comment's id from the Instagram Post Comments endpoint).
   */
  commentId: string;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Full Instagram post or reel URL the comment belongs to.
   */
  url: string;
}

export interface InstagramCommentRepliesComment {
  /**
   * Username of the account that wrote the reply, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * URL of the replying account's profile avatar image.
   */
  avatarUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * The reply's Instagram comment ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of likes on the reply. Omitted when no like count is reported for the reply.
   */
  likes?: number;
  /**
   * The reply's text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Instagram user id of the replying account.
   */
  userId?: string;
  /**
   * Whether the reply's author has a verified badge.
   */
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Comment Replies (instagram.comment_replies).
 */
export interface InstagramCommentRepliesData {
  /**
   * Replies to the requested comment, oldest first. Populated whenever the provider has data for the entity.
   */
  comments: InstagramCommentRepliesComment[];
  /**
   * Opaque cursor for the next page of replies, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for Instagram Profile Embed (instagram.embed).
 */
export interface InstagramEmbedInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Instagram username without the leading @.
   */
  handle: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

/**
 * The `data` payload of Instagram Profile Embed (instagram.embed).
 */
export interface InstagramEmbedData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  html: string;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Followers (instagram.followers).
 */
export interface InstagramFollowersInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Today every source behind this endpoint returns a single page of about 50 followers and no continuation cursor, so nextCursor comes back empty and there is no further page to request; this parameter is accepted but has nothing to resume from.
   */
  cursor?: string;
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `private`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a profile that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. On a paginated walk it applies to the first page only; later pages stay with the source that page chose, at the price it was quoted.
   */
  requireFields?: (
    "image" | "name" | "nextCursor" | "private" | "url" | "verified"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The Instagram username, user ID, or profile URL whose followers to list (e.g. natgeo).
   */
  username: string;
}

export interface InstagramFollowersItem {
  /**
   * The follower's username, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * The follower's numeric Instagram user ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the follower's profile picture, with tracking query params stripped. Empty when the upstream omits it.
   */
  image?: string;
  /**
   * The follower's display name. Empty when the account has none.
   */
  name?: string;
  /**
   * Whether the follower's account is private.
   */
  private?: boolean;
  /**
   * Canonical URL of the follower's profile, with tracking query params stripped. Empty when the lane does not return it.
   */
  url?: string;
  /**
   * Whether the follower's account is verified.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Followers (instagram.followers).
 */
export interface InstagramFollowersData {
  /**
   * Follower records for the target account. About the first 50, in the order the source returns them, not the account's full follower list - see nextCursor. Populated whenever the provider has data for the entity.
   */
  items: InstagramFollowersItem[];
  /**
   * Opaque cursor for the next page of followers, or null/empty when there are no more. Empty on every source behind this endpoint today, because each returns a single page of about 50 followers and no continuation. Pass it back as cursor whenever it is non-empty.
   */
  nextCursor?: string | null;
}

/**
 * Input for Instagram Following (instagram.following).
 */
export interface InstagramFollowingInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Opaque pagination cursor from a previous response's nextCursor. Today every source behind this endpoint returns a single page of about 50 accounts and no continuation cursor, so nextCursor comes back empty and there is no further page to request; this parameter is accepted but has nothing to resume from.
   */
  cursor?: string;
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `private`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a profile that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge. On a paginated walk it applies to the first page only; later pages stay with the source that page chose, at the price it was quoted.
   */
  requireFields?: (
    "image" | "name" | "nextCursor" | "private" | "url" | "verified"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The Instagram username, user ID, or profile URL whose following list to fetch (e.g. natgeo).
   */
  username: string;
}

export interface InstagramFollowingItem {
  /**
   * The followed account's username, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * The followed account's numeric Instagram user ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the followed account's profile picture, with tracking query params stripped. Empty when the upstream omits it.
   */
  image?: string;
  /**
   * The followed account's display name. Empty when the account has none.
   */
  name?: string;
  /**
   * Whether the followed account is private.
   */
  private?: boolean;
  /**
   * Canonical URL of the followed account's profile, with tracking query params stripped. Empty when the lane does not return it.
   */
  url?: string;
  /**
   * Whether the followed account is verified.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Following (instagram.following).
 */
export interface InstagramFollowingData {
  /**
   * Records for the accounts the target user follows. About the first 50, in the order the source returns them, not the user's full following list - see nextCursor. Populated whenever the provider has data for the entity.
   */
  items: InstagramFollowingItem[];
  /**
   * Opaque cursor for the next page of results, or null/empty when there are no more. Empty on every source behind this endpoint today, because each returns a single page of about 50 accounts and no continuation. Pass it back as cursor whenever it is non-empty.
   */
  nextCursor?: string | null;
}

/**
 * Input for Instagram Hashtag Analytics (instagram.hashtag_analytics).
 */
export interface InstagramHashtagAnalyticsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * The Instagram hashtag to analyze, with or without the # symbol (e.g. streetphotography).
   */
  hashtag: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramHashtagAnalyticsItem {
  difficulty?: string;
  /**
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  id?: string;
  /**
   * Hashtag (without #). Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Total posts using the hashtag.
   */
  postsCount?: number;
  /**
   * Human-formatted post count (e.g. 793.54 M). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  postsFormatted?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Hashtag Analytics (instagram.hashtag_analytics).
 */
export interface InstagramHashtagAnalyticsData {
  /**
   * Hashtag analytics records: hashtag name, total post count, and related hashtag suggestions. Populated whenever the provider has data for the entity.
   */
  items: InstagramHashtagAnalyticsItem[];
}

/**
 * Input for Instagram Hashtag Recent Posts (instagram.hashtag_recent_posts).
 */
export interface InstagramHashtagRecentPostsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Hashtag to monitor, without the leading #.
   */
  hashtag: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramHashtagRecentPostsPost {
  /**
   * Profile picture URL of the author.
   */
  avatarUrl?: string;
  /**
   * Post caption text, including its hashtags. Populated whenever the provider has data for the entity.
   */
  caption: string;
  /**
   * Number of items in the carousel. Absent on a single-image post.
   */
  carouselCount?: number;
  /**
   * Comment count. Usually zero on a post this new.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Display name of the author.
   */
  displayName?: string;
  /**
   * Hashtags carried in the caption, each including its leading #. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  hashtags?: string[];
  /**
   * Original pixel height of the media.
   */
  height?: number;
  /**
   * Instagram media id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Like count. Usually zero on a post this new.
   */
  likes?: number;
  /**
   * Latitude of the tagged place.
   */
  locationLat?: number;
  /**
   * Longitude of the tagged place.
   */
  locationLng?: number;
  /**
   * Place name tagged on the post. Absent when the poster tagged none, which is most posts.
   */
  locationName?: string;
  /**
   * Cover media for the post. A carousel reports its full size in carouselCount.
   */
  media?: InstagramHashtagRecentPostsMedia[];
  /**
   * True when the post is tagged as a paid partnership.
   */
  paidPartnership?: boolean;
  /**
   * True when the author's account is private.
   */
  private?: boolean;
  /**
   * Instagram product type of the media, for example feed, clips or igtv.
   */
  productType?: string;
  /**
   * Short code in the post permalink. Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * Canonical permalink to the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Instagram user id of the author.
   */
  userId?: string;
  /**
   * Username of the account that posted. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * True when the author's account carries a verified badge.
   */
  verified?: boolean;
  /**
   * Original pixel width of the media.
   */
  width?: number;
  [extra: string]: unknown;
}

export interface InstagramHashtagRecentPostsMedia {
  /**
   * One of photo or video. Videos are rare in this feed; Instagram keeps reels on a separate tab.
   */
  type: string;
  /**
   * Image URL. For a video this is the cover frame.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Hashtag Recent Posts (instagram.hashtag_recent_posts).
 */
export interface InstagramHashtagRecentPostsData {
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Posts under the hashtag, newest first. Engagement counts are usually zero because the posts are minutes old. Populated whenever the provider has data for the entity.
   */
  posts: InstagramHashtagRecentPostsPost[];
}

/**
 * Input for Instagram Hashtag Top Posts (instagram.hashtag_top_posts).
 */
export interface InstagramHashtagTopPostsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Hashtag to fetch, without the leading #.
   */
  hashtag: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramHashtagTopPostsPost {
  /**
   * Profile picture URL of the posting account. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  avatarUrl?: string;
  /**
   * Post caption text, including its hashtags. Populated whenever the provider has data for the entity.
   */
  caption: string;
  /**
   * Comment count.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Video duration in seconds. Absent on photo posts.
   */
  durationSeconds?: number;
  /**
   * Instagram media id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Like count. Absent when the account hides it.
   */
  likes?: number;
  /**
   * Photo and video attachments on the post.
   */
  media?: InstagramHashtagTopPostsMedia[];
  /**
   * Short code in the post permalink. Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * Canonical permalink to the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Username of the account that posted. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * True when the posting account is verified.
   */
  verified?: boolean;
  /**
   * Play count. Present on video posts.
   */
  views?: number;
  [extra: string]: unknown;
}

export interface InstagramHashtagTopPostsMedia {
  /**
   * One of photo or video.
   */
  type: string;
  /**
   * Image URL. For a video this is the cover frame.
   * Format: uri.
   */
  url: string;
  /**
   * Playable video file URL. Present only for video items.
   * Format: uri.
   */
  videoUrl?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Hashtag Top Posts (instagram.hashtag_top_posts).
 */
export interface InstagramHashtagTopPostsData {
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Top-ranked posts for the hashtag, ordered by Instagram's engagement model rather than by time. Populated whenever the provider has data for the entity.
   */
  posts: InstagramHashtagTopPostsPost[];
}

/**
 * Input for Instagram Highlight Detail (instagram.highlight_detail).
 */
export interface InstagramHighlightDetailInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * The id of the highlight to retrieve details for.
   */
  id: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramHighlightDetailItem {
  /**
   * Instagram media shortcode.
   */
  code?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Video duration in seconds, when the item is a video.
   */
  durationSeconds?: number;
  /**
   * True when the media carries an audio track.
   */
  hasAudio?: boolean;
  /**
   * Media pixel height.
   */
  height?: number;
  /**
   * Media identifier.
   */
  id?: string;
  /**
   * Direct URL to the media image (highest resolution).
   */
  image?: string;
  /**
   * Media type: 1 = image, 2 = video.
   */
  mediaType?: number;
  /**
   * True when the item is tagged as a paid partnership.
   */
  paidPartnership?: boolean;
  /**
   * Instagram product type of the media, for example story.
   */
  productType?: string;
  /**
   * Direct URL to the media video, when the item is a video.
   */
  videoUrl?: string;
  /**
   * Media pixel width.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Highlight Detail (instagram.highlight_detail).
 */
export interface InstagramHighlightDetailData {
  /**
   * Profile picture URL of the account that owns the highlight.
   */
  avatarUrl?: string;
  /**
   * URL of the highlight cover image. Populated whenever the provider has data for the entity.
   */
  coverUrl: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Highlight identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * The media items inside the highlight, in the order the upstream returned them.
   */
  items?: InstagramHighlightDetailItem[];
  /**
   * Number of media items in the highlight.
   */
  mediaCount: number;
  /**
   * Handle of the account that owns the highlight. Populated whenever the provider has data for the entity.
   */
  ownerHandle: string;
  /**
   * Highlight title. Populated whenever the provider has data for the entity.
   */
  title: string;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Location Posts (instagram.location_posts).
 */
export interface InstagramLocationPostsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Instagram location id, as returned by instagram.search_locations.
   */
  locationId: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Order the posts by Instagram's top ranking or by newest first. Defaults to ranked.
   * One of: ranked, recent.
   */
  sort?: "ranked" | "recent";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramLocationPostsPost {
  /**
   * Instagram's generated accessibility description of the media.
   */
  altText?: string;
  /**
   * Username of the account that posted it, without the leading @. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * The author's numeric Instagram account id, as a string.
   */
  authorId?: string;
  /**
   * Whether the author's account is private.
   */
  authorPrivate?: boolean;
  /**
   * Whether the author carries Instagram's verified badge.
   */
  authorVerified?: boolean;
  /**
   * Author's profile picture URL, as Instagram's CDN serves it.
   * Format: uri.
   */
  avatarUrl?: string;
  /**
   * Post caption text.
   */
  caption: string;
  /**
   * Whether the caption has been edited since posting.
   */
  captionEdited?: boolean;
  /**
   * Number of slides, present on carousel posts only.
   */
  carouselCount?: number;
  /**
   * Accounts listed as coauthors of the post.
   */
  coauthors?: InstagramLocationPostsCoauthor[];
  /**
   * Number of comments on the post.
   */
  comments: number;
  /**
   * Whether the author has hidden the like and view counts.
   */
  countsHidden?: boolean;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Whether the video carries an audio track.
   */
  hasAudio?: boolean;
  /**
   * Media height in pixels.
   */
  height?: number;
  /**
   * The post's numeric Instagram media ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Post image or video thumbnail URL, as Instagram's CDN serves it. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Number of likes on the post.
   */
  likes: number;
  /**
   * Instagram location id the post is tagged at.
   */
  locationId?: string;
  /**
   * Latitude of the tagged location, in decimal degrees.
   */
  locationLat?: number;
  /**
   * Longitude of the tagged location, in decimal degrees.
   */
  locationLng?: number;
  /**
   * Name of the location the post is tagged at.
   */
  locationName?: string;
  /**
   * What the post is: photo, video or carousel.
   */
  mediaType?: string;
  /**
   * Whether the post is tagged as a paid partnership.
   */
  paidPartnership?: boolean;
  /**
   * Instagram's own surface label for the post, such as feed, clips or carousel_container.
   */
  productType?: string;
  /**
   * The post's short code, the segment Instagram puts in its URL.
   */
  shortcode?: string;
  /**
   * Accounts tagged in the media.
   */
  taggedUsers?: InstagramLocationPostsTaggedUser[];
  /**
   * Canonical URL of the post. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * Direct video file URL, present on video posts and reels only.
   * Format: uri.
   */
  videoUrl?: string;
  /**
   * Media width in pixels.
   */
  width?: number;
  [extra: string]: unknown;
}

export interface InstagramLocationPostsCoauthor {
  /**
   * Coauthor's profile picture URL, as Instagram's CDN serves it.
   * Format: uri.
   */
  avatarUrl?: string;
  /**
   * Instagram's numeric account id, as a string.
   */
  userId?: string;
  /**
   * Instagram username without the leading @.
   */
  username: string;
  [extra: string]: unknown;
}

export interface InstagramLocationPostsTaggedUser {
  /**
   * Account display name.
   */
  displayName?: string;
  /**
   * Instagram's numeric account id, as a string.
   */
  userId?: string;
  /**
   * Instagram username without the leading @.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Location Posts (instagram.location_posts).
 */
export interface InstagramLocationPostsData {
  /**
   * Opaque cursor for the next page of posts, or null when there are no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Public posts tagged at the location. Populated whenever the provider has data for the entity.
   */
  posts: InstagramLocationPostsPost[];
}

/**
 * Input for Instagram Media Transcript (instagram.media_transcript).
 */
export interface InstagramMediaTranscriptInput {
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Instagram post or reel URL.
   */
  url: string;
}

export interface InstagramMediaTranscriptTranscript {
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Media Transcript (instagram.media_transcript).
 */
export interface InstagramMediaTranscriptData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  transcripts: InstagramMediaTranscriptTranscript[];
}

/**
 * Input for Instagram Post (instagram.post).
 */
export interface InstagramPostInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Set true to also get the post's video on a hosted MP4 link that plays without an Instagram session. The file is downloaded and stored for you, and the response adds `hostedUrl`, `expiresUtc` and `bytes`. It is charged as an extra on top of the price, and it never changes which source serves you: every source offers it at the same price. A post with no video, or a post that does not exist, is refused with no charge rather than billed for a file that cannot exist. Omit it and nothing is downloaded, nothing is stored, and nothing extra is charged.
   * Default: false.
   */
  hostVideo?: boolean;
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `plays`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a post that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "avatarUrl"
    | "comments"
    | "createdUtc"
    | "displayName"
    | "hasAudio"
    | "likes"
    | "locationId"
    | "locationName"
    | "paidPartnership"
    | "plays"
    | "productType"
    | "shortcode"
    | "type"
    | "userId"
    | "verified"
    | "videoUrl"
  )[];
  /**
   * Deprecated; send `requireFields: ["plays"]` instead, which does exactly the same thing. Set true to be served only by a source that reports a reel's play count. Omit it and routing is unchanged, with the cheapest source serving, which does not carry play counts, so `plays` is absent from its responses. This can raise your price: opting in routes to a source that reports the count, and you are quoted and charged its price. It stays accepted so callers that already send it keep working.
   */
  requirePlayCount?: boolean;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Full Instagram post or reel URL, carrying the media shortcode: /p/, /reel/, /reels/, or /tv/. A profile URL such as https://www.instagram.com/username names no post, so it is rejected instead of charged for an empty result - send that account's handle to instagram.profile, or its posts to instagram.user_posts.
   */
  url: string;
}

/**
 * The `data` payload of Instagram Post (instagram.post).
 */
export interface InstagramPostData {
  /**
   * Profile picture URL of the posting account.
   */
  avatarUrl?: string;
  /**
   * Size of the hosted MP4 in bytes. Present only when the request set `hostVideo` to true.
   */
  bytes?: number;
  /**
   * Number of comments on the post.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Display name of the posting account.
   */
  displayName?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  displayUrl: string;
  /**
   * When `hostedUrl` stops working, as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Present only when the request set `hostVideo` to true.
   */
  expiresUtc?: number;
  /**
   * True when the media carries an audio track.
   */
  hasAudio?: boolean;
  /**
   * AnyAPI-hosted MP4 of this post's video, playable without an Instagram session. Present only when the request set `hostVideo` to true.
   * Format: uri.
   */
  hostedUrl?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Instagram id of the tagged place, when the post tags one.
   */
  locationId?: string;
  /**
   * Name of the tagged place, when the post tags one.
   */
  locationName?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  owner: string;
  /**
   * True when the post is tagged as a paid partnership.
   */
  paidPartnership?: boolean;
  /**
   * Number of plays of the reel or video. Absent when Instagram does not expose a play count for this media, and on lanes that cannot serve it.
   */
  plays?: number;
  /**
   * Instagram product type of the media, for example feed, clips or igtv.
   */
  productType?: string;
  shortcode: string;
  type: string;
  /**
   * Instagram user id of the posting account.
   */
  userId?: string;
  /**
   * True when the posting account carries a verified badge.
   */
  verified?: boolean;
  videoUrl: string;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Post Comments (instagram.post_comments).
 */
export interface InstagramPostCommentsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Full Instagram post or reel URL.
   */
  url: string;
}

export interface InstagramPostCommentsComment {
  /**
   * Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * URL of the commenting account's profile avatar image.
   */
  avatarUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Post Comments (instagram.post_comments).
 */
export interface InstagramPostCommentsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  comments: InstagramPostCommentsComment[];
  /**
   * Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for Instagram Post Likers (instagram.post_likers).
 */
export interface InstagramPostLikersInput {
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Canonical URL of a public Instagram post or reel.
   * Format: uri.
   */
  url: string;
}

export interface InstagramPostLikersLiker {
  /**
   * Profile picture URL, as Instagram's CDN serves it.
   * Format: uri.
   */
  avatarUrl: string;
  /**
   * Account display name.
   */
  displayName: string;
  /**
   * Timestamp of the account's most recent story. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  latestStoryUtc?: number;
  /**
   * Whether the account is private.
   */
  private: boolean;
  /**
   * Instagram's numeric account id, as a string.
   */
  userId: string;
  /**
   * Instagram username without the leading @. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * Whether the account carries Instagram's verified badge.
   */
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Post Likers (instagram.post_likers).
 */
export interface InstagramPostLikersData {
  /**
   * One page of accounts that liked the post. A single call returns one page; it does not walk the whole liker list. Populated whenever the provider has data for the entity.
   */
  likers: InstagramPostLikersLiker[];
  /**
   * Total number of likes on the post, which can exceed the number of likers returned in this page.
   */
  totalLikes: number;
}

/**
 * Input for Instagram Profile (instagram.profile).
 */
export interface InstagramProfileInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Instagram username without the leading @.
   */
  handle: string;
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `contactMethod`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a profile that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "contactMethod"
    | "followers"
    | "following"
    | "isBusiness"
    | "posts"
    | "private"
    | "title"
    | "url"
    | "verified"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramProfileBioLink {
  /**
   * Display label for the link, empty when the account set none.
   */
  title?: string;
  /**
   * Destination URL, exactly as the account published it.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Profile (instagram.profile).
 */
export interface InstagramProfileData {
  /**
   * Profile picture URL at the highest resolution the account exposes. Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  /**
   * Profile biography text. Populated whenever the provider has data for the entity.
   */
  bio: string;
  /**
   * Every link the account publishes in its bio, in the order Instagram returns them. Business accounts often list several here while externalUrl carries only the first. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  bioLinks?: InstagramProfileBioLink[];
  /**
   * Instagram's category label for the account (for example "Government Agencies" or "Coffee shop"). Absent when the account publishes no category. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  category?: string;
  /**
   * The contact button Instagram shows on the profile, for example CALL, TEXT, EMAIL, or UNKNOWN. Absent when the account exposes no contact button. Instagram no longer publishes the underlying email or phone number to unauthenticated callers.
   */
  contactMethod?: string;
  /**
   * Account display name. Populated whenever the provider has data for the entity.
   */
  displayName: string;
  /**
   * The single website link on the profile. Absent when the account publishes no link. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  externalUrl?: string;
  /**
   * Follower count.
   */
  followers: number;
  /**
   * Number of accounts this account follows.
   */
  following: number;
  /**
   * Instagram username without the leading @. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Whether Instagram flags the account as a business account.
   */
  isBusiness?: boolean;
  /**
   * Always 0: none of the sources behind this API returns the account's total post count.
   */
  posts: number;
  /**
   * Whether the account is private.
   */
  private: boolean;
  /**
   * Instagram's numeric account id, as a string. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  userId?: string;
  /**
   * Whether the account carries Instagram's verified badge.
   */
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Profile Contact Info (instagram.profile_contact).
 */
export interface InstagramProfileContactInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Instagram username without the leading @.
   */
  handle: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

/**
 * The `data` payload of Instagram Profile Contact Info (instagram.profile_contact).
 */
export interface InstagramProfileContactData {
  /**
   * Profile biography text.
   */
  bio?: string;
  /**
   * Account display name.
   */
  displayName?: string;
  /**
   * Every email address found for the account: the contact-button address plus any address written into the bio, deduplicated. Empty when the account publishes none. Populated whenever the provider has data for the entity.
   */
  emails: string[];
  /**
   * The website link on the profile. Absent when the account publishes no link.
   */
  externalUrl?: string;
  /**
   * Instagram username without the leading @. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Every phone number found for the account, in E.164 form where the number could be normalized. Empty when the account publishes none.
   */
  phones?: string[];
  /**
   * Whether the account is private.
   */
  private?: boolean;
  /**
   * The address behind the profile's Email contact button, as the account owner entered it. Absent when the account publishes no contact email. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  publicEmail?: string;
  /**
   * The number behind the profile's Call or Text contact button, as the account owner entered it. Absent when the account publishes no contact phone.
   */
  publicPhone?: string;
  /**
   * Whether the account carries Instagram's verified badge.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * Input for Instagram Reel Transcript (instagram.reel_transcript).
 */
export interface InstagramReelTranscriptInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Set true to also get the reel's MP4 on a hosted link you can play without an Instagram session. Charged as an extra on top of the transcript (e.g. true). A photo post has no file to host, so a request that sets this on one is refused with no charge; send it without hostVideo to get the post record instead.
   * Default: false.
   */
  hostVideo?: boolean;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The URL of a public Instagram reel or video post (e.g. https://www.instagram.com/reel/C8yKXdRxKqK/), or an Instagram CDN media URL you already hold.
   */
  url: string;
  /**
   * Set true to include a precise timestamp for every word in the transcript (e.g. true).
   * Default: false.
   */
  wordTimestamps?: boolean;
}

export interface InstagramReelTranscriptItem {
  /**
   * Size of the hosted MP4 in bytes. Present only when hostVideo was true.
   */
  bytes?: number;
  /**
   * Video duration in seconds. Absent when there is no transcript, which is what measures it.
   */
  durationSeconds?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. After this moment the hosted MP4 is deleted. Present only when hostVideo was true.
   */
  expiresUtc?: number;
  /**
   * A direct link to the downloaded MP4, hosted by AnyAPI and playable without an Instagram session. Present only when hostVideo was true.
   * Format: uri.
   */
  hostedUrl?: string;
  /**
   * The reel's numeric Instagram media ID, as a string. Empty when the request supplied a CDN media URL, which carries no post record. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Detected spoken language (ISO 639-1 code, e.g. "en"). Absent when there is no transcript.
   */
  language?: string;
  /**
   * Number of likes on the reel. Absent when the lane that served the lookup does not carry a like count.
   */
  likeCount?: number;
  /**
   * What kind of media this is, as Instagram labels it (for example a video or an image post). On a photo post this is how you tell that the empty transcript is the answer rather than silence.
   */
  mediaType?: string;
  /**
   * Username of the reel's owner, without the @ prefix. Empty when the request supplied a CDN media URL.
   */
  ownerUsername?: string;
  /**
   * Time-aligned transcript segments in playback order, one per sentence, each with its text, speaker label, and start/end offsets in seconds. A segment starts when its first word is spoken and ends when its last one finishes. Empty when the reel has no detectable spoken audio.
   */
  segments?: InstagramReelTranscriptSegment[];
  /**
   * The reel's short code, the part of its instagram.com URL after /reel/. Empty when the request supplied a CDN media URL.
   */
  shortcode?: string;
  /**
   * The full speech transcript. Empty when the reel has no detectable spoken audio, or when the post is a photo with no video to transcribe. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * A link to the reel's cover image on Instagram. This link is signed by Instagram and stops working after a short time.
   */
  thumbnailUrl?: string;
  /**
   * The reel URL the request asked for, returned as sent. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

export interface InstagramReelTranscriptSegment {
  /**
   * Segment end offset in seconds from the start of the video.
   */
  end?: number;
  /**
   * Which speaker said this segment, as a stable label within this transcript (e.g. "0", "1").
   */
  speaker?: string;
  /**
   * Segment start offset in seconds from the start of the video.
   */
  start?: number;
  /**
   * The segment's transcribed text.
   */
  text?: string;
  /**
   * Every word in the segment with its own timing. Present only when wordTimestamps was true.
   */
  words?: InstagramReelTranscriptWord[];
  [extra: string]: unknown;
}

export interface InstagramReelTranscriptWord {
  /**
   * Word end offset in seconds from the start of the video.
   */
  end?: number;
  /**
   * Word start offset in seconds from the start of the video.
   */
  start?: number;
  /**
   * The word as spoken.
   */
  text?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Reel Transcript (instagram.reel_transcript).
 */
export interface InstagramReelTranscriptData {
  /**
   * Record for the requested reel (one item), with the full transcript text, timed segments, source video metadata, and the hosted video link when hostVideo was asked for. Populated whenever the provider has data for the entity.
   */
  items: InstagramReelTranscriptItem[];
}

/**
 * Input for Instagram Reels Search (instagram.reels_search).
 */
export interface InstagramReelsSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
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
   * Search keyword (e.g. "crossfit").
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramReelsSearchReel {
  /**
   * Profile picture URL of the author.
   */
  avatarUrl?: string;
  /**
   * Reel caption text. Populated whenever the provider has data for the entity.
   */
  caption: string;
  /**
   * Number of comments on the reel.
   */
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Display name of the author.
   */
  displayName?: string;
  /**
   * Reel duration in seconds.
   */
  durationSeconds: number;
  /**
   * True when the reel carries an audio track.
   */
  hasAudio?: boolean;
  /**
   * Reel media identifier.
   */
  id?: string;
  /**
   * Number of likes on the reel.
   */
  likes: number;
  /**
   * True when the reel is a paid partnership.
   */
  paidPartnership: boolean;
  /**
   * Instagram product type of the media, for example clips.
   */
  productType?: string;
  /**
   * Instagram media shortcode. Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * URL of the reel thumbnail image. Populated whenever the provider has data for the entity.
   */
  thumbnail: string;
  /**
   * Canonical URL of the reel. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Instagram user id of the author.
   */
  userId?: string;
  /**
   * Username of the account that posted the reel. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * True when the posting account is verified.
   */
  verified: boolean;
  /**
   * Direct URL to the reel video.
   */
  videoUrl?: string;
  /**
   * Play count of the reel.
   */
  views?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Reels Search (instagram.reels_search).
 */
export interface InstagramReelsSearchData {
  /**
   * Opaque cursor for the next page of reels, or null when this lane has no more. Pass it back as cursor to continue. Instagram relevance-ranks reels search, so a later page can repeat reels from an earlier one.
   */
  nextCursor: string | null;
  /**
   * Reels matching the search. Populated whenever the provider has data for the entity.
   */
  reels: InstagramReelsSearchReel[];
}

/**
 * Input for Instagram Search (instagram.search).
 */
export interface InstagramSearchInput {
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
   * Maximum number of results to return (1-20, default 20).
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Keyword to search Instagram for; one or more words without special punctuation (e.g. coffee roastery).
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * What to search for: user profiles, hashtags, or places (e.g. hashtag).
   * One of: user, hashtag, place.
   * Default: user.
   */
  type?: "user" | "hashtag" | "place";
}

export interface InstagramSearchItem {
  /**
   * The account's bio text. Empty when the account has none.
   */
  bio?: string;
  /**
   * The account's follower count. May be 0 when the lane does not return it in search results.
   */
  followers?: number;
  /**
   * The number of accounts the account follows. May be 0 when the lane does not return it in search results.
   */
  following?: number;
  /**
   * The account's username, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * The account's numeric Instagram user ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the account's profile picture, with tracking query params stripped. Empty when the upstream omits it.
   */
  image?: string;
  /**
   * The account's display name. Empty when the account has none.
   */
  name?: string;
  /**
   * The account's post count. May be 0 when the lane does not return it in search results.
   */
  postsCount?: number;
  /**
   * Canonical URL of the account's profile, with tracking query params stripped. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Whether the account is verified.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Search (instagram.search).
 */
export interface InstagramSearchData {
  /**
   * Matching Instagram profile records for the query. Populated whenever the provider has data for the entity.
   */
  items: InstagramSearchItem[];
}

/**
 * Input for Instagram Search Followers (instagram.search_followers).
 */
export interface InstagramSearchFollowersInput {
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
   * Name or username text to look for among this account's followers (e.g. john). Instagram matches loosely, and on large accounts it does not search followers at all, so the most recent followers come back instead.
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The Instagram username whose followers to search, without the leading @ (e.g. milada2788).
   */
  username: string;
}

export interface InstagramSearchFollowersItem {
  /**
   * The follower's username, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * The follower's numeric Instagram user ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the follower's profile picture. Instagram signs this URL in its query string, so use it as returned. Empty when the source omits it.
   */
  image?: string;
  /**
   * The follower's display name. Empty when the account has none.
   */
  name?: string;
  /**
   * Whether the follower's account is private.
   */
  private?: boolean;
  /**
   * Canonical URL of the follower's profile.
   */
  url?: string;
  /**
   * Whether the follower's account is verified.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Search Followers (instagram.search_followers).
 */
export interface InstagramSearchFollowersData {
  /**
   * Followers of the account that Instagram returned for the query, in Instagram's own order. On smaller accounts these are matches from the whole follower list, and Instagram's matching is loose, so some may not contain the exact query text. On large accounts Instagram does not search followers, so these are the account's most recent followers, whatever the query. Populated whenever the provider has data for the entity.
   */
  items: InstagramSearchFollowersItem[];
}

/**
 * Input for Instagram Search Following (instagram.search_following).
 */
export interface InstagramSearchFollowingInput {
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
   * Name or username text to look for among the accounts this user follows (e.g. skin). Instagram matches loosely, so close matches are returned too.
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The Instagram username whose following list to search, without the leading @ (e.g. moogooskincare).
   */
  username: string;
}

export interface InstagramSearchFollowingItem {
  /**
   * The followed account's username, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * The followed account's numeric Instagram user ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the followed account's profile picture. Instagram signs this URL in its query string, so use it as returned. Empty when the source omits it.
   */
  image?: string;
  /**
   * The followed account's display name. Empty when the account has none.
   */
  name?: string;
  /**
   * Whether the followed account is private.
   */
  private?: boolean;
  /**
   * Canonical URL of the followed account's profile.
   */
  url?: string;
  /**
   * Whether the followed account is verified.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Search Following (instagram.search_following).
 */
export interface InstagramSearchFollowingData {
  /**
   * Accounts the user follows that Instagram matched to the query, in Instagram's own order. Instagram's matching is loose, so some results may not contain the exact query text. Populated whenever the provider has data for the entity.
   */
  items: InstagramSearchFollowingItem[];
}

/**
 * Input for Instagram Hashtag Search (instagram.search_hashtag).
 */
export interface InstagramSearchHashtagInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * Restrict results to posts published within this window.
   * One of: last-hour, last-day, last-week, last-month, last-year.
   */
  datePosted?:
    "last-hour" | "last-day" | "last-week" | "last-month" | "last-year";
  /**
   * Hashtag to search, without the leading #.
   */
  hashtag: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Filter by media type. One of all, reel.
   * One of: all, reel.
   */
  mediaType?: "all" | "reel";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramSearchHashtagPost {
  /**
   * Profile picture URL of the posting account.
   * Format: uri.
   */
  avatarUrl?: string;
  /**
   * Post caption text, including its hashtags.
   */
  caption: string;
  /**
   * Comment count.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Display name of the posting account.
   */
  displayName?: string;
  /**
   * Poster image URL. For a video this is the cover frame. Populated whenever the provider has data for the entity.
   */
  displayUrl: string;
  /**
   * Video duration in seconds. Absent on photo posts.
   */
  durationSeconds?: number;
  /**
   * True when the media carries an audio track.
   */
  hasAudio?: boolean;
  /**
   * Instagram media id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * True when the post is a paid advertisement.
   */
  isAd?: boolean;
  /**
   * Like count. Absent when the account hides it.
   */
  likes?: number;
  /**
   * True when the post is tagged as a paid partnership.
   */
  paidPartnership?: boolean;
  /**
   * Instagram product type of the media, for example feed, clips or igtv.
   */
  productType?: string;
  /**
   * Short code in the post permalink. Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * Instagram media typename, for example XDTGraphVideo or XDTGraphImage.
   */
  type: string;
  /**
   * Canonical permalink to the post. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Instagram user id of the posting account.
   */
  userId?: string;
  /**
   * Username of the account that posted. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  username?: string;
  /**
   * True when the posting account is verified.
   */
  verified?: boolean;
  /**
   * Playable video file URL. Present only on video posts.
   * Format: uri.
   */
  videoUrl?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Hashtag Search (instagram.search_hashtag).
 */
export interface InstagramSearchHashtagData {
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  posts: InstagramSearchHashtagPost[];
}

/**
 * Input for Instagram Location Search (instagram.search_locations).
 */
export interface InstagramSearchLocationsInput {
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
   * Place name, address or city to search for.
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramSearchLocationsLocation {
  /**
   * Street address of the place.
   */
  address?: string;
  /**
   * City the place sits in.
   */
  city?: string;
  /**
   * Instagram location id. Pass it to instagram.location_posts as locationId. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Latitude in decimal degrees.
   */
  latitude: number;
  /**
   * Longitude in decimal degrees.
   */
  longitude: number;
  /**
   * Full place name, usually including city and country. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Place name without the city and country suffix.
   */
  shortName?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Location Search (instagram.search_locations).
 */
export interface InstagramSearchLocationsData {
  /**
   * Instagram locations matching the keyword, best match first. Populated whenever the provider has data for the entity.
   */
  locations: InstagramSearchLocationsLocation[];
}

/**
 * Input for Instagram Profile Search (instagram.search_profiles).
 */
export interface InstagramSearchProfilesInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor returned by a previous response.
   */
  cursor?: string;
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
   * Bio or caption keyword/phrase to search for.
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramSearchProfilesProfile {
  /**
   * Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  bio: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  displayName: string;
  /**
   * External link the account lists in its bio.
   */
  externalUrl?: string;
  followers: number;
  following: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  posts: number;
  private: boolean;
  /**
   * Canonical URL of the profile.
   */
  url?: string;
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Profile Search (instagram.search_profiles).
 */
export interface InstagramSearchProfilesData {
  /**
   * Opaque cursor for the next page of profiles, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  profiles: InstagramSearchProfilesProfile[];
}

/**
 * Input for Instagram Profile Search with Contact (instagram.search_profiles_contact).
 */
export interface InstagramSearchProfilesContactInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor returned by a previous response.
   */
  cursor?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Most profiles to return on this page, 1 to 12.
   * Range: minimum 1, maximum 12.
   * Default: 8.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Bio or caption keyword/phrase to search for.
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramSearchProfilesContactProfile {
  /**
   * Profile picture URL. Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  /**
   * Profile bio text. Populated whenever the provider has data for the entity.
   */
  bio: string;
  /**
   * Country the account is based in, from the account's About panel. Absent when Instagram does not show it. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  country?: string;
  /**
   * Display name on the profile. Populated whenever the provider has data for the entity.
   */
  displayName: string;
  /**
   * Public contact email the account lists. Absent when the account does not publish one. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  email?: string;
  /**
   * External link the account lists in its bio.
   */
  externalUrl?: string;
  /**
   * Follower count, or 0 when Instagram did not report it.
   */
  followers: number;
  /**
   * Number of accounts this profile follows.
   */
  following: number;
  /**
   * Instagram username, without the @. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Instagram account id. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Month and year the account joined Instagram, as shown on its About panel, for example "October 2013". Absent when not shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  joined?: string;
  /**
   * Public contact phone number the account lists, in international format. Absent when the account does not publish one.
   */
  phone?: string;
  /**
   * Number of posts on the profile.
   */
  posts: number;
  /**
   * Canonical URL of the profile.
   */
  url?: string;
  /**
   * Whether the account has a verified badge.
   */
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Profile Search with Contact (instagram.search_profiles_contact).
 */
export interface InstagramSearchProfilesContactData {
  /**
   * Opaque cursor for the next page of profiles, or null when there are no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Matching public profiles with the contact details each account publishes. Populated whenever the provider has data for the entity.
   */
  profiles: InstagramSearchProfilesContactProfile[];
}

/**
 * Input for Instagram Similar Profiles (instagram.similar_profiles).
 */
export interface InstagramSimilarProfilesInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Instagram username without the leading @.
   */
  handle: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramSimilarProfilesProfile {
  /**
   * Profile picture URL, as Instagram's CDN serves it.
   * Format: uri.
   */
  avatarUrl: string;
  /**
   * Account display name.
   */
  displayName: string;
  /**
   * Whether the account is private.
   */
  private: boolean;
  /**
   * Instagram's numeric account id, as a string.
   */
  userId: string;
  /**
   * Instagram username without the leading @. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * Whether the account carries Instagram's verified badge.
   */
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Similar Profiles (instagram.similar_profiles).
 */
export interface InstagramSimilarProfilesData {
  /**
   * Accounts Instagram recommends as similar to the requested profile. Populated whenever the provider has data for the entity.
   */
  profiles: InstagramSimilarProfilesProfile[];
}

/**
 * Input for Instagram Stories (full) (instagram.stories_full).
 */
export interface InstagramStoriesFullInput {
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Instagram username or handle without the @.
   */
  username: string;
}

export interface InstagramStoriesFullItem {
  /**
   * Profile picture URL of the story owner.
   */
  avatarUrl?: string;
  /**
   * Instagram media shortcode. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  code?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Display name of the story owner.
   */
  displayName?: string;
  /**
   * Expiry UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  expiresUtc?: number;
  /**
   * Media pixel height. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  height?: number;
  /**
   * Story identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Direct URL to the story image (highest resolution). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Media type: 1 = image, 2 = video. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  mediaType?: number;
  /**
   * True when the story is tagged as a paid partnership.
   */
  paidPartnership?: boolean;
  /**
   * True when the owner's account is private.
   */
  private?: boolean;
  /**
   * Instagram product type of the media, for example story.
   */
  productType?: string;
  /**
   * Instagram user id of the story owner.
   */
  userId?: string;
  /**
   * Owner username. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  username?: string;
  /**
   * True when the owner's account carries a verified badge.
   */
  verified?: boolean;
  /**
   * Direct URL to the story video, when the story is a video. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  videoUrl?: string;
  /**
   * Media pixel width. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Stories (full) (instagram.stories_full).
 */
export interface InstagramStoriesFullData {
  /**
   * Currently live story records for the requested account, with media, type, dimensions, posting time, and expiry. Populated whenever the provider has data for the entity.
   */
  items: InstagramStoriesFullItem[];
}

/**
 * Input for Instagram Stories (basic) (instagram.stories_thin).
 */
export interface InstagramStoriesThinInput {
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Instagram username/handle to fetch currently live stories for (without the @).
   */
  username: string;
}

export interface InstagramStoriesThinItem {
  /**
   * Profile picture URL of the story owner.
   */
  avatarUrl?: string;
  /**
   * Posting time (Unix seconds).
   */
  createdUtc?: number;
  /**
   * Display name of the story owner.
   */
  displayName?: string;
  /**
   * Story identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Direct URL to the story image or video. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  mediaUrl?: string;
  /**
   * Public link to the story. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  permalink?: string;
  /**
   * Owner username. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  username?: string;
  /**
   * True when the owner's account carries a verified badge.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Stories (basic) (instagram.stories_thin).
 */
export interface InstagramStoriesThinData {
  /**
   * The account's currently live stories, each with its media URL, owner, posting time, and permalink. Populated whenever the provider has data for the entity.
   */
  items: InstagramStoriesThinItem[];
}

/**
 * Input for Instagram Tagged Posts (instagram.tagged_posts).
 */
export interface InstagramTaggedPostsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Instagram username without the leading @.
   */
  handle: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramTaggedPostsPost {
  /**
   * Username of the account that posted and applied the tag, without the @ prefix. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * URL of the posting account's profile avatar image.
   */
  avatarUrl?: string;
  /**
   * The post's caption text. Empty when the post has none. Populated whenever the provider has data for the entity.
   */
  caption: string;
  /**
   * Number of comments on the post.
   */
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * The post's numeric Instagram media ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of likes on the post.
   */
  likes: number;
  /**
   * Canonical URL of the post, with tracking query params stripped. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * True when the posting account carries a verified badge.
   */
  verified?: boolean;
  /**
   * Number of views on the post, when the upstream reports one.
   */
  views?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Tagged Posts (instagram.tagged_posts).
 */
export interface InstagramTaggedPostsData {
  /**
   * Opaque cursor for the next page of tagged posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Posts that tag the requested account, newest first. Populated whenever the provider has data for the entity.
   */
  posts: InstagramTaggedPostsPost[];
}

/**
 * Input for Instagram Trending Reels (instagram.trending_reels).
 */
export interface InstagramTrendingReelsInput {
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramTrendingReelsReel {
  /**
   * Profile picture URL of the author.
   */
  avatarUrl?: string;
  caption: string;
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * True when the reel carries an audio track.
   */
  hasAudio?: boolean;
  /**
   * Original pixel height of the media.
   */
  height?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Thumbnail image URL for the reel.
   */
  image?: string;
  likes: number;
  /**
   * True when the author's account is private.
   */
  private?: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Instagram user id of the author.
   */
  userId?: string;
  /**
   * True when the author's account carries a verified badge.
   */
  verified?: boolean;
  /**
   * Direct URL to the reel video.
   */
  videoUrl?: string;
  /**
   * Original pixel width of the media.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Trending Reels (instagram.trending_reels).
 */
export interface InstagramTrendingReelsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  reels: InstagramTrendingReelsReel[];
}

/**
 * Input for Instagram User Highlights (instagram.user_highlights).
 */
export interface InstagramUserHighlightsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Instagram username without the leading @.
   */
  handle: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Instagram numeric user id (optional, faster than handle).
   */
  userId?: string;
}

export interface InstagramUserHighlightsHighlight {
  /**
   * Profile picture URL of the account that owns the highlight.
   */
  avatarUrl?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  coverUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  ownerHandle: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Instagram user id of the account that owns the highlight.
   */
  userId?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram User Highlights (instagram.user_highlights).
 */
export interface InstagramUserHighlightsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  highlights: InstagramUserHighlightsHighlight[];
}

/**
 * Input for Instagram User Posts (instagram.user_posts).
 */
export interface InstagramUserPostsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Instagram username without the leading @.
   */
  handle: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramUserPostsPost {
  /**
   * Profile picture URL of the posting account.
   */
  avatarUrl?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  caption: string;
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Display name of the posting account.
   */
  displayName?: string;
  /**
   * Video duration in seconds. Absent on photo posts.
   */
  durationSeconds?: number;
  /**
   * Instagram media id. Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Photo, video, and GIF attachments on the post. Empty when the post has none.
   */
  media?: InstagramUserPostsMedia[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Instagram user id of the posting account.
   */
  userId?: string;
  /**
   * Username of the account that posted. A profile feed includes collaborator posts, so this is not always the requested handle. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * True when the posting account is verified.
   */
  verified: boolean;
  [extra: string]: unknown;
}

export interface InstagramUserPostsMedia {
  /**
   * Pixel height of the media item, when the lane reports it.
   */
  height?: number;
  /**
   * One of photo, video, or gif.
   */
  type: string;
  /**
   * Image URL. For a video or GIF this is the poster/thumbnail frame.
   * Format: uri.
   */
  url: string;
  /**
   * Playable video file URL. Present only for video and gif items.
   * Format: uri.
   */
  videoUrl?: string;
  /**
   * Pixel width of the media item, when the lane reports it.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram User Posts (instagram.user_posts).
 */
export interface InstagramUserPostsData {
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  posts: InstagramUserPostsPost[];
}

/**
 * Input for Instagram User Reels (instagram.user_reels).
 */
export interface InstagramUserReelsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor (max_id) from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Instagram handle.
   */
  handle?: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Instagram user id (faster than handle when known).
   */
  userId?: string;
}

export interface InstagramUserReelsReel {
  /**
   * Profile picture URL of the posting account.
   */
  avatarUrl?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  caption: string;
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Display name of the posting account.
   */
  displayName?: string;
  /**
   * Reel duration in seconds.
   */
  durationSeconds: number;
  /**
   * Instagram media id. Populated whenever the provider has data for the entity.
   */
  id: string;
  likes: number;
  /**
   * Photo, video, and GIF attachments on the post. Empty when the post has none.
   */
  media?: InstagramUserReelsMedia[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * Instagram user id of the posting account.
   */
  userId?: string;
  /**
   * Username of the account that posted the reel. A reels tab includes collaborator reels, so this is not always the requested handle. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * True when the posting account is verified.
   */
  verified: boolean;
  views: number;
  [extra: string]: unknown;
}

export interface InstagramUserReelsMedia {
  /**
   * Pixel height of the media item, when the lane reports it.
   */
  height?: number;
  /**
   * One of photo, video, or gif.
   */
  type: string;
  /**
   * Image URL. For a video or GIF this is the poster/thumbnail frame.
   * Format: uri.
   */
  url: string;
  /**
   * Playable video file URL. Present only for video and gif items.
   * Format: uri.
   */
  videoUrl?: string;
  /**
   * Pixel width of the media item, when the lane reports it.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram User Reels (instagram.user_reels).
 */
export interface InstagramUserReelsData {
  /**
   * Opaque cursor for the next page of reels, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  reels: InstagramUserReelsReel[];
}

/**
 * Input for Instagram User Reposts (instagram.user_reposts).
 */
export interface InstagramUserRepostsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Instagram's numeric account id, as returned by instagram.profile.
   */
  userId: string;
}

export interface InstagramUserRepostsPost {
  /**
   * Instagram's generated accessibility description of the media.
   */
  altText?: string;
  /**
   * Username of the account that posted it, without the leading @. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * The author's numeric Instagram account id, as a string.
   */
  authorId?: string;
  /**
   * The author's display name.
   */
  authorName?: string;
  /**
   * Whether the author's account is private.
   */
  authorPrivate?: boolean;
  /**
   * Whether the author carries Instagram's verified badge.
   */
  authorVerified?: boolean;
  /**
   * Author's profile picture URL, as Instagram's CDN serves it.
   * Format: uri.
   */
  avatarUrl?: string;
  /**
   * Post caption text.
   */
  caption: string;
  /**
   * Whether the caption has been edited since posting.
   */
  captionEdited?: boolean;
  /**
   * Number of slides, present on carousel posts only.
   */
  carouselCount?: number;
  /**
   * Accounts listed as coauthors of the post.
   */
  coauthors?: InstagramUserRepostsCoauthor[];
  /**
   * Number of comments on the post.
   */
  comments: number;
  /**
   * Whether the author has hidden the like and view counts.
   */
  countsHidden?: boolean;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Whether the video carries an audio track.
   */
  hasAudio?: boolean;
  /**
   * Media height in pixels.
   */
  height?: number;
  /**
   * The post's numeric Instagram media ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Post image or video thumbnail URL, as Instagram's CDN serves it. Populated whenever the provider has data for the entity.
   * Format: uri.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Number of likes on the post.
   */
  likes: number;
  /**
   * Instagram location id the post is tagged at.
   */
  locationId?: string;
  /**
   * Latitude of the tagged location, in decimal degrees.
   */
  locationLat?: number;
  /**
   * Longitude of the tagged location, in decimal degrees.
   */
  locationLng?: number;
  /**
   * Name of the location the post is tagged at.
   */
  locationName?: string;
  /**
   * What the post is: photo, video or carousel.
   */
  mediaType?: string;
  /**
   * Whether the post is tagged as a paid partnership.
   */
  paidPartnership?: boolean;
  /**
   * Instagram's own surface label for the post, such as feed, clips or carousel_container.
   */
  productType?: string;
  /**
   * Number of times the post has been reshared, when Instagram reports it.
   */
  reshares?: number;
  /**
   * The post's short code, the segment Instagram puts in its URL.
   */
  shortcode?: string;
  /**
   * Accounts tagged in the media.
   */
  taggedUsers?: InstagramUserRepostsTaggedUser[];
  /**
   * Canonical URL of the post. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * Video length in seconds, present on video posts and reels only.
   */
  videoDurationSeconds?: number;
  /**
   * Direct video file URL, present on video posts and reels only.
   * Format: uri.
   */
  videoUrl?: string;
  /**
   * Play count, present on video posts and reels only.
   */
  views?: number;
  /**
   * Media width in pixels.
   */
  width?: number;
  [extra: string]: unknown;
}

export interface InstagramUserRepostsCoauthor {
  /**
   * Account display name.
   */
  displayName?: string;
  /**
   * Instagram's numeric account id, as a string.
   */
  userId?: string;
  /**
   * Instagram username without the leading @.
   */
  username: string;
  /**
   * Whether the account carries Instagram's verified badge.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

export interface InstagramUserRepostsTaggedUser {
  /**
   * Account display name.
   */
  displayName?: string;
  /**
   * Instagram's numeric account id, as a string.
   */
  userId?: string;
  /**
   * Instagram username without the leading @.
   */
  username: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram User Reposts (instagram.user_reposts).
 */
export interface InstagramUserRepostsData {
  /**
   * Opaque cursor for the next page of reposts, or null when there are no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Posts the account has reposted to its feed, newest first. Populated whenever the provider has data for the entity.
   */
  posts: InstagramUserRepostsPost[];
}

/**
 * Input for Instagram Reels Web Search (instagram.web_reels_search).
 */
export interface InstagramWebReelsSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Recency hint, not a hard filter. Reel discovery runs on top of Google search, so this window narrows Google's index by when it discovered or last crawled the reel, which is not the same as when the reel was published to Instagram. Returned reels can have a createdUtc outside the requested window, and the narrowest window, last-week, often returns older reels or no results. Check createdUtc yourself if you need exact publication-time precision.
   * One of: last-week, last-month, last-year.
   */
  datePosted?: "last-week" | "last-month" | "last-year";
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * 1-based results page.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keyword (e.g. "crossfit").
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface InstagramWebReelsSearchReel {
  /**
   * Reel caption text. Populated whenever the provider has data for the entity.
   */
  caption: string;
  /**
   * Number of comments on the reel.
   */
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * Reel duration in seconds.
   */
  durationSeconds: number;
  /**
   * Number of likes on the reel.
   */
  likes: number;
  /**
   * True when the reel is a paid partnership.
   */
  paidPartnership: boolean;
  /**
   * Instagram media shortcode. Populated whenever the provider has data for the entity.
   */
  shortcode: string;
  /**
   * URL of the reel thumbnail image. Populated whenever the provider has data for the entity.
   */
  thumbnail: string;
  /**
   * Canonical URL of the reel. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Username of the account that posted the reel. Populated whenever the provider has data for the entity.
   */
  username: string;
  /**
   * True when the posting account is verified.
   */
  verified: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Instagram Reels Web Search (instagram.web_reels_search).
 */
export interface InstagramWebReelsSearchData {
  /**
   * Reels matching the search. Populated whenever the provider has data for the entity.
   */
  reels: InstagramWebReelsSearchReel[];
}

/**
 * Typed methods for the instagram platform. Attached to the AnyAPI client as
 * `client.instagram`.
 */
export class InstagramNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Instagram Reels by Audio
   *
   * List Instagram reels that use a given audio track by audio id.
   *
   * Price: $0.0011 per request.
   *
   * @example
   * const res = await client.instagram.audioReels({ audioId: "1392969992841787" });
   */
  audioReels(
    input: InstagramAudioReelsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramAudioReelsData>> {
    return this._core.run("instagram.audio_reels", input, options);
  }

  /**
   * Iterate every result of Instagram Reels by Audio across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterAudioReels(
    input: InstagramAudioReelsInput,
    options?: RequestOptions,
  ): Paginator<InstagramAudioReelsReel, RunResult<InstagramAudioReelsData>> {
    return paginate<
      InstagramAudioReelsReel,
      RunResult<InstagramAudioReelsData>
    >(
      this._core,
      "instagram.audio_reels",
      input as unknown as Record<string, unknown>,
      "reels",
      false,
      options,
    );
  }

  /**
   * Instagram Basic Profile
   *
   * Fetch an Instagram account's core public profile fields (followers, posts, bio, verification) by user id.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.instagram.basicProfile({ userId: "314216" });
   */
  basicProfile(
    input: InstagramBasicProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramBasicProfileData>> {
    return this._core.run("instagram.basic_profile", input, options);
  }

  /**
   * Instagram Comment Replies
   *
   * List the replies to an Instagram comment with cursor pagination (text, author, likes).
   *
   * Price: $0.0011 per request.
   *
   * @example
   * const res = await client.instagram.commentReplies({ commentId: "18126632131325044", url: "https://www.instagram.com/p/C8rKmYvsrck/" });
   */
  commentReplies(
    input: InstagramCommentRepliesInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramCommentRepliesData>> {
    return this._core.run("instagram.comment_replies", input, options);
  }

  /**
   * Iterate every result of Instagram Comment Replies across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterCommentReplies(
    input: InstagramCommentRepliesInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramCommentRepliesComment,
    RunResult<InstagramCommentRepliesData>
  > {
    return paginate<
      InstagramCommentRepliesComment,
      RunResult<InstagramCommentRepliesData>
    >(
      this._core,
      "instagram.comment_replies",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

  /**
   * Instagram Profile Embed
   *
   * Fetch the public embed HTML for an Instagram profile by handle.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.instagram.embed({ handle: "nasa" });
   */
  embed(
    input: InstagramEmbedInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramEmbedData>> {
    return this._core.run("instagram.embed", input, options);
  }

  /**
   * Instagram Followers
   *
   * List about the first 50 followers of any public Instagram account by username: follower usernames, names, and profile details. Instagram caps follower lists, so this returns one page, not the whole list.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.followers({ username: "nasa" });
   */
  followers(
    input: InstagramFollowersInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramFollowersData>> {
    return this._core.run("instagram.followers", input, options);
  }

  /**
   * Iterate every result of Instagram Followers across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterFollowers(
    input: InstagramFollowersInput,
    options?: RequestOptions,
  ): Paginator<InstagramFollowersItem, RunResult<InstagramFollowersData>> {
    return paginate<InstagramFollowersItem, RunResult<InstagramFollowersData>>(
      this._core,
      "instagram.followers",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }

  /**
   * Instagram Following
   *
   * List about the first 50 accounts a public Instagram user follows: usernames, names, and profile details. Instagram caps these lists, so this returns one page, not the whole list.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.following({ username: "nasa" });
   */
  following(
    input: InstagramFollowingInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramFollowingData>> {
    return this._core.run("instagram.following", input, options);
  }

  /**
   * Iterate every result of Instagram Following across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterFollowing(
    input: InstagramFollowingInput,
    options?: RequestOptions,
  ): Paginator<InstagramFollowingItem, RunResult<InstagramFollowingData>> {
    return paginate<InstagramFollowingItem, RunResult<InstagramFollowingData>>(
      this._core,
      "instagram.following",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }

  /**
   * Instagram Hashtag Analytics
   *
   * Get analytics for any Instagram hashtag (total post count, related hashtags, and usage signals).
   *
   * Price: $0.0011 per request plus $0.00187 per result (maximum $0.0385).
   *
   * @example
   * const res = await client.instagram.hashtagAnalytics({ hashtag: "travel", limit: 5 });
   */
  hashtagAnalytics(
    input: InstagramHashtagAnalyticsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramHashtagAnalyticsData>> {
    return this._core.run("instagram.hashtag_analytics", input, options);
  }

  /**
   * Instagram Hashtag Recent Posts
   *
   * Instagram posts published under a hashtag, newest first, read from its live chronological feed rather than a web search index. Built for monitoring: results arrive within a couple of minutes of posting, so engagement counts are usually still zero and reels do not appear (Instagram keeps those on a separate tab). For engagement-ranked results use instagram.hashtag_top_posts; for older relevance-ranked results use instagram.search_hashtag.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.hashtagRecentPosts({ hashtag: "skincare" });
   */
  hashtagRecentPosts(
    input: InstagramHashtagRecentPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramHashtagRecentPostsData>> {
    return this._core.run("instagram.hashtag_recent_posts", input, options);
  }

  /**
   * Iterate every result of Instagram Hashtag Recent Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterHashtagRecentPosts(
    input: InstagramHashtagRecentPostsInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramHashtagRecentPostsPost,
    RunResult<InstagramHashtagRecentPostsData>
  > {
    return paginate<
      InstagramHashtagRecentPostsPost,
      RunResult<InstagramHashtagRecentPostsData>
    >(
      this._core,
      "instagram.hashtag_recent_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Instagram Hashtag Top Posts
   *
   * Instagram's own top-ranked posts for a hashtag, read from its live hashtag feed rather than a web search index, with view, like, and comment counts. Reels-heavy and engagement-ranked, so it answers what is performing on a tag right now. For older relevance-ranked results with date and media-type filters use instagram.search_hashtag; for the chronological feed use instagram.hashtag_recent_posts.
   *
   * Price: $0.0011 per request.
   *
   * @example
   * const res = await client.instagram.hashtagTopPosts({ hashtag: "skincare" });
   */
  hashtagTopPosts(
    input: InstagramHashtagTopPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramHashtagTopPostsData>> {
    return this._core.run("instagram.hashtag_top_posts", input, options);
  }

  /**
   * Iterate every result of Instagram Hashtag Top Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterHashtagTopPosts(
    input: InstagramHashtagTopPostsInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramHashtagTopPostsPost,
    RunResult<InstagramHashtagTopPostsData>
  > {
    return paginate<
      InstagramHashtagTopPostsPost,
      RunResult<InstagramHashtagTopPostsData>
    >(
      this._core,
      "instagram.hashtag_top_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Instagram Highlight Detail
   *
   * Fetch the details and media items of a single Instagram story highlight by id.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.instagram.highlightDetail({ id: "18201653992314974" });
   */
  highlightDetail(
    input: InstagramHighlightDetailInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramHighlightDetailData>> {
    return this._core.run("instagram.highlight_detail", input, options);
  }

  /**
   * Instagram Location Posts
   *
   * List public Instagram posts tagged at a location, ranked or most recent, with cursor pagination.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.instagram.locationPosts({ locationId: "103912118089363", sort: "recent" });
   */
  locationPosts(
    input: InstagramLocationPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramLocationPostsData>> {
    return this._core.run("instagram.location_posts", input, options);
  }

  /**
   * Iterate every result of Instagram Location Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterLocationPosts(
    input: InstagramLocationPostsInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramLocationPostsPost,
    RunResult<InstagramLocationPostsData>
  > {
    return paginate<
      InstagramLocationPostsPost,
      RunResult<InstagramLocationPostsData>
    >(
      this._core,
      "instagram.location_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Instagram Media Transcript
   *
   * Get the spoken-audio transcript text for an Instagram post or reel by URL.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.instagram.mediaTranscript({ url: "https://www.instagram.com/reel/DHsD6HGqJhp/" });
   */
  mediaTranscript(
    input: InstagramMediaTranscriptInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramMediaTranscriptData>> {
    return this._core.run("instagram.media_transcript", input, options);
  }

  /**
   * Instagram Post
   *
   * Fetch a single Instagram post or reel by URL (media URLs, like count, owner, type) as normalized JSON. Turn on hostVideo to also get the post's video on a hosted MP4 link that plays without an Instagram session, charged as an extra on top of the price. If you want the spoken words as well, instagram.reel_transcript transcribes the same reel.
   *
   * Price: $0.0005 per request.
   *
   * @example
   * const res = await client.instagram.post({ url: "https://www.instagram.com/reel/DWzrfE2kaY8/" });
   */
  post(
    input: InstagramPostInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramPostData>> {
    return this._core.run("instagram.post", input, options);
  }

  /**
   * Instagram Post Comments
   *
   * List the comments on an Instagram post or reel by URL with cursor pagination (text, author, likes).
   *
   * Price: $0.0008 per request.
   *
   * @example
   * const res = await client.instagram.postComments({ url: "https://www.instagram.com/reel/DWzrfE2kaY8/" });
   */
  postComments(
    input: InstagramPostCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramPostCommentsData>> {
    return this._core.run("instagram.post_comments", input, options);
  }

  /**
   * Iterate every result of Instagram Post Comments across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterPostComments(
    input: InstagramPostCommentsInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramPostCommentsComment,
    RunResult<InstagramPostCommentsData>
  > {
    return paginate<
      InstagramPostCommentsComment,
      RunResult<InstagramPostCommentsData>
    >(
      this._core,
      "instagram.post_comments",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

  /**
   * Instagram Post Likers
   *
   * List the accounts that liked a public Instagram post, one page of likers per call, with each liker's handle, display name, verified flag and avatar.
   *
   * Price: $0.0024 per request.
   *
   * @example
   * const res = await client.instagram.postLikers({ url: "https://www.instagram.com/reel/DWzrfE2kaY8/" });
   */
  postLikers(
    input: InstagramPostLikersInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramPostLikersData>> {
    return this._core.run("instagram.post_likers", input, options);
  }

  /**
   * Instagram Profile
   *
   * Fetch an Instagram account's public profile (followers, posts, bio, verification) by handle.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.instagram.profile({ handle: "nasa" });
   */
  profile(
    input: InstagramProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramProfileData>> {
    return this._core.run("instagram.profile", input, options);
  }

  /**
   * Instagram Profile Contact Info
   *
   * Look up the contact email and phone number an Instagram creator or business publishes on its profile, including the address behind the profile's Email button that public profile lookups do not return.
   *
   * Price: $0.00175 per request.
   *
   * @example
   * const res = await client.instagram.profileContact({ handle: "eminenceorganics" });
   */
  profileContact(
    input: InstagramProfileContactInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramProfileContactData>> {
    return this._core.run("instagram.profile_contact", input, options);
  }

  /**
   * Instagram Reel Transcript
   *
   * Transcribe any public Instagram reel or video post: the full speech transcript, speaker labels, and word-level timestamps, from a reel, /p/, or /tv/ URL or an Instagram CDN media URL you already hold. A video post is transcribed exactly like a reel. A photo post comes back found with its record and an empty transcript, charged the request price only. Transcription runs on MAI-Transcribe-2, chosen for its accuracy and its speaker labels. Turn on hostVideo to also get the MP4 on a hosted link that plays without an Instagram session. If you only want the text, instagram.media_transcript is the cheaper transcript-only option; if you only want the file, instagram.post is where you go.
   *
   * Price: $0.0015 per request plus $0.006 per audio minute (maximum $0.095).
   *
   * @example
   * const res = await client.instagram.reelTranscript({ url: "https://www.instagram.com/reel/CfY6jCIgH-P/", hostVideo: true, wordTimestamps: false });
   */
  reelTranscript(
    input: InstagramReelTranscriptInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramReelTranscriptData>> {
    return this._core.run("instagram.reel_transcript", input, options);
  }

  /**
   * Instagram Reels Search
   *
   * Search Instagram Reels by keyword against Instagram's own reels search and get matching reels with view, like and comment counts, caption, creator and duration. Results are relevance-ranked, not chronological, and a page can repeat reels from the page before it. For a web-search-index view of the same keyword, with a recency filter and numbered pages, use instagram.web_reels_search.
   *
   * Price: $0.0011 per request.
   *
   * @example
   * const res = await client.instagram.reelsSearch({ query: "travel" });
   */
  reelsSearch(
    input: InstagramReelsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramReelsSearchData>> {
    return this._core.run("instagram.reels_search", input, options);
  }

  /**
   * Iterate every result of Instagram Reels Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterReelsSearch(
    input: InstagramReelsSearchInput,
    options?: RequestOptions,
  ): Paginator<InstagramReelsSearchReel, RunResult<InstagramReelsSearchData>> {
    return paginate<
      InstagramReelsSearchReel,
      RunResult<InstagramReelsSearchData>
    >(
      this._core,
      "instagram.reels_search",
      input as unknown as Record<string, unknown>,
      "reels",
      false,
      options,
    );
  }

  /**
   * Instagram Search
   *
   * Search Instagram for users, hashtags, or places by keyword and get matching results with names, counts, and links.
   *
   * Price: $0.0036 per request.
   *
   * @example
   * const res = await client.instagram.search({ query: "nasa" });
   */
  search(
    input: InstagramSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramSearchData>> {
    return this._core.run("instagram.search", input, options);
  }

  /**
   * Instagram Search Followers
   *
   * Search the followers of a public Instagram account by name or username, using Instagram's own follower search. On smaller accounts it searches the whole follower list and returns close matches ranked by Instagram. On large accounts Instagram does not support searching followers, so the result is the account's most recent followers instead, whatever the query. Returns usernames, names, and profile details.
   *
   * Price: $0.0022 per request.
   *
   * @example
   * const res = await client.instagram.searchFollowers({ query: "john", username: "milada2788" });
   */
  searchFollowers(
    input: InstagramSearchFollowersInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramSearchFollowersData>> {
    return this._core.run("instagram.search_followers", input, options);
  }

  /**
   * Instagram Search Following
   *
   * Search the accounts a public Instagram user follows by name or username. Matching is Instagram's own loose search, so results are close matches ranked by Instagram and some may not contain your exact word. Returns usernames, names, and profile details.
   *
   * Price: $0.0022 per request.
   *
   * @example
   * const res = await client.instagram.searchFollowing({ query: "skin", username: "moogooskincare" });
   */
  searchFollowing(
    input: InstagramSearchFollowingInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramSearchFollowingData>> {
    return this._core.run("instagram.search_following", input, options);
  }

  /**
   * Instagram Hashtag Search
   *
   * Search posts under an Instagram hashtag through a web search index rather than Instagram's own hashtag feed. That is what lets it filter by date and media type and return reels whose like counts have settled, and it is also why results skew older (median around three months) and stop at roughly 110 per hashtag. For Instagram's own live ranking of a tag use instagram.hashtag_top_posts, and for the chronological feed use instagram.hashtag_recent_posts.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.instagram.searchHashtag({ hashtag: "skincare", datePosted: "last-month", mediaType: "reel" });
   */
  searchHashtag(
    input: InstagramSearchHashtagInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramSearchHashtagData>> {
    return this._core.run("instagram.search_hashtag", input, options);
  }

  /**
   * Iterate every result of Instagram Hashtag Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearchHashtag(
    input: InstagramSearchHashtagInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramSearchHashtagPost,
    RunResult<InstagramSearchHashtagData>
  > {
    return paginate<
      InstagramSearchHashtagPost,
      RunResult<InstagramSearchHashtagData>
    >(
      this._core,
      "instagram.search_hashtag",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Instagram Location Search
   *
   * Search Instagram locations by keyword and return each place's id, name, address and coordinates.
   *
   * Price: $0.0011 per request.
   *
   * @example
   * const res = await client.instagram.searchLocations({ query: "Eiffel Tower" });
   */
  searchLocations(
    input: InstagramSearchLocationsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramSearchLocationsData>> {
    return this._core.run("instagram.search_locations", input, options);
  }

  /**
   * Instagram Profile Search
   *
   * Search public Instagram profiles by a bio or caption keyword.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.instagram.searchProfiles({ query: "coffee roaster" });
   */
  searchProfiles(
    input: InstagramSearchProfilesInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramSearchProfilesData>> {
    return this._core.run("instagram.search_profiles", input, options);
  }

  /**
   * Iterate every result of Instagram Profile Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearchProfiles(
    input: InstagramSearchProfilesInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramSearchProfilesProfile,
    RunResult<InstagramSearchProfilesData>
  > {
    return paginate<
      InstagramSearchProfilesProfile,
      RunResult<InstagramSearchProfilesData>
    >(
      this._core,
      "instagram.search_profiles",
      input as unknown as Record<string, unknown>,
      "profiles",
      false,
      options,
    );
  }

  /**
   * Instagram Profile Search with Contact
   *
   * Search public Instagram profiles by a bio or caption keyword and get each account's country, the month it joined, and the public email and phone number it lists. Charged per profile that comes back with those details.
   *
   * Price: $0.0036 per request plus $0.0072 per profile (maximum $0.09).
   *
   * @example
   * const res = await client.instagram.searchProfilesContact({ query: "skincare" });
   */
  searchProfilesContact(
    input: InstagramSearchProfilesContactInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramSearchProfilesContactData>> {
    return this._core.run("instagram.search_profiles_contact", input, options);
  }

  /**
   * Iterate every result of Instagram Profile Search with Contact across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearchProfilesContact(
    input: InstagramSearchProfilesContactInput,
    options?: RequestOptions,
  ): Paginator<
    InstagramSearchProfilesContactProfile,
    RunResult<InstagramSearchProfilesContactData>
  > {
    return paginate<
      InstagramSearchProfilesContactProfile,
      RunResult<InstagramSearchProfilesContactData>
    >(
      this._core,
      "instagram.search_profiles_contact",
      input as unknown as Record<string, unknown>,
      "profiles",
      false,
      options,
    );
  }

  /**
   * Instagram Similar Profiles
   *
   * List the accounts Instagram recommends as similar to a public profile, with each account's handle, display name, verified flag and avatar.
   *
   * Price: $0.00175 per request.
   *
   * @example
   * const res = await client.instagram.similarProfiles({ handle: "nasa" });
   */
  similarProfiles(
    input: InstagramSimilarProfilesInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramSimilarProfilesData>> {
    return this._core.run("instagram.similar_profiles", input, options);
  }

  /**
   * Instagram Stories (full)
   *
   * Fetch a public Instagram account's currently live stories with media, type, dimensions, posting time, and 24-hour expiry by username.
   *
   * Price: $0.0022 per request.
   *
   * @example
   * const res = await client.instagram.storiesFull({ username: "natgeo" });
   */
  storiesFull(
    input: InstagramStoriesFullInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramStoriesFullData>> {
    return this._core.run("instagram.stories_full", input, options);
  }

  /**
   * Instagram Stories (basic)
   *
   * Fetch a public Instagram account's currently live stories - media URL, owner, and posting time - by username. Lightweight projection; for media type, dimensions, and the 24h expiry time use instagram.stories_full.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.storiesThin({ username: "natgeo" });
   */
  storiesThin(
    input: InstagramStoriesThinInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramStoriesThinData>> {
    return this._core.run("instagram.stories_thin", input, options);
  }

  /**
   * Instagram Tagged Posts
   *
   * List the posts an Instagram user is tagged in, with cursor pagination (author, caption, likes, comments).
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.instagram.taggedPosts({ handle: "nasa" });
   */
  taggedPosts(
    input: InstagramTaggedPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramTaggedPostsData>> {
    return this._core.run("instagram.tagged_posts", input, options);
  }

  /**
   * Iterate every result of Instagram Tagged Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterTaggedPosts(
    input: InstagramTaggedPostsInput,
    options?: RequestOptions,
  ): Paginator<InstagramTaggedPostsPost, RunResult<InstagramTaggedPostsData>> {
    return paginate<
      InstagramTaggedPostsPost,
      RunResult<InstagramTaggedPostsData>
    >(
      this._core,
      "instagram.tagged_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Instagram Trending Reels
   *
   * List currently trending Instagram reels. Instagram does not return play counts on this feed.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.instagram.trendingReels({});
   */
  trendingReels(
    input: InstagramTrendingReelsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramTrendingReelsData>> {
    return this._core.run("instagram.trending_reels", input, options);
  }

  /**
   * Instagram User Highlights
   *
   * List an Instagram account's story highlight reels by handle.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.instagram.userHighlights({ handle: "nasa" });
   */
  userHighlights(
    input: InstagramUserHighlightsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramUserHighlightsData>> {
    return this._core.run("instagram.user_highlights", input, options);
  }

  /**
   * Instagram User Posts
   *
   * List an Instagram account's recent posts (likes, comments, captions) by handle with cursor pagination.
   *
   * Price: $0.0008 per request.
   *
   * @example
   * const res = await client.instagram.userPosts({ handle: "nasa" });
   */
  userPosts(
    input: InstagramUserPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramUserPostsData>> {
    return this._core.run("instagram.user_posts", input, options);
  }

  /**
   * Iterate every result of Instagram User Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserPosts(
    input: InstagramUserPostsInput,
    options?: RequestOptions,
  ): Paginator<InstagramUserPostsPost, RunResult<InstagramUserPostsData>> {
    return paginate<InstagramUserPostsPost, RunResult<InstagramUserPostsData>>(
      this._core,
      "instagram.user_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Instagram User Reels
   *
   * List an Instagram account's reels by handle with cursor pagination (caption, plays, likes, comments).
   *
   * Price: $0.0008 per request.
   *
   * @example
   * const res = await client.instagram.userReels({ handle: "nasa" });
   */
  userReels(
    input: InstagramUserReelsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramUserReelsData>> {
    return this._core.run("instagram.user_reels", input, options);
  }

  /**
   * Iterate every result of Instagram User Reels across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserReels(
    input: InstagramUserReelsInput,
    options?: RequestOptions,
  ): Paginator<InstagramUserReelsReel, RunResult<InstagramUserReelsData>> {
    return paginate<InstagramUserReelsReel, RunResult<InstagramUserReelsData>>(
      this._core,
      "instagram.user_reels",
      input as unknown as Record<string, unknown>,
      "reels",
      false,
      options,
    );
  }

  /**
   * Instagram User Reposts
   *
   * List the posts a public Instagram account has reposted to its feed, with cursor pagination.
   *
   * Price: $0.0011 per request.
   *
   * @example
   * const res = await client.instagram.userReposts({ userId: "787132" });
   */
  userReposts(
    input: InstagramUserRepostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramUserRepostsData>> {
    return this._core.run("instagram.user_reposts", input, options);
  }

  /**
   * Iterate every result of Instagram User Reposts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserReposts(
    input: InstagramUserRepostsInput,
    options?: RequestOptions,
  ): Paginator<InstagramUserRepostsPost, RunResult<InstagramUserRepostsData>> {
    return paginate<
      InstagramUserRepostsPost,
      RunResult<InstagramUserRepostsData>
    >(
      this._core,
      "instagram.user_reposts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Instagram Reels Web Search
   *
   * Search Instagram Reels through a web search index rather than Instagram's own search, and get matching reels (caption, likes, comments, creator, and duration). That is what lets it filter by a recency window and page by number, and it is also why the results are whatever the index has crawled rather than what Instagram ranks right now, and why paging tops out around 110 reels per query (11 pages of 10). Instagram does not return view or play counts here. For Instagram's own live reels search, with view counts, use instagram.reels_search.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.instagram.webReelsSearch({ query: "travel" });
   */
  webReelsSearch(
    input: InstagramWebReelsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<InstagramWebReelsSearchData>> {
    return this._core.run("instagram.web_reels_search", input, options);
  }
}
