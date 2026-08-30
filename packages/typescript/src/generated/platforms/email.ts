// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Email Finder (email.find).
 */
export interface EmailFindInput {
  /**
   * The person to find an email for, e.g. {"firstName": "Jane", "surname": "Doe", "domain": "acme.com"} (domain also accepts a company name).
   */
  person?: {
    /**
     * Company domain (e.g. acme.com) or company name (e.g. Acme Inc), resolved automatically.
     */
    domain: string;
    /**
     * The person's first name (e.g. Jane).
     */
    firstName: string;
    /**
     * The person's last name (e.g. Doe).
     */
    surname: string;
  };
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface EmailFindItem {
  /**
   * The discovered work email address. Populated whenever the provider has data for the entity.
   */
  email: string;
  /**
   * Lookup status. Always "found": a lookup that finds nothing returns found:false with a null data instead of an item, and is not charged. Populated whenever the provider has data for the entity.
   */
  status: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Email Finder (email.find).
 */
export interface EmailFindData {
  /**
   * Email lookup records: the discovered email address, verification status, and the matched person and company details. Populated whenever the provider has data for the entity.
   */
  items: EmailFindItem[];
}

/**
 * Input for Email Verifier (email.verify).
 */
export interface EmailVerifyInput {
  /**
   * The email address to verify (e.g. jane.doe@acme.com). Exactly one @, a dotted domain, no whitespace or angle brackets. Addresses on reserved, never-deliverable TLDs (.invalid, .test, .example, .localhost, .local, .internal, .blink) and HTML/JSON escape artifacts (a u003e prefix) are rejected locally with no charge.
   */
  email: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface EmailVerifyItem {
  /**
   * Domain accepts all addresses.
   */
  catchAll?: boolean;
  disposable?: boolean;
  domain?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  email: string;
  /**
   * Free email provider.
   */
  free?: boolean;
  reason?: string;
  /**
   * Role-based address (e.g. info@).
   */
  role?: boolean;
  /**
   * Confidence score (0-100).
   */
  score?: number;
  /**
   * Deliverability verdict (e.g. valid, risky, invalid). Populated whenever the provider has data for the entity.
   */
  status: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Email Verifier (email.verify).
 */
export interface EmailVerifyData {
  /**
   * Verification records: the email address with its deliverability verdict and the domain, mailbox, and reputation signals behind it. A record is returned for every syntactically valid address, including ones the verdict marks undeliverable. Populated whenever the provider has data for the entity.
   */
  items: EmailVerifyItem[];
}

/**
 * Typed methods for the email platform. Attached to the AnyAPI client as
 * `client.email`.
 */
export class EmailNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Email Finder
   *
   * Find a person's work email address from their name and company domain.
   *
   * Price: $0.0154 per request.
   *
   * @example
   * const res = await client.email.find({ person: { domain: "google.com", firstName: "Damien", surname: "Neil" } });
   */
  find(
    input: EmailFindInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailFindData>> {
    return this._core.run("email.find", input, options);
  }

  /**
   * Email Verifier
   *
   * Verify an email address for deliverability: a status verdict (valid, risky, or invalid) with domain, mailbox, catch-all, disposable, and role signals plus a confidence score. Malformed addresses are rejected by the input schema with no charge; every syntactically valid address returns a billed verdict, including undeliverable ones.
   *
   * Price: $0 per request plus $0.00088 per result (maximum $0.00088).
   *
   * @example
   * const res = await client.email.verify({ email: "patrick@stripe.com" });
   */
  verify(
    input: EmailVerifyInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailVerifyData>> {
    return this._core.run("email.verify", input, options);
  }
}
