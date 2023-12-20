// Ejemplo de como agregar y eliminar elementos del LocalStorage

localStorage.removeItem('nombre');

// En cuanto a toda la funcionalidad de un CRUD, nos haria falta un update, no hay como tal un Update... lo que podrías hacer es...

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray)
mesesArray.push('nuevo Mes');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray))

// Otra forma de hacerlo es con el método setItem, si el elemento ya existe, lo actualiza, si no existe lo crea.

localStorage.setItem('nombre', 'Juan');
localStorage.setItem('nombre', 'Pablo');

// Si quieres borrar todo el local storage, puedes usar el método clear

localStorage.clear();