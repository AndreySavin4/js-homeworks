const categories = document.querySelector("#categories");

const elementsOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.children.length}`);

elementsOfCategories.forEach((el) => {
  const title = el.querySelector("h2").textContent;
  const elementsLength = el.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsLength}`);
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
