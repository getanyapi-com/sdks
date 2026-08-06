// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Email Finding - DropLeads (email_finding.dropleads).
 */
export interface EmailFindingDropleadsInput {
  /**
   * Company domain without a path.
   */
  companyDomain?: string;
  /**
   * Company name when the domain is unavailable.
   */
  companyName?: string;
  /**
   * Person's first name.
   */
  firstName: string;
  /**
   * Person's last name.
   */
  lastName: string;
}

/**
 * The `data` payload of Email Finding - DropLeads (email_finding.dropleads).
 */
export interface EmailFindingDropleadsData {
  /**
   * Matched company domain.
   */
  companyDomain?: string;
  /**
   * Matched company name.
   */
  companyName?: string;
  /**
   * Company size when available.
   */
  companySize?: unknown;
  /**
   * Matched email address.
   * Format: email.
   */
  email: string;
  /**
   * Matched first name.
   */
  firstName?: string;
  /**
   * Company industry when available.
   */
  industry?: string;
  /**
   * Matched last name.
   */
  lastName?: string;
  /**
   * Detected mail provider.
   */
  mxProvider?: string;
  /**
   * Selected mail exchange record.
   */
  mxRecord?: string;
  /**
   * Source validation status for the matched email.
   */
  status: string;
  [extra: string]: unknown;
}

/**
 * Input for Email Finding - Icypeas (email_finding.icypeas).
 */
export interface EmailFindingIcypeasInput {
  domainOrCompany: string;
  firstname?: string;
  lastname?: string;
}

/**
 * The `data` payload of Email Finding - Icypeas (email_finding.icypeas).
 */
export interface EmailFindingIcypeasData {
  certainty?: string;
  /**
   * Format: email.
   */
  email: string;
  firstname?: string;
  fullname?: string;
  lastname?: string;
  mxProvider?: string;
  mxRecords?: string[];
  [extra: string]: unknown;
}

/**
 * Typed methods for the email_finding platform. Attached to the AnyAPI client as
 * `client.emailFinding`.
 */
export class EmailFindingNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Email Finding - DropLeads
   *
   * Find a professional email from a person's name and company domain or company name.
   *
   * Price: $0.0312 per request.
   *
   * @example
   * const res = await client.emailFinding.dropleads({ firstName: "Tim", lastName: "Zheng", companyDomain: "apollo.io" });
   */
  dropleads(
    input: EmailFindingDropleadsInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailFindingDropleadsData>> {
    return this._core.run("email_finding.dropleads", input, options);
  }

  /**
   * Email Finding - Icypeas
   *
   * Find a professional email from a person and company through the durable Request lifecycle.
   *
   * Price: $0.0168 per request.
   *
   * @example
   * const res = await client.emailFinding.icypeas({ domainOrCompany: "apollo.io", firstname: "Tim", lastname: "Zheng" });
   */
  icypeas(
    input: EmailFindingIcypeasInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailFindingIcypeasData>> {
    return this._core.run("email_finding.icypeas", input, options);
  }
}
