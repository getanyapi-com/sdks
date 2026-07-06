// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for RedNote (Xiaohongshu) Note (rednote.note).
 */
export interface RednoteNoteInput {
  /**
   * RedNote (Xiaohongshu) note ID.
   */
  noteId: string;
}

/**
 * The `data` payload of RedNote (Xiaohongshu) Note (rednote.note).
 */
export interface RednoteNoteData {
  /**
   * Present whenever the upstream returns this record.
   */
  authorImage?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  authorNickname?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  authorRedId?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
  collectCount?: number;
  commentCount?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  createdAt?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  language?: string;
  likeCount?: number;
  noteId: string;
  shareCount?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  title?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  type?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  updatedAt?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * Input for RedNote (Xiaohongshu) Note Comments (rednote.note_comments).
 */
export interface RednoteNoteCommentsInput {
  /**
   * Pagination cursor from the previous response.
   */
  cursor?: string;
  /**
   * RedNote (Xiaohongshu) note ID.
   */
  noteId: string;
}

export interface RednoteNoteCommentsComment {
  commentId: string;
  /**
   * Present whenever the upstream returns this record.
   */
  createdAt?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  ipLocation?: string;
  likeCount?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  nickname?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  noteId?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  redId?: string;
  replyCount?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  text?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  userId?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of RedNote (Xiaohongshu) Note Comments (rednote.note_comments).
 */
export interface RednoteNoteCommentsData {
  comments: RednoteNoteCommentsComment[];
  nextCursor: string;
  [extra: string]: unknown;
}

/**
 * Input for RedNote (Xiaohongshu) Profile (rednote.profile).
 */
export interface RednoteProfileInput {
  /**
   * RedNote (Xiaohongshu) user ID.
   */
  userId: string;
}

/**
 * The `data` payload of RedNote (Xiaohongshu) Profile (rednote.profile).
 */
export interface RednoteProfileData {
  collectedCount?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  description?: string;
  followers?: number;
  following?: number;
  gender?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  image?: string;
  likedCount?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  location?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  nickname?: string;
  postedNotes?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  redId?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  shareUrl?: string;
  userId: string;
  verified?: boolean;
  verifyType?: number;
  [extra: string]: unknown;
}

/**
 * Input for RedNote (Xiaohongshu) Search (rednote.search).
 */
export interface RednoteSearchInput {
  /**
   * Pagination cursor from the previous response.
   */
  cursor?: string;
  /**
   * Keyword to search for on RedNote (Xiaohongshu).
   */
  query: string;
  /**
   * Sort order for matching notes.
   * One of: general, hot, time.
   * Default: general.
   */
  sort?: "general" | "hot" | "time";
}

export interface RednoteSearchNote {
  /**
   * Present whenever the upstream returns this record.
   */
  authorImage?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  authorNickname?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  authorRedId?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
  collectCount?: number;
  commentCount?: number;
  createdAt?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  image?: string;
  likeCount?: number;
  noteId: string;
  shareCount?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  title?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  type?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  xsecToken?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of RedNote (Xiaohongshu) Search (rednote.search).
 */
export interface RednoteSearchData {
  nextCursor: string;
  notes: RednoteSearchNote[];
  [extra: string]: unknown;
}

/**
 * Input for RedNote (Xiaohongshu) User Search (rednote.search_users).
 */
export interface RednoteSearchUsersInput {
  /**
   * Pagination cursor from the previous response.
   */
  cursor?: string;
  /**
   * Keyword to search for on RedNote (Xiaohongshu).
   */
  query: string;
}

export interface RednoteSearchUsersUser {
  /**
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  image?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  link?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  name?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  redId?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  subtitle?: string;
  userId: string;
  verified?: boolean;
  verifyType?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of RedNote (Xiaohongshu) User Search (rednote.search_users).
 */
export interface RednoteSearchUsersData {
  nextCursor: string;
  users: RednoteSearchUsersUser[];
  [extra: string]: unknown;
}

/**
 * Input for RedNote (Xiaohongshu) User Notes (rednote.user_notes).
 */
export interface RednoteUserNotesInput {
  /**
   * Pagination cursor from the previous response.
   */
  cursor?: string;
  /**
   * RedNote (Xiaohongshu) user ID.
   */
  userId: string;
}

export interface RednoteUserNotesNote {
  /**
   * Present whenever the upstream returns this record.
   */
  authorImage?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  authorNickname?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  authorUserId?: string;
  collectCount?: number;
  commentCount?: number;
  createdAt?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  description?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  image?: string;
  likeCount?: number;
  noteId: string;
  shareCount?: number;
  /**
   * Present whenever the upstream returns this record.
   */
  title?: string;
  /**
   * Present whenever the upstream returns this record.
   */
  type?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of RedNote (Xiaohongshu) User Notes (rednote.user_notes).
 */
export interface RednoteUserNotesData {
  nextCursor: string;
  notes: RednoteUserNotesNote[];
  [extra: string]: unknown;
}

/**
 * Typed methods for the rednote platform. Attached to the AnyAPI client as
 * `client.rednote`.
 */
export class RednoteNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * RedNote (Xiaohongshu) Note
   *
   * Look up a RedNote (Xiaohongshu) note by note ID and return normalized note details.
   *
   * Price: $0.01 per request.
   *
   * @example
   * const res = await client.rednote.note({ noteId: "66f2a24f000000002c02cf57" });
   */
  note(
    input: RednoteNoteInput,
    options?: RequestOptions,
  ): Promise<RunResult<RednoteNoteData>> {
    return this._core.run("rednote.note", input, options);
  }

