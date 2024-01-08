class Nodo {
    constructor(nombre) {
        this.nombre = nombre;
        this.hijos = [];
    }
}

function generarArbol(secuencia) {
    const raiz = new Nodo("Raíz");
    const pila = [raiz];
    const tokens = secuencia.split(';');
    
    for (const token of tokens) {
        const [nombrePadre, hijos] = token.split('(');
        const nodoPadre = new Nodo(nombrePadre);
        pila[pila.length - 1].hijos.push(nodoPadre);
        pila.push(nodoPadre);
        
        const subTokens = hijos.slice(0, -1).split(',');
        for (const subToken of subTokens) {
            if (subToken.includes('(')) {
                const [nombre, subHijos] = subToken.split('(');
                const nodo = new Nodo(nombre);
                pila[pila.length - 1].hijos.push(nodo);
                pila.push(nodo);
                
                const subSubTokens = subHijos.split(',');
                for (const subSubToken of subSubTokens) {
                    pila[pila.length - 1].hijos.push(new Nodo(subSubToken));
                }
                
                pila.pop();
            } else {
                pila[pila.length - 1].hijos.push(new Nodo(subToken));
            }
        }
        
        pila.pop();
    }
    
    return raiz;
}

function imprimirArbol(nodo, nivel = 0) {
    if (nodo) {
        let prefix = '■';
        if (nivel > 0) {
            prefix = ' '.repeat(nivel) + '•';
        }
        console.log(prefix + ' ' + nodo.nombre);
        for (const hijo of nodo.hijos) {
            imprimirArbol(hijo, nivel + 5);
        }
    }
}

const secuencia = "AMÉRICA(PERÚ(Lima,Arequipa,Chimbote,Trujillo,Cajamarca);ARGENTINA(Buenos Aires,Cordova,Rosario,Mendoza,Tucuman);MÉXICO(Guadalajara,Monterrey,Hidalgo,Yucatan,Jalisco);BRASIL(Sao Paulo,Rio de Janeiro,Porto Alegre,Bahia,Belo Horizonte);COLOMBIA(Bogota,Cali,Barranquilla,Medellín));EUROPA(ESPAÑA(Madrid,Barcelona,Valencia,Sevilla,Granada);FRANCIA(Paris,Marsella,Lyon,Niza,Burdeos);ITALIA(Roma,Florencia,Milan,Verona,Turín);ALEMANIA(Berlin,Munich,Hamburgo,Bonn));ASIA(CHINA(Pekín,Shangai,Canton);JAPÓN(Tokio,Osaka,Yokohama);IRÁN(Nueva Delhi,Calcuta,Bombay))";
const arbol = generarArbol(secuencia);
imprimirArbol(arbol);
