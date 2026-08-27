# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the email_finding platform."""

from __future__ import annotations

from typing import Any, Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class EmailFindingDropleadsInput(TypedDict, total=False):
    """Input for Email Finding - DropLeads."""

    companyDomain: NotRequired[str]
    """Company domain without a path."""
    companyName: NotRequired[str]
    """Company name when the domain is unavailable."""
    firstName: Required[str]
    """Person's first name."""
    lastName: Required[str]
    """Person's last name."""


class EmailFindingHunterCountInput(TypedDict, total=False):
    """Input for Email Finding - Hunter Email Count."""

    domain: Required[str]
    """Company domain without a scheme or path, e.g. stripe.com."""
    type: NotRequired[Literal["personal", "generic"]]
    """Count only personal mailboxes belonging to a named person, or only generic ones such as info@ and support@."""


class EmailFindingHunterDomainInput(TypedDict, total=False):
    """Input for Email Finding - Hunter Domain Search."""

    department: NotRequired[
        Literal[
            "executive",
            "it",
            "finance",
            "management",
            "sales",
            "legal",
            "support",
            "hr",
            "marketing",
            "communication",
            "education",
            "design",
            "health",
            "operations",
        ]
    ]
    """Restrict to one department."""
    domain: Required[str]
    """Company domain without a scheme or path, e.g. stripe.com."""
    jobTitle: NotRequired[str]
    """One job-title keyword to match, e.g. editor. A single keyword only: a comma-separated list is not supported and only its last entry would apply."""
    limit: NotRequired[int]
    """Maximum contacts to return in this response. Every returned contact is billed, so this is the cost control. Range: 1 to 100. Default: 3."""
    offset: NotRequired[int]
    """Number of contacts to skip before this page begins. Minimum: 0."""
    requiredField: NotRequired[Literal["full_name", "position", "phone_number"]]
    """Only return contacts that carry this field."""
    seniority: NotRequired[Literal["junior", "senior", "executive"]]
    """Restrict to one seniority level."""
    type: NotRequired[Literal["personal", "generic"]]
    """Restrict to personal mailboxes belonging to a named person, or to generic ones such as info@ and support@."""


class EmailFindingIcypeasInput(TypedDict, total=False):
    """Input for Email Finding - Icypeas."""

    domainOrCompany: Required[str]
    firstname: NotRequired[str]
    lastname: NotRequired[str]


class EmailFindingDropleadsData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    company_domain: str | None = Field(
        default=None, alias="companyDomain", description="Matched company domain."
    )
    company_name: str | None = Field(
        default=None, alias="companyName", description="Matched company name."
    )
    company_size: Any | None = Field(
        default=None, alias="companySize", description="Company size when available."
    )
    email: str = Field(description="Matched email address.")
    first_name: str | None = Field(
        default=None, alias="firstName", description="Matched first name."
    )
    industry: str | None = Field(
        default=None, description="Company industry when available."
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Matched last name."
    )
    mx_provider: str | None = Field(
        default=None, alias="mxProvider", description="Detected mail provider."
    )
    mx_record: str | None = Field(
        default=None, alias="mxRecord", description="Selected mail exchange record."
    )
    status: str = Field(description="Source validation status for the matched email.")


class EmailFindingHunterCountData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    department_counts: EmailFindingHunterCountDepartmentCount | None = Field(
        default=None, alias="departmentCounts", description="Contacts per department."
    )
    domain: str = Field(description="The company domain the counts describe.")
    generic_emails: int | None = Field(
        default=None,
        alias="genericEmails",
        description="Contacts that are a shared inbox such as info@ or support@. Minimum: 0.",
    )
    personal_emails: int | None = Field(
        default=None,
        alias="personalEmails",
        description="Contacts that are a named person's mailbox. Minimum: 0.",
    )
    seniority_counts: EmailFindingHunterCountSeniorityCount | None = Field(
        default=None,
        alias="seniorityCounts",
        description="Contacts per seniority level.",
    )
    total: int = Field(description="Contacts known for the domain. Minimum: 0.")


