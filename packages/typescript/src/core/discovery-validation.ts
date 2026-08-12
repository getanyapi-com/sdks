// Runtime validators for gateway-authored discovery fields.

import { AnyAPIError } from "./errors.js";
import type {
  DiscoveryExecution,
  DiscoveryLane,
  DiscoveryLatency,
  DiscoveryPricing,
  DiscoverySource,
  HighlightField,
  LaneHealth,
  PricingOffer,
} from "./types.js";

export function malformed(path: string): never {
  throw new AnyAPIError(`malformed discovery response: ${path}`, 0);
}

export function rejectUnsafeFields(value: unknown, path: string): void {
  if (Array.isArray(value)) {
    value.forEach((item, index) =>
      rejectUnsafeFields(item, `${path}[${index}]`),
    );
    return;
  }
  if (typeof value !== "object" || value === null) return;
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (key.toLowerCase().includes("credit")) malformed(`${path}.${key}`);
    if (key === "provider" && item !== "AnyAPI") malformed(`${path}.${key}`);
    rejectUnsafeFields(item, `${path}.${key}`);
  }
}

export function record(value: unknown, path: string): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return malformed(path);
  }
  return value as Record<string, unknown>;
}

export function stringField(
  raw: Record<string, unknown>,
  key: string,
  path: string,
): string {
  const value = raw[key];
  return typeof value === "string" ? value : malformed(`${path}.${key}`);
}

function numberField(
  raw: Record<string, unknown>,
  key: string,
  path: string,
): number {
  const value = raw[key];
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
    return malformed(`${path}.${key}`);
  }
  return value;
}

export function integerField(
  raw: Record<string, unknown>,
  key: string,
  path: string,
): number {
  const value = numberField(raw, key, path);
  return Number.isInteger(value) ? value : malformed(`${path}.${key}`);
}

export function methodField(
  raw: Record<string, unknown>,
  key: string,
  path: string,
): "POST" {
  return stringField(raw, key, path) === "POST"
    ? "POST"
    : malformed(`${path}.${key}`);
}

export function pathField(
  raw: Record<string, unknown>,
  key: string,
  path: string,
): string {
  const value = stringField(raw, key, path);
  if (value.length < 2 || !value.startsWith("/") || value.startsWith("//")) {
    return malformed(`${path}.${key}`);
  }
  return value;
}

export function boundedNumberField(
  raw: Record<string, unknown>,
  key: string,
  path: string,
  minimumExclusive: number | undefined,
  maximumInclusive: number,
): number {
  const value = numberField(raw, key, path);
  if (
    (minimumExclusive !== undefined && value <= minimumExclusive) ||
    value > maximumInclusive
  ) {
    return malformed(`${path}.${key}`);
  }
  return value;
}

function parseOffer(value: unknown, path: string): PricingOffer {
  const raw = record(value, path);
  const model = stringField(raw, "model", path);
  const unit = stringField(raw, "unit", path);
  const maxUsd = numberField(raw, "maxUsd", path);
  if (model === "flat") {
    return unit === "request" ? { model, unit, maxUsd } : malformed(path);
  }
  if (model !== "linear") return malformed(`${path}.model`);
  if (unit.length === 0) return malformed(`${path}.unit`);
  return {
    model,
    unit,
    baseUsd: numberField(raw, "baseUsd", path),
    perUnitUsd: numberField(raw, "perUnitUsd", path),
    maxUsd,
  };
}

export function parsePricing(value: unknown, path: string): DiscoveryPricing {
  const raw = record(value, path);
  return {
    from: parseOffer(raw["from"], `${path}.from`),
    failoverMaxUsd: numberField(raw, "failoverMaxUsd", path),
  };
}

export function parseExecution(
  value: unknown,
  path: string,
): DiscoveryExecution {
  const raw = record(value, path);
  const mode = stringField(raw, "mode", path);
  return mode === "sync" || mode === "durable"
    ? { mode }
    : malformed(`${path}.mode`);
}

function parseSource(value: unknown, path: string): DiscoverySource {
  const raw = record(value, path);
  const kind = stringField(raw, "kind", path);
  if (kind !== "anonymous" && kind !== "brand")
    return malformed(`${path}.kind`);
  return {
    id: stringField(raw, "id", path),
    name: stringField(raw, "name", path),
    kind,
    artworkKey: stringField(raw, "artworkKey", path),
  };
}

function parseHealth(value: unknown, path: string): LaneHealth {
  const raw = record(value, path);
  return {
    window: stringField(raw, "window", path),
    uptimePct: boundedNumberField(raw, "uptimePct", path, undefined, 100),
    latencyP50Ms: integerField(raw, "latencyP50Ms", path),
    uptimeSample: integerField(raw, "uptimeSample", path),
    latencySample: integerField(raw, "latencySample", path),
    requests: integerField(raw, "requests", path),
    servedRequests: integerField(raw, "servedRequests", path),
  };
}

export function parseLane(value: unknown, path: string): DiscoveryLane {
  const raw = record(value, path);
  const lane: DiscoveryLane = {
    pricing: parseOffer(raw["pricing"], `${path}.pricing`),
    source: parseSource(raw["source"], `${path}.source`),
  };
  if (raw["health"] !== undefined)
    lane.health = parseHealth(raw["health"], `${path}.health`);
  return lane;
}

export function parseLatency(value: unknown, path: string): DiscoveryLatency {
  const raw = record(value, path);
  const basis = stringField(raw, "basis", path);
  if (basis !== "service_time_excludes_caller_requested_delay") {
    return malformed(`${path}.basis`);
  }
  const sample = integerField(raw, "sample", path);
  if (sample < 1) return malformed(`${path}.sample`);
  return {
    window: stringField(raw, "window", path),
    p50Ms: integerField(raw, "p50Ms", path),
    p95Ms: integerField(raw, "p95Ms", path),
    p99Ms: integerField(raw, "p99Ms", path),
    sample,
    basis,
  };
}

export function parseProvider(
  raw: Record<string, unknown>,
  path: string,
): "AnyAPI" {
  return raw["provider"] === "AnyAPI"
    ? "AnyAPI"
    : malformed(`${path}.provider`);
}

export function parseHighlight(value: unknown, path: string): HighlightField {
  const raw = record(value, path);
  const field: HighlightField = {
    path: stringField(raw, "path", path),
    type: stringField(raw, "type", path),
  };
  if (raw["why"] !== undefined) field.why = stringField(raw, "why", path);
  return field;
}
