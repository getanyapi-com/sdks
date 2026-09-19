// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for People Search - AI Ark (people_search.ai_ark).
 */
export interface PeopleSearchAiArkInput {
  /**
   * Company-level filters, keyed by filter name. Accepted names: domain, employeeSize, foundedYear, funding, geoLocation, industries, keyword, language, linkedin, metric, naics, name, phoneNumber, productAndServices, retailSize, revenue, socialMedia, socialMediaLink, technologies, technology, type, url, location. Any other name is rejected. Most names take {"any"|"all": {"include": [...], "exclude": [...]}}, for example {"type": {"any": {"include": ["PUBLIC_COMPANY"]}}}. The any/all object goes INSIDE the filter name, never at the top of account. Size and money filters (employeeSize, foundedYear, revenue, retailSize) instead take {"type": "RANGE", "range": {"start": 50, "end": 200}} or {"type": "ALL"|"NONE"}; geoLocation takes {"position": {"lat": 0, "lng": 0}, "radius": 50, "unit": "km"|"mi"}; keyword takes {"any"|"all": {"include"|"exclude": {"content": ["..."], "sources": [{"mode": "WORD"|"SMART"|"STRICT", "source": "NAME"|"KEYWORD"|"SEO"|"DESCRIPTION"|"INDUSTRY"}]}}}.
   */
  account?: {};
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Person-level filters, keyed by filter name. Accepted names: certification, certifications, company, contactLanguage, contactLocation, currentCompany, department, departmentAndFunction, education, experience, fullName, function, keyword, language, linkedin, location, name, pastCompany, profileBadge, seniority, skill, skills, socialMedia, socialMediaFollower, socialMediaLink, socialProfile, title. Any other name is rejected. Names take {"any"|"all": {"include": [...], "exclude": [...]}}, with the any/all object INSIDE the filter name rather than at the top of contact. Free-text search goes through keyword, which takes {"any"|"all": {"include"|"exclude": {"content": ["..."], "sources": [{"mode": "WORD"|"SMART"|"STRICT", "source": "HEADLINE"|"SUMMARY"|"ORGANIZATION"|"SKILL"|"WORK_HISTORY_DESCRIPTION"|"EDUCATION_DESCRIPTION"|"CERTIFICATION"|"PUBLICATION"|"PATENT"|"AWARD"|"COURSE"|"PROJECTS"|"VOLUNTEERING"|"LANGUAGE_SKILL"|"TEST_SCORE"}]}}}, for example {"keyword": {"any": {"include": {"content": ["engineer"], "sources": [{"mode": "SMART", "source": "HEADLINE"}]}}}}.
   */
  contact?: {};
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
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
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Maximum people to return on this page.
   * Range: minimum 1, maximum 100.
   * Default: 10.
   */
  size?: number;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface PeopleSearchAiArkPeople {
  /**
   * Birthday as published on the profile, in YYYY-MM-DD form. LinkedIn lets a member hide the year, and the source encodes that as the placeholder year 1600 - treat the year as unknown when it reads 1600 rather than as a real date.
   */
  birthDate?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  careerStartUtc?: number;
  /**
   * Location city.
   */
  city?: string;
  /**
   * Number of acquisitions the source records for the current company.
   * Range: minimum 0.
   */
  companyAcquisitionCount?: number;
  /**
   * Acquisitions the source records for the current company, with the role telling you which side the company was on.
   */
  companyAcquisitions?: PeopleSearchAiArkCompanyAcquisition[];
  /**
   * Current company headquarters address as published by the source.
   */
  companyAddress?: string;
  /**
   * Current company headquarters city.
   */
  companyCity?: string;
  /**
   * Current company headquarters continent.
   */
  companyContinent?: string;
  /**
   * Current company headquarters country.
   */
  companyCountry?: string;
  /**
   * Current company's Crunchbase URL.
   * Format: uri.
   */
  companyCrunchbaseUrl?: string;
  /**
   * Current company description.
   */
  companyDescription?: string;
  /**
   * Current company domain.
   */
  companyDomain?: string;
  /**
   * The source's second copy of the current company's domain. Usually identical to companyDomain; it can differ when the source resolves a redirect or a country domain differently, so compare the two rather than assuming they match.
   */
  companyDomainLtd?: string;
  /**
   * Estimated employees at the current company.
   * Range: minimum 0.
   */
  companyEmployeeCount?: number;
  /**
   * Lower bound of the current company's published employee range.
   * Range: minimum 0.
   */
  companyEmployeeRangeMin?: number;
  /**
   * Current company's canonical Facebook URL.
   * Format: uri.
   */
  companyFacebookUrl?: string;
  /**
   * Year the current company was founded.
   */
  companyFoundedYear?: number;
  /**
   * The source's own record identifier for the current company, exposed so you can trace a result back to the record it came from.
   */
  companyId?: string;
  /**
   * Current company logo URL. This is a SIGNED, EXPIRING image-proxy URL - the path carries an exp: epoch roughly five days out - so fetch and store the image promptly rather than storing this URL.
   * Format: uri.
   */
  companyImage?: string;
  /**
   * Additional industries for the current company.
   */
  companyIndustries?: string[];
  /**
   * Current company's primary industry.
   */
  companyIndustry?: string;
  /**
   * Keywords describing the current company.
   */
  companyKeywords?: string[];
  /**
   * Languages the current company publishes in.
   */
  companyLanguages?: string[];
  /**
   * Current company headquarters latitude in decimal degrees.
   */
  companyLatitude?: number;
  /**
   * Current company's registered legal name.
   */
  companyLegalName?: string;
  /**
   * Current company's canonical LinkedIn URL.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Every office the source lists for the current company, including the headquarters already reported in the companyCountry/companyCity fields.
   */
  companyLocations?: PeopleSearchAiArkCompanyLocation[];
  /**
   * Current company headquarters longitude in decimal degrees.
   */
  companyLongitude?: number;
  /**
   * NAICS codes for the current company.
   */
  companyNaics?: string[];
  /**
   * Current company name.
   */
  companyName?: string;
  /**
   * Longer overview of the current company. Overlaps companyDescription but is a separately maintained blurb and is often longer or more current.
   */
  companyOverview?: string;
  /**
   * Current company headquarters postal code.
   */
  companyPostalCode?: string;
  /**
   * Upper bound of the current company's estimated annual revenue in USD.
   * Range: minimum 0.
   */
  companyRevenueMax?: number;
  /**
   * Lower bound of the current company's estimated annual revenue in USD.
   * Range: minimum 0.
   */
  companyRevenueMin?: number;
  /**
   * The same annual revenue estimate as a single hyphenated range string, for example 500000000-1000000000. It duplicates companyRevenueMin and companyRevenueMax; use those for arithmetic.
   */
  companyRevenueRange?: string;
  /**
   * The meta description the source scraped from the current company's website. It is site copy, not the source's own writing, so it may be in another language or out of date.
   */
  companySeoDescription?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  companyStartUtc?: number;
  /**
   * Current company headquarters state or region.
   */
  companyState?: string;
  /**
   * Current company headquarters street or neighbourhood line.
   */
  companyStreet?: string;
  /**
   * The source's own record identifiers for the current company's sub-organizations, exposed so you can look each one up in the company endpoints.
   */
  companySubOrganizations?: string[];
  /**
   * Technologies detected on the current company's web presence.
   */
  companyTechnologies?: PeopleSearchAiArkCompanyTechnologie[];
  /**
   * Current company's canonical X (Twitter) URL.
   * Format: uri.
   */
  companyTwitterUrl?: string;
  /**
   * Current company's organization type.
   */
  companyType?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  companyUpdatedUtc?: number;
  /**
   * Current company website URL.
   * Format: uri.
   */
  companyWebsiteUrl?: string;
  /**
   * LinkedIn connection count.
   * Range: minimum 0.
   */
  connectionCount?: number;
  /**
   * Location country.
   */
  country?: string;
  /**
   * Whether the profile is in LinkedIn creator mode.
   */
  creator?: boolean;
  /**
   * Departments the current role belongs to.
   */
  departments?: string[];
  /**
   * Education history listed on the profile.
   */
  educations?: PeopleSearchAiArkEducation[];
  /**
   * Work history grouped by company, most recent first.
   */
  experience?: PeopleSearchAiArkExperience[];
  /**
   * Canonical Facebook profile URL.
   * Format: uri.
   */
  facebookUrl?: string;
  /**
   * Person's first name.
   */
  firstName?: string;
  /**
   * Whether the profile can be followed without connecting. Untyped passthrough: the source returns null for most profiles, so its populated shape is not yet proven and this field carries whatever the source sends without reshaping it.
   */
  followable?: unknown;
  /**
   * LinkedIn follower count.
   * Range: minimum 0.
   */
  followerCount?: number;
  /**
   * Person's full name.
   */
  fullName: string;
  /**
   * Job functions the current role covers.
   */
  functions?: string[];
  /**
   * Canonical GitHub profile URL.
   * Format: uri.
   */
  githubUrl?: string;
  /**
   * Professional profile headline.
   */
  headline?: string;
  /**
   * Whether the profile is flagged as hiring.
   */
  hiring?: boolean;
  /**
   * Profile photo URL. This is a SIGNED, EXPIRING image-proxy URL - the path carries an exp: epoch roughly five days out - so fetch and store the image promptly rather than storing this URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Industry the person works in.
   */
  industry?: string;
  /**
   * Whether the profile carries a LinkedIn influencer badge.
   */
  influencer?: boolean;
  /**
   * Person's last name.
   */
  lastName?: string;
  /**
   * LinkedIn public profile handle, the trailing segment of the profile URL.
   */
  linkedinHandle?: string;
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
   * Coordinates for the person's location as the source returns them. Untyped passthrough: the source returns null for most profiles, so its populated shape is not yet proven and this field carries whatever the source sends without reshaping it.
   */
  locationPosition?: unknown;
  /**
   * Shorter form of the same location, usually city and state without country or continent. It duplicates part of location.
   */
  locationShort?: string;
  /**
   * Person's middle name.
   */
  middleName?: string;
  /**
   * The same influencer flag as the badge above, carried on the source's network statistics instead of its badge block. Expected to agree with influencer; compare them if the distinction matters to you.
   */
  networkInfluencer?: boolean;
  /**
   * Whether the profile is flagged open to work.
   */
  openToWork?: boolean;
  /**
   * Whether the profile carries a LinkedIn premium badge.
   */
  premium?: boolean;
  /**
   * Job titles the person held before the current one, as the source returns them. Untyped passthrough: the source returns null for most profiles, so its populated shape is not yet proven and this field carries whatever the source sends without reshaping it. The experience array carries the same history in a typed form.
   */
  previousJobTitles?: unknown;
  /**
   * Primary profile language code.
   */
  primaryLanguage?: string;
  /**
   * Country code paired with the primary profile language, for example US.
   */
  primaryLanguageCountry?: string;
  /**
   * The profile background or cover image as the source returns it. Untyped passthrough: the source returns null for most profiles, so its populated shape is not yet proven and this field carries whatever the source sends without reshaping it.
   */
  profileBackground?: unknown;
  /**
   * The source's own record identifier for this person, exposed so you can trace a result back to the record it came from.
   */
  profileId?: string;
  /**
   * Languages the person lists on the profile, as the source returns them. Untyped passthrough: the source returns null for most profiles, so its populated shape is not yet proven and this field carries whatever the source sends without reshaping it.
   */
  profileLanguages?: unknown;
  /**
   * Seniority level inferred for the current role.
   */
  seniority?: string;
  /**
   * Skills listed on the profile.
   */
  skills?: string[];
  /**
   * Location state or region.
   */
  state?: string;
  /**
   * Sub-departments the current role belongs to.
   */
  subDepartments?: string[];
  /**
   * Profile summary or about section.
   */
  summary?: string;
  /**
   * Every locale the profile is available in. The first entry usually repeats primaryLanguage and primaryLanguageCountry.
   */
  supportedLocales?: PeopleSearchAiArkSupportedLocale[];
  /**
   * Current job title.
   */
  title?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  titleStartUtc?: number;
  /**
   * Canonical X (Twitter) profile URL.
   * Format: uri.
   */
  twitterUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  /**
   * Whether LinkedIn has verified the profile.
   */
  verified?: boolean;
  [extra: string]: unknown;
}

export interface PeopleSearchAiArkCompanyAcquisition {
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  announcedUtc?: number;
  /**
   * The source's internal image key for the counterparty. It is a bare key, not a URL.
   */
  imageKey?: string;
  /**
   * Counterparty organization name.
   */
  name?: string;
  /**
   * The source's own slug for the counterparty organization.
   */
  recordId?: string;
  /**
   * The current company's side of the deal, for example acquiree.
   */
  role?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchAiArkCompanyLocation {
  /**
   * Office address as published by the source.
   */
  address?: string;
  /**
   * Office city.
   */
  city?: string;
  /**
   * Office continent.
   */
  continent?: string;
  /**
   * Office country.
   */
  country?: string;
  /**
   * Office latitude in decimal degrees.
   */
  latitude?: number;
  /**
   * Office longitude in decimal degrees.
   */
  longitude?: number;
  /**
   * Office postal code.
   */
  postalCode?: string;
  /**
   * Office state or region.
   */
  state?: string;
  /**
   * Office street or neighbourhood line.
   */
  street?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchAiArkCompanyTechnologie {
  /**
   * Technology category.
   */
  category?: string;
  /**
   * Technology name.
   */
  name?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchAiArkEducation {
  /**
   * Degree earned.
   */
  degreeName?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  endUtc?: number;
  /**
   * Field of study.
   */
  fieldOfStudy?: string;
  /**
   * Grade as published on the profile.
   */
  grade?: string;
  /**
   * The source's own record identifier for the school. Untyped passthrough: the source returns null on the profiles observed so far, so its populated shape is not yet proven and this field carries whatever the source sends without reshaping it.
   */
  schoolId?: unknown;
  /**
   * The school logo as the source returns it. Untyped passthrough: the source returns null on the profiles observed so far, so its populated shape is not yet proven and this field carries whatever the source sends without reshaping it.
   */
  schoolImage?: unknown;
  /**
   * School name.
   */
  schoolName?: string;
  /**
   * Canonical school page URL.
   * Format: uri.
   */
  schoolUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  startUtc?: number;
  [extra: string]: unknown;
}

export interface PeopleSearchAiArkExperience {
  /**
   * Upper bound of this company's published employee range.
   * Range: minimum 0.
   */
  companyEmployeeRangeMax?: number;
  /**
   * Lower bound of this company's published employee range.
   * Range: minimum 0.
   */
  companyEmployeeRangeMin?: number;
  /**
   * The source's own record identifier for this company, exposed so you can trace a result back to the record it came from.
   */
  companyId?: string;
  /**
   * Company logo URL. This is a SIGNED, EXPIRING image-proxy URL - the path carries an exp: epoch roughly five days out - so fetch and store the image promptly rather than storing this URL.
   * Format: uri.
   */
  companyImage?: string;
  /**
   * Canonical LinkedIn URL for this company.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Company name for this block of work history.
   */
  companyName?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  endUtc?: number;
  /**
   * Individual roles held at this company.
   */
  positions?: PeopleSearchAiArkPosition[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  startUtc?: number;
  [extra: string]: unknown;
}

export interface PeopleSearchAiArkPosition {
  /**
   * Company name as published on the role.
   */
  companyName?: string;
  /**
   * Role description.
   */
  description?: string;
  /**
   * Employment type, for example Full-time.
   */
  employmentType?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  endUtc?: number;
  /**
   * Role location.
   */
  location?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  startUtc?: number;
  /**
   * Role title.
   */
  title?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchAiArkSupportedLocale {
  /**
   * Country code for this locale.
   */
  country?: string;
  /**
   * Language code for this locale.
   */
  language?: string;
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
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Range: minimum 1, maximum 100.
   * Default: 3.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  profileKeywords?: unknown;
  /**
   * Default: false.
   */
  requireVerifiedEmail?: boolean;
  seniority?: unknown;
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  titleKeywords: unknown;
}

export interface PeopleSearchCrustdataV3Profile {
  /**
   * Every employer on the profile, current and past. Duplicates the contents of currentEmployers and pastEmployers in one combined list.
   */
  allEmployers?: PeopleSearchCrustdataV3AllEmployer[];
  /**
   * Certifications listed on the profile.
   */
  certifications?: PeopleSearchCrustdataV3Certification[];
  /**
   * City of residence.
   */
  city?: string;
  /**
   * Number of LinkedIn connections.
   */
  connectionCount?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Last time the contact section was refreshed.
   */
  contactUpdatedUtc?: number;
  /**
   * Continent of residence.
   */
  continent?: string;
  /**
   * Country of residence.
   */
  country?: string;
  /**
   * Positions the person currently holds.
   */
  currentEmployers?: PeopleSearchCrustdataV3CurrentEmployer[];
  /**
   * Education history exactly as Crustdata returns it. Untyped passthrough: the structure ships verbatim and is not validated, because it was empty for every profile we captured.
   */
  educationBackground?: unknown;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Last time the education section was refreshed.
   */
  educationUpdatedUtc?: number;
  /**
   * Email addresses found for the person.
   */
  emails?: string[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Last time the employment section was refreshed.
   */
  employerUpdatedUtc?: number;
  /**
   * Given name of the person.
   */
  firstName?: string;
  /**
   * LinkedIn flagship profile URL. Usually the same value as linkedinUrl; Crustdata returns both and they can differ when the profile has a vanity URL.
   * Format: uri.
   */
  flagshipProfileUrl?: string;
  /**
   * Number of LinkedIn followers.
   */
  followerCount?: number;
  /**
   * LinkedIn headline.
   */
  headline?: string;
  /**
   * Honors and awards exactly as Crustdata returns them. Untyped passthrough: the structure ships verbatim and is not validated, because it was empty for every profile we captured.
   */
  honors?: unknown;
  /**
   * Profile picture URL.
   * Format: uri.
   */
  image?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When Crustdata last indexed the record for search, which is usually just after recordUpdatedUtc.
   */
  indexedUtc?: number;
  /**
   * Languages listed on the profile.
   */
  languages?: string[];
  /**
   * Family name of the person.
   */
  lastName?: string;
  /**
   * LinkedIn profile URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Full name of the person.
   */
  name: string;
  /**
   * LinkedIn open-to cards (open to work, hiring, providing services) exactly as Crustdata returns them. Untyped passthrough: the structure ships verbatim and is not validated, because it was empty for every profile we captured.
   */
  openToCards?: unknown;
  /**
   * Positions the person previously held.
   */
  pastEmployers?: PeopleSearchCrustdataV3PastEmployer[];
  /**
   * Crustdata identifier for this person.
   */
  personId?: string;
  /**
   * Language the profile itself is written in.
   */
  profileLanguage?: string;
  /**
   * Profile photo URL as LinkedIn serves it, query string intact because LinkedIn signs these URLs. The image field carries Crustdata's cached copy of the same photo, which does not expire.
   * Format: uri.
   */
  profilePictureUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Last time the profile section was refreshed.
   */
  profileUpdatedUtc?: number;
  /**
   * True when the person changed employer recently.
   */
  recentlyChangedJobs?: boolean;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When Crustdata last wrote the record. Differs from updatedUtc, which reports the profile's own last-updated stamp.
   */
  recordUpdatedUtc?: number;
  /**
   * Region string as published on the profile.
   */
  region?: string;
  /**
   * The region string split into address components (city, county, state, country). Restates region in parts.
   */
  regionAddressComponents?: string[];
  /**
   * Skills listed on the profile.
   */
  skills?: string[];
  /**
   * State or province of residence.
   */
  state?: string;
  /**
   * Profile summary or About section text.
   */
  summary?: string;
  /**
   * X (Twitter) handle listed on the profile.
   */
  twitterHandle?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Last time any part of this profile record was refreshed.
   */
  updatedUtc?: number;
  /**
   * Total whole years of professional experience.
   */
  yearsOfExperience?: number;
  /**
   * Human-readable experience band, e.g. More than 10 years.
   */
  yearsOfExperienceRange?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchCrustdataV3AllEmployer {
  /**
   * True when a business email at this employer has been verified.
   */
  businessEmailVerified?: boolean;
  /**
   * Employer website domain.
   */
  companyDomain?: string;
  /**
   * Latest observed employee count at the employer.
   */
  companyHeadcount?: number;
  /**
   * Employer headcount band, e.g. 51-200.
   */
  companyHeadcountRange?: string;
  /**
   * Country of the employer's headquarters.
   */
  companyHeadquartersCountry?: string;
  /**
   * Full headquarters location of the employer.
   */
  companyHqLocation?: string;
  /**
   * The employer's headquarters location split into address components (city, county, state, country). Restates companyHqLocation in parts.
   */
  companyHqLocationAddressComponents?: string[];
  /**
   * Crustdata company identifier for this employer, accepted by the Company Enrichment endpoint.
   */
  companyId?: string;
  /**
   * All LinkedIn industries listed for the employer.
   */
  companyIndustries?: string[];
  /**
   * Primary LinkedIn industry of the employer.
   */
  companyIndustry?: string;
  /**
   * LinkedIn's own numeric identifier for the employer company page.
   */
  companyLinkedinId?: string;
  /**
   * Employer LinkedIn company page URL.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Employer name.
   */
  companyName?: string;
  /**
   * Employer company type, e.g. Privately Held or Public Company.
   */
  companyType?: string;
  /**
   * Employer website URL.
   * Format: uri.
   */
  companyWebsite?: string;
  /**
   * Role description as written on the profile.
   */
  description?: string;
  /**
   * Employment type, e.g. Full-time or Contract.
   */
  employmentType?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. End of the role.
   */
  endUtc?: number;
  /**
   * Job function category, e.g. Engineering or Sales.
   */
  functionCategory?: string;
  /**
   * LinkedIn's own numeric identifier for the employer page. Crustdata returns the same value as companyLinkedinId on this record.
   */
  linkedinId?: string;
  /**
   * Location of the role.
   */
  location?: string;
  /**
   * Crustdata identifier for this specific position record.
   */
  positionId?: string;
  /**
   * True when this is the profile's primary listed position.
   */
  primaryEmployer?: boolean;
  /**
   * Seniority level of the role, e.g. Entry Level or Owner / Partner.
   */
  seniority?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Start of the role.
   */
  startUtc?: number;
  /**
   * Job title held at this employer.
   */
  title?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Last time this employment record was refreshed.
   */
  updatedUtc?: number;
  /**
   * Whole years spent at this employer.
   */
  yearsAtCompany?: number;
  /**
   * Human-readable tenure band, e.g. 3 to 5 years.
   */
  yearsAtCompanyRange?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchCrustdataV3Certification {
  /**
   * Crustdata identifier for this certification record.
   */
  certificationId?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the certification expires.
   */
  expiresUtc?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. When the certification was issued.
   */
  issuedUtc?: number;
  /**
   * Organization that issued the certification.
   */
  issuer?: string;
  /**
   * LinkedIn's own numeric identifier for the issuing organization page.
   */
  issuerLinkedinId?: string;
  /**
   * Certification name.
   */
  name?: string;
  /**
   * Link to the certification.
   * Format: uri.
   */
  url?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchCrustdataV3CurrentEmployer {
  /**
   * True when a business email at this employer has been verified.
   */
  businessEmailVerified?: boolean;
  /**
   * Employer website domain.
   */
  companyDomain?: string;
  /**
   * Latest observed employee count at the employer.
   */
  companyHeadcount?: number;
  /**
   * Employer headcount band, e.g. 51-200.
   */
  companyHeadcountRange?: string;
  /**
   * Country of the employer's headquarters.
   */
  companyHeadquartersCountry?: string;
  /**
   * Full headquarters location of the employer.
   */
  companyHqLocation?: string;
  /**
   * The employer's headquarters location split into address components (city, county, state, country). Restates companyHqLocation in parts.
   */
  companyHqLocationAddressComponents?: string[];
  /**
   * Crustdata company identifier for this employer, accepted by the Company Enrichment endpoint.
   */
  companyId?: string;
  /**
   * All LinkedIn industries listed for the employer.
   */
  companyIndustries?: string[];
  /**
   * Primary LinkedIn industry of the employer.
   */
  companyIndustry?: string;
  /**
   * LinkedIn's own numeric identifier for the employer company page.
   */
  companyLinkedinId?: string;
  /**
   * Employer LinkedIn company page URL.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Employer name.
   */
  companyName?: string;
  /**
   * Employer company type, e.g. Privately Held or Public Company.
   */
  companyType?: string;
  /**
   * Employer website URL.
   * Format: uri.
   */
  companyWebsite?: string;
  /**
   * Role description as written on the profile.
   */
  description?: string;
  /**
   * Employment type, e.g. Full-time or Contract.
   */
  employmentType?: string;
  /**
   * Job function category, e.g. Engineering or Sales.
   */
  functionCategory?: string;
  /**
   * LinkedIn's own numeric identifier for the employer page. Crustdata returns the same value as companyLinkedinId on this record.
   */
  linkedinId?: string;
  /**
   * Location of the role.
   */
  location?: string;
  /**
   * Crustdata identifier for this specific position record.
   */
  positionId?: string;
  /**
   * True when this is the profile's primary listed position.
   */
  primaryEmployer?: boolean;
  /**
   * Seniority level of the role, e.g. Entry Level or Owner / Partner.
   */
  seniority?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Start of the role.
   */
  startUtc?: number;
  /**
   * Job title held at this employer.
   */
  title?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Last time this employment record was refreshed.
   */
  updatedUtc?: number;
  /**
   * Whole years spent at this employer.
   */
  yearsAtCompany?: number;
  /**
   * Human-readable tenure band, e.g. 3 to 5 years.
   */
  yearsAtCompanyRange?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchCrustdataV3PastEmployer {
  /**
   * True when a business email at this employer has been verified.
   */
  businessEmailVerified?: boolean;
  /**
   * Employer website domain.
   */
  companyDomain?: string;
  /**
   * Latest observed employee count at the employer.
   */
  companyHeadcount?: number;
  /**
   * Employer headcount band, e.g. 51-200.
   */
  companyHeadcountRange?: string;
  /**
   * Country of the employer's headquarters.
   */
  companyHeadquartersCountry?: string;
  /**
   * Full headquarters location of the employer.
   */
  companyHqLocation?: string;
  /**
   * The employer's headquarters location split into address components (city, county, state, country). Restates companyHqLocation in parts.
   */
  companyHqLocationAddressComponents?: string[];
  /**
   * Crustdata company identifier for this employer, accepted by the Company Enrichment endpoint.
   */
  companyId?: string;
  /**
   * All LinkedIn industries listed for the employer.
   */
  companyIndustries?: string[];
  /**
   * Primary LinkedIn industry of the employer.
   */
  companyIndustry?: string;
  /**
   * LinkedIn's own numeric identifier for the employer company page.
   */
  companyLinkedinId?: string;
  /**
   * Employer LinkedIn company page URL.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Employer name.
   */
  companyName?: string;
  /**
   * Employer company type, e.g. Privately Held or Public Company.
   */
  companyType?: string;
  /**
   * Employer website URL.
   * Format: uri.
   */
  companyWebsite?: string;
  /**
   * Role description as written on the profile.
   */
  description?: string;
  /**
   * Employment type, e.g. Full-time or Contract.
   */
  employmentType?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. End of the role.
   */
  endUtc?: number;
  /**
   * Job function category, e.g. Engineering or Sales.
   */
  functionCategory?: string;
  /**
   * LinkedIn's own numeric identifier for the employer page. Crustdata returns the same value as companyLinkedinId on this record.
   */
  linkedinId?: string;
  /**
   * Location of the role.
   */
  location?: string;
  /**
   * Crustdata identifier for this specific position record.
   */
  positionId?: string;
  /**
   * True when this is the profile's primary listed position.
   */
  primaryEmployer?: boolean;
  /**
   * Seniority level of the role, e.g. Entry Level or Owner / Partner.
   */
  seniority?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Start of the role.
   */
  startUtc?: number;
  /**
   * Job title held at this employer.
   */
  title?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Last time this employment record was refreshed.
   */
  updatedUtc?: number;
  /**
   * Whole years spent at this employer.
   */
  yearsAtCompany?: number;
  /**
   * Human-readable tenure band, e.g. 3 to 5 years.
   */
  yearsAtCompanyRange?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of People Search - Crustdata v3 (people_search.crustdata_v3).
 */
export interface PeopleSearchCrustdataV3Data {
  /**
   * True when more profiles exist beyond this page.
   */
  hasMore?: boolean;
  /**
   * Matching professional profiles.
   */
  profiles: PeopleSearchCrustdataV3Profile[];
  /**
   * Total number of profiles matching the search.
   * Range: minimum 0.
   */
  totalCount?: number;
}

export interface PeopleSearchFullenrichCurrentCompanyDomain {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentCompanyFoundedYear {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentCompanyHeadcount {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentCompanyHeadquarter {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentCompanyId {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentCompanyIndustrie {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentCompanyLinkedinUrl {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentCompanyName {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentCompanySpecialtie {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentCompanyType {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentPositionJobFunction {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentPositionSeniorityLevel {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentPositionSubFunction {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentPositionTitle {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichCurrentPositionYearsIn {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichPastCompanyDomain {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichPastCompanyName {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichPastPositionTitle {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichPersonId {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichPersonLanguage {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichPersonLinkedinUrl {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichPersonLocation {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichPersonName {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichPersonSkill {
  /**
   * Require an exact match rather than a fuzzy one.
   */
  exact_match?: boolean;
  /**
   * The value to match.
   */
  value?: string;
  [extra: string]: unknown;
}

/**
 * Input for People Search - FullEnrich (people_search.fullenrich).
 */
export interface PeopleSearchFullenrichInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Filter by current employer domain. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentCompanyDomains?: PeopleSearchFullenrichCurrentCompanyDomain[];
  /**
   * Filter by current employer founding year. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentCompanyFoundedYears?: PeopleSearchFullenrichCurrentCompanyFoundedYear[];
  /**
   * Filter by current employer headcount band. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentCompanyHeadcounts?: PeopleSearchFullenrichCurrentCompanyHeadcount[];
  /**
   * Filter by current employer headquarters location. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentCompanyHeadquarters?: PeopleSearchFullenrichCurrentCompanyHeadquarter[];
  /**
   * Filter by FullEnrich company id of the current employer. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentCompanyIds?: PeopleSearchFullenrichCurrentCompanyId[];
  /**
   * Filter by current employer industry. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentCompanyIndustries?: PeopleSearchFullenrichCurrentCompanyIndustrie[];
  /**
   * Filter by current employer LinkedIn URL. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentCompanyLinkedinUrls?: PeopleSearchFullenrichCurrentCompanyLinkedinUrl[];
  /**
   * Filter by current employer name. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentCompanyNames?: PeopleSearchFullenrichCurrentCompanyName[];
  /**
   * Filter by a current employer specialty. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentCompanySpecialties?: PeopleSearchFullenrichCurrentCompanySpecialtie[];
  /**
   * Filter by current employer ownership type. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentCompanyTypes?: PeopleSearchFullenrichCurrentCompanyType[];
  /**
   * Filter by current job function. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentPositionJobFunctions?: PeopleSearchFullenrichCurrentPositionJobFunction[];
  /**
   * Filter by seniority, e.g. Owner, Founder, C-level, VP, Director, Manager. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentPositionSeniorityLevel?: PeopleSearchFullenrichCurrentPositionSeniorityLevel[];
  /**
   * Filter by current job sub-function. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentPositionSubFunctions?: PeopleSearchFullenrichCurrentPositionSubFunction[];
  /**
   * Filter by current job title. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentPositionTitles?: PeopleSearchFullenrichCurrentPositionTitle[];
  /**
   * Filter by years spent in the current position. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  currentPositionYearsIn?: PeopleSearchFullenrichCurrentPositionYearsIn[];
  /**
   * Cursor from a previous response's nextCursor. Works at any depth, including past the 10000 offset ceiling.
   */
  cursor?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Rows to return on this page, up to FullEnrich's maximum of 100. Every row returned is billed.
   * Range: minimum 1, maximum 100.
   * Default: 10.
   */
  limit?: number;
  /**
   * Rows to skip. FullEnrich caps offset at 10000; past that, page with cursor.
   * Range: minimum 0.
   * Default: 0.
   */
  offset?: number;
  /**
   * Filter by the domain of a past employer. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  pastCompanyDomains?: PeopleSearchFullenrichPastCompanyDomain[];
  /**
   * Filter by an employer the person worked at before. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  pastCompanyNames?: PeopleSearchFullenrichPastCompanyName[];
  /**
   * Filter by a job title the person held before. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  pastPositionTitles?: PeopleSearchFullenrichPastPositionTitle[];
  /**
   * Filter by FullEnrich person id. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  personIds?: PeopleSearchFullenrichPersonId[];
  /**
   * Filter by a language the person speaks. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  personLanguages?: PeopleSearchFullenrichPersonLanguage[];
  /**
   * Filter by person LinkedIn URL. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  personLinkedinUrls?: PeopleSearchFullenrichPersonLinkedinUrl[];
  /**
   * Filter by the person's city, region or country. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  personLocations?: PeopleSearchFullenrichPersonLocation[];
  /**
   * Filter by person name. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  personNames?: PeopleSearchFullenrichPersonName[];
  /**
   * Filter by a skill the person lists. Each entry is an object taking a `value` string and an optional `exact_match` boolean, e.g. [{"value": "stripe.com", "exact_match": true}]. A bare string is rejected.
   */
  personSkills?: PeopleSearchFullenrichPersonSkill[];
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

export interface PeopleSearchFullenrichPeople {
  /**
   * City the person is in.
   */
  city?: string;
  /**
   * The person's current employer, with FullEnrich's full firmographic record.
   */
  company?: {
    /**
     * FullEnrich's own company identifier.
     */
    companyId?: string;
    /**
     * Ownership type, e.g. Public Company, Privately Held.
     */
    companyType?: string;
    /**
     * Company description.
     */
    description?: string;
    /**
     * Primary company domain.
     */
    domain?: string;
    /**
     * Year the company was founded. Zero when FullEnrich holds none.
     */
    foundedYear?: number;
    /**
     * Employees FullEnrich currently counts.
     */
    headcount?: number;
    /**
     * Employee headcount band, e.g. 5001-10000.
     */
    headcountRange?: string;
    /**
     * Headquarters address.
     */
    headquarters?: {
      /**
       * City.
       */
      city?: string;
      /**
       * Country name.
       */
      country?: string;
      /**
       * ISO 3166-1 alpha-2 country code.
       */
      countryCode?: string;
      /**
       * First address line.
       */
      line1?: string;
      /**
       * Second address line, carrying city, region, postal code and country.
       */
      line2?: string;
      /**
       * State or region.
       */
      region?: string;
    };
    /**
     * Company logo URL.
     * Format: uri.
     */
    image?: string;
    /**
     * Main industry.
     */
    industry?: string;
    /**
     * LinkedIn follower count.
     */
    linkedinFollowers?: number;
    /**
     * Company LinkedIn vanity handle.
     */
    linkedinHandle?: string;
    /**
     * Company LinkedIn numeric id.
     */
    linkedinId?: string;
    /**
     * Company LinkedIn page URL.
     * Format: uri.
     */
    linkedinUrl?: string;
    /**
     * Company name.
     */
    name?: string;
    /**
     * Every other office FullEnrich holds for the company.
     */
    offices?: PeopleSearchFullenrichOffice[];
    /**
     * Specialties the company lists for itself.
     */
    specialties?: string[];
    /**
     * Company website URL.
     * Format: uri.
     */
    website?: string;
  };
  /**
   * Country name.
   */
  country?: string;
  /**
   * ISO 3166-1 alpha-2 country code.
   */
  countryCode?: string;
  /**
   * Profile summary text.
   */
  description?: string;
  /**
   * Education history.
   */
  educations?: PeopleSearchFullenrichEducation[];
  /**
   * Known employment history.
   */
  experience?: PeopleSearchFullenrichExperience[];
  /**
   * First name.
   */
  firstName?: string;
  /**
   * Person's full name.
   */
  fullName: string;
  /**
   * LinkedIn headline.
   */
  headline?: string;
  /**
   * True while FullEnrich treats the role as current.
   */
  isCurrent?: boolean;
  /**
   * UTC epoch timestamp in seconds (Unix time) the current role started. Multiply by 1000 for a JS Date in milliseconds.
   */
  jobStartUtc?: number;
  /**
   * Current job title.
   */
  jobTitle?: string;
  /**
   * Languages the person speaks.
   */
  languages?: PeopleSearchFullenrichLanguage[];
  /**
   * Last name.
   */
  lastName?: string;
  /**
   * LinkedIn connection count.
   */
  linkedinConnections?: number;
  /**
   * LinkedIn vanity handle.
   */
  linkedinHandle?: string;
  /**
   * LinkedIn numeric member id.
   */
  linkedinId?: string;
  /**
   * LinkedIn profile URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * FullEnrich's own person identifier.
   */
  personId?: string;
  /**
   * State or region.
   */
  region?: string;
  /**
   * Seniority band for the current role, e.g. Manager, C-level.
   */
  seniority?: string;
  /**
   * Skills the person lists.
   */
  skills?: string[];
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichOffice {
  /**
   * First address line.
   */
  line1?: string;
  /**
   * Second address line, carrying city, region, postal code and country.
   */
  line2?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichEducation {
  /**
   * Degree earned.
   */
  degree?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) study ended. Multiply by 1000 for a JS Date in milliseconds.
   */
  endUtc?: number;
  /**
   * School name.
   */
  schoolName: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) study started. Multiply by 1000 for a JS Date in milliseconds.
   */
  startUtc?: number;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichExperience {
  /**
   * Employer headquarters city.
   */
  companyCity?: string;
  /**
   * Employer headquarters country.
   */
  companyCountry?: string;
  /**
   * Employer description.
   */
  companyDescription?: string;
  /**
   * Employer primary domain.
   */
  companyDomain?: string;
  /**
   * Year the employer was founded.
   */
  companyFoundedYear?: number;
  /**
   * Employer headcount.
   * Range: minimum 0.
   */
  companyHeadcount?: number;
  /**
   * Employer headcount range, e.g. 5001-10000.
   */
  companyHeadcountRange?: string;
  /**
   * FullEnrich identifier for the employer.
   */
  companyId?: string;
  /**
   * Employer logo URL.
   * Format: uri.
   */
  companyImage?: string;
  /**
   * Employer primary industry.
   */
  companyIndustry?: string;
  /**
   * Employer LinkedIn numeric id.
   */
  companyLinkedinId?: string;
  /**
   * Employer LinkedIn page URL.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Employer name.
   */
  companyName?: string;
  /**
   * Employer headquarters region or state.
   */
  companyRegion?: string;
  /**
   * Employer headquarters street address.
   */
  companyStreet?: string;
  /**
   * Employer company type, e.g. Privately Held.
   */
  companyType?: string;
  /**
   * Employer website URL.
   * Format: uri.
   */
  companyWebsite?: string;
  /**
   * Whether this is a current role.
   */
  isCurrent?: boolean;
  /**
   * Seniority band for the role.
   */
  seniority?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  startUtc?: number;
  /**
   * Role title.
   */
  title?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchFullenrichLanguage {
  /**
   * Language name.
   */
  language: string;
  /**
   * Proficiency band, e.g. FULL_PROFESSIONAL.
   */
  proficiency?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of People Search - FullEnrich (people_search.fullenrich).
 */
export interface PeopleSearchFullenrichData {
  /**
   * Cursor for the next page, or null when this lane is complete. Send it back as cursor.
   */
  nextCursor?: string | null;
  /**
   * Rows skipped before this page.
   */
  offset?: number;
  /**
   * Matching people, each with their current employer's firmographic record. Email addresses and phone numbers are not included; FullEnrich reveals those through its enrichment endpoints.
   */
  people: PeopleSearchFullenrichPeople[];
  /**
   * Rows matching the filters across all pages.
   */
  total?: number;
}

/**
 * Input for People Search - Lusha (people_search.lusha).
 */
export interface PeopleSearchLushaInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Exclude contacts whose phone numbers are all marked do-not-call.
   */
  excludeDnc?: boolean;
  /**
   * Prospecting filters. Two keys are accepted, contacts and companies, and each takes an include and an exclude object. contacts.include and contacts.exclude accept departments, seniority, locations, existing_data_points and signals; companies.include and companies.exclude accept names, locations, sizes, revenues, technologies, intentTopics, mainIndustriesIds, subIndustriesIds, naicsCodes and sicCodes. Locations are objects such as {"country": "United States"}; sizes and revenues are ranges such as {"min": 200, "max": 500}. Example: {"companies": {"include": {"names": ["PostHog"]}}, "contacts": {"include": {"departments": ["Engineering & Technical"]}}}.
   */
  filters: {
    /**
     * Company-level include and exclude filters.
     */
    companies?: {};
    /**
     * Person-level include and exclude filters.
     */
    contacts?: {};
  };
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Include contacts Lusha holds only partial information for. Defaults to true upstream.
   */
  includePartialContact?: boolean;
  /**
   * Which page of results to return. Lusha charges one flat price per page whatever its size.
   */
  pages?: {
    /**
     * Zero-based page number.
     * Range: minimum 0.
     * Default: 0.
     */
    page?: number;
    /**
     * Contacts per page. Lusha rejects a size below 10 or above 100.
     * Range: minimum 10, maximum 100.
     * Default: 10.
     */
    size?: number;
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

export interface PeopleSearchLushaPeople {
  /**
   * What Lusha holds for this contact and would return on reveal. Every flag is a boolean; privateEmail can also come back as a redaction marker.
   */
  available?: {
    /**
     * Employer city is available.
     */
    companyCity?: boolean;
    /**
     * Employer country is available.
     */
    companyCountry?: boolean;
    /**
     * Employer headcount is available.
     */
    companyEmployeesCount?: boolean;
    /**
     * Employer funding data is available.
     */
    companyFunding?: boolean;
    /**
     * Employer buying-intent data is available.
     */
    companyIntent?: boolean;
    /**
     * Employer top-level industry is available.
     */
    companyMainIndustry?: boolean;
    /**
     * Employer revenue is available.
     */
    companyRevenue?: boolean;
    /**
     * Employer sub-industry is available.
     */
    companySubIndustry?: boolean;
    /**
     * Employer technology stack is available.
     */
    companyTechnologies?: boolean;
    /**
     * The person's location is available.
     */
    contactLocation?: boolean;
    /**
     * A department is available.
     */
    department?: boolean;
    /**
     * A direct dial is available.
     */
    directPhone?: boolean;
    /**
     * Any email address is available.
     */
    emails?: boolean;
    /**
     * A mobile number is available.
     */
    mobilePhone?: boolean;
    /**
     * Any phone number is available.
     */
    phones?: boolean;
    /**
     * A personal email address is available. Lusha redacts this flag on some plans, in which case it is a string marker rather than a boolean.
     */
    privateEmail?: unknown;
    /**
     * A seniority band is available.
     */
    seniority?: boolean;
    /**
     * A social profile link is available.
     */
    socialLink?: boolean;
    /**
     * A work email address is available.
     */
    workEmail?: boolean;
  };
  /**
   * Employer description.
   */
  companyDescription?: string;
  /**
   * Fully qualified host for the employer's website.
   */
  companyDomain?: string;
  /**
   * Lusha's own company identifier for the employer.
   */
  companyId?: string;
  /**
   * Employer name.
   */
  companyName?: string;
  /**
   * Lusha's contact identifier for this search row.
   */
  contactId?: string;
  /**
   * Person's full name.
   */
  fullName: string;
  /**
   * Employer logo URL.
   * Format: uri.
   */
  image?: string;
  /**
   * True when this contact has already been revealed on the Lusha account.
   */
  isShown?: boolean;
  /**
   * Current job title.
   */
  jobTitle?: string;
  /**
   * Lusha's own person identifier.
   */
  personId?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of People Search - Lusha (people_search.lusha).
 */
export interface PeopleSearchLushaData {
  /**
   * Zero-based page number this response holds.
   */
  currentPage?: number;
  /**
   * Contacts returned on this page.
   */
  pageLength?: number;
  /**
   * Contacts on this page. Email addresses and phone numbers are not included here; reveal them with Person Enrichment - Lusha.
   */
  people: PeopleSearchLushaPeople[];
  /**
   * Total contacts matching the filters across all pages.
   */
  totalResults?: number;
}

/**
 * Input for People Search - People Data Labs (people_search.peopledatalabs).
 */
export interface PeopleSearchPeopledatalabsInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Comma-separated People Data Labs fields to include, or a leading - list to exclude. Projection changes the payload only; billing still follows profiles returned.
   */
  dataInclude?: string;
  /**
   * People Data Labs dataset to search, when your plan exposes more than one.
   */
  dataset?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum profiles to return. Every profile returned is billed, so start at 1 to check a query and read total before asking for more.
   * Range: minimum 1, maximum 59.
   * Default: 10.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Elasticsearch-style query over the People Data Labs person dataset, e.g. {"bool": {"must": [{"term": {"job_company_website": "posthog.com"}}]}}. Send this or sql, never both.
   */
  query?: {};
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * People Data Labs SQL, in the form SELECT * FROM person WHERE ... . String literals take single quotes, only SELECT * is supported, and field names must be real People Data Labs person fields including nested subfields such as experience.title.name. Do not include a LIMIT clause; People Data Labs rejects it. Use limit instead. Send this or query, never both.
   */
  sql?: string;
  /**
   * Return text in title case instead of People Data Labs' lowercase default.
   */
  titlecase?: boolean;
}

export interface PeopleSearchPeopledatalabsPeople {
  /**
   * People Data Labs' qualitative score for how recently the profile showed activity.
   */
  activityScore?: string;
  /**
   * What People Data Labs holds for this person but does not return in search. Each flag is true when Person Enrichment - People Data Labs would return that field for this profile.
   */
  available?: {
    /**
     * A birth date is available.
     */
    birthDate?: boolean;
    /**
     * A birth year is available.
     */
    birthYear?: boolean;
    /**
     * A Facebook numeric id is available.
     */
    facebookId?: boolean;
    /**
     * A Facebook profile URL is available.
     */
    facebookUrl?: boolean;
    /**
     * A Facebook handle is available.
     */
    facebookUsername?: boolean;
    /**
     * A GitHub profile URL is available.
     */
    githubUrl?: boolean;
    /**
     * A GitHub handle is available.
     */
    githubUsername?: boolean;
    /**
     * A second address line is available.
     */
    locationAddressLine2?: boolean;
    /**
     * The current street address is available.
     */
    locationStreetAddress?: boolean;
    /**
     * A mobile phone number is available.
     */
    mobilePhone?: boolean;
    /**
     * Personal email addresses are available.
     */
    personalEmails?: boolean;
    /**
     * Phone numbers are available.
     */
    phoneNumbers?: boolean;
    /**
     * A recommended personal email address is available.
     */
    recommendedPersonalEmail?: boolean;
    /**
     * Street addresses are available.
     */
    streetAddresses?: boolean;
    /**
     * An X (Twitter) profile URL is available.
     */
    twitterUrl?: boolean;
    /**
     * An X (Twitter) handle is available.
     */
    twitterUsername?: boolean;
    /**
     * A work email address is available.
     */
    workEmail?: boolean;
  };
  /**
   * Second line of the current employer's headquarters address.
   */
  companyAddressLine2?: string;
  /**
   * Current employer headquarters continent.
   */
  companyContinent?: string;
  /**
   * Current employer Facebook page URL.
   * Format: uri.
   */
  companyFacebookUrl?: string;
  /**
   * Year the current employer was founded.
   */
  companyFounded?: number;
  /**
   * Current employer headquarters coordinates as "lat,lon".
   */
  companyGeo?: string;
  /**
   * People Data Labs company id for the current employer.
   */
  companyId?: string;
  /**
   * Current employer industry.
   */
  companyIndustry?: string;
  /**
   * Current employer industry on People Data Labs' newer taxonomy.
   */
  companyIndustryV2?: string;
  /**
   * Current employer LinkedIn numeric id.
   */
  companyLinkedinId?: string;
  /**
   * Current employer LinkedIn page URL.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Current employer headquarters city.
   */
  companyLocality?: string;
  /**
   * Current employer headquarters country.
   */
  companyLocationCountry?: string;
  /**
   * Current employer headquarters as one display string.
   */
  companyLocationName?: string;
  /**
   * Current employer headquarters metro area.
   */
  companyMetro?: string;
  /**
   * Current employer name.
   */
  companyName?: string;
  /**
   * Current employer headquarters postal code.
   */
  companyPostalCode?: string;
  /**
   * Current employer headquarters state or region.
   */
  companyRegion?: string;
  /**
   * Current employer headcount band.
   */
  companySize?: string;
  /**
   * Current employer headquarters street address.
   */
  companyStreetAddress?: string;
  /**
   * Current employer X (Twitter) profile URL.
   * Format: uri.
   */
  companyTwitterUrl?: string;
  /**
   * Current employer website domain.
   */
  companyWebsite?: string;
  /**
   * Continent.
   */
  continent?: string;
  /**
   * Every country associated with the person.
   */
  countries?: string[];
  /**
   * Country.
   */
  country?: string;
  /**
   * Education history.
   */
  education?: PeopleSearchPeopledatalabsEducation[];
  /**
   * One entry per email address People Data Labs holds for the person. Search returns the kind only; the address itself comes from Person Enrichment - People Data Labs.
   */
  emails?: PeopleSearchPeopledatalabsEmail[];
  /**
   * Work history.
   */
  experience?: PeopleSearchPeopledatalabsExperience[];
  /**
   * First name.
   */
  firstName?: string;
  /**
   * Person's full name.
   */
  fullName: string;
  /**
   * Coordinates as "lat,lon".
   */
  geo?: string;
  /**
   * Industry the person works in.
   */
  industry?: string;
  /**
   * Interests the person lists.
   */
  interests?: string[];
  /**
   * UTC epoch timestamp in seconds (Unix time) the person last changed jobs. Multiply by 1000 for a JS Date in milliseconds.
   */
  jobChangedUtc?: number;
  /**
   * When the current role started: YYYY, YYYY-MM or YYYY-MM-DD.
   */
  jobStartDate?: string;
  /**
   * Current job title.
   */
  jobTitle?: string;
  /**
   * Normalized title class.
   */
  jobTitleClass?: string;
  /**
   * Seniority levels for the current title.
   */
  jobTitleLevels?: string[];
  /**
   * Normalized role for the current title.
   */
  jobTitleRole?: string;
  /**
   * Normalized sub-role for the current title.
   */
  jobTitleSubRole?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the current role was last verified. Multiply by 1000 for a JS Date in milliseconds.
   */
  jobVerifiedUtc?: number;
  /**
   * Last initial.
   */
  lastInitial?: string;
  /**
   * Last name.
   */
  lastName?: string;
  /**
   * LinkedIn numeric member id.
   */
  linkedinId?: string;
  /**
   * LinkedIn profile URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * LinkedIn vanity handle.
   */
  linkedinUsername?: string;
  /**
   * City.
   */
  locality?: string;
  /**
   * Where the person lives, as one display string.
   */
  locationName?: string;
  /**
   * Every location People Data Labs has associated with the person.
   */
  locationNames?: string[];
  /**
   * UTC epoch timestamp in seconds (Unix time) the person's location was last updated. Multiply by 1000 for a JS Date in milliseconds.
   */
  locationUpdatedUtc?: number;
  /**
   * Metro area.
   */
  metro?: string;
  /**
   * Middle initial.
   */
  middleInitial?: string;
  /**
   * Middle name.
   */
  middleName?: string;
  /**
   * People Data Labs persistent person id. Send it to Person Enrichment - People Data Labs to re-pull this record.
   */
  pdlId?: string;
  /**
   * Postal code.
   */
  postalCode?: string;
  /**
   * People Data Labs' qualitative score for how complete the profile is.
   */
  profileScore?: string;
  /**
   * Networks People Data Labs has a profile for. Search returns the network name only; profile URLs and handles come from Person Enrichment - People Data Labs.
   */
  profiles?: PeopleSearchPeopledatalabsProfile[];
  /**
   * State or region.
   */
  region?: string;
  /**
   * Every region associated with the person.
   */
  regions?: string[];
  /**
   * Sex recorded for the person.
   */
  sex?: string;
  /**
   * Skills the person lists.
   */
  skills?: string[];
  [extra: string]: unknown;
}

export interface PeopleSearchPeopledatalabsEducation {
  /**
   * Degrees earned.
   */
  degrees?: string[];
  /**
   * When study ended.
   */
  endDate?: string;
  /**
   * Grade point average, when published.
   */
  gpa?: number;
  /**
   * Majors studied.
   */
  majors?: string[];
  /**
   * Minors studied.
   */
  minors?: string[];
  /**
   * PeopleDataLabs identifier for the school.
   */
  schoolId?: string;
  /**
   * School LinkedIn page URL.
   * Format: uri.
   */
  schoolLinkedinUrl?: string;
  /**
   * School location as one display string.
   */
  schoolLocationName?: string;
  /**
   * School name.
   */
  schoolName?: string;
  /**
   * School type.
   */
  schoolType?: string;
  /**
   * School website domain.
   */
  schoolWebsite?: string;
  /**
   * When study started.
   */
  startDate?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchPeopledatalabsEmail {
  /**
   * Address kind, e.g. professional or personal.
   */
  type?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchPeopledatalabsExperience {
  /**
   * Employer headquarters continent.
   */
  companyContinent?: string;
  /**
   * Employer Facebook page URL.
   * Format: uri.
   */
  companyFacebookUrl?: string;
  /**
   * Year the employer was founded.
   */
  companyFounded?: number;
  /**
   * Employer headquarters coordinates as "lat,lon".
   */
  companyGeo?: string;
  /**
   * People Data Labs company id for the employer.
   */
  companyId?: string;
  /**
   * Employer industry.
   */
  companyIndustry?: string;
  /**
   * Employer industry on the newer PeopleDataLabs taxonomy.
   */
  companyIndustryV2?: string;
  /**
   * Employer LinkedIn numeric id.
   */
  companyLinkedinId?: string;
  /**
   * Employer LinkedIn page URL.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Employer headquarters locality.
   */
  companyLocality?: string;
  /**
   * Employer headquarters country.
   */
  companyLocationCountry?: string;
  /**
   * Employer headquarters location as one display string.
   */
  companyLocationName?: string;
  /**
   * Employer headquarters metro area.
   */
  companyMetro?: string;
  /**
   * Employer name.
   */
  companyName?: string;
  /**
   * Employer headquarters region or state.
   */
  companyRegion?: string;
  /**
   * Employer headcount band.
   */
  companySize?: string;
  /**
   * Employer X or Twitter profile URL.
   * Format: uri.
   */
  companyTwitterUrl?: string;
  /**
   * Employer website domain.
   */
  companyWebsite?: string;
  /**
   * When the role ended, absent while the role is current.
   */
  endDate?: string;
  /**
   * True for the role People Data Labs treats as current.
   */
  isPrimary?: boolean;
  /**
   * When the role started: YYYY, YYYY-MM or YYYY-MM-DD.
   */
  startDate?: string;
  /**
   * Job title held.
   */
  title?: string;
  /**
   * Normalized job class.
   */
  titleClass?: string;
  /**
   * Seniority levels for the title.
   */
  titleLevels?: string[];
  /**
   * Normalized role for the title.
   */
  titleRole?: string;
  /**
   * Normalized job sub-role.
   */
  titleSubRole?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchPeopledatalabsProfile {
  /**
   * Network name, e.g. linkedin, facebook, twitter.
   */
  network: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of People Search - People Data Labs (people_search.peopledatalabs).
 */
export interface PeopleSearchPeopledatalabsData {
  /**
   * Version of the People Data Labs dataset these records came from.
   */
  datasetVersion?: string;
  /**
   * Matching person profiles, up to limit.
   */
  people: PeopleSearchPeopledatalabsPeople[];
  /**
   * Profiles matching the query across the whole dataset, not just this page.
   */
  total?: number;
}

/**
 * Input for People Search - Prospeo (people_search.prospeo).
 */
export interface PeopleSearchProspeoInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Filter by company names or websites, e.g. {"names": {"include": ["Stripe"]}, "websites": {"include": ["stripe.com"]}}.
   */
  company?: {};
  /**
   * Filter by company characteristics, e.g. B2B, has pricing, has a free trial.
   */
  companyAttributes?: {};
  /**
   * Filter by the company's email MX provider.
   */
  companyEmailProvider?: string[];
  /**
   * Filter by founding year range.
   */
  companyFounded?: {};
  /**
   * Filter by funding stage or amount raised.
   */
  companyFunding?: {};
  /**
   * Filter by headcount within a department.
   */
  companyHeadcountByDepartment?: string[];
  /**
   * Filter by a custom employee count range.
   */
  companyHeadcountCustom?: {};
  /**
   * Filter by headcount growth.
   */
  companyHeadcountGrowth?: {};
  /**
   * Filter by Prospeo's predefined employee count bands.
   */
  companyHeadcountRange?: string[];
  /**
   * Filter by company industry.
   */
  companyIndustry?: {};
  /**
   * Filter by the roles the company is currently hiring for.
   */
  companyJobPostingHiringFor?: string[];
  /**
   * Filter by how many roles the company has open.
   */
  companyJobPostingQuantity?: {};
  /**
   * Filter by keywords found in company data.
   */
  companyKeywords?: {};
  /**
   * Filter by company headquarters location.
   */
  companyLocationSearch?: {};
  /**
   * Filter by NAICS codes.
   */
  companyNaics?: {};
  /**
   * Filter by revenue range.
   */
  companyRevenue?: {};
  /**
   * Filter by SIC codes.
   */
  companySics?: {};
  /**
   * Filter by technologies the company uses.
   */
  companyTechnology?: {};
  /**
   * Filter by ownership type.
   * One of: Private, Public, Non Profit, Other.
   */
  companyType?: "Private" | "Public" | "Non Profit" | "Other";
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Cap how many people one company may contribute to the results.
   * Range: minimum 1.
   */
  maxPersonPerCompany?: number;
  /**
   * Page number, one-based. Prospeo returns 25 results per page and charges one flat price per page.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Filter by which contact channels Prospeo holds for the person.
   */
  personContactDetails?: {};
  /**
   * Filter by department.
   */
  personDepartment?: {};
  /**
   * Duplicate-control settings exported from the Prospeo dashboard.
   */
  personDuplicateControl?: {};
  /**
   * Filter by job title, with exact, contains and boolean semantics, e.g. {"include": ["VP Sales"]}.
   */
  personJobTitle?: {};
  /**
   * Filter by where the person is located.
   */
  personLocationSearch?: {};
  /**
   * Filter by person name.
   */
  personName?: {};
  /**
   * Free-text search across person name and job title.
   */
  personNameOrJobTitle?: string;
  /**
   * Filter by seniority. Prospeo's own values are case sensitive: Founder/Owner, C-Suite, Partner, Vice President, Head, Director, Manager, Senior, Entry, Intern. Common aliases such as vp and founder are normalized before the call.
   */
  personSeniority?: {};
  /**
   * Filter by time at the current company, as a numeric range.
   */
  personTimeInCurrentCompany?: {};
  /**
   * Filter by time in the current role, as a numeric range.
   */
  personTimeInCurrentRole?: {};
  /**
   * Filter by total years of experience, as a numeric range.
   */
  personYearOfExperience?: {};
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

export interface PeopleSearchProspeoPeople {
  /**
   * The person's current employer, with Prospeo's full firmographic record.
   */
  company?: {
    /**
     * What Prospeo detects about how the company sells.
     */
    attributes?: {
      /**
       * The website offers a demo.
       */
      hasDemo?: boolean;
      /**
       * The website offers a download.
       */
      hasDownloadable?: boolean;
      /**
       * The website offers a free trial.
       */
      hasFreeTrial?: boolean;
      /**
       * The company publishes mobile apps.
       */
      hasMobileApps?: boolean;
      /**
       * The company has online reviews.
       */
      hasOnlineReviews?: boolean;
      /**
       * The website publishes pricing.
       */
      hasPricing?: boolean;
      /**
       * The company sells to businesses.
       */
      isB2b?: boolean;
    };
    /**
     * Prospeo's own company identifier. Send it back as this SKU's companyId input.
     */
    companyId?: string;
    /**
     * Company Crunchbase profile URL.
     * Format: uri.
     */
    crunchbaseUrl?: string;
    /**
     * Company description as the company writes it.
     */
    description?: string;
    /**
     * Prospeo's own AI-written company summary.
     */
    descriptionAi?: string;
    /**
     * Meta description from the company's website.
     */
    descriptionSeo?: string;
    /**
     * Primary company domain.
     */
    domain?: string;
    /**
     * How the company's email is hosted.
     */
    emailTech?: {
      /**
       * Domain the company's email addresses use.
       */
      domain?: string;
      /**
       * Mail provider behind the domain's MX records.
       */
      mxProvider?: string;
    };
    /**
     * Employees Prospeo currently counts.
     */
    employeeCount?: number;
    /**
     * Employees of this company that Prospeo holds a profile for.
     */
    employeeCountOnProspeo?: number;
    /**
     * Employee headcount band, e.g. 10000+.
     */
    employeeRange?: string;
    /**
     * Company Facebook page URL.
     * Format: uri.
     */
    facebookUrl?: string;
    /**
     * Year the company was founded.
     */
    founded?: number;
    /**
     * Funding history.
     */
    funding?: {
      /**
       * One entry per funding round.
       */
      events?: PeopleSearchProspeoEvent[];
      /**
       * Most recent funding stage.
       */
      latestStage?: string;
      /**
       * UTC epoch timestamp in seconds (Unix time) of the most recent round. Multiply by 1000 for a JS Date in milliseconds.
       */
      latestUtc?: number;
      /**
       * Number of funding rounds raised.
       */
      rounds?: number;
      /**
       * Total capital raised, in USD.
       */
      totalRaised?: number;
      /**
       * Total capital raised as a display string.
       */
      totalRaisedPrinted?: string;
    };
    /**
     * Company logo URL.
     * Format: uri.
     */
    image?: string;
    /**
     * Company industry.
     */
    industry?: string;
    /**
     * Company Instagram profile URL.
     * Format: uri.
     */
    instagramUrl?: string;
    /**
     * Open roles Prospeo currently sees for the company.
     */
    jobPostings?: {
      /**
       * Open roles currently posted.
       */
      activeCount?: number;
      /**
       * Titles of the open roles.
       */
      activeTitles?: string[];
    };
    /**
     * Keywords Prospeo assigns the company.
     */
    keywords?: string[];
    /**
     * Company LinkedIn numeric id.
     */
    linkedinId?: string;
    /**
     * Company LinkedIn page URL.
     * Format: uri.
     */
    linkedinUrl?: string;
    /**
     * Company headquarters.
     */
    location?: {
      /**
       * City.
       */
      city?: string;
      /**
       * Country name.
       */
      country?: string;
      /**
       * ISO 3166-1 alpha-2 country code.
       */
      countryCode?: string;
      /**
       * Headquarters address as one display string.
       */
      rawAddress?: string;
      /**
       * State or region.
       */
      state?: string;
    };
    /**
     * NAICS classification codes for the company.
     */
    naicsCodes?: string[];
    /**
     * Company name.
     */
    name?: string;
    /**
     * Other domains the company owns.
     */
    otherWebsites?: string[];
    /**
     * Headquarters switchboard number.
     */
    phoneHq?: {
      /**
       * Country the number belongs to.
       */
      country?: string;
      /**
       * ISO 3166-1 alpha-2 code for that country.
       */
      countryCode?: string;
      /**
       * Number in international format.
       */
      international?: string;
      /**
       * Number in national format.
       */
      national?: string;
      /**
       * Phone number as Prospeo stores it.
       */
      phone?: string;
    };
    /**
     * Annual revenue band in USD.
     */
    revenueRange?: {
      /**
       * Upper bound in USD.
       */
      max?: number;
      /**
       * Lower bound in USD.
       */
      min?: number;
    };
    /**
     * Annual revenue band as a display string.
     */
    revenueRangePrinted?: string;
    /**
     * SIC classification codes for the company.
     */
    sicCodes?: string[];
    /**
     * Technologies Prospeo detects in the company's stack.
     */
    technologies?: string[];
    /**
     * Company X (Twitter) profile URL.
     * Format: uri.
     */
    twitterUrl?: string;
    /**
     * Ownership type, e.g. Private, Public, Non Profit.
     */
    type?: string;
    /**
     * Company website URL.
     * Format: uri.
     */
    website?: string;
    /**
     * Company YouTube channel URL.
     * Format: uri.
     */
    youtubeUrl?: string;
  };
  /**
   * Work email address. Prospeo returns the address only once it is revealed; status says why it is absent otherwise.
   */
  email?: {
    /**
     * The email address, when Prospeo revealed one.
     */
    email?: string;
    /**
     * Mail provider behind the address domain, e.g. Google.
     */
    mxProvider?: string;
    /**
     * True when the address below is the full value rather than a masked preview.
     */
    revealed?: boolean;
    /**
     * Prospeo's verdict for the address, e.g. VERIFIED or UNAVAILABLE.
     */
    status?: string;
  };
  /**
   * First name.
   */
  firstName?: string;
  /**
   * Person's full name.
   */
  fullName: string;
  /**
   * LinkedIn headline.
   */
  headline?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) Prospeo last detected a job change. Multiply by 1000 for a JS Date in milliseconds.
   */
  jobChangeDetectedUtc?: number;
  /**
   * Every role Prospeo holds for the person, most recent first.
   */
  jobHistory?: PeopleSearchProspeoJobHistory[];
  /**
   * Prospeo's identifier for the current role.
   */
  jobKey?: string;
  /**
   * Current job title.
   */
  jobTitle?: string;
  /**
   * Last name.
   */
  lastName?: string;
  /**
   * LinkedIn numeric member id.
   */
  linkedinMemberId?: string;
  /**
   * LinkedIn profile URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Where the person is located.
   */
  location?: {
    /**
     * City.
     */
    city?: string;
    /**
     * Country name.
     */
    country?: string;
    /**
     * ISO 3166-1 alpha-2 country code.
     */
    countryCode?: string;
    /**
     * State or region.
     */
    state?: string;
    /**
     * IANA time zone, e.g. America/New_York.
     */
    timeZone?: string;
    /**
     * Current offset from UTC in hours.
     */
    timeZoneOffset?: number;
  };
  /**
   * Mobile phone number. Digits are masked until the number is revealed; send enrichMobile to reveal it.
   */
  mobile?: {
    /**
     * Country the number belongs to.
     */
    country?: string;
    /**
     * ISO 3166-1 alpha-2 code for that country.
     */
    countryCode?: string;
    /**
     * Number in international format.
     */
    international?: string;
    /**
     * The number as Prospeo stores it.
     */
    mobile?: string;
    /**
     * Number in national format.
     */
    national?: string;
    /**
     * True when the digits below are the full number rather than a masked preview.
     */
    revealed?: boolean;
    /**
     * Prospeo's verdict for the number, e.g. VERIFIED or UNAVAILABLE.
     */
    status?: string;
  };
  /**
   * Prospeo's own person identifier. Send it back as this SKU's personId input.
   */
  personId?: string;
  /**
   * Skills the person lists.
   */
  skills?: string[];
  [extra: string]: unknown;
}

export interface PeopleSearchProspeoEvent {
  /**
   * Amount raised in USD.
   */
  amount?: number;
  /**
   * Amount raised as a display string.
   */
  amountPrinted?: string;
  /**
   * Source URL for the round.
   * Format: uri.
   */
  link?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the round closed. Multiply by 1000 for a JS Date in milliseconds.
   */
  raisedUtc?: number;
  /**
   * Round stage, e.g. Series E-J.
   */
  stage?: string;
  [extra: string]: unknown;
}

export interface PeopleSearchProspeoJobHistory {
  /**
   * Prospeo company id for the employer.
   */
  companyId?: string;
  /**
   * Employer name.
   */
  companyName?: string;
  /**
   * True while the role is current.
   */
  current?: boolean;
  /**
   * Departments Prospeo assigns the role.
   */
  departments?: string[];
  /**
   * How long the role has run, in months.
   */
  durationMonths?: number;
  /**
   * Month the role ended, absent while current.
   */
  endMonth?: number;
  /**
   * Year the role ended, absent while current.
   */
  endYear?: number;
  /**
   * Prospeo's identifier for this role.
   */
  jobKey?: string;
  /**
   * Seniority band, e.g. C-Suite, Manager, Entry.
   */
  seniority?: string;
  /**
   * Month the role started, 1 to 12.
   */
  startMonth?: number;
  /**
   * Year the role started.
   */
  startYear?: number;
  /**
   * Job title held.
   */
  title?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of People Search - Prospeo (people_search.prospeo).
 */
export interface PeopleSearchProspeoData {
  /**
   * Page number this response holds, one-based.
   */
  currentPage?: number;
  /**
   * Matching people, each with their current employer's firmographic record. Email addresses and mobile numbers come back masked; reveal them with Person Enrichment - Prospeo.
   */
  people: PeopleSearchProspeoPeople[];
  /**
   * Results Prospeo returns per page. Prospeo fixes this at 25 and charges one flat price per page.
   */
  perPage?: number;
  /**
   * Results matching the filters across all pages.
   */
  totalCount?: number;
  /**
   * Pages of results behind these filters.
   */
  totalPages?: number;
}

/**
 * Input for People Search - QuickEnrich (people_search.quickenrich).
 */
export interface PeopleSearchQuickenrichInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Filter on city name.
   */
  city?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Filter on employer website domain.
   */
  companyDomain?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Filter on employer name.
   */
  companyName?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Filter on ISO 3166-1 alpha-2 country code, e.g. "US".
   */
  country?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Filter on employer headcount band. These bands differ from the companyEmployeeCount string returned on a result.
   */
  employeeCount?: {
    /**
     * Reject any of these values.
     */
    exclude?: (
      | "< 5"
      | "5 - 19"
      | "20 - 99"
      | "100 - 249"
      | "250 - 499"
      | "500 - 999"
      | "1000 - 4999"
      | "5000 - 9999"
      | ">10000"
      | "Not Available"
    )[];
    /**
     * Match any of these values.
     */
    include?: (
      | "< 5"
      | "5 - 19"
      | "20 - 99"
      | "100 - 249"
      | "250 - 499"
      | "500 - 999"
      | "1000 - 4999"
      | "5000 - 9999"
      | ">10000"
      | "Not Available"
    )[];
  };
  /**
   * Keep only people with a work email on file. The address itself is not returned here.
   */
  hasEmail?: boolean;
  /**
   * Keep only people with a phone on file. The number itself is not returned here.
   */
  hasPhone?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Filter on the employer's LinkedIn industry label. Values must match the QuickEnrich industry vocabulary exactly, e.g. "IT Services and IT Consulting".
   */
  industry?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Maximum people to return on this page.
   * Range: minimum 1, maximum 100.
   * Default: 10.
   */
  limit?: number;
  /**
   * Filter on words found in the employer's LinkedIn bio.
   */
  linkedinBio?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Filter on locality.
   */
  locality?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * One-based result page.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Filter on employer revenue band.
   */
  revenue?: {
    /**
     * Reject any of these values.
     */
    exclude?: (
      | "< 500k"
      | "500k - 1 Million"
      | "1 - 2.5 Million"
      | "2.5 - 5 Million"
      | "5 - 10 Million"
      | "10 - 20 Million"
      | "20 - 50 Million"
      | "50 - 100 Million"
      | "100 - 500 Million"
      | "500 Million - 1 Billion"
      | ">1 Billion"
      | "Not Available"
    )[];
    /**
     * Match any of these values.
     */
    include?: (
      | "< 500k"
      | "500k - 1 Million"
      | "1 - 2.5 Million"
      | "2.5 - 5 Million"
      | "5 - 10 Million"
      | "10 - 20 Million"
      | "20 - 50 Million"
      | "50 - 100 Million"
      | "100 - 500 Million"
      | "500 Million - 1 Billion"
      | ">1 Billion"
      | "Not Available"
    )[];
  };
  /**
   * Filter on the services the employer lists.
   */
  services?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
  /**
   * Filter on job title.
   */
  title?: {
    /**
     * Reject any of these values.
     */
    exclude?: string[];
    /**
     * Match any of these values.
     */
    include?: string[];
  };
}

export interface PeopleSearchQuickenrichPeople {
  /**
   * Street address on the employer record.
   */
  address?: string;
  /**
   * Second address line on the employer record.
   */
  addressLine2?: string;
  /**
   * City on the employer record.
   */
  city?: string;
  /**
   * Employer website domain.
   */
  companyDomain?: string;
  /**
   * Public address published on the employer home page.
   */
  companyEmail?: string;
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
   * Domain the work email resolves to.
   */
  emailDomain?: string;
  /**
   * QuickEnrich's stable record id for this person, for de-duplicating across pages.
   */
  empId?: string;
  /**
   * Person's first name.
   */
  firstName: string;
  /**
   * Whether a work email is held for this person. The address itself is masked on this SKU.
   */
  hasEmail: boolean;
  /**
   * Whether a LinkedIn profile is held for this person.
   */
  hasLinkedin: boolean;
  /**
   * Whether a phone is held for this person. The number itself is masked on this SKU.
   */
  hasPhone: boolean;
  /**
   * Person's last name.
   */
  lastName?: string;
  /**
   * Person's LinkedIn profile URL.
   */
  linkedinUrl?: string;
  /**
   * Locality on the employer record.
   */
  locality?: string;
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
 * The `data` payload of People Search - QuickEnrich (people_search.quickenrich).
 */
export interface PeopleSearchQuickenrichData {
  /**
   * Whether the upstream reports further pages beyond this one.
   */
  hasMore: boolean;
  /**
   * One-based page this response covers.
   */
  page: number;
  /**
   * Records per page upstream applied.
   */
  pageSize: number;
  /**
   * People on this page.
   */
  people: PeopleSearchQuickenrichPeople[];
  /**
   * Total records matching the request.
   */
  total: number;
  /**
   * Total pages available.
   */
  totalPages: number;
}

/**
 * Input for People Search - QuickEnrich Company Contacts (people_search.quickenrich_company).
 */
export interface PeopleSearchQuickenrichCompanyInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Company website domain, normalized upstream (example.com or https://example.com both work).
   */
  companyDomain: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * One-based result page. Each page holds up to 20 people.
   * Range: minimum 1.
   * Default: 1.
   */
  page?: number;
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
   * One job title, or several comma-separated, e.g. "CEO, CFO".
   */
  title?: string;
}

export interface PeopleSearchQuickenrichCompanyPeople {
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
  email?: string;
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
  firstName: string;
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
 * The `data` payload of People Search - QuickEnrich Company Contacts (people_search.quickenrich_company).
 */
export interface PeopleSearchQuickenrichCompanyData {
  /**
   * One-based page this response covers.
   */
  page: number;
  /**
   * Records per page upstream applied.
   */
  pageSize: number;
  /**
   * People on this page.
   */
  people: PeopleSearchQuickenrichCompanyPeople[];
  /**
   * Total records matching the request.
   */
  total: number;
  /**
   * Total pages available.
   */
  totalPages: number;
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

  /**
   * People Search - FullEnrich
   *
   * Prospect FullEnrich's person database by title, seniority, function, skill, language and location, plus any current or past employer firmographic. Every row carries the person's employer record. Billed per person returned.
   *
   * Price: $0 per request plus $0.0252 per result (maximum $2.52).
   *
   * @example
   * const res = await client.peopleSearch.fullenrich({ currentCompanyDomains: [{ exact_match: true, value: "stripe.com" }], limit: 1 });
   */
  fullenrich(
    input: PeopleSearchFullenrichInput,
    options?: RequestOptions,
  ): Promise<RunResult<PeopleSearchFullenrichData>> {
    return this._core.run("people_search.fullenrich", input, options);
  }

  /**
   * Iterate every result of People Search - FullEnrich across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterFullenrich(
    input: PeopleSearchFullenrichInput,
    options?: RequestOptions,
  ): Paginator<
    PeopleSearchFullenrichPeople,
    RunResult<PeopleSearchFullenrichData>
  > {
    return paginate<
      PeopleSearchFullenrichPeople,
      RunResult<PeopleSearchFullenrichData>
    >(
      this._core,
      "people_search.fullenrich",
      input as unknown as Record<string, unknown>,
      "people",
      false,
      options,
    );
  }

  /**
   * People Search - Lusha
   *
   * Prospect Lusha's contact database by department, seniority, job title, location, company size, industry and technology. One flat price per page; reveal a contact's email and phone with Person Enrichment - Lusha.
   *
   * Price: $0.084 per request.
   *
   * @example
   * const res = await client.peopleSearch.lusha({ filters: { companies: { include: { names: ["PostHog"] } }, contacts: { include: { departments: ["Engineering & Technical"] } } }, pages: { page: 0, size: 10 } });
   */
  lusha(
    input: PeopleSearchLushaInput,
    options?: RequestOptions,
  ): Promise<RunResult<PeopleSearchLushaData>> {
    return this._core.run("people_search.lusha", input, options);
  }

  /**
   * People Search - People Data Labs
   *
   * Search People Data Labs' person dataset with SQL or an Elasticsearch query. Results carry the professional and firmographic record plus availability flags for contact data; pull the actual email and phone with Person Enrichment - People Data Labs. Billed per profile returned.
   *
   * Price: $0 per request plus $0.168 per result (maximum $9.912).
   *
   * @example
   * const res = await client.peopleSearch.peopledatalabs({ limit: 1, sql: "SELECT * FROM person WHERE job_company_website = 'posthog.com'" });
   */
  peopledatalabs(
    input: PeopleSearchPeopledatalabsInput,
    options?: RequestOptions,
  ): Promise<RunResult<PeopleSearchPeopledatalabsData>> {
    return this._core.run("people_search.peopledatalabs", input, options);
  }

  /**
   * People Search - Prospeo
   *
   * Prospect Prospeo's contact database by job title, department, seniority, experience, location and any company firmographic. One flat price per page of 25.
   *
   * Price: $0.066 per request.
   *
   * @example
   * const res = await client.peopleSearch.prospeo({ company: { websites: { include: ["stripe.com"] } }, page: 1 });
   */
  prospeo(
    input: PeopleSearchProspeoInput,
    options?: RequestOptions,
  ): Promise<RunResult<PeopleSearchProspeoData>> {
    return this._core.run("people_search.prospeo", input, options);
  }

  /**
   * People Search - QuickEnrich
   *
   * Build a prospect list by title, industry, headcount, revenue, or location, and see which people have a work email or phone on file before you pay to reveal one. Contact values themselves are masked here; use Person Enrichment or the QuickEnrich company contacts search to resolve them.
   *
   * Price: $0.0005 per request.
   *
   * @example
   * const res = await client.peopleSearch.quickenrich({ country: { include: ["US"] }, hasEmail: true, limit: 2, title: { include: ["CEO"] } });
   */
  quickenrich(
    input: PeopleSearchQuickenrichInput,
    options?: RequestOptions,
  ): Promise<RunResult<PeopleSearchQuickenrichData>> {
    return this._core.run("people_search.quickenrich", input, options);
  }

  /**
   * People Search - QuickEnrich Company Contacts
   *
   * List the known contacts at one company domain, with work emails and direct phone lines where they are held. Returns up to 20 people per page for a flat per-request price. Coverage is strongest for small and local businesses.
   *
   * Price: $0.0072 per request.
   *
   * @example
   * const res = await client.peopleSearch.quickenrichCompany({ companyDomain: "southmemphisfence.com" });
   */
  quickenrichCompany(
    input: PeopleSearchQuickenrichCompanyInput,
    options?: RequestOptions,
  ): Promise<RunResult<PeopleSearchQuickenrichCompanyData>> {
    return this._core.run("people_search.quickenrich_company", input, options);
  }
}
