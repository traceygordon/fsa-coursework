const API_URL = "https://catfact.ninja/";

const state = {
  fact: {},
  breeds: [],
};

const $catFactContainer = document.getElementById("cat-fact-container");
const $catBreedsContainer = document.getElementById("cat-breeds-container");

//Fetches a random fact from the /fact endpoint
// and updates the fact object in state
//then re-renders the UI
async function getFact() {
  try {
    const promise = await fetch(API_URL + "fact");
    const response = await promise.json();
    state.fact = response.data;
    console.log(response);
  } catch (error) {
    console.error("Something went wrong here...");
  }
}

//Fetches a random fact from the /fact endpoint
// and updates the fact object in state
//then re-renders the UI
async function getBreeds() {
  try {
    const promise = await fetch(API_URL + "breeds");
    const response = await promise.json();
    state.fact = response.data;
    console.log(response);
  } catch (error) {
    console.error("Something went wrong here...");
  }
}
//Adds the HTML elements needed to the DOM
// with data from the javascript state
function render() {
  //TODO:  A button and a <p> element to the catFactContainer
  //TODO:  Divs for each cat breed type, display the Breed, country, coat and pattern
  const catBreedDiv = document.createElement("div");
  const ul = document.getElementById("cat-breeds-container");
  ul.innerHTML = "";
  state.breeds.forEach((breeds) => {
    const breed = document.createElement("li");
    breed.textContent = breeds.breed;
    ul.appendChild(breed);
    const country = document.createElement("li");
    country.textContent = breeds.country;
    ul.appendChild(country);
    const origin = document.createElement("li");
    origin.textContent = breeds.origin;
    ul.appendChild(origin);
    const coat = document.createElement("li");
    coat.textContent = breeds.coat;
    ul.appendChild(coat);
    const pattern = document.createElement("li");
    pattern.textContent = breeds.pattern;
    ul.appendChild(pattern);

    catBreedDiv.append(breed, country, origin, coat, pattern);
    return;
  });


  const button = document.createElement("button");
  button.textContent = "Get Fact";
  
  button.addEventListener("click", async (event) => {
    event.preventDefault();
    const p = document.createElement("p");

    await getFact(p);
  });
  $catFactContainer.append(button);
}
getFact();
getBreeds();
render();
// console.log(catBreedDiv); //running for debugging process
