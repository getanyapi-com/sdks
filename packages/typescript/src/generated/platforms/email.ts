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
}

export interface EmailFindItem {
  domain?: string;
  /**
   * Discovered email address, or empty when none was found.
   * Populated whenever the provider returns data.
   */
  email: string;
  firstName?: string;
  isDeliverable?: boolean;
  lastName?: string;
  /**
   * Lookup status (e.g. found, not_found).
   * Populated whenever the provider returns data.
   */
  status: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Email Finder (email.find).
 */
export interface EmailFindData {
  /**
   * Email lookup records: the discovered email address, verification status, and the matched person and company details.
   * Populated whenever the provider returns data.
   */
  items: EmailFindItem[];
}

/**
 * Input for Email Verifier (email.verify).
 */
export interface EmailVerifyInput {
  /**
   * The email address to verify (e.g. jane.doe@acme.com).
   */
  email: string;
}

export interface EmailVerifyItem {
  /**
   * Domain accepts all addresses.
   */
  catchAll?: boolean;
  disposable?: boolean;
  domain?: string;
  /**
   * Populated whenever the provider returns data.
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
   * Deliverability verdict (e.g. valid, risky, invalid).
   * Populated whenever the provider returns data.
   */
  status: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Email Verifier (email.verify).
 */
export interface EmailVerifyData {
  /**
   * Verification records: the email address with its deliverability verdict and syntax, domain, and mailbox check details.
   * Populated whenever the provider returns data.
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
   * Find a person's work email address from their name and company domain, with transparent per-request USD pricing.
   *
   * Price: $0.005 per request plus $0.008 per result.
   *
   * @example
   * const res = await client.email.find({"person":{"domain":"stripe.com","firstName":"Patrick","surname":"Collison"}});
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
   * Verify any email address for deliverability - syntax, domain, and mailbox checks in one normalized response, priced per request in USD.
   *
   * Price: $0 per request plus $0.0008 per result.
   *
   * @example
   * const res = await client.email.verify({"email":"patrick@stripe.com"});
   */
  verify(
    input: EmailVerifyInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailVerifyData>> {
    return this._core.run("email.verify", input, options);
  }
}
