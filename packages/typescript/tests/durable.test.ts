import { afterEach, describe, expect, it, vi } from "vitest";
import { AnyAPI, RequestPendingError } from "../src/index.js";
import { foundEnvelope, mockFetch } from "./helpers.js";

const durableInput = {
  domainOrCompany: "apollo.io",
  firstname: "Tim",
  lastname: "Zheng",
};

function snapshot(
  status: "queued" | "running" | "succeeded",
  result?: unknown,
) {
  return {
    requestId: "req_123",
    sku: "email_finding.icypeas",
    status,
    createdAt: "2026-08-04T00:00:00Z",
    retryAfterSeconds: 1,
    ...(result === undefined ? {} : { result }),
  };
}

describe("durable requests", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("follows an accepted run by polling the Request resource", async () => {
    vi.useFakeTimers();
    const terminal = foundEnvelope({ email: "hello@example.com" });
    const { fetch, calls } = mockFetch([
      { status: 202, body: snapshot("queued") },
      { body: snapshot("succeeded", terminal) },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });

    const pending = client.run("email_finding.icypeas", durableInput);
    await vi.runAllTimersAsync();
    const result = await pending;

    expect(result).toEqual(terminal);
    expect(calls.map((call) => call.init.method)).toEqual(["POST", "GET"]);
    expect(calls[1]?.url).toBe("https://api.getanyapi.com/v1/requests/req_123");
  });

  it("start asks for immediate acceptance and returns the Request handle", async () => {
    const { fetch, calls } = mockFetch([
      { status: 202, body: snapshot("queued") },
    ]);
    const client = new AnyAPI({ apiKey: "k", fetch });

    const request = await client.start("email_finding.icypeas", durableInput);

    if (!("requestId" in request)) throw new Error("expected request handle");
    expect(request.requestId).toBe("req_123");
    expect((calls[0]?.init.headers as Record<string, string>).Prefer).toBe(
      "respond-async",
    );
  });

  it("start returns a same-key completed replay without pretending it is pending", async () => {
    const terminal = foundEnvelope({ email: "hello@example.com" });
    const { fetch } = mockFetch([{ body: terminal }]);
    const client = new AnyAPI({ apiKey: "k", fetch });

    const started = await client.start(
      "email_finding.icypeas",
      durableInput,
      { idempotencyKey: "same-key" },
    );

    expect(started).toEqual(terminal);
  });

  it("keeps the Request ID when a wait deadline expires", async () => {
    const { fetch } = mockFetch([{ body: snapshot("running") }]);
    const client = new AnyAPI({ apiKey: "k", fetch });

    const error = await client.requests
      .wait("req_123", { timeoutMs: 0 })
      .catch((reason: unknown) => reason);
    expect(error).toBeInstanceOf(RequestPendingError);
    expect(error).toMatchObject({ durableRequestId: "req_123" });
  });
});
