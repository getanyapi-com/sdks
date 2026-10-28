// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Microsoft Copilot Search (bing.copilot).
 */
export interface BingCopilotInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
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
   * The question or prompt for Microsoft Copilot to answer using Bing web search.
   */
  prompt: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `answerMarkdown`, `inlineCitations` or `tables`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on an answer that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    | "additionalSections"
    | "answerMarkdown"
    | "caption"
    | "complete"
    | "domain"
    | "headers"
    | "inlineCitations"
    | "name"
    | "recommendations"
    | "researchSources"
    | "rows"
    | "tables"
    | "text"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface BingCopilotCitation {
  /**
   * Host of the source page as Copilot shows it, e.g. blog.salesflare.com. null means the source that answered cannot report it.
   */
  domain: string | null;
  /**
   * Excerpt of the source page Copilot shows. null when Copilot shows none or the source that answered cannot report it.
   */
  snippet: string | null;
  /**
   * Source page title, empty when Copilot shows none.
   */
  title: string;
  /**
   * Source page URL. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

export interface BingCopilotInlineCitation {
  /**
   * The sentence of the answer the citation supports.
   */
  text?: string;
  /**
   * Title of the cited source, empty when Copilot shows none.
   */
  title?: string;
  /**
   * URL of the cited source.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

export interface BingCopilotRecommendation {
  /**
   * Name of the recommended product, brand or option.
   */
  name: string;
  /**
   * The sentence of the answer that recommends it.
   */
  text?: string;
  [extra: string]: unknown;
}

export interface BingCopilotResearchSource {
  /**
   * Excerpt of the page Copilot shows, null when it shows none.
   */
  snippet?: string | null;
  /**
   * Title of the page, empty when Copilot shows none.
   */
  title?: string;
  /**
   * URL of the page.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

export interface BingCopilotTable {
  /**
   * Table caption, null when the table has none.
   */
  caption?: string | null;
  /**
   * Column headers.
   */
  headers?: string[];
  /**
   * Table rows, each a list of cell texts in column order.
   */
  rows?: string[][];
  [extra: string]: unknown;
}

/**
 * The `data` payload of Microsoft Copilot Search (bing.copilot).
 */
export interface BingCopilotData {
  /**
   * Text of answer sections Copilot rendered outside the main answer, such as a section heading or a card, kept so nothing it showed is lost. null means the source that answered cannot report them.
   */
  additionalSections: string[] | null;
  /**
   * Copilot's answer as text. Citation markers Copilot places inline can appear as numbers or source names next to the words they support. Populated whenever the provider has data for the entity.
   */
  answer: string;
  /**
   * Copilot's answer in Markdown, keeping its bold text, lists and tables. null means the source that answered returns plain text only; name answerMarkdown in requireFields to be served only by a source that returns it.
   */
  answerMarkdown: string | null;
  /**
   * Sources Copilot cites for the answer, in the order it lists them. Populated whenever the provider has data for the entity.
   */
  citations: BingCopilotCitation[];
  /**
   * Whether Copilot finished the answer. false means the answer may be cut short. null means the source that answered cannot report it, which is not the same as true.
   */
  complete: boolean | null;
  /**
   * Each claim in the answer that Copilot ties to a source, with the source it cites. null means the source that answered cannot report them.
   */
  inlineCitations: BingCopilotInlineCitation[] | null;
  /**
   * The prompt Copilot answered.
   */
  prompt: string;
  /**
   * Products, brands or options Copilot recommends in the answer, each with the sentence that recommends it. null means the source that answered cannot report them.
   */
  recommendations: BingCopilotRecommendation[] | null;
  /**
   * Pages Copilot searched while researching the answer. A different list from citations: a page here was read but is not necessarily cited. null means the source that answered cannot report them.
   */
  researchSources: BingCopilotResearchSource[] | null;
  /**
   * Tables in the answer, e.g. a comparison table. null means the source that answered cannot report them.
   */
  tables: BingCopilotTable[] | null;
}

/**
 * Input for Bing Search (bing.search).
 */
