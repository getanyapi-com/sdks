// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Technographics - TheirStack (technographics.theirstack).
 */
export interface TechnographicsTheirstackInput {
  /**
   * Only return companies that match this domain exactly. It accepts full urls (https://www.google.com/) and emails (john.polo@gmail.com).
   */
  companyDomain?: string;
  /**
   * Only return companies that match this TheirStack Company ID exactly. This ID is temporary and internal and will change in the future and become stable. Until then, it is only meant to be used internally by our UI (app.theirstack.com). For deduplication logic, use company_domain or company_linkedin_url instead.
   */
  companyId?: string;
  /**
   * Return companies that have mentioned any of these keywords (technologies or buying intent topics) in their jobs. Case sensitive. Pass slugs. Check out all keywords at GET /v0/catalog/keywords
   */
  companyKeywordSlugOr?: string[];
  /**
   * Return companies whose LinkedIn URL matches this URL exactly.
   */
  companyLinkedinUrl?: string;
  /**
   * Only return companies that match this name exactly, case-sensitively.
   */
  companyName?: string;
  /**
   * Only return companies that match these names exactly, case-sensitively. Deprecated, use the `company_name` filter instead.
   */
  companyNameOr?: string[];
  /**
   * Return companies that have mentioned any of these keywords (technologies or buying intent topics) in their jobs. Case sensitive. Pass slugs. Check out all keywords at GET /v0/catalog/keywords
   */
  companyTechnologySlugOr?: string[];
  /**
   * Returns technologies with any of these confidence values that the companies use them. Available values: "high", "medium", "low"
   */
  confidenceOr?: string[];
  /**
   * Only return technologies where the first time they were found was after or on this date. Format: "YYYY-MM-DD"
   */
  firstDateFoundGte?: string;
  /**
   * Only return technologies where the first time they were found was before or on this date. Format: "YYYY-MM-DD"
   */
  firstDateFoundLte?: string;
  /**
   * When enabled, calculates and returns `total_results` and `total_companies` fields in the response. WARNING: This significantly slows down responses as it requires reading the entire dataset. Recommended usage: enable only for the initial request to get totals, then disable for subsequent pagination requests.
   */
  includeTotalResults?: boolean;
  /**
   * Return companies that have mentioned any keyword from any of these categories in their jobs. Case sensitive. Pass slugs. Check out all keyword categories at GET /v0/catalog/keywords/categories
   */
  keywordCategorySlugOr?: string[];
  /**
   * Return companies that have mentioned any keyword from any of these parent categories in their jobs. Case sensitive. Pass slugs. Check out all keyword categories at GET /v0/catalog/keywords/categories
   */
  keywordParentCategorySlugOr?: string[];
  /**
   * Return companies that have mentioned any of these keywords (technologies or buying intent topics) in their jobs. Case sensitive. Pass slugs. Check out all keywords at GET /v0/catalog/keywords
   */
  keywordSlugOr?: string[];
  /**
   * Only return technologies where the last time they were found was after or on this date. Format: "YYYY-MM-DD"
   */
  lastDateFoundGte?: string;
  /**
   * Only return technologies where the last time they were found was before or on this date. Format: "YYYY-MM-DD"
   */
  lastDateFoundLte?: string;
  /**
   * Rows to return on this page, up to TheirStack's maximum of 500. Every row returned is billed.
   * Range: minimum 1, maximum 50.
   * Default: 25.
   */
  limit?: number;
  /**
   * Maximum number of jobs found by each company using a technology
   */
  maxJobs?: number;
  /**
   * The rank measures how common is a technology within its category. The technology most used among similar ones by a company will have a rank of 1, the second: 2, etc. This is useful to filter results by technology and get only results for the primary technology.
   */
  maxRank?: number;
  /**
   * Minimum number of jobs found by each company using a technology
   */
  minJobs?: number;
  /**
   * Minimum value of relative_occurrence_within_category for each technology. Higher values increase the probability that this technology is actually used by the company, because it means a higher percentage of mentions to technologies among this category are of this technology.
   */
  minRelativeOccurrence?: number;
  /**
   * Number of results to skip. Required for offset-based pagination.
   */
  offset?: number;
  /**
   * List of column objects. You can pass several columns to order by, in order of priority. Only `field` is required, `desc` is True by default.
   */
  orderBy?: string[];
  /**
   * Page number. Required when using page-based pagination.
   */
  page?: number;
  /**
   * Deprecated: use `keyword_category_slug_or` instead. Will return companies that have mentioned any keyword from any of these categories in their jobs. Case sensitive. Pass slugs.
   */
  technologyCategorySlugOr?: string[];
  /**
   * Deprecated: use `keyword_parent_category_slug_or` instead. Will return companies that have mentioned any keyword from any of these parent categories in their jobs. Case sensitive. Pass slugs.
   */
  technologyParentCategorySlugOr?: string[];
  /**
   * Deprecated: use `keyword_slug_or` instead. Will return companies that have mentioned any of these technologies in their jobs. Case sensitive. Pass slugs.
   */
  technologySlugOr?: string[];
}

