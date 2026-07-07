// Generated - do not edit. Regenerate with: pnpm generate

import type { BareRunResult, RunResult } from "../core/index.js";

import type {
  AhrefsBacklinksData,
  AhrefsBacklinksInput,
  AhrefsKeywordIdeasData,
  AhrefsKeywordIdeasInput,
  AhrefsKeywordsData,
  AhrefsKeywordsInput,
  AhrefsOverviewData,
  AhrefsOverviewInput,
} from "./platforms/ahrefs.js";
import type {
  AirbnbSearchData,
  AirbnbSearchInput,
} from "./platforms/airbnb.js";
import type {
  AlibabaSearchData,
  AlibabaSearchInput,
} from "./platforms/alibaba.js";
import type {
  AmazonAsinsData,
  AmazonAsinsInput,
  AmazonBestsellersData,
  AmazonBestsellersInput,
  AmazonProductData,
  AmazonProductInput,
  AmazonReviewsData,
  AmazonReviewsInput,
  AmazonSearchData,
  AmazonSearchInput,
} from "./platforms/amazon.js";
import type {
  AppstoreReviewsData,
  AppstoreReviewsInput,
} from "./platforms/appstore.js";
import type {
  BlueskyPostData,
  BlueskyPostInput,
  BlueskyProfileData,
  BlueskyProfileInput,
  BlueskyUserPostsData,
  BlueskyUserPostsInput,
} from "./platforms/bluesky.js";
import type {
  BookingSearchData,
  BookingSearchInput,
} from "./platforms/booking.js";
import type {
  CoinmarketcapListingsData,
  CoinmarketcapListingsInput,
} from "./platforms/coinmarketcap.js";
import type {
  CongressTradesData,
  CongressTradesInput,
} from "./platforms/congress.js";
import type {
  DexscreenerTokensData,
  DexscreenerTokensInput,
} from "./platforms/dexscreener.js";
import type {
  EbaySearchData,
  EbaySearchInput,
  EbaySoldListingsData,
  EbaySoldListingsInput,
} from "./platforms/ebay.js";
import type {
  EmailFindData,
  EmailFindInput,
  EmailVerifyData,
  EmailVerifyInput,
} from "./platforms/email.js";
import type {
  FacebookAdDetailsData,
  FacebookAdDetailsInput,
  FacebookAdTranscriptData,
  FacebookAdTranscriptInput,
  FacebookAdsSearchData,
  FacebookAdsSearchInput,
  FacebookCommentRepliesData,
  FacebookCommentRepliesInput,
  FacebookCompanyAdsData,
  FacebookCompanyAdsInput,
  FacebookEventDetailsData,
  FacebookEventDetailsInput,
  FacebookEventsData,
  FacebookEventsInput,
  FacebookEventsSearchData,
  FacebookEventsSearchInput,
  FacebookFollowersData,
  FacebookFollowersInput,
  FacebookGroupPostsData,
  FacebookGroupPostsInput,
  FacebookMarketplaceData,
  FacebookMarketplaceInput,
  FacebookMarketplaceItemData,
  FacebookMarketplaceItemInput,
  FacebookMarketplaceLocationSearchData,
  FacebookMarketplaceLocationSearchInput,
  FacebookPageContactData,
  FacebookPageContactInput,
  FacebookPhotosData,
  FacebookPhotosInput,
  FacebookPostCommentsData,
  FacebookPostCommentsInput,
  FacebookPostData,
  FacebookPostInput,
  FacebookPostTranscriptData,
  FacebookPostTranscriptInput,
  FacebookProfileData,
  FacebookProfileEventsData,
  FacebookProfileEventsInput,
  FacebookProfileInput,
  FacebookProfilePostsData,
  FacebookProfilePostsInput,
  FacebookProfileReelsData,
  FacebookProfileReelsInput,
  FacebookSearchCompaniesData,
  FacebookSearchCompaniesInput,
  FacebookSearchPagesData,
  FacebookSearchPagesInput,
  FacebookSearchPostsData,
  FacebookSearchPostsInput,
} from "./platforms/facebook.js";
import type {
  FiverrSearchData,
  FiverrSearchInput,
} from "./platforms/fiverr.js";
import type {
  GithubRepositoryData,
  GithubRepositoryInput,
  GithubTrendingDevelopersData,
  GithubTrendingDevelopersInput,
  GithubTrendingRepositoriesData,
  GithubTrendingRepositoriesInput,
  GithubUserActivityData,
  GithubUserActivityInput,
  GithubUserContributionsData,
  GithubUserContributionsInput,
  GithubUserData,
  GithubUserFollowersData,
  GithubUserFollowersInput,
  GithubUserFollowingData,
  GithubUserFollowingInput,
  GithubUserInput,
  GithubUserPullRequestsData,
  GithubUserPullRequestsInput,
  GithubUserRepositoriesData,
  GithubUserRepositoriesInput,
} from "./platforms/github.js";
import type {
  GlassdoorJobsData,
  GlassdoorJobsInput,
} from "./platforms/glassdoor.js";
import type {
  GoogleImagesData,
  GoogleImagesInput,
  GoogleNewsData,
  GoogleNewsInput,
  GoogleSearchData,
  GoogleSearchInput,
} from "./platforms/google.js";
import type {
  GoogleAdsAdDetailsData,
  GoogleAdsAdDetailsInput,
  GoogleAdsAdvertiserSearchData,
  GoogleAdsAdvertiserSearchInput,
  GoogleAdsCompanyAdsData,
  GoogleAdsCompanyAdsInput,
  GoogleAdsSearchData,
  GoogleAdsSearchInput,
} from "./platforms/google_ads.js";
import type {
  GoogleFinanceQuoteData,
  GoogleFinanceQuoteInput,
} from "./platforms/google_finance.js";
import type {
  GoogleShoppingSearchData,
  GoogleShoppingSearchInput,
} from "./platforms/google_shopping.js";
import type {
  HackernewsProfileData,
  HackernewsProfileInput,
  HackernewsSearchData,
  HackernewsSearchInput,
  HackernewsStoryCommentsData,
  HackernewsStoryCommentsInput,
  HackernewsStoryData,
  HackernewsStoryInput,
} from "./platforms/hackernews.js";
import type { IndeedJobsData, IndeedJobsInput } from "./platforms/indeed.js";
import type {
  InstagramAudioReelsData,
  InstagramAudioReelsInput,
  InstagramBasicProfileData,
  InstagramBasicProfileInput,
  InstagramEmbedData,
  InstagramEmbedInput,
  InstagramFollowersData,
  InstagramFollowersInput,
  InstagramFollowingData,
  InstagramFollowingInput,
  InstagramHashtagAnalyticsData,
  InstagramHashtagAnalyticsInput,
  InstagramHighlightDetailData,
  InstagramHighlightDetailInput,
  InstagramMediaTranscriptData,
  InstagramMediaTranscriptInput,
  InstagramPostCommentsData,
  InstagramPostCommentsInput,
  InstagramPostData,
  InstagramPostInput,
  InstagramProfileData,
  InstagramProfileInput,
  InstagramReelTranscriptData,
  InstagramReelTranscriptInput,
  InstagramReelsSearchData,
  InstagramReelsSearchInput,
  InstagramSearchData,
  InstagramSearchHashtagData,
  InstagramSearchHashtagInput,
  InstagramSearchInput,
  InstagramSearchProfilesData,
  InstagramSearchProfilesInput,
  InstagramStoriesFullData,
  InstagramStoriesFullInput,
  InstagramStoriesThinData,
  InstagramStoriesThinInput,
  InstagramTrendingReelsData,
  InstagramTrendingReelsInput,
  InstagramUserHighlightsData,
  InstagramUserHighlightsInput,
  InstagramUserPostsData,
  InstagramUserPostsInput,
  InstagramUserReelsData,
  InstagramUserReelsInput,
} from "./platforms/instagram.js";
import type {
  LinkedinAdData,
  LinkedinAdInput,
  LinkedinAdsData,
  LinkedinAdsInput,
  LinkedinAdsSearchData,
  LinkedinAdsSearchInput,
  LinkedinCompanyData,
  LinkedinCompanyEmployeesData,
  LinkedinCompanyEmployeesInput,
  LinkedinCompanyInput,
  LinkedinCompanyPostsData,
  LinkedinCompanyPostsInput,
  LinkedinEmailData,
  LinkedinEmailInput,
  LinkedinJobsData,
  LinkedinJobsInput,
  LinkedinPostData,
  LinkedinPostInput,
  LinkedinPostTranscriptData,
  LinkedinPostTranscriptInput,
  LinkedinProfileData,
  LinkedinProfileInput,
  LinkedinSearchCompaniesData,
  LinkedinSearchCompaniesInput,
  LinkedinSearchPostsData,
  LinkedinSearchPostsInput,
  LinkedinSearchProfilesData,
  LinkedinSearchProfilesInput,
} from "./platforms/linkedin.js";
import type {
  MapsContactsData,
  MapsContactsInput,
  MapsPlaceData,
  MapsPlaceInput,
  MapsReviewsData,
  MapsReviewsInput,
  MapsSearchData,
  MapsSearchInput,
} from "./platforms/maps.js";
import type {
  PandaexpressLocationsData,
  PandaexpressLocationsInput,
  PandaexpressMenuData,
  PandaexpressMenuInput,
  PandaexpressNutritionData,
  PandaexpressNutritionInput,
} from "./platforms/pandaexpress.js";
import type {
  PersonSkipTraceData,
  PersonSkipTraceInput,
} from "./platforms/person.js";
import type {
  PinterestSearchData,
  PinterestSearchInput,
} from "./platforms/pinterest.js";
import type {
  PlaystoreReviewsData,
  PlaystoreReviewsInput,
} from "./platforms/playstore.js";
import type {
  PolymarketMarketsData,
  PolymarketMarketsInput,
} from "./platforms/polymarket.js";
import type {
  RealtorSearchData,
  RealtorSearchInput,
} from "./platforms/realtor.js";
import type {
  RedditPostCommentsData,
  RedditPostCommentsInput,
  RedditPostTranscriptData,
  RedditPostTranscriptInput,
  RedditSearchData,
  RedditSearchInput,
  RedditSubredditDetailsData,
  RedditSubredditDetailsInput,
  RedditSubredditPostsData,
  RedditSubredditPostsInput,
  RedditSubredditSearchData,
  RedditSubredditSearchInput,
} from "./platforms/reddit.js";
import type {
  RedfinSearchData,
  RedfinSearchInput,
} from "./platforms/redfin.js";
import type {
  RednoteNoteCommentsData,
  RednoteNoteCommentsInput,
  RednoteNoteData,
  RednoteNoteInput,
  RednoteProfileData,
  RednoteProfileInput,
  RednoteSearchData,
  RednoteSearchInput,
  RednoteSearchUsersData,
  RednoteSearchUsersInput,
  RednoteUserNotesData,
  RednoteUserNotesInput,
} from "./platforms/rednote.js";
import type { SecFilingsData, SecFilingsInput } from "./platforms/sec.js";
import type {
  SemrushKeywordsData,
  SemrushKeywordsInput,
  SemrushOverviewData,
  SemrushOverviewInput,
} from "./platforms/semrush.js";
import type {
  SeoCompetitorsDomainData,
  SeoCompetitorsDomainInput,
  SeoDomainIntersectionData,
  SeoDomainIntersectionInput,
  SeoDomainRankOverviewData,
  SeoDomainRankOverviewInput,
  SeoKeywordDifficultyData,
  SeoKeywordDifficultyInput,
  SeoKeywordIdeasData,
  SeoKeywordIdeasInput,
  SeoKeywordOverviewData,
  SeoKeywordOverviewInput,
  SeoKeywordSuggestionsData,
  SeoKeywordSuggestionsInput,
  SeoLocalPackData,
  SeoLocalPackInput,
  SeoRankedKeywordsData,
  SeoRankedKeywordsInput,
  SeoRelatedKeywordsData,
  SeoRelatedKeywordsInput,
  SeoSearchIntentData,
  SeoSearchIntentInput,
  SeoSearchVolumeData,
  SeoSearchVolumeInput,
} from "./platforms/seo.js";
import type {
  SnapchatProfileData,
  SnapchatProfileInput,
} from "./platforms/snapchat.js";
import type {
  SocialFinderData,
  SocialFinderInput,
} from "./platforms/social.js";
import type {
  SpotifyAlbumData,
  SpotifyAlbumInput,
  SpotifyArtistData,
  SpotifyArtistInput,
  SpotifyPlayCountData,
  SpotifyPlayCountInput,
  SpotifyPodcastData,
  SpotifyPodcastEpisodesData,
  SpotifyPodcastEpisodesInput,
  SpotifyPodcastInput,
  SpotifySearchData,
  SpotifySearchInput,
  SpotifyTrackData,
  SpotifyTrackInput,
} from "./platforms/spotify.js";
import type {
  SubstackPostsData,
  SubstackPostsInput,
} from "./platforms/substack.js";
import type {
  ThreadsPostData,
  ThreadsPostInput,
  ThreadsProfileData,
  ThreadsProfileInput,
  ThreadsSearchData,
  ThreadsSearchInput,
  ThreadsSearchUsersData,
  ThreadsSearchUsersInput,
  ThreadsUserPostsData,
  ThreadsUserPostsInput,
} from "./platforms/threads.js";
import type {
  TiktokAdLibraryAdData,
  TiktokAdLibraryAdInput,
  TiktokAdLibrarySearchData,
  TiktokAdLibrarySearchInput,
  TiktokAudienceDemographicsData,
  TiktokAudienceDemographicsInput,
  TiktokCommentRepliesData,
  TiktokCommentRepliesInput,
  TiktokFollowersData,
  TiktokFollowersInput,
  TiktokFollowingData,
  TiktokFollowingInput,
  TiktokHashtagVideosData,
  TiktokHashtagVideosInput,
  TiktokLiveData,
  TiktokLiveInput,
  TiktokProfileData,
  TiktokProfileInput,
  TiktokProfileRegionData,
  TiktokProfileRegionInput,
  TiktokProfileVideosData,
  TiktokProfileVideosInput,
  TiktokSearchHashtagData,
  TiktokSearchHashtagInput,
  TiktokSearchKeywordData,
  TiktokSearchKeywordInput,
  TiktokSearchTopData,
  TiktokSearchTopInput,
  TiktokSearchUsersData,
  TiktokSearchUsersInput,
  TiktokSongData,
  TiktokSongInput,
  TiktokSongVideosData,
  TiktokSongVideosInput,
  TiktokTrendingFeedData,
  TiktokTrendingFeedInput,
  TiktokVideoCommentsData,
  TiktokVideoCommentsInput,
  TiktokVideoData,
  TiktokVideoInput,
  TiktokVideoTranscriptData,
  TiktokVideoTranscriptInput,
} from "./platforms/tiktok.js";
import type {
  TiktokShopProductData,
  TiktokShopProductInput,
  TiktokShopProductReviewsData,
  TiktokShopProductReviewsInput,
  TiktokShopSearchData,
  TiktokShopSearchInput,
  TiktokShopShopProductsData,
  TiktokShopShopProductsInput,
  TiktokShopUserShowcaseData,
  TiktokShopUserShowcaseInput,
} from "./platforms/tiktok_shop.js";
import type {
  TripadvisorReviewsData,
  TripadvisorReviewsInput,
  TripadvisorSearchData,
  TripadvisorSearchInput,
} from "./platforms/tripadvisor.js";
import type {
  TrustpilotReviewsData,
  TrustpilotReviewsInput,
} from "./platforms/trustpilot.js";
import type {
  TruthsocialPostData,
  TruthsocialPostInput,
  TruthsocialProfileData,
  TruthsocialProfileInput,
  TruthsocialUserPostsData,
  TruthsocialUserPostsInput,
} from "./platforms/truthsocial.js";
import type {
  TwitterCommunityData,
  TwitterCommunityInput,
  TwitterCommunityTweetsData,
  TwitterCommunityTweetsInput,
  TwitterFollowersData,
  TwitterFollowersInput,
  TwitterFollowingData,
  TwitterFollowingInput,
  TwitterProfileData,
  TwitterProfileInput,
  TwitterRepliesData,
  TwitterRepliesInput,
  TwitterSearchData,
  TwitterSearchInput,
  TwitterTweetData,
  TwitterTweetInput,
  TwitterTweetTranscriptData,
  TwitterTweetTranscriptInput,
  TwitterUserTweetsData,
  TwitterUserTweetsInput,
} from "./platforms/twitter.js";
import type { UpworkJobsData, UpworkJobsInput } from "./platforms/upwork.js";
import type {
  WalmartProductData,
  WalmartProductInput,
} from "./platforms/walmart.js";
import type {
  WebCrawlData,
  WebCrawlInput,
  WebMapData,
  WebMapInput,
  WebScrapeData,
  WebScrapeInput,
  WebScreenshotData,
  WebScreenshotInput,
} from "./platforms/web.js";
import type {
  WhatsappValidateData,
  WhatsappValidateInput,
} from "./platforms/whatsapp.js";
import type {
  YahooFinanceQuoteData,
  YahooFinanceQuoteInput,
} from "./platforms/yahoo_finance.js";
import type { YelpSearchData, YelpSearchInput } from "./platforms/yelp.js";
import type {
  YoutubeChannelCommunityPostsData,
  YoutubeChannelCommunityPostsInput,
  YoutubeChannelData,
  YoutubeChannelInput,
  YoutubeChannelLivesData,
  YoutubeChannelLivesInput,
  YoutubeChannelPlaylistsData,
  YoutubeChannelPlaylistsInput,
  YoutubeChannelShortsData,
  YoutubeChannelShortsInput,
  YoutubeChannelVideosData,
  YoutubeChannelVideosInput,
  YoutubeCommentRepliesData,
  YoutubeCommentRepliesInput,
  YoutubeCommunityPostData,
  YoutubeCommunityPostInput,
  YoutubePlaylistData,
  YoutubePlaylistInput,
  YoutubeSearchData,
  YoutubeSearchHashtagData,
  YoutubeSearchHashtagInput,
  YoutubeSearchInput,
  YoutubeTrendingShortsData,
  YoutubeTrendingShortsInput,
  YoutubeVideoCommentsData,
  YoutubeVideoCommentsInput,
  YoutubeVideoData,
  YoutubeVideoInput,
  YoutubeVideoSponsorsData,
  YoutubeVideoSponsorsInput,
  YoutubeVideoTranscriptData,
  YoutubeVideoTranscriptInput,
} from "./platforms/youtube.js";
import type {
  ZillowPropertyData,
  ZillowPropertyInput,
  ZillowSearchData,
  ZillowSearchInput,
} from "./platforms/zillow.js";

