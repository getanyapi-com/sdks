// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Mobile Phone - AI Ark (mobile_phone.ai_ark).
 */
export interface MobilePhoneAiArkInput {
  /**
   * Person's company domain.
   */
  domain?: string;
  /**
   * Person's full name.
   */
  fullName?: string;
  /**
   * Person's LinkedIn profile URL.
   * Format: uri.
   */
  linkedinUrl?: string;
}

/**
 * The `data` payload of Mobile Phone - AI Ark (mobile_phone.ai_ark).
 */
export interface MobilePhoneAiArkData {
  /**
   * Canonical LinkedIn profile URL returned with the match.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Matched mobile phone number.
   */
  phone: string;
  [extra: string]: unknown;
}

/**
 * Input for Mobile Phone - LeadMagic (mobile_phone.leadmagic).
 */
export interface MobilePhoneLeadmagicInput {
  /**
   * Format: email.
   */
  email?: string;
  /**
   * Format: email.
   */
  personalEmail?: string;
  /**
   * Format: uri.
   */
  profileUrl?: string;
  /**
   * Format: email.
   */
  workEmail?: string;
}

/**
 * The `data` payload of Mobile Phone - LeadMagic (mobile_phone.leadmagic).
 */
export interface MobilePhoneLeadmagicData {
  message?: string;
  mobile: string;
  [extra: string]: unknown;
}

/**
 * Typed methods for the mobile_phone platform. Attached to the AnyAPI client as
 * `client.mobilePhone`.
 */
export class MobilePhoneNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Mobile Phone - AI Ark
   *
   * Find a person's mobile phone from a LinkedIn URL or from a domain and full name.
   *
   * Price: $0.084 per request.
   *
   * @example
   * const res = await client.mobilePhone.aiArk({ linkedinUrl: "https://www.linkedin.com/in/tim-zheng" });
   */
  aiArk(
    input: MobilePhoneAiArkInput,
    options?: RequestOptions,
  ): Promise<RunResult<MobilePhoneAiArkData>> {
    return this._core.run("mobile_phone.ai_ark", input, options);
  }

  /**
   * Mobile Phone - LeadMagic
   *
   * Find a person's mobile phone from a profile URL or email. No-match responses are not billed.
   *
   * Price: $0.2016 per request.
   */
  leadmagic(
    input: MobilePhoneLeadmagicInput,
    options?: RequestOptions,
  ): Promise<RunResult<MobilePhoneLeadmagicData>> {
    return this._core.run("mobile_phone.leadmagic", input, options);
  }
}
