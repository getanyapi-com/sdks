// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Skip Trace (person.skip_trace).
 */
export interface PersonSkipTraceInput {
  /**
   * Street address with city/state/zip.
   */
  address?: string;
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Email address to reverse-trace (e.g. john.smith@example.com).
   */
  email?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Full name of the person to trace. Provide at least one of name, address, phone, or email.
   */
  name?: string;
  /**
   * Phone number to reverse-trace (e.g. 415-555-2671).
   */
  phone?: string;
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

/**
 * A skip-trace match: name, age, current and past addresses, phone numbers, email addresses, relatives, and associates.
 */
export interface PersonSkipTraceItem {
  /**
   * Current city.
   */
  addressLocality?: string;
  /**
   * Current state.
   */
  addressRegion?: string;
  /**
   * Reported age.
   */
  age?: string;
  /**
   * Reported associates. Each entry is an open object with name and age.
   */
  associates?: PersonSkipTraceAssociate[];
  /**
   * Reported birth month and year.
   */
  born?: string;
  /**
   * Current county.
   */
  county?: string;
  /**
   * Up to five known email addresses, most-recent first. Absent slots are empty strings.
   */
  emails?: {
    email1?: string;
    email2?: string;
    email3?: string;
    email4?: string;
    email5?: string;
  };
  /**
   * First name of the matched person.
   */
  firstName?: string;
  /**
   * Last name of the matched person.
   */
  lastName?: string;
  /**
   * Current city and state (e.g. Brook Park, OH).
   */
  location?: string;
  /**
   * Up to five known phone numbers with line type, most-recent first. Absent slots are empty strings.
   */
  phones?: {
    phone1?: string;
    phone1Type?: string;
    phone2?: string;
    phone2Type?: string;
    phone3?: string;
    phone3Type?: string;
    phone4?: string;
    phone4Type?: string;
    phone5?: string;
    phone5Type?: string;
  };
  /**
   * Current ZIP code.
   */
  postalCode?: string;
  /**
   * Prior addresses. Each entry is an open object with street, locality, region, postal code, county, and timespan.
   */
  previousAddresses?: PersonSkipTracePreviousAddresse[];
  /**
   * Reported relatives. Each entry is an open object with name and age.
   */
  relatives?: PersonSkipTraceRelative[];
  /**
   * Current street address.
   */
  streetAddress?: string;
  /**
   * Source record URL for the matched person. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

export interface PersonSkipTraceAssociate {
  [extra: string]: unknown;
}

export interface PersonSkipTracePreviousAddresse {
  [extra: string]: unknown;
}

export interface PersonSkipTraceRelative {
  [extra: string]: unknown;
}

/**
 * The `data` payload of Skip Trace (person.skip_trace).
 */
export interface PersonSkipTraceData {
  /**
   * Matched person records with identity, address, and contact details. Populated whenever the provider has data for the entity.
   */
  items: PersonSkipTraceItem[];
}

/**
 * Typed methods for the person platform. Attached to the AnyAPI client as
 * `client.person`.
 */
export class PersonNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Skip Trace
   *
   * Skip-trace a person in the US by name, address, phone, or email and get back identity, address, and contact records in normalized JSON.
   *
   * Price: $0 per request plus $0.0077 per result (maximum $0.0077).
   *
   * @example
   * const res = await client.person.skipTrace({ address: "123 Main St, Austin, TX 78701", name: "John Smith" });
   */
  skipTrace(
    input: PersonSkipTraceInput,
    options?: RequestOptions,
  ): Promise<RunResult<PersonSkipTraceData>> {
    return this._core.run("person.skip_trace", input, options);
  }
}
