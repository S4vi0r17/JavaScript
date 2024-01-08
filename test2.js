const sequence = "AMERICA(PERÚ(Lima,Arequipa,Chimbote,Trujillo,Cajamarca);ARGENTINA(Cordova,Rosario,Mendoza,Tucuman);MÉXICO(Guadalajara,Monterrey,Hidalgo,Yucatan,Jalisco);BRASIL(Sao Paulo,Rio de Janeiro,Porto Alegre,Bahia,Belo Horizonte);COLOMBIA(Bogota,Cali,Barranquilla,Medellín))EUROPA(ESPAÑA(Madrid,Barcelona,Valencia,Sevilla,Granada);FRANCIA(Paris,Marsella,Lyon,Niza,Burdeos);ITALIA(Roma,Florencia,Milan,Verona,Turin);ALEMANIA(Berlin,Munich,Hamburgo,Bonn))ASIA(CHINA(Pekin,Shangai,Canton);JAPÓN(Tokio,Osaka,Yokohama);INDIA(Nueva Delhi,Calcuta,Bombay))";

const tokens = sequence.split(/([();,])/).filter(token => token.trim() !== '');

let result = "<ul>";

let level = 0;

tokens.forEach(token => {
    if (/^\w/.test(token)) {
        if (level === 0) {
            result += `<li>${token}`;
        } else {
            result += `<ul><li>${token}`;
        }
    } else if (token === '(') {
        level++;
    } else if (token === ')') {
        level--;
        result += "</li></ul>".repeat(level > 0 ? 1 : 2);
    } else if (token === ',') {
        // Do nothing for commas
    }
});

result += "</ul>";

document.getElementById("treeView").innerHTML = result;
