// en este video estaremos viendo querySelectorAll

// la buena noticia es que la sintaxis para selectores es la misma, es decir similar a CSS, con el punto para las classes y el numeral o signo de gato para los ID's, también puedes añadir un selector especifico..

// Pero la diferencia principal, es que querySelectorAll va a retornar todos los elementos que concuerden con el selector y no va a limitarte al primero como querySelector.


// En nuestro HTML hay muchos cards, cuando utilizamos querySelector vimos que retornaba unicamente el primero, sin embargo con querySelectorAll podemos obtener todos los elementos que concuerden con el selector.

const cards = document.querySelectorAll('.card');
console.log(cards);

// si recuerdas tenemos dos elementos con el id de formulario

const formularios = document.querySelectorAll('#formulario');
console.log(formularios);
// Puedes ver quue eso si funciona, sin embargo recuerda que no rescomendable tener el mismo ID más de una vez por docuemnto...


// Si no hay elementos no va a retornar nada

// Si un selector no existe, no va a retornar nada, no va a retornar un error, simplemente va a retornar un NodeList vacio.
const noExiste = document.querySelectorAll('#no-existe');
console.log(noExiste);

// NodeList: es un tipo de dato que es muy similar a un array, pero no es un array, no tiene todos los metodos que tiene un array, pero si tiene algunos, por ejemplo el de forEach.