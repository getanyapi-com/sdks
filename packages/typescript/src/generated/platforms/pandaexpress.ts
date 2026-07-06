// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
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

export interface PandaexpressLocationsRestaurant {
  address: string;
  canDeliver: boolean;
  canPickup: boolean;
  city: string;
  distanceMiles: number;
  id: number;
  isOpen: boolean;
  latitude: number;
  longitude: number;
  name: string;
  phone: string;
  state: string;
  zip: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Panda Express Locations (pandaexpress.locations).
 */
export interface PandaexpressLocationsData {
  /**
   * Nearby Panda Express restaurants, nearest first.
   */
  restaurants: PandaexpressLocationsRestaurant[];
}

/**
 * Input for Panda Express Menu (pandaexpress.menu).
 */
export interface PandaexpressMenuInput {
  /**
   * Panda Express restaurant id (the `id` from Panda Express Locations).
   */
  restaurantId: string;
}

export interface PandaexpressMenuCategorie {
  items: PandaexpressMenuItem[];
  name: string;
  [extra: string]: unknown;
}

export interface PandaexpressMenuItem {
  /**
   * Base calories when published by the restaurant, else 0.
   */
  calories: number;
  description: string;
  name: string;
  /**
   * Item price in USD (0 for items priced only via size/option selection).
   */
  priceUsd: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Panda Express Menu (pandaexpress.menu).
 */
export interface PandaexpressMenuData {
  /**
   * Menu categories in display order.
   */
  categories: PandaexpressMenuCategorie[];
}

/**
 * Input for Panda Express Nutrition (pandaexpress.nutrition).
 */
export interface PandaexpressNutritionInput {
  /**
   * Menu item name (or substring) to look up, e.g. "orange chicken" or "chow mein".
   */
  query: string;
}

export interface PandaexpressNutritionItem {
  calories: number;
  cholesterolMg: number;
  dietaryFiberG: number;
  name: string;
  proteinG: number;
  saturatedFatG: number;
  servingSizeOz: number;
  sodiumMg: number;
  sugarsG: number;
  totalCarbG: number;
  totalFatG: number;
  transFatG: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Panda Express Nutrition (pandaexpress.nutrition).
 */
export interface PandaexpressNutritionData {
  /**
   * Matching menu items with official nutrition facts.
   */
  items: PandaexpressNutritionItem[];
}

/**
 * Typed methods for the pandaexpress platform. Attached to the AnyAPI client as
 * `client.pandaexpress`.
 */
export class PandaexpressNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Panda Express Locations
   *
   * Find Panda Express restaurants near a latitude/longitude, sorted by distance, with address, phone, hours availability, and pickup/delivery support. One call, billed per request in real dollars.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.pandaexpress.locations({ latitude: 34.0522, longitude: -118.2437, limit: 5 });
   */
  locations(
    input: PandaexpressLocationsInput,
    options?: RequestOptions,
  ): Promise<RunResult<PandaexpressLocationsData>> {
    return this._core.run("pandaexpress.locations", input, options);
  }

  /**
   * Panda Express Menu
   *
   * Get the live menu for a Panda Express restaurant by id: categories with item names, descriptions, and USD prices. Pair with Panda Express Locations to resolve a restaurant id. One call, billed per request in real dollars.
   *
   * Price: $0.0009 per request.
   *
   * @example
   * const res = await client.pandaexpress.menu({ restaurantId: "112551" });
   */
  menu(
    input: PandaexpressMenuInput,
    options?: RequestOptions,
  ): Promise<RunResult<PandaexpressMenuData>> {
    return this._core.run("pandaexpress.menu", input, options);
  }

  /**
   * Panda Express Nutrition
   *
   * Look up official Panda Express nutrition facts by item name: serving size, calories, fat, cholesterol, sodium, carbs, fiber, sugars, and protein. One call, billed per request in real dollars.
   *
   * Price: $0.006 per request.
   *
   * @example
   * const res = await client.pandaexpress.nutrition({ query: "orange chicken" });
   */
  nutrition(
    input: PandaexpressNutritionInput,
    options?: RequestOptions,
  ): Promise<RunResult<PandaexpressNutritionData>> {
    return this._core.run("pandaexpress.nutrition", input, options);
  }
}