export interface TechnographicsTheirstackTechnologie {
  /**
   * How sure TheirStack is that the company uses it: high, medium or low.
   */
  confidence: string;
  /**
   * UTC epoch timestamp in seconds (Unix time) the technology was first seen. Multiply by 1000 for a JS Date in milliseconds.
   */
  firstFoundUtc?: number;
  /**
   * Job posts mentioning the technology, all time.
   */
  jobs?: number;
  /**
   * Job posts mentioning it in the last 180 days.
   */
  jobsLast180Days?: number;
  /**
   * Job posts mentioning it in the last 30 days.
   */
  jobsLast30Days?: number;
  /**
   * Job posts mentioning it in the last 7 days.
   */
  jobsLast7Days?: number;
  /**
   * UTC epoch timestamp in seconds (Unix time) the technology was last seen. Multiply by 1000 for a JS Date in milliseconds.
   */
  lastFoundUtc?: number;
  /**
   * Rank of this technology among the company's technologies in the same category, 1 being the most used.
   */
  rankWithinCategory?: number;
  /**
   * Share of the company's mentions within this category that are of this technology, 0 to 1. A higher value means the company more likely really uses it.
   */
  relativeOccurrenceWithinCategory?: number;
  /**
   * The technology itself.
   */
  technology?: {
    /**
     * Category the technology sits in, e.g. Languages.
     */
    category?: string;
    /**
     * Slug for that category.
     */
    categorySlug?: string;
    /**
     * Technology logo URL.
     * Format: uri.
     */
    image?: string;
    /**
     * Technology name, e.g. Python.
     */
    name?: string;
    /**
     * Parent category, e.g. Programming Languages And Frameworks.
     */
    parentCategory?: string;
    /**
     * Slug for that parent category.
     */
    parentCategorySlug?: string;
    /**
     * Technology slug. This is the value the technology filters take.
     */
    slug?: string;
    /**
     * Smaller technology logo URL.
     * Format: uri.
     */
    thumbnail?: string;
    /**
     * Whether the row is a technology or a buying-intent keyword.
     */
    type?: string;
  };
  [extra: string]: unknown;
}

/**
 * The `data` payload of Technographics - TheirStack (technographics.theirstack).
 */
export interface TechnographicsTheirstackData {
  /**
   * Technologies detected for the company, most prominent first.
   */
  technologies: TechnographicsTheirstackTechnologie[];
  /**
   * Distinct companies matching the filters. TheirStack computes it only when you send includeTotalResults.
   */
  totalCompanies?: number;
  /**
   * Rows matching the filters across all pages. TheirStack computes it only when you send includeTotalResults, and omits it otherwise.
   */
  totalResults?: number;
  /**
   * Companies TheirStack withheld because the plan's result ceiling was reached.
   */
  truncatedCompanies?: number;
  /**
   * Rows TheirStack withheld because the plan's result ceiling was reached.
   */
  truncatedResults?: number;
}

/**
 * Typed methods for the technographics platform. Attached to the AnyAPI client as
 * `client.technographics`.
 */
export class TechnographicsNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Technographics - TheirStack
   *
   * Read the technology stack TheirStack detects for a company from its job posts, with how many posts mention each technology, when it was first and last seen, and how dominant it is within its category. Billed per technology returned.
   *
   * Price: $0 per request plus $0.1992 per result (maximum $9.96).
   *
   * @example
   * const res = await client.technographics.theirstack({ companyDomain: "posthog.com", limit: 1 });
   */
  theirstack(
    input: TechnographicsTheirstackInput,
    options?: RequestOptions,
  ): Promise<RunResult<TechnographicsTheirstackData>> {
    return this._core.run("technographics.theirstack", input, options);
  }
}
