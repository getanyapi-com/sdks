# Generated - do not edit. Regenerate with: pnpm generate
"""Generated namespace module for the rednote platform."""

from __future__ import annotations

from typing import Literal, TYPE_CHECKING

from pydantic import BaseModel, ConfigDict, Field
from typing_extensions import NotRequired, Required, TypedDict, Unpack

from ..types import RequestOptions, RunResult
from .._pagination import (
    AsyncPaginator,
    Paginator,
    apaginate,
    paginate,
)

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
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    authorImage: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    authorNickname: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    authorRedId: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    authorUserId: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    collectCount: int | None = None
    commentCount: int | None = None
    createdAt: int | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    description: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    image: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    language: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    likeCount: int | None = None
    noteId: str = Field(description="Populated whenever the provider returns data.")
    shareCount: int | None = None
    title: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    type_: str | None = Field(
        default=None,
        alias="type",
        description="Populated whenever the provider returns data.",
    )
    updatedAt: int | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    url: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )


class RednoteNoteCommentsData(BaseModel):
    model_config = ConfigDict(extra="allow")

    comments: list[RednoteNoteCommentsComment] = Field(
        description="Populated whenever the provider returns data."
    )
    nextCursor: str


class RednoteNoteCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow")

    commentId: str = Field(description="Populated whenever the provider returns data.")
    createdAt: int | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    image: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    ipLocation: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    likeCount: int | None = None
    nickname: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    noteId: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    redId: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    replyCount: int | None = None
    text: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    userId: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )


class RednoteProfileData(BaseModel):
    model_config = ConfigDict(extra="allow")

    collectedCount: int | None = None
    description: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    followers: int | None = None
    following: int | None = None
    gender: int | None = None
    image: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    likedCount: int | None = None
    location: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    nickname: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    postedNotes: int | None = None
    redId: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    shareUrl: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    userId: str = Field(description="Populated whenever the provider returns data.")
    verified: bool | None = None
    verifyType: int | None = None


class RednoteSearchData(BaseModel):
    model_config = ConfigDict(extra="allow")

    nextCursor: str
    notes: list[RednoteSearchNote] = Field(
        description="Populated whenever the provider returns data."
    )


class RednoteSearchNote(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    authorImage: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    authorNickname: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    authorRedId: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    authorUserId: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    collectCount: int | None = None
    commentCount: int | None = None
    createdAt: int | None = None
    description: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    image: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    likeCount: int | None = None
    noteId: str = Field(description="Populated whenever the provider returns data.")
    shareCount: int | None = None
    title: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    type_: str | None = Field(
        default=None,
        alias="type",
        description="Populated whenever the provider returns data.",
    )
    xsecToken: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )


class RednoteSearchUsersData(BaseModel):
    model_config = ConfigDict(extra="allow")

    nextCursor: str
    users: list[RednoteSearchUsersUser] = Field(
        description="Populated whenever the provider returns data."
    )


class RednoteSearchUsersUser(BaseModel):
    model_config = ConfigDict(extra="allow")

    description: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    image: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    link: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    name: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    redId: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    subtitle: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    userId: str = Field(description="Populated whenever the provider returns data.")
    verified: bool | None = None
    verifyType: int | None = None


class RednoteUserNotesData(BaseModel):
    model_config = ConfigDict(extra="allow")

    nextCursor: str
    notes: list[RednoteUserNotesNote] = Field(
        description="Populated whenever the provider returns data."
    )


