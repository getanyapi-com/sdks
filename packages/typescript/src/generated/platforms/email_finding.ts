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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Person's last name.
   */
  lastName: string;
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Company domain without a scheme or path, e.g. stripe.com.
   */
  domain: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
     * Contacts in the administrative department.
     * Range: minimum 0.
     */
    administrative?: number;
    /**
     * Contacts in the communication department.
     * Range: minimum 0.
     */
    communication?: number;
    /**
     * Contacts in the consulting department.
     * Range: minimum 0.
     */
    consulting?: number;
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
     * Contacts Hunter files under its separate operation department.
     * Range: minimum 0.
     */
    operation?: number;
    /**
     * Contacts in the operations department.
     * Range: minimum 0.
     */
    operations?: number;
    /**
     * Contacts in the procurement department.
     * Range: minimum 0.
     */
    procurement?: number;
    /**
     * Contacts in the product department.
     * Range: minimum 0.
     */
    product?: number;
    /**
     * Contacts in the research department.
     * Range: minimum 0.
     */
    research?: number;
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
  /**
   * Mailbox type the counts are limited to when the request filtered by type: personal or generic. Absent when the counts cover both.
   */
  type?: string;
  [extra: string]: unknown;
}

/**
 * Input for Email Finding - Hunter Domain Search (email_finding.hunter_domain).
 */
export interface EmailFindingHunterDomainInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
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
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Contact's job title exactly as written on the source page, before it was cleaned up.
   */
  positionRaw?: string;
  /**
   * Seniority level: junior, senior or executive.
   */
  seniority?: string;
  /**
   * How the address was obtained: found when it was seen on a public page, generated when it was inferred from the company's address pattern.
   */
  sourceType?: string;
  /**
   * Public pages the address was found on.
   */
  sources?: EmailFindingHunterDomainSource[];
  /**
   * Contact's Twitter/X handle or profile URL, exactly as the source recorded it.
   */
  twitter?: string;
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
   * Other domains Hunter has linked to this company. Deliberately untyped: the field is empty in every response we have captured, so the value passes through without a shape guarantee.
   */
  linkedDomains?: unknown;
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
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  domainOrCompany: string;
  firstname?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  lastname?: string;
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

export interface EmailFindingIcypeasEmail {
  /**
   * Confidence label for this address, e.g. ultra_sure.
   */
  certainty?: string;
  /**
   * Candidate email address.
   * Format: email.
   */
  email?: string;
  /**
   * Mail provider behind this address's domain.
   */
  mxProvider?: string;
  /**
   * Mail exchange records for this address's domain.
   */
  mxRecords?: string[];
  [extra: string]: unknown;
}

/**
 * The `data` payload of Email Finding - Icypeas (email_finding.icypeas).
 */
export interface EmailFindingIcypeasData {
  /**
   * Confidence label for the best matching address, e.g. ultra_sure.
   */
  certainty?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Best matching email address.
   * Format: email.
   */
  email: string;
  /**
   * Every candidate address found for the person, best first. The top-level email is the first entry.
   */
  emails?: EmailFindingIcypeasEmail[];
  /**
   * Matched first name.
   */
  firstname?: string;
  /**
   * Matched full name.
   */
  fullname?: string;
  /**
   * Gender recorded for the matched person. Absent when the source does not know it.
   */
  gender?: string;
  /**
   * Matched last name.
   */
  lastname?: string;
  /**
   * LinkedIn profile URL for the matched person, when the source has one.
   */
  linkedinUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  modifiedUtc?: number;
  /**
   * Mail provider behind the domain, e.g. google.
   */
  mxProvider?: string;
  /**
   * Mail exchange records for the domain.
   */
  mxRecords?: string[];
  /**
   * Phone numbers Icypeas returned alongside the address. Deliberately untyped: the field is empty in every response we have captured, so the value passes through without a shape guarantee.
   */
  phones?: unknown;
  /**
   * SaaS services Icypeas associates with the person. Deliberately untyped: the field is empty in every response we have captured, so the value passes through without a shape guarantee.
   */
  saasServices?: unknown;
  /**
   * Icypeas' identifier for the search that produced this result.
   */
  scanId?: string;
  /**
   * Icypeas' internal label for the kind of search that ran, e.g. __icypeas__individual.
   */
  scanName?: string;
  /**
   * Position of this result inside the Icypeas search batch. It is 0 for the single-person search this SKU runs.
   */
  scanOrder?: number;
  /**
   * Icypeas' terminal status for the search, FOUND or NOT_FOUND. It duplicates the envelope's found flag.
   */
  scanStatus?: string;
  /**
   * Icypeas account that ran the search.
   */
  scanUser?: string;
  [extra: string]: unknown;
}

/**
 * Input for Email Finding - QuickEnrich (email_finding.quickenrich).
 */
export interface EmailFindingQuickenrichInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Company website domain, normalized upstream (example.com or https://example.com both work).
   */
  companyDomain?: string;
  /**
   * Person's first name.
   */
  firstName?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Person's last name.
   */
  lastName?: string;
  /**
   * LinkedIn profile URL. Provide this, or companyDomain with firstName and lastName.
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

/**
 * The `data` payload of Email Finding - QuickEnrich (email_finding.quickenrich).
 */
export interface EmailFindingQuickenrichData {
  /**
   * Street address on the employer record.
   */
  address?: string;
  /**
   * City on the employer record.
   */
  city?: string;
  /**
   * Employer website domain.
   */
  companyDomain?: string;
  /**
   * Employer headcount band, e.g. "20 - 99". Upstream band vocabulary; "Not Available" means the band is unknown.
   */
  companyEmployeeCount?: string;
  /**
   * Employer industry label.
   */
  companyIndustry?: string;
  /**
   * Employer LinkedIn company URL.
   */
  companyLinkedinUrl?: string;
  /**
   * Employer name.
   */
  companyName?: string;
  /**
   * Employer main phone line.
   */
  companyPhone?: string;
  /**
   * Employer revenue band, e.g. "1 - 2.5 Million". Upstream band vocabulary; "Not Available" means the band is unknown.
   */
  companyRevenue?: string;
  /**
   * ISO 3166-1 alpha-2 country code on the employer record.
   */
  country?: string;
  /**
   * Work email address.
   */
  email: string;
  /**
   * Domain the work email resolves to.
   */
  emailDomain?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  emailVerifiedUtc?: number;
  /**
   * Person's first name.
   */
  firstName?: string;
  /**
   * Person's last name.
   */
  lastName?: string;
  /**
   * Person's LinkedIn profile URL.
   */
  linkedinUrl?: string;
  /**
   * Direct business phone line held for the person. Mostly desk lines; read phoneType before treating it as a mobile.
   */
  phone?: string;
  /**
   * Line type reported upstream, e.g. "mobile" or "landline".
   */
  phoneType?: string;
  /**
   * Postal code on the employer record.
   */
  postalCode?: string;
  /**
   * State or region code on the employer record.
   */
  region?: string;
  /**
   * Person's job title.
   */
  title?: string;
  [extra: string]: unknown;
}

/**
 * Input for Email Finding - ZeroBounce (email_finding.zerobounce).
 */
export interface EmailFindingZerobounceInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Company domain to search, e.g. hubspot.com.
   */
  domain: string;
  /**
   * First name of the person to find.
   */
  firstName?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Last name of the person to find.
   */
  lastName?: string;
  /**
   * Middle name, when the company's address format uses one.
   */
  middleName?: string;
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

/**
 * The `data` payload of Email Finding - ZeroBounce (email_finding.zerobounce).
 */
export interface EmailFindingZerobounceData {
  /**
   * Company ZeroBounce associates with the domain.
   */
  companyName?: string;
  /**
   * ZeroBounce's confidence in the address: high, medium, low or undetermined.
   */
  confidence?: string;
  /**
   * Corrected domain when ZeroBounce spots a likely typo.
   */
  didYouMean?: string;
  /**
   * Domain the address belongs to.
   */
  domain?: string;
  /**
   * The email address ZeroBounce found.
   */
  email: string;
  /**
   * Why ZeroBounce could not answer with more confidence.
   */
  failureReason?: string;
  [extra: string]: unknown;
}

/**
 * Input for Email Pattern - ZeroBounce (email_finding.zerobounce_domain).
 */
export interface EmailFindingZerobounceDomainInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Company domain to inspect, e.g. hubspot.com.
   */
  domain: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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

export interface EmailFindingZerobounceDomainOtherFormat {
  /**
   * Confidence in that format: high, medium or low.
   */
  confidence?: string;
  /**
   * Address format, e.g. last.first.
   */
  format: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Email Pattern - ZeroBounce (email_finding.zerobounce_domain).
 */
export interface EmailFindingZerobounceDomainData {
  /**
   * Company ZeroBounce associates with the domain.
   */
  companyName?: string;
  /**
   * Confidence in that format: high, medium or low.
   */
  confidence?: string;
  /**
   * Corrected domain when ZeroBounce spots a likely typo.
   */
  didYouMean?: string;
  /**
   * The domain that was inspected.
   */
  domain: string;
  /**
   * Why ZeroBounce could not answer with more confidence.
   */
  failureReason?: string;
  /**
   * The address format ZeroBounce is most confident the domain uses, e.g. first.last or flast.
   */
  format: string;
  /**
   * Every other address format ZeroBounce has seen on this domain, most confident first.
   */
  otherFormats?: EmailFindingZerobounceDomainOtherFormat[];
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

  /**
   * Email Finding - QuickEnrich
   *
   * Find a work email from a LinkedIn profile, or from a company domain plus a name. Coverage is strongest for small and local businesses and thin for large technology employers.
   *
   * Price: $0.0072 per request.
   *
   * @example
   * const res = await client.emailFinding.quickenrich({ companyDomain: "southmemphisfence.com", firstName: "Warren", lastName: "Price" });
   */
  quickenrich(
    input: EmailFindingQuickenrichInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailFindingQuickenrichData>> {
    return this._core.run("email_finding.quickenrich", input, options);
  }

  /**
   * Email Finding - ZeroBounce
   *
   * Find a person's work email at a company domain from their name, with ZeroBounce's confidence in the guess.
   *
   * Price: $0.6552 per request.
   *
   * @example
   * const res = await client.emailFinding.zerobounce({ domain: "hubspot.com", firstName: "Dharmesh", lastName: "Shah" });
   */
  zerobounce(
    input: EmailFindingZerobounceInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailFindingZerobounceData>> {
    return this._core.run("email_finding.zerobounce", input, options);
  }

  /**
   * Email Pattern - ZeroBounce
   *
   * Read the email address format a company domain uses, with every alternative format ZeroBounce has seen and how confident it is in each. Use it to build addresses for a whole account at once.
   *
   * Price: $0.6552 per request.
   *
   * @example
   * const res = await client.emailFinding.zerobounceDomain({ domain: "hubspot.com" });
   */
  zerobounceDomain(
    input: EmailFindingZerobounceDomainInput,
    options?: RequestOptions,
  ): Promise<RunResult<EmailFindingZerobounceDomainData>> {
    return this._core.run("email_finding.zerobounce_domain", input, options);
  }
}
