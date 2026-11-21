// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Graded Card Cert Lookup (cards.graded_cert).
 */
export interface CardsGradedCertInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Certificate number printed on the slab label, digits only, e.g. 171634124. Keep any leading zeros: BGS numbers start with 00 (0011562845).
   */
  certNumber: string;
  /**
   * The company that graded the slab. Required because the same number can exist at two graders (4272318 is both a PSA and an SGC cert).
   * One of: PSA, BGS, SGC, CGC.
   */
  gradingCompany: "PSA" | "BGS" | "SGC" | "CGC";
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface CardsGradedCertSale {
  /**
   * Grade as listed, e.g. "PSA 6".
   */
  grade?: string | null;
  /**
   * Listing photo URL.
   */
  image?: string | null;
  /**
   * Where it sold, as a lowercase marketplace id, e.g. ebay, fanatics (Fanatics Collect, including former PWCC venues), goldin or heritage.
   */
  marketplace?: string | null;
  /**
   * How the sale was tied to this slab: cert_field (the sale record carries the certificate number) or title (the seller wrote the number in the listing title).
   */
  matchedBy?: string | null;
  /**
   * Sale price in USD.
   */
  price?: number | null;
  /**
   * Identifier of the sale record.
   */
  saleId: string;
  /**
   * How it sold: AUCTION, BUY_IT_NOW or BEST_OFFER.
   */
  saleType?: string | null;
  /**
   * Shipping charged in USD, when known.
   */
  shippingPrice?: number | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  soldUtc?: number | null;
  /**
   * Listing title.
   */
  title?: string | null;
  /**
   * Link to the sold listing.
   */
  url?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Graded Card Cert Lookup (cards.graded_cert).
 */
export interface CardsGradedCertData {
  /**
   * Full card name, e.g. "1999 Pokemon Game Holo Charizard #4". Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cardName?: string | null;
  /**
   * Card number within the set.
   */
  cardNumber?: string | null;
  /**
   * Card category, e.g. pokemon, basketball or football.
   */
  category?: string | null;
  /**
   * Certificate number of the slab. Populated whenever the provider has data for the entity.
   */
  certNumber: string;
  /**
   * The grading company's own certificate verification page, when it has one (PSA).
   */
  certUrl?: string | null;
  /**
   * Numeric grade, e.g. 9.5. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  grade?: number | null;
  /**
   * Grade as printed with its grader, e.g. "PSA 9" or "BGS 9.5".
   */
  gradeLabel?: string | null;
  /**
   * Grading company of the slab: PSA, BGS, SGC or CGC. Populated whenever the provider has data for the entity.
   */
  gradingCompany: string;
  /**
   * Card image URL, when one is known.
   */
  image?: string | null;
  /**
   * The most recent sale of any copy of this card at this grade. Every member is null when none is recorded.
   */
  lastSaleInGrade?: {
    /**
     * Where it sold, as a lowercase marketplace id, e.g. ebay, fanatics (Fanatics Collect, including former PWCC venues), goldin or heritage.
     */
    marketplace?: string | null;
    /**
     * Sale price in USD.
     */
    price?: number | null;
    /**
     * How it sold: AUCTION, BUY_IT_NOW or BEST_OFFER.
     */
    saleType?: string | null;
    /**
     * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
     */
    soldUtc?: number | null;
    /**
     * Link to the sold listing.
     */
    url?: string | null;
  };
  /**
   * Approximate number of copies of this card graded at this grade by this grader. It tracks the grader's own population report closely (within about 2% for PSA) but is not the official count.
   */
  populationInGrade?: number | null;
  /**
   * Grade qualifier such as OC (off center) or MK (marks), or null when the grade has none.
   */
  qualifier?: string | null;
  /**
   * Sales of this exact slab that carry its certificate number, newest first. Sales recorded with the number itself are kept whatever their age; eBay and Fanatics Collect sales are found only from about the last 90 days and only when the seller wrote the number in the title. Empty when no such sale is found, which does not mean the slab never sold.
   */
  sales?: CardsGradedCertSale[];
  /**
   * Number of recorded sales of any copy of this card at this grade.
   */
  salesInGrade?: number | null;
  /**
   * Set name, e.g. "Pokemon Game" or "Fleer".
   */
  set?: string | null;
  /**
   * BGS subgrades. Every member is null for graders that do not issue subgrades.
   */
  subgrades?: {
    /**
     * Centering subgrade.
     */
    centering?: number | null;
    /**
     * Corners subgrade.
     */
    corners?: number | null;
    /**
     * Edges subgrade.
     */
    edges?: number | null;
    /**
     * Surface subgrade.
     */
    surfaces?: number | null;
  };
  /**
   * Player or character on the card.
   */
  subject?: string | null;
  /**
   * Estimated market value in USD of this card at this grade, modeled from recent sales.
   */
  value?: number | null;
  /**
   * Confidence in the estimated value, 0 to 100. Higher means more recent comparable sales.
   */
  valueConfidence?: number | null;
  /**
   * High end of the estimated value range in USD.
   */
  valueHigh?: number | null;
  /**
   * Low end of the estimated value range in USD.
   */
  valueLow?: number | null;
  /**
   * Variety or parallel, e.g. "1st Edition Holo" or "Refractor", or null for the base card.
   */
  variety?: string | null;
  /**
   * Year of the card's set.
   */
  year?: number | null;
  [extra: string]: unknown;
}

/**
 * Input for Graded Card Population (cards.population).
 */
export interface CardsPopulationInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Card ID from Graded Card Population Search (cards.population_search), 40 hex characters, e.g. ffb8699bb7f435eff4e9761f8e29358e351d777e. Each variant (base, 1st edition, shadowless, refractor...) has its own ID.
   */
  cardId: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface CardsPopulationByGrader {
  /**
   * Share of this grader's copies that are gem mint or better, in percent.
   */
  gemRatePercent?: number | null;
  /**
   * Copies this grader graded gem mint or better.
   */
  gems?: number | null;
  /**
   * Grader code: psa, bgs, sgc or cgc.
   */
  grader: string;
  /**
   * The card as this grader lists it, which can differ from the combined description.
   */
  graderCardName?: string | null;
  /**
   * Grader display name, e.g. "Beckett (BGS)".
   */
  graderName?: string | null;
  /**
   * Count at each of this grader's grades, highest first, including half grades and labels such as "10 Pristine", "10 Black Label" and "Auth". Qualified copies are not in these counts.
   */
  grades?: CardsPopulationGrade[];
  /**
   * The grader's own population report page for this card or set.
   */
  popReportUrl?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  populationChangedUtc?: number | null;
  /**
   * Copies with a qualified grade (OC, MK and the like) at each numeric grade. To count copies graded higher than a grade the way the grader's own report does, add the qualified copies above it to the plain counts above it. Empty for graders that do not issue qualifiers.
   */
  qualifiedGrades?: CardsPopulationQualifiedGrade[];
  /**
   * Total qualified copies, or null when the grader issues none.
   */
  qualifiedTotal?: number | null;
  /**
   * Copies this grader has graded, qualified grades included.
   */
  totalGraded?: number | null;
  [extra: string]: unknown;
}

export interface CardsPopulationGrade {
  /**
   * Copies at this grade.
   */
  count?: number | null;
  /**
   * Grade as the grader names it, e.g. "10", "9.5" or "10 Pristine".
   */
  grade: string;
  /**
   * True when this grade counts as gem mint or better.
   */
  isGem?: boolean | null;
  [extra: string]: unknown;
}

export interface CardsPopulationQualifiedGrade {
  /**
   * Qualified copies at this grade.
   */
  count?: number | null;
  /**
   * Numeric grade the qualifier applies to.
   */
  grade: string;
  [extra: string]: unknown;
}

export interface CardsPopulationUniversalGrade {
  /**
   * Copies at this grade across all included graders.
   */
  count?: number | null;
  /**
   * Grade on the common scale, e.g. "Gem Mint" or "8.5".
   */
  grade: string;
  /**
   * Share of all graded copies graded above this grade, in percent.
   */
  percentGradedHigher?: number | null;
  /**
   * Share of all graded copies at this grade, in percent.
   */
  percentOfTotal?: number | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Graded Card Population (cards.population).
 */
export interface CardsPopulationData {
  /**
   * Population per grading company. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  byGrader?: CardsPopulationByGrader[];
  /**
   * Card ID. Populated whenever the provider has data for the entity.
   */
  cardId: string;
  /**
   * Card number within the set.
   */
  cardNumber?: string | null;
  /**
   * Card category, e.g. tcg-cards or baseball-cards.
   */
  category?: string | null;
  /**
   * Full card description, e.g. "1999 Pokemon Game Charizard-Holo Base 4". Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string | null;
  /**
   * Share of graded copies that are gem mint or better, in percent.
   */
  gemRatePercent?: number | null;
  /**
   * Copies graded gem mint or better across all included graders.
   */
  gems?: number | null;
  /**
   * Graders whose counts are included, e.g. ["psa", "bgs", "sgc", "cgc"].
   */
  graders?: string[];
  /**
   * Front image URL.
   */
  image?: string | null;
  /**
   * Back image URL.
   */
  imageBack?: string | null;
  /**
   * Card name: player or character.
   */
  name?: string | null;
  /**
   * Variant or parallel name, e.g. "1st Edition" or "Refractor".
   */
  parallel?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  populationChangedUtc?: number | null;
  /**
   * PSA copies with a qualified grade (OC, MK, ST and the like) at each numeric grade, counted apart from the plain grades.
   */
  qualifiedGrades?: CardsPopulationQualifiedGrade[];
  /**
   * Set name.
   */
  set?: string | null;
  /**
   * Total copies graded across all included graders. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  totalPopulation?: number | null;
  /**
   * Count at every grade on a common scale that lines up the graders (Perfect, Pristine, Gem Mint, Mint+, 9 down to 1, Authentic), highest first.
   */
  universalGrades?: CardsPopulationUniversalGrade[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number | null;
  /**
   * Year of the card's set.
   */
  year?: number | null;
  [extra: string]: unknown;
}

/**
 * Input for Graded Card Population Search (cards.population_search).
 */
export interface CardsPopulationSearchInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * 1-based results page of 10 cards, up to 5 pages. Each page is billed as one request.
   * Range: minimum 1, maximum 5.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Free text describing the card: year, set, player or character, card number and parallel, e.g. "2018 Topps Chrome Update Shohei Ohtani Refractor".
   */
  query: string;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface CardsPopulationSearchItem {
  /**
   * Card ID. Pass it as cardId to Graded Card Population (cards.population) for the count at every grade. Populated whenever the provider has data for the entity.
   */
  cardId: string;
  /**
   * Card number within the set.
   */
  cardNumber?: string | null;
  /**
   * Card category, e.g. tcg-cards or baseball-cards.
   */
  category?: string | null;
  /**
   * Full card description, e.g. "1999 Pokemon Game Charizard-Holo Base 4". Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string | null;
  /**
   * Share of graded copies that are gem mint or better, in percent.
   */
  gemRatePercent?: number | null;
  /**
   * Copies graded gem mint or better.
   */
  gems?: number | null;
  /**
   * Graders whose counts are included, e.g. ["psa", "bgs", "sgc", "cgc"].
   */
  graders?: string[];
  /**
   * Card image URL.
   */
  image?: string | null;
  /**
   * Card name: player or character.
   */
  name?: string | null;
  /**
   * Variant or parallel name, e.g. "1st Edition", "Shadowless" or "Refractor".
   */
  parallel?: string | null;
  /**
   * Set name.
   */
  set?: string | null;
  /**
   * Total copies graded across the graders listed in graders.
   */
  totalPopulation?: number | null;
  /**
   * Year of the card's set.
   */
  year?: number | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Graded Card Population Search (cards.population_search).
 */
export interface CardsPopulationSearchData {
  /**
   * True when another page of matches exists.
   */
  hasMore?: boolean | null;
  /**
   * Matching card variants, best match first. Each variant (base, 1st edition, shadowless, refractor...) is its own row. Populated whenever the provider has data for the entity.
   */
  items: CardsPopulationSearchItem[];
}

/**
 * Typed methods for the cards platform. Attached to the AnyAPI client as
 * `client.cards`.
 */
export class CardsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Graded Card Cert Lookup
   *
   * Look up one graded trading card slab by its PSA, BGS, SGC or CGC certificate number and get the card (year, set, number, player or character, variety), its grade with BGS subgrades, the approximate population in that grade, the estimated market value with its low and high range, the last sale of any copy in that grade, and the sales of this exact slab that carry its certificate number (eBay and Fanatics Collect sales only from about the last 90 days, when the seller put the number in the title), in one normalized response. Sports cards, Pokemon and other trading card games.
   *
   * Price: $0.00338 per request.
   *
   * @example
   * const res = await client.cards.gradedCert({ certNumber: "0011562845", gradingCompany: "BGS" });
   */
  gradedCert(
    input: CardsGradedCertInput,
    options?: RequestOptions,
  ): Promise<RunResult<CardsGradedCertData>> {
    return this._core.run("cards.graded_cert", input, options);
  }

  /**
   * Graded Card Population
   *
   * Get one graded trading card's population report across PSA, BGS, SGC and CGC by card ID (from Graded Card Population Search): total graded, gem count and gem rate, the count at every grade on a common scale with the share graded higher, and per grader the count at every grade including half grades and qualified grades (OC, MK and the like), with the date the population last changed. Sports cards, Pokemon and other trading card games.
   *
   * Price: $0.00338 per request.
   *
   * @example
   * const res = await client.cards.population({ cardId: "ffb8699bb7f435eff4e9761f8e29358e351d777e" });
   */
  population(
    input: CardsPopulationInput,
    options?: RequestOptions,
  ): Promise<RunResult<CardsPopulationData>> {
    return this._core.run("cards.population", input, options);
  }

  /**
   * Graded Card Population Search
   *
   * Search graded trading cards across PSA, BGS, SGC and CGC by free text (year, set, player or character, card number, parallel) and get each matching card variant with its card ID, year, set, number, parallel, total graded population, gem count and gem rate. Pass the card ID to Graded Card Population for the count at every grade.
   *
   * Price: $0.00225 per request.
   *
   * @example
   * const res = await client.cards.populationSearch({ query: "1999 Pokemon Base Charizard" });
   */
  populationSearch(
    input: CardsPopulationSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<CardsPopulationSearchData>> {
    return this._core.run("cards.population_search", input, options);
  }
}
