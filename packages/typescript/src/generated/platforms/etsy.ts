// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Etsy Product (etsy.product).
 */
export interface EtsyProductInput {
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
   * Etsy listing id, the number in the listing URL (https://www.etsy.com/listing/<id>/...), e.g. 1810545592. The Etsy Search and Etsy Shop Listings SKUs return it as listingId.
   */
  listingId: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `materials`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    "favoriteCount" | "materials" | "quantityAvailable" | "shipFrom" | "video"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface EtsyProductItem {
  /**
   * Etsy category trail from top level down, joined with " > ", e.g. "Jewelry > Necklaces > Monogram & Name Necklaces", or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  category?: string | null;
  /**
   * Price currency code, e.g. "USD", or null when no price is shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * The seller's listing description, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string | null;
  /**
   * Number of shoppers who favorited the listing, or null when the serving source does not report it.
   */
  favoriteCount?: number | null;
  /**
   * Listing image URLs, primary first. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  images?: string[];
  /**
   * Etsy listing id. Populated whenever the provider has data for the entity.
   */
  listingId: string;
  /**
   * Materials the seller lists, e.g. ["14k/Yellow Gold/Pearl"], or null when the serving source does not report them.
   */
  materials?: string[] | null;
  /**
   * Current price in the listing currency (the lowest variation price when the listing shows a range), or null when not shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * Units in stock, or null when the serving source does not report it.
   */
  quantityAvailable?: number | null;
  /**
   * Average rating, 0-5, or null when the listing is unrated. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number | null;
  /**
   * Number of reviews, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  reviewsCount?: number | null;
  /**
   * Country the listing ships from as a 2-letter ISO code, e.g. "US", or null when not reported.
   */
  shipFrom?: string | null;
  /**
   * Etsy id of the shop selling the listing, or null when not reported.
   */
  shopId: string | null;
  /**
   * Name of the shop selling the listing; pass it to the Etsy Shop SKU. Null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  shopName?: string | null;
  /**
   * Listing title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Etsy listing page URL with tracking query parameters removed.
   */
  url: string;
  /**
   * The choices a buyer picks from, e.g. Finish and Length, each with its values. Empty when the listing has none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  variations?: EtsyProductVariation[];
  /**
   * Listing video URL (MP4), or null when the listing has none or the serving source does not report it.
   */
  video?: string | null;
  [extra: string]: unknown;
}

export interface EtsyProductVariation {
  /**
   * Variation name as the seller lists it, e.g. "Length", or null when the serving source does not report it.
   */
  name?: string | null;
  /**
   * Values a buyer can pick, as Etsy labels them, e.g. ["14 inches ($29.25)", "16 inches ($29.25)"].
   */
  values?: string[];
  [extra: string]: unknown;
}

/**
 * The `data` payload of Etsy Product (etsy.product).
 */
export interface EtsyProductData {
  /**
   * Listing detail records (one per requested listing id). Populated whenever the provider has data for the entity.
   */
  items: EtsyProductItem[];
}

/**
 * Input for Etsy Search (etsy.search).
 */
export interface EtsySearchInput {
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
   * Optional maximum listing price, in USD.
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Optional minimum listing price, in USD.
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * 1-based results page. Each page is billed as one request.
   * Range: minimum 1, maximum 250.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keywords, e.g. "cover letter template". For an Etsy /market page, pass its words: https://www.etsy.com/market/habit_tracker_2027 is the query "habit tracker 2027".
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `rating`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: ("rating" | "reviewsCount" | "totalResults")[];
  /**
   * Result order: relevance (Etsy's own order, the default), newest, price_low, or price_high.
   * One of: relevance, newest, price_low, price_high.
   * Default: relevance.
   */
  sort?: "relevance" | "newest" | "price_low" | "price_high";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface EtsySearchItem {
  /**
   * Price currency code, e.g. "USD", or null when no price is shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * Primary listing image URL, or null when the listing has none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string | null;
  /**
   * True when the listing is an ad Etsy placed in the results, or null when not reported.
   */
  isSponsored?: boolean | null;
  /**
   * Etsy listing id, the number in the listing URL (https://www.etsy.com/listing/<id>/...); pass it to the Etsy Product SKU. Populated whenever the provider has data for the entity.
   */
  listingId: string;
  /**
   * Price before the current sale, or null when the listing is not on sale.
   */
  originalPrice?: number | null;
  /**
   * Current price in the listing currency, or null when not shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * Average rating of the listing, 0-5, or null when unrated or the serving source does not report it.
   */
  rating?: number | null;
  /**
   * Number of reviews of the listing, or null when not reported.
   */
  reviewsCount?: number | null;
  /**
   * Etsy's numeric shop id, or null when not reported.
   */
  shopId?: string | null;
  /**
   * Name of the shop selling the listing; pass it to the Etsy Shop or Etsy Shop Listings SKU. Null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  shopName?: string | null;
  /**
   * Listing title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Etsy listing page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Etsy Search (etsy.search).
 */
export interface EtsySearchData {
  /**
   * Matching Etsy listing cards for the requested page, ads included where Etsy shows them. Populated whenever the provider has data for the entity.
   */
  items: EtsySearchItem[];
  /**
   * Total listings Etsy reports for the search, or null when the serving source does not report it.
   */
  totalResults?: number | null;
}

/**
 * Input for Etsy Shop (etsy.shop).
 */
export interface EtsyShopInput {
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `followers`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "banner"
    | "description"
    | "followers"
    | "image"
    | "ownerId"
    | "reviewsCount"
  )[];
  /**
   * Etsy shop name, as in the shop URL (https://www.etsy.com/shop/<name>), e.g. StudioStelleHD. The Etsy Search and Etsy Product SKUs return it as shopName.
   */
  shopName: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface EtsyShopItem {
  /**
   * Shop banner image URL, or null when the shop has none or the serving source does not report it.
   */
  banner?: string | null;
  /**
   * The shop's headline, or null when the serving source does not report it.
   */
  description?: string | null;
  /**
   * Number of shoppers following the shop, or null when the serving source does not report it.
   */
  followers?: number | null;
  /**
   * Shop logo URL, or null when the serving source does not report it.
   */
  image?: string | null;
  /**
   * Number of active listings, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  listingCount?: number | null;
  /**
   * Where the shop says it is based, e.g. "Shrewsbury, United Kingdom", or null when not shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  location?: string | null;
  /**
   * Shop name as Etsy shows it. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Etsy user id of the shop owner, or null when the serving source does not report it.
   */
  ownerId?: string | null;
  /**
   * Average shop rating, 0-5, or null when unrated. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number | null;
  /**
   * Number of shop reviews, or null when the serving source does not report it.
   */
  reviewsCount?: number | null;
  /**
   * Lifetime sales the shop shows, or null when hidden. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  salesCount?: number | null;
  /**
   * Etsy's numeric shop id. Populated whenever the provider has data for the entity.
   */
  shopId: string;
  /**
   * Etsy shop page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Etsy Shop (etsy.shop).
 */
export interface EtsyShopData {
  /**
   * Shop profile records (one per requested shop name). Populated whenever the provider has data for the entity.
   */
  items: EtsyShopItem[];
}

/**
 * Input for Etsy Shop Listings (etsy.shop_listings).
 */
export interface EtsyShopListingsInput {
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
   * 1-based results page of the shop's listings. Each page is billed as one request.
   * Range: minimum 1, maximum 250.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Etsy shop name, as in the shop URL (https://www.etsy.com/shop/<name>), e.g. StudioStelleHD. The Etsy Search and Etsy Product SKUs return it as shopName.
   */
  shopName: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface EtsyShopListingsItem {
  /**
   * Price currency code, e.g. "USD", or null when no price is shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * Primary listing image URL, or null when the listing has none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string | null;
  /**
   * Etsy listing id, the number in the listing URL (https://www.etsy.com/listing/<id>/...); pass it to the Etsy Product SKU. Populated whenever the provider has data for the entity.
   */
  listingId: string;
  /**
   * Price before the current sale, or null when the listing is not on sale.
   */
  originalPrice?: number | null;
  /**
   * Current price in the listing currency, or null when not shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * Listing title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Etsy listing page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Etsy Shop Listings (etsy.shop_listings).
 */
export interface EtsyShopListingsData {
  /**
   * The shop's active listings for the requested page, in the shop's own order. Populated whenever the provider has data for the entity.
   */
  items: EtsyShopListingsItem[];
  /**
   * Total listings the shop has for sale, or null when not reported.
   */
  totalResults: number | null;
}

/**
 * Typed methods for the etsy platform. Attached to the AnyAPI client as
 * `client.etsy`.
 */
export class EtsyNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Etsy Product
   *
   * Look up one Etsy listing by id and get its price, images, description, rating, reviews count, shop, category, variations, stock, ship-from country, favorites and materials in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.etsy.product({ listingId: "1810545592" });
   */
  product(
    input: EtsyProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<EtsyProductData>> {
    return this._core.run("etsy.product", input, options);
  }

  /**
   * Etsy Search
   *
   * Search Etsy listings by keyword, the same results an Etsy search or /market page shows, with optional sort, price range and page, and get title, price, original price, image, shop, rating and ad flag for each listing in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.etsy.search({ query: "cover letter template" });
   */
  search(
    input: EtsySearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<EtsySearchData>> {
    return this._core.run("etsy.search", input, options);
  }

  /**
   * Etsy Shop
   *
   * Look up one Etsy shop by name and get its id, location, sales, active listings, rating, reviews count, followers, description, logo and banner in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.etsy.shop({ shopName: "StudioStelleHD" });
   */
  shop(
    input: EtsyShopInput,
    options?: RequestOptions,
  ): Promise<RunResult<EtsyShopData>> {
    return this._core.run("etsy.shop", input, options);
  }

  /**
   * Etsy Shop Listings
   *
   * List one Etsy shop's active listings by shop name, a page at a time, and get title, price, original price and image for each listing in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.etsy.shopListings({ shopName: "StudioStelleHD" });
   */
  shopListings(
    input: EtsyShopListingsInput,
    options?: RequestOptions,
  ): Promise<RunResult<EtsyShopListingsData>> {
    return this._core.run("etsy.shop_listings", input, options);
  }
}
