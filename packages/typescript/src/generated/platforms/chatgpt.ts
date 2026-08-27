// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for ChatGPT Search (chatgpt.search).
 */
export interface ChatgptSearchInput {
  /**
   * ISO-3166 alpha-2 country to ask from, e.g. US, GB, DE. ChatGPT localizes both the pages it retrieves and the answer it writes, so this is the difference between what a US buyer and a UK buyer are told.
   * Default: US.
   */
  country?: string;
  /**
   * Question or research prompt for ChatGPT to answer using web search.
   */
  prompt: string;
  /**
   * Whether to insist ChatGPT browses the web. force instructs it to search and is the default; auto lets ChatGPT decide, which is cheaper and answers from memory roughly half the time. Check webSearchTriggered for what actually happened - an answer written without a search is not web-grounded.
   * One of: force, auto.
   * Default: force.
   */
  webSearch?: "force" | "auto";
}

export interface ChatgptSearchCitation {
  /**
   * Source page title when supplied by the search engine.
   */
  title: string;
  /**
   * Source page URL.
   * Format: uri.
   */
  url: string;
  [extra: string]: unknown;
}

export interface ChatgptSearchSearchResult {
  /**
   * Whether this retrieved page made it into citations. false means ChatGPT read the page and chose not to cite it, which is a different and more actionable fact than the page being absent.
   */
  cited?: boolean;
  /**
   * Title of the retrieved page, empty when the source did not send one.
   */
  title?: string;
  /**
   * Canonical URL of the retrieved page, tracking parameters stripped.
   * Format: uri.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of ChatGPT Search (chatgpt.search).
 */
export interface ChatgptSearchData {
  /**
   * The web-grounded answer as text. Populated whenever the provider has data for the entity.
   */
  answer: string;
  /**
   * The answer in Markdown when the engine returns a Markdown rendering, otherwise the same text as answer. Populated whenever the provider has data for the entity.
   */
  answerMarkdown: string;
  /**
   * Sources cited by the answer. Populated whenever the provider has data for the entity.
   */
  citations: ChatgptSearchCitation[];
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. null means the source that answered does not report when it answered.
   */
  createdUtc?: number | null;
  /**
   * The ChatGPT model that produced the answer. null means the source that answered does not report it, which is not the same as an unknown model.
   */
  model?: string | null;
  /**
   * The prompt answered by ChatGPT.
   */
  prompt: string;
  /**
   * The web search queries ChatGPT ran to ground its answer. null means the source that answered cannot report them; an empty array means it searched with none recorded.
   */
  searchQueries?: string[] | null;
  /**
   * Pages ChatGPT retrieved while answering. A SUPERSET of citations: a page can be read and not cited. null means the source that answered cannot report them.
   */
  searchResults?: ChatgptSearchSearchResult[] | null;
  /**
   * Whether ChatGPT actually ran a web search before answering. ChatGPT decides this per session, and an answer written without one is not web-grounded. null means the source that answered cannot report it, which is not the same as false.
   */
  webSearchTriggered?: boolean | null;
}

/**
 * Typed methods for the chatgpt platform. Attached to the AnyAPI client as
 * `client.chatgpt`.
 */
export class ChatgptNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * ChatGPT Search
   *
   * Ask ChatGPT a web-grounded question and receive an answer with source citations. ChatGPT composes each answer per request, so the same prompt returns different wording and a different source set.
   *
   * Price: $0.0018 per request.
   *
   * @example
   * const res = await client.chatgpt.search({ prompt: "What is AnyAPI at getanyapi.com, and what does it offer?" });
   */
  search(
    input: ChatgptSearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<ChatgptSearchData>> {
    return this._core.run("chatgpt.search", input, options);
  }
}
