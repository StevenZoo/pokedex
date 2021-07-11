import { getSearchResult, getSuggestions } from "./api";
import { Type, AutocompleteSuggestion } from "./dom-util";

function hideSuggestions() {
  suggestions.classList.add("hide");
}

function showSuggestions() {
  suggestions.classList.remove("hide");
}

function renderSuggestions() {
  showSuggestions();
  getSuggestions(searchBar.value).then((json) => {
    let newSuggestions = json.map(AutocompleteSuggestion);

    suggestions.replaceChildren(...newSuggestions);
  });
}

function renderSearchResult(query) {
  getSearchResult(query).then((json) => {
    description.innerText = json.description;
    nameElement.innerText = json.name;
    pokemonId.innerText = `#${String(json.id).padStart(3, "0")}`;
    pokemonPicture.setAttribute("src", `artwork/${json.id}.png`);

    const types = json.type.map(Type);
    typesElement.replaceChildren(...types);
  });
}

const pokemonId = document.getElementById("pokemon-id");
const suggestions = document.getElementById("suggestions");
const searchBar = document.getElementById("search-bar");
const pageWrapper = document.getElementById("page-wrapper");
const description = document.getElementById("description");
const nameElement = document.getElementById("name");
const typesElement = document.getElementById("types");
const pokemonPicture = document.getElementById("pokemon-picture");

searchBar.addEventListener("input", renderSuggestions);
searchBar.addEventListener("focus", () => {
  showSuggestions();
});

searchBar.addEventListener("click", (e) => {
  e.stopPropagation();
  showSuggestions();
});

pageWrapper.addEventListener("click", (e) => {
  hideSuggestions();
});

suggestions.addEventListener("click", function (e) {
  if (e.target && e.target.matches("li")) {
    let name = e.target.textContent;
    searchBar.value = name;
    renderSearchResult(name);
    hideSuggestions();
  }
});
