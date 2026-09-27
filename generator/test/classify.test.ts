import { describe, expect, it } from "vitest";
import {
  classifyIr,
  type BumpLevel,
  type GeneratedChanges,
} from "../src/classify.js";
import type { ArrayNode, ObjectNode, SkuEntry } from "../src/ir-types.js";
import {
  base,
  classifyMutation,
  field,
  fileChanges,
  input,
  ir,
  unchangedFiles,
} from "./classify-fixture.js";
import { arr, int, obj, sku, str } from "./factories.js";

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

  it("blocks an optional field when neither language regenerates", () => {
    const result = classifyMutation(
      (next) => {
        input(next).properties.region = str();
      },
      fileChanges({ irChanged: true }),
    );
    expect(result.bump).toBe("blocked");
    expect(
      result.blocked.some((change) => change.kind === "unclassified-change"),
    ).toBe(true);
  });

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

// Owner decision 2026-09-26: the gateway already serves a classified contract change when
// regen runs, so holding it protected no API caller and only kept new SDK installs wrong.
// The packages are 0.x, where semver expresses a breaking change as a minor bump.
describe("classifyIr breaking changes", () => {
  const allTrees = fileChanges({
    irChanged: true,
    typescriptChanged: true,
    pythonChanged: true,
  });

  it("publishes a SKU removal as minor and names it under Breaking changes", () => {
    const result = classifyIr(
      ir([base, sku({ slug: "google.search" })]),
      ir([base]),
      fileChanges({ ...allTrees, fixturesChanged: true }),
    );
    expect(result.bump).toBe("minor");
    expect(result.blocked).toEqual([]);
    expect(result.breaking).toContainEqual(
      expect.objectContaining({ kind: "sku-removed", slug: "google.search" }),
    );
    expect(result.summary).toContain(
      "## Breaking changes (1)\n- google.search: SKU google.search removed\n",
    );
  });

  // must-populate is doc-only in both emitters (optionality comes from `required`), so a
  // change to it is documentation, never a breaking requiredness change. On 2026-08-30 a
  // single annotation added to tiktok.profile.externalUrl stalled every SDK release.
  it("treats a must-populate change as documentation, not a requiredness change", () => {
    // A must-populate edit really does rewrite both emitted trees - it is a doc comment
    // in each - so the byte-state evidence says ir + typescript + python changed.
    const result = classifyMutation((next) => {
      input(next).mustPopulate = ["sort"];
    }, allTrees);
    expect(result.bump).toBe("patch");
    expect(result.breaking).toHaveLength(0);
    expect(result.blocked).toHaveLength(0);
    expect(
      result.changed.some((change) => change.kind === "documentation"),
    ).toBe(true);
  });

  it("still names a real requiredness change alongside a must-populate change", () => {
    const result = classifyMutation((next) => {
      input(next).mustPopulate = ["sort"];
      input(next).required.push("sort");
    }, allTrees);
    expect(result.bump).toBe("minor");
    expect(
      result.breaking.some((change) => change.kind === "requiredness-change"),
    ).toBe(true);
  });

  const breakingCases: Array<[string, string, (next: SkuEntry) => void]> = [
    [
      "a requiredness change",
      "requiredness-change",
      (next) => input(next).required.push("sort"),
    ],
    [
      "a field added as required",
      "requiredness-change",
      (next) => {
        input(next).properties.region = str();
        input(next).required.push("region");
      },
    ],
    [
      "a field removal",
      "field-removed",
      (next) => {
        delete input(next).properties.limit;
      },
    ],
    [
      "an enum member removal",
      "enum-removed",
      (next) => {
        field(next, "sort").enum = ["helpful"];
      },
    ],
    [
      "an enum reorder",
      "enum-change",
      (next) => {
        field(next, "sort").enum = ["recent", "helpful"];
      },
    ],
    [
      "an existing-field reorder",
      "field-order-change",
      (next) => {
        const props = input(next).properties;
        input(next).properties = {
          sort: props.sort!,
          product: props.product!,
          limit: props.limit!,
        };
      },
    ],
    [
      "a type change",
      "type-change",
      (next) => {
        input(next).properties.product = int();
      },
    ],
    [
      "a nullability change",
      "nullability-change",
      (next) => {
        field(next, "product").nullable = true;
      },
    ],
    [
      "an openness change",
      "openness-change",
      (next) => {
        input(next).open = true;
      },
    ],
    [
      "a default change",
      "default-change",
      (next) => {
        field(next, "sort").default = "recent";
      },
    ],
    [
      "a numeric bound change",
      "bound-change",
      (next) => {
        field(next, "limit").maximum = 10;
      },
    ],
    [
      "a format change",
      "format-change",
      (next) => {
        field(next, "product").format = "uri";
      },
    ],
    [
      "a method rename",
      "method-change",
      (next) => {
        next.tsMethod = "fetchReviews";
      },
    ],
    [
      "a path change",
      "path-change",
      (next) => {
        next.action = "reviewSearch";
      },
    ],
    [
      "an envelope change",
      "envelope-change",
      (next) => {
        next.output.envelope = "bare";
      },
    ],
    [
      "a pagination change",
      "method-change",
      (next) => {
        next.pagination.paginated = true;
      },
    ],
  ];

  it.each(breakingCases)(
    "publishes %s as minor when both trees regenerate",
    (_label, kind, mutate) => {
      const result = classifyMutation(mutate, allTrees);
      expect(result.bump).toBe("minor");
      expect(result.blocked).toEqual([]);
      expect(result.breaking.map((change) => change.kind)).toContain(kind);
      expect(result.summary).toContain("## Breaking changes");
    },
  );

  it("blocks a breaking change whose emitted trees did not change", () => {
    const result = classifyMutation(
      (next) => input(next).required.push("sort"),
      fileChanges({ irChanged: true }),
    );
    expect(result.bump).toBe("blocked");
    expect(result.blocked).toContainEqual(
      expect.objectContaining({
        kind: "unclassified-change",
        slug: "emitted-trees",
      }),
    );
  });

  // Each row was measured by running both emitters on the committed IR with only that edit.
  // Python already types an optional output field as `X | None`, so making it nullable
  // rewrites only TypeScript (the redfin.search batch that held sdks#53). An output openness
  // flip on apollo.people_search `people[].organization` rewrote only Python. Python types a
  // nested input object as `dict[str, Any]`, so a description on company_search.fullenrich
  // `companyIds[].exact_match` rewrote only TypeScript.
  const oneTreeCases: Array<
    [string, BumpLevel, GeneratedChanges, SkuEntry, (next: SkuEntry) => void]
  > = [
    [
      "an optional output field made nullable",
      "minor",
      fileChanges({ irChanged: true, typescriptChanged: true }),
      sku({
        slug: "redfin.search",
        output: { envelope: "found-data", data: obj({ agentName: str() }) },
      }),
      (next) => {
        (next.output.data as ObjectNode).properties.agentName!.nullable = true;
      },
    ],
    [
      "an output openness change",
      "minor",
      fileChanges({ irChanged: true, pythonChanged: true }),
      sku({
        slug: "apollo.people_search",
        output: {
          envelope: "found-data",
          data: obj({ organization: obj({ name: str() }, [], true) }),
        },
      }),
      (next) => {
        const data = next.output.data as ObjectNode;
        (data.properties.organization as ObjectNode).open = false;
      },
    ],
    [
      "a nested input description",
      "patch",
      fileChanges({ irChanged: true, typescriptChanged: true }),
      sku({
        slug: "company_search.fullenrich",
        input: obj({ companyIds: arr(obj({ exact_match: str() })) }),
      }),
      (next) => {
        const ids = input(next).properties.companyIds as ArrayNode;
        (ids.items as ObjectNode).properties.exact_match!.description =
          "Match the identifier exactly.";
      },
    ],
  ];

  it.each(oneTreeCases)(
    "publishes %s that only one emitted tree renders",
    (_label, bump, files, before, mutate) => {
      const after = structuredClone(before);
      mutate(after);
      const result = classifyIr(ir([before]), ir([after]), files);
      expect(result.bump).toBe(bump);
      expect(result.blocked).toEqual([]);
    },
  );

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
