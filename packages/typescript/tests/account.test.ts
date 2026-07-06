import { describe, expect, it } from "vitest";
import { AnyAPI, NotFoundError, agentSignup } from "../src/index.js";
import { mockFetch } from "./helpers.js";

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
      { body: { id: "u", status: "active", createdAt: "t", onboardingComplete: false, email: null } },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const profile = await client.me();
    expect("email" in profile).toBe(false);
  });
});

describe("catalog", () => {
  it("maps /v1/apis, deriving platform/action and converting credits to USD", async () => {
    const { fetch, calls } = mockFetch([
      {
        body: {
          apis: [
            { slug: "amazon.reviews", name: "Amazon Reviews", category: "ecommerce", description: "d", fromCredits: 1625 },
          ],
        },
      },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const entries = await client.catalog({ query: "amazon", category: "ecommerce" });
    expect(entries).toEqual([
      {
        slug: "amazon.reviews",
        platform: "amazon",
        action: "reviews",
        name: "Amazon Reviews",
        category: "ecommerce",
        description: "d",
        priceUsd: 0.01625,
      },
    ]);
    const url = new URL(calls[0]!.url);
    expect(url.pathname).toBe("/v1/apis");
    expect(url.searchParams.get("query")).toBe("amazon");
    expect(url.searchParams.get("category")).toBe("ecommerce");
  });

  it("tolerates missing fields (null category / missing fromCredits)", async () => {
    const { fetch } = mockFetch([{ body: { apis: [{ slug: "x.y" }] } }]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const [entry] = await client.catalog();
    expect(entry).toEqual({
      slug: "x.y",
      platform: "x",
      action: "y",
      name: "",
      category: "",
      description: "",
      priceUsd: 0,
    });
  });
});

describe("describe", () => {
  it("GETs /v1/apis/{slug} and maps one entry", async () => {
    const { fetch, calls } = mockFetch([
      { body: { slug: "google.search", name: "Google Search", fromCredits: 500 } },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const entry = await client.describe("google.search");
    expect(entry.slug).toBe("google.search");
    expect(entry.platform).toBe("google");
    expect(entry.action).toBe("search");
    expect(entry.priceUsd).toBe(0.005);
    expect(calls[0]!.url).toBe("https://api.getanyapi.com/v1/apis/google.search");
  });

  it("propagates a 404 as NotFoundError", async () => {
    const { fetch } = mockFetch([{ status: 404, body: { error: "no such sku" } }]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 0 });
    await expect(client.describe("nope.nope")).rejects.toBeInstanceOf(NotFoundError);
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
    const res = await agentSignup({ fetch, sponsorEmail: "h@x.com", label: "bot" });
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
    expect(call.init.body).toBe(JSON.stringify({ sponsorEmail: "h@x.com", label: "bot" }));
  });
});
