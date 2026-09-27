// Human-readable release notes for one classifier result.

import type { ChangeItem, Classification } from "./classify.js";

export function renderSummary(value: Omit<Classification, "summary">): string {
  const lines = [`Catalog refresh (${value.bump}).`, ""];
  const section = (
    heading: string,
    items: ChangeItem[],
    render: (entry: ChangeItem) => string = (entry) => entry.detail,
  ): void => {
    if (items.length === 0) return;
    lines.push(
      `## ${heading} (${items.length})`,
      ...items.map((entry) => `- ${render(entry)}`),
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
  // A caller upgrading across a breaking change needs the SKU as well as the field, so
  // these name both.
  section(
    "Breaking changes",
    value.breaking,
    (entry) => `${entry.slug}: ${entry.detail}`,
  );
  section("Added", value.added);
  section("Changed", value.changed);
  if (value.bump === "none") {
    lines.push("IR, fixtures, and both emitted trees are byte-identical.", "");
  }
  return `${lines.join("\n").trimEnd()}\n`;
}
