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
   * Populated whenever the provider returns data.
   */
  title: string;
  /**
   * Populated whenever the provider returns data.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Walmart Product (walmart.product).
 */
export interface WalmartProductData {
  /**
   * Product detail records: title, price, availability, rating, review count, images, and specifications.
   * Populated whenever the provider returns data.
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
   * Fetch a Walmart product page by URL and get full product details - title, price, availability, ratings, images, and specs - in one normalized, flat-priced response.
   *
   * Price: $0 per request plus $0.00368 per result.
   *
   * @example
   * const res = await client.walmart.product({"url":"https://www.walmart.com/ip/Apple-AirPods-Pro-2/5689919121"});
   */
  product(
    input: WalmartProductInput,
    options?: RequestOptions,
  ): Promise<RunResult<WalmartProductData>> {
    return this._core.run("walmart.product", input, options);
  }
}
