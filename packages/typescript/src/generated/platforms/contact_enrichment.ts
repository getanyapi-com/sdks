// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Contact Enrichment - Crustdata v3 (contact_enrichment.crustdata_v3).
 */
export interface ContactEnrichmentCrustdataV3Input {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * The person's business email address.
   * Format: email.
   */
  email?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface ContactEnrichmentCrustdataV3BusinessEmail {
  /**
   * Email address.
   */
  email: string;
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
  email: string;
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
  businessEmails?: ContactEnrichmentCrustdataV3BusinessEmail[];
  /**
   * Confidence from 0 to 1 that the returned person is the one asked for.
   */
  matchConfidence?: number;
  /**
   * Crustdata person id.
   */
  personId: string;
  /**
   * Personal email addresses.
   */
  personalEmails?: ContactEnrichmentCrustdataV3PersonalEmail[];
  /**
   * Phone numbers, as Crustdata stores them.
   */
  phoneNumbers?: string[];
  [extra: string]: unknown;
}

/**
 * Typed methods for the contact_enrichment platform. Attached to the AnyAPI client as
 * `client.contactEnrichment`.
 */
export class ContactEnrichmentNamespace {
  constructor(private readonly _core: ClientCore) {}

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
