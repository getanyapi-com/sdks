import { describe, it, expect } from "vitest";
import {
  camelCase,
  snakeCase,
  pySafe,
  pascalFromOperationId,
  tsIterName,
  pyIterName,
} from "../src/naming.js";

describe("naming rules (SPEC 1.5)", () => {
  it("camelCases slug segments", () => {
    expect(camelCase("user_posts")).toBe("userPosts");
    expect(camelCase("ads_search")).toBe("adsSearch");
    expect(camelCase("reviews")).toBe("reviews");
    expect(camelCase("google_ads")).toBe("googleAds");
  });

  it("prefixes underscore when camelCase would start with a digit", () => {
    expect(camelCase("2fa_check")).toBe("_2faCheck");
  });

  it("snake_case is the segment verbatim", () => {
    expect(snakeCase("user_posts")).toBe("user_posts");
    expect(snakeCase("google_ads")).toBe("google_ads");
  });

  it("PascalCases operationIds", () => {
    expect(pascalFromOperationId("amazon_reviews")).toBe("AmazonReviews");
    expect(pascalFromOperationId("facebook_ads_search")).toBe("FacebookAdsSearch");
    expect(pascalFromOperationId("threads_profile")).toBe("ThreadsProfile");
  });

  it("derives iterator method names", () => {
    expect(tsIterName("ads_search")).toBe("iterAdsSearch");
    expect(tsIterName("user_posts")).toBe("iterUserPosts");
    expect(pyIterName("ads_search")).toBe("iter_ads_search");
  });

  it("Python reserved-word guard adds a trailing underscore", () => {
    expect(pySafe("class")).toBe("class_");
    expect(pySafe("import")).toBe("import_");
    expect(pySafe("match")).toBe("match_");
    expect(pySafe("case")).toBe("case_");
    expect(pySafe("type")).toBe("type_");
    expect(pySafe("reviews")).toBe("reviews");
  });
});
