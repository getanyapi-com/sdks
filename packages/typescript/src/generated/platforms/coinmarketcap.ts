// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for CoinMarketCap Listings (coinmarketcap.listings).
 */
export interface CoinmarketcapListingsInput {
  /**
   * Optional, default true. We recommend leaving it out. Setting it to false is experimental (its behavior may change) and ties the request to the sources listed in `source`: only they may serve, the request is refused with no charge if none of them can, and no other source rescues it when they fail. To control cost, set `max_cost_usd` instead: the REST query parameter or MCP `run_api` argument, on requests paid from your AnyAPI wallet. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the remaining sources. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of results to return (1-25, default 25). You are billed per result returned, so a lower limit costs less.
   * Range: minimum 1, maximum 25.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * Optional and experimental: its behavior may change. We recommend leaving it out and letting automatic routing choose: routing serves the cheapest source, uses cheaper sources as they are added, and fails over to another source when one fails, so your requests are not tied to the uptime of one source. To control cost, set a price ceiling instead: on requests paid from your AnyAPI wallet, the `max_cost_usd` REST query parameter or MCP `run_api` argument skips any source that would charge more, and refuses the request with no charge if none is left. Avoid pinning a single source, especially with `allowFallbacks` false: when that source has an outage your requests fail while others are served. If you send it, list source ids from this endpoint's `lanes[].source.id` in /catalog or /apis; they are tried first in the order given, then the others, unless `allowFallbacks` is false. You are charged for the source that serves, plus any source tried before it that charged for its attempt, and never more than the most this endpoint can cost with the sources that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface CoinmarketcapListingsItem {
  /**
   * Whether CoinMarketCap still tracks the coin as active.
   */
  active?: boolean;
  /**
   * All-time high price in USD.
   */
  ath?: number;
  /**
   * All-time low price in USD.
   */
  atl?: number;
  /**
   * Circulating supply (coin count).
   */
  circulatingSupply?: number;
  /**
   * When CoinMarketCap first listed the coin. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds.
   */
  createdUtc?: number;
  /**
   * Share of total crypto market capitalization, in percent.
   */
  dominance?: number;
  /**
   * Fully diluted market capitalization in USD (total supply at the current price).
   */
  fullyDilutedMarketCap?: number;
  /**
   * 24h high price in USD.
   */
  high24h?: number;
  /**
   * CoinMarketCap identifier. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  lastUpdated?: string;
  /**
   * 24h low price in USD.
   */
  low24h?: number;
  /**
   * Market capitalization in USD.
   */
  marketCap?: number;
  /**
   * Number of exchange market pairs trading this coin.
   */
  marketPairCount?: number;
  /**
   * Populated whenever the provider has data for the entity.
   */
  name: string;
  /**
   * Price change over the last hour, in percent.
   */
  percentChange1h?: number;
  /**
   * Price change over the last year, in percent.
   */
  percentChange1y?: number;
  /**
   * Price change over the last 24 hours, in percent.
   */
  percentChange24h?: number;
  /**
   * Price change over the last 30 days, in percent.
   */
  percentChange30d?: number;
  /**
   * Price change over the last 60 days, in percent.
   */
  percentChange60d?: number;
  /**
   * Price change over the last 7 days, in percent.
   */
  percentChange7d?: number;
  /**
   * Price change over the last 90 days, in percent.
   */
  percentChange90d?: number;
  /**
   * Price change year to date, in percent.
   */
  percentChangeYtd?: number;
  /**
   * Latest price in USD.
   */
  price?: number;
  /**
   * Circulating supply as reported by the project itself (coin count).
   */
  selfReportedCirculatingSupply?: number;
  /**
   * Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  slug?: string;
  /**
   * Populated whenever the provider has data for the entity.
   */
  symbol: string;
  /**
   * Total supply (coin count).
   */
  totalSupply?: number;
  /**
   * 24h trading volume divided by market capitalization.
   */
  turnover?: number;
  /**
   * 24h trading volume in USD.
   */
  volume24h?: number;
  /**
   * 30-day trading volume in USD.
   */
  volume30d?: number;
  /**
   * 7-day trading volume in USD.
   */
  volume7d?: number;
  [extra: string]: unknown;
}

/**
 * The `data` payload of CoinMarketCap Listings (coinmarketcap.listings).
 */
export interface CoinmarketcapListingsData {
  /**
   * Cryptocurrency listing records: rank, name, symbol, price, market cap, trading volume, and 24h price change. Populated whenever the provider has data for the entity.
   */
  items: CoinmarketcapListingsItem[];
}

/**
 * Typed methods for the coinmarketcap platform. Attached to the AnyAPI client as
 * `client.coinmarketcap`.
 */
export class CoinmarketcapNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * CoinMarketCap Listings
   *
   * Get the current top cryptocurrencies from CoinMarketCap (rank, price, market cap, volume, and 24h change) as normalized JSON.
   *
   * Price: $0 per request plus $0.00198 per result (maximum $0.0495).
   *
   * @example
   * const res = await client.coinmarketcap.listings({ limit: 5 });
   */
  listings(
    input: CoinmarketcapListingsInput,
    options?: RequestOptions,
  ): Promise<RunResult<CoinmarketcapListingsData>> {
    return this._core.run("coinmarketcap.listings", input, options);
  }
}
