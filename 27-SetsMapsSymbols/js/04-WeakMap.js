// Wekmap

let key = { userId: 1 };
let key2 = { userId: 2 };
let weakmap = new WeakMap();

weakmap.set(key, "Alex");
weakmap.has(key); //true
weakmap.get(key); //Alex
weakmap.delete(key); // true
weakmap.get(key); //undefined

console.log(weakmap); //WeakMap { <items unknown> }

weakmap.set(key2, "Vicky");
weakmap.size; //undefined
key2 = undefined;
weakmap.get(key2); //undefined

// WeakMap { { userId: 2 } => 'Vicky' }
console.log(weakmap);