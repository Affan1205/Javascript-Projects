const container = document.querySelector(".container");

showFoodRecipe();
function showFoodRecipe() {
  fetchRecipeData();
}

async function fetchRecipeData() {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    renderData(data);
  } catch (err) {
    console.log("An unexpect error occur and will be resolved shortly!!1");
  }
}

function renderData(data) {
  for (let i = 0; i < 8; i++) {
    let random = generateRandomInteger(0, 30);

    // Create Card
    const foodContainer = document.createElement("div");
    foodContainer.className = "food-container";
    container.appendChild(foodContainer);

    // Image
    const image = document.createElement("img");
    image.className = "image";
    image.setAttribute("src", data?.recipes[random]?.image);
    foodContainer.appendChild(image);

    // Name
    const foodName = document.createElement("p");
    foodName.className = "food-name";
    foodName.textContent = `${data?.recipes[random]?.name}`;
    foodContainer.appendChild(foodName);

    // Text Content Wrapper
    const foodContent = document.createElement("div");
    foodContent.className = "food-content";
    foodContainer.appendChild(foodContent);

    // Ingredients
    const foodIngredients = document.createElement("p");
    foodIngredients.className = "food-ingredients";
    foodIngredients.textContent = `${data?.recipes[random]?.ingredients}`;
    foodContent.appendChild(foodIngredients);

    // Instructions
    const foodInstruction = document.createElement("p");
    foodInstruction.className = "food-instructions";
    foodInstruction.textContent = `${data?.recipes[random]?.instructions}`;
    foodContent.appendChild(foodInstruction);
  }
}

function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min));
}
