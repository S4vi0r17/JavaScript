// const sequence = "AMERICA(PERÚ(Lima,Arequipa,Chimbote,Trujillo,Cajamarca);ARGENTINA(Cordova,Rosario,Mendoza,Tucuman);MÉXICO(Guadalajara,Monterrey,Hidalgo,Yucatan,Jalisco);BRASIL(Sao Paulo,Rio de Janeiro,Porto Alegre,Bahia,Belo Horizonte);COLOMBIA(Bogota,Cali,Barranquilla,Medellín))EUROPA(ESPAÑA(Madrid,Barcelona,Valencia,Sevilla,Granada);FRANCIA(Paris,Marsella,Lyon,Niza,Burdeos);ITALIA(Roma,Florencia,Milan,Verona,Turin);ALEMANIA(Berlin,Munich,Hamburgo,Bonn))ASIA(CHINA(Pekin,Shangai,Canton);JAPÓN(Tokio,Osaka,Yokohama);INDIA(Nueva Delhi,Calcuta,Bombay))";

// const tokens = sequence.split(/([();,])/).filter(token => token.trim() !== '');

// let result = "";
// let level = 0;

// tokens.forEach(token => {

//     console.log(token);

//     if (/^\w/.test(token)) {

//         if (token.startsWith("AMERICA") || token.startsWith("EUROPA") || token.startsWith("ASIA")) {
//             result += `${token}\n`;
//             level = 1;
//         } else {
//             const tabs = '\t'.repeat(level);
//             result += `${tabs}${token}\n`;
//         }

//     } else if (token === ')') {

//         level--;

//     } else if (token === '(') {

//         level++;

//     }
// });

// console.log(result);

const sequence = "AMERICA(PERÚ(Lima,Arequipa,Chimbote,Trujillo,Cajamarca);ARGENTINA(Cordova,Rosario,Mendoza,Tucuman);MÉXICO(Guadalajara,Monterrey,Hidalgo,Yucatan,Jalisco);BRASIL(Sao Paulo,Rio de Janeiro,Porto Alegre,Bahia,Belo Horizonte);COLOMBIA(Bogota,Cali,Barranquilla,Medellín))EUROPA(ESPAÑA(Madrid,Barcelona,Valencia,Sevilla,Granada);FRANCIA(Paris,Marsella,Lyon,Niza,Burdeos);ITALIA(Roma,Florencia,Milan,Verona,Turin);ALEMANIA(Berlin,Munich,Hamburgo,Bonn))ASIA(CHINA(Pekin,Shangai,Canton);JAPÓN(Tokio,Osaka,Yokohama);INDIA(Nueva Delhi,Calcuta,Bombay))";

const tokens = sequence.split(/([();,])/).filter(token => token.trim() !== '');

let result = "";
let level = 0;

tokens.forEach(token => {

    console.log(token);

    if (/^\w/.test(token)) {

        const tabs = '\t'.repeat(level);
        result += `${tabs}${token}\n`;

    } else if (token === '(') {

        level++;

    } else if (token === ')') {

        level--;
        
    }
});

console.log(result);
