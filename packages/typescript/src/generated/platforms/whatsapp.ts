// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for WhatsApp Number Validator (whatsapp.validate).
 */
export interface WhatsappValidateInput {
  /**
   * The phone number to check, in international format.
   */
  phone: string;
}

/**
 * A WhatsApp validation result: the phone number with its registration status.
 */
export interface WhatsappValidateItem {
  /**
   * UTC epoch timestamp in seconds (Unix time) when the check ran. Multiply by 1000 for a JS Date in milliseconds.
   */
  checkedUtc?: number;
  /**
   * True when the number is registered on WhatsApp.
   */
  exists: boolean;
  /**
   * True when the number is a valid, reachable WhatsApp account.
   */
  isValid?: boolean;
  /**
   * The phone number that was checked, in international format. Populated whenever the provider has data for the entity.
   */
  phone: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of WhatsApp Number Validator (whatsapp.validate).
 */
export interface WhatsappValidateData {
  /**
   * Validation records for the phone number. Populated whenever the provider has data for the entity.
   */
  items: WhatsappValidateItem[];
}

/**
 * Typed methods for the whatsapp platform. Attached to the AnyAPI client as
 * `client.whatsapp`.
 */
export class WhatsappNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * WhatsApp Number Validator
   *
   * Check whether a phone number is registered on WhatsApp.
   *
   * Price: $0.0035 per request plus $0.001 per result (maximum $0.0045).
   *
   * @example
   * const res = await client.whatsapp.validate({ phone: "+14155552671" });
   */
  validate(
    input: WhatsappValidateInput,
    options?: RequestOptions,
  ): Promise<RunResult<WhatsappValidateData>> {
    return this._core.run("whatsapp.validate", input, options);
  }
}
