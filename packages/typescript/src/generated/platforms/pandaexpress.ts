// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for Panda Express Locations (pandaexpress.locations).
 */
export interface PandaexpressLocationsInput {
  /**
   * Latitude of the search center.
   * Range: minimum -90, maximum 90.
   */
  latitude: number;
  /**
   * Maximum number of restaurants to return (1-50, default 10).
   * Range: minimum 1, maximum 50.
   */
  limit?: number;
  /**
   * Longitude of the search center.
   * Range: minimum -180, maximum 180.
   */
  longitude: number;
  /**
   * Search radius in miles (default 10).
   * Range: minimum 1, maximum 100.
   */
  radius?: number;
}

export type PandaexpressLocationsData = unknown;

/**
 * Input for Panda Express Menu (pandaexpress.menu).
 */
export interface PandaexpressMenuInput {
  /**
   * Panda Express restaurant id (the `id` from Panda Express Locations).
   */
  restaurantId: string;
}

export type PandaexpressMenuData = unknown;

/**
 * Input for Panda Express Nutrition (pandaexpress.nutrition).
 */
export interface PandaexpressNutritionInput {
  /**
   * Menu item name (or substring) to look up, e.g. "orange chicken" or "chow mein".
   */
  query: string;
}

export type PandaexpressNutritionData = unknown;

/**
 * Typed methods for the pandaexpress platform. Attached to the AnyAPI client as
 * `client.pandaexpress`.
 */
export class PandaexpressNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Panda Express Locations
   *
   * Find Panda Express restaurants near a latitude/longitude, sorted by distance, with address, phone, hours availability, and pickup/delivery support.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.pandaexpress.locations({ latitude: 34.0522, longitude: -118.2437, limit: 5 });
   */
  locations(
    input: PandaexpressLocationsInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<PandaexpressLocationsData>> {
    return this._core.run(
      "pandaexpress.locations",
      input,
      options,
    ) as unknown as Promise<BareRunResult<PandaexpressLocationsData>>;
  }

  /**
   * Panda Express Menu
   *
   * Get the live menu for a Panda Express restaurant by id: categories with item names, descriptions, and USD prices. Pair with Panda Express Locations to resolve a restaurant id.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.pandaexpress.menu({ restaurantId: "112551" });
   */
  menu(
    input: PandaexpressMenuInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<PandaexpressMenuData>> {
    return this._core.run(
      "pandaexpress.menu",
      input,
      options,
    ) as unknown as Promise<BareRunResult<PandaexpressMenuData>>;
  }

  /**
   * Panda Express Nutrition
   *
   * Look up official Panda Express nutrition facts by item name: serving size, calories, fat, cholesterol, sodium, carbs, fiber, sugars, and protein.
   *
   * Price: $0.006 per request.
   *
   * @example
   * const res = await client.pandaexpress.nutrition({ query: "orange chicken" });
   */
  nutrition(
    input: PandaexpressNutritionInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<PandaexpressNutritionData>> {
    return this._core.run(
      "pandaexpress.nutrition",
      input,
      options,
    ) as unknown as Promise<BareRunResult<PandaexpressNutritionData>>;
  }
}
