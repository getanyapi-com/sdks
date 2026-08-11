// Exhaustive schema-node classification for release safety.

import {
  item,
  same,
  unknownChanges,
  type ClassificationState,
} from "./classify-change.js";
import type { ObjectNode, SchemaNode } from "./ir-types.js";

function classifyEnum(
  before: readonly string[] | null | undefined,
  after: readonly string[] | null | undefined,
  slug: string,
  location: string,
  state: ClassificationState,
): void {
  if (same(before, after)) return;
  const nextMembers = new Set(Array.isArray(after) ? after : []);
  const removed = Array.isArray(before)
    ? before.filter((member) => !nextMembers.has(member))
    : [];
  if (removed.length > 0) {
    for (const member of removed) {
      state.removed.push(
        item(
          "enum-removed",
          slug,
          `${location} enum member ${JSON.stringify(member)} removed`,
        ),
      );
    }
    return;
  }
  if (Array.isArray(before) && Array.isArray(after)) {
    const oldSet = new Set(before);
    const newSet = new Set(after);
    const oldIsSubsequence = before.every((member, index) => {
      const prior =
        index === 0 ? -1 : after.indexOf(before[index - 1] as string);
      return after.indexOf(member, prior + 1) >= 0;
    });
    if (
      before.length > 0 &&
      oldSet.size === before.length &&
      newSet.size === after.length &&
      oldIsSubsequence &&
      before.every((member) => newSet.has(member)) &&
      after.length > before.length
    ) {
      for (const member of after) {
        if (!oldSet.has(member)) {
          state.added.push(
            item(
              "enum-added",
              slug,
              `${location} enum member ${JSON.stringify(member)}`,
            ),
          );
        }
      }
      return;
    }
  }
  state.blocked.push(
    item(
      "enum-change",
      slug,
      `${location} enum was removed, narrowed, or reordered`,
    ),
  );
}

export function classifySchema(
  before: SchemaNode,
  after: SchemaNode,
  slug: string,
  location: string,
  state: ClassificationState,
): void {
  if (before.kind !== after.kind) {
    state.blocked.push(
      item(
        "type-change",
        slug,
        `${location} type ${before.kind} -> ${after.kind}`,
      ),
    );
    return;
  }
  if (!same(before.nullable, after.nullable)) {
    state.blocked.push(
      item("nullability-change", slug, `${location} nullability changed`),
    );
  }
  if (before.description !== after.description) {
    state.changed.push(
      item("documentation", slug, `${location} description updated`),
    );
  }

  const common = ["kind", "description", "nullable"];
  switch (before.kind) {
    case "object": {
      const next = after as ObjectNode;
      const oldKeys = Object.keys(before.properties);
      const newKeys = Object.keys(next.properties);
      const oldKeySet = new Set(oldKeys);
      const newKeySet = new Set(newKeys);
      const oldCommon = oldKeys.filter((key) => newKeySet.has(key));
      const newCommon = newKeys.filter((key) => oldKeySet.has(key));
      if (!same(oldCommon, newCommon)) {
        state.blocked.push(
          item(
            "field-order-change",
            slug,
            `${location} existing fields were reordered`,
          ),
        );
      }
      if (!same(before.required, next.required)) {
        state.blocked.push(
          item(
            "requiredness-change",
            slug,
            `${location} required fields changed`,
          ),
        );
      }
      if (before.open !== next.open) {
        state.blocked.push(
          item("openness-change", slug, `${location} openness changed`),
        );
      }
      if (!same(before.mustPopulate, next.mustPopulate)) {
        state.blocked.push(
          item(
            "requiredness-change",
            slug,
            `${location} must-populate fields changed`,
          ),
        );
      }
      for (const key of newKeys) {
        const childLocation = `${location}.${key}`;
        if (!oldKeySet.has(key)) {
          if (next.required.includes(key)) {
            state.blocked.push(
              item(
                "requiredness-change",
                slug,
                `${childLocation} was added as required`,
              ),
            );
          } else {
            state.added.push(
              item(
                "field-added",
                slug,
                `${childLocation} optional field added`,
              ),
            );
          }
        } else {
          classifySchema(
            before.properties[key] as SchemaNode,
            next.properties[key] as SchemaNode,
            slug,
            childLocation,
            state,
          );
        }
      }
      for (const key of oldKeys) {
        if (!newKeySet.has(key)) {
          state.removed.push(
            item("field-removed", slug, `${location}.${key} field removed`),
          );
        }
      }
      unknownChanges(
        before,
        next,
        [...common, "properties", "required", "open", "mustPopulate"],
        slug,
        location,
        state,
      );
      return;
    }
    case "array": {
      const next = after as typeof before;
      if (!same(before.mustPopulate, next.mustPopulate)) {
        state.blocked.push(
          item(
            "requiredness-change",
            slug,
            `${location} must-populate changed`,
          ),
        );
      }
      classifySchema(before.items, next.items, slug, `${location}[]`, state);
      unknownChanges(
        before,
        next,
        [...common, "items", "mustPopulate"],
        slug,
        location,
        state,
      );
      return;
    }
    case "string": {
      const next = after as typeof before;
      classifyEnum(before.enum, next.enum, slug, location, state);
      if (!same(before.default, next.default)) {
        state.blocked.push(
          item("default-change", slug, `${location} default changed`),
        );
      }
      if (!same(before.format, next.format)) {
        state.blocked.push(
          item("format-change", slug, `${location} format changed`),
        );
      }
      unknownChanges(
        before,
        next,
        [...common, "enum", "default", "format"],
        slug,
        location,
        state,
      );
      return;
    }
    case "integer":
    case "number": {
      const next = after as typeof before;
      if (
        !same(before.minimum, next.minimum) ||
        !same(before.maximum, next.maximum)
      ) {
        state.blocked.push(
          item("bound-change", slug, `${location} numeric bounds changed`),
        );
      }
      if (!same(before.default, next.default)) {
        state.blocked.push(
          item("default-change", slug, `${location} default changed`),
        );
      }
      unknownChanges(
        before,
        next,
        [...common, "minimum", "maximum", "default"],
        slug,
        location,
        state,
      );
      return;
    }
    case "boolean": {
      const next = after as typeof before;
      if (!same(before.default, next.default)) {
        state.blocked.push(
          item("default-change", slug, `${location} default changed`),
        );
      }
      unknownChanges(
        before,
        next,
        [...common, "default"],
        slug,
        location,
        state,
      );
      return;
    }
    case "null":
    case "unknown":
      unknownChanges(before, after, common, slug, location, state);
  }
}
