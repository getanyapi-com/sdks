// Test helpers: a scriptable mock fetch injected via ClientOptions.fetch.

import { vi } from "vitest";

export interface MockResponseSpec {
  status?: number;
  body?: unknown;
  headers?: Record<string, string>;
  /** When set, the mock throws this (simulates a transport/network failure). */
  throws?: Error;
}

export interface RecordedCall {
  url: string;
  init: RequestInit;
}

/**
 * Build a fetch stub that returns the queued responses in order. Each entry is either a
 * response spec or a network failure. Exposes the recorded calls for assertions.
 */
export function mockFetch(specs: MockResponseSpec[]): {
  fetch: typeof fetch;
  calls: RecordedCall[];
} {
  const calls: RecordedCall[] = [];
  let i = 0;
  const impl = vi.fn(async (input: unknown, init?: RequestInit) => {
    const url = String(input);
    calls.push({ url, init: init ?? {} });
    const spec = specs[Math.min(i, specs.length - 1)];
    i += 1;
    if (!spec) {
      throw new Error("mockFetch: no response queued");
    }
    if (spec.throws) {
      throw spec.throws;
    }
    const headers = new Headers(spec.headers ?? {});
    const bodyText =
      spec.body === undefined ? "" : typeof spec.body === "string" ? spec.body : JSON.stringify(spec.body);
    return new Response(bodyText, {
      status: spec.status ?? 200,
      headers,
    });
  });
  return { fetch: impl as unknown as typeof fetch, calls };
}

/** A minimal successful run envelope for a found result. */
export function foundEnvelope<T>(data: T, extra: Record<string, unknown> = {}): unknown {
  return {
    output: { found: true, data },
    provider: "AnyAPI",
    costUsd: 0.001,
    ...extra,
  };
}

/** A not-found run envelope. */
export function notFoundEnvelope(): unknown {
  return {
    output: { found: false, data: null },
    provider: "AnyAPI",
    costUsd: 0,
  };
}
