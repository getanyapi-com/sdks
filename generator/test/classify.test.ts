import { describe, expect, it } from "vitest";
import { classifyIr, type GeneratedChanges } from "../src/classify.js";
import type { SkuEntry } from "../src/ir-types.js";
import {
  base,
  classifyMutation,
  field,
  fileChanges,
  input,
  ir,
  unchangedFiles,
} from "./classify-fixture.js";
import { int, sku, str } from "./factories.js";

describe("classifyIr release states", () => {
  it("returns none only when every generator-owned surface is byte-identical", () => {
    const result = classifyIr(ir([base]), ir([base]), unchangedFiles);
    expect(result.bump).toBe("none");
    expect(result.summary).toContain("byte-identical");
  });

  it.each([
    ["IR", fileChanges({ irChanged: true })],
    ["fixtures", fileChanges({ fixturesChanged: true })],
    ["TypeScript", fileChanges({ typescriptChanged: true })],
    ["Python", fileChanges({ pythonChanged: true })],
  ] satisfies Array<[string, GeneratedChanges]>)(
    "blocks an unexplained byte change in %s",
    (_label, files) => {
      const result = classifyIr(ir([base]), ir([base]), files);
      expect(result.bump).toBe("blocked");
      expect(
        result.blocked.some((change) => change.kind === "unclassified-change"),
      ).toBe(true);
    },
  );

  it("uses minor for a new SKU and platform", () => {
    const result = classifyIr(
      ir([base]),
      ir([base, sku({ slug: "google.search" })]),
      fileChanges({
        irChanged: true,
        fixturesChanged: true,
        typescriptChanged: true,
        pythonChanged: true,
      }),
    );
    expect(result.bump).toBe("minor");
    expect(result.added.map((change) => change.kind)).toEqual(
      expect.arrayContaining(["sku-added", "platform-added"]),
    );
  });

  it("uses minor for a new optional field", () => {
    const result = classifyMutation(
      (next) => {
        input(next).properties.region = str();
      },
      fileChanges({
        irChanged: true,
        typescriptChanged: true,
        pythonChanged: true,
      }),
    );
    expect(result.bump).toBe("minor");
    expect(result.added.some((change) => change.kind === "field-added")).toBe(
      true,
    );
  });

  it.each([
    ["neither language", unchangedFiles],
    ["TypeScript only", fileChanges({ typescriptChanged: true })],
    ["Python only", fileChanges({ pythonChanged: true })],
  ] satisfies Array<[string, GeneratedChanges]>)(
    "blocks an optional field when %s regenerates",
    (_label, files) => {
      const result = classifyMutation(
        (next) => {
          input(next).properties.region = str();
        },
        fileChanges({ ...files, irChanged: true }),
      );
      expect(result.bump).toBe("blocked");
      expect(
        result.blocked.some((change) => change.kind === "unclassified-change"),
      ).toBe(true);
    },
  );

  it("blocks inconsistent IR byte-state evidence", () => {
    const result = classifyMutation(
      (next) => {
        next.description = "Updated documentation.";
      },
      fileChanges({ typescriptChanged: true, pythonChanged: true }),
    );
    expect(result.bump).toBe("blocked");
    expect(result.summary).toContain(
      "byte-state evidence reports no IR change",
    );
  });

  it("uses minor for an enum member appended without reordering", () => {
    const result = classifyMutation(
      (next) => {
        field(next, "sort").enum = ["helpful", "recent", "critical"];
      },
      fileChanges({
        irChanged: true,
        typescriptChanged: true,
        pythonChanged: true,
      }),
    );
    expect(result.bump).toBe("minor");
    expect(result.added.some((change) => change.kind === "enum-added")).toBe(
      true,
    );
  });

  it("allows documentation and pricing-only patch changes", () => {
    const result = classifyMutation(
      (next) => {
        next.description = "Updated documentation.";
        next.pricing.priceUsd = 0.02;
        field(next, "product").description = "Product identifier.";
      },
      fileChanges({
        irChanged: true,
        typescriptChanged: true,
        pythonChanged: true,
      }),
    );
    expect(result.bump).toBe("patch");
    expect(result.changed.map((change) => change.kind)).toEqual(
      expect.arrayContaining(["documentation", "pricing"]),
    );
  });

  it("allows emitter-neutral metadata as patch only when emitted trees stay identical", () => {
    const oldIr = ir([base]);
    const newIr = ir([base], { openapiVersion: "1.0.1" });
    expect(
      classifyIr(oldIr, newIr, fileChanges({ irChanged: true })).bump,
    ).toBe("patch");
    expect(
      classifyIr(
        oldIr,
        newIr,
        fileChanges({ irChanged: true, typescriptChanged: true }),
      ).bump,
    ).toBe("blocked");
  });
});

