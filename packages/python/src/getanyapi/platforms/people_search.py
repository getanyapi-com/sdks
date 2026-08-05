# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the people_search platform."""

from __future__ import annotations

from typing import Any, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class PeopleSearchAiArkInput(TypedDict, total=False):
    """Input for People Search - AI Ark."""

    account: NotRequired[dict[str, Any]]
    """AI Ark account filter expression. Nested generic any/all filter objects are accepted as documented by the source and are not further constrained."""
    contact: NotRequired[dict[str, Any]]
    """AI Ark contact filter expression. Nested generic any/all filter objects are accepted as documented by the source and are not further constrained."""
    lists: NotRequired[dict[str, Any]]
    """AI Ark saved-list filter expression."""
    page: NotRequired[int]
    """Zero-based result page. Minimum: 0. Default: 0."""
    size: NotRequired[int]
    """Maximum people to return on this page. Range: 1 to 100. Default: 10."""


class PeopleSearchCrustdataV3Input(TypedDict, total=False):
    """Input for People Search - Crustdata v3."""

    companyDomain: Required[str]
    """Company domain without a path."""
    country: NotRequired[str]
    fuzzyTitle: NotRequired[bool]
    """Default: true."""
    limit: NotRequired[int]
    """Range: 1 to 100. Default: 3."""
    profileKeywords: NotRequired[Any]
    requireVerifiedEmail: NotRequired[bool]
    """Default: false."""
    seniority: NotRequired[Any]
    titleKeywords: Required[Any]


class PeopleSearchAiArkData(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    page: int = Field(
        description="Zero-based page number returned by the source. Minimum: 0."
    )
    people: list[PeopleSearchAiArkPeople] = Field(
        description="People returned on this page."
    )
    size: int = Field(description="Configured page size. Minimum: 0.")
    total: int = Field(description="Total matching people. Minimum: 0.")
    total_pages: int = Field(
        alias="totalPages", description="Total result pages. Minimum: 0."
    )


class PeopleSearchAiArkPeople(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    city: str | None = Field(default=None, description="Location city.")
    company_domain: str | None = Field(
        default=None, alias="companyDomain", description="Current company domain."
    )
    company_employee_count: int | None = Field(
        default=None,
        alias="companyEmployeeCount",
        description="Estimated employees at the current company. Minimum: 0.",
    )
    company_industry: str | None = Field(
        default=None,
        alias="companyIndustry",
        description="Current company's primary industry.",
    )
    company_linkedin_url: str | None = Field(
        default=None,
        alias="companyLinkedinUrl",
        description="Current company's canonical LinkedIn URL.",
    )
    company_name: str | None = Field(
        default=None, alias="companyName", description="Current company name."
    )
    country: str | None = Field(default=None, description="Location country.")
    first_name: str | None = Field(
        default=None, alias="firstName", description="Person's first name."
    )
    full_name: str = Field(alias="fullName", description="Person's full name.")
    headline: str | None = Field(
        default=None, description="Professional profile headline."
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Person's last name."
    )
    linkedin_url: str = Field(
        alias="linkedinUrl", description="Canonical LinkedIn profile URL."
    )
    location: str | None = Field(default=None, description="Formatted location.")
    state: str | None = Field(default=None, description="Location state or region.")
    title: str | None = Field(default=None, description="Current job title.")


class PeopleSearchCrustdataV3Data(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    has_more: bool | None = Field(default=None, alias="hasMore")
    profiles: list[PeopleSearchCrustdataV3Profile]
    total_count: int | None = Field(
        default=None, alias="totalCount", description="Minimum: 0."
    )


class PeopleSearchCrustdataV3Profile(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    emails: list[Any] | None = None
    first_name: str | None = Field(default=None, alias="firstName")
    headline: str | None = None
    last_name: str | None = Field(default=None, alias="lastName")
    linkedin_url: str | None = Field(default=None, alias="linkedinUrl")
    name: str


class PeopleSearchNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def ai_ark(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PeopleSearchAiArkInput],
    ) -> RunResult[PeopleSearchAiArkData]:
        """People Search - AI Ark

        Search professional profiles with account, contact, and saved-list filters.

        Price: $0 per request plus $0.0084 per result (maximum $0.84).

        Example:
            res = client.people_search.ai_ark(page=0, size=1)
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "people_search.ai_ark", dict(input), options
        )
        return RunResult[PeopleSearchAiArkData].model_validate(raw)

    def crustdata_v3(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PeopleSearchCrustdataV3Input],
    ) -> RunResult[PeopleSearchCrustdataV3Data]:
        """People Search - Crustdata v3

        Find up to 100 professional profiles by company domain and title keywords.

        Price: $0.144 per request.
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "people_search.crustdata_v3", dict(input), options
        )
        return RunResult[PeopleSearchCrustdataV3Data].model_validate(raw)


class AsyncPeopleSearchNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def ai_ark(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PeopleSearchAiArkInput],
    ) -> RunResult[PeopleSearchAiArkData]:
        """People Search - AI Ark

        Search professional profiles with account, contact, and saved-list filters.

        Price: $0 per request plus $0.0084 per result (maximum $0.84).

        Example:
            res = client.people_search.ai_ark(page=0, size=1)
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "people_search.ai_ark", dict(input), options
        )
        return RunResult[PeopleSearchAiArkData].model_validate(raw)

    async def crustdata_v3(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PeopleSearchCrustdataV3Input],
    ) -> RunResult[PeopleSearchCrustdataV3Data]:
        """People Search - Crustdata v3

        Find up to 100 professional profiles by company domain and title keywords.

        Price: $0.144 per request.
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "people_search.crustdata_v3", dict(input), options
        )
        return RunResult[PeopleSearchCrustdataV3Data].model_validate(raw)
