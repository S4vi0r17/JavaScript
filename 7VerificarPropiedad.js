// Verificaremos si la propiedad existe en el objeto

let miCuaderno = {
    "color": "rojo",
    "marca": "Oxford",
    "precio": 2.5
}

/*
console.log(miCuaderno.hasOwnProperty("color")); // true
console.log(miCuaderno.hasOwnProperty("categoria")); // false
*/


function verificarPropiedad(objeto, propiedad) {
    if(objeto.hasOwnProperty(propiedad)){
        return "La propiedad " + objeto[propiedad] + " existe en el objeto";
    } else {    
        return "La propiedad " + propiedad + " no existe en el objeto";
    }
}

console.log(verificarPropiedad(miCuaderno, "color"));
console.log(verificarPropiedad(miCuaderno, "categoria"));