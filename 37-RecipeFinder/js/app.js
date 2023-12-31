// API 1: https://www.themealdb.com/api/json/v1/1/categories.php
// API 2: https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
// API 3: https://themealdb.com/api/json/v1/1/lookup.php?i=52772

/*API 1 is used to get all the categories of food, API 2 is used to get all the foods of a specific category, API 3 is used to get the details of a specific food.*/

// Selectors
const select = document.querySelector("#categorias");
const recipesContainer = document.querySelector("#resultado");
const modal = new bootstrap.Modal('#modal', {}); // Objeto vacion porque no tiene opciones

/* Selectores para favoritos */
const favoritesContainer = document.querySelector(".favoritos");
if (favoritesContainer) { // If para evitar errores en la pagina de favoritos
    fetchFavorites();
}
/* Fin selectores para favoritos */

// Event Listeners
if (select) { // If para evitar errores en la pagina de favoritos
    select.addEventListener("change", getRecipes);
}

// Init App
function init() {
    if (select) { // If para evitar errores en la pagina de favoritos
        fetchCategories();
    }
}

document.addEventListener("DOMContentLoaded", init);

// Function to fetch all the categories of food
function fetchCategories() {
    const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

    fetch(url)

        .then(response => response.json())
        .then(data => appendCategories(data.categories));
}

// Function to append the categories to the select element
function appendCategories(categories) {
    // console.log(categories);
    categories.forEach(category => {
        let option = document.createElement("option");
        option.textContent = category.strCategory;
        option.value = category.strCategory;
        select.appendChild(option);
    });
}

// Function to get the recipes of a specific category
function getRecipes(event) {
    const category = event.target.value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

    fetch(url)

        .then(response => response.json())
        .then(data => appendRecipes(data.meals));
}

// Function to append the recipes to the DOM
function appendRecipes(recipes) {

    cleanHTML(recipesContainer);

    const heading = document.createElement("h2");
    heading.classList.add("text-center", "text-black", "my-5");
    heading.textContent = recipes.length ? "Recipes" : "No results found";
    recipesContainer.appendChild(heading);

    recipes.forEach(recipe => {

        let { idMeal, strMeal, strMealThumb } = recipe;

        let recipeContainer = document.createElement("div");
        recipeContainer.classList.add("col-md-4");

        let recipeCard = document.createElement("div");
        recipeCard.classList.add("card", "mb-4", "shadow-sm");

        let recipeImage = document.createElement("img");
        recipeImage.classList.add("card-img-top");
        recipeImage.src = strMealThumb ?? recipe.image; // ??: Si existe strMealThumb, lo usa, si no, usa recipe.image. Para que no haya conflicto con favorites
        recipeImage.alt = `${strMeal ?? recipe.title} recipe image`; // Favorites

        let recipeBody = document.createElement("div");
        recipeBody.classList.add("card-body");

        let recipeTitle = document.createElement("h3");
        recipeTitle.classList.add("card-title", "mb-3");
        recipeTitle.textContent = strMeal ?? recipe.title; // Favorites

        let recipeButton = document.createElement("button");
        recipeButton.classList.add("btn", "btn-danger", "w-100");
        recipeButton.textContent = "View Recipe";
        // recipeButton.dataset.bsTarget = "#modal";
        // recipeButton.dataset.bsToggle = "modal";
        recipeButton.onclick = () => {
            fetchRecipe(idMeal ?? recipe.id); // Favorites
        };
        // La diferencia entre onclick y addEventListener es que el primero funciona para botones creados dinamicamente y el segundo no

        // Append the elements to the DOM
        recipeBody.appendChild(recipeTitle);
        recipeBody.appendChild(recipeButton);

        recipeCard.appendChild(recipeImage);
        recipeCard.appendChild(recipeBody);

        recipeContainer.appendChild(recipeCard);

        recipesContainer.appendChild(recipeContainer);
    });
}

// Function to show the recipe modal
const fetchRecipe = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    fetch(url)

        .then(response => response.json())
        .then(data => showRecipeModal(data.meals[0]));
};

