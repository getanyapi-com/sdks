// Generated - do not edit. Regenerate with: pnpm generate

import { AnyAPI as AnyAPIBase } from "../core/index.js";

import type { RequestOptions, RunResult } from "../core/index.js";

import type { SkuMap } from "./sku-map.js";

import { AhrefsNamespace } from "./platforms/ahrefs.js";
import { AirbnbNamespace } from "./platforms/airbnb.js";
import { AlibabaNamespace } from "./platforms/alibaba.js";
import { AmazonNamespace } from "./platforms/amazon.js";
import { ApolloNamespace } from "./platforms/apollo.js";
import { AppstoreNamespace } from "./platforms/appstore.js";
import { BlueskyNamespace } from "./platforms/bluesky.js";
import { BookingNamespace } from "./platforms/booking.js";
import { CoinmarketcapNamespace } from "./platforms/coinmarketcap.js";
import { CongressNamespace } from "./platforms/congress.js";
import { DexscreenerNamespace } from "./platforms/dexscreener.js";
import { DouyinNamespace } from "./platforms/douyin.js";
import { EbayNamespace } from "./platforms/ebay.js";
import { EmailNamespace } from "./platforms/email.js";
import { FacebookNamespace } from "./platforms/facebook.js";
import { FiverrNamespace } from "./platforms/fiverr.js";
import { GithubNamespace } from "./platforms/github.js";
import { GlassdoorNamespace } from "./platforms/glassdoor.js";
import { GoogleNamespace } from "./platforms/google.js";
import { GoogleAdsNamespace } from "./platforms/google_ads.js";
import { GoogleFinanceNamespace } from "./platforms/google_finance.js";
import { GoogleShoppingNamespace } from "./platforms/google_shopping.js";
import { HackernewsNamespace } from "./platforms/hackernews.js";
import { IndeedNamespace } from "./platforms/indeed.js";
import { InstagramNamespace } from "./platforms/instagram.js";
import { LinkedinNamespace } from "./platforms/linkedin.js";
import { MapsNamespace } from "./platforms/maps.js";
import { PandaexpressNamespace } from "./platforms/pandaexpress.js";
import { PersonNamespace } from "./platforms/person.js";
import { PinterestNamespace } from "./platforms/pinterest.js";
import { PlaystoreNamespace } from "./platforms/playstore.js";
import { PolymarketNamespace } from "./platforms/polymarket.js";
import { RealtorNamespace } from "./platforms/realtor.js";
import { RedditNamespace } from "./platforms/reddit.js";
import { RedfinNamespace } from "./platforms/redfin.js";
import { RednoteNamespace } from "./platforms/rednote.js";
import { SecNamespace } from "./platforms/sec.js";
import { SemrushNamespace } from "./platforms/semrush.js";
import { SeoNamespace } from "./platforms/seo.js";
import { SnapchatNamespace } from "./platforms/snapchat.js";
import { SocialNamespace } from "./platforms/social.js";
import { SpotifyNamespace } from "./platforms/spotify.js";
import { SubstackNamespace } from "./platforms/substack.js";
import { ThreadsNamespace } from "./platforms/threads.js";
import { TiktokNamespace } from "./platforms/tiktok.js";
import { TiktokShopNamespace } from "./platforms/tiktok_shop.js";
import { TripadvisorNamespace } from "./platforms/tripadvisor.js";
import { TrustpilotNamespace } from "./platforms/trustpilot.js";
import { TruthsocialNamespace } from "./platforms/truthsocial.js";
import { TwitterNamespace } from "./platforms/twitter.js";
import { UpworkNamespace } from "./platforms/upwork.js";
import { WalmartNamespace } from "./platforms/walmart.js";
import { WebNamespace } from "./platforms/web.js";
import { WeiboNamespace } from "./platforms/weibo.js";
import { WhatsappNamespace } from "./platforms/whatsapp.js";
import { YahooFinanceNamespace } from "./platforms/yahoo_finance.js";
import { YelpNamespace } from "./platforms/yelp.js";
import { YoutubeNamespace } from "./platforms/youtube.js";
import { ZhihuNamespace } from "./platforms/zhihu.js";
import { ZillowNamespace } from "./platforms/zillow.js";

