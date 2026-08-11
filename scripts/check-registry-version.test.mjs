import { deepEqual, rejects } from "node:assert/strict";
import { test } from "node:test";
import {
  main,
  queryRegistryVersion,
  registryUrls,
} from "./check-registry-version.mjs";

function jsonResponse(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "content-type": "application/json" },
  });
}

test("builds exact-version registry URLs", () => {
  deepEqual(registryUrls("1.2.3"), {
    npm: "https://registry.npmjs.org/%40getanyapi%2Fsdk/1.2.3",
    pypi: "https://pypi.org/pypi/getanyapi/1.2.3/json",
  });
});

test("reports each exact version as present", async () => {
  const state = await queryRegistryVersion("1.2.3", async (url) =>
    String(url).includes("pypi")
      ? jsonResponse(200, { info: { version: "1.2.3" } })
      : jsonResponse(200, { version: "1.2.3" }),
  );
  deepEqual(state, { npm: true, pypi: true });
});

test("treats only HTTP 404 as a missing exact version", async () => {
  const state = await queryRegistryVersion("1.2.3", async (url) =>
    String(url).includes("pypi")
      ? jsonResponse(404, { message: "Not Found" })
      : jsonResponse(200, { version: "1.2.3" }),
  );
  deepEqual(state, { npm: true, pypi: false });
});

test("rejects registry errors instead of misclassifying them as missing", async () => {
  await rejects(
    queryRegistryVersion("1.2.3", async () => jsonResponse(503, {})),
    /HTTP 503/,
  );
});

test("rejects a successful response for a different version", async () => {
  await rejects(
    queryRegistryVersion("1.2.3", async (url) =>
      String(url).includes("pypi")
        ? jsonResponse(200, { info: { version: "1.2.4" } })
        : jsonResponse(200, { version: "1.2.3" }),
    ),
    /returned version/,
  );
});

test("rejects unknown CLI options before querying a registry", async () => {
  await rejects(main(["1.2.3", "--requre-both"]), /unknown option/);
});
