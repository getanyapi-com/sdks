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
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Person's company domain.
   */
  domain?: string;
  /**
   * Person's full name.
   */
  fullName?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Person's LinkedIn profile URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

/**
 * The `data` payload of Mobile Phone - AI Ark (mobile_phone.ai_ark).
 */
export interface MobilePhoneAiArkData {
  /**
   * Canonical LinkedIn profile URL returned with the match.
   * Format: uri.
   */
  linkedinUrl?: string | null;
  /**
   * Matched mobile phone number.
   */
  phone: string | null;
  /**
   * Every phone group the source returned, in source order: an array of groups where each group is an array of numbers. Untyped passthrough, because the source may return more than one group and this field carries all of them unchanged rather than reshaping them. The phone and phones fields are the first number and the first group of this same structure.
   */
  phoneGroups?: unknown;
  /**
   * Every mobile phone number returned for the match, in source order. The first entry is the same value as phone.
   */
  phones?: string[] | null;
  /**
   * The source's own record identifier for this match, exposed so you can trace a result back to the record it came from.
   */
  recordId?: string | null;
  [extra: string]: unknown;
}

/**
 * Input for Mobile Phone - LeadMagic (mobile_phone.leadmagic).
 */
export interface MobilePhoneLeadmagicInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Format: email.
   */
  email?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Format: email.
   */
  personalEmail?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Format: uri.
   */
  profileUrl?: string;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
  message?: string | null;
  /**
   * Matched mobile phone number.
   */
  mobile: string | null;
  /**
   * Canonical profile URL the match was resolved against.
   * Format: uri.
   */
  profileUrl?: string | null;
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
