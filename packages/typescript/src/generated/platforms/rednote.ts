// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

/**
 * Input for RedNote (Xiaohongshu) Note (rednote.note).
 */
export interface RednoteNoteInput {
  /**
   * RedNote (Xiaohongshu) note ID.
   */
  noteId: string;
}

export type RednoteNoteData = unknown;

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

export type RednoteNoteCommentsData = unknown;

/**
 * Input for RedNote (Xiaohongshu) Profile (rednote.profile).
 */
export interface RednoteProfileInput {
  /**
   * RedNote (Xiaohongshu) user ID.
   */
  userId: string;
}

export type RednoteProfileData = unknown;

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

export type RednoteSearchData = unknown;

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

export type RednoteSearchUsersData = unknown;

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

export type RednoteUserNotesData = unknown;

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
  ): Promise<BareRunResult<RednoteNoteData>> {
    return this._core.run("rednote.note", input, options) as unknown as Promise<
      BareRunResult<RednoteNoteData>
    >;
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
  ): Promise<BareRunResult<RednoteNoteCommentsData>> {
    return this._core.run(
      "rednote.note_comments",
      input,
      options,
    ) as unknown as Promise<BareRunResult<RednoteNoteCommentsData>>;
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
  ): Promise<BareRunResult<RednoteProfileData>> {
    return this._core.run(
      "rednote.profile",
      input,
      options,
    ) as unknown as Promise<BareRunResult<RednoteProfileData>>;
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
  ): Promise<BareRunResult<RednoteSearchData>> {
    return this._core.run(
      "rednote.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<RednoteSearchData>>;
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
  ): Promise<BareRunResult<RednoteSearchUsersData>> {
    return this._core.run(
      "rednote.search_users",
      input,
      options,
    ) as unknown as Promise<BareRunResult<RednoteSearchUsersData>>;
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
  ): Promise<BareRunResult<RednoteUserNotesData>> {
    return this._core.run(
      "rednote.user_notes",
      input,
      options,
    ) as unknown as Promise<BareRunResult<RednoteUserNotesData>>;
  }
}
