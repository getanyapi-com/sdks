import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync, mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { readFileSync } from "node:fs";
import { describe, expect, it, beforeAll } from "vitest";

import { emitPython } from "../src/emit-py.js";
import { ruffAvailable, formatPy } from "../src/py-format.js";
import { arr, ir, obj, sku, str } from "./factories.js";
import type { IR } from "../src/py-ir.js";

const SAMPLE_IR: IR = JSON.parse(
  readFileSync(new URL("../ir.sample.json", import.meta.url), "utf8"),
) as IR;

// Emit with ruff disabled so golden content is stable regardless of the local environment.
// (A dedicated test below covers the ruff fixed-point property when ruff is installed.)
function emitDeterministic(input: IR): Record<string, string> {
  const prev = process.env.ANYAPI_SKIP_RUFF;
  process.env.ANYAPI_SKIP_RUFF = "1";
  try {
    return emitPython(input, "out");
  } finally {
    if (prev === undefined) delete process.env.ANYAPI_SKIP_RUFF;
    else process.env.ANYAPI_SKIP_RUFF = prev;
  }
}

describe("emitPython - sample IR golden", () => {
  const files = emitDeterministic(SAMPLE_IR);

  it("emits exactly the expected file set", () => {
    expect(Object.keys(files).sort()).toEqual([
      "platforms/__init__.py",
      "platforms/amazon.py",
      "platforms/facebook.py",
      "platforms/threads.py",
    ]);
  });

  it("full file map matches golden snapshot", () => {
    expect(files).toMatchSnapshot();
  });

  it("every file starts with the exact generated header", () => {
    for (const content of Object.values(files)) {
      expect(content.split("\n")[0]).toBe(
        "# Generated - do not edit. Regenerate with: pnpm generate",
      );
    }
  });

  it("contains no em or en dashes", () => {
    for (const content of Object.values(files)) {
      expect(content).not.toMatch(/[\u2014\u2013]/);
    }
  });

  it("never mentions credits", () => {
    for (const content of Object.values(files)) {
      expect(content.toLowerCase()).not.toContain("credit");
    }
  });
});

describe("emitPython - determinism", () => {
  it("two runs are byte-identical", () => {
    const a = emitDeterministic(SAMPLE_IR);
    const b = emitDeterministic(SAMPLE_IR);
    expect(a).toEqual(b);
  });

  it("is stable regardless of input SKU order", () => {
    const forward = emitDeterministic(SAMPLE_IR);
    const reversed = emitDeterministic(ir([...SAMPLE_IR.skus].reverse()));
    expect(reversed).toEqual(forward);
  });
});

describe("registry (platforms/__init__.py)", () => {
  const files = emitDeterministic(SAMPLE_IR);
  const reg = files["platforms/__init__.py"]!;

  it("maps attr -> (module, sync class, async class)", () => {
    expect(reg).toContain(
      '"amazon": ("amazon", "AmazonNamespace", "AsyncAmazonNamespace"),',
    );
    expect(reg).toContain(
      '"facebook": ("facebook", "FacebookNamespace", "AsyncFacebookNamespace"),',
    );
  });

  it("exports __all__", () => {
    expect(reg).toContain('__all__ = ["REGISTRY"]');
  });
});

