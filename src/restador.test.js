import restar from "./restador.js";

describe("Restar", () => {
  it("debería restar dos números", () => {
    expect(restar(5, 3)).toBe(2);
  });

  it("debería restar números negativos", () => {
    expect(restar(-5, -3)).toBe(-2);
  });

  it("debería restar con cero", () => {
    expect(restar(0, 5)).toBe(-5);
  });
});
