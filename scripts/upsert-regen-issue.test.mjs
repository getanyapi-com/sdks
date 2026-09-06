import { deepEqual, equal, match, ok, throws } from "node:assert/strict";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";

import {
  DEFAULT_ASSIGNEE,
  decideIssueAction,
  deltaBetween,
  parseFingerprint,
  renderIssueBody,
  resolveRegenIssue,
  runRegenIssueCli,
  upsertRegenIssue,
} from "./upsert-regen-issue.mjs";

const TITLE = "regen blocked";

/** Record every `gh` invocation and answer the issue lookup from `issues`. */
function ghRecorder(issues) {
  const calls = [];
  const runGh = (args) => {
    calls.push(args);
    if (args[0] === "issue" && args[1] === "list") return JSON.stringify(issues);
    return "";
  };
  return { calls, runGh };
}

function memoryBody(initial = "") {
  const store = { body: initial };
  return {
    store,
    readBodyFile: () => store.body,
    writeBodyFile: (_path, body) => {
      store.body = body;
    },
  };
}

test("no matching open issue means create", () => {
  deepEqual(decideIssueAction([{ title: "something else", number: 1 }], TITLE), {
    kind: "create",
  });
});

test("a matching open issue is reused by exact title", () => {
  deepEqual(decideIssueAction([{ title: TITLE, number: 7, body: "b" }], TITLE), {
    kind: "update",
    issueNumber: 7,
    body: "b",
  });
});

test("a non-array issue list is a hard error", () => {
  throws(() => decideIssueAction(null, TITLE), /must be an array/u);
});

test("fingerprint round-trips through the body, sorted and deduplicated", () => {
  const body = renderIssueBody("evidence", ["b", "a", "b", " a "]);
  deepEqual(parseFingerprint(body), ["a", "b"]);
});

test("re-rendering replaces the old fingerprint rather than stacking them", () => {
  const body = renderIssueBody(renderIssueBody("evidence", ["a"]), ["c"]);
  deepEqual(parseFingerprint(body), ["c"]);
  equal(body.match(/regen-blocked:/gu).length, 1);
});

test("a body with no fingerprint reads as an empty set", () => {
  deepEqual(parseFingerprint("no marker here"), []);
});

test("a malformed fingerprint is a hard error, not a silent empty set", () => {
  throws(
    () => parseFingerprint("<!-- regen-blocked:[1,2] -->"),
    /array of strings/u,
  );
});

test("delta names both directions", () => {
  deepEqual(deltaBetween(["a", "b"], ["b", "c"]), {
    added: ["c"],
    cleared: ["a"],
  });
});

test("first block creates an issue assigned to the owner", () => {
  const { calls, runGh } = ghRecorder([]);
  const file = memoryBody("blocked: input.lang removed");
  const result = upsertRegenIssue({
    title: TITLE,
    bodyFile: "body.md",
    items: ["input.lang removed"],
    runGh,
    ...file,
  });
  deepEqual(result, { kind: "create" });
  const create = calls.find((args) => args[1] === "create");
  ok(create, "expected an issue create");
  deepEqual(create.slice(-2), ["--assignee", DEFAULT_ASSIGNEE]);
  deepEqual(parseFingerprint(file.store.body), ["input.lang removed"]);
});

test("an unchanged block refreshes the body and posts no comment", () => {
  const existing = renderIssueBody("old evidence", ["input.lang removed"]);
  const { calls, runGh } = ghRecorder([
    { title: TITLE, number: 12, body: existing },
  ]);
  const file = memoryBody("new evidence, newer run link");
  const result = upsertRegenIssue({
    title: TITLE,
    bodyFile: "body.md",
    items: ["input.lang removed"],
    runGh,
    ...file,
  });
  deepEqual(result, { kind: "unchanged", issueNumber: 12 });
  ok(calls.some((args) => args[1] === "edit"));
  ok(!calls.some((args) => args[1] === "comment"));
  match(file.store.body, /newer run link/u);
});

test("a grown block comments the delta on the same issue", () => {
  const existing = renderIssueBody("old", ["a"]);
  const { calls, runGh } = ghRecorder([
    { title: TITLE, number: 12, body: existing },
  ]);
  const result = upsertRegenIssue({
    title: TITLE,
    bodyFile: "body.md",
    items: ["a", "b"],
    runGh,
    ...memoryBody("new"),
  });
  deepEqual(result, {
    kind: "change",
    issueNumber: 12,
    added: ["b"],
    cleared: [],
  });
  const comment = calls.find((args) => args[1] === "comment");
  ok(comment);
  match(comment[4], /Newly blocking: b/u);
});

test("recovery closes the issue so the next failure notifies again", () => {
  const { calls, runGh } = ghRecorder([
    { title: TITLE, number: 12, body: renderIssueBody("old", ["a"]) },
  ]);
  const result = resolveRegenIssue({
    title: TITLE,
    comment: "regen released v0.37.0",
    runGh,
  });
  deepEqual(result, { kind: "resolved", issueNumber: 12 });
  deepEqual(
    calls.map((args) => args[1]),
    ["list", "comment", "close"],
  );
});

test("recovery with no open issue does nothing", () => {
  const { calls, runGh } = ghRecorder([]);
  deepEqual(resolveRegenIssue({ title: TITLE, comment: "ok", runGh }), {
    kind: "noop",
  });
  deepEqual(
    calls.map((args) => args[1]),
    ["list"],
  );
});

test("the CLI reports a missing option instead of half-filing an issue", () => {
  const { calls, runGh } = ghRecorder([]);
  const errors = [];
  const code = runRegenIssueCli({
    argv: ["node", "cli", "--title", TITLE],
    runGh,
    log: () => {},
    logError: (line) => errors.push(line),
  });
  equal(code, 1);
  deepEqual(calls, []);
  match(errors[0], /missing required option --items/u);
});

test("the CLI splits --items on newlines so an item may carry a comma", () => {
  const bodyFile = join(mkdtempSync(join(tmpdir(), "regen-issue-")), "body.md");
  writeFileSync(bodyFile, "evidence");
  const { calls, runGh } = ghRecorder([]);
  const code = runRegenIssueCli({
    argv: [
      "node",
      "cli",
      "--title",
      TITLE,
      "--body-file",
      bodyFile,
      "--items",
      "yelp.search: input.limit default changed, from null to 20\ntiktok.video: input required fields changed",
    ],
    runGh,
    log: () => {},
  });
  equal(code, 0);
  ok(calls.some((args) => args[1] === "create"));
  deepEqual(parseFingerprint(readFileSync(bodyFile, "utf8")), [
    "tiktok.video: input required fields changed",
    "yelp.search: input.limit default changed, from null to 20",
  ]);
});
