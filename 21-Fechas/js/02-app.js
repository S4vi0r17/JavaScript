// MomentJS
const diaHoy = new Date();
moment.locale('es');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a', diaHoy));


console.log(moment().add(3, 'days').calendar());


console.log(moment().format('LLLL', diaHoy))

// Revisar la documentacion de momentjs.com para mas funciones
// https://momentjs.com/docs/