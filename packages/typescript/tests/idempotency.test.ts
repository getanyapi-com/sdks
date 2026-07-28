import { afterEach, describe, expect, it, vi } from "vitest";
import { AnyAPI } from "../src/index.js";
import { foundEnvelope, mockFetch, type RecordedCall } from "./helpers.js";

function headers(call: RecordedCall): Record<string, string> {
  return call.init.headers as Record<string, string>;
}

describe("run idempotency", () => {
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("reuses one automatic key and byte-identical body across retries", async () => {
    vi.useFakeTimers();
    vi.spyOn(Math, "random").mockReturnValue(0.5);
    const { fetch, calls } = mockFetch([
      { status: 429, body: { error: "rate" } },
      { body: foundEnvelope({ ok: true }) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 1 });

    const promise = client.run("a.b", { b: 2, a: 1 });
    await vi.runAllTimersAsync();
    await expect(promise).resolves.toBeDefined();

    expect(calls).toHaveLength(2);
    const firstKey = headers(calls[0]!)["Idempotency-Key"];
    expect(firstKey).toMatch(/^[\x21-\x7e]{1,255}$/);
    expect(headers(calls[1]!)["Idempotency-Key"]).toBe(firstKey);
    expect(calls[1]!.init.headers).toBe(calls[0]!.init.headers);
    expect(calls[1]!.init.body).toBe(calls[0]!.init.body);
  });

  it("generates a fresh automatic key for each new call", async () => {
    const { fetch, calls } = mockFetch([
      { body: foundEnvelope({ ok: 1 }) },
      { body: foundEnvelope({ ok: 2 }) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });

    await client.run("a.b", {});
    await client.run("a.b", {});

    expect(headers(calls[0]!)["Idempotency-Key"]).not.toBe(
      headers(calls[1]!)["Idempotency-Key"],
    );
  });

  it("uses the per-request idempotencyKey override", async () => {
    const { fetch, calls } = mockFetch([{ body: foundEnvelope({}) }]);
    const client = new AnyAPI({ apiKey: "k", fetch });

    await client.run("a.b", {}, { idempotencyKey: "customer-key" });

    expect(headers(calls[0]!)["Idempotency-Key"]).toBe("customer-key");
  });

  it("omits the header when the client kill switch is off", async () => {
    const { fetch, calls } = mockFetch([{ body: foundEnvelope({}) }]);
    const client = new AnyAPI({ apiKey: "k", fetch, idempotency: "off" });

    await client.run("a.b", {}, { idempotencyKey: "customer-key" });

    expect(headers(calls[0]!)["Idempotency-Key"]).toBeUndefined();
  });

  it("does not add an idempotency key to account GETs", async () => {
    const { fetch, calls } = mockFetch([{ body: { usd: 1 } }]);
    const client = new AnyAPI({ apiKey: "k", fetch });

    await client.balance();

    expect(headers(calls[0]!)["Idempotency-Key"]).toBeUndefined();
  });
});
