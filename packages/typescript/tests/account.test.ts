import { describe, expect, it } from "vitest";
import { AnyAPI, NotFoundError, agentSignup } from "../src/index.js";
import { mockFetch } from "./helpers.js";

const linearOffer = {
  model: "linear",
  unit: "result",
  baseUsd: 0.00005,
  perUnitUsd: 0.0008,
  maxUsd: 0.04002,
};

const flatOffer = { model: "flat", unit: "request", maxUsd: 0.00325 };
const failoverOffer = { model: "flat", unit: "request", maxUsd: 0.05 };
const source = {
  id: "silver-fox",
  name: "Silver Fox",
  kind: "anonymous",
  artworkKey: "fox",
};
const latency = {
  window: "30d",
  p50Ms: 52399,
  p95Ms: 106562,
  p99Ms: 115492,
  sample: 157,
  basis: "service_time_excludes_caller_requested_delay",
  future: true,
};

const linearApi = {
  id: "amazon.reviews",
  slug: "amazon.reviews",
  name: "Amazon Reviews",
  category: "shop",
  description: "Pull reviews",
  method: "POST",
  path: "/v1/run/amazon.reviews",
  execution: { mode: "sync" },
  provider: "AnyAPI",
  pricing: {
    from: linearOffer,
    failoverMaxUsd: 0.05,
  },
  lanes: [
    {
      pricing: linearOffer,
      source,
      health: {
        window: "30d",
        uptimePct: 99.8,
        latencyP50Ms: 420,
        uptimeSample: 900,
        latencySample: 810,
        requests: 810,
        servedRequests: 800,
      },
    },
    { pricing: failoverOffer, source: { ...source, id: "amber-owl" } },
  ],
  heavy: true,
  tryEligible: true,
  tryMaxItems: 3,
  failover: true,
  excludesCallerDelay: true,
};

