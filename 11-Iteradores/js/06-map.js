// Bueno veamos otros iteradores que existen en JavaScript, previamente ya habiamos visto forEach y Map, vamos a verlos en este video y sus diferencias...

let pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

// Recorrer por un Foreach
pendientes.forEach((pendiente, index) => {
    console.log(`${index} : ${pendiente}`);
});

// Recuerda que como es una sola linea, la llave es opcional...

// Recorrer un arreglo con Map
newArray = pendientes.map((pendiente, index) => {
    return `${index} : ${pendiente}`;
});

// El map devuelve un arreglo basado en el arreglo que se le pasa, en este caso el arreglo pendientes, y lo que hace es crear un nuevo arreglo con los elementos que se le pasan, en este caso el index y el pendiente, y lo que hace es crear un nuevo arreglo con esos elementos, veamoslo en consola...

console.log('newArray');

newArray.forEach((pendiente, index) => {
    console.table(pendiente)
});

// Recorrer arreglo de objetos
const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Disco' }
];

carrito.forEach(producto => {
    console.log(`Agregaste ${producto}`);
});

// Lo mismo aplica para los maps, la sintaxis es la misma, solo recuerda, el map te crea un nuevo arreglo, si solo deseas recorrer los elementos utiliza el Foreach, si requieres crear un nuevo arreglo, sin duda el map sera mejor...