class RednoteUserNotesNote(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    authorImage: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    authorNickname: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    authorUserId: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    collectCount: int | None = None
    commentCount: int | None = None
    createdAt: int | None = None
    description: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    image: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    likeCount: int | None = None
    noteId: str = Field(description="Populated whenever the provider returns data.")
    shareCount: int | None = None
    title: str | None = Field(
        default=None, description="Populated whenever the provider returns data."
    )
    type_: str | None = Field(
        default=None,
        alias="type",
        description="Populated whenever the provider returns data.",
    )


class RednoteNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AnyAPI") -> None:
        self._client = client

    def note(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteNoteInput],
    ) -> RunResult[RednoteNoteData]:
        """RedNote (Xiaohongshu) Note

        Look up a RedNote (Xiaohongshu) note by note ID and return normalized note
        details.

        Price: $0.01 per request.

        Example:
            res = client.rednote.note(noteId="66f2a24f000000002c02cf57")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "rednote.note", dict(input), options
        )
        return RunResult[RednoteNoteData].model_validate(raw.model_dump(by_alias=True))

    def note_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteNoteCommentsInput],
    ) -> RunResult[RednoteNoteCommentsData]:
        """RedNote (Xiaohongshu) Note Comments

        List comments on a RedNote (Xiaohongshu) note and return normalized comment
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.note_comments(noteId="68dd422c0000000203019829")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "rednote.note_comments", dict(input), options
        )
        return RunResult[RednoteNoteCommentsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_note_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteNoteCommentsInput],
    ) -> Paginator[RednoteNoteCommentsComment, RednoteNoteCommentsData]:
        """Iterate RedNote (Xiaohongshu) Note Comments results, following pagination cursors.

        Yields flattened items from the `comments` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client,
            "rednote.note_comments",
            dict(input),
            "comments",
            options=options,
        )

    def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteProfileInput],
    ) -> RunResult[RednoteProfileData]:
        """RedNote (Xiaohongshu) Profile

        Look up a RedNote (Xiaohongshu) profile by user ID and return normalized
        profile details.

        Price: $0.01 per request.

        Example:
            res = client.rednote.profile(userId="56b0a4491c07df6365277af7")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "rednote.profile", dict(input), options
        )
        return RunResult[RednoteProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchInput],
    ) -> RunResult[RednoteSearchData]:
        """RedNote (Xiaohongshu) Search

        Search RedNote (Xiaohongshu) notes by keyword and return normalized note
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.search(query="coffee", sort="general")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "rednote.search", dict(input), options
        )
        return RunResult[RednoteSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchInput],
    ) -> Paginator[RednoteSearchNote, RednoteSearchData]:
        """Iterate RedNote (Xiaohongshu) Search results, following pagination cursors.

        Yields flattened items from the `notes` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "rednote.search", dict(input), "notes", options=options
        )

    def search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchUsersInput],
    ) -> RunResult[RednoteSearchUsersData]:
        """RedNote (Xiaohongshu) User Search

        Search RedNote (Xiaohongshu) users by keyword and return normalized user
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.search_users(query="coffee")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "rednote.search_users", dict(input), options
        )
        return RunResult[RednoteSearchUsersData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchUsersInput],
    ) -> Paginator[RednoteSearchUsersUser, RednoteSearchUsersData]:
        """Iterate RedNote (Xiaohongshu) User Search results, following pagination cursors.

        Yields flattened items from the `users` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "rednote.search_users", dict(input), "users", options=options
        )

    def user_notes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteUserNotesInput],
    ) -> RunResult[RednoteUserNotesData]:
        """RedNote (Xiaohongshu) User Notes

        List notes posted by a RedNote (Xiaohongshu) user and return normalized note
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.user_notes(userId="56b0a4491c07df6365277af7")
        """
        raw = self._client._run(  # pyright: ignore[reportPrivateUsage]
            "rednote.user_notes", dict(input), options
        )
        return RunResult[RednoteUserNotesData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_notes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteUserNotesInput],
    ) -> Paginator[RednoteUserNotesNote, RednoteUserNotesData]:
        """Iterate RedNote (Xiaohongshu) User Notes results, following pagination cursors.

        Yields flattened items from the `notes` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return paginate(
            self._client, "rednote.user_notes", dict(input), "notes", options=options
        )


class AsyncRednoteNamespace:
    """Typed methods for this platform. Attached lazily to the client."""

    def __init__(self, client: "AsyncAnyAPI") -> None:
        self._client = client

    async def note(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteNoteInput],
    ) -> RunResult[RednoteNoteData]:
        """RedNote (Xiaohongshu) Note

        Look up a RedNote (Xiaohongshu) note by note ID and return normalized note
        details.

        Price: $0.01 per request.

        Example:
            res = client.rednote.note(noteId="66f2a24f000000002c02cf57")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "rednote.note", dict(input), options
        )
        return RunResult[RednoteNoteData].model_validate(raw.model_dump(by_alias=True))

    async def note_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteNoteCommentsInput],
    ) -> RunResult[RednoteNoteCommentsData]:
        """RedNote (Xiaohongshu) Note Comments

        List comments on a RedNote (Xiaohongshu) note and return normalized comment
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.note_comments(noteId="68dd422c0000000203019829")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "rednote.note_comments", dict(input), options
        )
        return RunResult[RednoteNoteCommentsData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_note_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteNoteCommentsInput],
    ) -> AsyncPaginator[RednoteNoteCommentsComment, RednoteNoteCommentsData]:
        """Iterate RedNote (Xiaohongshu) Note Comments results, following pagination cursors.

        Yields flattened items from the `comments` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client,
            "rednote.note_comments",
            dict(input),
            "comments",
            options=options,
        )

    async def profile(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteProfileInput],
    ) -> RunResult[RednoteProfileData]:
        """RedNote (Xiaohongshu) Profile

        Look up a RedNote (Xiaohongshu) profile by user ID and return normalized
        profile details.

        Price: $0.01 per request.

        Example:
            res = client.rednote.profile(userId="56b0a4491c07df6365277af7")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "rednote.profile", dict(input), options
        )
        return RunResult[RednoteProfileData].model_validate(
            raw.model_dump(by_alias=True)
        )

    async def search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchInput],
    ) -> RunResult[RednoteSearchData]:
        """RedNote (Xiaohongshu) Search

        Search RedNote (Xiaohongshu) notes by keyword and return normalized note
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.search(query="coffee", sort="general")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "rednote.search", dict(input), options
        )
        return RunResult[RednoteSearchData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchInput],
    ) -> AsyncPaginator[RednoteSearchNote, RednoteSearchData]:
        """Iterate RedNote (Xiaohongshu) Search results, following pagination cursors.

        Yields flattened items from the `notes` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "rednote.search", dict(input), "notes", options=options
        )

    async def search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchUsersInput],
    ) -> RunResult[RednoteSearchUsersData]:
        """RedNote (Xiaohongshu) User Search

        Search RedNote (Xiaohongshu) users by keyword and return normalized user
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.search_users(query="coffee")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "rednote.search_users", dict(input), options
        )
        return RunResult[RednoteSearchUsersData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchUsersInput],
    ) -> AsyncPaginator[RednoteSearchUsersUser, RednoteSearchUsersData]:
        """Iterate RedNote (Xiaohongshu) User Search results, following pagination cursors.

        Yields flattened items from the `users` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "rednote.search_users", dict(input), "users", options=options
        )

    async def user_notes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteUserNotesInput],
    ) -> RunResult[RednoteUserNotesData]:
        """RedNote (Xiaohongshu) User Notes

        List notes posted by a RedNote (Xiaohongshu) user and return normalized note
        records with pagination.

        Price: $0.01 per request.

        Example:
            res = client.rednote.user_notes(userId="56b0a4491c07df6365277af7")
        """
        raw = await self._client._arun(  # pyright: ignore[reportPrivateUsage]
            "rednote.user_notes", dict(input), options
        )
        return RunResult[RednoteUserNotesData].model_validate(
            raw.model_dump(by_alias=True)
        )

    def iter_user_notes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteUserNotesInput],
    ) -> AsyncPaginator[RednoteUserNotesNote, RednoteUserNotesData]:
        """Iterate RedNote (Xiaohongshu) User Notes results, following pagination cursors.

        Yields flattened items from the `notes` field of each page. Use
        `.pages()` on the returned paginator to walk whole `RunResult` pages.
        """
        return apaginate(
            self._client, "rednote.user_notes", dict(input), "notes", options=options
        )
