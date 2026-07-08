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
  /**
   * Populated whenever the provider has data for the entity.
   */
  address: string;
  canDeliver: boolean;
  canPickup: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  city: string;
  distanceMiles: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: number;
  isOpen: boolean;
  /**
   * Populated whenever the provider has data for the entity.
   */
  latitude: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  longitude: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  phone: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  state: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  zip: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Panda Express Locations (pandaexpress.locations).
 */
export interface PandaexpressLocationsData {
  /**
   * Nearby Panda Express restaurants, nearest first. Populated whenever the provider has data for the entity.
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

/**
 * Populated whenever the provider has data for the entity.
 */
export interface PandaexpressMenuCategorie {
  items: PandaexpressMenuItem[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  [extra: string]: unknown;
}

export interface PandaexpressMenuItem {
  /**
   * Base calories when published by the restaurant, else 0.
   */
  calories: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
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
   * Menu categories in display order. Populated whenever the provider has data for the entity.
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
  /**
   * Populated whenever the provider has data for the entity.
   */
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
   * Matching menu items with official nutrition facts. Populated whenever the provider has data for the entity.
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
   * Find Panda Express restaurants near a latitude/longitude, sorted by distance, with address, phone, hours availability, and pickup/delivery support.

**Price:** $0.90 per 1,000 requests (flat per request - same cost regardless of results returned).
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
   * Get the live menu for a Panda Express restaurant by id: categories with item names, descriptions, and USD prices. Pair with Panda Express Locations to resolve a restaurant id.

**Price:** $0.90 per 1,000 requests (flat per request - same cost regardless of results returned).
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
   * Look up official Panda Express nutrition facts by item name: serving size, calories, fat, cholesterol, sodium, carbs, fiber, sugars, and protein.

**Price:** $6.00 per 1,000 requests (flat per request - same cost regardless of results returned).
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
