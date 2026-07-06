const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const ingredientsList = (ingredients) => {
  return ingredients.map((el) => {
    const elementLi = document.createElement("li");
    elementLi.classList.add("item");
    elementLi.textContent = el;

    return elementLi;
  });
};

list.append(...ingredientsList(ingredients));
