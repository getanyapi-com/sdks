// Generated - do not edit. Regenerate with: pnpm generate

import type {
  BareRunResult,
  ClientCore,
  RequestOptions,
} from "../../core/index.js";

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

export type SpotifyAlbumData = unknown;

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

export type SpotifyArtistData = unknown;

/**
 * Input for Spotify Play Count (spotify.play_count).
 */
export interface SpotifyPlayCountInput {
  /**
   * Spotify track, album, or artist URL to fetch stream counts for (e.g. https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp).
   */
  url: string;
}

export type SpotifyPlayCountData = unknown;

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

export type SpotifyPodcastData = unknown;

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

export type SpotifyPodcastEpisodesData = unknown;

/**
 * Input for Spotify Search (spotify.search).
 */
export interface SpotifySearchInput {
  /**
   * Search term (e.g. "my first million").
   */
  query: string;
}

export type SpotifySearchData = unknown;

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

export type SpotifyTrackData = unknown;

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
  ): Promise<BareRunResult<SpotifyAlbumData>> {
    return this._core.run(
      "spotify.album",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SpotifyAlbumData>>;
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
  ): Promise<BareRunResult<SpotifyArtistData>> {
    return this._core.run(
      "spotify.artist",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SpotifyArtistData>>;
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
  ): Promise<BareRunResult<SpotifyPlayCountData>> {
    return this._core.run(
      "spotify.play_count",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SpotifyPlayCountData>>;
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
  ): Promise<BareRunResult<SpotifyPodcastData>> {
    return this._core.run(
      "spotify.podcast",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SpotifyPodcastData>>;
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
  ): Promise<BareRunResult<SpotifyPodcastEpisodesData>> {
    return this._core.run(
      "spotify.podcast_episodes",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SpotifyPodcastEpisodesData>>;
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
  ): Promise<BareRunResult<SpotifySearchData>> {
    return this._core.run(
      "spotify.search",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SpotifySearchData>>;
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
  ): Promise<BareRunResult<SpotifyTrackData>> {
    return this._core.run(
      "spotify.track",
      input,
      options,
    ) as unknown as Promise<BareRunResult<SpotifyTrackData>>;
  }
}
