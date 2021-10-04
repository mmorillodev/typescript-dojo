import greet from "./app";

describe("app", () => {
  it("should return 'Hello World!'", () => {
    expect(greet("Matheus")).toBe("Hello Matheus!");
  });
});
