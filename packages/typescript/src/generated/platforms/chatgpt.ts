// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for ChatGPT Search (chatgpt.search).
 */
export interface ChatgptSearchInput {
  /**
   * ISO-3166 alpha-2 country to ask from, e.g. US, GB, DE. ChatGPT localizes both the pages it retrieves and the answer it writes, so this is the difference between what a US buyer and a UK buyer are told.
   * Default: US.
   */
  country?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Question or research prompt for ChatGPT to answer using web search.
   */
  prompt: string;
  /**
   * Serve only from a source that can return sponsored placements shown with the answer. One source currently qualifies, so the request cannot fall back when it is unavailable.
   * Default: false.
   */
  requireAds?: boolean;
  /**
   * Serve only from a source that can return brands and other named entities recognized in the answer. One source currently qualifies, so the request cannot fall back when it is unavailable.
   * Default: false.
   */
  requireEntities?: boolean;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `cited` or `price`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a result that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "address"
    | "ads"
    | "advertiserName"
    | "advertiserUrl"
    | "answerPosition"
    | "category"
    | "cited"
    | "createdUtc"
    | "currency"
    | "description"
    | "domain"
    | "entities"
    | "image"
    | "merchants"
    | "model"
    | "name"
    | "phone"
    | "places"
    | "position"
    | "price"
    | "prompt"
    | "rating"
    | "reviewCount"
    | "searchQueries"
    | "searchResults"
    | "shoppingCards"
    | "snippet"
    | "title"
    | "url"
    | "webSearchTriggered"
    | "websiteUrl"
  )[];
  /**
   * Serve only from a source that can return places shown with the answer. Leaving this off still returns places whenever the source that answered can. Turning it on selects the single source that guarantees them, which costs more and has nothing to fall back to if it is unavailable.
   * Default: false.
   */
  requirePlaces?: boolean;
  /**
   * Serve only from a source that can return shopping cards shown with the answer. Leaving this off still returns shopping cards whenever the source that answered can. Turning it on selects the single source that guarantees them, which costs more and has nothing to fall back to if it is unavailable.
   * Default: false.
   */
  requireShoppingCards?: boolean;
  /**
   * Whether to insist ChatGPT browses the web. force instructs it to search and is the default; auto lets ChatGPT decide, which is cheaper and answers from memory roughly half the time. Check webSearchTriggered for what actually happened - an answer written without a search is not web-grounded.
   * One of: force, auto.
   * Default: force.
   */
  webSearch?: "force" | "auto";
}

export interface ChatgptSearchAd {
  /**
   * Advertiser name.
   */
  advertiserName?: string | null;
  /**
   * Advertiser URL, tracking parameters stripped.
   * Format: uri.
   */
  advertiserUrl?: string | null;
  /**
   * Advertised domain.
   */
  domain?: string | null;
  /**
   * Sponsored image URL.
   * Format: uri.
   */
  image?: string | null;
  /**
   * Sponsored placement text.
   */
  snippet?: string | null;
  /**
   * Sponsored placement title.
   */
  title: string;
  /**
   * Sponsored destination URL, tracking parameters stripped.
   * Format: uri.
   */
  url?: string | null;
  [extra: string]: unknown;
}

export interface ChatgptSearchCitation {
  /**
   * One-based answer section where ChatGPT cited this source. null means the source that answered cannot report the position.
   */
  answerPosition?: number | null;
  /**
   * Source page title when supplied by the search engine.
   */
  title: string;
  /**
   * Source page URL.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

export interface ChatgptSearchEntitie {
  /**
   * Entity category.
   */
  category?: string | null;
  /**
   * Entity domain.
   */
  domain?: string | null;
  /**
   * Entity name.
   */
  title: string;
  /**
   * Entity URL, tracking parameters stripped.
   * Format: uri.
   */
  url?: string | null;
  [extra: string]: unknown;
}

export interface ChatgptSearchPlace {
  /**
   * Place address as displayed.
   */
  address?: string | null;
  /**
   * Place category shown by ChatGPT.
   */
  category?: string | null;
  /**
   * Place description shown by ChatGPT.
   */
  description?: string | null;
  /**
   * Place or business name.
   */
  name: string;
  /**
   * Place phone number as displayed.
   */
  phone?: string | null;
  /**
   * One-based position in the places block.
   */
  position?: number;
  /**
   * Place rating when the source reports one.
   */
  rating?: number | null;
  /**
   * Number of reviews behind the displayed rating.
   */
  reviewCount?: number | null;
  /**
   * Place website URL, tracking parameters stripped.
   * Format: uri.
   */
  websiteUrl?: string | null;
  [extra: string]: unknown;
}

