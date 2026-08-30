# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the email platform."""

from __future__ import annotations

from typing import Any, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class EmailFindInput(TypedDict, total=False):
    """Input for Email Finder."""

    person: NotRequired[dict[str, Any]]
    """The person to find an email for, e.g. {"firstName": "Jane", "surname": "Doe", "domain": "acme.com"} (domain also accepts a company name)."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class EmailVerifyInput(TypedDict, total=False):
    """Input for Email Verifier."""

    email: Required[str]
    """The email address to verify (e.g. jane.doe@acme.com). Exactly one @, a dotted domain, no whitespace or angle brackets. Addresses on reserved, never-deliverable TLDs (.invalid, .test, .example, .localhost, .local, .internal, .blink) and HTML/JSON escape artifacts (a u003e prefix) are rejected locally with no charge."""
    preferLatencyUnderMs: NotRequired[int]
    """Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted. Minimum: 1."""


class EmailFindData(BaseModel):
    items: list[EmailFindItem] = Field(
        description="Email lookup records: the discovered email address, verification status, and the matched person and company details. Populated whenever the provider has data for the entity."
    )


class EmailFindItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    domain: str | None = None
    email: str = Field(
        description="Discovered email address, or empty when none was found. Populated whenever the provider has data for the entity."
    )
    first_name: str | None = Field(default=None, alias="firstName")
    is_deliverable: bool | None = Field(default=None, alias="isDeliverable")
    last_name: str | None = Field(default=None, alias="lastName")
    status: str = Field(
        description="Lookup status (e.g. found, not_found). Populated whenever the provider has data for the entity."
    )


class EmailVerifyData(BaseModel):
    items: list[EmailVerifyItem] = Field(
        description="Verification records: the email address with its deliverability verdict and the domain, mailbox, and reputation signals behind it. A record is returned for every syntactically valid address, including ones the verdict marks undeliverable. Populated whenever the provider has data for the entity."
    )


class EmailVerifyItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    catch_all: bool | None = Field(
        default=None, alias="catchAll", description="Domain accepts all addresses."
    )
    disposable: bool | None = None
    domain: str | None = None
    email: str = Field(
        description="Populated whenever the provider has data for the entity."
    )
    free: bool | None = Field(default=None, description="Free email provider.")
    reason: str | None = None
    role: bool | None = Field(
        default=None, description="Role-based address (e.g. info@)."
    )
    score: int | None = Field(default=None, description="Confidence score (0-100).")
    status: str = Field(
        description="Deliverability verdict (e.g. valid, risky, invalid). Populated whenever the provider has data for the entity."
    )


class EmailNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def find(
        self, *, options: RequestOptions | None = None, **input: Unpack[EmailFindInput]
    ) -> RunResult[EmailFindData]:
        """Email Finder

        Find a person's work email address from their name and company domain.

        Price: $0.0231 per request plus $0 per result (maximum $0.0231).

        Example:
            res = client.email.find(person={"domain": "stripe.com", "firstName": "Patrick", "surname": "Collison"})
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "email.find", dict(input), options
        )
        return RunResult[EmailFindData].model_validate(raw)

    def verify(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailVerifyInput],
    ) -> RunResult[EmailVerifyData]:
        """Email Verifier

        Verify an email address for deliverability: a status verdict (valid, risky,
        or invalid) with domain, mailbox, catch-all, disposable, and role signals
        plus a confidence score. Malformed addresses are rejected by the input
        schema with no charge; every syntactically valid address returns a billed
        verdict, including undeliverable ones.

        Price: $0 per request plus $0.00088 per result (maximum $0.00088).

        Example:
            res = client.email.verify(email="patrick@stripe.com")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "email.verify", dict(input), options
        )
        return RunResult[EmailVerifyData].model_validate(raw)


class AsyncEmailNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def find(
        self, *, options: RequestOptions | None = None, **input: Unpack[EmailFindInput]
    ) -> RunResult[EmailFindData]:
        """Email Finder

        Find a person's work email address from their name and company domain.

        Price: $0.0231 per request plus $0 per result (maximum $0.0231).

        Example:
            res = client.email.find(person={"domain": "stripe.com", "firstName": "Patrick", "surname": "Collison"})
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "email.find", dict(input), options
        )
        return RunResult[EmailFindData].model_validate(raw)

    async def verify(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailVerifyInput],
    ) -> RunResult[EmailVerifyData]:
        """Email Verifier

        Verify an email address for deliverability: a status verdict (valid, risky,
        or invalid) with domain, mailbox, catch-all, disposable, and role signals
        plus a confidence score. Malformed addresses are rejected by the input
        schema with no charge; every syntactically valid address returns a billed
        verdict, including undeliverable ones.

        Price: $0 per request plus $0.00088 per result (maximum $0.00088).

        Example:
            res = client.email.verify(email="patrick@stripe.com")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "email.verify", dict(input), options
        )
        return RunResult[EmailVerifyData].model_validate(raw)
