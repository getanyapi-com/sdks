import { execFileSync } from "node:child_process";
import { describe, expect, it } from "vitest";
import { emitPython } from "../src/emit-py.js";
import { int, ir, obj, sku, str } from "./factories.js";

function emit(data: ReturnType<typeof obj>): string {
  return emitPython(
    ir([
      sku({
        slug: "walmart.reviews",
        outputTypeName: "WalmartReviewsData",
        output: { envelope: "found-data", data },
      }),
    ]),
    "out",
  )["platforms/walmart.py"]!;
}

describe("numeric Python output field aliases", () => {
  it("validates Walmart rating keys and round-trips their wire aliases", () => {
    // The live Walmart review schema uses nullable, optional keys "1" through "5".
    const distribution = obj(
      Object.fromEntries(
        ["1", "2", "3", "4", "5"].map((key) => [key, int({ nullable: true })]),
      ),
    );
    const source = emit(
      obj({
        ratingDistribution: distribution,
        reviewsCount: int(),
        itemURL: str(),
        snake_case: str(),
        class: str(),
      }),
    );
    const result = execFileSync(
      process.env.PYTHON ?? "python3",
      [
        "-c",
        `
import ast
import json
import sys
import types
import typing
from pydantic import BaseModel, ConfigDict, Field, ValidationError

tree = ast.parse(sys.stdin.read())
tree.body = [node for node in tree.body if
    (isinstance(node, ast.ImportFrom) and node.module == "__future__") or
    (isinstance(node, ast.ClassDef) and any(
        isinstance(base, ast.Name) and base.id == "BaseModel" for base in node.bases
    ))]
module = types.ModuleType("_numeric_fields_regression")
sys.modules[module.__name__] = module
module.__dict__.update(vars(typing), BaseModel=BaseModel, ConfigDict=ConfigDict, Field=Field)
exec(compile(tree, "emitted.py", "exec"), module.__dict__)
model = module.WalmartReviewsData
model.model_rebuild(_types_namespace=module.__dict__)
wire = {
    "ratingDistribution": {"1": 10, "2": 20, "3": 30, "5": None},
    "reviewsCount": 60, "itemURL": "https://www.walmart.com/ip/1",
    "snake_case": "unchanged", "class": "review",
}
parsed = model.model_validate(wire)
assert parsed.rating_distribution.field_1 == 10
assert parsed.rating_distribution.field_4 is None
assert parsed.rating_distribution.field_5 is None
assert parsed.reviews_count == 60
assert parsed.item_url == wire["itemURL"]
assert parsed.snake_case == "unchanged"
assert parsed.class_ == "review"
assert model.model_validate({"rating_distribution": {"field_1": 10}}).rating_distribution.field_1 == 10
try:
    model.model_validate({"ratingDistribution": {"1": "not an integer"}})
except ValidationError:
    pass
else:
    raise AssertionError("numeric aliases lost their integer validation")
print(json.dumps(parsed.model_dump(by_alias=True, exclude_unset=True)))
`,
      ],
      { input: source, encoding: "utf8" },
    );
    expect(JSON.parse(result)).toEqual({
      ratingDistribution: { "1": 10, "2": 20, "3": 30, "5": null },
      reviewsCount: 60,
      itemURL: "https://www.walmart.com/ip/1",
      snake_case: "unchanged",
      class: "review",
    });
  });

  it("rejects a numeric alias colliding with an existing attribute", () => {
    expect(() => emit(obj({ "1": int(), field_1: int() }))).toThrow(
      /Python output field collision in walmart\.reviews.*"1" and "field_1".*"field_1"/,
    );
  });
});