/**
 * The AnyAPI client. Extends the handwritten core base (run/balance/me/catalog/
 * describe) and attaches every platform namespace as a lazily instantiated getter.
 *
 * import { AnyAPI } from "@getanyapi/sdk";
 */
export class AnyAPI extends AnyAPIBase {
  private readonly _namespaces: Record<string, unknown> = {};

  /**
   * Generic typed run for any SKU by slug. A known slug literal infers its input and
   * result type from the SkuMap; any other string returns RunResult<unknown>.
   */
  run<K extends keyof SkuMap>(
    slug: K,
    input: SkuMap[K]["input"],
    options?: RequestOptions,
  ): Promise<SkuMap[K]["result"]>;
  run<S extends string, T = unknown>(
    slug: S extends keyof SkuMap ? never : S,
    input: unknown,
    options?: RequestOptions,
  ): Promise<RunResult<T>>;
  run(
    slug: string,
    input: unknown,
    options?: RequestOptions,
  ): Promise<RunResult<unknown>> {
    return super.run(slug, input, options);
  }

  /**
   * Typed methods for the ahrefs platform.
   */
  get ahrefs(): AhrefsNamespace {
    return (this._namespaces["ahrefs"] ??= new AhrefsNamespace(
      this._core,
    )) as AhrefsNamespace;
  }

  /**
   * Typed methods for the airbnb platform.
   */
  get airbnb(): AirbnbNamespace {
    return (this._namespaces["airbnb"] ??= new AirbnbNamespace(
      this._core,
    )) as AirbnbNamespace;
  }

  /**
   * Typed methods for the alibaba platform.
   */
  get alibaba(): AlibabaNamespace {
    return (this._namespaces["alibaba"] ??= new AlibabaNamespace(
      this._core,
    )) as AlibabaNamespace;
  }

  /**
   * Typed methods for the amazon platform.
   */
  get amazon(): AmazonNamespace {
    return (this._namespaces["amazon"] ??= new AmazonNamespace(
      this._core,
    )) as AmazonNamespace;
  }

  /**
   * Typed methods for the apollo platform.
   */
  get apollo(): ApolloNamespace {
    return (this._namespaces["apollo"] ??= new ApolloNamespace(
      this._core,
    )) as ApolloNamespace;
  }

  /**
   * Typed methods for the appstore platform.
   */
  get appstore(): AppstoreNamespace {
    return (this._namespaces["appstore"] ??= new AppstoreNamespace(
      this._core,
    )) as AppstoreNamespace;
  }

  /**
   * Typed methods for the bluesky platform.
   */
  get bluesky(): BlueskyNamespace {
    return (this._namespaces["bluesky"] ??= new BlueskyNamespace(
      this._core,
    )) as BlueskyNamespace;
  }

  /**
   * Typed methods for the booking platform.
   */
  get booking(): BookingNamespace {
    return (this._namespaces["booking"] ??= new BookingNamespace(
      this._core,
    )) as BookingNamespace;
  }

  /**
   * Typed methods for the coinmarketcap platform.
   */
  get coinmarketcap(): CoinmarketcapNamespace {
    return (this._namespaces["coinmarketcap"] ??= new CoinmarketcapNamespace(
      this._core,
    )) as CoinmarketcapNamespace;
  }

  /**
   * Typed methods for the congress platform.
   */
  get congress(): CongressNamespace {
    return (this._namespaces["congress"] ??= new CongressNamespace(
      this._core,
    )) as CongressNamespace;
  }

  /**
   * Typed methods for the dexscreener platform.
   */
  get dexscreener(): DexscreenerNamespace {
    return (this._namespaces["dexscreener"] ??= new DexscreenerNamespace(
      this._core,
    )) as DexscreenerNamespace;
  }

