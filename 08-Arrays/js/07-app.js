const carrito = [];

const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 500
}

const producto2 = {
    nombre: 'Celular',
    precio: 500
}

carrito.push(producto);
carrito.push(producto2);
const producto3 = {
    nombre: 'Teclado',
    precio: 50
}
carrito.unshift(producto3);

// Veamos como Eliminar elementos de un arreglo... con un objeto solo se utiliza delete, los arreglos también son sencillos de manipular

// Eliminar el primer elemento...
// carrito.shift();

// // Eliminar el ultimo elemento...
// carrito.pop();


// Ahora supongamos que deseas eliminar del centro...
carrito.splice(1, 0);
// carrito.splice(1, 2);
// El primer parametro es el indice donde queremos empezar a borrar, el segundo parametro es cuantos elementos queremos borrar, si no le pasamos nada, va a borrar todos los elementos a partir de ese indice


console.log(carrito);