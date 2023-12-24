// Es una funcion que retorna un Iterador.
// Se indican con un asterisco después de la palabra function

// Generador

function* crearGenerador() {
    // Yiel es nuevo también en ES6 y son los valores que podemos utilziar para iterar...
    yield 1;
    yield 'Eder';
    yield 3 + 3;
    yield true;
}

// Se llaman como funciones normales pero retornan un iterador
let iterador = crearGenerador();

console.log(iterador); // Suspended
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log('done');
console.log(iterador.next().done);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().done);

console.log('----------------------');

// Crear el generador
function* nuevoGenerador(carrito) {
    for (let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

// carrito
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];

// recorrer el iterador
iterador = nuevoGenerador(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());