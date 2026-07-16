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

const linearApi = {
  id: "amazon.reviews",
  slug: "amazon.reviews",
  name: "Amazon Reviews",
  category: "shop",
  description: "Pull reviews",
  provider: "AnyAPI",
  pricing: {
    from: linearOffer,
    failoverMaxUsd: 0.05,
  },
  lanes: [
    {
      pricing: linearOffer,
      health: {
        window: "30d",
        uptimePct: 99.8,
        latencyP50Ms: 420,
        requests: 810,
      },
    },
    { pricing: failoverOffer },
  ],
  heavy: true,
  tryEligible: true,
};

const flatApi = {
  ...linearApi,
  id: "fixture.flat",
  slug: "fixture.flat",
  name: "Fixture Flat",
  pricing: { from: flatOffer, failoverMaxUsd: 0.00325 },
  lanes: [{ pricing: flatOffer }],
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

  it.each([
    [{ ...linearApi, lanes: [] }, "api.lanes"],
    [{ ...linearApi, lanes: [{ pricing: flatOffer }] }, "api.pricing.from"],
    [{ ...linearApi, unexpected: true }, "api.unexpected"],
    [
      {
        ...linearApi,
        pricing: { ...linearApi.pricing, from: { ...linearOffer, extra: 1 } },
      },
      "api.pricing.from.extra",
    ],
  ])("rejects invalid browse relationship/shape %#", async (api, message) => {
    const { fetch } = mockFetch([{ body: { apis: [api] } }]);
    await expect(new AnyAPI({ apiKey: "k", fetch }).catalog()).rejects.toThrow(
      message,
    );
  });

  it.each([
    [
      "redundant mixed flat/linear lanes",
      {
        ...linearApi,
        pricing: { ...linearApi.pricing, failoverMaxUsd: linearOffer.maxUsd },
      },
    ],
    [
      "one flat lane",
      {
        ...flatApi,
        pricing: { ...flatApi.pricing, failoverMaxUsd: 0.004 },
      },
    ],
  ])("rejects a wrong failover maximum for %s", async (_label, api) => {
    const { fetch } = mockFetch([{ body: { apis: [api] } }]);
    await expect(new AnyAPI({ apiKey: "k", fetch }).catalog()).rejects.toThrow(
      "api.pricing.failoverMaxUsd",
    );
  });

  it("rejects unexpected catalog envelope fields", async () => {
    const { fetch } = mockFetch([
      { body: { apis: [linearApi], unexpected: true } },
    ]);
    await expect(new AnyAPI({ apiKey: "k", fetch }).catalog()).rejects.toThrow(
      "catalog.unexpected",
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
      provider: "AnyAPI",
      pricing: linearApi.pricing,
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

  it("rejects lanes on search results and unexpected envelope fields", async () => {
    const result = {
      slug: linearApi.slug,
      platformId: "amazon",
      name: linearApi.name,
      description: linearApi.description,
      category: linearApi.category,
      provider: "AnyAPI",
      pricing: linearApi.pricing,
      relevance: 1,
      lanes: linearApi.lanes,
    };
    const row = mockFetch([
      { body: { results: [result], total: 1, ranking: "keyword" } },
    ]);
    await expect(
      new AnyAPI({ apiKey: "k", fetch: row.fetch }).search({ query: "x" }),
    ).rejects.toThrow("search.results[0].lanes");

    const envelope = mockFetch([
      {
        body: {
          results: [],
          total: 0,
          ranking: "keyword",
          unexpected: true,
        },
      },
    ]);
    await expect(
      new AnyAPI({ apiKey: "k", fetch: envelope.fetch }).search({ query: "x" }),
    ).rejects.toThrow("search.unexpected");
  });
});

describe("describe", () => {
  it("GETs /v1/apis/{slug} and maps one entry", async () => {
    const { fetch, calls } = mockFetch([
      {
        body: {
          ...linearApi,
          inputSchema: {
            type: "object",
            properties: { product: { type: "string" } },
          },
          outputSchema: { type: "object" },
        },
      },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const entry = await client.describe("amazon.reviews");
    expect(entry.inputSchema).toMatchObject({ type: "object" });
    expect(entry.outputSchema).toEqual({ type: "object" });
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

  it("rejects a failover maximum below a redundant lane maximum", async () => {
    const { fetch } = mockFetch([
      {
        body: {
          ...linearApi,
          pricing: {
            ...linearApi.pricing,
            failoverMaxUsd: linearOffer.maxUsd,
          },
          inputSchema: { type: "object" },
          outputSchema: { type: "object" },
        },
      },
    ]);
    await expect(
      new AnyAPI({ apiKey: "k", fetch }).describe("amazon.reviews"),
    ).rejects.toThrow("api.pricing.failoverMaxUsd");
  });

  it("rejects a detail response without schemas", async () => {
    const { fetch } = mockFetch([{ body: linearApi }]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    await expect(client.describe("amazon.reviews")).rejects.toThrow(
      "api.inputSchema",
    );
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
