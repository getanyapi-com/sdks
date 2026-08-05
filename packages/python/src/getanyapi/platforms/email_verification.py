# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the email_verification platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class EmailVerificationAllegrowInput(TypedDict, total=False):
    """Input for Email Verification - Allegrow."""

    email: Required[str]
    """Email address to validate."""


class EmailVerificationBouncebanInput(TypedDict, total=False):
    """Input for Email Verification - BounceBan."""

    disableCatchallVerify: NotRequired[bool]
    email: Required[str]
    mode: NotRequired[Literal["regular", "deepverify"]]


class EmailVerificationIcypeasInput(TypedDict, total=False):
    """Input for Email Verification - Icypeas."""

    email: Required[str]


class EmailVerificationAllegrowData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    domain: str | None = Field(default=None, description="Email domain.")
    email: str = Field(description="Validated email address.")
    is_catch_all: bool | None = Field(
        default=None,
        alias="isCatchAll",
        description="Whether the domain accepts mail for arbitrary recipients.",
    )
    is_role_account: bool | None = Field(
        default=None,
        alias="isRoleAccount",
        description="Whether the mailbox appears to be a role account.",
    )
    mx_provider: str | None = Field(
        default=None, alias="mxProvider", description="Detected mail provider."
    )
    status: Literal[
        "safe",
        "do_not_mail_abuse",
        "some_risk",
        "block_bounce_risk",
        "dead_email",
        "spamtrap",
        "more_time_required",
        "missing_email",
    ] = Field(
        description="Deliverability verdict; negative verdicts are successful billable results."
    )
    sub_status: str | None = Field(
        default=None,
        alias="subStatus",
        description="More specific validation result when available.",
    )
    validated_utc: float | None = Field(
        default=None,
        alias="validatedUtc",
        description="UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.",
    )


class EmailVerificationBouncebanData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    email: str
    is_catch_all: bool | None = Field(default=None, alias="isCatchAll")
    is_disposable: bool | None = Field(default=None, alias="isDisposable")
    is_free: bool | None = Field(default=None, alias="isFree")
    is_role: bool | None = Field(default=None, alias="isRole")
    mode: str | None = None
    mx_records: list[str] | None = Field(default=None, alias="mxRecords")
    reason: str | None = None
    result: str = Field(
        description="Deliverability verdict; negative verdicts are successful results."
    )
    score: float | None = None
    smtp_provider: str | None = Field(default=None, alias="smtpProvider")
    verified_at: str | None = Field(default=None, alias="verifiedAt")


class EmailVerificationIcypeasData(BaseModel):
    model_config = ConfigDict(extra="allow")

    status: str


class EmailVerificationNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def allegrow(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailVerificationAllegrowInput],
    ) -> RunResult[EmailVerificationAllegrowData]:
        """Email Verification - Allegrow

        Validate an email address and return its deliverability verdict and mailbox
        signals.

        Price: $0.0144 per request.

        Example:
            res = client.email_verification.allegrow(email="tim@apollo.io")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "email_verification.allegrow", dict(input), options
        )
        return RunResult[EmailVerificationAllegrowData].model_validate(raw)

    def bounceban(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailVerificationBouncebanInput],
    ) -> RunResult[EmailVerificationBouncebanData]:
        """Email Verification - BounceBan

        Verify an email address, including catch-all handling. Completion uses the
        durable Request lifecycle; a negative verdict is a successful result.

        Price: $0.0072 per request.
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "email_verification.bounceban", dict(input), options
        )
        return RunResult[EmailVerificationBouncebanData].model_validate(raw)

    def icypeas(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailVerificationIcypeasInput],
    ) -> RunResult[EmailVerificationIcypeasData]:
        """Email Verification - Icypeas

        Verify an email address. A valid negative verdict is a successful, billable
        result.

        Price: $0.0024 per request.
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "email_verification.icypeas", dict(input), options
        )
        return RunResult[EmailVerificationIcypeasData].model_validate(raw)


class AsyncEmailVerificationNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def allegrow(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailVerificationAllegrowInput],
    ) -> RunResult[EmailVerificationAllegrowData]:
        """Email Verification - Allegrow

        Validate an email address and return its deliverability verdict and mailbox
        signals.

        Price: $0.0144 per request.

        Example:
            res = client.email_verification.allegrow(email="tim@apollo.io")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "email_verification.allegrow", dict(input), options
        )
        return RunResult[EmailVerificationAllegrowData].model_validate(raw)

    async def bounceban(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailVerificationBouncebanInput],
    ) -> RunResult[EmailVerificationBouncebanData]:
        """Email Verification - BounceBan

        Verify an email address, including catch-all handling. Completion uses the
        durable Request lifecycle; a negative verdict is a successful result.

        Price: $0.0072 per request.
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "email_verification.bounceban", dict(input), options
        )
        return RunResult[EmailVerificationBouncebanData].model_validate(raw)

    async def icypeas(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[EmailVerificationIcypeasInput],
    ) -> RunResult[EmailVerificationIcypeasData]:
        """Email Verification - Icypeas

        Verify an email address. A valid negative verdict is a successful, billable
        result.

        Price: $0.0024 per request.
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "email_verification.icypeas", dict(input), options
        )
        return RunResult[EmailVerificationIcypeasData].model_validate(raw)
