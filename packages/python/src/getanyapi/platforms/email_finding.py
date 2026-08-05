# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the email_finding platform."""

from __future__ import annotations

from typing import Any, TYPE_CHECKING

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
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "email_finding.icypeas", dict(input), options
        )
        return RunResult[EmailFindingIcypeasData].model_validate(raw)
