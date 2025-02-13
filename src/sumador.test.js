import sumar from "./sumador.js";

describe("Sumar", () => {
  it("debería sumar dos números positivos", () => {
    expect(sumar(3, 2)).toBe(5);
  });

  it("debería sumar números negativos", () => {
    expect(sumar(-3, -2)).toBe(-5);
  });

  it("debería sumar cero correctamente", () => {
    expect(sumar(0, 5)).toBe(5);
  });
});
