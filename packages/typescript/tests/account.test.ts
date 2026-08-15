import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { AnyAPI, NotFoundError, agentSignup } from "../src/index.js";
import { mockFetch } from "./helpers.js";

type MutableRecord = Record<string, unknown>;
type MutableOffer = MutableRecord & { maxUsd: number; maxPer1kUsd: number };
type MutableLane = MutableRecord & {
  pricing: MutableOffer;
  source: MutableRecord;
  health?: MutableRecord;
};
type MutableApi = MutableRecord & {
  execution: MutableRecord;
  pricing: MutableRecord & {
    from: MutableOffer;
    failoverMaxUsd: number;
    failoverMaxPer1kUsd: number;
  };
  lanes: MutableLane[];
  latency?: MutableRecord | null;
};
type MutableSearchResult = MutableRecord & {
  pricing: MutableApi["pricing"];
  highlightFields?: MutableRecord[];
};
type MutableSearch = MutableRecord & {
  results: MutableSearchResult[];
  total: number;
  ranking: string;
};
type DiscoveryGolden = {
  version: number;
  rest: {
    browse: MutableRecord & { apis: MutableApi[] };
    search: MutableSearch;
    detail: Record<string, MutableApi>;
  };
};

const goldenSource =
  "getanyapi-com/anyapi@4a08ba36a2f80368b667ea62fbd0f693a24f5e88:testdata/discovery-v1.json";
const goldenSha256 =
  "6ad78f2cfb6aef1f3461602517b93767185319f61860d8e3eb788232b1b0a062";
const goldenBytes = readFileSync(
  new URL("../../../testdata/discovery-v1.json", import.meta.url),
);
const golden = JSON.parse(goldenBytes.toString("utf8")) as DiscoveryGolden;
const clone = <T>(value: T): T => structuredClone(value);
const linearApi = golden.rest.browse.apis[0]!;
const linearOffer = linearApi.pricing.from;
const failoverOffer = linearApi.lanes[2]!.pricing;
const latency = golden.rest.detail["linear.data"]!.latency as MutableRecord;

describe("discovery V1 golden", () => {
  it(`matches the pinned ${goldenSource}`, () => {
    expect(golden.version).toBe(1);
    expect(createHash("sha256").update(goldenBytes).digest("hex")).toBe(
      goldenSha256,
    );
  });
});

