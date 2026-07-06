import { describe, it, expect } from "vitest";
import { normalizeDashes } from "../src/dashes.js";

describe("dash normalization (SPEC 1.4.11)", () => {
  it("collapses a spaced parenthetical em dash to a spaced hyphen", () => {
    expect(normalizeDashes("a \u2014 b")).toBe("a - b");
  });

  it("turns a bare em dash into a bare hyphen", () => {
    expect(normalizeDashes("a\u2014b")).toBe("a-b");
  });

  it("turns an en dash into a hyphen", () => {
    expect(normalizeDashes("1\u20135")).toBe("1-5");
    expect(normalizeDashes("x \u2013 y")).toBe("x - y");
  });

  it("trims trailing spaces", () => {
    expect(normalizeDashes("hello   ")).toBe("hello");
  });

  it("leaves ASCII hyphens untouched", () => {
    expect(normalizeDashes("verified-purchase")).toBe("verified-purchase");
  });

  it("emits no em or en dash in the output", () => {
    const out = normalizeDashes("a \u2014 b \u2013 c\u2014d");
    expect(out).not.toMatch(/[\u2014\u2013]/);
  });
});