  /**
   * Typed methods for the douyin platform.
   */
  get douyin(): DouyinNamespace {
    return (this._namespaces["douyin"] ??= new DouyinNamespace(
      this._core,
    )) as DouyinNamespace;
  }

  /**
   * Typed methods for the ebay platform.
   */
  get ebay(): EbayNamespace {
    return (this._namespaces["ebay"] ??= new EbayNamespace(
      this._core,
    )) as EbayNamespace;
  }

  /**
   * Typed methods for the email platform.
   */
  get email(): EmailNamespace {
    return (this._namespaces["email"] ??= new EmailNamespace(
      this._core,
    )) as EmailNamespace;
  }

  /**
   * Typed methods for the facebook platform.
   */
  get facebook(): FacebookNamespace {
    return (this._namespaces["facebook"] ??= new FacebookNamespace(
      this._core,
    )) as FacebookNamespace;
  }

  /**
   * Typed methods for the fiverr platform.
   */
  get fiverr(): FiverrNamespace {
    return (this._namespaces["fiverr"] ??= new FiverrNamespace(
      this._core,
    )) as FiverrNamespace;
  }

  /**
   * Typed methods for the github platform.
   */
  get github(): GithubNamespace {
    return (this._namespaces["github"] ??= new GithubNamespace(
      this._core,
    )) as GithubNamespace;
  }

  /**
   * Typed methods for the glassdoor platform.
   */
  get glassdoor(): GlassdoorNamespace {
    return (this._namespaces["glassdoor"] ??= new GlassdoorNamespace(
      this._core,
    )) as GlassdoorNamespace;
  }

  /**
   * Typed methods for the google platform.
   */
  get google(): GoogleNamespace {
    return (this._namespaces["google"] ??= new GoogleNamespace(
      this._core,
    )) as GoogleNamespace;
  }

  /**
   * Typed methods for the google_ads platform.
   */
  get googleAds(): GoogleAdsNamespace {
    return (this._namespaces["googleAds"] ??= new GoogleAdsNamespace(
      this._core,
    )) as GoogleAdsNamespace;
  }

  /**
   * Typed methods for the google_finance platform.
   */
  get googleFinance(): GoogleFinanceNamespace {
    return (this._namespaces["googleFinance"] ??= new GoogleFinanceNamespace(
      this._core,
    )) as GoogleFinanceNamespace;
  }

  /**
   * Typed methods for the google_shopping platform.
   */
  get googleShopping(): GoogleShoppingNamespace {
    return (this._namespaces["googleShopping"] ??= new GoogleShoppingNamespace(
      this._core,
    )) as GoogleShoppingNamespace;
  }

  /**
   * Typed methods for the hackernews platform.
   */
  get hackernews(): HackernewsNamespace {
    return (this._namespaces["hackernews"] ??= new HackernewsNamespace(
      this._core,
    )) as HackernewsNamespace;
  }

  /**
   * Typed methods for the indeed platform.
   */
  get indeed(): IndeedNamespace {
    return (this._namespaces["indeed"] ??= new IndeedNamespace(
      this._core,
    )) as IndeedNamespace;
  }

  /**
   * Typed methods for the instagram platform.
   */
  get instagram(): InstagramNamespace {
    return (this._namespaces["instagram"] ??= new InstagramNamespace(
      this._core,
    )) as InstagramNamespace;
  }

  /**
   * Typed methods for the linkedin platform.
   */
  get linkedin(): LinkedinNamespace {
    return (this._namespaces["linkedin"] ??= new LinkedinNamespace(
      this._core,
    )) as LinkedinNamespace;
  }

  /**
   * Typed methods for the maps platform.
   */
  get maps(): MapsNamespace {
    return (this._namespaces["maps"] ??= new MapsNamespace(
      this._core,
    )) as MapsNamespace;
  }

