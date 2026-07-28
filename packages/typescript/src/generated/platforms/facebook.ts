// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

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

export type FacebookAdDetailsData = unknown;

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

export type FacebookAdTranscriptData = unknown;

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
   * Creative media type filter.
   * One of: ALL, IMAGE, VIDEO, MEME, IMAGE_AND_MEME, NONE.
   */
  mediaType?: "ALL" | "IMAGE" | "VIDEO" | "MEME" | "IMAGE_AND_MEME" | "NONE";
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

export type FacebookAdsSearchData = unknown;

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

export type FacebookCommentRepliesData = unknown;

/**
 * Input for Facebook Company Ads (facebook.company_ads).
 */
export interface FacebookCompanyAdsInput {
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
   * Sort order: impressions (highest first, the default) or recent (most recent).
   * One of: impressions, recent.
   */
  sortBy?: "impressions" | "recent";
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

export type FacebookCompanyAdsData = unknown;

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

export type FacebookEventDetailsData = unknown;

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

export type FacebookEventsData = unknown;

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

export type FacebookEventsSearchData = unknown;

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

export type FacebookFollowersData = unknown;

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

export type FacebookGroupPostsData = unknown;

/**
 * Input for Facebook Marketplace (facebook.marketplace).
 */
export interface FacebookMarketplaceInput {
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
   * Latitude of the search location (e.g. '30.2677').
   */
  lat: string;
  /**
   * Longitude of the search location (e.g. '-97.7475').
   */
  lng: string;
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
}

export type FacebookMarketplaceData = unknown;

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

export type FacebookMarketplaceItemData = unknown;

/**
 * Input for Facebook Marketplace Location Search (facebook.marketplace_location_search).
 */
export interface FacebookMarketplaceLocationSearchInput {
  /**
   * Location search query (e.g. a city name).
   */
  query: string;
}

export type FacebookMarketplaceLocationSearchData = unknown;

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

export type FacebookPageContactData = unknown;

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

export type FacebookPhotosData = unknown;

/**
 * Input for Facebook Post (facebook.post).
 */
export interface FacebookPostInput {
  /**
   * Full Facebook post URL.
   */
  url: string;
}

export type FacebookPostData = unknown;

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

export type FacebookPostCommentsData = unknown;

/**
 * Input for Facebook Post Transcript (facebook.post_transcript).
 */
export interface FacebookPostTranscriptInput {
  /**
   * The Facebook post or video URL.
   */
  url: string;
}

export type FacebookPostTranscriptData = unknown;

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

export type FacebookProfileData = unknown;

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

export type FacebookProfileEventsData = unknown;

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

export type FacebookProfilePostsData = unknown;

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

export type FacebookProfileReelsData = unknown;

/**
 * Input for Facebook Company Search (facebook.search_companies).
 */
export interface FacebookSearchCompaniesInput {
  /**
   * Keyword to search advertiser pages for (e.g. "nike").
   */
  query: string;
}

export type FacebookSearchCompaniesData = unknown;

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
   * Optional free-text location to narrow the search: a city, province, or country (e.g. 'Berlin').
   */
  location?: string;
  /**
   * Keyword to search Facebook Pages for (e.g. 'coffee roasters').
   */
  query: string;
}

export type FacebookSearchPagesData = unknown;

/**
 * Input for Facebook Post Search (facebook.search_posts).
 */
export interface FacebookSearchPostsInput {
  /**
   * Only return posts published on or before this date, format YYYY-MM-DD (e.g. 2024-12-31).
   */
  endDate?: string;
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
  /**
   * Only return posts published on or after this date, format YYYY-MM-DD (e.g. 2024-01-01).
   */
  startDate?: string;
}