export interface ChatgptSearchSearchResult {
  /**
   * Whether this retrieved page made it into citations. false means ChatGPT read the page and chose not to cite it, which is a different and more actionable fact than the page being absent.
   */
  cited?: boolean;
  /**
   * Title of the retrieved page, empty when the source did not send one.
   */
  title?: string;
  /**
   * Canonical URL of the retrieved page, tracking parameters stripped.
   * Format: uri.
   */
  url?: string;
  [extra: string]: unknown;
}

export interface ChatgptSearchShoppingCard {
  /**
   * ISO 4217 currency code when the source reports it.
   */
  currency?: string | null;
  /**
   * Product description shown on the shopping card.
   */
  description?: string | null;
  /**
   * Product image URL.
   * Format: uri.
   */
  image?: string | null;
  /**
   * Merchant name shown on the shopping card.
   */
  merchants?: string | null;
  /**
   * Displayed product price as a number when the source reports one.
   */
  price?: number | null;
  /**
   * Product rating when the source reports one.
   */
  rating?: number | null;
  /**
   * Product name shown by ChatGPT.
   */
  title: string;
  /**
   * Product page URL, tracking parameters stripped.
   * Format: uri.
   */
  url?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of ChatGPT Search (chatgpt.search).
 */
export interface ChatgptSearchData {
  /**
   * Sponsored placements ChatGPT displayed with the answer. null means the source that answered cannot report ads; an empty array means none were shown.
   */
  ads?: ChatgptSearchAd[] | null;
  /**
   * The web-grounded answer as text. Populated whenever the provider has data for the entity.
   */
  answer: string;
  /**
   * The answer in Markdown when the engine returns a Markdown rendering, otherwise the same text as answer. Populated whenever the provider has data for the entity.
   */
  answerMarkdown: string;
  /**
   * Sources cited by the answer. Populated whenever the provider has data for the entity.
   */
  citations: ChatgptSearchCitation[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. null means the source that answered does not report when it answered.
   */
  createdUtc?: number | null;
  /**
   * Brands and other named entities recognized in the answer. null means the source that answered cannot report them; an empty array means none were identified.
   */
  entities?: ChatgptSearchEntitie[] | null;
  /**
   * The ChatGPT model that produced the answer. null means the source that answered does not report it, which is not the same as an unknown model.
   */
  model?: string | null;
  /**
   * Places and local businesses ChatGPT displayed with the answer. null means the source that answered cannot report them; an empty array means none were shown.
   */
  places?: ChatgptSearchPlace[] | null;
  /**
   * The prompt answered by ChatGPT.
   */
  prompt: string;
  /**
   * The web search queries ChatGPT ran to ground its answer. null means the source that answered cannot report them; an empty array means it searched with none recorded.
   */
  searchQueries?: string[] | null;
  /**
   * Pages ChatGPT retrieved while answering. A SUPERSET of citations: a page can be read and not cited. null means the source that answered cannot report them.
   */
  searchResults?: ChatgptSearchSearchResult[] | null;
  /**
   * Products ChatGPT displayed with the answer. null means the source that answered cannot report shopping cards; an empty array means none were shown.
   */
  shoppingCards?: ChatgptSearchShoppingCard[] | null;
  /**
   * Whether ChatGPT actually ran a web search before answering. ChatGPT decides this per session, and an answer written without one is not web-grounded. null means the source that answered cannot report it, which is not the same as false.
   */
  webSearchTriggered?: boolean | null;
}

/**
 * Typed methods for the chatgpt platform. Attached to the AnyAPI client as
 * `client.chatgpt`.
 */
export class ChatgptNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * ChatGPT Search
   *
   * Ask ChatGPT a web-grounded question and receive an answer with source citations. ChatGPT composes each answer per request, so the same prompt returns different wording and a different source set.
   *
   * Price: $0.0018 per request.
   *
   * @example
   * const res = await client.chatgpt.search({ prompt: "What is AnyAPI at getanyapi.com, and what does it offer?" });
   */
  search(
    input: ChatgptSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<ChatgptSearchData>> {
    return this._core.run("chatgpt.search", input, options);
  }
}
