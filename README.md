# JavaScript 
## Variables
- Number: Representa números enteros y decimales. Características: positivos, negativos, cero, ±253 precisión.

```js
let num = 10;  
let float = 2.5;
```

- BigInt: Enteros de precisión arbitraria, > ±253. Se indican con n al final. Características: mayor precisión, incompatibles con Number.

```js
const bigNum = 9007199254740991n;  

const otroBigNum = BigInt(9007199254740991);
```

- String: Cadenas de texto entre comillas simples, dobles o backticks. Características: texto, comillas simples y dobles pueden combinarse. 

```js
let string = 'Hola mundo';
let string2 = "JavaScript"; 
let string3 = `Bienvenidos`;
```

- Boolean: Tipo lógico, solo true o false. Características: valores lógicos, evaluar condiciones.

```js
let verdadero = true;
let falso = false; 
``` 

- Null: Referencia no válida a un objeto. Características: valor especial, un posible valor de variable.

```js
let nulo = null;
```

- Undefined: Valor de variables no inicializadas. Características: valor por defecto, variable declarada sin inicializar. 

```js  
let indefinida; //undefined
```

- Symbol: Valores únicos e inmutables. Características: identificadores de propiedades de objetos.

```js
let id = Symbol('id');
```

- Object: Colección de propiedades. Características: key-value, contiene varios tipos de valores.


```js
let objeto = {nombre: "Juan", edad: 20}; 
```

- Array: Estructura indexada y ordenada. Características: similares a objetos, valores ordenados.

```js
let array = [1, "dos", true];
```

## Declarar variables:

- var: Es la forma antigua de declarar variables en JavaScript. Tiene scope de función, se puede redeclarar y reasignar más de una vez.

```js
var variable = 'valor';
```

- let: Introducido en ES6. Permite declarar variables limitando su scope al bloque de código. Sólo se puede declarar una vez.

```js 
let variable = 'valor';
```

- const: También nuevo en ES6. Declara una constante de solo lectura. Debe inicializarse y no se puede reasignar.

```js
const constante = 'valor fijo';
```

Otras diferencias:

- var se eleva (hoisting) pero let y const no.

- let y const solo existen en el scope donde se declaran.

- Se recomienda usar let y const en lugar de var para evitar bugs.

- const se usa para valores que no cambian como constantes matemáticas.

- let se usa para valores que pueden cambiar su estado o reasignarse.

> Se recomienda usar let y const para declarar variables con sus respectivos scopes en lugar de var.

## Secuencias de escape

| Código  | Significado         |
|---------|---------------------|
|    \'   | Comilla simple      |
|    \"   | Comilla doble       |
|    \\   | Barra invertida     |
|    \n   | Nueva línea         |
|    \r   | Retorno de carro    |
|    \t   | Tabulador           |
|    \b   | Retroceso           |


# Tipos de for en JavaScript

## for

El bucle **for** es el más básico y común, que se repite hasta que una condición especificada se evalúe como falsa. Tiene la siguiente sintaxis:

```js
for ( [expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización]) {
  // sentencia
}
```

Donde:

- **expresiónInicial**: Se ejecuta una sola vez antes de iniciar el bucle. Normalmente se usa para declarar e inicializar una variable de control, como `let i = 0`.
- **expresiónCondicional**: Se evalúa antes de cada iteración del bucle. Si se evalúa como verdadera, se ejecuta la sentencia. Si se evalúa como falsa, se termina el bucle. Normalmente se usa para comparar la variable de control con un límite, como `i < 10`.
- **expresiónDeActualización**: Se ejecuta después de cada iteración del bucle. Normalmente se usa para incrementar o decrementar la variable de control, como `i++` o `i--`.
- **sentencia**: Es el código que se ejecuta en cada iteración del bucle. Puede ser una sola sentencia o un bloque de sentencias entre llaves `{}`.

Un ejemplo de uso del bucle for es el siguiente:

```js
// Imprimir los números del 1 al 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

## for...in

El bucle **for...in** es un bucle que itera sobre las propiedades enumerables de un objeto, en orden arbitrario. Tiene la siguiente sintaxis:

```js
for (variable in objeto) {
  // sentencia
}

