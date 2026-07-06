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
   * Meta Ad Library ad ID (e.g. "702369045530963"). Provide either id or url.
   */
  id?: string;
  /**
   * Meta Ad Library ad URL (e.g. "https://www.facebook.com/ads/library?id=1185617869915074"). Provide either id or url.
   */
  url?: string;
}

/**
 * The `data` payload of Facebook Ad Details (facebook.ad_details).
 */
export interface FacebookAdDetailsData {
  /**
   * Whether the ad is currently running.
   */
  active?: boolean;
  /**
   * Ad Library archive ID (stable identity).
   */
  adArchiveId: string;
  /**
   * Call-to-action label.
   * Present whenever the upstream returns this record.
   */
  ctaText?: string;
  /**
   * Spend currency, may be empty.
   */
  currency?: string;
  /**
   * Ad creative format.
   * Present whenever the upstream returns this record.
   */
  displayFormat?: string;
  /**
   * Run end, epoch seconds.
   */
  endDate?: number;
  /**
   * Creative destination URL.
   * Present whenever the upstream returns this record.
   */
  linkUrl?: string;
  /**
   * Advertiser page ID (stable identity).
   */
  pageId: string;
  /**
   * Advertiser page name.
   * Present whenever the upstream returns this record.
   */
  pageName?: string;
  /**
   * Publisher platforms the ad runs on.
   * Present whenever the upstream returns this record.
   */
  platforms?: string[];
  /**
   * Run start, epoch seconds.
   * Present whenever the upstream returns this record.
   */
  startDate?: number;
  /**
   * Ad body text.
   * Present whenever the upstream returns this record.
   */
  text?: string;
  /**
   * Creative title.
   * Present whenever the upstream returns this record.
   */
  title?: string;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Ad Transcript (facebook.ad_transcript).
 */
export interface FacebookAdTranscriptInput {
  /**
   * Meta Ad Library ad ID (e.g. "1020359190509080"). Provide either id or url.
   */
  id?: string;
  /**
   * Meta Ad Library ad URL (e.g. "https://www.facebook.com/ads/library?id=1020359190509080"). Provide either id or url.
   */
  url?: string;
}

/**
 * The `data` payload of Facebook Ad Transcript (facebook.ad_transcript).
 */
export interface FacebookAdTranscriptData {
  adId: string;
  /**
   * Transcribed ad audio text.
   */
  transcript: string;
  transcriptAvailable: boolean;
  url: string;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Ad Search (facebook.ads_search).
 */
export interface FacebookAdsSearchInput {
  /**
   * Two-letter country code to scope results. Omit for all countries.
   */
  country?: string;
  /**
   * Opaque pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Creative media type filter.
   * One of: ALL, IMAGE, VIDEO, MEME, IMAGE_AND_MEME, NONE.
   */
  mediaType?: "ALL" | "IMAGE" | "VIDEO" | "MEME" | "IMAGE_AND_MEME" | "NONE";
  /**
   * Keyword to search the Meta Ad Library for (e.g. "protein powder").
   */
  query: string;
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
  ctaText: string;
  ctaType: string;
  displayFormat: string;
  /**
   * Epoch seconds.
   */
  endDate: number;
  /**
   * Ad Library archive ID.
   */
  id: string;
  linkUrl: string;
  pageId: string;
  pageName: string;
  platforms: string[];
  /**
   * Epoch seconds.
   */
  startDate: number;
  /**
   * Ad body text.
   */
  text: string;
  title: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Ad Search (facebook.ads_search).
 */
export interface FacebookAdsSearchData {
  ads: FacebookAdsSearchAd[];
  nextCursor: string;
  totalResults: number;
}

/**
 * Input for Facebook Comment Replies (facebook.comment_replies).
 */
export interface FacebookCommentRepliesInput {
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
}

export interface FacebookCommentRepliesReplie {
  authorId: string;
  authorName: string;
  authorProfilePicture: string;
  createdAt: string;
  expansionToken?: string;
  feedbackId: string;
  id: string;
  reactionCount: number;
  replyCount: number;
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Comment Replies (facebook.comment_replies).
 */
export interface FacebookCommentRepliesData {
  hasNextPage: boolean;
  nextCursor: string;
  replies: FacebookCommentRepliesReplie[];
}

/**
 * Input for Facebook Company Ads (facebook.company_ads).
 */
export interface FacebookCompanyAdsInput {
  /**
   * Company name to search (e.g. "nike"). Provide either pageId or companyName.
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
   * Creative media type filter.
   * One of: ALL, IMAGE, VIDEO, MEME, IMAGE_AND_MEME, NONE.
   */
  mediaType?: "ALL" | "IMAGE" | "VIDEO" | "MEME" | "IMAGE_AND_MEME" | "NONE";
  /**
   * Company's Ad Library page ID. Provide either pageId or companyName.
   */
  pageId?: string;
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
  currency: string;
  displayFormat: string;
  /**
   * Epoch seconds.
   */
  endDate: number;
  /**
   * Ad Library archive ID.
   */
  id: string;
  pageId: string;
  pageName: string;
  platforms: string[];
  /**
   * Epoch seconds.
   */
  startDate: number;
  /**
   * Ad body text.
   */
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Company Ads (facebook.company_ads).
 */
export interface FacebookCompanyAdsData {
  ads: FacebookCompanyAdsAd[];
  nextCursor: string;
}

/**
 * Input for Facebook Event Details (facebook.event_details).
 */
export interface FacebookEventDetailsInput {
  /**
   * The event's numeric identifier.
   */
  id?: string;
  /**
   * The event's Facebook URL.
   */
  url?: string;
}

/**
 * The `data` payload of Facebook Event Details (facebook.event_details).
 */
export interface FacebookEventDetailsData {
  city: string;
  coverPhotoUrl: string;
  dayTimeSentence: string;
  description: string;
  endTime: string;
  goingCount: number;
  id: string;
  interestedCount: number;
  isCanceled: boolean;
  isOnline: boolean;
  locationName: string;
  name: string;
  startTime: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Events (facebook.events).
 */
export interface FacebookEventsInput {
  /**
   * Pagination cursor from a previous response to fetch the next page.
   */
  cursor?: string;
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
  dayTimeSentence: string;
  goingCount: number;
  id: string;
  interestedCount: number;
  isOnline: boolean;
  name: string;
  placeName: string;
  startTimestamp: number;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Events (facebook.events).
 */
export interface FacebookEventsData {
  events: FacebookEventsEvent[];
  nextCursor: string;
}

/**
 * Input for Facebook Events Search (facebook.events_search).
 */
export interface FacebookEventsSearchInput {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * The query to search events for.
   */
  query: string;
}

export interface FacebookEventsSearchEvent {
  coverImage: string;
  dayTimeSentence: string;
  goingCount: number;
  id: string;
  interestedCount: number;
  isOnline: boolean;
  isPast: boolean;
  name: string;
  placeName: string;
  priceRangeText: string;
  startTimestamp: number;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Events Search (facebook.events_search).
 */
export interface FacebookEventsSearchData {
  events: FacebookEventsSearchEvent[];
  nextCursor: string;
}

/**
 * Input for Facebook Followers (facebook.followers).
 */
export interface FacebookFollowersInput {
  /**
   * Which relation to fetch: 'follower' or 'following' (e.g. follower).
   * Default: follower.
   */
  followType?: string;
  /**
   * Maximum number of results to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Facebook page or profile URL to list follows for (e.g. https://www.facebook.com/nasa).
   */
  url: string;
}

export interface FacebookFollowersItem {
  id: string;
  /**
   * Present whenever the upstream returns this record.
   */
  name?: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Followers (facebook.followers).
 */
export interface FacebookFollowersData {
  /**
   * Follower or following records: profile name, profile URL, and picture for each account.
   */
  items: FacebookFollowersItem[];
}

/**
 * Input for Facebook Group Posts (facebook.group_posts).
 */
export interface FacebookGroupPostsInput {
  /**
   * Pagination cursor from a previous response to fetch the next page.
   */
  cursor?: string;
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
   * The URL of a public Facebook group to fetch posts from (e.g. https://www.facebook.com/groups/1270525996445602/).
   */
  url: string;
}

export interface FacebookGroupPostsPost {
  authorId: string;
  authorName: string;
  commentCount: number;
  id: string;
  permalink: string;
  publishTime: number;
  reactionCount: number;
  text: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Group Posts (facebook.group_posts).
 */
export interface FacebookGroupPostsData {
  nextCursor: string;
  posts: FacebookGroupPostsPost[];
}

/**
 * Input for Facebook Marketplace (facebook.marketplace).
 */
export interface FacebookMarketplaceInput {
  /**
   * Pagination cursor from a previous response to fetch the next page.
   */
  cursor?: string;
  /**
   * Latitude of the search location (e.g. '30.2677').
   */
  lat: string;
  /**
   * Longitude of the search location (e.g. '-97.7475').
   */
  lng: string;
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
}

export interface FacebookMarketplaceListing {
  id: string;
  isSold: boolean;
  locationName: string;
  photoUrl: string;
  priceAmount: number;
  priceFormatted: string;
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Marketplace (facebook.marketplace).
 */
export interface FacebookMarketplaceData {
  hasNextPage: boolean;
  listings: FacebookMarketplaceListing[];
  nextCursor: string;
}

/**
 * Input for Facebook Marketplace Item (facebook.marketplace_item).
 */
export interface FacebookMarketplaceItemInput {
  /**
   * Facebook Marketplace item ID.
   */
  id?: string;
  /**
   * Facebook Marketplace item URL.
   */
  url?: string;
}

/**
 * The `data` payload of Facebook Marketplace Item (facebook.marketplace_item).
 */
export interface FacebookMarketplaceItemData {
  categoryId: string;
  creationTime: string;
  currency: string;
  description: string;
  id: string;
  isLive: boolean;
  isSold: boolean;
  locationText: string;
  priceAmount: number;
  priceFormatted: string;
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Marketplace Location Search (facebook.marketplace_location_search).
 */
export interface FacebookMarketplaceLocationSearchInput {
  /**
   * Location search query (e.g. a city name).
   */
  query: string;
}

export interface FacebookMarketplaceLocationSearchLocation {
  city: string;
  latitude: number;
  longitude: number;
  name: string;
  pageId: string;
  postalCode: string;
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
   * Locale code for the returned data (e.g. en-US).
   * Default: en-US.
   */
  language?: string;
  /**
   * Facebook Page URL or page ID to look up (e.g. https://www.facebook.com/nasa).
   */
  page: string;
}

export interface FacebookPageContactItem {
  address?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  category?: string;
  email?: string;
  phone?: string;
  title: string;
  url: string;
  website?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Page Contact Info (facebook.page_contact).
 */
export interface FacebookPageContactData {
  /**
   * Page contact records: page name, email, phone, website, physical address, and category.
   */
  items: FacebookPageContactItem[];
}

/**
 * Input for Facebook Page Photos (facebook.photos).
 */
export interface FacebookPhotosInput {
  /**
   * Pagination cursor from a previous response to fetch the next page.
   */
  cursor?: string;
  /**
   * URL of the public Facebook page or profile to fetch photos from (e.g. https://www.facebook.com/Spurs).
   */
  url: string;
}

export interface FacebookPhotosPhoto {
  caption: string;
  id: string;
  imageHeight: number;
  imageUrl: string;
  imageWidth: number;
  photoId: string;
  thumbnail: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Page Photos (facebook.photos).
 */
export interface FacebookPhotosData {
  nextCursor: string;
  nextPageId: string;
  photos: FacebookPhotosPhoto[];
}

/**
 * Input for Facebook Post (facebook.post).
 */
export interface FacebookPostInput {
  /**
   * Full Facebook post URL.
   */
  url: string;
}

/**
 * The `data` payload of Facebook Post (facebook.post).
 */
export interface FacebookPostData {
  comments: number;
  id: string;
  likes: number;
  shares: number;
  text: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Post Comments (facebook.post_comments).
 */
export interface FacebookPostCommentsInput {
  /**
   * Pagination cursor from a previous response's nextCursor.
   */
  cursor?: string;
  /**
   * Facebook feedback id for the post (alternative to url).
   */
  feedbackId?: string;
  /**
   * Full Facebook post URL.
   */
  url?: string;
}

export interface FacebookPostCommentsComment {
  author: string;
  createdAt: string;
  id: string;
  reactions: number;
  replies: number;
  text: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Post Comments (facebook.post_comments).
 */
export interface FacebookPostCommentsData {
  comments: FacebookPostCommentsComment[];
  nextCursor: string;
}

/**
 * Input for Facebook Post Transcript (facebook.post_transcript).
 */
export interface FacebookPostTranscriptInput {
  /**
   * The Facebook post or video URL.
   */
  url: string;
}

/**
 * The `data` payload of Facebook Post Transcript (facebook.post_transcript).
 */
export interface FacebookPostTranscriptData {
  transcript: string;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Profile (facebook.profile).
 */
export interface FacebookProfileInput {
  /**
   * Facebook page handle/username.
   */
  handle?: string;
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
  avatarUrl: string;
  category: string;
  followers: number;
  likes: number;
  name: string;
  [extra: string]: unknown;
}

/**
 * Input for Facebook Page Events (facebook.profile_events).
 */
export interface FacebookProfileEventsInput {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * The Facebook page URL.
   */
  url: string;
}

export interface FacebookProfileEventsEvent {
  city: string;
  creatorName: string;
  dayTimeSentence: string;
  id: string;
  isCanceled: boolean;
  isOnline: boolean;
  isPast: boolean;
  name: string;
  placeName: string;
  startTimestamp: number;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Page Events (facebook.profile_events).
 */
export interface FacebookProfileEventsData {
  events: FacebookProfileEventsEvent[];
  hasNextPage: boolean;
  nextCursor: string;
  totalCount: number;
}

/**
 * Input for Facebook Profile Posts (facebook.profile_posts).
 */
export interface FacebookProfilePostsInput {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * Facebook page id.
   */
  pageId?: string;
  /**
   * Full Facebook page/profile URL.
   */
  url?: string;
}

export interface FacebookProfilePostsPost {
  author: string;
  id: string;
  text: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Profile Posts (facebook.profile_posts).
 */
export interface FacebookProfilePostsData {
  posts: FacebookProfilePostsPost[];
}

/**
 * Input for Facebook Profile Reels (facebook.profile_reels).
 */
export interface FacebookProfileReelsInput {
  /**
   * Pagination cursor from a previous response.
   */
  cursor?: string;
  /**
   * Full Facebook page/profile URL.
   */
  url: string;
}

export interface FacebookProfileReelsReel {
  caption: string;
  createdAt: string;
  id: string;
  thumbnail: string;
  url: string;
  views: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Profile Reels (facebook.profile_reels).
 */
export interface FacebookProfileReelsData {
  reels: FacebookProfileReelsReel[];
}

/**
 * Input for Facebook Company Search (facebook.search_companies).
 */
export interface FacebookSearchCompaniesInput {
  /**
   * Keyword to search advertiser pages for (e.g. "nike").
   */
  query: string;
}

export interface FacebookSearchCompaniesCompanie {
  category: string;
  country: string;
  entityType: string;
  igFollowers: number;
  igUsername: string;
  imageUrl: string;
  likes: number;
  name: string;
  pageAlias: string;
  pageId: string;
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
   * Maximum number of results to return (1-10, default 10). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 10.
   */
  limit?: number;
  /**
   * Optional free-text location to narrow the search - a city, province, or country (e.g. 'Berlin').
   */
  location?: string;
  /**
   * Keyword to search Facebook Pages for (e.g. 'coffee roasters').
   */
  query: string;
}

export interface FacebookSearchPagesItem {
  title: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Page Search (facebook.search_pages).
 */
export interface FacebookSearchPagesData {
  /**
   * Page profile records: page name, category, follower/like counts, contact details, and page URL.
   */
  items: FacebookSearchPagesItem[];
}

/**
 * Input for Facebook Post Search (facebook.search_posts).
 */
export interface FacebookSearchPostsInput {
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
   * Keyword or phrase to search Facebook posts for (e.g. 'product launch').
   */
  query: string;
}

export interface FacebookSearchPostsItem {
  text: string;
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Facebook Post Search (facebook.search_posts).
 */
export interface FacebookSearchPostsData {
  /**
   * Post records: post text, author, timestamp, engagement counts (reactions, comments, shares), and post URL.
   */
  items: FacebookSearchPostsItem[];
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
   * Look up a single Meta Ad Library ad by ID or URL and get the advertiser, creative text, call-to-action, platforms, and run dates as clean JSON, billed per request in USD.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.adDetails({ id: "1869276447125570" });
   */
  adDetails(
    input: FacebookAdDetailsInput,
    options?: RequestOptions,
  ): Promise<RunResult<FacebookAdDetailsData>> {
    return this._core.run("facebook.ad_details", input, options);
  }

