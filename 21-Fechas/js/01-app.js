// En javascript hay un objeto llamado Date
const diaHoy = new Date();
let valor;

console.log(diaHoy);

// En este momento
Date.now(); // Milisegundos desde 1970

// Date es Mes, dia y año
let cumple = new Date('7-29-2001');
cumple = new Date('July 29 2001');

console.log(cumple);

// .toString lo cambiaria de object a string

console.log(typeof valor)

// Convertir fecha a string

// cumple.toString();
valor = cumple;

valor = diaHoy.getDate();
valor = diaHoy.getMonth(); // Enero es 0
valor = diaHoy.getDay(); // Domingo es 0
valor = diaHoy.getFullYear();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime(); // Milisegundos desde 1970
valor = diaHoy.setFullYear(2018); // Cambiar año

console.log(valor);