import { deepEqual, match, rejects } from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import {
  main,
  PYPI_NEGATIVE_CACHE_TTL_MS,
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

test("terminal verification waits out PyPI's negative cache", async () => {
  const events = [];
  await main(["1.2.3", "--require-both", "--wait-for-pypi-cache"], {
    fetchImpl: async (url) => {
      events.push(String(url));
      return String(url).includes("pypi")
        ? jsonResponse(200, { info: { version: "1.2.3" } })
        : jsonResponse(200, { version: "1.2.3" });
    },
    sleepImpl: async (duration) => events.push(duration),
    writeOutput: () => {},
  });
  deepEqual(events, [
    PYPI_NEGATIVE_CACHE_TTL_MS,
    "https://registry.npmjs.org/%40getanyapi%2Fsdk/1.2.3",
    "https://pypi.org/pypi/getanyapi/1.2.3/json",
  ]);
});

test("terminal verification skips the wait when PyPI existed", async () => {
  const waits = [];
  await main(["1.2.3", "--require-both"], {
    fetchImpl: async (url) =>
      String(url).includes("pypi")
        ? jsonResponse(200, { info: { version: "1.2.3" } })
        : jsonResponse(200, { version: "1.2.3" }),
    sleepImpl: async (duration) => waits.push(duration),
    writeOutput: () => {},
  });
  deepEqual(waits, []);
});

test("terminal verification fails when PyPI is missing after the wait", async () => {
  const waits = [];
  await rejects(
    main(["1.2.3", "--require-both", "--wait-for-pypi-cache"], {
      fetchImpl: async (url) =>
        String(url).includes("pypi")
          ? jsonResponse(404, { message: "Not Found" })
          : jsonResponse(200, { version: "1.2.3" }),
      sleepImpl: async (duration) => waits.push(duration),
      writeOutput: () => {},
    }),
    /not present in both registries/,
  );
  deepEqual(waits, [PYPI_NEGATIVE_CACHE_TTL_MS]);
});

test("cache wait is valid only for terminal verification", async () => {
  await rejects(
    main(["1.2.3", "--wait-for-pypi-cache"]),
    /requires --require-both/,
  );
});

test("release workflow wires the wait to a preflight PyPI miss", async () => {
  const workflow = await readFile(
    new URL("../.github/workflows/release.yml", import.meta.url),
    "utf8",
  );
  const verifyJob = workflow.slice(
    workflow.indexOf("  verify-published:"),
    workflow.indexOf("  npm-smoke:"),
  );
  match(
    verifyJob,
    /PYPI_WAS_MISSING: \$\{\{ needs\.registry-state\.outputs\.pypi_exists == 'false' \}\}/,
  );
  match(verifyJob, /ref: \$\{\{ github\.workflow_sha \}\}/);
  match(
    verifyJob,
    /args=\(--require-both\)[\s\S]*if \[ "\$PYPI_WAS_MISSING" = "true" \]; then[\s\S]*args\+=\(--wait-for-pypi-cache\)/,
  );
});

test("rejects unknown CLI options before querying a registry", async () => {
  await rejects(main(["1.2.3", "--requre-both"]), /unknown option/);
});
