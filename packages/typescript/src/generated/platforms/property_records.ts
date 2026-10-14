// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Property Records - Enformion (property_records.enformion).
 */
export interface PropertyRecordsEnformionInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * City of the property, e.g. Austin.
   */
  city: string;
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
   * US state of the property, as its two-letter code, e.g. TX.
   */
  state: string;
  /**
   * Street line of one US property address, e.g. 4510 Secure Ln. Include a unit number when there is one.
   */
  street: string;
  /**
   * Five-digit ZIP code, optionally with its four-digit extension, e.g. 78725.
   */
  zip?: string;
}

export interface PropertyRecordsEnformionRecord {
  /**
   * Assessor's parcel number (APN) the county files this parcel under.
   */
  apn?: string | null;
  /**
   * Total appraised value, in US dollars.
   */
  appraisedValue?: number | null;
  /**
   * Assessed value of the buildings and other improvements, in US dollars.
   */
  assessedImprovementValue?: number | null;
  /**
   * Assessed value of the land alone, in US dollars.
   */
  assessedLandValue?: number | null;
  /**
   * Total assessed value for property tax, in US dollars.
   */
  assessedValue?: number | null;
  /**
   * Year of the assessment.
   */
  assessedYear?: number | null;
  /**
   * Number of bathrooms. Absent when the county records none.
   */
  baths?: number | null;
  /**
   * Number of bedrooms. Absent when the county records none.
   */
  beds?: number | null;
  /**
   * City of the property.
   */
  city?: string | null;
  /**
   * County the parcel is recorded in.
   */
  county?: string | null;
  /**
   * Owners on the current county record.
   */
  currentOwners?: PropertyRecordsEnformionCurrentOwner[] | null;
  /**
   * Five-digit FIPS code of the county. Pair it with apn to identify the parcel nationally.
   */
  fipsCode?: string | null;
  /**
   * Foreclosure stage code, when the parcel is in foreclosure.
   */
  foreclosureStage?: string | null;
  /**
   * Land use as the county describes it, e.g. CONDOMINIUM or LABORATORY.
   */
  landUse?: string | null;
  /**
   * Price of the most recent recorded sale, in US dollars.
   */
  lastSalePrice?: number | null;
  /**
   * Date of the most recent recorded sale, as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  lastSaleUtc?: number | null;
  /**
   * Latitude of the parcel.
   */
  latitude?: number | null;
  /**
   * Living area in square feet. Absent when the county records none.
   */
  livingAreaSqft?: number | null;
  /**
   * Longitude of the parcel.
   */
  longitude?: number | null;
  /**
   * Lot size as the county records it, usually in square feet.
   */
  lotSize?: number | null;
  /**
   * Market value of the buildings and other improvements, in US dollars.
   */
  marketImprovementValue?: number | null;
  /**
   * Market value of the land alone, in US dollars.
   */
  marketLandValue?: number | null;
  /**
   * Total market value the county records, in US dollars.
   */
  marketValue?: number | null;
  /**
   * Where the current owner receives mail, when the county records it.
   */
  ownerMailingAddress?: string | null;
  /**
   * True when the owner lives at the property.
   */
  ownerOccupied?: boolean | null;
  /**
   * Earlier owners of the parcel, most recent first.
   */
  previousOwners?: PropertyRecordsEnformionPreviousOwner[] | null;
  /**
   * Property type, e.g. SINGLE FAMILY RESIDENCE, INDUSTRIAL, or EXEMPT.
   */
  propertyType?: string | null;
  /**
   * Two-letter US state code.
   */
  state?: string | null;
  /**
   * Street line of the property address, e.g. 4510 Secure LN.
   */
  street: string | null;
  /**
   * The county tax account number for the parcel.
   */
  taxAccountNumber?: string | null;
  /**
   * Annual property tax billed, in US dollars.
   */
  taxAmount?: number | null;
  /**
   * Year the tax amount was billed for.
   */
  taxYear?: number | null;
  /**
   * Year the main building was built.
   */
  yearBuilt?: number | null;
  /**
   * Five-digit ZIP code.
   */
  zip?: string | null;
  /**
   * Zoning code or zoning description on the county record.
   */
  zoning?: string | null;
  [extra: string]: unknown;
}

export interface PropertyRecordsEnformionCurrentOwner {
  /**
   * True when the owner is a company or other organization rather than a person.
   */
  isBusiness?: boolean;
  /**
   * Owner name, a person or a business.
   */
  name: string | null;
  /**
   * Date the ownership record was captured, as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. It is not necessarily the purchase date; see lastSaleUtc.
   */
  recordedUtc?: number;
  [extra: string]: unknown;
}

export interface PropertyRecordsEnformionPreviousOwner {
  /**
   * Owner name, a person or a business.
   */
  name: string | null;
  /**
   * Date the ownership record was captured, as a UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  recordedUtc?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Property Records - Enformion (property_records.enformion).
 */
export interface PropertyRecordsEnformionData {
  /**
   * Every parcel on record at the address. A campus or multi-parcel address returns several.
   */
  records: PropertyRecordsEnformionRecord[];
}

/**
 * Typed methods for the property_records platform. Attached to the AnyAPI client as
 * `client.propertyRecords`.
 */
export class PropertyRecordsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Property Records - Enformion
   *
   * Look up the public property records for one US address: current and previous owners, parcel number (APN), last sale, assessed and market values, property tax, beds, baths, living area, lot size, year built, land use, and zoning. One address can match several parcels, and every match is returned. Billed only when a record is found.
   *
   * Price: $0.1536 per request.
   *
   * @example
   * const res = await client.propertyRecords.enformion({ city: "Austin", state: "TX", street: "4510 Secure Ln", zip: "78725" });
   */
  enformion(
    input: PropertyRecordsEnformionInput,
    options?: RequestOptions,
  ): Promise<RunResult<PropertyRecordsEnformionData>> {
    return this._core.run("property_records.enformion", input, options);
  }
}
