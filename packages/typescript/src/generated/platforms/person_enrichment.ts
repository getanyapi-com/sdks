// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Person Enrichment - Aviato (person_enrichment.aviato).
 */
export interface PersonEnrichmentAviatoInput {
  angelListID?: string;
  crunchbaseID?: string;
  /**
   * Format: email.
   */
  email?: string;
  id?: string;
  linkedinEntityId?: string;
  linkedinID?: string;
  /**
   * Format: uri.
   */
  linkedinURL?: string;
  polyworkID?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  require?: string[];
  signalNfxID?: string;
  twitterID?: string;
}

export interface PersonEnrichmentAviatoCertification {
  /**
   * Aviato's company identifier for the issuer.
   */
  companyId?: string;
  /**
   * Company that issued the certification.
   */
  companyName?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  expiresUtc?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  issuedUtc?: number;
  /**
   * Certification name.
   */
  name?: string;
  /**
   * URL of the certification or its issuer.
   */
  url?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentAviatoDegree {
  /**
   * Degree awarded, e.g. B.S.
   */
  degree?: string;
  /**
   * Aviato's record class for this entry, e.g. "company" or "school".
   */
  entityType?: string;
  /**
   * Field of study the degree is in.
   */
  fieldOfStudy?: string;
  /**
   * Aviato's education-record identifier this degree was awarded for. It matches an educationId in the education array.
   */
  personEducationId?: string;
  /**
   * Aviato's person identifier this degree belongs to. Same value as the top-level aviatoId.
   */
  personId?: string;
  /**
   * School that awarded the degree.
   */
  school?: string;
  /**
   * Aviato's identifier for the school.
   */
  schoolId?: string;
  /**
   * School's LinkedIn vanity handle.
   */
  schoolLinkedinHandle?: string;
  /**
   * LinkedIn's own numeric identifier for the school on this record.
   */
  schoolLinkedinNumericId?: string;
  /**
   * Where the school is located.
   */
  schoolLocation?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentAviatoEducation {
  /**
   * Aviato's identifier for this education record.
   */
  educationId?: string;
  /**
   * LinkedIn's own numeric identifier for this education entry.
   */
  educationLinkedinNumericId?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  endedUtc?: number;
  /**
   * Aviato's record class for this entry, e.g. "company" or "school".
   */
  entityType?: string;
  /**
   * Aviato's person identifier this education record belongs to. Same value as the top-level aviatoId.
   */
  personId?: string;
  /**
   * School name.
   */
  school?: string;
  /**
   * School name on Aviato's school record. Duplicates the school field.
   */
  schoolFullName?: string;
  /**
   * Aviato's identifier for the school.
   */
  schoolId?: string;
  /**
   * School's LinkedIn vanity handle.
   */
  schoolLinkedinHandle?: string;
  /**
   * LinkedIn's own numeric identifier for the school on this record.
   */
  schoolLinkedinNumericId?: string;
  /**
   * Where the school is located.
   */
  schoolLocation?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  startedUtc?: number;
  /**
   * Subject studied.
   */
  subject?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentAviatoExperience {
  /**
   * Employer's AngelList profile URL.
   */
  companyAngelListUrl?: string;
  /**
   * Employer name on Aviato's company record. Usually identical to companyName, but it can differ when the company was renamed or acquired.
   */
  companyCanonicalName?: string;
  /**
   * Employer's contact page as Aviato records it. Aviato sometimes returns a malformed value here that runs two host names together into one path, and we pass it through as returned rather than guessing the intended link.
   */
  companyContactUrl?: string;
  /**
   * Employer's country.
   */
  companyCountry?: string;
  /**
   * Employer's Crunchbase profile URL.
   */
  companyCrunchbaseUrl?: string;
  /**
   * What the employer does.
   */
  companyDescription?: string;
  /**
   * Employer's Facebook page URL.
   */
  companyFacebookUrl?: string;
  /**
   * Employer's Golden knowledge-base profile URL.
   */
  companyGoldenUrl?: string;
  /**
   * Aviato's company identifier for the employer.
   */
  companyId?: string;
  /**
   * Employer's industries in Aviato's taxonomy.
   */
  companyIndustries?: string[];
  /**
   * Employer's industries as LinkedIn labels them.
   */
  companyLinkedinIndustries?: string[];
  /**
   * LinkedIn's own numeric identifier for the company on this record.
   */
  companyLinkedinNumericId?: string;
  /**
   * Employer's LinkedIn company page URL.
   */
  companyLinkedinUrl?: string;
  /**
   * Employer's city.
   */
  companyLocality?: string;
  /**
   * Employer name.
   */
  companyName?: string;
  /**
   * Employer's PitchBook profile URL.
   */
  companyPitchbookUrl?: string;
  /**
   * Identifier on the nested Aviato company record. Same value as companyId.
   */
  companyRecordId?: string;
  /**
   * Employer's state or region.
   */
  companyRegion?: string;
  /**
   * Employer's Twitter/X profile URL.
   */
  companyTwitterUrl?: string;
  /**
   * Employer's website URL.
   */
  companyWebsiteUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  endedUtc?: number;
  /**
   * Aviato's record class for this entry, e.g. "company" or "school".
   */
  entityType?: string;
  /**
   * Aviato's person identifier this experience belongs to. Same value as the top-level aviatoId.
   */
  personId?: string;
  /**
   * Roles held at this employer.
   */
  positions?: PersonEnrichmentAviatoPosition[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  startedUtc?: number;
  [extra: string]: unknown;
}

export interface PersonEnrichmentAviatoPosition {
  /**
   * Department the role sits in, e.g. EXECUTIVE.
   */
  department?: string;
  /**
   * Role description as written on the profile.
   */
  description?: string;
  /**
   * Employment type, e.g. Full-time.
   */
  employmentType?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  endedUtc?: number;
  /**
   * Where the role was based.
   */
  location?: string;
  /**
   * Seniority score for the role; higher is more senior.
   */
  seniorityScore?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  startedUtc?: number;
  /**
   * Job title.
   */
  title?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentAviatoLanguage {
  /**
   * Language name.
   */
  name?: string;
  /**
   * Proficiency level, e.g. NATIVE_OR_BILINGUAL.
   */
  proficiency?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Person Enrichment - Aviato (person_enrichment.aviato).
 */
export interface PersonEnrichmentAviatoData {
  /**
   * Profile about/summary text.
   */
  about?: string;
  /**
   * Aviato's own person identifier. Send it back as this SKU's id input to re-enrich the same person.
   */
  aviatoId?: string;
  /**
   * Certifications listed on the profile.
   */
  certifications?: PersonEnrichmentAviatoCertification[];
  /**
   * Country the person is located in.
   */
  country?: string;
  /**
   * Crunchbase profile URL.
   */
  crunchbaseUrl?: string;
  /**
   * Degrees earned.
   */
  degrees?: PersonEnrichmentAviatoDegree[];
  /**
   * Schools attended.
   */
  education?: PersonEnrichmentAviatoEducation[];
  /**
   * True when an email address is known for this person.
   */
  emailAvailable?: boolean;
  /**
   * Aviato's record type for this result. It is always person on this SKU, so it repeats what the endpoint already promises.
   */
  entityType?: string;
  /**
   * Work history, one entry per company, most recent first.
   */
  experience?: PersonEnrichmentAviatoExperience[];
  /**
   * Facebook profile URL.
   */
  facebookUrl?: string;
  /**
   * Person's first name.
   */
  firstName?: string;
  /**
   * Gender recorded for the person.
   */
  gender?: string;
  /**
   * Golden knowledge-base profile URL for the person.
   */
  goldenUrl?: string;
  /**
   * LinkedIn headline.
   */
  headline?: string;
  /**
   * Career highlight labels, e.g. employeeDuringIPO.
   */
  highlights?: string[];
  /**
   * Industries the person has invested in, as Aviato returns them. Deliberately untyped: the field is empty in every response we have captured, so the value passes through without a shape guarantee.
   */
  investedIndustries?: unknown;
  /**
   * Funding-round stages the person has invested in.
   */
  investedRounds?: string[];
  /**
   * Investor categories Aviato assigns to the person. Deliberately untyped: the field is empty in every response we have captured, so the value passes through without a shape guarantee.
   */
  investorCategories?: unknown;
  /**
   * One-sentence investor summary of the person.
   */
  investorSummary?: string;
  /**
   * Investor classification, e.g. angel or investment_partner.
   */
  investorType?: string;
  /**
   * Languages listed on the profile.
   */
  languages?: PersonEnrichmentAviatoLanguage[];
  /**
   * Person's last name.
   */
  lastName?: string;
  /**
   * Latitude of the person's city.
   */
  latitude?: number;
  /**
   * Number of LinkedIn connections.
   * Range: minimum 0.
   */
  linkedinConnections?: number;
  /**
   * LinkedIn's opaque member URN identifier. Accepted back as this SKU's linkedinEntityId input.
   */
  linkedinEntityId?: string;
  /**
   * Number of LinkedIn followers.
   * Range: minimum 0.
   */
  linkedinFollowers?: number;
  /**
   * LinkedIn vanity handle, the last path segment of the profile URL.
   */
  linkedinHandle?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  linkedinJoinedUtc?: number;
  /**
   * LinkedIn's numeric member identifier, as a string.
   */
  linkedinNumericId?: string;
  /**
   * True when the profile is an Open Profile, so anyone may message it.
   */
  linkedinOpenProfile?: boolean;
  /**
   * True when the profile holds a LinkedIn Premium subscription.
   */
  linkedinPremium?: boolean;
  /**
   * LinkedIn profile URL.
   */
  linkedinUrl?: string;
  /**
   * City the person is located in.
   */
  locality?: string;
  /**
   * Location as a single display string, e.g. Boston, Massachusetts, United States.
   */
  location?: string;
  /**
   * The person's location broken into place tiers, each with Aviato's place identifier, name, place type and geometry.
   */
  locationDetails?: {
    /**
     * Continent tier of the person's location.
     */
    continent?: {
      /**
       * Area of the place in square degrees.
       */
      areaSquareDegrees?: number;
      /**
       * Bounding box of the place as minLon,minLat,maxLon,maxLat.
       */
      boundingBox?: string;
      /**
       * Latitude of the place centre.
       */
      latitude?: number;
      /**
       * Longitude of the place centre.
       */
      longitude?: number;
      /**
       * Place name for this tier.
       */
      name?: string;
      /**
       * Aviato's place identifier for this tier.
       */
      placeId?: string;
      /**
       * Aviato's label for this tier, for example locality.
       */
      placeType?: string;
    };
    /**
     * Country tier of the person's location. Its name duplicates the top-level country field.
     */
    country?: {
      /**
       * Area of the place in square degrees.
       */
      areaSquareDegrees?: number;
      /**
       * Bounding box of the place as minLon,minLat,maxLon,maxLat.
       */
      boundingBox?: string;
      /**
       * Latitude of the place centre.
       */
      latitude?: number;
      /**
       * Longitude of the place centre.
       */
      longitude?: number;
      /**
       * Place name for this tier.
       */
      name?: string;
      /**
       * Aviato's place identifier for this tier.
       */
      placeId?: string;
      /**
       * Aviato's label for this tier, for example locality.
       */
      placeType?: string;
    };
    /**
     * County tier of the person's location.
     */
    county?: {
      /**
       * Area of the place in square degrees.
       */
      areaSquareDegrees?: number;
      /**
       * Bounding box of the place as minLon,minLat,maxLon,maxLat.
       */
      boundingBox?: string;
      /**
       * Latitude of the place centre.
       */
      latitude?: number;
      /**
       * Longitude of the place centre.
       */
      longitude?: number;
      /**
       * Place name for this tier.
       */
      name?: string;
      /**
       * Aviato's place identifier for this tier.
       */
      placeId?: string;
      /**
       * Aviato's label for this tier, for example locality.
       */
      placeType?: string;
    };
    /**
     * Local administrative area tier of the person's location, such as the town or city government area.
     */
    localAdmin?: {
      /**
       * Area of the place in square degrees.
       */
      areaSquareDegrees?: number;
      /**
       * Bounding box of the place as minLon,minLat,maxLon,maxLat.
       */
      boundingBox?: string;
      /**
       * Latitude of the place centre.
       */
      latitude?: number;
      /**
       * Longitude of the place centre.
       */
      longitude?: number;
      /**
       * Place name for this tier.
       */
      name?: string;
      /**
       * Aviato's place identifier for this tier.
       */
      placeId?: string;
      /**
       * Aviato's label for this tier, for example locality.
       */
      placeType?: string;
    };
    /**
     * City tier of the person's location. Its name duplicates the top-level locality field, and its latitude and longitude duplicate the top-level latitude and longitude.
     */
    locality?: {
      /**
       * Area of the place in square degrees.
       */
      areaSquareDegrees?: number;
      /**
       * Bounding box of the place as minLon,minLat,maxLon,maxLat.
       */
      boundingBox?: string;
      /**
       * Latitude of the place centre.
       */
      latitude?: number;
      /**
       * Longitude of the place centre.
       */
      longitude?: number;
      /**
       * Place name for this tier.
       */
      name?: string;
      /**
       * Aviato's place identifier for this tier.
       */
      placeId?: string;
      /**
       * Aviato's label for this tier, for example locality.
       */
      placeType?: string;
    };
    /**
     * State or region tier of the person's location. Its name duplicates the top-level region field.
     */
    region?: {
      /**
       * Area of the place in square degrees.
       */
      areaSquareDegrees?: number;
      /**
       * Bounding box of the place as minLon,minLat,maxLon,maxLat.
       */
      boundingBox?: string;
      /**
       * Latitude of the place centre.
       */
      latitude?: number;
      /**
       * Longitude of the place centre.
       */
      longitude?: number;
      /**
       * Place name for this tier.
       */
      name?: string;
      /**
       * Aviato's place identifier for this tier.
       */
      placeId?: string;
      /**
       * Aviato's label for this tier, for example locality.
       */
      placeType?: string;
    };
  };
  /**
   * Aviato's place identifiers for the location tiers in locationDetails, broadest first.
   */
  locationIds?: number[];
  /**
   * Longitude of the person's city.
   */
  longitude?: number;
  /**
   * Person's full name.
   */
  name: string;
  /**
   * True when a personal email address is known for this person.
   */
  personalEmailAvailable?: boolean;
  /**
   * State or region the person is located in.
   */
  region?: string;
  /**
   * Skills listed on the profile.
   */
  skills?: string[];
  /**
   * Twitter/X profile URL.
   */
  twitterUrl?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  /**
   * Personal or company website URL.
   */
  websiteUrl?: string;
  /**
   * True when a work email address is known for this person.
   */
  workEmailAvailable?: boolean;
  [extra: string]: unknown;
}

/**
 * Input for Person Enrichment - BetterContact (person_enrichment.bettercontact).
 */
export interface PersonEnrichmentBettercontactInput {
  /**
   * Employer name, for when you have no domain.
   */
  company?: string;
  /**
   * Employer domain, e.g. stripe.com. The strongest company signal for the waterfall.
   */
  companyDomain?: string;
  /**
   * Arbitrary identifiers echoed back on the result, for joining the answer to your own records.
   */
  customFields?: {};
  /**
   * Contact's first name.
   */
  firstName: string;
  /**
   * Contact's last name.
   */
  lastName: string;
  /**
   * Contact's LinkedIn profile URL, which raises the match rate.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

/**
 * The `data` payload of Person Enrichment - BetterContact (person_enrichment.bettercontact).
 */
export interface PersonEnrichmentBettercontactData {
  /**
   * City.
   */
  city?: string;
  /**
   * The contact's employer.
   */
  company?: {
    /**
     * Company about text.
     */
    about?: string;
    /**
     * Address city.
     */
    addressCity?: string;
    /**
     * Address country.
     */
    addressCountry?: string;
    /**
     * Address state or region.
     */
    addressState?: string;
    /**
     * Street address.
     */
    addressStreet?: string;
    /**
     * Address postal code.
     */
    addressZipcode?: string;
    /**
     * BetterContact's own company identifier.
     */
    companyId?: string;
    /**
     * ISO 3166-1 alpha-2 country code.
     */
    countryCode?: string;
    /**
     * Company Crunchbase profile URL.
     * Format: uri.
     */
    crunchbaseUrl?: string;
    /**
     * Company description.
     */
    description?: string;
    /**
     * Map directions URL for the office.
     * Format: uri.
     */
    directionsUrl?: string;
    /**
     * Company domain.
     */
    domain?: string;
    /**
     * Employees BetterContact counts.
     */
    employees?: number;
    /**
     * Employees LinkedIn shows for the company.
     */
    employeesOnLinkedin?: number;
    /**
     * LinkedIn follower count.
     */
    followers?: number;
    /**
     * Year the company was founded.
     */
    founded?: number;
    /**
     * Headquarters as one display string.
     */
    headquarters?: string;
    /**
     * Headquarters street address.
     */
    headquartersAddress?: string;
    /**
     * Headquarters city.
     */
    headquartersCity?: string;
    /**
     * Headquarters country.
     */
    headquartersCountry?: string;
    /**
     * Company logo URL.
     * Format: uri.
     */
    image?: string;
    /**
     * Industry classification code.
     */
    industryCode?: string;
    /**
     * Company registration number.
     */
    legalId?: string;
    /**
     * Registered legal name.
     */
    legalName?: string;
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
     * Organization type.
     */
    organizationType?: string;
    /**
     * Company switchboard number.
     */
    phone?: string;
    /**
     * Employee headcount band.
     */
    size?: string;
    /**
     * Company website URL.
     * Format: uri.
     */
    website?: string;
  };
  /**
   * LinkedIn connection count.
   */
  connections?: number;
  /**
   * BetterContact's own contact identifier.
   */
  contactId?: string;
  /**
   * Country.
   */
  country?: string;
  /**
   * ISO 3166-1 alpha-2 country code.
   */
  countryCode?: string;
  /**
   * Current employer as BetterContact names it.
   */
  currentCompany?: string;
  /**
   * True when the contact is on a do-not-contact list.
   */
  doNotContact?: boolean;
  /**
   * The email address the waterfall settled on.
   */
  email?: string;
  /**
   * Mailbox provider behind the address, e.g. Google.
   */
  emailProvider?: string;
  /**
   * Deliverability verdict for the address, e.g. valid, catch_all_safe, catch_all_not_safe, undeliverable, not_found.
   */
  emailStatus?: string;
  /**
   * True when the waterfall matched a contact. A false answer is a legitimate miss and is not billed.
   */
  enriched: boolean;
  /**
   * First name.
   */
  firstName?: string;
  /**
   * LinkedIn follower count.
   */
  followers?: number;
  /**
   * Contact's full name.
   */
  fullName?: string;
  /**
   * Gender recorded for the contact.
   */
  gender?: string;
  /**
   * Contact's profile picture URL.
   * Format: uri.
   */
  image?: string;
  /**
   * Current job title.
   */
  jobTitle?: string;
  /**
   * Last name.
   */
  lastName?: string;
  /**
   * Contact's LinkedIn numeric id.
   */
  linkedinId?: string;
  /**
   * Contact's LinkedIn profile URL.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Location as one display string.
   */
  location?: string;
  /**
   * Postal code.
   */
  postalCode?: string;
  /**
   * Which data source in the waterfall produced the address.
   */
  provider?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentFullenrichBulkContact {
  /**
   * Employer name. Use this when you do not have the domain.
   */
  company_name?: string;
  /**
   * Your own tags for this entry, echoed back on the matching output row so you can join results to your records.
   */
  custom?: {};
  /**
   * Employer's website domain, e.g. stripe.com. The strongest employer signal.
   */
  domain?: string;
  /**
   * What to look for: contact.emails for work addresses, contact.personal_emails for personal ones. Required, and at least one entry. Mobile numbers are not offered here because they cost roughly ten times an email and this SKU is priced per resolved contact at the email rate.
   */
  enrich_fields: ("contact.emails" | "contact.personal_emails")[];
  /**
   * Person's first name. Pair it with last_name.
   */
  first_name?: string;
  /**
   * Person's last name. Pair it with first_name.
   */
  last_name?: string;
  /**
   * LinkedIn profile URL. On its own this is enough to identify the person.
   */
  linkedin_url?: string;
}

/**
 * Input for Bulk Person Enrichment - FullEnrich (person_enrichment.fullenrich_bulk).
 */
export interface PersonEnrichmentFullenrichBulkInput {
  /**
   * People to enrich, up to 99 per call. You are charged only for the contacts the waterfall resolves, though the funds held cover every contact you submit until the call settles. Each entry is passed to FullEnrich exactly as you write it, which is why these keys are snake_case while the rest of the API is camelCase. Give a name plus an employer (company_name or domain), or a linkedin_url, or both - more identity means a better hit rate.
   */
  contacts: PersonEnrichmentFullenrichBulkContact[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface PersonEnrichmentFullenrichBulkContact {
  /**
   * Company domain as you supplied it.
   */
  companyDomain?: string;
  /**
   * Company name as you supplied it.
   */
  companyName?: string;
  /**
   * The tags you attached to this entry, echoed back so you can join rows to your own records.
   */
  custom?: {};
  /**
   * Best work email FullEnrich found for this person.
   */
  email?: string;
  /**
   * Deliverability verdict for that address, e.g. DELIVERABLE or HIGH_PROBABILITY.
   */
  emailStatus?: string;
  /**
   * First name.
   */
  firstName?: string;
  /**
   * Full name.
   */
  fullName?: string;
  /**
   * Last name.
   */
  lastName?: string;
  /**
   * Personal addresses found, each with its own deliverability verdict.
   */
  personalEmails?: PersonEnrichmentFullenrichBulkPersonalEmail[];
  /**
   * The person behind the match: identity, location, current role and employer, history, education, languages and skills. Absent when nothing matched.
   */
  profile?: {
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
       * Profile summary text.
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
         * City the person is in.
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
       * LinkedIn vanity handle.
       */
      linkedinHandle?: string;
      /**
       * LinkedIn numeric member id.
       */
      linkedinId?: string;
      /**
       * LinkedIn profile URL.
       */
      linkedinUrl?: string;
      /**
       * Company name.
       */
      name?: string;
      /**
       * Every other office FullEnrich holds for the company.
       */
      offices?: PersonEnrichmentFullenrichBulkOffice[];
      /**
       * Specialties the company lists for itself.
       */
      specialties?: string[];
      /**
       * Company website URL.
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
    educations?: PersonEnrichmentFullenrichBulkEducation[];
    /**
     * Every role on the record, current and past.
     */
    employmentHistory?: PersonEnrichmentFullenrichBulkEmploymentHistory[];
    /**
     * First name.
     */
    firstName?: string;
    /**
     * Full name.
     */
    fullName?: string;
    /**
     * LinkedIn headline.
     */
    headline?: string;
    /**
     * True while the role is current.
     */
    isCurrent?: boolean;
    /**
     * UTC epoch timestamp in seconds (Unix time) the current role started. Multiply by 1000 for a JS Date in milliseconds.
     */
    jobStartUtc?: number;
    /**
     * Job title.
     */
    jobTitle?: string;
    /**
     * Languages the person speaks.
     */
    languages?: PersonEnrichmentFullenrichBulkLanguage[];
    /**
     * Last name.
     */
    lastName?: string;
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
     */
    linkedinUrl?: string;
    /**
     * FullEnrich's own person identifier.
     */
    profileId?: string;
    /**
     * State or region.
     */
    region?: string;
    /**
     * Seniority band.
     */
    seniority?: string;
    /**
     * Skills the person lists.
     */
    skills?: string[];
  };
  /**
   * Every work address found, best first, each with its own deliverability verdict.
   */
  workEmails?: PersonEnrichmentFullenrichBulkWorkEmail[];
  [extra: string]: unknown;
}

export interface PersonEnrichmentFullenrichBulkPersonalEmail {
  /**
   * Best work email FullEnrich found for this person.
   */
  email?: string;
  /**
   * Deliverability verdict.
   */
  status?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentFullenrichBulkOffice {
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

export interface PersonEnrichmentFullenrichBulkEducation {
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
  schoolName?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the role started. Multiply by 1000 for a JS Date in milliseconds.
   */
  startUtc?: number;
  [extra: string]: unknown;
}

export interface PersonEnrichmentFullenrichBulkEmploymentHistory {
  /**
   * Company domain as you supplied it.
   */
  companyDomain?: string;
  /**
   * Company name as you supplied it.
   */
  companyName?: string;
  /**
   * True while the role is current.
   */
  isCurrent?: boolean;
  /**
   * Job title.
   */
  jobTitle?: string;
  /**
   * Seniority band.
   */
  seniority?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the role started. Multiply by 1000 for a JS Date in milliseconds.
   */
  startUtc?: number;
  [extra: string]: unknown;
}

export interface PersonEnrichmentFullenrichBulkLanguage {
  /**
   * Language name.
   */
  language?: string;
  /**
   * Proficiency band, e.g. FULL_PROFESSIONAL.
   */
  proficiency?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentFullenrichBulkWorkEmail {
  /**
   * Best work email FullEnrich found for this person.
   */
  email?: string;
  /**
   * Deliverability verdict.
   */
  status?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Bulk Person Enrichment - FullEnrich (person_enrichment.fullenrich_bulk).
 */
export interface PersonEnrichmentFullenrichBulkData {
  /**
   * One row per contact the waterfall resolved, in the order you sent them. Contacts it could not resolve are left out and are not billed, so match your rows back by the tags you set in custom, or by name and company.
   */
  contacts: PersonEnrichmentFullenrichBulkContact[];
}

export interface PersonEnrichmentFullenrichReverseEmailContact {
  /**
   * Your own tags for this entry, echoed back on the matching output row so you can join results to your records.
   */
  custom?: {};
  /**
   * The address to look up.
   */
  email: string;
}

/**
 * Input for Reverse Email Lookup - FullEnrich (person_enrichment.fullenrich_reverse_email).
 */
export interface PersonEnrichmentFullenrichReverseEmailInput {
  /**
   * Addresses to look up, up to 99 per call. You are charged only for the addresses that resolve to a person, though the funds held cover every address you submit until the call settles. Each entry is an object so you can tag it; the address itself goes in email.
   */
  contacts: PersonEnrichmentFullenrichReverseEmailContact[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface PersonEnrichmentFullenrichReverseEmailContact {
  /**
   * The tags you attached to this entry, echoed back so you can join rows to your own records.
   */
  custom?: {};
  /**
   * The person behind the match: identity, location, current role and employer, history, education, languages and skills. Absent when nothing matched.
   */
  profile?: {
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
       * Profile summary text.
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
         * City the person is in.
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
       * LinkedIn vanity handle.
       */
      linkedinHandle?: string;
      /**
       * LinkedIn numeric member id.
       */
      linkedinId?: string;
      /**
       * LinkedIn profile URL.
       */
      linkedinUrl?: string;
      /**
       * Company name.
       */
      name?: string;
      /**
       * Every other office FullEnrich holds for the company.
       */
      offices?: PersonEnrichmentFullenrichReverseEmailOffice[];
      /**
       * Specialties the company lists for itself.
       */
      specialties?: string[];
      /**
       * Company website URL.
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
    educations?: PersonEnrichmentFullenrichReverseEmailEducation[];
    /**
     * Every role on the record, current and past.
     */
    employmentHistory?: PersonEnrichmentFullenrichReverseEmailEmploymentHistory[];
    /**
     * First name.
     */
    firstName?: string;
    /**
     * Full name.
     */
    fullName?: string;
    /**
     * LinkedIn headline.
     */
    headline?: string;
    /**
     * True while the role is current.
     */
    isCurrent?: boolean;
    /**
     * UTC epoch timestamp in seconds (Unix time) the current role started. Multiply by 1000 for a JS Date in milliseconds.
     */
    jobStartUtc?: number;
    /**
     * Job title.
     */
    jobTitle?: string;
    /**
     * Languages the person speaks.
     */
    languages?: PersonEnrichmentFullenrichReverseEmailLanguage[];
    /**
     * Last name.
     */
    lastName?: string;
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
     */
    linkedinUrl?: string;
    /**
     * FullEnrich's own person identifier.
     */
    profileId?: string;
    /**
     * State or region.
     */
    region?: string;
    /**
     * Seniority band.
     */
    seniority?: string;
    /**
     * Skills the person lists.
     */
    skills?: string[];
  };
  /**
   * The address you asked about, echoed back.
   */
  queriedEmail?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentFullenrichReverseEmailOffice {
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

export interface PersonEnrichmentFullenrichReverseEmailEducation {
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
  schoolName?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the role started. Multiply by 1000 for a JS Date in milliseconds.
   */
  startUtc?: number;
  [extra: string]: unknown;
}

export interface PersonEnrichmentFullenrichReverseEmailEmploymentHistory {
  /**
   * Company domain as you supplied it.
   */
  companyDomain?: string;
  /**
   * Company name as you supplied it.
   */
  companyName?: string;
  /**
   * True while the role is current.
   */
  isCurrent?: boolean;
  /**
   * Job title.
   */
  jobTitle?: string;
  /**
   * Seniority band.
   */
  seniority?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the role started. Multiply by 1000 for a JS Date in milliseconds.
   */
  startUtc?: number;
  [extra: string]: unknown;
}

export interface PersonEnrichmentFullenrichReverseEmailLanguage {
  /**
   * Language name.
   */
  language?: string;
  /**
   * Proficiency band, e.g. FULL_PROFESSIONAL.
   */
  proficiency?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Reverse Email Lookup - FullEnrich (person_enrichment.fullenrich_reverse_email).
 */
export interface PersonEnrichmentFullenrichReverseEmailData {
  /**
   * One row per address resolved to a person, in the order you sent them. Addresses that resolved to nobody are left out and are not billed; queriedEmail on each row tells you which address it answers.
   */
  contacts: PersonEnrichmentFullenrichReverseEmailContact[];
}

/**
 * Input for Person Enrichment - Lusha (person_enrichment.lusha).
 */
export interface PersonEnrichmentLushaInput {
  /**
   * Employer domain, e.g. apollo.io. Secondary identifier for a name-based lookup.
   */
  companyDomain?: string;
  /**
   * Employer name. Secondary identifier for a name-based lookup; companyDomain matches more reliably.
   */
  companyName?: string;
  /**
   * Known email address, used to resolve the person's identity.
   * Format: email.
   */
  email?: string;
  /**
   * First name. Send with lastName plus companyName or companyDomain.
   */
  firstName?: string;
  /**
   * Last name. Send with firstName plus companyName or companyDomain.
   */
  lastName?: string;
  /**
   * LinkedIn profile URL (linkedin.com/in/...). Highest match rate.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Force a fresh job title and employer lookup instead of the cached one.
   */
  refreshJobInfo?: boolean;
  /**
   * Reveal email addresses. Defaults to true upstream.
   */
  revealEmails?: boolean;
  /**
   * Reveal phone numbers. Defaults to true upstream.
   */
  revealPhones?: boolean;
  /**
   * Include buying-intent signals in the response.
   */
  signals?: boolean;
}

export interface PersonEnrichmentLushaNaicsCode {
  /**
   * NAICS code.
   */
  code: string;
  /**
   * What the NAICS code covers.
   */
  description?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentLushaSicCode {
  /**
   * SIC code.
   */
  code: string;
  /**
   * What the SIC code covers.
   */
  description?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentLushaEmail {
  /**
   * Lusha's confidence grade for the address, e.g. A+.
   */
  confidence?: string;
  /**
   * Email address.
   */
  email: string;
  /**
   * Address kind, e.g. work or personal.
   */
  type?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the address was last confirmed. Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  [extra: string]: unknown;
}

export interface PersonEnrichmentLushaPhone {
  /**
   * True when the number is on a do-not-call list.
   */
  doNotCall?: boolean;
  /**
   * Phone number in international format.
   */
  number: string;
  /**
   * Line kind, e.g. mobile or direct.
   */
  type?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Person Enrichment - Lusha (person_enrichment.lusha).
 */
export interface PersonEnrichmentLushaData {
  /**
   * The person's current employer.
   */
  company?: {
    /**
     * Headquarters city.
     */
    city?: string;
    /**
     * Lusha's own company identifier.
     */
    companyId?: string;
    /**
     * Headquarters country.
     */
    country?: string;
    /**
     * Company description.
     */
    description?: string;
    /**
     * Primary company domain.
     */
    domain?: string;
    /**
     * Domain the company's work email addresses use.
     */
    emailDomain?: string;
    /**
     * Employee headcount band as [min, max].
     */
    employeeRange?: number[];
    /**
     * Company Facebook page URL.
     * Format: uri.
     */
    facebookUrl?: string;
    /**
     * Fully qualified host for the company website.
     */
    fqdn?: string;
    /**
     * Company logo URL.
     * Format: uri.
     */
    image?: string;
    /**
     * Company LinkedIn page URL.
     * Format: uri.
     */
    linkedinUrl?: string;
    /**
     * Top-level industry.
     */
    mainIndustry?: string;
    /**
     * NAICS classification codes for the company.
     */
    naicsCodes?: PersonEnrichmentLushaNaicsCode[];
    /**
     * Company name.
     */
    name?: string;
    /**
     * Annual revenue band in USD as [min, max].
     */
    revenueRange?: number[];
    /**
     * SIC classification codes for the company.
     */
    sicCodes?: PersonEnrichmentLushaSicCode[];
    /**
     * Headquarters state or region.
     */
    state?: string;
    /**
     * Sub-industry.
     */
    subIndustry?: string;
    /**
     * Technologies Lusha detects in the company's stack.
     */
    technologies?: string[];
    /**
     * Company website URL.
     * Format: uri.
     */
    website?: string;
    /**
     * Company X (Twitter) profile URL.
     * Format: uri.
     */
    xUrl?: string;
  };
  /**
   * Tags Lusha attaches to the contact.
   */
  contactTags?: string[];
  /**
   * Departments Lusha assigns the current role, e.g. General Management.
   */
  departments?: string[];
  /**
   * Best email address Lusha holds, the first entry of emails.
   */
  email?: string;
  /**
   * Every email address Lusha holds for the person.
   */
  emails?: PersonEnrichmentLushaEmail[];
  /**
   * Person's first name.
   */
  firstName?: string;
  /**
   * Person's full name.
   */
  fullName: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the person started the current role. Multiply by 1000 for a JS Date in milliseconds.
   */
  jobStartUtc?: number;
  /**
   * Current job title.
   */
  jobTitle?: string;
  /**
   * Person's last name.
   */
  lastName?: string;
  /**
   * LinkedIn connection count.
   */
  linkedinConnections?: number;
  /**
   * LinkedIn follower count.
   */
  linkedinFollowers?: number;
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
     * Continent name.
     */
    continent?: string;
    /**
     * Country name.
     */
    country?: string;
    /**
     * ISO 3166-1 alpha-2 country code.
     */
    countryCode?: string;
    /**
     * True when Lusha classifies the contact as EU-resident.
     */
    isEuContact?: boolean;
    /**
     * State or region.
     */
    state?: string;
    /**
     * State or region code.
     */
    stateCode?: string;
  };
  /**
   * Lusha's own person identifier.
   */
  personId?: string;
  /**
   * Best phone number Lusha holds, the first entry of phones.
   */
  phone?: string;
  /**
   * Every phone number Lusha holds for the person.
   */
  phones?: PersonEnrichmentLushaPhone[];
  /**
   * Job title of the previous role Lusha holds.
   */
  previousJobTitle?: string;
  /**
   * Seniority band for the current role, e.g. Founder.
   */
  seniority?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the record was last refreshed. Multiply by 1000 for a JS Date in milliseconds.
   */
  updatedUtc?: number;
  [extra: string]: unknown;
}

/**
 * Input for Person Enrichment - People Data Labs (person_enrichment.peopledatalabs).
 */
export interface PersonEnrichmentPeopledatalabsInput {
  /**
   * Known birth date, to disambiguate a name match.
   */
  birthDate?: string;
  /**
   * Company name, website or social URL where the person has worked.
   */
  company?: string;
  /**
   * Country to match on.
   */
  country?: string;
  /**
   * Comma-separated People Data Labs fields to include, or a leading - list to exclude. Projection changes the payload only; it does not reduce what the call costs.
   */
  dataInclude?: string;
  /**
   * Any email address the person has used.
   * Format: email.
   */
  email?: string;
  /**
   * SHA-256 or MD5 hash of an email address, for privacy-preserving matching.
   */
  emailHash?: string;
  /**
   * First name. Send with lastName plus company, school or location.
   */
  firstName?: string;
  /**
   * Report which of the sent identifiers actually matched.
   */
  includeIfMatched?: boolean;
  /**
   * Last name. Send with firstName plus company, school or location.
   */
  lastName?: string;
  /**
   * LinkedIn numeric member id (PDL calls this lid).
   */
  linkedinId?: string;
  /**
   * City or locality to match on.
   */
  locality?: string;
  /**
   * Free-form location string, e.g. brookline, massachusetts, united states.
   */
  location?: string;
  /**
   * Middle name.
   */
  middleName?: string;
  /**
   * Minimum People Data Labs likelihood score a match must reach to count as found. Omitted, this SKU sends 6; the People Data Labs default is 2.
   * Range: minimum 1, maximum 10.
   */
  minLikelihood?: number;
  /**
   * Full name, as an alternative to firstName plus lastName.
   */
  name?: string;
  /**
   * People Data Labs persistent person id, as returned by this SKU's pdlId output.
   */
  pdlId?: string;
  /**
   * Phone number in international form, e.g. +16176695906.
   */
  phone?: string;
  /**
   * Postal or ZIP code to match on.
   */
  postalCode?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Social profile URL the person has used, e.g. a LinkedIn, Twitter, Facebook or GitHub profile. The strongest single identifier.
   */
  profile?: string;
  /**
   * State or region to match on.
   */
  region?: string;
  /**
   * People Data Labs boolean expression over top-level fields that a match must satisfy, e.g. personal_emails or (emails and phone_numbers).
   */
  required?: string;
  /**
   * School the person attended, used to disambiguate a name match.
   */
  school?: string;
  /**
   * Street address to match on.
   */
  streetAddress?: string;
  /**
   * Return text in title case instead of People Data Labs' lowercase default.
   */
  titlecase?: boolean;
}

export interface PersonEnrichmentPeopledatalabsEducation {
  /**
   * Degrees earned.
   */
  degrees?: string[];
  /**
   * When study ended.
   */
  endDate?: string;
  /**
   * Grade point average, when the person published one.
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
   * People Data Labs school id.
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
   * School type, e.g. post-secondary institution.
   */
  schoolType?: string;
  /**
   * School website domain.
   */
  schoolWebsite?: string;
  /**
   * When study started: YYYY, YYYY-MM or YYYY-MM-DD.
   */
  startDate?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentPeopledatalabsEmail {
  /**
   * Email address.
   */
  address: string;
  /**
   * Address kind, e.g. professional or personal.
   */
  type?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentPeopledatalabsExperience {
  /**
   * Year the employer was founded.
   */
  companyFounded?: number;
  /**
   * People Data Labs company id for the employer.
   */
  companyId?: string;
  /**
   * Employer industry.
   */
  companyIndustry?: string;
  /**
   * Employer LinkedIn page URL.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Employer headquarters as one display string.
   */
  companyLocationName?: string;
  /**
   * Employer name.
   */
  companyName?: string;
  /**
   * Employer headcount band.
   */
  companySize?: string;
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
   * Where the role was based.
   */
  locationNames?: string[];
  /**
   * When the role started: YYYY, YYYY-MM or YYYY-MM-DD.
   */
  startDate?: string;
  /**
   * Job title held.
   */
  title?: string;
  /**
   * Normalized title class.
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
   * Normalized sub-role for the title.
   */
  titleSubRole?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentPeopledatalabsProfile {
  /**
   * Network name, e.g. linkedin, github, twitter.
   */
  network: string;
  /**
   * Network's own id for the profile.
   */
  profileId?: string;
  /**
   * Profile URL.
   * Format: uri.
   */
  url?: string;
  /**
   * Handle on that network.
   */
  username?: string;
  [extra: string]: unknown;
}

export interface PersonEnrichmentPeopledatalabsStreetAddresse {
  /**
   * Second line of the address.
   */
  addressLine2?: string;
  /**
   * Continent.
   */
  continent?: string;
  /**
   * Country.
   */
  country?: string;
  /**
   * Coordinates as "lat,lon".
   */
  geo?: string;
  /**
   * City.
   */
  locality?: string;
  /**
   * Metro area.
   */
  metro?: string;
  /**
   * Address location as one display string.
   */
  name?: string;
  /**
   * Postal code.
   */
  postalCode?: string;
  /**
   * State or region.
   */
  region?: string;
  /**
   * Street address.
   */
  streetAddress?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Person Enrichment - People Data Labs (person_enrichment.peopledatalabs).
 */
export interface PersonEnrichmentPeopledatalabsData {
  /**
   * People Data Labs' qualitative score for how recently the profile showed activity.
   */
  activityScore?: string;
  /**
   * Date of birth as People Data Labs reports it, YYYY-MM-DD.
   */
  birthDate?: string;
  /**
   * Year of birth.
   */
  birthYear?: number;
  /**
   * The person's current employer.
   */
  company?: {
    /**
     * Second line of the headquarters address.
     */
    addressLine2?: string;
    /**
     * People Data Labs company id.
     */
    companyId?: string;
    /**
     * Headquarters continent.
     */
    continent?: string;
    /**
     * Headquarters country.
     */
    country?: string;
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
     * Headquarters coordinates as "lat,lon".
     */
    geo?: string;
    /**
     * Company industry.
     */
    industry?: string;
    /**
     * Company industry on People Data Labs' newer taxonomy.
     */
    industryV2?: string;
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
     * Headquarters city.
     */
    locality?: string;
    /**
     * Headquarters location as one display string.
     */
    locationName?: string;
    /**
     * Headquarters metro area.
     */
    metro?: string;
    /**
     * Company name.
     */
    name?: string;
    /**
     * Headquarters postal code.
     */
    postalCode?: string;
    /**
     * Headquarters state or region.
     */
    region?: string;
    /**
     * Employee headcount band, e.g. 5001-10000.
     */
    size?: string;
    /**
     * Headquarters street address.
     */
    streetAddress?: string;
    /**
     * Company X (Twitter) profile URL.
     * Format: uri.
     */
    twitterUrl?: string;
    /**
     * Company website domain.
     */
    website?: string;
  };
  /**
   * Every country associated with the person.
   */
  countries?: string[];
  /**
   * Version of the People Data Labs dataset this record came from.
   */
  datasetVersion?: string;
  /**
   * Education history.
   */
  education?: PersonEnrichmentPeopledatalabsEducation[];
  /**
   * Every email address held for the person, with its kind.
   */
  emails?: PersonEnrichmentPeopledatalabsEmail[];
  /**
   * Work history, most relevant first.
   */
  experience?: PersonEnrichmentPeopledatalabsExperience[];
  /**
   * Facebook numeric id.
   */
  facebookId?: string;
  /**
   * Facebook profile URL.
   * Format: uri.
   */
  facebookUrl?: string;
  /**
   * Facebook handle.
   */
  facebookUsername?: string;
  /**
   * First name.
   */
  firstName?: string;
  /**
   * Person's full name.
   */
  fullName: string;
  /**
   * GitHub profile URL.
   * Format: uri.
   */
  githubUrl?: string;
  /**
   * GitHub handle.
   */
  githubUsername?: string;
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
   * When the current role started, as People Data Labs reports it: YYYY, YYYY-MM or YYYY-MM-DD.
   */
  jobStartDate?: string;
  /**
   * Current job title.
   */
  jobTitle?: string;
  /**
   * Normalized title class, e.g. research_and_development.
   */
  jobTitleClass?: string;
  /**
   * Seniority levels for the current title, e.g. cxo, owner.
   */
  jobTitleLevels?: string[];
  /**
   * Normalized role for the current title, e.g. engineering.
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
   * Where the person lives.
   */
  location?: {
    /**
     * Second line of the address.
     */
    addressLine2?: string;
    /**
     * Continent.
     */
    continent?: string;
    /**
     * Country.
     */
    country?: string;
    /**
     * Coordinates as "lat,lon".
     */
    geo?: string;
    /**
     * City.
     */
    locality?: string;
    /**
     * Metro area.
     */
    metro?: string;
    /**
     * Location as one display string.
     */
    name?: string;
    /**
     * Postal code.
     */
    postalCode?: string;
    /**
     * State or region.
     */
    region?: string;
    /**
     * Street address.
     */
    streetAddress?: string;
    /**
     * UTC epoch timestamp in seconds (Unix time) the location was last updated. Multiply by 1000 for a JS Date in milliseconds.
     */
    updatedUtc?: number;
  };
  /**
   * Every location People Data Labs has associated with the person.
   */
  locationNames?: string[];
  /**
   * Middle initial.
   */
  middleInitial?: string;
  /**
   * Middle name.
   */
  middleName?: string;
  /**
   * Mobile phone number in international form.
   */
  mobilePhone?: string;
  /**
   * People Data Labs persistent person id. Send it back as this SKU's pdlId input.
   */
  pdlId?: string;
  /**
   * Personal email addresses.
   */
  personalEmails?: string[];
  /**
   * Every phone number held for the person.
   */
  phoneNumbers?: string[];
  /**
   * People Data Labs' qualitative score for how complete the profile is.
   */
  profileScore?: string;
  /**
   * Every social profile linked to the person.
   */
  profiles?: PersonEnrichmentPeopledatalabsProfile[];
  /**
   * The personal address People Data Labs recommends reaching the person at.
   */
  recommendedPersonalEmail?: string;
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
  /**
   * Every street address associated with the person.
   */
  streetAddresses?: PersonEnrichmentPeopledatalabsStreetAddresse[];
  /**
   * X (Twitter) profile URL.
   * Format: uri.
   */
  twitterUrl?: string;
  /**
   * X (Twitter) handle.
   */
  twitterUsername?: string;
  /**
   * Best work email address.
   */
  workEmail?: string;
  [extra: string]: unknown;
}

/**
 * Input for Person Enrichment - Prospeo (person_enrichment.prospeo).
 */
export interface PersonEnrichmentProspeoInput {
  /**
   * Employer LinkedIn page URL, for a more precise match.
   * Format: uri.
   */
  companyLinkedinUrl?: string;
  /**
   * Employer name. Avoid sending it alone; many companies share a name.
   */
  companyName?: string;
  /**
   * Employer domain, e.g. stripe.com. Preferred over companyName.
   */
  companyWebsite?: string;
  /**
   * Known email address, used as the sole identity seed for a reverse lookup.
   * Format: email.
   */
  email?: string;
  /**
   * Reveal the mobile number. Without it the number comes back masked.
   */
  enrichMobile?: boolean;
  /**
   * First name. Send with lastName plus companyWebsite for the best hit rate.
   */
  firstName?: string;
  /**
   * Full name, as an alternative to firstName plus lastName.
   */
  fullName?: string;
  /**
   * Last name.
   */
  lastName?: string;
  /**
   * LinkedIn profile URL. The most accurate identifier, alone or with a name.
   * Format: uri.
   */
  linkedinUrl?: string;
  /**
   * Return a match only when Prospeo has a verified email for it. Defaults to false.
   */
  onlyVerifiedEmail?: boolean;
  /**
   * Return a match only when Prospeo has a verified mobile for it.
   */
  onlyVerifiedMobile?: boolean;
  /**
   * Prospeo person id from an earlier People Search - Prospeo call.
   */
  personId?: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

export interface PersonEnrichmentProspeoEvent {
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

export interface PersonEnrichmentProspeoJobHistory {
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
 * The `data` payload of Person Enrichment - Prospeo (person_enrichment.prospeo).
 */
export interface PersonEnrichmentProspeoData {
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
      events?: PersonEnrichmentProspeoEvent[];
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
   * True when Prospeo served this record from cache and did not charge for it.
   */
  freeEnrichment?: boolean;
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
  jobHistory?: PersonEnrichmentProspeoJobHistory[];
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

/**
 * Input for Person Enrichment - QuickEnrich (person_enrichment.quickenrich).
 */
export interface PersonEnrichmentQuickenrichInput {
  /**
   * Exact work email address to look up.
   * Format: email.
   */
  email: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
}

/**
 * The `data` payload of Person Enrichment - QuickEnrich (person_enrichment.quickenrich).
 */
export interface PersonEnrichmentQuickenrichData {
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
 * Typed methods for the person_enrichment platform. Attached to the AnyAPI client as
 * `client.personEnrichment`.
 */
export class PersonEnrichmentNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Person Enrichment - Aviato
   *
   * Enrich a person from an Aviato or LinkedIn identifier, LinkedIn URL, or email.
   *
   * Price: $0.084 per request.
   *
   * @example
   * const res = await client.personEnrichment.aviato({ linkedinURL: "https://www.linkedin.com/in/dharmesh" });
   */
  aviato(
    input: PersonEnrichmentAviatoInput,
    options?: RequestOptions,
  ): Promise<RunResult<PersonEnrichmentAviatoData>> {
    return this._core.run("person_enrichment.aviato", input, options);
  }

  /**
   * Person Enrichment - BetterContact
   *
   * Run one contact through BetterContact's email waterfall from a name plus company domain or a LinkedIn URL, and get the winning address with its deliverability verdict, the provider that found it, and the employer record. Only a matched contact is billable.
   *
   * Price: $0.0828 per request.
   *
   * @example
   * const res = await client.personEnrichment.bettercontact({ firstName: "Patrick", lastName: "Collison", companyDomain: "stripe.com", linkedinUrl: "https://www.linkedin.com/in/patrickcollison" });
   */
  bettercontact(
    input: PersonEnrichmentBettercontactInput,
    options?: RequestOptions,
  ): Promise<RunResult<PersonEnrichmentBettercontactData>> {
    return this._core.run("person_enrichment.bettercontact", input, options);
  }

  /**
   * Bulk Person Enrichment - FullEnrich
   *
   * Run FullEnrich's waterfall on up to 99 people in one call and get back work emails, personal emails and mobile numbers, each with a deliverability status, alongside the full LinkedIn-grade profile and employer record for everyone matched. Only the contacts it matches are returned, and only those are billed.
   *
   * Price: $0 per request plus $0.1008 per result (maximum $9.9792).
   *
   * @example
   * const res = await client.personEnrichment.fullenrichBulk({ contacts: [{ custom: { row: "1" }, domain: "stripe.com", enrich_fields: ["contact.emails", "contact.personal_emails"], first_name: "Patrick", last_name: "Collison" }, { company_name: "Figma", custom: { row: "2" }, enrich_fields: ["contact.emails"], first_name: "Dylan", last_name: "Field", linkedin_url: "https://www.linkedin.com/in/dylanfield" }] });
   */
  fullenrichBulk(
    input: PersonEnrichmentFullenrichBulkInput,
    options?: RequestOptions,
  ): Promise<RunResult<PersonEnrichmentFullenrichBulkData>> {
    return this._core.run("person_enrichment.fullenrich_bulk", input, options);
  }

  /**
   * Reverse Email Lookup - FullEnrich
   *
   * Turn up to 99 email addresses into the people behind them: name, headline, location, LinkedIn profile, current title and seniority, full employment history, education, languages and skills, plus the employer record. Only the addresses it resolves are returned, and only those are billed.
   *
   * Price: $0 per request plus $0.1008 per result (maximum $9.9792).
   *
   * @example
   * const res = await client.personEnrichment.fullenrichReverseEmail({ contacts: [{ custom: { row: "1" }, email: "dfield@figma.com" }, { custom: { row: "2" }, email: "patrick@stripe.com" }] });
   */
  fullenrichReverseEmail(
    input: PersonEnrichmentFullenrichReverseEmailInput,
    options?: RequestOptions,
  ): Promise<RunResult<PersonEnrichmentFullenrichReverseEmailData>> {
    return this._core.run(
      "person_enrichment.fullenrich_reverse_email",
      input,
      options,
    );
  }

  /**
   * Person Enrichment - Lusha
   *
   * Enrich one person into work email, direct dial, job title and employer firmographics from a LinkedIn URL, an email, or a name plus company.
   *
   * Price: $0.084 per request.
   *
   * @example
   * const res = await client.personEnrichment.lusha({ linkedinUrl: "https://www.linkedin.com/in/tim-zheng" });
   */
  lusha(
    input: PersonEnrichmentLushaInput,
    options?: RequestOptions,
  ): Promise<RunResult<PersonEnrichmentLushaData>> {
    return this._core.run("person_enrichment.lusha", input, options);
  }

  /**
   * Person Enrichment - People Data Labs
   *
   * Enrich one person into work email, personal emails, mobile phone, full work history, education and employer firmographics from any identifier People Data Labs can match on.
   *
   * Price: $0.24 per request.
   *
   * @example
   * const res = await client.personEnrichment.peopledatalabs({ profile: "https://www.linkedin.com/in/dharmesh" });
   */
  peopledatalabs(
    input: PersonEnrichmentPeopledatalabsInput,
    options?: RequestOptions,
  ): Promise<RunResult<PersonEnrichmentPeopledatalabsData>> {
    return this._core.run("person_enrichment.peopledatalabs", input, options);
  }

  /**
   * Person Enrichment - Prospeo
   *
   * Enrich one person into work email, mobile phone, full job history and employer firmographics from a LinkedIn URL, an email, or a name plus company domain.
   *
   * Price: $0.066 per request.
   *
   * @example
   * const res = await client.personEnrichment.prospeo({ linkedinUrl: "https://www.linkedin.com/in/dharmesh" });
   */
  prospeo(
    input: PersonEnrichmentProspeoInput,
    options?: RequestOptions,
  ): Promise<RunResult<PersonEnrichmentProspeoData>> {
    return this._core.run("person_enrichment.prospeo", input, options);
  }

  /**
   * Person Enrichment - QuickEnrich
   *
   * Turn a work email into the person behind it: name, title, LinkedIn, and their employer's firmographics. Coverage is strongest for small and local businesses.
   *
   * Price: $0.0072 per request.
   *
   * @example
   * const res = await client.personEnrichment.quickenrich({ email: "wprice@southmemphisfence.com" });
   */
  quickenrich(
    input: PersonEnrichmentQuickenrichInput,
    options?: RequestOptions,
  ): Promise<RunResult<PersonEnrichmentQuickenrichData>> {
    return this._core.run("person_enrichment.quickenrich", input, options);
  }
}
