
Prctica: Ingresos de usuario 1

```html
<!DOCTYPE html>
    <head>
        <title>Ingresos de usuario 1</title>
    </head>
    <body>
        <input type="text" id="inputTexto">
        <button onclick="mostrarTexto()">Click aqui</button>
    </body>
</html>
```


Prctica: Ingresos de usuario 2
ingresosUsuario2.js

function mostrarTexto() {
    var texto = document.getElementById("inputTexto").value;
    alert(texto);
}


Prctica: Variables 1

let pelicula = "Pulp Fiction";
let hora = "21:00";

function test() {
    alert("La funcion de " + pelicula + " es a las " + hora);
}


Prctica: Variables 2

let fruta = "manzanas";
let precio = "100";

function test() {
    alert("Las " + fruta + " cuestan $" + precio);
}


Prctica: Tipos de datos 1

let num1 = 15;
let num2 = 16;

let num3 = num1 + num2;


Prctica: Tipos de datos 2

let frutas = ['manzanas', 'bananas', 'naranjas'];

let dato2 = frutas[1];


Prctica: Mostrar ingresos de usuario 1
index.js

function mostrarTexto() {
    var texto = document.getElementById("inputTexto").value;
    document.getElementById("titulo").textContent = texto;
}


Prctica: Mostrar ingresos de usuario 2
index.js

function mostrarTexto() {
    var texto = document.getElementById("inputTexto").value;
    document.getElementById("titulo").textContent = "Mi artista favorito es " + texto;
}


Prctica: Temporizador 1

setTimeout(function() { alert("Se acabo el tiempo") }, 5000);


Prctica: Temporizador 2

setTimeout(function() { alert("Se acabo el tiempo") }, 10000);


Prctica: Audio 1

<!DOCTYPE html>
    <head>
        <title>Audio 1</title>
    </head>
    <body>
        <audio id="audioAlarma">
            <source src="alarma.mp3" type="audio/mpeg">
        </audio>
    </body>
</html>


Prctica: Audio 2
index.js

function test() {
    var audio = document.getElementById('audioAlarma');
    audio.play();
}


Prctica: Fecha y hora 1

function mostrarFecha() {
    var fecha = new Date();
    alert(fecha.toLocaleDateString('es-ES'));
}


Prctica: Fecha y hora 2

setInterval(test, 1000);

function test() {
    console.log("+1 segundo");
}


Recuerda que si tienes alguna duda que an no quede resuelta, tienes a tu disposicin el espacio de Preguntas y Respuestas.

Te veo en el proyecto!