  /**
   * Typed methods for the pandaexpress platform.
   */
  get pandaexpress(): PandaexpressNamespace {
    return (this._namespaces["pandaexpress"] ??= new PandaexpressNamespace(
      this._core,
    )) as PandaexpressNamespace;
  }

  /**
   * Typed methods for the person platform.
   */
  get person(): PersonNamespace {
    return (this._namespaces["person"] ??= new PersonNamespace(
      this._core,
    )) as PersonNamespace;
  }

  /**
   * Typed methods for the pinterest platform.
   */
  get pinterest(): PinterestNamespace {
    return (this._namespaces["pinterest"] ??= new PinterestNamespace(
      this._core,
    )) as PinterestNamespace;
  }

  /**
   * Typed methods for the playstore platform.
   */
  get playstore(): PlaystoreNamespace {
    return (this._namespaces["playstore"] ??= new PlaystoreNamespace(
      this._core,
    )) as PlaystoreNamespace;
  }

  /**
   * Typed methods for the polymarket platform.
   */
  get polymarket(): PolymarketNamespace {
    return (this._namespaces["polymarket"] ??= new PolymarketNamespace(
      this._core,
    )) as PolymarketNamespace;
  }

  /**
   * Typed methods for the realtor platform.
   */
  get realtor(): RealtorNamespace {
    return (this._namespaces["realtor"] ??= new RealtorNamespace(
      this._core,
    )) as RealtorNamespace;
  }

  /**
   * Typed methods for the reddit platform.
   */
  get reddit(): RedditNamespace {
    return (this._namespaces["reddit"] ??= new RedditNamespace(
      this._core,
    )) as RedditNamespace;
  }

  /**
   * Typed methods for the redfin platform.
   */
  get redfin(): RedfinNamespace {
    return (this._namespaces["redfin"] ??= new RedfinNamespace(
      this._core,
    )) as RedfinNamespace;
  }

  /**
   * Typed methods for the rednote platform.
   */
  get rednote(): RednoteNamespace {
    return (this._namespaces["rednote"] ??= new RednoteNamespace(
      this._core,
    )) as RednoteNamespace;
  }

  /**
   * Typed methods for the sec platform.
   */
  get sec(): SecNamespace {
    return (this._namespaces["sec"] ??= new SecNamespace(
      this._core,
    )) as SecNamespace;
  }

  /**
   * Typed methods for the semrush platform.
   */
  get semrush(): SemrushNamespace {
    return (this._namespaces["semrush"] ??= new SemrushNamespace(
      this._core,
    )) as SemrushNamespace;
  }

  /**
   * Typed methods for the seo platform.
   */
  get seo(): SeoNamespace {
    return (this._namespaces["seo"] ??= new SeoNamespace(
      this._core,
    )) as SeoNamespace;
  }

  /**
   * Typed methods for the snapchat platform.
   */
  get snapchat(): SnapchatNamespace {
    return (this._namespaces["snapchat"] ??= new SnapchatNamespace(
      this._core,
    )) as SnapchatNamespace;
  }

  /**
   * Typed methods for the social platform.
   */
  get social(): SocialNamespace {
    return (this._namespaces["social"] ??= new SocialNamespace(
      this._core,
    )) as SocialNamespace;
  }

  /**
   * Typed methods for the spotify platform.
   */
  get spotify(): SpotifyNamespace {
    return (this._namespaces["spotify"] ??= new SpotifyNamespace(
      this._core,
    )) as SpotifyNamespace;
  }

  /**
   * Typed methods for the substack platform.
   */
  get substack(): SubstackNamespace {
    return (this._namespaces["substack"] ??= new SubstackNamespace(
      this._core,
    )) as SubstackNamespace;
  }

  /**
   * Typed methods for the threads platform.
   */
  get threads(): ThreadsNamespace {
    return (this._namespaces["threads"] ??= new ThreadsNamespace(
      this._core,
    )) as ThreadsNamespace;
  }

