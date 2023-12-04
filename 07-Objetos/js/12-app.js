// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true,
    mostrarInfo: function () {
        return `El Producto: ${this.nombre} tiene un precio de ${this.precio}`;
    }
}

console.log(producto.mostrarInfo());

// Object Constructor
function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const producto2 = new Producto('Monitor 24 pulgadas', 500);
console.log(producto2);