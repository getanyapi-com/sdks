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
  /**
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
  /**
   * Every phone group the source returned, in source order: an array of groups where each group is an array of numbers. Untyped passthrough, because the source may return more than one group and this field carries all of them unchanged rather than reshaping them. The phone and phones fields are the first number and the first group of this same structure.
   */
  phoneGroups?: unknown;
  /**
   * Every mobile phone number returned for the match, in source order. The first entry is the same value as phone.
   */
  phones?: string[];
  /**
   * The source's own record identifier for this match, exposed so you can trace a result back to the record it came from.
   */
  recordId?: string;
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
   * Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
  /**
   * Source's own description of the match outcome.
   */
  message?: string;
  /**
   * Matched mobile phone number.
   */
  mobile: string;
  /**
   * Canonical profile URL the match was resolved against.
   * Format: uri.
   */
  profileUrl?: string;
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
   * Find a person's mobile phone from a profile URL or email. A no-match answer is a successful, billable result.
   *
   * Price: $0.2016 per request.
   *
   * @example
   * const res = await client.mobilePhone.leadmagic({ profileUrl: "https://www.linkedin.com/in/tim-zheng" });
   */
  leadmagic(
    input: MobilePhoneLeadmagicInput,
    options?: RequestOptions,
  ): Promise<RunResult<MobilePhoneLeadmagicData>> {
    return this._core.run("mobile_phone.leadmagic", input, options);
  }
}
