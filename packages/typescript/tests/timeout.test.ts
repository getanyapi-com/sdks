import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { AnyAPI, ConnectionError, TimeoutError } from "../src/index.js";
import { foundEnvelope } from "./helpers.js";

/**
 * A fetch that hangs until its signal aborts, then rejects with the signal's reason (an
 * AbortError/TimeoutError DOMException), mirroring how the platform fetch behaves.
 */
function hangingFetch(): typeof fetch {
  return (async (_url: unknown, init?: RequestInit) => {
    const signal = init?.signal;
    return new Promise<Response>((_resolve, reject) => {
      if (signal?.aborted) {
        reject(signal.reason);
        return;
      }
      signal?.addEventListener("abort", () => reject(signal.reason), { once: true });
    });
  }) as unknown as typeof fetch;
}

describe("timeout", () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ["setTimeout", "clearTimeout", "Date"] });
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  it("throws TimeoutError and does NOT retry when the per-request timeout fires", async () => {
    const client = new AnyAPI({ apiKey: "k", fetch: hangingFetch(), timeoutMs: 1000, maxRetries: 2 });
    const promise = client.run("a.b", {});
    const assertion = expect(promise).rejects.toBeInstanceOf(TimeoutError);
    await vi.advanceTimersByTimeAsync(1000);
    await assertion;
  });

  it("caller abort surfaces as ConnectionError", async () => {
    const controller = new AbortController();
    const client = new AnyAPI({ apiKey: "k", fetch: hangingFetch(), timeoutMs: 60000 });
    const promise = client.run("a.b", {}, { signal: controller.signal });
    const assertion = expect(promise).rejects.toBeInstanceOf(ConnectionError);
    controller.abort();
    await assertion;
  });

  it("a per-request timeoutMs overrides the client default", async () => {
    const client = new AnyAPI({ apiKey: "k", fetch: hangingFetch(), timeoutMs: 60000 });
    const promise = client.run("a.b", {}, { timeoutMs: 500 });
    const assertion = expect(promise).rejects.toBeInstanceOf(TimeoutError);
    await vi.advanceTimersByTimeAsync(500);
    await assertion;
  });

  it("a fast success within the timeout resolves normally", async () => {
    const okFetch = (async () =>
      new Response(JSON.stringify(foundEnvelope({ ok: 1 })), { status: 200 })) as unknown as typeof fetch;
    const client = new AnyAPI({ apiKey: "k", fetch: okFetch, timeoutMs: 1000 });
    await expect(client.run("a.b", {})).resolves.toBeDefined();
  });
});
