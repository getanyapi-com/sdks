# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the person platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class PersonSkipTraceInput(TypedDict, total=False):
    """Input for Skip Trace."""

    address: NotRequired[str]
    """Street address with city/state/zip."""
    email: NotRequired[str]
    """Email address to reverse-trace (e.g. john.smith@example.com)."""
    name: NotRequired[str]
    """Full name of the person to trace. Provide at least one of name, address, phone, or email."""
    phone: NotRequired[str]
    """Phone number to reverse-trace (e.g. 415-555-2671)."""


class PersonSkipTraceData(BaseModel):
    items: list[PersonSkipTraceItem] = Field(
        description="Matched person records with identity, address, and contact details. Populated whenever the provider has data for the entity."
    )


class PersonSkipTraceItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    address_locality: str | None = Field(
        default=None, alias="addressLocality", description="Current city."
    )
    address_region: str | None = Field(
        default=None, alias="addressRegion", description="Current state."
    )
    age: str | None = Field(default=None, description="Reported age.")
    associates: list[PersonSkipTraceAssociate] | None = Field(
        default=None,
        description="Reported associates. Each entry is an open object with name and age.",
    )
    born: str | None = Field(default=None, description="Reported birth month and year.")
    county: str | None = Field(default=None, description="Current county.")
    emails: PersonSkipTraceEmail | None = Field(
        default=None,
        description="Up to five known email addresses, most-recent first. Absent slots are empty strings.",
    )
    first_name: str | None = Field(
        default=None, alias="firstName", description="First name of the matched person."
    )
    last_name: str | None = Field(
        default=None, alias="lastName", description="Last name of the matched person."
    )
    location: str | None = Field(
        default=None, description="Current city and state (e.g. Brook Park, OH)."
    )
    phones: PersonSkipTracePhone | None = Field(
        default=None,
        description="Up to five known phone numbers with line type, most-recent first. Absent slots are empty strings.",
    )
    postal_code: str | None = Field(
        default=None, alias="postalCode", description="Current ZIP code."
    )
    previous_addresses: list[PersonSkipTracePreviousAddresse] | None = Field(
        default=None,
        alias="previousAddresses",
        description="Prior addresses. Each entry is an open object with street, locality, region, postal code, county, and timespan.",
    )
    relatives: list[PersonSkipTraceRelative] | None = Field(
        default=None,
        description="Reported relatives. Each entry is an open object with name and age.",
    )
    street_address: str | None = Field(
        default=None, alias="streetAddress", description="Current street address."
    )
    url: str = Field(
        description="Source record URL for the matched person. Populated whenever the provider has data for the entity."
    )


class PersonSkipTraceAssociate(BaseModel):
    model_config = ConfigDict(extra="allow")


class PersonSkipTraceEmail(BaseModel):
    model_config = ConfigDict(extra="allow")

    email1: str | None = None
    email2: str | None = None
    email3: str | None = None
    email4: str | None = None
    email5: str | None = None


class PersonSkipTracePhone(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    phone1: str | None = None
    phone1_type: str | None = Field(default=None, alias="phone1Type")
    phone2: str | None = None
    phone2_type: str | None = Field(default=None, alias="phone2Type")
    phone3: str | None = None
    phone3_type: str | None = Field(default=None, alias="phone3Type")
    phone4: str | None = None
    phone4_type: str | None = Field(default=None, alias="phone4Type")
    phone5: str | None = None
    phone5_type: str | None = Field(default=None, alias="phone5Type")


class PersonSkipTracePreviousAddresse(BaseModel):
    model_config = ConfigDict(extra="allow")


class PersonSkipTraceRelative(BaseModel):
    model_config = ConfigDict(extra="allow")


class PersonNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def skip_trace(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonSkipTraceInput],
    ) -> RunResult[PersonSkipTraceData]:
        """Skip Trace

        Skip-trace a person in the US by name, address, phone, or email and get back
        identity, address, and contact records in normalized JSON.

        Price: $0 per request plus $0.007 per result (maximum $0.007).

        Example:
            res = client.person.skip_trace(address="123 Main St, Austin, TX 78701", name="John Smith")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "person.skip_trace", dict(input), options
        )
        return RunResult[PersonSkipTraceData].model_validate(raw)


class AsyncPersonNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def skip_trace(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[PersonSkipTraceInput],
    ) -> RunResult[PersonSkipTraceData]:
        """Skip Trace

        Skip-trace a person in the US by name, address, phone, or email and get back
        identity, address, and contact records in normalized JSON.

        Price: $0 per request plus $0.007 per result (maximum $0.007).

        Example:
            res = client.person.skip_trace(address="123 Main St, Austin, TX 78701", name="John Smith")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "person.skip_trace", dict(input), options
        )
        return RunResult[PersonSkipTraceData].model_validate(raw)
