// Human-readable release notes for one classifier result.

import type { ChangeItem, Classification } from "./classify.js";

export function renderSummary(value: Omit<Classification, "summary">): string {
  const lines = [`Catalog refresh (${value.bump}).`, ""];
  const section = (heading: string, items: ChangeItem[]): void => {
    if (items.length === 0) return;
    lines.push(
      `## ${heading} (${items.length})`,
      ...items.map((entry) => `- ${entry.detail}`),
      "",
    );
  };
  if (value.bump === "blocked") {
    lines.push(
      "## AUTOMATION BLOCKED",
      "This change requires review before any version, commit, or tag is created.",
      "",
    );
  }
  section("Blocked changes", value.blocked);
  section("Removals", value.removed);
  section("Added", value.added);
  section("Changed", value.changed);
  if (value.bump === "none") {
    lines.push("IR, fixtures, and both emitted trees are byte-identical.", "");
  }
  return `${lines.join("\n").trimEnd()}\n`;
}
