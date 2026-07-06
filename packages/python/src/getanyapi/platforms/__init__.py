# Generated - do not edit. Regenerate with: pnpm generate
"""Lazy namespace registry.

Maps a client attribute name to (module name, sync class, async class). The
sync/async clients read this via __getattr__ to attach namespaces on first use,
so `import getanyapi` stays fast (SPEC 3.1).
"""

from __future__ import annotations

REGISTRY: dict[str, tuple[str, str, str]] = {
    "ahrefs": ("ahrefs", "AhrefsNamespace", "AsyncAhrefsNamespace"),
    "airbnb": ("airbnb", "AirbnbNamespace", "AsyncAirbnbNamespace"),
    "alibaba": ("alibaba", "AlibabaNamespace", "AsyncAlibabaNamespace"),
    "amazon": ("amazon", "AmazonNamespace", "AsyncAmazonNamespace"),
    "appstore": ("appstore", "AppstoreNamespace", "AsyncAppstoreNamespace"),
    "bluesky": ("bluesky", "BlueskyNamespace", "AsyncBlueskyNamespace"),
    "booking": ("booking", "BookingNamespace", "AsyncBookingNamespace"),
    "coinmarketcap": (
        "coinmarketcap",
        "CoinmarketcapNamespace",
        "AsyncCoinmarketcapNamespace",
    ),
    "congress": ("congress", "CongressNamespace", "AsyncCongressNamespace"),
    "dexscreener": ("dexscreener", "DexscreenerNamespace", "AsyncDexscreenerNamespace"),
    "ebay": ("ebay", "EbayNamespace", "AsyncEbayNamespace"),
    "email": ("email", "EmailNamespace", "AsyncEmailNamespace"),
    "facebook": ("facebook", "FacebookNamespace", "AsyncFacebookNamespace"),
    "fiverr": ("fiverr", "FiverrNamespace", "AsyncFiverrNamespace"),
    "github": ("github", "GithubNamespace", "AsyncGithubNamespace"),
    "glassdoor": ("glassdoor", "GlassdoorNamespace", "AsyncGlassdoorNamespace"),
    "google": ("google", "GoogleNamespace", "AsyncGoogleNamespace"),
    "google_ads": ("google_ads", "GoogleAdsNamespace", "AsyncGoogleAdsNamespace"),
    "google_finance": (
        "google_finance",
        "GoogleFinanceNamespace",
        "AsyncGoogleFinanceNamespace",
    ),
    "google_shopping": (
        "google_shopping",
        "GoogleShoppingNamespace",
        "AsyncGoogleShoppingNamespace",
    ),
    "hackernews": ("hackernews", "HackernewsNamespace", "AsyncHackernewsNamespace"),
    "indeed": ("indeed", "IndeedNamespace", "AsyncIndeedNamespace"),
    "instagram": ("instagram", "InstagramNamespace", "AsyncInstagramNamespace"),
    "linkedin": ("linkedin", "LinkedinNamespace", "AsyncLinkedinNamespace"),
    "maps": ("maps", "MapsNamespace", "AsyncMapsNamespace"),
    "pandaexpress": (
        "pandaexpress",
        "PandaexpressNamespace",
        "AsyncPandaexpressNamespace",
    ),
    "person": ("person", "PersonNamespace", "AsyncPersonNamespace"),
    "pinterest": ("pinterest", "PinterestNamespace", "AsyncPinterestNamespace"),
    "playstore": ("playstore", "PlaystoreNamespace", "AsyncPlaystoreNamespace"),
    "polymarket": ("polymarket", "PolymarketNamespace", "AsyncPolymarketNamespace"),
    "realtor": ("realtor", "RealtorNamespace", "AsyncRealtorNamespace"),
    "reddit": ("reddit", "RedditNamespace", "AsyncRedditNamespace"),
    "redfin": ("redfin", "RedfinNamespace", "AsyncRedfinNamespace"),
    "rednote": ("rednote", "RednoteNamespace", "AsyncRednoteNamespace"),
    "sec": ("sec", "SecNamespace", "AsyncSecNamespace"),
    "semrush": ("semrush", "SemrushNamespace", "AsyncSemrushNamespace"),
    "snapchat": ("snapchat", "SnapchatNamespace", "AsyncSnapchatNamespace"),
    "social": ("social", "SocialNamespace", "AsyncSocialNamespace"),
    "spotify": ("spotify", "SpotifyNamespace", "AsyncSpotifyNamespace"),
    "substack": ("substack", "SubstackNamespace", "AsyncSubstackNamespace"),
    "threads": ("threads", "ThreadsNamespace", "AsyncThreadsNamespace"),
    "tiktok": ("tiktok", "TiktokNamespace", "AsyncTiktokNamespace"),
    "tiktok_shop": ("tiktok_shop", "TiktokShopNamespace", "AsyncTiktokShopNamespace"),
    "tripadvisor": ("tripadvisor", "TripadvisorNamespace", "AsyncTripadvisorNamespace"),
    "trustpilot": ("trustpilot", "TrustpilotNamespace", "AsyncTrustpilotNamespace"),
    "truthsocial": ("truthsocial", "TruthsocialNamespace", "AsyncTruthsocialNamespace"),
    "twitter": ("twitter", "TwitterNamespace", "AsyncTwitterNamespace"),
    "upwork": ("upwork", "UpworkNamespace", "AsyncUpworkNamespace"),
    "walmart": ("walmart", "WalmartNamespace", "AsyncWalmartNamespace"),
    "web": ("web", "WebNamespace", "AsyncWebNamespace"),
    "whatsapp": ("whatsapp", "WhatsappNamespace", "AsyncWhatsappNamespace"),
    "yahoo_finance": (
        "yahoo_finance",
        "YahooFinanceNamespace",
        "AsyncYahooFinanceNamespace",
    ),
    "yelp": ("yelp", "YelpNamespace", "AsyncYelpNamespace"),
    "youtube": ("youtube", "YoutubeNamespace", "AsyncYoutubeNamespace"),
    "zillow": ("zillow", "ZillowNamespace", "AsyncZillowNamespace"),
}

__all__ = ["REGISTRY"]
