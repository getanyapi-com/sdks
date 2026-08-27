// Generated - do not edit. Regenerate with: pnpm generate

import type {
  ClientCore,
  RequestOptions,
  RunResult,
} from "../../core/index.js";

/**
 * Input for G2 Reviews (g2.reviews).
 */
export interface G2ReviewsInput {
  /**
   * Maximum number of reviews to return. The minimum is 50 because G2 review sources will not serve a smaller page. You are billed per returned result, so a lower limit costs less.
   * Range: minimum 50, maximum 100.
   * Default: 50.
   */
  limit?: number;
  /**
   * G2 product slug, for example hubspot-marketing-hub. A full G2 product URL is also accepted and reduced to its slug.
   */
  product: string;
  /**
   * Sort order for the returned reviews: newest first, most helpful first, highest or lowest rated first, or G2's own default ordering.
   * One of: recent, helpful, highest, lowest, default.
   * Default: recent.
   */
  sortBy?: "recent" | "helpful" | "highest" | "lowest" | "default";
}

export interface G2ReviewsItem {
  /**
   * Reviewer's display name. G2 abbreviates most reviewers, for example Michael D. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  author?: string;
  /**
   * Country the reviewer is based in.
   */
  authorCountry?: string;
  /**
   * UTC epoch timestamp in seconds (Unix time). Multiply by 1000 for a JS Date in milliseconds. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  createdUtc?: number;
  /**
   * The reviewer's answer to G2's question about what they dislike. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  dislikes?: string;
  /**
   * Number of readers who marked the review helpful.
   */
  helpfulVotes?: number;
  /**
   * G2 identifier for the review. Populated whenever the provider has data for the entity.
   */
  id: string;
  /**
   * The reviewer's answer to G2's question about what they like best. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  likes?: string;
  /**
   * G2 market segment of the reviewer's company: Small-Business, Mid-Market, or Enterprise. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  marketSegment?: string;
  /**
   * Likelihood the reviewer would recommend the product, on a 0 to 10 scale. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  nps?: number;
  /**
   * The reviewer's answer to G2's question about what problems the product solves and how that benefits them. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  problemsSolved?: string;
  /**
   * Name of the product the review is about. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  productName?: string;
  /**
   * G2 slug of the product the review is about.
   */
  productSlug?: string;
  /**
   * Star rating the reviewer gave, on a 0.5 to 5 scale in half-star steps. Populated whenever the provider has data for the entity.
   */
  rating: number;
  /**
   * G2's rating rubric, each on a 0 to 10 scale. A reviewer may skip any of them, and the last two are asked far less often.
   */
  ratings?: {
    /**
     * Rating for how easy the product is to administer.
     */
    easeOfAdmin?: number;
    /**
     * Rating for how easy the vendor is to do business with.
     */
    easeOfDoingBusinessWith?: number;
    /**
     * Rating for how easy the product is to set up.
     */
    easeOfSetup?: number;
    /**
     * Rating for how easy the product is to use.
     */
    easeOfUse?: number;
    /**
     * Rating for how well the product meets the reviewer's requirements.
     */
    meetsRequirements?: number;
    /**
     * Rating for the quality of the vendor's support.
     */
    qualityOfSupport?: number;
  };
  /**
   * Form the review was submitted in, for example text or video.
   */
  responseType?: string;
  /**
   * How G2 collected the review, for example organic or vendor.
   */
  reviewSource?: string;
  /**
   * Whether the reviewer switched from another product. Null when G2 does not record an answer.
   */
  switchedFrom?: boolean | null;
  /**
   * Headline the reviewer gave the review. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  title?: string;
  /**
   * Canonical G2 URL for the review. Populated whenever the provider has data for the entity.
   * Present whenever the upstream returns this record.
   */
  url?: string;
  [extra: string]: unknown;
}

/**
 * The `data` payload of G2 Reviews (g2.reviews).
 */
export interface G2ReviewsData {
  /**
   * G2 reviews for the requested product. Populated whenever the provider has data for the entity.
   */
  items: G2ReviewsItem[];
}

/**
 * Typed methods for the g2 platform. Attached to the AnyAPI client as
 * `client.g2`.
 */
export class G2Namespace {
  constructor(private readonly _core: ClientCore) {}

  /**
   * G2 Reviews
   *
   * Pull G2 software reviews for any product: star rating, what reviewers like and dislike, problems solved, market segment, and G2's rating rubric as clean JSON.
   *
   * Price: $0.00006 per request plus $0.00005 per result (maximum $0.00446).
   *
   * @example
   * const res = await client.g2.reviews({ product: "hubspot-marketing-hub", limit: 50, sortBy: "recent" });
   */
  reviews(
    input: G2ReviewsInput,
    options?: RequestOptions,
  ): Promise<RunResult<G2ReviewsData>> {
    return this._core.run("g2.reviews", input, options);
  }
}
