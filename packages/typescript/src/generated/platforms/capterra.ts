// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for Capterra Reviews (capterra.reviews).
 */
export interface CapterraReviewsInput {
  /**
   * Maximum number of reviews to return. The minimum is 10 because the cheapest Capterra review source will not serve a smaller page. You are billed per returned result, so a lower limit costs less.
   * Range: minimum 10, maximum 100.
   * Default: 25.
   */
  limit?: number;
  /**
   * Capterra product URL, for example https://www.capterra.com/p/135003/Slack/. Capterra identifies a product by both its numeric id and its slug, so the full URL is required.
   */
  product: string;
  /**
   * Sort order for the returned reviews: newest first, most complete first, or highest or lowest rated first.
   * One of: recent, complete, highest, lowest.
   * Default: recent.
   */
  sortBy?: "recent" | "complete" | "highest" | "lowest";
}

export interface CapterraReviewsItem {
  /**
   * Products the reviewer evaluated before choosing this one.
   */
  alternativesConsidered?: CapterraReviewsAlternativesConsidered[];
  /**
   * Whether the reviewer chose to stay anonymous.
   */
  anonymous?: boolean;
  /**
   * Reviewer's display name. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  author?: string;
  /**
   * Employee-count band of the reviewer's company, for example 11-50 employees. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorCompanySize?: string;
  /**
   * Industry of the reviewer's company. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorIndustry?: string;
  /**
   * Reviewer's job title. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  authorTitle?: string;
  /**
   * The reviewer's stated reason for choosing this product over the alternatives.
   */
  chosenReasons?: string;
  /**
   * The reviewer's overall comments about using the product. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  comments?: string;
  /**
   * What the reviewer disliked about the product. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  cons?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * Reviewer's customer support rating, on a 1 to 5 scale. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  customerSupportRating?: number;
  /**
   * Reviewer's ease of use rating, on a 1 to 5 scale. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  easeOfUseRating?: number;
  /**
   * Reviewer's functionality rating, on a 1 to 5 scale. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  functionalityRating?: number;
  /**
   * Capterra identifier for the review. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * Whether the reviewer received an incentive for the review. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  incentivized?: boolean;
  /**
   * The vendor's public reply to the review.
   */
  ownerResponse?: string;
  /**
   * Canonical Capterra URL for the reviewed product. Capterra has no per-review permalink; anchor to a review with productUrl, then # and the review id. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  productUrl?: string;
  /**
   * What the reviewer liked about the product. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  pros?: string;
  /**
   * Overall star rating the reviewer gave, on a 1 to 5 scale. Populated whenever the provider has data for the entity.
   */
  rating: number;
  /**
   * How likely the reviewer is to recommend the product, on a 0 to 10 scale. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  recommendationScore?: number;
  /**
   * Capterra's explanation of how the review was collected and whether any incentive was offered.
   */
  reviewSource?: string;
  /**
   * Which site in Capterra's review network the review was written on, for example Capterra, GetApp, or Software Advice. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  sourceSite?: string;
  /**
   * Products the reviewer switched away from to this one.
   */
  switchedFrom?: CapterraReviewsSwitchedFrom[];
  /**
   * The reviewer's stated reason for switching to this product.
   */
  switchingReasons?: string;
  /**
   * How long the reviewer has used the product, for example 2+ years. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  timeUsedProduct?: string;
  /**
   * Headline the reviewer gave the review. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  title?: string;
  /**
   * Whether Capterra validated the reviewer's identity. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  validated?: boolean;
  /**
   * Reviewer's value for money rating, on a 1 to 5 scale. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  valueForMoneyRating?: number;
  /**
   * Whether the reviewer verified their identity through LinkedIn. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  verifiedLinkedIn?: boolean;
  [extra: string]: unknown;
}

export interface CapterraReviewsAlternativesConsidered {
  /**
   * Capterra identifier for the alternative product.
   */
  id?: string;
  /**
   * Name of the alternative product.
   */
  name?: string;
  /**
   * Capterra slug of the alternative product.
   */
  slug?: string;
  [extra: string]: unknown;
}

export interface CapterraReviewsSwitchedFrom {
  /**
   * Capterra identifier for the previous product.
   */
  id?: string;
  /**
   * Name of the previous product.
   */
  name?: string;
  /**
   * Capterra slug of the previous product.
   */
  slug?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of Capterra Reviews (capterra.reviews).
 */
export interface CapterraReviewsData {
  /**
   * Capterra reviews for the requested product. Populated whenever the provider has data for the entity.
   */
  items: CapterraReviewsItem[];
}

/**
 * Typed methods for the capterra platform. Attached to the AnyAPI client as
 * `client.capterra`.
 */
export class CapterraNamespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * Capterra Reviews
   *
   * Pull Capterra software reviews for any product: overall and sub-ratings, pros and cons, reviewer job title, company size, and industry as clean JSON.
   *
   * Price: $0.0055 per request plus $0.00088 per result (maximum $0.0935).
   *
   * @example
   * const res = await client.capterra.reviews({ product: "https://www.capterra.com/p/135003/Slack/", limit: 25, sortBy: "recent" });
   */
  reviews(
    input: CapterraReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<CapterraReviewsData>> {
    return this._core.run("capterra.reviews", input, options);
  }
}
