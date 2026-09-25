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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * The email address to verify (e.g. jane.doe@acme.com). Exactly one @, a dotted domain, no whitespace or angle brackets. Addresses on reserved, never-deliverable TLDs (.invalid, .test, .example, .localhost, .local, .internal, .blink) and HTML/JSON escape artifacts (a u003e prefix) are rejected locally with no charge.
   */
  email: string;
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `reason`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a result that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "catchAll"
    | "disposable"
    | "domain"
    | "free"
    | "mxProvider"
    | "mxRecords"
    | "reason"
    | "role"
    | "score"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
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
  /**
   * Mail provider behind the address domain, e.g. Google. Null when the serving source does not report one.
   */
  mxProvider?: string | null;
  /**
   * MX record hosts published by the address domain.
   */
  mxRecords?: string[];
  /**
   * Why the verdict was reached. Published by only one of the two sources, so it is absent on most calls; never treat it as required.
   */
  reason?: string;
  /**
   * Role-based address (e.g. info@).
   */
  role?: boolean;
  /**
   * Confidence in the verdict, 0-100. Coarse rather than graded on most calls: it tracks the status rather than ranking addresses within one.
   */
  score?: number;
  /**
   * Deliverability verdict: good (the mailbox accepted), bad (it was refused), or risky (no source could settle it - usually a catch-all domain that accepts every address, sometimes a receiving server that declined to answer at all). Populated whenever the provider has data for the entity.
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
   * Price: $0.0308 per request.
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
   * Verify an email address for deliverability: a status verdict (good, risky, or bad) with domain, mailbox, catch-all, disposable, and role signals plus a confidence score. Malformed addresses are rejected by the input schema with no charge; every syntactically valid address returns a billed verdict, including undeliverable ones.
   *
   * Price: $0.0066 per request.
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
