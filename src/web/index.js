import { page, searchBar } from "./util/dom-references";
import { search, hideSuggestions, showSuggestions, handleDropdownNavigation } from "./controller/SearchController";

// Hide dropdown on click
page.addEventListener("click", () => {
  hideSuggestions();
});

// Except when the search bar is clicked. Takes precedence over the event listener above.
searchBar.addEventListener("click", (e) => {
  showSuggestions();
  e.stopPropagation(); // Prevent event bubbling which would trigger closing the dropdown list.
});

// Handles item selection via arrow keys, searching, and hiding the dropdown menu.
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    handleDropdownNavigation(e.key);
  } else if (e.key === "Enter") {
    search();
  } else if (e.key === "Escape") {
    hideSuggestions();
  }
});

// Prevent cursor position from changing
searchBar.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" || e.key === "ArrowUp") {
    e.preventDefault();
  }
});
