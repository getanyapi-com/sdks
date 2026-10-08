// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Google Hotel Details (google_hotels.details).
 */
export interface GoogleHotelsDetailsInput {
  /**
   * Number of adult guests (default 2).
   * Range: minimum 1.
   * Default: 2.
   */
  adults?: number;
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Check-in date in YYYY-MM-DD format (e.g. 2027-04-13). Today or later.
   * Format: date.
   */
  checkIn: string;
  /**
   * Check-out date in YYYY-MM-DD format (e.g. 2027-04-15). After the check-in date.
   * Format: date.
   */
  checkOut: string;
  /**
   * Age of each child guest, one entry per child (e.g. [5, 8] for two children aged 5 and 8). Omit it when no children are staying.
   */
  childrenAges?: number[];
  /**
   * Two-letter lowercase ISO 3166-1 country code of the destination (e.g. us, pt, jp). It must be the country the hotels are in: results are searched from that country.
   * One of: ad, ae, af, ag, al, am, ao, aq, ar, as, at, au, az, ba, bb, bd, be, bf, bg, bh, bi, bj, bn, bo, bq, br, bs, bt, bw, bz, ca, cc, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cv, cw, cx, cy, cz, de, dj, dk, dm, do, dz, ec, ee, eg, er, es, et, fi, fj, fm, fr, ga, gb, gd, ge, gg, gh, gm, gn, gq, gr, gs, gt, gu, gw, gy, hm, hn, hr, ht, hu, id, ie, il, im, in, iq, is, it, je, jm, jo, jp, ke, kg, kh, ki, km, kn, kr, kw, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly, ma, mc, md, me, mf, mg, mh, mk, ml, mm, mn, mp, mr, mt, mu, mv, mw, mx, my, mz, na, nc, ne, nf, ng, ni, nl, no, np, nr, nu, nz, om, pa, pe, pf, pg, ph, pk, pl, pm, pn, pt, pw, py, qa, ro, rs, rw, sa, sb, sc, se, sg, sh, si, sk, sl, sm, sn, so, sr, st, sv, sx, sz, td, tf, tg, th, tj, tk, tl, tm, tn, to, tr, tt, tv, tz, ua, ug, um, us, uy, uz, va, vc, ve, vn, vu, wf, ws, ye, za, zm, zw.
   */
  country:
    | "ad"
    | "ae"
    | "af"
    | "ag"
    | "al"
    | "am"
    | "ao"
    | "aq"
    | "ar"
    | "as"
    | "at"
    | "au"
    | "az"
    | "ba"
    | "bb"
    | "bd"
    | "be"
    | "bf"
    | "bg"
    | "bh"
    | "bi"
    | "bj"
    | "bn"
    | "bo"
    | "bq"
    | "br"
    | "bs"
    | "bt"
    | "bw"
    | "bz"
    | "ca"
    | "cc"
    | "cd"
    | "cf"
    | "cg"
    | "ch"
    | "ci"
    | "ck"
    | "cl"
    | "cm"
    | "cn"
    | "co"
    | "cr"
    | "cv"
    | "cw"
    | "cx"
    | "cy"
    | "cz"
    | "de"
    | "dj"
    | "dk"
    | "dm"
    | "do"
    | "dz"
    | "ec"
    | "ee"
    | "eg"
    | "er"
    | "es"
    | "et"
    | "fi"
    | "fj"
    | "fm"
    | "fr"
    | "ga"
    | "gb"
    | "gd"
    | "ge"
    | "gg"
    | "gh"
    | "gm"
    | "gn"
    | "gq"
    | "gr"
    | "gs"
    | "gt"
    | "gu"
    | "gw"
    | "gy"
    | "hm"
    | "hn"
    | "hr"
    | "ht"
    | "hu"
    | "id"
    | "ie"
    | "il"
    | "im"
    | "in"
    | "iq"
    | "is"
    | "it"
    | "je"
    | "jm"
    | "jo"
    | "jp"
    | "ke"
    | "kg"
    | "kh"
    | "ki"
    | "km"
    | "kn"
    | "kr"
    | "kw"
    | "kz"
    | "la"
    | "lb"
    | "lc"
    | "li"
    | "lk"
    | "lr"
    | "ls"
    | "lt"
    | "lu"
    | "lv"
    | "ly"
    | "ma"
    | "mc"
    | "md"
    | "me"
    | "mf"
    | "mg"
    | "mh"
    | "mk"
    | "ml"
    | "mm"
    | "mn"
    | "mp"
    | "mr"
    | "mt"
    | "mu"
    | "mv"
    | "mw"
    | "mx"
    | "my"
    | "mz"
    | "na"
    | "nc"
    | "ne"
    | "nf"
    | "ng"
    | "ni"
    | "nl"
    | "no"
    | "np"
    | "nr"
    | "nu"
    | "nz"
    | "om"
    | "pa"
    | "pe"
    | "pf"
    | "pg"
    | "ph"
    | "pk"
    | "pl"
    | "pm"
    | "pn"
    | "pt"
    | "pw"
    | "py"
    | "qa"
    | "ro"
    | "rs"
    | "rw"
    | "sa"
    | "sb"
    | "sc"
    | "se"
    | "sg"
    | "sh"
    | "si"
    | "sk"
    | "sl"
    | "sm"
    | "sn"
    | "so"
    | "sr"
    | "st"
    | "sv"
    | "sx"
    | "sz"
    | "td"
    | "tf"
    | "tg"
    | "th"
    | "tj"
    | "tk"
    | "tl"
    | "tm"
    | "tn"
    | "to"
    | "tr"
    | "tt"
    | "tv"
    | "tz"
    | "ua"
    | "ug"
    | "um"
    | "us"
    | "uy"
    | "uz"
    | "va"
    | "vc"
    | "ve"
    | "vn"
    | "vu"
    | "wf"
    | "ws"
    | "ye"
    | "za"
    | "zm"
    | "zw";
  /**
   * ISO 4217 currency code for prices (e.g. USD, EUR, JPY; default USD).
   * Default: USD.
   */
  currency?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Google Hotels property ID of the hotel, the propertyToken google_hotels.search returns for it.
   */
  propertyToken: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `stars` or `images`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a hotel that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: ("images" | "stars" | "totalPrice")[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface GoogleHotelsDetailsAmenitie {
  /**
   * Whether the hotel offers it. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  available?: boolean | null;
  /**
   * Amenity name (e.g. Wi-Fi, Pool).
   */
  name: string;
  [extra: string]: unknown;
}

export interface GoogleHotelsDetailsPrice {
  /**
   * Nightly price on this site, in the response currency. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  pricePerNight?: number | null;
  /**
   * Booking site name (e.g. Booking.com).
   */
  site: string;
  /**
   * Total price for the stay on this site, or null when unknown.
   */
  totalPrice?: number | null;
  /**
   * Booking link for this offer. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Hotel Details (google_hotels.details).
 */
export interface GoogleHotelsDetailsData {
  /**
   * Street address. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  address?: string | null;
  /**
   * Amenities Google lists for the hotel, each with whether the hotel offers it. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  amenities?: GoogleHotelsDetailsAmenitie[];
  /**
   * Earliest check-in time, 24-hour HH:MM local time. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  checkInTime?: string | null;
  /**
   * Latest check-out time, 24-hour HH:MM local time. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  checkOutTime?: string | null;
  /**
   * ISO 4217 currency code every price in this response is in. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string;
  /**
   * Preview photo URLs of the hotel, or null when unknown.
   */
  images?: string[] | null;
  /**
   * Latitude of the hotel. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  latitude?: number | null;
  /**
   * Longitude of the hotel. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  longitude?: number | null;
  /**
   * Hotel name.
   */
  name: string;
  /**
   * Phone number as published. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  phone?: string | null;
  /**
   * Lowest nightly price for the requested dates and guests, in the response currency, or null when no price is offered. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  pricePerNight?: number | null;
  /**
   * Nightly prices offered by each booking site for the requested dates. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  prices?: GoogleHotelsDetailsPrice[];
  /**
   * Google Hotels property ID.
   */
  propertyToken: string;
  /**
   * Average guest rating out of 5, or null when the hotel has no ratings. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number | null;
  /**
   * Number of guest reviews. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  reviewsCount?: number | null;
  /**
   * Hotel star class (1-5), or null when unknown.
   */
  stars?: number | null;
  /**
   * Lowest total price for the whole stay, in the response currency, or null when unknown.
   */
  totalPrice?: number | null;
  /**
   * The hotel's own website. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  website?: string | null;
}

/**
 * Input for Google Hotels Search (google_hotels.search).
 */
export interface GoogleHotelsSearchInput {
  /**
   * Number of adult guests (default 2).
   * Range: minimum 1.
   * Default: 2.
   */
  adults?: number;
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Check-in date in YYYY-MM-DD format (e.g. 2027-04-13). Today or later.
   * Format: date.
   */
  checkIn: string;
  /**
   * Check-out date in YYYY-MM-DD format (e.g. 2027-04-15). After the check-in date.
   * Format: date.
   */
  checkOut: string;
  /**
   * Age of each child guest, one entry per child (e.g. [5, 8] for two children aged 5 and 8). Omit it when no children are staying.
   */
  childrenAges?: number[];
  /**
   * Two-letter lowercase ISO 3166-1 country code of the destination (e.g. us, pt, jp). It must be the country the hotels are in: results are searched from that country.
   * One of: ad, ae, af, ag, al, am, ao, aq, ar, as, at, au, az, ba, bb, bd, be, bf, bg, bh, bi, bj, bn, bo, bq, br, bs, bt, bw, bz, ca, cc, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cv, cw, cx, cy, cz, de, dj, dk, dm, do, dz, ec, ee, eg, er, es, et, fi, fj, fm, fr, ga, gb, gd, ge, gg, gh, gm, gn, gq, gr, gs, gt, gu, gw, gy, hm, hn, hr, ht, hu, id, ie, il, im, in, iq, is, it, je, jm, jo, jp, ke, kg, kh, ki, km, kn, kr, kw, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly, ma, mc, md, me, mf, mg, mh, mk, ml, mm, mn, mp, mr, mt, mu, mv, mw, mx, my, mz, na, nc, ne, nf, ng, ni, nl, no, np, nr, nu, nz, om, pa, pe, pf, pg, ph, pk, pl, pm, pn, pt, pw, py, qa, ro, rs, rw, sa, sb, sc, se, sg, sh, si, sk, sl, sm, sn, so, sr, st, sv, sx, sz, td, tf, tg, th, tj, tk, tl, tm, tn, to, tr, tt, tv, tz, ua, ug, um, us, uy, uz, va, vc, ve, vn, vu, wf, ws, ye, za, zm, zw.
   */
  country:
    | "ad"
    | "ae"
    | "af"
    | "ag"
    | "al"
    | "am"
    | "ao"
    | "aq"
    | "ar"
    | "as"
    | "at"
    | "au"
    | "az"
    | "ba"
    | "bb"
    | "bd"
    | "be"
    | "bf"
    | "bg"
    | "bh"
    | "bi"
    | "bj"
    | "bn"
    | "bo"
    | "bq"
    | "br"
    | "bs"
    | "bt"
    | "bw"
    | "bz"
    | "ca"
    | "cc"
    | "cd"
    | "cf"
    | "cg"
    | "ch"
    | "ci"
    | "ck"
    | "cl"
    | "cm"
    | "cn"
    | "co"
    | "cr"
    | "cv"
    | "cw"
    | "cx"
    | "cy"
    | "cz"
    | "de"
    | "dj"
    | "dk"
    | "dm"
    | "do"
    | "dz"
    | "ec"
    | "ee"
    | "eg"
    | "er"
    | "es"
    | "et"
    | "fi"
    | "fj"
    | "fm"
    | "fr"
    | "ga"
    | "gb"
    | "gd"
    | "ge"
    | "gg"
    | "gh"
    | "gm"
    | "gn"
    | "gq"
    | "gr"
    | "gs"
    | "gt"
    | "gu"
    | "gw"
    | "gy"
    | "hm"
    | "hn"
    | "hr"
    | "ht"
    | "hu"
    | "id"
    | "ie"
    | "il"
    | "im"
    | "in"
    | "iq"
    | "is"
    | "it"
    | "je"
    | "jm"
    | "jo"
    | "jp"
    | "ke"
    | "kg"
    | "kh"
    | "ki"
    | "km"
    | "kn"
    | "kr"
    | "kw"
    | "kz"
    | "la"
    | "lb"
    | "lc"
    | "li"
    | "lk"
    | "lr"
    | "ls"
    | "lt"
    | "lu"
    | "lv"
    | "ly"
    | "ma"
    | "mc"
    | "md"
    | "me"
    | "mf"
    | "mg"
    | "mh"
    | "mk"
    | "ml"
    | "mm"
    | "mn"
    | "mp"
    | "mr"
    | "mt"
    | "mu"
    | "mv"
    | "mw"
    | "mx"
    | "my"
    | "mz"
    | "na"
    | "nc"
    | "ne"
    | "nf"
    | "ng"
    | "ni"
    | "nl"
    | "no"
    | "np"
    | "nr"
    | "nu"
    | "nz"
    | "om"
    | "pa"
    | "pe"
    | "pf"
    | "pg"
    | "ph"
    | "pk"
    | "pl"
    | "pm"
    | "pn"
    | "pt"
    | "pw"
    | "py"
    | "qa"
    | "ro"
    | "rs"
    | "rw"
    | "sa"
    | "sb"
    | "sc"
    | "se"
    | "sg"
    | "sh"
    | "si"
    | "sk"
    | "sl"
    | "sm"
    | "sn"
    | "so"
    | "sr"
    | "st"
    | "sv"
    | "sx"
    | "sz"
    | "td"
    | "tf"
    | "tg"
    | "th"
    | "tj"
    | "tk"
    | "tl"
    | "tm"
    | "tn"
    | "to"
    | "tr"
    | "tt"
    | "tv"
    | "tz"
    | "ua"
    | "ug"
    | "um"
    | "us"
    | "uy"
    | "uz"
    | "va"
    | "vc"
    | "ve"
    | "vn"
    | "vu"
    | "wf"
    | "ws"
    | "ye"
    | "za"
    | "zm"
    | "zw";
  /**
   * ISO 4217 currency code for prices (e.g. USD, EUR, JPY; default USD).
   * Default: USD.
   */
  currency?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * What to search for, usually a destination or landmark (e.g. hotels near times square new york).
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `totalPrice` or `amenities`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a hotel that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: ("amenities" | "description" | "totalPrice")[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface GoogleHotelsSearchHotel {
  /**
   * Highlighted amenities (e.g. Free Wi-Fi, Parking), or null when unknown.
   */
  amenities?: string[] | null;
  /**
   * Short description of the hotel, or null when unknown.
   */
  description?: string | null;
  /**
   * Preview photo URLs of the hotel.
   */
  images?: string[] | null;
  /**
   * Latitude of the hotel. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  latitude?: number | null;
  /**
   * Longitude of the hotel. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  longitude?: number | null;
  /**
   * Hotel name.
   */
  name: string;
  /**
   * Lowest nightly price for the requested dates and guests, in the response currency, or null when no price is offered. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  pricePerNight?: number | null;
  /**
   * Google Hotels property ID. Pass it to google_hotels.details for this hotel's full record.
   */
  propertyToken: string;
  /**
   * Average guest rating out of 5, or null when the hotel has no ratings. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  rating?: number | null;
  /**
   * Number of guest reviews. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  reviewsCount?: number | null;
  /**
   * Hotel star class (1-5), or null when the property has none.
   */
  stars?: number | null;
  /**
   * Lowest total price for the whole stay, in the response currency, or null when unknown.
   */
  totalPrice?: number | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Google Hotels Search (google_hotels.search).
 */
export interface GoogleHotelsSearchData {
  /**
   * ISO 4217 currency code every price in this response is in. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  currency?: string;
  /**
   * Hotels matching the search, in Google's order. Populated whenever the provider has data for the entity.
   */
  hotels: GoogleHotelsSearchHotel[];
}

/**
 * Typed methods for the google_hotels platform. Attached to the AnyAPI client as
 * `client.googleHotels`.
 */
export class GoogleHotelsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Google Hotel Details
   *
   * Get one hotel from Google Hotels by its property ID: address, phone, website, rating, nightly price, prices from each booking site, amenities and check-in times as normalized JSON.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.googleHotels.details({ checkIn: "2026-11-07", checkOut: "2026-11-09", country: "us", propertyToken: "ChcImaG28Zbom8uuARoKL20vMDNncTd2NBAB" });
   */
  details(
    input: GoogleHotelsDetailsInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleHotelsDetailsData>> {
    return this._core.run("google_hotels.details", input, options);
  }

  /**
   * Google Hotels Search
   *
   * Search Google Hotels by destination and dates and get hotels with their Google property ID, nightly price, rating, review count, coordinates, star class and photos as normalized JSON.
   *
   * Price: $0.0015 per request.
   *
   * @example
   * const res = await client.googleHotels.search({ checkIn: "2026-11-07", checkOut: "2026-11-09", country: "us", query: "hotels near times square new york" });
   */
  search(
    input: GoogleHotelsSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<GoogleHotelsSearchData>> {
    return this._core.run("google_hotels.search", input, options);
  }
}
