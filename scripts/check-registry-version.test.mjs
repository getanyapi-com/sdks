import { deepEqual, equal, match, ok, rejects } from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import {
  DEADLINE_MS,
  INTERVAL_MS,
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

const PIP_INDEX_URL = "https://pypi.org/simple/getanyapi/";

/** A clock that only moves when the wait sleeps, so a deadline passes instantly. */
function fakeClock() {
  let time = 0;
  const sleeps = [];
  return {
    sleeps,
    now: () => time,
    sleepImpl: async (duration) => {
      sleeps.push(duration);
      time += duration;
    },
  };
}

/** npm and pip's index each miss the exact version for their first N polls. */
function propagatingRegistries({ npmMisses, pipMisses }) {
  const calls = { npm: 0, pip: 0 };
  const pipHeaders = [];
  const fetchImpl = async (url, init) => {
    if (String(url) === PIP_INDEX_URL) {
      calls.pip += 1;
      pipHeaders.push(init.headers);
      const versions = calls.pip > pipMisses ? ["1.2.2", "1.2.3"] : ["1.2.2"];
      return jsonResponse(200, { versions });
    }
    calls.npm += 1;
    return calls.npm > npmMisses
      ? jsonResponse(200, { version: "1.2.3" })
      : jsonResponse(404, { error: "Not found" });
  };
  return { calls, fetchImpl, pipHeaders };
}

test("the wait polls until each registry serves the exact version", async () => {
  const clock = fakeClock();
  const registries = propagatingRegistries({ npmMisses: 2, pipMisses: 1 });
  await main(["1.2.3", "--wait"], {
    ...clock,
    fetchImpl: registries.fetchImpl,
    writeOutput: () => {},
  });
  equal(clock.sleeps.length, 2);
  // pip's index is not polled again once it serves the version.
  deepEqual(registries.calls, { npm: 3, pip: 2 });
  // The same Accept as pip, so the check reads the page variant pip installs from.
  match(
    registries.pipHeaders[0].accept,
    /^application\/vnd\.pypi\.simple\.v1\+json, /,
  );
});

test("the wait fails at its deadline naming the registry and version", async () => {
  const clock = fakeClock();
  const registries = propagatingRegistries({
    npmMisses: Infinity,
    pipMisses: 0,
  });
  const error = await main(["1.2.3", "--wait"], {
    ...clock,
    fetchImpl: registries.fetchImpl,
    writeOutput: () => {},
  }).catch((reason) => reason);
  const stated =
    /^npm @getanyapi\/sdk@1\.2\.3: not visible after (\d+) s$/.exec(
      error?.message,
    );
  ok(stated, `unexpected outcome: ${error}`);
  // The last poll lands on the deadline the message states, not before it.
  equal(clock.now(), Number(stated[1]) * 1000);
});

test("the wait does not sleep when both registries already serve the version", async () => {
  const clock = fakeClock();
  const registries = propagatingRegistries({ npmMisses: 0, pipMisses: 0 });
  await main(["1.2.3", "--wait"], {
    ...clock,
    fetchImpl: registries.fetchImpl,
    writeOutput: () => {},
  });
  deepEqual(clock.sleeps, []);
});

test("release workflow waits for both registries before the smokes", async () => {
  const workflow = await readFile(
    new URL("../.github/workflows/release.yml", import.meta.url),
    "utf8",
  );
  const verifyJob = workflow.slice(
    workflow.indexOf("  verify-published:"),
    workflow.indexOf("  npm-smoke:"),
  );
  match(verifyJob, /ref: \$\{\{ github\.workflow_sha \}\}/);
  match(
    verifyJob,
    /node scripts\/check-registry-version\.mjs "\$VERSION" --wait\n/,
  );
});

test("release workflow reaches terminal proof after skipped publishes", async () => {
  const workflow = await readFile(
    new URL("../.github/workflows/release.yml", import.meta.url),
    "utf8",
  );
  const npmSmokeJob = workflow.slice(
    workflow.indexOf("  npm-smoke:"),
    workflow.indexOf("  pypi-smoke:"),
  );
  const pypiSmokeJob = workflow.slice(
    workflow.indexOf("  pypi-smoke:"),
    workflow.indexOf("  github-release:"),
  );
  const releaseJob = workflow.slice(workflow.indexOf("  github-release:"));
  const smokeCondition =
    /if: \$\{\{ always\(\) && needs\.verify\.result == 'success' && needs\.verify-published\.result == 'success' \}\}/;

  match(npmSmokeJob, smokeCondition);
  match(pypiSmokeJob, smokeCondition);
  match(
    releaseJob,
    /if: \$\{\{ always\(\) && needs\.verify\.result == 'success' && needs\.npm-smoke\.result == 'success' && needs\.pypi-smoke\.result == 'success' \}\}/,
  );
});

test("the PyPI smoke install retries on the same policy as the registry wait", async () => {
  const workflow = await readFile(
    new URL("../.github/workflows/release.yml", import.meta.url),
    "utf8",
  );
  const pypiSmokeJob = workflow.slice(
    workflow.indexOf("  pypi-smoke:"),
    workflow.indexOf("  github-release:"),
  );
  match(pypiSmokeJob, new RegExp(`DEADLINE_S: ${DEADLINE_MS / 1000}\n`));
  match(pypiSmokeJob, new RegExp(`INTERVAL_S: ${INTERVAL_MS / 1000}\n`));
  match(pypiSmokeJob, /until "\$smoke_dir\/venv\/bin\/python" -m pip install --no-cache-dir "getanyapi==\$VERSION"; do/);
});

test("rejects unknown CLI options before querying a registry", async () => {
  await rejects(main(["1.2.3", "--requre-both"]), /unknown option/);
});
