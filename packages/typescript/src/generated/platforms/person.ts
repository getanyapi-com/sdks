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
   * Email address to reverse-trace (e.g. john.smith@example.com).
   */
  email?: string;
  /**
   * Full name of the person to trace. Provide at least one of name, address, phone, or email.
   */
  name?: string;
  /**
   * Phone number to reverse-trace (e.g. 415-555-2671).
   */
  phone?: string;
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

**Price:** billed per result - $0.00 per 1,000 requests base + $7.00 per 1,000 results, capped at $7.00 per 1,000 requests.
   *
   * Price: $0.007 per result.
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
