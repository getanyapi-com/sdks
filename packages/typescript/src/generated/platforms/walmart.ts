// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type WalmartProductData = unknown;

/**
 * Typed methods for the walmart platform. Attached to the AnyAPI client as
 * `client.walmart`.
 */
export class WalmartNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Walmart Product
   *
   * Fetch a Walmart product page by URL and get full product details (title, price, availability, ratings, images, and specs) in one normalized response.
   *
   * Price: $0 per request plus $0.00368 per result (maximum $0.00368).
   *
   * @example
   * const res = await client.walmart.product({ url: "https://www.walmart.com/ip/Apple-AirPods-Pro-2/5689919121" });
   */
  product(
    input: WalmartProductInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<WalmartProductData>> {
    return this._core.run(
      "walmart.product",
      input,
      options,
    ) as unknown as Promise<BareRunResult<WalmartProductData>>;
  }
}
