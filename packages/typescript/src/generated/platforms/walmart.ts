// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Walmart Product (walmart.product).
 */
export interface WalmartProductInput {
  /**
   * Walmart product page URL.
   */
  url: string;
}

export interface WalmartProductItem {
  /**
   * Stock status, e.g. "IN_STOCK".
   */
  availability?: string;
  /**
   * Brand name; empty when not reported.
   */
  brand?: string;
  /**
   * Short product description; empty when the listing has none.
   */
  description?: string;
  /**
   * Primary product image URL. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * All product image URLs.
   */
  images?: string[];
  /**
   * Walmart US item id (usItemId). Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  itemId?: string;
  /**
   * Manufacturer model number; empty when not reported.
   */
  model?: string;
  /**
   * Current price as displayed, e.g. "$125.00"; empty when unavailable (Walmart returns a formatted string, not a numeric value).
   */
  priceText?: string;
  /**
   * Walmart internal product id.
   */
  productId?: string;
  /**
   * Average customer rating, 0-5; 0 when unrated.
   */
  rating?: number;
  /**
   * Number of customer reviews; 0 when none.
   */
  reviewsCount?: number;
  /**
   * Name of the seller fulfilling the offer.
   */
  sellerName?: string;
  /**
   * Product title. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Universal Product Code; empty when not reported.
   */
  upc?: string;
  /**
   * Canonical Walmart product page URL (condition query param retained, as it selects the offer). Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Walmart Product (walmart.product).
 */
export interface WalmartProductData {
  /**
   * Product detail records (one per requested product URL). Populated whenever the provider has data for the entity.
   */
  items: WalmartProductItem[];
}

/**
 * Typed methods for the walmart platform. Attached to the AnyAPI client as
 * `client.walmart`.
 */
export class WalmartNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Walmart Product
   *
   * Fetch a Walmart product page by URL and get full product details - title, price, availability, ratings, images, and specs - in one normalized response.
   *
   * Price: $0 per request plus $0.00368 per result (maximum $0.00368).
   *
   * @example
   * const res = await client.walmart.product({ url: "https://www.walmart.com/ip/Apple-AirPods-Pro-2/5689919121" });
   */
  product(
    input: WalmartProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<WalmartProductData>> {
    return this._core.run("walmart.product", input, options);
  }
}
