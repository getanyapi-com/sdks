# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the whatsapp platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class WhatsappValidateInput(TypedDict, total=False):
    """Input for WhatsApp Number Validator."""

    phone: Required[str]
    """The phone number to check, in international format."""


class WhatsappValidateData(BaseModel):
    items: list[WhatsappValidateItem] = Field(
        description="Validation records for the phone number. Populated whenever the provider has data for the entity."
    )


class WhatsappValidateItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    checked_utc: float | None = Field(
        default=None,
        alias="checkedUtc",
        description="UTC epoch timestamp in seconds (Unix time) when the check ran. Multiply by 1000 for a JS Date in milliseconds.",
    )
    exists: bool = Field(description="True when the number is registered on WhatsApp.")
    is_valid: bool | None = Field(
        default=None,
        alias="isValid",
        description="True when the number is a valid, reachable WhatsApp account.",
    )
    phone: str = Field(
        description="The phone number that was checked, in international format. Populated whenever the provider has data for the entity."
    )


class WhatsappNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def validate(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WhatsappValidateInput],
    ) -> RunResult[WhatsappValidateData]:
        """WhatsApp Number Validator

        Check whether a phone number is registered on WhatsApp.

        Price: $0.0035 per request plus $0.001 per result (maximum $0.0045).

        Example:
            res = client.whatsapp.validate(phone="+14155552671")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "whatsapp.validate", dict(input), options
        )
        return RunResult[WhatsappValidateData].model_validate(raw)


class AsyncWhatsappNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def validate(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[WhatsappValidateInput],
    ) -> RunResult[WhatsappValidateData]:
        """WhatsApp Number Validator

        Check whether a phone number is registered on WhatsApp.

        Price: $0.0035 per request plus $0.001 per result (maximum $0.0045).

        Example:
            res = client.whatsapp.validate(phone="+14155552671")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "whatsapp.validate", dict(input), options
        )
        return RunResult[WhatsappValidateData].model_validate(raw)
