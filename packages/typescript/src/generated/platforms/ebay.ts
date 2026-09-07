// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for eBay Product (ebay.product).
 */
export interface EbayProductInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Full eBay listing URL (e.g. https://www.ebay.com/itm/133576802017). The marketplace is taken from the host, so an ebay.co.uk or ebay.de URL returns that site's listing and currency. Item ids come back on every row of ebay.search and ebay.sold_listings.
   */
  url: string;
}

export interface EbayProductItem {
  /**
   * Stock state as eBay reports it (e.g. InStock, OutOfStock).
   */
  availability?: string;
  /**
   * Bids placed so far, for auction listings.
   */
  bidCount?: number;
  /**
   * Brand as listed, when the seller filled it in.
   */
  brand?: string;
  /**
   * Item condition as listed (e.g. New, Used). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  condition?: string;
  /**
   * ISO currency code of the price (e.g. USD, GBP).
   */
  currency?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  endsUtc?: number;
  /**
   * True when the listing ships free.
   */
  freeShipping?: boolean;
  /**
   * Primary listing image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * eBay item identifier. Populated whenever the provider has data for the entity.
   */
  itemId: string;
  /**
   * Where the item ships from, as displayed (e.g. Brooklyn, New York, United States).
   */
  itemLocation?: string;
  /**
   * Sale format (e.g. Buy It Now, Auction).
   */
  listingType?: string;
  /**
   * Model as listed, when the seller filled it in.
   */
  model?: string;
  /**
   * Manufacturer part number as listed. eBay sellers frequently set this to the literal "Does Not Apply"; ebay.product_full returns the full item-specifics table instead.
   */
  mpn?: string;
  /**
   * Current asking price, or the current bid on a live auction, in the site currency. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number;
  /**
   * Units the seller still has available, when the listing shows a quantity.
   */
  quantityAvailable?: number;
  /**
   * Units sold on this listing, when eBay shows a sold count.
   */
  quantitySold?: number;
  /**
   * True when the seller accepts returns.
   */
  returnsAccepted?: boolean;
  /**
   * Seller's lifetime feedback count.
   */
  sellerFeedbackCount?: number;
  /**
   * Seller's positive-feedback percentage.
   */
  sellerFeedbackPercent?: number;
  /**
   * Seller's eBay username, or the store's display name when the seller runs an eBay Store. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sellerName?: string;
  /**
   * Seller's eBay store or listings page.
   */
  sellerUrl?: string;
  /**
   * Shipping cost to the default destination as a numeric amount; absent when eBay quotes no flat cost.
   */
  shippingCost?: number;
  /**
   * Listing title as it appears on eBay. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical listing URL (tracking query params stripped). Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Number of shoppers watching the listing, when eBay shows it.
   */
  watchers?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of eBay Product (ebay.product).
 */
export interface EbayProductData {
  /**
   * Listing detail record (one element, for the requested listing URL). Populated whenever the provider has data for the entity.
   */
  items: EbayProductItem[];
}

/**
 * Input for eBay Product Full (ebay.product_full).
 */
export interface EbayProductFullInput {
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Full eBay listing URL (e.g. https://www.ebay.com/itm/133576802017). Works on ended and sold listings as well as live ones, so it composes with ebay.sold_listings: pull the comps cheaply, then enrich the few you care about.
   */
  url: string;
}

export interface EbayProductFullItem {
  /**
   * Stock state as eBay reports it (e.g. in_stock, out_of_stock).
   */
  availability?: string;
  /**
   * Full category path, e.g. "Electronics>Cell Phones & Accessories>Cell Phones & Smartphones".
   */
  category?: string;
  /**
   * Item condition as listed (e.g. New, Used). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  condition?: string;
  /**
   * ISO currency code of the price (e.g. USD, GBP).
   */
  currency?: string;
  /**
   * The seller's own listing description, as plain text. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Primary listing image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * All listing image URLs, primary first. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  images?: string[];
  /**
   * eBay item identifier. Populated whenever the provider has data for the entity.
   */
  itemId: string;
  /**
   * Where the item ships from, as displayed (e.g. Brooklyn, New York, United States).
   */
  itemLocation?: string;
  /**
   * Sale format (e.g. Buy It Now, Auction, Buy It Now + Best Offer).
   */
  listingType?: string;
  /**
   * Current effective price in the site currency: the discounted price when the seller is running a sale, otherwise the asking price. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number;
  /**
   * Units the seller still has available, when the listing shows a quantity.
   */
  quantityAvailable?: number;
  /**
   * Units sold on this listing, when eBay shows a sold count.
   */
  quantitySold?: number;
  /**
   * Days the buyer has to return the item, when the seller accepts returns.
   */
  returnWindow?: number;
  /**
   * Seller's lifetime feedback count.
   */
  sellerFeedbackCount?: number;
  /**
   * Seller's positive-feedback percentage.
   */
  sellerFeedbackPercent?: number;
  /**
   * Seller's eBay username, or the store's display name when the seller runs an eBay Store. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sellerName?: string;
  /**
   * Seller's eBay store or listings page.
   */
  sellerUrl?: string;
  /**
   * The listing's item-specifics table, as the seller filled it in. This is where MPN, Model, Storage Capacity, Compatible Brand and every other per-category attribute lives; the set of names varies by category. eBay's boilerplate condition blurb is removed. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  specifications?: EbayProductFullSpecification[];
  /**
   * Listing title as it appears on eBay. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical listing URL (tracking query params stripped). Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

export interface EbayProductFullSpecification {
  /**
   * Attribute name as eBay labels it (e.g. MPN, Storage Capacity).
   */
  name?: string;
  /**
   * Attribute value as the seller entered it.
   */
  value?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of eBay Product Full (ebay.product_full).
 */
export interface EbayProductFullData {
  /**
   * Listing detail record with the full item-specifics table (one element, for the requested listing URL). Populated whenever the provider has data for the entity.
   */
  items: EbayProductFullItem[];
}

/**
 * Input for eBay Search (ebay.search).
 */
export interface EbaySearchInput {
  /**
   * Filter by one or more item conditions; omit for all conditions (e.g. ["new", "open_box"]).
   */
  condition?: ("new" | "open_box" | "refurbished" | "used" | "for_parts")[];
  /**
   * Maximum number of results to return (1 to 25, default 25).
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Restrict to a listing format; omit or use all for both (e.g. buy_it_now for fixed-price only).
   * One of: all, auction, buy_it_now.
   */
  listingType?: "all" | "auction" | "buy_it_now";
  /**
   * Optional maximum item price in USD.
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Optional minimum item price in USD.
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keywords, e.g. "nintendo switch" or "vintage levis 501".
   */
  query: string;
  /**
   * Result sort order; omit for eBay's Best Match (e.g. price_low sorts by lowest price plus shipping first).
   * One of: best_match, ending_soonest, newly_listed, price_low, price_high.
   */
  sort?:
    | "best_match"
    | "ending_soonest"
    | "newly_listed"
    | "price_low"
    | "price_high";
}

export interface EbaySearchItem {
  condition?: string;
  /**
   * Primary listing image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * eBay item identifier. Populated whenever the provider has data for the entity.
   */
  itemId: string;
  /**
   * Auction, FixedPrice, etc.
   */
  listingType?: string;
  /**
   * Listing price.
   */
  price?: number;
  /**
   * Seller positive-feedback percentage.
   */
  sellerFeedbackPercent?: number;
  sellerName?: string;
  /**
   * Shipping cost or free-delivery label.
   */
  shippingCost?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of eBay Search (ebay.search).
 */
export interface EbaySearchData {
  /**
   * Listing records: title, price, condition, shipping cost, seller info, image, and item URL. Populated whenever the provider has data for the entity.
   */
  items: EbaySearchItem[];
}

/**
 * Input for eBay Sold Listings (ebay.sold_listings).
 */
export interface EbaySoldListingsInput {
  /**
   * Item condition filter (e.g. used).
   * One of: any, new, used.
   * Default: any.
   */
  condition?: "any" | "new" | "used";
  /**
   * Only include listings that sold with free shipping.
   */
  freeShipping?: boolean;
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Restrict to a listing format; omit or use all for both (e.g. auction for auction sales only).
   * One of: all, auction, buy_it_now.
   */
  listingType?: "all" | "auction" | "buy_it_now";
  /**
   * Optional maximum sold price in the site currency (e.g. 500).
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Optional minimum sold price in the site currency (e.g. 200).
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keyword for sold items (e.g. iphone 13 pro).
   */
  query: string;
  /**
   * Only include listings from sellers who accept returns.
   */
  returnsAccepted?: boolean;
  /**
   * Restrict to sold listings from one seller username (e.g. rainierconsignment).
   */
  seller?: string;
  /**
   * eBay country site to search. Sold-listing coverage is currently US only.
   * One of: ebay.com.
   * Default: ebay.com.
   */
  site?: "ebay.com";
  /**
   * Result sort order; omit for eBay's default best-match order (e.g. price_high sorts by highest sold price first).
   * One of: ended_recently, price_low, price_high.
   */
  sort?: "ended_recently" | "price_low" | "price_high";
}

export interface EbaySoldListingsItem {
  /**
   * Number of bids the listing received, for auction sales.
   */
  bidCount?: number;
  /**
   * Item condition as listed (e.g. Pre-Owned).
   */
  condition?: string;
  /**
   * eBay catalog product identifier (ePID), when the listing is matched to a catalog product.
   */
  epid?: string;
  /**
   * Primary listing image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * All listing image URLs, primary first.
   */
  images?: string[];
  /**
   * eBay item identifier. Populated whenever the provider has data for the entity.
   */
  itemId: string;
  /**
   * Sale format (e.g. Fixed price, Auction).
   */
  listingType?: string;
  /**
   * Seller's lifetime feedback count, when available.
   */
  sellerFeedbackCount?: number;
  /**
   * Seller's positive-feedback percentage, when available.
   */
  sellerFeedbackPercent?: number;
  /**
   * Seller's eBay username, when available.
   */
  sellerUsername?: string;
  /**
   * Shipping cost as displayed on the listing (e.g. "Free delivery", "$5.55 delivery").
   */
  shippingCost?: string;
  /**
   * ISO currency code of the sold price (e.g. USD).
   */
  soldCurrency?: string;
  /**
   * Final sold price in the site currency.
   */
  soldPrice?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  soldUtc?: number;
  /**
   * Listing title as it appeared on eBay. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Canonical listing URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of eBay Sold Listings (ebay.sold_listings).
 */
export interface EbaySoldListingsData {
  /**
   * Sold listing records: title, sold price, sale date, condition, seller, and item URL. Populated whenever the provider has data for the entity.
   */
  items: EbaySoldListingsItem[];
}

/**
 * Typed methods for the ebay platform. Attached to the AnyAPI client as
 * `client.ebay`.
 */
export class EbayNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * eBay Product
   *
   * Fetch one eBay listing by URL and get the full offer record: price, condition, shipping, item location, seller feedback, quantity, watchers, and live auction state (bid count and end time).
   *
   * Price: $0.00045 per request.
   *
   * @example
   * const res = await client.ebay.product({ url: "https://www.ebay.com/itm/133576802017" });
   */
  product(
    input: EbayProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<EbayProductData>> {
    return this._core.run("ebay.product", input, options);
  }

  /**
   * eBay Product Full
   *
   * Fetch one eBay listing by URL with the complete item-specifics table the seller filled in (MPN, model, capacity, compatibility and every other per-category attribute), the seller's full description, every listing image, and the seller's feedback record.
   *
   * Price: $0.0018 per request.
   *
   * @example
   * const res = await client.ebay.productFull({ url: "https://www.ebay.com/itm/133576802017" });
   */
  productFull(
    input: EbayProductFullInput,
    options?: RequestOptions,
  ): Promise<RunResult<EbayProductFullData>> {
    return this._core.run("ebay.product_full", input, options);
  }

  /**
   * eBay Search
   *
   * Search eBay active listings by keyword with optional price-range, item-condition, listing-type, and sort filters and get title, price, condition, shipping, and seller in one normalized response.
   *
   * Price: $0.00045 per request.
   *
   * @example
   * const res = await client.ebay.search({ query: "nintendo switch", limit: 3, sort: "price_low" });
   */
  search(
    input: EbaySearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<EbaySearchData>> {
    return this._core.run("ebay.search", input, options);
  }

  /**
   * eBay Sold Listings
   *
   * Retrieve recently sold eBay listings for any keyword with optional price-range, condition, and sort filters (sold price, sale date, condition, seller, item details); ideal for pricing research.
   *
   * Price: $0.022 per request plus $0.00264 per result (maximum $0.088).
   *
   * @example
   * const res = await client.ebay.soldListings({ query: "iphone 13 pro", limit: 10, sort: "ended_recently" });
   */
  soldListings(
    input: EbaySoldListingsInput,
    options?: RequestOptions,
  ): Promise<RunResult<EbaySoldListingsData>> {
    return this._core.run("ebay.sold_listings", input, options);
  }
}
