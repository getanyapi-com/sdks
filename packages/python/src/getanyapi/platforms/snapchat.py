# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the snapchat platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class SnapchatProfileInput(TypedDict, total=False):
    """Input for Snapchat Profile."""

    username: Required[str]
    """The Snapchat username or profile URL to look up (e.g. fcbarcelona or https://www.snapchat.com/add/fcbarcelona)."""


class SnapchatProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class SnapchatNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SnapchatProfileInput],
    ) -> BareRunResult[SnapchatProfileData]:
        """Snapchat Profile

        Fetch a Snapchat user's public profile by username: display name, bio,
        subscriber count, and recent public content.

        Price: $0.001 per request plus $0.002 per result (maximum $0.003).

        Example:
            res = client.snapchat.profile(username="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "snapchat.profile", dict(input), options
        )
        return BareRunResult[SnapchatProfileData].model_validate(raw)


class AsyncSnapchatNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SnapchatProfileInput],
    ) -> BareRunResult[SnapchatProfileData]:
        """Snapchat Profile

        Fetch a Snapchat user's public profile by username: display name, bio,
        subscriber count, and recent public content.

        Price: $0.001 per request plus $0.002 per result (maximum $0.003).

        Example:
            res = client.snapchat.profile(username="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "snapchat.profile", dict(input), options
        )
        return BareRunResult[SnapchatProfileData].model_validate(raw)
