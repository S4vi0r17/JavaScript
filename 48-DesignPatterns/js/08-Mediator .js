
// Un intermediario es un design pattern que se comunica con distintos objetos a la vez...
// el mediator define objetos ya localizados para objetivos especificos,

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {

    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`);
    },

    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }

}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {

    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }

}

function Subasta(id) {

    let compradores = {};

    return {

        registrar: usuario => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = id;
        }

    }

}

const eder = new Comprador('Eder');
const pablo = new Comprador('pablo');
const vendedor = new Vendedor('Vendedor de Autos...');
const subasta = new Subasta(Date.now());

subasta.registrar(eder);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 1966', 300);
eder.oferta(300, eder);
pablo.oferta(400, pablo); // Comentar... y no se podrá ver la oferta porque no fue registrado...
vendedor.vendido('Pablo');