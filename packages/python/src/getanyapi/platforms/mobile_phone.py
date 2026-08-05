# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the mobile_phone platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class MobilePhoneAiArkInput(TypedDict, total=False):
    """Input for Mobile Phone - AI Ark."""

    domain: NotRequired[str]
    """Person's company domain."""
    fullName: NotRequired[str]
    """Person's full name."""
    linkedinUrl: NotRequired[str]
    """Person's LinkedIn profile URL."""


class MobilePhoneLeadmagicInput(TypedDict, total=False):
    """Input for Mobile Phone - LeadMagic."""

    email: NotRequired[str]
    personalEmail: NotRequired[str]
    profileUrl: NotRequired[str]
    workEmail: NotRequired[str]


class MobilePhoneAiArkData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    linkedin_url: str | None = Field(
        default=None,
        alias="linkedinUrl",
        description="Canonical LinkedIn profile URL returned with the match.",
    )
    phone: str = Field(description="Matched mobile phone number.")


class MobilePhoneLeadmagicData(BaseModel):
    model_config = ConfigDict(extra="allow")

    message: str | None = None
    mobile: str


class MobilePhoneNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def ai_ark(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MobilePhoneAiArkInput],
    ) -> RunResult[MobilePhoneAiArkData]:
        """Mobile Phone - AI Ark

        Find a person's mobile phone from a LinkedIn URL or from a domain and full
        name.

        Price: $0.084 per request.

        Example:
            res = client.mobile_phone.ai_ark(linkedinUrl="https://www.linkedin.com/in/tim-zheng")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "mobile_phone.ai_ark", dict(input), options
        )
        return RunResult[MobilePhoneAiArkData].model_validate(raw)

    def leadmagic(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MobilePhoneLeadmagicInput],
    ) -> RunResult[MobilePhoneLeadmagicData]:
        """Mobile Phone - LeadMagic

        Find a person's mobile phone from a profile URL or email. No-match responses
        are not billed.

        Price: $0.2016 per request.
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "mobile_phone.leadmagic", dict(input), options
        )
        return RunResult[MobilePhoneLeadmagicData].model_validate(raw)


class AsyncMobilePhoneNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def ai_ark(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MobilePhoneAiArkInput],
    ) -> RunResult[MobilePhoneAiArkData]:
        """Mobile Phone - AI Ark

        Find a person's mobile phone from a LinkedIn URL or from a domain and full
        name.

        Price: $0.084 per request.

        Example:
            res = client.mobile_phone.ai_ark(linkedinUrl="https://www.linkedin.com/in/tim-zheng")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "mobile_phone.ai_ark", dict(input), options
        )
        return RunResult[MobilePhoneAiArkData].model_validate(raw)

    async def leadmagic(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[MobilePhoneLeadmagicInput],
    ) -> RunResult[MobilePhoneLeadmagicData]:
        """Mobile Phone - LeadMagic

        Find a person's mobile phone from a profile URL or email. No-match responses
        are not billed.

        Price: $0.2016 per request.
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "mobile_phone.leadmagic", dict(input), options
        )
        return RunResult[MobilePhoneLeadmagicData].model_validate(raw)
