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
  ApolloOrganizationData,
  ApolloOrganizationEnrichData,
  ApolloOrganizationEnrichInput,
  ApolloOrganizationInput,
  ApolloOrganizationJobsData,
  ApolloOrganizationJobsInput,
  ApolloOrganizationNewsData,
  ApolloOrganizationNewsInput,
  ApolloOrganizationsBulkEnrichData,
  ApolloOrganizationsBulkEnrichInput,
  ApolloOrganizationsSearchData,
  ApolloOrganizationsSearchInput,
  ApolloPeopleSearchData,
  ApolloPeopleSearchInput,
  ApolloPersonEnrichData,
  ApolloPersonEnrichInput,
} from "./platforms/apollo.js";
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
  DouyinProfileData,
  DouyinProfileInput,
  DouyinSearchVideosData,
  DouyinSearchVideosInput,
  DouyinUserPostsData,
  DouyinUserPostsInput,
  DouyinVideoCommentsData,
  DouyinVideoCommentsInput,
  DouyinVideoData,
  DouyinVideoInput,
} from "./platforms/douyin.js";
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
  GoogleAutocompleteData,
  GoogleAutocompleteInput,
  GoogleImagesData,
  GoogleImagesInput,
  GoogleLensData,
  GoogleLensInput,
  GoogleNewsData,
  GoogleNewsInput,
  GooglePatentsData,
  GooglePatentsInput,
  GoogleScholarData,
  GoogleScholarInput,
  GoogleSearchData,
  GoogleSearchInput,
  GoogleVideosData,
  GoogleVideosInput,
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
  LinkedinCompanyPostsThinData,
  LinkedinCompanyPostsThinInput,
  LinkedinCompanyThinData,
  LinkedinCompanyThinInput,
  LinkedinEmailData,
  LinkedinEmailInput,
  LinkedinJobsData,
  LinkedinJobsInput,
  LinkedinJobsThinData,
  LinkedinJobsThinInput,
  LinkedinPostCommentsData,
  LinkedinPostCommentsInput,
  LinkedinPostData,
  LinkedinPostInput,
  LinkedinPostReactionsData,
  LinkedinPostReactionsInput,
  LinkedinPostTranscriptData,
  LinkedinPostTranscriptInput,
  LinkedinProfileData,
  LinkedinProfileInput,
  LinkedinProfileThinData,
  LinkedinProfileThinInput,
  LinkedinSearchCompaniesData,
  LinkedinSearchCompaniesInput,
  LinkedinSearchPostsData,
  LinkedinSearchPostsInput,
  LinkedinSearchProfilesData,
  LinkedinSearchProfilesEmailData,
  LinkedinSearchProfilesEmailInput,
  LinkedinSearchProfilesInput,
  LinkedinSearchProfilesThinData,
  LinkedinSearchProfilesThinInput,
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
  TwitterArticleData,
  TwitterArticleInput,
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
  TwitterTrendsData,
  TwitterTrendsInput,
  TwitterTweetData,
  TwitterTweetInput,
  TwitterTweetTranscriptData,
  TwitterTweetTranscriptInput,
  TwitterUserPostsData,
  TwitterUserPostsInput,
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
  WeiboHotSearchData,
  WeiboHotSearchInput,
  WeiboPostCommentsData,
  WeiboPostCommentsInput,
  WeiboPostData,
  WeiboPostInput,
  WeiboProfileData,
  WeiboProfileInput,
  WeiboSearchData,
  WeiboSearchInput,
  WeiboUserPostsData,
  WeiboUserPostsInput,
} from "./platforms/weibo.js";
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
  ZhihuAnswerData,
  ZhihuAnswerInput,
  ZhihuProfileData,
  ZhihuProfileInput,
  ZhihuQuestionAnswersData,
  ZhihuQuestionAnswersInput,
  ZhihuQuestionData,
  ZhihuQuestionInput,
  ZhihuSearchArticlesData,
  ZhihuSearchArticlesInput,
} from "./platforms/zhihu.js";
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
    result: BareRunResult<AhrefsBacklinksData>;
  };
  "ahrefs.keyword_ideas": {
    input: AhrefsKeywordIdeasInput;
    data: AhrefsKeywordIdeasData;
    result: BareRunResult<AhrefsKeywordIdeasData>;
  };
  "ahrefs.keywords": {
    input: AhrefsKeywordsInput;
    data: AhrefsKeywordsData;
    result: BareRunResult<AhrefsKeywordsData>;
  };
  "ahrefs.overview": {
    input: AhrefsOverviewInput;
    data: AhrefsOverviewData;
    result: BareRunResult<AhrefsOverviewData>;
  };
  "airbnb.search": {
    input: AirbnbSearchInput;
    data: AirbnbSearchData;
    result: BareRunResult<AirbnbSearchData>;
  };
  "alibaba.search": {
    input: AlibabaSearchInput;
    data: AlibabaSearchData;
    result: BareRunResult<AlibabaSearchData>;
  };
  "amazon.asins": {
    input: AmazonAsinsInput;
    data: AmazonAsinsData;
    result: BareRunResult<AmazonAsinsData>;
  };
  "amazon.bestsellers": {
    input: AmazonBestsellersInput;
    data: AmazonBestsellersData;
    result: BareRunResult<AmazonBestsellersData>;
  };
  "amazon.product": {
    input: AmazonProductInput;
    data: AmazonProductData;
    result: BareRunResult<AmazonProductData>;
  };
  "amazon.reviews": {
    input: AmazonReviewsInput;
    data: AmazonReviewsData;
    result: BareRunResult<AmazonReviewsData>;
  };
  "amazon.search": {
    input: AmazonSearchInput;
    data: AmazonSearchData;
    result: BareRunResult<AmazonSearchData>;
  };
  "apollo.organization": {
    input: ApolloOrganizationInput;
    data: ApolloOrganizationData;
    result: BareRunResult<ApolloOrganizationData>;
  };
  "apollo.organization_enrich": {
    input: ApolloOrganizationEnrichInput;
    data: ApolloOrganizationEnrichData;
    result: BareRunResult<ApolloOrganizationEnrichData>;
  };
  "apollo.organization_jobs": {
    input: ApolloOrganizationJobsInput;
    data: ApolloOrganizationJobsData;
    result: BareRunResult<ApolloOrganizationJobsData>;
  };
  "apollo.organization_news": {
    input: ApolloOrganizationNewsInput;
    data: ApolloOrganizationNewsData;
    result: BareRunResult<ApolloOrganizationNewsData>;
  };
  "apollo.organizations_bulk_enrich": {
    input: ApolloOrganizationsBulkEnrichInput;
    data: ApolloOrganizationsBulkEnrichData;
    result: BareRunResult<ApolloOrganizationsBulkEnrichData>;
  };
  "apollo.organizations_search": {
    input: ApolloOrganizationsSearchInput;
    data: ApolloOrganizationsSearchData;
    result: BareRunResult<ApolloOrganizationsSearchData>;
  };
  "apollo.people_search": {
    input: ApolloPeopleSearchInput;
    data: ApolloPeopleSearchData;
    result: BareRunResult<ApolloPeopleSearchData>;
  };
  "apollo.person_enrich": {
    input: ApolloPersonEnrichInput;
    data: ApolloPersonEnrichData;
    result: BareRunResult<ApolloPersonEnrichData>;
  };
  "appstore.reviews": {
    input: AppstoreReviewsInput;
    data: AppstoreReviewsData;
    result: BareRunResult<AppstoreReviewsData>;
  };
  "bluesky.post": {
    input: BlueskyPostInput;
    data: BlueskyPostData;
    result: BareRunResult<BlueskyPostData>;
  };
  "bluesky.profile": {
    input: BlueskyProfileInput;
    data: BlueskyProfileData;
    result: BareRunResult<BlueskyProfileData>;
  };
  "bluesky.user_posts": {
    input: BlueskyUserPostsInput;
    data: BlueskyUserPostsData;
    result: BareRunResult<BlueskyUserPostsData>;
  };
  "booking.search": {
    input: BookingSearchInput;
    data: BookingSearchData;
    result: BareRunResult<BookingSearchData>;
  };
  "coinmarketcap.listings": {
    input: CoinmarketcapListingsInput;
    data: CoinmarketcapListingsData;
    result: BareRunResult<CoinmarketcapListingsData>;
  };
  "congress.trades": {
    input: CongressTradesInput;
    data: CongressTradesData;
    result: BareRunResult<CongressTradesData>;
  };
  "dexscreener.tokens": {
    input: DexscreenerTokensInput;
    data: DexscreenerTokensData;
    result: BareRunResult<DexscreenerTokensData>;
  };
  "douyin.profile": {
    input: DouyinProfileInput;
    data: DouyinProfileData;
    result: BareRunResult<DouyinProfileData>;
  };
  "douyin.search_videos": {
    input: DouyinSearchVideosInput;
    data: DouyinSearchVideosData;
    result: BareRunResult<DouyinSearchVideosData>;
  };
  "douyin.user_posts": {
    input: DouyinUserPostsInput;
    data: DouyinUserPostsData;
    result: BareRunResult<DouyinUserPostsData>;
  };
  "douyin.video": {
    input: DouyinVideoInput;
    data: DouyinVideoData;
    result: BareRunResult<DouyinVideoData>;
  };
  "douyin.video_comments": {
    input: DouyinVideoCommentsInput;
    data: DouyinVideoCommentsData;
    result: BareRunResult<DouyinVideoCommentsData>;
  };
  "ebay.search": {
    input: EbaySearchInput;
    data: EbaySearchData;
    result: BareRunResult<EbaySearchData>;
  };
  "ebay.sold_listings": {
    input: EbaySoldListingsInput;
    data: EbaySoldListingsData;
    result: BareRunResult<EbaySoldListingsData>;
  };
  "email.find": {
    input: EmailFindInput;
    data: EmailFindData;
    result: BareRunResult<EmailFindData>;
  };
  "email.verify": {
    input: EmailVerifyInput;
    data: EmailVerifyData;
    result: BareRunResult<EmailVerifyData>;
  };
  "facebook.ad_details": {
    input: FacebookAdDetailsInput;
    data: FacebookAdDetailsData;
    result: BareRunResult<FacebookAdDetailsData>;
  };
  "facebook.ad_transcript": {
    input: FacebookAdTranscriptInput;
    data: FacebookAdTranscriptData;
    result: BareRunResult<FacebookAdTranscriptData>;
  };
  "facebook.ads_search": {
    input: FacebookAdsSearchInput;
    data: FacebookAdsSearchData;
    result: BareRunResult<FacebookAdsSearchData>;
  };
  "facebook.comment_replies": {
    input: FacebookCommentRepliesInput;
    data: FacebookCommentRepliesData;
    result: BareRunResult<FacebookCommentRepliesData>;
  };
  "facebook.company_ads": {
    input: FacebookCompanyAdsInput;
    data: FacebookCompanyAdsData;
    result: BareRunResult<FacebookCompanyAdsData>;
  };
  "facebook.event_details": {
    input: FacebookEventDetailsInput;
    data: FacebookEventDetailsData;
    result: BareRunResult<FacebookEventDetailsData>;
  };
  "facebook.events": {
    input: FacebookEventsInput;
    data: FacebookEventsData;
    result: BareRunResult<FacebookEventsData>;
  };
  "facebook.events_search": {
    input: FacebookEventsSearchInput;
    data: FacebookEventsSearchData;
    result: BareRunResult<FacebookEventsSearchData>;
  };
  "facebook.followers": {
    input: FacebookFollowersInput;
    data: FacebookFollowersData;
    result: BareRunResult<FacebookFollowersData>;
  };
  "facebook.group_posts": {
    input: FacebookGroupPostsInput;
    data: FacebookGroupPostsData;
    result: BareRunResult<FacebookGroupPostsData>;
  };
  "facebook.marketplace": {
    input: FacebookMarketplaceInput;
    data: FacebookMarketplaceData;
    result: BareRunResult<FacebookMarketplaceData>;
  };
  "facebook.marketplace_item": {
    input: FacebookMarketplaceItemInput;
    data: FacebookMarketplaceItemData;
    result: BareRunResult<FacebookMarketplaceItemData>;
  };
  "facebook.marketplace_location_search": {
    input: FacebookMarketplaceLocationSearchInput;
    data: FacebookMarketplaceLocationSearchData;
    result: BareRunResult<FacebookMarketplaceLocationSearchData>;
  };
  "facebook.page_contact": {
    input: FacebookPageContactInput;
    data: FacebookPageContactData;
    result: BareRunResult<FacebookPageContactData>;
  };
  "facebook.photos": {
    input: FacebookPhotosInput;
    data: FacebookPhotosData;
    result: BareRunResult<FacebookPhotosData>;
  };
  "facebook.post": {
    input: FacebookPostInput;
    data: FacebookPostData;
    result: BareRunResult<FacebookPostData>;
  };
  "facebook.post_comments": {
    input: FacebookPostCommentsInput;
    data: FacebookPostCommentsData;
    result: BareRunResult<FacebookPostCommentsData>;
  };
  "facebook.post_transcript": {
    input: FacebookPostTranscriptInput;
    data: FacebookPostTranscriptData;
    result: BareRunResult<FacebookPostTranscriptData>;
  };
  "facebook.profile": {
    input: FacebookProfileInput;
    data: FacebookProfileData;
    result: BareRunResult<FacebookProfileData>;
  };
  "facebook.profile_events": {
    input: FacebookProfileEventsInput;
    data: FacebookProfileEventsData;
    result: BareRunResult<FacebookProfileEventsData>;
  };
  "facebook.profile_posts": {
    input: FacebookProfilePostsInput;
    data: FacebookProfilePostsData;
    result: BareRunResult<FacebookProfilePostsData>;
  };
  "facebook.profile_reels": {
    input: FacebookProfileReelsInput;
    data: FacebookProfileReelsData;
    result: BareRunResult<FacebookProfileReelsData>;
  };
  "facebook.search_companies": {
    input: FacebookSearchCompaniesInput;
    data: FacebookSearchCompaniesData;
    result: BareRunResult<FacebookSearchCompaniesData>;
  };
  "facebook.search_pages": {
    input: FacebookSearchPagesInput;
    data: FacebookSearchPagesData;
    result: BareRunResult<FacebookSearchPagesData>;
  };
  "facebook.search_posts": {
    input: FacebookSearchPostsInput;
    data: FacebookSearchPostsData;
    result: BareRunResult<FacebookSearchPostsData>;
  };
  "fiverr.search": {
    input: FiverrSearchInput;
    data: FiverrSearchData;
    result: BareRunResult<FiverrSearchData>;
  };
  "github.repository": {
    input: GithubRepositoryInput;
    data: GithubRepositoryData;
    result: BareRunResult<GithubRepositoryData>;
  };
  "github.trending_developers": {
    input: GithubTrendingDevelopersInput;
    data: GithubTrendingDevelopersData;
    result: BareRunResult<GithubTrendingDevelopersData>;
  };
  "github.trending_repositories": {
    input: GithubTrendingRepositoriesInput;
    data: GithubTrendingRepositoriesData;
    result: BareRunResult<GithubTrendingRepositoriesData>;
  };
  "github.user": {
    input: GithubUserInput;
    data: GithubUserData;
    result: BareRunResult<GithubUserData>;
  };
  "github.user_activity": {
    input: GithubUserActivityInput;
    data: GithubUserActivityData;
    result: BareRunResult<GithubUserActivityData>;
  };
  "github.user_contributions": {
    input: GithubUserContributionsInput;
    data: GithubUserContributionsData;
    result: BareRunResult<GithubUserContributionsData>;
  };
  "github.user_followers": {
    input: GithubUserFollowersInput;
    data: GithubUserFollowersData;
    result: BareRunResult<GithubUserFollowersData>;
  };
  "github.user_following": {
    input: GithubUserFollowingInput;
    data: GithubUserFollowingData;
    result: BareRunResult<GithubUserFollowingData>;
  };
  "github.user_pull_requests": {
    input: GithubUserPullRequestsInput;
    data: GithubUserPullRequestsData;
    result: BareRunResult<GithubUserPullRequestsData>;
  };
  "github.user_repositories": {
    input: GithubUserRepositoriesInput;
    data: GithubUserRepositoriesData;
    result: BareRunResult<GithubUserRepositoriesData>;
  };
  "glassdoor.jobs": {
    input: GlassdoorJobsInput;
    data: GlassdoorJobsData;
    result: BareRunResult<GlassdoorJobsData>;
  };
  "google.autocomplete": {
    input: GoogleAutocompleteInput;
    data: GoogleAutocompleteData;
    result: BareRunResult<GoogleAutocompleteData>;
  };
  "google.images": {
    input: GoogleImagesInput;
    data: GoogleImagesData;
    result: BareRunResult<GoogleImagesData>;
  };
  "google.lens": {
    input: GoogleLensInput;
    data: GoogleLensData;
    result: BareRunResult<GoogleLensData>;
  };
  "google.news": {
    input: GoogleNewsInput;
    data: GoogleNewsData;
    result: BareRunResult<GoogleNewsData>;
  };
  "google.patents": {
    input: GooglePatentsInput;
    data: GooglePatentsData;
    result: BareRunResult<GooglePatentsData>;
  };
  "google.scholar": {
    input: GoogleScholarInput;
    data: GoogleScholarData;
    result: BareRunResult<GoogleScholarData>;
  };
  "google.search": {
    input: GoogleSearchInput;
    data: GoogleSearchData;
    result: BareRunResult<GoogleSearchData>;
  };
  "google.videos": {
    input: GoogleVideosInput;
    data: GoogleVideosData;
    result: BareRunResult<GoogleVideosData>;
  };
  "google_ads.ad_details": {
    input: GoogleAdsAdDetailsInput;
    data: GoogleAdsAdDetailsData;
    result: BareRunResult<GoogleAdsAdDetailsData>;
  };
  "google_ads.advertiser_search": {
    input: GoogleAdsAdvertiserSearchInput;
    data: GoogleAdsAdvertiserSearchData;
    result: BareRunResult<GoogleAdsAdvertiserSearchData>;
  };
  "google_ads.company_ads": {
    input: GoogleAdsCompanyAdsInput;
    data: GoogleAdsCompanyAdsData;
    result: BareRunResult<GoogleAdsCompanyAdsData>;
  };
  "google_ads.search": {
    input: GoogleAdsSearchInput;
    data: GoogleAdsSearchData;
    result: BareRunResult<GoogleAdsSearchData>;
  };
  "google_finance.quote": {
    input: GoogleFinanceQuoteInput;
    data: GoogleFinanceQuoteData;
    result: BareRunResult<GoogleFinanceQuoteData>;
  };
  "google_shopping.search": {
    input: GoogleShoppingSearchInput;
    data: GoogleShoppingSearchData;
    result: BareRunResult<GoogleShoppingSearchData>;
  };
  "hackernews.profile": {
    input: HackernewsProfileInput;
    data: HackernewsProfileData;
    result: BareRunResult<HackernewsProfileData>;
  };
  "hackernews.search": {
    input: HackernewsSearchInput;
    data: HackernewsSearchData;
    result: BareRunResult<HackernewsSearchData>;
  };
  "hackernews.story": {
    input: HackernewsStoryInput;
    data: HackernewsStoryData;
    result: BareRunResult<HackernewsStoryData>;
  };
  "hackernews.story_comments": {
    input: HackernewsStoryCommentsInput;
    data: HackernewsStoryCommentsData;
    result: BareRunResult<HackernewsStoryCommentsData>;
  };
  "indeed.jobs": {
    input: IndeedJobsInput;
    data: IndeedJobsData;
    result: BareRunResult<IndeedJobsData>;
  };
  "instagram.audio_reels": {
    input: InstagramAudioReelsInput;
    data: InstagramAudioReelsData;
    result: BareRunResult<InstagramAudioReelsData>;
  };
  "instagram.basic_profile": {
    input: InstagramBasicProfileInput;
    data: InstagramBasicProfileData;
    result: BareRunResult<InstagramBasicProfileData>;
  };
  "instagram.embed": {
    input: InstagramEmbedInput;
    data: InstagramEmbedData;
    result: BareRunResult<InstagramEmbedData>;
  };
  "instagram.followers": {
    input: InstagramFollowersInput;
    data: InstagramFollowersData;
    result: BareRunResult<InstagramFollowersData>;
  };
  "instagram.following": {
    input: InstagramFollowingInput;
    data: InstagramFollowingData;
    result: BareRunResult<InstagramFollowingData>;
  };
  "instagram.hashtag_analytics": {
    input: InstagramHashtagAnalyticsInput;
    data: InstagramHashtagAnalyticsData;
    result: BareRunResult<InstagramHashtagAnalyticsData>;
  };
  "instagram.highlight_detail": {
    input: InstagramHighlightDetailInput;
    data: InstagramHighlightDetailData;
    result: BareRunResult<InstagramHighlightDetailData>;
  };
  "instagram.media_transcript": {
    input: InstagramMediaTranscriptInput;
    data: InstagramMediaTranscriptData;
    result: BareRunResult<InstagramMediaTranscriptData>;
  };
  "instagram.post": {
    input: InstagramPostInput;
    data: InstagramPostData;
    result: BareRunResult<InstagramPostData>;
  };
  "instagram.post_comments": {
    input: InstagramPostCommentsInput;
    data: InstagramPostCommentsData;
    result: BareRunResult<InstagramPostCommentsData>;
  };
  "instagram.profile": {
    input: InstagramProfileInput;
    data: InstagramProfileData;
    result: BareRunResult<InstagramProfileData>;
  };
  "instagram.reel_transcript": {
    input: InstagramReelTranscriptInput;
    data: InstagramReelTranscriptData;
    result: BareRunResult<InstagramReelTranscriptData>;
  };
  "instagram.reels_search": {
    input: InstagramReelsSearchInput;
    data: InstagramReelsSearchData;
    result: BareRunResult<InstagramReelsSearchData>;
  };
  "instagram.search": {
    input: InstagramSearchInput;
    data: InstagramSearchData;
    result: BareRunResult<InstagramSearchData>;
  };
  "instagram.search_hashtag": {
    input: InstagramSearchHashtagInput;
    data: InstagramSearchHashtagData;
    result: BareRunResult<InstagramSearchHashtagData>;
  };
  "instagram.search_profiles": {
    input: InstagramSearchProfilesInput;
    data: InstagramSearchProfilesData;
    result: BareRunResult<InstagramSearchProfilesData>;
  };
  "instagram.stories_full": {
    input: InstagramStoriesFullInput;
    data: InstagramStoriesFullData;
    result: BareRunResult<InstagramStoriesFullData>;
  };
  "instagram.stories_thin": {
    input: InstagramStoriesThinInput;
    data: InstagramStoriesThinData;
    result: BareRunResult<InstagramStoriesThinData>;
  };
  "instagram.trending_reels": {
    input: InstagramTrendingReelsInput;
    data: InstagramTrendingReelsData;
    result: BareRunResult<InstagramTrendingReelsData>;
  };
  "instagram.user_highlights": {
    input: InstagramUserHighlightsInput;
    data: InstagramUserHighlightsData;
    result: BareRunResult<InstagramUserHighlightsData>;
  };
  "instagram.user_posts": {
    input: InstagramUserPostsInput;
    data: InstagramUserPostsData;
    result: BareRunResult<InstagramUserPostsData>;
  };
  "instagram.user_reels": {
    input: InstagramUserReelsInput;
    data: InstagramUserReelsData;
    result: BareRunResult<InstagramUserReelsData>;
  };
  "linkedin.ad": {
    input: LinkedinAdInput;
    data: LinkedinAdData;
    result: BareRunResult<LinkedinAdData>;
  };
  "linkedin.ads": {
    input: LinkedinAdsInput;
    data: LinkedinAdsData;
    result: BareRunResult<LinkedinAdsData>;
  };
  "linkedin.ads_search": {
    input: LinkedinAdsSearchInput;
    data: LinkedinAdsSearchData;
    result: BareRunResult<LinkedinAdsSearchData>;
  };
  "linkedin.company": {
    input: LinkedinCompanyInput;
    data: LinkedinCompanyData;
    result: BareRunResult<LinkedinCompanyData>;
  };
  "linkedin.company_employees": {
    input: LinkedinCompanyEmployeesInput;
    data: LinkedinCompanyEmployeesData;
    result: BareRunResult<LinkedinCompanyEmployeesData>;
  };
  "linkedin.company_posts": {
    input: LinkedinCompanyPostsInput;
    data: LinkedinCompanyPostsData;
    result: BareRunResult<LinkedinCompanyPostsData>;
  };
  "linkedin.company_posts_thin": {
    input: LinkedinCompanyPostsThinInput;
    data: LinkedinCompanyPostsThinData;
    result: BareRunResult<LinkedinCompanyPostsThinData>;
  };
  "linkedin.company_thin": {
    input: LinkedinCompanyThinInput;
    data: LinkedinCompanyThinData;
    result: BareRunResult<LinkedinCompanyThinData>;
  };
  "linkedin.email": {
    input: LinkedinEmailInput;
    data: LinkedinEmailData;
    result: BareRunResult<LinkedinEmailData>;
  };
  "linkedin.jobs": {
    input: LinkedinJobsInput;
    data: LinkedinJobsData;
    result: BareRunResult<LinkedinJobsData>;
  };
  "linkedin.jobs_thin": {
    input: LinkedinJobsThinInput;
    data: LinkedinJobsThinData;
    result: BareRunResult<LinkedinJobsThinData>;
  };
  "linkedin.post": {
    input: LinkedinPostInput;
    data: LinkedinPostData;
    result: BareRunResult<LinkedinPostData>;
  };
  "linkedin.post_comments": {
    input: LinkedinPostCommentsInput;
    data: LinkedinPostCommentsData;
    result: BareRunResult<LinkedinPostCommentsData>;
  };
  "linkedin.post_reactions": {
    input: LinkedinPostReactionsInput;
    data: LinkedinPostReactionsData;
    result: BareRunResult<LinkedinPostReactionsData>;
  };
  "linkedin.post_transcript": {
    input: LinkedinPostTranscriptInput;
    data: LinkedinPostTranscriptData;
    result: BareRunResult<LinkedinPostTranscriptData>;
  };
  "linkedin.profile": {
    input: LinkedinProfileInput;
    data: LinkedinProfileData;
    result: BareRunResult<LinkedinProfileData>;
  };
  "linkedin.profile_thin": {
    input: LinkedinProfileThinInput;
    data: LinkedinProfileThinData;
    result: BareRunResult<LinkedinProfileThinData>;
  };
  "linkedin.search_companies": {
    input: LinkedinSearchCompaniesInput;
    data: LinkedinSearchCompaniesData;
    result: BareRunResult<LinkedinSearchCompaniesData>;
  };
  "linkedin.search_posts": {
    input: LinkedinSearchPostsInput;
    data: LinkedinSearchPostsData;
    result: BareRunResult<LinkedinSearchPostsData>;
  };
  "linkedin.search_profiles": {
    input: LinkedinSearchProfilesInput;
    data: LinkedinSearchProfilesData;
    result: BareRunResult<LinkedinSearchProfilesData>;
  };
  "linkedin.search_profiles_email": {
    input: LinkedinSearchProfilesEmailInput;
    data: LinkedinSearchProfilesEmailData;
    result: BareRunResult<LinkedinSearchProfilesEmailData>;
  };
  "linkedin.search_profiles_thin": {
    input: LinkedinSearchProfilesThinInput;
    data: LinkedinSearchProfilesThinData;
    result: BareRunResult<LinkedinSearchProfilesThinData>;
  };
  "maps.contacts": {
    input: MapsContactsInput;
    data: MapsContactsData;
    result: BareRunResult<MapsContactsData>;
  };
  "maps.place": {
    input: MapsPlaceInput;
    data: MapsPlaceData;
    result: BareRunResult<MapsPlaceData>;
  };
  "maps.reviews": {
    input: MapsReviewsInput;
    data: MapsReviewsData;
    result: BareRunResult<MapsReviewsData>;
  };
  "maps.search": {
    input: MapsSearchInput;
    data: MapsSearchData;
    result: BareRunResult<MapsSearchData>;
  };
  "pandaexpress.locations": {
    input: PandaexpressLocationsInput;
    data: PandaexpressLocationsData;
    result: BareRunResult<PandaexpressLocationsData>;
  };
  "pandaexpress.menu": {
    input: PandaexpressMenuInput;
    data: PandaexpressMenuData;
    result: BareRunResult<PandaexpressMenuData>;
  };
  "pandaexpress.nutrition": {
    input: PandaexpressNutritionInput;
    data: PandaexpressNutritionData;
    result: BareRunResult<PandaexpressNutritionData>;
  };
  "person.skip_trace": {
    input: PersonSkipTraceInput;
    data: PersonSkipTraceData;
    result: BareRunResult<PersonSkipTraceData>;
  };
  "pinterest.search": {
    input: PinterestSearchInput;
    data: PinterestSearchData;
    result: BareRunResult<PinterestSearchData>;
  };
  "playstore.reviews": {
    input: PlaystoreReviewsInput;
    data: PlaystoreReviewsData;
    result: BareRunResult<PlaystoreReviewsData>;
  };
  "polymarket.markets": {
    input: PolymarketMarketsInput;
    data: PolymarketMarketsData;
    result: BareRunResult<PolymarketMarketsData>;
  };
  "realtor.search": {
    input: RealtorSearchInput;
    data: RealtorSearchData;
    result: BareRunResult<RealtorSearchData>;
  };
  "reddit.post_comments": {
    input: RedditPostCommentsInput;
    data: RedditPostCommentsData;
    result: BareRunResult<RedditPostCommentsData>;
  };
  "reddit.post_transcript": {
    input: RedditPostTranscriptInput;
    data: RedditPostTranscriptData;
    result: BareRunResult<RedditPostTranscriptData>;
  };
  "reddit.search": {
    input: RedditSearchInput;
    data: RedditSearchData;
    result: BareRunResult<RedditSearchData>;
  };
  "reddit.subreddit_details": {
    input: RedditSubredditDetailsInput;
    data: RedditSubredditDetailsData;
    result: BareRunResult<RedditSubredditDetailsData>;
  };
  "reddit.subreddit_posts": {
    input: RedditSubredditPostsInput;
    data: RedditSubredditPostsData;
    result: BareRunResult<RedditSubredditPostsData>;
  };
  "reddit.subreddit_search": {
    input: RedditSubredditSearchInput;
    data: RedditSubredditSearchData;
    result: BareRunResult<RedditSubredditSearchData>;
  };
  "redfin.search": {
    input: RedfinSearchInput;
    data: RedfinSearchData;
    result: BareRunResult<RedfinSearchData>;
  };
  "rednote.note": {
    input: RednoteNoteInput;
    data: RednoteNoteData;
    result: BareRunResult<RednoteNoteData>;
  };
  "rednote.note_comments": {
    input: RednoteNoteCommentsInput;
    data: RednoteNoteCommentsData;
    result: BareRunResult<RednoteNoteCommentsData>;
  };
  "rednote.profile": {
    input: RednoteProfileInput;
    data: RednoteProfileData;
    result: BareRunResult<RednoteProfileData>;
  };
  "rednote.search": {
    input: RednoteSearchInput;
    data: RednoteSearchData;
    result: BareRunResult<RednoteSearchData>;
  };
  "rednote.search_users": {
    input: RednoteSearchUsersInput;
    data: RednoteSearchUsersData;
    result: BareRunResult<RednoteSearchUsersData>;
  };
  "rednote.user_notes": {
    input: RednoteUserNotesInput;
    data: RednoteUserNotesData;
    result: BareRunResult<RednoteUserNotesData>;
  };
  "sec.filings": {
    input: SecFilingsInput;
    data: SecFilingsData;
    result: BareRunResult<SecFilingsData>;
  };
  "semrush.keywords": {
    input: SemrushKeywordsInput;
    data: SemrushKeywordsData;
    result: BareRunResult<SemrushKeywordsData>;
  };
  "semrush.overview": {
    input: SemrushOverviewInput;
    data: SemrushOverviewData;
    result: BareRunResult<SemrushOverviewData>;
  };
  "seo.competitors_domain": {
    input: SeoCompetitorsDomainInput;
    data: SeoCompetitorsDomainData;
    result: BareRunResult<SeoCompetitorsDomainData>;
  };
  "seo.domain_intersection": {
    input: SeoDomainIntersectionInput;
    data: SeoDomainIntersectionData;
    result: BareRunResult<SeoDomainIntersectionData>;
  };
  "seo.domain_rank_overview": {
    input: SeoDomainRankOverviewInput;
    data: SeoDomainRankOverviewData;
    result: BareRunResult<SeoDomainRankOverviewData>;
  };
  "seo.keyword_difficulty": {
    input: SeoKeywordDifficultyInput;
    data: SeoKeywordDifficultyData;
    result: BareRunResult<SeoKeywordDifficultyData>;
  };
  "seo.keyword_ideas": {
    input: SeoKeywordIdeasInput;
    data: SeoKeywordIdeasData;
    result: BareRunResult<SeoKeywordIdeasData>;
  };
  "seo.keyword_overview": {
    input: SeoKeywordOverviewInput;
    data: SeoKeywordOverviewData;
    result: BareRunResult<SeoKeywordOverviewData>;
  };
  "seo.keyword_suggestions": {
    input: SeoKeywordSuggestionsInput;
    data: SeoKeywordSuggestionsData;
    result: BareRunResult<SeoKeywordSuggestionsData>;
  };
  "seo.local_pack": {
    input: SeoLocalPackInput;
    data: SeoLocalPackData;
    result: BareRunResult<SeoLocalPackData>;
  };
  "seo.ranked_keywords": {
    input: SeoRankedKeywordsInput;
    data: SeoRankedKeywordsData;
    result: BareRunResult<SeoRankedKeywordsData>;
  };
  "seo.related_keywords": {
    input: SeoRelatedKeywordsInput;
    data: SeoRelatedKeywordsData;
    result: BareRunResult<SeoRelatedKeywordsData>;
  };
  "seo.search_intent": {
    input: SeoSearchIntentInput;
    data: SeoSearchIntentData;
    result: BareRunResult<SeoSearchIntentData>;
  };
  "seo.search_volume": {
    input: SeoSearchVolumeInput;
    data: SeoSearchVolumeData;
    result: BareRunResult<SeoSearchVolumeData>;
  };
  "snapchat.profile": {
    input: SnapchatProfileInput;
    data: SnapchatProfileData;
    result: BareRunResult<SnapchatProfileData>;
  };
  "social.finder": {
    input: SocialFinderInput;
    data: SocialFinderData;
    result: BareRunResult<SocialFinderData>;
  };
  "spotify.album": {
    input: SpotifyAlbumInput;
    data: SpotifyAlbumData;
    result: BareRunResult<SpotifyAlbumData>;
  };
  "spotify.artist": {
    input: SpotifyArtistInput;
    data: SpotifyArtistData;
    result: BareRunResult<SpotifyArtistData>;
  };
  "spotify.play_count": {
    input: SpotifyPlayCountInput;
    data: SpotifyPlayCountData;
    result: BareRunResult<SpotifyPlayCountData>;
  };
  "spotify.podcast": {
    input: SpotifyPodcastInput;
    data: SpotifyPodcastData;
    result: BareRunResult<SpotifyPodcastData>;
  };
  "spotify.podcast_episodes": {
    input: SpotifyPodcastEpisodesInput;
    data: SpotifyPodcastEpisodesData;
    result: BareRunResult<SpotifyPodcastEpisodesData>;
  };
  "spotify.search": {
    input: SpotifySearchInput;
    data: SpotifySearchData;
    result: BareRunResult<SpotifySearchData>;
  };
  "spotify.track": {
    input: SpotifyTrackInput;
    data: SpotifyTrackData;
    result: BareRunResult<SpotifyTrackData>;
  };
  "substack.posts": {
    input: SubstackPostsInput;
    data: SubstackPostsData;
    result: BareRunResult<SubstackPostsData>;
  };
  "threads.post": {
    input: ThreadsPostInput;
    data: ThreadsPostData;
    result: BareRunResult<ThreadsPostData>;
  };
  "threads.profile": {
    input: ThreadsProfileInput;
    data: ThreadsProfileData;
    result: BareRunResult<ThreadsProfileData>;
  };
  "threads.search": {
    input: ThreadsSearchInput;
    data: ThreadsSearchData;
    result: BareRunResult<ThreadsSearchData>;
  };
  "threads.search_users": {
    input: ThreadsSearchUsersInput;
    data: ThreadsSearchUsersData;
    result: BareRunResult<ThreadsSearchUsersData>;
  };
  "threads.user_posts": {
    input: ThreadsUserPostsInput;
    data: ThreadsUserPostsData;
    result: BareRunResult<ThreadsUserPostsData>;
  };
  "tiktok.ad_library_ad": {
    input: TiktokAdLibraryAdInput;
    data: TiktokAdLibraryAdData;
    result: BareRunResult<TiktokAdLibraryAdData>;
  };
  "tiktok.ad_library_search": {
    input: TiktokAdLibrarySearchInput;
    data: TiktokAdLibrarySearchData;
    result: BareRunResult<TiktokAdLibrarySearchData>;
  };
  "tiktok.audience_demographics": {
    input: TiktokAudienceDemographicsInput;
    data: TiktokAudienceDemographicsData;
    result: BareRunResult<TiktokAudienceDemographicsData>;
  };
  "tiktok.comment_replies": {
    input: TiktokCommentRepliesInput;
    data: TiktokCommentRepliesData;
    result: BareRunResult<TiktokCommentRepliesData>;
  };
  "tiktok.followers": {
    input: TiktokFollowersInput;
    data: TiktokFollowersData;
    result: BareRunResult<TiktokFollowersData>;
  };
  "tiktok.following": {
    input: TiktokFollowingInput;
    data: TiktokFollowingData;
    result: BareRunResult<TiktokFollowingData>;
  };
  "tiktok.hashtag_videos": {
    input: TiktokHashtagVideosInput;
    data: TiktokHashtagVideosData;
    result: BareRunResult<TiktokHashtagVideosData>;
  };
  "tiktok.live": {
    input: TiktokLiveInput;
    data: TiktokLiveData;
    result: BareRunResult<TiktokLiveData>;
  };
  "tiktok.profile": {
    input: TiktokProfileInput;
    data: TiktokProfileData;
    result: BareRunResult<TiktokProfileData>;
  };
  "tiktok.profile_region": {
    input: TiktokProfileRegionInput;
    data: TiktokProfileRegionData;
    result: BareRunResult<TiktokProfileRegionData>;
  };
  "tiktok.profile_videos": {
    input: TiktokProfileVideosInput;
    data: TiktokProfileVideosData;
    result: BareRunResult<TiktokProfileVideosData>;
  };
  "tiktok.search_hashtag": {
    input: TiktokSearchHashtagInput;
    data: TiktokSearchHashtagData;
    result: BareRunResult<TiktokSearchHashtagData>;
  };
  "tiktok.search_keyword": {
    input: TiktokSearchKeywordInput;
    data: TiktokSearchKeywordData;
    result: BareRunResult<TiktokSearchKeywordData>;
  };
  "tiktok.search_top": {
    input: TiktokSearchTopInput;
    data: TiktokSearchTopData;
    result: BareRunResult<TiktokSearchTopData>;
  };
  "tiktok.search_users": {
    input: TiktokSearchUsersInput;
    data: TiktokSearchUsersData;
    result: BareRunResult<TiktokSearchUsersData>;
  };
  "tiktok.song": {
    input: TiktokSongInput;
    data: TiktokSongData;
    result: BareRunResult<TiktokSongData>;
  };
  "tiktok.song_videos": {
    input: TiktokSongVideosInput;
    data: TiktokSongVideosData;
    result: BareRunResult<TiktokSongVideosData>;
  };
  "tiktok.trending_feed": {
    input: TiktokTrendingFeedInput;
    data: TiktokTrendingFeedData;
    result: BareRunResult<TiktokTrendingFeedData>;
  };
  "tiktok.video": {
    input: TiktokVideoInput;
    data: TiktokVideoData;
    result: BareRunResult<TiktokVideoData>;
  };
  "tiktok.video_comments": {
    input: TiktokVideoCommentsInput;
    data: TiktokVideoCommentsData;
    result: BareRunResult<TiktokVideoCommentsData>;
  };
  "tiktok.video_transcript": {
    input: TiktokVideoTranscriptInput;
    data: TiktokVideoTranscriptData;
    result: BareRunResult<TiktokVideoTranscriptData>;
  };
  "tiktok_shop.product": {
    input: TiktokShopProductInput;
    data: TiktokShopProductData;
    result: BareRunResult<TiktokShopProductData>;
  };
  "tiktok_shop.product_reviews": {
    input: TiktokShopProductReviewsInput;
    data: TiktokShopProductReviewsData;
    result: BareRunResult<TiktokShopProductReviewsData>;
  };
  "tiktok_shop.search": {
    input: TiktokShopSearchInput;
    data: TiktokShopSearchData;
    result: BareRunResult<TiktokShopSearchData>;
  };
  "tiktok_shop.shop_products": {
    input: TiktokShopShopProductsInput;
    data: TiktokShopShopProductsData;
    result: BareRunResult<TiktokShopShopProductsData>;
  };
  "tiktok_shop.user_showcase": {
    input: TiktokShopUserShowcaseInput;
    data: TiktokShopUserShowcaseData;
    result: BareRunResult<TiktokShopUserShowcaseData>;
  };
  "tripadvisor.reviews": {
    input: TripadvisorReviewsInput;
    data: TripadvisorReviewsData;
    result: BareRunResult<TripadvisorReviewsData>;
  };
  "tripadvisor.search": {
    input: TripadvisorSearchInput;
    data: TripadvisorSearchData;
    result: BareRunResult<TripadvisorSearchData>;
  };
  "trustpilot.reviews": {
    input: TrustpilotReviewsInput;
    data: TrustpilotReviewsData;
    result: BareRunResult<TrustpilotReviewsData>;
  };
  "truthsocial.post": {
    input: TruthsocialPostInput;
    data: TruthsocialPostData;
    result: BareRunResult<TruthsocialPostData>;
  };
  "truthsocial.profile": {
    input: TruthsocialProfileInput;
    data: TruthsocialProfileData;
    result: BareRunResult<TruthsocialProfileData>;
  };
  "truthsocial.user_posts": {
    input: TruthsocialUserPostsInput;
    data: TruthsocialUserPostsData;
    result: BareRunResult<TruthsocialUserPostsData>;
  };
  "twitter.article": {
    input: TwitterArticleInput;
    data: TwitterArticleData;
    result: BareRunResult<TwitterArticleData>;
  };
  "twitter.community": {
    input: TwitterCommunityInput;
    data: TwitterCommunityData;
    result: BareRunResult<TwitterCommunityData>;
  };
  "twitter.community_tweets": {
    input: TwitterCommunityTweetsInput;
    data: TwitterCommunityTweetsData;
    result: BareRunResult<TwitterCommunityTweetsData>;
  };
  "twitter.followers": {
    input: TwitterFollowersInput;
    data: TwitterFollowersData;
    result: BareRunResult<TwitterFollowersData>;
  };
  "twitter.following": {
    input: TwitterFollowingInput;
    data: TwitterFollowingData;
    result: BareRunResult<TwitterFollowingData>;
  };
  "twitter.profile": {
    input: TwitterProfileInput;
    data: TwitterProfileData;
    result: BareRunResult<TwitterProfileData>;
  };
  "twitter.replies": {
    input: TwitterRepliesInput;
    data: TwitterRepliesData;
    result: BareRunResult<TwitterRepliesData>;
  };
  "twitter.search": {
    input: TwitterSearchInput;
    data: TwitterSearchData;
    result: BareRunResult<TwitterSearchData>;
  };
  "twitter.trends": {
    input: TwitterTrendsInput;
    data: TwitterTrendsData;
    result: BareRunResult<TwitterTrendsData>;
  };
  "twitter.tweet": {
    input: TwitterTweetInput;
    data: TwitterTweetData;
    result: BareRunResult<TwitterTweetData>;
  };
  "twitter.tweet_transcript": {
    input: TwitterTweetTranscriptInput;
    data: TwitterTweetTranscriptData;
    result: BareRunResult<TwitterTweetTranscriptData>;
  };
  "twitter.user_posts": {
    input: TwitterUserPostsInput;
    data: TwitterUserPostsData;
    result: BareRunResult<TwitterUserPostsData>;
  };
  "twitter.user_tweets": {
    input: TwitterUserTweetsInput;
    data: TwitterUserTweetsData;
    result: BareRunResult<TwitterUserTweetsData>;
  };
  "upwork.jobs": {
    input: UpworkJobsInput;
    data: UpworkJobsData;
    result: BareRunResult<UpworkJobsData>;
  };
  "walmart.product": {
    input: WalmartProductInput;
    data: WalmartProductData;
    result: BareRunResult<WalmartProductData>;
  };
  "web.crawl": {
    input: WebCrawlInput;
    data: WebCrawlData;
    result: BareRunResult<WebCrawlData>;
  };
  "web.map": {
    input: WebMapInput;
    data: WebMapData;
    result: BareRunResult<WebMapData>;
  };
  "web.scrape": {
    input: WebScrapeInput;
    data: WebScrapeData;
    result: BareRunResult<WebScrapeData>;
  };
  "web.screenshot": {
    input: WebScreenshotInput;
    data: WebScreenshotData;
    result: BareRunResult<WebScreenshotData>;
  };
  "weibo.hot_search": {
    input: WeiboHotSearchInput;
    data: WeiboHotSearchData;
    result: BareRunResult<WeiboHotSearchData>;
  };
  "weibo.post": {
    input: WeiboPostInput;
    data: WeiboPostData;
    result: BareRunResult<WeiboPostData>;
  };
  "weibo.post_comments": {
    input: WeiboPostCommentsInput;
    data: WeiboPostCommentsData;
    result: BareRunResult<WeiboPostCommentsData>;
  };
  "weibo.profile": {
    input: WeiboProfileInput;
    data: WeiboProfileData;
    result: BareRunResult<WeiboProfileData>;
  };
  "weibo.search": {
    input: WeiboSearchInput;
    data: WeiboSearchData;
    result: BareRunResult<WeiboSearchData>;
  };
  "weibo.user_posts": {
    input: WeiboUserPostsInput;
    data: WeiboUserPostsData;
    result: BareRunResult<WeiboUserPostsData>;
  };
  "whatsapp.validate": {
    input: WhatsappValidateInput;
    data: WhatsappValidateData;
    result: BareRunResult<WhatsappValidateData>;
  };
  "yahoo_finance.quote": {
    input: YahooFinanceQuoteInput;
    data: YahooFinanceQuoteData;
    result: BareRunResult<YahooFinanceQuoteData>;
  };
  "yelp.search": {
    input: YelpSearchInput;
    data: YelpSearchData;
    result: BareRunResult<YelpSearchData>;
  };
  "youtube.channel": {
    input: YoutubeChannelInput;
    data: YoutubeChannelData;
    result: BareRunResult<YoutubeChannelData>;
  };
  "youtube.channel_community_posts": {
    input: YoutubeChannelCommunityPostsInput;
    data: YoutubeChannelCommunityPostsData;
    result: BareRunResult<YoutubeChannelCommunityPostsData>;
  };
  "youtube.channel_lives": {
    input: YoutubeChannelLivesInput;
    data: YoutubeChannelLivesData;
    result: BareRunResult<YoutubeChannelLivesData>;
  };
  "youtube.channel_playlists": {
    input: YoutubeChannelPlaylistsInput;
    data: YoutubeChannelPlaylistsData;
    result: BareRunResult<YoutubeChannelPlaylistsData>;
  };
  "youtube.channel_shorts": {
    input: YoutubeChannelShortsInput;
    data: YoutubeChannelShortsData;
    result: BareRunResult<YoutubeChannelShortsData>;
  };
  "youtube.channel_videos": {
    input: YoutubeChannelVideosInput;
    data: YoutubeChannelVideosData;
    result: BareRunResult<YoutubeChannelVideosData>;
  };
  "youtube.comment_replies": {
    input: YoutubeCommentRepliesInput;
    data: YoutubeCommentRepliesData;
    result: BareRunResult<YoutubeCommentRepliesData>;
  };
  "youtube.community_post": {
    input: YoutubeCommunityPostInput;
    data: YoutubeCommunityPostData;
    result: BareRunResult<YoutubeCommunityPostData>;
  };
  "youtube.playlist": {
    input: YoutubePlaylistInput;
    data: YoutubePlaylistData;
    result: BareRunResult<YoutubePlaylistData>;
  };
  "youtube.search": {
    input: YoutubeSearchInput;
    data: YoutubeSearchData;
    result: BareRunResult<YoutubeSearchData>;
  };
  "youtube.search_hashtag": {
    input: YoutubeSearchHashtagInput;
    data: YoutubeSearchHashtagData;
    result: BareRunResult<YoutubeSearchHashtagData>;
  };
  "youtube.trending_shorts": {
    input: YoutubeTrendingShortsInput;
    data: YoutubeTrendingShortsData;
    result: BareRunResult<YoutubeTrendingShortsData>;
  };
  "youtube.video": {
    input: YoutubeVideoInput;
    data: YoutubeVideoData;
    result: BareRunResult<YoutubeVideoData>;
  };
  "youtube.video_comments": {
    input: YoutubeVideoCommentsInput;
    data: YoutubeVideoCommentsData;
    result: BareRunResult<YoutubeVideoCommentsData>;
  };
  "youtube.video_sponsors": {
    input: YoutubeVideoSponsorsInput;
    data: YoutubeVideoSponsorsData;
    result: BareRunResult<YoutubeVideoSponsorsData>;
  };
  "youtube.video_transcript": {
    input: YoutubeVideoTranscriptInput;
    data: YoutubeVideoTranscriptData;
    result: BareRunResult<YoutubeVideoTranscriptData>;
  };
  "zhihu.answer": {
    input: ZhihuAnswerInput;
    data: ZhihuAnswerData;
    result: BareRunResult<ZhihuAnswerData>;
  };
  "zhihu.profile": {
    input: ZhihuProfileInput;
    data: ZhihuProfileData;
    result: BareRunResult<ZhihuProfileData>;
  };
  "zhihu.question": {
    input: ZhihuQuestionInput;
    data: ZhihuQuestionData;
    result: BareRunResult<ZhihuQuestionData>;
  };
  "zhihu.question_answers": {
    input: ZhihuQuestionAnswersInput;
    data: ZhihuQuestionAnswersData;
    result: BareRunResult<ZhihuQuestionAnswersData>;
  };
  "zhihu.search_articles": {
    input: ZhihuSearchArticlesInput;
    data: ZhihuSearchArticlesData;
    result: BareRunResult<ZhihuSearchArticlesData>;
  };
  "zillow.property": {
    input: ZillowPropertyInput;
    data: ZillowPropertyData;
    result: BareRunResult<ZillowPropertyData>;
  };
  "zillow.search": {
    input: ZillowSearchInput;
    data: ZillowSearchData;
    result: BareRunResult<ZillowSearchData>;
  };
}
