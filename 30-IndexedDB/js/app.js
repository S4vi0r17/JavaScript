let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 3000);
});

function crmDB() {
    // crear base de datos con la versión 1
    let crmDB = window.indexedDB.open('crm', 1.1);

    // si hay un error, lanzarlo
    crmDB.onerror = function () {
        console.log('Hubo un error');
    };

    // si todo esta bien, asignar a database el resultado
    crmDB.onsuccess = function () {
        // console.log('todo listo!');

        // guardamos el resultado
        DB = crmDB.result;

        console.log(DB);
    };

    // este método solo corre una vez
    // onupgradeneeded se usa para crear el schema de la base de datos
    crmDB.onupgradeneeded = function (e) {
        // el evento que se va a correr tomamos la base de datos
        let db = e.target.result;

        // definir el objectstore, primer parametro el nombre de la BD, segundo las opciones
        // keypath es de donde se van a obtener los indices
        let objectStore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true,
        });

        //createindex, nombre y keypath, 3ro los parametros, keypath esn este caso sera el indice para poder realizar busquedas
        objectStore.createIndex('nombre', 'nombre', { unique: false });
        objectStore.createIndex('email', 'email', { unique: true });
        objectStore.createIndex('telefono', 'telefono', { unique: false });

        console.log('DB creada y lista');
    };
}

function crearCliente() {
    // Crear un nuevo registro

    let transaction = DB.transaction(['crm'], 'readwrite'); // otros: readonly, readwrite, versionchange
    transaction.oncomplete = function (event) {
        console.log('Transacción Completada');
    };

    transaction.onerror = function (event) {
        console.log('Hubo un error en la transacción');
    };

    console.log('--obejctStore--');
    let objectStore = transaction.objectStore('crm');
    console.log(objectStore);

    const nuevoCliente = {
        nombre: 'Eder',
        email: 'correo@correo.com',
        telefono: 987654321,
    };

    console.log('--peticion--');
    let peticion = objectStore.add(nuevoCliente);

    // otros: add, put, delete, get
    /*
        add: agrega un nuevo registro
        put: actualiza un registro
        delete: elimina un registro
        get: obtiene un registro
    */

    console.log(peticion);
}
