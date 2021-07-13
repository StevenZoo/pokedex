import { autocomplete } from "../components/Autocomplete";
import { searchBar, suggestions } from "../util/dom-references";
import { loadAutocompleteSuggestions } from "../datastore/AutocompleteStore";
import { loadSearchResults } from "../datastore/SearchStore";
import { renderSearchResult, renderSearchResultError } from "../components/SearchResult";

// Hide drop down menu and remove highlighted items
function hideSuggestions() {
  suggestions.classList.add("no-display");
  autocomplete.highlight(undefined);
}

function showSuggestions() {
  suggestions.classList.remove("no-display");
}

// Handle user navigation via arrow keys
function handleDropdownNavigation(key) {
  showSuggestions();
  if (key === "ArrowUp") {
    autocomplete.highlight(-1);
  } else if (key === "ArrowDown") {
    autocomplete.highlight(1);
  }
}

// Submit a search query and close the dropdown menu
function search(query) {
  if (query === undefined) {
    query = autocomplete.getHighlightedSuggestion() || searchBar.value;
  }
  searchBar.value = query;
  hideSuggestions();
  loadSearchResults(query)
    .then((data) => {
      renderSearchResult(data);
    })
    .catch((err) => {
      console.log(err);
      renderSearchResultError();
      autocomplete.render([]);
    });
}

// Update autocomplete suggestions as user types
searchBar.addEventListener("input", () => {
  showSuggestions();
  loadAutocompleteSuggestions(searchBar.value).then((data) => autocomplete.render(data));
});

searchBar.addEventListener("focus", () => {
  showSuggestions();
  loadAutocompleteSuggestions(searchBar.value);
});

// Search for the item that was clicked on.
suggestions.addEventListener("click", function (e) {
  if (e.target && e.target.matches("li")) {
    let name = e.target.textContent;
    search(name);
  }
});

export { search, hideSuggestions, showSuggestions, handleDropdownNavigation };
