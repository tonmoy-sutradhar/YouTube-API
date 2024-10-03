// console.log("js file added");
// 1. fetch, load and show categories on html

// create loadCategories
const loadCategories = () => {
  // console.log("loadCategories function load.");
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};

// create displayCategories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  // console.log("loadCategories function load.");
  //add data in html
  // console.log(data);
  categories.forEach((item) => {
    console.log(item);

    // create a button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    // add button to category container ----->>
    categoryContainer.append(button);
  });
};

loadCategories();
