import { describe, expect, it } from "vitest";
import { AnyAPI, unwrap } from "../src/index.js";
import { NotFoundError } from "../src/index.js";
import { foundEnvelope, mockFetch, notFoundEnvelope } from "./helpers.js";

describe("run: success envelope", () => {
  it("parses a found envelope and posts to /v1/run/{slug} with Bearer auth", async () => {
    const { fetch, calls } = mockFetch([{ body: foundEnvelope({ title: "hi" }, { items: 1 }) }]);
    const client = new AnyAPI({ apiKey: "sk_test", fetch });

    const res = await client.run("amazon.reviews", { product: "B07" });

    expect(res.provider).toBe("AnyAPI");
    expect(res.costUsd).toBe(0.001);
    expect(res.items).toBe(1);
    expect(res.output.found).toBe(true);
    if (res.output.found) {
      expect(res.output.data).toEqual({ title: "hi" });
    }

    expect(calls).toHaveLength(1);
    const call = calls[0]!;
    expect(call.url).toBe("https://api.getanyapi.com/v1/run/amazon.reviews");
    expect(call.init.method).toBe("POST");
    const headers = call.init.headers as Record<string, string>;
    expect(headers["Authorization"]).toBe("Bearer sk_test");
    expect(headers["Content-Type"]).toBe("application/json");
    expect(headers["Accept"]).toBe("application/json");
    expect(call.init.body).toBe(JSON.stringify({ product: "B07" }));
  });

  it("passes hint through", async () => {
    const { fetch } = mockFetch([
      { body: foundEnvelope([1, 2], { hint: "use fields to trim" }) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const res = await client.run("x.y", {});
    expect(res.hint).toBe("use fields to trim");
  });

  it("throws immediately when no key and no ANYAPI_API_KEY (S6)", () => {
    delete process.env["ANYAPI_API_KEY"];
    const { fetch } = mockFetch([{ body: foundEnvelope({}) }]);
    expect(() => new AnyAPI({ fetch })).toThrow(
      "no API key: pass apiKey or set ANYAPI_API_KEY",
    );
  });

  it("reads ANYAPI_API_KEY from env when apiKey omitted", async () => {
    process.env["ANYAPI_API_KEY"] = "sk_env";
    const { fetch, calls } = mockFetch([{ body: foundEnvelope({}) }]);
    const client = new AnyAPI({ fetch });
    await client.run("x.y", {});
    const headers = calls[0]!.init.headers as Record<string, string>;
    expect(headers["Authorization"]).toBe("Bearer sk_env");
    delete process.env["ANYAPI_API_KEY"];
  });
});

describe("run: query param shaping", () => {
  it("sends fields, max_items, summary when set", async () => {
    const { fetch, calls } = mockFetch([{ body: foundEnvelope({}) }]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    await client.run("a.b", {}, { fields: ["id", "name"], maxItems: 5, summary: true });
    const url = new URL(calls[0]!.url);
    expect(url.searchParams.get("fields")).toBe("id,name");
    expect(url.searchParams.get("max_items")).toBe("5");
    expect(url.searchParams.get("summary")).toBe("true");
  });

  it("omits shaping params when unset", async () => {
    const { fetch, calls } = mockFetch([{ body: foundEnvelope({}) }]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    await client.run("a.b", {});
    const url = new URL(calls[0]!.url);
    expect(url.searchParams.has("fields")).toBe(false);
    expect(url.searchParams.has("max_items")).toBe(false);
    expect(url.searchParams.has("summary")).toBe(false);
  });

  it("respects a custom baseUrl and trims trailing slashes", async () => {
    const { fetch, calls } = mockFetch([{ body: foundEnvelope({}) }]);
    const client = new AnyAPI({ apiKey: "k", fetch, baseUrl: "https://gw.example.com/" });
    await client.run("a.b", {});
    expect(calls[0]!.url).toBe("https://gw.example.com/v1/run/a.b");
  });
});

describe("unwrap", () => {
  it("returns data when found", () => {
    expect(unwrap({ output: { found: true, data: 42 }, provider: "AnyAPI", costUsd: 0 })).toBe(42);
  });

  it("throws NotFoundError when not found", () => {
    const res = notFoundEnvelope() as Parameters<typeof unwrap>[0];
    expect(() => unwrap(res)).toThrow(NotFoundError);
    try {
      unwrap(res);
    } catch (e) {
      expect((e as NotFoundError).message).toBe("no matching result was found");
      expect((e as NotFoundError).status).toBe(404);
    }
  });
});
