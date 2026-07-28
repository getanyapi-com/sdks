# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the rednote platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import BareRunResult, RequestOptions

if TYPE_CHECKING:
    from .._async_client import AsyncAnyAPI
    from .._client import AnyAPI


class RednoteNoteInput(TypedDict, total=False):
    """Input for RedNote (Xiaohongshu) Note."""

    noteId: Required[str]
    """RedNote (Xiaohongshu) note ID."""


class RednoteNoteCommentsInput(TypedDict, total=False):
    """Input for RedNote (Xiaohongshu) Note Comments."""

    cursor: NotRequired[str]
    """Pagination cursor from the previous response."""
    noteId: Required[str]
    """RedNote (Xiaohongshu) note ID."""


class RednoteProfileInput(TypedDict, total=False):
    """Input for RedNote (Xiaohongshu) Profile."""

    userId: Required[str]
    """RedNote (Xiaohongshu) user ID."""


class RednoteSearchInput(TypedDict, total=False):
    """Input for RedNote (Xiaohongshu) Search."""

    cursor: NotRequired[str]
    """Pagination cursor from the previous response."""
    query: Required[str]
    """Keyword to search for on RedNote (Xiaohongshu)."""
    sort: NotRequired[Literal["general", "hot", "time"]]
    """Sort order for matching notes. Default: general."""


class RednoteSearchUsersInput(TypedDict, total=False):
    """Input for RedNote (Xiaohongshu) User Search."""

    cursor: NotRequired[str]
    """Pagination cursor from the previous response."""
    query: Required[str]
    """Keyword to search for on RedNote (Xiaohongshu)."""


class RednoteUserNotesInput(TypedDict, total=False):
    """Input for RedNote (Xiaohongshu) User Notes."""

    cursor: NotRequired[str]
    """Pagination cursor from the previous response."""
    userId: Required[str]
    """RedNote (Xiaohongshu) user ID."""


class RednoteNoteData(BaseModel):
    model_config = ConfigDict(extra="allow")


class RednoteNoteCommentsData(BaseModel):
    model_config = ConfigDict(extra="allow")


class RednoteProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")


class RednoteSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")


class RednoteSearchUsersData(BaseModel):
    model_config = ConfigDict(extra="allow")


class RednoteUserNotesData(BaseModel):
    model_config = ConfigDict(extra="allow")


class RednoteNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def note(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteNoteInput],
    ) -> BareRunResult[RednoteNoteData]:
        """RedNote (Xiaohongshu) Note

        Look up a RedNote (Xiaohongshu) note by note ID and return normalized note
        details.

        Price: $0.01 per request.

        Example:
            res = client.rednote.note(noteId="66f2a24f000000002c02cf57")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.note", dict(input), options
        )
        return BareRunResult[RednoteNoteData].model_validate(raw)

    def note_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteNoteCommentsInput],
    ) -> BareRunResult[RednoteNoteCommentsData]:
        """RedNote (Xiaohongshu) Note Comments

        List comments on a RedNote (Xiaohongshu) note and return normalized comment
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.note_comments(noteId="68dd422c0000000203019829")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.note_comments", dict(input), options
        )
        return BareRunResult[RednoteNoteCommentsData].model_validate(raw)

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteProfileInput],
    ) -> BareRunResult[RednoteProfileData]:
        """RedNote (Xiaohongshu) Profile

        Look up a RedNote (Xiaohongshu) profile by user ID and return normalized
        profile details.

        Price: $0.01 per request.

        Example:
            res = client.rednote.profile(userId="56b0a4491c07df6365277af7")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.profile", dict(input), options
        )
        return BareRunResult[RednoteProfileData].model_validate(raw)

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchInput],
    ) -> BareRunResult[RednoteSearchData]:
        """RedNote (Xiaohongshu) Search

        Search RedNote (Xiaohongshu) notes by keyword and return normalized note
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.search(query="coffee", sort="general")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.search", dict(input), options
        )
        return BareRunResult[RednoteSearchData].model_validate(raw)

    def search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchUsersInput],
    ) -> BareRunResult[RednoteSearchUsersData]:
        """RedNote (Xiaohongshu) User Search

        Search RedNote (Xiaohongshu) users by keyword and return normalized user
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.search_users(query="coffee")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.search_users", dict(input), options
        )
        return BareRunResult[RednoteSearchUsersData].model_validate(raw)

    def user_notes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteUserNotesInput],
    ) -> BareRunResult[RednoteUserNotesData]:
        """RedNote (Xiaohongshu) User Notes

        List notes posted by a RedNote (Xiaohongshu) user and return normalized note
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.user_notes(userId="56b0a4491c07df6365277af7")
        """
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.user_notes", dict(input), options
        )
        return BareRunResult[RednoteUserNotesData].model_validate(raw)


class AsyncRednoteNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def note(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteNoteInput],
    ) -> BareRunResult[RednoteNoteData]:
        """RedNote (Xiaohongshu) Note

        Look up a RedNote (Xiaohongshu) note by note ID and return normalized note
        details.

        Price: $0.01 per request.

        Example:
            res = client.rednote.note(noteId="66f2a24f000000002c02cf57")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.note", dict(input), options
        )
        return BareRunResult[RednoteNoteData].model_validate(raw)

    async def note_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteNoteCommentsInput],
    ) -> BareRunResult[RednoteNoteCommentsData]:
        """RedNote (Xiaohongshu) Note Comments

        List comments on a RedNote (Xiaohongshu) note and return normalized comment
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.note_comments(noteId="68dd422c0000000203019829")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.note_comments", dict(input), options
        )
        return BareRunResult[RednoteNoteCommentsData].model_validate(raw)

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteProfileInput],
    ) -> BareRunResult[RednoteProfileData]:
        """RedNote (Xiaohongshu) Profile

        Look up a RedNote (Xiaohongshu) profile by user ID and return normalized
        profile details.

        Price: $0.01 per request.

        Example:
            res = client.rednote.profile(userId="56b0a4491c07df6365277af7")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.profile", dict(input), options
        )
        return BareRunResult[RednoteProfileData].model_validate(raw)

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchInput],
    ) -> BareRunResult[RednoteSearchData]:
        """RedNote (Xiaohongshu) Search

        Search RedNote (Xiaohongshu) notes by keyword and return normalized note
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.search(query="coffee", sort="general")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.search", dict(input), options
        )
        return BareRunResult[RednoteSearchData].model_validate(raw)

    async def search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchUsersInput],
    ) -> BareRunResult[RednoteSearchUsersData]:
        """RedNote (Xiaohongshu) User Search

        Search RedNote (Xiaohongshu) users by keyword and return normalized user
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.search_users(query="coffee")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.search_users", dict(input), options
        )
        return BareRunResult[RednoteSearchUsersData].model_validate(raw)

    async def user_notes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteUserNotesInput],
    ) -> BareRunResult[RednoteUserNotesData]:
        """RedNote (Xiaohongshu) User Notes

        List notes posted by a RedNote (Xiaohongshu) user and return normalized note
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.user_notes(userId="56b0a4491c07df6365277af7")
        """
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.user_notes", dict(input), options
        )
        return BareRunResult[RednoteUserNotesData].model_validate(raw)
