# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the person_enrichment platform."""

from __future__ import annotations

from typing import Any, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class PersonEnrichmentAviatoInput(TypedDict, total=False):
    """Input for Person Enrichment - Aviato."""

    angelListID: NotRequired[str]
    crunchbaseID: NotRequired[str]
    email: NotRequired[str]
    id: NotRequired[str]
    linkedinEntityId: NotRequired[str]
    linkedinID: NotRequired[str]
    linkedinURL: NotRequired[str]
    polyworkID: NotRequired[str]
    preferLatencyUnderMs: NotRequired[int]
    """Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    require: NotRequired[list[str]]
    signalNfxID: NotRequired[str]
    twitterID: NotRequired[str]


class PersonEnrichmentBettercontactInput(TypedDict, total=False):
    """Input for Person Enrichment - BetterContact."""

    company: NotRequired[str]
    """Employer name, for when you have no domain."""
    companyDomain: NotRequired[str]
    """Employer domain, e.g. stripe.com. The strongest company signal for the waterfall."""
    customFields: NotRequired[dict[str, Any]]
    """Arbitrary identifiers echoed back on the result, for joining the answer to your own records."""
    firstName: Required[str]
    """Contact's first name."""
    lastName: Required[str]
    """Contact's last name."""
    linkedinUrl: NotRequired[str]
    """Contact's LinkedIn profile URL, which raises the match rate."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class PersonEnrichmentFullenrichBulkInput(TypedDict, total=False):
    """Input for Bulk Person Enrichment - FullEnrich."""

    contacts: Required[list[dict[str, Any]]]
    """People to enrich, up to 99 per call. You are charged only for the contacts the waterfall resolves, though the funds held cover every contact you submit until the call settles. Each entry is passed to FullEnrich exactly as you write it, which is why these keys are snake_case while the rest of the API is camelCase. Give a name plus an employer (company_name or domain), or a linkedin_url, or both - more identity means a better hit rate."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class PersonEnrichmentFullenrichReverseEmailInput(TypedDict, total=False):
    """Input for Reverse Email Lookup - FullEnrich."""

    contacts: Required[list[dict[str, Any]]]
    """Addresses to look up, up to 99 per call. You are charged only for the addresses that resolve to a person, though the funds held cover every address you submit until the call settles. Each entry is an object so you can tag it; the address itself goes in email."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class PersonEnrichmentLushaInput(TypedDict, total=False):
    """Input for Person Enrichment - Lusha."""

    companyDomain: NotRequired[str]
    """Employer domain, e.g. apollo.io. Secondary identifier for a name-based lookup."""
    companyName: NotRequired[str]
    """Employer name. Secondary identifier for a name-based lookup; companyDomain matches more reliably."""
    email: NotRequired[str]
    """Known email address, used to resolve the person's identity."""
    firstName: NotRequired[str]
    """First name. Send with lastName plus companyName or companyDomain."""
    lastName: NotRequired[str]
    """Last name. Send with firstName plus companyName or companyDomain."""
    linkedinUrl: NotRequired[str]
    """LinkedIn profile URL (linkedin.com/in/...). Highest match rate."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    refreshJobInfo: NotRequired[bool]
    """Force a fresh job title and employer lookup instead of the cached one."""
    revealEmails: NotRequired[bool]
    """Reveal email addresses. Defaults to true upstream."""
    revealPhones: NotRequired[bool]
    """Reveal phone numbers. Defaults to true upstream."""
    signals: NotRequired[bool]
    """Include buying-intent signals in the response."""


class PersonEnrichmentPeopledatalabsInput(TypedDict, total=False):
    """Input for Person Enrichment - People Data Labs."""

    birthDate: NotRequired[str]
    """Known birth date, to disambiguate a name match."""
    company: NotRequired[str]
    """Company name, website or social URL where the person has worked."""
    country: NotRequired[str]
    """Country to match on."""
    dataInclude: NotRequired[str]
    """Comma-separated People Data Labs fields to include, or a leading - list to exclude. Projection changes the payload only; it does not reduce what the call costs."""
    email: NotRequired[str]
    """Any email address the person has used."""
    emailHash: NotRequired[str]
    """SHA-256 or MD5 hash of an email address, for privacy-preserving matching."""
    firstName: NotRequired[str]
    """First name. Send with lastName plus company, school or location."""
    includeIfMatched: NotRequired[bool]
    """Report which of the sent identifiers actually matched."""
    lastName: NotRequired[str]
    """Last name. Send with firstName plus company, school or location."""
    linkedinId: NotRequired[str]
    """LinkedIn numeric member id (PDL calls this lid)."""
    locality: NotRequired[str]
    """City or locality to match on."""
    location: NotRequired[str]
    """Free-form location string, e.g. brookline, massachusetts, united states."""
    middleName: NotRequired[str]
    """Middle name."""
    minLikelihood: NotRequired[int]
    """Minimum People Data Labs likelihood score a match must reach to count as found. Omitted, this SKU sends 6; the People Data Labs default is 2. Range: 1 to 10."""
    name: NotRequired[str]
    """Full name, as an alternative to firstName plus lastName."""
    pdlId: NotRequired[str]
    """People Data Labs persistent person id, as returned by this SKU's pdlId output."""
    phone: NotRequired[str]
    """Phone number in international form, e.g. +16176695906."""
    postalCode: NotRequired[str]
    """Postal or ZIP code to match on."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""
    profile: NotRequired[str]
    """Social profile URL the person has used, e.g. a LinkedIn, Twitter, Facebook or GitHub profile. The strongest single identifier."""
    region: NotRequired[str]
    """State or region to match on."""
    required: NotRequired[str]
    """People Data Labs boolean expression over top-level fields that a match must satisfy, e.g. personal_emails or (emails and phone_numbers)."""
    school: NotRequired[str]
    """School the person attended, used to disambiguate a name match."""
    streetAddress: NotRequired[str]
    """Street address to match on."""
    titlecase: NotRequired[bool]
    """Return text in title case instead of People Data Labs' lowercase default."""


class PersonEnrichmentProspeoInput(TypedDict, total=False):
    """Input for Person Enrichment - Prospeo."""

    companyLinkedinUrl: NotRequired[str]
    """Employer LinkedIn page URL, for a more precise match."""
    companyName: NotRequired[str]
    """Employer name. Avoid sending it alone; many companies share a name."""
    companyWebsite: NotRequired[str]
    """Employer domain, e.g. stripe.com. Preferred over companyName."""
    email: NotRequired[str]
    """Known email address, used as the sole identity seed for a reverse lookup."""
    enrichMobile: NotRequired[bool]
    """Reveal the mobile number. Without it the number comes back masked."""
    firstName: NotRequired[str]
    """First name. Send with lastName plus companyWebsite for the best hit rate."""
    fullName: NotRequired[str]
    """Full name, as an alternative to firstName plus lastName."""
    lastName: NotRequired[str]
    """Last name."""
    linkedinUrl: NotRequired[str]
    """LinkedIn profile URL. The most accurate identifier, alone or with a name."""
    onlyVerifiedEmail: NotRequired[bool]
    """Return a match only when Prospeo has a verified email for it. Defaults to false."""
    onlyVerifiedMobile: NotRequired[bool]
    """Return a match only when Prospeo has a verified mobile for it."""
    personId: NotRequired[str]
    """Prospeo person id from an earlier People Search - Prospeo call."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class PersonEnrichmentQuickenrichInput(TypedDict, total=False):
    """Input for Person Enrichment - QuickEnrich."""

    email: Required[str]
    """Exact work email address to look up."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class PersonEnrichmentAviatoData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    about: str | None = Field(default=None, description="Profile about/summary text.")
    aviato_id: str | None = Field(
        default=None,
        alias="aviatoId",
        description="Aviato's own person identifier. Send it back as this SKU's id input to re-enrich the same person.",
    )
    certifications: list[PersonEnrichmentAviatoCertification] | None = Field(
        default=None, description="Certifications listed on the profile."
    )
    country: str | None = Field(
        default=None, description="Country the person is located in."
    )
    crunchbase_url: str | None = Field(
        default=None, alias="crunchbaseUrl", description="Crunchbase profile URL."
    )
    degrees: list[PersonEnrichmentAviatoDegree] | None = Field(
        default=None, description="Degrees earned."
    )
    education: list[PersonEnrichmentAviatoEducation] | None = Field(
        default=None, description="Schools attended."
    )
    email_available: bool | None = Field(
        default=None,
        alias="emailAvailable",
        description="True when an email address is known for this person.",
    )
    entity_type: str | None = Field(
        default=None,
        alias="entityType",
        description="Aviato's record type for this result. It is always person on this SKU, so it repeats what the endpoint already promises.",
    )
    experience: list[PersonEnrichmentAviatoExperience] | None = Field(
        default=None,
        description="Work history, one entry per company, most recent first.",
    )
    facebook_url: str | None = Field(
        default=None, alias="facebookUrl", description="Facebook profile URL."
    )
    first_name: str | None = Field(
        default=None, alias="firstName", description="Person's first name."
    )
    gender: str | None = Field(
        default=None, description="Gender recorded for the person."
    )
    golden_url: str | None = Field(
        default=None,
        alias="goldenUrl",
        description="Golden knowledge-base profile URL for the person.",
    )
    headline: str | None = Field(default=None, description="LinkedIn headline.")
    highlights: list[str] | None = Field(
        default=None, description="Career highlight labels, e.g. employeeDuringIPO."
    )
    invested_industries: Any | None = Field(
        default=None,
        alias="investedIndustries",
        description="Industries the person has invested in, as Aviato returns them. Deliberately untyped: the field is empty in every response we have captured, so the value passes through without a shape guarantee.",
    )
    invested_rounds: list[str] | None = Field(
        default=None,
        alias="investedRounds",
        description="Funding-round stages the person has invested in.",
    )
    investor_categories: Any | None = Field(
        default=None,
        alias="investorCategories",
        description="Investor categories Aviato assigns to the person. Deliberately untyped: the field is empty in every response we have captured, so the value passes through without a shape guarantee.",
    )
    investor_summary: str | None = Field(
        default=None,
        alias="investorSummary",
        description="One-sentence investor summary of the person.",
    )
    investor_type: str | None = Field(
        default=None,
        alias="investorType",
        description="Investor classification, e.g. angel or investment_partner.",
    )
    languages: list[PersonEnrichmentAviatoLanguage] | None = Field(
        default=None, description="Languages listed on the profile."
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Person's last name."
    )
    latitude: float | None = Field(
        default=None, description="Latitude of the person's city."
    )
    linkedin_connections: int | None = Field(
        default=None,
        alias="linkedinConnections",
        description="Number of LinkedIn connections. Minimum: 0.",
    )
    linkedin_entity_id: str | None = Field(
        default=None,
        alias="linkedinEntityId",
        description="LinkedIn's opaque member URN identifier. Accepted back as this SKU's linkedinEntityId input.",
    )
    linkedin_followers: int | None = Field(
        default=None,
        alias="linkedinFollowers",
        description="Number of LinkedIn followers. Minimum: 0.",
    )
    linkedin_handle: str | None = Field(
        default=None,
        alias="linkedinHandle",
        description="LinkedIn vanity handle, the last path segment of the profile URL.",
    )
    linkedin_joined_utc: float | None = Field(
        default=None,
        alias="linkedinJoinedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    linkedin_numeric_id: str | None = Field(
        default=None,
        alias="linkedinNumericId",
        description="LinkedIn's numeric member identifier, as a string.",
    )
    linkedin_open_profile: bool | None = Field(
        default=None,
        alias="linkedinOpenProfile",
        description="True when the profile is an Open Profile, so anyone may message it.",
    )
    linkedin_premium: bool | None = Field(
        default=None,
        alias="linkedinPremium",
        description="True when the profile holds a LinkedIn Premium subscription.",
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="LinkedIn profile URL."
    )
    locality: str | None = Field(
        default=None, description="City the person is located in."
    )
    location: str | None = Field(
        default=None,
        description="Location as a single display string, e.g. Boston, Massachusetts, United States.",
    )
    location_details: PersonEnrichmentAviatoLocationDetail | None = Field(
        default=None,
        alias="locationDetails",
        description="The person's location broken into place tiers, each with Aviato's place identifier, name, place type and geometry.",
    )
    location_ids: list[int] | None = Field(
        default=None,
        alias="locationIds",
        description="Aviato's place identifiers for the location tiers in locationDetails, broadest first.",
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the person's city."
    )
    name: str = Field(description="Person's full name.")
    personal_email_available: bool | None = Field(
        default=None,
        alias="personalEmailAvailable",
        description="True when a personal email address is known for this person.",
    )
    region: str | None = Field(
        default=None, description="State or region the person is located in."
    )
    skills: list[str] | None = Field(
        default=None, description="Skills listed on the profile."
    )
    twitter_url: str | None = Field(
        default=None, alias="twitterUrl", description="Twitter/X profile URL."
    )
    updated_utc: float | None = Field(
        default=None,
        alias="updatedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    website_url: str | None = Field(
        default=None, alias="websiteUrl", description="Personal or company website URL."
    )
    work_email_available: bool | None = Field(
        default=None,
        alias="workEmailAvailable",
        description="True when a work email address is known for this person.",
    )


