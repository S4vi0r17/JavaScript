
// Creando un Set
// Un set te permite crear una lista de valores sin duplicados.
// Pocas veces los veo que se utilizan, muchas personas prefieren crear arreglos y evitar duplicados, pero sería más sencillo con un set... de hecho en algunas ocasiones termina siendo mejor opción que un arreglo o un objeto...

let carrito = new Set();

carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');
carrito.add('Camisa'); // No se agrega porque ya existe en el set.

console.log(carrito);
console.log(carrito.size);


// En un arreglo
let numeros = new Set([1, 2, 3, 4, 5, 6, 7, 3, 3, 3, 3]);
console.log(numeros.size);


carrito = new Set();
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');
carrito.add('Disco #3');


// Comprobando que un valor existe en el set.
console.log(carrito.has('Camisa'));

// Eliminando del set
console.log(carrito.delete('Camisa'));
console.log(carrito.has('Camisa'));
console.log(carrito);

// Limpiar un set
carrito.clear();
console.log(carrito);

// Foreach a un set
carrito.forEach(producto => {
    console.log(producto);
})

// Foreach a un set
carrito.forEach((producto, index, pertenece) => {
    console.log(`${index} : ${producto}`); // producto y index son iguales
    console.log(pertenece === carrito); // nombre de la variable
})

// Convertir un set a un arreglo...
const arregloCarrito = [...carrito];
console.log(arregloCarrito);

// Convertir un arreglo a un set
const numeros2 = [10, 20, 30, 40, 50, 10, 20];
const set2 = new Set(numeros2);
console.log('sin duplicados');
console.log(set2);