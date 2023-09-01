function personaSiguiente(arr, nombre) {
    arr.push(nombre);
    return arr.shift();
}

arr = ["Juan", "Maria", "Pedro", "Susana"];

console.log("Antes: " + JSON.stringify(arr)); // JSON.stringify() convierte un arreglo a una cadena de texto

console.log(personaSiguiente(arr, "Eder"));

console.log("Despues: " + JSON.stringify(arr));

// Siguente tema: Valores Booleanos