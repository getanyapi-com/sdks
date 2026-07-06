import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { mkdirSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import {
  docComment,
  itemTypeName,
  literalUnion,
  priceLine,
} from "../src/emit-shared.js";
import { emitTypescript, namespaceClassName } from "../src/emit-ts.js";
import type { IR, SkuEntry } from "../src/ir-types.js";

const here = dirname(fileURLToPath(import.meta.url));

function loadSampleIr(): IR {
  const raw = readFileSync(join(here, "..", "ir.sample.json"), "utf8");
  return JSON.parse(raw) as IR;
}

/** Strip the outDir prefix so snapshots are stable regardless of the default root. */
async function emitRelative(ir: IR): Promise<Record<string, string>> {
  const files = await emitTypescript(ir, "");
  const out: Record<string, string> = {};
  for (const [path, content] of Object.entries(files)) {
    out[path.replace(/^\/+/, "")] = content;
  }
  return out;
}

describe("emitTypescript golden output", () => {
  it("emits the full file map for the 3-SKU sample IR", async () => {
    const files = await emitRelative(loadSampleIr());
    expect(Object.keys(files).sort()).toMatchInlineSnapshot(`
      [
        "client.ts",
        "index.ts",
        "platforms/amazon.ts",
        "platforms/facebook.ts",
        "platforms/threads.ts",
        "sku-map.ts",
      ]
    `);
    // Full-content golden via an external snapshot file (kept out of this file for size).
    expect(files).toMatchSnapshot();
  });

  it("is deterministic (two runs byte-identical)", async () => {
    const ir = loadSampleIr();
    const a = await emitTypescript(ir, "out");
    const b = await emitTypescript(ir, "out");
    expect(a).toEqual(b);
    // And byte-identical per file.
    for (const key of Object.keys(a)) {
      expect(a[key]).toBe(b[key]);
    }
  });
});

describe("generated-header + hard rules", () => {
  it("every emitted file leads with the exact generated header", async () => {
    const files = await emitRelative(loadSampleIr());
    for (const content of Object.values(files)) {
      expect(content.startsWith("// Generated - do not edit. Regenerate with: pnpm generate")).toBe(
        true,
      );
    }
  });

  it("emits no em dash or en dash anywhere", async () => {
    const files = await emitRelative(loadSampleIr());
    for (const content of Object.values(files)) {
      expect(content).not.toMatch(/[\u2014\u2013]/);
    }
  });

  it("uses named exports only (no export default)", async () => {
    const files = await emitRelative(loadSampleIr());
    for (const content of Object.values(files)) {
      expect(content).not.toMatch(/export\s+default/);
    }
  });
});

describe("naming edge cases", () => {
  it("google_ads -> googleAds namespace class GoogleAdsNamespace", () => {
    expect(namespaceClassName("google_ads")).toBe("GoogleAdsNamespace");
  });

  it("item type name singularizes the array property (amazon reviews items -> Item)", () => {
    expect(itemTypeName("amazon_reviews", "items")).toBe("AmazonReviewsItem");
  });

  it("item type name for facebook ads -> FacebookAdsSearchAd", () => {
    expect(itemTypeName("facebook_ads_search", "ads")).toBe("FacebookAdsSearchAd");
  });

  it("does not singularize a single-character property name", () => {
    // "s" is length 1, so it is left intact and title-cased to "S".
    expect(itemTypeName("x_y", "s")).toBe("XYS");
  });

  it("falls back to Item when the property name is empty", () => {
    expect(itemTypeName("x_y", "")).toBe("XYItem");
  });

  it("emits iterAdsSearch for the paginated facebook SKU", async () => {
    const files = await emitRelative(loadSampleIr());
    expect(files["platforms/facebook.ts"]).toContain("iterAdsSearch(");
    expect(files["platforms/facebook.ts"]).toContain(
      "Paginator<FacebookAdsSearchAd, FacebookAdsSearchData>",
    );
  });

  it("does not emit iterators for non-paginated SKUs", async () => {
    const files = await emitRelative(loadSampleIr());
    expect(files["platforms/amazon.ts"]).not.toContain("Paginator");
    expect(files["platforms/threads.ts"]).not.toContain("Paginator");
    expect(files["platforms/amazon.ts"]).not.toContain("iter");
  });
});

describe("literalUnion + enum emission", () => {
  it("renders a TS literal union preserving order", () => {
    expect(literalUnion(["helpful", "recent"])).toBe('"helpful" | "recent"');
  });

  it("emits enum properties as literal unions", async () => {
    const files = await emitRelative(loadSampleIr());
    expect(files["platforms/amazon.ts"]).toContain('sort?: "helpful" | "recent";');
  });
});

describe("open record index signatures", () => {
  it("adds [extra: string]: unknown to open item records", async () => {
    const files = await emitRelative(loadSampleIr());
    // The amazon review item is an open object.
    const amazon = files["platforms/amazon.ts"]!;
    const itemBlock = amazon.slice(amazon.indexOf("interface AmazonReviewsItem"));
    expect(itemBlock).toContain("[extra: string]: unknown;");
  });

  it("adds the index signature to an open data object (threads)", async () => {
    const files = await emitRelative(loadSampleIr());
    expect(files["platforms/threads.ts"]).toContain("[extra: string]: unknown;");
  });

  it("does NOT add the index signature to closed data objects (facebook data)", async () => {
    const files = await emitRelative(loadSampleIr());
    const fb = files["platforms/facebook.ts"]!;
    // FacebookAdsSearchData is closed; the item record FacebookAdsSearchAd is open.
    const dataBlock = fb.slice(
      fb.indexOf("interface FacebookAdsSearchData"),
      fb.indexOf("export class"),
    );
    expect(dataBlock).not.toContain("[extra: string]: unknown;");
  });
});

describe("doc-comment pricing lines", () => {
  it("fixed pricing renders a flat per-request line", () => {
    expect(
      priceLine({ priceUsd: 0.01625, baseUsd: null, perItemUsd: null, perItemUnit: null }),
    ).toBe("Price: $0.01625 per request.");
  });

  it("per-item pricing renders the base plus per-item form", () => {
    expect(
      priceLine({ priceUsd: 0.05, baseUsd: 0.01, perItemUsd: 0.002, perItemUnit: "post" }),
    ).toBe("Price: $0.01 per request plus $0.002 per post.");
  });

  it("per-item pricing falls back to 'result' when the unit is null", () => {
    expect(
      priceLine({ priceUsd: 0.05, baseUsd: 0.01, perItemUsd: 0.002, perItemUnit: null }),
    ).toBe("Price: $0.01 per request plus $0.002 per result.");
  });

  it("per-item pricing with null baseUsd falls back to priceUsd for the base", () => {
    expect(
      priceLine({ priceUsd: 0.03, baseUsd: null, perItemUsd: 0.002, perItemUnit: "result" }),
    ).toBe("Price: $0.03 per request plus $0.002 per result.");
  });

  it("emits the price line in the method doc comment", async () => {
    const files = await emitRelative(loadSampleIr());
    expect(files["platforms/amazon.ts"]).toContain("Price: $0.01625 per request.");
  });
});

describe("example emission", () => {
  it("emits an @example call with JSON-stringified input (double quotes)", async () => {
    const files = await emitRelative(loadSampleIr());
    expect(files["platforms/amazon.ts"]).toContain(
      'const res = await client.amazon.reviews({"product":"B07FZ8S74R","limit":3});',
    );
  });

  it("omits the @example block when a SKU has no example", async () => {
    const ir = loadSampleIr();
    const sku = ir.skus.find((s) => s.slug === "threads.profile")!;
    sku.example = null;
    const files = await emitTypescript(ir, "");
    const threads = Object.entries(files).find(([p]) => p.endsWith("threads.ts"))![1];
    expect(threads).not.toContain("@example");
  });
});

describe("paginated without itemsField emits no iterator", () => {
  it("suppresses the iterator when itemsField is null even if paginated", async () => {
    const ir = loadSampleIr();
    const fb = ir.skus.find((s) => s.slug === "facebook.ads_search")!;
    fb.pagination.itemsField = null;
    fb.tsIterMethod = null;
    const files = await emitTypescript(ir, "");
    const platform = Object.entries(files).find(([p]) => p.endsWith("facebook.ts"))![1];
    expect(platform).not.toContain("iterAdsSearch");
    expect(platform).not.toContain("Paginator");
    expect(platform).not.toContain("paginate");
    // The plain run method is still present.
    expect(platform).toContain("adsSearch(");
  });
});

describe("sku-map + client", () => {
  it("maps every slug to its input/data types", async () => {
    const files = await emitRelative(loadSampleIr());
    // Collapse whitespace so prettier line-wrapping does not break the assertion.
    const map = files["sku-map.ts"]!.replace(/\s+/g, " ");
    expect(map).toContain(
      '"amazon.reviews": { input: AmazonReviewsInput; data: AmazonReviewsData };',
    );
    // The facebook entry wraps across lines under prettier; assert the key and both refs.
    expect(map).toMatch(
      /"facebook\.ads_search": \{ input: FacebookAdsSearchInput; data: FacebookAdsSearchData;? \};/,
    );
  });

  it("client attaches each platform as a lazy getter", async () => {
    const files = await emitRelative(loadSampleIr());
    const client = files["client.ts"]!;
    expect(client).toContain("get amazon(): AmazonNamespace");
    expect(client).toContain("extends AnyAPIBase");
  });
});

describe("shared helper: docComment", () => {
  it("normalizes an em dash to a hyphen and blank-lines empty strings", () => {
    const out = docComment(["a \u2014 b", "", "c"]);
    expect(out).toContain(" * a - b");
    expect(out).toContain("\n *\n");
    expect(out).not.toMatch(/[\u2014\u2013]/);
  });
});

// --------------------------------------------------------------------------------------
// Compile smoke test: emitted output + minimal stub core must pass `tsc --noEmit`.
// Proves the emitted code type-checks without the real core (which lands on another
// branch). Stubs are built from the SPEC section 2 frozen signatures.
// --------------------------------------------------------------------------------------

const STUB_TYPES = `// stub core types (SPEC section 2)
export interface RunResult<T> {
  output: Output<T>;
  provider: "AnyAPI";
  costUsd: number;
  items?: number;
  hint?: string;
}
export type Output<T> = { found: true; data: T } | { found: false; data: null };
export interface RequestOptions {
  fields?: string[];
  maxItems?: number;
  summary?: boolean;
  timeoutMs?: number;
  signal?: AbortSignal;
  maxRetries?: number;
}
export interface Paginator<Item, Data> extends AsyncIterable<Item> {
  pages(): AsyncIterable<RunResult<Data>>;
}
export interface ClientCore {
  run<T>(slug: string, input: unknown, options?: RequestOptions): Promise<RunResult<T>>;
}
export interface ClientOptions {
  apiKey?: string;
  baseUrl?: string;
  fetch?: typeof fetch;
  maxRetries?: number;
  timeoutMs?: number;
}
export interface AccountProfile {
  id: string; email?: string; status: string; createdAt: string; onboardingComplete: boolean;
}
export interface CatalogQuery { query?: string; category?: string; }
export interface CatalogEntry {
  slug: string; platform: string; action: string; name: string; category: string;
  description: string; priceUsd: number;
}
export interface AgentSignupOptions {
  baseUrl?: string; fetch?: typeof fetch; sponsorEmail?: string; label?: string;
}
export interface AgentSignupResult {
  secret: string; capUsd: number; claimToken: string; claimUrl: string;
}
`;

const STUB_PAGINATION = `// stub pagination helper (SPEC 2.5)
import type { ClientCore, Paginator, RequestOptions } from "./types.js";
export function paginate<Item, Data>(
  _core: ClientCore,
  _slug: string,
  _input: unknown,
  _itemsField: string,
  _options?: RequestOptions,
): Paginator<Item, Data> {
  throw new Error("stub");
}
`;

const STUB_CLIENT = `// stub core AnyAPI base (SPEC 2.1)
import type { ClientCore, ClientOptions } from "./types.js";
// The generated sku-map.ts augments this interface (declaration merging). The base carries
// a permissive string index so unknown slugs resolve to RunResult<unknown>.
export interface SkuMap {
  [slug: string]: { input: unknown; data: unknown };
}
export class AnyAPI {
  protected readonly _core: ClientCore;
  constructor(_options?: ClientOptions) {
    this._core = { run: () => Promise.reject(new Error("stub")) };
  }
}
`;

const STUB_CORE_INDEX = `// stub core barrel
export { AnyAPI } from "./client.js";
export type { SkuMap } from "./client.js";
export { paginate } from "./pagination.js";
export * from "./types.js";
export declare function agentSignup(options?: import("./types.js").AgentSignupOptions): Promise<import("./types.js").AgentSignupResult>;
export declare function unwrap<T>(result: import("./types.js").RunResult<T>): T;
export declare class AnyAPIError extends Error { readonly status: number; readonly requestId?: string; constructor(message: string, status: number, requestId?: string); }
export declare class BadRequestError extends AnyAPIError {}
export declare class AuthenticationError extends AnyAPIError {}
export declare class InsufficientBalanceError extends AnyAPIError {}
export declare class NotFoundError extends AnyAPIError {}
export declare class RateLimitedError extends AnyAPIError {}
export declare class UpstreamError extends AnyAPIError {}
export declare class ConnectionError extends AnyAPIError {}
export declare class TimeoutError extends AnyAPIError {}
`;

const TSCONFIG = JSON.stringify(
  {
    compilerOptions: {
      target: "ES2022",
      module: "ESNext",
      moduleResolution: "Bundler",
      lib: ["ES2022", "DOM"],
      strict: true,
      noUncheckedIndexedAccess: true,
      skipLibCheck: true,
      noEmit: true,
      verbatimModuleSyntax: true,
    },
    include: ["src"],
  },
  null,
  2,
);

describe("compile smoke test (tsc --noEmit over emitted + stub core)", () => {
  it("emitted sample output type-checks against stub core", async () => {
    const ir = loadSampleIr();
    // Emit under a temp `src/generated` root so relative `../../core` resolves.
    const dir = mkdtempSync(join(tmpdir(), "anyapi-emit-"));
    try {
      const srcDir = join(dir, "src");
      const coreDir = join(srcDir, "core");
      mkdirSync(coreDir, { recursive: true });
      writeFileSync(join(coreDir, "types.ts"), STUB_TYPES);
      writeFileSync(join(coreDir, "pagination.ts"), STUB_PAGINATION);
      writeFileSync(join(coreDir, "client.ts"), STUB_CLIENT);
      writeFileSync(join(coreDir, "index.ts"), STUB_CORE_INDEX);

      const files = await emitTypescript(ir, join(srcDir, "generated"));
      for (const [path, content] of Object.entries(files)) {
        mkdirSync(dirname(path), { recursive: true });
        writeFileSync(path, content);
      }
      writeFileSync(join(dir, "tsconfig.json"), TSCONFIG);

      const tscBin = fileURLToPath(
        new URL("../node_modules/typescript/bin/tsc", import.meta.url),
      );
      // Throws (non-zero exit) with the tsc diagnostics captured if type-checking fails.
      execFileSync(process.execPath, [tscBin, "--noEmit", "-p", dir], {
        encoding: "utf8",
        stdio: "pipe",
      });
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  }, 60000);
});

// A tiny SkuEntry factory smoke to keep the imported type referenced.
const _typeGuard: SkuEntry | null = null;
void _typeGuard;
