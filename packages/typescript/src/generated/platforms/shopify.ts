// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Shopify Product (shopify.product).
 */
export interface ShopifyProductInput {
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
   * Product handle, the slug after /products/ in the product URL, e.g. mens-strider; the full product page URL also works.
   */
  product: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Domain or URL of a public Shopify store, e.g. allbirds.com or https://kith.com. A store on its own domain is addressed by that domain.
   */
  store: string;
}

export interface ShopifyProductItem {
  /**
   * UTC epoch timestamp in seconds (Unix time) when the product was created. Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number | null;
  /**
   * Price currency code, e.g. "USD", or null when the store does not state it.
   */
  currency?: string | null;
  /**
   * Product description as plain text, or null when the product has none.
   */
  description?: string | null;
  /**
   * Product handle, the slug after /products/ in the product URL; pass it to the Shopify Product SKU for the full product. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Main product image URL, or null when the product has no image. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string | null;
  /**
   * All product image URLs, main image first; empty when the product has none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  images?: string[];
  /**
   * True when at least one variant can be bought now. Populated whenever the provider has data for the entity.
   */
  inStock: boolean;
  /**
   * Lowest regular (compare-at) price when the product is on sale, or null when it is not discounted.
   */
  listPrice?: number | null;
  /**
   * True when at least one variant is priced below its regular price. Populated whenever the provider has data for the entity.
   */
  onSale: boolean;
  /**
   * Options the variants differ by, e.g. Size or Color, each with its values; empty when the product has a single variant.
   */
  options?: ShopifyProductOption[];
  /**
   * Lowest variant price in the store's currency. Populated whenever the provider has data for the entity.
   */
  price: number;
  /**
   * Highest variant price in the store's currency; equals price when every variant costs the same. Populated whenever the provider has data for the entity.
   */
  priceMax: number;
  /**
   * Shopify product id. Populated whenever the provider has data for the entity.
   */
  productId: string;
  /**
   * Product type the store assigns, e.g. "Shoes", or null when it sets none.
   */
  productType?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time) when the product was published to the store. Multiply by 1000 for a JS Date in milliseconds.
   */
  publishedUtc?: number | null;
  /**
   * Tags the store attaches to the product, as the store writes them; empty when it has none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  tags?: string[];
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) when the product was last updated. Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number | null;
  /**
   * Product page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Every purchasable variant of the product, e.g. one per size and color. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  variants?: ShopifyProductVariant[];
  /**
   * Vendor (brand) the store lists the product under, or null when it sets none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  vendor?: string | null;
  [extra: string]: unknown;
}

export interface ShopifyProductOption {
  /**
   * Option name, e.g. "Size".
   */
  name: string;
  /**
   * Values the option takes, in the store's order.
   */
  values: string[];
  [extra: string]: unknown;
}

