// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Email Verification - Allegrow (email_verification.allegrow).
 */
export interface EmailVerificationAllegrowInput {
  /**
   * Email address to validate.
   * Format: email.
   */
  email: string;
}

/**
 * The `data` payload of Email Verification - Allegrow (email_verification.allegrow).
 */
export interface EmailVerificationAllegrowData {
  /**
   * The Allegrow dataset's own verdict field, returned verbatim as the source spells it (safe in the captured response). It duplicates status in the same response and is not remapped into the good/risky/bad vocabulary email.verify uses.
   */
  allegrowStatus?: string;
  /**
   * Email domain.
   */
  domain?: string;
  /**
   * Validated email address.
   * Format: email.
   */
  email: string;
  /**
   * Whether the domain accepts mail for arbitrary recipients.
   */
  isCatchAll?: boolean;
  /**
   * Whether the mailbox appears to be a role account.
   */
  isRoleAccount?: boolean;
  /**
   * Detected mail provider.
   */
  mxProvider?: string;
  /**
   * MX record hosts published by the email domain.
   */
  mxRecords?: string[];
  /**
   * The source's own identifier for this validation, surfaced so a result can be traced back to the record the source created.
   */
  providerRequestId?: string;
  /**
   * Deliverability verdict; negative verdicts are successful billable results.
   * One of: safe, do_not_mail_abuse, some_risk, block_bounce_risk, dead_email, spamtrap, more_time_required, missing_email.
   */
  status:
    | "safe"
    | "do_not_mail_abuse"
    | "some_risk"
    | "block_bounce_risk"
    | "dead_email"
    | "spamtrap"
    | "more_time_required"
    | "missing_email";
  /**
   * More specific validation result when available.
   */
  subStatus?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  validatedUtc?: number;
  [extra: string]: unknown;
}

/**
 * Input for Email Verification - BounceBan (email_verification.bounceban).
 */
export interface EmailVerificationBouncebanInput {
  disableCatchallVerify?: boolean;
  /**
   * Format: email.
   */
  email: string;
  /**
   * One of: regular, deepverify.
   */
  mode?: "regular" | "deepverify";
}

/**
 * The `data` payload of Email Verification - BounceBan (email_verification.bounceban).
 */
export interface EmailVerificationBouncebanData {
  email: string;
  isCatchAll?: boolean;
  isDisposable?: boolean;
  isFree?: boolean;
  isRole?: boolean;
  mode?: string;
  mxRecords?: string[];
  reason?: string;
  /**
   * Deliverability verdict; negative verdicts are successful results.
   */
  result: string;
  score?: number;
  smtpProvider?: string;
  verifiedAt?: string;
  [extra: string]: unknown;
}

/**
 * Input for Email Verification - Icypeas (email_verification.icypeas).
 */
export interface EmailVerificationIcypeasInput {
  /**
   * Format: email.
   */
  email: string;
}

/**
 * The `data` payload of Email Verification - Icypeas (email_verification.icypeas).
 */
export interface EmailVerificationIcypeasData {
  /**
   * Confidence rating for the address, returned verbatim as the source spells it (ultra_sure in the captured response). It is not remapped to another verdict vocabulary.
   */
  certainty?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * The verified email address as the source returned it.
   * Format: email.
   */
  email?: string;
  /**
   * First name carried by the source's scan record. Present only when that record holds identity data, which the verification path usually does not.
   */
  firstname?: string;
  /**
   * Full name carried by the source's scan record. Present only when that record holds identity data, which the verification path usually does not.
   */
  fullname?: string;
  /**
   * Gender carried by the source's scan record, returned verbatim. Present only when that record holds identity data, which the verification path usually does not; the source's UNKNOWN sentinel is reported as absent.
   */
  gender?: string;
  /**
   * Last name carried by the source's scan record. Present only when that record holds identity data, which the verification path usually does not.
   */
  lastname?: string;
  /**
   * LinkedIn profile URL carried by the source's scan record. Present only when that record holds identity data, which the verification path usually does not.
   */
  linkedinUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  modifiedUtc?: number;
  /**
   * Mail provider detected from the address domain's MX records.
   */
  mxProvider?: string;
  /**
   * MX record hosts published by the address domain.
   */
  mxRecords?: string[];
  /**
   * Phone numbers carried by the source's scan record, passed through in whatever shape the source returns them. Empty in the captured response and absent when the source holds none, so this field is not type-constrained.
   */
  phones?: unknown;
  /**
   * SaaS services carried by the source's scan record, passed through in whatever shape the source returns them. Empty in the captured response and absent when the source holds none, so this field is not type-constrained.
   */
  saasServices?: unknown;
  /**
   * The source's own identifier for the scan record behind this verification, surfaced so a result can be traced back to it at the source.
   */
  scanId?: string;
  /**
   * The source's own label for the kind of scan record it created, returned verbatim (__icypeas__individual in the captured response). It is not a person's name.
   */
  scanName?: string;
  /**
   * Position the source assigned to this record within the scan it belongs to; 0 for a single-address verification.
   */
  scanOrder?: number;
  /**
   * The source's own identifier for the account that ran the scan.
   */
  scanUser?: string;
  /**
   * Scan outcome for the address, returned verbatim as the source spells it (FOUND in the captured response; the scan also reports NOT_FOUND). This is not the good/risky/bad vocabulary used by email.verify.
   */
  status: string;
  [extra: string]: unknown;
}

/**
 * Input for Email Verification - ZeroBounce (email_verification.zerobounce).
 */
export interface EmailVerificationZerobounceInput {
  /**
   * Email address to validate.
   * Format: email.
   */
  email: string;
  /**
   * IP address the address signed up from. ZeroBounce uses it to add the geographic fields to the answer.
   */
  ipAddress?: string;
}

