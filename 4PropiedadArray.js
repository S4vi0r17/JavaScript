// Notación de Punto:

const miObjeto1 = {
  miArreglo: [10, 20, 30, 40, 50],
};

// Acceso al segundo elemento (índice 1) del arreglo
const segundoElemento = miObjeto1.miArreglo[1];
console.log(segundoElemento); // Imprimirá 20


// Notación de Corchetes:

const miObjeto2 = {
  'mi arreglo': [10, 20, 30, 40, 50], // Esta propiedad solo funciona con la notacion de corchetes
};

const indice = 2; // Por ejemplo, queremos acceder al tercer elemento (índice 2)
const elementoDeseado = miObjeto2['mi arreglo'][indice];
console.log(elementoDeseado); // Imprimirá 30