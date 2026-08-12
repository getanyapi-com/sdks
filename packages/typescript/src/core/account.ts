// Handwritten runtime core: account response mapping and standalone agent signup.
// See SPEC.md 2.7.

import {
  AnyAPIError,
  ConnectionError,
  errorFromStatus,
  requestIdOf,
} from "./errors.js";
import type {
  AccountProfile,
  AgentSignupOptions,
  AgentSignupResult,
} from "./types.js";

const DEFAULT_BASE_URL = "https://api.getanyapi.com";

/** Raw /v1/me shape (superset; internal-only fields are dropped by mapProfile). */
export interface ProfileResponse {
  id: string;
  email?: string | null;
  status: string;
  createdAt: string;
  onboardingComplete: boolean;
  // dropped: clerkUserId, signupGrantApplied, and any other server-only fields.
  clerkUserId?: string;
  signupGrantApplied?: boolean;
}

/** Map the raw /v1/me body to AccountProfile, dropping internal-only fields. */
export function mapProfile(raw: ProfileResponse): AccountProfile {
  const profile: AccountProfile = {
    id: raw.id,
    status: raw.status,
    createdAt: raw.createdAt,
    onboardingComplete: raw.onboardingComplete,
  };
  if (raw.email !== undefined && raw.email !== null) {
    profile.email = raw.email;
  }
  return profile;
}

/** Raw /agent/signup body. */
interface AgentSignupResponse {
  secret: string;
  capUsd: number;
  claimToken: string;
  claimUrl: string;
}

/**
 * Agent self-signup. POST /agent/signup with NO auth header. Returns a one-time API key
 * plus its spend cap and claim details. See SPEC 2.7.
 */
export async function agentSignup(
  options: AgentSignupOptions = {},
): Promise<AgentSignupResult> {
  const fetchImpl = options.fetch ?? globalThis.fetch;
  if (typeof fetchImpl !== "function") {
    throw new AnyAPIError(
      "no fetch implementation available: pass options.fetch or run on a runtime with global fetch",
      0,
    );
  }
  const base = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
  const body: Record<string, string> = {};
  if (options.sponsorEmail !== undefined) {
    body["sponsorEmail"] = options.sponsorEmail;
  }
  if (options.label !== undefined) {
    body["label"] = options.label;
  }

  let response: Response;
  try {
    response = await fetchImpl(`${base}/agent/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });
  } catch (err) {
    throw new ConnectionError(
      err instanceof Error ? err.message : "connection failed",
      0,
    );
  }

  const requestId = requestIdOf(response.headers);
  const text = await response.text().catch(() => "");
  if (response.status !== 200) {
    let message = `request failed with status ${response.status}`;
    let code: string | undefined;
    try {
      const parsed = JSON.parse(text) as { error?: unknown; code?: unknown };
      if (typeof parsed.error === "string" && parsed.error !== "") {
        message = parsed.error;
      }
      if (typeof parsed.code === "string" && parsed.code !== "") {
        code = parsed.code;
      }
    } catch {
      // not JSON
    }
    throw errorFromStatus(response.status, message, requestId, code);
  }

  const parsed = JSON.parse(text) as AgentSignupResponse;
  return {
    secret: parsed.secret,
    capUsd: parsed.capUsd,
    claimToken: parsed.claimToken,
    claimUrl: parsed.claimUrl,
  };
}
