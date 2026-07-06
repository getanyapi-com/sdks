import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import {
  AnyAPI,
  InsufficientBalanceError,
  NotFoundError,
} from "../src/index.js";
import { mockFetch } from "./helpers.js";

interface SkuEntry {
  slug: string;
  tsNamespace: string;
  tsMethod: string;
  tsIterMethod: string | null;
  example: Record<string, unknown>;
  output: { envelope: "found-data" | "bare" };
  pagination: {
    paginated: boolean;
    itemsField: string | null;
  };
}

interface IrFile {
  skus: SkuEntry[];
}

interface FixtureEnvelope {
  // found-data: output = { found, data }. bare: output IS the data object directly.
  output: { found: boolean; data: unknown } | Record<string, unknown>;
  provider: string;
  costUsd: number;
  items?: number;
  [key: string]: unknown;
}

type FixtureMap = Record<string, FixtureEnvelope | string>;
type GeneratedMethod = (input: Record<string, unknown>) => Promise<FixtureEnvelope>;
type GeneratedIterator = (
  input: Record<string, unknown>,
) => AsyncIterable<Record<string, unknown>>;

const repoRoot = new URL("../../../", import.meta.url);
const irPath = fileURLToPath(new URL("generator/ir.json", repoRoot));
const fixturesPath = fileURLToPath(new URL("generator/fixtures.json", repoRoot));

function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

const ir = readJson<IrFile>(irPath);
const fixtures = readJson<FixtureMap>(fixturesPath);
const skusBySlug = new Map(ir.skus.map((sku) => [sku.slug, sku]));
const slugs = Object.keys(fixtures).filter((slug) => slug !== "_generated").sort();

function mustSku(slug: string): SkuEntry {
  const sku = skusBySlug.get(slug);
  if (!sku) {
    throw new Error(`missing IR entry for ${slug}`);
  }
  return sku;
}

function mustFixture(slug: string): FixtureEnvelope {
  const fixture = fixtures[slug];
  if (typeof fixture === "string" || !fixture) {
    throw new Error(`missing fixture for ${slug}`);
  }
  return fixture;
}

function hasPassthroughExtra(value: unknown): boolean {
  if (Array.isArray(value)) {
    return value.some(hasPassthroughExtra);
  }
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (record["_extra"] === "passthrough") {
      return true;
    }
    return Object.values(record).some(hasPassthroughExtra);
  }
  return false;
}

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T;
}

function objectRecord(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("expected object record");
  }
  return value as Record<string, unknown>;
}

function methodFor(client: AnyAPI, sku: SkuEntry): GeneratedMethod {
  const namespace = (client as unknown as Record<string, Record<string, unknown>>)[
    sku.tsNamespace
  ];
  const method = namespace?.[sku.tsMethod];
  if (typeof method !== "function") {
    throw new Error(`missing method ${sku.tsNamespace}.${sku.tsMethod}`);
  }
  return method.bind(namespace) as GeneratedMethod;
}

function iteratorFor(client: AnyAPI, sku: SkuEntry): GeneratedIterator {
  if (!sku.tsIterMethod) {
    throw new Error(`missing iterator for ${sku.slug}`);
  }
  const namespace = (client as unknown as Record<string, Record<string, unknown>>)[
    sku.tsNamespace
  ];
  const method = namespace?.[sku.tsIterMethod];
  if (typeof method !== "function") {
    throw new Error(`missing iterator ${sku.tsNamespace}.${sku.tsIterMethod}`);
  }
  return method.bind(namespace) as GeneratedIterator;
}

function pageWithItem(
  fixture: FixtureEnvelope,
  itemsField: string,
  item: Record<string, unknown>,
  nextCursor?: string,
): FixtureEnvelope {
  const page = clone(fixture);
  const data = objectRecord(page.output.data);
  data[itemsField] = [item];
  if (nextCursor === undefined) {
    delete data["nextCursor"];
  } else {
    data["nextCursor"] = nextCursor;
  }
  page.items = 1;
  return page;
}