class EmailFindingHunterCountDepartmentCount(BaseModel):
    model_config = ConfigDict(extra="allow")

    communication: int | None = Field(
        default=None,
        description="Contacts in the communication department. Minimum: 0.",
    )
    design: int | None = Field(
        default=None, description="Contacts in the design department. Minimum: 0."
    )
    education: int | None = Field(
        default=None, description="Contacts in the education department. Minimum: 0."
    )
    executive: int | None = Field(
        default=None, description="Contacts in the executive department. Minimum: 0."
    )
    finance: int | None = Field(
        default=None, description="Contacts in the finance department. Minimum: 0."
    )
    health: int | None = Field(
        default=None, description="Contacts in the health department. Minimum: 0."
    )
    hr: int | None = Field(
        default=None, description="Contacts in the HR department. Minimum: 0."
    )
    it: int | None = Field(
        default=None, description="Contacts in the IT department. Minimum: 0."
    )
    legal: int | None = Field(
        default=None, description="Contacts in the legal department. Minimum: 0."
    )
    management: int | None = Field(
        default=None, description="Contacts in the management department. Minimum: 0."
    )
    marketing: int | None = Field(
        default=None, description="Contacts in the marketing department. Minimum: 0."
    )
    operations: int | None = Field(
        default=None, description="Contacts in the operations department. Minimum: 0."
    )
    sales: int | None = Field(
        default=None, description="Contacts in the sales department. Minimum: 0."
    )
    support: int | None = Field(
        default=None, description="Contacts in the support department. Minimum: 0."
    )


class EmailFindingHunterCountSeniorityCount(BaseModel):
    model_config = ConfigDict(extra="allow")

    executive: int | None = Field(
        default=None, description="Contacts at executive level. Minimum: 0."
    )
    junior: int | None = Field(
        default=None, description="Contacts at junior level. Minimum: 0."
    )
    senior: int | None = Field(
        default=None, description="Contacts at senior level. Minimum: 0."
    )


class EmailFindingHunterDomainData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    accept_all: bool | None = Field(
        default=None,
        alias="acceptAll",
        description="True when the mail server accepts any address at this domain, so an address cannot be verified by delivery.",
    )
    disposable: bool | None = Field(
        default=None,
        description="True when the domain belongs to a disposable-email service.",
    )
    domain: str = Field(description="The company domain the contacts belong to.")
    email_pattern: str | None = Field(
        default=None,
        alias="emailPattern",
        description="Address pattern the company uses, e.g. {first}{last}.",
    )
    emails: list[EmailFindingHunterDomainEmail] = Field(
        description="Contacts returned by this page, one per billed result."
    )
    organization: str | None = Field(
        default=None, description="Company name registered against the domain."
    )
    total_count: int = Field(
        alias="totalCount",
        description="Contacts matching the filters across the whole domain, of which this response returns at most limit. Minimum: 0.",
    )
    webmail: bool | None = Field(
        default=None,
        description="True when the domain is a webmail provider rather than a company.",
    )