  /**
   * Facebook Ad Transcript
   *
   * Get the spoken-word transcript of a Meta Ad Library video ad by ad ID or URL, billed per request in USD.
   *
   * Price: $0.002 per request.
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
   * Search the Meta Ad Library by keyword and get matching ads - advertiser, creative text, CTA, platforms, and run dates - with cursor pagination and transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.adsSearch({ query: "nike", country: "US" });
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
   * List the replies to a Facebook post comment - text, author, reactions, and timestamps - as normalized JSON at a flat USD price per request.
   *
   * Price: $0.002 per request.
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
   * List the Meta Ad Library ads a company is running by page ID or company name - creative text, format, platforms, and run dates - with cursor pagination, billed per request in USD.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.companyAds({ companyName: "nike" });
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
   * Fetch full details for a single Facebook event by ID or URL - name, schedule, venue, hosts, and attendance - as normalized JSON at a flat USD price per request.
   *
   * Price: $0.002 per request.
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
   * List public Facebook events for a city or place by its events-page URL - event name, date, venue, and attendance - as normalized JSON at a flat USD price per request.
   *
   * Price: $0.002 per request.
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
   * Search public Facebook events by keyword and get structured event records - name, schedule, venue, pricing, and attendance - as normalized JSON at a flat USD price per request.
   *
   * Price: $0.002 per request.
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
   * List the public followers - or accounts followed - of any Facebook page or profile URL as normalized JSON records, priced per request in USD.
   *
   * Price: $0.006 per result.
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
   * Fetch recent posts from any public Facebook group by URL - text, author, reactions, and comment counts - at a flat per-request USD price.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.groupPosts({ url: "https://www.facebook.com/groups/1270525996445602/" });
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
   * Search Facebook Marketplace listings by keyword near a location - title, price, location, and image - as normalized JSON at a flat USD price per request.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.marketplace({ lat: "30.2677", lng: "-97.7475", query: "bike" });
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
   * Fetch full details for a single Facebook Marketplace listing by ID or URL - title, price, location, photos, and attributes - as normalized JSON at a flat USD price per request.
   *
   * Price: $0.002 per request.
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
   * Resolve a place name to Facebook Marketplace locations with coordinates and metadata as normalized JSON at a flat USD price per request.
   *
   * Price: $0.002 per request.
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
   * Look up a Facebook Page's public contact details - email, phone, website, and address - by page URL or ID, with transparent per-request USD pricing.
   *
   * Price: $0.002 per request.
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
   * Facebook Page Photos
   *
   * Fetch recent photos posted by any public Facebook page or profile - image URLs, captions, and dimensions - as normalized JSON at a flat USD price per request.
   *
   * Price: $0.002 per request.
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
   * Fetch a single Facebook post by URL with its text and engagement counts (likes, comments, shares, views), normalized across providers.
   *
   * Price: $0.002 per request.
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
   * List the comments on a Facebook post by URL with cursor pagination (text, author, reactions, reply count), normalized across providers.
   *
   * Price: $0.002 per request.
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
   * Get the spoken-word transcript of any public Facebook video post by URL as normalized JSON at a flat USD price per request.
   *
   * Price: $0.002 per request.
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
   * Fetch a Facebook page's public profile (likes, followers, category, about) by URL or handle, normalized across providers.
   *
   * Price: $0.002 per request.
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
   * List upcoming and past events hosted by any public Facebook page by URL - name, schedule, venue, and host - as normalized JSON at a flat USD price per request.
   *
   * Price: $0.002 per request.
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
   * List a Facebook page's recent posts by URL or page id with cursor pagination (text, author, permalink), normalized across providers.
   *
   * Price: $0.002 per request.
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
   * Facebook Profile Reels
   *
   * List a Facebook page's reels by URL with cursor pagination (caption, view count, permalink, thumbnail), normalized across providers.
   *
   * Price: $0.002 per request.
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
   * Facebook Company Search
   *
   * Search the Meta Ad Library for advertisers by keyword and get matching pages - page ID, category, verification, follower counts, and linked Instagram - billed per request in USD.
   *
   * Price: $0.002 per request.
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
   * Search Facebook Pages by keyword, optionally narrowed to a location, and get structured page profiles (name, category, followers, contact details) at a flat USD price per request.
   *
   * Price: $0.001 per request plus $0.011 per result.
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
   * Search public Facebook posts by keyword, optionally filtered by location, and get structured post records (text, author, engagement) with transparent per-request USD pricing.
   *
   * Price: $0.003 per result.
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
