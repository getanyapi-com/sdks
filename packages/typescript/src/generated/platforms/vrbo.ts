// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Vrbo Listing (vrbo.listing).
 */
export interface VrboListingInput {
  /**
   * Number of adult guests to price for (1-20, default 2).
   * Range: minimum 1, maximum 20.
   * Default: 2.
   */
  adults?: number;
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Check-in date to price and check availability for, in YYYY-MM-DD format (e.g. 2027-01-15). Today or later. Without dates, a 3-night stay about a month ahead is priced; the dates used are in stay.
   * Format: date.
   */
  checkIn?: string;
  /**
   * Check-out date in YYYY-MM-DD format (e.g. 2027-01-18). After the check-in date. With a check-in date alone, the stay is 3 nights.
   * Format: date.
   */
  checkOut?: string;
  /**
   * Age of each child guest, one entry per child (e.g. [5, 8] for two children aged 5 and 8). Omit it when no children are staying.
   */
  childrenAges?: number[];
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
   * Vrbo property ID: the id vrbo.search returns for a listing (e.g. 69764328).
   */
  propertyId: string;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface VrboListingAmenitie {
  /**
   * Group name.
   */
  group: string;
  /**
   * Amenities in this group.
   */
  items?: string[];
  [extra: string]: unknown;
}

export interface VrboListingHouseRule {
  /**
   * Blocks of the section, each with an optional heading.
   */
  blocks?: VrboListingBlock[];
  /**
   * Section title.
   */
  title?: string | null;
  [extra: string]: unknown;
}

export interface VrboListingBlock {
  /**
   * Block heading (e.g. Pets), or null.
   */
  heading?: string | null;
  /**
   * Lines of the block.
   */
  lines?: string[];
  [extra: string]: unknown;
}

export interface VrboListingImage {
  /**
   * Photo caption (e.g. Exterior, Kitchen).
   */
  caption?: string | null;
  /**
   * Photo URL.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

export interface VrboListingImportantInfo {
  /**
   * Blocks of the section, each with an optional heading.
   */
  blocks?: VrboListingBlock[];
  /**
   * Section title.
   */
  title?: string | null;
  [extra: string]: unknown;
}

export interface VrboListingRatingCategorie {
  /**
   * Category name.
   */
  label: string;
  /**
   * Average score in this category.
   */
  score?: number | null;
  [extra: string]: unknown;
}

export interface VrboListingReview {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number | null;
  /**
   * What the guest liked or disliked, as Vrbo summarizes it.
   */
  highlights?: string[];
  /**
   * Review ID.
   */
  id: string;
  /**
   * Whether Vrbo marks the review as from a verified stay.
   */
  isVerified?: boolean | null;
  /**
   * Language of the review as a locale code (e.g. en_US).
   */
  language?: string | null;
  /**
   * Guest's score on ratingScale.
   */
  rating?: number | null;
  /**
   * Vrbo's word for the score (e.g. Excellent).
   */
  ratingLabel?: string | null;
  /**
   * Top of the score scale, 10 on Vrbo.
   */
  ratingScale?: number | null;
  /**
   * Stay the review is about, as Vrbo states it (e.g. Stayed 4 nights in Oct 2026).
   */
  stay?: string | null;
  /**
   * Review text.
   */
  text?: string | null;
  /**
   * Review title, when the guest wrote one.
   */
  title?: string | null;
  [extra: string]: unknown;
}

export interface VrboListingUnit {
  /**
   * Unit features (e.g. Sleeps 6).
   */
  features?: string[];
  /**
   * Unit ID.
   */
  id: string;
  /**
   * Unit name.
   */
  name?: string | null;
  /**
   * Prices offered for the unit for the stay, fees included.
   */
  ratePlans?: VrboListingRatePlan[];
  [extra: string]: unknown;
}

export interface VrboListingRatePlan {
  /**
   * ISO 4217 currency code of the prices.
   */
  currency?: string | null;
  /**
   * Average price per night, fees included, in currency.
   */
  pricePerNight?: number | null;
  /**
   * Total price for the stay, fees included, in currency.
   */
  totalPrice?: number | null;
  /**
   * Total price as Vrbo displays it (e.g. $2,630).
   */
  totalPriceText?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Vrbo Listing (vrbo.listing).
 */
export interface VrboListingData {
  /**
   * Where the property is. Vrbo shows the area, not the street.
   */
  address?: {
    /**
     * City.
     */
    city?: string | null;
    /**
     * Three-letter ISO 3166 country code (e.g. USA, PRT).
     */
    countryCodeIso3?: string | null;
    /**
     * Address line as Vrbo shows it (e.g. South Lake Tahoe, CA).
     */
    line?: string | null;
    /**
     * Wider area Vrbo files the property under.
     */
    parentRegion?: string | null;
    /**
     * State, province or region.
     */
    region?: string | null;
  };
  /**
   * Amenities grouped as Vrbo groups them (Essentials, Kitchen, Outdoor...). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  amenities?: VrboListingAmenitie[];
  /**
   * Vrbo's reason when it cannot be booked for the stay (e.g. the dates are taken, or too many guests); null when it can.
   */
  availabilityMessage?: string | null;
  /**
   * Whether the property can be booked for the stay.
   */
  available?: boolean | null;
  /**
   * Number of bathrooms, or null when the listing does not say (a 3+ shows as 3).
   */
  bathrooms?: number | null;
  /**
   * Number of bedrooms, or null when the listing does not say.
   */
  bedrooms?: number | null;
  /**
   * Number of beds, or null when the listing does not say.
   */
  beds?: number | null;
  /**
   * Full listing description written by the host. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string | null;
  /**
   * Vrbo's note on what prices include.
   */
  feesNote?: string | null;
  /**
   * House rules: check-in and check-out times, minimum age, children, events, pets, smoking and the host's own rules.
   */
  houseRules?: VrboListingHouseRule[];
  /**
   * Vrbo property ID, the id vrbo.search returns.
   */
  id: string;
  /**
   * Every listing photo, in Vrbo's order. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  images?: VrboListingImage[];
  /**
   * Important information the host and Vrbo publish: fees, deposits, safety features, registration numbers.
   */
  importantInfo?: VrboListingImportantInfo[];
  /**
   * Latitude of the property. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  latitude?: number | null;
  /**
   * Vrbo's public listing number, the one in the listing link (e.g. 2394927 or 249998ha).
   */
  listingId?: string | null;
  /**
   * Longitude of the property. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  longitude?: number | null;
  /**
   * Listing title.
   */
  name: string;
  /**
   * Property type (e.g. House, Condo), when Vrbo states it.
   */
  propertyType?: string | null;
  /**
   * Average guest rating on ratingScale (Vrbo rates out of 10), or null when the property has no reviews.
   */
  rating?: number | null;
  /**
   * Average score per rating category (Cleanliness, Check-in, Communication, Location, Listing accuracy), on ratingScale.
   */
  ratingCategories?: VrboListingRatingCategorie[];
  /**
   * Vrbo's word for the rating (e.g. Exceptional, Wonderful).
   */
  ratingLabel?: string | null;
  /**
   * Top of the rating scale, 10 on Vrbo.
   */
  ratingScale?: number | null;
  /**
   * Up to 10 of the latest guest reviews; reviewsCount has the total.
   */
  reviews?: VrboListingReview[];
  /**
   * Total number of guest reviews.
   */
  reviewsCount?: number | null;
  /**
   * Most guests the property sleeps. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sleeps?: number | null;
  /**
   * Vrbo's summary chips for the space, as shown (e.g. 4 bedrooms, 3+ bathrooms, Sleeps 10); keeps a 3+ that bathrooms reads as 3. Some listings separate the chips with a lone • entry.
   */
  spaceOverview?: string[];
  /**
   * The stay that availability and prices were checked for. When no dates were sent, Vrbo picks them.
   */
  stay?: {
    /**
     * Number of adult guests.
     */
    adults?: number | null;
    /**
     * Check-in date, YYYY-MM-DD.
     */
    checkIn?: string | null;
    /**
     * Check-out date, YYYY-MM-DD.
     */
    checkOut?: string | null;
    /**
     * Age of each child guest; empty when none.
     */
    childrenAges?: number[];
  };
  /**
   * Short tagline under the title, when Vrbo shows one.
   */
  tagline?: string | null;
  /**
   * Bookable units with their price for the stay; empty when the property cannot be booked for it.
   */
  units?: VrboListingUnit[];
  /**
   * Link to the listing on Vrbo.
   * Format: uri.
   */
  url: string;
}

/**
 * Input for Vrbo Search (vrbo.search).
 */
export interface VrboSearchInput {
  /**
   * Number of adult guests (e.g. 2).
   * Range: minimum 1, maximum 20.
   */
  adults?: number;
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Check-in date in YYYY-MM-DD format (e.g. 2027-01-15). Today or later.
   * Format: date.
   */
  checkIn: string;
  /**
   * Check-out date in YYYY-MM-DD format (e.g. 2027-01-18). After the check-in date.
   * Format: date.
   */
  checkOut: string;
  /**
   * Age of each child guest, one entry per child (e.g. [5, 8] for two children aged 5 and 8). Omit it when no children are staying.
   */
  childrenAges?: number[];
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of listings to return (1-50, default 50). The price is the same whatever the limit.
   * Range: minimum 1, maximum 50.
   * Default: 50.
   */
  limit?: number;
  /**
   * Destination to search rentals in: a city, region or area (e.g. Lake Tahoe, Lisbon, Outer Banks, North Carolina).
   */
  location: string;
  /**
   * Minimum number of bathrooms (e.g. 2).
   * Range: minimum 1, maximum 50.
   */
  minBathrooms?: number;
  /**
   * Minimum number of bedrooms (e.g. 3).
   * Range: minimum 0, maximum 50.
   */
  minBedrooms?: number;
  /**
   * Minimum number of beds (e.g. 4).
   * Range: minimum 1, maximum 20.
   */
  minBeds?: number;
  /**
   * Number of listings to skip, for paging: send offset 20 with limit 20 for the second page.
   * Range: minimum 0, maximum 1000.
   * Default: 0.
   */
  offset?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Maximum price in the currency results are priced in (each listing's currency), per night or for the whole stay as priceType says (e.g. 400). With a price filter, only listings Vrbo prices for your dates are returned.
   * Range: minimum 1, maximum 1000000.
   */
  priceMax?: number;
  /**
   * Minimum price in the currency results are priced in (each listing's currency), per night or for the whole stay as priceType says (e.g. 100).
   * Range: minimum 0, maximum 1000000.
   */
  priceMin?: number;
  /**
   * Whether priceMin and priceMax are a nightly price (default) or the total for the stay.
   * One of: nightly, total.
   * Default: nightly.
   */
  priceType?: "nightly" | "total";
  /**
   * Result order: recommended (Vrbo's default), price_low_to_high, price_high_to_low, review (highest rated first) or review_count (most reviewed first).
   * One of: recommended, price_low_to_high, price_high_to_low, review, review_count.
   */
  sort?:
    | "recommended"
    | "price_low_to_high"
    | "price_high_to_low"
    | "review"
    | "review_count";
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface VrboSearchItem {
  /**
   * Number of bedrooms. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  bedrooms?: number | null;
  /**
   * Number of beds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  beds?: number | null;
  /**
   * ISO 4217 currency code of the prices (e.g. USD). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * Vrbo's note on what the price includes (e.g. All fees included).
   */
  feesNote?: string | null;
  /**
   * Vrbo property ID.
   */
  id: string;
  /**
   * Listing photo URLs. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  images?: string[] | null;
  /**
   * Listing name. Vrbo often shows a generic name such as "Condo in Kings Beach".
   */
  name: string;
  /**
   * Number of nights the total price covers.
   */
  nights?: number | null;
  /**
   * Nightly price before Vrbo's discount, or null when the listing is not discounted.
   */
  originalPricePerNight?: number | null;
  /**
   * Vrbo's one-line summary of the listing (e.g. "3 bedrooms · 6 beds · Free cancellation until Dec 16"). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  overview?: string | null;
  /**
   * Nightly price for the requested dates and guests, in currency. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  pricePerNight?: number | null;
  /**
   * Property type (e.g. Condo, House), or null when Vrbo does not state it in search results.
   */
  propertyType?: string | null;
  /**
   * Average guest rating out of 10, or null when the listing has no rating. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number | null;
  /**
   * Vrbo's word for the rating (e.g. Exceptional, Wonderful).
   */
  ratingLabel?: string | null;
  /**
   * Number of guest reviews, or null when Vrbo does not show a count.
   */
  reviewsCount?: number | null;
  /**
   * Total price for the whole stay, in currency. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  totalPrice?: number | null;
  /**
   * Vrbo listing URL.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Vrbo Search (vrbo.search).
 */
export interface VrboSearchData {
  /**
   * Vrbo listings priced for the requested dates and guests, in Vrbo's order. A listing Vrbo shows without a price for the dates is left out. Populated whenever the provider has data for the entity.
   */
  items: VrboSearchItem[];
}

/**
 * Typed methods for the vrbo platform. Attached to the AnyAPI client as
 * `client.vrbo`.
 */
export class VrboNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Vrbo Listing
   *
   * Get one Vrbo vacation rental by its property ID: name, link, address, coordinates, bedrooms, bathrooms, beds and guest capacity, guest rating with category scores and review count, amenities by group, full description, house rules, important information, availability and price for your dates (total and average per night, fees included), every photo with its caption and the latest guest reviews, as normalized JSON. Takes the id vrbo.search returns.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.vrbo.listing({ propertyId: "69764328", adults: 2, checkIn: "2026-12-16", checkOut: "2026-12-19" });
   */
  listing(
    input: VrboListingInput,
    options?: RequestOptions,
  ): Promise<RunResult<VrboListingData>> {
    return this._core.run("vrbo.listing", input, options);
  }

  /**
   * Vrbo Search
   *
   * Search Vrbo vacation rentals by destination and dates, with guest, bedroom, bed, bathroom and price filters, and get up to 50 listings per call: Vrbo property ID and link, name, summary line, property type, bedrooms, beds, guest rating and review count, nightly and total stay price with the original nightly price before any discount, and photos as normalized JSON. Page with offset; the price is the same whatever the limit.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.vrbo.search({ checkIn: "2026-12-16", checkOut: "2026-12-19", location: "Lake Tahoe", adults: 2 });
   */
  search(
    input: VrboSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<VrboSearchData>> {
    return this._core.run("vrbo.search", input, options);
  }
}
