// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Contact Enrichment - Aviato (contact_enrichment.aviato).
 */
export interface ContactEnrichmentAviatoInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * LinkedIn profile URL, e.g. https://www.linkedin.com/in/satyanadella.
   */
  linkedinUrl?: string;
  /**
   * Aviato person id, as any Aviato SKU's personId output returns it.
   */
  personId?: string;
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

export interface ContactEnrichmentAviatoEmail {
  /**
   * Email address.
   */
  email: string | null;
  /**
   * work or personal.
   */
  type?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Contact Enrichment - Aviato (contact_enrichment.aviato).
 */
export interface ContactEnrichmentAviatoData {
  /**
   * Email addresses Aviato holds for the person.
   */
  emails: ContactEnrichmentAviatoEmail[] | null;
  [extra: string]: unknown;
}

/**
 * Input for Contact Enrichment - Crustdata v3 (contact_enrichment.crustdata_v3).
 */
export interface ContactEnrichmentCrustdataV3Input {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * The person's business email address.
   * Format: email.
   */
  email?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * LinkedIn profile URL, e.g. https://www.linkedin.com/in/satyanadella. Send exactly one of linkedinUrl or email.
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

export interface ContactEnrichmentCrustdataV3BusinessEmail {
  /**
   * Email address.
   */
  email: string | null;
  /**
   * Deliverability status, e.g. deliverable or unknown.
   */
  status?: string;
  [extra: string]: unknown;
}

export interface ContactEnrichmentCrustdataV3PersonalEmail {
  /**
   * Email address.
   */
  email: string | null;
  /**
   * Deliverability status, e.g. deliverable or unknown.
   */
  status?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Contact Enrichment - Crustdata v3 (contact_enrichment.crustdata_v3).
 */
export interface ContactEnrichmentCrustdataV3Data {
  /**
   * Work email addresses.
   */
  businessEmails?: ContactEnrichmentCrustdataV3BusinessEmail[] | null;
  /**
   * Confidence from 0 to 1 that the returned person is the one asked for.
   */
  matchConfidence?: number | null;
  /**
   * Crustdata person id.
   */
  personId: string | null;
  /**
   * Personal email addresses.
   */
  personalEmails?: ContactEnrichmentCrustdataV3PersonalEmail[] | null;
  /**
   * Phone numbers, as Crustdata stores them.
   */
  phoneNumbers?: string[] | null;
  [extra: string]: unknown;
}

/**
 * Typed methods for the contact_enrichment platform. Attached to the AnyAPI client as
 * `client.contactEnrichment`.
 */
export class ContactEnrichmentNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Contact Enrichment - Aviato
   *
   * Find one person's work and personal email addresses from a LinkedIn profile URL or an Aviato person id. Billed only when an email is found.
   *
   * Price: $0.096 per request.
   *
   * @example
   * const res = await client.contactEnrichment.aviato({ linkedinUrl: "https://www.linkedin.com/in/dharmesh" });
   */
  aviato(
    input: ContactEnrichmentAviatoInput,
    options?: RequestOptions,
  ): Promise<RunResult<ContactEnrichmentAviatoData>> {
    return this._core.run("contact_enrichment.aviato", input, options);
  }

  /**
   * Contact Enrichment - Crustdata v3
   *
   * Find one person's business emails, personal emails, and phone numbers from a LinkedIn profile URL or a business email, with a deliverability status on every email. Billed only when the person is found.
   *
   * Price: $0.24 per request.
   *
   * @example
   * const res = await client.contactEnrichment.crustdataV3({ linkedinUrl: "https://www.linkedin.com/in/satyanadella" });
   */
  crustdataV3(
    input: ContactEnrichmentCrustdataV3Input,
    options?: RequestOptions,
  ): Promise<RunResult<ContactEnrichmentCrustdataV3Data>> {
    return this._core.run("contact_enrichment.crustdata_v3", input, options);
  }
}
