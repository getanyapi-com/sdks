// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  Paginator,
  RequestOptions,
  RunResult,
} from "../../core/index.js";
import { paginate } from "../../core/index.js";

/**
 * Input for Spotify Album (spotify.album).
 */
export interface SpotifyAlbumInput {
  /**
   * Spotify album ID (alternative to url).
   */
  id?: string;
  /**
   * Spotify album URL (e.g. https://open.spotify.com/album/0pgrg7phBbnwGJ2HBEl9EG).
   */
  url?: string;
}

export interface SpotifyAlbumTrack {
  durationMs: number;
  name: string;
  playcount: number;
  uri: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Spotify Album (spotify.album).
 */
export interface SpotifyAlbumData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  label: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  popularity: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  releaseDate: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  tracks: SpotifyAlbumTrack[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  type: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  uri: string;
}

/**
 * Input for Spotify Artist (spotify.artist).
 */
export interface SpotifyArtistInput {
  /**
   * Spotify artist ID (alternative to url).
   */
  id?: string;
  /**
   * Spotify artist URL (e.g. https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa).
   */
  url?: string;
}

export interface SpotifyArtistAlbum {
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  trackCount: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  type: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  uri: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  year: number;
  [extra: string]: unknown;
}

export interface SpotifyArtistTopTrack {
  id: string;
  name: string;
  playcount: number;
  uri: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Spotify Artist (spotify.artist).
 */
export interface SpotifyArtistData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  albums: SpotifyArtistAlbum[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  topTracks: SpotifyArtistTopTrack[];
}

/**
 * Input for Spotify Play Count (spotify.play_count).
 */
export interface SpotifyPlayCountInput {
  /**
   * Spotify track, album, or artist URL to fetch stream counts for (e.g. https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp).
   */
  url: string;
}

export interface SpotifyPlayCountItem {
  /**
   * Name of the album the track belongs to. Empty when the upstream omits it.
   */
  albumName?: string;
  /**
   * Name of the primary artist. Empty when the upstream omits it.
   */
  artistName?: string;
  /**
   * Track duration in milliseconds.
   */
  durationMs?: number;
  /**
   * The Spotify entity ID. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * The track (or entity) name. Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Total number of streams/plays for the track. Populated whenever the provider has data for the entity.
   */
  playCount: number;
  /**
   * The Spotify entity type (e.g. "track").
   */
  type?: string;
  /**
   * Canonical open.spotify.com URL for the entity, with tracking query params stripped. Populated whenever the provider has data for the entity.
   */
  url: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Spotify Play Count (spotify.play_count).
 */
export interface SpotifyPlayCountData {
  /**
   * Play-count records for the requested Spotify entity (one per track). Populated whenever the provider has data for the entity.
   */
  items: SpotifyPlayCountItem[];
}

/**
 * Input for Spotify Podcast (spotify.podcast).
 */
export interface SpotifyPodcastInput {
  /**
   * Spotify podcast show ID (alternative to url).
   */
  id?: string;
  /**
   * Spotify podcast show URL (e.g. https://open.spotify.com/show/3mliji9352UAk3XnWElnDV).
   */
  url?: string;
}

/**
 * The `data` payload of Spotify Podcast (spotify.podcast).
 */
export interface SpotifyPodcastData {
  averageRating: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  description: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  publisher: string;
  totalRatings: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  uri: string;
  [extra: string]: unknown;
}

/**
 * Input for Spotify Podcast Episodes (spotify.podcast_episodes).
 */
export interface SpotifyPodcastEpisodesInput {
  /**
   * Pagination cursor from a previous response for subsequent pages.
   */
  cursor?: string;
  /**
   * Spotify podcast show ID (alternative to url).
   */
  id?: string;
  /**
   * Spotify podcast show URL (e.g. https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk).
   */
  url?: string;
}

export interface SpotifyPodcastEpisodesEpisode {
  /**
   * Populated whenever the provider has data for the entity.
   */
  description: string;
  durationMs: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  releaseDate: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  uri: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Spotify Podcast Episodes (spotify.podcast_episodes).
 */
export interface SpotifyPodcastEpisodesData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  episodes: SpotifyPodcastEpisodesEpisode[];
  nextCursor: string;
  totalCount: number;
}

/**
 * Input for Spotify Search (spotify.search).
 */
export interface SpotifySearchInput {
  /**
   * Search term (e.g. "my first million").
   */
  query: string;
}

export interface SpotifySearchAlbum {
  id: string;
  name: string;
  uri: string;
  year: number;
  [extra: string]: unknown;
}

export interface SpotifySearchArtist {
  id: string;
  name: string;
  uri: string;
  verified: boolean;
  [extra: string]: unknown;
}

export interface SpotifySearchPodcast {
  id: string;
  name: string;
  publisher: string;
  [extra: string]: unknown;
}

export interface SpotifySearchTrack {
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  uri: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Spotify Search (spotify.search).
 */
export interface SpotifySearchData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  albums: SpotifySearchAlbum[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  artists: SpotifySearchArtist[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  podcasts: SpotifySearchPodcast[];
  /**
   * Populated whenever the provider has data for the entity.
   */
  tracks: SpotifySearchTrack[];
}

/**
 * Input for Spotify Track (spotify.track).
 */
export interface SpotifyTrackInput {
  /**
   * Spotify track ID (alternative to url).
   */
  id?: string;
  /**
   * Spotify track URL (e.g. https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT).
   */
  url?: string;
}

/**
 * The `data` payload of Spotify Track (spotify.track).
 */
export interface SpotifyTrackData {
  /**
   * Populated whenever the provider has data for the entity.
   */
  durationMs: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  playcount: number;
  popularity: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  shareUrl: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  trackNumber: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  uri: string;
  [extra: string]: unknown;
}

/**
 * Typed methods for the spotify platform. Attached to the AnyAPI client as
 * `client.spotify`.
 */
export class SpotifyNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Spotify Album
   *
   * Fetch a Spotify album's tracklist, play counts, label, and release details by album URL or ID.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.spotify.album({ url: "https://open.spotify.com/album/0pgrg7phBbnwGJ2HBEl9EG" });
   */
  album(
    input: SpotifyAlbumInput,
    options?: RequestOptions,
  ): Promise<RunResult<SpotifyAlbumData>> {
    return this._core.run("spotify.album", input, options);
  }

  /**
   * Spotify Artist
   *
   * Fetch a Spotify artist's discography (albums, singles, top tracks) and metadata by artist URL or ID.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.spotify.artist({ url: "https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa" });
   */
  artist(
    input: SpotifyArtistInput,
    options?: RequestOptions,
  ): Promise<RunResult<SpotifyArtistData>> {
    return this._core.run("spotify.artist", input, options);
  }

  /**
   * Spotify Play Count
   *
   * Fetch stream counts and stats for a Spotify track, album, or artist URL.
   *
   * Price: $0 per request plus $0.003 per result (maximum $0.003).
   *
   * @example
   * const res = await client.spotify.playCount({ url: "https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT" });
   */
  playCount(
    input: SpotifyPlayCountInput,
    options?: RequestOptions,
  ): Promise<RunResult<SpotifyPlayCountData>> {
    return this._core.run("spotify.play_count", input, options);
  }

  /**
   * Spotify Podcast
   *
   * Fetch a Spotify podcast show's name, publisher, description, rating, and topics by show URL or ID.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.spotify.podcast({ url: "https://open.spotify.com/show/3mliji9352UAk3XnWElnDV" });
   */
  podcast(
    input: SpotifyPodcastInput,
    options?: RequestOptions,
  ): Promise<RunResult<SpotifyPodcastData>> {
    return this._core.run("spotify.podcast", input, options);
  }

  /**
   * Spotify Podcast Episodes
   *
   * List a Spotify podcast show's episodes with titles, durations, descriptions, and release dates by show URL or ID.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.spotify.podcastEpisodes({ url: "https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk" });
   */
  podcastEpisodes(
    input: SpotifyPodcastEpisodesInput,
    options?: RequestOptions,
  ): Promise<RunResult<SpotifyPodcastEpisodesData>> {
    return this._core.run("spotify.podcast_episodes", input, options);
  }

  /**
   * Iterate every result of Spotify Podcast Episodes across pages.
   *
   * Yields items directly; call `.pages()` on the return value to walk whole
   * result pages instead (each carries its own costUsd).
   */
  iterPodcastEpisodes(
    input: SpotifyPodcastEpisodesInput,
    options?: RequestOptions,
  ): Paginator<
    SpotifyPodcastEpisodesEpisode,
    RunResult<SpotifyPodcastEpisodesData>
  > {
    return paginate<
      SpotifyPodcastEpisodesEpisode,
      RunResult<SpotifyPodcastEpisodesData>
    >(
      this._core,
      "spotify.podcast_episodes",
      input as unknown as Record<string, unknown>,
      "episodes",
      false,
      options,
    );
  }

  /**
   * Spotify Search
   *
   * Search Spotify for matching tracks, albums, artists, podcasts, and playlists by keyword.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.spotify.search({ query: "my first million" });
   */
  search(
    input: SpotifySearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<SpotifySearchData>> {
    return this._core.run("spotify.search", input, options);
  }

  /**
   * Spotify Track
   *
   * Fetch a Spotify track's play count, popularity, duration, and album details by track URL or ID.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.spotify.track({ url: "https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT" });
   */
  track(
    input: SpotifyTrackInput,
    options?: RequestOptions,
  ): Promise<RunResult<SpotifyTrackData>> {
    return this._core.run("spotify.track", input, options);
  }
}
