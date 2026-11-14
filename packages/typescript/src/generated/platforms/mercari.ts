// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Mercari Product (mercari.product).
 */
export interface MercariProductInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Mercari marketplace of the item id: us (USD) or jp (JPY). Ids are not shared between countries.
   * One of: us, jp.
   * Default: us.
   */
  country?: "us" | "jp";
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Mercari item id or full listing URL (e.g. m73121443159 or https://www.mercari.com/us/item/m73121443159/). A jp.mercari.com URL is looked up in Japan whatever country says. Every mercari.search and mercari.sold_listings row carries its itemId.
   */
  itemId: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `sellerJoinedUtc`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a listing that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    "categories" | "sellerJoinedUtc" | "sellerOfficial" | "sellerQuickShipper"
  )[];
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface MercariProductItem {
  /**
   * True when the shipping method hides the names and addresses of buyer and seller from each other. Japan only: null in the US.
   */
  anonymousShipping?: boolean | null;
  /**
   * True when the seller accepts offers on this listing.
   */
  bestOfferEnabled?: boolean | null;
  /**
   * Brand name the seller tagged; null when untagged.
   */
  brand?: string | null;
  /**
   * Mercari brand id, usable as the brandId filter in the same country.
   */
  brandId?: string | null;
  /**
   * Category path from top level to leaf (e.g. Women, Shoes, Athletic).
   */
  categories?: string[];
  /**
   * Leaf category name.
   */
  category?: string | null;
  /**
   * Mercari leaf category id, usable as the categoryId filter in the same country.
   */
  categoryId?: string | null;
  /**
   * Colour families the seller tagged, as Mercari names them. Japan only: empty in the US and when untagged.
   */
  colors?: string[];
  /**
   * Number of comments on the listing. Japan only: null in the US.
   */
  commentCount?: number | null;
  /**
   * Item condition grade: new, like_new, good, fair, poor, or worn (Japan only).
   */
  condition?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the item was listed.
   */
  createdUtc?: number | null;
  /**
   * ISO currency code of the price: USD for the US, JPY for Japan. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * Listing description written by the seller.
   */
  description?: string | null;
  /**
   * Most days the seller states it takes to ship after the sale.
   */
  handlingDaysMax?: number | null;
  /**
   * Fewest days the seller states it takes to ship after the sale.
   */
  handlingDaysMin?: number | null;
  /**
   * Primary listing image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string | null;
  /**
   * All listing photo URLs, primary first.
   */
  images?: string[];
  /**
   * Mercari item id (m followed by 11 digits, or a 22-character Mercari Shops product id in Japan). Populated whenever the provider has data for the entity.
   */
  itemId: string;
  /**
   * Number of users who liked the listing.
   */
  likeCount?: number | null;
  /**
   * First asking price of the listing in USD; differs from price when the seller lowered it or accepted an offer. US only: null in Japan.
   */
  originalPrice?: number | null;
  /**
   * Price in the listing currency; it does not include buyer fees, and whether shipping is included depends on shippingPayer. For a sold item (status sold_out or trading) it is the final sale price after any accepted offer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * Mercari seller id.
   */
  sellerId?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the seller joined Mercari.
   */
  sellerJoinedUtc?: number | null;
  /**
   * Number of items the seller has listed.
   */
  sellerListingsCount?: number | null;
  /**
   * Seller display name.
   */
  sellerName?: string | null;
  /**
   * True when the seller is a Mercari official account. Japan only: null in the US.
   */
  sellerOfficial?: boolean | null;
  /**
   * True when Mercari marks the seller as a quick shipper. Japan only: null in the US.
   */
  sellerQuickShipper?: boolean | null;
  /**
   * Seller star rating; null when the seller has no ratings yet.
   */
  sellerRating?: number | null;
  /**
   * Number of bad ratings the seller has received. Japan only: null in the US.
   */
  sellerRatingBad?: number | null;
  /**
   * Number of ratings the seller has received.
   */
  sellerRatingCount?: number | null;
  /**
   * Number of good ratings the seller has received. Japan only: null in the US.
   */
  sellerRatingGood?: number | null;
  /**
   * Number of normal (neutral) ratings the seller has received. Japan only: null in the US.
   */
  sellerRatingNormal?: number | null;
  /**
   * individual for a private seller, shop for a Mercari Shops business seller. Japan only: null in the US.
   */
  sellerType?: string | null;
  /**
   * Seller profile URL. Japan only: null in the US.
   */
  sellerUrl?: string | null;
  /**
   * Shipping service the seller chose, as Mercari names it. Japan only: null in the US.
   */
  shippingMethod?: string | null;
  /**
   * Who pays shipping: seller (the price is delivered) or buyer.
   */
  shippingPayer?: string | null;
  /**
   * Region the item ships from (a US state or Japanese prefecture).
   */
  shipsFrom?: string | null;
  /**
   * Size label the seller chose (e.g. 8.5 (39)), when the category has sizes.
   */
  size?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the item sold. US only, and null unless status is sold_out or trading; in Japan updatedUtc is the nearest proxy.
   */
  soldUtc?: number | null;
  /**
   * Listing state: on_sale (active), trading (sold, handover in progress) or sold_out (sold). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  status?: string | null;
  /**
   * Listing title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the listing last changed.
   */
  updatedUtc?: number | null;
  /**
   * Canonical listing URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Mercari Product (mercari.product).
 */
export interface MercariProductData {
  /**
   * The one listing record. Populated whenever the provider has data for the entity.
   */
  items: MercariProductItem[];
}

/**
 * Input for Mercari Search (mercari.search).
 */
export interface MercariSearchInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Mercari brand id, or several separated by commas; the US and Japan use separate ids (e.g. 319 for Apple in the US). Every US row carries its brandId.
   */
  brandId?: string;
  /**
   * Mercari category id, or several separated by commas; the US and Japan use separate ids and a parent id includes its children (e.g. 778 for US cell phones and smartphones). Every row carries its categoryId.
   */
  categoryId?: string;
  /**
   * Only listings in any of these condition grades (e.g. ["new", "like_new"]). worn is Japan only.
   */
  condition?: ("new" | "like_new" | "good" | "fair" | "poor" | "worn")[];
  /**
   * Mercari marketplace: us (mercari.com, USD) or jp (jp.mercari.com, JPY).
   * One of: us, jp.
   * Default: us.
   */
  country?: "us" | "jp";
  /**
   * Pagination cursor: pass the previous response's nextCursor with the same query and filters; omit for the first page.
   */
  cursor?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Highest price to include, in whole units of the country's currency (e.g. 300).
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Lowest price to include, in whole units of the country's currency (US dollars or yen) (e.g. 50).
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keyword (e.g. nike air jordan 1). Japanese terms return far more in Japan, though Latin brand and model names work.
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `categories`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a listing that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: ("categories" | "nextCursor" | "shopId")[];
  /**
   * Result order; omitted means Mercari's default (relevance). most_liked is Japan only (e.g. price_desc).
   * One of: relevance, newest, price_asc, price_desc, most_liked.
   */
  sort?: "relevance" | "newest" | "price_asc" | "price_desc" | "most_liked";
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface MercariSearchItem {
  /**
   * Brand name the seller tagged; null when untagged (Japan search rows carry no brand: use mercari.product).
   */
  brand?: string | null;
  /**
   * Mercari brand id, usable as the brandId filter in the same country.
   */
  brandId?: string | null;
  /**
   * Category path from top level to leaf (e.g. Women, Shoes, Athletic). US only: empty on Japan search rows (use mercari.product).
   */
  categories?: string[];
  /**
   * Leaf category name (US); null on Japan search rows.
   */
  category?: string | null;
  /**
   * Mercari leaf category id, usable as the categoryId filter in the same country.
   */
  categoryId?: string | null;
  /**
   * Item condition grade: new, like_new, good, fair, poor, or worn (Japan only).
   */
  condition?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the item was listed. Japan only: null on US search rows (use mercari.product).
   */
  createdUtc?: number | null;
  /**
   * ISO currency code of the price: USD for the US, JPY for Japan. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * Primary listing image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string | null;
  /**
   * Mercari item id (m followed by 11 digits, or a 22-character Mercari Shops product id in Japan). Populated whenever the provider has data for the entity.
   */
  itemId: string;
  /**
   * First asking price of the listing in USD; differs from price when the seller lowered it or accepted an offer. US only: null in Japan.
   */
  originalPrice?: number | null;
  /**
   * Current asking price in the listing currency; it does not include buyer fees, and whether shipping is included depends on the listing's shipping terms. On a sold row (status sold_out or trading) it is the final sale price after any accepted offer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * Mercari seller id; null on a Japan Mercari Shops row that carries none.
   */
  sellerId?: string | null;
  /**
   * individual for a private seller, shop for a Mercari Shops business seller. Japan only: null in the US.
   */
  sellerType?: string | null;
  /**
   * Seller profile URL. Japan only: null in the US and on a Japan Mercari Shops row that carries no seller id.
   */
  sellerUrl?: string | null;
  /**
   * Who pays shipping: seller (the price is delivered) or buyer. Japan only: null on US search rows (use mercari.product); also null on a Japan Mercari Shops row.
   */
  shippingPayer?: string | null;
  /**
   * Mercari Shops shop id when sellerType is shop. Japan only: null in the US and for a private seller.
   */
  shopId?: string | null;
  /**
   * Size label the seller chose (e.g. 8.5 (39)), when the category has sizes.
   */
  size?: string | null;
  /**
   * Listing state: on_sale (active), trading (sold, handover in progress) or sold_out (sold). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  status?: string | null;
  /**
   * Listing title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the listing last changed. Japan only: null on US search rows.
   */
  updatedUtc?: number | null;
  /**
   * Canonical listing URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Mercari Search (mercari.search).
 */
export interface MercariSearchData {
  /**
   * Active listing records: up to 100 a page in the US and 120 in Japan. Populated whenever the provider has data for the entity.
   */
  items: MercariSearchItem[];
  /**
   * Opaque cursor for the next page, or null at the end. Pass it back as cursor with the same query and filters.
   */
  nextCursor?: string | null;
  /**
   * How many listings Mercari reports for the search across all pages. An estimate, not an exact count: broad searches report a ceiling (seen as 10,000 in the US and 15,000 in Japan).
   */
  totalResults?: number | null;
}

/**
 * Input for Mercari Sold Listings (mercari.sold_listings).
 */
export interface MercariSoldListingsInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Mercari brand id, or several separated by commas; the US and Japan use separate ids (e.g. 319 for Apple in the US). Every US row carries its brandId.
   */
  brandId?: string;
  /**
   * Mercari category id, or several separated by commas; the US and Japan use separate ids and a parent id includes its children (e.g. 778 for US cell phones and smartphones). Every row carries its categoryId.
   */
  categoryId?: string;
  /**
   * Only listings in any of these condition grades (e.g. ["new", "like_new"]). worn is Japan only.
   */
  condition?: ("new" | "like_new" | "good" | "fair" | "poor" | "worn")[];
  /**
   * Mercari marketplace: us (mercari.com, USD) or jp (jp.mercari.com, JPY).
   * One of: us, jp.
   * Default: us.
   */
  country?: "us" | "jp";
  /**
   * Pagination cursor: pass the previous response's nextCursor with the same query and filters; omit for the first page.
   */
  cursor?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Highest sold price to include, in whole units of the country's currency (e.g. 300).
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Lowest sold price to include, in whole units of the country's currency (US dollars or yen) (e.g. 50).
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keyword (e.g. nike air jordan 1). Japanese terms return far more in Japan, though Latin brand and model names work.
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `categories`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a listing that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: ("categories" | "nextCursor" | "shopId")[];
  /**
   * Result order; omitted means Mercari's default (most recently sold first for a US sold search). most_liked is Japan only; recently_sold is US only (e.g. price_desc).
   * One of: relevance, newest, price_asc, price_desc, most_liked, recently_sold.
   */
  sort?:
    | "relevance"
    | "newest"
    | "price_asc"
    | "price_desc"
    | "most_liked"
    | "recently_sold";
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface MercariSoldListingsItem {
  /**
   * Brand name the seller tagged; null when untagged (Japan search rows carry no brand: use mercari.product).
   */
  brand?: string | null;
  /**
   * Mercari brand id, usable as the brandId filter in the same country.
   */
  brandId?: string | null;
  /**
   * Category path from top level to leaf (e.g. Women, Shoes, Athletic). US only: empty on Japan search rows (use mercari.product).
   */
  categories?: string[];
  /**
   * Leaf category name (US); null on Japan search rows.
   */
  category?: string | null;
  /**
   * Mercari leaf category id, usable as the categoryId filter in the same country.
   */
  categoryId?: string | null;
  /**
   * Item condition grade: new, like_new, good, fair, poor, or worn (Japan only).
   */
  condition?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the item was listed. Japan only: null on US search rows (use mercari.product).
   */
  createdUtc?: number | null;
  /**
   * ISO currency code of the price: USD for the US, JPY for Japan. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * Primary listing image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string | null;
  /**
   * Mercari item id (m followed by 11 digits, or a 22-character Mercari Shops product id in Japan). Populated whenever the provider has data for the entity.
   */
  itemId: string;
  /**
   * First asking price of the listing in USD; differs from price when the seller lowered it or accepted an offer. US only: null in Japan.
   */
  originalPrice?: number | null;
  /**
   * Price in the listing currency. On a sold row (status sold_out or trading) this is the final sale price after any accepted offer; it does not include buyer fees, and whether shipping is included depends on the listing's shipping terms. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * Mercari seller id; null on a Japan Mercari Shops row that carries none.
   */
  sellerId?: string | null;
  /**
   * individual for a private seller, shop for a Mercari Shops business seller. Japan only: null in the US.
   */
  sellerType?: string | null;
  /**
   * Seller profile URL. Japan only: null in the US and on a Japan Mercari Shops row that carries no seller id.
   */
  sellerUrl?: string | null;
  /**
   * Who pays shipping: seller (the price is delivered) or buyer. Japan only: null on US search rows (use mercari.product); also null on a Japan Mercari Shops row.
   */
  shippingPayer?: string | null;
  /**
   * Mercari Shops shop id when sellerType is shop. Japan only: null in the US and for a private seller.
   */
  shopId?: string | null;
  /**
   * Size label the seller chose (e.g. 8.5 (39)), when the category has sizes.
   */
  size?: string | null;
  /**
   * Listing state: on_sale (active), trading (sold, handover in progress) or sold_out (sold). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  status?: string | null;
  /**
   * Listing title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the listing last changed. Japan only: null on US search rows.
   */
  updatedUtc?: number | null;
  /**
   * Canonical listing URL. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Mercari Sold Listings (mercari.sold_listings).
 */
export interface MercariSoldListingsData {
  /**
   * Sold listing records: up to 100 a page in the US and 120 in Japan. Populated whenever the provider has data for the entity.
   */
  items: MercariSoldListingsItem[];
  /**
   * Opaque cursor for the next page, or null at the end. Pass it back as cursor with the same query and filters.
   */
  nextCursor?: string | null;
  /**
   * How many listings Mercari reports for the search across all pages. An estimate, not an exact count: broad searches report a ceiling (seen as 10,000 in the US and 15,000 in Japan).
   */
  totalResults?: number | null;
}

/**
 * Typed methods for the mercari platform. Attached to the AnyAPI client as
 * `client.mercari`.
 */
export class MercariNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Mercari Product
   *
   * Get one Mercari US or Japan listing by item id or URL: title, description, price, original price, status, condition, brand, category, size, photos, shipping terms (who pays, method, ships-from region, handling days), whether offers are accepted, likes, seller name, rating, listing count and join date, when it was listed, and for a sold US item when it sold. For a sold item the price is the final sale price after any accepted offer.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.mercari.product({ itemId: "m73121443159" });
   */
  product(
    input: MercariProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<MercariProductData>> {
    return this._core.run("mercari.product", input, options);
  }

  /**
   * Mercari Search
   *
   * Search active Mercari US or Japan listings for sale by keyword with optional price-range, condition, category, brand, and sort filters, page by page, with the total result count (price, original price, condition, brand, category path, size, seller, image; who pays shipping in Japan). The price excludes buyer fees, and whether shipping is included depends on the listing's shipping terms.
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.mercari.search({ query: "nike air jordan 1" });
   */
  search(
    input: MercariSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<MercariSearchData>> {
    return this._core.run("mercari.search", input, options);
  }

  /**
   * Iterate every result of Mercari Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearch(
    input: MercariSearchInput,
    options?: RequestOptions,
  ): Paginator<MercariSearchItem, RunResult<MercariSearchData>> {
    return paginate<MercariSearchItem, RunResult<MercariSearchData>>(
      this._core,
      "mercari.search",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }

  /**
   * Mercari Sold Listings
   *
   * Search Mercari US or Japan sold listings by keyword with optional price-range, condition, category, brand, and sort filters, page by page, with the total result count; ideal for resale pricing research. The sold price is the final price after any accepted offer; it does not include buyer fees, and whether shipping is included depends on the listing's shipping terms. Rows carry no sale date: call mercari.product for soldUtc (US only).
   *
   * Price: $0.0012 per request.
   *
   * @example
   * const res = await client.mercari.soldListings({ query: "nike air jordan 1" });
   */
  soldListings(
    input: MercariSoldListingsInput,
    options?: RequestOptions,
  ): Promise<RunResult<MercariSoldListingsData>> {
    return this._core.run("mercari.sold_listings", input, options);
  }

  /**
   * Iterate every result of Mercari Sold Listings across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSoldListings(
    input: MercariSoldListingsInput,
    options?: RequestOptions,
  ): Paginator<MercariSoldListingsItem, RunResult<MercariSoldListingsData>> {
    return paginate<
      MercariSoldListingsItem,
      RunResult<MercariSoldListingsData>
    >(
      this._core,
      "mercari.sold_listings",
      input as unknown as Record<string, unknown>,
      "items",
      false,
      options,
    );
  }
}