describe("generated SKU fixture sweep", () => {
  it.each(slugs)("%s", async (slug) => {
    const sku = mustSku(slug);
    const fixture = mustFixture(slug);
    const { fetch } = mockFetch([{ status: 200, body: fixture }]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 0 });

    const result = await methodFor(client, sku)(sku.example);

    if (sku.output.envelope === "bare") {
      // Bare SKU: output IS the data object directly (no found/data wrapper).
      expect(result.output).toBeTypeOf("object");
      expect((result.output as Record<string, unknown>)["found"]).toBeUndefined();
    } else {
      expect((result.output as { found: boolean }).found).toBe(true);
    }
    expect(result.provider).toBe("AnyAPI");
    expect(result.costUsd).toBeGreaterThan(0);
    if (hasPassthroughExtra(fixture)) {
      expect(hasPassthroughExtra(result)).toBe(true);
    }
  });
});

// Bare SKUs (SPEC 1.2 erratum): output is typed as the data payload directly. Prove typed
// attribute access and (for the paginated one) iteration work end to end through the typed
// surface, so a bare successful call never crashes or reads as not-found.
describe("bare-envelope SKU typed surface", () => {
  it("reddit.search: attribute access on output + typed iteration", async () => {
    const fixture = mustFixture("reddit.search");
    const post = { status: 200 as const, body: fixture };
    const client = new AnyAPI({
      apiKey: "k",
      fetch: mockFetch([post, post]).fetch,
      maxRetries: 0,
    });
    const res = await client.reddit.search({ query: "k" });
    // output IS the data object: posts[] and nextCursor read directly (no .data).
    expect(Array.isArray(res.output.posts)).toBe(true);
    expect(res.output.posts[0]!.title).toBe("sample");
    expect(typeof res.output.nextCursor).toBe("string");

    // The fixture's single page has a non-empty nextCursor "sample"; the second mocked page
    // repeats it, so cap the walk with maxItems to prove item iteration yields typed posts.
    const seen: string[] = [];
    for await (const item of client.reddit.iterSearch(
      { query: "k" },
      { maxItems: 1 },
    )) {
      seen.push(item.title);
    }
    expect(seen).toEqual(["sample"]);
  });

  it("reddit.post_comments: attribute access on bare output", async () => {
    const fixture = mustFixture("reddit.post_comments");
    const client = new AnyAPI({
      apiKey: "k",
      fetch: mockFetch([{ status: 200, body: fixture }]).fetch,
      maxRetries: 0,
    });
    const res = await client.reddit.postComments({ url: "https://reddit.com/r/x/comments/1" });
    expect(Array.isArray(res.output.comments)).toBe(true);
    expect(res.output.comments[0]!.body).toBe("sample");
  });
});

describe("generated SKU fixture edges", () => {
  it("maps generated method 404 and 402 errors", async () => {
    const sku = mustSku("amazon.reviews");
    const { fetch } = mockFetch([
      { status: 404, body: { error: "not found" } },
      { status: 402, body: { error: "insufficient balance" } },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 0 });
    const method = methodFor(client, sku);

    await expect(method(sku.example)).rejects.toBeInstanceOf(NotFoundError);
    await expect(method(sku.example)).rejects.toBeInstanceOf(
      InsufficientBalanceError,
    );
  });

  it("walks a generated iterator across two fixture pages", async () => {
    const sku = mustSku("facebook.ads_search");
    const itemsField = sku.pagination.itemsField;
    if (!itemsField) {
      throw new Error("facebook.ads_search must have an items field");
    }
    const fixture = mustFixture(sku.slug);
    const data = objectRecord(fixture.output.data);
    const items = data[itemsField];
    if (!Array.isArray(items) || !items[0]) {
      throw new Error("facebook.ads_search fixture must have an item");
    }
    const page1Item = { ...objectRecord(items[0]), id: "page-1" };
    const page2Item = { ...objectRecord(items[0]), id: "page-2" };
    const { fetch, calls } = mockFetch([
      { status: 200, body: pageWithItem(fixture, itemsField, page1Item, "c1") },
      { status: 200, body: pageWithItem(fixture, itemsField, page2Item) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 0 });

    const seen: Array<Record<string, unknown>> = [];
    for await (const item of iteratorFor(client, sku)(sku.example)) {
      seen.push(item);
    }

    expect(seen.map((item) => item["id"])).toEqual(["page-1", "page-2"]);
    expect(calls).toHaveLength(2);
    expect(JSON.parse(String(calls[1]!.init.body))["cursor"]).toBe("c1");
  });
});
