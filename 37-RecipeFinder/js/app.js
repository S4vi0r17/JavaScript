// API 1: https://www.themealdb.com/api/json/v1/1/categories.php
// API 2: https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef
// API 3: https://themealdb.com/api/json/v1/1/lookup.php?i=52772

/*API 1 is used to get all the categories of food, API 2 is used to get all the foods of a specific category, API 3 is used to get the details of a specific food.*/

// Selectors
const select = document.querySelector("#categorias");
const recipesContainer = document.querySelector("#resultado");

// Event Listeners
select.addEventListener("change", getRecipes);

// Init App
function init() {
    fetchCategories();
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
        recipeImage.src = strMealThumb;
        recipeImage.alt = `${strMeal} recipe image`;

        let recipeBody = document.createElement("div");
        recipeBody.classList.add("card-body");

        let recipeTitle = document.createElement("h3");
        recipeTitle.classList.add("card-title", "mb-3");
        recipeTitle.textContent = strMeal;

        let recipeButton = document.createElement("button");
        recipeButton.classList.add("btn", "btn-danger", "w-100");
        recipeButton.textContent = "View Recipe";

        // Append the elements to the DOM
        recipeBody.appendChild(recipeTitle);
        recipeBody.appendChild(recipeButton);

        recipeCard.appendChild(recipeImage);
        recipeCard.appendChild(recipeBody);

        recipeContainer.appendChild(recipeCard);

        recipesContainer.appendChild(recipeContainer);
    });
}

// Clean the previous recipes
function cleanHTML(selector) {
    while (selector.firstChild) {
        selector.removeChild(selector.firstChild);
    }
}