/**
 * The `data` payload of Email Verification - ZeroBounce (email_verification.zerobounce).
 */
export interface EmailVerificationZerobounceData {
  /**
   * Local part of the address, before the @.
   */
  account?: string;
  /**
   * True when the domain accepts mail to any local part, so no address on it can be individually confirmed.
   */
  catchallDomain?: boolean;
  /**
   * City from the supplied signup IP.
   */
  city?: string;
  /**
   * Country from the supplied signup IP.
   */
  country?: string;
  /**
   * Corrected address when ZeroBounce spots a likely typo.
   */
  didYouMean?: string;
  /**
   * Domain part of the address.
   */
  domain?: string;
  /**
   * How long the domain has been registered, in days.
   */
  domainAgeDays?: number;
  /**
   * The address that was validated.
   */
  email: string;
  /**
   * First name ZeroBounce associates with the address.
   */
  firstName?: string;
  /**
   * True for a free consumer mailbox such as gmail.com.
   */
  freeEmail?: boolean;
  /**
   * Gender ZeroBounce associates with the address.
   */
  gender?: string;
  /**
   * Last name ZeroBounce associates with the address.
   */
  lastName?: string;
  /**
   * True when the domain publishes MX records.
   */
  mxFound?: boolean;
  /**
   * The domain's primary MX host.
   */
  mxRecord?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) ZeroBounce ran the check. Multiply by 1000 for a JS Date in milliseconds.
   */
  processedUtc?: number;
  /**
   * Region from the supplied signup IP.
   */
  region?: string;
  /**
   * Mailbox provider behind the domain, e.g. g-suite.
   */
  smtpProvider?: string;
  /**
   * Deliverability verdict: valid, invalid, catch-all, unknown, spamtrap, abuse or do_not_mail.
   */
  status: string;
  /**
   * Why that verdict was reached, e.g. mailbox_not_found, role_based, disposable.
   */
  subStatus?: string;
  /**
   * Postal code from the supplied signup IP.
   */
  zipcode?: string;
  [extra: string]: unknown;
}

/**
 * Input for Email Activity - ZeroBounce (email_verification.zerobounce_activity).
 */
export interface EmailVerificationZerobounceActivityInput {
  /**
   * Email address to check for activity.
   * Format: email.
   */
  email: string;
}

/**
 * The `data` payload of Email Activity - ZeroBounce (email_verification.zerobounce_activity).
 */
export interface EmailVerificationZerobounceActivityData {
  /**
   * How recently the address was active, in days. ZeroBounce buckets this rather than giving an exact figure.
   */
  activeInDays?: number;
  /**
   * The address that was checked.
   */
  email: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) ZeroBounce first saw activity from the address. Multiply by 1000 for a JS Date in milliseconds.
   */
  firstSeenUtc?: number;
  /**
   * True when ZeroBounce has seen engagement from this address.
   */
  hasActivity: boolean;
  [extra: string]: unknown;
}

/**
 * Typed methods for the email_verification platform. Attached to the AnyAPI client as
 * `client.emailVerification`.
 */
export class EmailVerificationNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Email Verification - Allegrow
   *
   * Validate an email address and return its deliverability verdict and mailbox signals.
   *
   * Price: $0.0144 per request.
   *
   * @example
   * const res = await client.emailVerification.allegrow({ email: "tim@apollo.io" });
   */
  allegrow(
    input: EmailVerificationAllegrowInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailVerificationAllegrowData>> {
    return this._core.run("email_verification.allegrow", input, options);
  }

  /**
   * Email Verification - BounceBan
   *
   * Verify an email address, including catch-all handling. Completion uses the durable Request lifecycle; a negative verdict is a successful result.
   *
   * Price: $0.0072 per request.
   *
   * @example
   * const res = await client.emailVerification.bounceban({ email: "tim@apollo.io", mode: "regular" });
   */
  bounceban(
    input: EmailVerificationBouncebanInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailVerificationBouncebanData>> {
    return this._core.run("email_verification.bounceban", input, options);
  }

  /**
   * Email Verification - Icypeas
   *
   * Verify an email address. A valid negative verdict is a successful, billable result.
   *
   * Price: $0.0024 per request.
   *
   * @example
   * const res = await client.emailVerification.icypeas({ email: "support@stripe.com" });
   */
  icypeas(
    input: EmailVerificationIcypeasInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailVerificationIcypeasData>> {
    return this._core.run("email_verification.icypeas", input, options);
  }

  /**
   * Email Verification - ZeroBounce
   *
   * Validate one email address against ZeroBounce, with the deliverability verdict, why it was reached, the mailbox provider, and any owner details ZeroBounce holds. A negative verdict is a successful, billable result.
   *
   * Price: $0.0336 per request.
   *
   * @example
   * const res = await client.emailVerification.zerobounce({ email: "tim@apollo.io" });
   */
  zerobounce(
    input: EmailVerificationZerobounceInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailVerificationZerobounceData>> {
    return this._core.run("email_verification.zerobounce", input, options);
  }

  /**
   * Email Activity - ZeroBounce
   *
   * Check whether an email address has shown recent activity across ZeroBounce's engagement network before you re-engage it. A no-activity answer is a successful, billable result.
   *
   * Price: $0.0336 per request.
   *
   * @example
   * const res = await client.emailVerification.zerobounceActivity({ email: "dshah@hubspot.com" });
   */
  zerobounceActivity(
    input: EmailVerificationZerobounceActivityInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailVerificationZerobounceActivityData>> {
    return this._core.run(
      "email_verification.zerobounce_activity",
      input,
      options,
    );
  }
}