  /**
   * Typed methods for the tiktok platform.
   */
  get tiktok(): TiktokNamespace {
    return (this._namespaces["tiktok"] ??= new TiktokNamespace(
      this._core,
    )) as TiktokNamespace;
  }

  /**
   * Typed methods for the tiktok_shop platform.
   */
  get tiktokShop(): TiktokShopNamespace {
    return (this._namespaces["tiktokShop"] ??= new TiktokShopNamespace(
      this._core,
    )) as TiktokShopNamespace;
  }

  /**
   * Typed methods for the tripadvisor platform.
   */
  get tripadvisor(): TripadvisorNamespace {
    return (this._namespaces["tripadvisor"] ??= new TripadvisorNamespace(
      this._core,
    )) as TripadvisorNamespace;
  }

  /**
   * Typed methods for the trustpilot platform.
   */
  get trustpilot(): TrustpilotNamespace {
    return (this._namespaces["trustpilot"] ??= new TrustpilotNamespace(
      this._core,
    )) as TrustpilotNamespace;
  }

  /**
   * Typed methods for the truthsocial platform.
   */
  get truthsocial(): TruthsocialNamespace {
    return (this._namespaces["truthsocial"] ??= new TruthsocialNamespace(
      this._core,
    )) as TruthsocialNamespace;
  }

  /**
   * Typed methods for the twitter platform.
   */
  get twitter(): TwitterNamespace {
    return (this._namespaces["twitter"] ??= new TwitterNamespace(
      this._core,
    )) as TwitterNamespace;
  }

  /**
   * Typed methods for the upwork platform.
   */
  get upwork(): UpworkNamespace {
    return (this._namespaces["upwork"] ??= new UpworkNamespace(
      this._core,
    )) as UpworkNamespace;
  }

  /**
   * Typed methods for the walmart platform.
   */
  get walmart(): WalmartNamespace {
    return (this._namespaces["walmart"] ??= new WalmartNamespace(
      this._core,
    )) as WalmartNamespace;
  }

  /**
   * Typed methods for the web platform.
   */
  get web(): WebNamespace {
    return (this._namespaces["web"] ??= new WebNamespace(
      this._core,
    )) as WebNamespace;
  }

  /**
   * Typed methods for the weibo platform.
   */
  get weibo(): WeiboNamespace {
    return (this._namespaces["weibo"] ??= new WeiboNamespace(
      this._core,
    )) as WeiboNamespace;
  }

  /**
   * Typed methods for the whatsapp platform.
   */
  get whatsapp(): WhatsappNamespace {
    return (this._namespaces["whatsapp"] ??= new WhatsappNamespace(
      this._core,
    )) as WhatsappNamespace;
  }

  /**
   * Typed methods for the yahoo_finance platform.
   */
  get yahooFinance(): YahooFinanceNamespace {
    return (this._namespaces["yahooFinance"] ??= new YahooFinanceNamespace(
      this._core,
    )) as YahooFinanceNamespace;
  }

  /**
   * Typed methods for the yelp platform.
   */
  get yelp(): YelpNamespace {
    return (this._namespaces["yelp"] ??= new YelpNamespace(
      this._core,
    )) as YelpNamespace;
  }

  /**
   * Typed methods for the youtube platform.
   */
  get youtube(): YoutubeNamespace {
    return (this._namespaces["youtube"] ??= new YoutubeNamespace(
      this._core,
    )) as YoutubeNamespace;
  }

  /**
   * Typed methods for the zhihu platform.
   */
  get zhihu(): ZhihuNamespace {
    return (this._namespaces["zhihu"] ??= new ZhihuNamespace(
      this._core,
    )) as ZhihuNamespace;
  }

  /**
   * Typed methods for the zillow platform.
   */
  get zillow(): ZillowNamespace {
    return (this._namespaces["zillow"] ??= new ZillowNamespace(
      this._core,
    )) as ZillowNamespace;
  }
}