export interface ShopifyProductVariant {
  /**
   * True when this variant can be bought now.
   */
  inStock: boolean;
  /**
   * Regular (compare-at) price when the variant's product is on sale, or null when it is not discounted.
   */
  listPrice?: number | null;
  /**
   * This variant's value for each of the product's options, in option order.
   */
  options?: string[];
  /**
   * Variant price in the store's currency.
   */
  price: number;
  /**
   * The store's SKU code for the variant, or null when it sets none.
   */
  sku?: string | null;
  /**
   * Variant title, its option values joined, e.g. "10 / Black".
   */
  title: string;
  /**
   * Shopify variant id.
   */
  variantId: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Shopify Product (shopify.product).
 */
export interface ShopifyProductData {
  /**
   * The requested product (one record). Populated whenever the provider has data for the entity.
   */
  items: ShopifyProductItem[];
}

/**
 * Input for Shopify Store Products (shopify.products).
 */
export interface ShopifyProductsInput {
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
   * Products the store is asked for per page (1-250, default 50). The filters below are applied to that page, so a filtered page can hold fewer, even none while hasMore is true.
   * Range: minimum 1, maximum 250.
   * Default: 50.
   */
  limit?: number;
  /**
   * Only products priced at or below this, in the store's currency.
   * Range: minimum 0.
   */
  maxPrice?: number;
  /**
   * Only products priced at or above this, in the store's currency.
   * Range: minimum 0.
   */
  minPrice?: number;
  /**
   * Only products with at least one variant in stock.
   * Default: false.
   */
  onlyInStock?: boolean;
  /**
   * Only products with at least one discounted variant.
   * Default: false.
   */
  onlyOnSale?: boolean;
  /**
   * 1-based page of the store's product list. Each page is billed as one request.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Only products whose product type contains this text, e.g. "Shoes".
   */
  productType?: string;
  /**
   * Only products published to the store within the last this many days.
   * Range: minimum 1.
   */
  publishedWithinDays?: number;
  /**
   * Only products with a variant whose SKU code contains this text.
   */
  skuContains?: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Domain or URL of a public Shopify store, e.g. allbirds.com or https://kith.com. A store on its own domain is addressed by that domain.
   */
  store: string;
  /**
   * Only products carrying at least one of these tags.
   */
  tags?: string[];
  /**
   * Only products whose title contains this text.
   */
  titleContains?: string;
  /**
   * Only products whose vendor (brand) contains this text.
   */
  vendor?: string;
}

export interface ShopifyProductsItem {
  /**
   * UTC epoch timestamp in seconds (Unix time) when the product was created. Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number | null;
  /**
   * Price currency code, e.g. "USD", or null when the store does not state it.
   */
  currency?: string | null;
  /**
   * Product description as plain text, or null when the product has none.
   */
  description?: string | null;
  /**
   * Product handle, the slug after /products/ in the product URL; pass it to the Shopify Product SKU for the full product. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Main product image URL, or null when the product has no image. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string | null;
  /**
   * All product image URLs, main image first; empty when the product has none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  images?: string[];
  /**
   * True when at least one variant can be bought now. Populated whenever the provider has data for the entity.
   */
  inStock: boolean;
  /**
   * Lowest regular (compare-at) price when the product is on sale, or null when it is not discounted.
   */
  listPrice?: number | null;
  /**
   * True when at least one variant is priced below its regular price. Populated whenever the provider has data for the entity.
   */
  onSale: boolean;
  /**
   * Options the variants differ by, e.g. Size or Color, each with its values; empty when the product has a single variant.
   */
  options?: ShopifyProductsOption[];
  /**
   * Lowest variant price in the store's currency. Populated whenever the provider has data for the entity.
   */
  price: number;
  /**
   * Highest variant price in the store's currency; equals price when every variant costs the same. Populated whenever the provider has data for the entity.
   */
  priceMax: number;
  /**
   * Shopify product id. Populated whenever the provider has data for the entity.
   */
  productId: string;
  /**
   * Product type the store assigns, e.g. "Shoes", or null when it sets none.
   */
  productType?: string | null;
  /**
   * UTC epoch timestamp in seconds (Unix time) when the product was published to the store. Multiply by 1000 for a JS Date in milliseconds.
   */
  publishedUtc?: number | null;
  /**
   * Tags the store attaches to the product, as the store writes them; empty when it has none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  tags?: string[];
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) when the product was last updated. Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number | null;
  /**
   * Product page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Every purchasable variant of the product, e.g. one per size and color. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  variants?: ShopifyProductsVariant[];
  /**
   * Vendor (brand) the store lists the product under, or null when it sets none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  vendor?: string | null;
  [extra: string]: unknown;
}

export interface ShopifyProductsOption {
  /**
   * Option name, e.g. "Size".
   */
  name: string;
  /**
   * Values the option takes, in the store's order.
   */
  values: string[];
  [extra: string]: unknown;
}

export interface ShopifyProductsVariant {
  /**
   * True when this variant can be bought now.
   */
  inStock: boolean;
  /**
   * Regular (compare-at) price when the variant's product is on sale, or null when it is not discounted.
   */
  listPrice?: number | null;
  /**
   * This variant's value for each of the product's options, in option order.
   */
  options?: string[];
  /**
   * Variant price in the store's currency.
   */
  price: number;
  /**
   * The store's SKU code for the variant, or null when it sets none.
   */
  sku?: string | null;
  /**
   * Variant title, its option values joined, e.g. "10 / Black".
   */
  title: string;
  /**
   * Shopify variant id.
   */
  variantId: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Shopify Store Products (shopify.products).
 */
export interface ShopifyProductsData {
  /**
   * True when another page of the store's products follows this one (request it with page + 1), even when filters left this page empty; null when not reported.
   */
  hasMore?: boolean | null;
  /**
   * Products on the requested page, after any filters. Populated whenever the provider has data for the entity.
   */
  items: ShopifyProductsItem[];
}

/**
 * Input for Shopify Store Search (shopify.search).
 */
export interface ShopifySearchInput {
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
   * Search keywords, e.g. "wool" or "hoodie".
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Domain or URL of a public Shopify store, e.g. allbirds.com or https://kith.com. A store on its own domain is addressed by that domain.
   */
  store: string;
}

export interface ShopifySearchItem {
  /**
   * Price currency code, e.g. "USD", or null when the store does not state it.
   */
  currency?: string | null;
  /**
   * Product handle, the slug after /products/ in the product URL; pass it to the Shopify Product SKU for the full product. Populated whenever the provider has data for the entity.
   */
  handle: string;
  /**
   * Main product image URL, or null when the product has no image. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string | null;
  /**
   * All product image URLs, main image first; empty when the product has none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  images?: string[];
  /**
   * True when at least one variant can be bought now. Populated whenever the provider has data for the entity.
   */
  inStock: boolean;
  /**
   * Lowest regular (compare-at) price when the product is on sale, or null when it is not discounted.
   */
  listPrice?: number | null;
  /**
   * True when at least one variant is priced below its regular price. Populated whenever the provider has data for the entity.
   */
  onSale: boolean;
  /**
   * Lowest variant price in the store's currency. Populated whenever the provider has data for the entity.
   */
  price: number;
  /**
   * Highest variant price in the store's currency; equals price when every variant costs the same. Populated whenever the provider has data for the entity.
   */
  priceMax: number;
  /**
   * Shopify product id. Populated whenever the provider has data for the entity.
   */
  productId: string;
  /**
   * Product type the store assigns, e.g. "Shoes", or null when it sets none.
   */
  productType?: string | null;
  /**
   * Tags the store attaches to the product, as the store writes them; empty when it has none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  tags?: string[];
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Product page URL with tracking query parameters removed. Populated whenever the provider has data for the entity.
   */
  url: string;
  /**
   * Vendor (brand) the store lists the product under, or null when it sets none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  vendor?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Shopify Store Search (shopify.search).
 */
export interface ShopifySearchData {
  /**
   * The store's top matches for the query, in its own order; Shopify's store search returns at most 10. Populated whenever the provider has data for the entity.
   */
  items: ShopifySearchItem[];
}

/**
 * Input for Shopify Store Profile (shopify.store).
 */
export interface ShopifyStoreInput {
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Domain or URL of a public Shopify store, e.g. allbirds.com or https://kith.com. A store on its own domain is addressed by that domain.
   */
  store: string;
}

export interface ShopifyStoreItem {
  /**
   * City of the store's business address, or null when not reported.
   */
  city?: string | null;
  /**
   * Number of collections the store publishes, as the store reports it, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  collectionsCount?: number | null;
  /**
   * Two-letter country code of the store's business address, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  country?: string | null;
  /**
   * The store's currency code, e.g. "USD". Populated whenever the provider has data for the entity.
   */
  currency: string;
  /**
   * Store description as the store publishes it, or null when it has none.
   */
  description?: string | null;
  /**
   * The store's primary domain, e.g. www.allbirds.com. Populated whenever the provider has data for the entity.
   */
  domain: string;
  /**
   * Store name. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Number of products the store publishes, as the store reports it, or null when not reported. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  productsCount?: number | null;
  /**
   * State or province of the store's business address, or null when not reported.
   */
  region?: string | null;
  /**
   * Two-letter codes of the countries the store ships to; empty when not reported.
   */
  shipsToCountries?: string[];
  /**
   * The store's myshopify.com domain, or null when not reported.
   */
  shopifyDomain?: string | null;
  /**
   * Social profile URLs the store links to; empty when it lists none.
   */
  socialLinks?: string[];
  /**
   * Store home page URL, or null when not reported.
   */
  url?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Shopify Store Profile (shopify.store).
 */
export interface ShopifyStoreData {
  /**
   * The requested store (one record). Populated whenever the provider has data for the entity.
   */
  items: ShopifyStoreItem[];
}

/**
 * Typed methods for the shopify platform. Attached to the AnyAPI client as
 * `client.shopify`.
 */
export class ShopifyNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Shopify Product
   *
   * Look up one product on any public Shopify store by its handle or product page URL and get title, vendor, type, tags, description, price range, sale price, stock, images, options and every variant's SKU, price and stock in one normalized response.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.shopify.product({ product: "mens-strider", store: "allbirds.com" });
   */
  product(
    input: ShopifyProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<ShopifyProductData>> {
    return this._core.run("shopify.product", input, options);
  }

  /**
   * Shopify Store Products
   *
   * List the products of any public Shopify store by its domain, a page at a time, with title, vendor, type, tags, price range, sale price, stock, images, options and every variant's SKU, price and stock. Filter by vendor, type, tag, title, SKU, price, sale, stock or recent arrivals. A domain that is not a public Shopify store comes back not found.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.shopify.products({ store: "allbirds.com", limit: 10 });
   */
  products(
    input: ShopifyProductsInput,
    options?: RequestOptions,
  ): Promise<RunResult<ShopifyProductsData>> {
    return this._core.run("shopify.products", input, options);
  }

  /**
   * Shopify Store Search
   *
   * Search one public Shopify store's products by keyword with the store's own search and get its top matches with title, vendor, type, tags, price range, sale price, stock and images. A domain that is not a public Shopify store comes back not found.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.shopify.search({ query: "wool", store: "allbirds.com" });
   */
  search(
    input: ShopifySearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<ShopifySearchData>> {
    return this._core.run("shopify.search", input, options);
  }

  /**
   * Shopify Store Profile
   *
   * Look up any public Shopify store by its domain and get its name, description, currency, country and city, the countries it ships to, its published product and collection counts and its social links in one normalized response. A domain that is not a public Shopify store comes back not found.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.shopify.store({ store: "allbirds.com" });
   */
  store(
    input: ShopifyStoreInput,
    options?: RequestOptions,
  ): Promise<RunResult<ShopifyStoreData>> {
    return this._core.run("shopify.store", input, options);
  }
}
