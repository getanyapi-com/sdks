// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Facebook Ad Details (facebook.ad_details).
 */
export interface FacebookAdDetailsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Meta Ad Library ad ID (e.g. "702369045530963"). Provide either id or url.
   */
  id?: string;
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
   * Meta Ad Library ad URL (e.g. "https://www.facebook.com/ads/library?id=1185617869915074"). Provide either id or url.
   */
  url?: string;
}

export interface FacebookAdDetailsMedia {
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
 * The `data` payload of Facebook Ad Details (facebook.ad_details).
 */
export interface FacebookAdDetailsData {
  /**
   * Whether the ad is currently running.
   */
  active?: boolean | null;
  /**
   * Ad Library archive ID (stable identity). Populated whenever the provider has data for the entity.
   */
  adArchiveId: string;
  /**
   * Caption line of the ad creative, usually the advertiser's display domain.
   */
  caption?: string;
  /**
   * Ad Library categories the ad is filed under.
   */
  categories?: string[];
  /**
   * Call-to-action label. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  ctaText?: string | null;
  /**
   * Spend currency, may be empty.
   */
  currency?: string | null;
  /**
   * Ad creative format. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  displayFormat?: string | null;
  /**
   * Run end, epoch seconds.
   */
  endDate?: number | null;
  /**
   * Whether the ad creative is a reshare of another post.
   */
  isReshared?: boolean;
  /**
   * Description text shown under the ad's link.
   */
  linkDescription?: string;
  /**
   * Creative destination URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  linkUrl?: string | null;
  /**
   * Creative attached to the ad: one element per image, video, or carousel card, in the order the ad presents them. Empty when the ad has none.
   */
  media?: FacebookAdDetailsMedia[];
  /**
   * Categories Facebook lists the advertising page under.
   */
  pageCategories?: string[];
  /**
   * Whether the advertising page has been deleted.
   */
  pageDeleted?: boolean;
  /**
   * Advertiser page ID (stable identity). Populated whenever the provider has data for the entity.
   */
  pageId: string;
  /**
   * Like count of the advertising page.
   */
  pageLikes?: number;
  /**
   * Advertiser page name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  pageName?: string | null;
  /**
   * Profile picture of the advertising page. This is the advertiser's identity image, not ad creative.
   * Format: uri.
   */
  pageProfilePicture?: string;
  /**
   * Canonical Facebook URL of the advertising page.
   */
  pageUrl?: string;
  /**
   * Publisher platforms the ad runs on. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  platforms?: string[] | null;
  /**
   * Inspectable Meta Ad Library URL for this ad. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  sourceUrl: string;
  /**
   * Run start, epoch seconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  startDate?: number | null;
  /**
   * Ad body text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  text?: string | null;
  /**
   * Creative title. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  title?: string | null;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Ad Creative Details (facebook.ad_details_full).
 */
export interface FacebookAdDetailsFullInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Meta Ad Library ad ID - the numeric id in an Ad Library URL (e.g. "962050096457659" from https://www.facebook.com/ads/library/?id=962050096457659).
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

export interface FacebookAdDetailsFullCreative {
  /**
   * Variant body text.
   */
  body?: string;
  /**
   * Variant display caption.
   */
  caption?: string;
  /**
   * Variant call-to-action label.
   */
  ctaText?: string;
  /**
   * Variant call-to-action type.
   */
  ctaType?: string;
  /**
   * Original creative image URL.
   */
  image?: string;
  /**
   * Resized creative image URL.
   */
  imageResized?: string;
  /**
   * Variant secondary description.
   */
  linkDescription?: string;
  /**
   * Variant destination URL.
   */
  linkUrl?: string;
  /**
   * Variant headline.
   */
  title?: string;
  /**
   * Poster frame for the creative video.
   */
  videoPreviewImage?: string;
  /**
   * Creative video URL (HD when supplied, otherwise SD).
   */
  videoUrl?: string;
  [extra: string]: unknown;
}

export interface FacebookAdDetailsFullImage {
  /**
   * Original creative image URL.
   */
  image?: string;
  /**
   * Resized creative image URL.
   */
  imageResized?: string;
  [extra: string]: unknown;
}

export interface FacebookAdDetailsFullVideo {
  /**
   * Poster frame for the creative video.
   */
  videoPreviewImage?: string;
  /**
   * Creative video URL (HD when supplied, otherwise SD).
   */
  videoUrl?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Ad Creative Details (facebook.ad_details_full).
 */
export interface FacebookAdDetailsFullData {
  /**
   * Whether the ad is currently running.
   */
  active?: boolean;
  /**
   * Ad Library archive ID (stable identity). Populated whenever the provider has data for the entity.
   */
  adArchiveId: string;
  /**
   * Ad body text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  body?: string;
  /**
   * Display caption, usually the destination domain.
   */
  caption?: string;
  /**
   * Ad Library categories the ad is filed under.
   */
  categories?: string[];
  /**
   * One entry per creative variant of a carousel or dynamic ad, in the order Meta returns them. Single-creative ads return an empty array and carry their media in images/videos. Meta CDN media URLs are signed and expire, so fetch what you need at read time.
   */
  creatives?: FacebookAdDetailsFullCreative[];
  /**
   * Call-to-action label (e.g. "Shop now").
   */
  ctaText?: string;
  /**
   * Call-to-action type (e.g. "SHOP_NOW").
   */
  ctaType?: string;
  /**
   * Ad creative format (e.g. "DPA", "VIDEO", "IMAGE"). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  displayFormat?: string;
  /**
   * Run end, or last-seen date while the ad is still running. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  endedUtc?: number;
  /**
   * Standalone creative images for a single-image ad. Meta CDN media URLs are signed and expire.
   */
  images?: FacebookAdDetailsFullImage[];
  /**
   * Whether the ad creative is a reshare of another post.
   */
  isReshared?: boolean;
  /**
   * Secondary link description line.
   */
  linkDescription?: string;
  /**
   * Creative destination URL.
   */
  linkUrl?: string;
  /**
   * Categories Facebook lists the advertising page under.
   */
  pageCategories?: string[];
  /**
   * Whether the advertising page has been deleted.
   */
  pageDeleted?: boolean;
  /**
   * Advertiser page ID (stable identity). Populated whenever the provider has data for the entity.
   */
  pageId: string;
  /**
   * Advertiser page profile picture URL. Meta CDN URLs are signed and expire.
   */
  pageImage?: string;
  /**
   * Like count of the advertising page.
   */
  pageLikes?: number;
  /**
   * Advertiser page name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  pageName?: string;
  /**
   * Advertiser page URL.
   */
  pageUrl?: string;
  /**
   * Publisher platforms the ad runs on.
   */
  platforms?: string[];
  /**
   * Inspectable Meta Ad Library URL for this ad. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  sourceUrl: string;
  /**
   * Run start. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  startedUtc?: number;
  /**
   * Creative headline. Dynamic-product ads return a template such as "{{product.name}}".
   */
  title?: string;
  /**
   * Standalone creative videos for a single-video ad. Meta CDN media URLs are signed and expire.
   */
  videos?: FacebookAdDetailsFullVideo[];
  [extra: string]: unknown;
}

/**
 * Input for Facebook Ad Transcript (facebook.ad_transcript).
 */
export interface FacebookAdTranscriptInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Meta Ad Library ad ID (e.g. "1020359190509080"). Provide either id or url.
   */
  id?: string;
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
   * Meta Ad Library ad URL (e.g. "https://www.facebook.com/ads/library?id=1020359190509080"). Provide either id or url.
   */
  url?: string;
}

/**
 * The `data` payload of Facebook Ad Transcript (facebook.ad_transcript).
 */
export interface FacebookAdTranscriptData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  adId: string;
  /**
   * Transcribed ad audio text.
   */
  transcript: string;
  transcriptAvailable: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Ad Search (facebook.ads_search).
 */
export interface FacebookAdsSearchInput {
  /**
   * Restrict to all ads (default) or only political and issue ads.
   * One of: all, political_and_issue_ads.
   */
  adType?: "all" | "political_and_issue_ads";
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Two-letter country code to scope results. Omit for all countries.
   */
  country?: string;
  /**
   * Opaque pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Filter to ads with impressions on or before this date, in YYYY-MM-DD format.
   */
  endDate?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Creative media type filter.
   * One of: ALL, IMAGE, VIDEO, MEME, IMAGE_AND_MEME, NONE.
   */
  mediaType?: "ALL" | "IMAGE" | "VIDEO" | "MEME" | "IMAGE_AND_MEME" | "NONE";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Keyword to search the Meta Ad Library for (e.g. "protein powder").
   */
  query: string;
  /**
   * Match mode for the query: loose keyword match (keyword_unordered, the default) or exact phrase (keyword_exact_phrase).
   * One of: keyword_unordered, keyword_exact_phrase.
   */
  searchType?: "keyword_unordered" | "keyword_exact_phrase";
  /**
   * Sort order: impressions (highest first, the default) or recent (most recent).
   * One of: impressions, recent.
   */
  sortBy?: "impressions" | "recent";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Filter to ads with impressions on or after this date, in YYYY-MM-DD format.
   */
  startDate?: string;
  /**
   * Ad status filter.
   * One of: ALL, ACTIVE, INACTIVE.
   * Default: ACTIVE.
   */
  status?: "ALL" | "ACTIVE" | "INACTIVE";
}

export interface FacebookAdsSearchAd {
  active: boolean;
  /**
   * Number of ads in this campaign (collation count).
   */
  adCount: number;
  /**
   * Caption line of the ad creative, usually the advertiser's display domain.
   */
  caption?: string;
  /**
   * Ad Library categories the ad is filed under.
   */
  categories?: string[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  ctaText: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  ctaType: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  displayFormat: string;
  /**
   * Epoch seconds.
   */
  endDate: number;
  /**
   * Ad Library archive ID. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Whether the ad creative is a reshare of another post.
   */
  isReshared?: boolean;
  /**
   * Description text shown under the ad's link.
   */
  linkDescription?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  linkUrl: string;
  /**
   * Creative attached to the ad: one element per image, video, or carousel card, in the order the ad presents them. Empty when the ad has none.
   */
  media?: FacebookAdsSearchMedia[];
  /**
   * Categories Facebook lists the advertising page under.
   */
  pageCategories?: string[];
  /**
   * Whether the advertising page has been deleted.
   */
  pageDeleted?: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  pageId: string;
  /**
   * Like count of the advertising page.
   */
  pageLikes?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  pageName: string;
  /**
   * Profile picture of the advertising page. This is the advertiser's identity image, not ad creative.
   * Format: uri.
   */
  pageProfilePicture?: string;
  /**
   * Canonical Facebook URL of the advertising page.
   */
  pageUrl?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  platforms: string[];
  /**
   * Inspectable Meta Ad Library URL for this ad. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  sourceUrl: string;
  /**
   * Epoch seconds. Populated whenever the provider has data for the entity.
   */
  startDate: number;
  /**
   * Ad body text. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  [extra: string]: unknown;
}

export interface FacebookAdsSearchMedia {
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
 * The `data` payload of Facebook Ad Search (facebook.ads_search).
 */
export interface FacebookAdsSearchData {
  ads: FacebookAdsSearchAd[];
  /**
   * Opaque cursor for the next page of ads, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  totalResults: number;
}

/**
 * Input for Facebook Comment Replies (facebook.comment_replies).
 */
export interface FacebookCommentRepliesInput {
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
   * The expansion_token of the comment, from the post comments endpoint.
   */
  expansionToken: string;
  /**
   * The feedback_id of the comment (not the comment id).
   */
  feedbackId: string;
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

export interface FacebookCommentRepliesReplie {
  /**
   * Identifier of the reply author. Populated whenever the provider has data for the entity.
   */
  authorId: string;
  /**
   * Display name of the reply author. Populated whenever the provider has data for the entity.
   */
  authorName: string;
  /**
   * URL of the author's profile picture.
   */
  authorProfilePicture: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Token used to expand nested replies, when present.
   */
  expansionToken?: string;
  /**
   * Facebook feedback identifier for the reply. Populated whenever the provider has data for the entity.
   */
  feedbackId: string;
  /**
   * Reply identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of reactions on the reply.
   */
  reactionCount: number;
  /**
   * Number of replies nested under this reply.
   */
  replyCount: number;
  /**
   * Reply text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Comment Replies (facebook.comment_replies).
 */
export interface FacebookCommentRepliesData {
  /**
   * True when more replies are available beyond this page.
   */
  hasNextPage: boolean;
  /**
   * Opaque cursor for the next page of replies, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Replies to the comment. Populated whenever the provider has data for the entity.
   */
  replies: FacebookCommentRepliesReplie[];
}

/**
 * Input for Facebook Company Ads (facebook.company_ads).
 */
export interface FacebookCompanyAdsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Company name to search (e.g. "nike"). Exact-match and case-sensitive against the Meta Ad Library index; an advertiser with no indexed page returns found:false.
   */
  companyName?: string;
  /**
   * Two-letter country code to scope results. Defaults to all countries.
   */
  country?: string;
  /**
   * Opaque pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Filter to ads with impressions on or before this date, in YYYY-MM-DD format.
   */
  endDate?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Two-letter language code to filter ads (e.g. "EN", "ES", "FR").
   */
  language?: string;
  /**
   * Creative media type filter.
   * One of: ALL, IMAGE, VIDEO, MEME, IMAGE_AND_MEME, NONE.
   */
  mediaType?: "ALL" | "IMAGE" | "VIDEO" | "MEME" | "IMAGE_AND_MEME" | "NONE";
  /**
   * Company's Ad Library page ID. Provide either pageId or companyName.
   */
  pageId?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Sort order: impressions (highest first, the default) or recent (most recent).
   * One of: impressions, recent.
   */
  sortBy?: "impressions" | "recent";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Filter to ads with impressions on or after this date, in YYYY-MM-DD format.
   */
  startDate?: string;
  /**
   * Ad status filter. Defaults to ACTIVE.
   * One of: ALL, ACTIVE, INACTIVE.
   */
  status?: "ALL" | "ACTIVE" | "INACTIVE";
}

export interface FacebookCompanyAdsAd {
  active: boolean;
  /**
   * Number of ads in this campaign (collation count).
   */
  adCount: number;
  /**
   * Caption line of the ad creative, usually the advertiser's display domain.
   */
  caption?: string;
  /**
   * Ad Library categories the ad is filed under.
   */
  categories?: string[];
  /**
   * Call-to-action button label on the ad.
   */
  ctaText?: string;
  /**
   * Call-to-action button type on the ad, e.g. "SHOP_NOW".
   */
  ctaType?: string;
  currency: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  displayFormat: string;
  /**
   * Epoch seconds.
   */
  endDate: number;
  /**
   * Ad Library archive ID. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Whether the ad creative is a reshare of another post.
   */
  isReshared?: boolean;
  /**
   * Description text shown under the ad's link.
   */
  linkDescription?: string;
  /**
   * Destination URL the ad links to.
   */
  linkUrl?: string;
  /**
   * Creative attached to the ad: one element per image, video, or carousel card, in the order the ad presents them. Empty when the ad has none.
   */
  media?: FacebookCompanyAdsMedia[];
  /**
   * Categories Facebook lists the advertising page under.
   */
  pageCategories?: string[];
  /**
   * Whether the advertising page has been deleted.
   */
  pageDeleted?: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  pageId: string;
  /**
   * Like count of the advertising page.
   */
  pageLikes?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  pageName: string;
  /**
   * Profile picture of the advertising page. This is the advertiser's identity image, not ad creative.
   * Format: uri.
   */
  pageProfilePicture?: string;
  /**
   * Canonical Facebook URL of the advertising page.
   */
  pageUrl?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  platforms: string[];
  /**
   * Epoch seconds. Populated whenever the provider has data for the entity.
   */
  startDate: number;
  /**
   * Ad body text. Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Headline of the ad creative.
   */
  title?: string;
  [extra: string]: unknown;
}

export interface FacebookCompanyAdsMedia {
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
 * The `data` payload of Facebook Company Ads (facebook.company_ads).
 */
export interface FacebookCompanyAdsData {
  ads: FacebookCompanyAdsAd[];
  /**
   * Opaque cursor for the next page of ads, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Total number of ads Facebook reports for the page.
   */
  totalResults?: number;
}

/**
 * Input for Facebook Event Details (facebook.event_details).
 */
export interface FacebookEventDetailsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * The event's numeric identifier.
   */
  id?: string;
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
   * The event's Facebook URL.
   */
  url?: string;
}

export interface FacebookEventDetailsHost {
  /**
   * Numeric Facebook id of the host, as a string.
   */
  id?: string;
  /**
   * Profile picture URL of the host.
   */
  image?: string;
  /**
   * Display name of the host.
   */
  name?: string;
  /**
   * Kind of Facebook entity the host is, e.g. "User" or "Page".
   */
  type?: string;
  /**
   * Canonical Facebook URL of the host.
   */
  url?: string;
  /**
   * Whether the host carries a Facebook verification badge.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Event Details (facebook.event_details).
 */
export interface FacebookEventDetailsData {
  /**
   * Street address of the event venue.
   */
  address?: string;
  /**
   * Number of people Facebook reports as attending.
   */
  attendanceCount?: number;
  /**
   * Whether the event's member list is publicly viewable.
   */
  canViewMembers?: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  city: string;
  /**
   * Numeric Facebook id of the event's city page, as a string.
   */
  cityId?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  coverPhotoUrl: string;
  /**
   * Numeric Facebook id of the event's creator, as a string.
   */
  creatorId?: string;
  /**
   * Display name of the event's creator.
   */
  creatorName?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  dayTimeSentence: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  description: string;
  /**
   * Human-readable event duration, e.g. "2 days".
   */
  duration?: string;
  endTime: string;
  /**
   * Event kind Facebook reports, e.g. "PUBLIC_TYPE".
   */
  eventKind?: string;
  goingCount: number;
  /**
   * Host line Facebook shows for the event, e.g. "Event by Kansas Comic Con".
   */
  hostContextText?: string;
  /**
   * Names of the event's hosts.
   */
  hostNames?: string[];
  /**
   * Pages or profiles hosting the event.
   */
  hosts?: FacebookEventDetailsHost[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  interestedCount: number;
  isCanceled: boolean;
  isOnline: boolean;
  /**
   * Whether the event has already finished.
   */
  isPast?: boolean;
  /**
   * Latitude of the event venue.
   */
  latitude?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  locationName: string;
  /**
   * Longitude of the event venue.
   */
  longitude?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Numeric Facebook id of the event's place, as a string.
   */
  placeId?: string;
  /**
   * Privacy setting of the event, e.g. "public".
   */
  privacy?: string;
  /**
   * RSVP style of the event, e.g. "PUBLIC_RSVP_STYLE".
   */
  rsvpStyle?: string;
  startTime: string;
  /**
   * Human-readable start time Facebook shows, e.g. "Sat, Oct 31 - Nov 1".
   */
  startTimeFormatted?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the event starts. Multiply by 1000 for a JS Date in milliseconds.
   */
  startTimestamp?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Events (facebook.events).
 */
export interface FacebookEventsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response to fetch the next page.
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
   * Timeframe filter for the returned events. Defaults to all time.
   * One of: today, this_week, next_week.
   */
  time?: "today" | "this_week" | "next_week";
  /**
   * URL of a city's or place's Facebook Events page (e.g. https://www.facebook.com/events/explore/saint-petersburg-florida/111326725552547).
   */
  url: string;
}

export interface FacebookEventsEvent {
  /**
   * Cover photo image URL of the event.
   */
  coverImage?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  dayTimeSentence: string;
  /**
   * Event kind Facebook reports, e.g. "PUBLIC_TYPE".
   */
  eventKind?: string;
  goingCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  interestedCount: number;
  /**
   * Whether the event is happening right now.
   */
  isHappeningNow?: boolean;
  isOnline: boolean;
  /**
   * Whether the event has already finished.
   */
  isPast?: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Numeric Facebook id of the event's place, as a string.
   */
  placeId?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  placeName: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  startTimestamp: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Events (facebook.events).
 */
export interface FacebookEventsData {
  events: FacebookEventsEvent[];
  /**
   * Opaque cursor for the next page of events, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for Facebook Events Search (facebook.events_search).
 */
export interface FacebookEventsSearchInput {
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The query to search events for.
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface FacebookEventsSearchEvent {
  /**
   * Populated whenever the provider has data for the entity.
   */
  coverImage: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  dayTimeSentence: string;
  /**
   * Event kind Facebook reports, e.g. "PUBLIC_TYPE".
   */
  eventKind?: string;
  goingCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  interestedCount: number;
  isOnline: boolean;
  isPast: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Numeric Facebook id of the event's place, as a string.
   */
  placeId?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  placeName: string;
  priceRangeText: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  startTimestamp: number;
  /**
   * Entity type of the record, e.g. "Event".
   */
  type?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Events Search (facebook.events_search).
 */
export interface FacebookEventsSearchData {
  events: FacebookEventsSearchEvent[];
  /**
   * Opaque cursor for the next page of events, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for Facebook Followers (facebook.followers).
 */
export interface FacebookFollowersInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Which relation to fetch: 'follower' or 'following' (e.g. follower).
   * Default: follower.
   */
  followType?: string;
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
  /**
   * Facebook page or profile URL to list follows for (e.g. https://www.facebook.com/nasa).
   */
  url: string;
}

export interface FacebookFollowersItem {
  /**
   * The account's numeric Facebook ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the account's profile picture, with tracking query params stripped. Empty when the upstream omits it.
   */
  image?: string;
  /**
   * The account's public display name. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Kind of Facebook entity the record is, e.g. "User" or "Page".
   */
  type?: string;
  /**
   * Canonical URL of the account's Facebook profile, with tracking query params stripped. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Followers (facebook.followers).
 */
export interface FacebookFollowersData {
  /**
   * Follower or following records for the target page/profile. Populated whenever the provider has data for the entity.
   */
  items: FacebookFollowersItem[];
}

/**
 * Input for Facebook Group Posts (facebook.group_posts).
 */
export interface FacebookGroupPostsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response to fetch the next page.
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
   * Ordering for the returned posts (e.g. TOP_POSTS).
   * One of: TOP_POSTS, RECENT_ACTIVITY, CHRONOLOGICAL, CHRONOLOGICAL_LISTINGS.
   */
  sort?:
    | "TOP_POSTS"
    | "RECENT_ACTIVITY"
    | "CHRONOLOGICAL"
    | "CHRONOLOGICAL_LISTINGS";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * The URL of a public Facebook group to fetch posts from (e.g. https://www.facebook.com/groups/instantpotcommunity/).
   */
  url: string;
}

export interface FacebookGroupPostsPost {
  /**
   * Populated whenever the provider has data for the entity.
   */
  authorId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  authorName: string;
  commentCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  publishTime: number;
  reactionCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Group Posts (facebook.group_posts).
 */
export interface FacebookGroupPostsData {
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  posts: FacebookGroupPostsPost[];
}

/**
 * Input for Facebook Marketplace (facebook.marketplace).
 */
export interface FacebookMarketplaceInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Filter by availability: available (default), sold, or all (e.g. sold).
   * One of: available, sold, all.
   */
  availability?: "available" | "sold" | "all";
  /**
   * Only return listings in this condition (e.g. used_good).
   * One of: new, used_like_new, used_good, used_fair.
   */
  condition?: "new" | "used_like_new" | "used_good" | "used_fair";
  /**
   * Pagination cursor from a previous response to fetch the next page.
   */
  cursor?: string;
  /**
   * Only return listings posted within this window (e.g. last_7_days).
   * One of: all, last_24_hours, last_7_days, last_30_days.
   */
  dateListed?: "all" | "last_24_hours" | "last_7_days" | "last_30_days";
  /**
   * Only return listings offering this delivery method (e.g. shipping).
   * One of: all, local_pickup, shipping.
   */
  deliveryMethod?: "all" | "local_pickup" | "shipping";
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Latitude of the search location (e.g. '30.2677').
   */
  lat: string;
  /**
   * Longitude of the search location (e.g. '-97.7475').
   */
  lng: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Maximum listing price in whole currency units, e.g. 500 for $500. Facebook may mix in a few suggested listings outside the range.
   * Range: minimum 0.
   */
  priceMax?: number;
  /**
   * Minimum listing price in whole currency units, e.g. 100 for $100. Facebook may mix in a few suggested listings outside the range.
   * Range: minimum 0.
   */
  priceMin?: number;
  /**
   * Search keyword for Marketplace listings (e.g. 'bike').
   */
  query: string;
  /**
   * Sort order for the returned listings (e.g. price_ascend).
   * One of: suggested, distance_ascend, creation_time_descend, price_ascend, price_descend.
   */
  sort?:
    | "suggested"
    | "distance_ascend"
    | "creation_time_descend"
    | "price_ascend"
    | "price_descend";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface FacebookMarketplaceListing {
  /**
   * Numeric Facebook Marketplace category id, as a string.
   */
  categoryId?: string;
  /**
   * City the listing is located in.
   */
  city?: string;
  /**
   * Numeric Facebook id of the city page, as a string.
   */
  cityPageId?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the listing was created. Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Delivery options the seller offers, e.g. "IN_PERSON" or "SHIPPING".
   */
  deliveryTypes?: string[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Whether the listing is hidden.
   */
  isHidden?: boolean;
  /**
   * Whether the listing is currently live.
   */
  isLive?: boolean;
  /**
   * Whether the listing is marked pending.
   */
  isPending?: boolean;
  isSold: boolean;
  /**
   * Human-readable listing age Facebook shows, e.g. "Listed 2 weeks ago".
   */
  listingDateText?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  locationName: string;
  /**
   * Numeric Facebook id of the listing's primary photo, as a string.
   */
  photoId?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  photoUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  priceAmount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  priceFormatted: string;
  /**
   * State or region the listing is located in.
   */
  state?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Marketplace (facebook.marketplace).
 */
export interface FacebookMarketplaceData {
  hasNextPage: boolean;
  listings: FacebookMarketplaceListing[];
  /**
   * Opaque cursor for the next page of listings, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for Facebook Marketplace Item (facebook.marketplace_item).
 */
export interface FacebookMarketplaceItemInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Facebook Marketplace item ID.
   */
  id?: string;
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
   * Facebook Marketplace item URL.
   */
  url?: string;
}

export interface FacebookMarketplaceItemAttribute {
  /**
   * Display label for the value, e.g. "Used - Good".
   */
  label?: string;
  /**
   * Attribute name, e.g. "Condition".
   */
  name?: string;
  /**
   * Raw attribute value, e.g. "used_good".
   */
  value?: string;
  [extra: string]: unknown;
}

export interface FacebookMarketplaceItemPhoto {
  /**
   * Accessibility caption Facebook generated for the photo.
   */
  caption?: string;
  /**
   * Pixel height of the photo.
   */
  height?: number;
  /**
   * Numeric Facebook id of the photo, as a string.
   */
  id?: string;
  /**
   * Image URL of the photo.
   */
  url?: string;
  /**
   * Pixel width of the photo.
   */
  width?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Marketplace Item (facebook.marketplace_item).
 */
export interface FacebookMarketplaceItemData {
  /**
   * Item specifics Facebook publishes for the listing.
   */
  attributes?: FacebookMarketplaceItemAttribute[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  categoryId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  creationTime: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  currency: string;
  /**
   * Delivery options the seller offers, e.g. "IN_PERSON" or "SHIPPING".
   */
  deliveryTypes?: string[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  description: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Whether buy-now checkout is enabled on the listing.
   */
  isBuyNowEnabled?: boolean;
  /**
   * Whether the listing is hidden.
   */
  isHidden?: boolean;
  isLive: boolean;
  /**
   * Whether the listing is marked pending.
   */
  isPending?: boolean;
  /**
   * Whether the seller offers shipping.
   */
  isShippingOffered?: boolean;
  isSold: boolean;
  /**
   * Latitude of the listing's location.
   */
  latitude?: number;
  /**
   * Human-readable listing age Facebook shows, e.g. "Listed 4 months ago".
   */
  listingDateText?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  locationText: string;
  /**
   * Longitude of the listing's location.
   */
  longitude?: number;
  /**
   * Whether buyers can message the seller about the listing.
   */
  messagingEnabled?: boolean;
  /**
   * Photos attached to the listing.
   */
  photos?: FacebookMarketplaceItemPhoto[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  priceAmount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  priceFormatted: string;
  /**
   * Canonical shareable Marketplace URL of the listing.
   */
  shareUrl?: string;
  /**
   * Previous price shown struck through, formatted for display.
   */
  strikethroughPriceFormatted?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Marketplace Location Search (facebook.marketplace_location_search).
 */
export interface FacebookMarketplaceLocationSearchInput {
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
   * Location search query (e.g. a city name).
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface FacebookMarketplaceLocationSearchLocation {
  /**
   * Populated whenever the provider has data for the entity.
   */
  city: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  latitude: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  longitude: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  pageId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  postalCode: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  subtitle: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Marketplace Location Search (facebook.marketplace_location_search).
 */
export interface FacebookMarketplaceLocationSearchData {
  locations: FacebookMarketplaceLocationSearchLocation[];
}

/**
 * Input for Facebook Page Contact Info (facebook.page_contact).
 */
export interface FacebookPageContactInput {
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
   * Locale code for the returned data (e.g. en-US).
   * Default: en-US.
   */
  language?: string;
  /**
   * Facebook Page URL or page ID to look up (e.g. https://www.facebook.com/nasa).
   */
  page: string;
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

export interface FacebookPageContactItem {
  /**
   * The page's public physical address. Empty when the page lists none.
   */
  address?: string;
  /**
   * The page's primary category (e.g. "Seafood Restaurant"). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  category?: string;
  /**
   * The page's public contact email. Empty when the page lists none.
   */
  email?: string;
  /**
   * The page's follower count.
   */
  followers?: number;
  /**
   * URL of the page's profile picture, with tracking query params stripped. Empty when the upstream omits it.
   */
  image?: string;
  /**
   * The page's public phone number. Empty when the page lists none.
   */
  phone?: string;
  /**
   * The page's public name. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical URL of the Facebook Page, with tracking query params stripped. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * The page's public website URL. Empty when the page lists none.
   */
  website?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Page Contact Info (facebook.page_contact).
 */
export interface FacebookPageContactData {
  /**
   * The page's intro text.
   */
  about?: string;
  /**
   * Facebook Ad Library status sentence for the page.
   */
  adStatus?: string;
  /**
   * Cover photo image URL of the page.
   */
  coverPhotoUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the page was created. Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Numeric Facebook id of the page, as a string.
   */
  id?: string;
  /**
   * Contact record for the requested Facebook Page (one item). Populated whenever the provider has data for the entity.
   */
  items: FacebookPageContactItem[];
  /**
   * Price range the page advertises, e.g. "$$".
   */
  priceRange?: string;
  /**
   * Recommendation summary Facebook shows for the page, e.g. "94% recommend (14,553 reviews)".
   */
  rating?: string;
  /**
   * Services the page lists, e.g. dine-in or online booking.
   */
  services?: string;
}

/**
 * Input for Facebook Page Lookup (facebook.page_lookup).
 */
export interface FacebookPageLookupInput {
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
   * Maximum number of matches to return (1-7, default 7). Facebook's quick search answers a name with at most 7 matches.
   * Range: minimum 1, maximum 7.
   * Default: 7.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Name to look up, as you would type it into Facebook's search box (e.g. NASA or plumber chicago).
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface FacebookPageLookupItem {
  /**
   * Numeric Facebook id of the Page or profile, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Profile picture URL. Facebook signs it in the query string, so it works only as returned and expires. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Whether Facebook shows the verified badge on this Page or profile.
   */
  isVerified?: boolean;
  /**
   * Display name of the Page or profile. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Facebook URL of the Page or profile. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Page Lookup (facebook.page_lookup).
 */
export interface FacebookPageLookupData {
  /**
   * Pages and profiles whose name matches the query, in Facebook's order. Matches can include personal profiles as well as Pages.
   */
  items: FacebookPageLookupItem[];
}

/**
 * Input for Facebook Page Photos (facebook.photos).
 */
export interface FacebookPhotosInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Pagination cursor from a previous response to fetch the next page.
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
   * URL of the public Facebook page or profile to fetch photos from (e.g. https://www.facebook.com/Spurs).
   */
  url: string;
}

export interface FacebookPhotosPhoto {
  /**
   * Populated whenever the provider has data for the entity.
   */
  caption: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  imageHeight: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  imageUrl: string;
  imageWidth: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  photoId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  thumbnail: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Page Photos (facebook.photos).
 */
export interface FacebookPhotosData {
  /**
   * Opaque cursor for the next page of photos, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  nextPageId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  photos: FacebookPhotosPhoto[];
}

/**
 * Input for Facebook Post (facebook.post).
 */
export interface FacebookPostInput {
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `videoId` or `authorId`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a post that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "authorId"
    | "authorImage"
    | "authorName"
    | "authorVerified"
    | "comments"
    | "createdUtc"
    | "durationSeconds"
    | "image"
    | "likes"
    | "shares"
    | "url"
    | "videoId"
    | "views"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Full Facebook post URL.
   */
  url: string;
}

/**
 * The `data` payload of Facebook Post (facebook.post).
 */
export interface FacebookPostData {
  /**
   * Numeric Facebook id of the page or profile that posted.
   */
  authorId?: string;
  /**
   * Profile picture URL of the page or profile that posted.
   */
  authorImage?: string;
  /**
   * Display name of the page or profile that posted.
   */
  authorName?: string;
  /**
   * Whether the posting page or profile carries a Facebook verification badge.
   */
  authorVerified?: boolean;
  comments: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Length of the post's video in seconds, 0 when the post carries no video.
   */
  durationSeconds?: number;
  /**
   * Facebook post id. For a reel or video post this is NOT the id in the /reel/ URL; that one is videoId. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Preview image or video thumbnail URL for the post.
   */
  image?: string;
  likes: number;
  shares: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Canonical Facebook URL of the post.
   */
  url?: string;
  /**
   * Facebook video id of the post's reel or video, the id that appears in its /reel/<id> URL. Null when the post carries no video or this lane cannot read it.
   */
  videoId?: string | null;
  views: number;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Post Comments (facebook.post_comments).
 */
export interface FacebookPostCommentsInput {
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
   * Facebook feedback id for the post (alternative to url).
   */
  feedbackId?: string;
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
   * Full Facebook post URL.
   */
  url?: string;
}

export interface FacebookPostCommentsComment {
  /**
   * Display name of the comment author. Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * Facebook id of the commenter, as a string.
   */
  authorId?: string;
  /**
   * Profile picture URL of the commenter.
   */
  authorImage?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Facebook expansion token for paging the comment's replies.
   */
  expansionToken?: string;
  /**
   * Facebook feedback id of the comment, used to fetch its replies.
   */
  feedbackId?: string;
  /**
   * Comment identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Number of reactions on the comment.
   */
  reactions: number;
  /**
   * Number of replies to the comment.
   */
  replies: number;
  /**
   * Comment text content. Populated whenever the provider has data for the entity.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Post Comments (facebook.post_comments).
 */
export interface FacebookPostCommentsData {
  /**
   * Comments on the post. Populated whenever the provider has data for the entity.
   */
  comments: FacebookPostCommentsComment[];
  /**
   * Whether more comments are available after this page.
   */
  hasNextPage?: boolean;
  /**
   * Opaque cursor for the next page of comments, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
}

/**
 * Input for Facebook Post Transcript (facebook.post_transcript).
 */
export interface FacebookPostTranscriptInput {
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
   * The Facebook post or video URL.
   */
  url: string;
}

/**
 * The `data` payload of Facebook Post Transcript (facebook.post_transcript).
 */
export interface FacebookPostTranscriptData {
  /**
   * Numeric Facebook id of the transcribed post, as a string.
   */
  postId?: string;
  transcript: string;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Profile (facebook.profile).
 */
export interface FacebookProfileInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Facebook page handle/username.
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
   * Full Facebook page URL.
   */
  url?: string;
}

/**
 * The `data` payload of Facebook Profile (facebook.profile).
 */
export interface FacebookProfileData {
  about: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  avatarUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  category: string;
  /**
   * Cover photo image URL of the page or profile.
   */
  coverPhotoUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the page was created. Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  followers: number;
  /**
   * Numeric Facebook id of the page or profile.
   */
  id?: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Whether the page is an active business page.
   */
  pageActive?: boolean;
  /**
   * Public phone number listed on the page.
   */
  phone?: string;
  /**
   * Number of people talking about the page.
   */
  talkingAboutCount?: number;
  /**
   * Canonical Facebook URL of the page or profile.
   */
  url?: string;
  /**
   * Website listed on the page.
   */
  website?: string;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Page Events (facebook.profile_events).
 */
export interface FacebookProfileEventsInput {
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
   * The Facebook page URL.
   */
  url: string;
}

export interface FacebookProfileEventsEvent {
  city: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  creatorName: string;
  dayTimeSentence: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  isCanceled: boolean;
  isOnline: boolean;
  isPast: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  placeName: string;
  startTimestamp: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Page Events (facebook.profile_events).
 */
export interface FacebookProfileEventsData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  events: FacebookProfileEventsEvent[];
  hasNextPage: boolean;
  /**
   * Opaque cursor for the next page of events, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  totalCount: number;
}

/**
 * Input for Facebook Profile Posts (facebook.profile_posts).
 */
export interface FacebookProfilePostsInput {
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Facebook page id.
   */
  pageId?: string;
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
   * Full Facebook page/profile URL.
   */
  url?: string;
}

export interface FacebookProfilePostsPost {
  /**
   * Populated whenever the provider has data for the entity.
   */
  author: string;
  /**
   * Numeric Facebook id of the page or profile that posted, as a string.
   */
  authorId?: string;
  /**
   * Comment count on the post.
   */
  comments?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Preview image or video thumbnail URL for the post.
   */
  image?: string;
  /**
   * Total reaction count on the post.
   */
  likes?: number;
  /**
   * Photo, video, and GIF attachments on the post. Empty when the post has none.
   */
  media?: FacebookProfilePostsMedia[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  text: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

export interface FacebookProfilePostsMedia {
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
 * The `data` payload of Facebook Profile Posts (facebook.profile_posts).
 */
export interface FacebookProfilePostsData {
  /**
   * Opaque cursor for the next page of posts, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor: string | null;
  /**
   * Populated whenever the provider has data for the entity.
   */
  posts: FacebookProfilePostsPost[];
}

/**
 * Input for Facebook Profile Reels (facebook.profile_reels).
 */
export interface FacebookProfileReelsInput {
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
   * Full Facebook page/profile URL.
   */
  url: string;
}

export interface FacebookProfileReelsReel {
  /**
   * Numeric Facebook id of the page or profile that posted the reel, as a string.
   */
  authorId?: string;
  /**
   * Profile picture URL of the page or profile that posted the reel.
   */
  authorImage?: string;
  /**
   * Display name of the page or profile that posted the reel.
   */
  authorName?: string;
  /**
   * Whether the posting page or profile carries a Facebook verification badge.
   */
  authorVerified?: boolean;
  /**
   * Reel caption text. Populated whenever the provider has data for the entity.
   */
  caption: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   */
  createdUtc: number;
  /**
   * Length of the reel in seconds.
   */
  durationSeconds?: number;
  /**
   * Facebook feedback id of the reel, used to fetch its comments.
   */
  feedbackId?: string;
  /**
   * Reel identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the reel thumbnail image. Populated whenever the provider has data for the entity.
   */
  thumbnail: string;
  /**
   * Canonical URL of the reel. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Number of views on the reel.
   */
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Profile Reels (facebook.profile_reels).
 */
export interface FacebookProfileReelsData {
  /**
   * Opaque cursor for the next page of reels, or null when this lane has no more. Pass it back as cursor to continue.
   */
  nextCursor?: string | null;
  /**
   * The profile's reels. Populated whenever the provider has data for the entity.
   */
  reels: FacebookProfileReelsReel[];
}

/**
 * Input for Facebook Company Search (facebook.search_companies).
 */
export interface FacebookSearchCompaniesInput {
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
   * Keyword to search advertiser pages for (e.g. "nike").
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface FacebookSearchCompaniesCompanie {
  /**
   * Populated whenever the provider has data for the entity.
   */
  category: string;
  country: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  entityType: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  igFollowers: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  igUsername: string;
  /**
   * Whether the page's linked Instagram account is verified.
   */
  igVerified?: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  imageUrl: string;
  likes: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  pageAlias: string;
  /**
   * Whether the Facebook Page has been deleted.
   */
  pageDeleted?: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  pageId: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  verification: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Company Search (facebook.search_companies).
 */
export interface FacebookSearchCompaniesData {
  companies: FacebookSearchCompaniesCompanie[];
}

/**
 * Input for Facebook Page Search (facebook.search_pages).
 */
export interface FacebookSearchPagesInput {
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
   * Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 10.
   */
  limit?: number;
  /**
   * Optional free-text location to narrow the search: a city, province, or country (e.g. 'Berlin').
   */
  location?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Keyword to search Facebook Pages for (e.g. 'coffee roasters').
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface FacebookSearchPagesItem {
  /**
   * The page's intro text.
   */
  about?: string;
  /**
   * Facebook Ad Library status sentence for the page, e.g. whether it is currently running ads.
   */
  adStatus?: string;
  /**
   * Categories Facebook lists the page under.
   */
  categories?: string[];
  /**
   * The page's primary category (e.g. "Sportswear Store"). Empty when the upstream omits it.
   */
  category?: string;
  /**
   * Cover photo image URL of the page.
   */
  coverPhotoUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the page was created. Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * The page's follower count.
   */
  followers?: number;
  /**
   * The page's numeric Facebook ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the page's profile picture, with tracking query params stripped. Empty when the upstream omits it.
   */
  image?: string;
  /**
   * The page's like count.
   */
  likes?: number;
  /**
   * Confirmed owner of the page, when Facebook publishes one.
   */
  owner?: string;
  /**
   * The page's vanity URL alias, e.g. "nikesportswear".
   */
  pageAlias?: string;
  /**
   * The page's public phone number. Empty when the upstream omits it.
   */
  phone?: string;
  /**
   * The page's public name. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical URL of the Facebook Page, with tracking query params stripped. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * The page's public website URL. Empty when the upstream omits it.
   */
  website?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Page Search (facebook.search_pages).
 */
export interface FacebookSearchPagesData {
  /**
   * Matching Facebook Page records for the query. Populated whenever the provider has data for the entity.
   */
  items: FacebookSearchPagesItem[];
}

/**
 * Input for Facebook Post Search (facebook.search_posts).
 */
export interface FacebookSearchPostsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Only return posts published on or before this date, format YYYY-MM-DD (e.g. 2024-12-31).
   */
  endDate?: string;
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
   * Optional location to narrow results; include both city and country for best matches (e.g. 'Paris, France').
   */
  location?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Keyword or phrase to search Facebook posts for (e.g. 'product launch').
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Only return posts published on or after this date, format YYYY-MM-DD (e.g. 2024-01-01).
   */
  startDate?: string;
}

export interface FacebookSearchPostsAlbumPreview {
  /**
   * Numeric Facebook id of the photo, as a string.
   */
  id?: string;
  /**
   * Image URL of the photo.
   */
  image?: string;
  /**
   * Kind of attachment, e.g. "photo".
   */
  type?: string;
  /**
   * Canonical Facebook URL of the photo.
   */
  url?: string;
  [extra: string]: unknown;
}

export interface FacebookSearchPostsItem {
  /**
   * Display name of the post's author. Empty when the upstream omits it.
   */
  authorName?: string;
  /**
   * Canonical profile URL of the post's author, with tracking query params stripped. Empty when the upstream omits it.
   */
  authorUrl?: string;
  /**
   * Total number of comments on the post.
   */
  commentCount?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc: number;
  /**
   * The post's numeric Facebook ID, as a string. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * URL of the post's primary image, with tracking query params stripped. Empty for text-only or video posts.
   */
  image?: string;
  /**
   * Total number of reactions on the post.
   */
  reactionCount?: number;
  /**
   * Total number of shares/reshares of the post.
   */
  shareCount?: number;
  /**
   * The post's text/message. Empty for media-only posts with no caption.
   */
  text: string;
  /**
   * Canonical URL of the post, with tracking query params stripped. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Post Search (facebook.search_posts).
 */
export interface FacebookSearchPostsData {
  /**
   * Preview of the photos attached to the post.
   */
  albumPreview?: FacebookSearchPostsAlbumPreview[];
  /**
   * Numeric Facebook id of the page or profile that posted, as a string.
   */
  authorId?: string;
  /**
   * Profile picture URL of the page or profile that posted.
   */
  authorImage?: string;
  /**
   * Number of images attached to the post.
   */
  imagesCount?: number;
  /**
   * Matching public Facebook post records for the query. Populated whenever the provider has data for the entity.
   */
  items: FacebookSearchPostsItem[];
  /**
   * Reaction counts on the post, broken down by reaction type.
   */
  reactions?: {
    /**
     * Angry reactions.
     */
    angry?: number;
    /**
     * Care reactions.
     */
    care?: number;
    /**
     * Haha reactions.
     */
    haha?: number;
    /**
     * Like reactions.
     */
    like?: number;
    /**
     * Love reactions.
     */
    love?: number;
    /**
     * Sad reactions.
     */
    sad?: number;
    /**
     * Wow reactions.
     */
    wow?: number;
  };
  /**
   * Kind of record Facebook returned, e.g. "post".
   */
  type?: string;
}

/**
 * Typed methods for the facebook platform. Attached to the AnyAPI client as
 * `client.facebook`.
 */
export class FacebookNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Facebook Ad Details
   *
   * Look up a single Meta Ad Library ad by ID or URL and get the advertiser, creative text, call-to-action, platforms, and run dates as clean JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.adDetails({ id: "962050096457659" });
   */
  adDetails(
    input: FacebookAdDetailsInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookAdDetailsData>> {
    return this._core.run("facebook.ad_details", input, options);
  }

  /**
   * Facebook Ad Creative Details
   *
   * Pull one Meta Ad Library ad with its creative: every carousel variant, image and video URL, headline, body, and call to action.
   *
   * Price: $0.00462 per request plus $0 per result (maximum $0.00462).
   *
   * @example
   * const res = await client.facebook.adDetailsFull({ id: "962050096457659" });
   */
  adDetailsFull(
    input: FacebookAdDetailsFullInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookAdDetailsFullData>> {
    return this._core.run("facebook.ad_details_full", input, options);
  }

  /**
   * Facebook Ad Transcript
   *
   * Get the spoken-word transcript of a Meta Ad Library video ad by ad ID or URL.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.adTranscript({ id: "931919822778200" });
   */
  adTranscript(
    input: FacebookAdTranscriptInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookAdTranscriptData>> {
    return this._core.run("facebook.ad_transcript", input, options);
  }

  /**
   * Facebook Ad Search
   *
   * Search the Meta Ad Library by keyword and get matching ads (advertiser, creative text, CTA, platforms, and run dates) with cursor pagination.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.adsSearch({ query: "nike", country: "US", searchType: "keyword_exact_phrase" });
   */
  adsSearch(
    input: FacebookAdsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookAdsSearchData>> {
    return this._core.run("facebook.ads_search", input, options);
  }

  /**
   * Iterate every result of Facebook Ad Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterAdsSearch(
    input: FacebookAdsSearchInput,
    options?: RequestOptions,
  ): Paginator<FacebookAdsSearchAd, RunResult<FacebookAdsSearchData>> {
    return paginate<FacebookAdsSearchAd, RunResult<FacebookAdsSearchData>>(
      this._core,
      "facebook.ads_search",
      input as unknown as Record<string, unknown>,
      "ads",
      false,
      options,
    );
  }

  /**
   * Facebook Comment Replies
   *
   * List the replies to a Facebook post comment (text, author, reactions, and timestamps) as normalized JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.commentReplies({ expansionToken: "MjoxNzgzMjI4OTY4OgF_o5zrjDnpemv4bwPtpsShXutqvKIw2bKs2YuJksL1Ak8n8YG-_KPSQGkIks5oW6wdRfhb_cRv9q5OX0NHjFJwEupYNZi9pcMV-FYLWLp47u-eusMkZFOMwbkISsTln7gtSvQrOzlffyavOTIL85PECYzGfunU2IAEkd13CIikxu06Mw10UJ1ShcFAmz8175R1uJfYy_iOixWZukqfrWhUfVOXApXznxx7qXvUxPwct76qe6p7-nVWQrPC_SZc2xh9Z8ggL3WMjgTzSq4oWFSsyZuuVsyVVjSgdjRQiDqtJSeEUlSjTr6vOnKsvKV-GpnBRaeA0BCaNRhqpB4xDZoduBuO5ZYrFvWLJdJLryDhCPI2Ss-Z33cEM2Vz7pLf1wJzE7TuizXPwICSn1DA_Prca-BItTbOUjAjfiySap1LXYkGuuDC2ziUdiEsmE5XhevMP8XtF_2WQlMNcGbXMEQyAWDUawtPAxXgMeRrCO9YGSweFQ4OZumoIlSGa3Vfjy-euUOHT1IAsNbV2A8rAq4HJNU3jCXQTn0vfW9xvbVQhL-53Mhw2YPjhlvUj6QpnGA25N8", feedbackId: "ZmVlZGJhY2s6MTM5MzQ2MTExNTQ4MTkyN18yMDgyNjUzMjQ1ODA5Mzg2" });
   */
  commentReplies(
    input: FacebookCommentRepliesInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookCommentRepliesData>> {
    return this._core.run("facebook.comment_replies", input, options);
  }

  /**
   * Iterate every result of Facebook Comment Replies across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterCommentReplies(
    input: FacebookCommentRepliesInput,
    options?: RequestOptions,
  ): Paginator<
    FacebookCommentRepliesReplie,
    RunResult<FacebookCommentRepliesData>
  > {
    return paginate<
      FacebookCommentRepliesReplie,
      RunResult<FacebookCommentRepliesData>
    >(
      this._core,
      "facebook.comment_replies",
      input as unknown as Record<string, unknown>,
      "replies",
      false,
      options,
    );
  }

  /**
   * Facebook Company Ads
   *
   * List the Meta Ad Library ads a company is running by page ID or company name (creative text, format, platforms, and run dates) with cursor pagination.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.companyAds({ companyName: "nike", sortBy: "recent" });
   */
  companyAds(
    input: FacebookCompanyAdsInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookCompanyAdsData>> {
    return this._core.run("facebook.company_ads", input, options);
  }

  /**
   * Iterate every result of Facebook Company Ads across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterCompanyAds(
    input: FacebookCompanyAdsInput,
    options?: RequestOptions,
  ): Paginator<FacebookCompanyAdsAd, RunResult<FacebookCompanyAdsData>> {
    return paginate<FacebookCompanyAdsAd, RunResult<FacebookCompanyAdsData>>(
      this._core,
      "facebook.company_ads",
      input as unknown as Record<string, unknown>,
      "ads",
      false,
      options,
    );
  }

  /**
   * Facebook Event Details
   *
   * Fetch full details for a single Facebook event by ID or URL (name, schedule, venue, hosts, and attendance) as normalized JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.eventDetails({ id: "4045709448982422" });
   */
  eventDetails(
    input: FacebookEventDetailsInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookEventDetailsData>> {
    return this._core.run("facebook.event_details", input, options);
  }

  /**
   * Facebook Events
   *
   * List public Facebook events for a city or place by its events-page URL (event name, date, venue, and attendance) as normalized JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.events({ url: "https://www.facebook.com/events/explore/saint-petersburg-florida/111326725552547" });
   */
  events(
    input: FacebookEventsInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookEventsData>> {
    return this._core.run("facebook.events", input, options);
  }

  /**
   * Iterate every result of Facebook Events across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterEvents(
    input: FacebookEventsInput,
    options?: RequestOptions,
  ): Paginator<FacebookEventsEvent, RunResult<FacebookEventsData>> {
    return paginate<FacebookEventsEvent, RunResult<FacebookEventsData>>(
      this._core,
      "facebook.events",
      input as unknown as Record<string, unknown>,
      "events",
      false,
      options,
    );
  }

  /**
   * Facebook Events Search
   *
   * Search public Facebook events by keyword and get structured event records (name, schedule, venue, pricing, and attendance) as normalized JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.eventsSearch({ query: "music festival" });
   */
  eventsSearch(
    input: FacebookEventsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookEventsSearchData>> {
    return this._core.run("facebook.events_search", input, options);
  }

  /**
   * Iterate every result of Facebook Events Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterEventsSearch(
    input: FacebookEventsSearchInput,
    options?: RequestOptions,
  ): Paginator<FacebookEventsSearchEvent, RunResult<FacebookEventsSearchData>> {
    return paginate<
      FacebookEventsSearchEvent,
      RunResult<FacebookEventsSearchData>
    >(
      this._core,
      "facebook.events_search",
      input as unknown as Record<string, unknown>,
      "events",
      false,
      options,
    );
  }

  /**
   * Facebook Followers
   *
   * List the public followers (or accounts followed) of any Facebook page or profile URL as normalized JSON records.
   *
   * Price: $0.03 per request plus $0.0045 per result (maximum $0.12).
   *
   * @example
   * const res = await client.facebook.followers({ url: "https://www.facebook.com/nike", limit: 3 });
   */
  followers(
    input: FacebookFollowersInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookFollowersData>> {
    return this._core.run("facebook.followers", input, options);
  }

  /**
   * Facebook Group Posts
   *
   * Fetch recent posts from any public Facebook group by URL: text, author, reactions, and comment counts.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.groupPosts({ url: "https://www.facebook.com/groups/instantpotcommunity/" });
   */
  groupPosts(
    input: FacebookGroupPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookGroupPostsData>> {
    return this._core.run("facebook.group_posts", input, options);
  }

  /**
   * Iterate every result of Facebook Group Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterGroupPosts(
    input: FacebookGroupPostsInput,
    options?: RequestOptions,
  ): Paginator<FacebookGroupPostsPost, RunResult<FacebookGroupPostsData>> {
    return paginate<FacebookGroupPostsPost, RunResult<FacebookGroupPostsData>>(
      this._core,
      "facebook.group_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Facebook Marketplace
   *
   * Search Facebook Marketplace listings by keyword near a location, filter by price, condition, delivery, recency, and availability, and get title, price, location, and image as normalized JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.marketplace({ lat: "30.2677", lng: "-97.7475", query: "bike", priceMax: 500, priceMin: 100 });
   */
  marketplace(
    input: FacebookMarketplaceInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookMarketplaceData>> {
    return this._core.run("facebook.marketplace", input, options);
  }

  /**
   * Iterate every result of Facebook Marketplace across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterMarketplace(
    input: FacebookMarketplaceInput,
    options?: RequestOptions,
  ): Paginator<FacebookMarketplaceListing, RunResult<FacebookMarketplaceData>> {
    return paginate<
      FacebookMarketplaceListing,
      RunResult<FacebookMarketplaceData>
    >(
      this._core,
      "facebook.marketplace",
      input as unknown as Record<string, unknown>,
      "listings",
      false,
      options,
    );
  }

  /**
   * Facebook Marketplace Item
   *
   * Fetch full details for a single Facebook Marketplace listing by ID or URL (title, price, location, photos, and attributes) as normalized JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.marketplaceItem({ url: "https://www.facebook.com/marketplace/item/1656586118821988/" });
   */
  marketplaceItem(
    input: FacebookMarketplaceItemInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookMarketplaceItemData>> {
    return this._core.run("facebook.marketplace_item", input, options);
  }

  /**
   * Facebook Marketplace Location Search
   *
   * Resolve a place name to Facebook Marketplace locations with coordinates and metadata as normalized JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.marketplaceLocationSearch({ query: "Austin" });
   */
  marketplaceLocationSearch(
    input: FacebookMarketplaceLocationSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookMarketplaceLocationSearchData>> {
    return this._core.run(
      "facebook.marketplace_location_search",
      input,
      options,
    );
  }

  /**
   * Facebook Page Contact Info
   *
   * Look up a Facebook Page's public contact details (email, phone, website, and address) by page URL or ID.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.pageContact({ page: "https://www.facebook.com/joesstonecrab" });
   */
  pageContact(
    input: FacebookPageContactInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookPageContactData>> {
    return this._core.run("facebook.page_contact", input, options);
  }

  /**
   * Facebook Page Lookup
   *
   * Look up Facebook Pages and profiles by name with Facebook's own quick search. A name lookup that returns basic identity fields only: name, URL, profile image, Facebook id, and verified status. Matches can include personal profiles as well as Pages. For full Page details (category, followers, phone, website), use facebook.search_pages.
   *
   * Price: $0.00975 per request.
   *
   * @example
   * const res = await client.facebook.pageLookup({ query: "NASA", limit: 5 });
   */
  pageLookup(
    input: FacebookPageLookupInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookPageLookupData>> {
    return this._core.run("facebook.page_lookup", input, options);
  }

  /**
   * Facebook Page Photos
   *
   * Fetch recent photos posted by any public Facebook page or profile (image URLs, captions, and dimensions) as normalized JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.photos({ url: "https://www.facebook.com/Spurs" });
   */
  photos(
    input: FacebookPhotosInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookPhotosData>> {
    return this._core.run("facebook.photos", input, options);
  }

  /**
   * Iterate every result of Facebook Page Photos across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterPhotos(
    input: FacebookPhotosInput,
    options?: RequestOptions,
  ): Paginator<FacebookPhotosPhoto, RunResult<FacebookPhotosData>> {
    return paginate<FacebookPhotosPhoto, RunResult<FacebookPhotosData>>(
      this._core,
      "facebook.photos",
      input as unknown as Record<string, unknown>,
      "photos",
      false,
      options,
    );
  }

  /**
   * Facebook Post
   *
   * Fetch a single Facebook post by URL with its text and engagement counts (likes, comments, shares, views).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.post({ url: "https://www.facebook.com/reel/2166091230582141/" });
   */
  post(
    input: FacebookPostInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookPostData>> {
    return this._core.run("facebook.post", input, options);
  }

  /**
   * Facebook Post Comments
   *
   * List the comments on a Facebook post by URL with cursor pagination (text, author, reactions, reply count).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.postComments({ url: "https://www.facebook.com/reel/2166091230582141/" });
   */
  postComments(
    input: FacebookPostCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookPostCommentsData>> {
    return this._core.run("facebook.post_comments", input, options);
  }

  /**
   * Iterate every result of Facebook Post Comments across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterPostComments(
    input: FacebookPostCommentsInput,
    options?: RequestOptions,
  ): Paginator<
    FacebookPostCommentsComment,
    RunResult<FacebookPostCommentsData>
  > {
    return paginate<
      FacebookPostCommentsComment,
      RunResult<FacebookPostCommentsData>
    >(
      this._core,
      "facebook.post_comments",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

  /**
   * Facebook Post Transcript
   *
   * Get the spoken-word transcript of any public Facebook video post by URL as normalized JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.postTranscript({ url: "https://www.facebook.com/reel/2166091230582141/" });
   */
  postTranscript(
    input: FacebookPostTranscriptInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookPostTranscriptData>> {
    return this._core.run("facebook.post_transcript", input, options);
  }

  /**
   * Facebook Profile
   *
   * Fetch a Facebook page's public profile (likes, followers, category, about) by URL or handle.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.profile({ url: "https://www.facebook.com/nike" });
   */
  profile(
    input: FacebookProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookProfileData>> {
    return this._core.run("facebook.profile", input, options);
  }

  /**
   * Facebook Page Events
   *
   * List upcoming and past events hosted by any public Facebook page by URL (name, schedule, venue, and host) as normalized JSON.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.profileEvents({ url: "https://www.facebook.com/brickyardoldtown" });
   */
  profileEvents(
    input: FacebookProfileEventsInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookProfileEventsData>> {
    return this._core.run("facebook.profile_events", input, options);
  }

  /**
   * Iterate every result of Facebook Page Events across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterProfileEvents(
    input: FacebookProfileEventsInput,
    options?: RequestOptions,
  ): Paginator<
    FacebookProfileEventsEvent,
    RunResult<FacebookProfileEventsData>
  > {
    return paginate<
      FacebookProfileEventsEvent,
      RunResult<FacebookProfileEventsData>
    >(
      this._core,
      "facebook.profile_events",
      input as unknown as Record<string, unknown>,
      "events",
      false,
      options,
    );
  }

  /**
   * Facebook Profile Posts
   *
   * List a Facebook page's recent posts by URL or page id with cursor pagination (text, author, publication time, permalink).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.profilePosts({ url: "https://www.facebook.com/nike" });
   */
  profilePosts(
    input: FacebookProfilePostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookProfilePostsData>> {
    return this._core.run("facebook.profile_posts", input, options);
  }

  /**
   * Iterate every result of Facebook Profile Posts across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterProfilePosts(
    input: FacebookProfilePostsInput,
    options?: RequestOptions,
  ): Paginator<FacebookProfilePostsPost, RunResult<FacebookProfilePostsData>> {
    return paginate<
      FacebookProfilePostsPost,
      RunResult<FacebookProfilePostsData>
    >(
      this._core,
      "facebook.profile_posts",
      input as unknown as Record<string, unknown>,
      "posts",
      false,
      options,
    );
  }

  /**
   * Facebook Profile Reels
   *
   * List a Facebook page's reels by URL with cursor pagination (caption, view count, permalink, thumbnail).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.profileReels({ url: "https://www.facebook.com/nike" });
   */
  profileReels(
    input: FacebookProfileReelsInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookProfileReelsData>> {
    return this._core.run("facebook.profile_reels", input, options);
  }

  /**
   * Iterate every result of Facebook Profile Reels across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterProfileReels(
    input: FacebookProfileReelsInput,
    options?: RequestOptions,
  ): Paginator<FacebookProfileReelsReel, RunResult<FacebookProfileReelsData>> {
    return paginate<
      FacebookProfileReelsReel,
      RunResult<FacebookProfileReelsData>
    >(
      this._core,
      "facebook.profile_reels",
      input as unknown as Record<string, unknown>,
      "reels",
      false,
      options,
    );
  }

  /**
   * Facebook Company Search
   *
   * Search the Meta Ad Library for advertisers by keyword and get matching pages: page ID, category, verification, follower counts, and linked Instagram.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.facebook.searchCompanies({ query: "nike" });
   */
  searchCompanies(
    input: FacebookSearchCompaniesInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookSearchCompaniesData>> {
    return this._core.run("facebook.search_companies", input, options);
  }

  /**
   * Facebook Page Search
   *
   * Search Facebook Pages by keyword, optionally narrowed to a location, and get structured page profiles (name, category, followers, contact details).
   *
   * Price: $0.0011 per request plus $0.0121 per result (maximum $0.123).
   *
   * @example
   * const res = await client.facebook.searchPages({ query: "nike", limit: 3 });
   */
  searchPages(
    input: FacebookSearchPagesInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookSearchPagesData>> {
    return this._core.run("facebook.search_pages", input, options);
  }

  /**
   * Facebook Post Search
   *
   * Search public Facebook posts by keyword, optionally filtered by location, and get structured post records (text, author, engagement).
   *
   * Price: $0 per request plus $0.00135 per result (maximum $0.027).
   *
   * @example
   * const res = await client.facebook.searchPosts({ query: "nike", limit: 3 });
   */
  searchPosts(
    input: FacebookSearchPostsInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookSearchPostsData>> {
    return this._core.run("facebook.search_posts", input, options);
  }
}