export interface BingSearchInput {
  /**
   * Optional, default true. When false, only the sources listed in `source` may serve; the request is refused with no charge if none of them can. When true, the listed sources are tried first and any other source may serve after them, at the normal price.
   * Default: true.
   */
  allowFallbacks?: boolean;
  /**
   * ISO-3166 alpha-2 country Bing searches from, e.g. US, GB, DE. Bing ranks and localizes results for that country and its main language. Common countries are served by every source; a country only some sources cover is served by those, and one no source covers is refused with no charge.
   * Default: US.
   */
  country?: string;
  /**
   * Optional. Source ids to skip for this request, taken from this endpoint's `lanes[].source.id`. The cheapest remaining source serves and the price is that of the dearest remaining source. An id that does not serve this endpoint, or that is also in `source`, is rejected as invalid input with no charge; skipping every source is rejected the same way.
   */
  ignoreSources?: string[];
  /**
   * Maximum number of organic results to return (1-10, default 10). Bing serves about 10 organic results per page, and some queries carry fewer.
   * Range: minimum 1, maximum 10.
   * Default: 10.
   */
  limit?: number;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Prefer sources whose typical response time (median over the trailing 30 days, as published on this endpoint's lane health) is under this many milliseconds; among those, the cheapest serves. This can raise your price: when the cheapest source misses the target, a faster and dearer one serves, and you are quoted and charged its price. If no source is that fast the request is still served, by whichever source offers the best speed for its price - it is never refused for being slow. Sources we have not timed are tried last. This is a preference, not a guarantee: the median describes past requests and is not a ceiling on this one, and it excludes any wait this request itself asks for. On a paginated walk it applies to the first page only: later pages stay with the source that page chose, at the price it was quoted.
   * Range: minimum 1.
   */
  preferLatencyUnderMs?: number;
  /**
   * The Bing search query.
   */
  query: string;
  /**
   * Optional; omit it and routing is unchanged, with the cheapest source serving. Name the output fields this request must be able to return, for example `siteName` or `publishedUtc`, and it is served only by a source that returns every one of them. Fields you do not name are still returned whenever the serving source has them. This can raise your price: when the cheapest source cannot return a named field, a dearer source serves, and you are quoted and charged its price. A named field can still be absent on a result that genuinely lacks it. Naming a combination that no single source returns together is refused as invalid input, with no charge.
   */
  requireFields?: (
    "answer" | "peopleAlsoAsk" | "publishedUtc" | "question" | "siteName"
  )[];
  /**
   * Optional. Source ids to prefer, in order, taken from this endpoint's `lanes[].source.id` in /catalog or /apis. Omit it and the cheapest source serves, with automatic failover. Listed sources are tried first in the order given, then the others, unless `allowFallbacks` is false. A single source with `allowFallbacks` false is served only by that source at its price, quoted and charged exactly, with no failover. The price is that of the dearest source that may serve. An id that does not serve this endpoint is rejected as invalid input with no charge; a listed source that is not serving right now is refused with no charge, so omit `source` to be served by another. On a paginated walk, later pages must include the source that served page one, or omit `source`.
   */
  source?: string[];
}

export interface BingSearchItem {
  /**
   * The URL as Bing displays it under the title, e.g. a host or a breadcrumb path. Its format differs by source. null when the source did not send one.
   */
  displayUrl: string | null;
  /**
   * Host of the result URL without a leading www., e.g. seriouseats.com.
   */
  domain: string | null;
  /**
   * 1-based rank of the result on the page. Populated whenever the provider has data for the entity.
   */
  position: number;
  /**
   * Page date Bing shows for the result. UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. null when Bing shows no date or the source that answered cannot report it.
   */
  publishedUtc: number | null;
  /**
   * Site name Bing shows beside the result, e.g. Serious Eats. null means the source that answered cannot report it.
   */
  siteName: string | null;
  /**
   * Text excerpt Bing shows under the result, often led by the page date. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  snippet?: string;
  /**
   * Result title as Bing shows it. Populated whenever the provider has data for the entity.
   */
  title: string;
  /**
   * Destination URL of the result. Populated whenever the provider has data for the entity.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

export interface BingSearchPeopleAlsoAsk {
  /**
   * The answer Bing shows under the question, null when it shows none.
   */
  answer?: string | null;
  /**
   * The question.
   */
  question: string;
  /**
   * Title of the page the answer is taken from, null when Bing names none.
   */
  title?: string | null;
  /**
   * URL of the page the answer is taken from, null when Bing links none.
   */
  url?: string | null;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Bing Search (bing.search).
 */
export interface BingSearchData {
  /**
   * Organic results in Bing's ranked order. Ads are not included. Populated whenever the provider has data for the entity.
   */
  items: BingSearchItem[];
  /**
   * Bing's People also ask questions with the answer it shows. An empty array means Bing showed none; null means the source that answered cannot report them.
   */
  peopleAlsoAsk: BingSearchPeopleAlsoAsk[] | null;
  /**
   * The query Bing searched.
   */
  query: string;
  /**
   * Bing's related searches for the query. An empty array means Bing showed none; null means the source that answered cannot report them.
   */
  relatedSearches: string[] | null;
}

/**
 * Typed methods for the bing platform. Attached to the AnyAPI client as
 * `client.bing`.
 */
export class BingNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Microsoft Copilot Search
   *
   * Ask Microsoft Copilot (the AI answer in Bing) a question and get its web-grounded answer with the sources it cites as clean JSON - for tracking how Copilot answers and which sites it cites.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.bing.copilot({ prompt: "what is the capital of australia and why" });
   */
  copilot(
    input: BingCopilotInput,
    options?: RequestOptions,
  ): Promise<RunResult<BingCopilotData>> {
    return this._core.run("bing.copilot", input, options);
  }

  /**
   * Bing Search
   *
   * Run a Bing web search and get the ranked organic results (title, URL, snippet, position, display URL, domain) plus Bing's related searches as clean JSON. Returns up to 10 results per call; pick the country Bing searches from.
   *
   * Price: $0.00085 per request.
   *
   * @example
   * const res = await client.bing.search({ query: "best espresso machines", country: "US", limit: 10 });
   */
  search(
    input: BingSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<BingSearchData>> {
    return this._core.run("bing.search", input, options);
  }
}
