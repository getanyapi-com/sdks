// Handwritten runtime core: the error hierarchy and status mapping. See SPEC.md 2.6.
// Named exports only; zero runtime deps.

/**
 * Base error for all AnyAPI SDK failures.
 */
export class AnyAPIError extends Error {
  /** HTTP status code, or 0 for transport-level failures (connection/timeout). */
  readonly status: number;
  /** The x-request-id response header when present, else undefined. */
  readonly requestId?: string;

  constructor(message: string, status: number, requestId?: string) {
    super(message);
    this.name = new.target.name;
    this.status = status;
    if (requestId !== undefined) {
      this.requestId = requestId;
    }
    // Restore prototype chain for downlevel targets / bundlers.
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/** HTTP 400. */
export class BadRequestError extends AnyAPIError {}
/** HTTP 401. */
export class AuthenticationError extends AnyAPIError {}
/** HTTP 402. */
export class InsufficientBalanceError extends AnyAPIError {}
/** HTTP 404. */
export class NotFoundError extends AnyAPIError {}
/** HTTP 429. */
export class RateLimitedError extends AnyAPIError {}
/** HTTP 502. */
export class UpstreamError extends AnyAPIError {}
/** status 0, network failure. */
export class ConnectionError extends AnyAPIError {}
/** status 0, request timed out. */
export class TimeoutError extends AnyAPIError {}

/**
 * Map a non-2xx HTTP status to the corresponding error class and construct it.
 * See SPEC 2.6: 400/401/402/404/429/502 map to named classes; any other status maps
 * to the AnyAPIError base carrying that status.
 */
export function errorFromStatus(
  status: number,
  message: string,
  requestId?: string,
): AnyAPIError {
  switch (status) {
    case 400:
      return new BadRequestError(message, status, requestId);
    case 401:
      return new AuthenticationError(message, status, requestId);
    case 402:
      return new InsufficientBalanceError(message, status, requestId);
    case 404:
      return new NotFoundError(message, status, requestId);
    case 429:
      return new RateLimitedError(message, status, requestId);
    case 502:
      return new UpstreamError(message, status, requestId);
    default:
      return new AnyAPIError(message, status, requestId);
  }
}
