// Handwritten idempotency-key helpers. Named exports only; zero runtime deps.

const MAX_IDEMPOTENCY_KEY_BYTES = 255;

/** Generate a visible-ASCII collision-avoidance token with no runtime dependency. */
export function generateIdempotencyKey(): string {
  let runtimeCrypto:
    | {
        randomUUID?: () => string;
        getRandomValues?: (array: Uint8Array) => Uint8Array;
      }
    | undefined;
  try {
    runtimeCrypto = globalThis.crypto;
  } catch {
    runtimeCrypto = undefined;
  }

  if (typeof runtimeCrypto?.randomUUID === "function") {
    try {
      return runtimeCrypto.randomUUID();
    } catch {
      // Some runtimes expose crypto but reject it outside a secure context.
    }
  }

  if (typeof runtimeCrypto?.getRandomValues === "function") {
    try {
      const bytes = runtimeCrypto.getRandomValues(new Uint8Array(16));
      return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join("");
    } catch {
      // Fall through when the runtime exposes an unusable crypto implementation.
    }
  }

  // This token prevents accidental collisions and is not a secret. Math.random is an
  // acceptable last resort when neither UUID nor random-byte APIs are usable.
  return Array.from({ length: 4 }, () =>
    Math.floor(Math.random() * 0x1_0000_0000)
      .toString(16)
      .padStart(8, "0"),
  ).join("");
}

/** Enforce the gateway's 1-255 byte visible-ASCII wire contract. */
export function validateIdempotencyKey(key: string): void {
  if (
    key.length === 0 ||
    key.length > MAX_IDEMPOTENCY_KEY_BYTES ||
    [...key].some((char) => {
      const code = char.charCodeAt(0);
      return code < 0x21 || code > 0x7e;
    })
  ) {
    throw new TypeError(
      "idempotencyKey must be 1-255 bytes of visible ASCII (0x21-0x7e)",
    );
  }
}

/** Derive a distinct, valid key for one page of an explicitly keyed paginator. */
export function pageIdempotencyKey(key: string, pageNumber: number): string {
  validateIdempotencyKey(key);
  const suffix = `-p${pageNumber}`;
  const prefixLength = MAX_IDEMPOTENCY_KEY_BYTES - suffix.length;
  if (prefixLength < 1) {
    throw new TypeError("pagination page number is too large for an idempotency key");
  }
  return `${key.slice(0, prefixLength)}${suffix}`;
}
