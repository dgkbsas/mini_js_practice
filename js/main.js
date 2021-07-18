//  escuchar el click del boton
const boton = document.getElementById("boton")
boton.addEventListener("click", preguntarNombre) 

// guardamos referencias a los headings
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")


// preguntar y guardar el nombre del usuario
function preguntarNombre() {
    const nombre = prompt("Introduce tu nombre")
    mostrarNombre(nombre)
}

// insertar el nombre donde ahora estan los ...
function mostrarNombre(nombre) {
    h1.textContent = nombre
    h2.textContent = "Hola!"
}