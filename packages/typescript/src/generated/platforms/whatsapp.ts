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

export interface WhatsappValidateItem {
  phone: string;
  status: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of WhatsApp Number Validator (whatsapp.validate).
 */
export interface WhatsappValidateData {
  /**
   * Validation records: the phone number with its WhatsApp registration status.
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
   * Check whether a phone number is registered on WhatsApp, with transparent per-request USD pricing.
   *
   * Price: $0.0035 per request plus $0.001 per result.
   *
   * @example
   * const res = await client.whatsapp.validate({"phone":"+14155552671"});
   */
  validate(
    input: WhatsappValidateInput,
    options?: RequestOptions,
  ): Promise<RunResult<WhatsappValidateData>> {
    return this._core.run("whatsapp.validate", input, options);
  }
}
