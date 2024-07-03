import { add } from "./index";

describe("Addition Function", () => {
  it("should return the sum of two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  it("should return a negative number if the sum is negative", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it("should return 0 if both numbers are 0", () => {
    expect(add(0, 0)).toBe(0);
  });
});
