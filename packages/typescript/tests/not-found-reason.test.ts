import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { NOT_FOUND_REASONS } from "../src/index.js";

// The gateway owns the reason vocabulary and publishes it as the `reason` enum on every
// found-data output schema in the OpenAPI document. The runtime union is a copy, so this
// test holds the copy to the source: every operation that declares the enum must declare
// exactly the runtime's words, in order. Until the committed snapshot carries the field
// (it is refreshed from the live gateway after deploy), there is nothing to compare.
function publishedReasonEnums(): string[][] {
  const openapi = JSON.parse(
    readFileSync(new URL("../../../openapi.json", import.meta.url), "utf8"),
  ) as { paths: Record<string, Record<string, unknown>> };
  const enums: string[][] = [];
  for (const [path, operations] of Object.entries(openapi.paths)) {
    if (!path.startsWith("/v1/run/")) continue;
    const post = operations.post as Record<string, unknown> | undefined;
    const responses = post?.responses as Record<string, unknown> | undefined;
    const ok = responses?.["200"] as Record<string, unknown> | undefined;
    const content = ok?.content as Record<string, unknown> | undefined;
    const json = content?.["application/json"] as Record<string, unknown> | undefined;
    const schema = json?.schema as Record<string, unknown> | undefined;
    const properties = schema?.properties as Record<string, unknown> | undefined;
    const output = properties?.output as Record<string, unknown> | undefined;
    const branches = (output?.anyOf as Record<string, unknown>[] | undefined) ?? [output ?? {}];
    for (const branch of branches) {
      const props = branch.properties as Record<string, unknown> | undefined;
      const reason = props?.reason as Record<string, unknown> | undefined;
      if (Array.isArray(reason?.enum)) enums.push(reason.enum as string[]);
    }
  }
  return enums;
}

describe("not-found reason vocabulary", () => {
  it("matches the enum the gateway publishes on every found-data output schema", () => {
    for (const published of publishedReasonEnums()) {
      expect(published).toEqual([...NOT_FOUND_REASONS]);
    }
  });
});
