import { getSuggestions } from "../api/api";

let autocompleteSequenceNumber = 0;
let autocompleteLatestRead = 0;
const autocompleteCache = {};

function loadAutocompleteSuggestions(query) {
  if (autocompleteCache[query] !== undefined) {
    return Promise.resolve(autocompleteCache[query]);
  }
  let requestId = autocompleteSequenceNumber;
  autocompleteSequenceNumber++;
  return getSuggestions(query).then((data) => {
    autocompleteCache[query] = data;
    if (requestId >= autocompleteLatestRead) {
      autocompleteLatestRead = requestId;
      return data;
    }
  });
}

export { loadAutocompleteSuggestions };
