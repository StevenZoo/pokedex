import { getSuggestions } from "../api/api";
import { autocomplete } from "../components/Autocomplete";

let autocompleteSequenceNumber = 0;
let autocompleteLatestRead = 0;
const autocompleteCache = {};

function loadAutocompleteSuggestions(query) {
  if (autocompleteCache[query] !== undefined) {
    autocomplete.render(autocompleteCache[query]);
  }
  let requestId = autocompleteSequenceNumber;
  autocompleteSequenceNumber++;
  getSuggestions(query).then((data) => {
    if (requestId >= autocompleteLatestRead) {
      autocompleteLatestRead = requestId;
      autocomplete.render(data);
    }
    autocompleteCache[query] = data;
  });
}

export { loadAutocompleteSuggestions };
