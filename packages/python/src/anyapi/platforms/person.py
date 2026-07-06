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
        description="Skip-trace records: the matched person with known names, ages, current and past addresses, phone numbers, and email addresses."
    )


class PersonSkipTraceItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    url: str


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

        Price: $0.007 per result.

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

        Price: $0.007 per result.

        Example:
            res = client.person.skip_trace(address="123 Main St, Austin, TX 78701", name="John Smith")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "person.skip_trace", dict(input), options
        )
        return RunResult[PersonSkipTraceData].model_validate(raw)
