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
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Populated whenever the provider returns data.
   */
  label: string;
  /**
   * Populated whenever the provider returns data.
   */
  name: string;
  popularity: number;
  /**
   * Populated whenever the provider returns data.
   */
  releaseDate: string;
  /**
   * Populated whenever the provider returns data.
   */
  tracks: SpotifyAlbumTrack[];
  /**
   * Populated whenever the provider returns data.
   */
  type: string;
  /**
   * Populated whenever the provider returns data.
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
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Populated whenever the provider returns data.
   */
  name: string;
  trackCount: number;
  /**
   * Populated whenever the provider returns data.
   */
  type: string;
  /**
   * Populated whenever the provider returns data.
   */
  uri: string;
  /**
   * Populated whenever the provider returns data.
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
   * Populated whenever the provider returns data.
   */
  albums: SpotifyArtistAlbum[];
  /**
   * Populated whenever the provider returns data.
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
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Populated whenever the provider returns data.
   */
  name: string;
  /**
   * Populated whenever the provider returns data.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Spotify Play Count (spotify.play_count).
 */
export interface SpotifyPlayCountData {
  /**
   * Play-count records: track, album, or artist metadata with stream counts and statistics.
   * Populated whenever the provider returns data.
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
   * Populated whenever the provider returns data.
   */
  description: string;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Populated whenever the provider returns data.
   */
  name: string;
  /**
   * Populated whenever the provider returns data.
   */
  publisher: string;
  totalRatings: number;
  /**
   * Populated whenever the provider returns data.
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
   * Populated whenever the provider returns data.
   */
  description: string;
  durationMs: number;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Populated whenever the provider returns data.
   */
  name: string;
  /**
   * Populated whenever the provider returns data.
   */
  releaseDate: string;
  /**
   * Populated whenever the provider returns data.
   */
  uri: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Spotify Podcast Episodes (spotify.podcast_episodes).
 */
export interface SpotifyPodcastEpisodesData {
  /**
   * Populated whenever the provider returns data.
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
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Populated whenever the provider returns data.
   */
  name: string;
  /**
   * Populated whenever the provider returns data.
   */
  uri: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Spotify Search (spotify.search).
 */
export interface SpotifySearchData {
  /**
   * Populated whenever the provider returns data.
   */
  albums: SpotifySearchAlbum[];
  /**
   * Populated whenever the provider returns data.
   */
  artists: SpotifySearchArtist[];
  /**
   * Populated whenever the provider returns data.
   */
  podcasts: SpotifySearchPodcast[];
  /**
   * Populated whenever the provider returns data.
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
   * Populated whenever the provider returns data.
   */
  durationMs: number;
  /**
   * Populated whenever the provider returns data.
   */
  id: string;
  /**
   * Populated whenever the provider returns data.
   */
  name: string;
  playcount: number;
  popularity: number;
  /**
   * Populated whenever the provider returns data.
   */
  shareUrl: string;
  /**
   * Populated whenever the provider returns data.
   */
  trackNumber: number;
  /**
   * Populated whenever the provider returns data.
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
   * Fetch a Spotify album's tracklist, play counts, label, and release details by album URL or ID, with transparent per-request USD pricing.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.spotify.album({"url":"https://open.spotify.com/album/0pgrg7phBbnwGJ2HBEl9EG"});
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
   * Fetch a Spotify artist's discography (albums, singles, top tracks) and metadata by artist URL or ID, with transparent per-request USD pricing.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.spotify.artist({"url":"https://open.spotify.com/artist/3DiDSECUqqY1AuBP8qtaIa"});
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
   * Fetch stream counts and stats for a Spotify track, album, or artist URL, with transparent per-request USD pricing.
   *
   * Price: $0 per request plus $0.003 per result.
   *
   * @example
   * const res = await client.spotify.playCount({"url":"https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT"});
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
   * Fetch a Spotify podcast show's name, publisher, description, rating, and topics by show URL or ID, with transparent per-request USD pricing.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.spotify.podcast({"url":"https://open.spotify.com/show/3mliji9352UAk3XnWElnDV"});
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
   * List a Spotify podcast show's episodes with titles, durations, descriptions, and release dates by show URL or ID, with transparent per-request USD pricing.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.spotify.podcastEpisodes({"url":"https://open.spotify.com/show/4rOoJ6Egrf8K2IrywzwOMk"});
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
   * RunResult pages instead (each carries its own costUsd).
   */
  iterPodcastEpisodes(
    input: SpotifyPodcastEpisodesInput,
    options?: RequestOptions,
  ): Paginator<SpotifyPodcastEpisodesEpisode, SpotifyPodcastEpisodesData> {
    return paginate<SpotifyPodcastEpisodesEpisode, SpotifyPodcastEpisodesData>(
      this._core,
      "spotify.podcast_episodes",
      input as unknown as Record<string, unknown>,
      "episodes",
      options,
    );
  }

  /**
   * Spotify Search
   *
   * Search Spotify for matching tracks, albums, artists, podcasts, and playlists by keyword, with transparent per-request USD pricing.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.spotify.search({"query":"my first million"});
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
   * Fetch a Spotify track's play count, popularity, duration, and album details by track URL or ID, with transparent per-request USD pricing.
   *
   * Price: $0.002 per request.
   *
   * @example
   * const res = await client.spotify.track({"url":"https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT"});
   */
  track(
    input: SpotifyTrackInput,
    options?: RequestOptions,
  ): Promise<RunResult<SpotifyTrackData>> {
    return this._core.run("spotify.track", input, options);
  }
}