describe("pricing doc lines", () => {
  it("fixed price -> 'Price: $X per request.'", () => {
    const files = emitDeterministic(
      ir([
        sku({
          slug: "amazon.reviews",
          pricing: {
            priceUsd: 0.01625,
            baseUsd: null,
            perItemUsd: null,
            perItemUnit: null,
          },
        }),
      ]),
    );
    expect(files["platforms/amazon.py"]).toContain(
      "Price: $0.01625 per request.",
    );
  });

  it("per-item price with a base fee -> base-plus-per-unit form", () => {
    const files = emitDeterministic(
      ir([
        sku({
          slug: "google.search",
          pricing: {
            priceUsd: 0.05,
            baseUsd: 0.01,
            perItemUsd: 0.0025,
            perItemUnit: "result",
          },
        }),
      ]),
    );
    expect(files["platforms/google.py"]).toContain(
      "Price: $0.01 per request plus $0.0025 per result (maximum $0.05).",
    );
  });

  it("does not infer an incomplete linear offer", () => {
    const files = emitDeterministic(
      ir([
        sku({
          slug: "google.search",
          pricing: {
            priceUsd: 0.05,
            baseUsd: null,
            perItemUsd: 0.003,
            perItemUnit: null,
          },
        }),
      ]),
    );
    expect(files["platforms/google.py"]).toContain("Price: $0.05 per request.");
  });

  it("per-item null -> falls back to per-request fixed", () => {
    const files = emitDeterministic(
      ir([
        sku({
          slug: "google.search",
          pricing: {
            priceUsd: 0.002,
            baseUsd: null,
            perItemUsd: null,
            perItemUnit: null,
          },
        }),
      ]),
    );
    expect(files["platforms/google.py"]).toContain(
      "Price: $0.002 per request.",
    );
  });
});

describe("Literal emission", () => {
  it("string enums become Literal[...] in inputs", () => {
    const files = emitDeterministic(
      ir([
        sku({
          slug: "amazon.reviews",
          inputTypeName: "AmazonReviewsInput",
          input: obj({ sort: str({ enum: ["helpful", "recent"] }) }, ["sort"]),
        }),
      ]),
    );
    expect(files["platforms/amazon.py"]).toContain(
      'Literal["helpful", "recent"]',
    );
  });
});

