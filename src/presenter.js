// Función para obtener la hora actual y devolver un saludo según la hora
function obtenerSaludoSegunHora() {
  const horaActual = new Date().getHours();
  if (horaActual >= 5 && horaActual < 12) {
    return "Buenos días";
  } else if (horaActual >= 12 && horaActual < 18) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}

// Función para determinar la categoría de edad en español
function obtenerCategoriaEspañol(edad, genero) {
  if (edad <= 12) {
    if (genero === "masculino") return { articulo: "un", termino: "niño" };
    if (genero === "femenino") return { articulo: "una", termino: "niña" };
    return { articulo: "un/a", termino: "niño/a" };
  }
  if (edad <= 17) {
    if (genero === "femenino") return { articulo: "una", termino: "joven" };
    return { articulo: "un", termino: "joven" };
  }
  if (genero === "masculino") return { articulo: "un", termino: "adulto" };
  if (genero === "femenino") return { articulo: "una", termino: "adulta" };
  return { articulo: "un/a", termino: "adulto/a" };
}

// Función para determinar la categoría de edad en inglés
function obtenerCategoriaIngles(edad, genero) {
  if (edad <= 12) {
    if (genero === "masculino") return "boy";
    if (genero === "femenino") return "girl";
    return "child";
  }
  if (edad <= 17) {
    if (genero === "masculino") return "young man";
    if (genero === "femenino") return "young woman";
    return "young person";
  }
  if (genero === "masculino") return "man";
  if (genero === "femenino") return "woman";
  return "adult";
}

// Función para generar el saludo personalizado
function generarSaludo(nombre, edad, genero, idioma) {
  const edadNum = parseInt(edad, 10);
  if (isNaN(edadNum)) {
    return idioma === "Español" 
      ? "Por favor, ingresa una edad válida."
      : "Please enter a valid age.";
  }

  const saludoBase = obtenerSaludoSegunHora();
  let saludoPersonalizado = "";

  if (idioma === "Español") {
    saludoPersonalizado = `${saludoBase}, ${nombre}.`;
    
    if (genero === "masculino" || genero === "femenino") {
      const categoria = obtenerCategoriaEspañol(edadNum, genero);
      saludoPersonalizado += ` Eres ${categoria.articulo} ${categoria.termino} de ${edadNum} años.`;
    } else {
      saludoPersonalizado += ` Tienes ${edadNum} años.`;
    }
  } else if (idioma === "Ingles") {
    const saludoTemporal = saludoBase === "Buenos días" 
      ? "Good morning" 
      : saludoBase === "Buenas tardes" 
        ? "Good afternoon" 
        : "Good evening";
    
    saludoPersonalizado = `${saludoTemporal}, ${nombre}.`;
    
    if (genero === "masculino" || genero === "femenino") {
      const categoria = obtenerCategoriaIngles(edadNum, genero);
      saludoPersonalizado += ` You are a ${edadNum}-year-old ${categoria}.`;
    } else {
      saludoPersonalizado += ` You are ${edadNum} years old.`;
    }
  } else {
    return idioma === "Español" 
      ? "Por favor, selecciona un idioma válido."
      : "Please select a valid language.";
  }

  return saludoPersonalizado;
}

// Función para manejar el envío del formulario
function manejarEnvio(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const genero = document.getElementById("genero").value;
  const idioma = document.getElementById("idioma").value;

  if (!nombre || !edad || !genero || !idioma) {
    document.getElementById("saludo-div").textContent = 
      idioma === "Ingles" 
        ? "Please fill all fields." 
        : "Por favor, completa todos los campos.";
    return;
  }

  const saludo = generarSaludo(nombre, edad, genero, idioma);
  document.getElementById("saludo-div").textContent = saludo;
}

// Asignar el evento de envío del formulario
document.getElementById("saludo-form").addEventListener("submit", manejarEnvio);