/**
 * Maps every SKU slug literal to its input, data payload, and run-result types. The
 * generated `client.run(slug, input)` overload reads this map so the compiler infers the
 * right shapes by slug. `result` is BareRunResult<Data> for bare SKUs (output IS the
 * data) and RunResult<Data> for found-data SKUs (the discriminated envelope).
 */
export interface SkuMap {
  "ahrefs.backlinks": {
    input: AhrefsBacklinksInput;
    data: AhrefsBacklinksData;
    result: RunResult<AhrefsBacklinksData>;
  };
  "ahrefs.keyword_ideas": {
    input: AhrefsKeywordIdeasInput;
    data: AhrefsKeywordIdeasData;
    result: RunResult<AhrefsKeywordIdeasData>;
  };
  "ahrefs.keywords": {
    input: AhrefsKeywordsInput;
    data: AhrefsKeywordsData;
    result: RunResult<AhrefsKeywordsData>;
  };
  "ahrefs.overview": {
    input: AhrefsOverviewInput;
    data: AhrefsOverviewData;
    result: RunResult<AhrefsOverviewData>;
  };
  "airbnb.search": {
    input: AirbnbSearchInput;
    data: AirbnbSearchData;
    result: RunResult<AirbnbSearchData>;
  };
  "alibaba.search": {
    input: AlibabaSearchInput;
    data: AlibabaSearchData;
    result: RunResult<AlibabaSearchData>;
  };
  "amazon.asins": {
    input: AmazonAsinsInput;
    data: AmazonAsinsData;
    result: RunResult<AmazonAsinsData>;
  };
  "amazon.bestsellers": {
    input: AmazonBestsellersInput;
    data: AmazonBestsellersData;
    result: RunResult<AmazonBestsellersData>;
  };
  "amazon.product": {
    input: AmazonProductInput;
    data: AmazonProductData;
    result: RunResult<AmazonProductData>;
  };
  "amazon.reviews": {
    input: AmazonReviewsInput;
    data: AmazonReviewsData;
    result: RunResult<AmazonReviewsData>;
  };
  "amazon.search": {
    input: AmazonSearchInput;
    data: AmazonSearchData;
    result: RunResult<AmazonSearchData>;
  };
  "appstore.reviews": {
    input: AppstoreReviewsInput;
    data: AppstoreReviewsData;
    result: RunResult<AppstoreReviewsData>;
  };
  "bluesky.post": {
    input: BlueskyPostInput;
    data: BlueskyPostData;
    result: RunResult<BlueskyPostData>;
  };
  "bluesky.profile": {
    input: BlueskyProfileInput;
    data: BlueskyProfileData;
    result: RunResult<BlueskyProfileData>;
  };
  "bluesky.user_posts": {
    input: BlueskyUserPostsInput;
    data: BlueskyUserPostsData;
    result: RunResult<BlueskyUserPostsData>;
  };
  "booking.search": {
    input: BookingSearchInput;
    data: BookingSearchData;
    result: RunResult<BookingSearchData>;
  };
  "coinmarketcap.listings": {
    input: CoinmarketcapListingsInput;
    data: CoinmarketcapListingsData;
    result: RunResult<CoinmarketcapListingsData>;
  };
  "congress.trades": {
    input: CongressTradesInput;
    data: CongressTradesData;
    result: RunResult<CongressTradesData>;
  };
  "dexscreener.tokens": {
    input: DexscreenerTokensInput;
    data: DexscreenerTokensData;
    result: RunResult<DexscreenerTokensData>;
  };
  "ebay.search": {
    input: EbaySearchInput;
    data: EbaySearchData;
    result: RunResult<EbaySearchData>;
  };
  "ebay.sold_listings": {
    input: EbaySoldListingsInput;
    data: EbaySoldListingsData;
    result: RunResult<EbaySoldListingsData>;
  };
  "email.find": {
    input: EmailFindInput;
    data: EmailFindData;
    result: RunResult<EmailFindData>;
  };
  "email.verify": {
    input: EmailVerifyInput;
    data: EmailVerifyData;
    result: RunResult<EmailVerifyData>;
  };
  "facebook.ad_details": {
    input: FacebookAdDetailsInput;
    data: FacebookAdDetailsData;
    result: RunResult<FacebookAdDetailsData>;
  };
  "facebook.ad_transcript": {
    input: FacebookAdTranscriptInput;
    data: FacebookAdTranscriptData;
    result: RunResult<FacebookAdTranscriptData>;
  };
  "facebook.ads_search": {
    input: FacebookAdsSearchInput;
    data: FacebookAdsSearchData;
    result: RunResult<FacebookAdsSearchData>;
  };
  "facebook.comment_replies": {
    input: FacebookCommentRepliesInput;
    data: FacebookCommentRepliesData;
    result: RunResult<FacebookCommentRepliesData>;
  };
  "facebook.company_ads": {
    input: FacebookCompanyAdsInput;
    data: FacebookCompanyAdsData;
    result: RunResult<FacebookCompanyAdsData>;
  };
  "facebook.event_details": {
    input: FacebookEventDetailsInput;
    data: FacebookEventDetailsData;
    result: RunResult<FacebookEventDetailsData>;
  };
  "facebook.events": {
    input: FacebookEventsInput;
    data: FacebookEventsData;
    result: RunResult<FacebookEventsData>;
  };
  "facebook.events_search": {
    input: FacebookEventsSearchInput;
    data: FacebookEventsSearchData;
    result: RunResult<FacebookEventsSearchData>;
  };
  "facebook.followers": {
    input: FacebookFollowersInput;
    data: FacebookFollowersData;
    result: RunResult<FacebookFollowersData>;
  };
  "facebook.group_posts": {
    input: FacebookGroupPostsInput;
    data: FacebookGroupPostsData;
    result: RunResult<FacebookGroupPostsData>;
  };
  "facebook.marketplace": {
    input: FacebookMarketplaceInput;
    data: FacebookMarketplaceData;
    result: RunResult<FacebookMarketplaceData>;
  };
  "facebook.marketplace_item": {
    input: FacebookMarketplaceItemInput;
    data: FacebookMarketplaceItemData;
    result: RunResult<FacebookMarketplaceItemData>;
  };
  "facebook.marketplace_location_search": {
    input: FacebookMarketplaceLocationSearchInput;
    data: FacebookMarketplaceLocationSearchData;
    result: RunResult<FacebookMarketplaceLocationSearchData>;
  };
  "facebook.page_contact": {
    input: FacebookPageContactInput;
    data: FacebookPageContactData;
    result: RunResult<FacebookPageContactData>;
  };
  "facebook.photos": {
    input: FacebookPhotosInput;
    data: FacebookPhotosData;
    result: RunResult<FacebookPhotosData>;
  };
  "facebook.post": {
    input: FacebookPostInput;
    data: FacebookPostData;
    result: RunResult<FacebookPostData>;
  };
  "facebook.post_comments": {
    input: FacebookPostCommentsInput;
    data: FacebookPostCommentsData;
    result: RunResult<FacebookPostCommentsData>;
  };
  "facebook.post_transcript": {
    input: FacebookPostTranscriptInput;
    data: FacebookPostTranscriptData;
    result: RunResult<FacebookPostTranscriptData>;
  };
  "facebook.profile": {
    input: FacebookProfileInput;
    data: FacebookProfileData;
    result: RunResult<FacebookProfileData>;
  };
  "facebook.profile_events": {
    input: FacebookProfileEventsInput;
    data: FacebookProfileEventsData;
    result: RunResult<FacebookProfileEventsData>;
  };
  "facebook.profile_posts": {
    input: FacebookProfilePostsInput;
    data: FacebookProfilePostsData;
    result: RunResult<FacebookProfilePostsData>;
  };
  "facebook.profile_reels": {
    input: FacebookProfileReelsInput;
    data: FacebookProfileReelsData;
    result: RunResult<FacebookProfileReelsData>;
  };
  "facebook.search_companies": {
    input: FacebookSearchCompaniesInput;
    data: FacebookSearchCompaniesData;
    result: RunResult<FacebookSearchCompaniesData>;
  };
  "facebook.search_pages": {
    input: FacebookSearchPagesInput;
    data: FacebookSearchPagesData;
    result: RunResult<FacebookSearchPagesData>;
  };
  "facebook.search_posts": {
    input: FacebookSearchPostsInput;
    data: FacebookSearchPostsData;
    result: RunResult<FacebookSearchPostsData>;
  };
  "fiverr.search": {
    input: FiverrSearchInput;
    data: FiverrSearchData;
    result: RunResult<FiverrSearchData>;
  };
  "github.repository": {
    input: GithubRepositoryInput;
    data: GithubRepositoryData;
    result: RunResult<GithubRepositoryData>;
  };
  "github.trending_developers": {
    input: GithubTrendingDevelopersInput;
    data: GithubTrendingDevelopersData;
    result: RunResult<GithubTrendingDevelopersData>;
  };
  "github.trending_repositories": {
    input: GithubTrendingRepositoriesInput;
    data: GithubTrendingRepositoriesData;
    result: RunResult<GithubTrendingRepositoriesData>;
  };
  "github.user": {
    input: GithubUserInput;
    data: GithubUserData;
    result: RunResult<GithubUserData>;
  };
  "github.user_activity": {
    input: GithubUserActivityInput;
    data: GithubUserActivityData;
    result: RunResult<GithubUserActivityData>;
  };
  "github.user_contributions": {
    input: GithubUserContributionsInput;
    data: GithubUserContributionsData;
    result: RunResult<GithubUserContributionsData>;
  };
  "github.user_followers": {
    input: GithubUserFollowersInput;
    data: GithubUserFollowersData;
    result: RunResult<GithubUserFollowersData>;
  };
  "github.user_following": {
    input: GithubUserFollowingInput;
    data: GithubUserFollowingData;
    result: RunResult<GithubUserFollowingData>;
  };
  "github.user_pull_requests": {
    input: GithubUserPullRequestsInput;
    data: GithubUserPullRequestsData;
    result: RunResult<GithubUserPullRequestsData>;
  };
  "github.user_repositories": {
    input: GithubUserRepositoriesInput;
    data: GithubUserRepositoriesData;
    result: RunResult<GithubUserRepositoriesData>;
  };
  "glassdoor.jobs": {
    input: GlassdoorJobsInput;
    data: GlassdoorJobsData;
    result: RunResult<GlassdoorJobsData>;
  };
  "google.images": {
    input: GoogleImagesInput;
    data: GoogleImagesData;
    result: RunResult<GoogleImagesData>;
  };
  "google.news": {
    input: GoogleNewsInput;
    data: GoogleNewsData;
    result: RunResult<GoogleNewsData>;
  };
  "google.search": {
    input: GoogleSearchInput;
    data: GoogleSearchData;
    result: RunResult<GoogleSearchData>;
  };
  "google_ads.ad_details": {
    input: GoogleAdsAdDetailsInput;
    data: GoogleAdsAdDetailsData;
    result: RunResult<GoogleAdsAdDetailsData>;
  };
  "google_ads.advertiser_search": {
    input: GoogleAdsAdvertiserSearchInput;
    data: GoogleAdsAdvertiserSearchData;
    result: RunResult<GoogleAdsAdvertiserSearchData>;
  };
  "google_ads.company_ads": {
    input: GoogleAdsCompanyAdsInput;
    data: GoogleAdsCompanyAdsData;
    result: RunResult<GoogleAdsCompanyAdsData>;
  };
  "google_ads.search": {
    input: GoogleAdsSearchInput;
    data: GoogleAdsSearchData;
    result: RunResult<GoogleAdsSearchData>;
  };
  "google_finance.quote": {
    input: GoogleFinanceQuoteInput;
    data: GoogleFinanceQuoteData;
    result: RunResult<GoogleFinanceQuoteData>;
  };
  "google_shopping.search": {
    input: GoogleShoppingSearchInput;
    data: GoogleShoppingSearchData;
    result: RunResult<GoogleShoppingSearchData>;
  };
  "hackernews.profile": {
    input: HackernewsProfileInput;
    data: HackernewsProfileData;
    result: RunResult<HackernewsProfileData>;
  };
  "hackernews.search": {
    input: HackernewsSearchInput;
    data: HackernewsSearchData;
    result: RunResult<HackernewsSearchData>;
  };
  "hackernews.story": {
    input: HackernewsStoryInput;
    data: HackernewsStoryData;
    result: RunResult<HackernewsStoryData>;
  };
  "hackernews.story_comments": {
    input: HackernewsStoryCommentsInput;
    data: HackernewsStoryCommentsData;
    result: RunResult<HackernewsStoryCommentsData>;
  };
  "indeed.jobs": {
    input: IndeedJobsInput;
    data: IndeedJobsData;
    result: RunResult<IndeedJobsData>;
  };
  "instagram.audio_reels": {
    input: InstagramAudioReelsInput;
    data: InstagramAudioReelsData;
    result: RunResult<InstagramAudioReelsData>;
  };
  "instagram.basic_profile": {
    input: InstagramBasicProfileInput;
    data: InstagramBasicProfileData;
    result: RunResult<InstagramBasicProfileData>;
  };
  "instagram.embed": {
    input: InstagramEmbedInput;
    data: InstagramEmbedData;
    result: RunResult<InstagramEmbedData>;
  };
  "instagram.followers": {
    input: InstagramFollowersInput;
    data: InstagramFollowersData;
    result: RunResult<InstagramFollowersData>;
  };
  "instagram.following": {
    input: InstagramFollowingInput;
    data: InstagramFollowingData;
    result: RunResult<InstagramFollowingData>;
  };
  "instagram.hashtag_analytics": {
    input: InstagramHashtagAnalyticsInput;
    data: InstagramHashtagAnalyticsData;
    result: RunResult<InstagramHashtagAnalyticsData>;
  };
  "instagram.highlight_detail": {
    input: InstagramHighlightDetailInput;
    data: InstagramHighlightDetailData;
    result: RunResult<InstagramHighlightDetailData>;
  };
  "instagram.media_transcript": {
    input: InstagramMediaTranscriptInput;
    data: InstagramMediaTranscriptData;
    result: RunResult<InstagramMediaTranscriptData>;
  };
  "instagram.post": {
    input: InstagramPostInput;
    data: InstagramPostData;
    result: RunResult<InstagramPostData>;
  };
  "instagram.post_comments": {
    input: InstagramPostCommentsInput;
    data: InstagramPostCommentsData;
    result: RunResult<InstagramPostCommentsData>;
  };
  "instagram.profile": {
    input: InstagramProfileInput;
    data: InstagramProfileData;
    result: RunResult<InstagramProfileData>;
  };
  "instagram.reel_transcript": {
    input: InstagramReelTranscriptInput;
    data: InstagramReelTranscriptData;
    result: RunResult<InstagramReelTranscriptData>;
  };
  "instagram.reels_search": {
    input: InstagramReelsSearchInput;
    data: InstagramReelsSearchData;
    result: RunResult<InstagramReelsSearchData>;
  };
  "instagram.search": {
    input: InstagramSearchInput;
    data: InstagramSearchData;
    result: RunResult<InstagramSearchData>;
  };
  "instagram.search_hashtag": {
    input: InstagramSearchHashtagInput;
    data: InstagramSearchHashtagData;
    result: RunResult<InstagramSearchHashtagData>;
  };
  "instagram.search_profiles": {
    input: InstagramSearchProfilesInput;
    data: InstagramSearchProfilesData;
    result: RunResult<InstagramSearchProfilesData>;
  };
  "instagram.stories_full": {
    input: InstagramStoriesFullInput;
    data: InstagramStoriesFullData;
    result: RunResult<InstagramStoriesFullData>;
  };
  "instagram.stories_thin": {
    input: InstagramStoriesThinInput;
    data: InstagramStoriesThinData;
    result: RunResult<InstagramStoriesThinData>;
  };
  "instagram.trending_reels": {
    input: InstagramTrendingReelsInput;
    data: InstagramTrendingReelsData;
    result: RunResult<InstagramTrendingReelsData>;
  };
  "instagram.user_highlights": {
    input: InstagramUserHighlightsInput;
    data: InstagramUserHighlightsData;
    result: RunResult<InstagramUserHighlightsData>;
  };
  "instagram.user_posts": {
    input: InstagramUserPostsInput;
    data: InstagramUserPostsData;
    result: RunResult<InstagramUserPostsData>;
  };
  "instagram.user_reels": {
    input: InstagramUserReelsInput;
    data: InstagramUserReelsData;
    result: RunResult<InstagramUserReelsData>;
  };
  "linkedin.ad": {
    input: LinkedinAdInput;
    data: LinkedinAdData;
    result: RunResult<LinkedinAdData>;
  };
  "linkedin.ads": {
    input: LinkedinAdsInput;
    data: LinkedinAdsData;
    result: RunResult<LinkedinAdsData>;
  };
  "linkedin.ads_search": {
    input: LinkedinAdsSearchInput;
    data: LinkedinAdsSearchData;
    result: RunResult<LinkedinAdsSearchData>;
  };
  "linkedin.company": {
    input: LinkedinCompanyInput;
    data: LinkedinCompanyData;
    result: RunResult<LinkedinCompanyData>;
  };
  "linkedin.company_employees": {
    input: LinkedinCompanyEmployeesInput;
    data: LinkedinCompanyEmployeesData;
    result: RunResult<LinkedinCompanyEmployeesData>;
  };
  "linkedin.company_posts": {
    input: LinkedinCompanyPostsInput;
    data: LinkedinCompanyPostsData;
    result: RunResult<LinkedinCompanyPostsData>;
  };
  "linkedin.email": {
    input: LinkedinEmailInput;
    data: LinkedinEmailData;
    result: RunResult<LinkedinEmailData>;
  };
  "linkedin.jobs": {
    input: LinkedinJobsInput;
    data: LinkedinJobsData;
    result: RunResult<LinkedinJobsData>;
  };
  "linkedin.post": {
    input: LinkedinPostInput;
    data: LinkedinPostData;
    result: RunResult<LinkedinPostData>;
  };
  "linkedin.post_transcript": {
    input: LinkedinPostTranscriptInput;
    data: LinkedinPostTranscriptData;
    result: RunResult<LinkedinPostTranscriptData>;
  };
  "linkedin.profile": {
    input: LinkedinProfileInput;
    data: LinkedinProfileData;
    result: RunResult<LinkedinProfileData>;
  };
  "linkedin.search_companies": {
    input: LinkedinSearchCompaniesInput;
    data: LinkedinSearchCompaniesData;
    result: RunResult<LinkedinSearchCompaniesData>;
  };
  "linkedin.search_posts": {
    input: LinkedinSearchPostsInput;
    data: LinkedinSearchPostsData;
    result: RunResult<LinkedinSearchPostsData>;
  };
  "linkedin.search_profiles": {
    input: LinkedinSearchProfilesInput;
    data: LinkedinSearchProfilesData;
    result: RunResult<LinkedinSearchProfilesData>;
  };
  "maps.contacts": {
    input: MapsContactsInput;
    data: MapsContactsData;
    result: RunResult<MapsContactsData>;
  };
  "maps.place": {
    input: MapsPlaceInput;
    data: MapsPlaceData;
    result: RunResult<MapsPlaceData>;
  };
  "maps.reviews": {
    input: MapsReviewsInput;
    data: MapsReviewsData;
    result: RunResult<MapsReviewsData>;
  };
  "maps.search": {
    input: MapsSearchInput;
    data: MapsSearchData;
    result: RunResult<MapsSearchData>;
  };
  "pandaexpress.locations": {
    input: PandaexpressLocationsInput;
    data: PandaexpressLocationsData;
    result: RunResult<PandaexpressLocationsData>;
  };
  "pandaexpress.menu": {
    input: PandaexpressMenuInput;
    data: PandaexpressMenuData;
    result: RunResult<PandaexpressMenuData>;
  };
  "pandaexpress.nutrition": {
    input: PandaexpressNutritionInput;
    data: PandaexpressNutritionData;
    result: RunResult<PandaexpressNutritionData>;
  };
  "person.skip_trace": {
    input: PersonSkipTraceInput;
    data: PersonSkipTraceData;
    result: RunResult<PersonSkipTraceData>;
  };
  "pinterest.search": {
    input: PinterestSearchInput;
    data: PinterestSearchData;
    result: RunResult<PinterestSearchData>;
  };
  "playstore.reviews": {
    input: PlaystoreReviewsInput;
    data: PlaystoreReviewsData;
    result: RunResult<PlaystoreReviewsData>;
  };
  "polymarket.markets": {
    input: PolymarketMarketsInput;
    data: PolymarketMarketsData;
    result: RunResult<PolymarketMarketsData>;
  };
  "realtor.search": {
    input: RealtorSearchInput;
    data: RealtorSearchData;
    result: RunResult<RealtorSearchData>;
  };
  "reddit.post_comments": {
    input: RedditPostCommentsInput;
    data: RedditPostCommentsData;
    result: RunResult<RedditPostCommentsData>;
  };
  "reddit.post_transcript": {
    input: RedditPostTranscriptInput;
    data: RedditPostTranscriptData;
    result: RunResult<RedditPostTranscriptData>;
  };
  "reddit.search": {
    input: RedditSearchInput;
    data: RedditSearchData;
    result: RunResult<RedditSearchData>;
  };
  "reddit.subreddit_details": {
    input: RedditSubredditDetailsInput;
    data: RedditSubredditDetailsData;
    result: RunResult<RedditSubredditDetailsData>;
  };
  "reddit.subreddit_posts": {
    input: RedditSubredditPostsInput;
    data: RedditSubredditPostsData;
    result: RunResult<RedditSubredditPostsData>;
  };
  "reddit.subreddit_search": {
    input: RedditSubredditSearchInput;
    data: RedditSubredditSearchData;
    result: RunResult<RedditSubredditSearchData>;
  };
  "redfin.search": {
    input: RedfinSearchInput;
    data: RedfinSearchData;
    result: RunResult<RedfinSearchData>;
  };
  "rednote.note": {
    input: RednoteNoteInput;
    data: RednoteNoteData;
    result: RunResult<RednoteNoteData>;
  };
  "rednote.note_comments": {
    input: RednoteNoteCommentsInput;
    data: RednoteNoteCommentsData;
    result: RunResult<RednoteNoteCommentsData>;
  };
  "rednote.profile": {
    input: RednoteProfileInput;
    data: RednoteProfileData;
    result: RunResult<RednoteProfileData>;
  };
  "rednote.search": {
    input: RednoteSearchInput;
    data: RednoteSearchData;
    result: RunResult<RednoteSearchData>;
  };
  "rednote.search_users": {
    input: RednoteSearchUsersInput;
    data: RednoteSearchUsersData;
    result: RunResult<RednoteSearchUsersData>;
  };
  "rednote.user_notes": {
    input: RednoteUserNotesInput;
    data: RednoteUserNotesData;
    result: RunResult<RednoteUserNotesData>;
  };
  "sec.filings": {
    input: SecFilingsInput;
    data: SecFilingsData;
    result: RunResult<SecFilingsData>;
  };
  "semrush.keywords": {
    input: SemrushKeywordsInput;
    data: SemrushKeywordsData;
    result: RunResult<SemrushKeywordsData>;
  };
  "semrush.overview": {
    input: SemrushOverviewInput;
    data: SemrushOverviewData;
    result: RunResult<SemrushOverviewData>;
  };
  "seo.competitors_domain": {
    input: SeoCompetitorsDomainInput;
    data: SeoCompetitorsDomainData;
    result: RunResult<SeoCompetitorsDomainData>;
  };
  "seo.domain_intersection": {
    input: SeoDomainIntersectionInput;
    data: SeoDomainIntersectionData;
    result: RunResult<SeoDomainIntersectionData>;
  };
  "seo.domain_rank_overview": {
    input: SeoDomainRankOverviewInput;
    data: SeoDomainRankOverviewData;
    result: RunResult<SeoDomainRankOverviewData>;
  };
  "seo.keyword_difficulty": {
    input: SeoKeywordDifficultyInput;
    data: SeoKeywordDifficultyData;
    result: RunResult<SeoKeywordDifficultyData>;
  };
  "seo.keyword_ideas": {
    input: SeoKeywordIdeasInput;
    data: SeoKeywordIdeasData;
    result: RunResult<SeoKeywordIdeasData>;
  };
  "seo.keyword_overview": {
    input: SeoKeywordOverviewInput;
    data: SeoKeywordOverviewData;
    result: RunResult<SeoKeywordOverviewData>;
  };
  "seo.keyword_suggestions": {
    input: SeoKeywordSuggestionsInput;
    data: SeoKeywordSuggestionsData;
    result: RunResult<SeoKeywordSuggestionsData>;
  };
  "seo.local_pack": {
    input: SeoLocalPackInput;
    data: SeoLocalPackData;
    result: RunResult<SeoLocalPackData>;
  };
  "seo.ranked_keywords": {
    input: SeoRankedKeywordsInput;
    data: SeoRankedKeywordsData;
    result: RunResult<SeoRankedKeywordsData>;
  };
  "seo.related_keywords": {
    input: SeoRelatedKeywordsInput;
    data: SeoRelatedKeywordsData;
    result: RunResult<SeoRelatedKeywordsData>;
  };
  "seo.search_intent": {
    input: SeoSearchIntentInput;
    data: SeoSearchIntentData;
    result: RunResult<SeoSearchIntentData>;
  };
  "seo.search_volume": {
    input: SeoSearchVolumeInput;
    data: SeoSearchVolumeData;
    result: RunResult<SeoSearchVolumeData>;
  };
  "snapchat.profile": {
    input: SnapchatProfileInput;
    data: SnapchatProfileData;
    result: RunResult<SnapchatProfileData>;
  };
  "social.finder": {
    input: SocialFinderInput;
    data: SocialFinderData;
    result: RunResult<SocialFinderData>;
  };
  "spotify.album": {
    input: SpotifyAlbumInput;
    data: SpotifyAlbumData;
    result: RunResult<SpotifyAlbumData>;
  };
  "spotify.artist": {
    input: SpotifyArtistInput;
    data: SpotifyArtistData;
    result: RunResult<SpotifyArtistData>;
  };
  "spotify.play_count": {
    input: SpotifyPlayCountInput;
    data: SpotifyPlayCountData;
    result: RunResult<SpotifyPlayCountData>;
  };
  "spotify.podcast": {
    input: SpotifyPodcastInput;
    data: SpotifyPodcastData;
    result: RunResult<SpotifyPodcastData>;
  };
  "spotify.podcast_episodes": {
    input: SpotifyPodcastEpisodesInput;
    data: SpotifyPodcastEpisodesData;
    result: RunResult<SpotifyPodcastEpisodesData>;
  };
  "spotify.search": {
    input: SpotifySearchInput;
    data: SpotifySearchData;
    result: RunResult<SpotifySearchData>;
  };
  "spotify.track": {
    input: SpotifyTrackInput;
    data: SpotifyTrackData;
    result: RunResult<SpotifyTrackData>;
  };
  "substack.posts": {
    input: SubstackPostsInput;
    data: SubstackPostsData;
    result: RunResult<SubstackPostsData>;
  };
  "threads.post": {
    input: ThreadsPostInput;
    data: ThreadsPostData;
    result: RunResult<ThreadsPostData>;
  };
  "threads.profile": {
    input: ThreadsProfileInput;
    data: ThreadsProfileData;
    result: RunResult<ThreadsProfileData>;
  };
  "threads.search": {
    input: ThreadsSearchInput;
    data: ThreadsSearchData;
    result: RunResult<ThreadsSearchData>;
  };
  "threads.search_users": {
    input: ThreadsSearchUsersInput;
    data: ThreadsSearchUsersData;
    result: RunResult<ThreadsSearchUsersData>;
  };
  "threads.user_posts": {
    input: ThreadsUserPostsInput;
    data: ThreadsUserPostsData;
    result: RunResult<ThreadsUserPostsData>;
  };
  "tiktok.ad_library_ad": {
    input: TiktokAdLibraryAdInput;
    data: TiktokAdLibraryAdData;
    result: RunResult<TiktokAdLibraryAdData>;
  };
  "tiktok.ad_library_search": {
    input: TiktokAdLibrarySearchInput;
    data: TiktokAdLibrarySearchData;
    result: RunResult<TiktokAdLibrarySearchData>;
  };
  "tiktok.audience_demographics": {
    input: TiktokAudienceDemographicsInput;
    data: TiktokAudienceDemographicsData;
    result: RunResult<TiktokAudienceDemographicsData>;
  };
  "tiktok.comment_replies": {
    input: TiktokCommentRepliesInput;
    data: TiktokCommentRepliesData;
    result: RunResult<TiktokCommentRepliesData>;
  };
  "tiktok.followers": {
    input: TiktokFollowersInput;
    data: TiktokFollowersData;
    result: RunResult<TiktokFollowersData>;
  };
  "tiktok.following": {
    input: TiktokFollowingInput;
    data: TiktokFollowingData;
    result: RunResult<TiktokFollowingData>;
  };
  "tiktok.hashtag_videos": {
    input: TiktokHashtagVideosInput;
    data: TiktokHashtagVideosData;
    result: RunResult<TiktokHashtagVideosData>;
  };
  "tiktok.live": {
    input: TiktokLiveInput;
    data: TiktokLiveData;
    result: RunResult<TiktokLiveData>;
  };
  "tiktok.profile": {
    input: TiktokProfileInput;
    data: TiktokProfileData;
    result: RunResult<TiktokProfileData>;
  };
  "tiktok.profile_region": {
    input: TiktokProfileRegionInput;
    data: TiktokProfileRegionData;
    result: RunResult<TiktokProfileRegionData>;
  };
  "tiktok.profile_videos": {
    input: TiktokProfileVideosInput;
    data: TiktokProfileVideosData;
    result: RunResult<TiktokProfileVideosData>;
  };
  "tiktok.search_hashtag": {
    input: TiktokSearchHashtagInput;
    data: TiktokSearchHashtagData;
    result: RunResult<TiktokSearchHashtagData>;
  };
  "tiktok.search_keyword": {
    input: TiktokSearchKeywordInput;
    data: TiktokSearchKeywordData;
    result: RunResult<TiktokSearchKeywordData>;
  };
  "tiktok.search_top": {
    input: TiktokSearchTopInput;
    data: TiktokSearchTopData;
    result: RunResult<TiktokSearchTopData>;
  };
  "tiktok.search_users": {
    input: TiktokSearchUsersInput;
    data: TiktokSearchUsersData;
    result: RunResult<TiktokSearchUsersData>;
  };
  "tiktok.song": {
    input: TiktokSongInput;
    data: TiktokSongData;
    result: RunResult<TiktokSongData>;
  };
  "tiktok.song_videos": {
    input: TiktokSongVideosInput;
    data: TiktokSongVideosData;
    result: RunResult<TiktokSongVideosData>;
  };
  "tiktok.trending_feed": {
    input: TiktokTrendingFeedInput;
    data: TiktokTrendingFeedData;
    result: RunResult<TiktokTrendingFeedData>;
  };
  "tiktok.video": {
    input: TiktokVideoInput;
    data: TiktokVideoData;
    result: RunResult<TiktokVideoData>;
  };
  "tiktok.video_comments": {
    input: TiktokVideoCommentsInput;
    data: TiktokVideoCommentsData;
    result: RunResult<TiktokVideoCommentsData>;
  };
  "tiktok.video_transcript": {
    input: TiktokVideoTranscriptInput;
    data: TiktokVideoTranscriptData;
    result: RunResult<TiktokVideoTranscriptData>;
  };
  "tiktok_shop.product": {
    input: TiktokShopProductInput;
    data: TiktokShopProductData;
    result: RunResult<TiktokShopProductData>;
  };
  "tiktok_shop.product_reviews": {
    input: TiktokShopProductReviewsInput;
    data: TiktokShopProductReviewsData;
    result: RunResult<TiktokShopProductReviewsData>;
  };
  "tiktok_shop.search": {
    input: TiktokShopSearchInput;
    data: TiktokShopSearchData;
    result: RunResult<TiktokShopSearchData>;
  };
  "tiktok_shop.shop_products": {
    input: TiktokShopShopProductsInput;
    data: TiktokShopShopProductsData;
    result: RunResult<TiktokShopShopProductsData>;
  };
  "tiktok_shop.user_showcase": {
    input: TiktokShopUserShowcaseInput;
    data: TiktokShopUserShowcaseData;
    result: RunResult<TiktokShopUserShowcaseData>;
  };
  "tripadvisor.reviews": {
    input: TripadvisorReviewsInput;
    data: TripadvisorReviewsData;
    result: RunResult<TripadvisorReviewsData>;
  };
  "tripadvisor.search": {
    input: TripadvisorSearchInput;
    data: TripadvisorSearchData;
    result: RunResult<TripadvisorSearchData>;
  };
  "trustpilot.reviews": {
    input: TrustpilotReviewsInput;
    data: TrustpilotReviewsData;
    result: RunResult<TrustpilotReviewsData>;
  };
  "truthsocial.post": {
    input: TruthsocialPostInput;
    data: TruthsocialPostData;
    result: RunResult<TruthsocialPostData>;
  };
  "truthsocial.profile": {
    input: TruthsocialProfileInput;
    data: TruthsocialProfileData;
    result: RunResult<TruthsocialProfileData>;
  };
  "truthsocial.user_posts": {
    input: TruthsocialUserPostsInput;
    data: TruthsocialUserPostsData;
    result: RunResult<TruthsocialUserPostsData>;
  };
  "twitter.community": {
    input: TwitterCommunityInput;
    data: TwitterCommunityData;
    result: RunResult<TwitterCommunityData>;
  };
  "twitter.community_tweets": {
    input: TwitterCommunityTweetsInput;
    data: TwitterCommunityTweetsData;
    result: RunResult<TwitterCommunityTweetsData>;
  };
  "twitter.followers": {
    input: TwitterFollowersInput;
    data: TwitterFollowersData;
    result: RunResult<TwitterFollowersData>;
  };
  "twitter.following": {
    input: TwitterFollowingInput;
    data: TwitterFollowingData;
    result: RunResult<TwitterFollowingData>;
  };
  "twitter.profile": {
    input: TwitterProfileInput;
    data: TwitterProfileData;
    result: RunResult<TwitterProfileData>;
  };
  "twitter.replies": {
    input: TwitterRepliesInput;
    data: TwitterRepliesData;
    result: RunResult<TwitterRepliesData>;
  };
  "twitter.search": {
    input: TwitterSearchInput;
    data: TwitterSearchData;
    result: RunResult<TwitterSearchData>;
  };
  "twitter.tweet": {
    input: TwitterTweetInput;
    data: TwitterTweetData;
    result: RunResult<TwitterTweetData>;
  };
  "twitter.tweet_transcript": {
    input: TwitterTweetTranscriptInput;
    data: TwitterTweetTranscriptData;
    result: RunResult<TwitterTweetTranscriptData>;
  };
  "twitter.user_tweets": {
    input: TwitterUserTweetsInput;
    data: TwitterUserTweetsData;
    result: RunResult<TwitterUserTweetsData>;
  };
  "upwork.jobs": {
    input: UpworkJobsInput;
    data: UpworkJobsData;
    result: RunResult<UpworkJobsData>;
  };
  "walmart.product": {
    input: WalmartProductInput;
    data: WalmartProductData;
    result: RunResult<WalmartProductData>;
  };
  "web.crawl": {
    input: WebCrawlInput;
    data: WebCrawlData;
    result: RunResult<WebCrawlData>;
  };
  "web.map": {
    input: WebMapInput;
    data: WebMapData;
    result: RunResult<WebMapData>;
  };
  "web.scrape": {
    input: WebScrapeInput;
    data: WebScrapeData;
    result: RunResult<WebScrapeData>;
  };
  "web.screenshot": {
    input: WebScreenshotInput;
    data: WebScreenshotData;
    result: RunResult<WebScreenshotData>;
  };
  "whatsapp.validate": {
    input: WhatsappValidateInput;
    data: WhatsappValidateData;
    result: RunResult<WhatsappValidateData>;
  };
  "yahoo_finance.quote": {
    input: YahooFinanceQuoteInput;
    data: YahooFinanceQuoteData;
    result: RunResult<YahooFinanceQuoteData>;
  };
  "yelp.search": {
    input: YelpSearchInput;
    data: YelpSearchData;
    result: RunResult<YelpSearchData>;
  };
  "youtube.channel": {
    input: YoutubeChannelInput;
    data: YoutubeChannelData;
    result: RunResult<YoutubeChannelData>;
  };
  "youtube.channel_community_posts": {
    input: YoutubeChannelCommunityPostsInput;
    data: YoutubeChannelCommunityPostsData;
    result: RunResult<YoutubeChannelCommunityPostsData>;
  };
  "youtube.channel_lives": {
    input: YoutubeChannelLivesInput;
    data: YoutubeChannelLivesData;
    result: RunResult<YoutubeChannelLivesData>;
  };
  "youtube.channel_playlists": {
    input: YoutubeChannelPlaylistsInput;
    data: YoutubeChannelPlaylistsData;
    result: RunResult<YoutubeChannelPlaylistsData>;
  };
  "youtube.channel_shorts": {
    input: YoutubeChannelShortsInput;
    data: YoutubeChannelShortsData;
    result: RunResult<YoutubeChannelShortsData>;
  };
  "youtube.channel_videos": {
    input: YoutubeChannelVideosInput;
    data: YoutubeChannelVideosData;
    result: RunResult<YoutubeChannelVideosData>;
  };
  "youtube.comment_replies": {
    input: YoutubeCommentRepliesInput;
    data: YoutubeCommentRepliesData;
    result: RunResult<YoutubeCommentRepliesData>;
  };
  "youtube.community_post": {
    input: YoutubeCommunityPostInput;
    data: YoutubeCommunityPostData;
    result: RunResult<YoutubeCommunityPostData>;
  };
  "youtube.playlist": {
    input: YoutubePlaylistInput;
    data: YoutubePlaylistData;
    result: RunResult<YoutubePlaylistData>;
  };
  "youtube.search": {
    input: YoutubeSearchInput;
    data: YoutubeSearchData;
    result: RunResult<YoutubeSearchData>;
  };
  "youtube.search_hashtag": {
    input: YoutubeSearchHashtagInput;
    data: YoutubeSearchHashtagData;
    result: RunResult<YoutubeSearchHashtagData>;
  };
  "youtube.trending_shorts": {
    input: YoutubeTrendingShortsInput;
    data: YoutubeTrendingShortsData;
    result: RunResult<YoutubeTrendingShortsData>;
  };
  "youtube.video": {
    input: YoutubeVideoInput;
    data: YoutubeVideoData;
    result: RunResult<YoutubeVideoData>;
  };
  "youtube.video_comments": {
    input: YoutubeVideoCommentsInput;
    data: YoutubeVideoCommentsData;
    result: RunResult<YoutubeVideoCommentsData>;
  };
  "youtube.video_sponsors": {
    input: YoutubeVideoSponsorsInput;
    data: YoutubeVideoSponsorsData;
    result: RunResult<YoutubeVideoSponsorsData>;
  };
  "youtube.video_transcript": {
    input: YoutubeVideoTranscriptInput;
    data: YoutubeVideoTranscriptData;
    result: RunResult<YoutubeVideoTranscriptData>;
  };
  "zillow.property": {
    input: ZillowPropertyInput;
    data: ZillowPropertyData;
    result: RunResult<ZillowPropertyData>;
  };
  "zillow.search": {
    input: ZillowSearchInput;
    data: ZillowSearchData;
    result: RunResult<ZillowSearchData>;
  };
}
