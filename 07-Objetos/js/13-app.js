// Object.keys y object.values y entries, estos son más conocidos como iteradores de objetos, nos van a permitir iterar sobre los objetos, y nos van a permitir acceder a las llaves y valores de los objetos, y también a una combinación de ambos, que es entries.

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 30,
    disponible: true
}


console.log(Object.keys(producto));// nos devolverá un arreglo con los keys del objeto
console.log(Object.values(producto)); // nos devolverá un arreglo con los valores del objeto
console.log(Object.entries(producto)); // Entries nos va a retornar una matriz de llaves y valores