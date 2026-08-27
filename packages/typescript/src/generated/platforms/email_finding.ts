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
 * Input for Email Finding - Hunter Email Count (email_finding.hunter_count).
 */
export interface EmailFindingHunterCountInput {
  /**
   * Company domain without a scheme or path, e.g. stripe.com.
   */
  domain: string;
  /**
   * Count only personal mailboxes belonging to a named person, or only generic ones such as info@ and support@.
   * One of: personal, generic.
   */
  type?: "personal" | "generic";
}

/**
 * The `data` payload of Email Finding - Hunter Email Count (email_finding.hunter_count).
 */
export interface EmailFindingHunterCountData {
  /**
   * Contacts per department.
   */
  departmentCounts?: {
    /**
     * Contacts in the communication department.
     * Range: minimum 0.
     */
    communication?: number;
    /**
     * Contacts in the design department.
     * Range: minimum 0.
     */
    design?: number;
    /**
     * Contacts in the education department.
     * Range: minimum 0.
     */
    education?: number;
    /**
     * Contacts in the executive department.
     * Range: minimum 0.
     */
    executive?: number;
    /**
     * Contacts in the finance department.
     * Range: minimum 0.
     */
    finance?: number;
    /**
     * Contacts in the health department.
     * Range: minimum 0.
     */
    health?: number;
    /**
     * Contacts in the HR department.
     * Range: minimum 0.
     */
    hr?: number;
    /**
     * Contacts in the IT department.
     * Range: minimum 0.
     */
    it?: number;
    /**
     * Contacts in the legal department.
     * Range: minimum 0.
     */
    legal?: number;
    /**
     * Contacts in the management department.
     * Range: minimum 0.
     */
    management?: number;
    /**
     * Contacts in the marketing department.
     * Range: minimum 0.
     */
    marketing?: number;
    /**
     * Contacts in the operations department.
     * Range: minimum 0.
     */
    operations?: number;
    /**
     * Contacts in the sales department.
     * Range: minimum 0.
     */
    sales?: number;
    /**
     * Contacts in the support department.
     * Range: minimum 0.
     */
    support?: number;
  };
  /**
   * The company domain the counts describe.
   */
  domain: string;
  /**
   * Contacts that are a shared inbox such as info@ or support@.
   * Range: minimum 0.
   */
  genericEmails?: number;
  /**
   * Contacts that are a named person's mailbox.
   * Range: minimum 0.
   */
  personalEmails?: number;
  /**
   * Contacts per seniority level.
   */
  seniorityCounts?: {
    /**
     * Contacts at executive level.
     * Range: minimum 0.
     */
    executive?: number;
    /**
     * Contacts at junior level.
     * Range: minimum 0.
     */
    junior?: number;
    /**
     * Contacts at senior level.
     * Range: minimum 0.
     */
    senior?: number;
  };
  /**
   * Contacts known for the domain.
   * Range: minimum 0.
   */
  total: number;
  [extra: string]: unknown;
}

/**
 * Input for Email Finding - Hunter Domain Search (email_finding.hunter_domain).
 */
export interface EmailFindingHunterDomainInput {
  /**
   * Restrict to one department.
   * One of: executive, it, finance, management, sales, legal, support, hr, marketing, communication, education, design, health, operations.
   */
  department?:
    | "executive"
    | "it"
    | "finance"
    | "management"
    | "sales"
    | "legal"
    | "support"
    | "hr"
    | "marketing"
    | "communication"
    | "education"
    | "design"
    | "health"
    | "operations";
  /**
   * Company domain without a scheme or path, e.g. stripe.com.
   */
  domain: string;
  /**
   * One job-title keyword to match, e.g. editor. A single keyword only: a comma-separated list is not supported and only its last entry would apply.
   */
  jobTitle?: string;
  /**
   * Maximum contacts to return in this response. Every returned contact is billed, so this is the cost control.
   * Range: minimum 1, maximum 100.
   * Default: 3.
   */
  limit?: number;
  /**
   * Number of contacts to skip before this page begins.
   * Range: minimum 0.
   */
  offset?: number;
  /**
   * Only return contacts that carry this field.
   * One of: full_name, position, phone_number.
   */
  requiredField?: "full_name" | "position" | "phone_number";
  /**
   * Restrict to one seniority level.
   * One of: junior, senior, executive.
   */
  seniority?: "junior" | "senior" | "executive";
  /**
   * Restrict to personal mailboxes belonging to a named person, or to generic ones such as info@ and support@.
   * One of: personal, generic.
   */
  type?: "personal" | "generic";
}

