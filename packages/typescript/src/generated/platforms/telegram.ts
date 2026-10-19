// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Telegram Channel (telegram.channel).
 */
export interface TelegramChannelInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Public Telegram channel username, with or without the @ (e.g. "telegram"), or its t.me link.
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `photoCount`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a channel that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    "fileCount" | "linkCount" | "photoCount" | "previewEnabled" | "videoCount"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

/**
 * The `data` payload of Telegram Channel (telegram.channel).
 */
export interface TelegramChannelData {
  /**
   * Channel photo URL. Temporary: Telegram's CDN link expires.
   */
  avatarUrl?: string | null;
  /**
   * Channel bio as plain text; null when the channel has none.
   */
  description?: string | null;
  /**
   * Files the channel has posted, rounded by Telegram. Null when not shown or when this source does not report it.
   */
  fileCount?: number | null;
  /**
   * Channel username, without the @. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Links the channel has posted, rounded by Telegram. Null when not shown or when this source does not report it.
   */
  linkCount?: number | null;
  /**
   * Photos the channel has posted. Telegram rounds this count ("1.2K" becomes 1200). Null when not shown or when this source does not report it.
   */
  photoCount?: number | null;
  /**
   * True when the channel's public web preview is on, which is what telegram.channel_posts and telegram.post read the channel's posts from. Null when this source does not report it.
   */
  previewEnabled?: boolean | null;
  /**
   * Exact subscriber count, read from the channel's public t.me page. Null when Telegram does not show it. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  subscribers?: number | null;
  /**
   * Channel name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  title?: string;
  /**
   * The channel's t.me link.
   */
  url?: string;
  /**
   * True when the channel carries Telegram's verified badge. Null when this source does not report it.
   */
  verified?: boolean | null;
  /**
   * Videos the channel has posted, rounded by Telegram. Null when not shown or when this source does not report it.
   */
  videoCount?: number | null;
  [extra: string]: unknown;
}

/**
 * Input for Telegram Channel Posts (telegram.channel_posts).
 */
export interface TelegramChannelPostsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Opaque pagination cursor from a previous response's nextCursor, for older posts. Omit for the newest page; a page holds about 20 posts.
   */
  cursor?: string;
  /**
   * Public Telegram channel username, with or without the @ (e.g. "telegram"), or its t.me link.
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `linkPreviewUrl` or `edited`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a post that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "edited"
    | "linkPreviewDescription"
    | "linkPreviewTitle"
    | "linkPreviewUrl"
    | "media"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface TelegramChannelPostsPost {
  /**
   * Username of the channel that published the post.
   */
  channel?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number | null;
  /**
   * True when the post was edited after it was published. Null when this source does not report it.
   */
  edited?: boolean | null;
  /**
   * Post number, unique within the channel. Posts are numbered in order. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Thumbnail image URL for the post's photo, video or link preview; null when it has none. Temporary: Telegram's CDN link expires.
   */
  image?: string | null;
  /**
   * Description on the post's link preview card. Null when the post has no link preview, the card has no description, or this source does not report it.
   */
  linkPreviewDescription?: string | null;
  /**
   * Title on the post's link preview card. Null when the post has no link preview, the card has no title, or this source does not report it.
   */
  linkPreviewTitle?: string | null;
  /**
   * URL of the page the post's link preview card shows. Null when the post has no link preview or this source does not report it.
   */
  linkPreviewUrl?: string | null;
  /**
   * The post's attachments in order, each with its kind, file URL, preview image and length. Empty when the post has none; null when this source does not report them.
   */
  media?: TelegramChannelPostsMedia[] | null;
  /**
   * Direct URLs of the post's photos and videos. Temporary and signed: keep the query string. Empty when the post has no media or Telegram withholds a large video's file.
   */
  mediaUrls?: string[];
  /**
   * Reactions on the post and how many of each. Empty when the post has none or the channel hides them.
   */
  reactions?: TelegramChannelPostsReaction[];
  /**
   * Post text or media caption, plain. Empty when the post has none. Some sources collapse line breaks into spaces. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  text?: string;
  /**
   * The post's t.me link, e.g. https://t.me/telegram/441. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  /**
   * View count. Telegram rounds it ("1.2K" becomes 1200). Null when not shown.
   */
  views?: number | null;
  [extra: string]: unknown;
}

export interface TelegramChannelPostsMedia {
  /**
   * Video length in seconds; null for other attachments.
   */
  durationSeconds?: number | null;
  /**
   * Preview image URL (the photo itself for a photo). Temporary: Telegram's CDN link expires. Null when there is none.
   */
  image?: string | null;
  /**
   * Attachment kind as Telegram labels it, e.g. photo or video.
   */
  type?: string | null;
  /**
   * Direct file URL. Temporary and signed: keep the query string. Null when Telegram withholds the file, as for a large video.
   */
  url?: string | null;
  [extra: string]: unknown;
}

