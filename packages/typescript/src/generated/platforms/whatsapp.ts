// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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

export type WhatsappValidateData = unknown;

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
  ): Promise<BareRunResult<WhatsappValidateData>> {
    return this._core.run(
      "whatsapp.validate",
      input,
      options,
    ) as unknown as Promise<BareRunResult<WhatsappValidateData>>;
  }
}
