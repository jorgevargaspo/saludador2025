import sumar from "./sumador.js";
import restar from "./restador.js";
import multiplicar from "./multiplicador.js";
import dividir from "./divisor.js";

document.getElementById("calculadora-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario recargue la página
});

document.getElementById("sumar-button").addEventListener("click", () => calcular("sumar"));
document.getElementById("restar-button").addEventListener("click", () => calcular("restar"));
document.getElementById("multiplicar-button").addEventListener("click", () => calcular("multiplicar"));
document.getElementById("dividir-button").addEventListener("click", () => calcular("dividir"));

function calcular(operacion) {
  const num1 = parseFloat(document.getElementById("primer-numero").value);
  const num2 = parseFloat(document.getElementById("segundo-numero").value);
  let resultado;

  if (isNaN(num1) || isNaN(num2)) {
    resultado = "Por favor, ingrese números válidos.";
  } else {
    switch (operacion) {
      case "sumar":
        resultado = sumar(num1, num2);
        break;
      case "restar":
        resultado = restar(num1, num2);
        break;
      case "multiplicar":
        resultado = multiplicar(num1, num2);
        break;
      case "dividir":
        resultado = dividir(num1, num2);
        break;
      default:
        resultado = "Operación no válida";
    }
  }

  document.getElementById("resultado-div").textContent = `Resultado: ${resultado}`;
}
