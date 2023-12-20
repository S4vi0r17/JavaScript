// Local Storage y Session Storage

// Local Storage funciona con una especie de Llave valor...

// Añadir algo a localstorage
localStorage.setItem('nombre', 'Juan');

// Añadir algo a session storage
sessionStorage.setItem('nombre', 'Pablo');

// Local Storage solo soporta strings, no soporta arrays ni objetos pero puedes almacenarlos convirtiendolos a string..

const producto = {
    nombre: 'Monitor 24"',
    precio: 300
}

const productoString = JSON.stringify(producto);
localStorage.setItem('productoJSON', productoString);


// Lo mismo con un array
const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem('meses', JSON.stringify(meses));

// La diferencia entre local storage y session storage es que el primero permanece aunque cerremos el navegador y el segundo se borra al cerrar el navegador.