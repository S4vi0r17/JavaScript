let perro = {
    nombre: 'Firulais',
    edad: 5,
    raza: 'Rottweiler',
    color: 'Café'
};

console.log(perro.nombre);

let cuaderno = {
    marca: 'Cuaderno',
    tamanio: 'Carta',
    "color de la portada": "Rojo",
    precio: 20.50
};

console.log(cuaderno["color de la portada"]);
console.log(cuaderno["precio"]);

// Otro ejemplo

let resultados = {
    1: 'Juan',
    2: 'Pedro',
    3: 'Pablo'
};

console.log(resultados[1]);
// console.log(resultados.1); Error

// Agregar propiedades a un objeto

let celular = {
    marca: 'Xiaomi',
    modelo: 'Redmi Note 9',
    precio: 3500
};

celular.color = 'Azul';
celular['peso'] = '200 gramos';

console.log(celular);

// Eliminar propiedades de un objeto

delete celular.color;
delete celular['precio'];

console.log(celular);

// Siguiente tema: Objetos para busquedas