// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Company Research (company.research).
 */
export interface CompanyResearchInput {
  /**
   * Company website domain, for example stripe.com. Mutually exclusive with name and email.
   */
  domain?: string;
  /**
   * Work email address whose domain identifies the company. Free and disposable providers are rejected. Mutually exclusive with domain and name.
   */
  email?: string;
  /**
   * How old a cached part may be and still be served. 0 always forces a fresh run. Defaults to 7 days when omitted.
   * Range: minimum 0.
   * Default: 7.
   */
  maxAgeDays?: number;
  /**
   * Company name, resolved to a domain before the run starts. Mutually exclusive with domain and email.
   */
  name?: string;
}

/**
 * The `data` payload of Company Research (company.research).
 */
export interface CompanyResearchData {
  /**
   * Companies the run admitted as rivals or adjacent players, each grounded in a page it read.
   */
  competitors?: {
    /**
     * The admitted competitor set.
     */
    competitors: unknown;
    /**
     * One-line positioning read across the admitted competitors.
     */
    positioningSummary: unknown;
  };
  /**
   * Company facts reconciled across enrichment providers. A value backed by two agreeing providers is reported as verified.
   */
  firmographics?: {
    /**
     * Year the company was founded. 0 when no provider supplied one.
     */
    founded: unknown;
    /**
     * Disclosed funding, reconciled across providers.
     */
    funding: unknown;
    /**
     * Employee count. 0 when no provider supplied one.
     */
    headcount: unknown;
    /**
     * Leadership records, masked to a first name and a last initial.
     */
    keyPeople: unknown;
    /**
     * Technologies detected at the company.
     */
    techStack: unknown;
  };
  /**
   * The company's published social accounts and the public places it is discussed.
   */
  presence?: {
    /**
     * One entry per platform the company publishes on.
     */
    accounts: unknown;
    /**
     * Public communities where matching company discussion appeared.
     */
    communities: unknown;
  };
  /**
   * What the company does, synthesized from its own site, plus the clipped crawl corpus the other crawl-derived parts reuse.
   */
  profile?: {
    /**
     * Audiences the company addresses on its site.
     */
    audiences: unknown;
    basics: unknown;
    /**
     * Other names the company trades under.
     */
    brandAliases: unknown;
    corpus: unknown;
    /**
     * Plain description of what the company sells.
     */
    description: unknown;
    /**
     * Who or what the company states it is not for.
     */
    exclusions: unknown;
    /**
     * How the product or service works in practice.
     */
    howItWorks: unknown;
    /**
     * Buyer segments synthesized from the crawl.
     */
    icp: unknown;
    /**
     * How the company charges, as its own pages describe it.
     */
    pricingModel: unknown;
    /**
     * Problems the company says it solves.
     */
    problems: unknown;
    /**
     * Markets, industries, or regions the company targets.
     */
    targetMarkets: unknown;
    /**
     * Concrete jobs customers hire the company for.
     */
    useCases: unknown;
    /**
     * The value the company promises its buyer.
     */
    valueProp: unknown;
  };
  /**
   * What the company is doing right now: the roles it is hiring for and the stories written about it.
   */
  signal?: {
    /**
     * Recent stories, deduplicated by article URL.
     */
    articles: unknown;
    /**
     * Current job postings, deduplicated by posting URL.
     */
    openRoles: unknown;
  };
  /**
   * The company's writing voice, inferred from the same first-party crawl.
   */
  voice?: {
    /**
     * Taglines copied verbatim from the crawl. A tagline appears here only when its exact text was found on a crawled page.
     */
    taglines: unknown;
    /**
     * One concise description of how the company writes.
     */
    tone: unknown;
    /**
     * Words and phrases the company favors, as they appear in the crawl.
     */
    vocabulary: unknown;
  };
  [extra: string]: unknown;
}

/**
 * Typed methods for the company platform. Attached to the AnyAPI client as
 * `client.company`.
 */
export class CompanyNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Company Research
   *
   * Research a company from one domain, name, or email and return a cross-checked dossier: what it does, how it talks, who it competes with, its firmographics, its hiring and news signal, and its social presence.
   *
   * Price: $0.44338 per request.
   *
   * @example
   * const res = await client.company.research({ domain: "stripe.com", maxAgeDays: 7 });
   */
  research(
    input: CompanyResearchInput,
    options?: RequestOptions,
  ): Promise<RunResult<CompanyResearchData>> {
    return this._core.run("company.research", input, options);
  }
}
