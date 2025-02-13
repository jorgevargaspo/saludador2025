// Función para obtener la hora actual y devolver un saludo según la hora
function obtenerSaludoSegunHora() {
  const horaActual = new Date().getHours(); // Obtiene la hora actual

  if (horaActual >= 5 && horaActual < 12) {
      return "Buenos días";
  } else if (horaActual >= 12 && horaActual < 18) {
      return "Buenas tardes";
  } else {
      return "Buenas noches";
  }
}

// Función para generar el saludo personalizado
function generarSaludo(nombre, edad, genero, idioma) {
  const saludoBase = obtenerSaludoSegunHora();
  let saludoPersonalizado = "";

  // Personalizar el saludo según el idioma
  if (idioma === "Español") {
      saludoPersonalizado = `${saludoBase}, ${nombre}.`;
      if (genero === "masculino") {
          saludoPersonalizado += ` Eres un hombre de ${edad} años.`;
      } else if (genero === "femenino") {
          saludoPersonalizado += ` Eres una mujer de ${edad} años.`;
      } else {
          saludoPersonalizado += ` Tienes ${edad} años.`;
      }
  } else if (idioma === "Ingles") {
      saludoPersonalizado = `${saludoBase === "Buenos días" ? "Good morning" : saludoBase === "Buenas tardes" ? "Good afternoon" : "Good evening"}, ${nombre}.`;
      if (genero === "masculino") {
          saludoPersonalizado += ` You are a ${edad}-year-old man.`;
      } else if (genero === "femenino") {
          saludoPersonalizado += ` You are a ${edad}-year-old woman.`;
      } else {
          saludoPersonalizado += ` You are ${edad} years old.`;
      }
  } else {
      saludoPersonalizado = "Por favor, selecciona un idioma válido.";
  }

  return saludoPersonalizado;
}

// Función para manejar el envío del formulario
function manejarEnvio(event) {
  event.preventDefault(); // Evita que el formulario se envíe

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const genero = document.getElementById("genero").value;
  const idioma = document.getElementById("idioma").value;

  // Validar que todos los campos estén completos
  if (!nombre || !edad || !genero || !idioma) {
      document.getElementById("saludo-div").textContent = "Por favor, completa todos los campos.";
      return;
  }

  // Generar el saludo
  const saludo = generarSaludo(nombre, edad, genero, idioma);

  // Mostrar el saludo en la página
  document.getElementById("saludo-div").textContent = saludo;
}

// Asignar el evento de envío del formulario
document.getElementById("saludo-form").addEventListener("submit", manejarEnvio);