describe("classifyIr blocked changes", () => {
  it("blocks SKU removal", () => {
    const result = classifyIr(
      ir([base, sku({ slug: "google.search" })]),
      ir([base]),
      fileChanges({ irChanged: true }),
    );
    expect(result.bump).toBe("blocked");
    expect(result.hasRemoval).toBe(true);
    expect(result.removed.some((change) => change.kind === "sku-removed")).toBe(
      true,
    );
  });

  it("blocks field and enum removals", () => {
    const fieldRemoval = classifyMutation((next) => {
      delete input(next).properties.limit;
    });
    const enumRemoval = classifyMutation((next) => {
      field(next, "sort").enum = ["helpful"];
    });
    expect(fieldRemoval.bump).toBe("blocked");
    expect(fieldRemoval.hasRemoval).toBe(true);
    expect(enumRemoval.bump).toBe("blocked");
    expect(enumRemoval.hasRemoval).toBe(true);
  });

  it("blocks a field added as required", () => {
    const result = classifyMutation((next) => {
      input(next).properties.region = str();
      input(next).required.push("region");
    });
    expect(result.bump).toBe("blocked");
    expect(
      result.blocked.some((change) => change.kind === "requiredness-change"),
    ).toBe(true);
  });

  const structuralCases: Array<[string, string, (next: SkuEntry) => void]> = [
    [
      "requiredness",
      "requiredness-change",
      (next) => input(next).required.push("sort"),
    ],
    [
      "type",
      "type-change",
      (next) => {
        input(next).properties.product = int();
      },
    ],
    [
      "nullability",
      "nullability-change",
      (next) => {
        field(next, "product").nullable = true;
      },
    ],
    [
      "openness",
      "openness-change",
      (next) => {
        input(next).open = true;
      },
    ],
    [
      "default",
      "default-change",
      (next) => {
        field(next, "sort").default = "recent";
      },
    ],
    [
      "numeric bound",
      "bound-change",
      (next) => {
        field(next, "limit").maximum = 10;
      },
    ],
    [
      "format",
      "format-change",
      (next) => {
        field(next, "product").format = "uri";
      },
    ],
    [
      "method",
      "method-change",
      (next) => {
        next.tsMethod = "fetchReviews";
      },
    ],
    [
      "path",
      "path-change",
      (next) => {
        next.action = "reviewSearch";
      },
    ],
    [
      "envelope",
      "envelope-change",
      (next) => {
        next.output.envelope = "bare";
      },
    ],
    [
      "pagination",
      "method-change",
      (next) => {
        next.pagination.paginated = true;
      },
    ],
  ];

  it.each(structuralCases)("blocks a %s change", (_label, kind, mutate) => {
    const result = classifyMutation(mutate);
    expect(result.bump).toBe("blocked");
    expect(result.blocked.some((change) => change.kind === kind)).toBe(true);
  });

  it("blocks enum and existing-field reordering", () => {
    const enumOrder = classifyMutation((next) => {
      field(next, "sort").enum = ["recent", "helpful"];
    });
    const fieldOrder = classifyMutation((next) => {
      const props = input(next).properties;
      input(next).properties = {
        sort: props.sort!,
        product: props.product!,
        limit: props.limit!,
      };
    });
    expect(enumOrder.bump).toBe("blocked");
    expect(fieldOrder.bump).toBe("blocked");
  });

  it("blocks future method or path fields until they are classified", () => {
    const oldSku = structuredClone(base) as SkuEntry & {
      method: string;
      path: string;
    };
    const newSku = structuredClone(base) as SkuEntry & {
      method: string;
      path: string;
    };
    oldSku.method = "POST";
    oldSku.path = "/v1/run/amazon.reviews";
    newSku.method = "GET";
    newSku.path = "/v2/run/amazon.reviews";
    const result = classifyIr(ir([oldSku]), ir([newSku]), unchangedFiles);
    expect(result.bump).toBe("blocked");
    expect(result.blocked.map((change) => change.kind)).toEqual(
      expect.arrayContaining(["method-change", "path-change"]),
    );
  });
});