const flatApi = {
  ...linearApi,
  id: "fixture.flat",
  slug: "fixture.flat",
  name: "Fixture Flat",
  pricing: { from: flatOffer, failoverMaxUsd: 0.00325 },
  lanes: [{ pricing: flatOffer, source }],
  heavy: false,
};

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
  it("browses by category and preserves nested flat/linear USD offers", async () => {
    const { fetch, calls } = mockFetch([
      { body: { apis: [linearApi, flatApi] } },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const entries = await client.catalog({ category: "shop" });
    expect(entries).toEqual([linearApi, flatApi]);
    expect(entries[0]!.pricing.from).toMatchObject({
      model: "linear",
      baseUsd: 0.00005,
      perUnitUsd: 0.0008,
      maxUsd: 0.04002,
    });
    expect(entries[0]!.lanes[0]!.pricing).toEqual(linearOffer);
    expect(entries[0]!.lanes[0]!.source).toEqual({
      id: "silver-fox",
      name: "Silver Fox",
      kind: "anonymous",
      artworkKey: "fox",
    });
    expect(entries[0]!.lanes[0]!.health).toMatchObject({
      uptimeSample: 900,
      latencySample: 810,
      servedRequests: 800,
    });
    expect(entries[0]).toMatchObject({
      method: "POST",
      path: "/v1/run/amazon.reviews",
      execution: { mode: "sync" },
      tryMaxItems: 3,
    });
    expect(entries[1]!.pricing.from).toEqual(flatOffer);
    const url = new URL(calls[0]!.url);
    expect(url.pathname).toBe("/v1/apis");
    expect(url.searchParams.has("query")).toBe(false);
    expect(url.searchParams.get("category")).toBe("shop");
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
    [{ ...linearApi, path: "v1/run/amazon.reviews" }, "api.path"],
    [{ ...linearApi, execution: { mode: "async" } }, "api.execution.mode"],
  ])("rejects malformed operation authority %#", async (api, message) => {
    const { fetch } = mockFetch([{ body: { apis: [api] } }]);
    await expect(new AnyAPI({ apiKey: "k", fetch }).catalog()).rejects.toThrow(
      message,
    );
  });

  it("normalizes the adapter's omitted false heavy flag and rejects non-booleans", async () => {
    const { heavy: _heavy, ...withoutHeavy } = linearApi;
    const omitted = mockFetch([{ body: { apis: [withoutHeavy] } }]);
    expect(
      (await new AnyAPI({ apiKey: "k", fetch: omitted.fetch }).catalog())[0]!
        .heavy,
    ).toBe(false);

    const malformed = mockFetch([
      { body: { apis: [{ ...linearApi, heavy: "false" }] } },
    ]);
    await expect(
      new AnyAPI({ apiKey: "k", fetch: malformed.fetch }).catalog(),
    ).rejects.toThrow("api.heavy");
  });

  it("accepts safe additive fields and gateway-owned relationship disagreements", async () => {
    const api = {
      ...linearApi,
      unexpected: true,
      execution: { ...linearApi.execution, unexpected: true },
      pricing: {
        ...linearApi.pricing,
        failoverMaxUsd: 0.004,
        unexpected: true,
        from: { ...linearOffer, maxUsd: 0.02, unexpected: true },
      },
      lanes: [
        {
          pricing: flatOffer,
          source: { ...source, unexpected: true },
          health: {
            window: "7d",
            uptimePct: 98,
            latencyP50Ms: 10,
            uptimeSample: 3,
            latencySample: 2,
            requests: 2,
            servedRequests: 2,
            unexpected: true,
          },
          unexpected: true,
        },
      ],
    };
    const { fetch } = mockFetch([{ body: { apis: [api], unexpected: true } }]);
    const [entry] = await new AnyAPI({ apiKey: "k", fetch }).catalog();
    expect(entry).toMatchObject({
      pricing: {
        from: { model: "linear", maxUsd: 0.02 },
        failoverMaxUsd: 0.004,
      },
      lanes: [
        {
          pricing: flatOffer,
          health: { window: "7d" },
          source,
        },
      ],
      failover: true,
      excludesCallerDelay: true,
    });
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

describe("search", () => {
  it("uses /catalog/search and maps relevance, totals, ranking, and filters", async () => {
    const result = {
      slug: linearApi.slug,
      platformId: "amazon",
      name: linearApi.name,
      description: linearApi.description,
      category: linearApi.category,
      method: linearApi.method,
      path: linearApi.path,
      execution: { mode: "durable" },
      provider: "AnyAPI",
      pricing: linearApi.pricing,
      tryMaxItems: 3,
      failover: true,
      excludesCallerDelay: true,
      relevance: 0.91,
      highlightFields: [
        { path: "items[].title", type: "string", why: "title" },
      ],
    };
    const { fetch, calls } = mockFetch([
      { body: { results: [result], total: 4, ranking: "semantic" } },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const found = await client.search({
      query: "reviews",
      category: "shop",
      platform: "amazon",
      limit: 3,
    });
    expect(found).toEqual({ results: [result], total: 4, ranking: "semantic" });
    expect(found.results[0]).toMatchObject({
      method: "POST",
      path: "/v1/run/amazon.reviews",
      execution: { mode: "durable" },
      tryMaxItems: 3,
      failover: true,
      excludesCallerDelay: true,
    });
    const url = new URL(calls[0]!.url);
    expect(url.pathname).toBe("/catalog/search");
    expect(Object.fromEntries(url.searchParams)).toEqual({
      q: "reviews",
      category: "shop",
      platform: "amazon",
      limit: "3",
    });
  });

  it("rejects an upstream provider identity", async () => {
    const { fetch } = mockFetch([
      {
        body: {
          results: [
            {
              slug: "x.y",
              platformId: "x",
              name: "X",
              description: "Y",
              category: "test",
              provider: "upstream",
              pricing: linearApi.pricing,
              relevance: 1,
            },
          ],
          total: 1,
          ranking: "keyword",
        },
      },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    await expect(client.search({ query: "x" })).rejects.toThrow(
      "search.results[0].provider",
    );
  });

  it("drops safe additive search result and envelope fields", async () => {
    const result = {
      slug: linearApi.slug,
      platformId: "amazon",
      name: linearApi.name,
      description: linearApi.description,
      category: linearApi.category,
      method: linearApi.method,
      path: linearApi.path,
      execution: linearApi.execution,
      provider: "AnyAPI",
      pricing: {
        ...linearApi.pricing,
        future: true,
        from: { ...linearApi.pricing.from, future: true },
      },
      relevance: 1,
      failover: false,
      lanes: linearApi.lanes,
      future: true,
      highlightFields: [
        {
          path: "items[].title",
          type: "string",
          why: "title",
          future: true,
        },
      ],
    };
    const row = mockFetch([
      {
        body: {
          results: [result],
          total: 1,
          ranking: "keyword",
          unexpected: true,
        },
      },
    ]);
    const found = await new AnyAPI({
      apiKey: "k",
      fetch: row.fetch,
    }).search({ query: "x" });
    expect(found.results).toHaveLength(1);
    expect("lanes" in found.results[0]!).toBe(false);
    expect("future" in found.results[0]!).toBe(false);
    expect("future" in found.results[0]!.pricing).toBe(false);
    expect("future" in found.results[0]!.pricing.from).toBe(false);
    expect("future" in found.results[0]!.highlightFields![0]!).toBe(false);
  });
});

describe("describe", () => {
  it("GETs /v1/apis/{slug} and maps one entry", async () => {
    const { fetch, calls } = mockFetch([
      {
        body: {
          ...linearApi,
          latency,
          inputSchema: {
            type: "object",
            properties: { product: { type: "string" } },
            unevaluatedProperties: false,
            futureKeyword: { nested: [1, true, null] },
          },
          outputSchema: {
            type: "object",
            $defs: { item: { type: "string", futureKeyword: true } },
          },
        },
      },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const entry = await client.describe("amazon.reviews");
    expect(entry.inputSchema).toEqual({
      type: "object",
      properties: { product: { type: "string" } },
      unevaluatedProperties: false,
      futureKeyword: { nested: [1, true, null] },
    });
    expect(entry.outputSchema).toEqual({
      type: "object",
      $defs: { item: { type: "string", futureKeyword: true } },
    });
    expect(entry.latency).toEqual({
      window: "30d",
      p50Ms: 52399,
      p95Ms: 106562,
      p99Ms: 115492,
      sample: 157,
      basis: "service_time_excludes_caller_requested_delay",
    });
    expect(calls[0]!.url).toBe(
      "https://api.getanyapi.com/v1/apis/amazon.reviews",
    );
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
    const { fetch } = mockFetch([
      {
        body: {
          ...linearApi,
          latency: null,
          pricing: {
            ...linearApi.pricing,
            failoverMaxUsd: linearOffer.maxUsd,
          },
          inputSchema: { type: "object" },
          outputSchema: { type: "object" },
        },
      },
    ]);
    const entry = await new AnyAPI({ apiKey: "k", fetch }).describe(
      "amazon.reviews",
    );
    expect(entry.pricing.failoverMaxUsd).toBe(linearOffer.maxUsd);
    expect(entry.lanes[1]!.pricing.maxUsd).toBe(failoverOffer.maxUsd);
    expect(entry.latency).toBeNull();
  });

  it("rejects a detail response without schemas", async () => {
    const { fetch } = mockFetch([{ body: linearApi }]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    await expect(client.describe("amazon.reviews")).rejects.toThrow(
      "api.inputSchema",
    );
  });

  it("requires nullable latency on detail and validates its complete shape", async () => {
    const missing = mockFetch([
      {
        body: {
          ...linearApi,
          inputSchema: { type: "object" },
          outputSchema: { type: "object" },
        },
      },
    ]);
    await expect(
      new AnyAPI({ apiKey: "k", fetch: missing.fetch }).describe(
        "amazon.reviews",
      ),
    ).rejects.toThrow("api.latency");

    const malformed = mockFetch([
      {
        body: {
          ...linearApi,
          inputSchema: { type: "object" },
          outputSchema: { type: "object" },
          latency: { ...latency, p95Ms: "106562" },
        },
      },
    ]);
    await expect(
      new AnyAPI({ apiKey: "k", fetch: malformed.fetch }).describe(
        "amazon.reviews",
      ),
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