class PersonEnrichmentAviatoCertification(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_id: str | None = Field(
        default=None,
        alias="companyId",
        description="Aviato's company identifier for the issuer.",
    )
    company_name: str | None = Field(
        default=None,
        alias="companyName",
        description="Company that issued the certification.",
    )
    expires_utc: float | None = Field(
        default=None,
        alias="expiresUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    issued_utc: float | None = Field(
        default=None,
        alias="issuedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    name: str | None = Field(default=None, description="Certification name.")
    url: str | None = Field(
        default=None, description="URL of the certification or its issuer."
    )


class PersonEnrichmentAviatoDegree(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    degree: str | None = Field(default=None, description="Degree awarded, e.g. B.S.")
    entity_type: str | None = Field(
        default=None,
        alias="entityType",
        description='Aviato\'s record class for this entry, e.g. "company" or "school".',
    )
    field_of_study: str | None = Field(
        default=None,
        alias="fieldOfStudy",
        description="Field of study the degree is in.",
    )
    person_education_id: str | None = Field(
        default=None,
        alias="personEducationId",
        description="Aviato's education-record identifier this degree was awarded for. It matches an educationId in the education array.",
    )
    person_id: str | None = Field(
        default=None,
        alias="personId",
        description="Aviato's person identifier this degree belongs to. Same value as the top-level aviatoId.",
    )
    school: str | None = Field(
        default=None, description="School that awarded the degree."
    )
    school_id: str | None = Field(
        default=None,
        alias="schoolId",
        description="Aviato's identifier for the school.",
    )
    school_linkedin_handle: str | None = Field(
        default=None,
        alias="schoolLinkedinHandle",
        description="School's LinkedIn vanity handle.",
    )
    school_linkedin_numeric_id: str | None = Field(
        default=None,
        alias="schoolLinkedinNumericId",
        description="LinkedIn's own numeric identifier for the school on this record.",
    )
    school_location: str | None = Field(
        default=None, alias="schoolLocation", description="Where the school is located."
    )


class PersonEnrichmentAviatoEducation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    education_id: str | None = Field(
        default=None,
        alias="educationId",
        description="Aviato's identifier for this education record.",
    )
    education_linkedin_numeric_id: str | None = Field(
        default=None,
        alias="educationLinkedinNumericId",
        description="LinkedIn's own numeric identifier for this education entry.",
    )
    ended_utc: float | None = Field(
        default=None,
        alias="endedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    entity_type: str | None = Field(
        default=None,
        alias="entityType",
        description='Aviato\'s record class for this entry, e.g. "company" or "school".',
    )
    person_id: str | None = Field(
        default=None,
        alias="personId",
        description="Aviato's person identifier this education record belongs to. Same value as the top-level aviatoId.",
    )
    school: str | None = Field(default=None, description="School name.")
    school_full_name: str | None = Field(
        default=None,
        alias="schoolFullName",
        description="School name on Aviato's school record. Duplicates the school field.",
    )
    school_id: str | None = Field(
        default=None,
        alias="schoolId",
        description="Aviato's identifier for the school.",
    )
    school_linkedin_handle: str | None = Field(
        default=None,
        alias="schoolLinkedinHandle",
        description="School's LinkedIn vanity handle.",
    )
    school_linkedin_numeric_id: str | None = Field(
        default=None,
        alias="schoolLinkedinNumericId",
        description="LinkedIn's own numeric identifier for the school on this record.",
    )
    school_location: str | None = Field(
        default=None, alias="schoolLocation", description="Where the school is located."
    )
    started_utc: float | None = Field(
        default=None,
        alias="startedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    subject: str | None = Field(default=None, description="Subject studied.")


class PersonEnrichmentAviatoExperience(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_angel_list_url: str | None = Field(
        default=None,
        alias="companyAngelListUrl",
        description="Employer's AngelList profile URL.",
    )
    company_canonical_name: str | None = Field(
        default=None,
        alias="companyCanonicalName",
        description="Employer name on Aviato's company record. Usually identical to companyName, but it can differ when the company was renamed or acquired.",
    )
    company_contact_url: str | None = Field(
        default=None,
        alias="companyContactUrl",
        description="Employer's contact page as Aviato records it. Aviato sometimes returns a malformed value here that runs two host names together into one path, and we pass it through as returned rather than guessing the intended link.",
    )
    company_country: str | None = Field(
        default=None, alias="companyCountry", description="Employer's country."
    )
    company_crunchbase_url: str | None = Field(
        default=None,
        alias="companyCrunchbaseUrl",
        description="Employer's Crunchbase profile URL.",
    )
    company_description: str | None = Field(
        default=None, alias="companyDescription", description="What the employer does."
    )
    company_facebook_url: str | None = Field(
        default=None,
        alias="companyFacebookUrl",
        description="Employer's Facebook page URL.",
    )
    company_golden_url: str | None = Field(
        default=None,
        alias="companyGoldenUrl",
        description="Employer's Golden knowledge-base profile URL.",
    )
    company_id: str | None = Field(
        default=None,
        alias="companyId",
        description="Aviato's company identifier for the employer.",
    )
    company_industries: list[str] | None = Field(
        default=None,
        alias="companyIndustries",
        description="Employer's industries in Aviato's taxonomy.",
    )
    company_linkedin_industries: list[str] | None = Field(
        default=None,
        alias="companyLinkedinIndustries",
        description="Employer's industries as LinkedIn labels them.",
    )
    company_linkedin_numeric_id: str | None = Field(
        default=None,
        alias="companyLinkedinNumericId",
        description="LinkedIn's own numeric identifier for the company on this record.",
    )
    company_linkedin_url: str | None = Field(
        default=None,
        alias="companyLinkedinUrl",
        description="Employer's LinkedIn company page URL.",
    )
    company_locality: str | None = Field(
        default=None, alias="companyLocality", description="Employer's city."
    )
    company_name: str | None = Field(
        default=None, alias="companyName", description="Employer name."
    )
    company_pitchbook_url: str | None = Field(
        default=None,
        alias="companyPitchbookUrl",
        description="Employer's PitchBook profile URL.",
    )
    company_record_id: str | None = Field(
        default=None,
        alias="companyRecordId",
        description="Identifier on the nested Aviato company record. Same value as companyId.",
    )
    company_region: str | None = Field(
        default=None, alias="companyRegion", description="Employer's state or region."
    )
    company_twitter_url: str | None = Field(
        default=None,
        alias="companyTwitterUrl",
        description="Employer's Twitter/X profile URL.",
    )
    company_website_url: str | None = Field(
        default=None, alias="companyWebsiteUrl", description="Employer's website URL."
    )
    ended_utc: float | None = Field(
        default=None,
        alias="endedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    entity_type: str | None = Field(
        default=None,
        alias="entityType",
        description='Aviato\'s record class for this entry, e.g. "company" or "school".',
    )
    person_id: str | None = Field(
        default=None,
        alias="personId",
        description="Aviato's person identifier this experience belongs to. Same value as the top-level aviatoId.",
    )
    positions: list[PersonEnrichmentAviatoPosition] | None = Field(
        default=None, description="Roles held at this employer."
    )
    started_utc: float | None = Field(
        default=None,
        alias="startedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )


class PersonEnrichmentAviatoPosition(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    department: str | None = Field(
        default=None, description="Department the role sits in, e.g. EXECUTIVE."
    )
    description: str | None = Field(
        default=None, description="Role description as written on the profile."
    )
    employment_type: str | None = Field(
        default=None,
        alias="employmentType",
        description="Employment type, e.g. Full-time.",
    )
    ended_utc: float | None = Field(
        default=None,
        alias="endedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    location: str | None = Field(default=None, description="Where the role was based.")
    seniority_score: int | None = Field(
        default=None,
        alias="seniorityScore",
        description="Seniority score for the role; higher is more senior.",
    )
    started_utc: float | None = Field(
        default=None,
        alias="startedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    title: str | None = Field(default=None, description="Job title.")


class PersonEnrichmentAviatoLanguage(BaseModel):
    model_config = ConfigDict(extra="allow")

    name: str | None = Field(default=None, description="Language name.")
    proficiency: str | None = Field(
        default=None, description="Proficiency level, e.g. NATIVE_OR_BILINGUAL."
    )


class PersonEnrichmentAviatoLocationDetail(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    continent: PersonEnrichmentAviatoContinent | None = Field(
        default=None, description="Continent tier of the person's location."
    )
    country: PersonEnrichmentAviatoCountry | None = Field(
        default=None,
        description="Country tier of the person's location. Its name duplicates the top-level country field.",
    )
    county: PersonEnrichmentAviatoCounty | None = Field(
        default=None, description="County tier of the person's location."
    )
    local_admin: PersonEnrichmentAviatoLocalAdmin | None = Field(
        default=None,
        alias="localAdmin",
        description="Local administrative area tier of the person's location, such as the town or city government area.",
    )
    locality: PersonEnrichmentAviatoLocality | None = Field(
        default=None,
        description="City tier of the person's location. Its name duplicates the top-level locality field, and its latitude and longitude duplicate the top-level latitude and longitude.",
    )
    region: PersonEnrichmentAviatoRegion | None = Field(
        default=None,
        description="State or region tier of the person's location. Its name duplicates the top-level region field.",
    )


class PersonEnrichmentAviatoContinent(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    area_square_degrees: float | None = Field(
        default=None,
        alias="areaSquareDegrees",
        description="Area of the place in square degrees.",
    )
    bounding_box: str | None = Field(
        default=None,
        alias="boundingBox",
        description="Bounding box of the place as minLon,minLat,maxLon,maxLat.",
    )
    latitude: float | None = Field(
        default=None, description="Latitude of the place centre."
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the place centre."
    )
    name: str | None = Field(default=None, description="Place name for this tier.")
    place_id: str | None = Field(
        default=None,
        alias="placeId",
        description="Aviato's place identifier for this tier.",
    )
    place_type: str | None = Field(
        default=None,
        alias="placeType",
        description="Aviato's label for this tier, for example locality.",
    )


class PersonEnrichmentAviatoCountry(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    area_square_degrees: float | None = Field(
        default=None,
        alias="areaSquareDegrees",
        description="Area of the place in square degrees.",
    )
    bounding_box: str | None = Field(
        default=None,
        alias="boundingBox",
        description="Bounding box of the place as minLon,minLat,maxLon,maxLat.",
    )
    latitude: float | None = Field(
        default=None, description="Latitude of the place centre."
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the place centre."
    )
    name: str | None = Field(default=None, description="Place name for this tier.")
    place_id: str | None = Field(
        default=None,
        alias="placeId",
        description="Aviato's place identifier for this tier.",
    )
    place_type: str | None = Field(
        default=None,
        alias="placeType",
        description="Aviato's label for this tier, for example locality.",
    )


class PersonEnrichmentAviatoCounty(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    area_square_degrees: float | None = Field(
        default=None,
        alias="areaSquareDegrees",
        description="Area of the place in square degrees.",
    )
    bounding_box: str | None = Field(
        default=None,
        alias="boundingBox",
        description="Bounding box of the place as minLon,minLat,maxLon,maxLat.",
    )
    latitude: float | None = Field(
        default=None, description="Latitude of the place centre."
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the place centre."
    )
    name: str | None = Field(default=None, description="Place name for this tier.")
    place_id: str | None = Field(
        default=None,
        alias="placeId",
        description="Aviato's place identifier for this tier.",
    )
    place_type: str | None = Field(
        default=None,
        alias="placeType",
        description="Aviato's label for this tier, for example locality.",
    )


class PersonEnrichmentAviatoLocalAdmin(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    area_square_degrees: float | None = Field(
        default=None,
        alias="areaSquareDegrees",
        description="Area of the place in square degrees.",
    )
    bounding_box: str | None = Field(
        default=None,
        alias="boundingBox",
        description="Bounding box of the place as minLon,minLat,maxLon,maxLat.",
    )
    latitude: float | None = Field(
        default=None, description="Latitude of the place centre."
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the place centre."
    )
    name: str | None = Field(default=None, description="Place name for this tier.")
    place_id: str | None = Field(
        default=None,
        alias="placeId",
        description="Aviato's place identifier for this tier.",
    )
    place_type: str | None = Field(
        default=None,
        alias="placeType",
        description="Aviato's label for this tier, for example locality.",
    )


class PersonEnrichmentAviatoLocality(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    area_square_degrees: float | None = Field(
        default=None,
        alias="areaSquareDegrees",
        description="Area of the place in square degrees.",
    )
    bounding_box: str | None = Field(
        default=None,
        alias="boundingBox",
        description="Bounding box of the place as minLon,minLat,maxLon,maxLat.",
    )
    latitude: float | None = Field(
        default=None, description="Latitude of the place centre."
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the place centre."
    )
    name: str | None = Field(default=None, description="Place name for this tier.")
    place_id: str | None = Field(
        default=None,
        alias="placeId",
        description="Aviato's place identifier for this tier.",
    )
    place_type: str | None = Field(
        default=None,
        alias="placeType",
        description="Aviato's label for this tier, for example locality.",
    )


class PersonEnrichmentAviatoRegion(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    area_square_degrees: float | None = Field(
        default=None,
        alias="areaSquareDegrees",
        description="Area of the place in square degrees.",
    )
    bounding_box: str | None = Field(
        default=None,
        alias="boundingBox",
        description="Bounding box of the place as minLon,minLat,maxLon,maxLat.",
    )
    latitude: float | None = Field(
        default=None, description="Latitude of the place centre."
    )
    longitude: float | None = Field(
        default=None, description="Longitude of the place centre."
    )
    name: str | None = Field(default=None, description="Place name for this tier.")
    place_id: str | None = Field(
        default=None,
        alias="placeId",
        description="Aviato's place identifier for this tier.",
    )
    place_type: str | None = Field(
        default=None,
        alias="placeType",
        description="Aviato's label for this tier, for example locality.",
    )


class PersonEnrichmentBettercontactData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="City.")
    company: PersonEnrichmentBettercontactCompany | None = Field(
        default=None, description="The contact's employer."
    )
    connections: int | None = Field(
        default=None, description="LinkedIn connection count."
    )
    contact_id: str | None = Field(
        default=None,
        alias="contactId",
        description="BetterContact's own contact identifier.",
    )
    country: str | None = Field(default=None, description="Country.")
    country_code: str | None = Field(
        default=None,
        alias="countryCode",
        description="ISO 3166-1 alpha-2 country code.",
    )
    current_company: str | None = Field(
        default=None,
        alias="currentCompany",
        description="Current employer as BetterContact names it.",
    )
    do_not_contact: bool | None = Field(
        default=None,
        alias="doNotContact",
        description="True when the contact is on a do-not-contact list.",
    )
    email: str | None = Field(
        default=None, description="The email address the waterfall settled on."
    )
    email_provider: str | None = Field(
        default=None,
        alias="emailProvider",
        description="Mailbox provider behind the address, e.g. Google.",
    )
    email_status: str | None = Field(
        default=None,
        alias="emailStatus",
        description="Deliverability verdict for the address, e.g. valid, catch_all_safe, catch_all_not_safe, undeliverable, not_found.",
    )
    enriched: bool = Field(
        description="True when the waterfall matched a contact. A false answer is a legitimate miss and is not billed."
    )
    first_name: str | None = Field(
        default=None, alias="firstName", description="First name."
    )
    followers: int | None = Field(default=None, description="LinkedIn follower count.")
    full_name: str | None = Field(
        default=None, alias="fullName", description="Contact's full name."
    )
    gender: str | None = Field(
        default=None, description="Gender recorded for the contact."
    )
    image: str | None = Field(
        default=None, description="Contact's profile picture URL."
    )
    job_title: str | None = Field(
        default=None, alias="jobTitle", description="Current job title."
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Last name."
    )
    linkedin_id: str | None = Field(
        default=None, alias="linkedinId", description="Contact's LinkedIn numeric id."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Contact's LinkedIn profile URL."
    )
    location: str | None = Field(
        default=None, description="Location as one display string."
    )
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Postal code."
    )
    provider: str | None = Field(
        default=None,
        description="Which data source in the waterfall produced the address.",
    )


class PersonEnrichmentBettercontactCompany(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    about: str | None = Field(default=None, description="Company about text.")
    address_city: str | None = Field(
        default=None, alias="addressCity", description="Address city."
    )
    address_country: str | None = Field(
        default=None, alias="addressCountry", description="Address country."
    )
    address_state: str | None = Field(
        default=None, alias="addressState", description="Address state or region."
    )
    address_street: str | None = Field(
        default=None, alias="addressStreet", description="Street address."
    )
    address_zipcode: str | None = Field(
        default=None, alias="addressZipcode", description="Address postal code."
    )
    company_id: str | None = Field(
        default=None,
        alias="companyId",
        description="BetterContact's own company identifier.",
    )
    country_code: str | None = Field(
        default=None,
        alias="countryCode",
        description="ISO 3166-1 alpha-2 country code.",
    )
    crunchbase_url: str | None = Field(
        default=None,
        alias="crunchbaseUrl",
        description="Company Crunchbase profile URL.",
    )
    description: str | None = Field(default=None, description="Company description.")
    directions_url: str | None = Field(
        default=None,
        alias="directionsUrl",
        description="Map directions URL for the office.",
    )
    domain: str | None = Field(default=None, description="Company domain.")
    employees: int | None = Field(
        default=None, description="Employees BetterContact counts."
    )
    employees_on_linkedin: int | None = Field(
        default=None,
        alias="employeesOnLinkedin",
        description="Employees LinkedIn shows for the company.",
    )
    followers: int | None = Field(default=None, description="LinkedIn follower count.")
    founded: int | None = Field(
        default=None, description="Year the company was founded."
    )
    headquarters: str | None = Field(
        default=None, description="Headquarters as one display string."
    )
    headquarters_address: str | None = Field(
        default=None,
        alias="headquartersAddress",
        description="Headquarters street address.",
    )
    headquarters_city: str | None = Field(
        default=None, alias="headquartersCity", description="Headquarters city."
    )
    headquarters_country: str | None = Field(
        default=None, alias="headquartersCountry", description="Headquarters country."
    )
    image: str | None = Field(default=None, description="Company logo URL.")
    industry_code: str | None = Field(
        default=None, alias="industryCode", description="Industry classification code."
    )
    legal_id: str | None = Field(
        default=None, alias="legalId", description="Company registration number."
    )
    legal_name: str | None = Field(
        default=None, alias="legalName", description="Registered legal name."
    )
    linkedin_id: str | None = Field(
        default=None, alias="linkedinId", description="Company LinkedIn numeric id."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Company LinkedIn page URL."
    )
    name: str | None = Field(default=None, description="Company name.")
    organization_type: str | None = Field(
        default=None, alias="organizationType", description="Organization type."
    )
    phone: str | None = Field(default=None, description="Company switchboard number.")
    size: str | None = Field(default=None, description="Employee headcount band.")
    website: str | None = Field(default=None, description="Company website URL.")


class PersonEnrichmentFullenrichBulkData(BaseModel):
    contacts: list[PersonEnrichmentFullenrichBulkContact] = Field(
        description="One row per contact the waterfall resolved, in the order you sent them. Contacts it could not resolve are left out and are not billed, so match your rows back by the tags you set in custom, or by name and company."
    )


class PersonEnrichmentFullenrichBulkContact(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_domain: str | None = Field(
        default=None,
        alias="companyDomain",
        description="Company domain as you supplied it.",
    )
    company_name: str | None = Field(
        default=None,
        alias="companyName",
        description="Company name as you supplied it.",
    )
    custom: PersonEnrichmentFullenrichBulkCustom | None = Field(
        default=None,
        description="The tags you attached to this entry, echoed back so you can join rows to your own records.",
    )
    email: str | None = Field(
        default=None, description="Best work email FullEnrich found for this person."
    )
    email_status: str | None = Field(
        default=None,
        alias="emailStatus",
        description="Deliverability verdict for that address, e.g. DELIVERABLE or HIGH_PROBABILITY.",
    )
    first_name: str | None = Field(
        default=None, alias="firstName", description="First name."
    )
    full_name: str | None = Field(
        default=None, alias="fullName", description="Full name."
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Last name."
    )
    personal_emails: list[PersonEnrichmentFullenrichBulkPersonalEmail] | None = Field(
        default=None,
        alias="personalEmails",
        description="Personal addresses found, each with its own deliverability verdict.",
    )
    profile: PersonEnrichmentFullenrichBulkProfile | None = Field(
        default=None,
        description="The person behind the match: identity, location, current role and employer, history, education, languages and skills. Absent when nothing matched.",
    )
    work_emails: list[PersonEnrichmentFullenrichBulkWorkEmail] | None = Field(
        default=None,
        alias="workEmails",
        description="Every work address found, best first, each with its own deliverability verdict.",
    )


class PersonEnrichmentFullenrichBulkCustom(BaseModel):
    model_config = ConfigDict(extra="allow")


class PersonEnrichmentFullenrichBulkPersonalEmail(BaseModel):
    model_config = ConfigDict(extra="allow")

    email: str | None = Field(
        default=None, description="Best work email FullEnrich found for this person."
    )
    status: str | None = Field(default=None, description="Deliverability verdict.")


class PersonEnrichmentFullenrichBulkProfile(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="City the person is in.")
    company: PersonEnrichmentFullenrichBulkCompany | None = Field(
        default=None,
        description="The person's current employer, with FullEnrich's full firmographic record.",
    )
    country: str | None = Field(default=None, description="Country name.")
    country_code: str | None = Field(
        default=None,
        alias="countryCode",
        description="ISO 3166-1 alpha-2 country code.",
    )
    description: str | None = Field(default=None, description="Profile summary text.")
    educations: list[PersonEnrichmentFullenrichBulkEducation] | None = Field(
        default=None, description="Education history."
    )
    employment_history: list[PersonEnrichmentFullenrichBulkEmploymentHistory] | None = (
        Field(
            default=None,
            alias="employmentHistory",
            description="Every role on the record, current and past.",
        )
    )
    first_name: str | None = Field(
        default=None, alias="firstName", description="First name."
    )
    full_name: str | None = Field(
        default=None, alias="fullName", description="Full name."
    )
    headline: str | None = Field(default=None, description="LinkedIn headline.")
    is_current: bool | None = Field(
        default=None, alias="isCurrent", description="True while the role is current."
    )
    job_start_utc: float | None = Field(
        default=None,
        alias="jobStartUtc",
        description="UTC epoch timestamp in seconds (Unix time) the current role started. Multiply by 1000 for a JS Date in milliseconds.",
    )
    job_title: str | None = Field(
        default=None, alias="jobTitle", description="Job title."
    )
    languages: list[PersonEnrichmentFullenrichBulkLanguage] | None = Field(
        default=None, description="Languages the person speaks."
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Last name."
    )
    linkedin_handle: str | None = Field(
        default=None, alias="linkedinHandle", description="LinkedIn vanity handle."
    )
    linkedin_id: str | None = Field(
        default=None, alias="linkedinId", description="LinkedIn numeric member id."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="LinkedIn profile URL."
    )
    profile_id: str | None = Field(
        default=None,
        alias="profileId",
        description="FullEnrich's own person identifier.",
    )
    region: str | None = Field(default=None, description="State or region.")
    seniority: str | None = Field(default=None, description="Seniority band.")
    skills: list[str] | None = Field(
        default=None, description="Skills the person lists."
    )


class PersonEnrichmentFullenrichBulkCompany(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_id: str | None = Field(
        default=None,
        alias="companyId",
        description="FullEnrich's own company identifier.",
    )
    company_type: str | None = Field(
        default=None,
        alias="companyType",
        description="Ownership type, e.g. Public Company, Privately Held.",
    )
    description: str | None = Field(default=None, description="Profile summary text.")
    domain: str | None = Field(default=None, description="Primary company domain.")
    founded_year: int | None = Field(
        default=None,
        alias="foundedYear",
        description="Year the company was founded. Zero when FullEnrich holds none.",
    )
    headcount: int | None = Field(
        default=None, description="Employees FullEnrich currently counts."
    )
    headcount_range: str | None = Field(
        default=None,
        alias="headcountRange",
        description="Employee headcount band, e.g. 5001-10000.",
    )
    headquarters: PersonEnrichmentFullenrichBulkHeadquarter | None = Field(
        default=None, description="Headquarters address."
    )
    image: str | None = Field(default=None, description="Company logo URL.")
    industry: str | None = Field(default=None, description="Main industry.")
    linkedin_followers: int | None = Field(
        default=None, alias="linkedinFollowers", description="LinkedIn follower count."
    )
    linkedin_handle: str | None = Field(
        default=None, alias="linkedinHandle", description="LinkedIn vanity handle."
    )
    linkedin_id: str | None = Field(
        default=None, alias="linkedinId", description="LinkedIn numeric member id."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="LinkedIn profile URL."
    )
    name: str | None = Field(default=None, description="Company name.")
    offices: list[PersonEnrichmentFullenrichBulkOffice] | None = Field(
        default=None, description="Every other office FullEnrich holds for the company."
    )
    specialties: list[str] | None = Field(
        default=None, description="Specialties the company lists for itself."
    )
    website: str | None = Field(default=None, description="Company website URL.")


class PersonEnrichmentFullenrichBulkHeadquarter(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="City the person is in.")
    country: str | None = Field(default=None, description="Country name.")
    country_code: str | None = Field(
        default=None,
        alias="countryCode",
        description="ISO 3166-1 alpha-2 country code.",
    )
    line1: str | None = Field(default=None, description="First address line.")
    line2: str | None = Field(
        default=None,
        description="Second address line, carrying city, region, postal code and country.",
    )
    region: str | None = Field(default=None, description="State or region.")


class PersonEnrichmentFullenrichBulkOffice(BaseModel):
    model_config = ConfigDict(extra="allow")

    line1: str | None = Field(default=None, description="First address line.")
    line2: str | None = Field(
        default=None,
        description="Second address line, carrying city, region, postal code and country.",
    )


class PersonEnrichmentFullenrichBulkEducation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    degree: str | None = Field(default=None, description="Degree earned.")
    end_utc: float | None = Field(
        default=None,
        alias="endUtc",
        description="UTC epoch timestamp in seconds (Unix time) study ended. Multiply by 1000 for a JS Date in milliseconds.",
    )
    school_name: str | None = Field(
        default=None, alias="schoolName", description="School name."
    )
    start_utc: float | None = Field(
        default=None,
        alias="startUtc",
        description="UTC epoch timestamp in seconds (Unix time) the role started. Multiply by 1000 for a JS Date in milliseconds.",
    )


class PersonEnrichmentFullenrichBulkEmploymentHistory(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_domain: str | None = Field(
        default=None,
        alias="companyDomain",
        description="Company domain as you supplied it.",
    )
    company_name: str | None = Field(
        default=None,
        alias="companyName",
        description="Company name as you supplied it.",
    )
    is_current: bool | None = Field(
        default=None, alias="isCurrent", description="True while the role is current."
    )
    job_title: str | None = Field(
        default=None, alias="jobTitle", description="Job title."
    )
    seniority: str | None = Field(default=None, description="Seniority band.")
    start_utc: float | None = Field(
        default=None,
        alias="startUtc",
        description="UTC epoch timestamp in seconds (Unix time) the role started. Multiply by 1000 for a JS Date in milliseconds.",
    )


class PersonEnrichmentFullenrichBulkLanguage(BaseModel):
    model_config = ConfigDict(extra="allow")

    language: str | None = Field(default=None, description="Language name.")
    proficiency: str | None = Field(
        default=None, description="Proficiency band, e.g. FULL_PROFESSIONAL."
    )


class PersonEnrichmentFullenrichBulkWorkEmail(BaseModel):
    model_config = ConfigDict(extra="allow")

    email: str | None = Field(
        default=None, description="Best work email FullEnrich found for this person."
    )
    status: str | None = Field(default=None, description="Deliverability verdict.")


class PersonEnrichmentFullenrichReverseEmailData(BaseModel):
    contacts: list[PersonEnrichmentFullenrichReverseEmailContact] = Field(
        description="One row per address resolved to a person, in the order you sent them. Addresses that resolved to nobody are left out and are not billed; queriedEmail on each row tells you which address it answers."
    )


class PersonEnrichmentFullenrichReverseEmailContact(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    custom: PersonEnrichmentFullenrichReverseEmailCustom | None = Field(
        default=None,
        description="The tags you attached to this entry, echoed back so you can join rows to your own records.",
    )
    profile: PersonEnrichmentFullenrichReverseEmailProfile | None = Field(
        default=None,
        description="The person behind the match: identity, location, current role and employer, history, education, languages and skills. Absent when nothing matched.",
    )
    queried_email: str | None = Field(
        default=None,
        alias="queriedEmail",
        description="The address you asked about, echoed back.",
    )


class PersonEnrichmentFullenrichReverseEmailCustom(BaseModel):
    model_config = ConfigDict(extra="allow")


class PersonEnrichmentFullenrichReverseEmailProfile(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="City the person is in.")
    company: PersonEnrichmentFullenrichReverseEmailCompany | None = Field(
        default=None,
        description="The person's current employer, with FullEnrich's full firmographic record.",
    )
    country: str | None = Field(default=None, description="Country name.")
    country_code: str | None = Field(
        default=None,
        alias="countryCode",
        description="ISO 3166-1 alpha-2 country code.",
    )
    description: str | None = Field(default=None, description="Profile summary text.")
    educations: list[PersonEnrichmentFullenrichReverseEmailEducation] | None = Field(
        default=None, description="Education history."
    )
    employment_history: (
        list[PersonEnrichmentFullenrichReverseEmailEmploymentHistory] | None
    ) = Field(
        default=None,
        alias="employmentHistory",
        description="Every role on the record, current and past.",
    )
    first_name: str | None = Field(
        default=None, alias="firstName", description="First name."
    )
    full_name: str | None = Field(
        default=None, alias="fullName", description="Full name."
    )
    headline: str | None = Field(default=None, description="LinkedIn headline.")
    is_current: bool | None = Field(
        default=None, alias="isCurrent", description="True while the role is current."
    )
    job_start_utc: float | None = Field(
        default=None,
        alias="jobStartUtc",
        description="UTC epoch timestamp in seconds (Unix time) the current role started. Multiply by 1000 for a JS Date in milliseconds.",
    )
    job_title: str | None = Field(
        default=None, alias="jobTitle", description="Job title."
    )
    languages: list[PersonEnrichmentFullenrichReverseEmailLanguage] | None = Field(
        default=None, description="Languages the person speaks."
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Last name."
    )
    linkedin_handle: str | None = Field(
        default=None, alias="linkedinHandle", description="LinkedIn vanity handle."
    )
    linkedin_id: str | None = Field(
        default=None, alias="linkedinId", description="LinkedIn numeric member id."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="LinkedIn profile URL."
    )
    profile_id: str | None = Field(
        default=None,
        alias="profileId",
        description="FullEnrich's own person identifier.",
    )
    region: str | None = Field(default=None, description="State or region.")
    seniority: str | None = Field(default=None, description="Seniority band.")
    skills: list[str] | None = Field(
        default=None, description="Skills the person lists."
    )


class PersonEnrichmentFullenrichReverseEmailCompany(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_id: str | None = Field(
        default=None,
        alias="companyId",
        description="FullEnrich's own company identifier.",
    )
    company_type: str | None = Field(
        default=None,
        alias="companyType",
        description="Ownership type, e.g. Public Company, Privately Held.",
    )
    description: str | None = Field(default=None, description="Profile summary text.")
    domain: str | None = Field(default=None, description="Primary company domain.")
    founded_year: int | None = Field(
        default=None,
        alias="foundedYear",
        description="Year the company was founded. Zero when FullEnrich holds none.",
    )
    headcount: int | None = Field(
        default=None, description="Employees FullEnrich currently counts."
    )
    headcount_range: str | None = Field(
        default=None,
        alias="headcountRange",
        description="Employee headcount band, e.g. 5001-10000.",
    )
    headquarters: PersonEnrichmentFullenrichReverseEmailHeadquarter | None = Field(
        default=None, description="Headquarters address."
    )
    image: str | None = Field(default=None, description="Company logo URL.")
    industry: str | None = Field(default=None, description="Main industry.")
    linkedin_followers: int | None = Field(
        default=None, alias="linkedinFollowers", description="LinkedIn follower count."
    )
    linkedin_handle: str | None = Field(
        default=None, alias="linkedinHandle", description="LinkedIn vanity handle."
    )
    linkedin_id: str | None = Field(
        default=None, alias="linkedinId", description="LinkedIn numeric member id."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="LinkedIn profile URL."
    )
    name: str | None = Field(default=None, description="Company name.")
    offices: list[PersonEnrichmentFullenrichReverseEmailOffice] | None = Field(
        default=None, description="Every other office FullEnrich holds for the company."
    )
    specialties: list[str] | None = Field(
        default=None, description="Specialties the company lists for itself."
    )
    website: str | None = Field(default=None, description="Company website URL.")


class PersonEnrichmentFullenrichReverseEmailHeadquarter(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="City the person is in.")
    country: str | None = Field(default=None, description="Country name.")
    country_code: str | None = Field(
        default=None,
        alias="countryCode",
        description="ISO 3166-1 alpha-2 country code.",
    )
    line1: str | None = Field(default=None, description="First address line.")
    line2: str | None = Field(
        default=None,
        description="Second address line, carrying city, region, postal code and country.",
    )
    region: str | None = Field(default=None, description="State or region.")


class PersonEnrichmentFullenrichReverseEmailOffice(BaseModel):
    model_config = ConfigDict(extra="allow")

    line1: str | None = Field(default=None, description="First address line.")
    line2: str | None = Field(
        default=None,
        description="Second address line, carrying city, region, postal code and country.",
    )


class PersonEnrichmentFullenrichReverseEmailEducation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    degree: str | None = Field(default=None, description="Degree earned.")
    end_utc: float | None = Field(
        default=None,
        alias="endUtc",
        description="UTC epoch timestamp in seconds (Unix time) study ended. Multiply by 1000 for a JS Date in milliseconds.",
    )
    school_name: str | None = Field(
        default=None, alias="schoolName", description="School name."
    )
    start_utc: float | None = Field(
        default=None,
        alias="startUtc",
        description="UTC epoch timestamp in seconds (Unix time) the role started. Multiply by 1000 for a JS Date in milliseconds.",
    )


class PersonEnrichmentFullenrichReverseEmailEmploymentHistory(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_domain: str | None = Field(
        default=None,
        alias="companyDomain",
        description="Company domain as you supplied it.",
    )
    company_name: str | None = Field(
        default=None,
        alias="companyName",
        description="Company name as you supplied it.",
    )
    is_current: bool | None = Field(
        default=None, alias="isCurrent", description="True while the role is current."
    )
    job_title: str | None = Field(
        default=None, alias="jobTitle", description="Job title."
    )
    seniority: str | None = Field(default=None, description="Seniority band.")
    start_utc: float | None = Field(
        default=None,
        alias="startUtc",
        description="UTC epoch timestamp in seconds (Unix time) the role started. Multiply by 1000 for a JS Date in milliseconds.",
    )


class PersonEnrichmentFullenrichReverseEmailLanguage(BaseModel):
    model_config = ConfigDict(extra="allow")

    language: str | None = Field(default=None, description="Language name.")
    proficiency: str | None = Field(
        default=None, description="Proficiency band, e.g. FULL_PROFESSIONAL."
    )


class PersonEnrichmentLushaData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company: PersonEnrichmentLushaCompany | None = Field(
        default=None, description="The person's current employer."
    )
    contact_tags: list[str] | None = Field(
        default=None,
        alias="contactTags",
        description="Tags Lusha attaches to the contact.",
    )
    departments: list[str] | None = Field(
        default=None,
        description="Departments Lusha assigns the current role, e.g. General Management.",
    )
    email: str | None = Field(
        default=None,
        description="Best email address Lusha holds, the first entry of emails.",
    )
    emails: list[PersonEnrichmentLushaEmail] | None = Field(
        default=None, description="Every email address Lusha holds for the person."
    )
    first_name: str | None = Field(
        default=None, alias="firstName", description="Person's first name."
    )
    full_name: str = Field(alias="fullName", description="Person's full name.")
    job_start_utc: float | None = Field(
        default=None,
        alias="jobStartUtc",
        description="UTC epoch timestamp in seconds (Unix time) the person started the current role. Multiply by 1000 for a JS Date in milliseconds.",
    )
    job_title: str | None = Field(
        default=None, alias="jobTitle", description="Current job title."
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Person's last name."
    )
    linkedin_connections: int | None = Field(
        default=None,
        alias="linkedinConnections",
        description="LinkedIn connection count.",
    )
    linkedin_followers: int | None = Field(
        default=None, alias="linkedinFollowers", description="LinkedIn follower count."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="LinkedIn profile URL."
    )
    location: PersonEnrichmentLushaLocation | None = Field(
        default=None, description="Where the person is located."
    )
    person_id: str | None = Field(
        default=None, alias="personId", description="Lusha's own person identifier."
    )
    phone: str | None = Field(
        default=None,
        description="Best phone number Lusha holds, the first entry of phones.",
    )
    phones: list[PersonEnrichmentLushaPhone] | None = Field(
        default=None, description="Every phone number Lusha holds for the person."
    )
    previous_job_title: str | None = Field(
        default=None,
        alias="previousJobTitle",
        description="Job title of the previous role Lusha holds.",
    )
    seniority: str | None = Field(
        default=None, description="Seniority band for the current role, e.g. Founder."
    )
    updated_utc: float | None = Field(
        default=None,
        alias="updatedUtc",
        description="UTC epoch timestamp in seconds (Unix time) the record was last refreshed. Multiply by 1000 for a JS Date in milliseconds.",
    )


class PersonEnrichmentLushaCompany(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="Headquarters city.")
    company_id: str | None = Field(
        default=None, alias="companyId", description="Lusha's own company identifier."
    )
    country: str | None = Field(default=None, description="Headquarters country.")
    description: str | None = Field(default=None, description="Company description.")
    domain: str | None = Field(default=None, description="Primary company domain.")
    email_domain: str | None = Field(
        default=None,
        alias="emailDomain",
        description="Domain the company's work email addresses use.",
    )
    employee_range: list[int] | None = Field(
        default=None,
        alias="employeeRange",
        description="Employee headcount band as [min, max].",
    )
    facebook_url: str | None = Field(
        default=None, alias="facebookUrl", description="Company Facebook page URL."
    )
    fqdn: str | None = Field(
        default=None, description="Fully qualified host for the company website."
    )
    image: str | None = Field(default=None, description="Company logo URL.")
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Company LinkedIn page URL."
    )
    main_industry: str | None = Field(
        default=None, alias="mainIndustry", description="Top-level industry."
    )
    naics_codes: list[PersonEnrichmentLushaNaicsCode] | None = Field(
        default=None,
        alias="naicsCodes",
        description="NAICS classification codes for the company.",
    )
    name: str | None = Field(default=None, description="Company name.")
    revenue_range: list[int] | None = Field(
        default=None,
        alias="revenueRange",
        description="Annual revenue band in USD as [min, max].",
    )
    sic_codes: list[PersonEnrichmentLushaSicCode] | None = Field(
        default=None,
        alias="sicCodes",
        description="SIC classification codes for the company.",
    )
    state: str | None = Field(default=None, description="Headquarters state or region.")
    sub_industry: str | None = Field(
        default=None, alias="subIndustry", description="Sub-industry."
    )
    technologies: list[str] | None = Field(
        default=None, description="Technologies Lusha detects in the company's stack."
    )
    website: str | None = Field(default=None, description="Company website URL.")
    x_url: str | None = Field(
        default=None, alias="xUrl", description="Company X (Twitter) profile URL."
    )


class PersonEnrichmentLushaNaicsCode(BaseModel):
    model_config = ConfigDict(extra="allow")

    code: str = Field(description="NAICS code.")
    description: str | None = Field(
        default=None, description="What the NAICS code covers."
    )


class PersonEnrichmentLushaSicCode(BaseModel):
    model_config = ConfigDict(extra="allow")

    code: str = Field(description="SIC code.")
    description: str | None = Field(
        default=None, description="What the SIC code covers."
    )


class PersonEnrichmentLushaEmail(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    confidence: str | None = Field(
        default=None, description="Lusha's confidence grade for the address, e.g. A+."
    )
    email: str = Field(description="Email address.")
    type_: str | None = Field(
        default=None, alias="type", description="Address kind, e.g. work or personal."
    )
    updated_utc: float | None = Field(
        default=None,
        alias="updatedUtc",
        description="UTC epoch timestamp in seconds (Unix time) the address was last confirmed. Multiply by 1000 for a JS Date in milliseconds.",
    )


class PersonEnrichmentLushaLocation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="City.")
    continent: str | None = Field(default=None, description="Continent name.")
    country: str | None = Field(default=None, description="Country name.")
    country_code: str | None = Field(
        default=None,
        alias="countryCode",
        description="ISO 3166-1 alpha-2 country code.",
    )
    is_eu_contact: bool | None = Field(
        default=None,
        alias="isEuContact",
        description="True when Lusha classifies the contact as EU-resident.",
    )
    state: str | None = Field(default=None, description="State or region.")
    state_code: str | None = Field(
        default=None, alias="stateCode", description="State or region code."
    )


class PersonEnrichmentLushaPhone(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    do_not_call: bool | None = Field(
        default=None,
        alias="doNotCall",
        description="True when the number is on a do-not-call list.",
    )
    number: str = Field(description="Phone number in international format.")
    type_: str | None = Field(
        default=None, alias="type", description="Line kind, e.g. mobile or direct."
    )


class PersonEnrichmentPeopledatalabsData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    activity_score: str | None = Field(
        default=None,
        alias="activityScore",
        description="People Data Labs' qualitative score for how recently the profile showed activity.",
    )
    birth_date: str | None = Field(
        default=None,
        alias="birthDate",
        description="Date of birth as People Data Labs reports it, YYYY-MM-DD.",
    )
    birth_year: int | None = Field(
        default=None, alias="birthYear", description="Year of birth."
    )
    company: PersonEnrichmentPeopledatalabsCompany | None = Field(
        default=None, description="The person's current employer."
    )
    countries: list[str] | None = Field(
        default=None, description="Every country associated with the person."
    )
    dataset_version: str | None = Field(
        default=None,
        alias="datasetVersion",
        description="Version of the People Data Labs dataset this record came from.",
    )
    education: list[PersonEnrichmentPeopledatalabsEducation] | None = Field(
        default=None, description="Education history."
    )
    emails: list[PersonEnrichmentPeopledatalabsEmail] | None = Field(
        default=None,
        description="Every email address held for the person, with its kind.",
    )
    experience: list[PersonEnrichmentPeopledatalabsExperience] | None = Field(
        default=None, description="Work history, most relevant first."
    )
    facebook_id: str | None = Field(
        default=None, alias="facebookId", description="Facebook numeric id."
    )
    facebook_url: str | None = Field(
        default=None, alias="facebookUrl", description="Facebook profile URL."
    )
    facebook_username: str | None = Field(
        default=None, alias="facebookUsername", description="Facebook handle."
    )
    first_name: str | None = Field(
        default=None, alias="firstName", description="First name."
    )
    full_name: str = Field(alias="fullName", description="Person's full name.")
    github_url: str | None = Field(
        default=None, alias="githubUrl", description="GitHub profile URL."
    )
    github_username: str | None = Field(
        default=None, alias="githubUsername", description="GitHub handle."
    )
    industry: str | None = Field(
        default=None, description="Industry the person works in."
    )
    interests: list[str] | None = Field(
        default=None, description="Interests the person lists."
    )
    job_changed_utc: float | None = Field(
        default=None,
        alias="jobChangedUtc",
        description="UTC epoch timestamp in seconds (Unix time) the person last changed jobs. Multiply by 1000 for a JS Date in milliseconds.",
    )
    job_start_date: str | None = Field(
        default=None,
        alias="jobStartDate",
        description="When the current role started, as People Data Labs reports it: YYYY, YYYY-MM or YYYY-MM-DD.",
    )
    job_title: str | None = Field(
        default=None, alias="jobTitle", description="Current job title."
    )
    job_title_class: str | None = Field(
        default=None,
        alias="jobTitleClass",
        description="Normalized title class, e.g. research_and_development.",
    )
    job_title_levels: list[str] | None = Field(
        default=None,
        alias="jobTitleLevels",
        description="Seniority levels for the current title, e.g. cxo, owner.",
    )
    job_title_role: str | None = Field(
        default=None,
        alias="jobTitleRole",
        description="Normalized role for the current title, e.g. engineering.",
    )
    job_title_sub_role: str | None = Field(
        default=None,
        alias="jobTitleSubRole",
        description="Normalized sub-role for the current title.",
    )
    job_verified_utc: float | None = Field(
        default=None,
        alias="jobVerifiedUtc",
        description="UTC epoch timestamp in seconds (Unix time) the current role was last verified. Multiply by 1000 for a JS Date in milliseconds.",
    )
    last_initial: str | None = Field(
        default=None, alias="lastInitial", description="Last initial."
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Last name."
    )
    linkedin_id: str | None = Field(
        default=None, alias="linkedinId", description="LinkedIn numeric member id."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="LinkedIn profile URL."
    )
    linkedin_username: str | None = Field(
        default=None, alias="linkedinUsername", description="LinkedIn vanity handle."
    )
    location: PersonEnrichmentPeopledatalabsLocation | None = Field(
        default=None, description="Where the person lives."
    )
    location_names: list[str] | None = Field(
        default=None,
        alias="locationNames",
        description="Every location People Data Labs has associated with the person.",
    )
    middle_initial: str | None = Field(
        default=None, alias="middleInitial", description="Middle initial."
    )
    middle_name: str | None = Field(
        default=None, alias="middleName", description="Middle name."
    )
    mobile_phone: str | None = Field(
        default=None,
        alias="mobilePhone",
        description="Mobile phone number in international form.",
    )
    pdl_id: str | None = Field(
        default=None,
        alias="pdlId",
        description="People Data Labs persistent person id. Send it back as this SKU's pdlId input.",
    )
    personal_emails: list[str] | None = Field(
        default=None, alias="personalEmails", description="Personal email addresses."
    )
    phone_numbers: list[str] | None = Field(
        default=None,
        alias="phoneNumbers",
        description="Every phone number held for the person.",
    )
    profile_score: str | None = Field(
        default=None,
        alias="profileScore",
        description="People Data Labs' qualitative score for how complete the profile is.",
    )
    profiles: list[PersonEnrichmentPeopledatalabsProfile] | None = Field(
        default=None, description="Every social profile linked to the person."
    )
    recommended_personal_email: str | None = Field(
        default=None,
        alias="recommendedPersonalEmail",
        description="The personal address People Data Labs recommends reaching the person at.",
    )
    regions: list[str] | None = Field(
        default=None, description="Every region associated with the person."
    )
    sex: str | None = Field(default=None, description="Sex recorded for the person.")
    skills: list[str] | None = Field(
        default=None, description="Skills the person lists."
    )
    street_addresses: list[PersonEnrichmentPeopledatalabsStreetAddresse] | None = Field(
        default=None,
        alias="streetAddresses",
        description="Every street address associated with the person.",
    )
    twitter_url: str | None = Field(
        default=None, alias="twitterUrl", description="X (Twitter) profile URL."
    )
    twitter_username: str | None = Field(
        default=None, alias="twitterUsername", description="X (Twitter) handle."
    )
    work_email: str | None = Field(
        default=None, alias="workEmail", description="Best work email address."
    )


class PersonEnrichmentPeopledatalabsCompany(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address_line2: str | None = Field(
        default=None,
        alias="addressLine2",
        description="Second line of the headquarters address.",
    )
    company_id: str | None = Field(
        default=None, alias="companyId", description="People Data Labs company id."
    )
    continent: str | None = Field(default=None, description="Headquarters continent.")
    country: str | None = Field(default=None, description="Headquarters country.")
    facebook_url: str | None = Field(
        default=None, alias="facebookUrl", description="Company Facebook page URL."
    )
    founded: int | None = Field(
        default=None, description="Year the company was founded."
    )
    geo: str | None = Field(
        default=None, description='Headquarters coordinates as "lat,lon".'
    )
    industry: str | None = Field(default=None, description="Company industry.")
    industry_v2: str | None = Field(
        default=None,
        alias="industryV2",
        description="Company industry on People Data Labs' newer taxonomy.",
    )
    linkedin_id: str | None = Field(
        default=None, alias="linkedinId", description="Company LinkedIn numeric id."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Company LinkedIn page URL."
    )
    locality: str | None = Field(default=None, description="Headquarters city.")
    location_name: str | None = Field(
        default=None,
        alias="locationName",
        description="Headquarters location as one display string.",
    )
    metro: str | None = Field(default=None, description="Headquarters metro area.")
    name: str | None = Field(default=None, description="Company name.")
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Headquarters postal code."
    )
    region: str | None = Field(
        default=None, description="Headquarters state or region."
    )
    size: str | None = Field(
        default=None, description="Employee headcount band, e.g. 5001-10000."
    )
    street_address: str | None = Field(
        default=None, alias="streetAddress", description="Headquarters street address."
    )
    twitter_url: str | None = Field(
        default=None, alias="twitterUrl", description="Company X (Twitter) profile URL."
    )
    website: str | None = Field(default=None, description="Company website domain.")


class PersonEnrichmentPeopledatalabsEducation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    degrees: list[str] | None = Field(default=None, description="Degrees earned.")
    end_date: str | None = Field(
        default=None, alias="endDate", description="When study ended."
    )
    gpa: float | None = Field(
        default=None, description="Grade point average, when the person published one."
    )
    majors: list[str] | None = Field(default=None, description="Majors studied.")
    minors: list[str] | None = Field(default=None, description="Minors studied.")
    school_id: str | None = Field(
        default=None, alias="schoolId", description="People Data Labs school id."
    )
    school_linkedin_url: str | None = Field(
        default=None, alias="schoolLinkedinUrl", description="School LinkedIn page URL."
    )
    school_location_name: str | None = Field(
        default=None,
        alias="schoolLocationName",
        description="School location as one display string.",
    )
    school_name: str | None = Field(
        default=None, alias="schoolName", description="School name."
    )
    school_type: str | None = Field(
        default=None,
        alias="schoolType",
        description="School type, e.g. post-secondary institution.",
    )
    school_website: str | None = Field(
        default=None, alias="schoolWebsite", description="School website domain."
    )
    start_date: str | None = Field(
        default=None,
        alias="startDate",
        description="When study started: YYYY, YYYY-MM or YYYY-MM-DD.",
    )


class PersonEnrichmentPeopledatalabsEmail(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address: str = Field(description="Email address.")
    type_: str | None = Field(
        default=None,
        alias="type",
        description="Address kind, e.g. professional or personal.",
    )


class PersonEnrichmentPeopledatalabsExperience(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_founded: int | None = Field(
        default=None,
        alias="companyFounded",
        description="Year the employer was founded.",
    )
    company_id: str | None = Field(
        default=None,
        alias="companyId",
        description="People Data Labs company id for the employer.",
    )
    company_industry: str | None = Field(
        default=None, alias="companyIndustry", description="Employer industry."
    )
    company_linkedin_url: str | None = Field(
        default=None,
        alias="companyLinkedinUrl",
        description="Employer LinkedIn page URL.",
    )
    company_location_name: str | None = Field(
        default=None,
        alias="companyLocationName",
        description="Employer headquarters as one display string.",
    )
    company_name: str | None = Field(
        default=None, alias="companyName", description="Employer name."
    )
    company_size: str | None = Field(
        default=None, alias="companySize", description="Employer headcount band."
    )
    company_website: str | None = Field(
        default=None, alias="companyWebsite", description="Employer website domain."
    )
    end_date: str | None = Field(
        default=None,
        alias="endDate",
        description="When the role ended, absent while the role is current.",
    )
    is_primary: bool | None = Field(
        default=None,
        alias="isPrimary",
        description="True for the role People Data Labs treats as current.",
    )
    location_names: list[str] | None = Field(
        default=None, alias="locationNames", description="Where the role was based."
    )
    start_date: str | None = Field(
        default=None,
        alias="startDate",
        description="When the role started: YYYY, YYYY-MM or YYYY-MM-DD.",
    )
    title: str | None = Field(default=None, description="Job title held.")
    title_class: str | None = Field(
        default=None, alias="titleClass", description="Normalized title class."
    )
    title_levels: list[str] | None = Field(
        default=None, alias="titleLevels", description="Seniority levels for the title."
    )
    title_role: str | None = Field(
        default=None, alias="titleRole", description="Normalized role for the title."
    )
    title_sub_role: str | None = Field(
        default=None,
        alias="titleSubRole",
        description="Normalized sub-role for the title.",
    )


class PersonEnrichmentPeopledatalabsLocation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address_line2: str | None = Field(
        default=None, alias="addressLine2", description="Second line of the address."
    )
    continent: str | None = Field(default=None, description="Continent.")
    country: str | None = Field(default=None, description="Country.")
    geo: str | None = Field(default=None, description='Coordinates as "lat,lon".')
    locality: str | None = Field(default=None, description="City.")
    metro: str | None = Field(default=None, description="Metro area.")
    name: str | None = Field(
        default=None, description="Location as one display string."
    )
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Postal code."
    )
    region: str | None = Field(default=None, description="State or region.")
    street_address: str | None = Field(
        default=None, alias="streetAddress", description="Street address."
    )
    updated_utc: float | None = Field(
        default=None,
        alias="updatedUtc",
        description="UTC epoch timestamp in seconds (Unix time) the location was last updated. Multiply by 1000 for a JS Date in milliseconds.",
    )


class PersonEnrichmentPeopledatalabsProfile(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    network: str = Field(description="Network name, e.g. linkedin, github, twitter.")
    profile_id: str | None = Field(
        default=None, alias="profileId", description="Network's own id for the profile."
    )
    url: str | None = Field(default=None, description="Profile URL.")
    username: str | None = Field(default=None, description="Handle on that network.")


class PersonEnrichmentPeopledatalabsStreetAddresse(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address_line2: str | None = Field(
        default=None, alias="addressLine2", description="Second line of the address."
    )
    continent: str | None = Field(default=None, description="Continent.")
    country: str | None = Field(default=None, description="Country.")
    geo: str | None = Field(default=None, description='Coordinates as "lat,lon".')
    locality: str | None = Field(default=None, description="City.")
    metro: str | None = Field(default=None, description="Metro area.")
    name: str | None = Field(
        default=None, description="Address location as one display string."
    )
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Postal code."
    )
    region: str | None = Field(default=None, description="State or region.")
    street_address: str | None = Field(
        default=None, alias="streetAddress", description="Street address."
    )


class PersonEnrichmentProspeoData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company: PersonEnrichmentProspeoCompany | None = Field(
        default=None,
        description="The person's current employer, with Prospeo's full firmographic record.",
    )
    email: PersonEnrichmentProspeoEmail | None = Field(
        default=None,
        description="Work email address. Prospeo returns the address only once it is revealed; status says why it is absent otherwise.",
    )
    first_name: str | None = Field(
        default=None, alias="firstName", description="First name."
    )
    free_enrichment: bool | None = Field(
        default=None,
        alias="freeEnrichment",
        description="True when Prospeo served this record from cache and did not charge for it.",
    )
    full_name: str = Field(alias="fullName", description="Person's full name.")
    headline: str | None = Field(default=None, description="LinkedIn headline.")
    job_change_detected_utc: float | None = Field(
        default=None,
        alias="jobChangeDetectedUtc",
        description="UTC epoch timestamp in seconds (Unix time) Prospeo last detected a job change. Multiply by 1000 for a JS Date in milliseconds.",
    )
    job_history: list[PersonEnrichmentProspeoJobHistory] | None = Field(
        default=None,
        alias="jobHistory",
        description="Every role Prospeo holds for the person, most recent first.",
    )
    job_key: str | None = Field(
        default=None,
        alias="jobKey",
        description="Prospeo's identifier for the current role.",
    )
    job_title: str | None = Field(
        default=None, alias="jobTitle", description="Current job title."
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Last name."
    )
    linkedin_member_id: str | None = Field(
        default=None,
        alias="linkedinMemberId",
        description="LinkedIn numeric member id.",
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="LinkedIn profile URL."
    )
    location: PersonEnrichmentProspeoLocation | None = Field(
        default=None, description="Where the person is located."
    )
    mobile: PersonEnrichmentProspeoMobile | None = Field(
        default=None,
        description="Mobile phone number. Digits are masked until the number is revealed; send enrichMobile to reveal it.",
    )
    person_id: str | None = Field(
        default=None,
        alias="personId",
        description="Prospeo's own person identifier. Send it back as this SKU's personId input.",
    )
    skills: list[str] | None = Field(
        default=None, description="Skills the person lists."
    )


class PersonEnrichmentProspeoCompany(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    attributes: PersonEnrichmentProspeoAttribute | None = Field(
        default=None, description="What Prospeo detects about how the company sells."
    )
    company_id: str | None = Field(
        default=None,
        alias="companyId",
        description="Prospeo's own company identifier. Send it back as this SKU's companyId input.",
    )
    crunchbase_url: str | None = Field(
        default=None,
        alias="crunchbaseUrl",
        description="Company Crunchbase profile URL.",
    )
    description: str | None = Field(
        default=None, description="Company description as the company writes it."
    )
    description_ai: str | None = Field(
        default=None,
        alias="descriptionAi",
        description="Prospeo's own AI-written company summary.",
    )
    description_seo: str | None = Field(
        default=None,
        alias="descriptionSeo",
        description="Meta description from the company's website.",
    )
    domain: str | None = Field(default=None, description="Primary company domain.")
    email_tech: PersonEnrichmentProspeoEmailTech | None = Field(
        default=None,
        alias="emailTech",
        description="How the company's email is hosted.",
    )
    employee_count: int | None = Field(
        default=None,
        alias="employeeCount",
        description="Employees Prospeo currently counts.",
    )
    employee_count_on_prospeo: int | None = Field(
        default=None,
        alias="employeeCountOnProspeo",
        description="Employees of this company that Prospeo holds a profile for.",
    )
    employee_range: str | None = Field(
        default=None,
        alias="employeeRange",
        description="Employee headcount band, e.g. 10000+.",
    )
    facebook_url: str | None = Field(
        default=None, alias="facebookUrl", description="Company Facebook page URL."
    )
    founded: int | None = Field(
        default=None, description="Year the company was founded."
    )
    funding: PersonEnrichmentProspeoFunding | None = Field(
        default=None, description="Funding history."
    )
    image: str | None = Field(default=None, description="Company logo URL.")
    industry: str | None = Field(default=None, description="Company industry.")
    instagram_url: str | None = Field(
        default=None, alias="instagramUrl", description="Company Instagram profile URL."
    )
    job_postings: PersonEnrichmentProspeoJobPosting | None = Field(
        default=None,
        alias="jobPostings",
        description="Open roles Prospeo currently sees for the company.",
    )
    keywords: list[str] | None = Field(
        default=None, description="Keywords Prospeo assigns the company."
    )
    linkedin_id: str | None = Field(
        default=None, alias="linkedinId", description="Company LinkedIn numeric id."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Company LinkedIn page URL."
    )
    location: PersonEnrichmentProspeoLocation | None = Field(
        default=None, description="Company headquarters."
    )
    naics_codes: list[str] | None = Field(
        default=None,
        alias="naicsCodes",
        description="NAICS classification codes for the company.",
    )
    name: str | None = Field(default=None, description="Company name.")
    other_websites: list[str] | None = Field(
        default=None,
        alias="otherWebsites",
        description="Other domains the company owns.",
    )
    phone_hq: PersonEnrichmentProspeoPhoneHq | None = Field(
        default=None, alias="phoneHq", description="Headquarters switchboard number."
    )
    revenue_range: PersonEnrichmentProspeoRevenueRange | None = Field(
        default=None, alias="revenueRange", description="Annual revenue band in USD."
    )
    revenue_range_printed: str | None = Field(
        default=None,
        alias="revenueRangePrinted",
        description="Annual revenue band as a display string.",
    )
    sic_codes: list[str] | None = Field(
        default=None,
        alias="sicCodes",
        description="SIC classification codes for the company.",
    )
    technologies: list[str] | None = Field(
        default=None, description="Technologies Prospeo detects in the company's stack."
    )
    twitter_url: str | None = Field(
        default=None, alias="twitterUrl", description="Company X (Twitter) profile URL."
    )
    type_: str | None = Field(
        default=None,
        alias="type",
        description="Ownership type, e.g. Private, Public, Non Profit.",
    )
    website: str | None = Field(default=None, description="Company website URL.")
    youtube_url: str | None = Field(
        default=None, alias="youtubeUrl", description="Company YouTube channel URL."
    )


class PersonEnrichmentProspeoAttribute(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    has_demo: bool | None = Field(
        default=None, alias="hasDemo", description="The website offers a demo."
    )
    has_downloadable: bool | None = Field(
        default=None,
        alias="hasDownloadable",
        description="The website offers a download.",
    )
    has_free_trial: bool | None = Field(
        default=None,
        alias="hasFreeTrial",
        description="The website offers a free trial.",
    )
    has_mobile_apps: bool | None = Field(
        default=None,
        alias="hasMobileApps",
        description="The company publishes mobile apps.",
    )
    has_online_reviews: bool | None = Field(
        default=None,
        alias="hasOnlineReviews",
        description="The company has online reviews.",
    )
    has_pricing: bool | None = Field(
        default=None, alias="hasPricing", description="The website publishes pricing."
    )
    is_b2b: bool | None = Field(
        default=None, alias="isB2b", description="The company sells to businesses."
    )


class PersonEnrichmentProspeoEmailTech(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    domain: str | None = Field(
        default=None, description="Domain the company's email addresses use."
    )
    mx_provider: str | None = Field(
        default=None,
        alias="mxProvider",
        description="Mail provider behind the domain's MX records.",
    )


class PersonEnrichmentProspeoFunding(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    events: list[PersonEnrichmentProspeoEvent] | None = Field(
        default=None, description="One entry per funding round."
    )
    latest_stage: str | None = Field(
        default=None, alias="latestStage", description="Most recent funding stage."
    )
    latest_utc: float | None = Field(
        default=None,
        alias="latestUtc",
        description="UTC epoch timestamp in seconds (Unix time) of the most recent round. Multiply by 1000 for a JS Date in milliseconds.",
    )
    rounds: int | None = Field(
        default=None, description="Number of funding rounds raised."
    )
    total_raised: float | None = Field(
        default=None, alias="totalRaised", description="Total capital raised, in USD."
    )
    total_raised_printed: str | None = Field(
        default=None,
        alias="totalRaisedPrinted",
        description="Total capital raised as a display string.",
    )


class PersonEnrichmentProspeoEvent(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    amount: float | None = Field(default=None, description="Amount raised in USD.")
    amount_printed: str | None = Field(
        default=None,
        alias="amountPrinted",
        description="Amount raised as a display string.",
    )
    link: str | None = Field(default=None, description="Source URL for the round.")
    raised_utc: float | None = Field(
        default=None,
        alias="raisedUtc",
        description="UTC epoch timestamp in seconds (Unix time) the round closed. Multiply by 1000 for a JS Date in milliseconds.",
    )
    stage: str | None = Field(default=None, description="Round stage, e.g. Series E-J.")


class PersonEnrichmentProspeoJobPosting(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    active_count: int | None = Field(
        default=None, alias="activeCount", description="Open roles currently posted."
    )
    active_titles: list[str] | None = Field(
        default=None, alias="activeTitles", description="Titles of the open roles."
    )


class PersonEnrichmentProspeoLocation(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="City.")
    country: str | None = Field(default=None, description="Country name.")
    country_code: str | None = Field(
        default=None,
        alias="countryCode",
        description="ISO 3166-1 alpha-2 country code.",
    )
    raw_address: str | None = Field(
        default=None,
        alias="rawAddress",
        description="Headquarters address as one display string.",
    )
    state: str | None = Field(default=None, description="State or region.")


class PersonEnrichmentProspeoPhoneHq(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    country: str | None = Field(
        default=None, description="Country the number belongs to."
    )
    country_code: str | None = Field(
        default=None,
        alias="countryCode",
        description="ISO 3166-1 alpha-2 code for that country.",
    )
    international: str | None = Field(
        default=None, description="Number in international format."
    )
    national: str | None = Field(default=None, description="Number in national format.")
    phone: str | None = Field(
        default=None, description="Phone number as Prospeo stores it."
    )


class PersonEnrichmentProspeoRevenueRange(BaseModel):
    model_config = ConfigDict(extra="allow")

    max: float | None = Field(default=None, description="Upper bound in USD.")
    min: float | None = Field(default=None, description="Lower bound in USD.")


class PersonEnrichmentProspeoEmail(BaseModel):
    model_config = ConfigDict(extra="allow")

    email: str | None = Field(
        default=None, description="The email address, when Prospeo revealed one."
    )
    revealed: bool | None = Field(
        default=None,
        description="True when the address below is the full value rather than a masked preview.",
    )
    status: str | None = Field(
        default=None,
        description="Prospeo's verdict for the address, e.g. VERIFIED or UNAVAILABLE.",
    )


class PersonEnrichmentProspeoJobHistory(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_id: str | None = Field(
        default=None,
        alias="companyId",
        description="Prospeo company id for the employer.",
    )
    company_name: str | None = Field(
        default=None, alias="companyName", description="Employer name."
    )
    current: bool | None = Field(
        default=None, description="True while the role is current."
    )
    departments: list[str] | None = Field(
        default=None, description="Departments Prospeo assigns the role."
    )
    duration_months: int | None = Field(
        default=None,
        alias="durationMonths",
        description="How long the role has run, in months.",
    )
    end_month: int | None = Field(
        default=None,
        alias="endMonth",
        description="Month the role ended, absent while current.",
    )
    end_year: int | None = Field(
        default=None,
        alias="endYear",
        description="Year the role ended, absent while current.",
    )
    job_key: str | None = Field(
        default=None, alias="jobKey", description="Prospeo's identifier for this role."
    )
    seniority: str | None = Field(
        default=None, description="Seniority band, e.g. C-Suite, Manager, Entry."
    )
    start_month: int | None = Field(
        default=None, alias="startMonth", description="Month the role started, 1 to 12."
    )
    start_year: int | None = Field(
        default=None, alias="startYear", description="Year the role started."
    )
    title: str | None = Field(default=None, description="Job title held.")


class PersonEnrichmentProspeoMobile(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    country: str | None = Field(
        default=None, description="Country the number belongs to."
    )
    country_code: str | None = Field(
        default=None,
        alias="countryCode",
        description="ISO 3166-1 alpha-2 code for that country.",
    )
    international: str | None = Field(
        default=None, description="Number in international format."
    )
    mobile: str | None = Field(
        default=None, description="The number as Prospeo stores it."
    )
    national: str | None = Field(default=None, description="Number in national format.")
    revealed: bool | None = Field(
        default=None,
        description="True when the digits below are the full number rather than a masked preview.",
    )
    status: str | None = Field(
        default=None,
        description="Prospeo's verdict for the number, e.g. VERIFIED or UNAVAILABLE.",
    )


class PersonEnrichmentQuickenrichData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address: str | None = Field(
        default=None, description="Street address on the employer record."
    )
    city: str | None = Field(default=None, description="City on the employer record.")
    company_domain: str | None = Field(
        default=None, alias="companyDomain", description="Employer website domain."
    )
    company_employee_count: str | None = Field(
        default=None,
        alias="companyEmployeeCount",
        description='Employer headcount band, e.g. "20 - 99". Upstream band vocabulary; "Not Available" means the band is unknown.',
    )
    company_industry: str | None = Field(
        default=None, alias="companyIndustry", description="Employer industry label."
    )
    company_linkedin_url: str | None = Field(
        default=None,
        alias="companyLinkedinUrl",
        description="Employer LinkedIn company URL.",
    )
    company_name: str | None = Field(
        default=None, alias="companyName", description="Employer name."
    )
    company_phone: str | None = Field(
        default=None, alias="companyPhone", description="Employer main phone line."
    )
    company_revenue: str | None = Field(
        default=None,
        alias="companyRevenue",
        description='Employer revenue band, e.g. "1 - 2.5 Million". Upstream band vocabulary; "Not Available" means the band is unknown.',
    )
    country: str | None = Field(
        default=None,
        description="ISO 3166-1 alpha-2 country code on the employer record.",
    )
    email: str | None = Field(default=None, description="Work email address.")
    email_domain: str | None = Field(
        default=None,
        alias="emailDomain",
        description="Domain the work email resolves to.",
    )
    email_verified_utc: float | None = Field(
        default=None,
        alias="emailVerifiedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    first_name: str = Field(alias="firstName", description="Person's first name.")
    last_name: str | None = Field(
        default=None, alias="lastName", description="Person's last name."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Person's LinkedIn profile URL."
    )
    phone: str | None = Field(
        default=None,
        description="Direct business phone line held for the person. Mostly desk lines; read phoneType before treating it as a mobile.",
    )
    phone_type: str | None = Field(
        default=None,
        alias="phoneType",
        description='Line type reported upstream, e.g. "mobile" or "landline".',
    )
    postal_code: str | None = Field(
        default=None,
        alias="postalCode",
        description="Postal code on the employer record.",
    )
    region: str | None = Field(
        default=None, description="State or region code on the employer record."
    )
    title: str | None = Field(default=None, description="Person's job title.")


class PersonEnrichmentNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def aviato(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentAviatoInput],
    ) -> RunResult[PersonEnrichmentAviatoData]:
        """Person Enrichment - Aviato

        Enrich a person from an Aviato or LinkedIn identifier, LinkedIn URL, or
        email.

        Price: $0.084 per request.

        Example:
            res = client.person_enrichment.aviato(linkedinURL="https://www.linkedin.com/in/dharmesh")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.aviato", dict(input), options
        )
        return RunResult[PersonEnrichmentAviatoData].model_validate(raw)

    def bettercontact(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentBettercontactInput],
    ) -> RunResult[PersonEnrichmentBettercontactData]:
        """Person Enrichment - BetterContact

        Run one contact through BetterContact's email waterfall from a name plus
        company domain or a LinkedIn URL, and get the winning address with its
        deliverability verdict, the provider that found it, and the employer record.
        Only a matched contact is billable.

        Price: $0.0828 per request.

        Example:
            res = client.person_enrichment.bettercontact(companyDomain="stripe.com", firstName="Patrick", lastName="Collison", linkedinUrl="https://www.linkedin.com/in/patrickcollison")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.bettercontact", dict(input), options
        )
        return RunResult[PersonEnrichmentBettercontactData].model_validate(raw)

    def fullenrich_bulk(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentFullenrichBulkInput],
    ) -> RunResult[PersonEnrichmentFullenrichBulkData]:
        """Bulk Person Enrichment - FullEnrich

        Run FullEnrich's waterfall on up to 99 people in one call and get back work
        emails, personal emails and mobile numbers, each with a deliverability
        status, alongside the full LinkedIn-grade profile and employer record for
        everyone matched. Only the contacts it matches are returned, and only those
        are billed.

        Price: $0 per request plus $0.1008 per result (maximum $9.9792).

        Example:
            res = client.person_enrichment.fullenrich_bulk(contacts=[{"custom": {"row": "1"}, "domain": "stripe.com", "enrich_fields": ["contact.emails", "contact.personal_emails"], "first_name": "Patrick", "last_name": "Collison"}, {"company_name": "Figma", "custom": {"row": "2"}, "enrich_fields": ["contact.emails"], "first_name": "Dylan", "last_name": "Field", "linkedin_url": "https://www.linkedin.com/in/dylanfield"}])
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.fullenrich_bulk", dict(input), options
        )
        return RunResult[PersonEnrichmentFullenrichBulkData].model_validate(raw)

    def fullenrich_reverse_email(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentFullenrichReverseEmailInput],
    ) -> RunResult[PersonEnrichmentFullenrichReverseEmailData]:
        """Reverse Email Lookup - FullEnrich

        Turn up to 99 email addresses into the people behind them: name, headline,
        location, LinkedIn profile, current title and seniority, full employment
        history, education, languages and skills, plus the employer record. Only the
        addresses it resolves are returned, and only those are billed.

        Price: $0 per request plus $0.1008 per result (maximum $9.9792).

        Example:
            res = client.person_enrichment.fullenrich_reverse_email(contacts=[{"custom": {"row": "1"}, "email": "dfield@figma.com"}, {"custom": {"row": "2"}, "email": "patrick@stripe.com"}])
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.fullenrich_reverse_email", dict(input), options
        )
        return RunResult[PersonEnrichmentFullenrichReverseEmailData].model_validate(raw)

    def lusha(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentLushaInput],
    ) -> RunResult[PersonEnrichmentLushaData]:
        """Person Enrichment - Lusha

        Enrich one person into work email, direct dial, job title and employer
        firmographics from a LinkedIn URL, an email, or a name plus company.

        Price: $0.084 per request.

        Example:
            res = client.person_enrichment.lusha(linkedinUrl="https://www.linkedin.com/in/tim-zheng")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.lusha", dict(input), options
        )
        return RunResult[PersonEnrichmentLushaData].model_validate(raw)

    def peopledatalabs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentPeopledatalabsInput],
    ) -> RunResult[PersonEnrichmentPeopledatalabsData]:
        """Person Enrichment - People Data Labs

        Enrich one person into work email, personal emails, mobile phone, full work
        history, education and employer firmographics from any identifier People
        Data Labs can match on.

        Price: $0.24 per request.

        Example:
            res = client.person_enrichment.peopledatalabs(profile="https://www.linkedin.com/in/dharmesh")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.peopledatalabs", dict(input), options
        )
        return RunResult[PersonEnrichmentPeopledatalabsData].model_validate(raw)

    def prospeo(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentProspeoInput],
    ) -> RunResult[PersonEnrichmentProspeoData]:
        """Person Enrichment - Prospeo

        Enrich one person into work email, mobile phone, full job history and
        employer firmographics from a LinkedIn URL, an email, or a name plus company
        domain.

        Price: $0.066 per request.

        Example:
            res = client.person_enrichment.prospeo(linkedinUrl="https://www.linkedin.com/in/dharmesh")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.prospeo", dict(input), options
        )
        return RunResult[PersonEnrichmentProspeoData].model_validate(raw)

    def quickenrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentQuickenrichInput],
    ) -> RunResult[PersonEnrichmentQuickenrichData]:
        """Person Enrichment - QuickEnrich

        Turn a work email into the person behind it: name, title, LinkedIn, and
        their employer's firmographics. Coverage is strongest for small and local
        businesses.

        Price: $0.0072 per request.

        Example:
            res = client.person_enrichment.quickenrich(email="wprice@southmemphisfence.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.quickenrich", dict(input), options
        )
        return RunResult[PersonEnrichmentQuickenrichData].model_validate(raw)


class AsyncPersonEnrichmentNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def aviato(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentAviatoInput],
    ) -> RunResult[PersonEnrichmentAviatoData]:
        """Person Enrichment - Aviato

        Enrich a person from an Aviato or LinkedIn identifier, LinkedIn URL, or
        email.

        Price: $0.084 per request.

        Example:
            res = client.person_enrichment.aviato(linkedinURL="https://www.linkedin.com/in/dharmesh")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.aviato", dict(input), options
        )
        return RunResult[PersonEnrichmentAviatoData].model_validate(raw)

    async def bettercontact(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentBettercontactInput],
    ) -> RunResult[PersonEnrichmentBettercontactData]:
        """Person Enrichment - BetterContact

        Run one contact through BetterContact's email waterfall from a name plus
        company domain or a LinkedIn URL, and get the winning address with its
        deliverability verdict, the provider that found it, and the employer record.
        Only a matched contact is billable.

        Price: $0.0828 per request.

        Example:
            res = client.person_enrichment.bettercontact(companyDomain="stripe.com", firstName="Patrick", lastName="Collison", linkedinUrl="https://www.linkedin.com/in/patrickcollison")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.bettercontact", dict(input), options
        )
        return RunResult[PersonEnrichmentBettercontactData].model_validate(raw)

    async def fullenrich_bulk(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentFullenrichBulkInput],
    ) -> RunResult[PersonEnrichmentFullenrichBulkData]:
        """Bulk Person Enrichment - FullEnrich

        Run FullEnrich's waterfall on up to 99 people in one call and get back work
        emails, personal emails and mobile numbers, each with a deliverability
        status, alongside the full LinkedIn-grade profile and employer record for
        everyone matched. Only the contacts it matches are returned, and only those
        are billed.

        Price: $0 per request plus $0.1008 per result (maximum $9.9792).

        Example:
            res = client.person_enrichment.fullenrich_bulk(contacts=[{"custom": {"row": "1"}, "domain": "stripe.com", "enrich_fields": ["contact.emails", "contact.personal_emails"], "first_name": "Patrick", "last_name": "Collison"}, {"company_name": "Figma", "custom": {"row": "2"}, "enrich_fields": ["contact.emails"], "first_name": "Dylan", "last_name": "Field", "linkedin_url": "https://www.linkedin.com/in/dylanfield"}])
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.fullenrich_bulk", dict(input), options
        )
        return RunResult[PersonEnrichmentFullenrichBulkData].model_validate(raw)

    async def fullenrich_reverse_email(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentFullenrichReverseEmailInput],
    ) -> RunResult[PersonEnrichmentFullenrichReverseEmailData]:
        """Reverse Email Lookup - FullEnrich

        Turn up to 99 email addresses into the people behind them: name, headline,
        location, LinkedIn profile, current title and seniority, full employment
        history, education, languages and skills, plus the employer record. Only the
        addresses it resolves are returned, and only those are billed.

        Price: $0 per request plus $0.1008 per result (maximum $9.9792).

        Example:
            res = client.person_enrichment.fullenrich_reverse_email(contacts=[{"custom": {"row": "1"}, "email": "dfield@figma.com"}, {"custom": {"row": "2"}, "email": "patrick@stripe.com"}])
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.fullenrich_reverse_email", dict(input), options
        )
        return RunResult[PersonEnrichmentFullenrichReverseEmailData].model_validate(raw)

    async def lusha(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentLushaInput],
    ) -> RunResult[PersonEnrichmentLushaData]:
        """Person Enrichment - Lusha

        Enrich one person into work email, direct dial, job title and employer
        firmographics from a LinkedIn URL, an email, or a name plus company.

        Price: $0.084 per request.

        Example:
            res = client.person_enrichment.lusha(linkedinUrl="https://www.linkedin.com/in/tim-zheng")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.lusha", dict(input), options
        )
        return RunResult[PersonEnrichmentLushaData].model_validate(raw)

    async def peopledatalabs(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentPeopledatalabsInput],
    ) -> RunResult[PersonEnrichmentPeopledatalabsData]:
        """Person Enrichment - People Data Labs

        Enrich one person into work email, personal emails, mobile phone, full work
        history, education and employer firmographics from any identifier People
        Data Labs can match on.

        Price: $0.24 per request.

        Example:
            res = client.person_enrichment.peopledatalabs(profile="https://www.linkedin.com/in/dharmesh")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.peopledatalabs", dict(input), options
        )
        return RunResult[PersonEnrichmentPeopledatalabsData].model_validate(raw)

    async def prospeo(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentProspeoInput],
    ) -> RunResult[PersonEnrichmentProspeoData]:
        """Person Enrichment - Prospeo

        Enrich one person into work email, mobile phone, full job history and
        employer firmographics from a LinkedIn URL, an email, or a name plus company
        domain.

        Price: $0.066 per request.

        Example:
            res = client.person_enrichment.prospeo(linkedinUrl="https://www.linkedin.com/in/dharmesh")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.prospeo", dict(input), options
        )
        return RunResult[PersonEnrichmentProspeoData].model_validate(raw)

    async def quickenrich(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonEnrichmentQuickenrichInput],
    ) -> RunResult[PersonEnrichmentQuickenrichData]:
        """Person Enrichment - QuickEnrich

        Turn a work email into the person behind it: name, title, LinkedIn, and
        their employer's firmographics. Coverage is strongest for small and local
        businesses.

        Price: $0.0072 per request.

        Example:
            res = client.person_enrichment.quickenrich(email="wprice@southmemphisfence.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "person_enrichment.quickenrich", dict(input), options
        )
        return RunResult[PersonEnrichmentQuickenrichData].model_validate(raw)