export interface EmailFindingHunterDomainEmail {
  /**
   * Upstream confidence in the address, 0 to 100.
   * Range: minimum 0, maximum 100.
   */
  confidence?: number;
  /**
   * True when the contact is judged a decision maker.
   */
  decisionMaker?: boolean;
  /**
   * Department the contact works in.
   */
  department?: string;
  /**
   * The work email address.
   */
  email: string;
  /**
   * Contact's first name.
   */
  firstName?: string;
  /**
   * Contact's last name.
   */
  lastName?: string;
  /**
   * Contact's LinkedIn profile URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Contact's phone number.
   */
  phone?: string;
  /**
   * Contact's job title.
   */
  position?: string;
  /**
   * Seniority level: junior, senior or executive.
   */
  seniority?: string;
  /**
   * Public pages the address was found on.
   */
  sources?: EmailFindingHunterDomainSource[];
  /**
   * personal for a named person's mailbox, generic for a shared inbox.
   */
  type?: string;
  /**
   * Deliverability verdict recorded for the address.
   */
  verificationStatus?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  verifiedUtc?: number;
  [extra: string]: unknown;
}

export interface EmailFindingHunterDomainSource {
  /**
   * Domain of the page the address was found on.
   */
  domain: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  extractedUtc?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  lastSeenUtc?: number;
  /**
   * True when the address was still present at the last check.
   */
  stillOnPage?: boolean;
  /**
   * URL of the page the address was found on.
   * Format: uri.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Email Finding - Hunter Domain Search (email_finding.hunter_domain).
 */
export interface EmailFindingHunterDomainData {
  /**
   * True when the mail server accepts any address at this domain, so an address cannot be verified by delivery.
   */
  acceptAll?: boolean;
  /**
   * True when the domain belongs to a disposable-email service.
   */
  disposable?: boolean;
  /**
   * The company domain the contacts belong to.
   */
  domain: string;
  /**
   * Address pattern the company uses, e.g. {first}{last}.
   */
  emailPattern?: string;
  /**
   * Contacts returned by this page, one per billed result.
   */
  emails: EmailFindingHunterDomainEmail[];
  /**
   * Company name registered against the domain.
   */
  organization?: string;
  /**
   * Contacts matching the filters across the whole domain, of which this response returns at most limit.
   * Range: minimum 0.
   */
  totalCount: number;
  /**
   * True when the domain is a webmail provider rather than a company.
   */
  webmail?: boolean;
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
   * Email Finding - Hunter Email Count
   *
   * Count how many contacts a company domain has, split by personal and generic mailboxes and broken down by department and seniority. Scope a domain for $1 per 1,000 requests before paying per contact.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.emailFinding.hunterCount({ domain: "stripe.com" });
   */
  hunterCount(
    input: EmailFindingHunterCountInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailFindingHunterCountData>> {
    return this._core.run("email_finding.hunter_count", input, options);
  }

  /**
   * Email Finding - Hunter Domain Search
   *
   * Find named contacts and their work email addresses at a company domain, filtered by job title, seniority or department. Priced per returned contact, so limit is the cost control.
   *
   * Price: $0 per request plus $0.036 per result (maximum $3.6).
   *
   * @example
   * const res = await client.emailFinding.hunterDomain({ domain: "stripe.com", limit: 2, type: "personal" });
   */
  hunterDomain(
    input: EmailFindingHunterDomainInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailFindingHunterDomainData>> {
    return this._core.run("email_finding.hunter_domain", input, options);
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
