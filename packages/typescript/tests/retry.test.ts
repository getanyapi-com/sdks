import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  AnyAPI,
  BadRequestError,
  ConnectionError,
  RateLimitedError,
} from "../src/index.js";
import { foundEnvelope, mockFetch } from "./helpers.js";

describe("retry policy", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Deterministic jitter (factor = 0.5 + 0.5 = 1.0).
    vi.spyOn(Math, "random").mockReturnValue(0.5);
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("retries a 429 then succeeds (default maxRetries)", async () => {
    const { fetch, calls } = mockFetch([
      { status: 429, body: { error: "rate" } },
      { body: foundEnvelope({ ok: true }) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", {});
    await vi.advanceTimersByTimeAsync(600); // baseDelay 500 * 2^0 * 1.0 = 500ms
    const res = await promise;
    expect(res.output.found).toBe(true);
    expect(calls).toHaveLength(2);
  });

  it("honors a numeric Retry-After header on 429", async () => {
    const { fetch } = mockFetch([
      { status: 429, headers: { "retry-after": "2" }, body: { error: "rate" } },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", {});
    // Not yet elapsed at 1900ms.
    await vi.advanceTimersByTimeAsync(1900);
    let settled = false;
    promise.then(() => (settled = true));
    await Promise.resolve();
    expect(settled).toBe(false);
    // Cross the 2000ms Retry-After.
    await vi.advanceTimersByTimeAsync(200);
    await expect(promise).resolves.toBeDefined();
  });

  it("caps Retry-After at maxDelay (8s)", async () => {
    const { fetch } = mockFetch([
      { status: 429, headers: { "retry-after": "3600" }, body: { error: "rate" } },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", {});
    await vi.advanceTimersByTimeAsync(8000);
    await expect(promise).resolves.toBeDefined();
  });

  it("retries a network failure then succeeds", async () => {
    const { fetch, calls } = mockFetch([
      { throws: new TypeError("fetch failed") },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", {});
    await vi.advanceTimersByTimeAsync(600);
    await expect(promise).resolves.toBeDefined();
    expect(calls).toHaveLength(2);
  });

  it("gives up after maxRetries on repeated network failure", async () => {
    const { fetch, calls } = mockFetch([
      { throws: new TypeError("fetch failed") },
      { throws: new TypeError("fetch failed") },
      { throws: new TypeError("fetch failed") },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 2 });
    const promise = client.run("a.b", {});
    const assertion = expect(promise).rejects.toBeInstanceOf(ConnectionError);
    await vi.advanceTimersByTimeAsync(500); // retry 1: 500ms
    await vi.advanceTimersByTimeAsync(1000); // retry 2: 1000ms
    await assertion;
    expect(calls).toHaveLength(3);
  });

  it("does NOT retry a 400", async () => {
    const { fetch, calls } = mockFetch([
      { status: 400, body: { error: "bad" } },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    await expect(client.run("a.b", {})).rejects.toBeInstanceOf(BadRequestError);
    expect(calls).toHaveLength(1);
  });

  it("respects per-request maxRetries override of 0 on 429", async () => {
    const { fetch, calls } = mockFetch([
      { status: 429, body: { error: "rate" } },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 5 });
    await expect(client.run("a.b", {}, { maxRetries: 0 })).rejects.toBeInstanceOf(
      RateLimitedError,
    );
    expect(calls).toHaveLength(1);
  });
});
