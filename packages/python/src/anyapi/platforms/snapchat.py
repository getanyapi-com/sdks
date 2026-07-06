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
        description="Profile records: public profile URL, handle, display name, bio, subscriber count, avatar, and recent public stories. Populated whenever the provider returns data."
    )


class SnapchatProfileItem(BaseModel):
    model_config = ConfigDict(extra="allow")

    avatarUrl: str | None = Field(
        default=None,
        description="URL of the profile avatar image. Populated whenever the provider returns data.",
    )
    bio: str | None = Field(
        default=None,
        description="The profile's public bio / description text. Populated whenever the provider returns data.",
    )
    displayName: str | None = Field(
        default=None,
        description="The profile's public display name. Populated whenever the provider returns data.",
    )
    handle: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    stories: list[SnapchatProfileStorie] | None = Field(
        default=None,
        description="Recent public stories, each with its snaps (media items).",
    )
    subscribers: int | None = Field(
        default=None, description="Public subscriber count."
    )
    url: str = Field(description="Populated whenever the provider returns data.")


class SnapchatProfileStorie(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str | None = Field(default=None, description="Story identifier.")
    snaps: list[SnapchatProfileSnap] | None = Field(
        default=None, description="The snaps (media items) in this story."
    )
    storyTitle: str | None = Field(default=None, description="Story title.")
    thumbnailUrl: str | None = Field(
        default=None, description="Story thumbnail image URL."
    )


class SnapchatProfileSnap(BaseModel):
    model_config = ConfigDict(extra="allow")

    id: str | None = Field(default=None, description="Snap identifier.")
    mediaUrl: str | None = Field(default=None, description="Full-resolution media URL.")
    previewUrl: str | None = Field(
        default=None, description="Preview/thumbnail media URL."
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

        Price: $0.002 per result.

        Example:
            res = client.snapchat.profile(username="nasa")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "snapchat.profile", dict(input), options
        )
        return RunResult[SnapchatProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )


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

        Price: $0.002 per result.

        Example:
            res = client.snapchat.profile(username="nasa")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "snapchat.profile", dict(input), options
        )
        return RunResult[SnapchatProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )
