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
  status: string;
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
   */
  icypeas(
    input: EmailVerificationIcypeasInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailVerificationIcypeasData>> {
    return this._core.run("email_verification.icypeas", input, options);
  }
}