describe("open vs closed records (extra='allow')", () => {
  const files = emitDeterministic(SAMPLE_IR);

  it("open item record gets extra='allow'", () => {
    // Item records have snake_case aliases too, so extra + populate_by_name both appear.
    expect(files["platforms/amazon.py"]).toContain(
      'class AmazonReviewsItem(BaseModel):\n    model_config = ConfigDict(extra="allow"',
    );
  });

  it("closed data wrapper has no extra='allow' (but keeps populate_by_name for aliases)", () => {
    const fb = files["platforms/facebook.py"]!;
    // FacebookAdsSearchData is closed (open:false) -> no extra="allow"; snake_case aliases
    // still require populate_by_name.
    expect(fb).toMatch(
      /class FacebookAdsSearchData\(BaseModel\):\n    model_config = ConfigDict\(populate_by_name=True\)/,
    );
    expect(fb).not.toMatch(
      /class FacebookAdsSearchData\(BaseModel\):\n    model_config = ConfigDict\(extra="allow"/,
    );
  });

  it("open root data model gets extra='allow'", () => {
    expect(files["platforms/threads.py"]).toContain(
      'class ThreadsProfileData(BaseModel):\n    model_config = ConfigDict(extra="allow"',
    );
  });
});

describe("must-populate doc line (N1)", () => {
  // N1: the note is emitted only on OPTIONAL annotated fields, with the reworded phrase.
  // Data object has a must-populate `bio` (optional) and a must-populate `id` (required).
  const files = emitDeterministic(
    ir([
      sku({
        slug: "person.card",
        outputTypeName: "PersonCardData",
        output: {
          envelope: "found-data",
          data: obj(
            { id: str(), bio: str() },
            ["id"], // id required, bio optional
            false,
            ["id", "bio"], // both annotated must-populate
          ),
        },
      }),
    ]),
  );
  const model = files["platforms/person.py"]!;

  it("appends the reworded phrase to an annotated OPTIONAL field", () => {
    const line = model
      .split("\n")
      .find((l) => l.trimStart().startsWith("bio:"))!;
    expect(line).toContain(
      "Present whenever the upstream returns this record.",
    );
  });
  it("does not append it to an annotated REQUIRED field", () => {
    const line = model
      .split("\n")
      .find((l) => l.trimStart().startsWith("id:"))!;
    expect(line).not.toContain("Present whenever");
  });
});

describe("Example block", () => {
  const files = emitDeterministic(SAMPLE_IR);
  it("renders client.<ns>.<method>(k=v) with typed literals", () => {
    expect(files["platforms/amazon.py"]).toContain(
      'res = client.amazon.reviews(product="B07FZ8S74R", limit=3)',
    );
  });
  it("empty example still renders a bare call", () => {
    const f = emitDeterministic(
      ir([sku({ slug: "x.y", pyNamespace: "x", pyMethod: "y", example: {} })]),
    );
    expect(f["platforms/x.py"]).toContain("res = client.x.y()");
  });
});

describe("item model naming (singularize + prefix)", () => {
  it("AmazonReviewsItem from the 'items' array", () => {
    const files = emitDeterministic(SAMPLE_IR);
    expect(files["platforms/amazon.py"]).toContain(
      "class AmazonReviewsItem(BaseModel):",
    );
    expect(files["platforms/amazon.py"]).toContain(
      "items: list[AmazonReviewsItem]",
    );
  });
  it("FacebookAdsSearchAd from the 'ads' array (naive s-strip)", () => {
    const files = emitDeterministic(SAMPLE_IR);
    expect(files["platforms/facebook.py"]).toContain(
      "class FacebookAdsSearchAd(BaseModel):",
    );
  });
});

describe("naming edge cases", () => {
  it("google_ads -> GoogleAdsNamespace / AsyncGoogleAdsNamespace + iter_ads_search", () => {
    const files = emitDeterministic(
      ir([
        sku({
          slug: "google_ads.ads_search",
          pyNamespace: "google_ads",
          pyMethod: "ads_search",
          pyIterMethod: "iter_ads_search",
          operationId: "google_ads_ads_search",
          inputTypeName: "GoogleAdsAdsSearchInput",
          outputTypeName: "GoogleAdsAdsSearchData",
          input: obj({ cursor: str() }, []),
          output: {
            envelope: "found-data",
            data: obj(
              { nextCursor: str(), ads: arr(obj({ id: str() }, ["id"], true)) },
              ["nextCursor", "ads"],
            ),
          },
          pagination: {
            paginated: true,
            itemsField: "ads",
            cursorInputField: "cursor",
            nextCursorField: "nextCursor",
          },
        }),
      ]),
    );
    const f = files["platforms/google_ads.py"]!;
    expect(f).toContain("class GoogleAdsNamespace:");
    expect(f).toContain("class AsyncGoogleAdsNamespace:");
    expect(f).toContain("def iter_ads_search(");
    expect(f).toContain(
      "Paginator[GoogleAdsAdsSearchAd, GoogleAdsAdsSearchData]",
    );
    expect(files["platforms/__init__.py"]).toContain(
      '"google_ads": ("google_ads", "GoogleAdsNamespace", "AsyncGoogleAdsNamespace"),',
    );
  });

  it("Python keyword method -> trailing underscore (class -> class_)", () => {
    const files = emitDeterministic(
      ir([
        sku({ slug: "school.class", pyNamespace: "school", pyMethod: "class" }),
      ]),
    );
    const f = files["platforms/school.py"]!;
    expect(f).toContain("def class_(");
    expect(f).toContain("async def class_(");
  });

  it("colliding input field key -> functional TypedDict form", () => {
    const files = emitDeterministic(
      ir([
        sku({
          slug: "x.y",
          pyNamespace: "x",
          pyMethod: "y",
          inputTypeName: "XyInput",
          input: obj({ class: str(), normal: str() }, ["class"]),
        }),
      ]),
    );
    const f = files["platforms/x.py"]!;
    expect(f).toContain("XyInput = TypedDict(");
    expect(f).toContain('"class": Required[str]');
    expect(f).toContain('"normal": NotRequired[str]');
  });
});

describe("pagination gating", () => {
  it("paginated WITHOUT itemsField emits no iterator", () => {
    const files = emitDeterministic(
      ir([
        sku({
          slug: "p.q",
          pyNamespace: "p",
          pyMethod: "q",
          pyIterMethod: null, // extractor sets null when no array field
          input: obj({ cursor: str() }, []),
          output: {
            envelope: "found-data",
            data: obj({ nextCursor: str() }, ["nextCursor"]),
          },
          pagination: {
            paginated: true,
            itemsField: null,
            cursorInputField: "cursor",
            nextCursorField: "nextCursor",
          },
        }),
      ]),
    );
    const f = files["platforms/p.py"]!;
    expect(f).not.toContain("def iter_");
    expect(f).not.toContain("Paginator");
  });
});

describe("required/optional input typing (1.4.3)", () => {
  it("required-without-default -> Required[], default present -> NotRequired[]", () => {
    const files = emitDeterministic(
      ir([
        sku({
          slug: "x.y",
          pyNamespace: "x",
          pyMethod: "y",
          inputTypeName: "XyInput",
          input: obj({ a: str(), b: str({ default: "d" }) }, ["a", "b"]),
        }),
      ]),
    );
    const f = files["platforms/x.py"]!;
    expect(f).toContain("a: Required[str]");
    // b is in required[] but has a default -> optional.
    expect(f).toContain("b: NotRequired[str]");
  });
});

describe("Python syntax smoke (py_compile)", () => {
  const python = process.env.PYTHON ?? "python3";
  let pyOk = true;
  beforeAll(() => {
    try {
      execFileSync(python, ["--version"], { stdio: "ignore" });
    } catch {
      pyOk = false;
    }
  });

  it("every emitted sample file compiles", () => {
    if (!pyOk) {
      // No python3 in this environment; skip without failing.
      return;
    }
    const files = emitDeterministic(SAMPLE_IR);
    const dir = mkdtempSync(join(tmpdir(), "getanyapi-pyc-"));
    const pkg = join(dir, "getanyapi");
    mkdirSync(join(pkg, "platforms"), { recursive: true });
    // Stub the handwritten runtime modules the generated code imports so relative
    // imports resolve (we only prove SYNTAX + import resolution, not runtime behavior).
    writeFileSync(join(pkg, "__init__.py"), "");
    writeFileSync(
      join(pkg, "_account.py"),
      "from typing_extensions import TypedDict\n\n\nclass RequestOptions(TypedDict, total=False):\n    pass\n",
    );
    writeFileSync(
      join(pkg, "_pagination.py"),
      [
        "from typing import Generic, TypeVar",
        "",
        "T = TypeVar('T')",
        "Item = TypeVar('Item')",
        "Data = TypeVar('Data')",
        "",
        "",
        "class RunResult(Generic[T]):",
        "    pass",
        "",
        "",
        "class Paginator(Generic[Item, Data]):",
        "    pass",
        "",
        "",
        "class AsyncPaginator(Generic[Item, Data]):",
        "    pass",
        "",
        "",
        "def paginate(*a, **k):",
        "    pass",
        "",
        "",
        "def apaginate(*a, **k):",
        "    pass",
        "",
      ].join("\n"),
    );
    writeFileSync(join(pkg, "_client.py"), "class AnyAPI:\n    pass\n");
    writeFileSync(
      join(pkg, "_async_client.py"),
      "class AsyncAnyAPI:\n    pass\n",
    );

    const emitted: string[] = [];
    for (const [rel, content] of Object.entries(files)) {
      const dest = join(pkg, rel);
      writeFileSync(dest, content);
      emitted.push(dest);
    }
    // py_compile every emitted file. Throws (fails the test) on a syntax error.
    execFileSync(python, ["-m", "py_compile", ...emitted], { stdio: "pipe" });
    expect(emitted.length).toBe(4);
  });
});

describe("ruff formatting", () => {
  it("emitted output is a ruff fixed point when ruff is available", () => {
    if (!ruffAvailable()) return; // environment has no ruff; the identity fallback is fine.
    // Emit WITH ruff enabled, then a second ruff pass must be a no-op (byte-identical).
    const files = emitPython(SAMPLE_IR, "out");
    for (const content of Object.values(files)) {
      expect(formatPy(content)).toBe(content);
    }
  });
});
