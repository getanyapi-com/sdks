import { describe, expect, it } from "vitest";
import {
  AnyAPI,
  AnyAPIError,
  AuthenticationError,
  BadRequestError,
  InsufficientBalanceError,
  NotFoundError,
  RateLimitedError,
  UpstreamError,
} from "../src/index.js";
import { mockFetch } from "./helpers.js";

const cases: Array<[number, new (...a: never[]) => AnyAPIError]> = [
  [400, BadRequestError],
  [401, AuthenticationError],
  [402, InsufficientBalanceError],
  [404, NotFoundError],
  [502, UpstreamError],
];

describe("status to error mapping", () => {
  for (const [status, Cls] of cases) {
    it(`${status} -> ${Cls.name}`, async () => {
      const { fetch } = mockFetch([
        {
          status,
          body: { error: `boom ${status}` },
          // The gateway's real header name (SPEC 2.6), not the conventional one.
          headers: { "X-Anyapi-Request-Id": "rid-1" },
        },
      ]);
      const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 0 });
      await expect(client.run("a.b", {})).rejects.toBeInstanceOf(Cls);
      try {
        await client.run("a.b", {});
      } catch (e) {
        const err = e as AnyAPIError;
        expect(err.status).toBe(status);
        expect(err.message).toBe(`boom ${status}`);
        expect(err.requestId).toBe("rid-1");
      }
    });
  }

  it("unknown non-2xx -> base AnyAPIError carrying the status", async () => {
    const { fetch } = mockFetch([{ status: 418, body: { error: "teapot" } }]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 0 });
    try {
      await client.run("a.b", {});
      throw new Error("should have thrown");
    } catch (e) {
      expect(e).toBeInstanceOf(AnyAPIError);
      expect(e).not.toBeInstanceOf(BadRequestError);
      expect((e as AnyAPIError).status).toBe(418);
    }
  });

  it("falls back to a generic message when the body is not JSON", async () => {
    const { fetch } = mockFetch([{ status: 500, body: "<html>oops</html>" }]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 0 });
    try {
      await client.run("a.b", {});
    } catch (e) {
      expect((e as AnyAPIError).message).toBe("request failed with status 500");
    }
  });

  it("429 without retries left throws RateLimitedError", async () => {
    const { fetch } = mockFetch([{ status: 429, body: { error: "slow down" } }]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 0 });
    await expect(client.run("a.b", {})).rejects.toBeInstanceOf(RateLimitedError);
  });

  it("surfaces the stable code from an error body", async () => {
    const { fetch } = mockFetch([
      {
        status: 409,
        body: {
          error: "the key is already running",
          code: "idempotency_in_progress",
        },
      },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 0 });
    try {
      await client.run("a.b", {});
      throw new Error("should have thrown");
    } catch (error) {
      expect(error).toBeInstanceOf(AnyAPIError);
      expect((error as AnyAPIError).code).toBe("idempotency_in_progress");
    }
  });
});

describe("request-id header resolution", () => {
  async function requestIdFor(
    headers: Record<string, string>,
  ): Promise<string | undefined> {
    const { fetch } = mockFetch([{ status: 400, body: { error: "nope" }, headers }]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 0 });
    try {
      await client.run("a.b", {});
    } catch (error) {
      return (error as AnyAPIError).requestId;
    }
    throw new Error("should have thrown");
  }

  it("reads the gateway's X-Anyapi-Request-Id", async () => {
    // Through v0.9.7 the SDK read only x-request-id, which the gateway never sends, so
    // requestId was always undefined in production.
    expect(await requestIdFor({ "X-Anyapi-Request-Id": "req_gw" })).toBe("req_gw");
  });

  it("falls back to a proxy-set x-request-id", async () => {
    expect(await requestIdFor({ "x-request-id": "req_proxy" })).toBe("req_proxy");
  });

  it("prefers the gateway header when a proxy set both", async () => {
    expect(
      await requestIdFor({
        "X-Anyapi-Request-Id": "req_gw",
        "x-request-id": "req_proxy",
      }),
    ).toBe("req_gw");
  });

  it("is undefined when neither header is present", async () => {
    expect(await requestIdFor({})).toBeUndefined();
  });
});
