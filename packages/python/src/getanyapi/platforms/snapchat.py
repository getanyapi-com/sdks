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
        description="Profile records: public profile URL, handle, display name, bio, subscriber count, avatar, and recent public stories."
    )


class SnapchatProfileItem(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    avatar_url: str | None = Field(
        default=None,
        alias="avatarUrl",
        description="URL of the profile avatar image. Present whenever the upstream returns this record.",
    )
    bio: str | None = Field(
        default=None,
        description="The profile's public bio / description text. Present whenever the upstream returns this record.",
    )
    display_name: str | None = Field(
        default=None,
        alias="displayName",
        description="The profile's public display name. Present whenever the upstream returns this record.",
    )
    handle: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    stories: list[SnapchatProfileStorie] | None = Field(
        default=None,
        description="Recent public stories, each with its snaps (media items).",
    )
    subscribers: int | None = Field(
        default=None, description="Public subscriber count."
    )
    url: str


class SnapchatProfileStorie(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str | None = Field(default=None, description="Story identifier.")
    snaps: list[SnapchatProfileSnap] | None = Field(
        default=None, description="The snaps (media items) in this story."
    )
    story_title: str | None = Field(
        default=None, alias="storyTitle", description="Story title."
    )
    thumbnail_url: str | None = Field(
        default=None, alias="thumbnailUrl", description="Story thumbnail image URL."
    )


class SnapchatProfileSnap(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    id: str | None = Field(default=None, description="Snap identifier.")
    media_url: str | None = Field(
        default=None, alias="mediaUrl", description="Full-resolution media URL."
    )
    preview_url: str | None = Field(
        default=None, alias="previewUrl", description="Preview/thumbnail media URL."
    )
    timestamp: str | None = Field(
        default=None, description="Snap timestamp (ISO 8601)."
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
        subscriber count, and recent public content - with transparent per-request
        USD pricing.

        Price: $0.001 per request plus $0.002 per result.

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
        subscriber count, and recent public content - with transparent per-request
        USD pricing.

        Price: $0.001 per request plus $0.002 per result.

        Example:
            res = client.snapchat.profile(username="nasa")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "snapchat.profile", dict(input), options
        )
        return RunResult[SnapchatProfileData].model_validate(raw)
