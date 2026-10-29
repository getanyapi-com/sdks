// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for ASOS Product (asos.product).
 */
export interface AsosProductInput {
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `sizeGuide`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "sizeGuide"[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * ASOS product page URL, e.g. https://www.asos.com/pullbear/pullbear-casual-trainers-in-white/prd/211299341, or the short form https://www.asos.com/prd/211299341. The store is read from the URL path (/us/, /au/, /de/ and so on; none means the UK store), and prices come back in that store's currency.
   */
  url: string;
}

export interface AsosProductItem {
  /**
   * Brand name, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  brand?: string | null;
  /**
   * Care instructions as ASOS lists them, e.g. "Machine wash according to instructions on care label", or null when not listed.
   */
  careInstructions?: string | null;
  /**
   * Colour name as ASOS lists it, or null when not reported.
   */
  colour?: string | null;
  /**
   * Price currency code, e.g. "GBP" or "USD", or null when no price is shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * Product description as ASOS publishes it (HTML), or null when the listing has none.
   */
  description?: string | null;
  /**
   * Department the product is listed under, e.g. "Men" or "Women", or null when not reported.
   */
  gender?: string | null;
  /**
   * Primary product image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * All product image URLs, primary first.
   */
  images?: string[];
  /**
   * True when at least one size is in stock, false when none is, or null when not reported.
   */
  inStock?: boolean | null;
  /**
   * True when ASOS has discontinued the product, or null when not reported.
   */
  isDiscontinued?: boolean | null;
  /**
   * ASOS's "About me" section: fabric and material composition, as HTML, or null when not listed.
   */
  materials?: string | null;
  /**
   * Current price in the store's currency, or null when no price is shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * ASOS product id. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  productId?: string;
  /**
   * Link to the ASOS size guide for this product, or null when the serving source does not report one.
   */
  sizeGuide?: string | null;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * ASOS product page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * One entry per size the product is sold in.
   */
  variants?: AsosProductVariant[];
  [extra: string]: unknown;
}

export interface AsosProductVariant {
  /**
   * Colour of this variant as ASOS lists it, or null when not reported.
   */
  colour?: string | null;
  /**
   * Currency code of this size's price, e.g. "GBP", or null when not shown.
   */
  currency?: string | null;
  /**
   * EAN barcode of this size, or null when not reported.
   */
  ean?: string | null;
  /**
   * True when this size is in stock, or null when not reported.
   */
  inStock?: boolean | null;
  /**
   * Current price of this size in the store's currency, or null when not shown.
   */
  price?: number | null;
  /**
   * Size label as ASOS shows it, e.g. "UK 8", or null when not reported.
   */
  size?: string | null;
  /**
   * ASOS SKU of this size, or null when not reported.
   */
  sku?: string | null;
  /**
   * ASOS variant id of this size, or null when not reported.
   */
  variantId?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of ASOS Product (asos.product).
 */
export interface AsosProductData {
  /**
   * Product detail records (one per requested product URL). Populated whenever the provider has data for the entity.
   */
  items: AsosProductItem[];
}

/**
 * Input for ASOS Search (asos.search).
 */
export interface AsosSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * ASOS country store to search, which also sets the price currency (gb GBP, us USD, au AUD, de/fr/it/es/nl EUR, se SEK, dk DKK, pl PLN); defaults to gb, the UK store. Product ids and URLs are store-specific.
   * One of: gb, us, au, de, fr, it, es, nl, se, dk, pl.
   * Default: gb.
   */
  country?:
    "gb" | "us" | "au" | "de" | "fr" | "it" | "es" | "nl" | "se" | "dk" | "pl";
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional maximum product price, in the store's currency.
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Optional minimum product price, in the store's currency.
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * 1-based results page of 48 products. Each page is billed as one request.
   * Range: minimum 1, maximum 200.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Search keywords, e.g. "white sneakers" or "summer dress".
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `inStock`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "inStock"[];
  /**
   * Result sort order; omit for ASOS's recommended order (e.g. new for newest arrivals first).
   * One of: best_match, new, price_low, price_high.
   */
  sort?: "best_match" | "new" | "price_low" | "price_high";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface AsosSearchItem {
  /**
   * Brand name, or null when not reported.
   */
  brand?: string | null;
  /**
   * Colour name as ASOS lists it, or null when not reported.
   */
  colour?: string | null;
  /**
   * Id of the colourway this result shows; it appears as #colourWayId-<id> in ASOS product links. Null when not reported.
   */
  colourWayId?: string | null;
  /**
   * Price currency code, e.g. "GBP" or "USD", or null when no price is shown. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * Primary product image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * All product image URLs, primary first.
   */
  images?: string[];
  /**
   * True when the product is in stock, false when it is not, or null when the serving source does not report stock in search results.
   */
  inStock?: boolean | null;
  /**
   * Previous price when the product is marked down, or null when it is not.
   */
  listPrice?: number | null;
  /**
   * 1-based position of the result in this page.
   */
  position?: number | null;
  /**
   * Current price in the store's currency, or null when the result shows no price. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * ASOS product code (the style number printed on the product page), or null when not reported.
   */
  productCode?: string | null;
  /**
   * ASOS product id, the number after /prd/ in the product URL; use the product URL with the ASOS Product SKU. Populated whenever the provider has data for the entity.
   */
  productId: string;
  /**
   * True when ASOS flags the product as selling fast, or null when not reported.
   */
  sellingFast?: boolean | null;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * ASOS product page URL in the searched store, with tracking and colour fragments removed. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of ASOS Search (asos.search).
 */
export interface AsosSearchData {
  /**
   * True when another page of results follows this one (request it with page + 1), or null when not reported.
   */
  hasMore?: boolean | null;
  /**
   * Matching ASOS product records for the requested page. Populated whenever the provider has data for the entity.
   */
  items: AsosSearchItem[];
  /**
   * Total number of matching products ASOS reports for the query, or null when not reported.
   */
  totalResults?: number | null;
}

/**
 * Typed methods for the asos platform. Attached to the AnyAPI client as
 * `client.asos`.
 */
export class AsosNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * ASOS Product
   *
   * Fetch an ASOS product by URL from any of its 11 country stores and get title, price, brand, colour, description, images, and per-size stock in one normalized response.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.asos.product({ url: "https://www.asos.com/pullbear/pullbear-casual-trainers-in-white/prd/211299341" });
   */
  product(
    input: AsosProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<AsosProductData>> {
    return this._core.run("asos.product", input, options);
  }

  /**
   * ASOS Search
   *
   * Search ASOS by keyword in any of its 11 country stores with optional sort, price-range, and page filters and get title, price, brand, and colour for each product in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.asos.search({ query: "white sneakers", country: "us" });
   */
  search(
    input: AsosSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<AsosSearchData>> {
    return this._core.run("asos.search", input, options);
  }
}