describe("balance", () => {
  it("GETs /v1/balance and returns { usd }", async () => {
    const { fetch, calls } = mockFetch([{ body: { usd: 12.5 } }]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const res = await client.balance();
    expect(res).toEqual({ usd: 12.5 });
    expect(calls[0]!.url).toBe("https://api.getanyapi.com/v1/balance");
    expect(calls[0]!.init.method).toBe("GET");
  });
});

describe("me", () => {
  it("maps /v1/me and drops internal-only fields", async () => {
    const { fetch } = mockFetch([
      {
        body: {
          id: "u_1",
          email: "a@b.com",
          status: "active",
          createdAt: "2026-01-01T00:00:00Z",
          onboardingComplete: true,
          clerkUserId: "clerk_x",
          signupGrantApplied: true,
        },
      },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const profile = await client.me();
    expect(profile).toEqual({
      id: "u_1",
      email: "a@b.com",
      status: "active",
      createdAt: "2026-01-01T00:00:00Z",
      onboardingComplete: true,
    });
    expect("clerkUserId" in profile).toBe(false);
    expect("signupGrantApplied" in profile).toBe(false);
  });

  it("omits email when null", async () => {
    const { fetch } = mockFetch([
      {
        body: {
          id: "u",
          status: "active",
          createdAt: "t",
          onboardingComplete: false,
          email: null,
        },
      },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const profile = await client.me();
    expect("email" in profile).toBe(false);
  });
});

describe("catalog", () => {
  it("reads every shared browse field and forwards category", async () => {
    const body = clone(golden.rest.browse);
    const { fetch, calls } = mockFetch([{ body }]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const entries = await client.catalog({ category: "data" });
    const expected = body.apis.map((api) => ({ heavy: false, ...api }));
    expect(entries).toEqual(expected);
    const url = new URL(calls[0]!.url);
    expect(url.pathname).toBe("/v1/apis");
    expect(url.searchParams.has("query")).toBe(false);
    expect(url.searchParams.get("category")).toBe("data");
  });

  it("rejects legacy, partial, and unknown pricing contracts", async () => {
    const { fetch } = mockFetch([{ body: { apis: [{ slug: "x.y" }] } }]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    await expect(client.catalog()).rejects.toThrow(
      "malformed discovery response",
    );
  });

  it.each([
    [{ ...linearApi, method: "GET" }, "api.method"],
    [{ ...linearApi, path: "operations/linear.data" }, "api.path"],
    [{ ...linearApi, execution: { mode: "async" } }, "api.execution.mode"],
  ])("rejects malformed operation authority %#", async (api, message) => {
    const { fetch } = mockFetch([{ body: { apis: [api] } }]);
    await expect(new AnyAPI({ apiKey: "k", fetch }).catalog()).rejects.toThrow(
      message,
    );
  });

  it("normalizes the adapter's omitted false heavy flag and rejects non-booleans", async () => {
    const withoutHeavy = clone(golden.rest.browse.apis[1]!);
    expect(withoutHeavy).not.toHaveProperty("heavy");
    const omitted = mockFetch([{ body: { apis: [withoutHeavy] } }]);
    expect(
      (await new AnyAPI({ apiKey: "k", fetch: omitted.fetch }).catalog())[0]!
        .heavy,
    ).toBe(false);

    const malformed = mockFetch([
      { body: { apis: [{ ...withoutHeavy, heavy: "false" }] } },
    ]);
    await expect(
      new AnyAPI({ apiKey: "k", fetch: malformed.fetch }).catalog(),
    ).rejects.toThrow("api.heavy");
  });

  it("accepts safe additive fields and gateway-owned relationship disagreements", async () => {
    const api = clone(linearApi);
    const lane = clone(linearApi.lanes[1]!);
    api.unexpected = true;
    api.execution = { ...api.execution, unexpected: true };
    api.pricing = {
      ...api.pricing,
      failoverMaxUsd: 0.004,
      unexpected: true,
      from: { ...linearOffer, maxUsd: 0.02, unexpected: true },
    };
    lane.source = { ...lane.source, unexpected: true };
    lane.health = { ...linearApi.lanes[0]!.health, unexpected: true };
    lane.unexpected = true;
    api.lanes = [lane];
    const { fetch } = mockFetch([{ body: { apis: [api], unexpected: true } }]);
    const [entry] = await new AnyAPI({ apiKey: "k", fetch }).catalog();
    expect(entry?.pricing).toMatchObject({
      from: { model: "linear", maxUsd: 0.02 },
      failoverMaxUsd: 0.004,
    });
    expect(entry?.lanes[0]).toEqual({
      pricing: linearApi.lanes[1]!.pricing,
      source: linearApi.lanes[1]!.source,
      health: linearApi.lanes[0]!.health,
    });
    expect(entry).toMatchObject({ failover: true, excludesCallerDelay: true });
    expect("unexpected" in entry!).toBe(false);
    expect("unexpected" in entry!.pricing).toBe(false);
    expect("unexpected" in entry!.pricing.from).toBe(false);
  });

  it("accepts empty lanes and older responses without optional routing facts", async () => {
    const {
      failover: _failover,
      excludesCallerDelay: _excludesCallerDelay,
      ...older
    } = linearApi;
    const { fetch } = mockFetch([
      { body: { apis: [{ ...older, lanes: [] }] } },
    ]);
    const [entry] = await new AnyAPI({ apiKey: "k", fetch }).catalog();
    expect(entry!.lanes).toEqual([]);
    expect(entry!.failover).toBeUndefined();
    expect(entry!.excludesCallerDelay).toBeUndefined();
  });

  it.each([
    [
      { ...linearApi, future: { creditBalance: 1 } },
      "catalog.apis[0].future.creditBalance",
    ],
    [
      { ...linearApi, future: { provider: "upstream" } },
      "catalog.apis[0].future.provider",
    ],
  ])("rejects unsafe fields before projection %#", async (api, message) => {
    const { fetch } = mockFetch([{ body: { apis: [api] } }]);
    await expect(new AnyAPI({ apiKey: "k", fetch }).catalog()).rejects.toThrow(
      message,
    );
  });
});

describe("per-1,000-request pricing", () => {
  // booking.search in production: 0.0966 per request, 96.6 per 1,000. Multiplying in
  // JavaScript yields 96.60000000000001, so the reader must take the published value.
  const per1kApi = (): MutableApi => {
    const offer: MutableOffer = {
      ...clone(linearOffer),
      maxUsd: 0.0966,
      maxPer1kUsd: 96.6,
    };
    const api = clone(linearApi);
    api.pricing = {
      ...api.pricing,
      from: offer,
      failoverMaxUsd: 0.0966,
      failoverMaxPer1kUsd: 96.6,
    };
    api.lanes = [{ ...clone(linearApi.lanes[0]!), pricing: clone(offer) }];
    return api;
  };

  it("reads the published rate instead of multiplying maxUsd by 1000", async () => {
    expect(0.0966 * 1000).not.toBe(96.6);
    const { fetch } = mockFetch([{ body: { apis: [per1kApi()] } }]);
    const [entry] = await new AnyAPI({ apiKey: "k", fetch }).catalog();
    expect(entry!.pricing.from.maxUsd).toBe(0.0966);
    expect(entry!.pricing.from.maxPer1kUsd).toBe(96.6);
    expect(entry!.pricing.failoverMaxPer1kUsd).toBe(96.6);
    expect(entry!.lanes[0]!.pricing.maxPer1kUsd).toBe(96.6);
  });

  it.each([
    ["from", "maxPer1kUsd", "api.pricing.from.maxPer1kUsd"],
    ["wrapper", "failoverMaxPer1kUsd", "api.pricing.failoverMaxPer1kUsd"],
  ])("rejects a %s offer without %s", async (scope, key, message) => {
    const api = per1kApi();
    const target = scope === "from" ? api.pricing.from : api.pricing;
    delete (target as MutableRecord)[key];
    const { fetch } = mockFetch([{ body: { apis: [api] } }]);
    await expect(new AnyAPI({ apiKey: "k", fetch }).catalog()).rejects.toThrow(
      message,
    );
  });
});

describe("search", () => {
  it("reads every shared ranked-search field and forwards filters", async () => {
    const body = clone(golden.rest.search);
    const { fetch, calls } = mockFetch([{ body }]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const found = await client.search({
      query: "data",
      category: "data",
      platform: "linear",
      limit: 2,
    });
    expect(found).toEqual(body);
    const url = new URL(calls[0]!.url);
    expect(url.pathname).toBe("/catalog/search");
    expect(Object.fromEntries(url.searchParams)).toEqual({
      q: "data",
      category: "data",
      platform: "linear",
      limit: "2",
    });
  });

  it("rejects an upstream provider identity", async () => {
    const body = clone(golden.rest.search);
    body.results[0]!.provider = "upstream";
    const { fetch } = mockFetch([{ body }]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    await expect(client.search({ query: "x" })).rejects.toThrow(
      "search.results[0].provider",
    );
  });

  it("drops safe additive search result and envelope fields", async () => {
    const body = clone(golden.rest.search);
    const result = body.results[0]!;
    body.results = [result];
    body.total = 1;
    body.ranking = "keyword";
    body.unexpected = true;
    result.pricing = {
      ...result.pricing,
      future: true,
      from: { ...result.pricing.from, future: true },
    };
    result.lanes = clone(linearApi.lanes);
    result.future = true;
    result.highlightFields = [
      {
        path: "items[].title",
        type: "string",
        why: "title",
        future: true,
      },
    ];
    const row = mockFetch([{ body }]);
    const found = await new AnyAPI({
      apiKey: "k",
      fetch: row.fetch,
    }).search({ query: "x" });
    expect(found.results).toHaveLength(1);
    expect("lanes" in found.results[0]!).toBe(false);
    expect("future" in found.results[0]!).toBe(false);
    expect("future" in found.results[0]!.pricing).toBe(false);
    expect("future" in found.results[0]!.pricing.from).toBe(false);
    expect(found.results[0]!.highlightFields).toEqual([
      { path: "items[].title", type: "string", why: "title" },
    ]);
    expect("future" in found.results[0]!.highlightFields![0]!).toBe(false);
  });
});

describe("describe", () => {
  it("reads every shared populated and nullable detail field", async () => {
    const linear = clone(golden.rest.detail["linear.data"]!);
    const flat = clone(golden.rest.detail["flat.data"]!);
    const { fetch, calls } = mockFetch([
      { body: linear },
      { body: flat },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    expect(await client.describe("linear.data")).toEqual(linear);
    expect(await client.describe("flat.data")).toEqual({ heavy: false, ...flat });
    expect(calls.map((call) => call.url)).toEqual([
      "https://api.getanyapi.com/v1/apis/linear.data",
      "https://api.getanyapi.com/v1/apis/flat.data",
    ]);
  });

  it("propagates a 404 as NotFoundError", async () => {
    const { fetch } = mockFetch([
      { status: 404, body: { error: "no such sku" } },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 0 });
    await expect(client.describe("nope.nope")).rejects.toBeInstanceOf(
      NotFoundError,
    );
  });

  it("accepts gateway-owned pricing and lane disagreements in detail", async () => {
    const body = clone(golden.rest.detail["linear.data"]!);
    body.pricing.failoverMaxUsd = linearOffer.maxUsd;
    body.latency = null;
    const { fetch } = mockFetch([{ body }]);
    const entry = await new AnyAPI({ apiKey: "k", fetch }).describe(
      "linear.data",
    );
    expect(entry.pricing.failoverMaxUsd).toBe(linearOffer.maxUsd);
    expect(entry.lanes[2]!.pricing.maxUsd).toBe(failoverOffer.maxUsd);
    expect(entry.latency).toBeNull();
  });

  it("rejects a detail response without schemas", async () => {
    const { fetch } = mockFetch([{ body: linearApi }]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    await expect(client.describe("linear.data")).rejects.toThrow(
      "api.inputSchema",
    );
  });

  it("requires nullable latency on detail and validates its complete shape", async () => {
    const missingBody = clone(golden.rest.detail["linear.data"]!);
    delete missingBody.latency;
    const missing = mockFetch([{ body: missingBody }]);
    await expect(
      new AnyAPI({ apiKey: "k", fetch: missing.fetch }).describe("linear.data"),
    ).rejects.toThrow("api.latency");

    const malformedBody = clone(golden.rest.detail["linear.data"]!);
    malformedBody.latency = { ...latency, p95Ms: "invalid" };
    const malformed = mockFetch([{ body: malformedBody }]);
    await expect(
      new AnyAPI({ apiKey: "k", fetch: malformed.fetch }).describe("linear.data"),
    ).rejects.toThrow("api.latency.p95Ms");
  });
});

describe("agentSignup", () => {
  it("POSTs /agent/signup with NO auth header and maps the result", async () => {
    const { fetch, calls } = mockFetch([
      {
        body: {
          secret: "sk_new",
          capUsd: 5,
          claimToken: "tok",
          claimUrl: "https://getanyapi.com/claim/tok",
        },
      },
    ]);
    const res = await agentSignup({
      fetch,
      sponsorEmail: "h@x.com",
      label: "bot",
    });
    expect(res).toEqual({
      secret: "sk_new",
      capUsd: 5,
      claimToken: "tok",
      claimUrl: "https://getanyapi.com/claim/tok",
    });
    const call = calls[0]!;
    expect(call.url).toBe("https://api.getanyapi.com/agent/signup");
    expect(call.init.method).toBe("POST");
    const headers = call.init.headers as Record<string, string>;
    expect(headers["Authorization"]).toBeUndefined();
    expect(call.init.body).toBe(
      JSON.stringify({ sponsorEmail: "h@x.com", label: "bot" }),
    );
  });
});