for (let propiedad in objeto) {
  // código a ejecutar 
}
```

Donde:

- **variable**: Es el nombre de una variable que recibe el nombre de la propiedad actual del objeto en cada iteración.
- **objeto**: Es el objeto cuyas propiedades se van a recorrer.
- **sentencia**: Es el código que se ejecuta en cada iteración del bucle. Puede ser una sola sentencia o un bloque de sentencias entre llaves `{}`.

Un ejemplo de uso del bucle for...in es el siguiente:

```js
// Imprimir las propiedades y valores de un objeto
let persona = {
  nombre: "Juan",
  edad: 25,
  profesion: "programador"
};

for (let propiedad in persona) {
  console.log(propiedad + ": " + persona[propiedad]); 
  // nombre: Juan, edad: 25, profesion: programador
}
```

## for...of

El bucle **for...of** es un bucle que itera sobre los valores de un objeto iterable, como un array, un mapa, un conjunto o una cadena. Tiene la siguiente sintaxis:

```js
for (variable of objeto) {
  // sentencia
}

for (let elemento of iterable) {
  // código a ejecutar
}
```

Donde:

- **variable**: Es el nombre de una variable que recibe el valor del elemento actual del objeto en cada iteración.
- **objeto**: Es el objeto iterable cuyos valores se van a recorrer.
- **sentencia**: Es el código que se ejecuta en cada iteración del bucle. Puede ser una sola sentencia o un bloque de sentencias entre llaves `{}`.

Un ejemplo de uso del bucle for...of es el siguiente:

```js
// Imprimir los elementos de un array
let frutas = ["manzana", "pera", "naranja", "plátano"];

for (let fruta of frutas) {
  console.log(fruta); // manzana, pera, naranja, plátano
}
```

## forEach

El método **forEach** es otro tipo de for en JavaScript, que se usa para recorrer un arreglo y aplicar una función a cada uno de sus elementos. Tiene la siguiente sintaxis:

```js
arreglo.forEach(function (valor, indice, arreglo) {
  // código a ejecutar para cada elemento
});
```

Donde:

- **arreglo**: Es el arreglo que se va a recorrer.
- **function**: Es la función callback que se va a ejecutar para cada elemento del arreglo. Esta función puede tener hasta tres parámetros: el valor del elemento actual, el índice del elemento actual y el arreglo al que pertenece el elemento actual. Estos parámetros son opcionales y se pueden omitir si no se necesitan.
- **valor**: Es el valor del elemento actual del arreglo.
- **indice**: Es el índice del elemento actual del arreglo.
- **arreglo**: Es el arreglo al que pertenece el elemento actual.

Un ejemplo de uso del método forEach es el siguiente:

```js
// Imprimir los elementos de un arreglo y sus índices
let numeros = [10, 20, 30, 40, 50];

numeros.forEach(function (valor, indice) {
  console.log("El valor " + valor + " está en el índice " + indice);
    // El valor 10 está en el índice 0
    // El valor 20 está en el índice 1
    // El valor 30 está en el índice 2
    // El valor 40 está en el índice 3
    // El valor 50 está en el índice 4
});
```

# Destructuración en JavaScript

La destructuración en JavaScript es una sintaxis o forma de escritura que nos permite extraer valores de un array o propiedades de un objeto en secciones más pequeñas. Esta destructuración hace que podamos acceder a elementos específicos de un conjunto más grande por medio de distintas variables. Es decir, podemos extraer datos de arreglos y objetos y asignarlos a variables¹.

La destructuración es una característica nueva de ES6 que nos facilita la escritura de código más limpio y legible². La destructuración se puede aplicar tanto a arreglos como a objetos, y tiene una sintaxis similar, pero con algunas diferencias. Veamos algunos ejemplos de cómo usar la destructuración en JavaScript.

## Destructuración de arreglos

La destructuración de arreglos nos permite asignar variables a los elementos de un arreglo, usando corchetes `[]` en el lado izquierdo de la asignación. Por ejemplo:

```js
// Asignar variables a los elementos de un arreglo
let [a, b, c] = [1, 2, 3];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

Podemos omitir algunos elementos del arreglo usando comas `,` para saltarlos. Por ejemplo:

