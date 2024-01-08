// Event Loop

// El Código en JavaScript es como se dice, de un solo hilo, es decir, se ejecuta una linea, solo sucede una cosa a la vez y  cada que se va completando una, se manda llamar la otra, eso es el loop de eventos, piensa en el, como un while, que va ejecutando tareas mientras haya tareas disponibles.

// Un ejemplo de la vida real seria una fila en el cajero de tu banco, el cajero solamente puede despachar a una persona. Cuando termina con una, entonces pasa a la siguiente. Eso es el Event Loop.

// Pero hay bancos que ofrecen a sus clientes especiales un servicio donde no hacen fila, en JavaScript hay algo similar, hay eventos que tienen más prioridad que otros..

console.log("Primero");

setTimeout(function () {
    console.log("Segundo");
}, 0);

console.log("Tercero");

setTimeout(function () {
    console.log("Cuarto ");
}, 0);

new Promise(function (resolve) {
    resolve("promise")
}).then(console.log);

console.log("Quinto!");

function hola() {
    console.log("Hola");
}

hola();

// El Event Loop esta revisando siempre por funciones que ejecutar, esas funciones pasan al stack, y una vez que se ejecutan, entonces comienza ir al queue y comienza a ejecutar esas funciones...

/* 
    Más información en: 
        https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=119s
        https://developer.mozilla.org/es/docs/Web/JavaScript/Event_loop
*/