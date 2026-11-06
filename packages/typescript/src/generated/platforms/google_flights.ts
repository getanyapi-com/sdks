// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Google Flights Search (google_flights.search).
 */
export interface GoogleFlightsSearchInput {
  /**
   * Number of adult passengers (1-9, default 1). Prices are for all passengers together.
   * Range: minimum 1, maximum 9.
   * Default: 1.
   */
  adults?: number;
  /**
   * Only itineraries flown by these airlines, as two-character IATA codes (e.g. ["BA", "AA"]).
   */
  airlines?: string[];
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Cabin class (default economy).
   * One of: economy, premium_economy, business, first.
   * Default: economy.
   */
  cabinClass?: "economy" | "premium_economy" | "business" | "first";
  /**
   * Number of child passengers aged 2-11 (e.g. 1).
   * Range: minimum 0, maximum 8.
   */
  children?: number;
  /**
   * ISO 4217 currency code for prices (e.g. USD, EUR, GBP; default USD).
   * Default: USD.
   */
  currency?: string;
  /**
   * Departure date in YYYY-MM-DD format (e.g. 2027-01-12). Today or later.
   * Format: date.
   */
  departureDate: string;
  /**
   * Arrival airport as a three-letter IATA code in capitals (e.g. LHR).
   */
  destination: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Highest total price to return, in currency (e.g. 600).
   * Range: minimum 1.
   */
  maxPrice?: number;
  /**
   * Most stops an itinerary may have (default any).
   * One of: any, nonstop, one_or_fewer, two_or_fewer.
   * Default: any.
   */
  maxStops?: "any" | "nonstop" | "one_or_fewer" | "two_or_fewer";
  /**
   * Departure airport as a three-letter IATA code in capitals (e.g. JFK).
   */
  origin: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `typicalCo2Kg`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on an itinerary that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: "typicalCo2Kg"[];
  /**
   * Return date in YYYY-MM-DD format for a round trip (e.g. 2027-01-19). Omit it for one way. With it, each result is an outbound option priced at the cheapest round trip that starts with it, and the return flights are not included.
   * Format: date.
   */
  returnDate?: string;
  /**
   * Result order: top_flights (Google's best flights first, the default), cheapest, departure_time, arrival_time, duration or emissions.
   * One of: top_flights, cheapest, departure_time, arrival_time, duration, emissions.
   * Default: top_flights.
   */
  sortBy?:
    | "top_flights"
    | "cheapest"
    | "departure_time"
    | "arrival_time"
    | "duration"
    | "emissions";
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface GoogleFlightsSearchItinerarie {
  /**
   * Name of the airline Google Flights shows for the itinerary (e.g. British Airways). The airline of each leg is in legs. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  airline?: string | null;
  /**
   * Google Flights' token for this itinerary's fare, or null when not given.
   */
  bookingToken?: string | null;
  /**
   * Estimated CO2 emissions of the itinerary in kilograms, or null when not shown (usually on round trips).
   */
  co2Kg?: number | null;
  /**
   * ISO 4217 currency code of price. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string | null;
  /**
   * On a round trip, the source's token for this outbound option; null on a one-way search.
   */
  departureToken?: string | null;
  /**
   * Flights of the itinerary in order (the outbound journey on a round trip).
   */
  legs: GoogleFlightsSearchLeg[];
  /**
   * Price for all passengers together, in currency, or null when Google shows no price. What it covers is in priceType. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  price?: number | null;
  /**
   * total: the one-way fare for all passengers. round_trip_starting: the cheapest round-trip fare that starts with this outbound option; the return flights are not included.
   * One of: total, round_trip_starting.
   */
  priceType: "total" | "round_trip_starting";
  /**
   * Number of stops (0 for nonstop); on a round trip, of the outbound journey. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  stops?: number | null;
  /**
   * Total travel time in minutes, layovers included; on a round trip, of the outbound journey. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  totalDurationMinutes?: number | null;
  /**
   * Typical CO2 emissions in kilograms for this route, to compare co2Kg against, or null when not shown.
   */
  typicalCo2Kg?: number | null;
  [extra: string]: unknown;
}

export interface GoogleFlightsSearchLeg {
  /**
   * IATA code of the airline flying this leg (e.g. BA).
   */
  airlineCode?: string | null;
  /**
   * IATA code of the arrival airport.
   */
  arrivalAirport: string;
  /**
   * Arrival date in YYYY-MM-DD, local time at the arrival airport.
   */
  arrivalDate?: string | null;
  /**
   * Arrival time as 24-hour HH:MM, local time at the arrival airport.
   */
  arrivalTime?: string | null;
  /**
   * IATA code of the departure airport.
   */
  departureAirport: string;
  /**
   * Departure date in YYYY-MM-DD, local time at the departure airport.
   */
  departureDate?: string | null;
  /**
   * Departure time as 24-hour HH:MM, local time at the departure airport.
   */
  departureTime?: string | null;
  /**
   * Flight time of this leg in minutes.
   */
  durationMinutes?: number | null;
  /**
   * Flight number without the airline code (e.g. 112).
   */
  flightNumber?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Flights Search (google_flights.search).
 */
export interface GoogleFlightsSearchData {
  /**
   * Itineraries in Google Flights' order for the chosen sort. On a round trip each one is an outbound option. Populated whenever the provider has data for the entity.
   */
  itineraries: GoogleFlightsSearchItinerarie[];
}

/**
 * Typed methods for the google_flights platform. Attached to the AnyAPI client as
 * `client.googleFlights`.
 */
export class GoogleFlightsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Flights Search
   *
   * Search Google Flights between two airports on a date and get about 20 itineraries: price, airline, stops, total duration, CO2 emissions against the typical figure for the route, and every leg's airline code, flight number, airports, local departure and arrival times and duration, as normalized JSON. Filter by cabin class, stops, airlines and maximum price. One-way searches return the total fare for all passengers. With a returnDate, each result is an outbound option priced at the cheapest round trip that starts with it (priceType round_trip_starting); the return flights are not included.
   *
   * Price: $0.001 per request.
   *
   * @example
   * const res = await client.googleFlights.search({ departureDate: "2026-12-06", destination: "LHR", origin: "JFK" });
   */
  search(
    input: GoogleFlightsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleFlightsSearchData>> {
    return this._core.run("google_flights.search", input, options);
  }
}
