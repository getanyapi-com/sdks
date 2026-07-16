# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the snapchat platform."""

from __future__ import annotations

from typing import TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class SnapchatProfileInput(TypedDict, total=False):
    """Input for Snapchat Profile."""

    username: Required[str]
    """The Snapchat username or profile URL to look up (e.g. fcbarcelona or https://www.snapchat.com/add/fcbarcelona)."""


class SnapchatProfileData(BaseModel):
    items: list[SnapchatProfileItem] = Field(
        description="Profile record for the requested Snapchat username (one item). Populated whenever the provider has data for the entity."
    )


class SnapchatProfileItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    bio: str | None = Field(
        default=None,
        description="The profile's public bio / description text. Empty when the profile has none.",
    )
    category: str | None = Field(
        default=None,
        description='The profile\'s category (e.g. "Government Org"). Empty when the upstream omits it.',
    )
    display_name: str = Field(
        alias="displayName",
        description="The profile's public display name. Populated whenever the provider has data for the entity.",
    )
    handle: str = Field(
        description="The profile's Snapchat username (add-me handle). Populated whenever the provider has data for the entity."
    )
    image: str | None = Field(
        default=None,
        description="URL of the profile avatar image, with tracking query params stripped. Empty when the upstream omits it.",
    )
    stories: list[SnapchatProfileStorie] | None = Field(
        default=None, description="Recent public stories on the profile."
    )
    subscribers: int | None = Field(
        default=None, description="Public subscriber count."
    )
    url: str = Field(
        description="Canonical public profile URL, with tracking query params stripped. Populated whenever the provider has data for the entity."
    )
    website: str | None = Field(
        default=None,
        description="The profile's linked website URL. Empty when the profile has none.",
    )


class SnapchatProfileStorie(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str | None = Field(default=None, description="Story identifier.")
    story_title: str | None = Field(
        default=None,
        alias="storyTitle",
        description="Story title. Empty when the story has no title.",
    )
    thumbnail_url: str | None = Field(
        default=None,
        alias="thumbnailUrl",
        description="Story thumbnail image URL, with tracking query params stripped.",
    )


class SnapchatNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SnapchatProfileInput],
    ) -> RunResult[SnapchatProfileData]:
        """Snapchat Profile

        Fetch a Snapchat user's public profile by username - display name, bio,
        subscriber count, and recent public content.

        Price: $0.001 per request plus $0.002 per result (maximum $0.003).

        Example:
            res = client.snapchat.profile(username="nasa")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "snapchat.profile", dict(input), options
        )
        return RunResult[SnapchatProfileData].model_validate(raw)


class AsyncSnapchatNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[SnapchatProfileInput],
    ) -> RunResult[SnapchatProfileData]:
        """Snapchat Profile

        Fetch a Snapchat user's public profile by username - display name, bio,
        subscriber count, and recent public content.

        Price: $0.001 per request plus $0.002 per result (maximum $0.003).

        Example:
            res = client.snapchat.profile(username="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "snapchat.profile", dict(input), options
        )
        return RunResult[SnapchatProfileData].model_validate(raw)
