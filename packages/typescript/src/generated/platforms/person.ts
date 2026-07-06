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

export interface PersonSkipTraceItem {
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Skip Trace (person.skip_trace).
 */
export interface PersonSkipTraceData {
  /**
   * Skip-trace records: the matched person with known names, ages, current and past addresses, phone numbers, and email addresses.
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
