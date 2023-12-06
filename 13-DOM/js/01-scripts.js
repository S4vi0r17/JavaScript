// 01- Vamos a abrir el capitulo 13-DOM y abrirlo en Live server

// Lo primero que haremos sera crear una carpeta llamada js / y en ella colocar el archivo scripts.js

let elemento;

elemento = document; // Accedemos a todo el documento HTML
elemento = document.all; // Accedemos a todos los elementos del documento HTML
elemento = document.all[0]; // Accedemos al primer elemento del documento HTML
elemento = document.head; // Accedemos a la cabecera del documento HTML
elemento = document.body; // Accedemos al cuerpo del documento HTML
elemento = document.domain; // Accedemos al dominio del documento HTML(localhost)
elemento = document.URL; // Accedemos a la URL del documento HTML
elemento = document.characterSet; // Accedemos al tipo de codificacion del documento HTML
elemento = document.contentType; // Accedemos al tipo de contenido del documento HTML, por ejemplo text/html
elemento = document.forms; // Accedemos a los formularios del documento HTML
elemento = document.forms[0]; // Accedemos al primer formulario del documento HTML
elemento = document.forms[0].id; // Accedemos al id del primer formulario del documento HTML
elemento = document.forms[0].method; // Accedemos al metodo del primer formulario del documento HTML
elemento = document.forms[0].action; // Accedemos a la accion del primer formulario del documento HTML

elemento = document.links; // Accedemos a los enlaces del documento HTML
elemento = document.links[4].id; // Accedemos al id del quinto enlace del documento HTML
elemento = document.links[4].className; // Accedemos a la clase del quinto enlace del documento HTML
elemento = document.forms[4].classList; // Accedemos a la lista de clases del quinto enlace del documento HTML
elemento = document.forms[4].classList[0]; // Accedemos a la primera clase del quinto enlace del documento HTML

elemento = document.images; // Accedemos a las imagenes del documento HTML

elemento = document.scripts; // Accedemos a los scripts del documento HTML
elemento = document.scripts[2].getAttribute('src'); // Accedemos al atributo src del tercer script del documento HTML

console.log(elemento);