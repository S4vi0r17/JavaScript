// API: https://pixabay.com/api/docs/

/*
    document.addEventListener("DOMContentLoaded", () => {});
    
    window.addEventListener('load', () => {});
    
    window.onload = () => {};

    El segundo y el tercero si, pero la diferencia entre el primero y los ultimos dos es que el primero carga cuando el HTML ha sido totalmente cargado en el navegador y los otros dos cuando la pagina entera se ha cargado; esto quiere decir que despues de cargar todo el CSS, imagenes, plugins, librerias y todo lo que tu pongas, el JS que tu hayas escrito va a ser cargado, por lo que es mas lento.
*/

const form = document.querySelector('#formulario');
const result = document.querySelector('#resultado');

window.onload = () => {
    form.addEventListener('submit', validateForm);
}

/* Functions */

// Validate form
function validateForm(e) {
    e.preventDefault();

    const search = document.querySelector('#termino').value;

    if (search === '') {
        showAlert('Add a search term');
        return;
    }

    searchImages(search);
}

// Show alert
function showAlert(message) {

    const alertExists = document.querySelector('.bg-red-100');

    if (!alertExists) {
        const alert = document.createElement('p');

        alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${message}</span>
        `;

        form.appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}

// Search images
function searchImages(term) {

    // Format query
    // let query = term.replace(' ', '+'); // Only replaces the first space
    term = term.replace(/\s/g, '+'); // Replaces all spaces

    const key = '41546446-241404cf665c10e39ef165435';
    const url = `https://pixabay.com/api/?key=${key}&q=${term}&per_page=100`;

    Spinner();

    fetch(url)

        .then(response => response.json())
        .then(result => { showImages(result.hits) });
}

// Show images
function showImages(images) {

    clearHTML();

    images.forEach(image => {
        let { previewURL, likes, views, largeImageURL } = image;

        result.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white card">
                    <img class="w-full" src="${previewURL}" alt="Image">

                    <div class="p-4">
                        <p class="font-bold">${likes} <span class="font-light">Likes</span></p>
                        <p class="font-bold">${views} <span class="font-light">Views</span></p>

                        <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1" href="${largeImageURL}" target="_blank" rel="noopener noreferrer">View HD image</a>
                    </div>
                </div>
            </div>
        `;
    });
}

// Show spinner
function Spinner() {

    // https://tobiasahlin.com/spinkit/

    clearHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner', 'mx-auto', 'mt-16');
    divSpinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `

    result.appendChild(divSpinner);
}

// Clear HTML
function clearHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}