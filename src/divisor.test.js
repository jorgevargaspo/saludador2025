import dividir from "./divisor.js";

describe("Dividir", () => {
  it("debería dividir dos números", () => {
    expect(dividir(6, 2)).toBe(3);
  });

  it("debería manejar la división por cero", () => {
    expect(dividir(5, 0)).toBe("No se puede dividir por cero");
  });

  it("debería manejar números negativos", () => {
    expect(dividir(-6, 2)).toBe(-3);
  });
});
