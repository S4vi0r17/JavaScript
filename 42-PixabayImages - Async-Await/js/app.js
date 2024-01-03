// API: https://pixabay.com/api/docs/

/*
    document.addEventListener("DOMContentLoaded", () => {});
    
    window.addEventListener('load', () => {});
    
    window.onload = () => {};

    El segundo y el tercero si, pero la diferencia entre el primero y los ultimos dos es que el primero carga cuando el HTML ha sido totalmente cargado en el navegador y los otros dos cuando la pagina entera se ha cargado; esto quiere decir que despues de cargar todo el CSS, imagenes, plugins, librerias y todo lo que tu pongas, el JS que tu hayas escrito va a ser cargado, por lo que es mas lento.
*/

const form = document.querySelector('#formulario');
const result = document.querySelector('#resultado');
const paginationDiv = document.querySelector('#paginacion');

const imagesPerPage = 40;
let totalPages;
let iterator;
let currentPage;

window.onload = () => {
    form.addEventListener('submit', validateForm);
}

/* Functions */

// Validate form
function validateForm(e) {

    e.preventDefault();

    currentPage = 1;

    const search = document.querySelector('#termino').value;

    if (search === '') {
        showAlert('Add a search term');
        return;
    }

    searchImages();
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
async function searchImages() {

    let search = document.querySelector('#termino').value;

    // Format query
    // let query = term.replace(' ', '+'); // Only replaces the first space
    term = search.replace(/\s/g, '+'); // Replaces all spaces

    const key = '41546446-241404cf665c10e39ef165435';
    const url = `https://pixabay.com/api/?key=${key}&q=${term}&per_page=${imagesPerPage}&page=${currentPage}`;

    Spinner();

    try {
        const response = await fetch(url);
        const result = await response.json();
        totalPages = calculatePages(result.totalHits);
        showImages(result.hits);
    } catch (error) {
        console.log(error);
    }
}

// Show images
function showImages(images) {

    clearHTML();

    images.forEach(image => {

        let { previewURL, likes, views, largeImageURL, webformatURL } = image;

        result.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white card">
                    <img class="w-full" src="${webformatURL}" alt="Image">

                    <div class="p-4">
                        <p class="font-bold">${likes} <span class="font-light">Likes</span></p>
                        <p class="font-bold">${views} <span class="font-light">Views</span></p>

                        <a class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1" href="${largeImageURL}" target="_blank" rel="noopener noreferrer">View HD image</a>
                    </div>
                </div>
            </div>
        `;
    });

    // Clear previous pagination
    while (paginationDiv.firstChild) {
        paginationDiv.removeChild(paginationDiv.firstChild);
    }

    // Generate new pagination
    showPagination();
}

// Show spinner
function Spinner() {

    // https://tobiasahlin.com/spinkit/

    clearHTML();

    const divSpinner = document.createElement('div');
    divSpinner.classList.add('spinner', 'my-16');
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

// Calculate pages
function calculatePages(total) {
    return parseInt(Math.ceil(total / imagesPerPage));
}

// Generator to be able to iterate the next page
function* createPagination(total) {
    for (let i = 1; i <= total; i++) {
        yield i;
    }
}

// Show pagination
function showPagination() {

    iterator = createPagination(totalPages);

    while (true) {

        const { value, done } = iterator.next();

        if (done) return;

        // Create button for each page
        const btn = document.createElement('a');
        btn.href = '#';
        btn.dataset.page = value;
        btn.textContent = value;
        btn.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-4', 'uppercase', 'rounded', 'hover:bg-yellow-500', 'hover:text-gray-700');

        paginationDiv.appendChild(btn);

        btn.onclick = () => {

            currentPage = value;

            searchImages();
        }
    }
}