export interface TelegramChannelPostsReaction {
  /**
   * How many times it was given. Telegram rounds large counts.
   */
  count?: number | null;
  /**
   * The reaction's emoji; null for a custom emoji, and on some sources for a paid star reaction.
   */
  emoji?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Telegram Channel Posts (telegram.channel_posts).
 */
export interface TelegramChannelPostsData {
  /**
   * Opaque cursor for the next, older page of posts, or null/empty when there are no more. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
  /**
   * One page of the channel's posts, about 20, from the newest page back. Populated whenever the provider has data for the entity.
   */
  posts: TelegramChannelPostsPost[];
}

/**
 * Input for Telegram Post (telegram.post).
 */
export interface TelegramPostInput {
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `linkPreviewUrl` or `edited`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a post that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "durationSeconds"
    | "edited"
    | "linkPreviewDescription"
    | "linkPreviewTitle"
    | "linkPreviewUrl"
    | "media"
    | "type"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Link to one public channel post, e.g. https://t.me/telegram/460 (t.me/s/ links work too).
   */
  url: string;
}

export interface TelegramPostMedia {
  /**
   * Video length in seconds; null for other attachments.
   */
  durationSeconds?: number | null;
  /**
   * Preview image URL (the photo itself for a photo). Temporary: Telegram's CDN link expires. Null when there is none.
   */
  image?: string | null;
  /**
   * Attachment kind as Telegram labels it, e.g. photo or video.
   */
  type?: string | null;
  /**
   * Direct file URL. Temporary and signed: keep the query string. Null when Telegram withholds the file, as for a large video.
   */
  url?: string | null;
  [extra: string]: unknown;
}

export interface TelegramPostReaction {
  /**
   * How many times it was given. Telegram rounds large counts.
   */
  count?: number | null;
  /**
   * The reaction's emoji; null for a custom emoji, and on some sources for a paid star reaction.
   */
  emoji?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Telegram Post (telegram.post).
 */
export interface TelegramPostData {
  /**
   * Username of the channel that published the post. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  channel?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number | null;
  /**
   * True when the post was edited after it was published. Null when this source does not report it.
   */
  edited?: boolean | null;
  /**
   * Post number, unique within the channel. Posts are numbered in order. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Thumbnail image URL for the post's photo, video or link preview; null when it has none. Temporary: Telegram's CDN link expires.
   */
  image?: string | null;
  /**
   * Description on the post's link preview card. Null when the post has no link preview, the card has no description, or this source does not report it.
   */
  linkPreviewDescription?: string | null;
  /**
   * Title on the post's link preview card. Null when the post has no link preview, the card has no title, or this source does not report it.
   */
  linkPreviewTitle?: string | null;
  /**
   * URL of the page the post's link preview card shows. Null when the post has no link preview or this source does not report it.
   */
  linkPreviewUrl?: string | null;
  /**
   * The post's attachments in order, each with its kind, file URL, preview image and length. Empty when the post has none; null when this source does not report them.
   */
  media?: TelegramPostMedia[] | null;
  /**
   * Direct URLs of the post's photos and videos. Temporary and signed: keep the query string. Empty when the post has no media or Telegram withholds a large video's file.
   */
  mediaUrls?: string[];
  /**
   * Reactions on the post and how many of each. Empty when the post has none or the channel hides them.
   */
  reactions?: TelegramPostReaction[];
  /**
   * Post text or media caption, plain. Empty when the post has none. Some sources collapse line breaks into spaces. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  text?: string;
  /**
   * The post's t.me link. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  /**
   * View count. Telegram rounds it ("1.2K" becomes 1200). Null when not shown.
   */
  views?: number | null;
  [extra: string]: unknown;
}

/**
 * Typed methods for the telegram platform. Attached to the AnyAPI client as
 * `client.telegram`.
 */
export class TelegramNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Telegram Channel
   *
   * Get a public Telegram channel by username: name, bio, photo, verified badge, exact subscriber count, and how many photos, videos, files and links it has posted.
   *
   * Price: $0.0011 per request.
   *
   * @example
   * const res = await client.telegram.channel({ handle: "telegram" });
   */
  channel(
    input: TelegramChannelInput,
    options?: RequestOptions,
  ): Promise<RunResult<TelegramChannelData>> {
    return this._core.run("telegram.channel", input, options);
  }

  /**
   * Telegram Channel Posts
   *
   * Get a public Telegram channel's posts by username, about 20 per page with a cursor for older pages: text, posting time, views, photo and video links, and reactions.
   *
   * Price: $0.0011 per request.
   *
   * @example
   * const res = await client.telegram.channelPosts({ handle: "telegram" });
   */
  channelPosts(
    input: TelegramChannelPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<TelegramChannelPostsData>> {
    return this._core.run("telegram.channel_posts", input, options);
  }

  /**
   * Iterate every result of Telegram Channel Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterChannelPosts(
    input: TelegramChannelPostsInput,
    options?: RequestOptions,
  ): Paginator<TelegramChannelPostsPost, RunResult<TelegramChannelPostsData>> {
    return paginate<
      TelegramChannelPostsPost,
      RunResult<TelegramChannelPostsData>
    >(
      this._core,
      "telegram.channel_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Telegram Post
   *
   * Get one public Telegram channel post by its t.me link: text, posting time, views, photo and video links, and reactions.
   *
   * Price: $0.0011 per request.
   *
   * @example
   * const res = await client.telegram.post({ url: "https://t.me/telegram/460" });
   */
  post(
    input: TelegramPostInput,
    options?: RequestOptions,
  ): Promise<RunResult<TelegramPostData>> {
    return this._core.run("telegram.post", input, options);
  }
}
