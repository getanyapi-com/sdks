// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for People Search - AI Ark (people_search.ai_ark).
 */
export interface PeopleSearchAiArkInput {
  /**
   * Company-level filters, keyed by filter name. Accepted names: domain, employeeSize, foundedYear, funding, geoLocation, industries, keyword, language, linkedin, metric, naics, name, phoneNumber, productAndServices, retailSize, revenue, socialMedia, socialMediaLink, technologies, technology, type, url, location. Any other name is rejected. Most names take {"any"|"all": {"include": [...], "exclude": [...]}}, for example {"type": {"any": {"include": ["PUBLIC_COMPANY"]}}}. The any/all object goes INSIDE the filter name, never at the top of account. Size and money filters (employeeSize, foundedYear, revenue, retailSize) instead take {"type": "RANGE", "range": {"start": 50, "end": 200}} or {"type": "ALL"|"NONE"}; geoLocation takes {"position": {"lat": 0, "lng": 0}, "radius": 50, "unit": "km"|"mi"}; keyword takes {"any"|"all": {"include"|"exclude": {"content": ["..."], "sources": [{"mode": "WORD"|"SMART"|"STRICT", "source": "NAME"|"KEYWORD"|"SEO"|"DESCRIPTION"|"INDUSTRY"}]}}}.
   */
  account?: {};
  /**
   * Person-level filters, keyed by filter name. Accepted names: certification, certifications, company, contactLanguage, contactLocation, currentCompany, department, departmentAndFunction, education, experience, fullName, function, keyword, language, linkedin, location, name, pastCompany, profileBadge, seniority, skill, skills, socialMedia, socialMediaFollower, socialMediaLink, socialProfile, title. Any other name is rejected. Names take {"any"|"all": {"include": [...], "exclude": [...]}}, with the any/all object INSIDE the filter name rather than at the top of contact. Free-text search goes through keyword, which takes {"any"|"all": {"include"|"exclude": {"content": ["..."], "sources": [{"mode": "WORD"|"SMART"|"STRICT", "source": "HEADLINE"|"SUMMARY"|"ORGANIZATION"|"SKILL"|"WORK_HISTORY_DESCRIPTION"|"EDUCATION_DESCRIPTION"|"CERTIFICATION"|"PUBLICATION"|"PATENT"|"AWARD"|"COURSE"|"PROJECTS"|"VOLUNTEERING"|"LANGUAGE_SKILL"|"TEST_SCORE"}]}}}, for example {"keyword": {"any": {"include": {"content": ["engineer"], "sources": [{"mode": "SMART", "source": "HEADLINE"}]}}}}.
   */
  contact?: {};
  /**
   * AI Ark saved-list filter expression.
   */
  lists?: {};
  /**
   * Zero-based result page.
   * Range: minimum 0.
   * Default: 0.
   */
  page?: number;
  /**
   * Maximum people to return on this page.
   * Range: minimum 1, maximum 100.
   * Default: 10.
   */
  size?: number;
}

export interface PeopleSearchAiArkPeople {
  /**
   * Location city.
   */
  city?: string;
  /**
   * Current company domain.
   */
  companyDomain?: string;
  /**
   * Estimated employees at the current company.
   * Range: minimum 0.
   */
  companyEmployeeCount?: number;
  /**
   * Current company's primary industry.
   */
  companyIndustry?: string;
  /**
   * Current company's canonical LinkedIn URL.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Current company name.
   */
  companyName?: string;
  /**
   * Location country.
   */
  country?: string;
  /**
   * Person's first name.
   */
  firstName?: string;
  /**
   * Person's full name.
   */
  fullName: string;
  /**
   * Professional profile headline.
   */
  headline?: string;
  /**
   * Person's last name.
   */
  lastName?: string;
  /**
   * Canonical LinkedIn profile URL.
   * Format: uri.
   */
  linkedinUrl: string;
  /**
   * Formatted location.
   */
  location?: string;
  /**
   * Location state or region.
   */
  state?: string;
  /**
   * Current job title.
   */
  title?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of People Search - AI Ark (people_search.ai_ark).
 */
export interface PeopleSearchAiArkData {
  /**
   * Zero-based page number returned by the source.
   * Range: minimum 0.
   */
  page: number;
  /**
   * People returned on this page.
   */
  people: PeopleSearchAiArkPeople[];
  /**
   * Configured page size.
   * Range: minimum 0.
   */
  size: number;
  /**
   * Total matching people.
   * Range: minimum 0.
   */
  total: number;
  /**
   * Total result pages.
   * Range: minimum 0.
   */
  totalPages: number;
}

/**
 * Input for People Search - Crustdata v3 (people_search.crustdata_v3).
 */
export interface PeopleSearchCrustdataV3Input {
  /**
   * Company domain without a path.
   */
  companyDomain: string;
  country?: string;
  /**
   * Default: true.
   */
  fuzzyTitle?: boolean;
  /**
   * Range: minimum 1, maximum 100.
   * Default: 3.
   */
  limit?: number;
  profileKeywords?: unknown;
  /**
   * Default: false.
   */
  requireVerifiedEmail?: boolean;
  seniority?: unknown;
  titleKeywords: unknown;
}

export interface PeopleSearchCrustdataV3Profile {
  emails?: unknown[];
  headline?: string;
  lastName?: string;
  /**
   * Format: uri.
   */
  linkedinUrl?: string;
  name: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of People Search - Crustdata v3 (people_search.crustdata_v3).
 */
export interface PeopleSearchCrustdataV3Data {
  hasMore?: boolean;
  profiles: PeopleSearchCrustdataV3Profile[];
  /**
   * Range: minimum 0.
   */
  totalCount?: number;
}

/**
 * Typed methods for the people_search platform. Attached to the AnyAPI client as
 * `client.peopleSearch`.
 */
export class PeopleSearchNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * People Search - AI Ark
   *
   * Search professional profiles with account, contact, and saved-list filters.
   *
   * Price: $0 per request plus $0.0084 per result (maximum $0.84).
   *
   * @example
   * const res = await client.peopleSearch.aiArk({ page: 0, size: 1 });
   */
  aiArk(
    input: PeopleSearchAiArkInput,
    options?: RequestOptions,
  ): Promise<RunResult<PeopleSearchAiArkData>> {
    return this._core.run("people_search.ai_ark", input, options);
  }

  /**
   * People Search - Crustdata v3
   *
   * Find up to 100 professional profiles by company domain and title keywords.
   *
   * Price: $0.144 per request.
   *
   * @example
   * const res = await client.peopleSearch.crustdataV3({ companyDomain: "posthog.com", titleKeywords: "engineer", limit: 1 });
   */
  crustdataV3(
    input: PeopleSearchCrustdataV3Input,
    options?: RequestOptions,
  ): Promise<RunResult<PeopleSearchCrustdataV3Data>> {
    return this._core.run("people_search.crustdata_v3", input, options);
  }
}