class EmailFindingHunterDomainEmail(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    confidence: int | None = Field(
        default=None,
        description="Upstream confidence in the address, 0 to 100. Range: 0 to 100.",
    )
    decision_maker: bool | None = Field(
        default=None,
        alias="decisionMaker",
        description="True when the contact is judged a decision maker.",
    )
    department: str | None = Field(
        default=None, description="Department the contact works in."
    )
    email: str = Field(description="The work email address.")
    first_name: str | None = Field(
        default=None, alias="firstName", description="Contact's first name."
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Contact's last name."
    )
    linkedin_url: str | None = Field(
        default=None, alias="linkedinUrl", description="Contact's LinkedIn profile URL."
    )
    phone: str | None = Field(default=None, description="Contact's phone number.")
    position: str | None = Field(default=None, description="Contact's job title.")
    seniority: str | None = Field(
        default=None, description="Seniority level: junior, senior or executive."
    )
    sources: list[EmailFindingHunterDomainSource] | None = Field(
        default=None, description="Public pages the address was found on."
    )
    type_: str | None = Field(
        default=None,
        alias="type",
        description="personal for a named person's mailbox, generic for a shared inbox.",
    )
    verification_status: str | None = Field(
        default=None,
        alias="verificationStatus",
        description="Deliverability verdict recorded for the address.",
    )
    verified_utc: float | None = Field(
        default=None,
        alias="verifiedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )


class EmailFindingHunterDomainSource(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    domain: str = Field(description="Domain of the page the address was found on.")
    extracted_utc: float | None = Field(
        default=None,
        alias="extractedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    last_seen_utc: float | None = Field(
        default=None,
        alias="lastSeenUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )
    still_on_page: bool | None = Field(
        default=None,
        alias="stillOnPage",
        description="True when the address was still present at the last check.",
    )
    url: str | None = Field(
        default=None, description="URL of the page the address was found on."
    )


class EmailFindingIcypeasData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    certainty: str | None = None
    email: str
    firstname: str | None = None
    fullname: str | None = None
    lastname: str | None = None
    mx_provider: str | None = Field(default=None, alias="mxProvider")
    mx_records: list[str] | None = Field(default=None, alias="mxRecords")


class EmailFindingNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def dropleads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailFindingDropleadsInput],
    ) -> RunResult[EmailFindingDropleadsData]:
        """Email Finding - DropLeads

        Find a professional email from a person's name and company domain or company
        name.

        Price: $0.0312 per request.

        Example:
            res = client.email_finding.dropleads(companyDomain="apollo.io", firstName="Tim", lastName="Zheng")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "email_finding.dropleads", dict(input), options
        )
        return RunResult[EmailFindingDropleadsData].model_validate(raw)

    def hunter_count(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailFindingHunterCountInput],
    ) -> RunResult[EmailFindingHunterCountData]:
        """Email Finding - Hunter Email Count

        Count how many contacts a company domain has, split by personal and generic
        mailboxes and broken down by department and seniority. Scope a domain for $1
        per 1,000 requests before paying per contact.

        Price: $0.001 per request.

        Example:
            res = client.email_finding.hunter_count(domain="stripe.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "email_finding.hunter_count", dict(input), options
        )
        return RunResult[EmailFindingHunterCountData].model_validate(raw)

    def hunter_domain(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailFindingHunterDomainInput],
    ) -> RunResult[EmailFindingHunterDomainData]:
        """Email Finding - Hunter Domain Search

        Find named contacts and their work email addresses at a company domain,
        filtered by job title, seniority or department. Priced per returned contact,
        so limit is the cost control.

        Price: $0 per request plus $0.036 per result (maximum $3.6).

        Example:
            res = client.email_finding.hunter_domain(domain="stripe.com", limit=2, type_="personal")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "email_finding.hunter_domain", dict(input), options
        )
        return RunResult[EmailFindingHunterDomainData].model_validate(raw)

    def icypeas(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailFindingIcypeasInput],
    ) -> RunResult[EmailFindingIcypeasData]:
        """Email Finding - Icypeas

        Find a professional email from a person and company through the durable
        Request lifecycle.

        Price: $0.0168 per request.

        Example:
            res = client.email_finding.icypeas(domainOrCompany="apollo.io", firstname="Tim", lastname="Zheng")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "email_finding.icypeas", dict(input), options
        )
        return RunResult[EmailFindingIcypeasData].model_validate(raw)


class AsyncEmailFindingNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def dropleads(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailFindingDropleadsInput],
    ) -> RunResult[EmailFindingDropleadsData]:
        """Email Finding - DropLeads

        Find a professional email from a person's name and company domain or company
        name.

        Price: $0.0312 per request.

        Example:
            res = client.email_finding.dropleads(companyDomain="apollo.io", firstName="Tim", lastName="Zheng")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "email_finding.dropleads", dict(input), options
        )
        return RunResult[EmailFindingDropleadsData].model_validate(raw)

    async def hunter_count(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailFindingHunterCountInput],
    ) -> RunResult[EmailFindingHunterCountData]:
        """Email Finding - Hunter Email Count

        Count how many contacts a company domain has, split by personal and generic
        mailboxes and broken down by department and seniority. Scope a domain for $1
        per 1,000 requests before paying per contact.

        Price: $0.001 per request.

        Example:
            res = client.email_finding.hunter_count(domain="stripe.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "email_finding.hunter_count", dict(input), options
        )
        return RunResult[EmailFindingHunterCountData].model_validate(raw)

    async def hunter_domain(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailFindingHunterDomainInput],
    ) -> RunResult[EmailFindingHunterDomainData]:
        """Email Finding - Hunter Domain Search

        Find named contacts and their work email addresses at a company domain,
        filtered by job title, seniority or department. Priced per returned contact,
        so limit is the cost control.

        Price: $0 per request plus $0.036 per result (maximum $3.6).

        Example:
            res = client.email_finding.hunter_domain(domain="stripe.com", limit=2, type_="personal")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "email_finding.hunter_domain", dict(input), options
        )
        return RunResult[EmailFindingHunterDomainData].model_validate(raw)

    async def icypeas(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailFindingIcypeasInput],
    ) -> RunResult[EmailFindingIcypeasData]:
        """Email Finding - Icypeas

        Find a professional email from a person and company through the durable
        Request lifecycle.

        Price: $0.0168 per request.

        Example:
            res = client.email_finding.icypeas(domainOrCompany="apollo.io", firstname="Tim", lastname="Zheng")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "email_finding.icypeas", dict(input), options
        )
        return RunResult[EmailFindingIcypeasData].model_validate(raw)
