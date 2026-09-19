// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Nextdoor Business (nextdoor.business).
 */
export interface NextdoorBusinessInput {
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
   * Maximum number of records to return. A business page resolves to one record, so this is always 1.
   * Range: minimum 1, maximum 1.
   */
  limit?: number;
  /**
   * Nextdoor market the page belongs to: "us" (nextdoor.com), "gb" (nextdoor.co.uk), or "ca" (ca.nextdoor.com). Defaults to "us".
   * One of: us, gb, ca.
   */
  market?: "us" | "gb" | "ca";
  /**
   * Slug of the Nextdoor business page, the last path segment of its /pages/ URL, e.g. "radiant-plumbing-air-conditioning-austin-tx".
   */
  pageSlug: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface NextdoorBusinessItem {
  /**
   * Full street address on one line; absent when the business hides or omits it.
   */
  address?: string;
  /**
   * Street line of the address; absent when the business hides or omits it.
   */
  addressLine?: string;
  /**
   * Unit, suite, or floor; absent when the address has none.
   */
  addressUnit?: string;
  /**
   * Nextdoor trade categories the business is listed under, e.g. ["Plumber", "Air conditioning service"].
   */
  categories?: string[];
  /**
   * City or locality; absent when the business hides or omits its address.
   */
  city?: string;
  /**
   * ISO 3166-1 alpha-2 country code, e.g. "US".
   */
  country?: string;
  /**
   * Business description written by the owner; absent when the page has none.
   */
  description?: string;
  /**
   * Primary contact email; absent when the page lists none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  email?: string;
  /**
   * Number of neighbours who have faved (recommended) the business; 0 when none have.
   */
  faveCount?: number;
  /**
   * True when the business chose to hide its street address, which is why the address fields can be absent.
   */
  hideAddress?: boolean;
  /**
   * Stable Nextdoor business id, e.g. "business_2345302". Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Latitude of the business address; absent when Nextdoor publishes no coordinates.
   */
  latitude?: number;
  /**
   * Trade or contractor licence number the business published; absent when it published none.
   */
  licenseId?: string;
  /**
   * Operating status Nextdoor reports, e.g. "OPEN" or "PERMANENTLY_CLOSED"; empty when unreported.
   */
  locationStatus?: string;
  /**
   * Longitude of the business address; absent when Nextdoor publishes no coordinates.
   */
  longitude?: number;
  /**
   * Business name as listed on Nextdoor. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Primary phone number in E.164 form, e.g. "+15122639988"; absent when the page lists none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  phone?: string;
  /**
   * Postal or ZIP code; absent when the business hides or omits its address.
   */
  postalCode?: string;
  /**
   * Page slug for this business. Pass it to nextdoor.business to refetch this record on its own. Populated whenever the provider has data for the entity.
   */
  slug: string;
  /**
   * State, province, or region code, e.g. "TX"; absent when the business hides or omits its address.
   */
  state?: string;
  /**
   * Canonical Nextdoor business page URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * Business website URL; absent when the page lists none.
   * Format: uri.
   */
  website?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Nextdoor Business (nextdoor.business).
 */
export interface NextdoorBusinessData {
  /**
   * The Nextdoor business record for the requested page slug. Populated whenever the provider has data for the entity.
   */
  items: NextdoorBusinessItem[];
}

/**
 * Input for Nextdoor Business Search (nextdoor.search).
 */
export interface NextdoorSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Nextdoor city slug, lowercase, with the city and its state or region joined by two hyphens, e.g. "austin--tx" or "york--england".
   */
  city: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of businesses to return (1-20, default 20). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 20.
   */
  limit?: number;
  /**
   * Nextdoor market the city belongs to: "us" (nextdoor.com), "gb" (nextdoor.co.uk), or "ca" (ca.nextdoor.com). Defaults to "us".
   * One of: us, gb, ca.
   */
  market?: "us" | "gb" | "ca";
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Business category to look for in that city, e.g. "plumber", "bakery", "electrician".
   */
  query: string;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface NextdoorSearchItem {
  /**
   * Full street address on one line; absent when the business hides or omits it.
   */
  address?: string;
  /**
   * Street line of the address; absent when the business hides or omits it.
   */
  addressLine?: string;
  /**
   * Unit, suite, or floor; absent when the address has none.
   */
  addressUnit?: string;
  /**
   * Nextdoor trade categories the business is listed under, e.g. ["Plumber", "Air conditioning service"].
   */
  categories?: string[];
  /**
   * City or locality; absent when the business hides or omits its address.
   */
  city?: string;
  /**
   * ISO 3166-1 alpha-2 country code, e.g. "US".
   */
  country?: string;
  /**
   * Business description written by the owner; absent when the page has none.
   */
  description?: string;
  /**
   * Primary contact email; absent when the page lists none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  email?: string;
  /**
   * Number of neighbours who have faved (recommended) the business; 0 when none have.
   */
  faveCount?: number;
  /**
   * True when the business chose to hide its street address, which is why the address fields can be absent.
   */
  hideAddress?: boolean;
  /**
   * Stable Nextdoor business id, e.g. "business_2345302". Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Latitude of the business address; absent when Nextdoor publishes no coordinates.
   */
  latitude?: number;
  /**
   * Trade or contractor licence number the business published; absent when it published none.
   */
  licenseId?: string;
  /**
   * Operating status Nextdoor reports, e.g. "OPEN" or "PERMANENTLY_CLOSED"; empty when unreported.
   */
  locationStatus?: string;
  /**
   * Longitude of the business address; absent when Nextdoor publishes no coordinates.
   */
  longitude?: number;
  /**
   * Business name as listed on Nextdoor. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Primary phone number in E.164 form, e.g. "+15122639988"; absent when the page lists none. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  phone?: string;
  /**
   * Postal or ZIP code; absent when the business hides or omits its address.
   */
  postalCode?: string;
  /**
   * Page slug for this business. Pass it to nextdoor.business to refetch this record on its own. Populated whenever the provider has data for the entity.
   */
  slug: string;
  /**
   * State, province, or region code, e.g. "TX"; absent when the business hides or omits its address.
   */
  state?: string;
  /**
   * Canonical Nextdoor business page URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  /**
   * Business website URL; absent when the page lists none.
   * Format: uri.
   */
  website?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Nextdoor Business Search (nextdoor.search).
 */
export interface NextdoorSearchData {
  /**
   * Nextdoor business records matching the city and category, one per business. Populated whenever the provider has data for the entity.
   */
  items: NextdoorSearchItem[];
}

/**
 * Typed methods for the nextdoor platform. Attached to the AnyAPI client as
 * `client.nextdoor`.
 */
export class NextdoorNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Nextdoor Business
   *
   * Fetch one Nextdoor business page by its slug, with phone, email, website, and street address.
   *
   * Price: $0.0055 per request plus $0.00286 per result (maximum $0.00836).
   *
   * @example
   * const res = await client.nextdoor.business({ pageSlug: "radiant-plumbing-air-conditioning-austin-tx" });
   */
  business(
    input: NextdoorBusinessInput,
    options?: RequestOptions,
  ): Promise<RunResult<NextdoorBusinessData>> {
    return this._core.run("nextdoor.business", input, options);
  }

  /**
   * Nextdoor Business Search
   *
   * Find local businesses listed on Nextdoor by city and trade category, with phone, email, website, and street address.
   *
   * Price: $0.0055 per request plus $0.00286 per result (maximum $0.0627).
   *
   * @example
   * const res = await client.nextdoor.search({ city: "austin--tx", query: "plumber", limit: 5 });
   */
  search(
    input: NextdoorSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<NextdoorSearchData>> {
    return this._core.run("nextdoor.search", input, options);
  }
}
