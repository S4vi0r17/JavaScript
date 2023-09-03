/*
function generarEnteroAleatorio(limiteSuperior) {
    return Math.floor(Math.random() * limiteSuperior);
    // El rango de numeros aleatorios sera de 0 a limiteSuperior - 1
}
    
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
console.log(generarEnteroAleatorio(5));
*/

function generarEnteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 10; i++) {
    console.log(generarEnteroAleatorio(5, 10));
}

// Siguiente tema: Mutar arreglo declarado con const