  /**
   * RedNote (Xiaohongshu) Note Comments
   *
   * List comments on a RedNote (Xiaohongshu) note and return normalized comment records with pagination.
   *
   * Price: $0.01 per request.
   *
   * @example
   * const res = await client.rednote.noteComments({ noteId: "68dd422c0000000203019829" });
   */
  noteComments(
    input: RednoteNoteCommentsInput,
    options?: RequestOptions,
  ): Promise<RunResult<RednoteNoteCommentsData>> {
    return this._core.run("rednote.note_comments", input, options);
  }

  /**
   * Iterate every result of RedNote (Xiaohongshu) Note Comments across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterNoteComments(
    input: RednoteNoteCommentsInput,
    options?: RequestOptions,
  ): Paginator<RednoteNoteCommentsComment, RunResult<RednoteNoteCommentsData>> {
    return paginate<
      RednoteNoteCommentsComment,
      RunResult<RednoteNoteCommentsData>
    >(
      this._core,
      "rednote.note_comments",
      input as unknown as Record<string, unknown>,
      "comments",
      false,
      options,
    );
  }

  /**
   * RedNote (Xiaohongshu) Profile
   *
   * Look up a RedNote (Xiaohongshu) profile by user ID and return normalized profile details.
   *
   * Price: $0.01 per request.
   *
   * @example
   * const res = await client.rednote.profile({ userId: "56b0a4491c07df6365277af7" });
   */
  profile(
    input: RednoteProfileInput,
    options?: RequestOptions,
  ): Promise<RunResult<RednoteProfileData>> {
    return this._core.run("rednote.profile", input, options);
  }

  /**
   * RedNote (Xiaohongshu) Search
   *
   * Search RedNote (Xiaohongshu) notes by keyword and return normalized note records with pagination.
   *
   * Price: $0.01 per request.
   *
   * @example
   * const res = await client.rednote.search({ query: "coffee", sort: "general" });
   */
  search(
    input: RednoteSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<RednoteSearchData>> {
    return this._core.run("rednote.search", input, options);
  }

  /**
   * Iterate every result of RedNote (Xiaohongshu) Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearch(
    input: RednoteSearchInput,
    options?: RequestOptions,
  ): Paginator<RednoteSearchNote, RunResult<RednoteSearchData>> {
    return paginate<RednoteSearchNote, RunResult<RednoteSearchData>>(
      this._core,
      "rednote.search",
      input as unknown as Record<string, unknown>,
      "notes",
      false,
      options,
    );
  }

  /**
   * RedNote (Xiaohongshu) User Search
   *
   * Search RedNote (Xiaohongshu) users by keyword and return normalized user records with pagination.
   *
   * Price: $0.01 per request.
   *
   * @example
   * const res = await client.rednote.searchUsers({ query: "coffee" });
   */
  searchUsers(
    input: RednoteSearchUsersInput,
    options?: RequestOptions,
  ): Promise<RunResult<RednoteSearchUsersData>> {
    return this._core.run("rednote.search_users", input, options);
  }

  /**
   * Iterate every result of RedNote (Xiaohongshu) User Search across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterSearchUsers(
    input: RednoteSearchUsersInput,
    options?: RequestOptions,
  ): Paginator<RednoteSearchUsersUser, RunResult<RednoteSearchUsersData>> {
    return paginate<RednoteSearchUsersUser, RunResult<RednoteSearchUsersData>>(
      this._core,
      "rednote.search_users",
      input as unknown as Record<string, unknown>,
      "users",
      false,
      options,
    );
  }

  /**
   * RedNote (Xiaohongshu) User Notes
   *
   * List notes posted by a RedNote (Xiaohongshu) user and return normalized note records with pagination.
   *
   * Price: $0.01 per request.
   *
   * @example
   * const res = await client.rednote.userNotes({ userId: "56b0a4491c07df6365277af7" });
   */
  userNotes(
    input: RednoteUserNotesInput,
    options?: RequestOptions,
  ): Promise<RunResult<RednoteUserNotesData>> {
    return this._core.run("rednote.user_notes", input, options);
  }

  /**
   * Iterate every result of RedNote (Xiaohongshu) User Notes across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterUserNotes(
    input: RednoteUserNotesInput,
    options?: RequestOptions,
  ): Paginator<RednoteUserNotesNote, RunResult<RednoteUserNotesData>> {
    return paginate<RednoteUserNotesNote, RunResult<RednoteUserNotesData>>(
      this._core,
      "rednote.user_notes",
      input as unknown as Record<string, unknown>,
      "notes",
      false,
      options,
    );
  }
}
