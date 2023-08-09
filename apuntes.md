# JavaScript Variables
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

# Declarar variables:

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