export type FacebookSearchPostsData = unknown;

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
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.adDetails({ id: "1869276447125570" });
   */
  adDetails(
    input: FacebookAdDetailsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookAdDetailsData>> {
    return this._core.run(
      "facebook.ad_details",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookAdDetailsData>>;
  }

  /**
   * Facebook Ad Transcript
   *
   * Get the spoken-word transcript of a Meta Ad Library video ad by ad ID or URL.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.adTranscript({ id: "931919822778200" });
   */
  adTranscript(
    input: FacebookAdTranscriptInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookAdTranscriptData>> {
    return this._core.run(
      "facebook.ad_transcript",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookAdTranscriptData>>;
  }

  /**
   * Facebook Ad Search
   *
   * Search the Meta Ad Library by keyword and get matching ads (advertiser, creative text, CTA, platforms, and run dates) with cursor pagination and transparent failover.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.adsSearch({ query: "nike", country: "US", searchType: "keyword_exact_phrase" });
   */
  adsSearch(
    input: FacebookAdsSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookAdsSearchData>> {
    return this._core.run(
      "facebook.ads_search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookAdsSearchData>>;
  }

  /**
   * Facebook Comment Replies
   *
   * List the replies to a Facebook post comment (text, author, reactions, and timestamps) as normalized JSON at a.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.commentReplies({ expansionToken: "MjoxNzgzMjI4OTY4OgF_o5zrjDnpemv4bwPtpsShXutqvKIw2bKs2YuJksL1Ak8n8YG-_KPSQGkIks5oW6wdRfhb_cRv9q5OX0NHjFJwEupYNZi9pcMV-FYLWLp47u-eusMkZFOMwbkISsTln7gtSvQrOzlffyavOTIL85PECYzGfunU2IAEkd13CIikxu06Mw10UJ1ShcFAmz8175R1uJfYy_iOixWZukqfrWhUfVOXApXznxx7qXvUxPwct76qe6p7-nVWQrPC_SZc2xh9Z8ggL3WMjgTzSq4oWFSsyZuuVsyVVjSgdjRQiDqtJSeEUlSjTr6vOnKsvKV-GpnBRaeA0BCaNRhqpB4xDZoduBuO5ZYrFvWLJdJLryDhCPI2Ss-Z33cEM2Vz7pLf1wJzE7TuizXPwICSn1DA_Prca-BItTbOUjAjfiySap1LXYkGuuDC2ziUdiEsmE5XhevMP8XtF_2WQlMNcGbXMEQyAWDUawtPAxXgMeRrCO9YGSweFQ4OZumoIlSGa3Vfjy-euUOHT1IAsNbV2A8rAq4HJNU3jCXQTn0vfW9xvbVQhL-53Mhw2YPjhlvUj6QpnGA25N8", feedbackId: "ZmVlZGJhY2s6MTM5MzQ2MTExNTQ4MTkyN18yMDgyNjUzMjQ1ODA5Mzg2" });
   */
  commentReplies(
    input: FacebookCommentRepliesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookCommentRepliesData>> {
    return this._core.run(
      "facebook.comment_replies",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookCommentRepliesData>>;
  }

  /**
   * Facebook Company Ads
   *
   * List the Meta Ad Library ads a company is running by page ID or company name (creative text, format, platforms, and run dates) with cursor pagination.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.companyAds({ companyName: "nike", sortBy: "recent" });
   */
  companyAds(
    input: FacebookCompanyAdsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookCompanyAdsData>> {
    return this._core.run(
      "facebook.company_ads",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookCompanyAdsData>>;
  }

  /**
   * Facebook Event Details
   *
   * Fetch full details for a single Facebook event by ID or URL (name, schedule, venue, hosts, and attendance) as normalized JSON at a.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.eventDetails({ id: "4045709448982422" });
   */
  eventDetails(
    input: FacebookEventDetailsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookEventDetailsData>> {
    return this._core.run(
      "facebook.event_details",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookEventDetailsData>>;
  }

  /**
   * Facebook Events
   *
   * List public Facebook events for a city or place by its events-page URL (event name, date, venue, and attendance) as normalized JSON at a.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.events({ url: "https://www.facebook.com/events/explore/saint-petersburg-florida/111326725552547" });
   */
  events(
    input: FacebookEventsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookEventsData>> {
    return this._core.run(
      "facebook.events",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookEventsData>>;
  }

  /**
   * Facebook Events Search
   *
   * Search public Facebook events by keyword and get structured event records (name, schedule, venue, pricing, and attendance) as normalized JSON at a.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.eventsSearch({ query: "music festival" });
   */
  eventsSearch(
    input: FacebookEventsSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookEventsSearchData>> {
    return this._core.run(
      "facebook.events_search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookEventsSearchData>>;
  }

  /**
   * Facebook Followers
   *
   * List the public followers (or accounts followed) of any Facebook page or profile URL as normalized JSON records.
   *
   * Price: $0 per request plus $0.006 per result (maximum $0.12).
   *
   * @example
   * const res = await client.facebook.followers({ url: "https://www.facebook.com/nike", limit: 3 });
   */
  followers(
    input: FacebookFollowersInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookFollowersData>> {
    return this._core.run(
      "facebook.followers",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookFollowersData>>;
  }

  /**
   * Facebook Group Posts
   *
   * Fetch recent posts from any public Facebook group by URL: text, author, reactions, and comment counts.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.groupPosts({ url: "https://www.facebook.com/groups/1270525996445602/" });
   */
  groupPosts(
    input: FacebookGroupPostsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookGroupPostsData>> {
    return this._core.run(
      "facebook.group_posts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookGroupPostsData>>;
  }

  /**
   * Facebook Marketplace
   *
   * Search Facebook Marketplace listings by keyword near a location, filter by price, condition, delivery, recency, and availability, and get title, price, location, and image as normalized JSON.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.marketplace({ lat: "30.2677", lng: "-97.7475", query: "bike", priceMax: 500, priceMin: 100 });
   */
  marketplace(
    input: FacebookMarketplaceInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookMarketplaceData>> {
    return this._core.run(
      "facebook.marketplace",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookMarketplaceData>>;
  }

  /**
   * Facebook Marketplace Item
   *
   * Fetch full details for a single Facebook Marketplace listing by ID or URL (title, price, location, photos, and attributes) as normalized JSON at a.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.marketplaceItem({ url: "https://www.facebook.com/marketplace/item/1656586118821988/" });
   */
  marketplaceItem(
    input: FacebookMarketplaceItemInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookMarketplaceItemData>> {
    return this._core.run(
      "facebook.marketplace_item",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookMarketplaceItemData>>;
  }

  /**
   * Facebook Marketplace Location Search
   *
   * Resolve a place name to Facebook Marketplace locations with coordinates and metadata as normalized JSON at a.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.marketplaceLocationSearch({ query: "Austin" });
   */
  marketplaceLocationSearch(
    input: FacebookMarketplaceLocationSearchInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookMarketplaceLocationSearchData>> {
    return this._core.run(
      "facebook.marketplace_location_search",
      input,
      options,
    ) as unknown as Promise<
      BareRunResult<FacebookMarketplaceLocationSearchData>
    >;
  }

  /**
   * Facebook Page Contact Info
   *
   * Look up a Facebook Page's public contact details (email, phone, website, and address) by page URL or ID.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.pageContact({ page: "https://www.facebook.com/joesstonecrab" });
   */
  pageContact(
    input: FacebookPageContactInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookPageContactData>> {
    return this._core.run(
      "facebook.page_contact",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookPageContactData>>;
  }

  /**
   * Facebook Page Photos
   *
   * Fetch recent photos posted by any public Facebook page or profile (image URLs, captions, and dimensions) as normalized JSON at a.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.photos({ url: "https://www.facebook.com/Spurs" });
   */
  photos(
    input: FacebookPhotosInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookPhotosData>> {
    return this._core.run(
      "facebook.photos",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookPhotosData>>;
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
  ): Promise<BareRunResult<FacebookPostData>> {
    return this._core.run(
      "facebook.post",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookPostData>>;
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
  ): Promise<BareRunResult<FacebookPostCommentsData>> {
    return this._core.run(
      "facebook.post_comments",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookPostCommentsData>>;
  }

  /**
   * Facebook Post Transcript
   *
   * Get the spoken-word transcript of any public Facebook video post by URL as normalized JSON at a.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.postTranscript({ url: "https://www.facebook.com/reel/2166091230582141/" });
   */
  postTranscript(
    input: FacebookPostTranscriptInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookPostTranscriptData>> {
    return this._core.run(
      "facebook.post_transcript",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookPostTranscriptData>>;
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
  ): Promise<BareRunResult<FacebookProfileData>> {
    return this._core.run(
      "facebook.profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookProfileData>>;
  }

  /**
   * Facebook Page Events
   *
   * List upcoming and past events hosted by any public Facebook page by URL (name, schedule, venue, and host) as normalized JSON at a.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.profileEvents({ url: "https://www.facebook.com/brickyardoldtown" });
   */
  profileEvents(
    input: FacebookProfileEventsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookProfileEventsData>> {
    return this._core.run(
      "facebook.profile_events",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookProfileEventsData>>;
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
  ): Promise<BareRunResult<FacebookProfilePostsData>> {
    return this._core.run(
      "facebook.profile_posts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookProfilePostsData>>;
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
  ): Promise<BareRunResult<FacebookProfileReelsData>> {
    return this._core.run(
      "facebook.profile_reels",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookProfileReelsData>>;
  }

  /**
   * Facebook Company Search
   *
   * Search the Meta Ad Library for advertisers by keyword and get matching pages: page ID, category, verification, follower counts, and linked Instagram.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.facebook.searchCompanies({ query: "nike" });
   */
  searchCompanies(
    input: FacebookSearchCompaniesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookSearchCompaniesData>> {
    return this._core.run(
      "facebook.search_companies",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookSearchCompaniesData>>;
  }

  /**
   * Facebook Page Search
   *
   * Search Facebook Pages by keyword, optionally narrowed to a location, and get structured page profiles (name, category, followers, contact details) at a.
   *
   * Price: $0.001 per request plus $0.011 per result (maximum $0.111).
   *
   * @example
   * const res = await client.facebook.searchPages({ query: "nike", limit: 3 });
   */
  searchPages(
    input: FacebookSearchPagesInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookSearchPagesData>> {
    return this._core.run(
      "facebook.search_pages",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookSearchPagesData>>;
  }

  /**
   * Facebook Post Search
   *
   * Search public Facebook posts by keyword, optionally filtered by location, and get structured post records (text, author, engagement).
   *
   * Price: $0 per request plus $0.003 per result (maximum $0.06).
   *
   * @example
   * const res = await client.facebook.searchPosts({ query: "nike", limit: 3 });
   */
  searchPosts(
    input: FacebookSearchPostsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<FacebookSearchPostsData>> {
    return this._core.run(
      "facebook.search_posts",
      input,
      options,
    ) as unknown as Promise<BareRunResult<FacebookSearchPostsData>>;
  }
}
