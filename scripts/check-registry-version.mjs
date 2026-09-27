#!/usr/bin/env node

import { appendFile } from "node:fs/promises";
import { setTimeout as sleep } from "node:timers/promises";
import { pathToFileURL } from "node:url";

// Since 2026-09-17 npm has made a version visible only some time after `npm publish`
// returns. Measured over all 25 releases since (v0.47.0 to v0.63.0) as the registry's own
// `time[<version>]` minus the release run's `+ @getanyapi/sdk@<version>` publish log line,
// a measure every one-shot re-query in those runs agrees with: 54.8 to 247.6 s, median
// 126.6 s. The 19 releases before it (v0.38.0 to v0.46.2) were visible at once.
//
// The deadline is the slowest of them, v0.52.0's 247.6 s, rounded up to a whole second.
// It counts from the first poll, which starts only after both publish jobs have finished.
export const DEADLINE_MS = 248_000;
// The measured delays land on a few distinct values (55, 75, 96, 127, 157, 188, 200 and
// 248 s), the closest two 12.6 s apart (v0.59.0 at 187.7 s, v0.58.0 at 200.3 s). Polling
// every 12 s adds less wait after a version appears than separates any two of them.
export const INTERVAL_MS = 12_000;

// pip installs from the simple index, not the JSON API, and the two can disagree: in 6
// releases (v0.34.0, v0.34.1, v0.34.4, v0.39.1, v0.40.1, v0.61.0) the JSON API served the
// new version while pip, 88 to 128 s after the upload, still read an index without it.
// The request carries pip's own headers (pip/_internal/index/collector.py) because PyPI's
// CDN varies this page on Accept.
const PIP_INDEX_URL = "https://pypi.org/simple/getanyapi/";
const PIP_INDEX_HEADERS = {
  accept:
    "application/vnd.pypi.simple.v1+json, application/vnd.pypi.simple.v1+html; q=0.1, text/html; q=0.01",
  "cache-control": "max-age=0",
};

export function registryUrls(version) {
  const encodedVersion = encodeURIComponent(version);
  return {
    npm: `https://registry.npmjs.org/%40getanyapi%2Fsdk/${encodedVersion}`,
    pypi: `https://pypi.org/pypi/getanyapi/${encodedVersion}/json`,
  };
}

async function fetchJson(name, url, headers, fetchImpl) {
  const response = await fetchImpl(url, {
    headers: { "user-agent": "AnyAPI SDK release workflow", ...headers },
  });
  if (response.status === 404) return undefined;
  if (!response.ok) {
    throw new Error(
      `${name} registry query failed with HTTP ${response.status}`,
    );
  }
  return response.json();
}

async function queryOne(name, url, version, readVersion, fetchImpl) {
  const payload = await fetchJson(name, url, {}, fetchImpl);
  if (payload === undefined) return false;
  const publishedVersion = readVersion(payload);
  if (publishedVersion !== version) {
    throw new Error(
      `${name} registry returned version ${JSON.stringify(publishedVersion)} for ${version}`,
    );
  }
  return true;
}

function queryNpm(version, fetchImpl) {
  const url = registryUrls(version).npm;
  return queryOne("npm", url, version, (value) => value?.version, fetchImpl);
}

async function queryPipIndex(version, fetchImpl) {
  const payload = await fetchJson(
    "PyPI simple index",
    PIP_INDEX_URL,
    PIP_INDEX_HEADERS,
    fetchImpl,
  );
  if (!Array.isArray(payload?.versions)) {
    throw new Error("PyPI simple index returned no versions list");
  }
  return payload.versions.includes(version);
}

export async function queryRegistryVersion(version, fetchImpl = fetch) {
  const urls = registryUrls(version);
  const [npm, pypi] = await Promise.all([
    queryNpm(version, fetchImpl),
    queryOne(
      "PyPI",
      urls.pypi,
      version,
      (value) => value?.info?.version,
      fetchImpl,
    ),
  ]);
  return { npm, pypi };
}

// Poll until npm and pip's index both serve the exact version, or fail at the deadline.
async function waitForRegistryVersion(
  version,
  { fetchImpl, sleepImpl, now, writeOutput },
) {
  const pending = new Map([
    [`npm @getanyapi/sdk@${version}`, () => queryNpm(version, fetchImpl)],
    [
      `PyPI simple index getanyapi==${version}`,
      () => queryPipIndex(version, fetchImpl),
    ],
  ]);
  const start = now();
  for (;;) {
    for (const [label, query] of pending) {
      if (await query()) {
        const seconds = Math.round((now() - start) / 1000);
        writeOutput(`${label}: visible after ${seconds} s of polling\n`);
        pending.delete(label);
      }
    }
    if (pending.size === 0) return;
    const remaining = DEADLINE_MS - (now() - start);
    if (remaining <= 0) {
      throw new Error(
        `${[...pending.keys()].join(" and ")}: not visible after ${DEADLINE_MS / 1000} s`,
      );
    }
    await sleepImpl(Math.min(INTERVAL_MS, remaining));
  }
}

export async function main(
  args = process.argv.slice(2),
  {
    appendFileImpl = appendFile,
    fetchImpl = fetch,
    sleepImpl = sleep,
    now = Date.now,
    writeOutput = (value) => process.stdout.write(value),
  } = {},
) {
  const version = args[0];
  if (!version || version.startsWith("--")) {
    throw new Error(
      "usage: check-registry-version.mjs <version> [--github-output <path>] [--wait]",
    );
  }
  let outputPath;
  let wait = false;
  for (let index = 1; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--github-output") {
      outputPath = args[index + 1];
      if (!outputPath || outputPath.startsWith("--")) {
        throw new Error("--github-output requires a path");
      }
      index += 1;
    } else if (arg === "--wait") {
      wait = true;
    } else {
      throw new Error(`unknown option: ${arg}`);
    }
  }

  if (wait) {
    await waitForRegistryVersion(version, {
      fetchImpl,
      sleepImpl,
      now,
      writeOutput,
    });
    return;
  }

  const state = await queryRegistryVersion(version, fetchImpl);
  writeOutput(
    `npm @getanyapi/sdk@${version}: ${state.npm ? "present" : "missing"}\n`,
  );
  writeOutput(
    `PyPI getanyapi==${version}: ${state.pypi ? "present" : "missing"}\n`,
  );
  if (outputPath) {
    await appendFileImpl(
      outputPath,
      `npm_exists=${state.npm}\npypi_exists=${state.pypi}\n`,
    );
  }
}

const invokedPath = process.argv[1];
if (invokedPath && import.meta.url === pathToFileURL(invokedPath).href) {
  main().catch((error) => {
    process.stderr.write(
      `${error instanceof Error ? error.message : String(error)}\n`,
    );
    process.exitCode = 1;
  });
}
