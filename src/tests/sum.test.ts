import sum from "../sum";

describe("sum.ts", () => {
  it("should returns the sum of two numbers", () => {
    expect(sum(100, 50)).toBe(150);
    expect(sum(100, -50)).toBe(50);
    expect(sum(-100, -50)).toBe(-150);
  });
  it("should throw an error if any number is not valid", () => {
    const expectedMessage = "You should pass valid numbers";
    expect(sum(NaN, 100)).toThrow(expectedMessage);
  });
});
