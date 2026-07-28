// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
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
}

export type EmailFindData = unknown;

/**
 * Input for Email Verifier (email.verify).
 */
export interface EmailVerifyInput {
  /**
   * The email address to verify (e.g. jane.doe@acme.com). Exactly one @, a dotted domain, no whitespace or angle brackets. Addresses on reserved, never-deliverable TLDs (.invalid, .test, .example, .localhost, .local, .internal, .blink) and HTML/JSON escape artifacts (a u003e prefix) are rejected locally with no charge.
   */
  email: string;
}

export type EmailVerifyData = unknown;

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
   * Price: $0.005 per request plus $0.008 per result (maximum $0.013).
   *
   * @example
   * const res = await client.email.find({ person: { domain: "stripe.com", firstName: "Patrick", surname: "Collison" } });
   */
  find(
    input: EmailFindInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<EmailFindData>> {
    return this._core.run("email.find", input, options) as unknown as Promise<
      BareRunResult<EmailFindData>
    >;
  }

  /**
   * Email Verifier
   *
   * Verify an email address for deliverability: a status verdict (valid, risky, or invalid) with domain, mailbox, catch-all, disposable, and role signals plus a confidence score. Malformed addresses are rejected by the input schema with no charge; every syntactically valid address returns a billed verdict, including undeliverable ones.
   *
   * Price: $0 per request plus $0.0008 per result (maximum $0.0008).
   *
   * @example
   * const res = await client.email.verify({ email: "patrick@stripe.com" });
   */
  verify(
    input: EmailVerifyInput,
    options?: RequestOptions,
  ): Promise<BareRunResult<EmailVerifyData>> {
    return this._core.run("email.verify", input, options) as unknown as Promise<
      BareRunResult<EmailVerifyData>
    >;
  }
}
