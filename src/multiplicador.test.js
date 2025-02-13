import multiplicar from "./multiplicador.js";

describe("Multiplicar", () => {
  it("debería multiplicar dos números", () => {
    expect(multiplicar(3, 2)).toBe(6);
  });

  it("debería multiplicar por cero", () => {
    expect(multiplicar(5, 0)).toBe(0);
  });

  it("debería multiplicar números negativos", () => {
    expect(multiplicar(-3, 2)).toBe(-6);
  });
});
