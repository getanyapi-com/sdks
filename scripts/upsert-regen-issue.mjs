#!/usr/bin/env node

// Route a stopped `regen` run to a human.
//
// regen.yml fails closed on a blocked classification and on any other job failure.
// Without this, the only signal is GitHub's default Actions email, so the SDKs can sit
// stale for days while the automation quietly re-fails every night.
//
//   node scripts/upsert-regen-issue.mjs --title <t> --body-file <f> --items <a,b,c>
//   node scripts/upsert-regen-issue.mjs --title <t> --resolve --body <text>
//
// The failing item set is the fingerprint, carried in the issue body. An unchanged set
// only rewrites the body (no notification); a changed set adds a comment naming the
// delta. The recovery call CLOSES the issue, and closing is the point: the upsert reuses
// an open issue by title, so a stale open incident turns the next real failure into
// another silent comment on a thread nobody watches.

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

export const DEFAULT_ASSIGNEE = "kev1n";

const FINGERPRINT_PATTERN = /<!-- regen-blocked:(\[[^\n]*\]) -->/u;

const executeGh = (args) =>
  execFileSync("gh", args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "inherit"],
  });

export function decideIssueAction(issues, title) {
  if (!Array.isArray(issues)) {
    throw new Error("GitHub issue list response must be an array");
  }
  const existing = issues.find((issue) => issue?.title === title);
  if (!existing) return { kind: "create" };
  if (!Number.isInteger(existing.number)) {
    throw new Error("matching GitHub issue has no integer number");
  }
  return {
    kind: "update",
    issueNumber: existing.number,
    body: typeof existing.body === "string" ? existing.body : "",
  };
}

function findOpenIssue(title, runGh) {
  const output = runGh([
    "issue",
    "list",
    "--state",
    "open",
    "--search",
    `"${title}" in:title`,
    "--json",
    "number,title,body",
  ]);
  return decideIssueAction(JSON.parse(output), title);
}

export function normalizeItems(items) {
  return [...new Set(items.map((item) => item.trim()).filter(Boolean))].sort();
}

export function parseFingerprint(body) {
  const match = FINGERPRINT_PATTERN.exec(typeof body === "string" ? body : "");
  if (!match) return [];
  const parsed = JSON.parse(match[1]);
  if (!Array.isArray(parsed) || !parsed.every((v) => typeof v === "string")) {
    throw new Error("regen incident fingerprint must be an array of strings");
  }
  return normalizeItems(parsed);
}

export function renderIssueBody(body, items) {
  const withoutFingerprint = String(body)
    .replace(FINGERPRINT_PATTERN, "")
    .trimEnd();
  return `${withoutFingerprint}\n\n<!-- regen-blocked:${JSON.stringify(
    normalizeItems(items),
  )} -->\n`;
}

export function deltaBetween(previous, current) {
  const previousSet = new Set(previous);
  const currentSet = new Set(current);
  return {
    added: current.filter((item) => !previousSet.has(item)),
    cleared: previous.filter((item) => !currentSet.has(item)),
  };
}

export function deltaComment({ added, cleared }) {
  return [
    "The regen block changed.",
    "",
    `Newly blocking: ${added.length > 0 ? added.join("; ") : "none"}`,
    `No longer blocking: ${cleared.length > 0 ? cleared.join("; ") : "none"}`,
  ].join("\n");
}

export function upsertRegenIssue({
  title,
  bodyFile,
  items,
  assignee = DEFAULT_ASSIGNEE,
  runGh = executeGh,
  readBodyFile = (path) => readFileSync(path, "utf8"),
  writeBodyFile = (path, body) => writeFileSync(path, body),
}) {
  const current = normalizeItems(items);
  const decision = findOpenIssue(title, runGh);
  const body = renderIssueBody(readBodyFile(bodyFile), current);
  writeBodyFile(bodyFile, body);

  if (decision.kind === "create") {
    runGh([
      "issue",
      "create",
      "--title",
      title,
      "--body-file",
      bodyFile,
      "--assignee",
      assignee,
    ]);
    return { kind: "create" };
  }

  const issueNumber = String(decision.issueNumber);
  // Rewriting the body refreshes the run link and evidence without notifying anyone.
  runGh(["issue", "edit", issueNumber, "--body-file", bodyFile]);
  const delta = deltaBetween(parseFingerprint(decision.body), current);
  if (delta.added.length === 0 && delta.cleared.length === 0) {
    return { kind: "unchanged", issueNumber: decision.issueNumber };
  }
  runGh(["issue", "comment", issueNumber, "--body", deltaComment(delta)]);
  return { kind: "change", issueNumber: decision.issueNumber, ...delta };
}

export function resolveRegenIssue({ title, comment, runGh = executeGh }) {
  const decision = findOpenIssue(title, runGh);
  if (decision.kind === "create") return { kind: "noop" };
  const issueNumber = String(decision.issueNumber);
  runGh(["issue", "comment", issueNumber, "--body", comment]);
  runGh(["issue", "close", issueNumber]);
  return { kind: "resolved", issueNumber: decision.issueNumber };
}

function parseOption(argv, name) {
  const index = argv.indexOf(name);
  return index === -1 ? undefined : argv[index + 1];
}

function requireOption(argv, name) {
  const value = parseOption(argv, name);
  if (!value) throw new Error(`missing required option ${name}`);
  return value;
}

export function runRegenIssueCli({
  argv = process.argv,
  runGh = executeGh,
  log = console.log,
  logError = console.error,
} = {}) {
  try {
    const title = requireOption(argv, "--title");
    if (argv.includes("--resolve")) {
      const resolution = resolveRegenIssue({
        title,
        comment: requireOption(argv, "--body"),
        runGh,
      });
      log(
        resolution.kind === "resolved"
          ? `regen incident resolved: #${resolution.issueNumber}`
          : "no open regen incident to resolve",
      );
      return 0;
    }
    const itemsOption = parseOption(argv, "--items");
    if (itemsOption === undefined) {
      throw new Error("missing required option --items");
    }
    const decision = upsertRegenIssue({
      title,
      bodyFile: requireOption(argv, "--body-file"),
      items: itemsOption.split("\n"),
      runGh,
    });
    log(
      decision.issueNumber === undefined
        ? "regen incident created"
        : `regen incident ${decision.kind}: #${decision.issueNumber}`,
    );
    return 0;
  } catch (error) {
    const detail = error instanceof Error ? error.message : String(error);
    logError(`::error::regen incident upsert failed: ${detail}`);
    return 1;
  }
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  process.exitCode = runRegenIssueCli();
}
