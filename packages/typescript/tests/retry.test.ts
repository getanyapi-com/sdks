import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  AnyAPI,
  AnyAPIError,
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

  it("retries a pre-send connection failure then succeeds", async () => {
    const refused = new TypeError("fetch failed", {
      cause: Object.assign(new Error("connect refused"), {
        code: "ECONNREFUSED",
      }),
    });
    const { fetch, calls } = mockFetch([
      { throws: refused },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", {});
    await vi.advanceTimersByTimeAsync(600);
    await expect(promise).resolves.toBeDefined();
    expect(calls).toHaveLength(2);
  });

  it("retries an undici connect timeout before the request is sent", async () => {
    const connectTimeout = new TypeError("fetch failed", {
      cause: Object.assign(new Error("Connect Timeout Error"), {
        code: "UND_ERR_CONNECT_TIMEOUT",
      }),
    });
    const { fetch, calls } = mockFetch([
      { throws: connectTimeout },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 1 });
    const promise = client.run("a.b", {});
    await vi.advanceTimersByTimeAsync(500);
    await expect(promise).resolves.toBeDefined();
    expect(calls).toHaveLength(2);
  });

  it("retries ETIMEDOUT from the connect syscall before the request is sent", async () => {
    const connectTimeout = new TypeError("fetch failed", {
      cause: Object.assign(new Error("connect ETIMEDOUT"), {
        code: "ETIMEDOUT",
        syscall: "connect",
      }),
    });
    const { fetch, calls } = mockFetch([
      { throws: connectTimeout },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 1 });
    const promise = client.run("a.b", {});
    await vi.advanceTimersByTimeAsync(500);
    await expect(promise).resolves.toBeDefined();
    expect(calls).toHaveLength(2);
  });

  it("does NOT retry bare ETIMEDOUT when the send phase is unknown", async () => {
    const ambiguousTimeout = new TypeError("fetch failed", {
      cause: Object.assign(new Error("operation timed out"), {
        code: "ETIMEDOUT",
      }),
    });
    const { fetch, calls } = mockFetch([{ throws: ambiguousTimeout }]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 1 });
    await expect(client.run("a.b", {})).rejects.toBeInstanceOf(ConnectionError);
    expect(calls).toHaveLength(1);
  });

  it("retries an undici socket failure when zero request bytes were written", async () => {
    const socketClosed = new TypeError("fetch failed", {
      cause: Object.assign(new Error("socket closed before body write"), {
        code: "UND_ERR_SOCKET",
        socket: { bytesWritten: 0 },
      }),
    });
    const { fetch, calls } = mockFetch([
      { throws: socketClosed },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 1 });
    const promise = client.run("a.b", {});
    await vi.advanceTimersByTimeAsync(500);
    await expect(promise).resolves.toBeDefined();
    expect(calls).toHaveLength(2);
  });

  it("does NOT trust zero bytesWritten on an unknown socket error", async () => {
    const unknownSocketError = new TypeError("fetch failed", {
      cause: Object.assign(new Error("custom socket failure"), {
        code: "CUSTOM_SOCKET_ERROR",
        socket: { bytesWritten: 0 },
      }),
    });
    const { fetch, calls } = mockFetch([
      { throws: unknownSocketError },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 1 });
    const promise = client.run("a.b", {});
    const assertion = expect(promise).rejects.toBeInstanceOf(ConnectionError);
    await vi.advanceTimersByTimeAsync(500);
    await assertion;
    expect(calls).toHaveLength(1);
  });

  it("retries Bun ConnectionRefused before the request is sent", async () => {
    const refused = Object.assign(
      new Error("Unable to connect. Is the computer able to access the url?"),
      {
        code: "ConnectionRefused",
      },
    );
    const { fetch, calls } = mockFetch([
      { throws: refused },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 1 });
    const promise = client.run("a.b", {});
    await vi.advanceTimersByTimeAsync(500);
    await expect(promise).resolves.toBeDefined();
    expect(calls).toHaveLength(2);
  });

  it("retries when one AggregateError branch proves a pre-send failure", async () => {
    const aggregate = new TypeError("fetch failed", {
      cause: Object.assign(new AggregateError([
        Object.assign(new Error("connect timed out"), {
          code: "ETIMEDOUT",
          syscall: "connect",
        }),
        new Error("opaque connect failure"),
      ]), {
        code: "ETIMEDOUT",
      }),
    });
    const { fetch, calls } = mockFetch([
      { throws: aggregate },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 1 });
    const promise = client.run("a.b", {});
    await vi.advanceTimersByTimeAsync(500);
    await expect(promise).resolves.toBeDefined();
    expect(calls).toHaveLength(2);
  });

  it("checks cause after unmatched AggregateError branches", async () => {
    const aggregateWithCause = Object.assign(
      new AggregateError([new Error("opaque connect failure")]),
      {
        cause: Object.assign(new Error("connect refused"), {
          code: "ECONNREFUSED",
        }),
      },
    );
    const { fetch, calls } = mockFetch([
      {
        throws: new TypeError("fetch failed", {
          cause: aggregateWithCause,
        }),
      },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 1 });
    const promise = client.run("a.b", {});
    await vi.advanceTimersByTimeAsync(500);
    await expect(promise).resolves.toBeDefined();
    expect(calls).toHaveLength(2);
  });

  it("does NOT retry a post-send connection failure on a run request", async () => {
    const socketClosed = new TypeError("fetch failed", {
      cause: Object.assign(new Error("socket closed after body write"), {
        code: "UND_ERR_SOCKET",
        socket: { bytesWritten: 128 },
      }),
    });
    const { fetch, calls } = mockFetch([{ throws: socketClosed }]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 1 });
    const promise = client.run("a.b", { query: "sent" });
    const assertion = expect(promise).rejects.toBeInstanceOf(ConnectionError);
    await vi.advanceTimersByTimeAsync(500);
    await assertion;
    expect(calls).toHaveLength(1);
  });

  it("gives up after maxRetries on repeated pre-send connection failure", async () => {
    const refused = () =>
      new TypeError("fetch failed", {
        cause: Object.assign(new Error("connect refused"), {
          code: "ECONNREFUSED",
        }),
      });
    const { fetch, calls } = mockFetch([
      { throws: refused() },
      { throws: refused() },
      { throws: refused() },
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

describe("409 idempotency_in_progress", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.spyOn(Math, "random").mockReturnValue(0.5);
  });
  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  const inProgress = (retryAfter?: string) => ({
    status: 409,
    ...(retryAfter !== undefined
      ? { headers: { "retry-after": retryAfter } }
      : {}),
    body: {
      error: "a request with this idempotency key is still in progress",
      code: "idempotency_in_progress",
    },
  });

  it("retries an in-progress 409 and resolves with the replayed run", async () => {
    const { fetch, calls } = mockFetch([
      inProgress("30"),
      { body: foundEnvelope({ ok: true }, { replayed: true }) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", { query: "x" });
    await vi.advanceTimersByTimeAsync(30_000);
    const res = await promise;
    expect(res.replayed).toBe(true);
    expect(res.output.found).toBe(true);
    expect(calls).toHaveLength(2);
  });

  it("waits the full server Retry-After instead of clamping to 8s", async () => {
    const { fetch } = mockFetch([
      inProgress("30"),
      { body: foundEnvelope({}, { replayed: true }) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", { query: "x" });
    let settled = false;
    void promise.then(() => (settled = true));
    // The ordinary backoff ceiling (8s) must NOT end the wait.
    await vi.advanceTimersByTimeAsync(8_000);
    await Promise.resolve();
    expect(settled).toBe(false);
    await vi.advanceTimersByTimeAsync(22_000);
    await expect(promise).resolves.toBeDefined();
  });

  it("does NOT retry a 409 idempotency_conflict", async () => {
    const { fetch, calls } = mockFetch([
      {
        status: 409,
        headers: { "retry-after": "30" },
        body: {
          error: "this idempotency key was already used for a different request",
          code: "idempotency_conflict",
        },
      },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", { query: "x" });
    const assertion = expect(promise).rejects.toMatchObject({
      status: 409,
      code: "idempotency_conflict",
    });
    await vi.advanceTimersByTimeAsync(60_000);
    await assertion;
    expect(calls).toHaveLength(1);
  });

  it("does NOT retry a 409 idempotency_needs_review", async () => {
    const { fetch, calls } = mockFetch([
      {
        status: 409,
        body: {
          error: "this idempotency key needs human review",
          code: "idempotency_needs_review",
        },
      },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", { query: "x" });
    const assertion = expect(promise).rejects.toBeInstanceOf(AnyAPIError);
    await vi.advanceTimersByTimeAsync(60_000);
    await assertion;
    expect(calls).toHaveLength(1);
  });

  it("does NOT retry a 409 with no error code", async () => {
    const { fetch, calls } = mockFetch([
      { status: 409, body: { error: "conflict" } },
      { body: foundEnvelope({}) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", { query: "x" });
    const assertion = expect(promise).rejects.toBeInstanceOf(AnyAPIError);
    await vi.advanceTimersByTimeAsync(60_000);
    await assertion;
    expect(calls).toHaveLength(1);
  });

  it("refuses a Retry-After larger than the in-progress budget without burning an attempt", async () => {
    const { fetch, calls } = mockFetch([inProgress("3600")]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", { query: "x" });
    const assertion = expect(promise).rejects.toMatchObject({
      status: 409,
      code: "idempotency_in_progress",
    });
    await vi.advanceTimersByTimeAsync(120_000);
    await assertion;
    expect(calls).toHaveLength(1);
  });

  it("stops once the cumulative in-progress budget is spent, before maxRetries", async () => {
    const { fetch, calls } = mockFetch([inProgress("30")]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 5 });
    const promise = client.run("a.b", { query: "x" });
    const assertion = expect(promise).rejects.toMatchObject({ status: 409 });
    // 30s + 30s exhausts the 60s default budget; the third wait is unaffordable.
    await vi.advanceTimersByTimeAsync(300_000);
    await assertion;
    expect(calls).toHaveLength(3);
  });

  it("honors maxInProgressWaitMs from the client and per request", async () => {
    const { fetch, calls } = mockFetch([inProgress("30")]);
    const client = new AnyAPI({
      apiKey: "k",
      fetch,
      maxRetries: 5,
      maxInProgressWaitMs: 30_000,
    });
    const promise = client.run("a.b", { query: "x" });
    const assertion = expect(promise).rejects.toMatchObject({ status: 409 });
    await vi.advanceTimersByTimeAsync(300_000);
    await assertion;
    expect(calls).toHaveLength(2);

    const second = mockFetch([inProgress("30")]);
    const strict = new AnyAPI({
      apiKey: "k",
      fetch: second.fetch,
      maxRetries: 5,
    });
    const p2 = strict.run("a.b", { query: "x" }, { maxInProgressWaitMs: 0 });
    const a2 = expect(p2).rejects.toMatchObject({ status: 409 });
    await vi.advanceTimersByTimeAsync(300_000);
    await a2;
    expect(second.calls).toHaveLength(1);
  });

  it("falls back to ordinary backoff when the 409 carries no Retry-After", async () => {
    const { fetch, calls } = mockFetch([
      inProgress(),
      { body: foundEnvelope({}, { replayed: true }) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", { query: "x" });
    await vi.advanceTimersByTimeAsync(500);
    await expect(promise).resolves.toBeDefined();
    expect(calls).toHaveLength(2);
  });

  it("respects maxRetries 0 on an in-progress 409", async () => {
    const { fetch, calls } = mockFetch([inProgress("30")]);
    const client = new AnyAPI({ apiKey: "k", fetch, maxRetries: 5 });
    const promise = client.run("a.b", { query: "x" }, { maxRetries: 0 });
    const assertion = expect(promise).rejects.toMatchObject({ status: 409 });
    await vi.advanceTimersByTimeAsync(120_000);
    await assertion;
    expect(calls).toHaveLength(1);
  });

  it("reuses the same Idempotency-Key across in-progress retries", async () => {
    const { fetch, calls } = mockFetch([
      inProgress("30"),
      { body: foundEnvelope({}, { replayed: true }) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });
    const promise = client.run("a.b", { query: "x" });
    await vi.advanceTimersByTimeAsync(30_000);
    await promise;
    const keyOf = (i: number) =>
      (calls[i]?.init.headers as Record<string, string>)["Idempotency-Key"];
    expect(keyOf(0)).toBeDefined();
    expect(keyOf(0)).toBe(keyOf(1));
  });
});
