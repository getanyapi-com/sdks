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

    author_image: str | None = Field(
        default=None,
        alias="authorImage",
        description="Present whenever the upstream returns this record.",
    )
    author_nickname: str | None = Field(
        default=None,
        alias="authorNickname",
        description="Present whenever the upstream returns this record.",
    )
    author_red_id: str | None = Field(
        default=None,
        alias="authorRedId",
        description="Present whenever the upstream returns this record.",
    )
    author_user_id: str | None = Field(
        default=None,
        alias="authorUserId",
        description="Present whenever the upstream returns this record.",
    )
    collect_count: int | None = Field(default=None, alias="collectCount")
    comment_count: int | None = Field(default=None, alias="commentCount")
    created_at: int | None = Field(
        default=None,
        alias="createdAt",
        description="Present whenever the upstream returns this record.",
    )
    description: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    image: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    language: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    like_count: int | None = Field(default=None, alias="likeCount")
    note_id: str = Field(alias="noteId")
    share_count: int | None = Field(default=None, alias="shareCount")
    title: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    type_: str | None = Field(
        default=None,
        alias="type",
        description="Present whenever the upstream returns this record.",
    )
    updated_at: int | None = Field(
        default=None,
        alias="updatedAt",
        description="Present whenever the upstream returns this record.",
    )
    url: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )


class RednoteNoteCommentsData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    comments: list[RednoteNoteCommentsComment]
    next_cursor: str = Field(alias="nextCursor")


