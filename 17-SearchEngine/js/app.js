// Variables
const brand = document.querySelector('#marca');
const minPrice = document.querySelector('#minimo');
const maxPrice = document.querySelector('#maximo');
const doors = document.querySelector('#puertas');
const transmission = document.querySelector('#transmision');
const year = document.querySelector('#year'); // Select year

// Result container
const result = document.querySelector('#resultado');

// Generar los años del select
let max = new Date().getFullYear();
let min = max - 10;

// Generar un objeto con la busqueda
const dataSearch = {
    brand: '',
    color: '',
    doors: '',
    max: '',
    min: '',
    transmission: '',
    year: ''
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {

    // Muestra los autos
    showCars(autos);

    // Add years <select>
    fillYears();
});

// Event Listeners for selects
brand.addEventListener('change', e => {
    // console.log(e.target.value);
    dataSearch.brand = e.target.value;

    filter();
});

year.addEventListener('change', e => {
    // console.log(e.target.value);
    dataSearch.year = parseInt(e.target.value);

    filter();
});

minPrice.addEventListener('change', e => {
    // console.log(e.target.value);
    dataSearch.min = parseInt(e.target.value);

    filter();
});

maxPrice.addEventListener('change', e => {
    // console.log(e.target.value);
    dataSearch.max = parseInt(e.target.value);

    filter();
});

doors.addEventListener('change', e => {
    // console.log(e.target.value);
    dataSearch.doors = parseInt(e.target.value);

    filter();
});

transmission.addEventListener('change', e => {
    // console.log(e.target.value);
    dataSearch.transmission = e.target.value;

    filter();
});

color.addEventListener('change', e => {
    // console.log(e.target.value);
    dataSearch.color = e.target.value;
    // console.log(dataSearch);

    filter();
});

// Functions
function showCars(autos) {

    // Elimina el HTML previo
    clearHTML();

    autos.forEach(auto => {
        const carHTML = document.createElement('p');
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;

        carHTML.textContent = `
            ${marca} ${modelo} - ${year} - Puertas: ${puertas} - Transmision: ${transmision} - Precio ${precio} - Color: ${color}
        `;

        // Add to HTML
        result.appendChild(carHTML);
    })
}

// Clear HTML
function clearHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

// Genera los años del select
function fillYears() {
    for (let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option); // Agrega las opciones de año al select
    }
}

// Funcion que filtra en base a la busqueda
function filter() {
    let result = autos.filter(filterBrand).filter(filterYear).filter(filterMin).filter(filterMax).filter(filterDoors).filter(filterTransmission).filter(filterColor);

    console.log(result);

    if (result.length) { // [] != null o undefined
        showCars(result);
    } else {
        noResults();
    }
}

function noResults() {
    clearHTML();

    const noResult = document.createElement('div');
    noResult.classList.add('alerta', 'error');
    noResult.textContent = 'No hay resultados, intenta con otros filtros de búsqueda';
    result.appendChild(noResult);
}

function filterBrand(auto) {
    if (dataSearch.brand) {
        return auto.marca === dataSearch.brand;
    }
    return auto; // Para que no filtre nada
}

function filterYear(auto) {
    if (dataSearch.year) {
        return auto.year === dataSearch.year;
    }
    return auto;
}

function filterMin(auto) {
    if (dataSearch.min) {
        return auto.precio >= dataSearch.min;
    }
    return auto;
}

function filterMax(auto) {
    if (dataSearch.max) {
        return auto.precio <= dataSearch.max;
    }
    return auto;
}

function filterDoors(auto) {
    if (dataSearch.doors) {
        return auto.puertas === dataSearch.doors;
    }
    return auto;
}

function filterTransmission(auto) {
    if (dataSearch.transmission) {
        return auto.transmision === dataSearch.transmission;
    }
    return auto;
}

function filterColor(auto) {
    if (dataSearch.color) {
        return auto.color === dataSearch.color;
    }
    return auto;
}