```js
// Omitir algunos elementos del arreglo
let [a, , c] = [1, 2, 3];
console.log(a); // 1
console.log(c); // 3
```

También podemos usar el operador de propagación `...` para asignar el resto de los elementos del arreglo a una variable. Por ejemplo:

```js
// Asignar el resto de los elementos a una variable
let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // [2, 3, 4, 5]
```

Además, podemos asignar valores por defecto a las variables en caso de que el arreglo tenga menos elementos de los esperados. Por ejemplo:

```js
// Asignar valores por defecto a las variables
let [a = 10, b = 20, c = 30] = [1, 2];
console.log(a); // 1
console.log(b); // 2
console.log(c); // 30
```

La destructuración de arreglos también se puede usar para intercambiar los valores de dos variables sin usar una variable temporal. Por ejemplo:

```js
// Intercambiar los valores de dos variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a); // 2
console.log(b); // 1
```

Otra aplicación de la destructuración de arreglos es para obtener los valores devueltos por una función que retorna un arreglo. Por ejemplo:

```js
// Obtener los valores devueltos por una función
function sumaYResta(a, b) {
  return [a + b, a - b];
}

let [suma, resta] = sumaYResta(5, 3);
console.log(suma); // 8
console.log(resta); // 2
```

## Destructuración de objetos

La destructuración de objetos nos permite asignar variables a las propiedades de un objeto, usando llaves `{}` en el lado izquierdo de la asignación. Por ejemplo:

```js
// Asignar variables a las propiedades de un objeto
let persona = {
  nombre: "Juan",
  edad: 25,
  profesion: "programador"
};

let {nombre, edad, profesion} = persona;
console.log(nombre); // "Juan"
console.log(edad); // 25
console.log(profesion); // "programador"
```

Podemos usar nombres diferentes a los de las propiedades del objeto para las variables, usando el operador `:` para renombrarlas. Por ejemplo:

```js
// Renombrar las variables
let persona = {
  nombre: "Juan",
  edad: 25,
  profesion: "programador"
};

let {nombre: name, edad: age, profesion: job} = persona;
console.log(name); // "Juan"
console.log(age); // 25
console.log(job); // "programador"
```

También podemos usar el operador de propagación `...` para asignar el resto de las propiedades del objeto a una variable. Por ejemplo:

```js
// Asignar el resto de las propiedades a una variable
let persona = {
  nombre: "Juan",
  edad: 25,
  profesion: "programador",
  hobbies: ["leer", "jugar", "programar"]
};

let {nombre, ...resto} = persona;
console.log(nombre); // "Juan"
console.log(resto); // {edad: 25, profesion: "programador", hobbies: ["leer", "jugar", "programar"]}
```

Además, podemos asignar valores por defecto a las variables en caso de que el objeto no tenga la propiedad esperada. Por ejemplo:

```js
// Asignar valores por defecto a las variables
let persona = {
  nombre: "Juan",
  edad: 25
};

let {nombre, profesion = "estudiante"} = persona;
console.log(nombre); // "Juan"
console.log(profesion); // "estudiante"
```

La destructuración de objetos también se puede usar para obtener los valores devueltos por una función que retorna un objeto. Por ejemplo:

```js
// Obtener los valores devueltos por una función
function getDatos() {
  return {
    nombre: "Juan",
    edad: 25,
    profesion: "programador"
  };
}

let {nombre, edad, profesion} = getDatos();
console.log(nombre); // "Juan"
console.log(edad); // 25
console.log(profesion); // "programador"
```

## Objetos 

Para objetos se utilizan llaves `{}` y nombres de variable iguales a las propiedades:

```js
const persona = {nombre: 'Juan', edad: 20};

const {nombre, edad} = persona;

console.log(nombre); // Juan
console.log(edad); // 20
```

También se puede cambiar el nombre de la variable:

```js
const {nombre:nombrePersona} = persona;

console.log(nombrePersona); // Juan
```

Y asignar el resto de propiedades con rest:

```js
const {nombre, ...rest} = persona;

console.log(rest); // {edad: 20}
```

La destructuración es muy útil para desempacar valores de objetos de forma concisa.