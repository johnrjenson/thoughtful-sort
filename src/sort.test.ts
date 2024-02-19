import { describe, test } from "node:test";
import assert from "node:assert/strict";
import {sort, Stack, MAX_LENGTH, MAX_MASS} from "./sort";

describe("sort", () => {
  test("should return REJECTED if the package is too heavy and big", () => {
    const result = sort(MAX_LENGTH, MAX_LENGTH, MAX_LENGTH, MAX_MASS + 1);
    assert.equal(result, Stack.REJECTED);
  });

  test("should return REJECTED if the package is too long", () => {
    const result1 = sort(MAX_LENGTH + 1, 10, 10, MAX_MASS);
    assert.equal(result1, Stack.REJECTED);

    const result2 = sort(10, MAX_LENGTH + 1, 10, MAX_MASS);
    assert.equal(result2, Stack.REJECTED);

    const result3 = sort(10, 10, MAX_LENGTH + 1, MAX_MASS);
    assert.equal(result3, Stack.REJECTED);
  });

  test("should return STANDARD if the package is under the weight and size limits", () => {
    const result = sort(10, 10, 10, MAX_MASS);
    assert.equal(result, Stack.STANDARD);
  });

  test("should return SPECIAL if the package is too heavy or too big, but not both", () => {
    const tooHeavy = sort(10, 10, 10, MAX_MASS + 1);
    assert.equal(tooHeavy, Stack.SPECIAL);

    const tooBig = sort(150, 150, 150, MAX_MASS);
    assert.equal(tooBig, Stack.SPECIAL);
  });

  test("should thrown an error when provided values that are zero or negative.", () => {
    assert.throws(()=>sort(-100, 100, 100, MAX_MASS));
    assert.throws(()=>sort(0, 100, 100, MAX_MASS));

    assert.throws(()=>sort(100, -100, 100, MAX_MASS));
    assert.throws(()=>sort(100, 0, 100, MAX_MASS));

    assert.throws(()=>sort(100, 100, -100, MAX_MASS));
    assert.throws(()=>sort(100, 100, 0, MAX_MASS));

    assert.throws(()=>sort(100, 100, 100, -MAX_MASS));
    assert.throws(()=>sort(100, 100, 100, 0));
  });

});