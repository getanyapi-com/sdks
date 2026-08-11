#!/usr/bin/env node

import { appendFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

export function registryUrls(version) {
  const encodedVersion = encodeURIComponent(version);
  return {
    npm: `https://registry.npmjs.org/%40getanyapi%2Fsdk/${encodedVersion}`,
    pypi: `https://pypi.org/pypi/getanyapi/${encodedVersion}/json`,
  };
}

async function queryOne(name, url, version, readVersion, fetchImpl) {
  const response = await fetchImpl(url, {
    headers: { "user-agent": "AnyAPI SDK release workflow" },
  });
  if (response.status === 404) return false;
  if (!response.ok) {
    throw new Error(
      `${name} registry query failed with HTTP ${response.status}`,
    );
  }
  const payload = await response.json();
  const publishedVersion = readVersion(payload);
  if (publishedVersion !== version) {
    throw new Error(
      `${name} registry returned version ${JSON.stringify(publishedVersion)} for ${version}`,
    );
  }
  return true;
}

export async function queryRegistryVersion(version, fetchImpl = fetch) {
  const urls = registryUrls(version);
  const [npm, pypi] = await Promise.all([
    queryOne("npm", urls.npm, version, (value) => value?.version, fetchImpl),
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

export async function main(args = process.argv.slice(2)) {
  const version = args[0];
  if (!version || version.startsWith("--")) {
    throw new Error(
      "usage: check-registry-version.mjs <version> [--github-output <path>] [--require-both]",
    );
  }
  let outputPath;
  let requireBoth = false;
  for (let index = 1; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--github-output") {
      outputPath = args[index + 1];
      if (!outputPath || outputPath.startsWith("--")) {
        throw new Error("--github-output requires a path");
      }
      index += 1;
    } else if (arg === "--require-both") {
      requireBoth = true;
    } else {
      throw new Error(`unknown option: ${arg}`);
    }
  }

  const state = await queryRegistryVersion(version);
  process.stdout.write(
    `npm @getanyapi/sdk@${version}: ${state.npm ? "present" : "missing"}\n`,
  );
  process.stdout.write(
    `PyPI getanyapi==${version}: ${state.pypi ? "present" : "missing"}\n`,
  );
  if (outputPath) {
    await appendFile(
      outputPath,
      `npm_exists=${state.npm}\npypi_exists=${state.pypi}\n`,
    );
  }
  if (requireBoth && (!state.npm || !state.pypi)) {
    throw new Error(`version ${version} is not present in both registries`);
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