class RednoteNoteCommentsComment(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    comment_id: str = Field(alias="commentId")
    created_at: int | None = Field(
        default=None,
        alias="createdAt",
        description="Present whenever the upstream returns this record.",
    )
    image: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    ip_location: str | None = Field(
        default=None,
        alias="ipLocation",
        description="Present whenever the upstream returns this record.",
    )
    like_count: int | None = Field(default=None, alias="likeCount")
    nickname: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    note_id: str | None = Field(
        default=None,
        alias="noteId",
        description="Present whenever the upstream returns this record.",
    )
    red_id: str | None = Field(
        default=None,
        alias="redId",
        description="Present whenever the upstream returns this record.",
    )
    reply_count: int | None = Field(default=None, alias="replyCount")
    text: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    user_id: str | None = Field(
        default=None,
        alias="userId",
        description="Present whenever the upstream returns this record.",
    )


class RednoteProfileData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    collected_count: int | None = Field(default=None, alias="collectedCount")
    description: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    followers: int | None = None
    following: int | None = None
    gender: int | None = None
    image: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    liked_count: int | None = Field(default=None, alias="likedCount")
    location: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    nickname: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    posted_notes: int | None = Field(default=None, alias="postedNotes")
    red_id: str | None = Field(
        default=None,
        alias="redId",
        description="Present whenever the upstream returns this record.",
    )
    share_url: str | None = Field(
        default=None,
        alias="shareUrl",
        description="Present whenever the upstream returns this record.",
    )
    user_id: str = Field(alias="userId")
    verified: bool | None = None
    verify_type: int | None = Field(default=None, alias="verifyType")


class RednoteSearchData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    next_cursor: str = Field(alias="nextCursor")
    notes: list[RednoteSearchNote]


class RednoteSearchNote(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_image: str | None = Field(
        default=None,
        alias="authorImage",
        description="Present whenever the upstream returns this record.",
    )
    author_nickname: str | None = Field(
        default=None,
        alias="authorNickname",
        description="Present whenever the upstream returns this record.",
    )
    author_red_id: str | None = Field(
        default=None,
        alias="authorRedId",
        description="Present whenever the upstream returns this record.",
    )
    author_user_id: str | None = Field(
        default=None,
        alias="authorUserId",
        description="Present whenever the upstream returns this record.",
    )
    collect_count: int | None = Field(default=None, alias="collectCount")
    comment_count: int | None = Field(default=None, alias="commentCount")
    created_at: int | None = Field(default=None, alias="createdAt")
    description: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    image: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    like_count: int | None = Field(default=None, alias="likeCount")
    note_id: str = Field(alias="noteId")
    share_count: int | None = Field(default=None, alias="shareCount")
    title: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    type_: str | None = Field(
        default=None,
        alias="type",
        description="Present whenever the upstream returns this record.",
    )
    xsec_token: str | None = Field(
        default=None,
        alias="xsecToken",
        description="Present whenever the upstream returns this record.",
    )


class RednoteSearchUsersData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    next_cursor: str = Field(alias="nextCursor")
    users: list[RednoteSearchUsersUser]


class RednoteSearchUsersUser(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    description: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    image: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    link: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    name: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    red_id: str | None = Field(
        default=None,
        alias="redId",
        description="Present whenever the upstream returns this record.",
    )
    subtitle: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    user_id: str = Field(alias="userId")
    verified: bool | None = None
    verify_type: int | None = Field(default=None, alias="verifyType")


class RednoteUserNotesData(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    next_cursor: str = Field(alias="nextCursor")
    notes: list[RednoteUserNotesNote]


class RednoteUserNotesNote(BaseModel):
    model_config = ConfigDict(extra="allow", populate_by_name=True)

    author_image: str | None = Field(
        default=None,
        alias="authorImage",
        description="Present whenever the upstream returns this record.",
    )
    author_nickname: str | None = Field(
        default=None,
        alias="authorNickname",
        description="Present whenever the upstream returns this record.",
    )
    author_user_id: str | None = Field(
        default=None,
        alias="authorUserId",
        description="Present whenever the upstream returns this record.",
    )
    collect_count: int | None = Field(default=None, alias="collectCount")
    comment_count: int | None = Field(default=None, alias="commentCount")
    created_at: int | None = Field(default=None, alias="createdAt")
    description: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    image: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    like_count: int | None = Field(default=None, alias="likeCount")
    note_id: str = Field(alias="noteId")
    share_count: int | None = Field(default=None, alias="shareCount")
    title: str | None = Field(
        default=None, description="Present whenever the upstream returns this record."
    )
    type_: str | None = Field(
        default=None,
        alias="type",
        description="Present whenever the upstream returns this record.",
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.note", dict(input), options
        )
        return RunResult[RednoteNoteData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.note_comments", dict(input), options
        )
        return RunResult[RednoteNoteCommentsData].model_validate(raw)

    def iter_note_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteNoteCommentsInput],
    ) -> Paginator[RednoteNoteCommentsComment, RednoteNoteCommentsData]:
        """Iterate RedNote (Xiaohongshu) Note Comments results, following pagination cursors.

        Yields validated `RednoteNoteCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "rednote.note_comments",
            dict(input),
            "comments",
            item_model=RednoteNoteCommentsComment,
            data_model=RednoteNoteCommentsData,
            bare=False,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.profile", dict(input), options
        )
        return RunResult[RednoteProfileData].model_validate(raw)

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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.search", dict(input), options
        )
        return RunResult[RednoteSearchData].model_validate(raw)

    def iter_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchInput],
    ) -> Paginator[RednoteSearchNote, RednoteSearchData]:
        """Iterate RedNote (Xiaohongshu) Search results, following pagination cursors.

        Yields validated `RednoteSearchNote` items from the `notes` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "rednote.search",
            dict(input),
            "notes",
            item_model=RednoteSearchNote,
            data_model=RednoteSearchData,
            bare=False,
            options=options,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.search_users", dict(input), options
        )
        return RunResult[RednoteSearchUsersData].model_validate(raw)

    def iter_search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchUsersInput],
    ) -> Paginator[RednoteSearchUsersUser, RednoteSearchUsersData]:
        """Iterate RedNote (Xiaohongshu) User Search results, following pagination cursors.

        Yields validated `RednoteSearchUsersUser` items from the `users` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "rednote.search_users",
            dict(input),
            "users",
            item_model=RednoteSearchUsersUser,
            data_model=RednoteSearchUsersData,
            bare=False,
            options=options,
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
        raw = self._client._run_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.user_notes", dict(input), options
        )
        return RunResult[RednoteUserNotesData].model_validate(raw)

    def iter_user_notes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteUserNotesInput],
    ) -> Paginator[RednoteUserNotesNote, RednoteUserNotesData]:
        """Iterate RedNote (Xiaohongshu) User Notes results, following pagination cursors.

        Yields validated `RednoteUserNotesNote` items from the `notes` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return paginate(
            self._client,
            "rednote.user_notes",
            dict(input),
            "notes",
            item_model=RednoteUserNotesNote,
            data_model=RednoteUserNotesData,
            bare=False,
            options=options,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.note", dict(input), options
        )
        return RunResult[RednoteNoteData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.note_comments", dict(input), options
        )
        return RunResult[RednoteNoteCommentsData].model_validate(raw)

    def iter_note_comments(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteNoteCommentsInput],
    ) -> AsyncPaginator[RednoteNoteCommentsComment, RednoteNoteCommentsData]:
        """Iterate RedNote (Xiaohongshu) Note Comments results, following pagination cursors.

        Yields validated `RednoteNoteCommentsComment` items from the `comments` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "rednote.note_comments",
            dict(input),
            "comments",
            item_model=RednoteNoteCommentsComment,
            data_model=RednoteNoteCommentsData,
            bare=False,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.profile", dict(input), options
        )
        return RunResult[RednoteProfileData].model_validate(raw)

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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.search", dict(input), options
        )
        return RunResult[RednoteSearchData].model_validate(raw)

    def iter_search(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchInput],
    ) -> AsyncPaginator[RednoteSearchNote, RednoteSearchData]:
        """Iterate RedNote (Xiaohongshu) Search results, following pagination cursors.

        Yields validated `RednoteSearchNote` items from the `notes` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "rednote.search",
            dict(input),
            "notes",
            item_model=RednoteSearchNote,
            data_model=RednoteSearchData,
            bare=False,
            options=options,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.search_users", dict(input), options
        )
        return RunResult[RednoteSearchUsersData].model_validate(raw)

    def iter_search_users(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteSearchUsersInput],
    ) -> AsyncPaginator[RednoteSearchUsersUser, RednoteSearchUsersData]:
        """Iterate RedNote (Xiaohongshu) User Search results, following pagination cursors.

        Yields validated `RednoteSearchUsersUser` items from the `users` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "rednote.search_users",
            dict(input),
            "users",
            item_model=RednoteSearchUsersUser,
            data_model=RednoteSearchUsersData,
            bare=False,
            options=options,
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
        raw = await self._client._arun_raw(  # pyright: ignore[reportPrivateUsage]
            "rednote.user_notes", dict(input), options
        )
        return RunResult[RednoteUserNotesData].model_validate(raw)

    def iter_user_notes(
        self,
        *,
        options: RequestOptions | None = None,
        **input: Unpack[RednoteUserNotesInput],
    ) -> AsyncPaginator[RednoteUserNotesNote, RednoteUserNotesData]:
        """Iterate RedNote (Xiaohongshu) User Notes results, following pagination cursors.

        Yields validated `RednoteUserNotesNote` items from the `notes` field of
        each page. Use `.pages()` on the returned paginator to walk whole
        `RunResult` pages.
        """
        return apaginate(
            self._client,
            "rednote.user_notes",
            dict(input),
            "notes",
            item_model=RednoteUserNotesNote,
            data_model=RednoteUserNotesData,
            bare=False,
            options=options,
        )