// Function to show the recipe modal
function showRecipeModal(recipe) {

    cleanHTML(document.querySelector(".modal-body"));

    const { idMeal, strMeal, strMealThumb, strInstructions } = recipe

    // Add content to modal
    const modalTitle = document.querySelector(".modal .modal-title");
    const modalBody = document.querySelector(".modal .modal-body");

    // Image of the recipe
    const recipeImage = document.createElement("img");
    recipeImage.classList.add("img-fluid", "mb-3");
    recipeImage.src = strMealThumb;
    recipeImage.alt = `${strMeal} image`;

    // Show quantity of ingredients
    const titleIngredients = document.createElement("h3");
    titleIngredients.textContent = "Ingredients:";

    const groupList = document.createElement("ul");
    groupList.classList.add("list-group", "mt-4");

    for (let i = 1; i <= 20; i++) {
        if (recipe[`strIngredient${i}`]) {
            const ingredient = document.createElement("li");
            ingredient.classList.add("list-group-item");
            ingredient.textContent = `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`;
            groupList.appendChild(ingredient);
        }
    }

    // Instructions of the recipe
    const titleInstructions = document.createElement("h3");
    titleInstructions.classList.add("mt-4");
    titleInstructions.textContent = "Instructions:";

    const instructions = document.createElement("p");
    instructions.textContent = strInstructions;

    modalTitle.textContent = strMeal;
    modalBody.appendChild(recipeImage);
    modalBody.appendChild(titleIngredients);
    modalBody.appendChild(groupList);
    modalBody.appendChild(titleInstructions);
    modalBody.appendChild(instructions);


    // Footer
    cleanHTML(document.querySelector(".modal-footer"));
    const modalFooter = document.querySelector(".modal .modal-footer");

    // Button to add favorite and close modal
    const btnFavorite = document.createElement("button");
    btnFavorite.classList.add("btn", "btn-outline-danger");
    btnFavorite.textContent = isFavorite(idMeal) ? "Remove from Favorites" : "Add to Favorites";

    // Add to local storage
    btnFavorite.onclick = () => {

        if (isFavorite(idMeal)) {
            deleteFromLocalStorage(idMeal);
            btnFavorite.textContent = "Add to Favorites";
            btnFavorite.classList.remove("btn-danger");
            btnFavorite.classList.add("btn-outline-danger");
            // Si lo eliminamos, podemos añaadirlo
            showToast("Recipe removed from favorites");
            return;
        }

        addToLocalStorage({
            id: idMeal,
            title: strMeal,
            image: strMealThumb
        });

        btnFavorite.textContent = "Remove from Favorites";
        btnFavorite.classList.remove("btn-outline-danger");
        btnFavorite.classList.add("btn-danger");
        // Si lo añadimos, podemos eliminarlo
        showToast("Recipe added to favorites");
    };

    const btnClose = document.createElement("button");
    btnClose.classList.add("btn", "btn-danger");
    btnClose.dataset.bsDismiss = "modal";
    btnClose.textContent = "Close";
    // btnClose.onclick = () => {
    //     modal.hide();
    // };

    modalFooter.appendChild(btnFavorite);
    modalFooter.appendChild(btnClose);

    modal.show()
}

// Clean the previous recipes
function cleanHTML(selector) {
    while (selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}

// Add to local storage
addToLocalStorage = recipe => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    localStorage.setItem("favorites", JSON.stringify([...favorites, recipe]));

    // Para que se actualice la pagina de favoritos
    if (favoritesContainer) {
        const newFavorites = JSON.parse(localStorage.getItem("favorites"));

        // cleanHTML(favoritesContainer);
        appendRecipes(newFavorites);
        // fetchFavorites(); // No lo he probado
    }
}

// Check if the recipe is already in local storage
function isFavorite(id) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some(favorite => favorite.id === id);
}

// Delete from local storage
function deleteFromLocalStorage(id) {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const newFavorites = favorites.filter(favorite => favorite.id !== id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    // Para que se actualice la pagina de favoritos
    if (favoritesContainer) {
        const newFavorites = JSON.parse(localStorage.getItem("favorites"));

        // cleanHTML(favoritesContainer);
        appendRecipes(newFavorites);
        // fetchFavorites(); // Tambien funciona
    }
}

// Show toast
function showToast(message) {
    const toastDiv = document.querySelector("#toast");
    const toastBody = document.querySelector(".toast-body");
    const toast = new bootstrap.Toast(toastDiv);

    toastBody.textContent = message;
    toast.show();
}

/* Selectores para favoritos */
function fetchFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favorites.length) {
        appendRecipes(favorites);
        return
    }

    const noFavorites = document.createElement("p");
    noFavorites.classList.add("text-center", "mt-5", "fs-4", "font-bold");
    noFavorites.textContent = "There are no favorites yet";

    favoritesContainer.appendChild(noFavorites);
}
/* Fin selectores para favoritos */