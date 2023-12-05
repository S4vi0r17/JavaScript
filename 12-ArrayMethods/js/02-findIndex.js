// El Segundo Array Method que quiero mostrarte es findIndex...

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { producto: 'Monitor 20 Pulgadas', precio: 500 },
    { producto: 'Televisión 50 Pulgadas', precio: 700 },
    { producto: 'Tablet', precio: 300 },
    { producto: 'Audifonos', precio: 200 },
    { producto: 'Teclado', precio: 50 },
    { producto: 'Celular', precio: 500 },
    { producto: 'Bocinas', precio: 300 },
    { producto: 'Laptop', precio: 800 },
];

// Primero veamos como seria el ejemplo con un forEach...

meses.forEach((mes, index) => {
    if (mes === 'Abril') { // Si ponemos diciembre no lo va a encontrar...
        console.log(`Encontrado en el indice ${index}`);
    }
});


// FindIndex te dirá el indice es decir la ubicación del elemento en el arreglo...
const indice = meses.findIndex(mes => mes === 'Abril'); // Cambiar a Diciembre, Tendremos -1 eso quiere decir que no lo encontró
console.log(indice);

// En un arreglo de objetos...

const indice2 = carrito.findIndex(producto => producto.precio === 500);
console.log(indice2); // Nos dirá que el indice es 0