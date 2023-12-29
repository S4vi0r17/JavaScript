const container = document.querySelector('.container');
const result = document.querySelector('#resultado');
const form = document.querySelector('#formulario');

// Window is similar to document, but it is the entire window
window.addEventListener('load', () => {
    form.addEventListener('submit', searchWeather);
});

function searchWeather(evt) {

    evt.preventDefault();

    // Validate
    const city = document.querySelector('#ciudad').value;
    const country = document.querySelector('#pais').value;

    if (city === '' || country === '') {
        // There is an error
        showError('Both fields are required');
        return;
    }

    // console.log(city);
    // console.log(country);

    // Consult API
    queryAPI(city, country);
}

function showError(message) {

    clearHTML();

    const alertExists = document.querySelector('.bg-red-100');

    if (!alertExists) {
        const alert = document.createElement('div');

        alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

        alert.innerHTML = `
        <strong class="font-bold">Error!</strong>
        <span class="block">${message}</span>
        `;

        container.appendChild(alert);

        // Remove alert after 3 seconds
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}

function queryAPI(city, country) {

    // API documentation: https://openweathermap.org/current

    const appID = 'f11b5f24afe37cb76e1a031cb079db58';
    const urlLatLon = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${appID}`;

    Spinner(); // Acá se consulta al servidor

    fetch(urlLatLon)

        .then(response => response.json())
        .then(data => {

            const lat = data[0].lat;
            const lon = data[0].lon;

            const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appID}`;

            fetch(weatherURL)

                .then(weatherResponse => weatherResponse.json())
                .then(weatherData => {

                    clearHTML();
                    showWeather(weatherData);
                })
                .catch(error => console.error('Error fetching weather data:', error));
        })
        .catch(() => showError('City not found'));
}

/*
    No sé si funciona

    function consultarAPI(ciudad, pais) {
        // Consultar la API e imprimir el Resultado...

        // leer la url  y agregar el API key
        const appId = 'f11b5f24afe37cb76e1a031cb079db58';
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

        Spinner();

        // query con fetch api
        fetch(url)
            .then(respuesta => {
                return respuesta.json();
            })
            .then(datos => {
                console.log(datos);
                limpiarHTML();
                if (datos.cod === "404") {
                    mostrarError('Ciudad No Encontrada')
                } else {
                    mostrarClima(datos)
                }
            })
            .catch(error => {
                console.log(error)
            });
    }
*/

function showWeather(data) {

    // console.log(data);
    const { name, main: { temp, temp_max, temp_min } } = data;

    const centigrade = kelvinToCentigrade(temp);
    const max = kelvinToCentigrade(temp_max);
    const min = kelvinToCentigrade(temp_min);

    const cityName = document.createElement('p');
    cityName.textContent = `Weather in: ${name}`;
    cityName.classList.add('font-bold', 'text-2xl');

    const current = document.createElement('p');
    current.innerHTML = `${centigrade.toFixed(2)} &#8451;`;
    current.classList.add('font-bold', 'text-6xl');

    const maxTemp = document.createElement('p');
    maxTemp.innerHTML = `Max: ${max.toFixed(2)} &#8451;`;
    maxTemp.classList.add('text-xl');

    const minTemp = document.createElement('p');
    minTemp.innerHTML = `Min: ${min.toFixed(2)} &#8451;`;
    minTemp.classList.add('text-xl');

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('text-center', 'text-white');
    resultDiv.appendChild(cityName);
    resultDiv.appendChild(current);
    resultDiv.appendChild(maxTemp);
    resultDiv.appendChild(minTemp);

    result.appendChild(resultDiv);
}

// Kelvin to Centigrade
const kelvinToCentigrade = degrees => parseFloat(degrees - 273.15);

// Clean HTML
function clearHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

// Spinner
function Spinner() {

    // https://tobiasahlin.com/spinkit/

    clearHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner');

    result.appendChild(divSpinner);
}